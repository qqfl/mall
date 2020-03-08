<template>
  <van-cell is-link class="border-b">
    <img class="shop-img" :src="shopInfo.img" alt="">
    <div class="shop-info">
      <div class="shop-tit">{{shopInfo.tit}}</div>
      <div class="shop-start">
        推荐指数
        <van-rate v-model="value" readonly />
      </div>
      <div class="shop-products">在架商品数：{{shopInfo.products}}</div>
    </div>
  </van-cell>
</template>

<script>
  import {Cell, Rate} from 'vant';

  export default {
    name: "DetailShopInfo",
    components: {
      [Cell.name]: Cell,
      [Rate.name]: Rate,
    },
    props: {
      shopInfo: {
        type: Object,
        default(){
          return {}
        }
      },
    },
    computed:{
      value(){
        return Number(this.shopInfo.star);
      }
    }
  }
</script>

<style scoped>
  .shop-img{
    display: inline-block;
    vertical-align: middle;
    width: 70px;
    margin-right: 10px;
  }
  .shop-info{
    display: inline-block;
    vertical-align: middle;
  }
</style>
