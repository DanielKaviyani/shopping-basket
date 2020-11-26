<template>
  <h4 class="title">shopping basket</h4>
  <div class="basket" v-if="basket.items.length">
    <div v-for="(item, index) in basket.items" :key="index" class="basket-item">
      <div class="product-title">{{ make_limit(item.title) }}</div>
      <input
        type="number"
        class="count"
        v-model="item.count"
        v-on:change="$emit('totally')"
      />
      <div class="price">
        {{ `$${item.price}` }}
      </div>
    </div>
    <div class="checkout">
      <div class="total-price">
        {{ `$${basket.totalPrice}` }}
      </div>
      <button class="clear-btn" v-on:click="$emit('clear')">
        clear
      </button>
      <button class="submit-btn">
        Check Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basket",
  props: {
    basket: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.basket {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .basket-item {
    padding: 10px 0;
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 12px;
    &:not(:first-child) {
      border-top: 2px dotted #aaa;
    }
  }
  .checkout {
    border-top: 1px solid #ddd;
    padding: 10px;
    background-color: #e2e2e2;
  }
  .price {
    color: brown;
    font-weight: bold;
    margin: 0 0 0 auto;
  }
  .total-price {
    color: brown;
    font-weight: bold;
  }
  .count {
    max-width: 50px;
    &:hover {
      cursor: pointer;
    }
  }
  .product-title {
    width: 50%;
  }
  .checkout {
    display: flex;
    align-items: center;
    .submit-btn {
      background-color: rgb(126, 126, 247);
      color: #fff;
      padding: 5px 10px;
      border: 1px solid rgb(126, 126, 247);
    }
    .clear-btn {
      margin: 0 20px 0 auto;
      background-color: transparent;
      border: none;
    }
  }
}
</style>
