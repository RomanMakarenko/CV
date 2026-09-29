export interface AILessonTranslation {
    uk: string;
    en: string;
}

export const AI_UNIVERSITY_LEVEL_TITLES: Record<number, { uk: string; en: string }> = {
    "1": {
        "uk": "Старт із Claude Code",
        "en": "Getting started with Claude Code"
    },
    "2": {
        "uk": "Безпечний старт проєкту",
        "en": "Safe project start"
    },
    "3": {
        "uk": "Інженерна постановка задачі",
        "en": "Engineering task definition"
    },
    "4": {
        "uk": "Критерії приймання та verification",
        "en": "Acceptance criteria and verification"
    },
    "5": {
        "uk": "Операційна модель контексту",
        "en": "The operational context model"
    },
    "6": {
        "uk": "Довгі задачі та recovery",
        "en": "Long tasks and recovery"
    },
    "7": {
        "uk": "Аналіз codebase",
        "en": "Codebase discovery"
    },
    "8": {
        "uk": "Інтеграції та документація",
        "en": "Integrations and documentation"
    },
    "9": {
        "uk": "Розширення workflow",
        "en": "Workflow extensions"
    },
    "10": {
        "uk": "Plugins і командні workflow",
        "en": "Plugins and team workflows"
    },
    "11": {
        "uk": "Агенти й subagents",
        "en": "Agents and subagents"
    },
    "12": {
        "uk": "Інструменти та ізоляція агентів",
        "en": "Agent tools and isolation"
    },
    "13": {
        "uk": "MCP та зовнішні інтеграції",
        "en": "MCP and external integrations"
    },
    "14": {
        "uk": "Hooks та tool workflows",
        "en": "Hooks and tool workflows"
    },
    "15": {
        "uk": "Multi-agent workflow",
        "en": "Multi-agent workflow"
    },
    "16": {
        "uk": "Паралельні workstreams",
        "en": "Parallel workstreams"
    },
    "17": {
        "uk": "Issue-to-PR workflow",
        "en": "Issue-to-PR workflow"
    },
    "18": {
        "uk": "Керована реалізація та review",
        "en": "Controlled implementation and review"
    },
    "19": {
        "uk": "Тестування та verification",
        "en": "Testing and verification"
    },
    "20": {
        "uk": "Static checks і безпечний refactoring",
        "en": "Static checks and safe refactoring"
    },
    "21": {
        "uk": "DevOps із Claude Code: оточення, CI/CD та build automation",
        "en": "DevOps with Claude Code"
    },
    "22": {
        "uk": "Quality gates, документація та release automation",
        "en": "Quality gates and release automation"
    },
    "23": {
        "uk": "Production readiness: risk, permissions і sensitive data",
        "en": "Production readiness and risk"
    },
    "24": {
        "uk": "Командна traceability та AI engineering culture",
        "en": "Team traceability and AI engineering culture"
    },
    "25": {
        "uk": "Capstone: фінальний проєкт і demo",
        "en": "Capstone project and demo"
    },
    "26": {
        "uk": "Legacy discovery, technical debt і карта ризиків",
        "en": "Legacy discovery and risk mapping"
    },
    "27": {
        "uk": "Legacy modernization: baseline, incremental refactoring та roadmap",
        "en": "Legacy modernization"
    },
    "28": {
        "uk": "Міграції: відмінність від modernization, discovery і compatibility analysis",
        "en": "Migration discovery and compatibility"
    },
    "29": {
        "uk": "Migration execution: risk management, validation та типи міграцій",
        "en": "Migration execution and validation"
    },
    "30": {
        "uk": "AI-native MVP: ідея, користувач, scope і специфікація",
        "en": "AI-native MVP"
    },
    "31": {
        "uk": "MVP execution: controlled vibe coding, demo readiness та capstone handoff",
        "en": "MVP execution and capstone handoff"
    },
    "32": {
        "uk": "Capstone demo: захист проєкту, критерії оцінювання та portfolio packaging",
        "en": "Capstone defense and portfolio packaging"
    },
    "33": {
        "uk": "Career Launch: AI-native proof-of-work, professional story і credible resume",
        "en": "Career launch and AI-native proof of work"
    },
    "34": {
        "uk": "AI-assisted job search: вакансії, tailoring, tracker та interview prep",
        "en": "AI-assisted job search: roles, tailoring, tracking, and interview preparation"
    }
};

