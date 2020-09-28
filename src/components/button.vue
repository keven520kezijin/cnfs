<template>
  <div class="button bn"><slot></slot></div>
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
.button {
  box-sizing: border-box;
  width: 150px;
  height: 40px;
  border-radius: 6px;
  border: 1px #ccc solid;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in;
}
.button-icon {
  font-size: 16px !important;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  height: 16px;
}
.button:hover {
  background: #fff;
  color: #168bd5;
  .button-icon {
    color: #168bd5;
  }
}
</style>
