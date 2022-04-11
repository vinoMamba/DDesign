import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { HButton } from "@/lib";

test("can set slot", () => {
  const wrapper = mount(HButton, {
    slots: {
      default: "ok",
    },
  });
  expect(wrapper.text()).toBe("ok");
});

test('can set "type" prop', () => {
  const wrapper = mount(HButton, {
    props: {
      type: "primary",
    },
  });
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
