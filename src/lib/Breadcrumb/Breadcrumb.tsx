import {defineComponent, onMounted, type PropType} from "vue";
import {HBreadcrumbItem} from "@/lib";

const Breadcrumb = defineComponent({
    name: "Breadcrumb",
    props: {
        separator: {
            type: String as PropType<String>,
            default: "/"
        },
    },
    setup(props, {slots}) {
        onMounted(() => {
            const children = slots.default?.() ?? [];
            children.forEach((child) => {
                if (child.type !== HBreadcrumbItem) {
                    throw new Error("Breadcrumb only accepts HBreadcrumbItem as children");
                }
            });
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                console.log(child);
            }
        });
        return () => <div>
            {slots.default?.()}
        </div>;
    },
});

export default Breadcrumb;
