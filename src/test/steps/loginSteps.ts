import { Given, When, Then, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "../pom/loginPage";

let browser: Browser;
let page: Page;
let loginPage: LoginPage; // Tworzymy zmienną dla instancji LoginPage

Given("User opens the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page); // Inicjalizujemy instancję LoginPage z obiektem 'page'
  await page.goto(loginPage.homePath);
});

Given("User clicks on the {string} button", async function (login_button: string) {
  await page.locator(loginPage.loginButton).click(); // Odwołujemy się do instancji klasy
  await page.waitForURL(loginPage.loginPath);
});

After(async function () {
  await browser.close();
});
