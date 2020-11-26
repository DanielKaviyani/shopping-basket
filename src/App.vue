<template>
  <div class="wrapper">
    <div class="products-wrapper">
      <productList @add="add_to_basket" />
    </div>
    <div class="basket-wrapper">
      <basket :basket="basket" @totally="totally" @clear="clear" />
    </div>
  </div>
</template>

<script>
import productList from "./components/productList";
import basket from "./components/basket";
export default {
  name: "App",
  components: {
    productList,
    basket
  },
  data: () => ({
    basket: {
      items: [],
      totalPrice: 0
    }
  }),
  methods: {
    add_to_basket(product) {
      product.count = 1;
      this.basket.items.push(product);
      this.totally();
    },
    totally() {
      let sum = 0;
      this.basket.items.forEach(item => {
        sum += item.count * item.price;
      });
      this.basket.totalPrice = sum.toFixed(2);
    },
    clear() {
      this.basket.items.forEach(item => (item.count = 0));
      this.totally();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid blue;
  padding: 10px;
  display: flex;
  .products-wrapper {
    width: 60%;
    border: 1px solid green;
  }
  .basket-wrapper {
    width: 40%;
    border: 1px solid blue;
    min-height: 100%;
    margin-left: 10px;
    background-color: #eee;
  }
  @media (max-width: 768px) {
    display: block;
    .products-wrapper, .basket-wrapper {
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
