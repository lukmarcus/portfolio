<template>
  <div>
    <p></p>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h3 class="section-title">sub title</h3>
    <Quote> Some quote </Quote>

    <p>paragraph</p>
    <h3 class="section-title">sub title</h3>
    <p>
      <img class="img-fluid w-100" :src="img('pyramid.png')" />
    </p>
    <h4 class="section-subtitle">sub sub title</h4>
    <h4 class="section-subtitle">sub sub title</h4>
    <h4 class="section-subtitle">sub sub title</h4>
    <h3 class="section-title">sub title</h3>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "@/components";
import { useAssets } from "@/composables";
import type { IBlogPost } from "@/types";

const { getAsset } = useAssets();
const props = defineProps<{ blogPost: IBlogPost }>();

const img = (filename: string) =>
  getAsset(`@/images/blog/${props.blogPost.slug}/${filename}`);
</script>
