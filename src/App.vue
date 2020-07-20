<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <router-view />

    <!-- <div class="">
       <Footer />
    </div> -->
  </div>
</template>

<script>
// import Footer from "@/components/Footer.vue";

export default {
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach(() => {
      this.$Progress.finish();
    });
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: -0px !important;
}
</style>
