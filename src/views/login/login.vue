<template>
  <div class="home">
    <!--头部-->
    <div class="nynav"></div>

    <!--内页内容-->
    <div class="nywrap">
      <div class="nycontent">
        <div class="login-txt">
          <h3>CNFS存储与计算平台全新上线</h3>
          <p>
            采用分布式存储方式分布式存储，数据信息更安全可靠，信息更加快速，便捷，资源共享
          </p>
          <h4><img src="@/assets/login/login-bg.png" /></h4>
        </div>
        <div class="login-con">
          <h3>账号密码登录</h3>
          <ul>
            <li><input type="text" placeholder="请输入手机号码" /></li>
            <li><input type="text" placeholder="请输入登陆密码" /></li>
            <li><button>登录</button></li>
          </ul>
          <div class="login-other">
            <p>其它登录方式</p>
            <ol>
              <li><img src="@/assets/login/icon_weibo.png" />微博</li>
              <li><img src="@/assets/login/icon_qq.png" />QQ</li>
              <li><img src="@/assets/login/icon_weixin.png" />微信公众账号</li>
            </ol>
          </div>
          <div class="login-reg">
            <ol>
              <li>免费注册</li>
              <li class="line">|</li>
              <li>忘记密码</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!--内页尾部-->
    <div class="ny-footer">
      Copyright@2019-2020 Epochain.org
      CNFS存储平台版权归开发者所有，并保留所有权利
    </div>
  </div>
</template>

<script>
export default {
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
  padding-left: 40px;
  margin-bottom: 20px;
  background-image: url("~@/assets/home/line.png");
  background-size: 10px 20px;
  background-position: 0 center;
  background-repeat: no-repeat;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .nynav {
    background: #292c2f;
    height: 84px;
    width: 100%;
    .nynavcon {
      width: 1200px;
      margin: 0 auto;
      h1 {
        height: 38px;
        width: 180px;
        margin-top: 20px;
      }
    }
  }
  .nywrap {
    width: 100%;
    background: #fff;
    .nycontent {
      width: 1200px;
      margin: 0 auto;
      padding: 0;
      overflow: hidden;
      zoom: 1;
      .login-txt {
        width: 550px;
        text-align: left;
        float: left;
        h3 {
          font-size: 30px;
          color: #333333;
          line-height: 40px;
          padding-top: 85px;
          padding-bottom: 25px;
        }
        p {
          width: 405px;
          font-size: 20px;

          color: #8f8f8f;
          line-height: 38px;
        }
        h4 {
          padding-top: 20px;
        }
      }
      .login-con {
        height: 730px;
        width: 550px;
        float: right;
        background: url("~@/assets/login/line.png") top left no-repeat;

        padding-left: 50px;
        text-align: left;
        h3 {
          padding: 30px 0 15px 20px;
          border-bottom: 1px solid #d8d8d8;
          font-size: 28px;
          color: #333333;
          line-height: 37px;
        }
        ul {
          padding-top: 85px;
          li {
            padding-bottom: 30px;
            padding-left: 35px;
            input {
              width: 424px;
              padding: 18px;
              border: 1px solid #d8d8d8;
              font-size: 22px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #cccccc;
            }
            button {
              width: 460px;
              height: 54px;
              background: #0d8bff;
              font-size: 24px;
              color: #ffffff;
              line-height: 54px;
              cursor: pointer;
              border: none;
            }
          }
        }
        .login-other {
          padding-top: 110px;
          padding-bottom: 30px;
          overflow: hidden;
          zoom: 1;
          p {
            float: left;
            font-size: 18px;
            color: #999999;
            line-height: 24px;
          }
          ol {
            float: left;
            padding-left: 35px;
            padding-top: 20px;
            li {
              float: left;
              font-size: 18px;
              color: #333333;
              line-height: 24px;
              padding-right: 30px;
              cursor: pointer;
              img {
                padding-right: 10px;
              }
            }
          }
        }
        .login-reg {
          clear: both;

          padding: 27px 0;

          overflow: hidden;
          zoom: 1;
          border-top: 1px solid #d8d8d8;
          border-bottom: 1px solid #d8d8d8;
          text-align: center;
          width: 544px;
          ol {
            li {
              float: left;
              padding: 0 50px;

              font-size: 24px;
              color: #333333;
              line-height: 31px;
            }
            .line {
              color: #d8d8d8;
            }
          }
        }
      }
    }
  }
  .ny-footer {
    height: 84px;
    width: 100%;
    background: #f7f8fa;
    border: 1px solid #efefef;
    text-align: center;
    line-height: 84px;
    font-size: 16px;
    color: #999999;
    position: absolute;
    bottom: 0;
  }
}
</style>
