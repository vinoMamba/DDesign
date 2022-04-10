import { defineComponent, ref } from "vue";
import { HButton, HModal } from "..";

export const UserTree = defineComponent({
  name: "UserTree",
  setup(props, { slots }) {
    const visible = ref(false);
    return () => (
      <>
        <HButton>打开</HButton>
        <HModal v-modal:visible={visible.value}>
          {{
            title: () => <h1>选择人员</h1>,
            content: () => <div>list</div>,
          }}
        </HModal>
      </>
    );
  },
});
