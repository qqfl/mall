<template>
  <div class="px14 py12 border-b">
    <van-loading class="loading" v-show="showLoading" />
    <div class="price" v-show="showPrice">
      <span>
        <span>¥</span>
        <span class="now-price">{{discountPrice}}</span>
      </span>
      <span class="before-price">
        <span class="p1">¥{{originalPrice}}</span>
        <span class="p2">{{info.discount}}</span>
      </span>
    </div>
    <div class="title">{{info.title}}</div>
    <div class="address c">
      <span class="fl">{{info.postage}}</span>
      <span class="fr">{{info.address}}</span>
    </div>
  </div>
</template>

<script>
  import { Loading } from 'vant';
  export default {
    name: "DetailPrice",
    components: {
      [Loading.name]: Loading,
    },
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {
        discountPrice: 0,
        originalPrice: 0,
        showPrice: false,
        showLoading: true,
      }
    },
    updated(){
      this.discountPrice = Number(this.info.discountPrice).toFixed(2);
      this.originalPrice = Number(this.info.originalPrice).toFixed(2);
      this.showPrice = true;
      this.showLoading = false;
    },
  }
</script>

<style scoped>
  .loading{
    margin: 20px;
    text-align: center;
  }
  .now-price {
    font-size: 30px;
    display: inline-block;
    vertical-align: text-top;
  }

  .before-price {
    padding-left: 5px;
    display: inline-block;
    vertical-align: text-top;
  }

  .p1 {
    display: block;
    padding-bottom: 10px;
    color: #999;
    text-decoration: line-through;
  }

  .p2 {
    color: rgb(255, 34, 85);
    background-color: rgb(255, 232, 238);
  }

  .title {
    width: 70vw;
    padding-top: 12px;
  }

  .address {
    color: #999;
    padding-top: 12px;
  }
</style>
