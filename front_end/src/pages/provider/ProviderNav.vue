<template>
  <div>
    <el-col  class="nav">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        background-color="white"
        text-color="black"
        active-text-color="white"
        router
      >
        <el-menu-item index="/provider/myequipmentlist">
          <i class="el-icon-menu"></i>
          <span slot="title">我的设备列表</span>
        </el-menu-item>


        <el-menu-item index="/provider/borrowapplylist">
          <i class="el-icon-bell"></i>
          <span slot="title">审批租借申请</span>

        </el-menu-item>
        <el-menu-item index="/provider/lendlist">
          <i class="el-icon-user-solid"></i>
          <span slot="title">借出设备信息</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
// import store from "../../../store/index.js";

export default {
  data() {
    return {
    //id: store.state.id
    };
  },
  name: "ProviderNav",
  methods: {}
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 90vh;
}
.el-menu-item.is-active {
  background-color: rgb(84, 92, 100) !important;
}
</style>
