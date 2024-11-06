import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage"; // Import klasy bazowej

export class RegisterPage extends BasePage {
  click(registerBtn2: any) {
    throw new Error("Method not implemented.");
  }
  readonly homePath = "https://bookcart.azurewebsites.net";
  readonly registerPath = "https://bookcart.azurewebsites.net/register";
  readonly loginPath = "https://bookcart.azurewebsites.net/login";

  readonly loginBtn: Locator;
  readonly registerBtn: Locator;
  readonly nameField: Locator;
  readonly lastNameField: Locator;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;

  readonly checkboxMale: Locator;

  readonly firstName = "Name";
  readonly lastName = "Surname";
  readonly userName = "Username1234";
  readonly password = "Password123!";

  public generateUsername(): string {
    return `Username${Math.floor(Math.random() * 10000)}`;  // Generuje unikalny username np. Username1234
  }

  constructor(page: Page) {
    super(page); 
    // Przypisanie lokatorów bezpośrednio do zmiennych typu Locator
    this.loginBtn = this.page.locator('button:has-text("Login")');
    this.registerBtn = this.page.locator('button:has-text("Register")');
    this.nameField = this.page.locator('input[placeholder="First name"]');
    this.lastNameField = this.page.locator('input[placeholder="Last Name"]');
    this.userNameField = this.page.locator('input[placeholder="User name"]');
    this.passwordField = this.page.locator('input[placeholder="Password"]');
    this.confirmPasswordField = this.page.locator('input[placeholder="Confirm Password"]');
    this.checkboxMale = this.page.locator('#mat-radio-2-input');
    // Generowanie dynamicznego username przed każdym testem
    // this.userName = this.generateUsername();
  }

  public async openHomePage(): Promise<void> {
    await this.open(this.homePath); 
  }

  public async clickLoginBtn(): Promise<void> {
    await this.clickLocator(this.loginBtn); 
  }

  public async waitForLoginPage(): Promise<void> {
    await this.waitForURL(this.loginPath);
  }

  public async waitForRegisteredUsrPage(): Promise<void> {
    await this.waitForURL(this.homePath);
    // await this.page.waitForSelector(this.userLoggedIn); // Używamy poprawnej zmiennej
  }

  public async clickRegisterBtn(): Promise<void> {
    await this.clickLocator(this.registerBtn); 
    await this.waitForURL(this.registerPath);
  }

  public async inputValue(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
    // expect(await locator.inputValue()).toBe(value);
  }

  public async fillRegistrationForm(): Promise<void> {
    await this.inputValue(this.nameField, this.firstName);
    await this.inputValue(this.lastNameField, this.lastName);
    await this.inputValue(this.userNameField, this.userName);
    await this.inputValue(this.passwordField, this.password);
    await this.inputValue(this.confirmPasswordField, this.password);
  }

  public async checkMaleCheckbox(): Promise<void> {
    await this.checkboxMale.check(); 
  }
}
