import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCodepen,
  faFacebookF,
  faGithub,
  faGithubAlt,
  faInstagram,
  faLinkedin,
  faMediumM,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import {
  faBuilding,
  faCheck,
  faCircle,
  faComment,
  faDesktop,
  faExternalLinkAlt,
  faHeadphones,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faQuoteRight,
  faVideo,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";
import type { App as VueApp } from "vue";

const fas = [
  faBuilding,
  faCheck,
  faCircle,
  faComment,
  faDesktop,
  faExternalLinkAlt,
  faHeadphones,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faQuoteRight,
  faVideo,
  faWrench,
];
const fab = [
  faCodepen,
  faFacebookF,
  faGithub,
  faGithubAlt,
  faInstagram,
  faLinkedin,
  faMediumM,
  faStackOverflow,
  faTwitter,
];
const far = [faClock, faLightbulb];

library.add(...fas, ...far, ...fab);

class VueFontAwesome {
  install(app: VueApp<Element>): void {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
    app.component("FontAwesomeLayers", FontAwesomeLayers);
  }
}

const fontAwesomePlugin = new VueFontAwesome();
export default fontAwesomePlugin;
