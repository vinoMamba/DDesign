import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Comp from "@/views/Comp.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Home,
            name: "home",
        },
        {
            path: "/comp",
            name: "comp",
            component: Comp,
            children: [
                {
                    path: "/comp/button",
                    name: "button",
                    component: () => import("@/demo/ButtonDemo.vue"),
                },
                {
                    path: "/comp/modal",
                    name: "modal",
                    component: () => import("@/demo/ModalDemo.vue"),
                },
                {
                    path: "/comp/breadcrumb",
                    name: "breadcrumb",
                    component: () => import("@/demo/BreadcrumbDemo.vue"),
                },
                {
                    path: "/comp/userTree",
                    name: "userTree",
                    component: () => import("@/demo/UserTreeDemo.vue"),
                },
                {
                    path: "/comp/input",
                    name: "input",
                    component: () => import("@/demo/InputDemo.vue"),
                },
            ],
        },
    ],
});

export default router;
