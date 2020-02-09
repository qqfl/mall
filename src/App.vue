<template>
  <div id="app">
    <router-view/>

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant';

  export default {
    name: 'App',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data() {
      return {
        active: 0
      }
    },
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
