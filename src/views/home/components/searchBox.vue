<template>
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
@import "~@/styles/variables.scss";
  @media screen and (max-width: 700px) {
    .search-box {
      padding: 40px 0;
    }
  }
  @media screen and (min-width: 700px) {
    .search-box {
      padding: 115px 0;
    }
  }

.search-box {
  width: 100%;
  background-image: url("../../../assets/home/img_search.png");
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .searchcon {
    width: 1200px;
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
    width: 1200px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      height: 30px;
      line-height: 30px;
      color: #fff;
      margin-right: 10px;
      font-size: 14px;
      &.hot {
        background-image: url("../../../assets/home/huorebaokuan.png");
        background-size: 28px 30px;
        background-repeat: no-repeat;
        padding-left: 40px;
      }
    }
  }
}
</style>
