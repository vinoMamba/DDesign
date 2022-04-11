import {
  defineComponent,
  render,
  type FunctionalComponent,
  type PropType,
} from "vue";
import type { TreeNode } from "../type";

const breadcrumb = defineComponent({
  name: "breadcrumb",
  props: {
    list: {
      type: Array as PropType<TreeNode[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        {props.list.map((item) => (
          <span>{item.name}</span>
        ))}
      </div>
    );
  },
});

export const UserTreeNodeList = defineComponent({
  name: "UserTreeNodeList",
  props: {
    list: {
      type: Array as PropType<TreeNode[]>,
      default: () => [],
    },
  },
  setup(props) {
    return () => (
      <>
        <breadcrumb list={props.list} />
      </>
    );
  },
});
