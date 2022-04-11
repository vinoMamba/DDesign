import {defineComponent, ref} from "vue";
import {HModal} from "@/lib";
import {UserTreeTitle} from "./components/UserTreeTitle";

const UserTree = defineComponent({
    name: "UserTree",
    props: {
        visible: {
            type: Boolean,
            default: false
        },
    },
    setup(props, {slots}) {
        const visible = ref(false);
        return () => (
            <>
                <HModal v-model:visible={props.visible} closable={false}>
                    {{
                        title: () => (<UserTreeTitle/>),
                        content: () => (
                            <div>
                                <div>1</div>
                                <div>2</div>
                            </div>
                        ),
                    }}
                </HModal>
            </>
        );
    },
});

export default UserTree;