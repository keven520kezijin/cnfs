<template>
  <div class="home">
    <!--头部-->
    <div class="topcontent">
      <div class="top-main">
        <h2>CNFS分布式存储与计算平台</h2>
        <h4>安全、隐私、快捷、价廉</h4>
        <div class="btn">
          <j-button @click.native="notify">
            <!-- <i class="iconfont iconplay_icon button-icon"></i> -->
            立即开通
          </j-button>
        </div>
      </div>
    </div>
    <!---->
    <!--多种存储类型-->
    <div class="store-type">
      <h3>多种存储类型</h3>
      <div class="storecon">
        <div class="store-list">
          <ul>
            <li></li>
            <li>适用场景</li>
            <li>对象最小计量大小</li>
            <li>最少存储时间</li>
            <li>数据访问特点</li>
            <li>图片处理</li>
            <li>数据取回费用</li>
            <li>OSS传输加速(上传/下载加速)</li>
            <li>存储空间价格(本地冗余LRS)</li>
            <li>存储空间价格(同城冗余ZRS)</li>
          </ul>
        </div>
        <div class="store-list">
          <ol>
            <li><div class="store-tit">热数据存储</div></li>
            <li>通用场景，平均每文件每月访问大于1次</li>
            <li>按照对象实际大小计算</li>
            <li>无</li>
            <li>实时访问</li>
            <li>支持</li>
            <li>无</li>
            <li>支持</li>
            <li style="color: #f96549">￥<span>0.12元</span>/GB/月</li>
            <li style="color: #f96549">￥<span>0.21元</span>/GB/月</li>
          </ol>
        </div>
        <div class="store-list">
          <ol>
            <li><div class="store-tit">温数据存储</div></li>
            <li>单文件月访问不到1次，但访问需实时</li>
            <li>64KB,即小于64KB的文件，按64KB计费</li>
            <li>30天</li>
            <li>实时访问</li>
            <li>支持</li>
            <li>按实际获取的数据量收取，单位GB</li>
            <li>支持</li>
            <li style="color: #f96549">￥<span>0.08元</span>/GB/月</li>
            <li style="color: #f96549">￥<span>0.10元</span>/GB/月</li>
          </ol>
        </div>
        <div class="store-list">
          <ol>
            <li><div class="store-tit">冷数据存储</div></li>
            <li>单文件月访问不到1次，但访问需实时</li>
            <li>64KB,即小于64KB的文件，按64KB计费</li>
            <li>60天</li>
            <li>需先解冻后才能读取，解冻时间1分钟</li>
            <li>支持，但需要先解冻</li>
            <li>按实际获取的数据量收取，单位GB</li>
            <li>支持</li>
            <li style="color: #f96549">￥<span>0.03元</span>/GB/月</li>
            <li style="color: #f96549">￥<span>0.12元</span>/GB/月</li>
          </ol>
        </div>
      </div>
    </div>
    <!--产品优势-->
    <div class="pro-adv">
      <h3>CNFS产品优势</h3>
      <div class="procon">
        <div class="procon-list">
          <img src="@/assets/store/youshi_1.png" />
          <h4>完全托管</h4>
          <p>
            云中完全托管的服务，可以轻松创建和运行高性能文件系统。不再需要考虑安装和配置软件，以及复杂的性能调优工作，只需几分钟就能立刻开始使用高性能的文件存储，开始你的业务
          </p>
        </div>
        <div class="procon-list">
          <img src="@/assets/store/youshi_2.png" />
          <h4>超高吞吐和IOPS</h4>
          <p>
            文件存储CPFS采用分布式的并行架构，数据条带化后均匀分布在存储集群上，可以实现计算节点并行访问，提供数十GB的吞吐和几十万级的IOPS以及毫秒级时延
          </p>
        </div>
        <div class="procon-list">
          <img src="@/assets/store/youshi_3.png" />
          <h4>弹性可扩展</h4>
          <p>
            支持在线的扩容，由于所有数据均以条带化的方式存储并且支持扩容以后的自动负载平衡，可满足性能的线性增长并且即时利用扩容节点的吞吐和存储能力，满足业务增长需要的更多容量与性能的诉求
          </p>
        </div>
      </div>
    </div>
    <!--产品功能-->
    <div class="pro-func">
      <h3>产品功能</h3>
      <div class="profuncon">
        <div class="profuncon-list">
          <div class="profunc-pic"><img src="@/assets/store/img1.png" /></div>
          <div class="profunc-txt">
            <h4>兼容POSIX/MPI</h4>
            <p>
              文件存储CNFS的兼容标准POSIX/MPI，因此您可以使用当前基于 Linux
              的应用程序
            </p>
          </div>
        </div>
        <div class="profuncon-list">
          <div class="profunc-pic"><img src="@/assets/store/img2.png" /></div>
          <div class="profunc-txt">
            <h4>文件管理功能</h4>
            <p>
              支持目录级别的配额设置，及ACL访问控制。用户可以将企业自己的LDAP/NIS集成到文件存储CNFS中
            </p>
          </div>
        </div>
        <div class="profuncon-list">
          <div class="profunc-pic"><img src="@/assets/store/img3.png" /></div>
          <div class="profunc-txt">
            <h4>高吞吐，低延时</h4>
            <p>
              依靠并行架构，用户I/O在客户端和存储节点间完全并行访问，通过集群聚合，吞吐可以线性增加
            </p>
          </div>
        </div>
        <div class="profuncon-list">
          <div class="profunc-pic"><img src="@/assets/store/img4.png" /></div>
          <div class="profunc-txt">
            <h4>计算生态整合</h4>
            <p>
              容器等计算平台整合，支持集群直接挂载CNFS文件系统。用户CNFS中的数据可以借助阿里云丰富的计算生态进行快速分析。
            </p>
          </div>
        </div>
        <div class="profuncon-list">
          <div class="profunc-pic"><img src="@/assets/store/img5.png" /></div>
          <div class="profunc-txt">
            <h4>并发访问优化</h4>
            <p>
              统一命名空间，支持成千上百机器同时并发访问，针对数据处理进行了优化。即使是大量的小文件，访问性能也可以提高10倍以上
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--行业实战场景-->
    <div class="pro-combat">
      <h3>行业实战场景</h3>
      <div class="procombatcon">
        <div class="procombatcon-1">
          <!--<h4>自动驾驶模型训练</h4>
          <p>
            为自动驾驶场景中车载摄像头、雷达、红外等设备采集的大量的小文件，文件存储CPFS提供低延时，高IOPS的访问能力，同时与机器学习/深度学习平台无缝整合，模型训练速度可以提高3倍以上。
          </p>-->
        </div>
        <div class="procombatcon-2">
          <!--<h4>基因组测序数据组装</h4>
          <p>
            基因序列组装需要海量的并发计算作业，文件存储CPFS提供高达百GB的访问带宽，可以满足成百上千个节点同时访问的需求，破除文件IO访问瓶颈，任务完成时间缩短到原来的50%
          </p>-->
        </div>
        <div class="procombatcon-3">
          <!-- <h4>石油勘探业务分析</h4>
          <p>
            大量地质数据需要计算、处理和分析，并且原始地震资料和过程数据需要长期保存。文件存储CPFS提供PB级单一命名空间，支持空间配额灵活管理，资源划分给不同的计算任务，满足业务随时扩展的需要
          </p>-->
        </div>
      </div>
    </div>

    <!-- <el-button>默认按钮</el-button> -->
    <!-- <j-footer></j-footer> -->
  </div>
