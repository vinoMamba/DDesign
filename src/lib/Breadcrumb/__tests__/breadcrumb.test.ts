import {test, expect} from "vitest"
import {mount,} from "@vue/test-utils"
import {HBreadcrumb, HBreadcrumbItem} from "@/lib";

test('Breadcrumb accepts a single HBreadcrumbItem as child', () => {
    const wrapper = mount(HBreadcrumb, {
        slots: {
            default: [HBreadcrumbItem]
        }
    })
    expect(wrapper.findComponent(HBreadcrumbItem)).toBeTruthy()
});
test('Breadcrumb accepts multiple HBreadcrumbItem as children', () => {
    const wrapper = mount(HBreadcrumb, {
        slots: {
            default: [HBreadcrumbItem, HBreadcrumbItem, HBreadcrumbItem]
        }
    })
    expect(wrapper.findAllComponents(HBreadcrumbItem).length).toBe(3)
});
test('the last item without the "/" tag', () => {

})