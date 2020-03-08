<template>
  <div>
    <div class="line1"><i class="block"></i></div>
    <div class="des">{{des}}</div>
    <div class="line2"><i class="block"></i></div>
    <div class="show">效果展示</div>
    <div class="img">
      <img v-for="(item, index) in detail" :key="index" :src="item" alt="">
    </div>
    <back-top>
      <van-icon class="back-top" name="down" />
    </back-top>
  </div>
</template>

<script>
  import {Icon} from 'vant';

  import BackTop from "@/components/common/backTop/BackTop";

  export default {
    name: "DetailMoreImg",
    components: {
      [Icon.name]: Icon,
      BackTop,
    },
    props: {
      des: {
        type: String,
        default: ''
      },
      detail: {
        type: Array,
        default() {
          return []
        }
      },
    },
  }
</script>

<style scoped>
  .line1, .line2 {
    width: 25vw;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .block {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #000;
    vertical-align: top;
    margin-top: -2px;
  }

  .line2 .block {
    float: right;
  }

  .line1 {
    left: 15px;
    margin-top: 15px;
  }

  .line2 {
    margin-left: calc(75vw - 15px);
  }

  .des {
    padding: 15px;
    color: #727272;
    line-height: 1.5;
  }

  .show {
    padding: 15px;
    font-size: 16px;
  }

  .img {
    padding: 0 8px;
  }

  .img img {
    margin-top: -10px;
  }
</style>
