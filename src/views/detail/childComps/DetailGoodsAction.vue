<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车" :info="cc" @click="toCart" />
    <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    <van-goods-action-button type="warning" color="linear-gradient(to left,#FFA4BA,#ff5777)" text="加入购物车" @click="$emit('addToCart')" />
    <van-goods-action-button type="danger" color="#ff5777" text="立即购买" @click="onClickButton" />
  </van-goods-action>
</template>

<script>
  import {GoodsAction, GoodsActionIcon, GoodsActionButton, Toast} from 'vant';

  export default {
    name: "DetailGoodsAction",
    components: {
      [GoodsAction.name]: GoodsAction,
      [GoodsActionIcon.name]: GoodsActionIcon,
      [GoodsActionButton.name]: GoodsActionButton,
    },
    computed: {
      cc(){
        let cartC = this.$store.getters.cartCount;
        return cartC === 0 ? '' : cartC;
      }
    },
    methods: {
      onClickIcon() {
        Toast('点击图标');
      },
      toCart(){
        this.$router.push({path: '/cart'});
      },
      onClickButton() {
        Toast('点击按钮');
      },
    }
  }
</script>

<style scoped>
  body{
    color: #ff5777;
  }
</style>
