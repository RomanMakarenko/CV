export interface GitHubProject {
  name: string;
  url: string;
  description: string;
}

export interface CurriculumLevel {
  title: string;
  topics: string[];
  isProject?: boolean;
}

export interface CurriculumModule {
  name: string;
  levels: CurriculumLevel[];
  projects?: GitHubProject[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image?: string;
  modules?: CurriculumModule[];
  description?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-13",
    name: "Playwright JAVA Automation Testing — From Basics to Framework",
    issuer: "Udemy",
    date: "Aug 2026",
    image: "/certificates/playwright-java.jpg",
    description:
      "A comprehensive hands-on course on building an industry-standard Playwright automation framework in Java — from Playwright setup and browser engines, through resilient locators, auto-waits, browser contexts, and Trace Viewer, to API testing with Playwright, network interception and mocking, Page Object Model, TestNG data-driven testing, Maven profiles, Allure reporting, and CI/CD with GitHub Actions.",
    modules: [
      {
        name: "Section 1: Introduction to Playwright Java Tutorial",
        levels: [
          {
            title: "2 lectures · 20min",
            topics: [
              "1. Introduction to the course - What this course covers?",
              "2. Download Java & set in System variables in both windows & MAC",
            ],
          },
        ],
      },
      {
        name: "Section 2: Brush up Java fundamentals for Playwright Automation",
        levels: [
          {
            title: "9 lectures · 1hr 30min",
            topics: [
              "3. Course Strategy to learn Java basics for Selenium Automation",
              "4. Introduction to Java variables and Data types with examples",
              "5. What are Arrays in Java? How to initialize and retrieve the values of array",
              "6. Introduction to For loop to iterate over array of Strings and Integers",
              "7. Enhanced for loop declaration & using Conditional statements inside the loops",
              "8. What is Arraylist and differences between Arraylist and Arrays",
              "9. Iterating over Arrays and Arraylists and its related methods",
              "10. Strings in Java - How to declare Strings & Important String methods",
              "11. How to create methods and access methods using Java class object",
            ],
          },
        ],
      },
      {
        name: "Section 3: Getting Started with Playwright UI Automation & Browser Engines",
        levels: [
          {
            title: "6 lectures · 55min",
            topics: [
              "12. Create Playwright Maven Project and understand the POM.xml dependencies",
              "13. What is TestNG & Get this library Plugged to run Playwright tests",
              "14. Invoking the Chromium Browser with Playwright & Browser Instance",
              "15. Introduction to Playwright Assertions and verify page navigation with title",
              "16. What are Playwright Browsers and running tests in different browser engines",
              "17. Download complete Codebase discussed in this course",
            ],
          },
        ],
      },
      {
        name: "Section 4: Deep dive into Playwright UI Automation with Assertions & Locator filters",
        levels: [
          {
            title: "6 lectures · 1hr 24min",
            topics: [
              "18. Understand the locators in Playwright and how they help in identifying elements",
              "19. Automate the Login Forms using Playwright resilient Locators - Demo Example",
              "20. Apply Playwright Assertions to validate & use CSS Locators to identify elements",
              "21. Handling Dropdowns in a form using SelectOption method in Playwright",
              "22. How visible Assertions work in Playwright & importance of getByTestID locator",
              "23. Understand the concept of Filter and how to apply it on list of locators level",
            ],
          },
        ],
      },
      {
        name: "Section 5: Understand AutoWait Strategy - Setting Custom waits & complete E2E flows",
        levels: [
          {
            title: "6 lectures · 58min",
            topics: [
              "24. Understand how Wait Mechanisms work in Playwright for Assertions level",
              "25. Understand the concept of Auto Wait and how we can customize waits in Playwright",
              "26. Ways to extract text from the browser using Playwright API Methods",
              "27. End to end flow of completing Booking using all possible Playwright locators",
              "28. Apply Filter on booking cards with smart Locator Strategy to find unique card",
              "29. Wrapping up end to end flow with Assertions with demo of String to Int Parsing",
            ],
          },
        ],
      },
      {
        name: "Section 6: Understand Browser Context, Child windows & Trace Viewer features of Playwright",
        levels: [
          {
            title: "10 lectures · 1hr 38min",
            topics: [
              "30. Understand the difference between Browser & context & page in Playwright world",
              "31. Have a design plan of handling child windows using Playwright in context level",
              "32. Switch to Child window to automate & flip back to Parent with Playwright methods",
              "33. Understand the Trace viewer in Playwright & how it helps to debug the tests",
              "34. Handling Radio Buttons, Checkboxes with assertions using Playwright Java - Demo",
              "35. How to verify if element is visible or hidden with assertions in Playwright",
              "36. Understand handling Popup & Alert boxes using Playwright - Example",
              "37. What are Frames? How to handle Frames using Playwright with context switch",
              "38. How to take screenshots on page level & locator level in Playwright",
              "Quiz 1: Check your Knowledge - Quiz Time",
            ],
          },
        ],
      },
      {
        name: "Section 7: Learn API Automation Testing with Playwright Java - HTTP CRUD Methods",
        levels: [
          {
            title: "7 lectures · 1hr 10min",
            topics: [
              "39. Important Info",
              "40. Getting started with API Testing using Playwright - Understand request context",
              "41. Build APIRequest context object to make HTTP methods using Playwright methods",
              "42. Make Login Post call and Parse Json to extract the token using Playwright method",
              "43. Get HTTP API call to get the events - Implement using Playwright Java methods",
              "44. HTTP Delete API method implementation & understand Path - Query Params - Example",
              "45. Validate whether CRUD operations performed yield success with Get API call check",
            ],
          },
        ],
      },
      {
        name: "Section 8: Understand Browser Network Interception with Playwright to mock Request/Response",
        levels: [
          {
            title: "4 lectures · 42min",
            topics: [
              "46. Understand how to intercept Network responses and test edge case scenarios",
              "47. Apply assertions and validate edge case tests with Json mock response injection",
              "48. Understand how to mock request calls using Playwright before hitting API server",
              "Quiz 2: Check your knowledge - Quiz time",
            ],
          },
        ],
      },
      {
        name: "Section 9: Apply Java Object Oriented Principles & keep Tests isolated from Reusable code",
        levels: [
          {
            title: "6 lectures · 57min",
            topics: [
              "49. Framework Design Plan - What we are going to cover",
              "50. How TestNG Annotations help with Inheritance to remove boilerPlate code in Test",
              "51. How to pass values from test through Parameterized Constructor & this keyword",
              "52. Usage of Super keyword in the Constructor to pass values to Parent Class",
              "53. Implement Inheritance to move all browser invocation code to the Parent class",
              "54. Configure Global Properties in Java using Properties class - Example demo",
            ],
          },
        ],
      },
      {
        name: "Section 10: Implement Page Object Design Pattern to Playwright Java Tests - Demo examples",
        levels: [
          {
            title: "6 lectures · 1hr 5min",
            topics: [
              "55. What is Page object model? Advantages of its implementation",
              "56. Understand how to get started to refactor tests as per PageObject standards",
              "57. Optimize the Page object file with centralized locator storing & object creation",
              "58. Code download for assignment",
              "59. Part 1 - Wrap up Page object pattern implementation into Playwright Framework",
              "60. Part 2 - Wrap up Page object pattern implementation into Playwright Framework",
            ],
          },
        ],
      },
      {
        name: "Section 11: Implement Data Driven & Parameterization to the Tests from External Json files",
        levels: [
          {
            title: "4 lectures · 40min",
            topics: [
              "61. Understand how to parameterize test data using TestNG Data provider - Demo",
              "62. Understand how to map object multiDimensional array to HashMap object - example",
              "63. Build a solution to drive data from Json file to HashMap -> TestNG Data provider",
              "64. Integrate the utils of Data driven & parameterization into Playwright Framework",
            ],
          },
        ],
      },
      {
        name: "Section 12: Learn how to drive test execution in Series & Parallel & Grouped using TestNG",
        levels: [
          {
            title: "3 lectures · 23min",
            topics: [
              "65. What is TestNG.xml file? How to run all the tests in framework with one click",
              "66. How to run Playwright tests in parallel mode in Framework using TestNG.xml",
              "67. How to run only selected tests in the Framework - TestNG Group tagging concept",
            ],
          },
        ],
      },
      {
        name: "Section 13: Drive test execution through Maven POM.xml - Commands /Profiles/ env variables",
        levels: [
          {
            title: "4 lectures · 38min",
            topics: [
              "68. Importance of Maven sure fire plugin to run tests through Maven commands",
              "69. What is Maven Profiles? how to use them to switch test execution context smartly",
              "70. How to control env variables from Maven commands into Framework to test files",
              "71. Implement logic to decide which env variables to pick at run time - Maven/Config",
            ],
          },
        ],
      },
      {
        name: "Section 14: Integrate AI Agents into Playwright Java Framework & Intro to MCP Server",
        levels: [
          {
            title: "3 lectures · 24min",
            topics: [
              "72. How to Use GitHub Copilot and Bring Its AI Power to Your Automation Framework",
              "73. Introduction to Playwright MCP Server and how it works behind scenes with Agents",
              "74. Integrate Playwright MCP into Copilot Agent and build tests through AI Prompts",
            ],
          },
        ],
      },
      {
        name: "Section 15: Generate Allure Report & Implement CI/CD for Test execution using GitHub Actions",
        levels: [
          {
            title: "8 lectures · 1hr 1min",
            topics: [
              "75. Generate HTML reports using Allure reporting for Playwright Java framework",
              "76. Configure Allure reporting into Maven and run tests to see the HTML test results",
              "77. Introduction to GIT & getting started to push code to remote repo",
              "78. What are GitHub Actions and the concept of CI/CD implementation in framework",
              "79. Understand the .yml which can implement CI/CD and run Playwright framework tests",
              "80. Build the Choice Params & see the Demo of CI/CD implementation live for Tests",
              "81. Wrap up - What have we implemented in designing Industry standard Framework",
              "Quiz 3: Framework Quiz",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "JavaPlaywrightFramework",
            url: "https://github.com/RomanMakarenko/JavaPlaywrightFramework",
            description:
              "Industry-standard Playwright Java framework built during the course: Page Object Model, TestNG data-driven testing, Maven profiles, Allure reporting, and CI/CD with GitHub Actions.",
          },
        ],
      },
      {
        name: "Section 16: Course Code download",
        levels: [
          {
            title: "1 lecture · 1min",
            topics: [
              "82. Code download",
            ],
          },
        ],
      },
      {
        name: "Section 17: Explore & Learn Java In depth from the given video tutorials",
        levels: [
          {
            title: "1 lecture · 1min",
            topics: [
              "83. Bonus Lecture",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-12",
    name: "Rest API Testing (Automation) from Scratch — Rest Assured Java",
    issuer: "Udemy",
    date: "Aug 2026",
    image: "/certificates/restassured.jpg",
    description:
      "A comprehensive end-to-end course on REST API testing and automation with Rest Assured in Java — from API fundamentals and Postman, through response validation with JsonPath, dynamic JSON payloads, OAuth 2.0, and POJO serialization/deserialization, to building a Cucumber BDD API framework from scratch, GraphQL testing, and CI/CD integration with Jenkins.",
    modules: [
      {
        name: "Section 1: REST API Basics and Terminology",
        levels: [
          {
            title: "7 lectures · 54min",
            topics: [
              "Course FAQ's/Syllabus (** Must Watch****)",
              "Introduction to REST API and where it is used in Project Architecture",
              "Real time Usage of API's in industry with Examples",
              "Understanding GET, POST, PUT DELETE Http Crud operations of API",
              "What are Path,Query Parameters  & Headers in Rest API",
              "Notes Download",
              "Quiz 1: Section-1 Quiz",
            ],
          },
        ],
      },
      {
        name: "Section 2: 5 hours of Java Tutorials for Basics brushup",
        levels: [
          {
            title: "1 lecture · 1min",
            topics: [
              "brush up on Java concepts",
            ],
          },
        ],
      },
      {
        name: "Section 3: Getting started with API Testing using Postman",
        levels: [
          {
            title: "9 lectures · 39min",
            topics: [
              "Video Player Setting tips for Best Experience in viewing course",
              "Consolidated place to find Practice Websites & API's used in this tutorial",
              "Introduction to POSTMAN  and Google Maps API's",
              "Important Note",
              "Understand Add Place API and execute it through Postman",
              "Understand Get & Delete Place API using GET,Delete HTTp Methods using Postman",
              "Practice Resources for Strengthening Your Testing Skills",
              "Update Place API using PUT http method using Postman",
              "Google Maps POSTMAN Code Download",
            ],
          },
        ],
      },
      {
        name: "Section 4: Rest Assured setup for API Automation Testing",
        levels: [
          {
            title: "3 lectures · 49min",
            topics: [
              "Setting up Java with system variables in Windows and MAC",
              "Setting up Rest Assured Maven Project with Eclipse installation",
              "Build Rest API Automation Test to Add Place and validate Status codes",
            ],
          },
        ],
      },
      {
        name: "Section 5: Validating the Rest API Responses",
        levels: [
          {
            title: "7 lectures · 44min",
            topics: [
              "Code Download",
              "Assertions on Json Response Body and Headers through Automated code",
              "Parsing the Json Response body using JsonPath class",
              "Integrating the Multiple API's with common Json response values",
              "Building End to End Automation using GET, POST and PUT Http Methods",
              "Importance of Junit/TestNG Assertions in validating the responses",
              "Quiz 2: Quiz for Section-6",
            ],
          },
        ],
      },
      {
        name: "Section 6: Diving in Depth-Automating REST API's",
        levels: [
          {
            title: "7 lectures · 49min",
            topics: [
              "Understanding Structure of Complex Nested Json and its array notations",
              "Json used in this Section with Queries to solve",
              "Retrieving the Json Array Size and its elements using JsonPath",
              "Iterating over every element of Json Array and accessing elements in it",
              "Retrieving Json Nodes on Condition logic using JsonPath",
              "Real Time example to solve Business logic through Json response",
              "Code Download",
            ],
          },
        ],
      },
      {
        name: "Section 7: Handling Dynamic Json Payloads with Parameterization",
        levels: [
          {
            title: "9 lectures · 55min",
            topics: [
              "Why Dynamic Json payloads are important to understand",
              "Introduction to Library API",
              "Rest Assured Test for Library API Add Book http method",
              "Sending parameters to payload from Test",
              "Understanding TestNg Data provider for parameterization",
              "Example on Parameterization of API Tests with multiple data sets",
              "code download",
              "How to handle with static json payloads",
              "code download",
            ],
          },
        ],
      },
      {
        name: "Section 8: Real world Example-Automating Jira API's",
        levels: [
          {
            title: "6 lectures · 58min",
            topics: [
              "Setting up Jira Cloud Account for API Testing",
              "Basic Authentication Mechanism to authenticate for Jira API's",
              "Understanding Contract to create Bug in Jira using API in the Postman",
              "How to send files as attachment to the Post API call for associated Jira Bug",
              "Rest Assured Automation test to create Bug and send files as attachment for Jira",
              "Code download",
            ],
          },
        ],
      },
      {
        name: "Section 9: Handling oauth 2.0 Authorization Grant type - Client Credentials",
        levels: [
          {
            title: "6 lectures · 43min",
            topics: [
              "Introduction to OAuth 2.0 Client credentials Grant type",
              "Practial example on OAuth 2.0 with its contract details for testing",
              "API Contract download",
              "Postman testing for the OAuth related API's and generating response",
              "Code download",
              "Rest Assured automation script for OAuth end to end API's test",
            ],
          },
        ],
      },
      {
        name: "Section 10: Deserialization using POJO classes with Rest Assured",
        levels: [
          {
            title: "9 lectures · 1hr 33min",
            topics: [
              "What is Serialization and Deserialization in Rest Assured",
              "Libraries needed to support Serialization in Rest Assured",
              "Strategies in Parsing Complex nested Json using POJO classes",
              "Creating POJO classes for the real time Nested Array Json",
              "End to end Automation examples using POJO Deserialization",
              "Solving Complex Queries from Json with simple POJO methods -Part 1",
              "Solving Complex Queries from Json with simple POJO methods-Part 2",
              "How to showcase API Testing experience to recruiters?",
              "Code download",
            ],
          },
        ],
      },
      {
        name: "Section 11: Serialization of Input Payload using Google Maps API Example",
        levels: [
          {
            title: "3 lectures · 24min",
            topics: [
              "Build POJO classes for constructing Json Payload to API Rec 12-19-19 2",
              "Complete End to end Test case with Serialization Implementation  Rec 12-19-19 34",
              "Where to download Code",
            ],
          },
        ],
      },
      {
        name: "Section 12: Understand Request and Response Spec Builders in Rest Assured",
        levels: [
          {
            title: "3 lectures · 25min",
            topics: [
              "Significance of Spec Builders in Rest Assured    Rec 12-19-19 5(builderDoc)",
              "Practical Example in implementing Spec Builders and optimize code  Rec 12-19-19",
              "Code Download",
            ],
          },
        ],
      },
      {
        name: "Section 13: End to End ecommerce API example with Automation Concepts",
        levels: [
          {
            title: "6 lectures · 1hr 28min",
            topics: [
              "Understand Ecommerce API Contract and build manual API's in Postman",
              "Create Rest Assured automation for Login Call to generate Auth token",
              "Automate Post calls which has form parameters and attachments using Rest Assured",
              "Implement POJO Classes to build nested Json for Create Order for Product added",
              "Script implementation with Delete Product using Path parameters & HTTPS relaxed",
              "Code download",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "RestAssuredPlayground",
            url: "https://github.com/RomanMakarenko/RestAssuredPlayground",
            description: "Hands-on Rest Assured practice: end-to-end ecommerce API automation covering login, orders, and product validation flows.",
          },
        ],
      },
      {
        name: "Section 14: Cucumber BDD API Framework Development from Scratch - 1",
        levels: [
          {
            title: "22 lectures · 4hr 23min",
            topics: [
              "CheckPoint before starting Framework lectures",
              "Cucumber BDD overview and its related terminologies",
              "Creating Maven project with Cucumber Rest Assured Dependencies",
              "Building Test Runner and Step Definition files for Add Place API Feature Test",
              "Important Note about junit Test Runner versions compatibility",
              "Implementing Real code in Step Definition files with reusable components",
              "Running the Test in Cucumber Standards with necessary Configuration changes",
              "Building Utility Files and Implement Logging feature in Framework",
              "Implement Mechanism to drive Global property values from Properties file",
              "Data Driven Testing Mechanism for API Tests using Cucumber example feature",
              "Be a Mentor or get Guidance",
              "Parameterize API  Test with multiple Data sets using Cucumber Framework features",
              "What are Enum classes? How Framework can utilize the Enum concepts",
              "Removing Hardcoded resource details with Enum class Methods",
              "Build End to End Testcase with Add and Delete Place in Framework Standards -1",
              "Build End to End Testcase in Framework Standards -2",
              "Creating Additional Scenarios in Framework to reuse existing Step Definitions -4",
              "Importance of Cucumber Hooks in setting up Preconditions for API Tests  -5",
              "Optimizing the Framework Tests with all necessary validations  -6",
              "Running the Complete Framework using Maven commands  23/1",
              "Generate Excellent Cucumber HTML reporting with additional Plugins -23/2",
              "Framework Code download",
            ],
          },
        ],
      },
      {
        name: "Section 15: Cucumber BDD API Framework Development from Scratch - 2",
        levels: [
          {
            title: "4 lectures · 19min",
            topics: [
              "Introduction to Jenkins CI tool",
              "Important Note",
              "Integrating the API Framework into Jenkins and triggering with New job setup  24",
              "Setting up Parameterized Jenkin Job for API Framework with multiple Tags",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "RestAssuredBDD",
            url: "https://github.com/RomanMakarenko/RestAssuredBDD",
            description: "Cucumber BDD API framework built from scratch: feature files, step definitions, TestNG runner, logging, data-driven tests and Jenkins CI/CD.",
          },
        ],
      },
      {
        name: "Section 16: Learn GraphQL from Scratch and Testing with Rest Assured",
        levels: [
          {
            title: "7 lectures · 1hr 53min",
            topics: [
              "What is GraphQL? How different it is from Rest API's ?",
              "Understanding GraphQL Schema and its Query language",
              "Learn how to write GraphQL Queries to Test GraphQL API's",
              "Testing GraphQL Queries with Postman and Explorer",
              "What are GraphQL Mutations? How to Test Mutations",
              "Test Multiple GraphQL Mutations with Query variables in Postman",
              "Automate GraphQL Queries & Mutations using Rest Assured automation",
            ],
          },
        ],
      },
      {
        name: "Section 17: OAuth 2.0 for Google/facebook GrantType - Authorization code",
        levels: [
          {
            title: "10 lectures · 1hr 45min",
            topics: [
              "Important Note before viewing this section",
              "Introduction to OAuth 2.0 and different Grant types",
              "Understand Grant Type Authorization flow with real time example",
              "Flow procedure in achieving OAuth 2.0 Authentication mechanism",
              "Details on Practise OAuth 2.0 project to retrieve Courses list",
              "Postman Projects Download",
              "Building up Rest Assured Automation Test for the OAuth Project",
              "Integration Web UI Automation to generate Authorization code",
              "Formatting URL String to retrieve code using java methods",
              "Code download",
            ],
          },
        ],
      },
      {
        name: "Section 18: Understanding Version Control System GIT",
        levels: [
          {
            title: "10 lectures · 1hr 50min",
            topics: [
              "Introduction to GIT",
              "Importance of Github and its uses",
              "Creating Git config and repositories",
              "How to push code to remote repository",
              "Understanding Staging and commit in git",
              "Add remote repository and push the committed code",
              "End to end working example on Git commands -1",
              "End to end working example on Git commands -2",
              "Importance of Branching in GIT",
              "How to resolve Merge conflicts with GIT",
            ],
          },
        ],
      },
      {
        name: "Section 19: Excel Integration with Rest Assured Test",
        levels: [
          {
            title: "14 lectures · 2hr 11min",
            topics: [
              "what is Apace POI API & Download Instructions",
              "Strategy to Access Excel Data",
              "Getting rows and its cells from Sheet",
              "Retrieving Data from Excel based on condition",
              "Practise Exercise- Excel Driven testing -1",
              "Practise Exercise- Excel Driven testing -2",
              "Practise Exercise- Excel Driven testing -3",
              "Code download",
              "Please note",
              "Introducion to Library API",
              "Library APi Postman and Rest Assured examples",
              "Conversion of HashMap into Json",
              "Excel Integration with Rest Assured Test",
              "Code download",
            ],
          },
        ],
      },
      {
        name: "Section 20: Core Java basics",
        levels: [
          {
            title: "10 lectures · 1hr 53min",
            topics: [
              "Java program principles",
              "Classes,objects in Java",
              "Strings in Java",
              "String Practise exercises",
              "What is Interface?",
              "How Java classes can take advantage of Interface?",
              "Usage of Inheritance in Java",
              "Practical examples on types of inheritances",
              "Introduction to Arrays",
              "Single dimensional and Multidimensional arrays usage",
            ],
          },
        ],
      },
      {
        name: "Section 21: BONUS LECTURE",
        levels: [
          {
            title: "1 lecture · 1min",
            topics: [
              "Bonus Lecture for Students",
            ],
          },
        ],
      },
    ],
  },

  {
    id: "cert-11",
    name: "Learn Selenium with Java, Cucumber & Frameworks",
    issuer: "Udemy",
    date: "Jul 2026",
    image: "/certificates/selenium-cucumber.jpg",
    description:
      "A comprehensive end-to-end course covering Selenium WebDriver, Java programming, TestNG, Cucumber BDD, Apache POI, Page Object Model, Hybrid Driven Framework development, CI/CD with Jenkins & Docker, and Selenium Grid — from fundamentals to real-world framework architecture.",
    modules: [
      {
        name: "Section 1: Overview on Software Testing & Automation",
        levels: [
          {
            title: "1 lecture · 1hr 33min",
            topics: [
              "Introduction on Automation & Selenium",
            ],
          },
        ],
      },
      {
        name: "Section 2: Java Programming",
        levels: [
          {
            title: "20 lectures · 31hr 52min",
            topics: [
              "Environment Setup for Java & Eclipse",
              "Variables, Data Types, Operators & Conditional Statements",
              "Java Loops, Arrays (single & multi-dimensional)",
              "Working with Strings in Java",
              "OOP Concepts: Classes, Objects, Methods & Constructors",
              "Polymorphism, Encapsulation, Inheritance",
              "Method Overriding, super & final keywords",
              "Data Abstraction — Interfaces & Abstract Classes",
              "Data Conversion, Wrapper Classes & Packages",
              "Type Casting — Up Casting & Down Casting",
              "Exception Handling in Java",
              "Java Collections Framework",
            ],
          },
        ],
      },
      {
        name: "Section 3: Selenium WebDriver",
        levels: [
          {
            title: "19 lectures · 29hr 16min",
            topics: [
              "WebDriver Setup & Environment Configuration",
              "Selenium Locators: ID, Name, CSS, XPath, XPath Axes",
              "WebDriver Methods: Get, Conditional, Browser & Navigation",
              "Waits: Implicit, Explicit & Fluent Waits",
              "Handling Checkboxes, Radio Buttons, Alerts & Frames",
              "Handling Static, Dynamic & Pagination Web Tables",
              "Date Pickers, Mouse & Keyboard Events",
              "File Upload, Scrolling, JavaScriptExecutor",
              "Screenshots, SSL Certificates, Headless Browser & Chrome Extensions",
              "Broken Links, SVG Elements & Shadow DOM",
            ],
          },
        ],
      },
      {
        name: "Section 4: Apache POI — Data Driven Testing using MS Excel",
        levels: [
          {
            title: "2 lectures · 3hr 31min",
            topics: [
              "Reading & Writing Data into Excel with Apache POI",
              "Data Driven Testing using Microsoft Excel",
            ],
          },
        ],
      },
      {
        name: "Section 5: TestNG Framework for Selenium",
        levels: [
          {
            title: "5 lectures · 7hr 38min",
            topics: [
              "Introduction to TestNG & Installation",
              "TestNG Annotations & Types of Assertions",
              "Dependency Methods & Grouping",
              "Data Providers and Parallel Testing",
              "TestNG Listeners & Extent Reports",
            ],
          },
        ],
      },
      {
        name: "Section 6: Page Object Model",
        levels: [
          {
            title: "1 lecture · 1hr 29min",
            topics: [
              "Page Object Model Pattern & Page Factory Implementation",
            ],
          },
        ],
      },
      {
        name: "Section 7: Hybrid Driven Framework Development with Project",
        levels: [
          {
            title: "7 lectures · 10hr 43min",
            topics: [
              "Framework Architecture & Project Setup",
              "Logs Generation, Cross-browser Tests & Properties File",
              "Login Test & Data Driven Testing Integration",
              "Grouping, Extent Reports & Failure Test Rerun",
              "Selenium Grid Integration",
              "Docker Integration with Selenium Grid",
            ],
          },
        ],
      },
      {
        name: "Section 8: CI/CD — Maven, Git, GitHub & Jenkins",
        levels: [
          {
            title: "2 lectures · 2hr 56min",
            topics: [
              "Continuous Integration with Maven, Git & GitHub",
              "Jenkins Setup & Job Configuration",
            ],
          },
        ],
      },
      {
        name: "Section 9: Cucumber BDD Framework",
        levels: [
          {
            title: "3 lectures · 4hr 46min",
            topics: [
              "Cucumber & BDD Concepts",
              "Cucumber Framework Setup: Feature Files, Step Definitions & Runner",
              "Advanced Cucumber: Tags, Background & Reports",
            ],
          },
        ],
      },
      {
        name: "Section 10: Bonus Topics",
        levels: [
          {
            title: "2 lectures · 2hr 51min",
            topics: [
              "Git Options in Eclipse & IntelliJ IDEA",
              "Using ChatGPT in Software Testing & Automation",
            ],
          },
        ],
      },
      {
        name: "Section 11: SelectorsHub",
        levels: [
          {
            title: "1 lecture · 45min",
            topics: [
              "SelectorsHub — Browser Plugin for Element Identification & Validation",
            ],
          },
        ],
      },
      {
        name: "Section 12: Wind Up Session — Interview Preparation",
        levels: [
          {
            title: "1 lecture · 1hr 41min",
            topics: [
              "Interview Preparation Tips, Practice Plan & Learning Roadmap",
            ],
          },
        ],
      },
      {
        name: "Section 13: Docker — Bonus Topics",
        levels: [
          {
            title: "8 lectures · 3hr 28min",
            topics: [
              "Docker Introduction, Installation & Terminology",
              "Docker Commands & Running Selenium Tests on Docker Containers",
              "Selenium Grid Setup with Docker Compose",
              "Docker Grid Integration with Jenkins",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-1",
    name: "GenAI & AI Agents for QA Automation | Copilot & Claude Code",
    issuer: "Udemy",
    date: "May 2026",
    image: "/certificates/genai-qa.jpg",
    description:
      "A comprehensive course covering Generative AI, prompt engineering, GitHub Copilot, Claude Code, MCP servers, and building AI agents for QA automation — from fundamentals to real-world CI/CD integration.",
    modules: [
      {
        name: "Section 1: Introduction to AI Testing Terminologies",
        levels: [
          {
            title: "3 lectures · 21 min",
            topics: [
              "Introduction to AI Terminologies & Course Agenda — Part 1 (12 min)",
              "Course Agenda Continued — Part 2 (4 min)",
              "Privacy & Security of AI Applications — How companies are evolving to adapt (5 min)",
            ],
          },
        ],
      },
      {
        name: "Section 2: Prompt Engineering — Understand the 3 C's: Context, Constraints, Clarity",
        levels: [
          {
            title: "6 lectures · 29 min · Includes 1 role play",
            topics: [
              "Important Note (1 min)",
              "Why Prompt Engineering matters? — Mastering it is an Art (6 min)",
              "Adding Constraints to leverage Zero-shot prompting for better AI results (9 min)",
              "Practice scenarios for crafting prompts & Few-shot prompting technique (6 min)",
              "Role Play 1: Improving AI Responses with Context and Constraints",
              "Chain of Thought prompting — Let AI detail how it is thinking (6 min)",
            ],
          },
        ],
      },
      {
        name: "Section 3: Tokens & Generating Test Plans, Test Cases, Test Strategy using AI",
        levels: [
          {
            title: "7 lectures · 58 min · Includes 1 role play",
            topics: [
              "What are tokens? Why it matters when interacting with AI Models (7 min)",
              "Understand how Context Window Limit works — Tips to save tokens (7 min)",
              "Role Play 2: Optimizing AI Test Generation — A Talk with Your Project Manager",
              "Generating Test Plan for Project business requirements using AI (14 min)",
              "Generating Test Cases for the requirements using AI (10 min)",
              "Generating Test Strategy (Shift Left Testing) with given Test cases using AI (9 min)",
              "Generate Test Data combinations for the given tests using AI (10 min)",
            ],
          },
        ],
      },
      {
        name: "Section 4: GitHub Copilot Fundamentals — Ask, Agent, Planning Modes & IDE Installs",
        levels: [
          {
            title: "6 lectures · 1h 9 min",
            topics: [
              "Introduction to GitHub Copilot and its features for AI Integration inside editors (9 min)",
              "Demonstration of Ask & Agent modes in Copilot within VS Code with demo examples (10 min)",
              "Understanding how Planning mode helps for research and design solutions (8 min)",
              "GitHub Copilot install on IntelliJ & PyCharm Editors for Java & Python Projects (5 min)",
              "GitHub Copilot install steps with overview on Eclipse Editors for Java project (6 min)",
              "GenAI GitHub Copilot plugin for Selenium Java Frameworks within IntelliJ Editor (31 min)",
            ],
          },
        ],
      },
      {
        name: "Section 5: Intro to Model Context Protocol (MCP) Servers & Build Agents with MCP Tooling",
        levels: [
          {
            title: "13 lectures · 2h 13 min · Includes 1 role play",
            topics: [
              "What is MCP? How MCP helps an LLM to be super powerful (28 min)",
              "Resources to download (1 min)",
              "Build Agent which automates web browser using Playwright/Selenium MCP Servers (15 min)",
              "Debugging steps when there are failures in configuring MCP servers (1 min)",
              "Role Play 3: Justifying the Use of MCP to Your Project Manager",
              "Resource (1 min)",
              "Build Agent which can extract data from SQL database by framing complex queries (24 min)",
              "Hands-On Practice Resources for Testing Skills (1 min)",
              "Build Agent which can perform API Testing & talk to local File systems for data (18 min)",
              "Build Agent which can read/write to Excel file for any given scenario (13 min)",
              "Setting up Playwright MCP configuration within VS Code (14 min)",
              "GitHub MCP Server — Magic of committing files and Code push to Git with Prompts (10 min)",
              "On a single Prompt, create Test Automation Project and build test with locators (10 min)",
            ],
          },
        ],
      },
      {
        name: "Section 6: Building Agentic AI for Quality Engineering using Claude Code",
        levels: [
          {
            title: "14 lectures · 2h 3 min",
            topics: [
              "Introduction to Agentic AI — What problems we are solving? — Action Plan (8 min)",
              "Introduction to Claude Code Skill System — Problem statement (7 min)",
              "Download the code base used in this section (1 min)",
              "Install Claude Code & Claude for Chrome and get started with /init file (8 min)",
              "Tip — Good to know (1 min)",
              "Understand Knowledge Skills & Agent Skills — When to use with demo example (10 min)",
              "Create Skill docs for EventHub Application & Understand how they are designed (12 min)",
              "Avoid Context Bloat: Use Smart References for Accurate AI Responses (6 min)",
              "The Magic of Agent creating Test Scenarios by reading the Project domain doc (16 min)",
              "The Magic of Agent Creating Test Strategy to push tests into different layers (14 min)",
              "Create Skills for Playwright best Practices and then build Agent to write Tests (17 min)",
              "Demo: Agent Running Tests and Fixing Failed Tests by Referring to Domain Docs (19 min)",
              "Tip — Good to know (1 min)",
              "Demo: Goal-oriented Agentic Solution for Test coverage analysis with report (10 min)",
            ],
          },
        ],
      },
      {
        name: "Section 7: Design GitHub Copilot Custom Agents & Cloud Agents for Automation Repositories",
        levels: [
          {
            title: "3 lectures · 25 min",
            topics: [
              "Important Note (1 min)",
              "What Are GitHub Copilot Custom Agents? Build Your First Custom Agent (12 min)",
              "GitHub Copilot Cloud Agents in Action: Running AI Agents on Demand (12 min)",
            ],
          },
        ],
      },
      {
        name: "Section 8: Build QA DevOps Solutions (CI/CD, Docker, GitHub Actions) with AI Agents",
        levels: [
          {
            title: "4 lectures · 35 min",
            topics: [
              "With AI Agents Implement CI/CD using GitHub Actions & push code to Remote GIT (15 min)",
              "Demo of CI/CD in Action with simple prompt solution using Claude Code AI Agent (8 min)",
              "Implement Docker Solution to containerize the Tests locally with AI Agent (7 min)",
              "Practical Conversations between Manager & QA Person on building DevOps solutions (5 min)",
            ],
          },
        ],
      },
      {
        name: "Section 9: Build AI Agents with n8n Automation Workflows — Demo Examples",
        levels: [
          {
            title: "6 lectures · 50 min",
            topics: [
              "What is n8n? Overview of Business Process Automation workflows (6 min)",
              "How n8n revolutionized with AI Agents encapsulation — Demo overview (8 min)",
              "Create n8n AI Agent to read the Google Sheet and identify bugs in New Status (12 min)",
              "Setting up Jira Cloud and Create a Project for AI Agent setup (8 min)",
              "Plugin Jira tool to AI Agent and create end-to-end n8n Workflow for business use case (10 min)",
              "Building a Public Chat Interface to Interact with n8n AI Workflow via Webhook (6 min)",
            ],
          },
        ],
      },
      {
        name: "Section 10: Effortlessly Generate Test Automation Code for API Testing",
        levels: [
          {
            title: "5 lectures · 41 min · Includes 1 quiz",
            topics: [
              "Using Generative AI for API Testing — parsing JSON responses (10 min)",
              "Generating POJO classes for complex JSON and generate Java methods using AI (12 min)",
              "Generating API tests in Cypress & Playwright with the given API contract (9 min)",
              "Generating complex SQL Queries for Database tables using AI (10 min)",
              "Quiz 1: Check your knowledge on MCP, LLM and AI Agents",
            ],
          },
        ],
      },
      {
        name: "Section 11: Introduction to AI-Powered Testing Tools — Low Code Automation",
        levels: [
          {
            title: "4 lectures · 56 min",
            topics: [
              "Understanding the capabilities of AI-powered Testing tools (12 min)",
              "Introduction to TestRigor AI tool and its features on creating Tests using AI (18 min)",
              "Understanding Scripting language of TestRigor with a demo test (14 min)",
              "Self Healing capabilities to fix tests using AI-powered testing tools (12 min)",
            ],
          },
        ],
      },
      {
        name: "Section 12: Privacy-First, Offline LLM Models to Handle Your Project Domain",
        levels: [
          {
            title: "2 lectures · 23 min",
            topics: [
              "Setup Custom LLM with local project documents to get Domain related answers (13 min)",
              "Generating Automatic Test cases on the fly with English requirements (10 min)",
            ],
          },
        ],
      },
      {
        name: "Section 13: Final Words — Interview Questions & Future of AI in QA Space",
        levels: [
          {
            title: "6 lectures · 52 min",
            topics: [
              "Interview Questions to crack your next Job — Recap the topics (15 min)",
              "Introduction to GPT4All — how it works offline to generate results (8 min)",
              "How AI can be your best buddy for coding practice and implementation (10 min)",
              "Future-proof your QA-AI Skills — What next? (8 min)",
              "Thank You Note with future updates Plan (5 min)",
              "Bonus Lecture (6 min)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-2",
    name: "Ciklum AI Fundamentals Course (Level 1)",
    issuer: "Ciklum",
    date: "2026",
    image: "/certificates/AIFundamentals.jpg",
    description:
      "AI Fundamentals introduces you to the essential concepts, tools, and ethical foundations of Artificial Intelligence. Covers how AI works, its use across the software development lifecycle, and how to apply it responsibly.",
    modules: [
      {
        name: "Course Modules",
        levels: [
          {
            title: "5 modules",
            topics: [
              "[Recording] Intro to AI world (45 min)",
              "[Recording] AI Tools & Productivity (35 min)",
              "[Recording] Vibe coding platforms (45 min)",
              "[Recording] GenAI in the SDLC (47 min)",
              "[E-learning] AI-Skilled. Future-Ready (60 min)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-3",
    name: "QA-Specific AI Learning and Certification (Level 2)",
    issuer: "Ciklum",
    date: "2026",
    image: "/certificates/AIQASpecifications.jpg",
    description:
      "QA-Specific AI learning and certification covering context & requirements analysis, intelligent test case generation, automated defect reporting, console scripts, and specialized testing.",
    modules: [
      {
        name: "Course Modules",
        levels: [
          {
            title: "5 modules",
            topics: [
              "Introduction: AI for QA – Readiness Guide",
              "Module 1: The art of context & requirements analysis",
              "Module 2: Intelligent test case generation",
              "Module 3: Automated defect reporting",
              "Module 4: Console scripts",
              "Module 5: Specialized testing",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-4",
    name: "Java Developer Professional",
    issuer: "JavaRush",
    date: "May 2024",
    image: "/certificates/javarush.jpg",
    description:
      "A comprehensive Java training program consisting of 5 modules with lectures, hands-on practice, and capstone projects — taking students from beginner to Junior Developer level, plus a final group project.",
    modules: [
      // ======== MODULE 1: Java Syntax ========
      {
        name: "Module 1. Java Syntax",
        levels: [
          {
            title: "Introduction. Commands & First Java Program",
            topics: [
              "Advantages of Java and its application areas",
              "About JavaRush and Java University",
              "Program structure, the main method",
              "System.out.println()",
              "Introduction to the website and WebIDE",
            ],
          },
          {
            title: "Working with Variables, int and String Types",
            topics: [
              "Storing text in a variable, outputting to console",
              "Declaring and initializing String variables",
              "Comments in code",
              "Basic math operations with int variables",
              "Increment, decrement",
              "Concatenation",
              "Integer.parseInt(), String.valueOf()",
            ],
          },
          {
            title: "Data Types & Keyboard Input. Introduction to IntelliJ IDEA",
            topics: [
              "How primitive variables are stored in memory",
              "How String variables are stored in memory",
              "byte, short, char, long, float, double",
              "System.in, Scanner",
              "Scanner methods",
              "Installing IDEA, loading a project, JDK 11 setup",
              "Installing the plugin, exploring its features",
            ],
          },
          {
            title: "Conditional Statements",
            topics: [
              "if, if-else, if-else-if",
              "Command blocks",
              "Nested command blocks (nested if's)",
              "boolean type",
              "Comparison operators, including double",
              "Logical AND, OR, NOT, XOR",
              "Ternary operator",
              "Comparing primitives vs String",
            ],
          },
          {
            title: "Optional: Bytecode & IDE Tips",
            topics: [
              "Bringing beginners up to speed",
              "Advanced IDE tips for experienced students",
              "Compiling a class to bytecode from the console, running the program",
            ],
          },
          {
            title: "Loops",
            topics: [
              "Problem statement: executing an action many times",
              "while",
              "break, continue",
              "for",
              "do-while",
              "Comparing loops — when to use which",
            ],
          },
          {
            title: "Arrays",
            topics: [
              "Creating and populating arrays",
              "Iterating over an array",
              "How arrays are stored in memory",
            ],
          },
          {
            title: "Multidimensional Arrays",
            topics: [
              "2D arrays",
              "Jagged arrays",
              "N-dimensional arrays",
            ],
          },
          {
            title: "Functions (Methods)",
            topics: [
              "Declaring and calling methods",
              "Parameters",
              "Return values, void",
              "Access modifiers",
              "Local variables of a method",
              "Method modifiers, the main method",
            ],
          },
          {
            title: "Working with Strings",
            topics: [
              "Constants",
              "Variable shadowing",
              "Character escaping",
              "Core methods of the String class",
            ],
          },
          {
            title: "Optional: Literals, Encoding, StringBuilder",
            topics: [
              "Literals",
              "Encoding",
              "Helper classes: StringBuilder, String.format",
              "Utility class Arrays",
            ],
          },
          {
            title: "Data Types. Introduction to OOP",
            topics: [
              "Primitive types",
              "Type casting",
              "Reference types",
              "Objects",
              "null",
              "Introduction to OOP",
              "Inheritance",
            ],
          },
          {
            title: "Objects",
            topics: [
              "Creating objects (new)",
              "Constructors, default constructor",
              "Parameterized constructors",
              "Order of constructor calls during inheritance",
              "Accessing object fields (getters, setters)",
              "hashCode, equals",
            ],
          },
          {
            title: "Classes & static",
            topics: [
              "Static variables",
              "Static vs non-static variables",
              "Static methods",
              "Initialization order with constructors and static blocks",
              "Inner classes",
            ],
          },
          {
            title: "Optional: Object Lifecycle & Class Loading",
            topics: [
              "Object lifecycle",
              "Class loading",
            ],
          },
          {
            title: "Lists & Generics",
            topics: [
              "Wrapper classes",
              "ArrayList",
              "Array vs ArrayList",
              "Typing ArrayList (generics)",
            ],
          },
          {
            title: "Collections: Set & HashSet",
            topics: [
              "Collections hierarchy",
              "Set, HashSet",
              "iterator, for-each",
            ],
          },
          {
            title: "Collections: Map & HashMap",
            topics: [
              "Map, HashMap",
              "Choosing the right collection for the task",
              "Collections utility class",
            ],
          },
          {
            title: "Optional: LinkedList, Queue, SortedMap",
            topics: [
              "LinkedList",
              "ArrayList vs LinkedList",
              "Queue",
              "SortedMap, TreeMap",
            ],
          },
          {
            title: "Singleton, Enum, switch",
            topics: [
              "Why enumerations are needed",
              "Declaring Enum",
              "Enum — the best Singleton",
              "switch statement",
            ],
          },
          {
            title: "Exceptions (Part 1)",
            topics: [
              "Normal code execution vs runtime errors",
              "try-catch",
              "Exception hierarchy",
              "multicatch",
              "throw",
              "checked vs unchecked exceptions",
              "throws",
            ],
          },
          {
            title: "Exceptions (Part 2)",
            topics: [
              "finally",
              "Creating custom exceptions",
              "Throwable",
              "Stack trace",
              "try-with-resources",
              "AutoCloseable",
            ],
          },
          {
            title: "Optional: Exception Wrapping & Error",
            topics: [
              "Exception wrapping",
              "Error class",
            ],
          },
          {
            title: "I/O Streams (Part 1)",
            topics: [
              "InputStream",
              "Reader",
              "BufferedReader",
              "OutputStream",
              "Writer",
              "BufferedWriter",
            ],
          },
          {
            title: "I/O Streams. Decorator Pattern",
            topics: [
              "ByteArrayInputStream",
              "ByteArrayOutputStream",
              "Combining streams",
            ],
          },
          {
            title: "I/O Streams. java.nio",
            topics: [
              "io vs nio",
              "FileChannel",
              "Selector",
              "Path",
              "Paths",
              "Files",
            ],
          },
          {
            title: "Working with Date & Time",
            topics: [
              "Date",
              "DateFormat",
              "Calendar",
              "LocalDate, LocalTime, LocalDateTime",
              "Instant",
              "ZonedDateTime",
              "DateTimeFormatter",
            ],
          },
          {
            title: "Git. Final Project: Cryptoanalyzer",
            topics: [
              "Git basics",
              "Building a console-based cryptoanalyzer application",
              "Brute-force and statistical text decryption",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Java Projects",
            url: "https://github.com/RomanMakarenko/javaProjects",
            description:
              "A collection of foundational Java projects covering collections, algorithms, and OOP principles.",
          },
        ],
      },

      // ======== MODULE 2: Java Core ========
      {
        name: "Module 2. Java Core",
        levels: [
          {
            title: "OOP: Encapsulation, Polymorphism. Interfaces",
            topics: [
              "Encapsulation",
              "Polymorphism",
              "Type casting",
              "this, super",
              "Interfaces",
            ],
          },
          {
            title: "OOP: Overloading, Overriding, Abstract Classes",
            topics: [
              "Abstract classes",
              "Implementing abstract methods of the parent",
              "Method overloading — same names",
              "Method overriding",
            ],
          },
          {
            title: "Stream API",
            topics: [
              "Anonymous inner classes",
              "Implementation of abstract methods of the parent",
              "Lambda expressions",
              "Functional interfaces",
              "Method references",
              "Stream",
              "Intermediate and terminal Stream methods",
              "map-reduce",
            ],
          },
          {
            title: "OOP: Composition, Aggregation, Inheritance",
            topics: [
              "Association: composition and aggregation",
              "Inheritance",
            ],
          },
          {
            title: "Interfaces vs Abstract Classes. Multiple Inheritance",
            topics: [
              "Declaring behavior",
              "Default methods",
              "Implementing multiple interfaces",
              "The diamond problem",
              "Comparing abstract classes and interfaces",
            ],
          },
          {
            title: "Type Casting, instanceof, switch-expression",
            topics: [
              "instanceof",
              "Type casting (widening and narrowing)",
              "switch expression, Enum",
            ],
          },
          {
            title: "Constructor Call Details. static Block",
            topics: [
              "Object creation process",
              "Constructor call order",
              "Variable initialization order",
            ],
          },
          {
            title: "How Object Works: equals, hashCode, clone, toString. Immutable Objects",
            topics: [
              "The Object class",
              "Methods of the Object class",
              "Mutable and immutable objects",
            ],
          },
          {
            title: "Recursion",
            topics: [
              "Understanding recursion",
              "Recursive algorithms",
            ],
          },
          {
            title: "Introduction to Threads: Thread, Runnable, start, sleep",
            topics: [
              "Thread",
              "Runnable",
              "start",
              "sleep",
              "interrupt",
            ],
          },
          {
            title: "Threads: synchronized, volatile, wait, notify. DeadLock",
            topics: [
              "synchronized",
              "volatile",
              "join",
              "wait, notify",
              "The DeadLock problem",
            ],
          },
          {
            title: "Executors",
            topics: [
              "ExecutorService",
              "Factory method pattern",
              "Submitting tasks to the service",
              "Callable",
              "Getting results: Future",
              "Stopping an ExecutorService",
              "FixedThreadPool",
              "CachedThreadPool",
              "ScheduledExecutorService",
            ],
          },
          {
            title: "ThreadLocal, Callable, Future",
            topics: [
              "ThreadLocal context",
              "ThreadLocalRandom",
            ],
          },
          {
            title: "Inner/Nested Classes. Examples: Map.Entry",
            topics: [
              "Nested classes",
              "Inner classes",
              "Static inner classes",
              "Anonymous inner classes",
              "Examples of different class types from the JDK",
            ],
          },
          {
            title: "Serialization: JSON/XML/YAML",
            topics: [
              "Java serialization",
              "Data formats: XML, JSON, YAML",
              "Jackson ObjectMapper",
            ],
          },
          {
            title: "Reflection API",
            topics: [
              "Why Reflection API is needed",
              "Getting data: class, method, constructor, field",
              "Creating an object",
              "Changing the internal state of an object",
              "Proxies",
              "RMI",
            ],
          },
          {
            title: "Annotations in Java",
            topics: [
              "Declarative vs imperative approach to coding",
              "Popular annotations: @Deprecated, @Override, @Nullable, …",
              "Creating annotations",
              "Processing annotations at runtime",
            ],
          },
          {
            title: "Optional: Swing",
            topics: [
              "Working with Swing GUI library",
            ],
          },
          {
            title: "Sockets",
            topics: [
              "Socket",
              "ServerSocket",
              "Live coding: writing a primitive group chat",
            ],
          },
          {
            title: "Final Project",
            topics: [
              "Building a multi-threaded chat application using Sockets",
              "Applying OOP, collections, and I/O in a real project",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Island 2",
            url: "https://github.com/RomanMakarenko/Island2",
            description:
              "Ecosystem simulation: multi-threading, complex OOP, and algorithms modeling animal-plant interactions on an island.",
          },
        ],
      },

      // ======== MODULE 3: Java Professional ========
      {
        name: "Module 3. Java Professional",
        levels: [
          {
            title: "Garbage Collection & Reference Types in Java",
            topics: [
              "JVM memory: stack and heap",
              "GC: Serial, Parallel, CMS, G1, Shenandoah, ZGC",
              "Caching",
              "WeakReference, SoftReference, PhantomReference",
            ],
          },
          {
            title: "Design Patterns",
            topics: [
              "Behavioral: Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor, Template Method",
              "Creational: Prototype, Builder, Singleton, Abstract Factory, Factory Method",
              "Structural: Decorator, Composite, Facade, Adapter, Proxy",
            ],
          },
          {
            title: "Development Methodologies",
            topics: [
              "Waterfall",
              "V-Model",
              "Incremental",
              "RAD Model",
              "Agile",
              "Iterative",
              "Spiral",
            ],
          },
          {
            title: "Maven Fundamentals: Setup, Dependencies, Repositories, Build",
            topics: [
              "Downloading Maven, setting environment variables",
              "Creating a Maven project",
              "Dependencies",
              "Plugins",
              "Lifecycle phases",
              "Profiles",
              "Building artifacts",
            ],
          },
          {
            title: "Guava & Apache Commons Collections",
            topics: [
              "Multimap, BiMap",
              "Multiset",
              "Immutable collections",
              "Objects: hashCode, equals",
              "Throwables",
              "CollectionUtils",
              "StringUtils",
            ],
          },
          {
            title: "JUnit",
            topics: [
              "Why testing is needed",
              "Types of testing",
              "@Test",
              "@Before, @After",
              "@BeforeClass, @AfterClass",
              "Parameterized tests",
            ],
          },
          {
            title: "Mockito",
            topics: [
              "Mocks",
              "mock and spy",
              "when and thenReturn",
              "verify",
              "any, once, times",
            ],
          },
          {
            title: "Logging",
            topics: [
              "Why logs are needed",
              "Logging levels",
              "SLF4J",
              "Implementations: log4j, JUL, logback, commons-logging",
              "Appenders",
            ],
          },
          {
            title: "How Networks Work. The OSI Model",
            topics: [
              "Network topology",
              "The OSI model",
              "DNS",
            ],
          },
          {
            title: "Software Architecture: Client-Server, Three-Tier, Architectural Patterns",
            topics: [
              "Client-server architecture",
              "Three-tier architecture (client-server-DB)",
              "Criteria for good architecture: efficiency, flexibility, extensibility, scalability, testability, clean readable code",
              "Modular architecture, decomposition",
            ],
          },
          {
            title: "HTTP/HTTPS Protocol: Requests, Responses, Cookies, Sessions",
            topics: [
              "Data transfer protocols on the network",
              "HTTP methods (GET, POST, PUT, …)",
              "Request parameters",
              "Request body",
              "Headers",
              "Response status codes",
              "HTTP vs HTTPS",
              "HTTP sessions",
              "Cookies",
              "HTTP/2",
            ],
          },
          {
            title: "HttpClient",
            topics: [
              "AJAX",
              "Java HTTP Client",
              "Synchronous and asynchronous requests",
              "Task: fetching data from the internet (e.g., weather forecast)",
            ],
          },
          {
            title: "Servlets, Java Servlet API. Building a Simple Web App",
            topics: [
              "What is a servlet",
              "Servlet lifecycle",
              "Servlet container: Tomcat",
              "doGet, doPost",
              "redirect vs forward",
              "Filters",
            ],
          },
          {
            title: "Servlet Containers: Tomcat, Deployment, Server Configuration",
            topics: [
              "Hands-on practice from the previous lecture",
            ],
          },
          {
            title: "Introduction to MVC (Model-View-Controller). JSP",
            topics: [
              "MVC architectural principles and ideas",
              "MVC patterns",
              "MVC on the web",
              "Common mistake: business logic in the controller",
              "MVC through a practical example",
              "JSP",
            ],
          },
          {
            title: "Web Services",
            topics: [
              "What is a web service",
              "Protocols: HTTP, JMS, FTP, …",
              "Synchronous and asynchronous requests",
              "Cloud services: IaaS, PaaS, SaaS",
            ],
          },
          {
            title: "HTML Elective",
            topics: [
              "What is HTML",
              "Structure of an HTML document",
              "Tags and their attributes",
              "CSS — its syntax",
              "Classes and identifiers",
              "Selectors",
            ],
          },
          {
            title: "Final Project: Servlet Quest Competition",
            topics: [
              "Build a text-based step-by-step quest game using Servlets",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Quest Game",
            url: "https://github.com/RomanMakarenko/QuestGame",
            description:
              "A text-based step-by-step quest game built with Java Servlets and JSP.",
          },
          {
            name: "Project Servlet",
            url: "https://github.com/RomanMakarenko/project-servlet",
            description:
              "A web application on Java Servlets: server-side HTTP request handling, sessions, and filters.",
          },
          {
            name: "Project Frontend",
            url: "https://github.com/RomanMakarenko/project-frontend",
            description:
              "Frontend for a web application: HTML, CSS, JS integration with Java servlets.",
          },
        ],
      },

      // ======== MODULE 4: Working with Databases. Hibernate ========
      {
        name: "Module 4. Working with Databases. Hibernate",
        levels: [
          {
            title: "Introduction to Databases. MySQL Setup. DDL, DML",
            topics: [
              "Why databases are needed",
              "Relational vs non-relational databases",
              "The relational model",
              "CAP theorem",
              "Installing MySQL Developer",
              "SQL groups: DDL, DML, DCL, TCL",
            ],
          },
          {
            title: "Data Types. Creating Tables. INSERT, SELECT, UPDATE, DELETE",
            topics: [
              "Creating a schema",
              "Creating tables",
              "Modifying table structure",
              "INSERT",
              "SELECT",
              "UPDATE",
              "DELETE",
            ],
          },
          {
            title: "Querying Data",
            topics: [
              "SELECT with conditions",
              "Selecting specific columns",
              "Subselects",
              "JOIN: LEFT, RIGHT, INNER, CROSS",
              "GROUP BY and aggregate functions",
              "Indexes",
            ],
          },
          {
            title: "Database Transactions",
            topics: [
              "ACID concepts (Atomicity, Consistency, Isolation, Durability)",
              "Transaction management",
              "Isolation levels",
            ],
          },
          {
            title: "Database Design",
            topics: [
              "First normal form (1NF)",
              "Second normal form (2NF)",
              "Third normal form (3NF)",
              "Keys (foreign key)",
              "Relationships: one-to-one, one-to-many, many-to-many",
            ],
          },
          {
            title: "JDBC — Part 1",
            topics: [
              "Why JDBC is needed",
              "Core interfaces",
              "Reading data from the database in a Java app",
              "Updating and deleting data from the database",
            ],
          },
          {
            title: "JDBC — Part 2",
            topics: [
              "Transactions",
              "Isolation levels",
              "Handling checked exceptions",
            ],
          },
          {
            title: "ORM. Hibernate",
            topics: [
              "Mismatches between object and relational data models",
              "ORM (Hibernate), JPA",
              "Hibernate architecture",
              "Configuration, core annotations",
              "Reading data from the database",
              "Updating and deleting data from the database",
              "Hibernate vs JDBC",
            ],
          },
          {
            title: "Hibernate. OneToMany, ManyToMany",
            topics: [
              "Relationships (working with collections)",
            ],
          },
          {
            title: "Entity Inheritance for ORM",
            topics: [
              "Single table per class",
              "Single table per class with ancestors",
              "Single table for the entire class hierarchy",
              "One table per class using joins",
            ],
          },
          {
            title: "Final Project",
            topics: [
              "Hash for passwords",
              "Building a database-driven application with Hibernate ORM",
            ],
            isProject: true,
          },
        ],
        projects: [
          {
            name: "Project Hibernate 1",
            url: "https://github.com/RomanMakarenko/project-hibernate-1",
            description:
              "Working with Hibernate ORM: entity mapping, CRUD operations, and table relationships.",
          },
          {
            name: "Hibernate 2",
            url: "https://github.com/RomanMakarenko/hibernate2",
            description:
              "Advanced Hibernate: entity inheritance, cascade operations, and caching strategies.",
          },
          {
            name: "Hibernate Final",
            url: "https://github.com/RomanMakarenko/hibernateFinal",
            description:
              "Final Hibernate project: complex data model with optimized queries and transaction management.",
          },
        ],
      },

      // ======== MODULE 5: Spring + Spring Boot ========
      {
        name: "Module 5. Spring + Spring Boot",
        levels: [
          {
            title: "IoC, DI. Spring. Components. Beans",
            topics: [
              "Why Spring became the de facto industry standard (advantages)",
              "IoC and DI principles",
              "Beans",
              "ApplicationContext",
              "AOP",
            ],
          },
          {
            title: "Spring Modules Overview. Spring Web MVC",
            topics: [
              "Core: beans, core, context, SpEL",
              "Data access",
              "Testing",
              "Web",
              "Integration",
              "Web MVC",
            ],
          },
          {
            title: "Designing REST APIs",
            topics: [
              "Operating on resources, not methods",
              "HTTP methods",
              "HTTP response codes",
              "Error handling",
              "Querying collections",
              "Querying object count in a collection",
              "Querying a single object from a collection",
              "Adding data to a collection",
              "Editing",
              "Deleting",
              "Homework: design a 2-level REST API",
            ],
          },
          {
            title: "Controller-Service-DAO Architecture",
            topics: [
              "Context hierarchy",
              "Servlet config",
              "Controller — receiving the request",
              "Service — business logic",
              "DAO — state persistence",
            ],
          },
          {
            title: "Spring ORM. @Transactional",
            topics: [
              "Transaction abstraction",
              "Declarative transactions",
              "Transaction propagation",
              "Advantages of ORM + Spring",
              "Configuring Hibernate SessionFactory",
              "Live coding example",
            ],
          },
          {
            title: "Spring Test. AOP (Logging)",
            topics: [
              "Unit testing",
              "Integration testing",
              "Core annotations",
              "TestContext",
              "Live coding example (testing an API method)",
              "Spring Commons Logging bridge",
            ],
          },
          {
            title: "Spring Security (in-memory, DB)",
            topics: [
              "Key Spring Security context objects: SecurityContextHolder, Authentication, UserDetails, GrantedAuthority",
              "Authorization and authentication",
              "OAuth2",
              "In-memory sessions",
              "Database-backed sessions",
            ],
          },
          {
            title: "Spring Boot. Spring Data JPA",
            topics: [
              "Starters",
              "Auto-configuration",
              "Embedded Tomcat",
              "Configuration annotations",
              "Demo: Spring Data JPA (query generation by method name at runtime)",
            ],
          },
        ],
        projects: [
          {
            name: "Spring MVC 1",
            url: "https://github.com/RomanMakarenko/SpringMVC1",
            description:
              "A web application on Spring MVC: controllers, validation, form handling, and view resolution.",
          },
          {
            name: "Project Final",
            url: "https://github.com/RomanMakarenko/project-final",
            description:
              "Final group project: a full-stack web application with Spring Boot, Spring Data JPA, and Spring Security.",
          },
        ],
      },
    ],
  },
  {
    id: "cert-5",
    name: "Selenium WebDriver with Java — Basics to Advanced",
    issuer: "Udemy",
    date: "Mar 2024",
    image: "/certificates/selenium-java.jpg",
    description:
      "A comprehensive Selenium WebDriver course — best-seller in the Selenium category. Covers automation testing from fundamentals to advanced frameworks, CI/CD integration, Selenium Grid, and AI-powered code generation.",
    modules: [
      {
        name: "Section 1: Selenium Introduction",
        levels: [
          {
            title: "7 lectures",
            topics: [
              "1. ***Course FAQ's-*** (Must Watch Lecture)",
              "2. Social proof for  BEST SELLER in Selenium Category?**(Must Watch)**",
              "3. Selenium syllabus & How to reach Trainer for Queries?",
              "4. Selenium Features- What you need to know",
              "5. Selenium WebDriver Architecture Simplified",
              "6. Selenium Introductory Notes download",
              "7. Video Player Setting tips for Best Experience in viewing course",
            ],
          },
        ],
      },
      {
        name: "Section 2: Install Java & Selenium -Get Started with basic Steps of the Selenium WebDriver",
        levels: [
          {
            title: "12 lectures",
            topics: [
              "8. Install Java & Eclipse - Setup Maven Project from Scratch",
              "9. Setting up Eclipse Maven Project with Selenium dependencies from Scratch",
              "10. Understanding the core concept of Browser driver classes and Webdriver Interface",
              "11. How to run tests in Google Chrome & Importance of Chromedriver.exe file",
              "12. Troubleshooting steps if you fail to invoke chrome browser with Selenium",
              "13. Getting Started with basic Selenium WebDriver methods",
              "14. How to run tests in Firefox and Edge browser with Gecko and edge drivers",
              "15. Running the tests in Microsoft Edge browser- Importance of edge driver",
              "16. Code Download",
              "17. Important Note about next section",
              "18. Important Note on OS compatibility",
              "Quiz 1: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 3: Brush up Java Concepts for Selenium Automation",
        levels: [
          {
            title: "12 lectures",
            topics: [
              "19. Course Strategy to learn Java basics for Selenium Automation",
              "20. Introduction to Java variables and Data types with examples",
              "21. What are Arrays in Java? How to initialize and retrieve the values of array",
              "22. Introduction to For loop to iterate over array of Strings and Integers",
              "23. Enhanced for loop declaration & using Conditional statements inside the loops",
              "24. Code download",
              "Coding Exercise 1: Array Exploration",
              "25. What is Arraylist and differences between Arraylist and Arrays",
              "26. Iterating over Arrays and Arraylists and its related methods",
              "27. Strings in Java - How to declare Strings & Important String methods",
              "28. How to create methods and access methods using Java class objects",
              "29. Code download",
            ],
          },
        ],
      },
      {
        name: "Section 4: CORE JAVA In depth for Manual testers and Beginners",
        levels: [
          {
            title: "1 lectures",
            topics: [
              "30. 7 hours Indepth Java learning with Interview Ques",
            ],
          },
        ],
      },
      {
        name: "Section 5: Locator Techniques& Tools used to identify Objects",
        levels: [
          {
            title: "10 lectures",
            topics: [
              "31. Important Notes",
              "32. Importance of locators in Selenium WebDriver to identify the elements",
              "33. Consolidated place to find Practice Websites & API's used in this tutorial",
              "34. Identifying the Web elements with id and name locators with example",
              "35. Introducing Class name and Css Selector locators to identify elements",
              "36. Hands-On Practice Resources for Testing Skills",
              "37. Browser plugins- Selectorshub to identify and validate the elements on the page",
              "38. Working with Xpath and linktext locators and different ways of writing xpaths",
              "39. Building Customized Xpath and Css Selector locators based on html attributes",
              "40. Generating xpaths with parent to child tags traverse techniques",
            ],
          },
        ],
      },
      {
        name: "Section 6: Advanced Locators Identification & Interview Questions on Parsing Text",
        levels: [
          {
            title: "12 lectures",
            topics: [
              "41. Generating Css selectors based on regular expressions - Example",
              "42. Code download",
              "43. Identifying web elements based on unique Tag name locators - example",
              "44. Generating xpaths based on the button texts on the page with the example",
              "45. Parse the String with Java methods to get the password dynamically from the page",
              "46. Code Download",
              "47. Running the tests in cross browser and how to inspect objects in Edge & Firefox",
              "48. Identify locators using Siblings with Xpath traverse - example",
              "49. How to Traverse from child element to parent element with xpath - Example",
              "50. Automate Browser navigations and window properties with Selenium Webdriver",
              "51. Code download",
              "Quiz 2: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 7: Selenium Webdriver-&gt;Techniques to automate Web elements",
        levels: [
          {
            title: "23 lectures",
            topics: [
              "52. Important Note",
              "53. Update with latest Selenium Version - Selenium Manager (Beta)",
              "54. Handling Static dropdowns with Select webdriver API",
              "55. Updated lecture on latest Dropdown looping UI",
              "56. Code download",
              "57. Handle Dynamic dropdowns with Webdriver API",
              "58. Parent-Child relationship locator to Identify the objects Uniquely",
              "59. Code Snippet download",
              "60. Handling AutoSuggestive dropdowns using Selenium",
              "61. AutoSuggestive code download",
              "62. Handling Checkbox and getting the size of them with Selenium",
              "63. Importance of Assertions in Automation testing and how to use them",
            ],
          },
          {
            title: "continued",
            topics: [
              "64. Code Snippet download",
              "Assignment 1: Checkboxes exercise",
              "65. Handling Calendar UI in travel websites using Selenium",
              "66. Validating if UI Elements are disabled or enabled with Attributes",
              "Assignment 2: UI(Dropdowns,EditBoxes,Error Valdiation) Assignment",
              "67. Code Snippet download",
              "68. End to End Automation using all UI Elements with selenium",
              "69. Exercise code download",
              "70. Handling Java Alerts using Selenium Webdriver",
              "71. Alerts code download",
              "Quiz 3: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 8: Deep Dive into Functional testing with Selenium",
        levels: [
          {
            title: "7 lectures",
            topics: [
              "72. Code formatting and Debugging",
              "73. Problem - Adding Items into Cart for Ecommerce App",
              "74. Sending  Array of Products to Cart for checkout",
              "75. Building Programming Logic to process items in array for Cart",
              "76. Debugging the code to understand how flow is being built",
              "77. Fixing the problem of inconsistent locators and making tests clean",
              "78. code download",
            ],
          },
        ],
      },
      {
        name: "Section 9: Synchronization usage in Selenium webdriver",
        levels: [
          {
            title: "11 lectures",
            topics: [
              "79. What is Implicit wait? Explain with real time scenario",
              "80. What is explicit wait? Explain with real time scenario",
              "81. Scenario to automate and necessity of waits in the example",
              "82. Practical examples on Implicit wait",
              "83. Practical examples on explicit waits",
              "84. code download",
              "Assignment 3: Synchronization with Explicit wait - Assignment",
              "85. What is Fluent wait?  Its advantages",
              "86. Building Customized methods using FLuent wait",
              "87. code download",
              "88. Practise example on Fluent wait",
            ],
          },
        ],
      },
      {
        name: "Section 10: Techniques to automate Ajax calls,Child Windows and IFrames",
        levels: [
          {
            title: "10 lectures",
            topics: [
              "89. Handling Ajax/Mouse Interactions",
              "90. Actions class-real time example",
              "91. Window Handle concepts-real time example",
              "92. Live Example on working with Child windows",
              "93. Code download",
              "Assignment 4: Window Handling Assignment",
              "94. How to handle Frames?",
              "95. Frames Techniques-real time example",
              "Assignment 5: Frames Assignment",
              "Quiz 4: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 11: Real Time Exercises (end to end Programming)",
        levels: [
          {
            title: "11 lectures",
            topics: [
              "96. Important Note",
              "97. Practise Exercise- print the links count in the Page",
              "98. Exercise 1.1-Limiting Webdriver scope",
              "99. How to open the links in Separate Tabs - Optimized solution",
              "100. Getting the Titles of child tabs with optimized while loop",
              "101. Code for Exercises",
              "Assignment 6: Practice Exercise- Assignment",
              "102. Handling calendar UI in Ecommerce/ Travel websites",
              "103. Generic method to handle calendar with month and date",
              "104. code download",
              "Quiz 5: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 12: Practical problems and Methods to Handle them with Selenium",
        levels: [
          {
            title: "6 lectures",
            topics: [
              "105. How to Perform Scrolling with in table and Window level using JavaScriptExecutor",
              "106. How to handle table Grids in webpage",
              "107. Parsing String and comparing with Generated Sum value -Exercise",
              "Assignment 7: Web Tables Assignment",
              "Assignment 8: Autocomplete Dropdown Assignment",
              "Quiz 6: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 13: Miscellaneous topics in Selenium WebDriver",
        levels: [
          {
            title: "11 lectures",
            topics: [
              "108. Handling HTTPS certifications in Automated browsers",
              "109. Explore Chrome options to set proxies,plugins & paths on Chrome browser",
              "110. Code download",
              "111. Maximizing window and deleting cookies",
              "112. How to take Screenshots in Selenium",
              "113. Strategy to automate the broken Links with Selenium",
              "114. Open Connection method to identify status codes of the links",
              "115. Iterate over all links in the page to validate broken Links mechanism",
              "116. Importance of Soft Assertions in Selenium WebDriver",
              "117. Code download",
              "Quiz 7: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 14: Selenium Java Streams - Automate Sort, Pagination, Filtering the Web Tables",
        levels: [
          {
            title: "8 lectures",
            topics: [
              "118. Important Note - Plan of learning this Section",
              "119. Learn everything about Java Streams",
              "120. Perform Web Table Sorting using Selenium Java Streams",
              "121. Build Custom Selenium  methods using Streams Mapper",
              "122. Automating Pagination Scenarios to search the data using do while loop",
              "123. Code Download",
              "124. Filter the web table using Selenium Java streams",
              "125. Code download",
            ],
          },
        ],
      },
      {
        name: "Section 15: Selenium 4.0 - Latest Features",
        levels: [
          {
            title: "7 lectures",
            topics: [
              "126. Introduction to Relative Locators - Part 1",
              "127. Relative locators with real time examples",
              "128. Code Download",
              "129. Invoking Multiple Windows/Tabs from Selenium",
              "130. Taking WebElement Partial Screenshot with Selenium",
              "131. -Capturing Height and Width of WebElement for UX validation",
              "132. Code Download",
            ],
          },
        ],
      },
      {
        name: "Section 16: Framework Part -1 -  TestNG",
        levels: [
          {
            title: "17 lectures",
            topics: [
              "133. Why TestNG and Its Advantages",
              "134. Running testcases in TestNG with out Java compiler",
              "135. Importance of xml file in Testng configuration",
              "136. Prioritizing the Testcases with TestNG",
              "137. Include and  Exclude Mechanism to control testcases",
              "138. Executing the Testcases at Package level with regex",
              "139. TestNg Annotations part - 1",
              "140. TestNG Annotations part - 2",
              "141. Usage of Groups functionality in TestNG",
              "142. Annotations helper attributes with examples",
              "143. Parameterising from TestNG xml file",
              "144. DataProvider Annotation -Parameterizing Testcases - 1",
            ],
          },
          {
            title: "continued",
            topics: [
              "145. DataProvider Annotation -Parameterizing Testcases-2",
              "146. Listeners Interface in TestNG framework",
              "147. Running Tests in parallel and generating Reports",
              "148. TestNg code download",
              "Quiz 8: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 17: Learn Java Object Oriented Principles needed for Framework development",
        levels: [
          {
            title: "3 lectures",
            topics: [
              "149. How TestNG Annotations help with Inheritance to remove boilerPlate code in Test",
              "150. How to pass values from test through Parameterized Constructor & this keyword",
              "151. Usage of Super keyword in the Constructor to pass values to Parent Class",
            ],
          },
        ],
      },
      {
        name: "Section 18: Framework Part 1  - Create Maven Project and Prepare Functional End to end Test",
        levels: [
          {
            title: "9 lectures",
            topics: [
              "152. FAQs about Framework design - (MUST WATCH)",
              "153. Complete Framework Code download",
              "154. Create new Maven Project and all Framework dependencies",
              "155. Ecommerce Application Demo which will be used in the Framework",
              "156. Selenium Program on  WebDriverManager - Login-  Get Products List",
              "157. Selenium Program to retrieve product and Add to Cart based on Java Streams",
              "158. Implementation of explicit wait to handle  application synchronously  on loading",
              "159. Logic to verify items in the cart with Streams and Checkout",
              "160. Wrapping up end to end automation Script on Purchasing Order in Ecommerce App",
            ],
          },
        ],
      },
      {
        name: "Section 19: Framework Part 2 - Design Pattern - Page Object & factory Implementation",
        levels: [
          {
            title: "8 lectures",
            topics: [
              "161. What is Page object model? Advantages of its implementation",
              "162. Creating Page object Classes for Login Screen and migrate the test",
              "163. Implementing Action methods for Page factory web elements to implement logic",
              "164. Creating Abstract Components to reuse the common methods/code in framework",
              "165. Page object Class implementation for Product catalogue page and update test",
              "166. Speed up your test execution - Fix for Application slowness in the backend",
              "167. Creating common methods to Abstract component and extending it in Page classes",
              "168. Wrapping up the whole test with complete refactor into Page object model",
            ],
          },
        ],
      },
      {
        name: "Section 20: Framework Part 3 -Test Configuration Methods & Global Properties & Parallel Runs",
        levels: [
          {
            title: "6 lectures",
            topics: [
              "169. Creating Base Test which holds Common Test configuration methods",
              "170. Initialize Driver and create utility to launch App with BeforeMethod annotation",
              "171. Create new Error Validation Test as per framework Standards developed until now",
              "172. Implement Test Strategy for Framework on how tests are divided based on modules",
              "173. Create new Test methods with Dependency attribute based on Test Strategy design",
              "174. How to run tests/classes in Parallel & apply Groups using TestNG.xml",
            ],
          },
        ],
      },
      {
        name: "Section 21: Framework Part 4 - Test Strategy- Control Tests Execution- Run Parallel Tests",
        levels: [
          {
            title: "4 lectures",
            topics: [
              "175. Agenda of implementing  Parameterization into tests with TestNG Data provider",
              "176. Integration of Hashmap to Data provider to send the data as one Hash object",
              "177. How to read the data from Json files and create the list of Hashmaps for testing",
              "178. How to Create Screenshot Utility in Base Test class for catching Failed tests",
            ],
          },
        ],
      },
      {
        name: "Section 22: Framework Part 5 -Extent HTML reports & TestNG Listeners & Thread Safe execution",
        levels: [
          {
            title: "5 lectures",
            topics: [
              "179. What are Extent reports? Quick 30 minutes Tutorial",
              "180. Integrating Extent reports to existing framework with help of TestNG listeners",
              "181. Attaching Screenshot to reports from Listeners on automatic Test failures",
              "182. concurrency problem -Implement ThreadLocal class to avoid sync issues in Tests",
              "183. IRetry Analyzer to rerun the flaky failed Selenium tests in the framework",
            ],
          },
        ],
      },
      {
        name: "Section 23: Framework Part 6 - Test Execution from Maven & Integration with Jenkins CI/CD",
        levels: [
          {
            title: "6 lectures",
            topics: [
              "184. How to run tests in the framework  from terminal using Maven commands",
              "185. Set Global Parameters using Maven commands and Update tests at run time",
              "186. Install Jenkins in the local System for CI/CD",
              "187. Integrate the Selenium framework with Jenkins and Parameterize jenkin job",
              "188. How to Run tests in headless mode and integrate the parameter in Jenkins",
              "189. Schedule Jenkin Jobs with regular expression and trigger nightly Automation jobs",
            ],
          },
        ],
      },
      {
        name: "Section 24: Framework Part 7-  Common  Selenium Framework OOPS Interview Questions",
        levels: [
          {
            title: "4 lectures",
            topics: [
              "190. Selenium Framework Interview Questions - Part 1",
              "191. Selenium Framework Interview Questions - Part 2",
              "192. Selenium Framework Architecture Diagram - Explained",
              "193. How to showcase Selenium experience to recruiters?",
            ],
          },
        ],
      },
      {
        name: "Section 25: Framework Part 8 - Integrating Cucumber Wrapper into Selenium Framework",
        levels: [
          {
            title: "7 lectures",
            topics: [
              "194. Important Note - How much Cucumber does this course cover?",
              "195. Introduction to cucumber and its terminologies with examples",
              "196. Setting up cucumber dependencies into Framework and create feature files",
              "197. Implement Step definitions for features and understand regular expressions",
              "198. Inject Selenium code in Step definition and introduction to Tidy Gherkin Plugin",
              "199. Introduction to TestNG Test Runner  to run Cucumber feature files",
              "200. Control the Cucumber feature files execution with Tags and Background keywords",
            ],
          },
        ],
      },
      {
        name: "Section 26: High five! You're amazing, and you've got this.",
        levels: [
          {
            title: "1 lectures",
            topics: [
              "201. Now go crush it!",
            ],
          },
        ],
      },
      {
        name: "Section 27: GIT- Version Control Tutorial",
        levels: [
          {
            title: "11 lectures",
            topics: [
              "202. Important Note",
              "203. Introduction to GIT",
              "204. Importance of Github and its uses",
              "205. Creating Git config and repositories",
              "206. How to push code to remote repository",
              "207. Understanding Staging and commit in git",
              "208. Add remote repository and push the committed code",
              "209. End to end working example on Git commands -1",
              "210. End to end working example on Git commands -2",
              "211. Importance of Branching in GIT",
              "212. How to resolve Merge conflicts with GIT",
            ],
          },
        ],
      },
      {
        name: "Section 28: CI/CD Integration of Selenium Framework with Jenkins & GitHub",
        levels: [
          {
            title: "5 lectures",
            topics: [
              "213. Note  on prerequisite topics knowledge",
              "214. What is Continuous Integration & Delivery. Understand the flow",
              "215. Configure GitHub acc and push the Selenium Framework into repository",
              "216. Install Fresh Jenkins war & configure necessary plugins & create Selenium Job",
              "217. Understand Github webhook trigger & configure it to activate Selenium Jenkin job",
            ],
          },
        ],
      },
      {
        name: "Section 29: Cross Browser Testing with Selenium Grid",
        levels: [
          {
            title: "6 lectures",
            topics: [
              "218. Important Note & Code Download",
              "219. What is Selenium Grid? Its advantages on bringing down execution time",
              "220. Getting Started with Grid Infrastructure Setup - Create Components",
              "221. Create Node Physical machines and register with Grid-Check Grid health",
              "222. Create Selenium TestNG tests with Desired capabilities & remote webdriver class",
              "223. Demo on executing the Selenium scripts in Node machines from Grid Hub",
            ],
          },
        ],
      },
      {
        name: "Section 30: Understand Excel Data Driven Testing Functions with examples",
        levels: [
          {
            title: "12 lectures",
            topics: [
              "224. what is Apache POI API & Download Instructions",
              "225. Strategy to Access Excel Data",
              "226. Getting rows and its cells from Sheet",
              "227. Retrieving Data from Excel based on condition",
              "228. Practise Exercise- Excel Driven testing -1",
              "229. Practise Exercise- Excel Driven testing -2",
              "230. Practise Exercise- Excel Driven testing -3",
              "231. Importance of Data Provider and Excel Integration for better Data driven",
              "232. Understand Dataprovider and how it sends data in Multidimensional array",
              "233. Get Excel dependencies and connect from java code to excel",
              "234. Live demo on integrating Excel to Dataprovider to parameterize data",
              "235. Code download",
            ],
          },
        ],
      },
      {
        name: "Section 31: Upload Download functionalities with Selenium using external excel files",
        levels: [
          {
            title: "6 lectures",
            topics: [
              "236. Download and uploading file using file attribute sendKeys with Selenium",
              "237. Handle Synchronized toast messages with explicit wait for appear & disappear",
              "238. Write Smart xpath to find table row column cell based on the conditions",
              "239. Assignment on building excel utilities - You need to solve it please",
              "240. End to end solution for updating excel and uploading the file with validations",
              "241. Code download",
            ],
          },
        ],
      },
      {
        name: "Section 32: Selenium 4 Chrome Dev tools Protocol (CDP) Integration Concepts",
        levels: [
          {
            title: "12 lectures",
            topics: [
              "242. Important Note",
              "243. What are Chrome Dev tools? Why do we need this for Selenium testing?",
              "244. Understand Device metrics override function to simulate browser as mobile",
              "245. Importance of executeCDP Command to construct the own  CDP functions",
              "246. Localization Testing with Selenium 4 using ChromeDevTools Protocols",
              "247. How to extract Network Responses and status codes with Selenium  CDP Listeners",
              "248. Intercept Network /API Responses with Selenium Chrome dev tools",
              "249. How to test failed Network request calls with Selenium CDP Commands",
              "250. Blocking unwanted Network request calls to speed up the execution with Selenium",
              "251. How to emulate network speed with Selenium Chromedevtools Integration",
              "252. Working with Basic Authentication using Selenium uriPredicate function",
              "253. How to log javascript errors from Selenium Script to console for debugging",
            ],
          },
        ],
      },
      {
        name: "Section 33: DataBase connection to Selenium Testcases",
        levels: [
          {
            title: "10 lectures",
            topics: [
              "254. Steps to connect Database to Selenium Testcases",
              "255. mysql download instructions",
              "256. mySQL server connection procedure",
              "257. Creating Database in mysql server",
              "258. Creating Tables in Databases",
              "259. Jdbc odbc connection overview",
              "260. Integration of Database with JDBC API",
              "261. Steps to conect Database info to Selenium - 1",
              "262. Program code download",
              "263. Steps to connect Database info to Selenium - 2",
            ],
          },
        ],
      },
      {
        name: "Section 34: GenAI Github copilot plugin for Selenium Java Framework code generation",
        levels: [
          {
            title: "1 lectures",
            topics: [
              "264. Effortlessly generate Selenium Java code with in the editor using GenAI Plugins",
            ],
          },
        ],
      },
      {
        name: "Section 35: File Uploading (AUTO IT) & Downloading  with Selenium",
        levels: [
          {
            title: "9 lectures",
            topics: [
              "265. Handling Window Authentication pop ups with Selenium",
              "266. Examples on handling pop ups with modified webdriver url",
              "267. What is AutoIT? Installation details",
              "268. Inspecting the window objects and converting into AutoIT code",
              "269. End to End example on uploading File with AutoIT Selenium",
              "270. Reference Material for AutoIT",
              "271. Steps to complete the flow to download file from Application with Selenium",
              "272. Chrome driver options to configure download path of browser",
              "273. Full Code download",
            ],
          },
        ],
      },
      {
        name: "Section 36: (OPTIONAL) Maven- Build Management tool InDepth Information",
        levels: [
          {
            title: "10 lectures",
            topics: [
              "274. Important Note",
              "275. Importance of Maven in Framework development",
              "276. Installing and configuring Maven",
              "277. Creating Maven Project and Understanding its Terminologies",
              "278. Understanding POM.xml file and its dependencies",
              "279. Importance of surefirePlugin in executing Tests",
              "280. Integration of Testng with Maven",
              "281. Switching the Tests with Maven profiling",
              "282. code download",
              "Quiz 9: Quiz - Check Your Knowledge",
            ],
          },
        ],
      },
      {
        name: "Section 37: Java OOPS Basics for Selenium Part -1",
        levels: [
          {
            title: "25 lectures",
            topics: [
              "283. IMportant Note",
              "284. When should I use While loop?",
              "285. How do while loop works?",
              "286. loops,Conditions code download",
              "287. Explanation on Nested for loops",
              "288. Practise Exercise on loops -1 { printing pyramid triangle)",
              "289. Practise Exercise - 2- Yahoo Ques : ( Inverted sequence pyramid logic program)",
              "290. Nested loops code download",
              "291. What is interface?",
              "292. How java classes can take advantage of interfaces",
              "293. Interface code download",
              "294. What are Abstract classes and how different they are from Interfaces",
            ],
          },
          {
            title: "continued",
            topics: [
              "295. Usage of inheritance in java",
              "296. Practical examples on types of inheritances",
              "297. Inheritance code download",
              "298. Explaining function overloading in java with example",
              "299. How different function overriding from overloading?-Explain",
              "300. Demonstration code download",
              "301. What are Arrays and their usage in Java programmes",
              "302. Ways of initializing arrays and assigning objects",
              "303. Arrays code download",
              "304. Logic Program on Multi Dimensional arrays",
              "305. Practise exercise - Print smallest number in 3*3 matrix",
              "306. Practise Exercise -  Cisco Interview question on Arrays",
            ],
          },
          {
            title: "continued",
            topics: [
              "307. programming code download",
            ],
          },
        ],
      },
      {
        name: "Section 38: Core Java Tutorial - Part 2",
        levels: [
          {
            title: "18 lectures",
            topics: [
              "308. Date class concepts",
              "309. working with calendar objects in java",
              "310. How constructor play a crucial role",
              "311. Types of constructors and their usage",
              "312. Constrructor code download",
              "313. What is super keyword ?",
              "314. super keyword practical usage",
              "315. importance of this keyword",
              "316. Static and Non Static Importance in Java",
              "317. Final keyword in Java",
              "318. Packages and their usage in OOPS",
              "319. Types of packages and how they will help in real time",
            ],
          },
          {
            title: "continued",
            topics: [
              "320. Importance of access modifiers",
              "321. Difference between public and private modifers-With Examples",
              "322. Different kind of exceptions",
              "323. Try catch Mechanism to handle exceptions",
              "324. Importance of finally block in java",
              "325. Exception code download",
            ],
          },
        ],
      },
      {
        name: "Section 39: Core Java Tutorial - Part 3- Collections API",
        levels: [
          {
            title: "14 lectures",
            topics: [
              "326. What are Java collections",
              "327. Implementation of Arrays List",
              "328. Examples of ArrayList",
              "329. Array List Code download",
              "Coding Exercise 2: Modifying and Analyzing an ArrayList",
              "330. Implementation of Set interface",
              "331. Examples of HashSet using Iterator",
              "332. Implementation of Map interface",
              "333. Code explaining hashset and hashmap",
              "334. Difference between HashMap and HashTable (Interview )",
              "335. Practise Exercise : Priniting unique number- Amazon interview ques",
              "336. programming code download",
              "337. OOPS Interview questions",
              "338. Java interview questions",
            ],
          },
        ],
      },
      {
        name: "Section 40: BONUS LECTURE",
        levels: [
          {
            title: "1 lectures",
            topics: [
              "339. Bonus lecture",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cert-6",
    name: "English INTERMEDIATE / B1",
    issuer: "Green Forest",
    date: "Nov 2023",
    image: "/certificates/green-forest.jpg",
  },
  {
    id: "cert-7",
    name: "Node.js",
    issuer: "ITEA",
    date: "Mar 2020",
    image: "/certificates/NodeITEA.jpg",
  },
  {
    id: "cert-8",
    name: "JavaScript",
    issuer: "Coursera",
    date: "Dec 2018",
    image: "/certificates/JavaScript.jpg",
  },
  {
    id: "cert-9",
    name: "QA Automation",
    issuer: "Hillel",
    date: "Jun 2018",
    image: "/certificates/hillel.jpg",
  },
  {
    id: "cert-10",
    name: "SQL Essential",
    issuer: "CyberBionic Systematics",
    date: "Nov 2014",
    image: "/certificates/sql-essential.jpg",
  },
];
