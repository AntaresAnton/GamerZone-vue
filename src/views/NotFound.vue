<template>
  <div class="not-found-page py-5">
    <div class="container text-center">
      <div class="error-content" data-aos="fade-up">
        <h1 class="display-1 fw-bold text-primary">404</h1>
        <h2 class="mb-4">Página no encontrada</h2>
        <p class="lead mb-5">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <router-link to="/" class="btn btn-primary btn-lg"> Volver al inicio </router-link>
      </div>

      <div class="mt-5 pt-5">
        <h3 class="mb-4">¿Buscas algo específico?</h3>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="input-group mb-4">
              <input type="text" class="form-control" placeholder="Buscar productos..." />
              <button class="btn btn-primary" type="button">Buscar</button>
            </div>
          </div>
        </div>

        <div class="row justify-content-center g-4 mt-3">
          <div class="col-md-3 col-6">
            <div class="quick-link">
              <i class="fas fa-gamepad fa-2x text-primary mb-3"></i>
              <h5>Consolas</h5>
              <router-link to="/" @click="filterByCategory('consolas')"
                >Ver consolas</router-link
              >
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="quick-link">
              <i class="fas fa-keyboard fa-2x text-primary mb-3"></i>
              <h5>Periféricos</h5>
              <router-link to="/" @click="filterByCategory('perifericos')"
                >Ver periféricos</router-link
              >
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="quick-link">
              <i class="fas fa-desktop fa-2x text-primary mb-3"></i>
              <h5>Monitores</h5>
              <router-link to="/" @click="filterByCategory('monitores')"
                >Ver monitores</router-link
              >
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="quick-link">
              <i class="fas fa-headset fa-2x text-primary mb-3"></i>
              <h5>Auriculares</h5>
              <router-link to="/" @click="filterByCategory('auriculares')"
                >Ver auriculares</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "NotFound",
  setup() {
    const store = useStore();

    const filterByCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
    };

    return {
      filterByCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.not-found-page {
  min-height: 70vh;
  display: flex;
  align-items: center;

  .error-content {
    margin-bottom: 3rem;
  }

  .quick-link {
    background-color: white;
    padding: 1.5rem;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    a {
      color: $primary;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
