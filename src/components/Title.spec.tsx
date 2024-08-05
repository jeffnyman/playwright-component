import { test, expect } from "@playwright/experimental-ct-vue";
import Title from "./Title.vue";

test.use({ viewport: { width: 500, height: 500 } });

test("titles display a message property", async ({ mount }) => {
  const component = await mount(<Title msg="Custom Title" />);
  await expect(component).toContainText("Custom Title");
});
