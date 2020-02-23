<template>
  <van-list
    class = 'list'
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="getGoodsData">
    <goods-list :goods="goods[type]"/>
  </van-list>
</template>
<script>
  import {List} from 'vant';
  import GoodsList from "@/components/content/goods/GoodsList";

  import {getHomeGoodsData} from "@/network/home";

  export default {
    name: "HomeTabItem",
    components: {
      GoodsList,
      [List.name]: List,
    },
    props: {
      type:{
        type:String,
        default: ''
      }
    },
    data() {
      return {
        loading: false,
        finished: false,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    methods: {
      getGoodsData(){
        const page = this.goods[this.type].page + 1;
        getHomeGoodsData(this.type, page).then(value => {
          this.ddShow = false;
          if (value.data){
            this.goods[this.type].list.push(...value.data.list);
            this.goods[this.type].page += 1;
            this.loading = false;
          }else {
            this.finished = true;
          }
        })
      }
    },
  }
</script>

<style scoped>
  .list{
    min-height: 100vh;
  }
</style>
