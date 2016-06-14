var Login = require('../page-objects/login.page.js');

describe('Login e2e Test', function() {

    beforeEach(function() {
        Login.open();
    });

    afterEach(function() {
        var imageName = (this.currentTest.title).replace(/\s/g, '');
        browser.saveScreenshot('./source/output/screenshots/' + imageName + '.png');
    });

    it('Should title be Hola Gulp Chimp.js @focus', function() {
        expect(browser.getTitle()).to.equal('Hola Gulp Chimp.js');
    });

    it('Should be able to Login @focus', function() {
        Login.userName().setValue('Eduardo');
        Login.password().setValue('12345');
        Login.loginButton().click();
        expect(browser.getUrl()).to.equal('http://localhost:3000/home');
    });
});
