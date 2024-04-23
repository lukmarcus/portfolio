import type { AllFilterTag, IFilter } from ".";

export type IProjectBadge =
  | "Android"
  | "Angular"
  | "Blockchain"
  | "C/C++"
  | "Django"
  | "Java"
  | "jQuery"
  | "Python"
  | "TypeScript"
  | "Vue"
  | "Game"
  | "Role-Playing Game"
  | "Board Game"
  | "Open Source"
  | "Rest API"
  | "Website";

export type ITechnology =
  | "android"
  | "android-debug-bridge"
  | "angular"
  | "apollographql"
  | "babeljs"
  | "bootstrap4"
  | "bootstrap5"
  | "c"
  | "chrome-devtools"
  | "cookiecutter"
  | "cpp"
  | "css3"
  | "cypress"
  | "django-rest-framework"
  | "django"
  | "docker"
  | "git"
  | "github"
  | "github-pages"
  | "gitlab"
  | "google-analytics"
  | "graphql"
  | "html5"
  | "java"
  | "javascript"
  | "jenkins"
  | "jestjs"
  | "linux"
  | "jira"
  | "jquery"
  | "mantis"
  | "netlify"
  | "paypal"
  | "postgresql"
  | "ps3"
  | "python"
  | "solr"
  | "sqlalchemy"
  | "testlink"
  | "testrail"
  | "steam"
  | "stripe"
  | "typescript"
  | "vue"
  | "windows"
  | "xbox360"
  | "xstate";

export type IProjectFilterTag =
  | "android"
  | "blockchain"
  | "bootstrap"
  | "c-cpp"
  | "java"
  | "js-ts"
  | "python-django"
  | "responsive"
  | "vue";

export interface IProjectFilter extends IFilter {
  name: string;
  tag: IProjectFilterTag | AllFilterTag;
}

export interface IProject {
  name: string;
  slug: string;
  url?: string;
  urlName?: string;
  archivedUrl?: string;
  type: string;
  companyName?: string;
  companyUrl?: string;
  thumbnail: string;
  summaryTitle: string;
  summary: string;
  filterTags: IProjectFilterTag[];
  badges: IProjectBadge[];
  technologies: ITechnology[];
  thumbnailLogo: string;
  featured: boolean;
  repositoryName?: string;
  repositoryUrl?: string;
}
export interface ICompany {
  name: string;
  url?: string;
  logo: string;
}
export interface ISkillGroup {
  name: string;
  skills: string[];
  icon: string;
}
