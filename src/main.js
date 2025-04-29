import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";

// Inicializar AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

const app = createApp(App);

// Configuración para desarrollo
if (process.env.NODE_ENV === "development") {
  app.config.devtools = true;
  app.config.performance = true;
  console.log("Modo de desarrollo activado");
}

app.use(store).use(router).mount("#app");
