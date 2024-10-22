import { Page } from "playwright";

export class LoginPage {
  page: Page;
  homePath: string;
  loginButton: string;
  loginPath: string;

  constructor(page: Page) {
    this.page = page;
    this.homePath = "https://bookcart.azurewebsites.net"; // URL do strony głównej
    this.loginButton = "button.mat-mdc-tooltip-trigger span.mdc-button__label";
    this.loginPath = "https://bookcart.azurewebsites.net/login";
  }

  public async openHomePage(): Promise<void> {
    await this.page.goto(this.homePath);
  }

  public async clickLoginBtn(): Promise<void> {
    await this.page.locator(this.loginButton).click();
  }

  public async waitForLoginPage(): Promise<void> {
    await this.page.waitForURL(this.loginPath); // Oczekuje na URL po zalogowaniu
  }
}
