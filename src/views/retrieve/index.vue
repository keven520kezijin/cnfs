<template>
  <div class="retrieve-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pRetrieve from "./retrieve"
import mRetrieve from "./mRetrieve"
export default {
  mixins: [viewsMixin],
  components: {pRetrieve, mRetrieve},
  computed: {
    pageCom() {
      if(this.device === 'desktop') {
        return 'pRetrieve'
      } else {
        return 'mRetrieve'
      }
    }
  }
}
</script>

<style>

</style>