import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Pause, Play } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

type CodeLanguage = "java" | "typescript" | "javascript";

type Snippet = {
  id: string;
  label: string;
  fileName: string;
  language: CodeLanguage;
  code: string;
};

const SNIPPETS: Snippet[] = [
  {
    id: "selenium-testng",
    label: "JAVA + Selenium + TestNG",
    fileName: "ProfileRequirementsTest.java",
    language: "java",
    code: `@Test
void shouldFindSeniorQaAutomationEngineer() {
    assertTrue(stack.has("Java"));
    assertTrue(stack.has("Selenium"));
    assertTrue(stack.has("TestNG"));
    assertTrue(stack.has("API Automation"));
    assertTrue(stack.has("10+ years experience"));
}`,
  },
  {
    id: "java-playwright",
    label: "JAVA + Playwright",
    fileName: "ProfileRequirementsTest.java",
    language: "java",
    code: `@Test
void shouldFindSeniorQaAutomationEngineer() {
    page.navigate("/resume");

    assertThat(page.getByText("Java")).isVisible();
    assertThat(page.getByText("Playwright")).isVisible();
    assertThat(page.getByText("E2E Automation")).isVisible();
    assertThat(page.getByText("CI/CD")).isVisible();
}`,
  },
  {
    id: "rest-assured",
    label: "JAVA + REST Assured",
    fileName: "ProfileApiTest.java",
    language: "java",
    code: `@Test
void shouldFindSeniorQaAutomationEngineer() {
    given()
        .get("/api/qa-automation-profile")
    .then()
        .statusCode(200)
        .body("seniority", equalTo("Senior"))
        .body("experience", greaterThanOrEqualTo(10))
        .body("skills", hasItems(
            "Java",
            "Playwright",
            "REST Assured",
            "Selenium",
            "Appium"
        ))
        .body("availableForContact", equalTo(true));
}`,
  },
  {
    id: "typescript-playwright",
    label: "TS/JS + Playwright",
    fileName: "profile-requirements.spec.ts",
    language: "typescript",
    code: `test('should find a senior QA automation engineer', async ({ page }) => {
  await page.goto('/resume');

  const requiredStack = [
    'Java',
    'Selenium',
    'Playwright',
    'REST Assured',
    'WebdriverIO',
    'Appium',
  ];

  for (const technology of requiredStack) {
    await expect(page.getByText(technology)).toBeVisible();
  }

  await expect(page.getByText('10+ years')).toBeVisible();
  await expect(page.getByText('Senior Automation QA Engineer')).toBeVisible();
  await page.getByRole('link', { name: 'Contact me' }).click();
});`,
  },
  {
    id: "wdio-mocha-chai",
    label: "WDIO + Mocha + Chai",
    fileName: "profile-requirements.e2e.js",
    language: "javascript",
    code: `it('should find a senior QA automation engineer', async () => {
  await browser.url('/resume');

  expect(await $('*=Java').isDisplayed()).to.be.true;
  expect(await $('*=Playwright').isDisplayed()).to.be.true;
  expect(await $('*=REST Assured').isDisplayed()).to.be.true;
  expect(await $('*=Appium').isDisplayed()).to.be.true;
  expect(await $('*=WebdriverIO').isDisplayed()).to.be.true;

  await $('=Contact me').click();
});`,
  },
  {
    id: "java-appium",
    label: "JAVA + Appium",
    fileName: "MobileProfileTest.java",
    language: "java",
    code: `@Test
void shouldFindSeniorMobileAutomationEngineer() {
    assertTrue(profile.hasSkill("Java"));
    assertTrue(profile.hasSkill("Appium"));
    assertTrue(profile.hasSkill("Mobile Testing"));
    assertTrue(profile.hasSkill("API Automation"));

    profile.contactMe();
}`,
  },
];

