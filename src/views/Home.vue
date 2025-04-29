<template>
  <div class="home">
    <HeroSection />

    <div class="container">
      <section class="featured-products mb-5">
        <h2 class="section-title" data-aos="fade-right">Productos Destacados</h2>
        <div class="row g-4">
          <div
            v-for="(product, index) in featuredProducts"
            :key="product.id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <ProductCard :product="product" :delay="index * 100" />
          </div>
        </div>
      </section>

      <section class="gaming-categories py-5 mb-5 bg-light rounded">
        <div class="container">
          <h2 class="section-title text-center mb-5" data-aos="fade-up">Categorías Gaming</h2>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="category-card" @click="filterByCategory('consolas')">
                <img
                  src="https://placehold.co/600x400/121212/FFFFFF?text=Consolas"
                  alt="Consolas"
                  class="img-fluid rounded"
                />
                <div class="category-overlay">
                  <h3>Consolas</h3>
                  <p>PS5, Xbox Series X, Nintendo Switch</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="category-card" @click="filterByCategory('perifericos')">
                <img
                  src="https://placehold.co/600x400/121212/FFFFFF?text=Periféricos"
                  alt="Periféricos"
                  class="img-fluid rounded"
                />
                <div class="category-overlay">
                  <h3>Periféricos</h3>
                  <p>Teclados, ratones, auriculares</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="category-card" @click="filterByCategory('monitores')">
                <img
                  src="https://placehold.co/600x400/121212/FFFFFF?text=Monitores"
                  alt="Monitores"
                  class="img-fluid rounded"
                />
                <div class="category-overlay">
                  <h3>Monitores</h3>
                  <p>Monitores gaming de alta frecuencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="all-products mb-5">
        <h2 class="section-title" data-aos="fade-right">Todos los Productos</h2>
        <div class="row g-4">
          <div class="col-lg-3 mb-4">
            <CategoryFilter />

            <div class="price-filter mb-4">
              <h5 class="mb-3">Filtrar por precio</h5>
              <div class="price-slider">
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="1000"
                  step="10"
                  id="priceRange"
                />
                <div class="d-flex justify-content-between">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="mb-0">Mostrando {{ filteredProducts.length }} productos</p>
              <div class="d-flex align-items-center">
                <label for="sortOrder" class="me-2">Ordenar por:</label>
                <select class="form-select form-select-sm" id="sortOrder">
                  <option value="default">Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="name-asc">Nombre: A-Z</option>
                  <option value="name-desc">Nombre: Z-A</option>
                </select>
              </div>
            </div>

            <div class="row g-4">
              <div
                v-for="(product, index) in filteredProducts"
                :key="product.id"
                class="col-md-4 col-sm-6"
              >
                <ProductCard :product="product" :delay="index * 100" />
              </div>

              <div v-if="filteredProducts.length === 0" class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No se encontraron productos</h4>
                <p>Intenta con otra categoría o filtro de búsqueda.</p>
                <button class="btn btn-primary" @click="filterByCategory(null)">
                  Ver todos los productos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="newsletter-section py-5 mb-5 text-center bg-dark text-light rounded"
        data-aos="fade-up"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h3 class="mb-4">¡Únete a nuestra comunidad gaming!</h3>
              <p class="mb-4">
                Suscríbete para recibir noticias, ofertas exclusivas y contenido gaming.
              </p>
              <div class="input-group mb-3 mx-auto" style="max-width: 500px">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Tu email"
                  aria-label="Email"
                />
                <button class="btn btn-primary" type="button">Suscribirse</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import HeroSection from "@/components/HeroSection.vue";
import ProductCard from "@/components/ProductCard.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    ProductCard,
    CategoryFilter,
  },
  setup() {
    const store = useStore();

    const featuredProducts = computed(() => store.getters.featuredProducts);
    const filteredProducts = computed(() => store.getters.filteredProducts);

    const filterByCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
    };

    return {
      featuredProducts,
      filteredProducts,
      filterByCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  margin-bottom: 2rem;
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: $border-radius;
  cursor: pointer;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .category-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 2rem 1.5rem;
    color: white;

    h3 {
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0;
      opacity: 0.8;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.newsletter-section {
  background: linear-gradient(45deg, $dark, lighten($dark, 10%));
}
</style>
