<template>
  <div class="home">
    <!--头部-->
    <div class="topcontent">
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
      <div class="top-main">
        <h2>CNFS分布式存储与计算平台</h2>
        <h4>安全、隐私、快捷、价廉</h4>
        <div class="btn">
          <j-button @click.native="notify">
            <!-- <i class="iconfont iconplay_icon button-icon"></i> -->
            平台介绍
          </j-button>
          <j-button @click.native="notify">
            <!-- <i class="iconfont iconplay_icon button-icon"></i> -->
            白皮书
          </j-button>
        </div>
      </div>
    </div>
    <!--广告位-->
    <div class="ad-box">
      <div class="ad-main">
        <div class="btn">立即下单</div>
      </div>
    </div>
    <!--平台介绍部分-->
    <div class="introcontent">
      <div class="intro_first">
        <img src="../../assets/home/img-1.png" />
        <div class="intro_txt">
          <h3>CNFS平台介绍与定位</h3>
          <span
            >2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。</span
          >
        </div>
      </div>
      <div class="intro_second">
        <div class="intro_txt">
          <h3>CNFS平台优势</h3>
          <span
            >2019年年初，纪元链科技联合大连理工大学及清华大学王小云院士，中科院上海光存储研究所等国内顶尖专家，发起CNFS协议的研发及基于CNFS而构建的分布式存储平台的搭建，拟于2021年面世。</span
          >
        </div>
        <img src="../../assets/home/img-2.png" />
      </div>
    </div>
    <!--公司发展历程-->
    <div class="process-box">
      <h3>公司发展历程</h3>
      <div class="processcon">
        <div class="processcon-list">
          <div class="processcon-list-pic active">2019.6月</div>
          <h4>1纪元链科技公司成立 CNFS平台搭建</h4>
        </div>
        <div class="processcon-list">
          <div class="processcon-list-pic">2019.8月</div>
          <h4>2纪元链科技公司成立 CNFS平台搭建</h4>
        </div>
        <div class="processcon-list">
          <div class="processcon-list-pic">2020.3月</div>
          <h4>3纪元链科技公司成立 CNFS平台搭建</h4>
        </div>
        <div class="processcon-list">
          <div class="processcon-list-pic">2021.6月</div>
          <h4>4纪元链科技公司成立 CNFS平台搭建</h4>
        </div>
      </div>
    </div>

    <!--重要新闻-->
    <div class="news-box">
      <h3>重要新闻</h3>
      <div class="newscon">
        <div class="newscon-list">
          <img src="../../assets/home/news-1.png" />
          <h4>
            区块链，云栖大会邀请全球科技爱好者和商业创新者，共同打开未来科技之门
          </h4>
        </div>
        <div class="newscon-list">
          <img src="../../assets/home/news-2.png" />
          <h4>今年重磅发布，云计算，人工智能，量子计算，芯片…</h4>
        </div>
        <div class="newscon-list">
          <img src="../../assets/home/news-3.png" />
          <h4>
            今年重磅发布，云计算，人工智能，量子计算，芯片… 突破对未来科技的橡！
          </h4>
        </div>
      </div>
    </div>

    <!--首页搜索-->
    <div class="search-box">
      <div class="searchcon">
        <input type="text" class="text" placeholder="存储设备品牌查询" />
        <div class="button">
          <i class="iconfont iconGlyphsSearch2"></i>
        </div>
      </div>
      <div class="searchcon-list">
        <span class="hot">热门搜索：</span>
        <span>搜索 xx存储设备</span>
        <span>搜索 xx存储设备</span>
        <span>搜索 xx存储设备</span>
      </div>
    </div>

    <!--合作伙伴-->
    <div class="partner">
      <h3>合作战略伙伴</h3>
      <div class="partner-group">
        <div class="partner-item">
          <img src="../../assets/home/WechatIMG.png" alt="">
        </div>
        <div class="partner-item">
          <img src="../../assets/home/madesen.png" alt="">
        </div>
        <div class="partner-item"></div>
        <div class="partner-item"></div>
        <div class="partner-item"></div>
        <div class="partner-item"></div>
        <div class="partner-item"></div>
        <div class="partner-item"></div>
      </div>
    </div>

    <!-- <el-button>默认按钮</el-button> -->
    <j-footer></j-footer>
  </div>
</template>

<script>
// require styles

