# gulp-chimp
Gulp plugin to interact with the Chimp.js

[![npm version](https://badge.fury.io/js/gulp-chimp.svg)](https://badge.fury.io/js/gulp-chimp)
[![Build Status](https://travis-ci.org/eduardogch/gulp-chimp.svg?branch=master)](https://travis-ci.org/eduardogch/gulp-chimp)

## Install

In the terminal run the following command
```
npm install gulp-chimp --save-dev
```

## Usage

Import NPM module in gulpfile.js
```
var chimp = require('gulp-chimp');

/* Automated Testing with Chimp.js */
gulp.task('chimp', function () {
    return gulp.src('test/e2e/test.spec.js')
        .pipe(chimp());
});
```

## Options

```
/* Automated Testing with Chimp.js */
gulp.task('chimp', function () {
    return gulp.src('test/e2e/test.spec.js')
        .pipe(chimp([options]));
});
```
### chimp([options])

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

Pass config chimp.js object [chimp.conf.js](https://github.com/xolvio/chimp/blob/master/src/bin/default.js)
