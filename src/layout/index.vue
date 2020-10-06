<template>
  <div class="page">    
    <component :is="topCom"></component>
    <router-view :key="key" />
    <component :is="footerCom"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pTop from "@/components/top";
import mTop from "@/components/mTop";
import pFooter from "@/components/footer";
import mFooter from "@/components/mfooter";
import ResizeMixin from './mixin/ResizeHandler'
export default {
  mixins: [ResizeMixin],
  components: {pTop, mTop, pFooter, mFooter},
  created() {
    // console.log('layout')
  },
  computed: {
    ...mapState({
      device: state => state.user.device,
    }),
    topCom() {
      if(this.device === 'desktop') {
        return 'p-top'
      } else {
        return 'm-top'
      }
    },
    footerCom() {
      if(this.device === 'desktop') {
        return 'p-footer'
      } else {
        return 'm-footer'
      }
    },
    key() {
      // console.log("this.$route.path: ", this.$route.path)
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>