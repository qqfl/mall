<template>
  <div>
    <van-cell is-link class="border-b">
      <div class="color-gray">买家评价 {{comment}} | 销量 {{sales}}</div>
    </van-cell>
  </div>
</template>

<script>
  import {Cell} from 'vant';

  export default {
    name: "DetailColorSize",
    components: {
      [Cell.name]: Cell,
    },
    props: {
      comment: {
        type: Number,
        default: 0
      },
      sales: {
        type: Number,
        default: 0
      },
    },
  }
</script>

<style scoped>
  .color-gray{
    color: #999;
  }
</style>
