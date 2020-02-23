<template>
  <div class="detail">
    <detail-banner :banners="detailData.img"/>
    <detail-price :info="detailData"/>
    <detail-postage/>
    <detail-color-size :info="detailData" @addToCart="addToCart"/>
    <detail-sales :comment="detailData.comment" :sales="detailData.sales"/>
    <detail-shop-info :shopInfo="detailData.shop"/>
    <detail-more-img :detail="detailData.detail" :des="detailData.des"/>
    <detail-goods-action @addToCart="addToCart"/>
  </div>
</template>

<script>
  import {getDetailData} from "@/network/detail";

  import DetailBanner from "@/views/detail/childComps/DetailBanner";
  import DetailPrice from "@/views/detail/childComps/DetailPrice";
  import DetailPostage from "@/views/detail/childComps/DetailPostage";
  import DetailColorSize from "@/views/detail/childComps/DetailColorSize";
  import DetailSales from "@/views/detail/childComps/DetailSales";
  import DetailGoodsAction from "@/views/detail/childComps/DetailGoodsAction";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailMoreImg from "@/views/detail/childComps/DetailMoreImg";

  export default {
    name: "Detail",
    components: {
      DetailPrice,
      DetailBanner,
      DetailPostage,
      DetailColorSize,
      DetailSales,
      DetailGoodsAction,
      DetailShopInfo,
      DetailMoreImg
    },
    data() {
      return {
        detailData: {}
      }
    },
    created() {
      document.documentElement.scrollTop = 0;
      getDetailData(this.$route.params.id).then(value => {
        this.detailData = value.data.info;
      });
    },
    methods: {
      //添加到购物车vuex
      addToCart(img,color,size,num,ci,si) {
        const obj = {};
        obj.id = this.detailData.id;
        obj.title = this.detailData.title;
        obj.newPrice = this.detailData.discountPrice;
        if (img){
          obj.imgURL = img;
          obj.color = color;
          obj.size = size;
          obj.num = num;
          obj.id = this.detailData.id+'-'+ci+'-'+si;
        }else {
          obj.imgURL = this.detailData.color[0].img;
          obj.color = this.detailData.color[0].col;
          obj.size = this.detailData.size[0];
          obj.num = 1;
          obj.id = this.detailData.id+'-0-0'
        }
        this.$store.dispatch('cartAdd', obj).then(res => {
          this.$toast(res);
        })
      },
    },
  }
</script>

<style scoped>
  .detail{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 50px;
    left: 0;
    z-index: 2;
  }
</style>
