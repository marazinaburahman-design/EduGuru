const { test, expect } = require('@playwright/test');

const publicRoutes = [
  '/',
  '/home',
  '/browse',
  '/menu',
  '/auth',
  '/about',
  '/terms',
  '/privacy',
  '/contact',
  '/help-support',
  '/resources',
  '/download-app',
];

async function openRoute(page, path) {
  const response = await page.goto(path, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('main')).toBeVisible();
  return response;
}

test.describe('EduGuru public site audit', () => {
  for (const route of publicRoutes) {
    test(`public route ${route} renders`, async ({ page }) => {
      const response = await openRoute(page, route);
      expect(response.status()).toBe(200);
      await expect(page.locator('body')).not.toBeEmpty();
      if (route === '/') {
        expect(new URL(page.url()).pathname).toMatch(/^\/(menu|home)?$/);
      } else {
        expect(new URL(page.url()).pathname).toBe(route);
      }
    });
  }

  test('course search filters results and handles no matches', async ({ page }) => {
    await openRoute(page, '/browse');
    const search = page.getByPlaceholder('Search courses, people...');

    await search.fill('Complete Quran');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await expect(page.locator('main')).toContainText('Results for "Complete Quran"');
    await expect(page.locator('main')).toContainText('Complete Quran Learning Course');
    await expect(page.locator('main')).toContainText('1 courses');

    await search.fill('no-such-course-qa-92831');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await expect(page.locator('main')).toContainText('Results for "no-such-course-qa-92831"');
    await expect(page.locator('main')).toContainText('No Courses Found');
  });

  test('single-result course count uses singular grammar', async ({ page }) => {
    await openRoute(page, '/browse');
    await page.getByPlaceholder('Search courses, people...').fill('Complete Quran');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await expect(page.locator('main')).toContainText('Complete Quran Learning Course');
    await expect(page.locator('main')).toContainText(/\b1 course\b/);
  });

  test('free-course filter excludes paid courses', async ({ page }) => {
    await openRoute(page, '/browse');
    await page.getByRole('button', { name: 'Filter', exact: true }).click();
    await page.getByText('Free only', { exact: true }).click();

    const displayedCourses = await page.locator('main').evaluate((main) =>
      [...main.querySelectorAll('[onclick]')]
        .filter((element) => element.getAttribute('onclick')?.startsWith("App.navigate('course'"))
        .map((element) => element.innerText),
    );
    expect(displayedCourses.length).toBeGreaterThan(0);
    expect(displayedCourses.every((course) => /\bFREE\b/.test(course))).toBe(true);
  });

  test('course card opens its detail page', async ({ page }) => {
    await openRoute(page, '/browse');
    await page.getByText('Complete Quran Learning Course', { exact: false }).first().click();
    await expect(page).toHaveURL(/course/i);
    await expect(page.locator('main')).toContainText('Complete Quran Learning Course');
  });

  test('registration blocks advancing with required fields empty', async ({ page }) => {
    await openRoute(page, '/auth');
    await page.locator('button[data-wizard-role="student"]').click();
    await page.getByRole('button', { name: 'Next', exact: true }).click();
    await expect(page.locator('main')).toContainText('Enter your full name');
    await expect(page.locator('main')).toContainText('Enter a valid age');
    await expect(page.locator('main')).toContainText('Select your gender');
  });

  test('browser back and forward restore prior routes', async ({ page }) => {
    await openRoute(page, '/home');
    await openRoute(page, '/browse');

    await page.goBack();
    await expect(page).toHaveURL(/\/home$/);
    await page.goForward();
    await expect(page).toHaveURL(/\/browse$/);
  });

  test('dashboard and profile require an account session', async ({ page }) => {
    await openRoute(page, '/courses');
    await expect(page.locator('main')).toContainText('Email or Phone Number');

    await page.goto('/profile', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/auth$/);
    await expect(page.locator('main')).toContainText('Email or Phone Number');
  });

  test('layouts fit mobile, tablet, and desktop viewports', async ({ page }) => {
    for (const viewport of [
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1280, height: 800 },
    ]) {
      await page.setViewportSize(viewport);
      await openRoute(page, '/home');
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
      }));
      expect(
        dimensions.document,
        `horizontal overflow at ${viewport.width}px: ${JSON.stringify(dimensions)}`,
      ).toBeLessThanOrEqual(dimensions.viewport);
    }
  });

  test('visible form fields have accessible names', async ({ page }) => {
    await openRoute(page, '/auth');
    await expect(
      page.getByPlaceholder('email@example.com or phone number'),
      'email/phone sign-in field should have an accessible name',
    ).toHaveAccessibleName(/.+/);
    await expect(
      page.getByPlaceholder('Your password', { exact: true }),
      'password sign-in field should have an accessible name',
    ).toHaveAccessibleName(/.+/);
  });

  test('course search field has an accessible name', async ({ page }) => {
    await openRoute(page, '/browse');
    await expect(
      page.getByPlaceholder('Search courses, people...'),
      'course search should have a programmatic accessible name',
    ).toHaveAccessibleName(/.+/);
  });

  test('navigation items are keyboard operable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await openRoute(page, '/home');
    await expect(page.locator('main')).toContainText('Popular Courses');
    await expect(page.locator('#nav-home')).toBeVisible();
    const navigationItems = await page.locator('#nav-home, #nav-menu, #nav-courses, #nav-profile')
      .evaluateAll((items) => items.map((item) => ({
        name: item.id,
        tag: item.tagName,
        tabIndex: item.tabIndex,
        role: item.getAttribute('role'),
      })));

    expect(navigationItems.length).toBeGreaterThan(0);
    expect(
      navigationItems.filter((item) => !['A', 'BUTTON'].includes(item.tag)
        && item.tabIndex < 0
        && !item.role),
      'navigation items that cannot receive keyboard focus',
    ).toEqual([]);
  });

  test('dismissed offline status is removed from the accessibility tree', async ({ page }) => {
    const courseResponse = page.waitForResponse(
      (response) => response.url().includes('/rest/v1/courses?') && response.status() === 200,
      { timeout: 20_000 },
    );
    await openRoute(page, '/browse');
    await courseResponse;
    await expect(page.locator('main')).toContainText('All Courses');
    await expect(page.locator('main')).toContainText('Complete Quran Learning Course');

    const offlineScreen = page.locator('#offline-screen');
    await expect(offlineScreen).toHaveCSS('opacity', '0');
    await page.screenshot({ path: test.info().outputPath('offline-banner.png'), fullPage: true });
    await expect(offlineScreen).toHaveAttribute('aria-hidden', 'true');
  });

  test('homepage assets load without failed requests or JavaScript errors', async ({ page }) => {
    const errors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(`console: ${message.text()}`);
    });
    page.on('pageerror', (error) => errors.push(`page: ${error.message}`));
    page.on('requestfailed', (request) => errors.push(`request: ${request.url()} (${request.failure()?.errorText})`));
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(`HTTP ${response.status()}: ${response.url()}`);
    });

    await openRoute(page, '/home');
    await expect(page.locator('main')).toContainText('Popular Courses');
    await expect.poll(async () => page.locator('main img').evaluateAll((images) =>
      images.filter((image) => image.complete && image.naturalWidth === 0).length,
    )).toBe(0);
    expect(errors).toEqual([]);
  });
});
