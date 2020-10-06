<template>
  <div class="partner-page">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pPartner from "./partner"
import mPartner from "./mPartner"
export default {
  mixins: [viewsMixin],
  components: {pPartner, mPartner},
  computed: {
    pageCom() {
      if(this.device === 'desktop') {
        return 'pPartner'
      } else {
        return 'mPartner'
      }
    }
  }
}
</script>

<style>

</style>