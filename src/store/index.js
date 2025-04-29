import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "PlayStation 5",
        price: 499.99,
        category: "consolas",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=PlayStation+5",
        description:
          "La última consola de Sony con gráficos de última generación y tiempos de carga ultrarrápidos.",
        stock: 10,
        rating: 4.8,
        featured: true,
      },
      {
        id: 2,
        name: "Xbox Series X",
        price: 499.99,
        category: "consolas",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Xbox+Series+X",
        description: "La consola más potente de Microsoft con 4K a 60fps y retrocompatibilidad.",
        stock: 8,
        rating: 4.7,
        featured: true,
      },
      {
        id: 3,
        name: "Nintendo Switch OLED",
        price: 349.99,
        category: "consolas",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Nintendo+Switch",
        description: "Versión mejorada de Nintendo Switch con pantalla OLED de 7 pulgadas.",
        stock: 15,
        rating: 4.6,
        featured: true,
      },
      {
        id: 4,
        name: "Teclado Mecánico RGB",
        price: 129.99,
        category: "perifericos",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Teclado+Gaming",
        description:
          "Teclado mecánico con switches Cherry MX y retroiluminación RGB personalizable.",
        stock: 20,
        rating: 4.5,
        featured: false,
      },
      {
        id: 5,
        name: "Ratón Gaming 16000 DPI",
        price: 79.99,
        category: "perifericos",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Mouse+Gaming",
        description:
          "Ratón ergonómico con sensor óptico de alta precisión y 8 botones programables.",
        stock: 25,
        rating: 4.4,
        featured: false,
      },
      {
        id: 6,
        name: "Auriculares 7.1 Surround",
        price: 99.99,
        category: "perifericos",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Auriculares+Gaming",
        description:
          "Auriculares con sonido envolvente 7.1, micrófono con cancelación de ruido y almohadillas de memory foam.",
        stock: 18,
        rating: 4.6,
        featured: true,
      },
      {
        id: 7,
        name: "Silla Gaming Ergonómica",
        price: 249.99,
        category: "accesorios",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Silla+Gaming",
        description: "Silla gaming con soporte lumbar, reposabrazos 4D y reclinable hasta 180°.",
        stock: 12,
        rating: 4.3,
        featured: false,
      },
      {
        id: 8,
        name: "Monitor Gaming 144Hz",
        price: 299.99,
        category: "monitores",
        image: "https://placehold.co/600x400/121212/FFFFFF?text=Monitor+Gaming",
        description: "Monitor Full HD de 27 pulgadas con 144Hz y 1ms de tiempo de respuesta.",
        stock: 10,
        rating: 4.7,
        featured: true,
      },
    ],
    cart: [],
    categories: [
      { id: "consolas", name: "Consolas" },
      { id: "videojuegos", name: "Videojuegos" },
      { id: "perifericos", name: "Periféricos" },
      { id: "accesorios", name: "Accesorios" },
      { id: "monitores", name: "Monitores" },
    ],
    activeCategory: null,
  },
  getters: {
    featuredProducts: (state) => {
      return state.products.filter((product) => product.featured);
    },
    filteredProducts: (state) => {
      if (!state.activeCategory) return state.products;
      return state.products.filter((product) => product.category === state.activeCategory);
    },
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
  },
  mutations: {
    setActiveCategory(state, categoryId) {
      state.activeCategory = categoryId;
    },
    addToCart(state, { product, quantity }) {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({
          ...product,
          quantity,
        });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  actions: {
    filterByCategory({ commit }, categoryId) {
      commit("setActiveCategory", categoryId);
    },
    addProductToCart({ commit, state }, { productId, quantity }) {
      const product = state.products.find((p) => p.id === productId);

      if (product && product.stock >= quantity) {
        commit("addToCart", { product, quantity });
        return true;
      }
      return false;
    },
    removeProductFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    updateQuantity({ commit }, payload) {
      commit("updateCartItemQuantity", payload);
    },
    checkout({ commit }) {
      // Aquí iría la lógica de procesamiento de pago
      // Por ahora solo limpiamos el carrito
      commit("clearCart");
    },
  },
});
