<template>
  <div
    class="row flex-lg-row bg-white shadow-sm"
    :class="[...certificate.filterTags]"
  >
    <div class="col-auto certificate-media-holder ratio me-md-3">
      <img
        :src="'/src/images/certificates/' + certificate.image"
        class="certificate-img"
      />
    </div>

    <div class="col p-4">
      <h4>{{ certificate.title }}</h4>
      <ul class="certificate-meta list-inline mb-2">
        <li class="list-inline-item me-3">
          <font-awesome-icon :icon="['far', 'clock']" class="me-2" />{{
            certificate.date
          }}
        </li>
        <li class="list-inline-item me-3 certificate-type">
          <font-awesome-icon class="me-2" icon="fa-regular fa-lightbulb" />
          <span v-if="certificate.link">
            <a :href="certificate.link">{{ certificate.source }}</a>
          </span>
          <span v-if="!certificate.link">{{ certificate.source }}</span>
        </li>
      </ul>
      <div>
        {{
          certificate.description ||
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus penatibus et magnis dis parturient montes, nascetur ridiculus mus.."
        }}
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
