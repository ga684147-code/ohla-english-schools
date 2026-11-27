import { test, expect } from "@playwright/test";

for (const width of [390, 768, 1440]) {
  test(`student services content and CTAs at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/international-students/student-services/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Beyond the classroom.");
    await page.getByRole("link", { name: "Explore our services" }).click();
    await expect(page).toHaveURL(/#services$/);
    await expect(page.locator("#services li")).toHaveCount(6);
    await expect(page.getByRole("heading", { name: "Support that stays with you" })).toBeInViewport();

    const stages = page.locator("main li").filter({ has: page.locator('img[src*="/services-"]') });
    await expect(stages).toHaveCount(3);
    for (const photo of await page.locator('main img[src*="/services-"]').all()) {
      await photo.scrollIntoViewIfNeeded();
      await expect.poll(() => photo.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    await page.getByRole("link", { name: "Talk to an advisor", exact: false }).click();
    await expect(page).toHaveURL(/\/contact\/?#contact-form$/);
    await expect(page.locator("#contact-form")).toBeAttached();
  });
}
