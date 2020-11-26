const state = () => ({
  items: [],
  totalPrice: 0
});

const mutations = {
  ADD_TO_BASKET(state, payload) {
    state.totalPrice += payload.price.toFixed(2);
    payload.count = 1;
    state.items.push(payload);
  },
  SUM_PRICE(state) {
    let sum = 0;
    state.items.forEach(item => {
      sum += item.count * item.price;
    });
    state.totalPrice = sum.toFixed(2);
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
