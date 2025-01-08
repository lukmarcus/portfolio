import { getNeededFilters } from "@/modules/filters/filters";
import type { ICertificate, ICertificateFilter } from "@/types";
import { ref, type Ref } from "vue";
import { useDB } from "./useDB";

export function useCertificates(): {
  certificates: ICertificate[];
  certificateFilters: Ref<ICertificateFilter[]>;
} {
  const { certificates, certificateFilters } = useDB();

  return {
    certificates,
    certificateFilters: ref(
      getNeededFilters(certificates, "filterTags", certificateFilters)
    ),
  };
}
