# sass-maphacks [![Build Status](https://travis-ci.org/ItsJonQ/sass-maphacks.svg?branch=master)](https://travis-ci.org/ItsJonQ/sass-maphacks) [![npm version](https://badge.fury.io/js/sass-maphacks.svg)](https://badge.fury.io/js/sass-maphacks) ![Coverage](https://img.shields.io/badge/coverage-100%25-green.svg) [![devDependency Status](https://david-dm.org/itsjonq/sass-maphacks/dev-status.svg)](https://david-dm.org/itsjonq/sass-maphacks#info=devDependencies)

An Underscore/Lodash-like utility library for Sass maps

# Update

Lol, nevermind! Just discovered [Sass Dash](https://github.com/davidkpiano/sassdash). Might be better to use that instead :).

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
// Input (awesome-class.scss)
@import "sass-maphacks/get";

$color: (
  primary: (
    blue: blue,
    green: green
  ),
  text: black
);

.my-awesome-class {
  color: _get($color, primary, blue);
}

// Output (awesome-class.css)
.my-awesome-class {
  color: blue;
}
```

## Functions

- _concat
- _extend
- _first
- _get
- _has
- _indexOf
- _isList
- _isMap
- _keys
- _last
- _set
- _values
- _zip

More functions + docs coming soon ❤️


## License

MIT © [Jon Q](https://jonquach.com)


## Thanks

A huge thanks to [Hugo Giraudel](http://hugogiraudel.com/) for his awesome + inspiration work with Sass things!
