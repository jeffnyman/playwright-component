import { test, expect } from "@playwright/experimental-ct-vue";
import Count from "./Count.vue";

test.use({ viewport: { width: 500, height: 500 } });

test("titles display a message property", async ({ mount }) => {
  const component = await mount(<Count />);
  await expect(component).toContainText("count is 0");

  await component.click();
  await expect(component).toContainText("count is 1");

  await component.click();
  await expect(component).toContainText("count is 2");
});

