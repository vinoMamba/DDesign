import { defineComponent, ref, unref } from "vue";
import s from "./style/userTreeContent.module.css";
import { HInput } from "@/lib";
import {
  UserTreeNodeList,
  type UniqueTreeNode,
} from "./components/UserTreeNodeList";
import type { TreeNode } from "./type";
import { mockTree } from "./mock";
import { UserTreeOperationList } from "@/lib/UserTree/components/UserTreeOperationList";

export const UserTreeContent = defineComponent({
  name: "UserTreeContent",
  setup() {
    const searchContent = ref("");
    const listRef = ref<TreeNode[]>(mockTree);
    const checkedNodes = ref<TreeNode[]>([]);
    const deleteNode = ref<UniqueTreeNode>();
    function createUniqueNode(node: TreeNode) {
      deleteNode.value = {
        ...node,
        uniqueId: Symbol(),
      };
    }
    return () => (
      <div class={s.layout}>
        <div class={s.left}>
          <HInput v-model:value={searchContent.value} placeholder="搜索" />
          <UserTreeNodeList
            list={listRef.value}
            v-model:checkedNodes={checkedNodes.value}
            deleteNode={deleteNode.value}
          />
        </div>
        <div class={s.right}>
          <div class={s.content}>
            <UserTreeOperationList
              checkedNodes={checkedNodes.value}
              onDelete={(node) => createUniqueNode(node)}
            />
          </div>
        </div>
      </div>
    );
  },
});
