<template>
  <div class="mhome">
    <m-top />
    <!-- <div class="top">
      <div class="top-l">
        <img src="../../assets/home/logo.png" />
        <div class="city">上海</div>
      </div>
      <div class="top-r">
        <div class="icon">
          <i class="iconfont icon101-copy"></i>
        </div>
        <div class="icon">
          <i class="iconfont iconfenzu451"></i>
        </div>
      </div>
    </div> -->
    <m-banner :bgImg="bgImg">
      <div class="btn-box">
        <div class="btn">
          <i class="iconfont iconfenzu151"></i>
          平台介绍
        </div>
        <div class="btn">白皮书</div>
      </div>
    </m-banner>
    <div class="ad">
      <div class="btn">立即下单</div>
    </div>
    <div class="laval">
      <img class="img-1" src="../../assets/home/img-1.png" alt="" />
      <h2 class="txt">CNFS平台介绍与定位</h2>
      <p>
        2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。
      </p>
    </div>
    <div class="laval">
      <img class="img-2" src="../../assets/home/img-2.png" alt="" />
      <h2 class="txt">CNFS平台优势</h2>
      <p>
        2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。
      </p>
    </div>
    <div class="course">
      <h2 class="txt">公司发展历程</h2>
      <div class="course-box">
        <swiper ref="mySwiper" :options="courseSwiperOptions">
          <swiper-slide class="course-item">
            <div class="processcon-list">
              <div class="processcon-list-pic active">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
            <div class="processcon-list">
              <div class="processcon-list-pic">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
            <div class="processcon-list">
              <div class="processcon-list-pic">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
          </swiper-slide>
          <swiper-slide class="course-item">
            <div class="processcon-list">
              <div class="processcon-list-pic">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
            <div class="processcon-list">
              <div class="processcon-list-pic">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
            <div class="processcon-list">
              <div class="processcon-list-pic">2019.6月</div>
              <h4>纪元链公司成立 CNFS平台搭建</h4>
            </div>
          </swiper-slide>
          <div class="course-swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="news">
      <h2 class="txt">重要新闻</h2>
      <div class="news-box">
        <img src="../../assets/home/news-1.png" alt="" />
        <h2 class="news-txt">
          区块链，云栖大会邀请全球科技爱好者和商业创新者，共同打开未来科技之门
        </h2>
      </div>
      <div class="news-box">
        <img src="../../assets/home/news-2.png" alt="" />
        <h2 class="news-txt">
          今年重磅发布，云计算，人工智能，量子计算，芯片新研发项目…
        </h2>
      </div>
      <div class="news-box">
        <img src="../../assets/home/news-3.png" alt="" />
        <h2 class="news-txt">
          今年重磅发布，云计算，人工智能，量子计算，芯片,突破对未来科技的想像！
        </h2>
      </div>
    </div>

    <search-box />

    <div class="partner">
      <h2 class="txt">合作伙伴</h2>
      <div class="partner-box" ref="wrapper">
        <div class="partner-main">
          <div class="partner-item">
            <img src="../../assets/home/WechatIMG.png" alt="" />
          </div>
          <div class="partner-item">
            <img src="../../assets/home/madesen.png" alt="" />
          </div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
          <div class="partner-item"></div>
        </div>
      </div>
    </div>

    <m-footer />
  </div>
</template>

<script>
import mFooter from "@/components/mfooter";
import mBanner from "@/components/mBanner";
import mTop from "@/components/mTop";
import searchBox from "./components/searchBox";
import BScroll from "better-scroll";
export default {
  name: "m-home",
  components: { mFooter, searchBox, mBanner, mTop },
  props: {},
  data() {
    return {
      bgImg: require("@/assets/home/3.png"),
      scroll: null,
      courseSwiperOptions: {
        pagination: {
          el: ".course-swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        // alert(0);
        this.scroll = new BScroll(this.$refs.wrapper, {
          //开启点击事件 默认为false
          click: true,
          scrollX: true,
        });
        // console.log(this.scroll)
      } else if (!this.$refs.wrapper) {
        return;
      } else {
        this.scroll.refresh();
      }
    });
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
::v-deep .swiper-pagination-bullet {
  width: 60px;
  height: 2px;
  border-radius: 1px;
}
.mhome {
  width: 100%;
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
  .btn-box {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 0 0 30px 30px;
    .btn {
      @include btn(14px, #fff, none);
      & + .btn {
        margin-left: 10px;
      }
    }
  }
  .ad {
    height: 56px;
    background-image: url("../../assets/home/ad1.png");
    background-repeat: no-repeat;
    background-size: 500px 56px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn {
      @include btn(14px, #fff, #0d8bff);
      margin-right: 20px;
    }
  }
  .laval {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .img-1 {
      width: 200px;
      height: 190px;
    }
    .img-2 {
      width: 200px;
      height: 162px;
    }
    p {
      line-height: 30px;
      font-size: 14px;
      text-align: left;
      color: #999;
      margin-bottom: 30px;
    }
  }
  .course {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    align-items: center;
    background-image: url("~@/assets/home/m_fazhan.png");
    h2.txt {
      margin-top: 60px;
      margin-bottom: 40px;
    }
    .course-box {
      width: 100%;
      height: 300px;
      .course-item {
        width: 100%;
        display: flex;
        .processcon-list {
          flex: 1;
          & + .processcon-list {
            margin-left: 20px;
          }
          .processcon-list-pic {
            width: 100%;
            height: 58px;
            margin: 0 auto;
            background-image: url("~@/assets/home/bg-1.png");
            background-size: 100px 58px;
            background-repeat: no-repeat;
            background-position: center;
            color: #0d8bff;
            font-size: 14px;
            font-weight: 800;
            text-align: center;
            line-height: 58px;
            &.active {
              background-image: url("~@/assets/home/bgOn-1.png");
              color: #fff;
            }
          }
          h4 {
            width: 100%;
            font-size: 14px;
            color: #666;
            line-height: 34px;
            text-align: center;
            padding-top: 20px;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  .news {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .news-box {
      width: 90%;
      display: flex;
      flex-direction: column;
      box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
      & + .news-box {
        margin-top: 20px;
      }
      img {
        width: 100%;
      }
      .news-txt {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
        padding: 20px;
        text-align: left;
      }
    }
  }
  .partner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 40px 0;
    }
    .partner-box {
      width: 100%;
      overflow: hidden;
      padding-bottom: 50px;
      .partner-main {
        width: 578px;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        box-sizing: content-box;
        .partner-item {
          width: 140px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          border: 1px #eaeaea solid;
          border-radius: 4px;
          box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
          &:not(:nth-child(4n)) {
            margin-right: 6px;
          }
          img {
            width: 114px;
            height: 38px;
          }
        }
      }
    }
  }
}
</style>
