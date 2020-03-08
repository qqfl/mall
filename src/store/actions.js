import {
  CART_ADD_COUNT,
  CART_ADD_PRODUCT,
  CART_DEL_PRODUCT,
  CART_DEL_ALL,
} from "@/store/mutation-types";

const actions = {
  cartAdd(context, payload) {
    return new Promise(resolve => {
      // 1.查看是否添加过
      const oldItem = context.state.cartList.find(item => item.id === payload.id);
      // 2.加数量或者新添加
      if (oldItem) {
        context.commit(CART_ADD_COUNT,payload);
        resolve('购物车商品数量+'+payload.num)
      } else {
        payload.checked = true;
        context.commit(CART_ADD_PRODUCT,payload);
        resolve('添加到购物车成功')
      }
    })
  },
  cartDel(context,id){
    return new Promise(resolve => {
      context.commit(CART_DEL_PRODUCT,id);
      resolve('商品删除成功')
    })
  },
  cartClear(context){
    return new Promise(resolve => {
      context.commit(CART_DEL_ALL);
      resolve('购物车已清空')
    })
  }
};
export default actions;
