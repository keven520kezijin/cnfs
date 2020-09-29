<template>
  <div class="sustain">
    <h2 class="txt">平台支持</h2>
    <img class="sustain-img" v-for="(item, i) in arrImg" :key="i" :src="item" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    arrImg: {
      type: Array,
      default() {
        return []
      }
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
.sustain {
  @include page;
  .sustain-img {
    width: 90%;
    margin-bottom: 24px;
  }
}
</style>
