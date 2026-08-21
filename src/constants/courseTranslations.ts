import type { Lang } from "./translations";

export const COURSE_CONTENT: Record<string, { en: string; uk: string }> = {
  // ======== course-ai-university ========
  "cc.course-ai-university.desc": {
    en: "A Claude Code course for developers who want to work faster — without losing control over their code. Learn to engineer tasks, manage context, build agent pipelines, connect external tools via MCP, and automate CI/CD. No magic, just an engineering approach to AI-assisted development.",
    uk: "Курс з Claude Code для розробників, які хочуть працювати швидше — без втрати контролю над кодом. Навчіться ставити завдання інженерно, керувати контекстом, будувати агентні пайплайни, підключати зовнішні інструменти через MCP і автоматизувати CI/CD. Жодної магії, лише інженерний підхід до розробки з AI-підтримкою.",
  },

  // Level 1
  "cc.course-ai-university.l1.title": {
    en: "Starting with Claude Code: mental model, installation and first working surfaces",
    uk: "Старт із Claude Code: mental model, встановлення та перші робочі поверхні",
  },

  // Level 2
  "cc.course-ai-university.l2.title": {
    en: "Safe project start: Git baseline, configuration, permissions and memory",
    uk: "Безпечний старт проєкту: Git baseline, налаштування, permissions і пам'ять",
  },

  // Level 2 — projects
  "cc.course-ai-university.l2.p0.name": { en: "Land Owner", uk: "Land Owner" },
  "cc.course-ai-university.l2.p0.desc": {
    en: "An arcade game in the style of Xonix: cut off land plots while avoiding enemies. Optimized for mobile devices. A single-page HTML5 application built with pure Canvas and JavaScript.",
    uk: "Аркадна гра в стилі Xonix: відрізайте ділянки землі, уникаючи ворогів. Оптимізована для мобільних пристроїв. Односторінковий HTML5-додаток на чистих Canvas та JavaScript.",
  },
  "cc.course-ai-university.l2.p1.name": {
    en: "100 Numbered Prisoners",
    uk: "100 Numbered Prisoners",
  },
  "cc.course-ai-university.l2.p1.desc": {
    en: 'A simulation of the famous mathematical puzzle "100 prisoners and 100 boxes." Each prisoner must find their number by opening no more than half of the boxes. Demonstrates the power of cycle-based strategies in probability theory.',
    uk: "Симуляція відомої математичної задачі \"100 в'язнів і 100 скриньок\". Кожен в'язень має знайти свій номер у скриньках, відкриваючи не більше половини. Демонструє силу циклічних стратегій у теорії ймовірностей.",
  },
  "cc.course-ai-university.l2.p2.name": {
    en: "Apple Harvest",
    uk: "Apple Harvest",
  },
  "cc.course-ai-university.l2.p2.desc": {
    en: "A desktop browser game: collect apples while avoiding obstacles. Progressive difficulty. Implemented as a single HTML file with Canvas and vanilla JavaScript.",
    uk: "Браузерна гра для десктопа: збирайте яблука, уникаючи перешкод. Геймплей з поступовим зростанням складності. Реалізовано у вигляді одного HTML-файлу з Canvas та чистим JavaScript.",
  },
  "cc.course-ai-university.l2.p3.name": {
    en: "Axelrod Tournament",
    uk: "Axelrod Tournament",
  },
  "cc.course-ai-university.l2.p3.desc": {
    en: "An interactive simulation of the game theory paradox — Axelrod's tournament. Strategies (Tit-for-Tat, Always Defect, Random, and others) compete in the iterated prisoner's dilemma. Explore the evolution of cooperation.",
    uk: "Інтерактивна симуляція парадоксу теорії ігор — турнір Аксельрода. Стратегії (Tit-for-Tat, Always Defect, Random та інші) змагаються в ітеративній дилемі в'язня. Досліджуйте еволюцію кооперації.",
  },
  "cc.course-ai-university.l2.p4.name": {
    en: "Fisherman Game",
    uk: "Fisherman Game",
  },
  "cc.course-ai-university.l2.p4.desc": {
    en: "A desktop browser game: steer a fisherman's boat, catch fish, and avoid obstacles. Minimalist 8-bit style, implemented in a single HTML file with Canvas and vanilla JavaScript.",
    uk: "Браузерна гра для десктопа: керуйте човном рибалки, ловіть рибу та уникайте перешкод. Мінімалістичний 8-бітний стиль, реалізований в одному HTML-файлі з Canvas та чистим JavaScript.",
  },

  // Level 3
  "cc.course-ai-university.l3.title": {
    en: "Engineering task formulation: from prompt to task specification",
    uk: "Інженерна постановка задачі: від prompt до task specification",
  },
  "cc.course-ai-university.l3.p0.name": {
    en: "LocaleInfo",
    uk: "LocaleInfo",
  },
  "cc.course-ai-university.l3.p0.desc": {
    en: "A lightweight client-server web application that displays a reference table of all world locales — 197 entries with locale code, language, country, currency, TLD, flag emoji, timezone, and capital city. Instant search, dark mode, fast cold start.",
    uk: "Легкий клієнт-серверний веб-застосунок, що відображає довідкову таблицю всіх світових локалей — 197 записів із кодом локалі, мовою, країною, валютою, TLD, прапорцем-емодзі, часовим поясом та столицею. Миттєвий пошук, темна тема, швидкий запуск.",
  },
  // Level 4
  "cc.course-ai-university.l4.title": {
    en: "Acceptance criteria, verification plan, and anti-patterns of prompting",
    uk: "Критерії приймання, verification plan та анти-патерни prompting",
  },
  "cc.course-ai-university.l4.p0.name": {
    en: "Haiku 50",
    uk: "Haiku 50",
  },
  "cc.course-ai-university.l4.p0.desc": {
    en: "A minimalist web application for generating Japanese three-line poems — haiku — via the OpenAI API. The user enters keywords, selects a language (12 languages), adjusts the spice level (50 Wasabi), and gets a unique haiku. Japanese aesthetics, history of the last 100 haiku, three-tier content protection.",
    uk: "Мінімалістичний веб-застосунок для створення японських трирядкових віршів — хайку — через OpenAI API. Користувач вводить ключові слова, обирає мову (12 мов), регулює рівень «гостроти» (50 Васабі) та отримує унікальну хайку. Японська естетика, історія останніх 100 хайку, трирівневий захист контенту.",
  },
  // Level 5
  "cc.course-ai-university.l5.title": {
    en: "Context operational model: what Claude knows and how to manage it",
    uk: "Операційна модель контексту: що Claude знає і як цим керувати",
  },
  // Level 6
  "cc.course-ai-university.l6.title": {
    en: "Long tasks, checkpoints, Git recovery, and parallel sessions",
    uk: "Довгі задачі, checkpoints, Git recovery та паралельні сесії",
  },
  // Level 7
  "cc.course-ai-university.l7.title": {
    en: "Codebase analysis: discovery, evidence-based Q&A, and project map",
    uk: "Аналіз codebase: discovery, evidence-based Q&A і карта проєкту",
  },
  // Level 8
  "cc.course-ai-university.l8.title": {
    en: "Integrations, documentation, and investigation via subagents",
    uk: "Інтеграції, документація та investigation через subagents",
  },
  // Level 9
  "cc.course-ai-university.l9.title": {
    en: "Workflow extension: taxonomy, commands, and custom skills",
    uk: "Розширення workflow: taxonomy, commands і custom skills",
  },
  // Level 10
  "cc.course-ai-university.l10.title": {
    en: "Plugins, plugin ecosystem, and team-ready plugins",
    uk: "Plugins, plugin ecosystem та team-ready plugins",
  },
  "cc.course-ai-university.l10.p0.name": {
    en: "team-tools",
    uk: "team-tools",
  },
  "cc.course-ai-university.l10.p0.desc": {
    en: "A marketplace plugin catalog for Claude Code with commands: team-kit:git-commit (Conventional Commit generation) and team-kit:prompt-improve (prompt enhancement). Installed via /plugin marketplace.",
    uk: "Marketplace-каталог плагінів для Claude Code з командами: team-kit:git-commit (генерація Conventional Commits) та team-kit:prompt-improve (покращення промптів). Встановлюється через /plugin marketplace.",
  },
  // Level 11
  "cc.course-ai-university.l11.title": {
    en: "Agents and subagents: roles, boundaries, and configuration",
    uk: "Агенти й subagents: ролі, межі та конфігурація",
  },
  // Level 12
  "cc.course-ai-university.l12.title": {
    en: "Tools, permissions, context isolation, and agent lifecycle",
    uk: "Інструменти, permissions, context isolation і lifecycle агентів",
  },
  // Level 13
  "cc.course-ai-university.l13.title": {
    en: "MCP: connecting Claude Code to external tools and data",
    uk: "MCP: підключення Claude Code до зовнішніх інструментів і даних",
  },
  "cc.course-ai-university.l13.p0.name": {
    en: "Secure MCP Orchestrator",
    uk: "Secure MCP Orchestrator",
  },
  "cc.course-ai-university.l13.p0.desc": {
    en: "A security-first agent for coordinating Firecrawl, Google Docs, and Playwright MCP servers. Explores the web, documents results in Google Docs, and verifies via browser — with zero trust to external content and protection against prompt injection. Least privilege principle, confirmation gates, audit logging.",
    uk: "Security-first агент для координації Firecrawl, Google Docs та Playwright MCP-серверів. Досліджує веб, документує результати в Google Docs та верифікує через браузер — з нульовою довірою до зовнішнього контенту та захистом від prompt injection. Принцип найменших привілеїв, confirmation gates, audit logging.",
  },
  // Level 14
  "cc.course-ai-university.l14.title": {
    en: "Hooks and tool integration workflows",
    uk: "Hooks та tool integration workflows",
  },
  "cc.course-ai-university.l14.p0.name": {
    en: "HooksTest",
    uk: "HooksTest",
  },
  "cc.course-ai-university.l14.p0.desc": {
    en: "A test project for learning and demonstrating Claude Code hooks — automatic scripts for PreToolUse (blocking rm), PostToolUse, UserPromptSubmit, SessionStart, and Stop events. Configured in .claude/settings.json with various matcher rules.",
    uk: "Тестовий проєкт для вивчення та демонстрації Claude Code hooks — автоматичних скриптів на події PreToolUse (блокування rm), PostToolUse, UserPromptSubmit, SessionStart та Stop. Налаштовано у .claude/settings.json з різними matcher-правилами.",
  },
  // Level 15
  "cc.course-ai-university.l15.title": {
    en: "Multi-agent workflow: approaches, limitations, and basic orchestration patterns",
    uk: "Multi-agent workflow: підходи, обмеження та базові orchestration patterns",
  },
  "cc.course-ai-university.l15.t0": {
    en: "Parallelism levels up to agent team",
    uk: "Рівні паралельності до agent team",
  },
  // Level 16
  "cc.course-ai-university.l16.title": {
    en: "Parallel work, agent pipelines, checkpoints, and metrics",
    uk: "Паралельна робота, agent pipelines, checkpoints і метрики",
  },
  // Level 17
  "cc.course-ai-university.l17.title": {
    en: "Issue-to-PR workflow: task analysis, planning, and decomposition",
    uk: "Issue-to-PR workflow: аналіз задачі, planning і decomposition",
  },
  "cc.course-ai-university.l17.p0.name": { en: "AleksSamArt", uk: "AleksSamArt" },
  "cc.course-ai-university.l17.p0.desc": {
    en: "Multilingual portfolio for a pencil-portrait artist (celebrity portraits and custom commissions). Features an order form for a custom portrait — choosing format, price tier, and photo upload — 10 languages, and links to social media. Built with Astro.",
    uk: "Багатомовне портфоліо художниці-портретистки (олівцеві портрети знаменитостей та портрети на замовлення). Сайт із формою замовлення власного портрета — вибір формату, тарифу та завантаження фото, 10 мов, посилання на соцмережі. Побудовано на Astro.",
  },
  // Level 18
  "cc.course-ai-university.l18.title": {
    en: "Controlled implementation, debugging, commits, PR, and code review",
    uk: "Controlled implementation, debugging, commits, PR і code review",
  },
  // Level 19
  "cc.course-ai-university.l19.title": {
    en: "Testing and verification: strategy, TDD, and test levels",
    uk: "Тестування та verification: стратегія, TDD і рівні тестів",
  },
  // Level 20
  "cc.course-ai-university.l20.title": {
    en: "Static checks and safe refactoring with Claude Code",
    uk: "Static checks і безпечний refactoring з Claude Code",
  },
  // Level 21
  "cc.course-ai-university.l21.title": {
    en: "DevOps with Claude Code: environment, CI/CD, and build automation",
    uk: "DevOps із Claude Code: оточення, CI/CD та build automation",
  },
  // Level 22
  "cc.course-ai-university.l22.title": {
    en: "Quality gates, documentation, release automation, and internal tools",
    uk: "Quality gates, documentation, release automation та internal tools",
  },
  // Level 23
  "cc.course-ai-university.l23.title": {
    en: "Production readiness: risk classification, permissions, and sensitive data",
    uk: "Production readiness: risk classification, permissions і sensitive data",
  },
  // Level 24
  "cc.course-ai-university.l24.title": {
    en: "Teamwork, traceability, and AI engineering culture",
    uk: "Робота в команді, traceability та AI engineering culture",
  },
  // Level 25
  "cc.course-ai-university.l25.title": {
    en: "Capstone kickoff: final project brief, rules, and roadmap to demo",
    uk: "Capstone kickoff: видача фінального проєкту, правила роботи та roadmap до demo",
  },
  // Level 26
  "cc.course-ai-university.l26.title": {
    en: "Legacy discovery: analysis, technical debt, documentation, and risk map",
    uk: "Legacy discovery: аналіз, technical debt, документація та risk map",
  },
  // Level 27
  "cc.course-ai-university.l27.title": {
    en: "Legacy modernization: baseline, incremental refactoring, and roadmap",
    uk: "Legacy modernization: baseline, incremental refactoring та roadmap",
  },
  // Level 28
  "cc.course-ai-university.l28.title": {
    en: "Migrations: difference from modernization, discovery, and compatibility analysis",
    uk: "Міграції: відмінність від modernization, discovery і compatibility analysis",
  },
  // Level 29
  "cc.course-ai-university.l29.title": {
    en: "Migration execution: risk management, validation, and migration types",
    uk: "Migration execution: risk management, validation та типи міграцій",
  },
  // Level 30
  "cc.course-ai-university.l30.title": {
    en: "AI-native MVP: idea, user, scope, and specification",
    uk: "AI-native MVP: ідея, користувач, scope і специфікація",
  },
  // Level 31
  "cc.course-ai-university.l31.title": {
    en: "MVP execution: controlled vibe coding, demo readiness, and capstone handoff",
    uk: "MVP execution: controlled vibe coding, demo readiness та capstone handoff",
  },
  // Level 32
  "cc.course-ai-university.l32.title": {
    en: "Capstone demo: project defense, evaluation criteria, and portfolio packaging",
    uk: "Capstone demo: захист проєкту, критерії оцінювання та portfolio packaging",
  },
  // Level 33
  "cc.course-ai-university.l33.title": {
    en: "Career Launch: AI-native proof-of-work, professional story, and credible resume",
    uk: "Career Launch: AI-native proof-of-work, professional story і credible resume",
  },
  // Level 34
  "cc.course-ai-university.l34.title": {
    en: "AI-assisted job search: vacancies, tailoring, tracker, and interview prep",
    uk: "AI-assisted job search: вакансії, tailoring, tracker та interview prep",
  },
};