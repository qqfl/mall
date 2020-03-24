<template>
  <div>
    <van-cell is-link @click="showPopup" class="border-b">
      <div class="tit"><van-icon name="passed" />72小时发货</div>
      <div class="tit"><van-icon name="passed" />7天无理由退货</div>
      <div class="tit"><van-icon name="passed" />退货补运费</div>
    </van-cell>
    <van-popup
      :overlay-style="{'background-color':'rgba(0,0,0,.4)'}"
      v-model="show"
      closeable
      position="bottom"
      :style="{ 'max-height': '70%' }"
    >
      <div class="d-t py12">服务说明</div>
      <div class="d-border py12">
        <div class="p-black">72小时发货</div>
      </div>
      <div class="d-border py12">
        <div class="p-black">7天无理由退货</div>
        <div class="p-gray">物流签收后7天内买家可无理由退货，需满足退货条件</div>
      </div>
      <div class="d-border py12">
        <div class="p-black">退货补运费</div>
        <div class="p-gray">用户发起退货且绑定提现银行卡，可获6-18元运费补贴</div>
      </div>
      <div class="d-border py12">
        <div class="p-black">白付美分期购</div>
        <div class="p-gray">白付美分期购：在我的钱包 →白付美页面开通即可使用分期购。本月消费，分3/6/12期还款，每月只还一点点，轻松享受大牌好货。（分12期只对部分用户开放。）</div>
      </div>
      <div class="d-b py12">全国包邮</div>
    </van-popup>
  </div>
</template>

<script>
  import {Popup, Cell, Icon} from 'vant';

  export default {
    name: "DetailPostage",
    components: {
      [Popup.name]: Popup,
      [Cell.name]: Cell,
      [Icon.name]: Icon,
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    }
  }
</script>

<style scoped>
  .d-t {
    color: #999;
    text-align: center;
    font-size: 16px;
    padding-top: 20px;
  }

  .d-border {
    border-bottom: 1px solid #dfdfdf;
    line-height: 1.5;
  }

  .p-gray {
    color: #999;
  }
  .py12{
    margin: 0 12px;
  }
  .tit{
    display: inline-block;
    margin-right: 10px;
  }
  .tit i{
    vertical-align: middle;
    margin-right: 2px;
    color: #fc275a;
    font-size: 16px;
  }
</style>
