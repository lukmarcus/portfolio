<template>
  <PageHeader title="Certificates">
    <template #tagline>
      Want me to talk at your event?
      <router-link class="link-on-bg text-link" :to="{ name: 'contact' }">
        Get in touch
      </router-link>
    </template>
  </PageHeader>
  <section class="section pt-5 px-3 px-lg-0">
    <FilterableList>
      <template #filters>
        <Filters name="certificate-filters" v-model="certificateFilters" />
      </template>
      <template #items>
        <div class="container position-relative">
          <Certificate
            v-for="certificate in filteredCertificatesSortedByDate"
            class="item"
            :class="{ hidden: certificate.hidden }"
            :certificate="certificate"
          />
        </div>
      </template>
    </FilterableList>
  </section>
</template>

<script setup lang="ts">
import { Certificate, FilterableList, Filters, PageHeader } from "@/components";
import { useCertificates } from "@/composables";
import { allFilterTag } from "@/types";
import { computed } from "vue";

const { certificates, certificateFilters } = useCertificates();

const filteredCertificates = computed(() => {
  const result = certificates.map((certificate) => {
    const certificateTags = certificate.filterTags.map((tag) =>
      tag.toLowerCase()
    );
    const certificateFilter = certificateFilters.value.find(
      (filter) => filter.isActive && filter.tag !== allFilterTag
    );
    const show = certificateFilter
      ? certificateTags.includes(certificateFilter.tag)
      : true;
    return { ...certificate, hidden: !show };
  });
  return result;
});

const filteredCertificatesSortedByDate = computed(() => {
  return filteredCertificates.value
    .slice(0)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});
</script>
