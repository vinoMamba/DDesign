import { computed, defineComponent, type PropType } from "vue";
import s from "./style/button.module.css";

export const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "default" | "danger">,
      default: "default",
    },
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      return [s.layout, s[props.type]];
    });
    return () => (
      <button class={classes.value}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
