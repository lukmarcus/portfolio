<template>
  <div
    class="row flex-md-row bg-white shadow-sm"
    :class="[...certificate.filterTags]"
  >
    <div class="container my-4">
      <div class="row align-items-center">
        <div class="col-12 col-md-4 col-lg-5 mb-3 mb-md-0">
          <img
            :src="'/src/images/certificates/' + certificate.image"
            class="img-fluid fixed-width"
          />
        </div>
        <div class="col-12 col-md-8 col-lg-7">
          <h4>{{ certificate.title }}</h4>
          <ul class="certificate-meta list-inline mb-2">
            <li class="list-inline-item me-3">
              <font-awesome-icon :icon="['far', 'clock']" class="me-2" />
              {{ certificate.date }}
            </li>
            <li class="list-inline-item">
              <font-awesome-icon class="me-2" icon="fa-regular fa-lightbulb" />
              <template v-if="certificate.link">
                <a :href="certificate.link">{{ certificate.source }}</a>
              </template>
              <template v-else>{{ certificate.source }}</template>
            </li>
          </ul>
          <div>
            {{ certificate.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICertificate } from "@/types";

defineProps<{ certificate: ICertificate }>();
</script>

<style scoped>
a {
  color: #41a4f5;
}
</style>
