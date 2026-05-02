import { test, expect } from "@playwright/test";

test("Transfer Funds", async ({ page }) => {
  await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/", {
    waitUntil: "networkidle",
  });
  await page.getByRole("button", { name: "Sign Up" }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill("John Doe");
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill("you@example.com");
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill("password");
  await page.getByText("Create Account").click();
  await expect(page.getByRole("heading", { name: "$50,000.00" })).toBeVisible();
  await expect(page.getByRole("main")).toContainText("$50,000.00");
  await page.getByRole("button", { name: "Transfer Funds" }).click();
  await page.getByPlaceholder("0.00").click();
  await page.getByPlaceholder("0.00").fill("5000");
  await page.getByPlaceholder("e.g. Rent for October").click();
  await page.getByPlaceholder("e.g. Rent for October").fill("Fees");
  await page.getByText("Continue").click();
  await page.getByText("Confirm Transfer", { exact: true }).click();
  await page.locator('button:has-text("Dashboard")').click();
  await expect(page.getByRole("heading", { name: "$45,000.00" })).toBeVisible();
  await expect(page.getByRole("main")).toContainText("$45,000.00");
});
