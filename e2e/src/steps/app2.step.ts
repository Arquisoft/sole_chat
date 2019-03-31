import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../app.po';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I am on the login page$/, async () => {
    await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the login button$/, async () => {
    expect(await page.getButtonText()).to.equal('Go');
});
// This file must end with a new line after this one

