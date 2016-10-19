# gulp-chimp

[Chimp.js](https://github.com/xolvio/chimp/) makes it easy for developers to write automated/e2e tests for web applications with a technology stack for Selenium, WebDriverIO, Saucelabs, Mocha and Cucumber.

[gulp-chimp](https://www.npmjs.com/package/gulp-chimp) is a wrapper to interact with Chimp.js in a gulp task.

[![npm version](https://badge.fury.io/js/gulp-chimp.svg)](https://badge.fury.io/js/gulp-chimp)
[![Build Status](https://travis-ci.org/eduardogch/gulp-chimp.svg?branch=master)](https://travis-ci.org/eduardogch/gulp-chimp)

## Quick Install

In the terminal run the following command
```
npm install gulp-chimp --save-dev
```

## Usage with chimp.conf.js file  [chimp.conf.js](https://github.com/eduardogch/gulp-chimp/blob/master/chimp.conf.js)

```
var chimp = require('gulp-chimp');

/* Chimp.js - Automated/e2e Testing with a config file */
gulp.task('chimp', function () {
    return chimp('chimp.conf.js');
});
```

## Cucumber HTML Report

![alt tag](https://github.com/eduardogch/gulp-chimp/raw/master/cucumber-html-report.png)

## Usage with chimp.js options

```
gulp.task('chimp-options', () => {
    return chimp({
        features: './source/e2e/features', // Cucumber features files
        browser: 'phantomjs',
        singleRun: true,
        debug: false,
        output: {
            screenshotsPath: './e2e_output/screenshots',
            jsonOutput: './e2e_output/cucumber.json'
        },
        htmlReport: {
            enable: true,
            jsonFile: './e2e_output/cucumber.json',
            output: './e2e_output/report/cucumber.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        }
    });
});
```

##### features

Type: `string`<br>
Default: `./source/e2e/features`

##### browser

Type: `string`<br>
Default `phantomjs`

##### singleRun

Type: `boolean`<br>
Default `true`

##### debug

Type: `boolean`<br>
Default `false`

##### output

Type: `object`<br>
Default
```
output: {
    screenshotsPath: './e2e_output/screenshots',
    jsonOutput: './e2e_output/cucumber.json'
}
```

##### htmlReport

Type: `object`<br>
Default
```
htmlReport: {
    enable: true,
    jsonFile: './e2e_output/cucumber.json',
    output: './e2e_output/report/cucumber.html',
    reportSuiteAsScenarios: true,
    launchReport: true
}
```
