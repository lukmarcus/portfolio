<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>
      The
      <a
        href="https://en.training.qatestlab.com/course/software-testing-fundamentals/"
        >'Fundamentals of Software Testing'</a
      >
      course offered by
      <a href="https://en.training.qatestlab.com/">QATestLab Training Center</a>
      was designed to provide a comprehensive understanding of software testing
      principles and methodologies. The course emphasizes practical application
      and real-world scenarios, preparing participants for industry-standard
      testing practices. The initial task, which served as an introduction to
      the course, required familiarizing with the Mantis Bug Tracker by
      identifying and reporting bugs based on a video recording. In the video, a
      user navigated a simple website called 'Design for Life,' showcasing the
      page layout, navigation, and interactions with various page elements.
    </p>
    <p>
      This course is particularly notable for its emphasis on high standards in
      bug reporting and meticulous attention to detail. Participants are
      expected to not only find and report bugs but also to ensure their reports
      meet rigorous quality criteria. This approach aims to develop critical
      skills in precision and clarity in communication, which are essential for
      effective software testing.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My Role in This Project</h3>
    <p>
      In this task, my role was to identify and document bugs using the Mantis
      Bug Tracker system. The video provided numerous opportunities to practice
      bug identification, with many obvious and some subtle errors. The
      assignment required up to three bug reports, focusing on the quality
      rather than quantity of the submissions.
    </p>
    <p>
      I received specific environment data and guidelines to ensure the bug
      reports were comprehensive and aligned with the 'What? Where? When?'
      principle. This included precise descriptions of each bug, the steps to
      reproduce the issues, and relevant context to facilitate the verification
      process by QATestLab Training Center employees.
    </p>
    <p>
      My approach was to meticulously analyze the video, identify the most
      critical and diverse bugs, and document them in a way that would meet the
      high standards set by the training center. This included using clear,
      concise language and ensuring that all necessary details were provided to
      enable easy replication and verification of the issues.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      While Mantis Bug Tracker itself is a straightforward tool with a
      user-friendly interface, the challenge lay in the reporting process. Each
      bug report was subject to manual review by a QATestLab Training Center
      employee, requiring high accuracy and adherence to specific standards.
      Theoretical knowledge had to be effectively translated into practical
      application, with no room for errors or omissions.
    </p>
    <p>
      The primary challenge was ensuring that each bug report was precise,
      comprehensive, and aligned with established standards. This meant that
      even minor mistakes could lead to the rejection of the bug report,
      necessitating resubmission with corrections. This rigorous approach taught
      me the importance of attention to detail and the need for meticulous
      documentation in software testing.
    </p>
    <p>
      Another challenge was selecting the most relevant bugs to report. Given
      the video contained more errors than required for the assignment, I had to
      prioritize bugs based on their impact, severity, and diversity. This
      involved critical thinking and decision-making to ensure that the most
      significant issues were addressed in my reports.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">The Task</h3>
    <p>
      The task required identifying and reporting up to three bugs based on a
      video recording of a user navigating the 'Design for Life' website.
      Although more bugs were evident, I focused on selecting those that were
      varied in terms of priority and severity. This approach allowed me to test
      different report parameters and ensure a comprehensive understanding of
      the bug reporting process. Here are examples of the bugs found on the
      homepage:
    </p>
    <ul>
      <li>The name of the tab has a different style than the others.</li>
      <li>The search button is larger than the search box.</li>
      <li>A typo is present in the main header.</li>
      <li>The footer date is set to a future date.</li>
    </ul>
    <p><img :src="img('issues.jpg')" class="w-100" /></p>
    <p>
      I ultimately decided to report the following three bugs, selected for
      their diversity and relevance:
    </p>
    <p>[Click on a link to expand its description]</p>
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
      The first task of the QATestLab Training Center's 'Fundamentals of
      Software Testing' course provided valuable insights into the technical
      aspects of bug reporting and the importance of following established
      standards. The exercise reinforced the need for precision and clarity in
      documenting bugs, ensuring that reports are easy to understand and
      replicate.
    </p>
    <p>
      One of the key lessons learned was that finding a bug is only part of the
      process; effectively communicating the issue is equally important.
      Detailed and accurate descriptions are crucial for ensuring that bugs can
      be verified and resolved efficiently. This task also highlighted the
      importance of prioritizing issues based on their impact and severity, a
      critical skill in software testing.
    </p>
    <p>
      Returning to Mantis Bug Tracker after a significant period allowed me to
      see how my skills in bug reporting had evolved and improved. The
      experience reinforced the importance of continuous learning and adapting
      to new challenges in the field of software testing.
    </p>
  </div>
</template>

<script lang="ts">
import { useAssets, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import { Collapse } from "bootstrap";
import type { PropType } from "vue";
import { defineProps } from "vue";

const collapseElementList = [].slice.call(
  document.querySelectorAll(".collapse")
);
collapseElementList.map(function (collapseEl) {
  return new Collapse(collapseEl);
});

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
      getAsset(`@/images/projects/${props.project.slug}/${filename}`);

    return {
      imagesPaths: getImagesPaths(props.project, 4),
      img,
    };
  },
};
</script>
