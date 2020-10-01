<template>
  <div class="scene">
    <h2 class="txt">行业实战场景</h2>
    <img src="@/assets/home/s1.png" alt="">
    <img src="@/assets/home/s2.png" alt="">
    <img src="@/assets/home/s3.png" alt="">
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "~@/styles/mobile.scss";
.scene {
  @include page;
  h2.txt {
    margin: 50px 0;
  }
  img {
    width: 335px;
    margin-bottom: 8px;
    &:last-child {
        margin-bottom: 50px;
    }
  }
}
</style>