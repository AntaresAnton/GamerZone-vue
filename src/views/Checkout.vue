<template>
  <div class="checkout-page py-5">
    <div class="container">
      <h1 class="mb-4">Finalizar Compra</h1>

      <div v-if="cartItems.length > 0">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title mb-4">Información de contacto</h5>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="firstName" required />
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label">Apellido</label>
                      <input type="text" class="form-control" id="lastName" required />
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" required />
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label">Teléfono</label>
                      <input type="tel" class="form-control" id="phone" required />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title mb-4">Dirección de envío</h5>
                <form>
                  <div class="row g-3">
                    <div class="col-12">
                      <label for="address" class="form-label">Dirección</label>
                      <input type="text" class="form-control" id="address" required />
                    </div>
                    <div class="col-md-4">
                      <label for="city" class="form-label">Ciudad</label>
                      <input type="text" class="form-control" id="city" required />
                    </div>
                    <div class="col-md-4">
                      <label for="state" class="form-label">Provincia/Estado</label>
                      <input type="text" class="form-control" id="state" required />
                    </div>
                    <div class="col-md-4">
                      <label for="zip" class="form-label">Código Postal</label>
                      <input type="text" class="form-control" id="zip" required />
                    </div>
                    <div class="col-12">
                      <label for="country" class="form-label">País</label>
                      <select class="form-select" id="country" required>
                        <option value="">Seleccionar...</option>
                        <option value="es">España</option>
                        <option value="mx">México</option>
                        <option value="ar">Argentina</option>
                        <option value="co">Colombia</option>
                        <option value="cl">Chile</option>
                        <option value="pe">Perú</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title mb-4">Método de pago</h5>
                <div class="payment-methods">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="creditCard"
                      checked
                    />
                    <label class="form-check-label" for="creditCard">
                      Tarjeta de crédito/débito
                    </label>
                  </div>

                  <div class="credit-card-form mb-4">
                    <div class="row g-3">
                      <div class="col-12">
                        <label for="cardName" class="form-label">Nombre en la tarjeta</label>
                        <input type="text" class="form-control" id="cardName" required />
                      </div>
                      <div class="col-12">
                        <label for="cardNumber" class="form-label">Número de tarjeta</label>
                        <input type="text" class="form-control" id="cardNumber" required />
                      </div>
                      <div class="col-md-6">
                        <label for="expDate" class="form-label">Fecha de expiración</label>
                        <input
                          type="text"
                          class="form-control"
                          id="expDate"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cvv" required />
                      </div>
                    </div>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="paymentMethod" id="paypal" />
                    <label class="form-check-label" for="paypal"> PayPal </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="bankTransfer"
                    />
                    <label class="form-check-label" for="bankTransfer">
                      Transferencia bancaria
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card mb-4 sticky-top" style="top: 2rem">
              <div class="card-body">
                <h5 class="card-title mb-4">Resumen del pedido</h5>

                <div class="order-summary">
                  <div
                    v-for="item in cartItems"
                    :key="item.id"
                    class="d-flex justify-content-between mb-2"
                  >
                    <span>{{ item.name }} × {{ item.quantity }}</span>
                    <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
                  </div>

                  <hr />

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

                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="termsCheck" required />
                    <label class="form-check-label" for="termsCheck">
                      Acepto los términos y condiciones
                    </label>
                  </div>

                  <button class="btn btn-primary btn-lg w-100" @click="processOrder">
                    Completar compra
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
        <p class="mb-4">No puedes proceder al pago sin productos en tu carrito.</p>
        <router-link to="/" class="btn btn-primary"> Ir a la tienda </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Checkout",
  setup() {
    const store = useStore();
    const router = useRouter();

    const cartItems = computed(() => store.state.cart);
    const cartTotal = computed(() => store.getters.cartTotal);
    const finalTotal = computed(() => {
      const shipping = cartTotal.value >= 99 ? 0 : 10;
      return cartTotal.value + shipping;
    });

    const processOrder = () => {
      // Aquí iría la lógica para procesar el pedido
      // Por ahora, simplemente simulamos un pedido exitoso

      alert("¡Pedido realizado con éxito! Gracias por tu compra.");
      store.dispatch("checkout");
      router.push("/");
    };

    return {
      cartItems,
      cartTotal,
      finalTotal,
      processOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
.checkout-page {
  .card {
    border: none;
    box-shadow: $box-shadow;
  }

  .form-label {
    font-weight: 500;
  }

  .order-summary {
    font-size: 0.95rem;
  }
}
</style>
