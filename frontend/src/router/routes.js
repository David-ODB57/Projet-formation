import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/api/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/api/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/user/:id/profile",
    name: "Profile",
    component: () => import("../views/UserProfileView.vue"),
  },
  {
    path: "/user/:id/home",
    name: "Landing",
    component: () => import("../views/LandingPageView.vue"),
  },
  {
    path: "/rgpd",
    name: "Rgpd",
    component: () => import("../views/RGPDView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    console.log("User loggedIn:", store.getters.isLoggedIn);
    if (store.getters.isLoggedIn) {
      next();
    } else {
      next({
        path: "/api/login",
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
