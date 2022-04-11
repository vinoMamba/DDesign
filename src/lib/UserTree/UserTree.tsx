import {defineComponent, ref} from "vue";
import {HButton, HModal} from "@/lib";
import {UserTreeContent} from "./UserTreeContent";
import {UserTreeTitle} from "./UserTreeTitle";

const UserTree = defineComponent({
    name: "UserTree",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
    },
    emits: ['update:visible'],
    setup(props, {slots, emit}) {
        const visible = ref(false);
        const handleClose = () => {
            emit('update:visible', false)
        };
        return () => (
            <>
                <HModal v-model:visible={props.visible} closable={false}>
                    {{
                        title: () => (<UserTreeTitle/>),
                        content: () => (<UserTreeContent/>),
                        footer: () => <div>
                            <HButton onClick={() => handleClose()}>确认</HButton>
                            <HButton onClick={() => handleClose()}>取消</HButton>
                        </div>
                    }}
                </HModal>
            </>
        );
    },
});

export default UserTree;