import jFooter from "../../components/footer";
import jButton from "../../components/button";
export default {
  components: { jFooter, jButton },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleNavSelect(e) {
      console.log("e: ", e);
      this.activeIndex = e;
    },
    notify() {
      console.log("notify");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@mixin h3 {
  height: 50px;
  line-height: 50px;
  color: #333;
  font-size: 30px;
  padding-left: 20px;
  margin-bottom: 20px;
  background-image: url("../../assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .topcontent {
    width: 100%;
    height: 600px;
    background-image: url("../../assets/home/img_shouping.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    .top-box {
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
    .top-main {
      position: absolute;
      top: 200px;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      h2 {
        font-size: 40px;
        margin-bottom: 50px;
      }
      h4 {
        font-size: 20px;
      }
      .btn {
        width: 360px;
        height: 60px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .banner-ad {
    padding: 70px 0;
    .banner_con {
      width: 1200px;
      height: 394px;
      margin: 0 auto;
      background: red;
    }
  }
  .ad-box {
    height: 70px;
    width: 100%;
    background-image: url("../../assets/home/bar-1.png");
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    .ad-main {
      width: $pageWidth;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn {
        width: 200px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        background: #0d8bff;
        margin-right: 30px;
      }
    }
  }
  .introcontent {
    padding: 120px 0;
    clear: both;
    zoom: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .intro_first {
      width: 1000px;
      clear: both;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 443px;
        height: 425px;
      }
      .intro_txt {
        width: 444px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #999;
        font-size: 18px;
        text-align: left;
        line-height: 32px;
        h3 {
          @include h3;
        }
      }
    }
    .intro_second {
      width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 100px;
      img {
        width: 447px;
        height: 365px;
      }
      .intro_txt {
        width: 444px;
        color: #999;
        font-size: 18px;
        text-align: left;
        line-height: 32px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          @include h3;
        }
      }
    }
  }

  .process-box {
    width: 100%;
    height: 510px;
    background-image: url("../../assets/home/img_fazhan.png");
    background-position: center;
    h3 {
      @include h3;
      display: inline-block;
      margin-top: 60px;
      margin-bottom: 60px;
    }
    .processcon {
      width: 1070px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      &::after {
        content: "";
        width: 800px;
        height: 0;
        border-bottom: 1px solid #fff;
        position: absolute;
        top: 42px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
      .processcon-list {
        width: 200px;
        z-index: 10;
        .processcon-list-pic {
          width: 158px;
          height: 84px;
          margin: 0 auto;
          background-image: url("../../assets/home/bg-1.png");
          background-size: 158px 84px;
          color: #0d8bff;
          font-size: 20px;
          font-weight: 800;
          text-align: center;
          line-height: 84px;
          &.active {
            background-image: url("../../assets/home/bgOn-1.png");
            color: #fff;
          }
        }
        h4 {
          width: 200px;
          font-size: 22px;
          color: #666;
          line-height: 34px;
          text-align: center;
          padding-top: 20px;
        }
      }
    }
  }

  .news-box {
    padding-top: 100px;
    padding-bottom: 100px;
    h3 {
      @include h3;
      display: inline-block;
      margin-top: 0;
      margin-bottom: 60px;
    }
    h4 {
      padding-bottom: 115px;
    }
    .newscon {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .newscon-list {
        width: 384px;
        &:not(:last-child) {
          margin-right: 22px;
        }
        img {
          width: 384px;
          height: 262px;
        }
        h4 {
          font-size: 18px;
          line-height: 28px;
          padding: 12px;
          text-align: left;
          color: #999999;
        }
      }
    }
  }

  .search-box {
    width: 100%;
    background-image: url("../../assets/home/img_search.png");
    background-position: center;
    padding-top: 115px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .searchcon {
      width: 918px;
      margin: 0 auto;
      background: #fff;
      height: 54px;
      border-radius: 6px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      .text {
        flex: 1;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        outline: none;
        padding: 0 10px;
        border: none;
      }
      .button {
        width: 34px;
        height: 34px;
        text-align: center;
        line-height: 34px;
      }
    }

    .searchcon-list {
      margin-top: 20px;
      width: 900px;
      display: flex;
      justify-content: flex-start;
      span {
        height: 30px;
        line-height: 30px;
        color: #fff;
        margin-right: 20px;
        font-size: 14px;
        &.hot {
          background-image: url("../../assets/home/huorebaokuan.png");
          background-size: 28px 30px;
          background-repeat: no-repeat;
          padding-left: 40px;
        }
      }
    }
  }

  .partner {
    width: $pageWidth;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 120px;
    h3 {
      @include h3;
      display: inline-block;
      margin: 50px 0 50px 0;
    }
    .partner-group {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .partner-item {
        width: 280px;
        height: 118px;
        margin-bottom: 26px;
        background: #ffffff;
        box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
        border-radius: 9px;
        border: 1px solid #eaeaea;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 204px;
          height: 65px;
        }
        &:not(:nth-child(4n)) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
