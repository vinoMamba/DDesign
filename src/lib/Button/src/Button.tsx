import { defineComponent } from "vue";
import s from "./style/button.module.css";

export const Button = defineComponent({
  setup(props, { slots }) {
    return () => (
      <button class={s.layout}>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
