import {test, describe, expect} from "vitest";
import {mount} from "@vue/test-utils";
import {HInput} from "../../index";

describe("Input", () => {
    test("should be trigger the onInput event when the value changed", async () => {
        const wrapper = await mount(HInput, {
            propsData: {
                value: "",
            }
        });
        await wrapper.find("input").setValue("test");
        expect(wrapper.emitted().input).toBeTruthy();
    })
    test("should be trigger the onChange event when the value changed", async () => {
        const wrapper = await mount(HInput, {
            propsData: {
                value: "",
            }
        });
        await wrapper.find("input").setValue("test");
        expect(wrapper.emitted().change).toBeTruthy();
    })
    test("should the placeholder be set", async () => {
        const wrapper = await mount(HInput, {
            propsData: {
                placeholder: "test",
            }
        });
        expect(wrapper.find("input").attributes("placeholder")).toBe("test");
    })
})
