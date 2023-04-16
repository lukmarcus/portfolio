import { Cypress, MVP } from "@/views/blogPosts";
import type { RouteRecordRaw } from "vue-router";

export const blogPosts: RouteRecordRaw[] = [
  {
    path: "cypress-in-action",
    name: "blog-cypress-in-action",
    component: Cypress,
  },
  {
    path: "how-i-bankrupt-my-first-startup-by-not-understanding-the-definition-of-mvp-minimum-viable-product",
    name: "blog-mvp",
    component: MVP,
  },
];
