<template>
  <div>
    <van-cell is-link @click="showPopup" class="border-b">
      {{please}}：{{color}} {{size}}
    </van-cell>
    <van-popup
      :overlay-style="{'background-color':'rgba(0,0,0,.4)'}"
      closeable
      v-model="show"
      position="bottom"
      :style="{'overflow-y':'unset'}"
    >
      <div class="preview-cont">
        <img class="preview-img"
             :src="img"
             alt="">
        <div class="preview-price">
          <div><span>¥</span><span class="now-price">{{info.discountPrice}}</span></div>
          <div>库存{{sto}}件</div>
          <div>{{please}}：{{color}} {{size}}</div>
        </div>
      </div>
      <div class="can-scroll">
        <div class="small-tit">颜色</div>
        <div>
          <van-button
            class="sel-btn"
            :class="{'act': colorInd === index}"
            type="default"
            size="small"
            v-for="(item, index) in info.color"
            :key="index"
            @click="selectColor(item, index)">
            {{item.col}}
          </van-button>
        </div>
        <div class="small-tit">尺码</div>
        <div>
          <van-button
            class="sel-btn"
            :class="{'act': sizeInd === index}"
            type="default"
            size="small"
            v-for="(item, index) in info.size"
            :key="index"
            @click="selectSize(item, index)">
            {{item}}
          </van-button>
        </div>
        <div class="small-tit">数量</div>
        <van-stepper v-model="value"/>
      </div>
      <div class="bot-btn">
        <van-button class="btn1" type="primary" square @click="addToCart">加入购物车</van-button>
        <van-button class="btn2" type="primary" square>立即购买</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {Popup, Cell, Icon, Button, Stepper, Toast} from 'vant';

  export default {
    name: "DetailColorSize",
    components: {
      [Popup.name]: Popup,
      [Cell.name]: Cell,
      [Icon.name]: Icon,
      [Button.name]: Button,
      [Stepper.name]: Stepper,
    },
    props: {
      info: {
        type: Object,
        default(){
          return {}
        }
      },
    },
    data() {
      return {
        please: '请选择',
        show: false,
        img: '',
        sto: '',
        color: '颜色',
        colorTemp: '',
        size: '尺码',
        sizeTemp: '',
        value: 1,
        colorInd: null,
        sizeInd: null,
      }
    },
    methods: {
      showPopup() {
        this.show = true;
        this.img = this.info.color[0].img;
        this.sto = this.info.color[0].sto;
      },
      selectColor(v, index){
        this.colorInd = index;
        this.img = v.img;
        this.sto = v.sto;
        this.colorTemp = v.col;
        if (this.sizeInd !== null){
          this.color = this.colorTemp;
          this.size = this.sizeTemp;
          this.please = '已选择';
        }else {
          this.color = '';
        }

      },
      selectSize(v, index){
        this.sizeInd = index;
        this.sizeTemp = v;
        if (this.colorInd !== null){
          this.size = this.sizeTemp;
          this.color = this.colorTemp;
          this.please = '已选择';
        }else {
          this.size = '';
        }
      },
      addToCart() {
        if (this.color === '颜色'){
          Toast('请选择商品颜色');
        }else if(this.size === '尺码') {
          Toast('请选择商品尺码');
        }else {
          this.$emit(
            'addToCart',
            this.img,
            this.color,
            this.size,
            this.value,
            this.colorInd,
            this.sizeInd);
        }
      }
    },
  }
</script>

<style scoped>
  .act{
    color: #ed4566;
    border-color: #ed4566!important;
  }
  .preview-cont {
    line-height: 1.5;
  }

  .preview-img {
    margin: -36px 15px 0;
    width: 80px;
  }

  .preview-price {
    display: inline-block;
  }

  .now-price {
    font-size: 24px;
    vertical-align: text-top;
  }

  .can-scroll {
    margin-top: 10px;
    overflow-y: auto;
    max-height: 60vh;
    padding: 5px 8px 15px;
    margin-bottom: 44px;
  }

  .sel-btn {
    border-color: #bbb;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .small-tit {
    padding-bottom: 4px;
  }

  .bot-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .bot-btn button {
    width: 50%;
    border-color: transparent;
  }

  .bot-btn .btn1 {
    color: #ff5777;
    background-color: #ffe6e8;
  }

  .bot-btn .btn2 {
    color: #fff;
    background-color: #ff5777;
  }
</style>
