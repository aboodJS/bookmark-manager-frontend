import Bookmark from "@/views/bookmark.vue";
import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/bookmarks/:id",
      name: "bookmark",
      component: Bookmark,
    },
  ],
});

export default router;
