export type Lang = "en" | "uk";

export interface TranslationMap {
  [key: string]: { en: string; uk: string };
}

export const TRANSLATIONS: TranslationMap = {
  // Navbar
  "nav.experience": { en: "Experience", uk: "Досвід" },
  "nav.skills": { en: "Skills", uk: "Навички" },
  "nav.education": { en: "Education", uk: "Освіта" },
  "nav.certifications": { en: "Certifications", uk: "Сертифікації" },
  "nav.contact": { en: "Contact", uk: "Контакти" },

  // Hero
  "hero.openToOpportunities": { en: "Open to opportunities", uk: "Відкритий до пропозицій" },
  "hero.qatitle": { en: "QA Automation Engineer", uk: "QA Automation Engineer" },
  "hero.hi": { en: "Hi, I'm", uk: "Привіт, я" },
  "hero.firstName": { en: "Roman", uk: "Роман" },
  "hero.lastName": { en: "Makarenko", uk: "Макаренко" },
  "hero.tagLine": {
    en: "QA Automation Engineer · 10+ Years in Quality Assurance · Web, Mobile & Backend",
    uk: "QA Automation Engineer · 10+ років у забезпеченні якості · Web, Mobile & Backend",
  },
  "hero.intro": {
    en: "QA Automation Engineer based in Ukraine. Passionate about test automation, quality processes, and building reliable test frameworks.",
    uk: "QA Automation Engineer з України. Захоплююсь автоматизацією тестування, процесами якості та створенням надійних тестових фреймворків.",
  },
  "hero.letsConnect": { en: "Let's Connect", uk: "Давайте знайомитись" },
  "hero.emailMe": { en: "Email Me", uk: "Написати" },

  // Interactive code showcase
  "showcase.label": { en: "Automation stack code showcase", uk: "Демонстрація стеку автоматизації" },
  "showcase.showSnippet": { en: "Show snippet for", uk: "Показати приклад для" },
  "showcase.pass": { en: "Pass", uk: "Пройдено" },
  "showcase.matched": { en: "Requirements matched", uk: "Вимоги відповідають" },
  "showcase.contact": { en: "Contact me", uk: "Зв’язатися зі мною" },
  "showcase.pause": { en: "Pause snippet rotation", uk: "Призупинити зміну прикладів" },
  "showcase.resume": { en: "Resume snippet rotation", uk: "Відновити зміну прикладів" },

  // Experience
  "experience.title": { en: "Experience", uk: "Досвід" },
  "experience.subtitle": {
    en: "10+ years in quality assurance — web, mobile, and backend",
    uk: "10+ років у забезпеченні якості — web, mobile та backend",
  },

  // Skills
  "skills.title": { en: "Skills", uk: "Навички" },
  "skills.subtitle": { en: "Technologies and tools I work with", uk: "Технології та інструменти, з якими працюю" },
  "skills.group.Programming & Frameworks": { en: "Programming & Frameworks", uk: "Програмування та фреймворки" },
  "skills.group.Test Automation": { en: "Test Automation", uk: "Автоматизація тестування" },
  "skills.group.Testing": { en: "Testing", uk: "Тестування" },
  "skills.group.QA Practices": { en: "QA Practices", uk: "Практики QA" },
  "skills.group.Data & Infrastructure": { en: "Data & Infrastructure", uk: "Дані та інфраструктура" },
  "skills.group.CI/CD & Collaboration": { en: "CI/CD & Collaboration", uk: "CI/CD та співпраця" },
  "skills.group.Methodologies & Domains": { en: "Methodologies & Domains", uk: "Методології та домени" },
  "skills.group.AI & LLM": { en: "AI & LLM", uk: "ШІ та великі мовні моделі" },

  // Education
  "education.title": { en: "Education", uk: "Освіта" },
  "education.subtitle": { en: "Academic background", uk: "Академічна освіта" },
  "education.major": { en: "Major: Computer Science", uk: "Спеціальність: Комп'ютерні науки" },
  "education.fulltime": { en: "Full-time education", uk: "Денна форма навчання" },
  "education.schoolSpecialization": {
    en: "Specialized in programming & computer technologies",
    uk: "Спеціалізація: програмування та комп'ютерні технології",
  },
  "education.secondary": { en: "Secondary education", uk: "Середня освіта" },
  "education.location": { en: "Kyiv, Ukraine", uk: "Київ, Україна" },

  // In Progress
  "nav.in-progress": { en: "In Progress", uk: "В процесі" },
  "inProgress.title": { en: "In Progress", uk: "Наразі в процесі" },
  "inProgress.subtitle": {
    en: "Courses and certifications I'm currently working on",
    uk: "Курси та сертифікації, які зараз опановую",
  },
  "inProgress.started": { en: "Started", uk: "Початок" },
  "inProgress.estimatedEnd": { en: "Estimated end", uk: "Орієнтовно" },
  "inProgress.levels": { en: "levels", uk: "рівнів" },
  "inProgress.complete": { en: "complete", uk: "виконано" },
  "inProgress.progress": { en: "Progress", uk: "Прогрес" },
  "inProgress.viewCurriculum": { en: "View curriculum", uk: "Програма" },
  "inProgress.curriculum": { en: "Curriculum", uk: "Програма навчання" },
  "inProgress.level": { en: "Level", uk: "Рівень" },
  "inProgress.play": { en: "Open", uk: "Відкрити" },
  "inProgress.viewWork": { en: "View work", uk: "Переглянути роботу" },

  // Certifications
  "certifications.title": { en: "Certifications", uk: "Сертифікації" },
  "certifications.subtitle": {
    en: "Continuous learning and professional development",
    uk: "Безперервне навчання та професійний розвиток",
  },
  "certifications.viewDetails": { en: "View details", uk: "Детальніше" },

  // Footer
  "footer.getInTouch": { en: "Get In Touch", uk: "Зв'язатися" },
  "footer.description": {
    en: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
    uk: "Я відкритий до нових пропозицій. Якщо у вас є питання або просто бажаєте привітатись — моя поштова скринька завжди відкрита.",
  },
  "footer.sayHello": { en: "Say Hello", uk: "Написати" },
  "footer.builtWith": {
    en: "Built with React + Tailwind CSS",
    uk: "Створено з React + Tailwind CSS",
  },

  // Certificate issuers — only those needing translation
  "cert.issuer.Udemy": { en: "Udemy", uk: "Udemy" },
  "cert.issuer.Ciklum": { en: "Ciklum", uk: "Ciklum" },
  "cert.issuer.JavaRush": { en: "JavaRush", uk: "JavaRush" },
  "cert.issuer.Green Forest": { en: "Green Forest", uk: "Green Forest" },
  "cert.issuer.ITEA": { en: "ITEA", uk: "ITEA" },
  "cert.issuer.Coursera": { en: "Coursera", uk: "Coursera" },
  "cert.issuer.Hillel": { en: "Hillel", uk: "Hillel" },
  "cert.issuer.CyberBionic Systematics": { en: "CyberBionic Systematics", uk: "CyberBionic Systematics" },

  // Certificate descriptions
  "cert.desc.genai": {
    en: "A comprehensive course covering Generative AI, prompt engineering, GitHub Copilot, Claude Code, MCP servers, and building AI agents for QA automation — from fundamentals to real-world CI/CD integration.",
    uk: "Всебічний курс, що охоплює генеративний AI, інженерію промптів, GitHub Copilot, Claude Code, MCP сервери та створення AI-агентів для автоматизації QA — від основ до реальної інтеграції з CI/CD.",
  },
  "cert.desc.ciklumAi": {
    en: "AI Fundamentals introduces you to the essential concepts, tools, and ethical foundations of Artificial Intelligence. Covers how AI works, its use across the software development lifecycle, and how to apply it responsibly.",
    uk: "Основи AI знайомлять з ключовими концепціями, інструментами та етичними засадами штучного інтелекту. Охоплює принципи роботи AI, його використання в життєвому циклі розробки ПЗ та відповідальне застосування.",
  },
  "cert.desc.ciklumQaAi": {
    en: "QA-Specific AI learning and certification covering context & requirements analysis, intelligent test case generation, automated defect reporting, console scripts, and specialized testing.",
    uk: "Спеціалізоване навчання та сертифікація з AI для QA: аналіз контексту та вимог, інтелектуальна генерація тестів, автоматизоване звітування про дефекти, консольні скрипти та спеціалізоване тестування.",
  },
  "cert.desc.javarush": {
    en: "A comprehensive Java training program consisting of 5 modules with lectures, hands-on practice, and capstone projects — taking students from beginner to Junior Developer level, plus a final group project.",
    uk: "Комплексна програма навчання Java з 5 модулів, що включає лекції, практичні завдання та проєкти — від початківця до рівня Junior Developer, плюс фінальний груповий проєкт.",
  },
  "cert.desc.selenium": {
    en: "A comprehensive Selenium WebDriver course — best-seller in the Selenium category. Covers automation testing from fundamentals to advanced frameworks, CI/CD integration, Selenium Grid, and AI-powered code generation.",
    uk: "Комплексний курс Selenium WebDriver — бестселер у категорії Selenium. Охоплює автоматизацію тестування від основ до просунутих фреймворків, інтеграцію CI/CD, Selenium Grid та генерацію коду з AI.",
  },
  "cert.desc.seleniumCucumber": {
    en: "A comprehensive end-to-end course covering Selenium WebDriver, Java programming, TestNG, Cucumber BDD, Apache POI, Page Object Model, Hybrid Driven Framework development, CI/CD with Jenkins & Docker, and Selenium Grid — from fundamentals to real-world framework architecture.",
    uk: "Комплексний наскрізний курс, що охоплює Selenium WebDriver, програмування на Java, TestNG, Cucumber BDD, Apache POI, Page Object Model, розробку гібридного фреймворку, CI/CD з Jenkins та Docker, а також Selenium Grid — від основ до архітектури реальних фреймворків.",
  },
  "cert.desc.restassured": {
    en: "A comprehensive end-to-end course on REST API testing and automation with Rest Assured in Java — from API fundamentals and Postman, through response validation with JsonPath, dynamic JSON payloads, OAuth 2.0, and POJO serialization/deserialization, to building a Cucumber BDD API framework from scratch, GraphQL testing, and CI/CD integration with Jenkins.",
    uk: "Комплексний наскрізний курс з тестування та автоматизації REST API за допомогою Rest Assured на Java — від основ API та Postman, через валідацію відповідей з JsonPath, динамічні JSON-дані, OAuth 2.0 та серіалізацію/десеріалізацію POJO, до створення Cucumber BDD API фреймворку з нуля, тестування GraphQL та інтеграції CI/CD з Jenkins.",
  },
  "cert.desc.playwright": {
    en: "A comprehensive hands-on course on building an industry-standard Playwright automation framework in Java — from Playwright setup and browser engines, through resilient locators, auto-waits, browser contexts, and Trace Viewer, to API testing with Playwright, network interception and mocking, Page Object Model, TestNG data-driven testing, Maven profiles, Allure reporting, and CI/CD with GitHub Actions.",
    uk: "Комплексний практичний курс зі створення індустріального фреймворку автоматизації Playwright на Java — від налаштування Playwright та браузерних движків, через надійні локатори, auto-waits, браузерні контексти та Trace Viewer, до API-тестування з Playwright, перехоплення та мокування мережевих запитів, Page Object Model, data-driven тестування з TestNG, Maven profiles, Allure звітів та CI/CD з GitHub Actions.",
  },

  // Certificate names
  "cert.name.genai": {
    en: "GenAI & AI Agents for QA Automation | Copilot & Claude Code",
    uk: "GenAI та AI-агенти для автоматизації QA | Copilot та Claude Code",
  },
  "cert.name.ciklumAi": {
    en: "Ciklum AI Fundamentals Course (Level 1)",
    uk: "Ciklum: Основи AI (Рівень 1)",
  },
  "cert.name.ciklumQaAi": {
    en: "QA-Specific AI Learning and Certification (Level 2)",
    uk: "Спеціалізований AI для QA (Рівень 2)",
  },
  "cert.name.javarush": {
    en: "Java Developer Professional",
    uk: "Професійний Java Developer",
  },
  "cert.name.selenium": {
    en: "Selenium WebDriver with Java — Basics to Advanced",
    uk: "Selenium WebDriver з Java — від основ до просунутого",
  },
  "cert.name.english": {
    en: "English INTERMEDIATE / B1",
    uk: "Англійська СЕРЕДНІЙ / B1",
  },
  "cert.name.nodejs": {
    en: "Node.js",
    uk: "Node.js",
  },
  "cert.name.javascript": {
    en: "JavaScript",
    uk: "JavaScript",
  },
  "cert.name.qaautomation": {
    en: "QA Automation",
    uk: "QA Automation",
  },
  "cert.name.sql": {
    en: "SQL Essential",
    uk: "SQL Essential",
  },
  "cert.name.seleniumCucumber": {
    en: "Learn Selenium with Java, Cucumber & Frameworks",
    uk: "Вивчайте Selenium з Java, Cucumber та фреймворками",
  },
  "cert.name.restassured": {
    en: "Rest API Testing (Automation) from Scratch — Rest Assured Java",
    uk: "Тестування REST API (Автоматизація) з нуля — Rest Assured Java",
  },
  "cert.name.playwright": {
    en: "Playwright JAVA Automation Testing - From Basics to Framework",
    uk: "Playwright JAVA автоматизація тестування - від основ до фреймворку",
  },
  "cert.name.qaFromScratch2026": {
    en: "QA Tester from Scratch 2026 with AI. Web/Mobile, API, Postman, SQL",
    uk: "Тестувальник з нуля 2026 з AI. Web/Mobile, API, Postman, SQL",
  },
  "cert.name.deepEval": {
    en: "Test AI Agents, Chatbots & RAG Apps with DeepEval",
    uk: "Тестування AI-агентів, чатботів і RAG-застосунків з DeepEval",
  },
  "cert.name.playwrightTypeScript": {
    en: "Learn Playwright with TypeScript (Web & API Testing)",
    uk: "Playwright з TypeScript (тестування Web та API)",
  },

  "cert.desc.qaFromScratch2026": {
    en: "A 41-hour practical QA course covering web and mobile testing, API testing with Postman, SQL, test documentation, traffic analysis, CI/CD, and AI-assisted testing.",
    uk: "Практичний 41-годинний курс з QA, що охоплює тестування веб- і мобільних застосунків, API-тестування з Postman, SQL, тестову документацію, аналіз трафіку, CI/CD та тестування з AI.",
  },
  "cert.desc.deepEval": {
    en: "An 8-hour practical course on testing AI agents, chatbots, and RAG applications with DeepEval metrics, tracing, golden datasets, safety evaluations, and custom G-Eval metrics.",
    uk: "Практичний 8-годинний курс із тестування AI-агентів, чатботів і RAG-застосунків за допомогою метрик DeepEval, трасування, golden datasets, перевірок безпеки та власних G-Eval метрик.",
  },
  "cert.desc.playwrightTypeScript": {
    en: "A 93-hour course on Playwright and TypeScript, covering end-to-end web automation, API testing, AI-powered agents, accessibility, visual and database testing, framework development, Docker, and Jenkins CI/CD.",
    uk: "93-годинний курс із Playwright та TypeScript: наскрізна автоматизація вебтестування, API-тестування, AI-агенти, тестування доступності, візуальне й баз даних, розробка фреймворків, Docker та Jenkins CI/CD.",
  },

  // Course curriculum translations live in certTranslations.ts

  // Month translations for dates
  "month.Jan": { en: "Jan", uk: "Січ" },
  "month.Feb": { en: "Feb", uk: "Лют" },
  "month.Mar": { en: "Mar", uk: "Бер" },
  "month.Apr": { en: "Apr", uk: "Кві" },
  "month.May": { en: "May", uk: "Тра" },
  "month.Jun": { en: "Jun", uk: "Чер" },
  "month.Jul": { en: "Jul", uk: "Лип" },
  "month.Aug": { en: "Aug", uk: "Сер" },
  "month.Sep": { en: "Sep", uk: "Вер" },
  "month.Oct": { en: "Oct", uk: "Жов" },
  "month.Nov": { en: "Nov", uk: "Лис" },
  "month.Dec": { en: "Dec", uk: "Гру" },

  // Export buttons
  "export.downloadPdf": { en: "Download PDF", uk: "Завантажити PDF" },
  "export.downloadDoc": { en: "Download DOC", uk: "Завантажити DOC" },
  "export.generating": { en: "Generating...", uk: "Генерація..." },
  "export.summary": {
    en: "Good theoretical and practical knowledge of Software Testing. 10+ years of experience in quality assurance: web, mobile and backend. Developed, wrote and maintained automated tests using Java, Selenium, Appium, Node.js, Playwright, Rest Assured, and WebdriverIO. Skilled in Artificial Intelligence tools: Prompt Engineering, MCP, AI Agents, and LLM-assisted Development.",
    uk: "Добрі теоретичні та практичні знання тестування програмного забезпечення. 10+ років досвіду в забезпеченні якості: web, mobile та backend. Розробляв, писав та підтримував автоматизовані тести з використанням Java, Selenium, Appium, Node.js, Playwright, Rest Assured та WebdriverIO. Володію інструментами штучного інтелекту: Prompt Engineering, MCP, AI Agents та LLM-assisted Development.",
  },

  // Certificate modal UI
  "modal.certificate": { en: "Certificate", uk: "Сертифікат" },
  "modal.studyProgram": { en: "Study Program", uk: "Програма навчання" },
  "modal.modules": { en: "modules", uk: "модулів" },
  "modal.projects": { en: "Projects", uk: "Проєкти" },
  "modal.closeHint": {
    en: "Press Esc or click outside to close",
    uk: "Натисніть Esc або клікніть за межами вікна, щоб закрити",
  },
  "modal.close": { en: "Close", uk: "Закрити" },
};

