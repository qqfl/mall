<template>
  <van-cell is-link class="my" center>
    <template slot="title">
      <van-icon name="user-circle-o" class="icon" />
      <div class="info">
        <div>登录/注册</div>
        <div>
          <van-icon name="phone-o" class="phone" />
          绑定手机号
        </div>
      </div>
    </template>
  </van-cell>
</template>

<script>
  import {Icon, Cell, CellGroup} from 'vant';
  export default {
    name: "PfInfo",
    components: {
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
    },
  }
</script>

<style scoped>
  .my{
    background-color: #ff869b;
    color: #ffffff;
  }
  .icon{
    display: inline-block;
    font-size: 60px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .info{
    display: inline-block;
    vertical-align: middle;
  }
  .phone{
    vertical-align: text-bottom;
    font-size: 16px;
  }
  .van-cell__right-icon{
    color: #ffffff;
  }
</style>
