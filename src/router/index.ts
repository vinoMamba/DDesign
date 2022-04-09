import { createRouter, createWebHistory } from "vue-router";
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
    },
  ],
});

export default router;
