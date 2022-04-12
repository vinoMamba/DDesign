import {defineComponent, onMounted, type PropType, ref} from "vue";
import type {TreeNode} from "../type";
import s from "./style/userTreeNodeList.module.css"

export const UserTreeNodeList = defineComponent({
        name: "UserTreeNodeList",
        props: {
            list: {
                type: Array as PropType<TreeNode[]>,
                default: () => [],
            },
        },
        setup(props) {
            const breadcrumbList = ref<TreeNode[]>([]);
            const nodeList = ref<TreeNode[]>([]);
            const reset = () => {
                breadcrumbList.value = [];
                nodeList.value = props.list;
            }
            const getNext = (node: TreeNode) => {
                breadcrumbList.value.push(node);
                nodeList.value = node.children ?? [];
            };
            const getPrev = (node: TreeNode) => {
                const index = breadcrumbList.value.findIndex(n => n.id === node.id);
                breadcrumbList.value = breadcrumbList.value.slice(0, index + 1);
                nodeList.value = node.children ?? []
            }
            onMounted(() => {
                nodeList.value = props.list;
            });
            return () => (
                <>
                    <ol class={s.breadcrumb}>
                        <li onClick={() => reset()}>
                            <span class={s.title}>通讯录</span>
                            <span class={s.separator}>&gt;</span>
                        </li>
                        {breadcrumbList.value.map((node, index) => (
                            <li title={node.name} key={node.id} onClick={() => getPrev(node)}>
                                <span class={s.title}>{node.name}</span>
                                {index < breadcrumbList.value.length - 1 && <span class={s.separator}>&gt;</span>}
                            </li>))}
                    </ol>
                    <ul class={s.list}>
                        {nodeList.value.length === 0 ? (
                            <li class={s.empty}>暂无数据</li>
                        ) : (
                            nodeList.value.map((node) => (
                                <li key={node.id}>
                                    <input type="checkbox" class={s.checkbox}/>
                                    <p class={s.node} onClick={() => getNext(node)}>
                                        <img src={node.avatar} alt=''/>
                                        <span class={s.name}>{node.name}</span>
                                        <span class={s.count}>（{node.peopleCount}）</span>
                                    </p>
                                    <span class={s.next} onClick={() => getNext(node)}>下级</span>
                                </li>
                            ))
                        )}
                    </ul>
                </>
            );
        },
    })
;
