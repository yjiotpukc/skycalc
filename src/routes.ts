import Home from "./views/Home.vue";
import Apparel from "./views/Apparel.vue";
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
    component: Apparel,
    name: "Apparel",
  },
  {
    path: "/weapons",
    component: ComingSoon,
    name: "Weapons",
  },
];

export default routes;
