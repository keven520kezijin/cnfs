<template>
  <div class="partner-box">
    <div
      class="partner-item"
      v-for="(item, i) in partnerData"
      :key="i"
      :class="item.status === 1 ? 'active' : ''"
    >
      <div class="partner-tit">
        <h2>{{ item.city }}</h2>
        <span>{{ item.isQy === 0 ? "未签约" : "已签约" }}</span>
      </div>
      <p v-if="item.isQy === 0">
        <i>
          <img src="@/assets/partner/huo.png" alt="" /> </i
        ><span>{{ item.num }}人关注</span>
      </p>
      <p v-else>
        <img class="yes" src="@/assets/partner/yes@2x.png" alt="" />
      </p>
      <div class="btn" :class="item.isQy === 0 ? '' : 'hasQy'">签约</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partnerData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="scss">
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
      height: 52px;
      width: 88px;
      line-height: 26px;
      border-bottom: 1px dashed #ccc;
      margin-top: 12px;
      padding-bottom: 6px;
      box-sizing: content-box;
      h2 {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
      }
      span {
        font-size: 14px;
        color: #999;
        text-align: center;
      }
    }
    P {
      width: 88px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        width: 16px;
        height: 16px;
        line-height: 18px;
        margin-right: 4px;
        display: inline-block;
        img {
          width: 12px;
          height: 14px;
        }
      }
      span {
        font-size: 12px;
        color: #9c9c9c;
      }
      .yes {
        width: 27px;
        height: 19px;
      }
    }
    .btn {
      width: 88px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      font-size: 14px;
      color: #fff;
      background: #0d8bff;
      &.hasQy {
        color: #fff;
        background: #666666;
      }
    }
  }
}
</style>