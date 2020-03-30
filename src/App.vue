<template>
  <div id="app">
<!--    exclude里面写组件名用逗号分隔-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Tabbar, TabbarItem, Lazyload} from 'vant';
  Vue.use(Lazyload);

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
  .van-tabbar-item--active{
    color: #fc275a;
  }
</style>
