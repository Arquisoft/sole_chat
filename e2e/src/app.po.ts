
import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/login');
    }

    getTitleText() {
       // return element(by.css('app-root h1')).getText();
        return element(by.css('h1')).getText();
    }
}
