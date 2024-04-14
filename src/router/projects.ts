import {
  CV,
  CastoPro,
  DeadIsland,
  DesignForLife,
  HiveProjects,
  OperaMobile,
  Pitchup,
  PitchupPWA,
  Portfolio,
  Seerene,
  SpisTresci,
} from "@/views/projects";

import type { RouteRecordRaw } from "vue-router";

export const projects: RouteRecordRaw[] = [
  {
    path: "opera-mobile",
    name: "project-opera-mobile",
    component: OperaMobile,
  },
  {
    path: "spistresci",
    name: "project-spistresci-pl",
    component: SpisTresci,
  },
  {
    path: "seerene",
    name: "project-seerene",
    component: Seerene,
  },
  { path: "pithchup.com", name: "project-pitchup.com", component: Pitchup },
  { path: "pithchup-pwa", name: "project-pitchup-pwa", component: PitchupPWA },
  {
    path: "hiveprojects.io",
    name: "project-hiveprojects.io",
    component: HiveProjects,
  },
  {
    path: "portfolio",
    name: "project-portfolio",
    component: Portfolio,
  },
  {
    path: "cv",
    name: "project-cv",
    component: CV,
  },
  {
    path: "call-of-juarez-the-cartel",
    name: "project-call-of-juarez-the-cartel",
    component: HiveProjects,
  },
  {
    path: "dead-island",
    name: "project-dead-island",
    component: DeadIsland,
  },
  {
    path: "design-for-life",
    name: "project-design-for-life",
    component: DesignForLife,
  },
  {
    path: "neuroshima",
    name: "project-neuroshima",
    component: DesignForLife,
  },
  {
    path: "neuroshima-hex",
    name: "project-neuroshima-hex",
    component: DesignForLife,
  },
  {
    path: "afterbomb",
    name: "project-afterbomb",
    component: DesignForLife,
  },
  {
    path: "castopro",
    name: "project-castopro",
    component: CastoPro,
  },
];
