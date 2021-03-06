import {
    defineComponent,
    type InjectionKey,
    onMounted,
    type PropType,
    provide,
} from "vue";
import {HButton, HModal} from "@/lib";
import {UserTreeContent} from "./UserTreeContent";
import {UserTreeTitle} from "./UserTreeTitle";
import s from "./style/userTree.module.css";
import type {TreeNode} from "@/lib/UserTree/type";

export interface UserTreeInjection {
    multiple: () => Boolean;
    mode: () => "department" | "andUser";
    showUserCount: () => Boolean;
    showAllCheckedButton: () => Boolean;
}

export const userTreeInjection: InjectionKey<UserTreeInjection> =
    Symbol("UserTree");

const UserTree = defineComponent({
    name: "UserTree",
    props: {
        treeData: {
            type: Array as PropType<TreeNode[]>,
            required: true,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        multiple: {
            type: Boolean,
            default: true,
        },
        mode: {
            type: String as PropType<"department" | "andUser">,
            default: "department",
        },
        showUserCount: {
            type: Boolean,
            default: false,
        },
        showAllCheckedButton: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:visible"],
    setup(props, {emit}) {
        provide(userTreeInjection, {
            multiple: () => props.multiple,
            mode: () => props.mode,
            showUserCount: () => props.showUserCount,
            showAllCheckedButton: () => props.showAllCheckedButton,
        });
        const handleClose = () => {
            emit("update:visible", false);
        };
        onMounted(() => {
        });
        return () => (
            <>
                <HModal v-model:visible={props.visible} closable={false}>
                    {{
                        title: () => <UserTreeTitle/>,
                        content: () => <UserTreeContent/>,
                        footer: () => (
                            <div class={s.footer}>
                                <HButton type="primary" onClick={() => handleClose()}>
                                    ??????
                                </HButton>
                                <HButton onClick={() => handleClose()}>??????</HButton>
                            </div>
                        ),
                    }}
                </HModal>
            </>
        );
    },
});

export default UserTree;
