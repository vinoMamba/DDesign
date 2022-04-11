import { defineComponent, ref } from "vue";
import s from "./style/userTreeContent.module.css";
import { HInput } from "@/lib";
import { UserTreeNodeList } from "./components/UserTreeNodeList";
import type { TreeNode } from "./type";
import { mockTree } from "./mock";

export const UserTreeContent = defineComponent({
  name: "UserTreeContent",
  setup() {
    const searchContent = ref("");
    const listRef = ref<TreeNode[]>(mockTree);
    return () => (
      <div class={s.layout}>
        <div class={s.left}>
          <HInput v-model:value={searchContent.value} />
          <UserTreeNodeList list={listRef.value} />
        </div>
        <div class={s.right}>2</div>
      </div>
    );
  },
});
