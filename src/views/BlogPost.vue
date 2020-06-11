<template>
  <div id="blog-post">
    <link
      href="https://fonts.googleapis.com/css2?family=Alegreya&family=Alegreya+Sans&family=Merriweather&family=Merriweather+Sans&family=Nunito&family=Nunito+Sans&family=Quattrocento&family=Quattrocento+Sans&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&display=swap"
      rel="stylesheet"
    />
    <div class="goback">
      <GoBack />
    </div>
    <h2>{{ post.data.title }}</h2>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div class="body" v-html="post.data.body"></div>

    <!-- <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >
      {{ post.meta.previous_post.title }}
    </router-link> -->
    <!-- <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >
      {{ post.meta.next_post.title }}
    </router-link> -->
  </div>
</template>

<script>
import { butter } from "@/buttercms";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
  },
  name: "blog-post",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
}
h4 {
  font-family: "Nunito", sans-serif;
}
#blog-post {
  padding: 2rem 0 25rem 0;
  background: #69d5b1;
  color: #3a3a3a;
}
.body {
  padding: 0 2rem;
}
.goback {
  text-align: left;
  margin: 0 1.5rem;
}
</style>
