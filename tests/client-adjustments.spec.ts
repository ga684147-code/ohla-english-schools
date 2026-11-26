import { test, expect } from "@playwright/test";
import { readdirSync } from "node:fs";

const categories = [
  "Programs",
  "Campuses",
  "Youth camps",
  "Study online",
  "Students information",
];
for (const width of [360, 390, 768, 1024, 1200, 1440]) {
  test(`menu, campus map and card layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const header = page.locator("header");
    if (width < 1200)
      await header.getByRole("button", { name: "Open navigation" }).click();
    for (const name of categories) {
      const button = header.getByRole("button", { name, exact: true });
      await button.click({ position: { x: 7, y: 20 } });
      await expect(button).toHaveAttribute("aria-expanded", "true");
      const panel = header.getByRole("region", { name: name + " submenu" });
      await expect(panel.getByRole("link").first()).toBeVisible();
      const arrow = await button.locator("svg").boundingBox();
      expect(arrow).toBeTruthy();
      await page.mouse.click(
        arrow!.x + arrow!.width / 2,
        arrow!.y + arrow!.height / 2,
      );
      await expect(button).toHaveAttribute("aria-expanded", "false");
      await button.press("ArrowDown");
      await expect(panel.getByRole("link").first()).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(button).toBeFocused();
    }
    if (width < 1200) {
      await header
        .getByRole("link", { name: "Contact us", exact: true })
        .click();
      await expect(page).toHaveURL(/\/contact\/$/);
      await expect(
        header.getByRole("button", { name: "Open navigation" }),
      ).toHaveAttribute("aria-expanded", "false");
      await page.goto("/");
    }
    const cards = page.locator("#why-ohla .feature-card");
    await expect(cards).toHaveCount(6);
    const sizes = await cards.evaluateAll((els) =>
      els.map((el) => el.getBoundingClientRect().width),
    );
    sizes
      .slice(0, 4)
      .forEach((w) => expect(Math.abs(w - sizes[0])).toBeLessThan(2));
    sizes.slice(4).forEach((w) => expect(w).toBeGreaterThan(sizes[0] * 1.9));
    const map = page.getByRole("navigation", {
      name: "Campuses on the Florida map",
    });
    for (const [label, slug] of [
      ["Miami Brickell", "miami-brickell"],
      ["Orlando Celebration", "orlando-celebration"],
      ["Tampa", "tampa"],
    ]) {
      const link = map.getByRole("link", { name: label + " campus" });
      await link.scrollIntoViewIfNeeded();
      const rect = await link.boundingBox();
      expect(rect!.width).toBeGreaterThanOrEqual(44);
      expect(rect!.height).toBeGreaterThanOrEqual(44);
      await link.click();
      await expect(page).toHaveURL(new RegExp("/campuses/" + slug + "/$"));
      await page.goBack();
    }
    await page.locator("footer").scrollIntoViewIfNeeded();
    const pos = await header.boundingBox();
    expect(pos!.y).toBeLessThan(20);
    await expect(
      page
        .getByRole("link", { name: "GAP Year", exact: true })
        .filter({ visible: true })
        .last(),
    ).toBeVisible();
    const group = page
      .locator("footer h3")
      .filter({ hasText: "Higher Education" })
      .locator("..");
    await expect(group.getByRole("link", { name: "GAP Year" })).toHaveAttribute(
      "href",
      "/programs/gap-year/",
    );
    await expect(
      page.locator("footer").getByRole("link", { name: "Apply now" }),
    ).toHaveAttribute("href", /\/contact\/?#contact-form/);
  });
}

test("date reveal runs once and reduced motion keeps rows static", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/study-online/pathway/");
  await expect(page.getByText("10 hours per week")).toBeVisible();
  const table = page.getByRole("table", { name: "2026 session dates" });
  await table.evaluate((el) => {
    el.addEventListener("animationstart", () => {
      el.dataset.count = String(Number(el.dataset.count || 0) + 1);
    });
  });
  await table.scrollIntoViewIfNeeded();
  const rows = await table.getByRole("row").count();
  await expect(table).toHaveAttribute("data-count", String(rows));
  await table.evaluate(el => Promise.all(el.getAnimations({subtree: true}).map(animation => animation.finished)).then(() => undefined));
  await table.hover();
  await page.locator("footer").scrollIntoViewIfNeeded();
  await table.scrollIntoViewIfNeeded();
  await expect(table).toHaveAttribute("data-count", String(rows));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(table.locator("tr").first()).toHaveCSS("animation-name", "none");
});

test("calendar, contact controls, tabs, search and program selectors", async ({
  page,
}) => {
  await page.goto("/international-students/calendar-2027/");
  await page.getByLabel("Select a month").selectOption({ label: "December" });
  await expect(page.locator("#selected-month")).toContainText("December");
  await page.goto("/study-online/");
  await page.getByRole("main").getByRole("link", { name: "Apply now" }).click();
  await expect(page).toHaveURL(/\/contact\/?#contact-form$/);
  const form = page.locator("#contact-form");
  await expect(form.locator('iframe[title="OHLA Connect contact form"]')).toHaveAttribute(
    "src", "https://ohlaconnect.com/webform/33",
  );
  await expect(form.getByRole("link", {name: "Open the contact form in a new tab"})).toHaveAttribute(
    "href", "https://ohlaconnect.com/webform/33",
  );
  await page.goto("/blog/");
  await page.locator("#blog-search").fill("zzzzzz");
  await expect(page.getByText("No articles found")).toBeVisible();
  await page.getByRole("button", { name: "Show all articles" }).click();
  expect(await page.locator("#blog-results article").count()).toBeGreaterThan(
    0,
  );
  await page.goto("/");
  await page.getByRole("tab", { name: "France", exact: true }).click();
  await expect(
    page.getByRole("tab", { name: "France", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.goto("/study-online/exam-preparation/");
  await page.locator("label").filter({ hasText: "Tampa" }).click();
  await expect(
    page.getByRole("heading", { name: "Tampa", exact: true }),
  ).toBeVisible();
  await page.goto("/programs/gap-year/");
  await page.locator('label[for="gap-university"]').click();
  await expect(
    page.getByRole("table", { name: /University semester dates/ }),
  ).toBeVisible();
});

const routes = readdirSync("out", { recursive: true, encoding: "utf8" })
  .filter((f) => /(^|\/)index\.html$/.test(f) && !/^(404|_not-found)\//.test(f))
  .map((f) => "/" + f.replace(/index\.html$/, ""));
for (const width of [360, 768, 1440]) {
  test(`all exported pages and footers fit ${width}px`, async ({ page }) => {
    test.setTimeout(150_000);
    await page.setViewportSize({ width, height: 880 });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    for (const route of routes) {
      const response = await page.goto(route, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.status(), route).toBe(200);
      if (route === "/youth-camp/") {
        const cards = page.locator('section[aria-labelledby="why-camp"] li');
        await expect(cards).toHaveCount(5);
        await expect(cards.filter({ hasText: "OHLA Life" })).toHaveCount(0);
      }
      await expect(page.locator("main")).toHaveCount(1);
      await expect(page.locator("footer")).toHaveCount(1);
      await page.evaluate(() => document.fonts.ready);
      const dimensions = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        footer: document.querySelector("footer")!.getBoundingClientRect().width,
      }));
      expect.soft(dimensions.width, route).toBeLessThanOrEqual(width + 1);
      expect.soft(dimensions.footer, route).toBeCloseTo(width, 0);
    }
    expect(errors).toEqual([]);
  });
}

test("touch navigation, mobile animations, video controls and review balloons", async ({
  browser,
}) => {
  const context = await browser.newContext({
    baseURL: "http://127.0.0.1:4175",
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  await page.goto("/");
  const header = page.locator("header");
  await header.getByRole("button", { name: "Open navigation" }).tap();
  const programs = header.getByRole("button", {
    name: "Programs",
    exact: true,
  });
  await programs.tap();
  await expect(programs).toHaveAttribute("aria-expanded", "true");
  await programs.tap();
  await expect(programs).toHaveAttribute("aria-expanded", "false");
  await header.getByRole("button", { name: "Close navigation" }).tap();
  const video = page.locator("main video");
  await video.evaluate(async (el: HTMLVideoElement) => {
    el.muted = true;
    await el.play();
  });
  await expect
    .poll(() => video.evaluate((el: HTMLVideoElement) => el.currentTime))
    .toBeGreaterThan(0);
  await video.evaluate((el: HTMLVideoElement) => el.pause());
  expect(await video.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
  await page.getByRole("button", { name: /Comentar/ }).tap();
  await page.locator("#why-title").tap();
  await page.getByRole("dialog").locator("textarea").fill("QA");
  await page.getByRole("button", { name: "Salvar comentário" }).tap();
  await expect(page.getByRole("button", { name: "Balões (1)" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: "Balões (1)" })).toBeVisible();
  await page.goto("/youth-camp/");
  await expect(page.locator("[data-orbit]")).toHaveCount(1);
  await page.goto("/study-online/");
  await expect(page.locator("[data-cube]")).toHaveCount(1);
  await page.goto("/campuses/miami-brickell/");
  await page.getByRole("link", { name: /^Play / }).first().tap();
  await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/"]')).toHaveCount(1);
  await expect(page.getByRole("link", { name: "Watch on YouTube" })).toBeVisible();
  await context.close();
});

test("native selects accept clicks across the field, and the legacy Apply URL opens the form", async ({
  page,
}) => {
  await page.goto("/apply/");
  await expect(page).toHaveURL(/\/contact\/?#contact-form$/);
  await page.goto("/international-students/calendar-2027/");
  const month = page.getByLabel("Select a month");
  await month.evaluate(el => el.scrollIntoView({ block: "center", behavior: "instant" }));
  const hitTargets = await month.evaluate(el => {
    const box = el.getBoundingClientRect();
    return [box.left + 12, box.right - 12].map(x =>
      document.elementFromPoint(x, box.top + box.height / 2)?.tagName,
    );
  });
  expect(hitTargets).toEqual(["SELECT", "SELECT"]);
});
