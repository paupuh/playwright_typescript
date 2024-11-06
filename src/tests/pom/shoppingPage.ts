import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage"; // Import klasy bazowej

export class ShoppingPage extends BasePage {
  // playwright locators

  //Dynamic locators
  public addToCartBtn(index: number): Locator {
    return this.page.locator(`[data-testid="add-to-cart-${index}"]`);
  }
  //static locators
}
