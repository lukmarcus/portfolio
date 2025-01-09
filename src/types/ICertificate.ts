import type { AllFilterTag, IFilter } from "./IFilters";

export type ICertificateFilterTag =
  | "manual"
  | "playwright"
  | "typescript"
  | "javascript"
  | "jmeter";

export interface ICertificateFilter extends IFilter {
  name: string;
  tag: ICertificateFilterTag | AllFilterTag;
}

export interface ICertificate {
  source: string;
  link?: string;
  image: string;
  title: string;
  description: string;
  date: string;
  filterTags: ICertificateFilterTag[];
}
