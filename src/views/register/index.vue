<template>
  <div class="page-register">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pRegister from "./register"
import mRegister from "./mRegister"
export default {
  mixins: [viewsMixin],
  components: {pRegister, mRegister},
  computed: {
    pageCom() {
      if(this.device === 'desktop') {
        return 'pRegister'
      } else {
        return 'mRegister'
      }
    }
  }

}
</script>

<style scoped lang="scss">
.page-register {
  height: 100%;
}
</style>