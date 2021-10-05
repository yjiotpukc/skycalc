import Home from "./views/Home.vue";
import ComingSoon from "./views/ComingSoon.vue";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Skycalc",
  },
  {
    path: "/apparel",
    component: ComingSoon,
    name: "Apparel",
  },
  {
    path: "/weapons",
    component: ComingSoon,
    name: "Weapons",
  },
];

export default routes;
