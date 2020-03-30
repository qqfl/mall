<template>
  <div>
    <van-submit-bar
      :price="totalPrice*100"
      :button-text="'提交订单 '+totalCount"
      @submit="onSubmit"
    >
      <van-checkbox
        v-model="checkedAll"
        @click="selectAll">
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
  import {SubmitBar, Checkbox} from 'vant';

  import {mapGetters} from 'vuex';

  export default {
    name: "CartSubmitBar",
    components: {
      [SubmitBar.name]: SubmitBar,
      [Checkbox.name]: Checkbox,
    },
    methods: {
      onSubmit() {
        console.log(333)
      },
      selectAll() {
        if (this.checkedAll) {  //全选中时
          this.cartList.forEach(item => item.checked = false);
        } else {   //部分或全部不选中
          this.cartList.forEach(item => item.checked = true);
        }
      }
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        return this.cartList
          .filter(item => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.newPrice * item.num
          }, 0).toFixed(2)
      },
      totalCount() {
        return this.cartList.filter(item => item.checked).length
      },
      checkedAll() {
        if (this.cartList.length === 0) return false;
        return !this.cartList.find(item => !item.checked);
      }
    }
  }
</script>

<style scoped>
  .van-submit-bar__button--danger {
    background: linear-gradient(to right, rgb(255, 164, 186), rgb(255, 87, 119));
  }
</style>
