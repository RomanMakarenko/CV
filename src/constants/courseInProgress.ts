export interface ProjectLink {
  name: string;
  description: string;
  image?: string;
  url: string;
  sourceUrl: string;
}

export interface CourseInProgress {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  totalLevels: number;
  completedLevels: number;
  description: string;
  levels: CourseLevel[];
}

export interface CourseLevel {
  number: number;
  title: string;
  topics?: string[];
  projects?: ProjectLink[];
}

// AI UNIVERSITY — Claude Code intensive course
export const COURSES_IN_PROGRESS: CourseInProgress[] = [
  {
    id: "course-ai-university",
    name: "AI UNIVERSITY",
    startDate: "Jun 2026",
    endDate: "Sep 2026",
    totalLevels: 34,
    completedLevels: 15,
    description:
      "Курс з Claude Code для розробників, які хочуть працювати швидше — без втрати контролю над кодом. Навчіться ставити завдання інженерно, керувати контекстом, будувати агентні пайплайни, підключати зовнішні інструменти через MCP і автоматизувати CI/CD. Жодної магії, лише інженерний підхід до розробки з AI-підтримкою.",
    levels: [
      {
        number: 1,
        title: "Старт із Claude Code: mental model, встановлення та перші робочі поверхні",
      },
      {
        number: 2,
        title: "Безпечний старт проєкту: Git baseline, налаштування, permissions і пам'ять",
        projects: [
          {
            name: "Land Owner",
            description:
              "Аркадна гра в стилі Xonix: відрізайте ділянки землі, уникаючи ворогів. Оптимізована для мобільних пристроїв. Односторінковий HTML5-додаток на чистих Canvas та JavaScript.",
            image: "/certificates/land-owner.png",
            url: "https://brandnewday.itch.io/land-owner",
            sourceUrl: "https://github.com/RomanMakarenko/XonixGame",
          },
          {
            name: "100 Numbered Prisoners",
            description:
              'Симуляція відомої математичної задачі "100 в\'язнів і 100 скриньок". Кожен в\'язень має знайти свій номер у скриньках, відкриваючи не більше половини. Демонструє силу циклічних стратегій у теорії ймовірностей.',
            image: "/certificates/100-numbered-prisoners-100-numbered-boxes.png",
            url: "https://brandnewday.itch.io/100-numbered-prisoners-100-numbered-boxes",
            sourceUrl: "https://github.com/RomanMakarenko/PrisonersProblem",
          },
          {
            name: "Apple Harvest",
            description:
              "Браузерна гра для десктопа: збирайте яблука, уникаючи перешкод. Геймплей з поступовим зростанням складності. Реалізовано у вигляді одного HTML-файлу з Canvas та чистим JavaScript.",
            image: "/certificates/appleharvest-2.png",
            url: "https://brandnewday.itch.io/appleharvest",
            sourceUrl: "https://github.com/RomanMakarenko/AppleHarvest",
          },
          {
            name: "Axelrod Tournament",
            description:
              'Інтерактивна симуляція парадоксу теорії ігор — турнір Аксельрода. Стратегії (Tit-for-Tat, Always Defect, Random та інші) змагаються в ітеративній дилемі в\'язня. Досліджуйте еволюцію кооперації.',
            image: "/certificates/axelrod-tournament.png",
            url: "https://brandnewday.itch.io/axelrod-tournament",
            sourceUrl: "https://github.com/RomanMakarenko/AxelrodTournament",
          },
          {
            name: "Fisherman Game",
            description:
              "Браузерна гра для десктопа: керуйте човном рибалки, ловіть рибу та уникайте перешкод. Мінімалістичний 8-бітний стиль, реалізований в одному HTML-файлі з Canvas та чистим JavaScript.",
            image: "/certificates/fishermangame.png",
            url: "https://brandnewday.itch.io/fishermangame",
            sourceUrl: "https://github.com/RomanMakarenko/FishermanGame",
          },
        ],
      },
      {
        number: 3,
        title: "Інженерна постановка задачі: від prompt до task specification",
        projects: [
          {
            name: "LocaleInfo",
            description:
              "Легкий клієнт-серверний веб-застосунок, що відображає довідкову таблицю всіх світових локалей — 197 записів із кодом локалі, мовою, країною, валютою, TLD, прапорцем-емодзі, часовим поясом та столицею. Миттєвий пошук, темна тема, швидкий запуск.",
            image: "/certificates/localeinfo.png",
            url: "https://localeinfo.onrender.com",
            sourceUrl: "https://github.com/RomanMakarenko/LocaleInfo",
          },
        ],
      },
      {
        number: 4,
        title: "Критерії приймання, verification plan та анти-патерни prompting",
        projects: [
          {
            name: "Haiku 50",
            description:
              "Мінімалістичний веб-застосунок для створення японських трирядкових віршів — хайку — через OpenAI API. Користувач вводить ключові слова, обирає мову (12 мов), регулює рівень «гостроти» (50 Васабі) та отримує унікальну хайку. Японська естетика, історія останніх 100 хайку, трирівневий захист контенту.",
            image: "/certificates/haiku-50.png",
            url: "https://haiku-50.onrender.com",
            sourceUrl: "https://github.com/RomanMakarenko/haiku-50",
          },
        ],
      },
      {
        number: 5,
        title: "Операційна модель контексту: що Claude знає і як цим керувати",
      },
      {
        number: 6,
        title: "Довгі задачі, checkpoints, Git recovery та паралельні сесії",
      },
      {
        number: 7,
        title: "Аналіз codebase: discovery, evidence-based Q&A і карта проєкту",
      },
      {
        number: 8,
        title: "Інтеграції, документація та investigation через subagents",
      },
      {
        number: 9,
        title: "Розширення workflow: taxonomy, commands і custom skills",
      },
      {
        number: 10,
        title: "Plugins, plugin ecosystem та team-ready plugins",
      },
      {
        number: 11,
        title: "Агенти й subagents: ролі, межі та конфігурація",
      },
      {
        number: 12,
        title: "Інструменти, permissions, context isolation і lifecycle агентів",
      },
      {
        number: 13,
        title: "MCP: підключення Claude Code до зовнішніх інструментів і даних",
        projects: [
          {
            name: "Secure MCP Orchestrator",
            description:
              "Security-first агент для координації Firecrawl, Google Docs та Playwright MCP-серверів. Досліджує веб, документує результати в Google Docs та верифікує через браузер — з нульовою довірою до зовнішнього контенту та захистом від prompt injection. Принцип найменших привілеїв, confirmation gates, audit logging.",
            url: "#",
            sourceUrl: "https://github.com/RomanMakarenko/MCPplayground",
          },
        ],
      },
      {
        number: 14,
        title: "Hooks та tool integration workflows",
        projects: [
          {
            name: "HooksTest",
            description:
              "Тестовий проєкт для вивчення та демонстрації Claude Code hooks — автоматичних скриптів на події PreToolUse (блокування rm), PostToolUse, UserPromptSubmit, SessionStart та Stop. Налаштовано у .claude/settings.json з різними matcher-правилами.",
            url: "#",
            sourceUrl: "https://github.com/RomanMakarenko/HooksTest",
          },
        ],
      },
      {
        number: 15,
        title: "Multi-agent workflow: підходи, обмеження та базові orchestration patterns",
        topics: ["Рівні паралельності до agent team"],
      },
      {
        number: 16,
        title: "Паралельна робота, agent pipelines, checkpoints і метрики",
      },
      {
        number: 17,
        title: "Issue-to-PR workflow: аналіз задачі, planning і decomposition",
      },
      {
        number: 18,
        title: "Controlled implementation, debugging, commits, PR і code review",
      },
      {
        number: 19,
        title: "Тестування та verification: стратегія, TDD і рівні тестів",
      },
      {
        number: 20,
        title: "Static checks і безпечний refactoring з Claude Code",
      },
      {
        number: 21,
        title: "DevOps із Claude Code: оточення, CI/CD та build automation",
      },
      {
        number: 22,
        title: "Quality gates, documentation, release automation та internal tools",
      },
      {
        number: 23,
        title: "Production readiness: risk classification, permissions і sensitive data",
      },
      {
        number: 24,
        title: "Робота в команді, traceability та AI engineering culture",
      },
      {
        number: 25,
        title: "Capstone kickoff: видача фінального проєкту, правила роботи та roadmap до demo",
      },
      {
        number: 26,
        title: "Legacy discovery: аналіз, technical debt, документація та risk map",
      },
      {
        number: 27,
        title: "Legacy modernization: baseline, incremental refactoring та roadmap",
      },
      {
        number: 28,
        title: "Міграції: відмінність від modernization, discovery і compatibility analysis",
      },
      {
        number: 29,
        title: "Migration execution: risk management, validation та типи міграцій",
      },
      {
        number: 30,
        title: "AI-native MVP: ідея, користувач, scope і специфікація",
      },
      {
        number: 31,
        title: "MVP execution: controlled vibe coding, demo readiness та capstone handoff",
      },
      {
        number: 32,
        title: "Capstone demo: захист проєкту, критерії оцінювання та portfolio packaging",
      },
      {
        number: 33,
        title: "Career Launch: AI-native proof-of-work, professional story і credible resume",
      },
      {
        number: 34,
        title: "AI-assisted job search: вакансії, tailoring, tracker та interview prep",
      },
    ],
  },
];