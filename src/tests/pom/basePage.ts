import { Locator, Page } from "playwright";

export class BasePage {
  constructor(public page: Page) {}

  public async clickLocator(locator: Locator): Promise<void> {
    await locator.click();
  }

  public async waitForURL(url: string): Promise<void> {
    await this.page.waitForURL(url);
  }

  public async open(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
