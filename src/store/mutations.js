import {
  CART_ADD_COUNT,
  CART_ADD_PRODUCT,
  CART_DEL_PRODUCT,
  CART_DEL_ALL,
} from "@/store/mutation-types";

const mutations = {
  [CART_ADD_COUNT](state,payload){
    const product = state.cartList.find(item => item.id === payload.id);
    product.num += payload.num;
  },
  [CART_ADD_PRODUCT](state,payload){
    state.cartList.push(payload);
  },
  [CART_DEL_PRODUCT](state,id){
    const index = state.cartList.findIndex(item => item.id === id);
    state.cartList.splice(index,1);
  },
  [CART_DEL_ALL](state){
    state.cartList = [];
  }
};

export default mutations
