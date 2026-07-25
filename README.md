# Roman Makarenko — QA Automation Engineer CV

[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer)](https://www.framer.com/motion/)

Сучасне, адаптивне онлайн-резюме з підтримкою темної/світлої теми, анімаціями, мультимовністю (англійська/українська) та експортом у PDF і DOC. Розгортається як статичний SPA на Render / Vercel / Netlify.

**[🌐 Live Demo](https://roman-makarenko-cv.netlify.app)**

---

## Особливості

- ⚡ **Vite 5** — швидкий dev-сервер та оптимізована production збірка
- 🎨 **Tailwind CSS 3** — адаптивний дизайн, CSS custom properties для теми
- 🌓 **Dark/Light тема** — темна за замовчуванням, перемикання збереженням у localStorage
- 🌍 **Мультимовність** — англійська та українська мови
- 🎞️ **Framer Motion** — анімовані появлення секцій та transition-и
- 📄 **Експорт у PDF** — клієнтський рендеринг через `@react-pdf/renderer`
- 📝 **Експорт у DOC** — генерація .doc файлів на стороні клієнта
- 🔍 **SEO** — Open Graph, Twitter Card, JSON-LD structured data
- ♿ **Accessibility** — семантичний HTML, `noscript` fallback
- 📱 **Fully Responsive** — коректне відображення на всіх пристроях

## Секції

1. **Hero** — ім'я, посада, контакти
2. **In Progress** — поточні навчальні курси та проекти
3. **Experience** — таймлайн досвіду (TotalGame → Playtika → Ciklum/NZZ)
4. **Skills** — технічні навички, згруповані за категоріями
5. **Education** — освіта (КПІ ім. Ігоря Сікорського)
6. **Certifications** — сертифікації з детальним описом та progress-барами
7. **Contact / Footer** — соціальні мережі, контакти

## Стек технологій

| Технологія | Призначення |
|---|---|
| **React 18** | UI-фреймворк |
| **TypeScript** | Типізація |
| **Vite 5** | Бандлер і dev-сервер |
| **Tailwind CSS 3** | Стилізація |
| **Framer Motion** | Анімації |
| **Lucide React** | Іконки |
| **@react-pdf/renderer** | Генерація PDF |

## Початок роботи

```bash
# Клонувати репозиторій
git clone https://github.com/RomanMakarenko/CV.git
cd CV

# Встановити залежності
npm install

# Запустити dev-сервер
npm run dev

# Зібрати production-версію
npm run build

# Переглянути production-збірку локально
npm run preview
```

## Структура проекту

```
CV/
├── CLAUDE.md                    # Інструкції для Claude Code
├── profileSummary.txt           # Дані: профіль і навички
├── education.txt                # Дані: освіта
├── certifications.txt           # Дані: сертифікати
├── NZZ.txt                      # Дані: Ciklum / NZZ досвід
├── Playtika.txt                 # Дані: Playtika досвід
├── TotalGame.txt                # Дані: TotalGame досвід
├── public/
│   ├── favicon.svg
│   ├── certificates/            # Сертифікати (зображення)
│   └── logos/                   # Логотипи компаній
├── src/
│   ├── main.tsx                 # Точка входу
│   ├── App.tsx                  # Кореневий компонент
│   ├── index.css                # Tailwind + CSS custom properties
│   ├── components/              # UI-компоненти
│   ├── constants/               # Дані секцій (парсяться з .txt)
│   └── lib/                     # Допоміжні модулі (тема, експорт)
└── index.html
```

## Дані резюме

Інформація зберігається у `*.txt` файлах у корені проекту. При зміні даних у цих файлах потрібно оновлювати відповідні константи в `src/constants/`.

## Розгортання

Підходить будь-який безкоштовний хостинг для статичних сайтів:

| Платформа | Посилання |
|---|---|
| **Netlify** | [netlify.com](https://netlify.com) |
| **Vercel** | [vercel.com](https://vercel.com) |
| **Render** | [render.com](https://render.com) |

**Build команда:** `npm run build`
**Output директорія:** `dist/`

## Ліцензія

[MIT](LICENSE)

---

### Контакти

- **Email:** [makarenkoroman1989@gmail.com](mailto:makarenkoroman1989@gmail.com)
- **LinkedIn:** [romanmakarenko](https://www.linkedin.com/in/romanmakarenko/)
- **GitHub:** [RomanMakarenko](https://github.com/RomanMakarenko)