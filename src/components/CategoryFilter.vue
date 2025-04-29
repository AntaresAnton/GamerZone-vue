<template>
  <div class="category-filter mb-4">
    <h5 class="mb-3">Categorías</h5>
    <div class="list-group">
      <button
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        :class="{ active: activeCategory === null }"
        @click="filterByCategory(null)"
      >
        Todos los productos
        <span class="badge bg-primary rounded-pill">{{ productCount }}</span>
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        :class="{ active: activeCategory === category.id }"
        @click="filterByCategory(category.id)"
      >
        {{ category.name }}
        <span class="badge bg-primary rounded-pill">{{ getCategoryCount(category.id) }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CategoryFilter",
  setup() {
    const store = useStore();

    const categories = computed(() => store.state.categories);
    const activeCategory = computed(() => store.state.activeCategory);
    const products = computed(() => store.state.products);
    const productCount = computed(() => products.value.length);

    const getCategoryCount = (categoryId) => {
      return products.value.filter((product) => product.category === categoryId).length;
    };

    const filterByCategory = (categoryId) => {
      store.dispatch("filterByCategory", categoryId);
    };

    return {
      categories,
      activeCategory,
      productCount,
      getCategoryCount,
      filterByCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.category-filter {
  .list-group-item {
    transition: all 0.2s ease;
    border-left: 3px solid transparent;

    &:hover {
      border-left-color: $primary;
    }

    &.active {
      background-color: $primary;
      border-color: $primary;
    }
  }
}
</style>
