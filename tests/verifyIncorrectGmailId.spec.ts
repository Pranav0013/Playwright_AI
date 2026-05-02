import { test, expect } from "@playwright/test";

test("Transfer Funds", async ({ page }) => {
  await page.goto(
    "https://vwo.com/free-trial/?utm_medium=websitenpxutm_source=login-pagenpxutm_campaign=mof_eg_loginpage",
    {
      waitUntil: "networkidle",
    },
  );

  await page.getByRole("textbox", { name: "Business Email" }).click();
  await page
    .getByRole("textbox", { name: "Business Email" })
    .fill("zzsaaa@gmail.com");
  await page.getByRole("textbox", { name: "Business Email" }).press("Enter");

  await expect(page.getByText("gmail.com doesn't look like a")).toBeVisible();
});
