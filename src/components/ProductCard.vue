<template>
  <div class="card h-100 product-card" data-aos="fade-up" :data-aos-delay="delay">
    <div class="product-badge" v-if="product.stock < 5">¡Últimas unidades!</div>
    <div class="product-image">
      <img :src="product.image" class="card-img-top" :alt="product.name" />
      <div class="product-actions">
        <button class="btn btn-primary btn-sm" @click="addToCart" :disabled="product.stock === 0">
          <i class="fas fa-shopping-cart me-1"></i> Añadir
        </button>
        <router-link
          :to="{ name: 'product-detail', params: { id: product.id } }"
          class="btn btn-outline-light btn-sm"
        >
          <i class="fas fa-eye me-1"></i> Ver
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge bg-accent">{{ getCategoryName(product.category) }}</span>
        <div class="product-rating">
          <i class="fas fa-star text-warning"></i>
          <span class="ms-1">{{ product.rating }}</span>
        </div>
      </div>
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-truncate">{{ product.description }}</p>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <span class="product-price">${{ product.price.toFixed(2) }}</span>
        <span class="stock-status" :class="{ 'text-danger': product.stock < 5 }">
          {{ product.stock > 0 ? `${product.stock} en stock` : "Agotado" }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const store = useStore();

    const getCategoryName = (categoryId) => {
      const category = store.state.categories.find((cat) => cat.id === categoryId);
      return category ? category.name : categoryId;
    };

    const addToCart = () => {
      store.dispatch("addProductToCart", {
        productId: props.product.id,
        quantity: 1,
      });
    };

    return {
      getCategoryName,
      addToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    .product-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .product-image {
    position: relative;
    overflow: hidden;
    height: 200px;

    img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .product-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }

  .product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: $secondary;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 10;
  }

  .card-title {
    font-weight: 600;
    font-size: 1.1rem;
  }

  .product-price {
    font-weight: 700;
    font-size: 1.2rem;
    color: $primary;
  }

  .stock-status {
    font-size: 0.8rem;
    color: #6c757d;
  }
}
</style>
