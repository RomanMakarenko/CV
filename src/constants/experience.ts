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
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  // Ciklum / NZZ — most recent first
  {
    organisation: "Ciklum (NZZ Mediengruppe)",
    positions: [
      {
        title: "Automation QA",
        duration: "Jan 2023 — Present",
        description:
          "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
        responsibilities: [
          "Wrote and maintained QA Automation Framework (Web)",
          "Managed software defects tracking, reporting, and follow-up using a bug tracking system",
          "Supported releases into all environments including production",
          "Maintained and contributed to existing test automation framework",
          "Tested web applications",
        ],
        achievements: [
          "Wrote and maintained QA Automation Framework (Web)",
          "Wrote more than 3000 test cases",
          "Supported prod deployments",
          "Provided help and mentoring to coworkers",
          "Supported CMS releases",
        ],
        tech: [
          "Node.js",
          "mocha",
          "Chai.js",
          "API testing",
          "End-to-end testing",
          "Test Design",
          "Test Planning",
          "Test Reporting",
          "Test strategy",
          "Web Testing",
        ],
      },
      {
        title: "QA Automation",
        duration: "May 2018 — Jan 2023",
        description:
          "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
        responsibilities: [
          "Rewrote QA Automation Framework (Web) using WebdriverIO",
          "Wrote mobile Automation Framework (Java + Appium, deprecated)",
          "Managed software defects tracking, reporting, and follow-up",
          "Supported releases into all environments including production",
          "Part of QA Lead responsibilities: scheduled and managed resources for effective testing delivery",
          "Provided feedback about the current state of products to the team",
          "Tested web applications",
        ],
        achievements: [
          "Supported deep redesign: NZZ, NZZaS (MAGAZIN)",
          "Supported full development cycle from idea to prod for CHM (9 tenants), TheMarket",
          "Fully covered CMS with E2E autotests for projects: NZZ, NZZaS, Bellevue, CHM, TheMarket",
        ],
        tech: [
          "Node.js",
          "mocha",
          "Chai.js",
          "WebdriverIO",
          "Java",
          "Appium",
          "Web Testing",
          "End-to-end testing",
          "API testing",
          "Mobile Testing",
        ],
      },
      {
        title: "QA Lead",
        duration: "Jun 2017 — Apr 2018",
        description:
          "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
        responsibilities: [
          "Led a small team of 5 members",
          "Responsible for scheduling and management of resources to fulfill demand for effective testing delivery",
          "Motivated and inspired QA Team members to deliver to the best of their ability",
          "Managed software defects tracking, reporting, and follow-up using a bug tracking system",
          "Supported releases into all environments including production",
          "Maintained and contributed to existing test automation framework",
          "Tested web and mobile apps",
        ],
        achievements: [
          "Ensured effective testing of new and existing systems",
          "Brought to market the company's first high-quality mobile applications",
          "Wrote documentation and formalised the testing processes",
        ],
        tech: [
          "Test strategy",
          "Test Reporting",
          "Test Planning",
          "End-to-end testing",
          "API testing",
          "Web Testing",
          "Test Design",
          "Mobile Testing",
        ],
      },
    ],
  },

  // Playtika
  {
    organisation: "Playtika",
    positions: [
      {
        title: "Senior QA Automation Engineer / Senior QA Engineer",
        duration: "Aug 2016 — Jun 2017",
        description:
          "Backend microservices project.",
        responsibilities: [
          "Prepared test documentation (Test Cases, Checklists, Test Plans)",
          "Tested microservices (DB, Kafka, Elasticsearch, Couchbase, logstash, Swagger, Eureka)",
          "Created new automated tests",
          "Maintained existing automated tests",
          "Covered microservices by integration testing within the SCRUM team",
          "Reported defects",
        ],
        achievements: [
          "Wrote new and maintained existing integration tests",
          "Increased the count of successful Sprints and Releases",
        ],
        tech: [
          "Java",
          "Spring",
          "Groovy",
          "Spock",
          "Integration testing",
          "Microservices Architecture",
          "MySQL",
          "Kafka",
          "Elasticsearch",
          "GraphQL",
          "BDD",
          "TeamCity",
          "Bitbucket",
        ],
      },
      {
        title: "QA Automation Engineer / Senior QA Engineer",
        duration: "Oct 2015 — Aug 2016",
        description:
          "Games — mobile automation testing.",
        responsibilities: [
          "Prepared test documentation (Test Cases, Checklists, Test Plans)",
          "Wrote autotests — UI (Java, Appium, ADB, MonosynDriver)",
          "Ran test builds (TeamCity)",
          "Analysed scenario coverage with autotests",
          "Reported defects",
        ],
        achievements: [
          "Created the first mobile automation framework",
        ],
        tech: [
          "Java",
          "Appium",
          "ADB",
          "TeamCity",
          "Mobile Testing",
          "Selenium",
          "TestNG",
          "Bitbucket",
        ],
      },
      {
        title: "QA Automation Engineer — Senior QA Engineer",
        duration: "Aug 2013 — Oct 2015",
        description:
          "Web applications and games.",
        responsibilities: [
          "Prepared test documentation (Test Cases, Checklists, Test Plans)",
          "Wrote autotests — UI (Selenium WebDriver, FlashDriver — internal solution for Flash elements)",
          "Analysed scenario coverage with autotests",
          "Reported defects",
        ],
        tech: [
          "Java",
          "Selenium",
          "FlashDriver",
          "TestNG",
          "TeamCity",
          "Bitbucket",
          "Web Testing",
          "Mobile Testing",
        ],
      },
      {
        title: "Middle QA Engineer",
        duration: "Feb 2013 — Aug 2013",
        description:
          "Social slot game on the Facebook platform.",
        responsibilities: [
          "Tested web applications (Flash applications testing)",
          "Tested websites (Game portals, Web administration panel)",
          "Tested mobile applications (HTML5, Native Android and iOS)",
          "Prepared test documentation (Test Cases, Checklists, Test Plans)",
          "Reported defects",
        ],
        achievements: [
          "The game was delivered to production",
          "Worked with high load",
        ],
        tech: [
          "Flash Testing",
          "HTML5",
          "Android",
          "iOS",
          "Test strategy",
          "Test Planning",
          "Test Reporting",
        ],
      },
    ],
  },

  // TotalGame
  {
    organisation: "TotalGame",
    positions: [
      {
        title: "QA Lead",
        duration: "Nov 2012 — Feb 2013",
        description:
          "Developed and integrated online games (casino).",
        responsibilities: [
          "Tested web applications (Flash applications testing)",
          "Tested websites (Game portals, Web administration panel)",
          "Tested desktop applications (Download Client, Administration panels)",
          "Tested mobile applications (Flash games for mobile devices)",
          "Prepared test documentation (Test Cases, Checklists)",
          "Reported defects",
          "Led a small team of 4 QA engineers",
        ],
        achievements: [
          "Ensured high product quality, no comments from customers",
        ],
        tech: [
          "Test Design",
          "Test Planning",
          "Test Reporting",
          "Test strategy",
          "API testing",
          "Web Testing",
          "Mobile Testing",
        ],
      },
      {
        title: "QA Engineer",
        duration: "May 2012 — Nov 2012",
        description:
          "Developed and integrated online games (casino).",
        responsibilities: [
          "Tested web applications (Flash applications testing)",
          "Tested websites (Game portals, Web administration panel)",
          "Tested desktop applications (Download Client, Administration panels)",
          "Tested mobile applications (Flash games for mobile devices)",
          "Prepared test documentation (Test Cases, Checklists)",
          "Reported defects",
        ],
        achievements: [
          "Ensured high product quality, no comments from customers",
        ],
        tech: [
          "Flash Testing",
          "Web Testing",
          "Mobile Testing",
          "Desktop Testing",
        ],
      },
    ],
  },
];