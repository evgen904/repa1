import { createRouter, createMemoryHistory, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const isServer = typeof window === "undefined";
const basePath = process.env.VUE_APP_BASEPATH;
let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  {
    path: `${basePath}/`,
    name: "home",
    component: HomeView,
  },
  {
    path: `${basePath}/about`,
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: `${basePath}/calendar`,
    name: "calendar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CalendarView.vue"),
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
