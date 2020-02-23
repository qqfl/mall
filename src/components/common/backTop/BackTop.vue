<template>
  <div @click="backTop" v-show="topShow">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data() {
      return {
        topShow: false,
      }
    },
    props: {
      time: {
        type: Number,
        default: 300
      },
    },
    methods: {
      backTop() {
        const speed = parseInt(document.documentElement.scrollTop/this.time*10);
        const timer = setInterval(() => {
          const distance = document.documentElement.scrollTop;
          document.documentElement.scrollTop = distance - speed;
          if (distance <= speed) {
            document.documentElement.scrollTop = 0;
            clearInterval(timer)
          }
        }, 10)
      }
    },
    mounted() {
      document.addEventListener('scroll', () => {
        const st = document.documentElement.scrollTop;
        this.topShow = st >= 1000;
      })
    },
  }
</script>

<style scoped>

</style>
