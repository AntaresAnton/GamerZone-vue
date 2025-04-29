import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Inicio - GameZone" },
  },
  {
    path: "/producto/:id",
    name: "product-detail",
    component: () => import("@/views/ProductDetail.vue"),
    meta: { title: "Detalle del Producto - GameZone" },
  },
  {
    path: "/carrito",
    name: "cart",
    component: () => import("@/views/Cart.vue"),
    meta: { title: "Carrito - GameZone" },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("@/views/Checkout.vue"),
    meta: { title: "Finalizar Compra - GameZone" },
  },
  {
    path: "/nosotros",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: { title: "Sobre Nosotros - GameZone" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "Página no encontrada - GameZone" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// Cambiar el título de la página según la ruta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "GameZone - Tu tienda gaming";
  next();
});

export default router;
