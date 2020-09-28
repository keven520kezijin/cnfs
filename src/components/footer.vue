<template>
  <div class="footer">
    <div class="main">
      <div class="footer-logo">
        <img src="../assets/home/logo.png" alt="">
      </div>
      <div class="txt-list">
        <h2>关于我们</h2>
        <a href="#">我们的团队</a>
        <a href="#">研发团队</a>
        <a href="#">公司地址</a>
        <a href="#">人员架构</a>
      </div>
      <div class="txt-list">
        <h2>联系我们</h2>
        <a href="#">金融服务</a>
        <a href="#">医疗服务</a>
        <a href="#">车联服务</a>
        <a href="#">电信服务</a>
        <a href="#">金融服务</a>
        <a href="#">医疗服务</a>
      </div>
      <div class="txt-list">
        <h2>加入我们</h2>
        <a href="#">研发组</a>
        <a href="#">前端组</a>
        <a href="#">市场组</a>
      </div>
      <div class="footer-box">
        <h2>关注</h2>
        <img src="../assets/0.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
  .footer {
    padding-top: 40px;
    width: 100%;
    background: #2E3033;
    display: flex;
    justify-content: center;
    color: #fff;
    padding-bottom: 40px;
    .main {
      width: 80%;
      display: flex;
      justify-content: space-between;
      .footer-logo {
        width: 180px;
        height: 46px;
        img {
          width: 100%;
        }
      }
      .txt-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h2 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        a {
          font-size: 14px;
          margin: 10px 0;
          color: #fff;
          text-decoration: none;
        }
      }
      .footer-box{
        width: 128px;
        height: 128px;
        h2 {
          display: block;
          text-align: left;
          margin-bottom: 20px;
        }
        img {
          width: 100%;
        }
      }
    }
  }
</style>
