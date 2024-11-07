import { Page } from "@playwright/test";
import { BasePage } from "./basePage"; 
import { selectors } from "../pom/common/selectors"; 
import { URLs } from "../pom/common/urls"; 

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public generateUsername(): string {
    return `Username${Math.floor(Math.random() * 10000)}`; 
  }

  public async openHomePage(): Promise<void> {
    await this.open(URLs.homePath); 
  }

  public async clickLoginBtn(): Promise<void> {
    await selectors.rgstrpage.loginBtn(this.page).click(); 
  }

  public async waitForLoginPage(): Promise<void> {
    await this.waitForURL(URLs.loginPath); 
  }

  public async waitForRegisteredUsrPage(): Promise<void> {
    await this.waitForURL(URLs.homePath); 
  }

  public async clickRegisterBtn(): Promise<void> {
    await selectors.rgstrpage.registerBtn(this.page).click(); 
    await this.waitForURL(URLs.registerPath); 
  }

  public async inputValue(
    locator: (page: Page) => any,
    value: string
  ): Promise<void> {
    await locator(this.page).fill(value);
  }

  public async fillRegistrationForm(): Promise<void> {
    await this.inputValue(selectors.rgstrpage.nameField, "Name");
    await this.inputValue(selectors.rgstrpage.lastNameField, "Surname");
    await this.inputValue(selectors.rgstrpage.userNameField, "Username1234");
    await this.inputValue(selectors.rgstrpage.passwordField, "Password123!");
    await this.inputValue(
      selectors.rgstrpage.confirmPasswordField,
      "Password123!"
    );
  }

  public async checkMaleCheckbox(): Promise<void> {
    await selectors.rgstrpage.maleCheckbox(this.page).check(); 
  }
}
