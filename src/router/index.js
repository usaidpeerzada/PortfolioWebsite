import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue")
  },
  {
    path: "/blog/",
    name: "blog-home",
    component: () =>
      import(/* webpackChunkName: "BlogHome" */ "../views/BlogHome.vue")
  },
  {
    path: "/blog/:slug",
    name: "blog-post",
    component: () =>
      import(/* webpackChunkName: "BlogPost" */ "../views/BlogPost.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
