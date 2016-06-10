var Login = require('../page-objects/login.page.js');

describe('Login e2e Test', function() {

    beforeEach(function() {
        Login.open();
    });

    afterEach(function() {
        var imageName = (this.currentTest.title).replace(/\s/g, '');
        browser.saveScreenshot("./e2e_output/screenshots/" + imageName + ".png");
    });

    it('Should title be "Hola Gulp Chimp.js" @focus', function() {
        expect(browser.getTitle()).to.equal('Hola Gulp Chimp.js');
    });

    it('Should be able to Login @focus', function() {
        Login.inputUserName().setValue('Eduardo');
        Login.inputPassword().setValue('12345');
        Login.loginButton().click();
        expect(browser.getUrl()).to.equal('http://localhost:3001/login');
    });
});
