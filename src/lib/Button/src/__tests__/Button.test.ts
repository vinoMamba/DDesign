import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { HButton } from "@/lib/Button";

test("HButton", () => {
  const wrapper = mount(HButton, {
    propsData: {
      type: "primary",
    },
    slots: {
      default: "click me",
    },
  });
  expect(wrapper.text()).toBe("click me");
  expect(wrapper.classes()).toMatch(/primary/);
});
