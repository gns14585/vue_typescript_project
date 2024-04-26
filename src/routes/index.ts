import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@pages/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