</template>

<script>
// require styles

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
  padding-left: 20px;
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
  .topcontent {
    width: 100%;
    height: 700px;
    background-image: url("~@/assets/store/img_shoutu.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
      top: 180px;
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
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .store-type {
    padding: 140px 0;
    h3 {
      @include h3;
      display: inline-block;
    }
    .storecon {
      border-top: 1px solid #ebebeb;
      border-left: 1px solid #ebebeb;
      margin: 150px auto 0 auto;
      display: flex;
      justify-content: center;
      width: 1200px;
      .store-list {
        width: 300px;
        font-size: 18px;
        color: #767676;
        transition: all .3s;
        &:hover {
          box-shadow: 0 0 9px 3px #999;
        }
        ul {
          text-align: left;

          background: #f5f5f5;
          li {
            height: 65px;
            line-height: 65px;
            padding: 0 10px;
            border-bottom: 1px solid #ebebeb;
            border-right: 1px solid #ebebeb;
          }
        }
        ol {
          text-align: center;
          li {
            height: 65px;
            line-height: 65px;
            overflow: hidden;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            border-bottom: 1px solid #f5f5f6;
            border-right: 1px solid #f5f5f6;
            & + li {
              padding: 0 10px;
            }
            .store-tit {
              font-size: 24px;
              font-weight: bold;
              color: #333333;
              background: #ebecec;
              border-right: 1px solid #f5f5f6;
            }

            span {
              font-size: 26px;
              color: #f96549;
            }
          }
        }
      }
      align-items: center;
    }
  }
  .pro-adv {
    background: #f5f5f5;
    padding: 140px 0;
    width: 100%;
    h3 {
      @include h3;
      display: inline-block;
    }
    .procon {
      display: flex;
      justify-content: center;
      padding-top: 100px;
      text-align: center;

      .procon-list {
        width: 375px;
        align-items: center;
        margin: 0 18px;
        img {
          height: 152px;
          width: 152px;
        }
        h4 {
          font-size: 28px;
          color: #333;
          padding: 35px 0 15px 0;
        }
        p {
          color: #8f8f8f;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
  .pro-func {
    padding: 140px 0 0 0;
    h3 {
      @include h3;
      display: inline-block;
    }
    .profuncon {
      padding-top: 50px;
      width: 1200px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .profuncon-list:hover {
        box-shadow: 0 0 9px 3px #999;
        transform: translateY(-5px);
      }
      .profuncon-list {
        width: 500px;
        text-align: left;
        margin-bottom: 40px;
        margin: 15px;
        padding: 35px 30px;
        display: flex;
        align-items: flex-start;
        transition: transform 0.3s;
        .profunc-pic {
          float: left;
          width: 70px;
          height: 70px;
        }
        .profunc-txt {
          float: left;
          padding-left: 25px;
          width: 360px;
          h4 {
            color: #333;
            font-size: 28px;
            line-height: 36px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f5f5f6;
          }
          p {
            color: #8f8f8f;
            padding-top: 10px;
            font-size: 20px;
            line-height: 33px;
          }
        }
      }
    }
  }
  .pro-combat {
    padding: 140px 0;
    h3 {
      @include h3;
      display: inline-block;
    }
    .procombatcon {
      width: 1200px;
      color: #fff;
      text-align: center;
      box-sizing: border-box;
      padding-top: 120px;

      div {
        height: 254px;
      }
      h4 {
        font-size: 26px;
        padding-top: 40px;

        line-height: 35px;
        padding-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        text-align: left;
        padding: 0 50px;
      }

      .procombatcon-1 {
        background-image: url("~@/assets/store/cj1.png");

        width: 590px;
        float: left;
      }
      .procombatcon-2 {
        float: right;
        width: 590px;
        background-image: url("~@/assets/store/cj2.png");
      }
      .procombatcon-3 {
        float: left;
        background-image: url("~@/assets/store/cj3.png");
        width: 1200px;
        margin-top: 25px;
        p {
          padding: 0 270px;
        }
      }
    }
  }
}
</style>
