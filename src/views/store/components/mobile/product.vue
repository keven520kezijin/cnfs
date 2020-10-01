<template>
  <div class="product">
    <h2 class="txt">产品功能</h2>
    <div class="item">
      <div class="icon">
        <img class="ib1" src="@/assets/home/ib1.png" alt="">
      </div>
      <div class="main">
        <h2 class="title">兼容POSIX/MPI</h2>
        <p>文件存储CNFS的兼容标准POSIX/MPI，因此您可以使用当前基于Linux的应用程序</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <img class="ib2" src="@/assets/home/ib2.png" alt="">
      </div>
      <div class="main">
        <h2 class="title">文件管理功能</h2>
        <p>支持目录级别的配额设置，及ACL访问控制。用户可以将企业自己的LDAP/NIS集成到文件存储CNFS中</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <img class="ib3" src="@/assets/home/ib3.png" alt="">
      </div>
      <div class="main">
        <h2 class="title">高吞吐，低延时</h2>
        <p>依靠并行架构，用户I/O在客户端和存储节点间完全并行访问，通过集群聚合，吞吐可以线性增加</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <img class="ib4" src="@/assets/home/ib4.png" alt="">
      </div>
      <div class="main">
        <h2 class="title">计算生态整合</h2>
        <p>容器等计算平台整合，支持集群直接挂载CNFS文件系统。用户CNFS中的数据可以借助阿里云丰富的计算生态进行快速分析</p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <img class="ib5" src="@/assets/home/ib5.png" alt="">
      </div>
      <div class="main">
        <h2 class="title">并发访问优化</h2>
        <p>统一命名空间，支持成千上百机器同时并发访问，针对数据处理进行了优化。即使是大量的小文件，访问性能也可以提高10倍以上</p>
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
@import "~@/styles/mobile.scss";
.product {
  @include page;
  h2.txt {
    margin: 50px 0;
  }
  .item {
    width: 90%;
    display: flex;
    justify-content: space-between;
    .icon {
      flex: 1;
      img {
        margin-top: 20px;
      }
      .ib1 {
        width: 54px;
        height: 46px;
      }
      .ib2 {
        width: 52px;
        height: 53px;
      }
      .ib3 {
        width: 52px;
        height: 56px;
      }
      .ib4 {
        width: 52px;
        height: 45px;
      }
      .ib5 {
        width: 54px;
        height: 60px;
      }
    }
    .main {
      width: 260px;
      display: flex;
      flex-direction: column;
      .title {
        display: block;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        border-bottom: 1px solid #F2F2F2;
        text-align: left;
      }
      p {
        font-size: 14px;
        color: #8f8f8f;
        line-height: 24px;
        text-align: left;
        margin: 20px 0;
      }
    }
  }

}
</style>
