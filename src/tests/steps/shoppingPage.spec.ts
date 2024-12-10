import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pom/registrationPage";
import { selectors } from "../pom/common/selectors";
import { ShoppingPage } from "../pom/shoppingPage";
import { URLs } from "../pom/common/urls";

let browser: Browser;
let page: Page;
let registerPage: RegisterPage;
let shoppingPage: ShoppingPage;

test.beforeAll(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  registerPage = new RegisterPage(page);
  shoppingPage = new ShoppingPage(page);
  await registerPage.openHomePage();
});

test("Not logged in user adds a book to the cart", async () => {
  await shoppingPage.clickAddToCartBtn(4);
  await shoppingPage.isAddedToCart();
});

test("Not logged in user goes to shopping cart and adds a book", async () => {
  await shoppingPage.openShoppingCart();
  AWAIT 
});

// test("Logged in user adds a book to the cart", async () => {
  
// });

test.afterAll(async () => {
  if (browser) {
    await browser.close();
  }
});
