# Roman Makarenko — Online CV / Resume

## Огляд проекту

Сучасне, адаптивне онлайн-резюме на React + TypeScript + Vite + Tailwind CSS.
Розгортається на безкоштовному хостингу (Render / Vercel / Netlify).
Дані резюме зберігаються в текстових файлах у корені проекту.

## Цільовий стек

| Технологія | Призначення |
| --- | --- |
| React 18 | UI фреймворк (зібраний, не Create React App) |
| TypeScript | Типізація |
| Vite 5 | Бандлер і dev-сервер |
| Tailwind CSS 3 | Стилізація |
| Framer Motion | Анімації |
| Lucide React | Іконки |
| PostCSS + Autoprefixer | CSS препроцесори |

**Версії Node.js**: 18+ (LTS)

## Дані резюме (джерела)

Кожен файл містить інформацію для відповідної секції.
При зміні файлів — оновити константи в `src/constants/`.

| Файл | Секція резюме |
| --- | --- |
| `profileSummary.txt` | Профіль / Саммарі + скіли |
| `education.txt` | Освіта |
| `certifications.txt` | Сертифікації |
| `NZZ.txt` | Ciklum / NZZ — досвід роботи (3 проекти) |
| `Playtika.txt` | Playtika — досвід роботи (5 позицій) |
| `TotalGame.txt` | TotalGame — досвід роботи (2 позиції) |

### Структура даних для досвіду

Кожен блок досвіду в файлах має формат:
```
Name of Employer: <company>
Job Title: <position>
Date of Employment: <start>–<end>
Project Description and Responsibilities:
<текст>
Tools and Technologies: <технології>
```

При парсингу — видаляти дублікати (в Playtika.txt є повторення).

## Структура проекту

```
CV/
├── CLAUDE.md              # Цей файл — інструкції для Claude Code
├── profileSummary.txt     # Дані: профіль
├── education.txt          # Дані: освіта
├── certifications.txt     # Дані: сертифікати
├── NZZ.txt                # Дані: досвід Ciklum
├── Playtika.txt           # Дані: досвід Playtika
├── TotalGame.txt          # Дані: досвід TotalGame
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx           # Точка входу React
│   ├── App.tsx            # Кореневий компонент
│   ├── index.css          # Tailwind + CSS кастомні проперті
│   ├── components/        # UI компоненти
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── constants/         # Дані для секцій (імпортуються в компоненти)
│   │   ├── index.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── certifications.ts
│   │   ├── skills.ts
│   │   └── socialMedia.ts
│   └── lib/
│       └── theme.tsx      # Логіка теми (dark/light)
├── example/               # Довідковий приклад (Sudhanva Nadiger portfolio)
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.cjs
```

## Секції резюме

1. **Hero** — ім'я, посада (QA Automation Engineer), коротке представлення, контакти
2. **Experience** — таймлайн досвіду (TotalGame → Playtika → Ciklum)
3. **Skills** — технічні навички з profileSummary.txt (згруповані по категоріях)
4. **Education** — освіта (КПІ ім. Ігоря Сікорського)
5. **Certifications** — сертифікати з датами
6. **Footer** — контакти, соціальні мережі

## Команди

```bash
npm run dev       # Запуск dev-сервера (vite --host)
npm run build     # TypeScript compile + Vite build
npm run preview   # Перегляд production збірки локально
```

## Дизайн-система

- **Тема**: dark-first (тёмная по умолчанию) з можливістю перемикання на світлу
- **Шрифт**: Inter (Google Fonts)
- **Кольори**: через CSS custom properties в `src/index.css`
- **Анімації**: Framer Motion для появлень і transition-ів

## Розгортання

- Target: безкоштовний хостинг (Render.com / Vercel / Netlify)
- Build команда: `npm run build`
- Output директорія: `dist/`
- Тип: статичний SPA (з Vite)

## Правила роботи з Claude Code

1. **Дані — єдине джерело правди**: інформація береться з .txt файлів у корені. При зміні вмісту файлів — оновлювати `src/constants/`.
2. **Посилатися на example/**: при сумнівах у структурі компонента дивитися на `example/src/`.
3. **Commit часто**: короткі, описові коміти англійською.
4. **Перед створенням компонента**: перевірити наявність схожих у `example/`.
5. **Статичний сайт**: без бекенду, без серверного рендерингу.