<template>
  <div>
    <van-nav-bar title="分类"/>
    <van-loading class="loading"/>
    <cate-left-list :type-list="typeList" @actChange="actChange"/>
    <cate-right-data :type-data="typeData" :active-key="actK"/>
  </div>
</template>

<script>
  import {NavBar, Icon, Loading  } from 'vant';

  import CateLeftList from "@/views/category/childComps/CateLeftList";
  import CateRightData from "@/views/category/childComps/CateRightData";

  import {getCategoryType, getCategoryData} from "@/network/category";

  export default {
    name: "Category",
    components: {
      CateRightData,
      CateLeftList,
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [Loading .name]: Loading ,
    },
    data() {
      return {
        actK: 0,
        typeList: [],
        typeData: [],
      }
    },
    created() {
      getCategoryType().then(value => {
        this.typeList = value.data.list;
      });
      getCategoryData().then(value => {
        this.typeData = value.data.list;
      })
    },
    methods: {
      actChange(v) {
        this.actK = v;
      },
    }
  }
</script>

<style scoped>
  .loading{
    text-align: center;
    margin-top: 30%;
  }
</style>
