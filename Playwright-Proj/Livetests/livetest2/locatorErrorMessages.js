// Normalize Locator Error Messages
// Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, 
// collapses multiple spaces into a single space, and prints a category. 
// Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

// Examples:
// Input:
// rawMessage = " Locator not found after TIMEOUT "
// Output:
// Normalized: locator not found after timeout Category: TIMEOUT
// 💡 Explanation:After normalization, the message contains both "locator" and "timeout", but TIMEOUT takes priority.
