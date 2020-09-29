<template>
  <div class="superiority">
    <h2 class="txt">CNFS产品优势</h2>
    <div class="item">
      <div class="cir"></div>
      <h2 class="tip">完全托管</h2>
      <p>
        云中完全托管的服务，可以轻松创建和运行高性能文件系统。不再需要考虑安装和配置软件，以及复杂的性能调优工作，只需几分钟就能立刻开始使用高性能的文件存储，开始你的业务
      </p>
    </div>
    <div class="item">
      <div class="cir"></div>
      <h2 class="tip">超高吞吐和IOPS</h2>
      <p>
        文件存储CPFS采用分布式的并行架构，数据条带化后均匀分布在存储集群上，可以实现计算节点并行访问，提供数十GB的吞吐和几十万级的IOPS以及毫秒级时延
      </p>
    </div>
    <div class="item">
      <div class="cir"></div>
      <h2 class="tip">弹性可扩展</h2>
      <p>
        支持在线的扩容，由于所有数据均以条带化的方式存储并且支持扩容以后的自动负载平衡，可满足性能的线性增长并且即时利用扩容节点的吞吐和存储能力，满足业务增长需要的更多容量与性能的诉求
      </p>
    </div>
    <div class="item">
      <div class="cir"></div>
      <h2 class="tip">高可用</h2>
      <p>
        所有节点均为高可用设计。实现集群内秒级别的故障检测，并由CPFS集群调度器自动将服务切换到其他节点，同时兼顾负载均衡。整个切换过程用户不感知，提供远高于传统两节点HA的高可用性
      </p>
    </div>
    <div class="item">
      <div class="cir"></div>
      <h2 class="tip">安全可靠</h2>
      <p>
        数据持久化存储于阿里云自研的盘古分布式存储系统，支持多份数据拷贝，可以提供11个9的数据可靠性，并完美通过了阿里双十一超高压力的考验
      </p>
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
.superiority {
  @include page;
  background-color: #f5f5f6;
  h2.txt {
    margin: 50px 0;
  }
  .item {
    @include page;
    margin-bottom: 20px;
    .cir {
      width: 86px;
      height: 86px;
      border-radius: 43px;
      background-color: #e5e5e6;
      margin-bottom: 20px;
    }
    .tip {
      color: #333333;
      height: 30px;
      line-height: 30px;
      font-size: 22px;
      margin-bottom: 20px;
    }
    p {
      width: 90%;
      color: #8f8f8f;
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 20px;
    }
  }
}
</style>
