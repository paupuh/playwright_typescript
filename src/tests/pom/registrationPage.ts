import { Page } from "playwright";
import { expect } from "@playwright/test";

export class RegisterPage {
  page: Page;
  homePath: string;
  registerPath: string;

  loginBtn: string;
  loginPath: string;
  registerBtn: string;
  registerBtn2: string;

  nameField: string;
  lastNameField: string;
  userNameField: string;
  passwordField: string;
  confirmPasswordField: string;
  checkboxMale: string;

  firstName: string;
  lastName: string;
  userName: string;
  password: string;

  constructor(page: Page) {
    this.page = page;
    this.homePath = "https://bookcart.azurewebsites.net"; // URL do strony głównej
    this.registerPath = "https://bookcart.azurewebsites.net/register";
    this.loginPath = "https://bookcart.azurewebsites.net/login";

    this.loginBtn = "button.mat-mdc-tooltip-trigger span.mdc-button__label";
    this.registerBtn = 'span.mdc-button__label:has-text("Register")';
    this.registerBtn2 = '#mat-radio-2-input'

    this.nameField = 'input[placeholder="First name"]';
    this.lastNameField = 'input.mat-mdc-input-element[placeholder="Last Name"]';
    this.userNameField = 'input.mat-mdc-input-element[placeholder="User name"]';
    this.passwordField = 'input.mat-mdc-input-element[placeholder="Password"]';
    this.confirmPasswordField = 'input.mat-mdc-input-element[placeholder="Confirm Password"]';
    this.checkboxMale = '#mat-radio-2-input'

    this.firstName = "Name";
    this.lastName = "Surname";
    this.userName = "Username";
    this.password = "Password";
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

  public async clickField(locator: string): Promise<void> {
    await this.page.locator(locator).focus();
    await this.page.locator(locator).click();
  }

  public async inputValue(locator: string, value: string): Promise<void> {
    await this.page.locator(locator).fill(value);
    expect(await this.page.locator(locator).inputValue()).toBe(value);
  }
}
