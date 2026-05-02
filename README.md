# Playwright_AI

## Project Overview

This is a Playwright-based automation testing project for learning and demonstrating end-to-end testing of web applications. The project focuses on testing a digital banking application, simulating user interactions such as account creation, fund transfers, and balance verification.

The primary goal of this project is to showcase the capabilities of Playwright for automated testing, including the use of a custom HTML reporter for detailed test reporting with screenshots and step-by-step execution details.

## Features

- **End-to-End Testing**: Automated tests for user workflows in a banking app
- **Custom Reporter**: Enhanced HTML reporting with real-time updates, screenshots, and detailed step breakdowns
- **Screenshot Integration**: Automatic capture of screenshots during test execution for visual verification
- **TypeScript Support**: Written in TypeScript for better code maintainability and type safety
- **Cross-Browser Testing**: Configured for Chromium (Desktop Chrome) with options for other browsers

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository** (if applicable):

   ```bash
   git clone <repository-url>
   cd Playwright_AI
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:

   ```bash
   npx playwright install
   ```

4. **Verify installation**:
   ```bash
   npx playwright --version
   ```

## Project Structure

```
Playwright_AI/
├── customReporter.ts          # Custom HTML reporter implementation
├── package.json               # Project dependencies and scripts
├── playwright.config.ts       # Playwright configuration
├── README.md                  # This file
├── tsconfig.json              # TypeScript configuration
├── tests/                     # Test files directory
│   └── transferFunds.spec.ts  # Main test for fund transfer functionality
├── Playwright-Proj/           # Additional project resources
│   └── Livetests/             # Live test examples
│       └── livetest2/
│           └── locatorErrorMessages.js
├── playwright-report/         # Default Playwright HTML reports
│   └── index.html
├── test-results/              # Test execution results
└── tta-report/                # Custom reporter output directory
    └── report_[timestamp].html
```

## Test Descriptions

### Transfer Funds Test (`tests/transferFunds.spec.ts`)

This test simulates a complete user journey on a digital banking platform:

1. **Navigation**: Visits the banking application homepage
2. **User Registration**: Creates a new account with user details
3. **Balance Verification**: Confirms initial account balance ($50,000.00)
4. **Fund Transfer Initiation**: Starts the transfer process
5. **Transfer Details**: Enters transfer amount ($5,000) and description ("Fees")
6. **Confirmation**: Completes the transfer
7. **Post-Transfer Verification**: Checks updated balance ($45,000.00)

**Test Assertions**:

- Initial balance display
- Successful account creation
- Transfer completion
- Final balance update

**Key Elements Tested**:

- Form inputs (text, email, password)
- Button interactions
- Dynamic content updates
- Balance calculations

## Custom Reporter

The project includes a sophisticated custom HTML reporter (`customReporter.ts`) developed by Pramod Dutta from The Testing Academy.

### Features

- **Real-Time Reporting**: Live updates during test execution
- **Detailed Step Breakdown**: Each test step with timing and status
- **Screenshot Integration**: Automatic screenshots for each major step
- **Error Handling**: Comprehensive error messages and stack traces
- **Performance Metrics**: Duration tracking and pass/fail statistics
- **HTML Output**: Professional-looking reports for sharing and archiving

### Configuration

The custom reporter is configured in `playwright.config.ts`:

```typescript
export default defineConfig({
  // ... other config
  reporter: "./customReporter.ts",
  // ...
});
```

### Report Structure

Generated reports include:

- Test execution summary
- Individual test results
- Step-by-step execution details
- Screenshots for visual verification
- Console logs and error messages
- Performance statistics

## Running Tests

### Run Specific Test

```bash
npx playwright test tests/transferFunds.spec.ts
```

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headless Mode

Modify `playwright.config.ts` to set `headless: true`, then run:

```bash
npx playwright test
```

### View Test Reports

After running tests, view the custom report:

```bash
# Open the latest custom report
open tta-report/report_*.html
```

Or view the default Playwright report:

```bash
npx playwright show-report
```

### Debug Tests

Run tests with debugging:

```bash
npx playwright test --debug
```

Or use codegen to record new tests:

```bash
npx playwright codegen <url>
```

## Configuration Details

### Playwright Configuration (`playwright.config.ts`)

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled (fullyParallel: true)
- **Retries**: 0 for local, 2 for CI
- **Workers**: 1 for CI, undefined for local
- **Browser**: Chromium (Desktop Chrome)
- **Viewport**: 1280x720
- **Timeouts**: 150 seconds for actions
- **Screenshots**: Only on failure (configurable)
- **Videos**: Disabled
- **Traces**: On first retry

### TypeScript Configuration (`tsconfig.json`)

Standard TypeScript setup for Playwright projects with ES modules support.

## Screenshots and Visual Verification

Screenshots are automatically captured during test execution:

- **Default Behavior**: Screenshots taken only on test failures
- **Custom Reporter**: Includes screenshots in HTML reports for each test step
- **Manual Screenshots**: Can be added programmatically in tests using `page.screenshot()`

To enable screenshots for all tests, modify `playwright.config.ts`:

```typescript
use: {
  // ...
  screenshot: "on", // Options: "off", "on", "only-on-failure"
  // ...
}
```

## Troubleshooting

### Common Issues

1. **Browser Installation**: If tests fail with browser errors, run:

   ```bash
   npx playwright install
   ```

2. **Dependencies**: Ensure all dependencies are installed:

   ```bash
   npm install
   ```

3. **Network Issues**: Tests may fail due to network timeouts. Increase timeouts in config if needed.

4. **Element Locators**: If tests fail due to changed UI, update locators in test files.

### Debugging Tips

- Use `page.pause()` in tests for interactive debugging
- Enable traces: `trace: "on"` in config
- Check console logs in custom reports
- Use Playwright Inspector: `npx playwright test --debug`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## License

This project is for educational purposes. Please refer to the original sources for licensing information.

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [The Testing Academy](https://thetestingacademy.com)
- [Playwright GitHub](https://github.com/microsoft/playwright)

## Contact

For questions or feedback, please refer to the project documentation or community resources.
