import {expect, test} from "vitest";
import {mount} from "@vue/test-utils";
import {Index} from "../UserTreeTitle";

test("the title prop have default value", () => {
    const wrapper = mount(Index, {});
    expect(wrapper.text()).toEqual("选择人员");
})
test("can set title prop", () => {
    const wrapper = mount(Index, {
        propsData: {
            title: "test"
        }
    });
    expect(wrapper.text()).toEqual("test");
})