export const AI_UNIVERSITY_LESSONS: Record<number, AILessonTranslation[]> = {
    "1": [
        {
            "uk": "Claude Code: agentic середовище для програмування",
            "en": "Agentic Environment — Claude Code Guide"
        },
        {
            "uk": "Карта поверхонь і робочого процесу курсу",
            "en": "Surfaces And Workflow — Claude Code Guide"
        },
        {
            "uk": "Встановлення, авторизація, оновлення та діагностика",
            "en": "Install Auth Update — Claude Code Guide"
        },
        {
            "uk": "Команди запуску та команди в сесії",
            "en": "Launch And Session Commands — Claude Code Guide"
        },
        {
            "uk": "Інтеграція з IDE: grounding і ревʼю",
            "en": "Ide Grounding And Review — Claude Code Guide"
        }
    ],
    "2": [
        {
            "uk": "Стартовий ритуал і Git baseline",
            "en": "Git Baseline — Claude Code Guide"
        },
        {
            "uk": "Ієрархія налаштувань і .claude каталог",
            "en": "Settings Hierarchy — Claude Code Guide"
        },
        {
            "uk": "Режими дозволів і модель підтверджень",
            "en": "Permissions And Confirmations — Claude Code Guide"
        },
        {
            "uk": "CLAUDE.md, rules і auto memory",
            "en": "Claude Md Rules Memory — Claude Code Guide"
        },
        {
            "uk": "Використання, гігієна та безпечна ментальна модель",
            "en": "Safe Mental Model — Claude Code Guide"
        }
    ],
    "3": [
        {
            "uk": "Від prompting до task spec: як перетворити розпливчасте прохання на інженерне формулювання задачі",
            "en": "Prompt To Task Spec — Claude Code Guide"
        },
        {
            "uk": "Перевірюваний цільовий результат: Goal",
            "en": "Goal — Claude Code Guide"
        },
        {
            "uk": "Current vs desired behavior: мова фактів",
            "en": "Current Vs Desired — Claude Code Guide"
        },
        {
            "uk": "Scope, non-goals і affected area",
            "en": "Scope And Non Goals — Claude Code Guide"
        },
        {
            "uk": "Обмеження та межі змін",
            "en": "Constraints And Boundaries — Claude Code Guide"
        }
    ],
    "4": [
        {
            "uk": "Джерела контексту і пакет доказів",
            "en": "Context And Evidence — Claude Code Guide"
        },
        {
            "uk": "Критерії приймання",
            "en": "Acceptance Criteria — Claude Code Guide"
        },
        {
            "uk": "Готовність задачі та план перевірки",
            "en": "Readiness And Verification — Claude Code Guide"
        },
        {
            "uk": "Робочий процес plan-first і review-first",
            "en": "Plan First Review First — Claude Code Guide"
        },
        {
            "uk": "Ітерація промптів і антипатерни",
            "en": "Prompt Iteration — Claude Code Guide"
        }
    ],
    "5": [
        {
            "uk": "Operational model: як влаштовано контекст Claude",
            "en": "Context Operational Model — Claude Code Guide"
        },
        {
            "uk": "Вибір контексту: контекст як бюджет",
            "en": "Context As Budget — Claude Code Guide"
        },
        {
            "uk": "Бюджет контексту, /context і compaction",
            "en": "Context Budget And Compaction — Claude Code Guide"
        },
        {
            "uk": "Context pollution і дії відновлення",
            "en": "Context Pollution Recovery — Claude Code Guide"
        },
        {
            "uk": "Життєвий цикл сесії: контейнер задачі",
            "en": "Session Lifecycle — Claude Code Guide"
        }
    ],
    "6": [
        {
            "uk": "Довгі задачі без безкінечного чату",
            "en": "Long Tasks — Claude Code Guide"
        },
        {
            "uk": "Checkpoints і /rewind: відкат сесії",
            "en": "Checkpoints And Rewind — Claude Code Guide"
        },
        {
            "uk": "Спочатку зупинити лавину, потім лікувати",
            "en": "Git First Recovery — Claude Code Guide"
        },
        {
            "uk": "Паралельні сесії та worktree",
            "en": "Parallel Sessions And Worktree — Claude Code Guide"
        },
        {
            "uk": "Handoff Note та Fresh Reviewer Pattern",
            "en": "Handoff And Fresh Reviewer — Claude Code Guide"
        }
    ],
    "7": [
        {
            "uk": "Discovery в незнайомому репозиторії",
            "en": "Discovery — Claude Code Guide"
        },
        {
            "uk": "Evidence-based Q&A щодо codebase",
            "en": "Evidence Based Qa — Claude Code Guide"
        },
        {
            "uk": "CODEBASE_INVENTORY.md — карта проєкту",
            "en": "Codebase Inventory — Claude Code Guide"
        },
        {
            "uk": "Карта залежностей і карта модулів проєкту",
            "en": "Module Dependencies — Claude Code Guide"
        },
        {
            "uk": "Потік виконання та точки входу",
            "en": "Runtime Flow — Claude Code Guide"
        }
    ],
    "8": [
        {
            "uk": "Карта API та інтеграцій проєкту",
            "en": "Api Map And Integrations — Claude Code Guide"
        },
        {
            "uk": "IDE, термінал і логи як докази",
            "en": "Ide Terminal And Logs — Claude Code Guide"
        },
        {
            "uk": "Subagents: тихе розслідування",
            "en": "Subagents Investigation — Claude Code Guide"
        },
        {
            "uk": "Документація за підтримки AI",
            "en": "Ai Assisted Documentation — Claude Code Guide"
        },
        {
            "uk": "Рубрика ревʼю docs-as-code",
            "en": "Docs As Code Review — Claude Code Guide"
        }
    ],
    "9": [
        {
            "uk": "Таксономія розширень: карта розширень",
            "en": "Extension Taxonomy — Claude Code Guide"
        },
        {
            "uk": "Вбудовані команди й bundled skills",
            "en": "Built In Commands And Skills — Claude Code Guide"
        },
        {
            "uk": "Custom skills як workflow-артефакти",
            "en": "Custom Skills — Claude Code Guide"
        },
        {
            "uk": "SKILL.md: анатомія і виклик skill",
            "en": "Skill Md Anatomy — Claude Code Guide"
        },
        {
            "uk": "Dynamic context і якість skill",
            "en": "Dynamic Context And Quality — Claude Code Guide"
        }
    ],
    "10": [
        {
            "uk": "Від skill до plugin: пакування workflow",
            "en": "Skill To Plugin — Claude Code Guide"
        },
        {
            "uk": "Екосистема плагінів: категорії та вибір",
            "en": "Plugin Ecosystem — Claude Code Guide"
        },
        {
            "uk": "Встановлення plugin: scope і lifecycle",
            "en": "Plugin Scope And Lifecycle — Claude Code Guide"
        },
        {
            "uk": "Перевірка plugin: що встановлювати і чому",
            "en": "Plugin Verification — Claude Code Guide"
        },
        {
            "uk": "Користувацький плагін: прототип, готовий для команди",
            "en": "Team Ready Plugin — Claude Code Guide"
        }
    ],
    "11": [
        {
            "uk": "Термінологія агентів у Claude Code",
            "en": "Agent Terminology — Claude Code Guide"
        },
        {
            "uk": "Вбудовані subagents і делегування",
            "en": "Built In Subagents And Delegation — Claude Code Guide"
        },
        {
            "uk": "Устрій кастомного subagent",
            "en": "Custom Subagent Structure — Claude Code Guide"
        },
        {
            "uk": "Engineering contract в інструкції агента",
            "en": "Agent Engineering Contract — Claude Code Guide"
        },
        {
            "uk": "Ролі агентів і 3-шарова модель review",
            "en": "Agent Roles And Review Layers — Claude Code Guide"
        }
    ],
    "12": [
        {
            "uk": "Інструменти й дозволи для subagent",
            "en": "Subagent Tools And Permissions — Claude Code Guide"
        },
        {
            "uk": "Scoped skills, MCP і memory",
            "en": "Scoped Skills Mcp And Memory — Claude Code Guide"
        },
        {
            "uk": "Context isolation і worktree isolation",
            "en": "Context And Worktree Isolation — Claude Code Guide"
        },
        {
            "uk": "Контракт результату агента",
            "en": "Agent Output Contract — Claude Code Guide"
        },
        {
            "uk": "Життєвий цикл і оцінювання subagentʼа",
            "en": "Subagent Lifecycle And Evaluation — Claude Code Guide"
        }
    ],
    "13": [
        {
            "uk": "MCP як зовнішній шар для Claude Code",
            "en": "Mcp As External Layer — Claude Code Guide"
        },
        {
            "uk": "Правило «спочатку вручну» для MCP",
            "en": "Manual First Mcp — Claude Code Guide"
        },
        {
            "uk": "MCP-сервери та сценарії розробника",
            "en": "Mcp Servers And Developer Scenarios — Claude Code Guide"
        },
        {
            "uk": "Конфіг MCP: transport, scope, auth, /mcp",
            "en": "Mcp Config And Status — Claude Code Guide"
        },
        {
            "uk": "Межі MCP: 4 зони ризику",
            "en": "Mcp Risk Boundaries — Claude Code Guide"
        }
    ],
    "14": [
        {
            "uk": "Попередня перевірка можливостей tool для MCP",
            "en": "Tool Capability Preflight — Claude Code Guide"
        },
        {
            "uk": "Інтеграція інструментів: шість сценаріїв",
            "en": "Tool Integration Scenarios — Claude Code Guide"
        },
        {
            "uk": "Hooks: event, matcher і handler",
            "en": "Hook Event Matcher Handler — Claude Code Guide"
        },
        {
            "uk": "Automation hooks: сходи розгортання",
            "en": "Automation Hook Ladder — Claude Code Guide"
        },
        {
            "uk": "Hook debugging, побічні ефекти та відновлення",
            "en": "Hook Debugging And Recovery — Claude Code Guide"
        }
    ],
    "15": [
        {
            "uk": "Рівні паралельності до agent team",
            "en": "Parallelism Before Agent Teams — Claude Code Guide"
        },
        {
            "uk": "Multi-agent: правила й антикритерії",
            "en": "Multi Agent Rules And Anti Criteria — Claude Code Guide"
        },
        {
            "uk": "Команди агентів: можливості й обмеження",
            "en": "Agent Team Capabilities And Limits — Claude Code Guide"
        },
        {
            "uk": "Оркестраційні патерни та суміжні поняття",
            "en": "Orchestration Patterns — Claude Code Guide"
        },
        {
            "uk": "Делегування і межі відповідальності",
            "en": "Delegation And Ownership Boundaries — Claude Code Guide"
        }
    ],
    "16": [
        {
            "uk": "Worktree workstreams: запуск і cleanup",
            "en": "Worktree Workstreams And Cleanup — Claude Code Guide"
        },
        {
            "uk": "Agent pipeline: артефакти між етапами",
            "en": "Agent Pipeline Artifacts — Claude Code Guide"
        },
        {
            "uk": "Конфлікти та стратегія злиття треків",
            "en": "Track Conflicts And Merge Strategy — Claude Code Guide"
        },
        {
            "uk": "3-layer review і людські контрольні точки",
            "en": "Three Layer Review And Checkpoints — Claude Code Guide"
        },
        {
            "uk": "Метрики користі AI-workflow",
            "en": "Ai Workflow Usefulness Metrics — Claude Code Guide"
        }
    ],
    "17": [
        {
            "uk": "Issue-to-PR workflow: від тикета до плану",
            "en": "Issue To Plan — Claude Code Guide"
        },
        {
            "uk": "Issue Intake Note: розбір тікета",
            "en": "Issue Intake Note — Claude Code Guide"
        },
        {
            "uk": "Дослідження issue у режимі планування",
            "en": "Issue Planning Research — Claude Code Guide"
        },
        {
            "uk": "План реалізації: ризики та перевірки",
            "en": "Implementation Plan Risks And Checks — Claude Code Guide"
        },
        {
            "uk": "Декомпозиція задачі на PR slices",
            "en": "Pr Slice Decomposition — Claude Code Guide"
        }
    ],
    "18": [
        {
            "uk": "Керований цикл реалізації",
            "en": "Controlled Implementation Loop — Claude Code Guide"
        },
        {
            "uk": "Налагодження й аналіз першопричини",
            "en": "Debugging And Root Cause — Claude Code Guide"
        },
        {
            "uk": "Виправлення помилок і regression evidence",
            "en": "Bugfix And Regression Evidence — Claude Code Guide"
        },
        {
            "uk": "Дисципліна комітів і упаковка PR",
            "en": "Commit Discipline And Pr — Claude Code Guide"
        },
        {
            "uk": "Перевірка на основі diff: L1 review",
            "en": "Diff Based L1 Review — Claude Code Guide"
        }
    ],
    "19": [
        {
            "uk": "Стратегія тестування і risk-based testing",
            "en": "Test Strategy And Risk — Claude Code Guide"
        },
        {
            "uk": "AI-assisted test generation і TDD-цикл",
            "en": "Ai Assisted Tdd — Claude Code Guide"
        },
        {
            "uk": "Unit-, integration- і API-тести",
            "en": "Unit Integration Api Tests — Claude Code Guide"
        },
        {
            "uk": "E2E, smoke і regression tests",
            "en": "E2e Smoke Regression — Claude Code Guide"
        },
        {
            "uk": "Тестові дані, граничні випадки та ревʼю якості",
            "en": "Test Data Edge Cases Review — Claude Code Guide"
        }
    ],
    "20": [
        {
            "uk": "Verification harness: сенсори",
            "en": "Verification Harness — Claude Code Guide"
        },
        {
            "uk": "Рефакторинг і збереження поведінки",
            "en": "Refactoring And Behavior — Claude Code Guide"
        },
        {
            "uk": "Легка характеризація",
            "en": "Lightweight Characterization — Claude Code Guide"
        },
        {
            "uk": "Безпечний інкрементальний цикл рефакторингу",
            "en": "Incremental Refactoring Loop — Claude Code Guide"
        },
        {
            "uk": "Архітектурний рефакторинг і приймання PR",
            "en": "Architectural Refactoring Pr — Claude Code Guide"
        }
    ],
    "21": [
        {
            "uk": "Claude Code у non-interactive mode",
            "en": "Claude Code Non Interactive — Claude Code Guide"
        },
        {
            "uk": "Діагностика середовища",
            "en": "Environment Diagnostics — Claude Code Guide"
        },
        {
            "uk": "GitHub Actions: переносна схема CI",
            "en": "Github Actions Ci — Claude Code Guide"
        },
        {
            "uk": "Автоматизація build і packaging",
            "en": "Build And Packaging — Claude Code Guide"
        },
        {
            "uk": "Тести в CI та розбір падінь",
            "en": "Ci Tests And Failure Analysis — Claude Code Guide"
        }
    ],
    "22": [
        {
            "uk": "Quality gate як межа рішення",
            "en": "Quality Gates — Claude Code Guide"
        },
        {
            "uk": "Документація як docs-as-code артефакт",
            "en": "Docs As Code — Claude Code Guide"
        },
        {
            "uk": "Release automation і межа дій",
            "en": "Release Automation Boundaries — Claude Code Guide"
        },
        {
            "uk": "Скрипт, skill, MCP або plugin",
            "en": "Script Skill Mcp Plugin — Claude Code Guide"
        },
        {
            "uk": "Відновлення після збоїв автоматизації",
            "en": "Automation Recovery — Claude Code Guide"
        }
    ],
    "23": [
        {
            "uk": "Ризик-класифікація і capability envelope",
            "en": "Risk Classification And Envelope — Claude Code Guide"
        },
        {
            "uk": "L3 дозволи і protected paths",
            "en": "L3 Permissions And Protected Paths — Claude Code Guide"
        },
        {
            "uk": "Чутливі дані та секрети",
            "en": "Sensitive Data And Secrets — Claude Code Guide"
        },
        {
            "uk": "Пісочниця для ризикованих операцій",
            "en": "Sandbox For Risky Operations — Claude Code Guide"
        },
        {
            "uk": "Межі деплою та Layer 3 approval",
            "en": "Deployment Boundary And L3 Approval — Claude Code Guide"
        }
    ],
    "24": [
        {
            "uk": "Гейт виробничих рішень команди",
            "en": "Production Decision Gate — Claude Code Guide"
        },
        {
            "uk": "Аудитованість і відстежуваність змін",
            "en": "Auditability And Traceability — Claude Code Guide"
        },
        {
            "uk": "Політика AI-кодування команди",
            "en": "Ai Coding Policy — Claude Code Guide"
        },
        {
            "uk": "Командне керування та спільні workflow-активи",
            "en": "Shared Workflow Assets — Claude Code Guide"
        },
        {
            "uk": "Культура AI-інжинірингу: 6 принципів",
            "en": "Ai Engineering Culture — Claude Code Guide"
        }
    ],
    "25": [
        {
            "uk": "Capstone brief і шість форматів проєкту",
            "en": "Capstone Brief And Formats — Claude Code Guide"
        },
        {
            "uk": "Рівневі очікування та guardrails",
            "en": "Expectations And Guardrails — Claude Code Guide"
        },
        {
            "uk": "SPEC.md як контракт довгої задачі",
            "en": "Spec As Long Task Contract — Claude Code Guide"
        },
        {
            "uk": "Репозиторій і стартова база capstone",
            "en": "Repository And Capstone Baseline — Claude Code Guide"
        },
        {
            "uk": "Дорожня карта capstone і критерії оцінювання",
            "en": "Capstone Roadmap And Evaluation — Claude Code Guide"
        }
    ],
    "26": [
        {
            "uk": "Legacy discovery: оцінка change risk",
            "en": "Legacy Change Risk — Claude Code Guide"
        },
        {
            "uk": "Технічний борг і static signals",
            "en": "Technical Debt Static Signals — Claude Code Guide"
        },
        {
            "uk": "Документ how it works today для legacy",
            "en": "How It Works Today — Claude Code Guide"
        },
        {
            "uk": "Legacy risk map: карта рішень",
            "en": "Legacy Risk Map — Claude Code Guide"
        },
        {
            "uk": "Інвентаризація поведінки перед змінами",
            "en": "Behavior Inventory — Claude Code Guide"
        }
    ],
    "27": [
        {
            "uk": "Safety baseline для модернізації модуля",
            "en": "Safety Baseline — Claude Code Guide"
        },
        {
            "uk": "Інкрементальний рефакторинг legacy-модуля",
            "en": "Incremental Refactoring — Claude Code Guide"
        },
        {
            "uk": "Декомпозиція legacy-модуля: seam-розрізи",
            "en": "Seam Decomposition — Claude Code Guide"
        },
        {
            "uk": "Strangler Fig: підміна фрагмента legacy-коду",
            "en": "Strangler Fig Slice — Claude Code Guide"
        },
        {
            "uk": "Дорожня карта модернізації та анти-патерни",
            "en": "Modernization Roadmap — Claude Code Guide"
        }
    ],
    "28": [
        {
            "uk": "Рефакторинг, модернізація, міграція",
            "en": "Refactoring Modernization Migration — Claude Code Guide"
        },
        {
            "uk": "Migration discovery і точка старту",
            "en": "Migration Discovery Starting Point — Claude Code Guide"
        },
        {
            "uk": "Дослідження на основі changelog для міграції",
            "en": "Changelog Research For Migration — Claude Code Guide"
        },
        {
            "uk": "Граф залежностей і матриця сумісності",
            "en": "Dependency Graph Compatibility Matrix — Claude Code Guide"
        },
        {
            "uk": "Контракт поведінки та пофазний план",
            "en": "Behavior Contract Phased Plan — Claude Code Guide"
        }
    ],
    "29": [
        {
            "uk": "Pilot slice і branch workflow",
            "en": "Pilot Slice Branch Workflow — Claude Code Guide"
        },
        {
            "uk": "Rollback-план як передумова для pilot-зрізу",
            "en": "Rollback Plan Pilot Prerequisite — Claude Code Guide"
        },
        {
            "uk": "Доказ паритету поведінки",
            "en": "Behavior Parity Evidence — Claude Code Guide"
        },
        {
            "uk": "Карта типів міграцій",
            "en": "Migration Types Map — Claude Code Guide"
        },
        {
            "uk": "Міграції даних і конфігурації",
            "en": "Data Configuration Migrations — Claude Code Guide"
        }
    ],
    "30": [
        {
            "uk": "AI-native MVP-мислення",
            "en": "Ai Native Mvp Thinking — Claude Code Guide"
        },
        {
            "uk": "Ціннісна пропозиція для capstone-проєкту",
            "en": "Value Proposition Capstone — Claude Code Guide"
        },
        {
            "uk": "Користувач, JTBD і метрика успіху",
            "en": "User Jtbd Success Metric — Claude Code Guide"
        },
        {
            "uk": "Scope, non-goals і release slice для MVP",
            "en": "Scope Non Goals Release Slice — Claude Code Guide"
        },
        {
            "uk": "Специфікація для reviewer'а",
            "en": "Reviewer Specification — Claude Code Guide"
        }
    ],
    "31": [
        {
            "uk": "Controlled vibe coding і small diff",
            "en": "Controlled Vibe Coding Small Diff — Claude Code Guide"
        },
        {
            "uk": "Implementation sprint як delivery",
            "en": "Implementation Sprint Delivery — Claude Code Guide"
        },
        {
            "uk": "Demo quality gates для capstone",
            "en": "Demo Quality Gates Capstone — Claude Code Guide"
        },
        {
            "uk": "Готовність до демо та розгортання",
            "en": "Demo And Deployment Readiness — Claude Code Guide"
        },
        {
            "uk": "Пакет handoff для захисту capstone",
            "en": "Capstone Defense Handoff — Claude Code Guide"
        }
    ],
    "32": [
        {
            "uk": "Submission package і repro audit",
            "en": "Submission Package Repro Audit — Claude Code Guide"
        },
        {
            "uk": "Наратив захисту без хаосу",
            "en": "Defense Narrative Without Chaos — Claude Code Guide"
        },
        {
            "uk": "Критерії оцінювання capstone",
            "en": "Capstone Evaluation Criteria — Claude Code Guide"
        },
        {
            "uk": "Mentor review і remediation backlog",
            "en": "Mentor Review Remediation Backlog — Claude Code Guide"
        },
        {
            "uk": "Упаковка capstone після ревʼю",
            "en": "Capstone Portfolio Packaging — Claude Code Guide"
        }
    ],
    "33": [
        {
            "uk": "AI-native позиціонування: owner, не user",
            "en": "Ai Native Owner Positioning — Claude Code Guide"
        },
        {
            "uk": "Банк доказів proof-of-work",
            "en": "Proof Of Work Evidence Bank — Claude Code Guide"
        },
        {
            "uk": "Карʼєрний наратив: Junior, Middle, Senior",
            "en": "Career Narrative Junior Middle Senior — Claude Code Guide"
        },
        {
            "uk": "AI-native резюме, GitHub і LinkedIn",
            "en": "Ai Native Resume Github Linkedin — Claude Code Guide"
        },
        {
            "uk": "Захист портфоліо під питанням «ви чи AI?»",
            "en": "Portfolio Defense You Or Ai — Claude Code Guide"
        }
    ],
    "34": [
        {
            "uk": "Цільові ролі та стратегія пошуку",
            "en": "Target Roles Search Strategy — Claude Code Guide"
        },
        {
            "uk": "Інтелект вакансії: fit і gap map",
            "en": "Job Fit Gap Map — Claude Code Guide"
        },
        {
            "uk": "Tailoring без вигаданого досвіду",
            "en": "Application Tailoring Without Invented Experience — Claude Code Guide"
        },
        {
            "uk": "Application tracker і career workspace",
            "en": "Application Tracker Career Workspace — Claude Code Guide"
        },
        {
            "uk": "Assessments, take-home і feedback loop",
            "en": "Assessments Take Home Feedback Loop — Claude Code Guide"
        }
    ]
};
