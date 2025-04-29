<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark-gradient sticky-top">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <span class="ms-2 fw-bold">Game<span class="text-accent">Zone</span></span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="category in categories" :key="category.id">
                <a class="dropdown-item" href="#" @click.prevent="filterByCategory(category.id)">
                  {{ category.name }}
                </a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="filterByCategory(null)">
                  Ver todos
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <div class="input-group me-3">
            <input
              class="form-control"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Search"
            />
            <button class="btn btn-primary" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <router-link to="/carrito" class="btn btn-outline-light position-relative ms-2">
            <i class="fas fa-shopping-cart"></i>
            <span
              v-if="cartItemCount > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
            >
              {{ cartItemCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  setup() {
    const store = useStore();
    const router = useRouter();

    const categories = computed(() => store.state.categories);
    const cartItemCount = computed(() => store.getters.cartItemCount);

    const filterByCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
      if (router.currentRoute.value.name !== "home") {
        router.push("/");
      }
    };

    return {
      categories,
      cartItemCount,
      filterByCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 1rem;

  .navbar-brand {
    font-size: 1.5rem;

    .text-accent {
      color: $accent;
    }
  }

  .nav-link {
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;

    &:hover,
    &.active {
      color: $accent !important;
    }
  }

  .dropdown-menu {
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    .dropdown-item {
      padding: 0.5rem 1.5rem;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba($primary, 0.1);
        color: $primary;
      }
    }
  }
}
</style>
