<template>
  <div class="page">
    <div class="main">
      <h2 class="txt">公司发展历程</h2>
      <swiper class="swiper-box" ref="mySwiper" :options="partnerSwiperOptions">
        <swiper-slide class="partner-group">
          <div class="partner-box">
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item active">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item active">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item active">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="partner-group">
          <div class="partner-box">
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item active">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
            <div class="partner-item active">
              <div class="partner-tit">北京</div>
              <p>100人正在申请<br/>...</p>
              <div class="btn" @click="go('/regionalAgent')">立即查看</div>
            </div>
          </div>
        </swiper-slide>
        <div class="partner-swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      partnerSwiperOptions: {
        pagination: {
          el: ".partner-swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    go(path) {
      this.$router.push(path)
    }
  },
};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
::v-deep .swiper-pagination-bullet {
  width: 30px;
  height: 2px;
  border-radius: 1px;
  margin-top: 20px;
}
.page {
  @include page;
  .main {
    @include page;
    height: 530px;
    background-color: #f5f5f6;
    .txt {
      margin: 40px 0 40px 0;
    }
    .swiper-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .partner-group {
        display: flex;
        align-items: center;
        justify-content: center;
        .partner-box {
          width: 340px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          .partner-item {
            width: 109px;
            height: 154px;
            background-image: url("~@/assets/home/partnerItem.png");
            background-size: 109px 154px;
            box-shadow: 10px 10px 20px 0px rgba(222, 223, 226, 0.5);
            display: flex;
            flex-direction: column;
            align-items: center;
            &.active {
              background-image: url("~@/assets/home/partnerItem-hot.png");
            }
            &:not(:nth-child(3n)) {
              margin-right: 5px;
              margin-bottom: 5px;
            }
            .partner-tit {
              height: 50px;
              width: 88px;
              line-height: 50px;
              font-size: 20px;
              font-weight: 700;
              text-align: center;
              border-bottom: 1px dashed #ccc;
              margin-top: 4px;
            }
            P {
              width: 88px;
              line-height: 18px;
              font-size: 12px;
              color: #9c9c9c;
              text-align: center;
              margin: 16px 0 10px 0;
            }
            .btn {
              width: 88px;
              height: 22px;
              text-align: center;
              line-height: 22px;
              font-size: 14px;
              color: #fff;
              background: #0D8BFF;
            }
          }
        }
      }
    }
  }
}
</style>
