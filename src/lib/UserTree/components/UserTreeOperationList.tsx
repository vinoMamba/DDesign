import {defineComponent, type PropType} from "vue";
import s from "./style/userTreeOperationList.module.css"
import type {TreeNode} from "@/lib/UserTree/type";

export const UserTreeOperationList = defineComponent({
    name: 'UserTreeOperationList',
    props: {
        checkedNodes: {
            type: Array as PropType<TreeNode[]>,
            required: true
        }
    },
    setup(props) {
        return () => {
            return (
                <div>
                    <p class={s.title}>
                        <span>已选择 ：</span>
                        <span>{props.checkedNodes.length}</span>
                    </p>
                    <ul class={s.wrapper}>
                        {props.checkedNodes.map(node => (
                            <li key={node.id} class={s.item}>
                                <img src={node.avatar} alt=''/>
                                <span class={s.name}>{node.name}</span>
                                <i class={s.close} />
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
})