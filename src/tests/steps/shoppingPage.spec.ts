import { chromium, Browser, Page } from "playwright";
import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pom/registrationPage";
import { selectors } from "../pom/common/selectors";
import { ShoppingPage } from "../pom/shoppingPage";

let browser: Browser;
let page: Page;
let registerPage: RegisterPage;
let shoppingPage: ShoppingPage;

test.beforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  registerPage = new RegisterPage(page);
  shoppingPage = new ShoppingPage(page);
  await registerPage.openHomePage();
});

test("Not logged in user adds a book to the cart", async () => {
 await shoppingPage.clickAddToCartBtn(4);
 
 
});
