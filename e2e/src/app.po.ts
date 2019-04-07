import {browser, by, element} from 'protractor';

export class AppPage {
    navigateToLogin() {
        this.sleep(3000);
        return browser.get('/login');
    }

    navigateToRegister() {
        this.sleep(3000);
        return browser.get('/register');
    }

    navigateToCard() {
        this.sleep(3000);
        return browser.get('/card');
    }

    navigateToChat() {
        this.sleep(3000);
        return browser.get('/chat');
    }


    getCardTitleText() {
        this.sleep(3000);
        return element(by.css('h1')).getText();
    }

    getDescriptionLogin() {
        return element(by.css('h2')).getText();
    }

    getParagraphRegister1() {
        return element(by.id('paragraphRegister1')).getText();
    }

    getParagraphRegister2() {
        return element(by.id('paragraphRegister2')).getText();
    }

    clickOnRegisterButton() {
        return element(by.id('registerButton')).click();
    }

    clickOnSaveButton() {
        return element(by.id('saveButton')).click();
    }

    clickOnNewChat() {
        return element(by.id('newChatButton')).click();
    }

    // This function is used to reduce the speed of the test
    // in order to avoid errors when running the tests
    private sleep(milliseconds: number): void {
        const start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}
