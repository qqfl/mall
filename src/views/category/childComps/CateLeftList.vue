<template>
  <div class="ignore type-list">
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item v-for="(item, index) in typeList" :title="item" :key="index"/>
    </van-sidebar>
  </div>
</template>

<script>
  import {Sidebar, SidebarItem} from 'vant';

  export default {
    name: "CateLeftList",
    components: {
      [Sidebar.name]: Sidebar,
      [SidebarItem.name]: SidebarItem,
    },
    data() {
      return {
        activeKey: 0,
      }
    },
    props: {
      typeList: {
        type: Array,
        default(){
          return []
        }
      },
    },
    methods: {
      onChange() {
        this.$emit('actChange',this.activeKey)
      }
    }
  }
</script>

<style scoped>
  .type-list {
    position: absolute;
    width: 100px;
    overflow-y: auto;
  }
  .ignore {
    top: 46px;
    bottom: 50px;
  }
</style>
