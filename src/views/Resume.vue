<template>
  <ResumeHeader />
  <article class="resume-wrapper text-center position-relative">
    <div class="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
      <iframe
        id="resume-iframe"
        :src="url"
        width="100%"
        scrolling="no"
      ></iframe>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ResumeHeader } from "@/components";
import { useDB } from "@/composables";

const {
  resume: { url },
} = useDB();

window.addEventListener(
  "message",
  function ({ origin, data: { type, height, width } }) {
    const urlWithoutLastSlash = url.replace(/\/$/, "");
    if (origin === urlWithoutLastSlash) {
      switch (type) {
        case "size": {
          const iframe = document.getElementById(
            "resume-iframe"
          ) as HTMLIFrameElement | null;

          if (iframe?.parentElement && height && width) {
            iframe.height = height + "px";
            iframe.width = width + "px";
            iframe.parentElement.style.maxWidth = width + "px";
          }
          break;
        }

        default:
          console.error("Unknown message type:", type);
      }
    }
  },
  false
);
</script>
