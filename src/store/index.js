import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
Vue.use(Vuex);
const state = {
  cartList: []
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});

export default store;
