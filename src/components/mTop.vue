<template>
  <div class="page">
    <div class="top">
      <div class="top-l">
        <img src="@/assets/home/logo.png" />
        <div class="city">上海</div>
      </div>
      <div class="top-r">
        <div class="icon" @click="showTopPopup">
          <i class="iconfont icon101-copy"></i>
        </div>
        <div class="icon" @click="showPopup">
          <i class="iconfont iconfenzu451"></i>
        </div>
      </div>
    </div>
    <van-popup v-model="showTop" position="top" :style="{ height: '80px' }">
      <div class="top-btn-box">
        <div class="btn-l">免费注册</div>
        <div class="btn-r">登录</div>
      </div>
    </van-popup>
    <van-popup
      v-model="show"
      closeable
      position="right"
      :style="{ width: '50%', height: '100%' }"
      class="rigth-popup"
    >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2e3033"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>存储服务</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">多种存储</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-2">CNFS产品优势</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">产品功能</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-4">行业实战场景</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">计算</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <span>城市合伙人</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">合作理念</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-2">合伙人权益</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-3">合作条件</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-4">合伙人设置</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3-5">平台支持</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      show: false,
      showTop: false,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
    },
    showTopPopup() {
      this.showTop = true;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .van-overlay {
  top: 50px;
}
.rigth-popup {
  background-color: #2e3033;
}
.el-menu {
  border-right: none;
}
.van-popup--top {
  top: 50px;
  background-color: #212529;
  display: flex;
  justify-content: center;
  .top-btn-box {
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    div {
      flex: 1;
      height: 36px;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
    }
    .btn-l {
      margin-right: 20px;
      background: #0d8bff;
      color: #fff;
    }
    .btn-r {
      border: 1px solid #0d8bff;
      box-sizing: border-box;
      color: #0d8bff;
    }
  }
}
.top {
  width: 100%;
  height: 50px;
  background: #22272c;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  z-index: 2088;
  .top-l {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 119px;
      height: 25px;
    }
    .city {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      border: 1px solid #fff;
      box-sizing: border-box;
      margin-left: 20px;
    }
  }
  .top-r {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      color: #fff;
      & + .icon {
        margin-left: 20px;
      }
    }
  }
}
</style>
