<template>
  <div class="cart-item">
    <div class="row align-items-center">
      <div class="col-md-2 col-4">
        <img :src="item.image" :alt="item.name" class="img-fluid rounded" />
      </div>
      <div class="col-md-4 col-8">
        <h5 class="mb-1">{{ item.name }}</h5>
        <p class="text-muted mb-0 small">{{ getCategoryName(item.category) }}</p>
      </div>
      <div class="col-md-2 col-4 mt-3 mt-md-0">
        <span class="fw-bold">${{ item.price.toFixed(2) }}</span>
      </div>
      <div class="col-md-2 col-4 mt-3 mt-md-0">
        <div class="quantity-control">
          <button
            class="btn btn-sm btn-outline-secondary"
            @click="updateQuantity(item.quantity - 1)"
            :disabled="item.quantity <= 1"
          >
            <i class="fas fa-minus"></i>
          </button>
          <span class="mx-2">{{ item.quantity }}</span>
          <button
            class="btn btn-sm btn-outline-secondary"
            @click="updateQuantity(item.quantity + 1)"
            :disabled="item.quantity >= item.stock"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col-md-2 col-4 mt-3 mt-md-0 text-end">
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold">${{ (item.price * item.quantity).toFixed(2) }}</span>
          <button class="btn btn-sm btn-danger ms-2" @click="removeItem">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const getCategoryName = (categoryId) => {
      const category = store.state.categories.find((cat) => cat.id === categoryId);
      return category ? category.name : categoryId;
    };

    const updateQuantity = (quantity) => {
      if (quantity >= 1 && quantity <= props.item.stock) {
        store.dispatch("updateQuantity", {
          productId: props.item.id,
          quantity: quantity,
        });
      }
    };

    const removeItem = () => {
      store.dispatch("removeProductFromCart", props.item.id);
    };

    return {
      getCategoryName,
      updateQuantity,
      removeItem,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }

  img {
    max-height: 80px;
    object-fit: contain;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  }
}
</style>