const TOKEN_PATTERN = /\/\/.*|\/\*.*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:async|await|const|let|for|of|return|void|public|class|new|true|false|null|this)\b|\b\d+\+?\b|\b[A-Z][A-Za-z0-9_$]*\b|\b[A-Za-z_$][\w$]*(?=\s*\()/g;

function tokenClass(token: string) {
  if (token.startsWith("//") || token.startsWith("/*")) return "text-muted-foreground/60 italic";
  if (/^["'`]/.test(token)) return "text-green-400";
  if (/^(true|false|null)$/.test(token)) return "text-yellow-300";
  if (/^\d/.test(token)) return "text-orange-300";
  if (/^[A-Z]/.test(token)) return "text-sky-300";
  if (/^(async|await|const|let|for|of|return|void|public|class|new|this)$/.test(token)) {
    return "text-violet-300";
  }
  return "text-accent";
}

function HighlightedLine({ line }: { line: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of line.matchAll(TOKEN_PATTERN)) {
    const token = match[0];
    const start = match.index ?? 0;
    if (start > cursor) parts.push(line.slice(cursor, start));
    parts.push(
      <span className={tokenClass(token)} key={`${start}-${token}`}>
        {token}
      </span>,
    );
    cursor = start + token.length;
  }

  if (cursor < line.length) parts.push(line.slice(cursor));
  return <>{parts.length > 0 ? parts : " "}</>;
}

export default function CodeShowcase() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const activeSnippet = SNIPPETS[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion || isHovered || isFocused || isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SNIPPETS.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeIndex, isFocused, isHovered, isPaused, prefersReducedMotion]);

  const selectSnippet = (index: number) => setActiveIndex(index);

  return (
    <div
      role="region"
      className="relative z-10 w-full min-w-0 rounded-2xl border border-border/50 bg-card/80 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
      aria-label={t("showcase.label")}
    >
      <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </span>
          <span className="truncate font-mono text-[10px] text-muted-foreground sm:text-xs">
            {activeSnippet.fileName}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-500 sm:text-[10px]">
          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
          {t("showcase.pass")}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 py-2.5">
        <span className="truncate text-[10px] font-medium text-foreground sm:text-xs">
          {activeSnippet.label}
        </span>
        <span className="shrink-0 font-mono text-[9px] uppercase text-muted-foreground sm:text-[10px]">
          {activeSnippet.language}
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-border/40 bg-background/80">
        <AnimatePresence mode="wait" initial={false}>
          <motion.pre
            key={activeSnippet.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="h-[300px] overflow-auto p-3 font-mono text-[9px] leading-[1.65] sm:h-[320px] sm:p-4 sm:text-[10px]"
            aria-label={`${activeSnippet.label} code`}
          >
            <code>
              {activeSnippet.code.split("\n").map((line, index) => (
                <span className="block min-h-[1.65em] whitespace-pre" key={`${activeSnippet.id}-${index}`}>
                  <span className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/40">
                    {index + 1}
                  </span>
                  <HighlightedLine line={line} />
                </span>
              ))}
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {SNIPPETS.map((snippet, index) => (
          <button
            type="button"
            key={snippet.id}
            onClick={() => selectSnippet(index)}
            aria-label={`${t("showcase.showSnippet")} ${snippet.label}`}
            aria-pressed={activeIndex === index}
            className={`min-w-0 rounded-md border px-2 py-1.5 text-left text-[9px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-[10px] ${
              activeIndex === index
                ? "border-accent/50 bg-accent/10 text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            <span className="block truncate">{snippet.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-3">
        <span className="flex min-w-0 items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          <span className="truncate">{t("showcase.matched")}</span>
        </span>
        <div className="flex shrink-0 items-center gap-2">
          {!prefersReducedMotion && (
            <button
              type="button"
              aria-label={isPaused ? t("showcase.resume") : t("showcase.pause")}
              title={isPaused ? t("showcase.resume") : t("showcase.pause")}
              aria-pressed={isPaused}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-xs"
          >
            {t("showcase.contact")}
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
