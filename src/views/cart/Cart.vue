<template>
  <div>
    <div v-show="showNull">
      <van-nav-bar
        title="购物车为空"/>
      <div class="empty">
        <van-icon name="shopping-cart-o" class="emptyIcon" />
        <div class="emptyText">购物车为空</div>
      </div>
    </div>
    <div v-show="!showNull">
      <van-nav-bar
        :title="'购物车('+cartCount+')'"
        left-text="返回"
        right-text="清空"
        left-arrow
        @click-right="deleteAll"
        @click-left="$router.back()"/>
      <div class="list"><cart-list-item v-for="(item,index) in cartList" :key="index" :cart-item="item"/></div>
      <cart-submit-bar/>
    </div>
  </div>
</template>

<script>
  import {NavBar,Icon,Dialog} from 'vant';
  import {mapGetters} from 'vuex';
  import CartListItem from "@/views/cart/childComps/CartListItem";
  import CartSubmitBar from "@/views/cart/childComps/CartSubmitBar";

  export default {
    name: "Cart",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      CartListItem,
      CartSubmitBar,
    },
    computed: {
      ...mapGetters(['cartList', 'cartCount']),
      showNull(){   //判断购物车是否为空
        return this.cartList.length <= 0;
      }
    },
    methods: {
      deleteAll() {
        Dialog.confirm({
          message:'确定要清空购物车吗？'
        }).then(() => {
          this.$store.dispatch('cartClear');
        }).catch(() => {
          // console.log('no');
        })
      }
    },
  }
</script>

<style scoped>
  .list{
    margin-top: -8px;
  }
  .empty{
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .emptyIcon{
    font-size: 80px;
    margin-bottom: 30px;
  }
</style>
