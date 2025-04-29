<template>
  <div class="cart-page py-5">
    <div class="container">
      <h1 class="mb-4">Carrito de Compras</h1>

      <div v-if="cartItems.length > 0">
        <div class="card mb-4">
          <div class="card-body">
            <div class="cart-items">
              <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-4">Código de descuento</h5>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ingresa tu código"
                    aria-label="Código de descuento"
                  />
                  <button class="btn btn-primary" type="button">Aplicar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title mb-4">Resumen del pedido</h5>
                <div class="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${{ cartTotal.toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Descuento</span>
                  <span>$0.00</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>Envío</span>
                  <span>{{ cartTotal >= 99 ? "Gratis" : "$10.00" }}</span>
                </div>
                <hr />
                <div class="d-flex justify-content-between mb-4">
                  <span class="fw-bold">Total</span>
                  <span class="fw-bold text-primary">${{ finalTotal.toFixed(2) }}</span>
                </div>
                <div class="d-grid gap-2">
                  <router-link to="/checkout" class="btn btn-primary btn-lg">
                    Proceder al pago
                  </router-link>
                  <button class="btn btn-outline-secondary" @click="clearCart">
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <i class="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
        <h3>Tu carrito está vacío</h3>
        <p class="mb-4">Parece que aún no has añadido productos a tu carrito.</p>
        <router-link to="/" class="btn btn-primary"> Continuar comprando </router-link>
      </div>

      <section class="recommended-products mt-5" v-if="cartItems.length > 0">
        <h3 class="section-title">Productos recomendados</h3>
        <div class="row g-4">
          <div
            v-for="(product, index) in recommendedProducts"
            :key="product.id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <ProductCard :product="product" :delay="index * 100" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CartItem from "@/components/CartItem.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
    ProductCard,
  },
  setup() {
    const store = useStore();

    const cartItems = computed(() => store.state.cart);
    const cartTotal = computed(() => store.getters.cartTotal);
    const finalTotal = computed(() => {
      const shipping = cartTotal.value >= 99 ? 0 : 10;
      return cartTotal.value + shipping;
    });

    const recommendedProducts = computed(() => {
      return store.state.products
        .filter((p) => !cartItems.value.some((item) => item.id === p.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    });

    const clearCart = () => {
      if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
        store.commit("clearCart");
      }
    };

    return {
      cartItems,
      cartTotal,
      finalTotal,
      recommendedProducts,
      clearCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-page {
  .cart-items {
    border-radius: $border-radius;
  }

  .section-title {
    margin-bottom: 2rem;
  }
}
</style>
