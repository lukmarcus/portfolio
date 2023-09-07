<template>
  <div
    class="header-intro header-intro-resume theme-bg-primary text-white py-5"
    style="flex: none"
  >
    <div class="container position-relative">
      <h2 class="page-heading mb-3">Resume</h2>
      <a
        v-if="pdfUrl"
        class="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto"
        :href="pdfUrl"
        target="_blank"
        ><i class="fas fa-download me-2"></i>Download PDF Version</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDB } from "@/composables";
const {
  resume: { pdfUrl },
} = useDB();
</script>
