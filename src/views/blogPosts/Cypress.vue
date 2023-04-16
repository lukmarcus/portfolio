<template>
  <div>
    <p></p>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h3 class="section-title">Why E2E tests and why Cypress</h3>

    <p>
      From the start, I would like to emphesize that E2E tests are not a silver
      bullet. They are much slower and often much more difficult to write than
      unit tests.

      <!-- <img class="img-fluid w-100" :src="img('pyramid.png')" /> -->
    </p>

    <Quote> Some quote </Quote>

    <p>paragraph</p>
    <h3 class="section-title">
      How to use power of E2E tests to benefit your project
    </h3>
    <p>
      Having test written is not enough. It is crucial to have them executed as
      often and as early as possible. The starting poing could be to run them on
      staging environment before every release, what can significantly reduce
      time needed to test the code which is going to be released to production.
    </p>
    <h4 class="section-subtitle">Earlier!</h4>
    <p>
      In my opinion, the absolute minimum is to run them against each commit
      merged to main branch, so everone would know that code which is on main
      branch can be actually deployed to production. Tests still could be run
      against single instance, however it is much better to run them against the
      code before it is actually merged to main branch. This way, you can be
      sure that the code which is going to be merged to main branch is actually
      working.
    </p>
    <h4 class="section-subtitle">Earlier!</h4>
    <p>
      In my opinion ideal situation is to run them for every commit, on every
      Pull Request. However this is much easier to say then done. This
      introduces a lot of chanalnges.
    </p>
    <ul>
      <li>
        E2E tests are much slower than unit tests. We do not want to block merge
        of PR for an 15 minutes of longer.
        <ul>
          <li>
            Tests marked as <b>smoke tests</b> could be marked as blocking the
            merge
          </li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        An error in the other service, could cause your tests to fail, despite
        no errors in you Pull Request.
      </li>
      <li>Dedicated endpoint needed</li>
    </ul>
    <h4 class="section-subtitle">sub sub title</h4>
    <h4 class="section-subtitle">sub sub title</h4>
    <h4 class="section-subtitle">sub sub title</h4>
    <h3 class="section-title">How to integrate Cypress with your Project</h3>
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
