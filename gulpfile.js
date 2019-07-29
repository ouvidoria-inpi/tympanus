const gulp = require('gulp');
const download = require('gulp-downloader');
const decompress = require('gulp-decompress');
const stripCssComments = require('gulp-strip-css-comments');
const rename = require('gulp-rename');
const header = require('gulp-header');

// Imported from Brand.ai
const scssURL = 'https://assets.brand.ai/dsgov/tema-principal/_style-params.scss?key=7QApNQG6j';
const iconsURL = 'https://assets.brand.ai/dsgov/tema-principal/icons.zip?key=7QApNQG6j';
const imagesURL = 'https://assets.brand.ai/dsgov/tema-principal/images.zip?key=7QApNQG6j';

gulp.task('styles', function(){
  return download(scssURL)
    .pipe(stripCssComments())
    .pipe(rename('_tokens.scss'))
    .pipe(header('// sass-lint:disable empty-args\n'))
    .pipe(header('// sass-lint:disable property-sort-order\n'))
    .pipe(header('// sass-lint:disable hex-length\n'))
    .pipe(gulp.dest('base'));
});

gulp.task('icons', function(){
  return download(iconsURL).pipe(decompress()).pipe(gulp.dest('icons'));
});

gulp.task('images', function(){
  return download(imagesURL)
          .pipe(decompress()).pipe(gulp.dest('images'));
});
