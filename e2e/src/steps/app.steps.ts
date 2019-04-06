import {Before, Given, Then, When} from 'cucumber';
import {expect} from 'chai';

import {AppPage} from '../app.po';

let page: AppPage;

Before(() => {
    page = new AppPage();
});


// Go to the login
Given(/^I am on the login page$/, {timeout: 5 * 1000}, async () => {
    await page.navigateToLogin();
});
When(/^I do nothing$/, () => {
});


// Go to the login - Display the description
Then(/^I should see the login description$/, async () => {
    expect(await page.getDescriptionLogin()).to.equal('Login with Solid Identity');
});


// Go to the card - Display the title
Given(/^I am on the card page$/, async () => {
    await page.navigateToCard();
});
Then(/^I should see the card title$/, async () => {
    expect(await page.getCardTitleText()).to.equal('Profile');
});


// Click on login button - Display anything
When(/^I click on register button$/, async () => {
    await page.clickOnRegisterButton();
});
Then(/^It should happen anything$/, () => {
});

// Click on the save button - Happen anything
When(/^I click on save button$/, async () => {
    await page.clickOnSaveButton();
});

// Display the profile image
Then(/^I should see the profile image$/, () => {
});


// Go to the register page - Display the first paragraph
Given(/^I am on the register page$/, async () => {
    await page.navigateToRegister();
});

Then(/^I should see the first paragraph$/, async () => {
    expect(await page.getParagraphRegister1()).to.equal('Select Solid Identity Provider');
});





