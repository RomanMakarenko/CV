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
  "cc.course-ai-academy.name": {
    en: "Ciklum AI Academy",
    uk: "Академія AI від Ciklum",
  },
  "cc.course-ai-academy.desc": {
    en: "A mentor-led AI Academy covering AI fundamentals, practical GenAI tools, responsible AI, and hands-on assignments for applying AI at work.",
    uk: "Академія AI — це навчальна програма з менторським супроводом, що охоплює основи AI, практичні інструменти GenAI, відповідальний AI та практичні завдання для застосування AI у роботі.",
  },
  "cc.course-ai-academy.l1.title": { en: "Basics", uk: "Основи" },
  "cc.course-ai-academy.l1.t0": { en: "Intro to AI world: Data Science, ML, DL and GenAI", uk: "Вступ до світу AI: Data Science, ML, DL та GenAI" },
  "cc.course-ai-academy.l1.t1": { en: "Key Concepts in Data Science & ML", uk: "Ключові поняття Data Science та ML" },
  "cc.course-ai-academy.l1.t2": { en: "Core Concepts & Terminology in GenAI", uk: "Основні поняття та термінологія GenAI" },
  "cc.course-ai-academy.l1.t3": { en: "AI Tools & Productivity", uk: "AI-інструменти та продуктивність" },
  "cc.course-ai-academy.l1.t4": { en: "GenAI in the SDLC", uk: "GenAI у життєвому циклі розробки програмного забезпечення" },
  "cc.course-ai-academy.l1.t5": { en: "Enterprise Data Privacy", uk: "Конфіденційність корпоративних даних" },
  "cc.course-ai-academy.l2.title": { en: "No/Low Code for GenAI", uk: "No/Low Code для GenAI" },
  "cc.course-ai-academy.l2.t0": { en: "Vibe Coding platforms: Lovable, Lyzr, n8n, Firebase, Bolt", uk: "Платформи для Vibe Coding: Lovable, Lyzr, n8n, Firebase, Bolt" },
  "cc.course-ai-academy.l3.title": { en: "Neural Networks", uk: "Нейронні мережі" },
  "cc.course-ai-academy.l3.t0": { en: "Intro: neurons, neural networks, learning in machines, use cases", uk: "Вступ: нейрони, нейронні мережі, навчання машин і приклади застосування" },
  "cc.course-ai-academy.l3.t1": { en: "Architecture: activations, weights, bias, quantization, training, testing, inference, and visualizations", uk: "Архітектура: функції активації, ваги, зміщення, квантування, навчання, тестування, інференс і візуалізації" },
  "cc.course-ai-academy.l3.p0.name": {
    en: "Module 2: Neural Networks",
    uk: "Модуль 2: Нейронні мережі",
  },
  "cc.course-ai-academy.l3.p0.desc": {
    en: "Explore TensorFlow Neural Network Playground with Spiral classification. Compare 1×4 ReLU, 3×8 ReLU, and 3×8 Sigmoid networks, and interpret training and test loss to observe the impact of network architecture and activation functions.",
    uk: "Дослідження TensorFlow Neural Network Playground із класифікацією Spiral. Порівняння мереж 1×4 ReLU, 3×8 ReLU та 3×8 Sigmoid і аналіз training та test loss, щоб спостерігати вплив архітектури мережі й функцій активації.",
  },
  "cc.course-ai-academy.l3.p1.name": {
    en: "Practical Work 2: PyTorch Neural Network",
    uk: "Практична робота №2: нейронна мережа на PyTorch",
  },
  "cc.course-ai-academy.l3.p1.desc": {
    en: "Build and train a feedforward PyTorch classifier on a synthetic Two Moons dataset. Document preprocessing, the 2 → 16 → 8 → 1 MLP architecture, evaluation, sample inference, and reflection.",
    uk: "Створення та навчання feedforward-класифікатора на PyTorch для синтетичного датасету Two Moons із документацією підготовки даних, архітектури MLP 2 → 16 → 8 → 1, оцінювання, інференсу та рефлексії.",
  },
  "cc.course-ai-academy.l4.title": { en: "LLMs & LMMs", uk: "LLM та LMM" },
  "cc.course-ai-academy.l4.t0": { en: "LLM overview and use cases", uk: "Огляд LLM і приклади їх застосування" },
  "cc.course-ai-academy.l4.t1": { en: "How LLMs are built: transformers, attention, and the mathematics behind LLMs", uk: "Як створюються LLM: трансформери, механізм уваги та математика, що лежить в основі LLM" },
  "cc.course-ai-academy.l4.t2": { en: "Architecture, fine-tuning, inference, operations, context windows, and token budgets", uk: "Архітектура, донавчання, інференс, експлуатація, контекстні вікна та бюджети токенів" },
  "cc.course-ai-academy.l4.t3": { en: "Models and services overview: text, reasoning, and multimodal models", uk: "Огляд моделей і сервісів: текстові, міркувальні та мультимодальні моделі" },
  "cc.course-ai-academy.l5.title": { en: "RAG", uk: "RAG" },
  "cc.course-ai-academy.l5.t0": { en: "RAG fundamentals, use cases, and limitations", uk: "Основи RAG, приклади застосування та обмеження" },
  "cc.course-ai-academy.l5.t1": { en: "Embeddings, semantic distance, vector databases, and graph databases", uk: "Ембеддинги, семантична відстань, векторні та графові бази даних" },
  "cc.course-ai-academy.l5.t2": { en: "Data chunking, advanced retrieval, tool use, reasoning, context awareness, history management, and token budgets", uk: "Поділ даних на фрагменти, розширений пошук, використання інструментів, міркування, робота з контекстом, керування історією та бюджети токенів" },
  "cc.course-ai-academy.l5.t3": { en: "Productized and enterprise RAG: repositories, products, limitations, and considerations", uk: "Продуктовий і корпоративний RAG: репозиторії, продукти, обмеження та ключові аспекти" },
  "cc.course-ai-academy.l6.title": { en: "Agentic AI", uk: "Агентний AI" },
  "cc.course-ai-academy.l6.t0": { en: "Agentic AI definition and landscape", uk: "Визначення агентного AI та огляд галузі" },
  "cc.course-ai-academy.l6.t1": { en: "Agentic workflow orchestration platforms and use cases", uk: "Платформи оркестрації агентних робочих процесів і приклади застосування" },
  "cc.course-ai-academy.l6.t2": { en: "Agentic architecture: design patterns, perception, reasoning, actions, interfaces, protocols, scalability, security, performance, observability, MCP, and A2A", uk: "Архітектура агентних систем: шаблони проєктування, сприйняття, міркування, дії, інтерфейси, протоколи, масштабованість, безпека, продуктивність, спостережуваність, MCP та A2A" },
  "cc.course-ai-academy.l7.title": { en: "Coding with AI", uk: "Програмування з AI" },
  "cc.course-ai-academy.l7.t0": { en: "GenAI tools for developers: Copilot, Sourcegraph, CustomGPT, Cursor, and Vibe Coding", uk: "Інструменти GenAI для розробників: Copilot, Sourcegraph, CustomGPT, Cursor та Vibe Coding" },
  "cc.course-ai-academy.l8.title": { en: "No/Low Code for GenAI: Conversational Agents", uk: "No/Low Code для GenAI: розмовні агенти" },
  "cc.course-ai-academy.l8.t0": { en: "Kore.ai, Boost.ai, and challenges in conversational AI", uk: "Kore.ai, Boost.ai та виклики розмовного AI" },
  "cc.course-ai-academy.l9.title": { en: "Cloud", uk: "Хмарні сервіси" },
  "cc.course-ai-academy.l9.t0": { en: "Azure AI Services", uk: "AI-сервіси Azure" },
  "cc.course-ai-academy.l9.t1": { en: "AWS AI Services", uk: "AI-сервіси AWS" },
  "cc.course-ai-academy.l9.t2": { en: "Google AI Services", uk: "AI-сервіси Google" },
  "cc.course-ai-academy.l10.title": { en: "Responsible AI and Privacy", uk: "Відповідальний AI та конфіденційність" },
  "cc.course-ai-academy.l10.t0": { en: "Data privacy in GenAI", uk: "Конфіденційність даних у GenAI" },
  "cc.course-ai-academy.l10.t1": { en: "Responsible AI", uk: "Відповідальний AI" },
  "cc.course-ai-academy.l10.t2": { en: "Ethical considerations", uk: "Етичні аспекти" },
  "cc.course-ai-academy.l11.title": { en: "AI in Software Delivery", uk: "AI у розробці програмного забезпечення" },
  "cc.course-ai-academy.l11.t0": { en: "Modern approaches to working with documentation, backlogs, and code", uk: "Сучасні підходи до роботи з документацією, беклогами та кодом" },
  "cc.course-ai-academy.l12.title": { en: "Advanced AI Systems", uk: "Розширені AI-системи" },
  "cc.course-ai-academy.l12.t0": { en: "Deep learning, LLM operations, RAG architecture, and agent design patterns", uk: "Глибоке навчання, експлуатація LLM, архітектура RAG та шаблони проєктування агентів" },
  "cc.course-ai-academy.l13.title": { en: "AI Services and Integration", uk: "AI-сервіси та інтеграція" },
  "cc.course-ai-academy.l13.t0": { en: "Practical use of AI services and integration patterns for engineering teams", uk: "Практичне використання AI-сервісів і шаблони інтеграції для інженерних команд" },
  "cc.course-ai-academy.l14.title": { en: "Practical Application", uk: "Практичне застосування" },
  "cc.course-ai-academy.l14.t0": { en: "Apply AI tools to real-world work scenarios and document the takeaways", uk: "Застосування AI-інструментів у реальних робочих сценаріях і документування отриманих результатів" },
  "cc.course-ai-academy.l15.title": { en: "Final Learning Journey", uk: "Підсумковий навчальний шлях" },
  "cc.course-ai-academy.l15.t0": { en: "Consolidate learning, practical assignments, and next steps for continued AI adoption", uk: "Закріплення знань, практичні завдання та наступні кроки для подальшого впровадження AI" },
};