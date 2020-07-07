import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: () => import( /* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () =>
      import( /* webpackChunkName: "Projects" */ "../views/Projects.vue")
  },
  {
    path: "/blog/",
    name: "blog-home",
    component: () =>
      import( /* webpackChunkName: "BlogHome" */ "../views/BlogHome.vue")
  },
  {
    path: "/blog/:slug",
    name: "blog-post",
    component: () =>
      import( /* webpackChunkName: "BlogPost" */ "../views/BlogPost.vue")
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import( /* webpackChunkName: "NotFound" */ "../views/Resume.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import( /* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;