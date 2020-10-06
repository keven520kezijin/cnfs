<template>
  <div class="regionalAgent">
    <m-top />
    <div class="tit-box">上海市 > 区市级代理</div>
    <div class="main">
      <partner-box :partnerData="partnerData" />
    </div>
    <m-footer class="footer-box" />
  </div>
</template>

<script>
import mTop from "@/components/mTop";
import mFooter from "@/components/mfooter";
import partnerBox from "@/components/partnerBox";
export default {
  data() {
    return {
      partnerData: [
        {
          city: "北京",
          num: 180,
          status: 0,
          isQy: 0,
        },
        {
          city: "武汉",
          num: 200,
          status: 1,
          isQy: 0,
        },
        {
          city: "南京",
          num: 500,
          status: 1,
          isQy: 0,
        },
        {
          city: "西安",
          num: 160,
          status: 0,
          isQy: 0,
        },
        {
          city: "上海",
          num: 600,
          status: 2,
          isQy: 0,
        },
        {
          city: "天津",
          num: 190,
          status: 0,
          isQy: 1,
        },
        {
          city: "上海",
          num: 600,
          status: 2,
          isQy: 0,
        },
        {
          city: "天津",
          num: 190,
          status: 2,
          isQy: 1,
        },
        {
          city: "上海",
          num: 600,
          status: 1,
          isQy: 0,
        },
        {
          city: "天津",
          num: 190,
          status: 0,
          isQy: 1,
        },
      ],
    };
  },
  components: {
    mTop,
    mFooter,
    partnerBox,
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.regionalAgent {
  @include page;
  .tit-box {
    display: block;
    width: 100%;
    padding: 40px 0 20px 20px;
    text-align: left;
    font-size: 18px;
  }
  .main {
    width: 100%;
    background-color: #f5f5f6;
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }
}
</style>