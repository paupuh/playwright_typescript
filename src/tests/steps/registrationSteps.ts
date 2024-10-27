import { Given, When, Then, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { RegisterPage } from "../pom/registrationPage";
import { setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "playwright/test";

setDefaultTimeout(70000); // 70 seconds for all steps

let browser: Browser;
let page: Page;
let registerPage: RegisterPage; // Tworzymy zmienną dla instancji LoginPage

Given("User opens the login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  registerPage = new RegisterPage(page); // Inicjalizujemy instancję LoginPage z obiektem 'page'
  await registerPage.openHomePage(); // Otwieramy stronę główną
});

When("User clicks on the Login button", async function () {
  await registerPage.clickLoginBtn(); // Klikamy przycisk logowania
});

Then("User should be redirected to the login page", async function () {
  await registerPage.waitForLoginPage(); // Czekamy na przekierowanie do strony logowania
});

Given("User goes to the registration page", async function () {
  await registerPage.clickRegisterBtn();
});

When("User clicks the First name field", async function () {
  await registerPage.clickField(registerPage.nameField);
});

Then(
  "User fills in the First name field with correct values and values are visible",
  async function () {
    await registerPage.inputValue(
      registerPage.nameField,
      registerPage.firstName
    );
  }
);

When("User clicks the Last name field", async function () {
  await registerPage.clickField(registerPage.lastNameField);
});

Then(
  "User fills in the Last name field with correct values and values are visible",
  async function () {
    await registerPage.inputValue(
      registerPage.lastNameField,
      registerPage.lastName
    );
  }
);

When("User clicks the Username field", async function () {
  await registerPage.clickField(registerPage.userNameField);
});

Then(
  "User fills in the Username field with correct values and values are visible",
  async function () {
    await registerPage.inputValue(
      registerPage.userNameField,
      registerPage.userName
    );
  }
);

When("User clicks the Password field", async function () {
  await registerPage.clickField(registerPage.passwordField);
});

Then(
  "User fills in the Password field with correct values and values are visible",
  async function () {
    await registerPage.inputValue(
      registerPage.passwordField,
      registerPage.password
    );
  }
);

When("User clicks the Confirm Password field", async function () {
  await registerPage.clickField(registerPage.confirmPasswordField);
});

Then(
  "User fills in the Confirm Password field with correct values and values are visible",
  async function () {
    await registerPage.inputValue(
      registerPage.confirmPasswordField,
      registerPage.password
    );
  }
);

When("User selects the Gender checkbox as a Male", async function () {
  await registerPage.page.waitForSelector(registerPage.checkboxMale);
  await registerPage.clickField(registerPage.checkboxMale);
  expect(
    await registerPage.page.isChecked(registerPage.checkboxMale)
  ).toBeTruthy();
});

When("User clicks the Register button", async function () {
  await registerPage.clickField(registerPage.registerBtn2);
});

Then("User redirected to the login page and registered succesfully",
  async function () {
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
