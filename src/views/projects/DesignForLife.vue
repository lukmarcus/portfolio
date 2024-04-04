<template>
  <div class="section-row">
    <h3 class="section-title">Project background</h3>
    <p>
      The
      <a
        href="https://en.training.qatestlab.com/course/software-testing-fundamentals/"
        >'Fundamentals of Software Testing'</a
      >
      course from <a href="https://qatestlab.com/">QATestLab</a> covered various
      topics. The first task (homework), like a warm-up, involved familiarizing
      myself with the bug reporting process in Mantis Bug Tracker based on bugs
      found in a short video recording. In this video, a user navigated a simple
      website called 'Design for Life' and demonstrated the effects of various
      page elements.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My Role in This Project</h3>
    <p>
      As I mentioned above, I was supposed to find bugs and report them to the
      system. Although the video contained many errors that could be considered
      bugs, the homework assignment only required up to three reports from me -
      you didn't get any extra points for a larger number. Together with the
      task description, I was provided with environment data, which was required
      to be entered into the appropriate fields when creating bug reports. The
      objective was to focus entirely on entering content according to 'What?
      Where? When?' principle while ensuring the accuracy of the 'Steps to
      Reproduce' section.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <h4 class="section-subtitle">Subtitle</h4>
    <p>
      Due to the fact that each bug entered into MantisBT was manually verified
      by a QATestLab employee, it had to be described very precisely and
      according to accepted standards. Just a minor mistake was enough for the
      bug to be reversed with an appropriate note to be resubmitted with
      corrections.
    </p>
    <h4 class="section-subtitle">More than three</h4>
    <p>
      There were, of course, many more bugs in this task than required three and
      I didn't have to look for a needle in a haystack to notice some issues.
      Some errors were obvious at first sight, others required a moment of
      concentration. Instead of the required three, it was possible to easily
      create ten bug reports. Examples of bugs found on the home page:
    </p>
    <ul>
      <li>The name of the tab has a different style than the others.</li>
      <li>The search button is larger than the search box.</li>
      <li>A typo is present in the main header.</li>
      <li>The date in the footer is a future date.</li>
    </ul>
    <p><img :src="img('issues.jpg')" class="w-100" /></p>
    <h4 class="section-subtitle">The chosen issues</h4>
    <p>
      Ultimately, I decided to report three other bugs based on their diversity
      in terms of priority and severity, so that in addition to the descriptions
      and steps to repeat, I could also test changes to the report parameters
      (those that I could fill out myself).
    </p>
    <ul id="issues">
      <li>
        Issue #0933301:
        <a
          data-bs-toggle="collapse"
          href="#issue0933301"
          aria-expanded="false"
          aria-controls="issue"
        >
          The image is missed on the carousel on the 'Design' page
        </a>
        <div class="collapse" id="issue0933301">
          <p></p>
          <ul>
            <li><strong>Priority:</strong> high</li>
            <li><strong>Severity:</strong> minor</li>
            <li><strong>Reproducibility:</strong> N/A</li>
            <li><strong>Platform:</strong> Google Chrome 87.0.4280.88</li>
            <li><strong>OS:</strong> Windows</li>
            <li><strong>OS Version:</strong> 10 x64</li>
          </ul>
          <p></p>
          <p>
            <strong>Description:</strong> One of the images on the top carousel
            is missed on the 'Design' page.
          </p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Open page http://trainingcentre.wixsite.com/design.</li>
            <li>Pay attention to the top images carousel.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> One of the images on the top
            carousel is missed on the 'Design' page.
          </p>
          <p>
            <strong>Expected result:</strong> All images on the top carouser are
            presented on the 'Design' page.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue0933301.jpg')" class="w-100" />
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
    <p>
      The first QATestLab task actually turned out to be an introduction to the
      next stages of the 'Fundamentals of Software Testing' course. This was
      mainly about getting to know the technical side of reporting bugs.
    </p>
    <p>
      Although I had the opportunity to work with Mantis Bug System on other
      projects before, it was still good to get acquainted with the newer
      version of this open-source software.
    </p>
  </div>
</template>

<script lang="ts">
import { useAssets, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineProps } from "vue";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();

export default {
  name: "Design for Life",
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
      getAsset(`@/images/projects/designforlife/${filename}`);

    return {
      imagesPaths: getImagesPaths(props.project, 4),
      img,
    };
  },
};
</script>
