<template>
  <div class="container mx-auto sm:h-full">
    <NavBar />
    <a
      id="download-btn"
      class="
        text-teal-500
        bg-teal-300
        hover:text-teal-600 hover:bg-teal-200
        py-3
        px-3
        focus:outline-none focus:shadow-outline-teal focus:border-teal-300
        font-medium
        rounded-md
      "
      href="/ResumeUsaidv4.pdf"
    >
      Download Resume
    </a>
    <pdf class="mt-16" src="/ResumeUsaidv4.pdf"></pdf>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import pdf from "vue-pdf";
export default {
  components: {
    NavBar,
    pdf,
  },
};
</script>

<style scoped>
#download-btn {
  z-index: 1;
  position: relative;
  top: 40px;
}
</style>
