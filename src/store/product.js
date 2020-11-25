import { API_SERVER } from "@/api/server";

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
    await fetch(API_SERVER)
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
