<template>
  <footer class="footer bg-dark text-light py-5 mt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <h5 class="mb-4 fw-bold">Game<span class="text-accent">Zone</span></h5>
          <p class="mb-4">
            Tu tienda especializada en productos gaming de alta calidad. Ofrecemos los mejores
            precios y la mejor atención al cliente.
          </p>
          <div class="social-icons">
            <a href="#" class="me-3 text-light"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="me-3 text-light"><i class="fab fa-twitter"></i></a>
            <a href="#" class="me-3 text-light"><i class="fab fa-instagram"></i></a>
            <a href="#" class="me-3 text-light"><i class="fab fa-youtube"></i></a>
            <a href="#" class="text-light"><i class="fab fa-discord"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-6">
          <h6 class="mb-4 fw-bold">Enlaces rápidos</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/" class="text-light text-decoration-none">Inicio</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/nosotros" class="text-light text-decoration-none"
                >Nosotros</router-link
              >
            </li>
            <li class="mb-2"><a href="#" class="text-light text-decoration-none">Productos</a></li>
            <li class="mb-2"><a href="#" class="text-light text-decoration-none">Blog</a></li>
            <li class="mb-2"><a href="#" class="text-light text-decoration-none">Contacto</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6">
          <h6 class="mb-4 fw-bold">Categorías</h6>
          <ul class="list-unstyled">
            <li v-for="category in categories" :key="category.id" class="mb-2">
              <a
                href="#"
                class="text-light text-decoration-none"
                @click.prevent="filterByCategory(category.id)"
              >
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6">
          <h6 class="mb-4 fw-bold">Suscríbete a nuestro newsletter</h6>
          <p class="mb-4">Recibe las últimas novedades, ofertas exclusivas y contenido gaming.</p>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Tu email"
              aria-label="Email"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">Suscribirse</button>
          </div>
          <p class="small text-muted">Al suscribirte, aceptas nuestra política de privacidad.</p>
        </div>
      </div>

      <hr class="my-4 bg-light opacity-25" />

      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-md-0">
            © {{ new Date().getFullYear() }} GameZone. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#" class="text-light text-decoration-none small">Términos y condiciones</a>
            </li>
            <li class="list-inline-item ms-3">
              <a href="#" class="text-light text-decoration-none small">Política de privacidad</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "AppFooter",
  setup() {
    const store = useStore();
    const router = useRouter();

    const categories = computed(() => store.state.categories);

    const filterByCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
      if (router.currentRoute.value.name !== "home") {
        router.push("/");
      }
    };

    return {
      categories,
      filterByCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  .social-icons {
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;

      &:hover {
        background-color: $primary;
        transform: translateY(-3px);
      }
    }
  }

  h6 {
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 30px;
      height: 2px;
      background-color: $accent;
    }
  }

  ul li a {
    transition: all 0.2s ease;

    &:hover {
      color: $accent !important;
      padding-left: 5px;
    }
  }
}
</style>
