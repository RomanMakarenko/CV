export interface Position {
  title: string;
  duration: string;
  description?: string;
  responsibilities: string[];
  achievements?: string[];
  tech: string[];
}

export interface Experience {
  organisation: string;
  link?: string;
  logo?: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  // Ciklum / NZZ — most recent first
  {
    organisation: "Ciklum (NZZ Mediengruppe)",
    logo: "/logos/ciklum.png",
    positions: [
      {
        title: "Senior Automation QA Engineer",
        duration: "Jan 2023 — Present",
        description:
          "Project 3 · Outsourcing engagement. The client is a Zurich-based media company operating across newspaper, magazine and television broadcasting.",
        responsibilities: [
          "Developed, maintained, and enhanced the web test automation framework.",
          "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.",
          "Supported releases across all environments, including production.",
          "Contributed to the existing test automation framework and automated test coverage.",
        ],
        achievements: [
          "Designed and maintained a test suite comprising 3,000+ project-specific test cases across five projects, including adapted and reused scenarios.",
          "Mentored and supported team members on test automation and QA practices.",
          "Supported QA activities for CMS releases.",
          "Supported the migration of frontend applications from Vue.js to React.",
          "Supported the migration of the mobile application from Vue.js to React.",
          "Supported the migration of a 10+ year-old custom CMS fork to the main branch.",
        ],
        tech: [
          "Node.js",
          "WebdriverIO",
          "Mocha",
          "Chai.js",
          "Postman",
          "Figma",
          "DevTools",
          "Travis CI",
          "API Testing",
          "End-to-End Testing",
          "Web Testing",
          "Test Design",
          "Test Planning",
          "Test Reporting",
          "Test Strategy",
        ],
      },
      {
        title: "Senior QA Automation Engineer",
        duration: "May 2018 — Jan 2023",
        description:
          "Project 2 · Staff augmentation engagement. The client is a Zurich-based media company operating across newspaper, magazine and television broadcasting.",
        responsibilities: [
          "Redesigned and rewrote the web test automation framework using WebdriverIO.",
          "Developed a mobile test automation framework using Java and Appium (later deprecated).",
          "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.",
          "Supported releases across all environments, including production.",
          "Took on QA Lead responsibilities, including scheduling and managing QA resources to ensure effective testing delivery for new and existing systems.",
          "Provided the team with regular feedback on product quality and testing status.",
        ],
        achievements: [
          "Provided QA support during the major redesign of NZZ and NZZaS (MAGAZIN).",
          "Supported the full development lifecycle from initial concept to production for CHM (9 tenants) and TheMarket.",
          "Achieved comprehensive End-to-End (E2E) test coverage of the CMS across NZZ, NZZaS, Bellevue, CHM, and TheMarket.",
        ],
        tech: [
          "Java",
          "Node.js",
          "WebdriverIO",
          "Appium",
          "Mocha",
          "Chai.js",
          "Postman",
          "Figma",
          "Zeplin",
          "DevTools",
          "API Testing",
          "End-to-End Testing",
          "Web Testing",
          "System Testing",
          "Mobile Testing",
          "Test Design",
          "Test Planning",
          "Test Reporting",
          "Test Strategy",
        ],
      },
      {
        title: "QA Lead",
        duration: "Jun 2017 — Apr 2018",
        description:
          "Project 1. NZZ Mediengruppe is a Zurich-based media company operating across newspaper, magazine, and television broadcasting.",
        responsibilities: [
          "Led a team of five QA engineers.",
          "Managed QA resource planning and scheduling to ensure effective testing delivery for new and existing systems.",
          "Coordinated and supported the QA team to ensure testing activities were delivered within project timelines.",
          "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.",
          "Supported releases across all environments, including production.",
          "Maintained and enhanced the existing test automation framework.",
          "Performed testing of web and mobile applications.",
        ],
        achievements: [
          "Successfully delivered the company's first mobile applications to production.",
          "Established and formalized QA processes and documentation for the project.",
        ],
        tech: [
          "Test Strategy",
          "Test Planning",
          "Test Design",
          "Test Reporting",
          "End-to-End Testing",
          "API Testing",
          "Web Testing",
          "Mobile Testing",
          "Postman",
          "Charles",
          "DevTools",
          "Zeplin",
        ],
      },
    ],
  },

