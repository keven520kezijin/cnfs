<template>
  <div class="top-page">
    <div class="top-left">
      <div class="top-log"><img src="@/assets/home/logo.png" /></div>
      <div class="top-adressbox">上海站</div>
    </div>
    <div class="top-nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        active-text-color="#1890FF"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/store">存储</el-menu-item>
        <el-menu-item @click="comingSoon">计算</el-menu-item>
        <el-menu-item @click="comingSoon">生态</el-menu-item>
        <el-menu-item @click="comingSoon">区块浏览器</el-menu-item>
        <el-menu-item index="/partner">城市合伙人</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
      <div
        class="top-reg"
        v-if="$route.path !== '/register'"
        @click="go('/register')"
      >
        免费注册
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "0",
    };
  },
  created() {
    const routeIndex = {
      Home: "0",
      Store: "1",
      Partner: "5",
    };
    console.log("$route.name: ", routeIndex[this.$route.name]);

    if (routeIndex[this.$route.name]) {
      this.activeIndex = routeIndex[this.$route.name];
    } else {
      this.activeIndex = "";
    }
  },
  methods: {
    // handleNavSelect(e) {
    //   console.log("e: ", e);
    //   const routerArr = ["home", "store", 2, 3, 4, "partner"];
    //   this.$router.push(`/${routerArr[e]}`);
    // },
    comingSoon() {
      this.$message({
        message: "敬请期待",
        type: "warning"
      });
    },
    go(path) {
      if (path === "/register") {
        this.activeIndex = "";
      }
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.top-page {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: $pageWidth;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .top-left {
    width: 300px;
    .top-log {
      height: 38px;
      width: 180px;
      float: left;
    }
    .top-adressbox {
      width: 78px;
      height: 28px;
      border: 1px solid #ffffff;
      color: #ffffff;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      float: left;
      margin-left: 20px;
    }
  }
  .top-nav {
    width: 680px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    .el-menu.el-menu--horizontal {
      border: none;
      background: none;
      width: 600px;
      .el-menu-item.is-active {
        border: none;
      }
      .el-menu-item {
        color: #fff;
        height: 30px;
        line-height: 30px;
        border: none;
      }
    }
    .el-menu-item:not(.is-disabled):hover,
    .el-menu-item:not(.is-disabled):focus {
      background: none;
    }
    .top-reg {
      background: #0d8bff;
      float: left;
      font-size: 14px;
      color: #fff;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}
</style>