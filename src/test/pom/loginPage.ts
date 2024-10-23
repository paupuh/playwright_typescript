import { Page, } from "playwright";

export class LoginPage {
  page: Page;
  homePath: string;
  registerPath: string;
 
  loginBtn: string;
  loginPath: string;
  registerBtn: string;

  nameField: string;
  firstName: string;

  constructor(page: Page) {
    this.page = page;
    this.homePath = "https://bookcart.azurewebsites.net"; // URL do strony głównej
    this.registerPath = "https://bookcart.azurewebsites.net/register"
    this.loginPath = "https://bookcart.azurewebsites.net/login";

    this.loginBtn = "button.mat-mdc-tooltip-trigger span.mdc-button__label";
    this.registerBtn = "button.mdc-button span.mdc-button__label";
    this.nameField = "ng-tns-c1534922977-1mat-mdc-form-field-flex "
    // this.lastNameField
    // this.userNameField
    // this.passwordField
    // this.confirmPasswordField

    this.firstName = "Name";
    // this.lastName = "Surname";
    // this.userName = "Username";
    // this.password = "Password";
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

  public async clickRegisterBtn(): Promise<void> {
    await this.page.locator(this.registerBtn).click();
    await this.page.waitForURL(this.registerPath);
  }

  public async inputValue(fieldLocator: string, fieldValue: string): Promise<void> {
    await loginPage.inputValue(loginPage.nameField, loginPage.firstName);
    const inputValue = await page.locator(loginPage.nameField).inputValue();
    expect(inputValue).toBe(loginPage.firstName);
  }
  
}
