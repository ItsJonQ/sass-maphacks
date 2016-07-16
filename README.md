# sass-maphacks [![Build Status](https://travis-ci.org/ItsJonQ/sass-maphacks.svg?branch=master)](https://travis-ci.org/ItsJonQ/sass-maphacks)

## Install
```
npm install sass-maphacks --save-dev
```

## Basic Usage

### SCSS
This library needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var maphacks = require('sass-maphacks');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: maphacks
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *sass-maphacks* as needed in your `.scss` file:

```scss
@import "sass-maphacks/_index";
```

## Importing individual functions

If you wish to manually import and use indivdual functions in your code base (instead of importing all the `sass-maphacks` things), you can do the following:

```scss
@import "sass-maphacks/get";

.my-awesome-class {
  color: get($color, primary, blue);
}
```

More docs coming soon ❤️
