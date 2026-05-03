# Playwright Test Automation Framework

This project is a test automation framework built with Playwright using JavaScript. It covers both API and UI testing in a single, structured setup.

The framework is designed to be simple, maintainable, and scalable, following common industry practices.

## Scope

The project includes:

* API testing using Playwright request
* UI testing using Page Object Model (POM)
* End-to-end test scenarios
* Structured test organization

### Test Distribution

* 14 API test scenarios
* 11 UI test scenarios

---

## Setup

Clone the repository:

```bash
git clone https://github.com/qaselimgencer/playwright-test-automation.git
cd playwright-test-automation
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root directory:

```env
BASE_URL=https://automationexercise.com

USER_NAME=Riza Gencalp
PASSWORD=123456

TEST_EMAIL=rizagencalp@gmail.com
TEST_PASSWORD=123456

APITEST_EMAIL=yasemincak@gmail.com
APITEST_PASSWORD=123456
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run API tests only:

```bash
npx playwright test tests/api
```

Run UI tests only:

```bash
npx playwright test tests/ui
```

Run a specific test:

```bash
npx playwright test -g "Verify Login"
```

---

## Reporting

To open the HTML report:

```bash
npx playwright show-report
```

On failure:

* Screenshots are captured
* Videos are recorded
* Traces are generated

Reports are stored in:

```
playwright-report/
```

---

## Project Structure

```
tests/
  api/        API test cases
  ui/         UI test cases

pages/        Page Object Models

playwright.config.js
```

---

## Notes

The framework combines API and UI testing in a single project to demonstrate a complete testing approach.

Tests are organized for readability and can be extended easily for new scenarios.

---

## Purpose

This project is built for learning, practice, and demonstrating test automation skills using Playwright.
