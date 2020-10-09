<template>
  <div class="page-login">
    <component :is="pageCom"></component>
  </div>
</template>

<script>
import viewsMixin from "@/views/mixin/";
import pLogin from "./login"
import mLogin from "./mLogin"
export default {
  mixins: [viewsMixin],
  components: {pLogin, mLogin},
  computed: {
    pageCom() {
      if(this.device === 'desktop') {
        return 'pLogin'
      } else {
        return 'mLogin'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page-login {
  height: 100%;
}
</style>