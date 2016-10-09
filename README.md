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
    return chimp('./chimp.conf.js');
});
```

## Usage with chimp.js options

```
/* Chimp.js - Automated/e2e Testing with options */
gulp.task('chimp-options', function () {
    return chimp({
        path: './source/e2e/features', // Cucumber features files
        browser: 'chrome',
        singleRun: true,
        debug: true,
        log: 'info',
        timeout: 60000,
        port: 2345
    });
});
```

##### path

Type: `string`<br>
Default: `./source/e2e/features`

##### browser

Type: `string`<br>
Default `chrome`

##### singleRun

Type: `boolean`<br>
Default `true`

##### debug

Type: `boolean`<br>
Default `false`

##### log

Type: `string`<br>
Default: `info`

##### timeout

Type: `number`<br>
Default `60000`

##### port

Type: `number`<br>
Default `2356`
