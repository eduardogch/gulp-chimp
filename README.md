# gulp-chimp

[Chimp.js](https://github.com/xolvio/chimp/) makes it super easy for developers to write automated tests (Selenium, WebDriverIO, )
Saucelabs, Mocha, Cucumber, etc. etc.)

[gulp-chimp](https://github.com/eduardogch/gulp-chimp/) to interact with the Chimp.js

[![npm version](https://badge.fury.io/js/gulp-chimp.svg)](https://badge.fury.io/js/gulp-chimp)
[![Build Status](https://travis-ci.org/eduardogch/gulp-chimp.svg?branch=master)](https://travis-ci.org/eduardogch/gulp-chimp)

## Install

In the terminal run the following command
```
npm install gulp-chimp --save-dev
```

## Usage with chimp.conf.js file

```
/* Chimp.js - Automated Testing without Options */
gulp.task('chimp', function () {
    return chimp('./chimp.conf.js');
});
```

##### config

Type: `object`<br>
Default `true`<br>
File  [chimp.conf.js](https://github.com/eduardogch/gulp-chimp/blob/master/chimp.conf.js)

## Usage with options

```
/* Chimp.js - Automated Testing with Options */
gulp.task('chimp-options', function () {
    return chimp({
        path: './source/e2e/spec',
        browser: 'chrome',
        debug: false,
        log: 'info',
        timeout: 60000,
        port: 2356
    });
});
```

##### path

Type: `string`<br>
Default: `./source/e2e/spec`

##### browser

Type: `string`<br>
Default `chrome`

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
