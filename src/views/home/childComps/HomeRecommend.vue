<template>
  <van-grid class="home-recommend" :border="false" :column-num="4">
    <van-grid-item v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <van-image :src="item.image" />
        <div class="title">{{item.title}}</div>
      </a>
    </van-grid-item>
  </van-grid>
</template>

<script>
  import {Grid, GridItem, Image} from 'vant';

  export default {
    name: "HomeRecommend",
    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Image.name]: Image,
    },
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      },
    },
  }
</script>

<style scoped>
  .home-recommend{
    border-bottom: 10px solid #eeeeee;
  }
  .home-recommend .title{
    text-align: center;
    padding-top: 5px;
  }
</style>
