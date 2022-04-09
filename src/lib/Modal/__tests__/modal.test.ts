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

test("Modal can modify the buttons name", () => {
  const wrapper = mount(HModal, {
    propsData: {
      okText: "ok",
      cancelText: "cancel",
    },
  });
  expect(wrapper.findAll("button")[1].text()).toContain("ok");
  expect(wrapper.findAll("button")[0].text()).toContain("cancel");
});

test("when use footer slot, the button will be replaced", () => {
  const wrapper = mount(HModal, {
    slots: {
      footer: "<button>footer</button>",
    },
  });
  expect(wrapper.findAll("button").length).toBe(1);
  expect(wrapper.find("button").text()).toContain("footer");
});
