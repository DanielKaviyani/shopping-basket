<template>
  <h2 class="title">Product List</h2>
  <div class="product-list">
    <div v-for="(product, index) in products" :key="index" class="product-item">
      <div class="product-title">
        {{ make_limit(product.title) }}
      </div>
      <button>Add to Basket</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  computed: {
    products() {
      return this.$store.state.product.products.slice(0, 5);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  .product-item {
    border: 1px solid blue;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
