import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import visualEditor from "./modules/visualEditor";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { visualEditor },
  getters
});

export default store;
