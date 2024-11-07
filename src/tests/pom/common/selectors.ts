import { Page } from "@playwright/test";

const selectors = {
  rgstrpage: {
    // Buttons
    loginBtn: (page: Page) => page.getByRole("button", { name: "Login" }),
    registerBtn: (page: Page) => page.getByRole("button", { name: "Register" }),

    // Input Fields
    nameField: (page: Page) => page.getByPlaceholder("First name"),
    lastNameField: (page: Page) => page.getByPlaceholder("Last Name"),
    userNameField: (page: Page) => page.getByPlaceholder("User name"),
    passwordField: (page: Page) =>
      page.getByPlaceholder("Password", { exact: true }),
    confirmPasswordField: (page: Page) => page.getByText("Confirm Password"),

    // Checkbox
    maleCheckbox: (page: Page) => page.locator("#mat-radio-2-input"),
  },

  testData: {
    // Test data for registration page
    firstName: "Name",
    lastName: "Surname",
    userName: "Username1234",
    password: "Password123!",
  },

  shppage: {
    // Buttons
    clickAddToCartButton: async (page: Page, index: number) => {
      const button = page
        .getByRole("button", { name: "Add to Cart" })
        .nth(index);
      await button.focus();
      await button.click();

    // Input Fields

    },
  },
  common: {},
};

export { selectors };
