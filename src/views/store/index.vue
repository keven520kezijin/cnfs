<template>
  <div class="store">
    <m-top />
    <m-banner :bgImg="bgImg" class="banner"></m-banner>
    <superiority />
    <product />
    <m-footer class="footer-box" />
  </div>
</template>

<script>
import mBanner from "@/components/mBanner";
import mFooter from "@/components/mfooter";
import mTop from "@/components/mTop";
import superiority from "./components/mobile/superiority" // product
import product from "./components/mobile/product" // product
export default {
  name: "",
  components: {
    mBanner,
    mTop,
    mFooter,
    superiority,
    product
  },
  props: {},
  data() {
    return {      
      bgImg: require("@/assets/home/m-banner2.png"),
      box1Src: require("@/assets/home/box1.png"),
    };
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
.store {
  @include page;
}
</style>
