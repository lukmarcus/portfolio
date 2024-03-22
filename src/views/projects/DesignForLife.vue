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
    <p>...</p>
    <h4 class="section-subtitle">Subtitle</h4>
    <p>...</p>
    <h4 class="section-subtitle">Subtitle</h4>
    <p>
      I created two HTML files operating on the same CSS file and integrated
      them with a simple language switch. It's not a perfect solution because it
      forces you to change the code in both files simultaneously, but it must be
      enough for now.
    </p>
    <h4 class="section-subtitle">Versions to Print</h4>
    <p>
      With the idea of printing pages directly to the pdf files, I introduced a
      new problem to the project. I should decide what will be exported for
      printing, not be dependent on the page's content. I didn't want to include
      a language switch or a recommendations section in the pdf file.
      Additionally, I wanted to control where the page breaks would occur so
      that the text section wouldn't be split across two pages.
    </p>
    <p>
      Fortunately, such a problem was solved a long before, and I only needed to
      implement the appropriate CSS classes into the code. In addition, the
      clause distance from the other sections had to be significantly increased
      to act as a footer and not leave empty white space at the bottom of the
      second page.
    </p>
    <h4 class="section-subtitle">Strange Spacing in Lists</h4>
    <p>
      Once all of the above issues were resolved, I noticed two annoying bugs
      with lists. Not only was the indentation of the second and subsequent
      lines of list items not identical to the first, but there were also spaces
      at the beginning of some lines in Firefox. Ultimately, entire lists looked
      broken due to the lack of vertical alignment.
    </p>
    <p>
      At first, I thought this was the problem with the Prettier extension for
      Visual Code Studio, but the problem turned out to be a bullet in the
      lists, which I had previously manipulated too much. The patch created for
      one bug also fixed the second one, making it a double-win situation.
    </p>
  </div>
  <div class="section-row">
    <h3 class="section-title">What I Learned</h3>
    <p>
      I knew the basics of HTML and CSS before, but I can't remember the last
      time I used them. It was good to systematize all this knowledge.
    </p>
    <p>
      In addition, I started using Visual Studio Code from this project and
      learned the basics of Git and its use from the command line.
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IProject, ITestimonial } from "@/types";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();
</script>
