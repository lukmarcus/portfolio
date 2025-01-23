import { useDB } from "@/composables";
import { Certificates, Home, Project, Projects, Resume, Talks } from "@/views";
import type { RouteRecordRaw, RouterScrollBehavior } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { projects } from "./projects";

const { resume } = useDB();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/project/",
    name: "project",
    component: Project,
    children: projects,
  },
  {
    path: "/certificates",
    name: "certificates",
    component: Certificates,
  },
  {
    path: "/talks",
    name: "talks",
    component: Talks,
  },
  {
    path: "/contact",
    name: "contact",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

if (resume.url) {
  routes.push({
    path: "/resume",
    name: "resume",
    component: Resume,
  });
}

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0, behavior: "auto" };
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
