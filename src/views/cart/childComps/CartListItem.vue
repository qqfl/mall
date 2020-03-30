<template>
  <div class="cli">
    <van-checkbox class="cb" v-model="cartItem.checked"/>
    <van-card
      :num="cartItem.num"
      :price="cartItem.newPrice.toFixed(2)"
      :desc="'颜色：'+cartItem.color+'，尺码：'+cartItem.size"
      :title="cartItem.title"
      :thumb="cartItem.imgURL"
    >
      <div slot="footer">
        <van-button size="mini" type="danger" color="rgb(255, 87, 119)" @click="delProduct(cartItem.id)">删除</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
  import {Card,Checkbox,Button} from 'vant';

  export default {
    name: "CartListItem",
    components: {
      [Card.name]:Card,
      [Checkbox.name]:Checkbox,
      [Button.name]:Button,
    },
    props: {
      cartItem: {
        type: Object,
        default(){
          return {}
        }
      },
    },
    methods: {
      delProduct(id) {
        this.$store.dispatch('cartDel',id).then(res => {
          this.$toast(res);
        })
      }
    },
  }
</script>

<style scoped>
  .cli{
    position: relative;
  }
  .cb{
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 7px;
  }
  .van-card__thumb{
    margin-left: 20px;
  }
  .van-card__title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-bottom: 10px;
  }
</style>
