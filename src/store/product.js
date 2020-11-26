const state = () => ({
  products: []
});

const mutations = {
  SET_LIST(state, payload) {
    state.products = payload;
  }
};

const actions = {
  async get_products({ commit }) {
    await fetch("/api")
      .then(data => data.json())
      .then(res => {
        commit("SET_LIST", res);
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
