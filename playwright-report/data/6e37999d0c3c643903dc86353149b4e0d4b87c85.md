# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eduguru.spec.js >> EduGuru public site audit >> dismissed offline status is removed from the accessibility tree
- Location: tests\eduguru.spec.js:172:3

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('#offline-screen')
Expected: "true"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" locator('#offline-screen') with timeout 5000ms
  - waiting for locator('#offline-screen')
    14 × locator resolved to <div id="offline-screen">…</div>
       - unexpected value "null"

```

```yaml
- img
- img
- text: No Connection You're Offline EduGuru needs internet to load your courses and lessons. Please check your connection and try again.
- button "Try Again":
  - img
  - text: Try Again
- text: EDUGURU
```