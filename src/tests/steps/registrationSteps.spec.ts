// registrationSteps.ts
import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pom/registrationPage";

let browser: Browser;
let page: Page;
let registerPage: RegisterPage;

test.beforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  registerPage = new RegisterPage(page);
  await registerPage.openHomePage();
});

test("User clicks on the Login button", async () => {
  await registerPage.clickLoginBtn();
  await registerPage.waitForLoginPage();
});

test("User goes to the registration page", async () => {
  await registerPage.clickRegisterBtn();
});

test("User fills in the First name field", async () => {
  await registerPage.fillRegistrationForm(); // Wypełnia wszystkie pola formularza
});

test("User selects the Gender checkbox as Male", async () => {
  await registerPage.checkMaleCheckbox();
});

// test("User clicks the Register button and completes registration", async () => {
//   await registerPage.click(registerPage.registerBtn2);
// });

test("User goes to the home page", async () => {
  await registerPage.openHomePage();
  await page.pause();
});

test.afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});
