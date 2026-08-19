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

  // Experience
  "experience.title": { en: "Experience", uk: "Досвід" },
  "experience.subtitle": {
    en: "10+ years in quality assurance — web, mobile, and backend",
    uk: "10+ років у забезпеченні якості — web, mobile та backend",
  },

  // Skills
  "skills.title": { en: "Skills", uk: "Навички" },
  "skills.subtitle": { en: "Technologies and tools I work with", uk: "Технології та інструменти, з якими працюю" },
  "skills.group.Testing & QA": { en: "Testing & QA", uk: "Тестування та QA" },
  "skills.group.Automation Frameworks": { en: "Automation Frameworks", uk: "Фреймворки автоматизації" },
  "skills.group.Languages & Frameworks": { en: "Languages & Frameworks", uk: "Мови та фреймворки" },
  "skills.group.DevOps & Infrastructure": { en: "DevOps & Infrastructure", uk: "DevOps та інфраструктура" },
  "skills.group.Artificial Intelligence": { en: "Artificial Intelligence", uk: "Штучний інтелект" },
  "skills.group.Methodologies": { en: "Methodologies", uk: "Методології" },

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
    en: "Good theoretical and practical knowledge of Software Testing. 10+ years of experience in quality assurance: web, mobile and backend. Developed, wrote and maintained automated tests using Java, Selenium, Appium, Node.js, and WebdriverIO. Skilled in Artificial Intelligence tools: Prompt Engineering, MCP, AI Agents, and LLM-assisted Development.",
    uk: "Добрі теоретичні та практичні знання тестування програмного забезпечення. 10+ років досвіду в забезпеченні якості: web, mobile та backend. Розробляв, писав та підтримував автоматизовані тести з використанням Java, Selenium, Appium, Node.js та WebdriverIO. Володію інструментами штучного інтелекту: Prompt Engineering, MCP, AI Agents та LLM-assisted Development.",
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
  "pos.ciklum-0.title": { en: "Automation QA", uk: "Automation QA" },
  "pos.ciklum-0.duration": { en: "Jan 2023 — Present", uk: "Січ 2023 — Тепер" },
  "pos.ciklum-0.desc": {
    en: "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
    uk: "Медіакомпанія: газета, журнал, книговидання та телевізійне мовлення в Цюриху, Швейцарія.",
  },
  "pos.ciklum-0.resp.0": { en: "Wrote and maintained QA Automation Framework (Web)", uk: "Написання та підтримка QA Automation Framework (Web)" },
  "pos.ciklum-0.resp.1": { en: "Managed software defects tracking, reporting, and follow-up using a bug tracking system", uk: "Управління відстеженням дефектів, звітуванням та контролем виправлень" },
  "pos.ciklum-0.resp.2": { en: "Supported releases into all environments including production", uk: "Підтримка релізів у всі середовища, включаючи продакшн" },
  "pos.ciklum-0.resp.3": { en: "Maintained and contributed to existing test automation framework", uk: "Підтримка та вдосконалення існуючого фреймворку автоматизації" },
  "pos.ciklum-0.resp.4": { en: "Tested web applications", uk: "Тестування веб-додатків" },
  "pos.ciklum-0.ach.0": { en: "Wrote and maintained QA Automation Framework (Web)", uk: "Написав та підтримую QA Automation Framework (Web)" },
  "pos.ciklum-0.ach.1": { en: "Wrote more than 3000 test cases", uk: "Написав більше 3000 тест-кейсів" },
  "pos.ciklum-0.ach.2": { en: "Supported prod deployments", uk: "Підтримував продакшн-розгортання" },
  "pos.ciklum-0.ach.3": { en: "Provided help and mentoring to coworkers", uk: "Надавав допомогу та менторинг колегам" },
  "pos.ciklum-0.ach.4": { en: "Supported CMS releases", uk: "Підтримував релізи CMS" },

  "pos.ciklum-1.title": { en: "QA Automation", uk: "QA Automation" },
  "pos.ciklum-1.duration": { en: "May 2018 — Jan 2023", uk: "Тра 2018 — Січ 2023" },
  "pos.ciklum-1.desc": {
    en: "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
    uk: "Медіакомпанія: газета, журнал, книговидання та телевізійне мовлення в Цюриху, Швейцарія.",
  },
  "pos.ciklum-1.resp.0": { en: "Rewrote QA Automation Framework (Web) using WebdriverIO", uk: "Переписав QA Automation Framework (Web) на WebdriverIO" },
  "pos.ciklum-1.resp.1": { en: "Wrote mobile Automation Framework (Java + Appium, deprecated)", uk: "Написав mobile Automation Framework (Java + Appium, deprecated)" },
  "pos.ciklum-1.resp.2": { en: "Managed software defects tracking, reporting, and follow-up", uk: "Управління відстеженням дефектів, звітуванням та контролем" },
  "pos.ciklum-1.resp.3": { en: "Supported releases into all environments including production", uk: "Підтримка релізів у всі середовища, включаючи продакшн" },
  "pos.ciklum-1.resp.4": { en: "Part of QA Lead responsibilities: scheduled and managed resources for effective testing delivery", uk: "Частина обов'язків QA Lead: планування та управління ресурсами для ефективного тестування" },
  "pos.ciklum-1.resp.5": { en: "Provided feedback about the current state of products to the team", uk: "Надання команді зворотного зв'язку щодо поточного стану продуктів" },
  "pos.ciklum-1.resp.6": { en: "Tested web applications", uk: "Тестування веб-додатків" },
  "pos.ciklum-1.ach.0": { en: "Supported deep redesign: NZZ, NZZaS (MAGAZIN)", uk: "Підтримав глибокий редизайн: NZZ, NZZaS (MAGAZIN)" },
  "pos.ciklum-1.ach.1": { en: "Supported full development cycle from idea to prod for CHM (9 tenants), TheMarket", uk: "Підтримав повний цикл розробки від ідеї до продакшну для CHM (9 tenants), TheMarket" },
  "pos.ciklum-1.ach.2": { en: "Fully covered CMS with E2E autotests for projects: NZZ, NZZaS, Bellevue, CHM, TheMarket", uk: "Повністю покрив CMS E2E автотестами для проєктів: NZZ, NZZaS, Bellevue, CHM, TheMarket" },

  "pos.ciklum-2.title": { en: "QA Lead", uk: "QA Lead" },
  "pos.ciklum-2.duration": { en: "Jun 2017 — Apr 2018", uk: "Чер 2017 — Кві 2018" },
  "pos.ciklum-2.desc": {
    en: "Media company: newspaper, magazine, book publishing and TV broadcasting in Zurich, Switzerland.",
    uk: "Медіакомпанія: газета, журнал, книговидання та телевізійне мовлення в Цюриху, Швейцарія.",
  },
  "pos.ciklum-2.resp.0": { en: "Led a small team of 5 members", uk: "Керував невеликою командою з 5 осіб" },
  "pos.ciklum-2.resp.1": { en: "Responsible for scheduling and management of resources to fulfill demand for effective testing delivery", uk: "Відповідальний за планування та управління ресурсами для ефективного тестування" },
  "pos.ciklum-2.resp.2": { en: "Motivated and inspired QA Team members to deliver to the best of their ability", uk: "Мотивував та надихав членів команди QA на найкращі результати" },
  "pos.ciklum-2.resp.3": { en: "Managed software defects tracking, reporting, and follow-up using a bug tracking system", uk: "Управління відстеженням дефектів, звітуванням та контролем виправлень" },
  "pos.ciklum-2.resp.4": { en: "Supported releases into all environments including production", uk: "Підтримка релізів у всі середовища, включаючи продакшн" },
  "pos.ciklum-2.resp.5": { en: "Maintained and contributed to existing test automation framework", uk: "Підтримка та вдосконалення існуючого фреймворку автоматизації" },
  "pos.ciklum-2.resp.6": { en: "Tested web and mobile apps", uk: "Тестування веб та мобільних додатків" },
  "pos.ciklum-2.ach.0": { en: "Ensured effective testing of new and existing systems", uk: "Забезпечив ефективне тестування нових та існуючих систем" },
  "pos.ciklum-2.ach.1": { en: "Brought to market the company's first high-quality mobile applications", uk: "Вивів на ринок перші високоякісні мобільні додатки компанії" },
  "pos.ciklum-2.ach.2": { en: "Wrote documentation and formalised the testing processes", uk: "Написав документацію та формалізував процеси тестування" },

  // Playtika
  "pos.playtika-0.title": { en: "Senior QA Automation Engineer / Senior QA Engineer", uk: "Senior QA Automation Engineer / Senior QA Engineer" },
  "pos.playtika-0.duration": { en: "Aug 2016 — Jun 2017", uk: "Сер 2016 — Чер 2017" },
  "pos.playtika-0.desc": { en: "Backend microservices project.", uk: "Проєкт backend мікросервісів." },
  "pos.playtika-0.resp.0": { en: "Prepared test documentation (Test Cases, Checklists, Test Plans)", uk: "Підготовка тестової документації (Test Cases, Checklists, Test Plans)" },
  "pos.playtika-0.resp.1": { en: "Tested microservices (DB, Kafka, Elasticsearch, Couchbase, logstash, Swagger, Eureka)", uk: "Тестування мікросервісів (DB, Kafka, Elasticsearch, Couchbase, logstash, Swagger, Eureka)" },
  "pos.playtika-0.resp.2": { en: "Created new automated tests", uk: "Створення нових автоматизованих тестів" },
  "pos.playtika-0.resp.3": { en: "Maintained existing automated tests", uk: "Підтримка існуючих автоматизованих тестів" },
  "pos.playtika-0.resp.4": { en: "Covered microservices by integration testing within the SCRUM team", uk: "Покриття мікросервісів інтеграційним тестуванням у SCRUM команді" },
  "pos.playtika-0.resp.5": { en: "Reported defects", uk: "Звітування про дефекти" },
  "pos.playtika-0.ach.0": { en: "Wrote new and maintained existing integration tests", uk: "Написав нові та підтримував існуючі інтеграційні тести" },
  "pos.playtika-0.ach.1": { en: "Increased the count of successful Sprints and Releases", uk: "Збільшив кількість успішних Спринтів та Релізів" },

  "pos.playtika-1.title": { en: "QA Automation Engineer / Senior QA Engineer", uk: "QA Automation Engineer / Senior QA Engineer" },
  "pos.playtika-1.duration": { en: "Oct 2015 — Aug 2016", uk: "Жов 2015 — Сер 2016" },
  "pos.playtika-1.desc": { en: "Games — mobile automation testing.", uk: "Ігри — мобільне автоматизоване тестування." },
  "pos.playtika-1.resp.0": { en: "Prepared test documentation (Test Cases, Checklists, Test Plans)", uk: "Підготовка тестової документації (Test Cases, Checklists, Test Plans)" },
  "pos.playtika-1.resp.1": { en: "Wrote autotests — UI (Java, Appium, ADB, MonosynDriver)", uk: "Написання автотестів — UI (Java, Appium, ADB, MonosynDriver)" },
  "pos.playtika-1.resp.2": { en: "Ran test builds (TeamCity)", uk: "Запуск тестових збірок (TeamCity)" },
  "pos.playtika-1.resp.3": { en: "Analysed scenario coverage with autotests", uk: "Аналіз покриття сценаріїв автотестами" },
  "pos.playtika-1.resp.4": { en: "Reported defects", uk: "Звітування про дефекти" },
  "pos.playtika-1.ach.0": { en: "Created the first mobile automation framework", uk: "Створив перший мобільний фреймворк автоматизації" },

  "pos.playtika-2.title": { en: "QA Automation Engineer — Senior QA Engineer", uk: "QA Automation Engineer — Senior QA Engineer" },
  "pos.playtika-2.duration": { en: "Aug 2013 — Oct 2015", uk: "Сер 2013 — Жов 2015" },
  "pos.playtika-2.desc": { en: "Web applications and games.", uk: "Веб-додатки та ігри." },
  "pos.playtika-2.resp.0": { en: "Prepared test documentation (Test Cases, Checklists, Test Plans)", uk: "Підготовка тестової документації (Test Cases, Checklists, Test Plans)" },
  "pos.playtika-2.resp.1": { en: "Wrote autotests — UI (Selenium WebDriver, FlashDriver — internal solution for Flash elements)", uk: "Написання автотестів — UI (Selenium WebDriver, FlashDriver — внутрішнє рішення для Flash елементів)" },
  "pos.playtika-2.resp.2": { en: "Analysed scenario coverage with autotests", uk: "Аналіз покриття сценаріїв автотестами" },
  "pos.playtika-2.resp.3": { en: "Reported defects", uk: "Звітування про дефекти" },

  "pos.playtika-3.title": { en: "Middle QA Engineer", uk: "Middle QA Engineer" },
  "pos.playtika-3.duration": { en: "Feb 2013 — Aug 2013", uk: "Лют 2013 — Сер 2013" },
  "pos.playtika-3.desc": { en: "Social slot game on the Facebook platform.", uk: "Соціальна гра-слот на платформі Facebook." },
  "pos.playtika-3.resp.0": { en: "Tested web applications (Flash applications testing)", uk: "Тестування веб-додатків (Flash додатки)" },
  "pos.playtika-3.resp.1": { en: "Tested websites (Game portals, Web administration panel)", uk: "Тестування веб-сайтів (ігрові портали, панель адміністрування)" },
  "pos.playtika-3.resp.2": { en: "Tested mobile applications (HTML5, Native Android and iOS)", uk: "Тестування мобільних додатків (HTML5, Native Android та iOS)" },
  "pos.playtika-3.resp.3": { en: "Prepared test documentation (Test Cases, Checklists, Test Plans)", uk: "Підготовка тестової документації (Test Cases, Checklists, Test Plans)" },
  "pos.playtika-3.resp.4": { en: "Reported defects", uk: "Звітування про дефекти" },
  "pos.playtika-3.ach.0": { en: "The game was delivered to production", uk: "Гра була доставлена в продакшн" },
  "pos.playtika-3.ach.1": { en: "Worked with high load", uk: "Працював з високим навантаженням" },

  // TotalGame
  "pos.totalgame-0.title": { en: "QA Lead", uk: "QA Lead" },
  "pos.totalgame-0.duration": { en: "Nov 2012 — Feb 2013", uk: "Лис 2012 — Лют 2013" },
  "pos.totalgame-0.desc": { en: "Developed and integrated online games (casino).", uk: "Розробка та інтеграція онлайн-ігор (казино)." },
  "pos.totalgame-0.resp.0": { en: "Tested web applications (Flash applications testing)", uk: "Тестування веб-додатків (Flash додатки)" },
  "pos.totalgame-0.resp.1": { en: "Tested websites (Game portals, Web administration panel)", uk: "Тестування веб-сайтів (ігрові портали, панель адміністрування)" },
  "pos.totalgame-0.resp.2": { en: "Tested desktop applications (Download Client, Administration panels)", uk: "Тестування десктопних додатків (Download Client, панелі адміністрування)" },
  "pos.totalgame-0.resp.3": { en: "Tested mobile applications (Flash games for mobile devices)", uk: "Тестування мобільних додатків (Flash ігри)" },
  "pos.totalgame-0.resp.4": { en: "Prepared test documentation (Test Cases, Checklists)", uk: "Підготовка тестової документації (Test Cases, Checklists)" },
  "pos.totalgame-0.resp.5": { en: "Reported defects", uk: "Звітування про дефекти" },
  "pos.totalgame-0.resp.6": { en: "Leading a small team of 4 QA engineers", uk: "Керівництво невеликою командою з 4 QA інженерів" },
  "pos.totalgame-0.ach.0": { en: "Ensured high product quality, no comments from customers", uk: "Забезпечив високу якість продукту, без зауважень від клієнтів" },

  "pos.totalgame-1.title": { en: "QA Engineer", uk: "QA Engineer" },
  "pos.totalgame-1.duration": { en: "May 2012 — Nov 2012", uk: "Тра 2012 — Лис 2012" },
  "pos.totalgame-1.desc": { en: "Developed and integrated online games (casino).", uk: "Розробка та інтеграція онлайн-ігор (казино)." },
  "pos.totalgame-1.resp.0": { en: "Tested web applications (Flash applications testing)", uk: "Тестування веб-додатків (Flash додатки)" },
  "pos.totalgame-1.resp.1": { en: "Tested websites (Game portals, Web administration panel)", uk: "Тестування веб-сайтів (ігрові портали, панель адміністрування)" },
  "pos.totalgame-1.resp.2": { en: "Tested desktop applications (Download Client, Administration panels)", uk: "Тестування десктопних додатків (Download Client, панелі адміністрування)" },
  "pos.totalgame-1.resp.3": { en: "Tested mobile applications (Flash games for mobile devices)", uk: "Тестування мобільних додатків (Flash ігри)" },
  "pos.totalgame-1.resp.4": { en: "Prepared test documentation (Test Cases, Checklists)", uk: "Підготовка тестової документації (Test Cases, Checklists)" },
  "pos.totalgame-1.resp.5": { en: "Reported defects", uk: "Звітування про дефекти" },
  "pos.totalgame-1.ach.0": { en: "Ensured high product quality, no comments from customers", uk: "Забезпечив високу якість продукту, без зауважень від клієнтів" },

  // Education names
  "edu.kpi.title": { en: "Igor Sikorsky Kyiv Polytechnic Institute", uk: "КПІ ім. Ігоря Сікорського" },
  "edu.kpi.degree": { en: "Master of Computer Science", uk: "Магістр комп'ютерних наук" },
  "edu.kpi.graduated": { en: "Graduated: March 2012", uk: "Закінчив: Березень 2012" },
  "edu.school269.title": { en: "Specialized School № 269", uk: "Спеціалізована школа № 269" },
  "edu.school269.degree": { en: "Programmer Technologist", uk: "Технік-програміст" },
  "edu.school269.duration": { en: "1995 – 2006", uk: "1995 – 2006" },
};