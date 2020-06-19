<template>
  <div id="app">
    <div id="blog-home">
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
        rel="stylesheet"
      />
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <h3>{{ page_title }}</h3>
          </b-col>
          <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
        </b-row>
        <b-row>
          <b-col>
            <b-container
              v-for="(post, index) in posts"
              :key="post.slug + '_' + index"
              class="mains"
              fluid
            >
              <router-link :to="'/blog/' + post.slug">
                <article class="media">
                  <ol>
                    <li>
                      <figure>
                        <!-- Bind results using a `:` -->
                        <!-- Use a `v-if`/`else` if there is a `featured_image` -->

                        <!-- <img
                          v-if="post.featured_image"
                          :src="post.featured_image"
                          alt=""
                          class="img"
                        />
                        <img
                          v-else
                          src="http://via.placeholder.com/250x250"
                          alt=""
                        /> -->
                      </figure>
                      <h2 class="title">{{ post.title }}</h2>
                    </li>
                  </ol>
                </article>
              </router-link>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Check out my Blog Posts",
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>
<style scoped>
.img {
  max-width: 10rem;
}
h2 {
  text-decoration: none;
  color: #747474;
}
li {
  color: #747474;
  text-decoration: none;
}
h3 {
  font-family: "Amatic SC", cursive;
  padding: 1.2rem 0 3rem 0;
  color: #747474;
}
#blog-home {
  padding-bottom: 25rem;
  background-color: #e6f5f0;
}
</style>
