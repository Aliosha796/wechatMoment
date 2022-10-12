import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Post from "../pages/Post.vue";
import Home from "../pages/Home.vue";
import Register from "../pages/Register.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/post",
      component: Post,
    },
    {
      path: "/register",
      component: Register,
    },
  ],
});
