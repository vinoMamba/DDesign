import { computed, defineComponent, type PropType } from "vue";
import s from "./style/button.module.css";

const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "default" | "danger">,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const classes = computed(() => {
      return [s.layout, s[props.type], s[props.disabled ? "disabled" : ""]];
    });
    return () => (
      <button
        disabled={props.disabled}
        class={classes.value}
        onClick={(e: MouseEvent) => emit("click", e)}
      >
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
export default Button;
