import { test, expect } from "@playwright/test";

for (const width of [390, 1440]) {
  test(`pathway pages and navigation at ${width}px`, async ({page}) => {
    await page.setViewportSize({width,height:900});
    for (const route of ["westcliff","higher-education","admission","partners"]) {
      await page.goto("/programs/university-pathway/"+route+"/");
      await expect(page.locator("main h1")).toHaveCount(1);
      for (const image of await page.locator("main img:visible").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(()=>image.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
      if(route==="westcliff"){
        await page.getByRole("tab",{name:/Master in TESOL/}).click();
        await expect(page.getByRole("tabpanel")).toContainText("MATESOL");
        await page.getByRole("tab",{name:/Master in TESOL/}).press("ArrowRight");
        await expect(page.getByRole("tabpanel")).toContainText("MSIT");
      }
      if(route==="partners"){
        await page.getByRole("searchbox").fill("Irvine");
        await page.getByRole("button",{name:"Search programs",exact:true}).click();
        await expect(page.getByRole("status")).toHaveText("1 university listings found");
      }
      await page.screenshot({path:`/tmp/ohla-${route}-${width}.png`,fullPage:true});
    }
  });
}
