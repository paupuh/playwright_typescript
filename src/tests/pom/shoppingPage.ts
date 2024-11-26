import { Page } from "playwright";
import { expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { selectors } from "./common/selectors";

export class ShoppingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async clickAddToCartBtn(index: number): Promise<void> {
    await selectors.shppage.addToCartButton(this.page, index).click();
  }

  public async isAddedToCart(): Promise<void> {
    const cartBtn = await selectors.shppage.cartBtn(this.page);
    const value = await cartBtn.evaluate(
      (el) => (el as HTMLInputElement).value
    );
    expect(value).toBe("1");
  }
}
