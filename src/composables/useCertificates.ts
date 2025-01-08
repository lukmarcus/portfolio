import { getNeededFilters } from "@/modules/filters/filters";
import type {
  ICertificate,
  ICertificateFilter,
  ILanguageFilter,
} from "@/types";
import { ref, type Ref } from "vue";
import { useDB } from "./useDB";

export function useCertificates(): {
  certificates: ICertificate[];
  certificateFilters: Ref<ICertificateFilter[]>;
  languageFilters: Ref<ILanguageFilter[]>;
} {
  const { certificates, certificateFilters, languageFilters } = useDB();

  return {
    certificates,
    certificateFilters: ref(
      getNeededFilters(certificates, "filterTags", certificateFilters)
    ),
    languageFilters: ref(
      getNeededFilters(certificates, "language", languageFilters)
    ),
  };
}
