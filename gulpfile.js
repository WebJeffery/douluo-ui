'use strict';

const path = require('path')
const { series, src, dest } = require('gulp');
const gulpSass = require('gulp-sass');
const dartSass = require('sass')
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

const distFolder = path.resolve(__dirname, 'styles/theme')

function compileIndex() {
  const sass = gulpSass(dartSass)
  return src('./styles/src/**.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./styles/theme'));
}

const compileElement = function () {
  const sass = gulpSass(dartSass)
  return src('./styles/src/element-ui/**.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./styles/theme/element-ui'));

}

// function copyfont() {
//   return src('./src/fonts/**')
//     .pipe(cssmin())
//     .pipe(dest('./lib/fonts'));
// }

/**
 * copy from packages/theme-chalk/dist to dist/element-plus/theme-chalk
 */
function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest('./lib/theme'))
}

exports.build = series(compileIndex, compileElement, copyThemeChalkBundle);
