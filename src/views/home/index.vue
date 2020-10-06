<template>
  <div class="main-page">
    <p-home v-if="device === 'desktop'" />
    <m-home v-if="device === 'mobile'" />
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pHome from "./home"
import mHome from "./mHome"
export default {
  mixins: [viewsMixin],
  components: {
    pHome,
    mHome
  }
};
</script>

<style>
</style>