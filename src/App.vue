<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  created() {
    // this.$Progress.start()
    // this.$router.beforeEach((to, from, next) => {
    //   if (to.meta.progress !== undefined) {
    //     let meta = to.meta.progress
    //     this.$Progress.parseMeta(meta)
    //   }
    //   console.log(from, next)
    //   this.$Progress.start()
    // })
    // this.$router.afterEach((to, from) => {
    //   this.$Progress.finish()
    //   // console.log("from: ", from)
    // })
  },
  mounted() {
    // this.$Progress.finish()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
