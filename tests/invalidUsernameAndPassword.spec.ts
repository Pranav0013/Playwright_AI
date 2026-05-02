import { test, expect } from "@playwright/test";

test("Invalid Username and Password", async ({ page }) => {
  await page.goto("https://app.vwo.com/#/login");
  await page.getByRole("textbox", { name: "Email address" }).click();
  await page
    .getByRole("textbox", { name: "Email address" })
    .fill("testUsername");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("PasswordWrong");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByText("Your email, password, IP")).toBeVisible();
  await expect(page.locator("#js-notification-box-msg")).toContainText(
    "Your email, password, IP address or location did not match",
  );
});
