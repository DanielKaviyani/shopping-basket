<template>
  <div class="wrapper">
    <div class="products">
      <productList @add="add_to_basket" />
    </div>
    <div class="basket">
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
  .products {
    width: 60%;
    border: 1px solid green;
    padding: 10px;
  }
  .basket {
    width: 40%;
    border: 1px solid blue;
    min-height: 100%;
    margin-left: 10px;
    background-color: #eee;
    padding: 10px;
  }
}
</style>
