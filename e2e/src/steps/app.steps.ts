import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../app.po';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I am on the home page$/, { timeout: 60 * 1000 }, async () => {
    await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
    // expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
    expect(await page.getTitleText()).to.equal('SOLE CHAT');
});

Given(/^I am on the login page$/, async () => {
    await page.navigateTo();
});

Then(/^I should see the login description$/, async () => {
    expect(await page.getDescriptionLogin()).to.equal('Login with Solid Identity');
});
// This file must end with a new line after this one
