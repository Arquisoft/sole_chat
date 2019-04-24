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

    navigateToUserList() {
        this.sleep(3000);
        return browser.get('/userList');
    }



    navigateToChat() {
        this.sleep(3000);
        return browser.get('/chat');
    }


    getCardTitleText() {
        this.sleep(3000);
        return $('h1').getText();
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

    getUserListTitle() {
        return element(by.id('userListTitle')).getText();
    }


    clickOnRegisterButton() {
        return element(by.id('registerButton')).click();
    }


    clickOnSaveButton() {
        return element(by.id('saveButton')).click();
    }


    clickOnCreateNewChat() {
        return element(by.id('newChatButton')).click();
    }


    clickOnNewChat() {
        this.sleep(3000);
        return element(by.id('exampleModalLongTitle'));
    }
    clickOnLoginSelectMenu() {
        this.sleep(3000);
        return element(by.id('login-select-menu')).click();
    }

    clickOnSolidCommunity() {
         this.sleep(3000);
        return element(by.cssContainingText('div',  'Solid Community')).click();
    }

    clickOnButtonGo() {
        this.sleep(7000);
        return element(by.className('wide-button')).click();
    }
    writeMessage(message: string) {
        this.sleep(3000);
        browser.driver.findElement(by.id('inputMessage')).click();
        return browser.driver.findElement(by.id('inputMessage')).sendKeys(message);
    }

    introduceCredentials() {
        this.sleep(3000);
        // return element(by.className('form-control')).click();
         return element(by.id('username')).click();
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
