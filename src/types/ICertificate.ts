import type { AllFilterTag, IFilter } from "./IFilters";
import type { ILanguage } from "./ILanguage";

export type ICertificateFilterTag = "manual" | "playwright" | "jmeter";

export interface ICertificateFilter extends IFilter {
  name: string;
  tag: ICertificateFilterTag | AllFilterTag;
}

export interface ICertificate {
  source: string;
  conference?: string;
  where?: string;
  id: string;
  type: string;
  language: ILanguage;
  title: string;
  description: string;
  date: string;
  filterTags: ICertificateFilterTag[];
}
