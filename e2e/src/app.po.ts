
import { browser, by, element } from 'protractor';

export class AppPage {
    navigateToLogin() {
        return browser.get('/login');
    }
    navigateToCard () {
        return browser.get('/card');
    }

    getCardTitleText() {
        // Function sleep to try to fix "not found element" and timeout failure
        this.sleep(3000);
        return element(by.css('h1')).getText();
    }
    getDescriptionLogin() {
        return element(by.css('h2')).getText();
    }
    clickOnRegisterButton() {
        return element(by.id('registerButton')).click();
    }

    clickOnSaveButton() {
        return element(by.id('saveButton')).click();
    }
    private sleep(milliseconds: number): void {
        const start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}
