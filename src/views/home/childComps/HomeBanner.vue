<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';

  export default {
    name: "HomeBanner",
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
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

</style>
