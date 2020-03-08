<template>
  <van-cell is-link>
    <template slot="title">
      <van-icon :name="info.icon" class="icon" />
      <span class="custom-title">{{info.text}}</span>
    </template>
  </van-cell>
</template>

<script>
  import {Icon, Cell, CellGroup} from 'vant';

  export default {
    name: "PfCell",
    components: {
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
    },
    props: {
      info: {
        type: Object,
        default(){
          return {}
        }
      },
    },
  }
</script>

<style scoped>
  .icon{
    vertical-align: text-bottom;
    font-size: 18px;
    margin-right: 8px;
    color: #fc275a;
  }
</style>
