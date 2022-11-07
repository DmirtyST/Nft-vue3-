import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home.vue";
import Test from '../views/test.vue'
import NotFound from '../views/404.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  
  
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;