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

When("User clicks on the Login button", async function () {
  await loginPage.clickLoginBtn(); // Klikamy przycisk logowania
});

Then("User should be redirected to the login page", async function () {
  await loginPage.waitForLoginPage(); // Czekamy na przekierowanie do strony logowania
});

Given("User goes to the registration page", async function () {
  await loginPage.clickRegisterBtn();
});

When("User clicks the First name field", async function () {
  await loginPage.clickField(loginPage.nameField);
});

Then(
  "User fills in the First name field with correct values and values are visible",
  async function () {
    await loginPage.inputValue(loginPage.nameField, loginPage.firstName);
  },
);

When("User clicks the Last name field", async function () {
  await loginPage.clickField(loginPage.lastNameField);
});

Then(
  "User fills in the Last name field with correct values and values are visible",
  async function () {
    await loginPage.inputValue(loginPage.lastNameField, loginPage.lastName);
  },
);

When("User clicks the Username field", async function () {
  await loginPage.clickField(loginPage.userNameField);
});

Then(
  "User fills in the Username field with correct values and values are visible",
  async function () {
    await loginPage.inputValue(loginPage.userNameField, loginPage.userName);
  },
);

When("User clicks the Password field", async function () {
  await loginPage.clickField(loginPage.passwordField);
});

Then(
  "User fills in the Password field with correct values and values are visible",
  async function () {
    await loginPage.inputValue(loginPage.passwordField, loginPage.password);
  },
);

When("User clicks the Confirm Password field", async function () {
  await loginPage.clickField(loginPage.confirmPasswordField);
});

Then(
  "User fills in the Confirm Password field with correct values and values are visible", async function () {
    await loginPage.inputValue(loginPage.confirmPasswordField,loginPage.password);
  });

  When("User selects the Gender checkbox as a Male", async function () {  
    await loginPage.clickField(loginPage.checkboxMale);
  });

  When("User clicks the Register button", async function () {
    await loginPage.clickField(loginPage.registerBtn2);
  });



After(async function () {
  if (browser) {
    await browser.close();
  }
});
