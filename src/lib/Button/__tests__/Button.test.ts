import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { HButton } from "@/lib";

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

test('can set "disabled" prop', async () => {
  const wrapper = mount(HButton, {
    propsData: {
      disabled: true,
    },
  });
  expect(wrapper.classes()).toMatch(/disabled/);
  expect(wrapper.find("button").element.disabled).toBe(true);
  expect(await wrapper.find("button").trigger("click")).toBeFalsy();
});
