# EduGuru Playwright QA Report

**Target:** [https://eduguru.lk](https://eduguru.lk/)  
**Audit date:** 2026-10-28  
**Browser:** Playwright 1.64.1, Chromium  
**Scope:** Public pages and non-destructive interactions only. No account was created, no real sign-in was attempted, and no payment or message was submitted.

## Executive summary

The public site and its main course-discovery flows were usable during this run. The root and footer pages loaded, course search and the free-course filter worked, a course card opened its detail page, and registration validation stopped an empty form from advancing. No horizontal overflow was found at the tested mobile, tablet, or desktop widths.

The final suite ran **25 tests: 22 passed, 3 failed**. The three failures reproduce confirmed issues:

1. A one-result search says **“1 courses”** instead of **“1 course”** (Low).
2. The mobile primary navigation is made of clickable `DIV`s that are absent from the keyboard tab order (Medium).
3. After successful data loading, the offline screen is visually transparent (`opacity: 0`) but is not marked `aria-hidden`, leaving the stale offline message exposed to assistive technology (Low).

No Critical or High severity issue was found. The signed-in portions of the product could not be exercised without credentials.

## Pages and features tested

### Public routes

Each route returned HTTP 200 and rendered the application shell:

`/`, `/home`, `/browse`, `/menu`, `/auth`, `/about`, `/terms`, `/privacy`, `/contact`, `/help-support`, `/resources`, and `/download-app`.

The dashboard route `/courses` displayed the sign-in form. Visiting `/profile` redirected to `/auth`, so authenticated profile/dashboard functionality and logout were not available to test.

### Functional coverage

- Internal navigation and page rendering, course-card navigation, and browser back/forward.
- Course search for a known result and a no-match query.
- Free-only course filtering.
- Student registration flow through the first step; empty required fields produced validation messages and prevented advancement.
- Sign-in form and accessible-name checks; no credentials were submitted.
- Dashboard/profile access gating.
- Menu/footer items and their public destination pages.

### Responsive, visual, and accessibility coverage

- Viewports: **390×844**, **768×1024**, and **1280×800**. No horizontal overflow was detected.
- Course images that loaded had no broken-image state; no overlap or major readability issue was observed in the inspected layouts.
- Keyboard operability of the mobile navigation and accessible-name checks for visible search and sign-in fields.
- Browser console errors, page errors, failed requests, and HTTP error responses on the homepage.

## Test results

| Result | Count | Notes |
|---|---:|---|
| Passed | 22 | Route smoke tests, search/no-results, free filter, course detail, registration validation, history navigation, auth gating, responsive checks, accessible-name checks, and runtime/resource checks |
| Failed | 3 | All three failures correspond to the confirmed issues below |
| Blocked / not completed | — | Authenticated account actions, logout, enrollment/checkout, and payment flows were not attempted |

Run command: `npm.cmd test -- --workers=3`

The reproducible suite is in [tests/eduguru.spec.js](./tests/eduguru.spec.js); Playwright settings are in [playwright.config.js](./playwright.config.js).

## Confirmed findings

### 1. Singular result count uses plural wording

**Severity:** Low  
**Area:** Course search  
**Test:** `single-result course count uses singular grammar`

**Reproduction**

1. Open `/browse`.
2. Search for `Complete Quran`.
3. Inspect the result count above the matching course.

**Expected:** `1 course`  
**Actual:** `1 courses`

**Evidence:** [Failure screenshot](./test-results/eduguru-EduGuru-public-sit-1c3af-count-uses-singular-grammar/test-failed-1.png) · [Playwright trace](./test-results/eduguru-EduGuru-public-sit-1c3af-count-uses-singular-grammar/trace.zip)

**Recommendation:** Use singular wording when the result count is one and plural wording otherwise.

### 2. Primary navigation cannot be reached by keyboard

**Severity:** Medium  
**Area:** Accessibility / navigation  
**Test:** `navigation items are keyboard operable`

**Reproduction**

1. Set the viewport to 390×844 and open `/home`.
2. Use Tab to move through page controls.
3. Inspect `#nav-home`, `#nav-menu`, `#nav-courses`, and `#nav-profile`.

**Expected:** Navigation items are links or buttons, or otherwise have keyboard focus and appropriate semantics; Enter/Space can activate them.  
**Actual:** The items are `DIV` elements with click handlers, no role, and `tabIndex=-1`; they cannot receive keyboard focus.

**Evidence:** [Mobile screenshot](./test-results/eduguru-EduGuru-public-sit-d1c3c-items-are-keyboard-operable/test-failed-1.png) · [Playwright trace](./test-results/eduguru-EduGuru-public-sit-d1c3c-items-are-keyboard-operable/trace.zip)

**Recommendation:** Replace clickable `DIV`s with native buttons/links, or provide equivalent semantics, focusability, and keyboard activation. Apply the same pattern to other clickable card-like elements.

### 3. Dismissed offline message remains exposed to assistive technology

**Severity:** Low  
**Area:** Accessibility / connection status  
**Test:** `dismissed offline status is removed from the accessibility tree`

**Reproduction**

1. Open `/browse` with network access.
2. Wait for the course API response and course content to load successfully.
3. Inspect `#offline-screen`.

**Expected:** Once dismissed, the offline message is hidden from both visual display and the accessibility tree.  
**Actual:** The screen reaches `opacity: 0` and is visually transparent, but has no `aria-hidden="true"` attribute (or equivalent hidden/inert state). The “You’re Offline” content remains in the page/accessibility snapshot despite the successful data load.

**Evidence:** [Loaded-page screenshot](./test-results/eduguru-EduGuru-public-sit-ac474-from-the-accessibility-tree/offline-banner.png) · [Playwright trace](./test-results/eduguru-EduGuru-public-sit-ac474-from-the-accessibility-tree/trace.zip)

**Recommendation:** Remove the dismissed screen from the accessibility tree (for example, with `hidden` or `aria-hidden="true"` once it is dismissed) and ensure the status text reflects the current connection state.

## Console, network, and assets

- **JavaScript console errors:** 0 in the homepage runtime test.
- **Failed requests / HTTP errors:** 0 in the homepage runtime test. Requests inspected during exploration, including course API calls and loaded course images, returned successfully.
- **Console warnings:** Two warnings were observed during manual navigation: `coin-DgP_9Qpz.webp` was preloaded but not used shortly after page load. No functional failure was associated with these warnings.
- **Broken images:** None detected among loaded images during the checks.

## Responsive and accessibility findings

- No horizontal overflow was detected at 390px, 768px, or 1280px widths.
- No major overlapping or layout defects were observed in the inspected pages.
- Search and sign-in fields exposed accessible names in Playwright’s accessibility checks.
- Confirmed accessibility defects are the keyboard-inaccessible navigation and the transparent-but-unhidden offline status described above.

## Not completed / limitations

- No authenticated account was available; actual sign-in, logout, and account-only profile/dashboard content were not tested.
- Registration was tested only through validation of an empty first step. The account-creation flow was not submitted.
- Enrollment, checkout, payment, and message/contact submissions were intentionally not performed.
- The site’s catalog and result counts are live data and may change; the recorded singular/plural issue was reproducible with the course returned during this audit.

## Recommendations summary

1. Use keyboard-operable semantic controls for navigation and clickable cards.
2. Hide dismissed connection-status content from assistive technology.
3. Correct singular/plural grammar for search result counts.
4. Review the unused coin-image preload warning and remove or correctly scope the preload if it is unnecessary.
