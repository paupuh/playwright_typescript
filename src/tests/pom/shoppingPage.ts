import { Page } from "playwright";
import { BasePage } from "./basePage";
import { selectors } from "./common/selectors";

export class ShoppingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async clickAddToCartBtn(index: number): Promise<void> {
    await selectors.shppage.addToCartButton(this.page, index).click();
  }
}