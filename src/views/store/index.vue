<template>
  <div class="store-page">
    <p-store v-if="device === 'desktop'" />
    <m-store v-if="device === 'mobile'" />
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pStore from "./store"
import mStore from "./mStore"
export default {
  mixins: [viewsMixin],
  components: {
    pStore,
    mStore
  }
}
</script>

<style>

</style>