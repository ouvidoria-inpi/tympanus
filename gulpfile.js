const gulp = require('gulp');
const download = require('gulp-download-stream');
const stripCssComments = require('gulp-strip-css-comments');
const header = require('gulp-header');

// Imported from Brand.ai
const scssFile = '_tokens.scss';
const scssFolder = 'base/';
const scssURL = 'https://assets.brand.ai/dsgov/tema-principal/_style-params.scss?key=7QApNQG6j';

gulp.task('get-tokens', function() {
  return download({
    file: scssFile,
    url: scssURL
  })
  .pipe(gulp.dest(scssFolder));
});

gulp.task('clean-tokens', function() {
  gulp.src(scssFolder + scssFile)
  .pipe(stripCssComments())
  .pipe(header('// sass-lint:disable empty-args\n'))
  .pipe(header('// sass-lint:disable property-sort-order\n'))
  .pipe(header('// sass-lint:disable hex-length\n'))
  .pipe(gulp.dest(scssFolder));
});

gulp.task('styles', gulp.series('get-tokens', 'clean-tokens'));
