//In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all true).

let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
  status = "READY";
} else if (isPresent === false) {
  status = "NOT FOUND";
} else if (isPresent === true && isDisplayed === false) {
  status = "HIDDEN";
} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  status = "DISABLED";
}

let severity =
  isPresent === false
    ? "CRITICAL"
    : isDisplayed === false || isEnabled === false
      ? "WARNING"
      : "OK";

let action =
  status === "READY"
    ? "Element is visible and enabled. Ready for interaction."
    : status === "NOT FOUND"
      ? "Element is not present. Check locator and try again."
      : status === "HIDDEN"
        ? "Element is present but not visible. Check CSS properties."
        : "Element is visible but disabled. Wait for enable state or check preconditions.";

console.log(`Status: ${status}, Severity: ${severity}, Action: ${action}`);
