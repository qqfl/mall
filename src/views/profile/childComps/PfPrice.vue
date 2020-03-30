<template>
  <van-grid :column-num="3" class="border-b">
    <van-grid-item>
      <div><span class="number">{{price | priceFormat}}</span>元</div>
      <div class="text">我的余额</div>
    </van-grid-item>
    <van-grid-item>
      <div><span class="number">{{discount}}</span>个</div>
      <div class="text">我的优惠</div>
    </van-grid-item>
    <van-grid-item>
      <div><span class="number">{{point}}</span>分</div>
      <div class="text">我的积分</div>
    </van-grid-item>
  </van-grid>
</template>

<script>
  import {Grid, GridItem} from 'vant';

  export default {
    name: "PfPrice",
    components: {
      [Grid.name]:Grid,
      [GridItem.name]:GridItem,
    },
    props: {
      price: {
        type: Number,
        default: 0
      },
      discount: {
        type: Number,
        default: 0
      },
      point: {
        type: Number,
        default: 0
      },
    },
    filters: {
      priceFormat: function (value) {
        return value.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  .number{
    font-size: 20px;
    color: #fc275a;
    font-weight: 600;
  }
  .text{
    margin-top: 8px;
  }
</style>
