<template>
  <div class="top-page">
    <div class="top-box">
      <div class="top-left">
        <div class="top-log"><img src="../../assets/home/logo.png" /></div>
        <div class="top-adressbox">上海站</div>
      </div>
      <div class="top-nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#1890FF"
          @select="handleNavSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">存储</el-menu-item>
          <el-menu-item index="3">计算</el-menu-item>
          <el-menu-item index="4">生态</el-menu-item>
          <el-menu-item index="5">区块浏览器</el-menu-item>
          <el-menu-item index="6">城市合伙人</el-menu-item>
          <el-menu-item index="7">登录</el-menu-item>
        </el-menu>
        <div class="top-reg">免费注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>