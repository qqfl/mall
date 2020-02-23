<template>
  <div class="home">
    <van-nav-bar class="nav-bar" title="商城首页"/>
    <div class="ignore content">
      <home-banner :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-feature :features="features"/>
      <home-tab/>
    </div>
    <back-top>
      <van-icon class="back-top" name="down"/>
    </back-top>
  </div>
</template>

<script>
  import {NavBar, Icon} from 'vant';

  import HomeBanner from "@/views/home/childComps/HomeBanner";
  import HomeRecommend from "@/views/home/childComps/HomeRecommend";
  import HomeFeature from "@/views/home/childComps/HomeFeature";
  import HomeTab from "@/views/home/childComps/HomeTab";
  import BackTop from "@/components/common/backTop/BackTop";

  import {getHomeFeatureData, getHomeMultiData} from "@/network/home";

  export default {
    name: "Home",
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      HomeBanner,
      HomeRecommend,
      HomeFeature,
      HomeTab,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        features: [],
      }
    },
    created() {
      this.getMultiData();//获取banner和recommend数据
      this.getFeatureData();//获取feature数据
    },
    methods: {
      /**
       * 网络请求相关
       */
      getMultiData() {
        getHomeMultiData().then(value => {
          this.banners = value.data.banner.list;
          this.recommends = value.data.recommend.list;
        })
      },
      getFeatureData() {
        getHomeFeatureData().then(value => {
          this.features = value.data.list
        })
      },
    },
  }
</script>

<style scoped>
  .ignore {
    padding-top: 46px;
    padding-bottom: 50px;
  }

  .nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
</style>
