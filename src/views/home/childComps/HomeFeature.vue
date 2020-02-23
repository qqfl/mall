<template>
  <div>
    <div class="title">本周流行</div>
    <home-recommend class="rmd" :recommends="features"/>
  </div>
</template>

<script>
  import HomeRecommend from "@/views/home/childComps/HomeRecommend";
  export default {
    name: "HomeFeature",
    components: {
      HomeRecommend,
    },
    props: {
      features: {
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
    border-bottom: none;
  }
  .title{
    font-size: 14px;
    text-align: center;
    padding: 12px 0 16px;
  }
  .rmd{
    margin-top: -16px;
  }
</style>
