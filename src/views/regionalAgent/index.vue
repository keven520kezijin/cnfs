<template>
  <div class="regionalAgent-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pRegionalAgent from "./regionalAgent"
import mRegionalAgent from "./mRegionalAgent"
export default {
  mixins: [viewsMixin],
  components: {pRegionalAgent, mRegionalAgent},
  computed: {
    pageCom() {
      if(this.device === 'desktop') {
        return 'pRegionalAgent'
      } else {
        return 'mRegionalAgent'
      }
    }
  }

}
</script>

<style>
.regionalAgent-page {}
</style>