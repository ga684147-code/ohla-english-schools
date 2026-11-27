import { expect, test } from "@playwright/test";

const courses = ["semi-intensive", "intensive", "general", "academic"];
for (const width of [390, 1440]) {
  test(`English course pages, level diagram and campus fees at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const course of courses) {
      await page.goto(`/programs/english/${course}/`);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(/English/i);
      const main = page.locator("main");
      const zoom = main.getByRole("button", { name: /Click the diagram/ });
      await zoom.click();
      await expect(page.getByRole("dialog")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(zoom).toBeFocused();
      if (course === "general" || course === "academic") {
        const table = main.getByRole("table");
        await expect(table).toContainText("$270");
        await main.locator("fieldset label").nth(1).click();
        await expect(table).toContainText("$250");
        await expect(table).toContainText("$325");
        await main.locator("fieldset label").nth(2).click();
        await expect(table).toContainText("$345");
      } else {
        await expect(main.locator("ol li")).toHaveCount(4);
      }
      for (const image of await main.locator("img:visible").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await main.getByRole("link", { name: /apply now/i }).click();
      await expect(page).toHaveURL(/\/contact\/?#contact-form$/);
    }
  });
}
