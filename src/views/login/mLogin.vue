<template>
  <div class="logon">
    <div class="top">你好，<br />欢迎注册CNFS存储平台</div>
    <div class="level">
      <input type="text" placeholder="请输入手机号码" />
    </div>
    <div class="level">
      <input type="text" placeholder="请输入验证码" />
    </div>
    <div class="level">
      <input type="text" placeholder="请设置登陆密码" />
    </div>

    <el-button class="login-btn" type="primary">注册</el-button>
    <p class="bottom">
      登陆即代表已阅读并同意
      <span class="ligth">《软件服务协议》</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.logon {
  @include page;
  height: 100%;
  position: relative;
  .top {
    width: 100%;
    box-sizing: border-box;
    font-size: 24px;
    text-align: left;
    line-height: 34px;
    color: #353535;
    display: block;
    padding: 47px 20px 20px 20px;
    font-weight: 700;
  }
  .level {
    width: 90%;
    position: relative;
    margin-top: 10px;
    input {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      border: none;
      width: 100%;
      box-sizing: content-box;
      padding-bottom: 10px;

      &:focus {
        outline: none;
      }
      &::input-placeholder {
        color: #cccccc;
      }
      &::-webkit-input-placeholder {
        color: #cccccc;
      }
      &::-moz-placeholder {
        color: #cccccc;
      }
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
    }
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      left: 51%;
      right: 51%;
      background-color: #409EFF;
      bottom: 0;
      transition-duration: 0.3s;
    }
    &:hover:after, &:focus+after {
      left: 0;
      right: 0;
    }
  }
  .login-btn {
    margin-top: 40px;
    width: 90%;
    height: 48px;
    border: none;
    border-radius: 0;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    color: #ccc;
    font-size: 12px;
    text-align: center;
    .ligth {
      color: #5E9CD5;
    }
  }
}
</style>