import { defineComponent } from "vue";

export const Button = defineComponent({
  setup(props, { slots }) {
    return () => (
      <button>
        <span>{slots.default?.()}</span>
      </button>
    );
  },
});
