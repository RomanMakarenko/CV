# Task Spec: Експорт резюме в PDF та DOC

## 1. Мета

Додати функціонал експорту резюме з сайту у два формати: **PDF** (для надсилання роботодавцям) та **DOC** (для подальшого редагування).

Сайт — статичний SPA на React + Vite, без бекенду. Експорт виконується повністю на стороні клієнта.

---

## 2. Що експортується

Зміст експортованого документа має відповідати вмісту сайту, але у форматі традиційного CV / резюме (не копія веб-сторінки).

| Секція | Джерело даних | Примітка |
|--------|---------------|----------|
| **Заголовок** | `src/constants/index.ts` — `ABOUT_ME` | Ім'я, прізвище, посада, email, телефон, локація |
| **Профіль / Summary** | `profileSummary.txt` → `src/constants/skills.ts` (немає окремого summary в константах — треба додати) | 1–2 речення про себе |
| **Досвід роботи** | `src/constants/experience.ts` — `EXPERIENCES` | Всі компанії + всі позиції з обов'язками, досягненнями та технологіями |
| **Навички** | `src/constants/skills.ts` — `SKILLS_LIST` | Згруповані за категоріями |
| **Освіта** | `src/constants/education.ts` — `EDUCATION_LIST` | Всі записи |
| **Сертифікації** | `src/constants/certifications.ts` — `CERTIFICATIONS` | Назва (завжди англійською, мовою оригіналу), видавець, дата. Без модулів / curriculum. Для "Java Developer Professional" — додати коментар "15-month program" замість деталей програми |

**Не експортується:**
- Анімації, декоративні ефекти
- Навігаційне меню
- Секція "In Progress" (курси в процесі)
- Футер сайту
- Custom cursor та gradient orbs

