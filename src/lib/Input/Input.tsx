import {defineComponent, getCurrentInstance, ref} from "vue";
import s from "./style/input.module.css"

const Input = defineComponent({
    name: "Input",
    props: {
        value: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
    },
    emits: ["update:value"],
    setup(props, {emit}) {
        const onValueInput = (e: Event) => {
            emit("update:value", (e.target as HTMLInputElement).value)
        }
        const onValueChange = (e: Event) => {
            emit("update:value", (e.target as HTMLInputElement).value)
        }
        return () => (
            <>
                <input
                    type="text"
                    value={props.value}
                    placeholder={props.placeholder}
                    class={s}
                    onInput={(e: Event) => onValueInput(e)}
                    onChange={(e: Event) => onValueChange(e)}
                />
            </>
        )
    }
})

export default Input