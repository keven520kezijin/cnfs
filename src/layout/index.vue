<template>
  <div class="page">
    <router-view :key="key" />
  </div>
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'
export default {
  mixins: [ResizeMixin],
  created() {
    console.log('layout')
  },
  computed: {
    key() {
      console.log("this.$route.path: ", this.$route.path)
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>