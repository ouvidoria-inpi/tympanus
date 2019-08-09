const gulp = require('gulp');
const download = require('gulp-downloader');
const stripCssComments = require('gulp-strip-css-comments');
const rename = require('gulp-rename');
const header = require('gulp-header');

// Imported from Brand.ai
const scssURL = 'https://assets.brand.ai/dsgov/tema-principal/_style-params.scss?key=7QApNQG6j';

gulp.task('styles', function(){
  return download(scssURL)
    .pipe(stripCssComments())
    .pipe(rename('_tokens.scss'))
    .pipe(header('// sass-lint:disable empty-args\n'))
    .pipe(header('// sass-lint:disable property-sort-order\n'))
    .pipe(header('// sass-lint:disable hex-length\n'))
    .pipe(gulp.dest('base'));
});
