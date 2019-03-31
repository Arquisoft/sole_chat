
import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/www.google.com');
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText();
    }
}
