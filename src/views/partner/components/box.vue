<template>
  <div class="box">
    <h2 class="txt">{{title}}</h2>
    <slot></slot>
    <img class="box-img" :src="boxImg" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    boxImg: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    }
  },
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
.box {
  @include page;
  .box-img {
    width: 90%;
    margin-bottom: 30px;
  }
}
</style>
