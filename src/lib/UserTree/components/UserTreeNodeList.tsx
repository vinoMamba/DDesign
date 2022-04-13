import {computed, defineComponent, inject, onMounted, type PropType, ref} from "vue";
import type {TreeNode} from "../type";
import s from "./style/userTreeNodeList.module.css"
import {type UserTreeInjection, userTreeInjection} from "@/lib/UserTree/UserTree";
import {getCheckedNodes, traverseTree} from "@/lib/UserTree/utils";


export const UserTreeNodeList = defineComponent({
        name: "UserTreeNodeList",
        props: {
            list: {
                type: Array as PropType<TreeNode[]>,
                default: () => [],
            },
        },
        emits: ["update:checkedNodes"],
        setup(props, {emit}) {
            const UserTree = inject(userTreeInjection, {
                mode: () => 'department',
                multiple: () => true,
                showUserCount: () => true
            } as UserTreeInjection);
            const userCountVisible = computed(() => {
                return UserTree.showUserCount() && UserTree.mode() === 'andUser';
            })
            const breadcrumbList = ref<TreeNode[]>([]);
            const nodeList = ref<TreeNode[]>([]);
            const reset = () => {
                breadcrumbList.value = [];
                updateNodeList(props.list, {mode: UserTree.mode()});
            }
            const getNext = (node: TreeNode) => {
                if (node.type === 1) return
                breadcrumbList.value.push(node);
                updateNodeList(node.children, {mode: UserTree.mode()});
            };
            const getPrev = (node: TreeNode) => {
                const index = breadcrumbList.value.findIndex(n => n.id === node.id);
                breadcrumbList.value = breadcrumbList.value.slice(0, index + 1);
                updateNodeList(node.children, {mode: UserTree.mode()});
            }

            function updateNodeList(data: TreeNode[], options: { mode: 'andUser' | 'department' }) {
                nodeList.value = data;
                const {mode} = options;
                if (mode === 'department') {
                    nodeList.value = nodeList.value.filter(node => node.type === 0)
                }
            }


            function toggleChecked(e: Event, node: TreeNode) {
                node.checked = !node.checked;
                // change children checked state
                traverseTree(node, (n: TreeNode) => {
                    n.checked = node.checked;
                })
                // change parent checked state
                const lastNode = breadcrumbList.value[breadcrumbList.value.length - 1];
                if (lastNode && lastNode.children.every(n => n.checked)) {
                    lastNode.checked = true;
                } else if (lastNode && !lastNode.children.some(n => n.checked)) {
                    lastNode.checked = false;
                }
                updateCheckedNodes()
            }

            function updateCheckedNodes() {
                const checkedNodes = getCheckedNodes(nodeList.value)
                emit('update:checkedNodes', checkedNodes)
            }

            onMounted(() => {
                updateNodeList(props.list, {mode: UserTree.mode()});
            });
            return () => (
                <div>
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
                                    <input type="checkbox" class={s.checkbox} checked={node.checked}
                                           onChange={(e: Event) => toggleChecked(e, node)}/>
                                    <p class={s.node} onClick={() => getNext(node)}>
                                        <img src={node.avatar} alt=''/>
                                        <span class={s.name}>{node.name}</span>
                                        {(node.type === 0 && userCountVisible.value) ?
                                            <span class={s.count}>（{node.peopleCount}）</span> : null}
                                    </p>
                                    {node.type === 0 && <span class={s.next} onClick={() => getNext(node)}>下级</span>}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            );
        },
    })
;
