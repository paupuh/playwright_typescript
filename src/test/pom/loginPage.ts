import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //locators
  public homePath: string = "https://bookcart.azurewebsites.net/";
  public loginButton = 'button[mattooltip="Login"]';
  public loginPath = this.homePath + "login";
  //methods
}
