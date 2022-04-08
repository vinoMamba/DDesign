import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { HButton } from "../index";

test("HButton", async () => {
  const wrapper = mount(HButton, {
    slots: {
      default: "click me",
    },
  });
  expect(wrapper.text()).toBe("click me");
});
