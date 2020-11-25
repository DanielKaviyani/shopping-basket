import { createStore } from "vuex";

import product from "../store/product";

const Store = createStore({
  modules: {
    product
  }
});

export default Store;
