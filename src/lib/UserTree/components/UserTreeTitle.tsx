import {defineComponent, type PropType} from "vue";
import s from "./style/userTreeTitle.module.css"

export const UserTreeTitle = defineComponent({
    name: "UserTreeTitle",
    props: {
        title: {
            type: String as PropType<String>,
            default: "选择人员",
        }
    },
    setup(props) {
        return () => <h1 class={s}>{props.title}</h1>
    }
})