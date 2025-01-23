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
      testing practices. The second, after
      <a href="design-for-life">Design for Life</a>, and biggest task was to
      test the Best Friends Opencart, which was a specially prepared website for
      testing purposes. The whole process consisted of several homework
      assignments that included:
    </p>
    <ul>
      <li>Website Layout Testing</li>
      <li>Cross-Browser Compatibility Testing</li>
      <li>Functional Testing</li>
      <li>Mobile Testing</li>
    </ul>
    <p>
      Additionally, the homework assignments included tasks like: creating
      checklists, test plans, bug reports in Jira, test sets, and test cases in
      TestLink, test runs, and test cases in TestRail.
    </p>
    <p></p>
  </div>

  <div class="section-row">
    <h3 class="section-title">My Role in This Project</h3>
    <p>
      In this project, my ultimate goal was to identify and document bugs using
      the Mantis Bug Tracker system. With a few exceptions, most homework tasks
      include working with the Best Friends website. Each task had a completion
      scope - so you could complete it minimally, but I always chose the
      highest-scoring options, which usually involved doing the same thing but
      in greater quantity.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">Challenges</h3>
    <p>
      While Mantis Bug Tracker is a straightforward tool with a user-friendly
      interface, the challenge lies in the reporting process. Each bug report
      was subject to manual review by a QATestLab Training Center employee,
      requiring high accuracy and adherence to specific standards. Theoretical
      knowledge had to be effectively translated into practical application,
      with no room for errors or omissions.
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
      the bug-reporting process. Here are examples of the bugs found on the
      homepage.
    </p>

    <h4 class="section-subtitle">Web projects testing</h4>
    <p>
      The first task was about Website Layout & Cross-Browser Compatibility. I
      had to create a checklist and pass it in 3 different browsers and then
      mark the results for all checked items with Passed/Failed. I should end
      this by adding 5-8 layout bugs in MantisBT.
    </p>
    <p><img :src="img('checklist-website-layout.png')" class="w-100" /></p>
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

    <h4 class="section-subtitle">Approaches to the Functional Testing</h4>
    <p>
      The second task was about Functional Testing. Like before I had to create
      a checklist and pass it in 3 different browsers and then mark the results
      for all checked items with Passed/Failed. I should end this by adding 5-8
      layout bugs in MantisBT.
    </p>
    <p><img :src="img('checklist-website-functional.png')" class="w-100" /></p>

    <h4 class="section-subtitle">Software Testing Lifecycle</h4>
    <p>
      The third task was about the Software Testing Lifecycle. This time I had
      to create a short test plan and add up to 5 bug reports in MantisBT. Then
      I should create a Jira account and create a bug report on the new scrum
      board.
    </p>

    <h4 class="section-subtitle">Test Design, Test Cases</h4>
    <p>
      The fourth task was about using TestLink and TestRail software. I had to
      create 10 test cases in both systems, test plan and test run, finally add
      and pass all created test cases. I should end this with adding up to 6
      functional bugs in MantisBT.
    </p>

    <h4 class="section-subtitle">Mobile Application Testing</h4>
    <p>
      The fifth and the final task of this project was about Mobile Application
      Testing. Once again I had to create a checklist, pass it on specified
      name/model of the mobile device and then mark the results for all checked
      items with Passed/Failed. I should end this with adding 5-8 layout bugs in
      MantisBT.
    </p>
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
  name: "Best Friends",
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
