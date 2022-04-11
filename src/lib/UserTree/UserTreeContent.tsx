import {defineComponent} from "vue";
import s from "./style/userTreeContent.module.css"

export const UserTreeContent = defineComponent({
    name: "UserTreeContent",
    setup() {
        return () => (<div class={s.layout}>
            <div class={s.left}>1</div>
            <div class={s.right}>2</div>
        </div>)
    }
})