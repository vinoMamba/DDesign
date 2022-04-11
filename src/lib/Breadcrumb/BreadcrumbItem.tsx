import {defineComponent} from "vue";


const BreadcrumbItem = defineComponent({
    name: "BreadcrumbItem",
    props: {
        separator: {
            type: String,
            default: ""
        }
    },
    setup(props, {slots}) {
        return () => <span>
            <span>{slots.default?.()}</span>
            {props.separator && <span>{props.separator}</span>}
        </span>
    }
})
export default BreadcrumbItem