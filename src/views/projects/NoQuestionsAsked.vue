<template>
  <div class="section-row">
    <h3 class="section-title">Project Background</h3>
    <p>
      "No Questions Asked" is a short, point-and-click adventure game developed
      by the Polish indie studio, The Troubadour Collective. The game, available
      for free on <a href="https://store.steampowered.com/">Steam</a> platform,
      has received positive feedback for its engaging storyline and innovative
      mechanics. The game features multiple endings and a non-linear narrative,
      which adds depth and replayability.
    </p>
    <p>
      I first heard about the game on the pop culture podcast
      <a href="https://www.niezatapialni.pl/">Niezatapialni</a>, where it
      received very good reviews.
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
      Although the game does not have many user reviews, the overall rating is
      very positive. Encouraged by the podcast, I decided to check out this
      title. Since I was looking for small projects to test, it became a great
      opportunity to report some bugs I found.
    </p>
    <p>
      My role in this project was to thoroughly test the game for bugs and
      ensure that the gameplay experience was smooth and consistent. I focused
      on identifying any issues that could impact the player's experience, such
      as bugs in different story paths and inconsistencies in achievement
      unlocking.
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
    <p>
      "No Questions Asked" is not a long game. However, as an adventure game
      with a story, getting to a later point in the game requires... getting
      there. Testing presented several challenges, such as the lack of cheat
      modes or development tools, which meant I had to play through the game
      multiple times to explore all possible story paths and endings.
    </p>
    <p>
      The tested version of the game was numbered 1.1.67. Despite being only 3
      months old, there have already been several patches that have removed most
      of the bugs. However, I decided that I would still try to test my ability
      to find new issues, assuming that something had definitely been missed.
      And that was the biggest challenge.
    </p>
    <p>
      Another challenge was ensuring the accuracy of achievement descriptions,
      which often required consulting external guides and cross-referencing with
      the game's internal logic.
    </p>
  </div>

  <div class="section-row">
    <h3 class="section-title">The Task</h3>
    <p>
      Because the game is not linear and has several possible endings, I
      conducted a series of playthroughs to cover all possible story paths and
      endings, ensuring a comprehensive testing process. This involved exploring
      all dialogue options, performing different activities in varied sequences,
      and monitoring achievement unlock conditions. One of the achievements (the
      one obtained by the smallest percentage of players) clearly says "Unlock
      every ending."
    </p>

    <h4 class="section-subtitle">Achievements</h4>
    <p>And speaking of achievements...</p>
    <Quote>
      Achievements can be used as a way to encourage and reward player
      interactions and milestones within your game. They are often used for
      marking number of kills, miles driven, chests opened or other common
      actions within your game. And they can also be used to help your players
      discover different ways of playing your game. When unlocked, these
      achievements will pop up in the corner of the players' window and will be
      marked within an achievement page for that player.
    </Quote>
    <p>
      ...the game features 20 of them, each with unique requirements. This was
      one of the points of my testing, to verify that the achievement
      descriptions were consistent with the game's progress. I verified that the
      achievements were correctly triggered at the appropriate points in the
      game, ensuring that descriptions matched the conditions for unlocking
      them. Some achievements required specific actions that were not
      immediately obvious, necessitating in-depth exploration and sometimes
      external consultation.
    </p>
    <p><img :src="img('achievements.jpg')" class="w-100" /></p>
    <p>
      Fortunately, one of the game's fans had created a guide, more of a
      walkthrough with possible story paths, which detailed how to obtain
      achievements along with other people's comments and their problems.
    </p>

    <h4 class="section-subtitle">Dialogues & Story Paths</h4>
    <p>
      A key aspect of my testing involved exploring the various dialogue options
      and the resultant story paths. Despite the game offering multiple endings
      that can be achieved in just two playthroughs, I delved into the less
      obvious combinations to ensure comprehensive coverage of all potential
      story variations. This detailed approach allowed me to uncover hidden
      interactions and possible narrative inconsistencies.
    </p>

    <h4 class="section-subtitle">Interface & Game Mechanics</h4>
    <p>
      In addition to testing the storyline and achievements, I focused on
      evaluating key game elements frequently used by players, such as the main
      menu and the overall user interface, including character movement and
      object interaction. While these fundamental components are typically
      subject to extensive review during development, an external perspective
      can often reveal overlooked irregularities or usability issues. This fresh
      look helped identify potential improvements and ensure a seamless player
      experience.
    </p>

    <h4 class="section-subtitle">Issues</h4>
    <p>
      Ultimately, I reported all the issues I found in the mentioned discussion
      thread on the Steam platform - unfortunately, this is not the place for
      such activities and therefore I had to provide external links to
      screenshots and video files. Here are the issues:
    </p>
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
          No animation of the hero's movement is seen after holding the mouse
          button on him and slowly dragging away
        </a>
        <div class="collapse" id="issue02">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Click on the hero and hold the mouse button.</li>
            <li>While holding the mouse button slowly move the mouse.</li>
            <li>Pay attention to the hero's animation.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> No animation of the hero's movement
            is seen after holding the mouse button on him and slowly dragging
            away. Hero is sliding with no or almost no animation.
          </p>
          <p>
            <strong>Expected result:</strong> Normal animation of the hero's
            movement is seen after holding the mouse button on him and slowly
            dragging away. Hero is not sliding.
          </p>
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
          The wrong color (golden) of the mouse cursor is seen when moving out
          of the interactive objects with keyboard keys
        </a>
        <div class="collapse" id="issue03">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>
              Move the mouse cursor over the cabinet to change its color to
              golden (as an interactive object).
            </li>
            <li>
              Move the hero with the keyboard keys until the screen moves.
            </li>
            <li>Pay attention to the color of the mouse cursor.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The wrong color (golden) of the
            mouse cursor is seen when moving out of the interactive objects with
            keyboard keys.
          </p>
          <p>
            <strong>Expected result:</strong> The correct color (silver) of the
            mouse cursor is seen when moving out of the interactive objects with
            keyboard keys.
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
      <li>
        Issue #04:
        <a
          data-bs-toggle="collapse"
          href="#issue04"
          aria-expanded="false"
          aria-controls="issue"
        >
          The mouse cursor can't be moved with the touchpad when the hero is
          moving with the keyboard keys.
        </a>
        <div class="collapse" id="issue04">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Hold the keyboard keys to move the hero.</li>
            <li>
              While moving the hero move the mouse cursor with the touchpad.
            </li>
            <li>Pay attention to no mouse cursor reaction.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The mouse cursor can't be moved with
            the touchpad when the hero is moving with the keyboard keys.
          </p>
          <p>
            <strong>Expected result:</strong> The mouse cursor can be moved with
            the touchpad when the hero is moving with the keyboard keys.
          </p>
        </div>
      </li>
      <li>
        Issue #05:
        <a
          data-bs-toggle="collapse"
          href="#issue05"
          aria-expanded="false"
          aria-controls="issue"
        >
          The game information messages are seen above the in-game menu window
          after pressing the "ESC" key when the game information messages are
          present.
        </a>
        <div class="collapse" id="issue05">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Move right to the screen with the elevator.</li>
            <li>Press the 'ESC' key when the information message appears.</li>
            <li>
              Pay attention to the location of the game information message.
            </li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The game information messages are
            seen above the in-game menu window after pressing the "ESC" key when
            the game information messages are present.
          </p>
          <p>
            <strong>Expected result:</strong> The in-game menu window is seen
            above all game information messages.
          </p>
          <p><strong>Screenshots:</strong></p>
          <p>
            <img :src="img('issue05a.jpg')" class="w-100" />
          </p>
          <p>
            <img :src="img('issue05b.jpg')" class="w-100" />
          </p>
        </div>
      </li>
      <li>
        Issue #06:
        <a
          data-bs-toggle="collapse"
          href="#issue06"
          aria-expanded="false"
          aria-controls="issue"
        >
          The in-game menu window is opened below the game map after pressing
          the "ESC" key with the opened map
        </a>
        <div class="collapse" id="issue06">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Move to the garage, pick up the package and go to delivery.</li>
            <li>Open the map with the "TAB" key.</li>
            <li>Press the "ESC" key to open the in-game menu.</li>
            <li>Pay attention to the location of the menu window.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The in-game menu window is opened
            below the game map after pressing the "ESC" key with the opened map.
          </p>
          <p>
            <strong>Expected result:</strong> The in-game menu window is opened
            above the game map after pressing the "ESC" key with the opened map
            OR the map is closed after pressing the "ESC" key with the opened
            map.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue06.jpg')" class="w-100" />
          </p>
        </div>
      </li>
      <li>
        Issue #07:
        <a
          data-bs-toggle="collapse"
          href="#issue07"
          aria-expanded="false"
          aria-controls="issue"
        >
          The hero can't be moved (with keys) when the mouse cursor is on the
          game information text
        </a>
        <div class="collapse" id="issue07">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Move the cursor over the game information about moving.</li>
            <li>Try to move the hero with keys.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The hero can't be moved (with keys)
            when the mouse cursor is on the game information text.
          </p>
          <p>
            <strong>Expected result:</strong> The hero can be moved (with keys)
            regardless of the position of the mouse cursor.
          </p>
        </div>
      </li>
      <li>
        Issue #08:
        <a
          data-bs-toggle="collapse"
          href="#issue08"
          aria-expanded="false"
          aria-controls="issue"
        >
          In-game text message about the game map is seen during the intro after
          pressing the "TAB" key
        </a>
        <div class="collapse" id="issue08">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Press the "TAB" key during the intro.</li>
            <li>Pay attention to the upper right corner of the screen.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> In-game text message about the game
            map is seen during the intro after pressing the "TAB" key.
          </p>
          <p>
            <strong>Expected result:</strong> No in-game messages are seen
            during the intro.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue08.jpg')" class="w-100" />
          </p>
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue08.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </li>
      <li>
        Issue #09:
        <a
          data-bs-toggle="collapse"
          href="#issue09"
          aria-expanded="false"
          aria-controls="issue"
        >
          The dialogue options can't be chosen with the "space" key
        </a>
        <div class="collapse" id="issue09">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Start a new game from the main menu.</li>
            <li>Pick up the package and go to delivery.</li>
            <li>Go right until the dialogue starts.</li>
            <li>Try to press the "space" key.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The dialogue options can't be chosen
            with the "space" key. It is not known which key can be used.
          </p>
          <p>
            <strong>Expected result:</strong> The dialogue options can be chosen
            with the "space" key. Till now the "space" key worked in one-line
            dialogue. I can use the arrow keys and W/S keys to move up/down
            through dialogue options.
          </p>
        </div>
      </li>
      <li>
        Issue #10:
        <a
          data-bs-toggle="collapse"
          href="#issue10"
          aria-expanded="false"
          aria-controls="issue"
        >
          The 'Same as always' achievement is unlocked on Day 2
        </a>
        <div class="collapse" id="issue010">
          <p></p>
          <p>
            <strong>Steps To Reproduce:</strong> Unknown, impossible to
            replicate.
          </p>
          <p>
            <strong>Information:</strong> I loaded the game from the main menu.
            I was in the bar on day 2 and the 'Same as always' achievement
            popped up. According to the description ('Spend every afternoon at
            the bar'), it shouldn't activate at that time. The game was probably
            loaded a few times in this session so maybe days didn't count
            properly.
          </p>
        </div>
      </li>
      <li>
        Issue #11:
        <a
          data-bs-toggle="collapse"
          href="#issue11"
          aria-expanded="false"
          aria-controls="issue"
        >
          The visual drug effect is not seen on screen on Day 2 after quickly
          clicking dialogue options
        </a>
        <div class="collapse" id="issue11">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Load 'Day 2' from the main menu.</li>
            <li>Pick up the package and go to delivery.</li>
            <li>Talk to the man in a white coat.</li>
            <li>Quickly click dialogue options to get the drug.</li>
            <li>Pay attention to the lack of visual effects.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The visual drug effect is not seen
            on screen on Day 2 after quickly clicking dialogue options.
          </p>
          <p>
            <strong>Expected result:</strong> The visual drug effect is normally
            seen on screen on Day 2 after quickly clicking dialogue options.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue11.jpg')" class="w-100" />
          </p>
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue11.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </li>
      <li>
        Issue #12:
        <a
          data-bs-toggle="collapse"
          href="#issue12"
          aria-expanded="false"
          aria-controls="issue"
        >
          The 'Skip' button can't be fully clicked on the 'Credits' screen
        </a>
        <div class="collapse" id="issue12">
          <p></p>
          <p><strong>Steps To Reproduce:</strong></p>
          <ol>
            <li>Open the 'Credits' option from the main menu.</li>
            <li>Move the mouse cursor over the 'Skip' button.</li>
            <li>Pay attention to the clickable area of the button.</li>
          </ol>
          <p></p>
          <p>
            <strong>Actual result:</strong> The 'Skip' button can't be fully
            clicked on the 'Credits' screen. Only the top of the word is
            clickable.
          </p>
          <p>
            <strong>Expected result:</strong> The 'Skip' button can be fully
            clicked on the 'Credits' screen.
          </p>
          <p><strong>Screenshot:</strong></p>
          <p>
            <img :src="img('issue12.jpg')" class="w-100" />
          </p>
          <p><strong>Video:</strong></p>
          <p>
            <video controls class="w-100">
              <source :src="video('issue12.mp4')" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="section-row">
    <h3 class="section-title">What I Learned</h3>
    <p>
      Testing "No Questions Asked" was a highly rewarding experience that
      enabled me to refine my skills in comprehensive gameplay testing and issue
      reporting. Through multiple playthroughs and meticulous analysis, I was
      able to identify bugs and inconsistencies, contributing to the game's
      enhancement and providing a smoother player experience. This project
      offered valuable insights into the complexities of game development and
      underscored the critical role of thorough and rigorous testing in
      producing a high-quality game.
    </p>
    <p>
      The common wisdom suggests that no product is ever perfect and there will
      always be some issues. However, in the case of a well-polished game that
      has undergone several updates, finding new bugs can be particularly
      challenging. It highlighted for me that sometimes, the effort spent on
      further bug hunting and corrections might exceed practical benefits,
      turning into an exercise in diminishing returns. This realization taught
      me the importance of balancing thorough testing with practical limitations
      to maximize the value added to the project.
    </p>
  </div>
</template>

<script lang="ts">
import { Quote } from "@/components";
import { useAssets, useProject } from "@/composables";
import type { IProject, ITestimonial } from "@/types";
import type { PropType } from "vue";
import { defineProps } from "vue";

defineProps<{ project: IProject; testimonials: ITestimonial[] }>();

export default {
  name: "No Questions Asked",
  components: {
    Quote,
  },
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
