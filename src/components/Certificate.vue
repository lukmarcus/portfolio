<template>
  <div
    class="row flex-lg-row bg-white shadow-sm"
    :class="[...certificate.filterTags, certificate.language]"
  >
    <div class="col-12 col-auto talk-media-holder ratio ratio-16x9 me-md-3">
      <iframe
        v-if="certificate.source == 'youtube'"
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + certificate.id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>

    <div class="col p-4">
      <h4>{{ certificate.title }}</h4>
      <ul class="talk-meta list-inline mb-2">
        <li class="list-inline-item me-3">
          <font-awesome-icon :icon="['far', 'clock']" class="me-2" />{{
            certificate.date
          }}
        </li>
        <li class="list-inline-item me-3 talk-type">
          <font-awesome-icon
            v-if="certificate.type == 'podcast'"
            class="me-2"
            icon="headphones"
          />
          <font-awesome-icon
            v-else-if="certificate.type == 'video'"
            class="me-2"
            icon="video"
          />
          {{ certificate.type }}
        </li>
        <li class="list-inline-item me-3">
          <span class="flag me-2" style="margin-top: -2px">
            {{ flags[certificate.language] }}
          </span>
          <span class="lang">{{ certificate.language }}</span>
        </li>
      </ul>
      <div class="talk-content">
        {{
          certificate.description ||
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus penatibus et magnis dis parturient montes, nascetur ridiculus mus.."
        }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDB } from "@/composables";
import type { ICertificate } from "@/types";

const { flags } = useDB();
defineProps<{ certificate: ICertificate }>();
</script>

<style scoped>
.talk-type,
.lang {
  text-transform: capitalize;
}
</style>
