import { allFilterTag } from "./types";
import type { IDB } from "./types/IDB";

const db: IDB = {
  isUnderConstruction: true,
  me: {
    firstName: "Marek",
    lastName: "Szumny",
    fullName: "Marek Szumny",
    title: "",
    email: "szumny.marek@gmail.com",
    github: "https://github.com/lukmarcus",
    linkedin: "https://www.linkedin.com/in/marekszumny/",
    location: "",
  },
  resume: {
    url: "https://lukmarcus.github.io",
  },
  projects: [
    {
      name: "Test Case Study - CastoPro",
      slug: "castopro",
      url: "https://castopro.castorama.pl/pl/home",
      urlName: "CastoPro",
      type: "Website",
      companyName: "Castorama",
      companyUrl: "https://www.castorama.pl/",
      thumbnail: "castopro-main.jpg",
      summaryTitle: "CastoPro",
      summary:
        "Loyalty program for professionals offered by Castorama, a leading home improvement retailer in Poland.",
      filterTags: [],
      badges: ["Website"],
      technologies: ["chrome-devtools"],
      thumbnailLogo: "castopro-logo.svg",
      featured: true,
    },
    {
      name: "Test Case Study - Best Friends",
      slug: "best-friends",
      url: "http://opencart.qatestlab.net",
      urlName: "Best Friends",
      type: "Website",
      companyName: "QATestLab Training Center",
      companyUrl: "https://en.training.qatestlab.com/",
      thumbnail: "best-friends-main.jpg",
      summaryTitle: "Best Friends",
      summary: "Online Pet Store created for testing purposes.",
      filterTags: [],
      badges: ["Website"],
      technologies: [
        "mantis",
        "jira",
        "testlink",
        "testrail",
        "chrome-devtools",
      ],
      thumbnailLogo: "best-friends-logo.svg",
      featured: true,
    },
    {
      name: "Test Case Study - Ultimate Unit Converter",
      slug: "ultimate-unit-converter",
      url: "https://play.google.com/store/apps/details?id=com.digitalindeed.converter",
      urlName: "Google Play Page",
      type: "Mobile App",
      companyName: "QATestLab Training Center",
      companyUrl: "https://en.training.qatestlab.com/",
      thumbnail: "ultimate-unit-converter-main.jpg",
      summaryTitle: "Ultimate Unit Converter",
      summary:
        "The most comprehensive measurement converter tool you will ever get.",
      filterTags: [],
      badges: ["Mobile App"],
      technologies: ["mantis", "android-debug-bridge"],
      thumbnailLogo: "ultimate-unit-converter-logo.svg",
      featured: true,
    },
    {
      name: "Test Case Study - No Questions Asked",
      slug: "no-questions-asked",
      url: "https://store.steampowered.com/app/2259180/No_Questions_Asked",
      urlName: "Steam Page",
      type: "Game",
      companyName: "The Troubadour Collective",
      companyUrl: "https://linktr.ee/the.troubadour.collective",
      thumbnail: "no-questions-asked-main.jpg",
      summaryTitle: "No Questions Asked",
      summary:
        "A neo-noir point&click thriller about a delivery service for illicit goods.",
      filterTags: [],
      badges: ["Game"],
      technologies: ["steam", "windows"],
      thumbnailLogo: "no-questions-asked-logo.svg",
      featured: true,
    },
    {
      name: "Neuroshima 1.5",
      slug: "neuroshima",
      url: "https://en.wikipedia.org/wiki/Neuroshima",
      urlName: "Wikipedia Page",
      type: "Role-Playing Game",
      companyName: "Portal Games",
      companyUrl: "https://portalgames.pl/en/",
      thumbnail: "neuroshima-main.jpg",
      summaryTitle: "Neuroshima 1.5",
      summary:
        "Post-apocalyptic role-playing system set in the United States, devastated by the nuclear war in the mid-21st century.",
      filterTags: [],
      badges: ["Game", "Role-Playing Game"],
      technologies: [],
      thumbnailLogo: "neuroshima-logo.svg",
      featured: true,
    },
    {
      name: "Neuroshima Hex!",
      slug: "neuroshima-hex",
      url: "https://en.wikipedia.org/wiki/Neuroshima_Hex!",
      urlName: "Wikipedia Page",
      type: "Board Game",
      companyName: "Portal Games",
      companyUrl: "https://portalgames.pl/en/",
      thumbnail: "neuroshima-hex-main.jpg",
      summaryTitle: "Neuroshima Hex!",
      summary:
        "Strategy board game set in the post-apocalyptic world of Neuroshima.",
      filterTags: [],
      badges: ["Game", "Board Game"],
      technologies: [],
      thumbnailLogo: "neuroshima-hex-logo.svg",
      featured: true,
    },
    {
      name: "Afterbomb Madness",
      slug: "afterbomb-madness",
      archivedUrl:
        "https://web.archive.org/web/20170929083925/http://afterbomb.pl/",
      urlName: "Afterbomb Madness Page",
      type: "Role-Playing Game",
      companyName: "Cyfrografia",
      thumbnail: "afterbomb-madness-main.jpg",
      summaryTitle: "Afterbomb Madness",
      summary:
        "Post-apocalyptic grotesque role-playing system in which players take the role of Americans, living during World War III.",
      filterTags: [],
      badges: ["Game", "Role-Playing Game"],
      technologies: [],
      thumbnailLogo: "afterbomb-madness-logo.svg",
      featured: true,
    },
    {
      name: "HTML & CSS based CV",
      slug: "cv",
      type: "Webpage",
      url: "https://lukmarcus.github.io/",
      companyName: "Personal project",
      thumbnail: "cv-main.jpg",
      summaryTitle: "HTML & CSS based CV",
      summary:
        "My constantly updated bilingual Curriculum Vitae. Designed to be easily printed to PDF.",
      filterTags: [],
      badges: ["Website", "Open Source"],
      technologies: [
        "html5",
        "css3",
        "git",
        "github",
        "github-pages",
        "google-analytics",
      ],
      thumbnailLogo: "cv-logo.svg",
      featured: true,
      repositoryUrl: "https://github.com/lukmarcus/cv",
    },
    {
      name: "Dead Island",
      slug: "dead-island",
      type: "Game",
      url: "https://en.wikipedia.org/wiki/Dead_Island",
      urlName: "Wikipedia Page",
      companyName: "Techland",
      companyUrl: "https://techland.net/",
      thumbnail: "dead-island-main.jpg",
      summaryTitle: "Dead Island",
      summary:
        "First-person survival horror game set on a tropical island overrun by zombies (PC Windows, PlayStation 3 & Xbox 360).",
      filterTags: [],
      badges: ["Game"],
      technologies: ["windows", "ps3", "xbox360", "mantis"],
      thumbnailLogo: "dead-island-logo.svg",
      featured: true,
    },
    {
      name: "Call of Juarez: The Cartel",
      slug: "call-of-juarez-the-cartel",
      type: "Game",
      url: "https://en.wikipedia.org/wiki/Call_of_Juarez:_The_Cartel",
      urlName: "Wikipedia Page",
      companyName: "Techland",
      companyUrl: "https://techland.net/",
      thumbnail: "call-of-juarez-the-cartel-main.jpg",
      summaryTitle: "Call of Juarez: The Cartel",
      summary:
        "First-person modern-day shooter that follows a team of law enforcement officers as they take on a drug cartel in Los Angeles and Mexico (PC Windows, PlayStation 3 & Xbox 360).",
      filterTags: [],
      badges: ["Game"],
      technologies: ["windows", "ps3", "xbox360", "mantis"],
      thumbnailLogo: "call-of-juarez-the-cartel-logo.svg",
      featured: true,
    },
    {
      name: "Test Case Study - Design for Life",
      slug: "design-for-life",
      type: "Website",
      companyName: "QATestLab Training Center",
      companyUrl: "https://en.training.qatestlab.com/",
      thumbnail: "design-for-life-main.jpg",
      summaryTitle: "Design for Life",
      summary: "A design blog created for testing purposes.",
      filterTags: [],
      badges: ["Website"],
      technologies: ["mantis"],
      thumbnailLogo: "design-for-life-logo.svg",
      featured: true,
    },
    {
      name: "Hive Projects",
      slug: "hive-projects",
      type: "Web Application",
      url: "https://hiveprojects.io/",
      thumbnail: "hive-projects-main.png",
      summaryTitle: "Hive Projects",
      summary:
        "Hive Projects is a directory of over a hundred apps, sites and tools built by Hive community. Your project is not listed here? You can add it on your own!",
      filterTags: [],
      badges: ["Website", "Open Source", "Rest API"],
      technologies: [
        "python",
        "django",
        "bootstrap4",
        "git",
        "github",
        "google-analytics",
      ],
      thumbnailLogo: "hive-projects-logo.svg",
      featured: true,
      repositoryUrl: "https://github.com/wise-team/hiveprojects.io",
    },
    {
      name: "Dev / QA Web Portfolio",
      slug: "portfolio",
      type: "Web Application",
      url: "https://krzysztofszumny.com/",
      thumbnail: "portfolio-main.png",
      summaryTitle: "Vue Based Web Portfolio",
      summary:
        "Every profesional Software Developer and QA Engineer should have own portfolio. This project allows you to build one, adjust it to your needs, extend and share it with the world.",
      filterTags: ["vue"],
      badges: ["Open Source"],
      technologies: ["typescript", "vue", "bootstrap5", "cypress", "netlify"],
      thumbnailLogo: "portfolio-logo.svg",
      featured: true,
      repositoryUrl: "https://github.com/noisy/portfolio",
    },
  ],
  projectFilters: [
    { name: "All", tag: allFilterTag, isActive: true },
    { name: "Python/Django", tag: "python-django", isActive: false },
    { name: "JS/TS", tag: "js-ts", isActive: false },
    { name: "Vue", tag: "vue", isActive: false },
  ],
  companies: [
    {
      name: "Techland",
      url: "https://techland.net/",
      logo: "techland.svg",
    },
    {
      name: "IndieBI",
      url: "https://indiebi.com/",
      logo: "indiebi.svg",
    },
    {
      name: "QATestLab Training Center",
      url: "https://en.training.qatestlab.com/",
      logo: "qatestlab-training-center.svg",
    },
    {
      name: "Wise-Team",
      url: "http://web.archive.org/web/20200811211508/https://wise-team.io/",
      logo: "wise-team.svg",
    },
    {
      name: "Portal Games",
      url: "https://portalgames.pl/",
      logo: "portal-games.svg",
    },
    {
      name: "The Troubadour Collective",
      url: "https://linktr.ee/the.troubadour.collective",
      logo: "troubadour-collective.svg",
    },
    {
      name: "Fit-Net",
      url: "https://fit-net.com.pl/",
      logo: "fit-net.svg",
    },
    {
      name: "DR Trading",
      url: "https://allegro.pl/uzytkownik/DR-Trading/sklep",
      logo: "dr-trading.svg",
    },
    {
      name: "Cyfrografia",
      logo: "cyfrografia.svg",
    },
  ],
  certificates: [
    {
      title: "Playwright JS/TS Automation Testing from Scratch & Framework",
      image: "MarekSzumny_PlaywrightAutomationTesting_Udemy.jpg",
      source: "Udemy",
      link: "https://www.udemy.com/course/playwright-tutorials-automation-testing/",
      description: `Comprehensive Playwright course that covers everything from the basics to frameworks:
<br>- Playwright fundamentals and advanced use cases,
<br>- automation of modern web applications, including React and Angular,
<br>- API testing and integrating UI and API tests in single scripts,
<br>- advanced techniques like session cookie manipulation for bypassing logins,
<br>- designing test cases using Playwright Cucumber BDD and Mocha frameworks,
<br>- leveraging page object models, external data, and custom utilities for test automation,
<br>- Continuous Integration with Jenkins and Docker for running tests,
<br>- Playwright's logging capabilities including screenshots, videos, and Inspector demos.`,
      date: "January 13, 2025",
      filterTags: ["playwright", "typescript-javascript"],
    },
    {
      title: "Apache JMeter™ Pro",
      image: "MarekSzumny_ApacheJMeterPro_BlazeMeterUniversity.jpg",
      source: "BlazeMeter University",
      link: "https://university.blazemeter.com/learn/courses/485/apache-jmeter-intro",
      description: `This course teaches about the advanced skills and best practices to become a JMeter Pro, enhancing performance testing capabilities:
<br>- in-depth exploration of JMeter elements,
<br>- use-case-based test plan building,
<br>- incorporating additional scripting languages into test plans,
<br>- mastering debugging and troubleshooting techniques.`,
      date: "November 24, 2024",
      filterTags: ["jmeter"],
    },
    {
      title: "Apache JMeter™ Intro",
      image: "MarekSzumny_ApacheJMeterIntro_BlazeMeterUniversity.jpg",
      source: "BlazeMeter University",
      link: "https://university.blazemeter.com/learn/courses/485/apache-jmeter-intro",
      description: `This course offers a comprehensive introduction to JMeter, helping to grasp the essentials of performance testing:
<br>- installing JMeter from scratch,
<br>- key concepts and foundations of script building in JMeter,
<br>- main building blocks, execution order, and scoping rules,
<br>- mastering parameterization, correlations, and data set usage,
<br>- building a basic JMeter script.`,
      date: "November 3, 2024",
      filterTags: ["jmeter"],
    },
    {
      title: "Playwright 101",
      image: "MarekSzumny_Playwright101_LambdaTest.jpg",
      source: "LambdaTest",
      link: "https://www.lambdatest.com/certifications/playwright-101",
      description: `The course covers essential skills for mastering modern test automation:
<br>- gain in-depth knowledge of the Playwright framework,
<br>- learn to run and manage automation tests using Playwright,
<br>- perform cross-browser testing on cloud grids with Playwright,
<br>- leverage Playwright's features, including screenshots, videos, headless testing, and environment variables, to enhance test efficiency.`,
      date: "August 27, 2024",
      filterTags: ["playwright"],
    },
    {
      title: "Test Automation with Playwright",
      image: "MarekSzumny_TestAutomationWithPlaywright_JakTestowac.jpg",
      source: "jaktestowac.pl",
      link: "https://jaktestowac.pl/playwright/",
      description: `The entire material currently consists of over 80 hours of recordings and over 520 lessons with theory and practice in the field of:
<br>- Playwright and its most common use cases,
<br>- Playwright structures, methods and functions,
<br>- tools related to working with automated tests (code formatting, static analysis),
<br>- good practices and patterns related to writing automated tests,
<br>- basics of general test architecture,
<br>- Continuous Integration and automated tests in the CI/CD process,
<br>- TypeScript and programming.`,
      date: "May 25, 2024",
      filterTags: ["playwright", "typescript-javascript"],
    },
    {
      title: "Introduction to Software Testing",
      image: "MarekSzumny_IntroductionToSoftwareTesting_Navoica.jpg",
      source: "Navoica",
      link: "https://navoica.pl/courses/course-v1:ZPSB+WTO1_EN+2022_WTO1_EN/",
      description: `The course is designed for novice programmers and prospective testers, focusing on:
<br>- understanding the role of testing in the software development process,
<br>- acquiring skills in test planning, preparation, and documentation,
<br>- exploring the impact of testing on software quality assurance.`,
      date: "July 26, 2024",
      filterTags: ["manual-testing"],
    },
    {
      title: "Data Analyst Associate",
      image: "MarekSzumny_DataAnalystAssociate_DataCamp.jpg",
      source: "Data Camp",
      link: "https://support.datacamp.com/hc/en-us/articles/7926305856919-Data-Analyst-Associate",
      description: `This course focuses on essential skills needed for entry-level data analyst roles. It typically requires over 100 hours of learning to acquire skills and the main areas of expertise covered include:
<br>- learning to clean and process data, identify quality issues, and perform transformations using SQL,
<br>- gaining skills in summarizing data, transforming it into relevant formats, and creating reports and dashboards,
<br>- applying statistical methods to conduct data-driven experiments,
<br>- developing the ability to create dashboards, reports, and visualizations, and effectively communicate insights to stakeholders,
<br>- testing knowledge through adaptive, timed exams covering various data analyst topics,
<br>- completing a written report with selected visualizations and defended analysis, graded manually by experts.`,
      date: "November 11, 2023",
      filterTags: ["sql", "data-analysis"],
    },
    {
      title: "Fundamentals of Software Testing",
      image:
        "MarekSzumny_FundamentalsOfSoftwareTesting_QATestLabTrainingCenter.jpg",
      source: "QATestLab Training Center",
      link: "https://en.training.qatestlab.com/course/software-testing-fundamentals/",
      description: `The course covers essential knowledge and practical skills for beginners in software testing, focusing on:
<br>- understanding bugs, reporting them in Mantis Bug Tracker, and differentiating them from features,
<br>- practicing testing across various platforms, including software, games, and mobile applications,
<br>- gaining proficiency in manual testing, creating test documentation, and using bug-tracking systems,
<br>- preparing for a QA Intern position with hands-on experience in key testing areas,
<br>- expanding theoretical knowledge and practical skills for those already in the QA field,
<br>- providing career changers with foundational testing skills for entering the IT industry.
<br>The course includes lectures, practical exercises, and a comprehensive program that covers web, mobile, and game testing, functional testing techniques, test case creation, and more.`,
      date: "April 30, 2023",
      filterTags: ["manual-testing"],
    },
    {
      title: "BaseLinker for Beginners",
      image: "MarekSzumny_BaseLinkerForBeginners_BaseAcademy.jpg",
      source: "base.academy",
      link: "https://base.com/en-EN/academy/courses/baselinker-for-beginners/",
      description: `This course provides a solid foundation for mastering BaseLinker, with further modules for those interested in deeper system configuration.
<br>- learn how to create an account and navigate the panel management,
<br>- explore key modules, including Order Manager, Product Manager, and Marketplace Manager,
<br>- develop skills for efficient order processing and management,
<br>- gain tools to streamline tasks like placing auctions, downloading orders, issuing invoices, printing labels, and sending packages.`,
      date: "February 23, 2023",
      filterTags: ["baselinker"],
    },
  ],
  certificateFilters: [
    { name: "All", tag: allFilterTag, isActive: true },
    { name: "Playwright", tag: "playwright", isActive: false },
    {
      name: "TypeScript/JavaScript",
      tag: "typescript-javascript",
      isActive: false,
    },
    { name: "Manual Testing", tag: "manual-testing", isActive: false },
    { name: "JMeter", tag: "jmeter", isActive: false },
    { name: "SQL", tag: "sql", isActive: false },
    { name: "Data Analysis", tag: "data-analysis", isActive: false },
    { name: "BaseLinker", tag: "baselinker", isActive: false },
  ],
  talks: [
    {
      source: "youtube",
      id: "SzGjZW2VJ0Q",
      type: "video",
      language: "polish",
      title:
        "Cypress & Github - Efficient Setup for Pull Requests with Cypress Cloud and Alternatives",
      description:
        "Ta prezentacja skupia się na opisie procesu konfiguracji Cypressa z Githubem, w sposób by w konsekwencji maksymalnie ułatwić proces rozpoznawania przyczyny failujących testów. W prezentacji omawiany jest serwis Cypress Cloud a także dwie jego alternatywy: Sorry-Cypress i Currents.dev. Prezentacja zawiera przykładowe pliki konfiguracyjne, które można wykorzystać do samodzielnej konfiguracji własnego projektu.",
      date: "May 25, 2023",
      filterTags: ["e2e", "cypress", "github"],
    },
  ],
  talkFilters: [
    { name: "All", tag: allFilterTag, isActive: true },
    { name: "Cypress", tag: "cypress", isActive: false },
    { name: "E2E", tag: "e2e", isActive: false },
    { name: "Github", tag: "github", isActive: false },
  ],
  languageFilters: [
    { name: "🌎", tag: allFilterTag, isActive: true },
    { name: "🇬🇧", tag: "english", isActive: false },
    { name: "🇵🇱", tag: "polish", isActive: false },
  ],
  testimonials: [
    {
      author: "Bartłomiej Rynkiewicz",
      title: "CEO of New Deal",
      type: "written",
      signature: "bartlomiej-rynkiewicz-signature.png",
      body: "Marek worked for New Deal / DR Trading for 8 years. His skills provided substantial value for both companies. I recommend him as a solid and trustworthy employee with a wide range of technical knowledge.",
      relevantForProjects: ["spistresci-pl"],
      url: "https://lukmarcus.github.io/recommendations/Marek%20Szumny%20NDDR%20EN.pdf",
    },
    {
      author: "Magdalena Szumna",
      title: "Senior QA Engineer at Vue StoreFront",
      type: "linkedin",
      body: "Over the years, I've mentored many QAs, and I have to admit, Marek is one of the fastest learners I've had the opportunity to train. His dedication and attention to detail are truly remarkable. Marek possesses a strong analytical mindset, which has consistently enabled him to identify and resolve complex issues in a timely and efficient manner.",
      relevantForProjects: [],
      url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7041048617507274752?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7041048617507274752%2C7046530659414122497%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287046530659414122497%2Curn%3Ali%3AugcPost%3A7041048617507274752%29",
      pictureUrl: "@/images/testimonials/magdalena-szumna.jpg",
    },
  ],
  links: {
    linkedinProfile: "https://www.linkedin.com/in/marekszumny/",
    githubProfile: "https://github.com/lukmarcus",
  },
  flags: {
    polish: "🇵🇱",
    english: "🇬🇧",
  },
  blogPosts: [],
  skillsGroups: [
    {
      name: "Manual Testing",
      skills: [
        "Creating test scenarios",
        "Regression testing",
        "Bugs raporting",
        "API testing",
        "Quality control",
      ],
      icon: "@/images/manual-testing-icon.svg",
    },
    {
      name: "Automated Testing",
      skills: [
        "Cypress / Playwright",
        "Currents.dev / Sorry-Cypress",
        "Page Object Pattern",
        "Cucumber / BDD",
        "Newman (Postman CLI)",
      ],
      icon: "@/images/automated-testing-icon.svg",
    },
    {
      name: "Tools",
      skills: [
        "Git CLI / GitHub",
        "Chrome Dev Tools / XPath",
        "SQL / SQLite / MySQL",
        "HTML / CSS / Bootstrap",
        "Linux /  Windows",
      ],
      icon: "@/images/tools-icon.svg",
    },
  ],
};

export default db;
