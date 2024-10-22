import { Page } from "playwright";

export class LoginPage {
  page: Page;
  homePath: string;
  loginBtn: string;
  loginPath: string;
  registerBtn: string;

  constructor(page: Page) {
    this.page = page;
    this.homePath = "https://bookcart.azurewebsites.net"; // URL do strony głównej
    this.loginBtn = "button.mat-mdc-tooltip-trigger span.mdc-button__label";
    this.loginPath = "https://bookcart.azurewebsites.net/login";
    this.registerBtn = "button.mdc-button span.mdc-button__label";
  }

  public async openHomePage(): Promise<void> {
    await this.page.goto(this.homePath);
  }

  public async clickLoginBtn(): Promise<void> {
    await this.page.locator(this.loginBtn).click();
  }

  public async waitForLoginPage(): Promise<void> {
    await this.page.waitForURL(this.loginPath); // Oczekuje na URL po zalogowaniu
  }
}
