import { Given, When, Then, After } from "@cucumber/cucumber";
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
  await loginPage.openHomePage(); // Otwieramy stronę główną
});

When(
  "User clicks on the {string} button",
  async function (login_button: string) {
    await loginPage.clickLoginBtn(); // Klikamy przycisk logowania
  }
);

Then("User should be redirected to the login page", async function () {
  await loginPage.waitForLoginPage(); // Czekamy na przekierowanie do strony logowania
});

Given("User goes to the registration page", async function () {
  await loginPage.clickRegisterBtn();
});
Given("User fills in field with correct details", async function () {
  await loginPage.clickNameField();
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
