Потрібно переробити code showcase на сторінці резюме.

### Концепція

Зараз на сторінці є один декоративний блок із кодом на кшталт:

```ts
describe('Login Flow', () => {
  it('should authenticate', {
    expect(result).to.be.ok;
  });
});
```

Він не має реального змісту для мого CV.

Потрібно перетворити його на **один інтерактивний code block у вигляді carousel**, який демонструє мій automation stack.

### Важливо

Це має бути **ОДИН блок із кодом**, а НЕ шість окремих блоків.

У верхній/нижній частині цього блоку мають бути назви стеків, наприклад:

* JAVA + Selenium + TestNG
* JAVA + Playwright
* JAVA + REST Assured
* TS/JS + Playwright
* WDIO + Mocha + Chai
* JAVA + Appium

Користувач бачить один code editor/card.

При перемиканні stack **вміст цього самого code block плавно змінюється** на відповідний snippet.

Наприклад:

```text
┌─────────────────────────────────────────────┐
│ JAVA + PLAYWRIGHT        ● ● ●             │
├─────────────────────────────────────────────┤
│                                             │
│  @Test                                      │
│  void shouldFindSeniorQaAutomationEngineer()│
│  {                                          │
│      ...                                    │
│  }                                          │
│                                             │
└─────────────────────────────────────────────┘

   JAVA + Selenium   JAVA + Playwright
   REST Assured      TS/JS + Playwright
   WDIO + Mocha      JAVA + Appium
```

### Сенс коду

Код має бути не звичайним login demo.

Ідея — створити жартівливий, але професійний automation test:

**"Чи знайдено Senior QA Automation Engineer, який відповідає вимогам?"**

Тобто сам код повинен виглядати як реальний automated test, який перевіряє мій професійний профіль / automation stack.

Фінальна логіка повинна вести до ідеї:

`requirements match → PASS → contact me`

Це має бути частиною дизайну CV і одночасно демонструвати мої технології.

### Snippets

Використати реалістичний syntax кожного framework.

#### 1. JAVA + Selenium + TestNG

```java
@Test
void shouldFindSeniorQaAutomationEngineer() {
    assertTrue(stack.has("Java"));
    assertTrue(stack.has("Selenium"));
    assertTrue(stack.has("TestNG"));
    assertTrue(stack.has("API Automation"));
    assertTrue(stack.has("10+ years experience"));
}
```

#### 2. JAVA + Playwright

```java
@Test
void shouldFindSeniorQaAutomationEngineer() {
    page.navigate("/resume");

    assertThat(page.getByText("Java")).isVisible();
    assertThat(page.getByText("Playwright")).isVisible();
    assertThat(page.getByText("E2E Automation")).isVisible();
    assertThat(page.getByText("CI/CD")).isVisible();
}
```

#### 3. JAVA + REST Assured

Цей snippet повинен виглядати як справжній REST Assured API test:

```java
@Test
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
}
```

#### 4. TS/JS + Playwright

Цей варіант має бути найбільш сучасним і бажано основним:

```ts
test('should find a senior QA automation engineer', async ({ page }) => {
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

  await expect(
    page.getByText('Senior Automation QA Engineer')
  ).toBeVisible();

  await page.getByRole('link', { name: 'Contact me' }).click();
});
```

#### 5. WDIO + Mocha + Chai

```js
it('should find a senior QA automation engineer', async () => {
  await browser.url('/resume');

  expect(await $('*=Java').isDisplayed()).to.be.true;
  expect(await $('*=Playwright').isDisplayed()).to.be.true;
  expect(await $('*=REST Assured').isDisplayed()).to.be.true;
  expect(await $('*=Appium').isDisplayed()).to.be.true;
  expect(await $('*=WebdriverIO').isDisplayed()).to.be.true;

  await $('=Contact me').click();
});
```

#### 6. JAVA + Appium

```java
@Test
void shouldFindSeniorMobileAutomationEngineer() {
    assertTrue(profile.hasSkill("Java"));
    assertTrue(profile.hasSkill("Appium"));
    assertTrue(profile.hasSkill("Mobile Testing"));
    assertTrue(profile.hasSkill("API Automation"));

    profile.contactMe();
}
```

### UX

1. При завантаженні сторінки показувати один із snippets.
2. Автоматично перемикати snippets кожні кілька секунд.
3. Додати можливість ручного перемикання.
4. При ручному перемиканні autoplay повинен коректно зупинятися/перезапускатися.
5. Перемикання має бути плавним.
6. Не повинно бути стрибків layout через різну довжину коду.
7. Syntax highlighting має відповідати мові/framework.
8. Code block має залишатися одним і тим самим UI-компонентом — змінюється тільки його content.
9. На mobile carousel має нормально адаптуватися.
10. Не створювати шість code blocks одночасно в DOM, якщо це не потрібно для реалізації.
11. Не ламати існуючий дизайн, typography, responsive layout та інші секції CV.
12. Не змінювати інші частини сайту без необхідності.

### Візуальна ідея

Code block повинен виглядати як частина IDE/terminal/editor, але залишатися чистим і premium, щоб він органічно виглядав у професійному CV Senior Automation QA Engineer.

Поруч/над кодом можна показувати:

`PASS`

або

`✓ Requirements matched`

А фінальний CTA:

`CONTACT ME`

має бути інтегрований у цей concept.

### Головна ідея

Людина, яка дивиться CV, повинна буквально побачити:

**"Шукаю Senior QA Automation Engineer"**

→ automated test перевіряє requirements

→ stack matches

→ **PASS**

→ **Contact Roman**

Тобто це не просто декоративний код, а маленька інтерактивна демонстрація automation mindset.

Перед реалізацією знайди існуючий компонент/секцію, де зараз знаходиться `Login Flow`, і перевикористай його структуру та стилі настільки, наскільки це можливо.

Не роби окремі секції для кожного framework.
Потрібен **один carousel code showcase з 6 змінними snippets**.
