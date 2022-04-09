import { computed, defineComponent } from "vue";
import { HButton } from "@/lib";
import s from "./style/modal.module.css";

const Modal = defineComponent({
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const classesRef = computed(() => {
      return [s.display, props.visible ? s.visible : ""];
    });
    return () => (
      <>
        <div class={classesRef.value}>
          <div class={s.overlay}></div>
          <div class={s.wrapper}>
            <div class={s.modal}>
              <header>
                <div class={s.title}>{slots.title?.()}</div>
                <i class={s.close}>x</i>
              </header>
              <main>{slots.content?.()}</main>
              <footer>
                {slots.footer ? (
                  slots.footer?.()
                ) : (
                  <div class={s["button-wrapper"]}>
                    <HButton>取消</HButton>
                    <HButton type="primary">确定</HButton>
                  </div>
                )}
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  },
});

export default Modal;
