# gulp-chimp
Gulp plugin to interact with the Chimp.js

[![npm version](https://badge.fury.io/js/gulp-chimp.svg)](https://badge.fury.io/js/gulp-chimp)
[![Build Status](https://travis-ci.org/eduardogch/gulp-chimp.svg?branch=master)](https://travis-ci.org/eduardogch/gulp-chimp)

## Installation

In the terminal run the following command
- `npm install gulp-chimp --save-dev`

## How to use

Import NPM module in gulpfile.js
```
var chimp = require('gulp-chimp');
```

```
/* Testing e2e with chimp.js **/
gulp.task('e2e', function (done) {
  chimp: {
    options: {
      // Chimp.js options
    },
    env: {
      // Dev, QA, Production
    },
  },
});
```

To run single time chimp.js
- `gulp chimp`
