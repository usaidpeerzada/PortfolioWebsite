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
     path: '/blog',
     beforeEnter() {location.href = 'https://usaid-blog.netlify.com'}
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
  // meta: {
  //   progress: {
  //     func: [{
  //         call: "color",
  //         modifier: "temp",
  //         argument: "#ffb000"
  //       },
  //       {
  //         call: "fail",
  //         modifier: "temp",
  //         argument: "#6e0000"
  //       },
  //       {
  //         call: "location",
  //         modifier: "temp",
  //         argument: "top"
  //       },
  //       {
  //         call: "transition",
  //         modifier: "temp",
  //         argument: {
  //           speed: "1.5s",
  //           opacity: "0.6s",
  //           termination: 400
  //         }
  //       }
  //     ]
  //   }
  // }
});

export default router;
