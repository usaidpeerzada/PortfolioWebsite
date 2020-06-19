<template>
  <span class="go-back">
    <b-button @click="goBack">Go Back</b-button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
button {
  color: white;
  background: #028090;
  border: 0;
}
button:hover {
  background: #028090;
}
</style>
