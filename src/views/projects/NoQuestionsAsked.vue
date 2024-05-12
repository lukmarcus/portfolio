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
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue01.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </li>
      <li>
        Issue #02:
        <a
          data-bs-toggle="collapse"
          href="#issue02"
          aria-expanded="false"
          aria-controls="issue"
        >
          Hero slides instead of walking when holding the mouse button and
          slowly dragging
        </a>
        <div class="collapse" id="issue02">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game.</li>
            <li>Click on the hero and hold the mouse button.</li>
            <li>Slowly move mouse.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> Hero slides with no or almost no
            animation.
          </p>
          <p><strong>Expected result:</strong> Hero is walking around.</p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue02.jpg')" class="w-100" />
          </p>
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue02.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </li>
      <li>
        Issue #03:
        <a
          data-bs-toggle="collapse"
          href="#issue03"
          aria-expanded="false"
          aria-controls="issue"
        >
          Cursor doesn't change color after moving out of the interactive object
          (with keys)
        </a>
        <div class="collapse" id="issue03">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game.</li>
            <li>
              Move the cursor over the cabinet to change its color to golden (as
              an interactive object).
            </li>
            <li>Move the hero with keys until the screen moves.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The mouse color stays golden until
            moves to another interactive object.
          </p>
          <p>
            <strong>Expected result:</strong> The mouse cursor changes color
            after moving out of the interactive object.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue03.jpg')" class="w-100" />
          </p>
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue03.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
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

    const video = (filename: string) =>
      getAsset(`@/images/projects/noquestionsasked/${filename}`);

    return {
      imagesPaths: getImagesPaths(props.project, 4),
      img,
      video,
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