**Контакти в експортованому документі (тільки професійні):**
| Канал | Включаємо? |
|-------|:----------:|
| Email (`makarenkoroman1989@gmail.com`) | ✅ Так |
| LinkedIn (`linkedin.com/in/roman-makarenko-...`) | ✅ Так |
| Телефон (`+380939490721`) | ✅ Так |
| Локація (`Ukraine`) | ✅ Так |
| GitHub | ❌ Ні (посилання є на сайті, для резюме-документа необов'язкове) |
| Telegram | ❌ Ні |
| Facebook | ❌ Ні |
| Instagram | ❌ Ні |

---

## 3. Формат PDF

### Вимоги
- Чистий, професійний layout (A4)
- Текст має бути **selectable / searchable** (не растроване зображення)
- Файл малого розміру (< 500 КБ)
- Підтримка кирилиці (українська + англійська)
- Гіперпосилання (email, LinkedIn — клікабельні)

### Технічні підходи

| Підхід | Плюси | Мінуси |
|--------|-------|--------|
| **`@react-pdf/renderer`** | Найкраща якість PDF, selectable text, React-компоненти, кирилиця через Font.register, гіперпосилання | Потрібно верстати PDF-окремо (не CSS сайту), залежність ~200 КБ |
| **`html2canvas` + `jsPDF`** | Просто "сфотографувати" сторінку | Растровий текст (не selectable), великий файл, погана якість при друку |
| **`window.print()` + print CSS** | Жодних залежностей, використовує браузерний друк | Користувач бачить діалог друку (не "зберегти файл"), кросбраузерність |
| **`html2pdf.js`** (обгортка над html2canvas + jsPDF) | Простий API | Ті ж мінуси html2canvas — растровий текст |

**Рекомендація:** `@react-pdf/renderer` — як основний підхід для якісного PDF.
**Додатково:** `window.print()` з @media print CSS — як fallback / альтернатива (без додаткових залежностей).

### Layout PDF (ескіз)

```
┌──────────────────────────────────┐
│  ROMAN MAKARENKO                 │
│  QA Automation Engineer          │
│  📞 +380939490721                 │
│  ✉ makarenkoroman1989@gmail.com  │
│  🔗 linkedin.com/in/...          │
│  📍 Ukraine                      │
├──────────────────────────────────┤
│  PROFESSIONAL SUMMARY            │
│  ─────────────────────────────── │
│  Текст профілю...                │
├──────────────────────────────────┤
│  EXPERIENCE                      │
│  ─────────────────────────────── │
│  Ciklum (NZZ Mediengruppe)       │
│  Automation QA | Jan 2023–Present│
│  • responsibility...             │
│  • responsibility...             │
│  Технології: Node.js, mocha...   │
│                                  │
│  (далі — решта позицій)          │
├──────────────────────────────────┤
│  SKILLS                          │
│  ─────────────────────────────── │
│  Testing & QA: Web, Mobile...    │
│  Automation: Selenium, Appium... │
│  Languages: Java, Node.js...     │
│  DevOps: Docker, Jenkins...      │
│  AI: Prompt Eng., MCP, Agents... │
│  Methodologies: Scrum, Kanban... │
├──────────────────────────────────┤
│  EDUCATION                       │
│  ─────────────────────────────── │
│  Igor Sikorsky Kyiv Polytechnic  │
│  Master of Computer Science      │
├──────────────────────────────────┤
│  CERTIFICATIONS                  │
│  ─────────────────────────────── │
│  • Learn Selenium with Java,     │
│    Cucumber & Frameworks         │
│    — Udemy, Jul 2026             │
│  • GenAI & AI Agents for QA      │
│    Automation — Udemy, May 2026  │
│  • Java Developer Professional   │
│    — JavaRush, May 2024          │
│    15-month program              │
│  • Selenium WebDriver with Java  │
│    — Udemy, Mar 2024             │
│  ...                             │
└──────────────────────────────────┘
```

---

## 4. Формат DOC / DOCX

### Вимоги
- Відкривається в Microsoft Word, Google Docs, LibreOffice
- Редагований (текст, таблиці, стилі)
- Підтримка кирилиці
- Простий, але охайний styling

### Технічні підходи

| Підхід | Плюси | Мінуси |
|--------|-------|--------|
| **HTML → .doc** (application/msword) | Жодних залежностей, Word відкриває HTML як doc | Обмежений контроль стилів, не "справжній" docx |
| **`docx` npm (docx.js)** | Справжній docx, стилі, таблиці, заголовки | Велика залежність, складний API для React |
| **Шаблон .docx + docxtemplater** | Потужний для шаблонів | Потребує завантаження шаблону, зайва складність |

**Рекомендація:** HTML → .doc (MIME-тип `application/msword`). Це найпростіший шлях, який дає прийнятний результат. Word чудово відкриває HTML-файли з розширенням .doc. Якщо згодом знадобиться справжній .docx — додати `docx` бібліотеку.

---

## 5. UI / UX — кнопки експорту

### Варіанти розміщення

1. **У Hero секції** — поруч з кнопками "Let's Connect" та "Email Me"
2. **У Navbar** — у правій частині меню
3. **В обох місцях**

**Рекомендація:** Додати в Hero секцію (після соціальних іконок, перед кнопками зв'язку) — як окремий рядок з двома кнопками: "Download PDF" та "Download DOC". Також можна додати іконку в Navbar для швидкого доступу.

```
[📄 Download PDF]  [📝 Download DOC]
```

### Поведінка
- При натисканні — одразу завантажується файл (немає попапів, налаштувань)
- Використовувати поточну мову сайту для тексту в документі
- Назва файлу: `Roman_Makarenko_CV.{lang}.{pdf|doc}` (наприклад, `Roman_Makarenko_CV.en.pdf`)
- Іконки з Lucide React: `FileText` (PDF) та `FileEdit` або `FileDown` (DOC)

---

## 6. Тема оформлення

Експортовані документи (PDF та DOC) **завжди використовують світлу тему**, незалежно від теми сайту (dark/light).

**Причина:** резюме найчастіше відкривають у Word / Google Docs / переглядачах PDF, де темна тема виглядає незвично та непрофесійно. Крім того, при друці на папері темний фон марнує тонер.

**Застосовується до:**
- PDF (кольори тексту, фону, заголовків, ліній — світла схема)
- DOC (аналогічно — світла тема)
- `@media print` CSS — якщо використовується, то `color-scheme: light`

---

## 7. Інтернаціоналізація (i18n)

Експорт має враховувати поточну мову сайту (`en` або `uk`):

- Текст документа (заголовки секцій, місяці, описи досвіду, назви навичок) — тією ж мовою, що й сайт
- **Сертифікації — завжди англійською мовою**, незалежно від `lang`. Назви сертифікатів використовуються мовою оригіналу з `certifications.ts`
- Використовувати існуючі `t()`, `et()`, `ct()` функції з `i18n.tsx`
- Для PDF: `@react-pdf/renderer` не має доступу до React Context, тому переклади потрібно передавати пропсами
- Для DOC: HTML генерується в коді компонента — використовувати поточний `lang`

---

## 7. Технічна реалізація

### 7.1. Нова структура файлів

```
src/
├── components/
│   ├── ResumeExport.tsx          # Компонент з кнопками [PDF] [DOC]
│   └── PdfDocument.tsx           # @react-pdf документ (компонент для PDF)
├── utils/
│   ├── exportPdf.ts             # Логіка генерації PDF (виклик @react-pdf)
│   ├── exportDoc.ts             # Логіка генерації DOC (HTML → .doc)
│   └── resumeData.ts            # Підготовка даних для експорту (mapping)
```

### 7.2. Потрібні залежності

```json
{
  "dependencies": {
    "@react-pdf/renderer": "^4.x"
  }
}
```

Для DOC — жодних додаткових залежностей (HTML → .doc).

### 7.3. Компонент ResumeExport

```tsx
// ResumeExport.tsx — спрощена схема
function ResumeExport() {
  const { lang } = useLanguage();

  const handlePdf = async () => {
    const blob = await generatePdf(lang);
    downloadBlob(blob, `Roman_Makarenko_CV.${lang}.pdf`);
  };

  const handleDoc = () => {
    const blob = generateDoc(lang);
    downloadBlob(blob, `Roman_Makarenko_CV.${lang}.doc`);
  };

  return (
    <div className="flex gap-2">
      <Button onClick={handlePdf} icon={FileText}>Download PDF</Button>
      <Button onClick={handleDoc} icon={FileDown}>Download DOC</Button>
    </div>
  );
}
```

### 7.4. Збір даних (resumeData.ts)

Функція, яка збирає всі дані з констант в один об'єкт для передачі в PDF/DOC генератори:

**Важливо щодо мови:**
- Для секцій Header, Summary, Experience, Skills, Education — використовувати переклади згідно з поточною мовою сайту (`lang`)
- **Сертифікації — завжди англійською мовою**, незалежно від `lang`. Назви сертифікатів зберігаються мовою оригіналу (як вказано в `certifications.ts`)

```ts
export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  skills: Array<{ category: string; items: string[] }>;
  experience: Array<{
    company: string;
    positions: Array<{
      title: string;
      duration: string;
      responsibilities: string[];
      achievements: string[];
      tech: string[];
    }>;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}
```

---

## 8. Стилізація PDF (через @react-pdf/renderer)

- **Тема**: завжди світла, незалежно від теми сайту
- **Шрифти**: Inter (як на сайті) — зареєструвати через `Font.register` з Google Fonts .ttf
- **Розмір**: A4
- **Кольори (світла тема)**: такий же стиль, як світлий режим сайту
  - Фон: білий (#ffffff)
  - Заголовки секцій: dark navy (#1a237e) або темно-сірий (#1e293b)
  - Текст: темно-сірий (#333333 / #334155)
  - Лінії-роздільники: світло-сірий (#e2e8f0)
  - Акцент: синій/indigo (#3b82f6 або #6366f1) для гіперпосилань
- **Таблиці**: не використовувати — тільки Flexbox з @react-pdf
- **Дата**: `DurationHelper` для форматування

---

## 9. План імплементації

| Крок | Завдання | Файли |
|------|----------|-------|
| 1 | Додати `@react-pdf/renderer` в залежності | `package.json` |
| 2 | Створити `resumeData.ts` — збір даних для експорту | `src/utils/resumeData.ts` |
| 3 | Додати summary в константи (профіль з `profileSummary.txt`) | `src/constants/skills.ts` або окремий файл |
| 4 | Створити `PdfDocument.tsx` — PDF layout | `src/components/PdfDocument.tsx` |
| 5 | Створити `exportPdf.ts` — генерація PDF | `src/utils/exportPdf.ts` |
| 6 | Створити `exportDoc.ts` — генерація HTML→DOC | `src/utils/exportDoc.ts` |
| 7 | Створити `ResumeExport.tsx` — кнопки | `src/components/ResumeExport.tsx` |
| 8 | Інтегрувати кнопки в Hero | `src/components/Hero.tsx` |
| 9 | Додати @media print CSS (для `window.print()`) | `src/index.css` |
| 10 | Тестування: EN + UK, PDF + DOC | — |

---

## 10. Acceptance Criteria

- [ ] PDF завантажується, відкривається в Acrobat / браузері
- [ ] Текст у PDF selectable / searchable
- [ ] DOC відкривається в Word / Google Docs / LibreOffice
- [ ] Кирилиця відображається коректно в обох форматах
- [ ] Всі секції резюме присутні в документі
- [ ] Порядок секцій: Header → Summary → Experience → Skills → Education → Certifications
- [ ] Кнопки працюють як в EN, так і в UK мові
- [ ] Сертифікації в документі завжди англійською мовою, незалежно від мови інтерфейсу
- [ ] Для "Java Developer Professional" вказано "15-month program" замість деталей програми
- [ ] **PDF та DOC завжди у світлій темі**, навіть якщо сайт у dark mode
- [ ] Назва файлу містить мову (`Roman_Makarenko_CV.en.pdf`)
- [ ] Сайт продовжує працювати без помилок після додавання функціоналу
- [ ] Ліниве завантаження @react-pdf (dynamic import) — не впливає на початковий розмір бандла

---

## 11. Майбутні вдосконалення (out of scope for v1)

- Експорт лише вибраних секцій
- Вибір кольорової схеми / шаблону PDF
- Завантаження на Google Drive / Dropbox
- Відправка на email прямо з сайту
- Підтримка .docx через бібліотеку `docx` (якщо HTML→.doc виявиться недостатнім)

---

## 12. Нотатки

- **@react-pdf/renderer v4** працює в Vite без додаткового налаштування (ESM сумісний)
- Для кирилиці потрібно завантажити .ttf файли Inter (або використати Noto Sans як fallback) через `Font.register()`
- `window.print()` можна використати як альтернативу без залежностей: `@media print` CSS стилі та кнопка "Print CV"
- PDF генерується в Blob через `pdf.renderToStream()` або `pdf.toBlob()` (API @react-pdf)
- Для іконок у кнопках використати `FileText` та `FileDown` з lucide-react (обидва вже є в залежностях)
