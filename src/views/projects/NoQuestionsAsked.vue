<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>
      I first heard about "No Questions Asked" on the pop culture podcast
      <a href="https://www.niezatapialni.pl/">Niezatapialni</a> where it
      received very good reviews. It is a short point & click game created by
      Poles and available for free on the
      <a href="https://store.steampowered.com/">Steam</a> platform.
    </p>

    <p class="video-container">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/IDpyM8uemfw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My Role in This Project</h3>
    <p>
      Encouraged by the good reviews, I decided to check out this title. And
      since it was a time when I was looking for small projects to test, it
      became a great opportunity to report some bugs I found.
    </p>
    <p>
      The Troubadour Collective, the authors of the game, encouraged this
      themselves by posting a thread titled "Bug Reports" in Steam discussions,
      where they wrote "If you encounter a bug or a crash, please report it
      here."
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p></p>
  </div>

  <div class="section-row">
    <h3 class="section-title">The Task</h3>
    <h4 class="section-subtitle"></h4>
    <p></p>

    <h4 class="section-subtitle">Issues</h4>
    <p></p>
    <p>[Click on a link to expand its description]</p>
    <ul id="issues">
      <li>
        Issue #01:
        <a
          data-bs-toggle="collapse"
          href="#issue01"
          aria-expanded="false"
          aria-controls="issue"
        >
          The incorrect color of the mouse cursor is seen on the starting
          location after clicking the pinboard
        </a>
        <div class="collapse" id="issue01">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Click on the pinboard.</li>
            <li>Don't move the mouse cursor.</li>
            <li>Pay attention to the color of the mouse cursor.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The incorrect color of the mouse
            cursor (golden) is seen on the starting location after clicking the
            pinboard.
          </p>
          <p>
            <strong>Expected result:</strong> The correct color of the mouse
            cursor (silver) is seen on the starting location after clicking the
            pinboard.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue01.jpg')" class="w-100" />
          </p>
        </div>
      </li>
      <li>
        Issue #0933305:
        <a
          data-bs-toggle="collapse"
          href="#issue0933305"
          aria-expanded="false"
          aria-controls="issue"
        >
          The 404 error is shown on the 'Projects' page after clicking on the
          top menu
        </a>
        <div class="collapse" id="issue0933305">
          <p></p>
          <ul>
            <li><strong>Priority:</strong> high</li>
            <li><strong>Severity:</strong> major</li>
            <li><strong>Reproducibility:</strong> N/A</li>
            <li><strong>Platform:</strong> Google Chrome 87.0.4280.88</li>
            <li><strong>OS:</strong> Windows</li>
            <li><strong>OS Version:</strong> 10 x64</li>
          </ul>
          <p></p>
          <p>
            <strong>Description:</strong> The 404 error (page not found) is
            shown on the 'Projects' page after clicking the 'Projects' link in
            the top menu on the 'Design' page.
          </p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Open page http://trainingcentre.wixsite.com/design.</li>
            <li>
              Click the 'Projects' link in the top menu below the header image.
            </li>
            <li>
              Pay attention to the error message at the center of the page.
            </li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The 404 error (page not found) is
            shown on the 'Projects' page after clicking the 'Projects' link in
            the top menu on the 'Design' page.
          </p>
          <p>
            <strong>Expected result:</strong> The 'Projects' page is shown on
            the 'Projects' page after clicking the 'Projects' link on the
            'Design' page.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue0933305.jpg')" class="w-100" />
          </p>
        </div>
      </li>
      <li>
        Issue #0933311:
        <a
          data-bs-toggle="collapse"
          href="#issue0933311"
          aria-expanded="false"
          aria-controls="issue"
        >
          The design page is not scrolled to the top after clicking the 'Up'
          button
        </a>
        <div class="collapse" id="issue0933311">
          <p></p>
          <ul>
            <li><strong>Priority:</strong> low</li>
            <li><strong>Severity:</strong> minor</li>
            <li><strong>Reproducibility:</strong> N/A</li>
            <li><strong>Platform:</strong> Google Chrome 87.0.4280.88</li>
            <li><strong>OS:</strong> Windows</li>
            <li><strong>OS Version:</strong> 10 x64</li>
          </ul>
          <p></p>
          <p>
            <strong>Description:</strong> : The 'Design' page is not scrolled to
            the top after clicking the 'Up' button at the bottom of the page
            right above the footer.
          </p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Open page http://trainingcentre.wixsite.com/design.</li>
            <li>Scroll to the bottom of the page.</li>
            <li>
              Click on the 'Up' button on the right side above the footer.
            </li>
            <li>Pay attention to the current position on the page.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The 'Design' page is not scrolled to
            the top after clicking the 'Up' button on the bottom of the page.
          </p>
          <p>
            <strong>Expected result:</strong> The 'Design' page is scrolled to
            the top after clicking the 'Up' button on the bottom of the page.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p><img :src="img('issue0933311.jpg')" class="w-100" /></p>
        </div>
      </li>
    </ul>
  </div>
  <div class="section-row">
    <h3 class="section-title">What I Learned</h3>
    <p></p>
  </div>
</template>

<script lang="ts">
import { useAssets, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineProps } from "vue";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();

export default {
  name: "No Questions Asked",
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true,
    },
    testimonials: {
      type: Array as PropType<ITestimonial[]>,
      required: true,
    },
  },
  setup(props) {
    const { getImagesPaths } = useProject();
    const { getAsset } = useAssets();

    const img = (filename: string) =>
      getAsset(`@/images/projects/noquestionsasked/${filename}`);

    return {
      imagesPaths: getImagesPaths(props.project, 4),
      img,
    };
  },
};
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
