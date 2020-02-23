<template>
  <van-tabs class="home-tab" v-model="active" animated sticky offset-top="45">
    <van-tab v-for="item in menu" :title="item.title">
      <home-tab-item :type="item.type"/>
    </van-tab>
  </van-tabs>
</template>

<script>
  import {Tab, Tabs} from 'vant';

  import HomeTabItem from "@/views/home/childComps/HomeTabItem";

  export default {
    name: "HomeTab",
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      HomeTabItem
    },
    data() {
      return {
        active: 0,
        menu: [
          {
            type: 'pop',
            title: '流行'
          },
          {
            type: 'new',
            title: '最新'
          },
          {
            type: 'sell',
            title: '热卖'
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .home-tab {
    color: #666;
  }
</style>
