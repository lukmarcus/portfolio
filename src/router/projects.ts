import {
  BestFriends,
  CV,
  CastoPro,
  DeadIsland,
  DesignForLife,
  HiveProjects,
  NoQuestionsAsked,
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
    path: "hive-projects",
    name: "project-hive-projects",
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
    path: "ultimate-unit-converter",
    name: "project-ultimate-unit-converter",
    component: DeadIsland,
  },
  {
    path: "no-questions-asked",
    name: "project-no-questions-asked",
    component: NoQuestionsAsked,
  },
  {
    path: "the-palace-on-the-hill",
    name: "project-the-palace-on-the-hill",
    component: DeadIsland,
  },
  {
    path: "pixel-wheels",
    name: "project-pixel-wheels",
    component: DeadIsland,
  },
  {
    path: "design-for-life",
    name: "project-design-for-life",
    component: DesignForLife,
  },
  {
    path: "best-friends",
    name: "project-best-friends",
    component: BestFriends,
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
    path: "afterbomb-madness",
    name: "project-afterbomb-madness",
    component: DesignForLife,
  },
  {
    path: "castopro",
    name: "project-castopro",
    component: CastoPro,
  },
];
