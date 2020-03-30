<template>
  <div>
    <van-nav-bar title="我的"/>
    <pf-info/>
    <pf-price :price="price" :discount="discount" :point="point"/>
    <pf-cell :info="{icon:'comment-o',text:'消息'}"/>
    <pf-cell :info="{icon:'points',text:'积分'}"/>
    <pf-cell class="border-b" :info="{icon:'gem-o',text:'会员'}"/>
    <pf-cell :info="{icon:'shopping-cart-o',text:'购物车'}"/>
    <pf-cell :info="{icon:'bag-o',text:'下载APP'}"/>
  </div>
</template>

<script>
  import {NavBar} from 'vant';
  import PfInfo from "@/views/profile/childComps/PfInfo";
  import PfPrice from "@/views/profile/childComps/PfPrice";
  import PfCell from "@/views/profile/childComps/PfCell";

  export default {
    name: "Profile",
    components: {
      [NavBar.name]:NavBar,
      PfInfo,
      PfPrice,
      PfCell
    },
    data() {
      return {
        price: 0,
        discount: 0,
        point: 0,
      }
    },
  }
</script>

<style scoped>

</style>
