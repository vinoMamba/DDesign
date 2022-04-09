import { HModal } from "@/lib";
import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";

test("Modal", () => {
  const wrapper = mount(HModal, {
    propsData: {
      visible: true,
    },
    slots: {
      title: "title",
    },
  });
  expect(wrapper.find("div").classes()).toMatch(/visible/);
  expect(wrapper.find("header").text()).toContain("title");
  wrapper.find("i").trigger("click");
  expect(wrapper.emitted()).toHaveProperty("update:visible");
  wrapper.findAll("button")[0].trigger("click");
  expect(wrapper.emitted()).toHaveProperty("update:visible");
  wrapper.findAll("button")[1].trigger("click");
  expect(wrapper.emitted()).toHaveProperty("update:visible");
  expect(wrapper.emitted()).toHaveProperty("ok");
});
