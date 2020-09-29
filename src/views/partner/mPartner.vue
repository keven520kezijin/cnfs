<template>
  <div class="page">
    <m-top />
    <m-banner :bgImg="bgImg" class="banner"></m-banner>
    <div class="imgbox">
      <img class="ad-img" src="@/assets/home/ad.png" alt="" />
    </div>
    <box class="box-1" title="合作理念" :boxImg="require('@/assets/home/box1.png')">
      <pre class="box-txt">
        平台层面，主要做四件事
        公共关系、技术开发、平台规则、服务运营。
        市场层面，采取开放合作共赢的模式
        也就是城市合伙人机制。
      </pre>
    </box>
    <box title="城市合伙人权益" :boxImg="require('@/assets/home/box2.png')">
      <pre class="box-txt">
        分享平台十六大利益；
        年收益可望上亿；
        业绩优秀的城市合伙人将与项目方携手上市；
      </pre>
    </box>
    <box title="合作条件" :boxImg="require('@/assets/home/box3.png')">
      <pre class="box-txt">
        当地合法注册，符合经营范围的企业；
        价值认同、诚信靠谱、能力上佳 执行力强；
        每地级市仅限一家；
      </pre>
    </box>
    <partnerCom />

    <sustain :arrImg="arrImg" />
    <m-footer class="footer-box" />
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
import mBanner from "@/components/mBanner";
import mFooter from "@/components/mfooter";
import mTop from "@/components/mTop";
import box from "./components/box";
import sustain from "./components/sustain"; // partnerCom
import partnerCom from "./components/partnerCom"; // partnerCom
Vue.use(Button);
export default {
  name: "",
  components: {
    mBanner,
    mTop,
    mFooter,
    box,
    sustain,
    partnerCom
  },
  props: {},
  data() {
    return {
      bgImg: require("@/assets/home/1.png"),
      box1Src: require("@/assets/home/box1.png"),
      arrImg: [
        require("@/assets/home/sustain-1.png"),
        require("@/assets/home/sustain-2.png"),
        require("@/assets/home/sustain-3.png"),
        require("@/assets/home/sustain-4.png"),
        require("@/assets/home/sustain-5.png"),
        require("@/assets/home/sustain-6.png"),
        require("@/assets/home/sustain-7.png"),
        require("@/assets/home/sustain-8.png"),
        require("@/assets/home/sustain-9.png"),
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.page {
  position: relative;
  .banner {
    z-index: 10;
  }
}
.box-1 {
  margin-top: 54px;
}
.imgbox {
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 333px;
  img {
    display:block
  }
  .ad-img {
    width: 100%;
    border: 0;
  }
}
pre.box-txt {
  font-size: 14px;
  line-height: 30px;
  color: #999999;
}
.footer-box {
  margin-top: 30px;
}
</style>
