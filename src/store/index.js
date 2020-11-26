import { createStore } from "vuex";

import product from "../store/product";
import basket from "../store/basket";

const Store = createStore({
  modules: {
    product,
    basket
  }
});

export default Store;
