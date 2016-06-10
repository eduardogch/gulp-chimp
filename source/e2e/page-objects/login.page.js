var Project = require('./config.page.js');

var Login = Object.create({
    /**
     * define elements
     */
    userName   : function() { return browser.element('#userName'); },
    password   : function() { return browser.element('#password'); },
    loginButton: function() { return browser.element('#loginButton'); },

    /**
     * define Project URL page
     */
    open: function() {
        Project.open('/login');
    },
});

module.exports = Login;
