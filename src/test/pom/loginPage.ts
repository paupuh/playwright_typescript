import { Page } from "@playwright/test";

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    public loginButton = 'button[mattooltip="Login"]'

    //methods

}