// Experience translations
export const EXPERIENCE_TRANSLATIONS: Record<string, { en: string; uk: string }> = {
  // Funtime — pet project
  "pos.funtime-0.title": { en: "Co-Founder, Product Owner, Project Manager", uk: "Співзасновник, Product Owner, Project Manager" },
  "pos.funtime-0.duration": { en: "2013 — Present", uk: "2013 — Тепер" },
  "pos.funtime-0.desc": {
    en: "Pet project — Ukrainian travel and leisure discovery platform. Curates and reviews places across Ukraine: architecture, culture & art, nature, entertainment, active leisure, relaxation & recreation.",
    uk: "Пет-проект — українська платформа для відкриття місць та дозвілля. Курує та оглядає місця по всій Україні: архітектура, культура та мистецтво, природа, розваги, активний відпочинок, релакс.",
  },
  "pos.funtime-0.resp.0": { en: "Built and managed the platform from concept to launch", uk: "Побудував та керував платформою від концепції до запуску" },
  "pos.funtime-0.resp.1": { en: "Defined product vision, roadmap, and feature priorities", uk: "Визначав продуктове бачення, roadmap та пріоритети функціоналу" },
  "pos.funtime-0.resp.2": { en: "Managed project timeline, tasks, and team coordination", uk: "Керував таймлайном проекту, задачами та координацією команди" },
  "pos.funtime-0.resp.3": { en: "Curated content and oversaw place listings database", uk: "Курував контент та базу даних місць" },
  "pos.funtime-0.ach.0": { en: "Launched and maintained a live travel platform serving users across Ukraine", uk: "Запустив та підтримує живу туристичну платформу для користувачів по всій Україні" },
  "pos.funtime-0.ach.1": { en: "Grew a database of curated places covering 6 major categories", uk: "Розвинув базу курованих місць за 6 основними категоріями" },

  // Ciklum / NZZ - Position titles
  "pos.ciklum-0.title": { en: "Senior Automation QA Engineer", uk: "Senior Automation QA Engineer" },
  "pos.ciklum-0.duration": { en: "Jan 2023 — Present", uk: "Січ 2023 — Тепер" },
  "pos.ciklum-0.desc": {
    en: "Project 3 · Outsourcing engagement. The client is a Zurich-based media company operating across newspaper, magazine and television broadcasting.",
    uk: "Проєкт 3 · Аутсорсингова співпраця. Клієнт — медіакомпанія з Цюриха, що працює у сферах газет, журналів і телевізійного мовлення.",
  },
  "pos.ciklum-0.resp.0": { en: "Developed, maintained, and enhanced the web test automation framework.", uk: "Розробляв, підтримував і вдосконалював вебфреймворк автоматизації тестування." },
  "pos.ciklum-0.resp.1": { en: "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.", uk: "Керував відстеженням дефектів, звітуванням і контролем їх усунення протягом усього життєвого циклу." },
  "pos.ciklum-0.resp.2": { en: "Supported releases across all environments, including production.", uk: "Підтримував релізи в усіх середовищах, включно з production." },
  "pos.ciklum-0.resp.3": { en: "Contributed to the existing test automation framework and automated test coverage.", uk: "Розвивав наявний фреймворк автоматизації тестування та покриття автотестами." },
  "pos.ciklum-0.ach.0": { en: "Designed and maintained a test suite comprising 3,000+ project-specific test cases across five projects, including adapted and reused scenarios.", uk: "Розробив і підтримував набір із понад 3 000 тест-кейсів для п'яти проєктів, включно з адаптованими та повторно використаними сценаріями." },
  "pos.ciklum-0.ach.1": { en: "Mentored and supported team members on test automation and QA practices.", uk: "Менторив і підтримував команду з питань автоматизації тестування та практик QA." },
  "pos.ciklum-0.ach.2": { en: "Supported QA activities for CMS releases.", uk: "Підтримував QA-активності під час релізів CMS." },
  "pos.ciklum-0.ach.3": { en: "Supported the migration of frontend applications from Vue.js to React.", uk: "Підтримував міграцію фронтенд-застосунків із Vue.js на React." },
  "pos.ciklum-0.ach.4": { en: "Supported the migration of the mobile application from Vue.js to React.", uk: "Підтримував міграцію мобільного застосунку з Vue.js на React." },
  "pos.ciklum-0.ach.5": { en: "Supported the migration of a 10+ year-old custom CMS fork to the main branch.", uk: "Підтримував перенесення понад 10-річного форка власної CMS до основної гілки." },

  "pos.ciklum-1.title": { en: "Senior QA Automation Engineer", uk: "Senior QA Automation Engineer" },
  "pos.ciklum-1.duration": { en: "May 2018 — Jan 2023", uk: "Тра 2018 — Січ 2023" },
  "pos.ciklum-1.desc": {
    en: "Project 2 · Staff augmentation engagement. The client is a Zurich-based media company operating across newspaper, magazine and television broadcasting.",
    uk: "Проєкт 2 · Посилення команди клієнта (staff augmentation). Клієнт — медіакомпанія з Цюриха, що працює у сферах газет, журналів і телевізійного мовлення.",
  },
  "pos.ciklum-1.resp.0": { en: "Redesigned and rewrote the web test automation framework using WebdriverIO.", uk: "Переробив і переписав вебфреймворк автоматизації тестування з використанням WebdriverIO." },
  "pos.ciklum-1.resp.1": { en: "Developed a mobile test automation framework using Java and Appium (later deprecated).", uk: "Розробив фреймворк автоматизації мобільного тестування на Java та Appium (згодом застарів)." },
  "pos.ciklum-1.resp.2": { en: "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.", uk: "Керував відстеженням дефектів, звітуванням і контролем їх усунення протягом усього життєвого циклу." },
  "pos.ciklum-1.resp.3": { en: "Supported releases across all environments, including production.", uk: "Підтримував релізи в усіх середовищах, включно з production." },
  "pos.ciklum-1.resp.4": { en: "Took on QA Lead responsibilities, including scheduling and managing QA resources to ensure effective testing delivery for new and existing systems.", uk: "Виконував обов'язки QA Lead, зокрема планував і розподіляв ресурси QA для ефективного тестування нових і наявних систем." },
  "pos.ciklum-1.resp.5": { en: "Provided the team with regular feedback on product quality and testing status.", uk: "Регулярно інформував команду про якість продукту та статус тестування." },
  "pos.ciklum-1.ach.0": { en: "Provided QA support during the major redesign of NZZ and NZZaS (MAGAZIN).", uk: "Підтримував QA під час масштабного редизайну NZZ і NZZaS (MAGAZIN)." },
  "pos.ciklum-1.ach.1": { en: "Supported the full development lifecycle from initial concept to production for CHM (9 tenants) and TheMarket.", uk: "Підтримував повний цикл розробки — від початкової концепції до production — для CHM (9 тенантів) і TheMarket." },
  "pos.ciklum-1.ach.2": { en: "Achieved comprehensive End-to-End (E2E) test coverage of the CMS across NZZ, NZZaS, Bellevue, CHM, and TheMarket.", uk: "Забезпечив комплексне End-to-End (E2E) покриття CMS для NZZ, NZZaS, Bellevue, CHM і TheMarket." },

  "pos.ciklum-2.title": { en: "QA Lead", uk: "QA Lead" },
  "pos.ciklum-2.duration": { en: "Jun 2017 — Apr 2018", uk: "Чер 2017 — Кві 2018" },
  "pos.ciklum-2.desc": {
    en: "Project 1. NZZ Mediengruppe is a Zurich-based media company operating across newspaper, magazine, and television broadcasting.",
    uk: "Проєкт 1. NZZ Mediengruppe — медіакомпанія з Цюриха, що працює у сферах газет, журналів і телевізійного мовлення.",
  },
  "pos.ciklum-2.resp.0": { en: "Led a team of five QA engineers.", uk: "Керував командою з п'яти QA-інженерів." },
  "pos.ciklum-2.resp.1": { en: "Managed QA resource planning and scheduling to ensure effective testing delivery for new and existing systems.", uk: "Планував розподіл ресурсів QA і графіки, щоб забезпечити ефективне тестування нових і наявних систем." },
  "pos.ciklum-2.resp.2": { en: "Coordinated and supported the QA team to ensure testing activities were delivered within project timelines.", uk: "Координував і підтримував команду QA, щоб тестування виконувалося в межах строків проєкту." },
  "pos.ciklum-2.resp.3": { en: "Managed defect tracking, reporting, and follow-up throughout the defect lifecycle.", uk: "Керував відстеженням дефектів, звітуванням і контролем їх усунення протягом усього життєвого циклу." },
  "pos.ciklum-2.resp.4": { en: "Supported releases across all environments, including production.", uk: "Підтримував релізи в усіх середовищах, включно з production." },
  "pos.ciklum-2.resp.5": { en: "Maintained and enhanced the existing test automation framework.", uk: "Підтримував і вдосконалював наявний фреймворк автоматизації тестування." },
  "pos.ciklum-2.resp.6": { en: "Performed testing of web and mobile applications.", uk: "Тестував веб- і мобільні застосунки." },
  "pos.ciklum-2.ach.0": { en: "Successfully delivered the company's first mobile applications to production.", uk: "Успішно вивів перші мобільні застосунки компанії в production." },
  "pos.ciklum-2.ach.1": { en: "Established and formalized QA processes and documentation for the project.", uk: "Запровадив і формалізував процеси QA та документацію проєкту." },

  // Playtika
  "pos.playtika-0.title": { en: "Senior QA Automation Engineer", uk: "Senior QA Automation Engineer" },
  "pos.playtika-0.duration": { en: "Aug 2016 — Jun 2017", uk: "Сер 2016 — Чер 2017" },
  "pos.playtika-0.desc": { en: "The project was based on a microservices architecture and focused on backend services.", uk: "Проєкт базувався на мікросервісній архітектурі та був зосереджений на бекенд-сервісах." },
  "pos.playtika-0.resp.0": { en: "Created and maintained test documentation, including test cases, checklists, and test plans.", uk: "Створював і підтримував тестову документацію: тест-кейси, чеклісти та плани тестування." },
  "pos.playtika-0.resp.1": { en: "Tested backend microservices, APIs, integrations, and supporting infrastructure using Kafka, Elasticsearch, Couchbase, Logstash, Swagger, and Eureka.", uk: "Тестував бекенд-мікросервіси, API, інтеграції та допоміжну інфраструктуру з Kafka, Elasticsearch, Couchbase, Logstash, Swagger і Eureka." },
  "pos.playtika-0.resp.2": { en: "Developed and maintained automated tests.", uk: "Розробляв і підтримував автоматизовані тести." },
  "pos.playtika-0.resp.3": { en: "Performed integration testing of microservices owned by the Scrum team.", uk: "Виконував інтеграційне тестування мікросервісів, за які відповідала Scrum-команда." },
  "pos.playtika-0.resp.4": { en: "Identified, documented, and tracked defects throughout the testing lifecycle.", uk: "Виявляв, документував і відстежував дефекти протягом усього циклу тестування." },
  "pos.playtika-0.ach.0": { en: "Developed and maintained integration test suites for backend microservices.", uk: "Розробив і підтримував набори інтеграційних тестів для бекенд-мікросервісів." },
  "pos.playtika-0.ach.1": { en: "Improved release stability through increased integration test coverage.", uk: "Підвищив стабільність релізів завдяки збільшенню покриття інтеграційними тестами." },

  "pos.playtika-1.title": { en: "QA Automation Engineer / Senior QA Engineer", uk: "QA Automation Engineer / Senior QA Engineer" },
  "pos.playtika-1.duration": { en: "Oct 2015 — Aug 2016", uk: "Жов 2015 — Сер 2016" },
  "pos.playtika-1.desc": { en: "Test automation for mobile games.", uk: "Автоматизація тестування мобільних ігор." },
  "pos.playtika-1.resp.0": { en: "Created and maintained test documentation, including test cases, checklists, and test plans.", uk: "Створював і підтримував тестову документацію: тест-кейси, чеклісти та плани тестування." },
  "pos.playtika-1.resp.1": { en: "Developed UI automated tests using Java, Appium, ADB, and MonosynDriver, an internal Playtika software solution.", uk: "Розробляв UI-автотести на Java, Appium, ADB і MonosynDriver — внутрішньому програмному рішенні Playtika." },
  "pos.playtika-1.resp.2": { en: "Executed test builds and automated test runs through TeamCity.", uk: "Запускав тестові збірки й автоматизовані прогони тестів через TeamCity." },
  "pos.playtika-1.resp.3": { en: "Analyzed test coverage and identified gaps in automated test scenarios.", uk: "Аналізував покриття тестами та виявляв прогалини в автоматизованих сценаріях." },
  "pos.playtika-1.resp.4": { en: "Identified, documented, and tracked defects throughout the testing lifecycle.", uk: "Виявляв, документував і відстежував дефекти протягом усього циклу тестування." },
  "pos.playtika-1.ach.0": { en: "Developed the first mobile test automation framework for the project.", uk: "Розробив перший фреймворк автоматизації мобільного тестування для проєкту." },

  "pos.playtika-2.title": { en: "QA Automation Engineer → Senior QA Engineer", uk: "QA Automation Engineer → Senior QA Engineer" },
  "pos.playtika-2.duration": { en: "Aug 2013 — Oct 2015", uk: "Сер 2013 — Жов 2015" },
  "pos.playtika-2.desc": { en: "Test automation for web-based Flash (ActionScript) games.", uk: "Автоматизація тестування вебігор на Flash (ActionScript)." },
  "pos.playtika-2.resp.0": { en: "Created and maintained test documentation, including test cases, checklists, and test plans.", uk: "Створював і підтримував тестову документацію: тест-кейси, чеклісти та плани тестування." },
  "pos.playtika-2.resp.1": { en: "Developed UI automated tests using Java, Selenium WebDriver, and FlashDriver, an internal Playtika solution for interacting with Flash elements.", uk: "Розробляв UI-автотести на Java, Selenium WebDriver і FlashDriver — внутрішньому рішенні Playtika для взаємодії з Flash-елементами." },
  "pos.playtika-2.resp.2": { en: "Analyzed test coverage and identified gaps in automated test scenarios.", uk: "Аналізував покриття тестами та виявляв прогалини в автоматизованих сценаріях." },
  "pos.playtika-2.resp.3": { en: "Identified, documented, and tracked defects throughout the testing lifecycle.", uk: "Виявляв, документував і відстежував дефекти протягом усього циклу тестування." },
  "pos.playtika-2.ach.0": { en: "Developed the first End-to-End (E2E) test automation framework for the project.", uk: "Розробив перший фреймворк End-to-End (E2E) автоматизації тестування для проєкту." },
  "pos.playtika-2.ach.1": { en: "Developed an automated health-check script for NOC engineers that monitored critical services every five minutes, enabling proactive detection of service issues.", uk: "Розробив автоматизований health-check скрипт для інженерів NOC, який перевіряв критичні сервіси кожні п'ять хвилин і давав змогу завчасно виявляти проблеми." },
  "pos.playtika-2.ach.2": { en: "Achieved automated test coverage across all games available in the portfolio at the time.", uk: "Забезпечив покриття автотестами всіх ігор, що на той час входили до портфеля." },

  "pos.playtika-3.title": { en: "Middle QA Engineer", uk: "Middle QA Engineer" },
  "pos.playtika-3.duration": { en: "Feb 2013 — Aug 2013", uk: "Лют 2013 — Сер 2013" },
  "pos.playtika-3.desc": { en: "Social slot game developed for Facebook.", uk: "Соціальна гра-слот, розроблена для Facebook." },
  "pos.playtika-3.resp.0": { en: "Tested web applications, including Flash-based applications.", uk: "Тестував вебзастосунки, зокрема на базі Flash." },
  "pos.playtika-3.resp.1": { en: "Tested game portals and web-based administration panels.", uk: "Тестував ігрові портали та вебпанелі адміністрування." },
  "pos.playtika-3.resp.2": { en: "Tested mobile applications, including HTML5 and native applications for Android and iOS.", uk: "Тестував мобільні застосунки, зокрема HTML5 і нативні застосунки для Android та iOS." },
  "pos.playtika-3.resp.3": { en: "Created test documentation, including test cases, checklists, and test plans.", uk: "Створював тестову документацію: тест-кейси, чеклісти та плани тестування." },
  "pos.playtika-3.resp.4": { en: "Reported defects.", uk: "Повідомляв про дефекти." },
  "pos.playtika-3.ach.0": { en: "Supported the successful delivery of the game to production.", uk: "Сприяв успішному запуску гри в production." },
  "pos.playtika-3.ach.1": { en: "Tested the application under high-load conditions.", uk: "Тестував застосунок в умовах високого навантаження." },

  // TotalGame
  "pos.totalgame-0.title": { en: "QA Lead", uk: "QA Lead" },
  "pos.totalgame-0.duration": { en: "Nov 2012 — Feb 2013", uk: "Лис 2012 — Лют 2013" },
  "pos.totalgame-0.desc": { en: "Online casino game development and integration.", uk: "Розробка та інтеграція онлайн-ігор казино." },
  "pos.totalgame-0.resp.0": { en: "Led a team of four QA engineers.", uk: "Керував командою з чотирьох QA-інженерів." },
  "pos.totalgame-0.resp.1": { en: "Tested web applications, including Flash-based applications.", uk: "Тестував вебзастосунки, зокрема на базі Flash." },
  "pos.totalgame-0.resp.2": { en: "Tested game portals and web-based administration panels.", uk: "Тестував ігрові портали та вебпанелі адміністрування." },
  "pos.totalgame-0.resp.3": { en: "Tested desktop applications, including game download clients and administration panels.", uk: "Тестував десктопні застосунки, зокрема клієнти для завантаження ігор і панелі адміністрування." },
  "pos.totalgame-0.resp.4": { en: "Tested Flash-based games on mobile devices.", uk: "Тестував Flash-ігри на мобільних пристроях." },
  "pos.totalgame-0.resp.5": { en: "Created test documentation, including test cases and checklists.", uk: "Створював тестову документацію, зокрема тест-кейси та чеклісти." },
  "pos.totalgame-0.resp.6": { en: "Reported defects.", uk: "Повідомляв про дефекти." },
  "pos.totalgame-0.ach.0": { en: "Maintained high product quality and received positive customer feedback.", uk: "Підтримував високу якість продукту та отримував позитивні відгуки клієнтів." },

  "pos.totalgame-1.title": { en: "QA Engineer", uk: "QA Engineer" },
  "pos.totalgame-1.duration": { en: "May 2012 — Nov 2012", uk: "Тра 2012 — Лис 2012" },
  "pos.totalgame-1.desc": { en: "Online casino game development and integration.", uk: "Розробка та інтеграція онлайн-ігор казино." },
  "pos.totalgame-1.resp.0": { en: "Tested web applications, including Flash-based applications.", uk: "Тестував вебзастосунки, зокрема на базі Flash." },
  "pos.totalgame-1.resp.1": { en: "Tested game portals and web-based administration panels.", uk: "Тестував ігрові портали та вебпанелі адміністрування." },
  "pos.totalgame-1.resp.2": { en: "Tested desktop applications, including game download clients and administration panels.", uk: "Тестував десктопні застосунки, зокрема клієнти для завантаження ігор і панелі адміністрування." },
  "pos.totalgame-1.resp.3": { en: "Tested Flash-based games on mobile devices.", uk: "Тестував Flash-ігри на мобільних пристроях." },
  "pos.totalgame-1.resp.4": { en: "Created test documentation, including test cases and checklists.", uk: "Створював тестову документацію, зокрема тест-кейси та чеклісти." },
  "pos.totalgame-1.resp.5": { en: "Reported defects.", uk: "Повідомляв про дефекти." },
  "pos.totalgame-1.ach.0": { en: "Supported the successful delivery of online games to production.", uk: "Сприяв успішному запуску онлайн-ігор у production." },

  // Education names
  "edu.kpi.title": { en: "Igor Sikorsky Kyiv Polytechnic Institute", uk: "КПІ ім. Ігоря Сікорського" },
  "edu.kpi.degree": { en: "Master of Computer Science", uk: "Магістр комп'ютерних наук" },
  "edu.kpi.graduated": { en: "Graduated: March 2012", uk: "Закінчив: Березень 2012" },
  "edu.school269.title": { en: "Specialized School № 269", uk: "Спеціалізована школа № 269" },
  "edu.school269.degree": { en: "Programmer Technologist", uk: "Технік-програміст" },
  "edu.school269.duration": { en: "1995 – 2006", uk: "1995 – 2006" },
};