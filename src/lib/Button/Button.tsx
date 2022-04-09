import { computed, defineComponent, type PropType } from "vue";
import s from "./style/button.module.css";

const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "default" | "danger">,
      default: "default",
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const classes = computed(() => {
      return [s.layout, s[props.type]];
    });
    return () => (
      <button class={classes.value} onClick={() => emit("click")}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
export default Button;
