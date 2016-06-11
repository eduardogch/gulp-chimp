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

## Usage with options

```
/* Chimp.js - Automated Testing with Options */
gulp.task('chimp-options', function () {
    return chimp({
        path: './source/e2e/spec',
        log: 'verbose',
        timeout: 6000,
        env: 'development'
    });
});
```

##### verbose

Type: `boolean`<br>
Default: `false`

Display debug messages.

##### timeout

Type: `number`<br>
Default `5000`

Time to wait in milliseconds before a test automatically fails.

##### config

Type: `object`
Default `true`

chimp.conf.js template [chimp.conf.js](https://github.com/xolvio/chimp/blob/master/src/bin/default.js)
