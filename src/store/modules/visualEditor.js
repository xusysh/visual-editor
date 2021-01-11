const state = {
  designer: {},
  curComp: {}
};

const mutations = {
  SET_CUR_COMP(state, payload) {
    state.curComp = payload;
  }
};

const actions = {
  async SET_CUR_COMP({ commit }, payload) {
    commit("SET_CUR_COMP", payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
