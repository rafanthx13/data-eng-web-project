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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
