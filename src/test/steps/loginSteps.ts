import { Given, When, Then, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "../pom/loginPage";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(70000); // 70 seconds for all steps

let browser: Browser;
let page: Page;
let loginPage: LoginPage; // Tworzymy zmienną dla instancji LoginPage

Given("User opens the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page); // Inicjalizujemy instancję LoginPage z obiektem 'page'
  await page.goto(loginPage.homePath);
});

When(
  "User clicks on the {string} button",
  async function (login_button: string) {
    await loginPage.loginAnddirection();
  },
);

After(async function () {
  if (browser) {
    await browser.close();
  }
});
