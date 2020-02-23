<template>
  <div>
    <van-loading class="loading" />
    <div class="banner">
      <van-icon name="arrow-left" size="16px" class="back" @click="$router.back()"/>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import {Swipe, SwipeItem, Icon, Loading} from 'vant';

  export default {
    name: "DetailBanner",
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Icon.name]: Icon,
      [Loading.name]: Loading,
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },
    },
  }
</script>

<style scoped>
  .loading{
    position: absolute;
    width: 100vw;
    text-align: center;
    line-height: 100vw;
  }
  .banner{
    position: relative;
  }
  .back{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    background-color: rgba(0,0,0,.6);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
  }
  .my-swipe{
    height: 100vw;
  }
  .my-swipe img{
    transform: translateY(-20%);
  }
</style>
