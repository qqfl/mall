<template>
  <div class="ignore types" ref="product">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in typeData[activeKey]" :key="index">
        <router-link :to="'/detail/'+index%3">
          <img :src="item.img" :alt="item.tit">
          <div class="productName">{{item.tit}}</div>
        </router-link>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
  import {Grid, GridItem} from 'vant';
  export default {
    name: "CateRightData",
    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
    },
    props: {
      typeData: {
        type: Array,
        default(){
          return []
        }
      },
      activeKey: {
        type: Number,
        default: 0
      }
    },
    watch: {
      activeKey() {
        this.$refs.product.scrollTop = 0;
      }
    },
  }
</script>

<style scoped>
  .ignore {
    top: 46px;
    bottom: 50px;
  }
  .types {
    position: absolute;
    left: 85px;
    right: 0;
    overflow-y: auto;
    z-index: 1;
  }
  .productName{
    text-align: center;
  }
</style>
