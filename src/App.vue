<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link class="space" to="/">Home</router-link>
      <router-link class="space" to="/contact">Contact Me</router-link>-->
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* .space {
  padding-left: 20px;
  padding-right: 20px;
} */
</style>
