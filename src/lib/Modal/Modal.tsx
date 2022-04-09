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
    okText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
  emits: ["update:visible", "ok"],
  setup(props, { slots, emit }) {
    const classesRef = computed(() => {
      return [s.display, props.visible ? s.visible : ""];
    });
    function close() {
      emit("update:visible", false);
    }
    function ok(e: MouseEvent) {
      emit("ok", e);
      emit("update:visible", false);
    }
    function cancel() {
      emit("update:visible", false);
    }
    return () => (
      <>
        <div class={classesRef.value}>
          <div class={s.overlay}></div>
          <div class={s.wrapper}>
            <div class={s.modal}>
              <header>
                <div class={s.title}>{slots.title?.()}</div>
                <i class={s.close} onClick={() => close()}>
                  x
                </i>
              </header>
              <main>{slots.content?.()}</main>
              <footer>
                {slots.footer ? (
                  slots.footer?.()
                ) : (
                  <div class={s["button-wrapper"]}>
                    <HButton onClick={() => cancel()}>
                      {props.cancelText}
                    </HButton>
                    <HButton type="primary" onClick={(e: MouseEvent) => ok(e)}>
                      {props.okText}
                    </HButton>
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
