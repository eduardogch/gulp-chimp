module.exports = {
    // - - - - CHIMP - - - -
    watch: true,
    watchTags: '@focus',
    watchWithPolling: false,
    criticalSteps: null,
    criticalTag: '@critical',
    server: false,
    serverPort: 8060,
    serverHost: 'localhost',
    sync: true,
    offline: false,

    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    platform: 'ANY',
    name: 'MyProDesk',
    user: '',
    key: '',
    port: 2234,
    host: null,

    // - - - - SAUCELABS - - - -
    // user: "userName",
    // key: "xxxxxxxx-xxxx-xxx-xxxx-aaaaaaaaaaaa",
    // port: 80,
    // host: "ondemand.saucelabs.com",

    // - - - - WEBDRIVER-IO  - - - -
    webdriverio: {
        desiredCapabilities: {},
        logLevel: 'silent',
        logOutput: './source/output/logs',
        host: '127.0.0.1',
        port: 4444,
        path: '/wd/hub',
        baseUrl: 'http://localhost',
        coloredLogs: true,
        screenshotPath: './source/output/screenshots',
        waitforTimeout: 500,
        waitforInterval: 250,
    },

    // - - - - SESSION-MANAGER  - - - -
    noSessionReuse: false,

    // - - - - MOCHA  - - - -
    mocha: true,
    path: './source/e2e',
    mochaTimeout: 60000,
    mochaReporter: 'spec',
    mochaSlow: 10000,

    // - - - - PHANTOM  - - - -
    phantom_w: 1280,
    phantom_h: 1024,

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false
};
