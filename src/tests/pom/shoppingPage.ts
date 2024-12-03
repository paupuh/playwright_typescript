import { Page } from "playwright";
import { expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { selectors } from "./common/selectors";
import { URLs } from "../pom/common/urls";


export class ShoppingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async clickAddToCartBtn(index: number): Promise<void> {
    await selectors.shppage.addToCartButton(this.page, index).click();
  }

  public async isAddedToCart(): Promise<void> {
    const cartBtn = await selectors.shppage.cartBtn(this.page);
    expect(await cartBtn.innerText()).toBe("1");
  }

  public async itemInShoppingCart(): Promise<void> {
    await selectors.shppage.cartBtn(this.page).click();
    await selectors.shppage.clearCartBtn(this.page).isVisible();
    await selectors.shppage.deleteButton(this.page).isVisible(); 
    await selectors.shppage.checkoutBtn(this.page).isVisible();
  }




  public async openShoppingCart(): Promise<void> {
    await selectors.shppage.cartBtn(this.page).click();
    await this.waitForURL(URLs.cartPath); 
  }
}