  // Playtika
  {
    organisation: "Playtika",
    logo: "/logos/playtika.png",
    positions: [
      {
        title: "Senior QA Automation Engineer",
        duration: "Aug 2016 — Jun 2017",
        description:
          "The project was based on a microservices architecture and focused on backend services.",
        responsibilities: [
          "Created and maintained test documentation, including test cases, checklists, and test plans.",
          "Tested backend microservices, APIs, integrations, and supporting infrastructure using Kafka, Elasticsearch, Couchbase, Logstash, Swagger, and Eureka.",
          "Developed and maintained automated tests.",
          "Performed integration testing of microservices owned by the Scrum team.",
          "Identified, documented, and tracked defects throughout the testing lifecycle.",
        ],
        achievements: [
          "Developed and maintained integration test suites for backend microservices.",
          "Improved release stability through increased integration test coverage.",
        ],
        tech: [
          "Java",
          "Spring",
          "Groovy",
          "MySQL",
          "Kafka",
          "Elasticsearch",
          "Couchbase",
          "Logstash",
          "GraphQL",
          "Swagger",
          "Eureka",
          "TeamCity",
          "Bitbucket",
          "BDD",
          "Database Testing",
          "Integration Testing",
          "Microservices",
        ],
      },
      {
        title: "QA Automation Engineer / Senior QA Engineer",
        duration: "Oct 2015 — Aug 2016",
        description: "Test automation for mobile games.",
        responsibilities: [
          "Created and maintained test documentation, including test cases, checklists, and test plans.",
          "Developed UI automated tests using Java, Appium, ADB, and MonosynDriver, an internal Playtika software solution.",
          "Executed test builds and automated test runs through TeamCity.",
          "Analyzed test coverage and identified gaps in automated test scenarios.",
          "Identified, documented, and tracked defects throughout the testing lifecycle.",
        ],
        achievements: [
          "Developed the first mobile test automation framework for the project.",
        ],
        tech: [
          "Java",
          "Appium",
          "ADB",
          "MonosynDriver",
          "Selenium",
          "TestNG",
          "TeamCity",
          "Bitbucket",
          "Mobile Testing",
          "Web Testing",
          "Test Design",
          "Test Planning",
          "Test Strategy",
          "Test Reporting",
        ],
      },
      {
        title: "QA Automation Engineer → Senior QA Engineer",
        duration: "Aug 2013 — Oct 2015",
        description: "Test automation for web-based Flash (ActionScript) games.",
        responsibilities: [
          "Created and maintained test documentation, including test cases, checklists, and test plans.",
          "Developed UI automated tests using Java, Selenium WebDriver, and FlashDriver, an internal Playtika solution for interacting with Flash elements.",
          "Analyzed test coverage and identified gaps in automated test scenarios.",
          "Identified, documented, and tracked defects throughout the testing lifecycle.",
        ],
        achievements: [
          "Developed the first End-to-End (E2E) test automation framework for the project.",
          "Developed an automated health-check script for NOC engineers that monitored critical services every five minutes, enabling proactive detection of service issues.",
          "Achieved automated test coverage across all games available in the portfolio at the time.",
        ],
        tech: [
          "Java",
          "Selenium WebDriver",
          "FlashDriver",
          "TestNG",
          "TeamCity",
          "Bitbucket",
          "UI Testing",
        ],
      },
      {
        title: "Middle QA Engineer",
        duration: "Feb 2013 — Aug 2013",
        description: "Social slot game developed for Facebook.",
        responsibilities: [
          "Tested web applications, including Flash-based applications.",
          "Tested game portals and web-based administration panels.",
          "Tested mobile applications, including HTML5 and native applications for Android and iOS.",
          "Created test documentation, including test cases, checklists, and test plans.",
          "Reported defects.",
        ],
        achievements: [
          "Supported the successful delivery of the game to production.",
          "Tested the application under high-load conditions.",
        ],
        tech: [
          "Test Strategy",
          "Test Reporting",
          "Test Planning",
          "Test Design",
          "Performance Testing",
          "Web Testing",
          "Mobile Testing",
          "API Testing",
          "DevTools",
          "Charles",
        ],
      },
    ],
  },

  // TotalGame
  {
    organisation: "TotalGame",
    logo: "/logos/totalgame.svg",
    positions: [
      {
        title: "QA Lead",
        duration: "Nov 2012 — Feb 2013",
        description: "Online casino game development and integration.",
        responsibilities: [
          "Led a team of four QA engineers.",
          "Tested web applications, including Flash-based applications.",
          "Tested game portals and web-based administration panels.",
          "Tested desktop applications, including game download clients and administration panels.",
          "Tested Flash-based games on mobile devices.",
          "Created test documentation, including test cases and checklists.",
          "Reported defects.",
        ],
        achievements: [
          "Maintained high product quality and received positive customer feedback.",
        ],
        tech: [
          "Test Design",
          "Test Planning",
          "Test Reporting",
          "Test Strategy",
          "API Testing",
          "Web Testing",
          "Mobile Testing",
        ],
      },
      {
        title: "QA Engineer",
        duration: "May 2012 — Nov 2012",
        description: "Online casino game development and integration.",
        responsibilities: [
          "Tested web applications, including Flash-based applications.",
          "Tested game portals and web-based administration panels.",
          "Tested desktop applications, including game download clients and administration panels.",
          "Tested Flash-based games on mobile devices.",
          "Created test documentation, including test cases and checklists.",
          "Reported defects.",
        ],
        achievements: [
          "Supported the successful delivery of online games to production.",
        ],
        tech: [
          "Test Reporting",
          "Test Planning",
          "Test Design",
          "Test Strategy",
          "DevTools",
          "Fiddler",
        ],
      },
    ],
  },
  {
    organisation: "Funtime",
    link: "https://funtime.com.ua/",
    logo: "/logos/funtime.png",
    positions: [
      {
        title: "Co-Founder, Product Owner, Project Manager",
        duration: "2013 — Present",
        description:
          "Pet project — Ukrainian travel and leisure discovery platform. Curates and reviews places across Ukraine: architecture, culture & art, nature, entertainment, active leisure, relaxation & recreation.",
        responsibilities: [
          "Built and managed the platform from concept to launch",
          "Defined product vision, roadmap, and feature priorities",
          "Managed project timeline, tasks, and team coordination",
          "Curated content and oversaw place listings database",
        ],
        achievements: [
          "Launched and maintained a live travel platform serving users across Ukraine",
          "Grew a database of curated places covering 6 major categories",
        ],
        tech: [
          "Product Management",
          "Project Management",
          "Team Leadership",
          "Content Management",
        ],
      },
    ],
  },
];
