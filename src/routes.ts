import Home from "./views/Home.vue";
import Apparel from "./views/Apparel.vue";
import Weapons from "./views/Weapons.vue";
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
    component: Weapons,
    name: "Weapons",
  },
];

export default routes;
