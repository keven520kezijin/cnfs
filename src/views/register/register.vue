<template>
  <div class="home">
    <!--头部-->
    <div class="nynav"></div>

    <!--内页内容-->
    <div class="nywrap">
      <h3>注册CNFS存储与计算平台账号</h3>
      <div class="nycontent" style="padding-bottom: 40px">
        <div class="find-box">
          <el-form ref="rulesForm" :rules="rules" :model="rulesForm">
            <el-form-item prop="mobile">
              <el-input
                v-model="rulesForm.mobile"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item class="code" prop="code">
              <el-input
                v-model="rulesForm.code"
                placeholder="请输入验证码"
              ></el-input>
              <span class="code-txt">获取验证码</span>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="rulesForm.password"
                placeholder="请设置登录密码"
              ></el-input>
            </el-form-item>
            <el-button type="primary" round class="register-btn"
              >注册并登陆</el-button
            >
          </el-form>
        </div>

        <div class="clause-box">
          登陆即代表已阅读并同意<span>《软件服务协议》</span>
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
      rulesForm: {
        device_id: "",
        ip: "",
        nick_name: "",
        mobile: "",
        password: "",
        code: "",
      },
      activeIndex: "1",
      rules: {
        nick_name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        mobile: [{ validator: this.checkPhone, trigger: "blur" }],
        password: [{ validator: this.checkPassword, trigger: "blur" }],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
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
    checkPhone(rule, value, callback) {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    },
    checkPassword(rule, value, callback) {
      // (?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,20}$
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        const reg = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的密码"));
        }
      }
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
.el-form-item {
  margin-bottom: 30px;
  .code {
    position: relative;
  }
  .el-input {
    ::v-deep .el-input__inner {
      height: 54px;
      font-size: 22px;
    }
  }
}

.code-txt {
  position: absolute;
  font-size: 22px;
  color: #0d8bff;
  top: 0;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.register-btn {
  width: 100%;
  height: 54px;
  border-radius: 0;
  font-size: 24px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .nynav {
    background: #03173c;
    height: 84px;
    width: 100%;
  }
  .nywrap {
    width: 100%;
    background: #fff;
    h3 {
      width: 100%;
      background: #f5f5f6;
      padding-top: 115px;
      padding-bottom: 40px;
      font-size: 42px;
      color: #333333;
      line-height: 55px;
    }
    .nycontent {
      width: 1200px;
      margin: 0 auto;
      padding: 150px 0;
      overflow: hidden;
      zoom: 1;
      .find-box {
        width: 640px;

        margin: 0 auto;
        ul {
          li {
            padding-bottom: 30px;
            input {
              width: 556px;
              border: 1px solid #d8d8d8;
              font-size: 22px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #cccccc;
              padding: 15px 20px;
              line-height: 30px;
            }
            button {
              width: 596px;
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
      }
      .clause-box {
        padding-top: 225px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: #a7a7a7;
        line-height: 25px;
        span {
          color: #5e9cd5;
          cursor: pointer;
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
