<template>
  <div class="store">
    <m-top />
    <m-banner :bgImg="bgImg" class="banner"></m-banner>
    <store />
    <superiority />
    <product />
    <scene />
    <m-footer class="footer-box" />
  </div>
</template>

<script>
import mBanner from "@/components/mBanner";
import mFooter from "@/components/mfooter";
import mTop from "@/components/mTop";
import superiority from "./components/mobile/superiority" // product
import product from "./components/mobile/product" // scene
import scene from "./components/mobile/scene" // store
import store from "./components/mobile/store" // store
export default {
  name: "",
  components: {
    mBanner,
    mTop,
    mFooter,
    superiority,
    product,
    scene,
    store
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
