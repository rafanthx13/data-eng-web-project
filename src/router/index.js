import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import DataEngineeringListing from "../pages/DataEngineeringListing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/data-engineering-listing",
    name: "DataEngineeringListing",
    component: DataEngineeringListing,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
