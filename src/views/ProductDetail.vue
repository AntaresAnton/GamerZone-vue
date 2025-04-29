<template>
  <div class="product-detail py-5">
    <div class="container" v-if="product">
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="goToCategory(product.category)">
              {{ getCategoryName(product.category) }}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="product-image-container" data-aos="fade-right">
            <img :src="product.image" :alt="product.name" class="img-fluid rounded" />
          </div>
        </div>

        <div class="col-lg-6" data-aos="fade-left">
          <div class="product-info">
            <h1 class="mb-2">{{ product.name }}</h1>

            <div class="d-flex align-items-center mb-3">
              <div class="product-rating me-3">
                <i class="fas fa-star text-warning"></i>
                <span class="ms-1">{{ product.rating }}</span>
              </div>
              <span class="badge bg-accent">{{ getCategoryName(product.category) }}</span>
            </div>

            <p class="product-description mb-4">{{ product.description }}</p>

            <div class="product-price mb-4">
              <h2 class="text-primary">${{ product.price.toFixed(2) }}</h2>
              <p class="stock-status" :class="{ 'text-danger': product.stock < 5 }">
                {{ product.stock > 0 ? `${product.stock} en stock` : "Agotado" }}
              </p>
            </div>

            <div class="product-actions mb-4">
              <div class="quantity-selector d-flex align-items-center mb-3">
                <label for="quantity" class="me-3">Cantidad:</label>
                <div class="input-group" style="width: 150px">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="decrementQuantity"
                    :disabled="quantity <= 1"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    class="form-control text-center"
                    id="quantity"
                    v-model="quantity"
                    min="1"
                    :max="product.stock"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="incrementQuantity"
                    :disabled="quantity >= product.stock"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div class="d-grid gap-2 d-md-flex">
                <button
                  class="btn btn-primary btn-lg"
                  @click="addToCart"
                  :disabled="product.stock === 0"
                >
                  <i class="fas fa-shopping-cart me-2"></i> Añadir al carrito
                </button>
                <button class="btn btn-outline-secondary btn-lg">
                  <i class="fas fa-heart me-2"></i> Favoritos
                </button>
              </div>
            </div>

            <div class="product-meta">
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-shield-alt text-primary me-2"></i>
                <span>Garantía de 1 año</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-truck text-primary me-2"></i>
                <span>Envío gratis en pedidos superiores a $99</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-exchange-alt text-primary me-2"></i>
                <span>Devoluciones gratuitas durante 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <ul class="nav nav-tabs" id="productTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="description-tab"
                data-bs-toggle="tab"
                data-bs-target="#description"
                type="button"
                role="tab"
                aria-controls="description"
                aria-selected="true"
              >
                Descripción
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="specs-tab"
                data-bs-toggle="tab"
                data-bs-target="#specs"
                type="button"
                role="tab"
                aria-controls="specs"
                aria-selected="false"
              >
                Especificaciones
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#reviews"
                type="button"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reseñas
              </button>
            </li>
          </ul>
          <div class="tab-content p-4 border border-top-0 rounded-bottom" id="productTabsContent">
            <div
              class="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <p>{{ product.description }}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
                eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
                tincidunt id.
              </p>
            </div>
            <div class="tab-pane fade" id="specs" role="tabpanel" aria-labelledby="specs-tab">
              <div class="table-responsive">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">Marca</th>
                      <td>GameZone</td>
                    </tr>
                    <tr>
                      <th scope="row">Modelo</th>
                      <td>{{ product.name }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Garantía</th>
                      <td>1 año</td>
                    </tr>
                    <tr>
                      <th scope="row">Categoría</th>
                      <td>{{ getCategoryName(product.category) }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h4>Reseñas de clientes</h4>
                <button class="btn btn-primary">Escribir una reseña</button>
              </div>
              <div class="review-item mb-4 pb-4 border-bottom">
                <div class="d-flex align-items-center mb-2">
                  <h5 class="mb-0 me-2">Usuario123</h5>
                  <div class="product-rating">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                  </div>
                  <span class="ms-auto text-muted small">Hace 2 días</span>
                </div>
                <p class="mb-0">
                  Excelente producto, cumple con todas mis expectativas. La calidad es increíble y
                  el envío fue muy rápido.
                </p>
              </div>
              <div class="review-item">
                <div class="d-flex align-items-center mb-2">
                  <h5 class="mb-0 me-2">Gamer2022</h5>
                  <div class="product-rating">
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="fas fa-star text-warning"></i>
                    <i class="far fa-star text-warning"></i>
                  </div>
                  <span class="ms-auto text-muted small">Hace 1 semana</span>
                </div>
                <p class="mb-0">
                  Muy buen producto, aunque podría mejorar en algunos aspectos. La relación
                  calidad-precio es buena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="related-products mt-5">
        <h3 class="section-title">Productos relacionados</h3>
        <div class="row g-4">
          <div
            v-for="(relatedProduct, index) in relatedProducts"
            :key="relatedProduct.id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <ProductCard :product="relatedProduct" :delay="index * 100" />
          </div>
        </div>
      </section>
    </div>

    <div v-else class="container text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando detalles del producto...</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductDetail",
  components: {
    ProductCard,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const quantity = ref(1);

    const product = computed(() => {
      return store.getters.getProductById(route.params.id);
    });

    const relatedProducts = computed(() => {
      if (!product.value) return [];

      return store.state.products
        .filter((p) => p.category === product.value.category && p.id !== product.value.id)
        .slice(0, 4);
    });

    const getCategoryName = (categoryId) => {
      const category = store.state.categories.find((cat) => cat.id === categoryId);
      return category ? category.name : categoryId;
    };

    const goToCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
      router.push("/");
    };

    const incrementQuantity = () => {
      if (quantity.value < product.value.stock) {
        quantity.value++;
      }
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const addToCart = () => {
      const success = store.dispatch("addProductToCart", {
        productId: product.value.id,
        quantity: quantity.value,
      });

      if (success) {
        // Aquí podríamos mostrar una notificación de éxito
        console.log("Producto añadido al carrito");
      }
    };

    onMounted(() => {
      // Reiniciar la cantidad al montar el componente
      quantity.value = 1;
    });

    return {
      product,
      relatedProducts,
      quantity,
      getCategoryName,
      goToCategory,
      incrementQuantity,
      decrementQuantity,
      addToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  .product-image-container {
    background-color: white;
    padding: 2rem;
    border-radius: $border-radius;
    box-shadow: $box-shadow;

    img {
      max-height: 400px;
      object-fit: contain;
      margin: 0 auto;
      display: block;
    }
  }

  .product-info {
    h1 {
      font-weight: 700;
    }

    .product-rating {
      display: flex;
      align-items: center;
    }

    .product-description {
      color: #6c757d;
      line-height: 1.6;
    }

    .product-price {
      h2 {
        font-weight: 700;
        margin-bottom: 0.5rem;
      }
    }

    .product-meta {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  .nav-tabs {
    .nav-link {
      font-weight: 600;
      color: $dark;

      &.active {
        color: $primary;
        border-color: #dee2e6 #dee2e6 #fff;
      }
    }
  }
}
</style>
