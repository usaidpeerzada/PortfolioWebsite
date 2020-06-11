<template>
  <span class="go-back">
    <b-button variant="outline-success" @click="goBack">Go Back</b-button>
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

<style lang="scss" scoped></style>
