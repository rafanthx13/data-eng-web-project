import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import BookListing from "../pages/BookListing.vue";
import VideoRecommender from "../pages/VideoRecommender.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/book-listing",
    name: "BookListing",
    component: BookListing,
  },
  {
    path: "/video-recomender",
    name: "VideoRecommender",
    component: VideoRecommender,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
