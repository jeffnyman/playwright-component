import { test, expect } from "@playwright/experimental-ct-vue";
import App from "./App.vue";

test.use({ viewport: { width: 500, height: 500 } });

test("displays title", async ({ mount }) => {
  const component = await mount(App);
  await expect(component).toContainText("Jeff's Vite + Vue + Playwright");
});
