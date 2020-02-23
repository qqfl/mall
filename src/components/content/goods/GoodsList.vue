<template>
  <div class="good-list">
    <router-link class="item" v-for="(item, index) in goods.list" :key="index" :to="'/detail/'+index%3">
      <div class="image">
        <img :src="item.img" :alt="item.title">
      </div>
      <div class="title">
        <div class="van-multi-ellipsis--l2">{{item.title}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style scoped>
  .good-list{
    background-color: #f6f6f6;
    padding: 0 2.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .good-list .item{
    width: 48.8%;
    margin-bottom: 10px;
  }
  .good-list .image{
    height: 260px;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .good-list .title{
    background-color: #fff;
    padding: 10px;
    line-height: 18px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
