<template>
  <div class="wrapper">
    <div class="products">
      <productList />
    </div>
    <div class="basket"></div>
  </div>
</template>

<script>
import productList from "./components/productList";
export default {
  name: "App",
  components: {
    productList
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid blue;
  padding: 10px;
  .products {
    width: 70%;
    border: 1px solid green;
    padding: 10px;
  }
  .basket {
    width: 30%;
  }
}
</style>
