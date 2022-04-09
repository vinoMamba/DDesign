import { defineComponent } from "vue";
import { HButton } from "@/lib";
import s from "./style/modal.module.css";

const Modal = defineComponent({
  name: "Modal",
  setup() {
    return () => (
      <>
        <div class={s.display}>
          <div class={s.overlay}></div>
          <div class={s.wrapper}>
            <div class={s.modal}>
              <header></header>
              <main>
                <slot name="content" />
              </main>
              <footer>
                <HButton>Cancel</HButton>
                <HButton>confirm</HButton>
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  },
});

export default Modal;
