import {defineComponent, ref} from "vue";
import s from "./style/userTreeContent.module.css"
import {HInput} from "@/lib";

export const UserTreeContent = defineComponent({
    name: "UserTreeContent",
    setup() {
        const searchContent = ref('')
        return () => (<div class={s.layout}>
            <div class={s.left}>
                <HInput v-model:value={searchContent.value}/>
            </div>
            <div class={s.right}>2</div>
        </div>)
    }
})