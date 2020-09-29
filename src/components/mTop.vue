<template>
  <div class="top">
    <div class="top-l">
      <img src="@/assets/home/logo.png" />
      <div class="city">上海</div>
    </div>
    <div class="top-r">
      <div class="icon">
        <i class="iconfont icon101-copy"></i>
      </div>
      <div class="icon" @click="showPopup">
        <i class="iconfont iconfenzu451"></i>
      </div>
    </div>
    <van-popup
      v-model="show"
      closeable
      position="right"
      :style="{ width: '50%', height: '100%' }"
    />
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
  },
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 50px;
  background: #22272c;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
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
