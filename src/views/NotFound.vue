<template>
  <div class="container">
    <div class="sm:w-full mb-4">
      <img src="../assets/pagenotfound.png" alt="404img" class="fimg" />
      <h1>Not Found</h1>
      <p>
        Oops! we couldn't find that page. Try
        <router-link to="/"> <b>Home</b> </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fimg {
  width: 62rem;
  margin: 0 auto;
}
</style>
