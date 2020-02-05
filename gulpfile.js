const gulp = require("gulp");
const download = require("gulp-download-files");
const stripCssComments = require("gulp-strip-css-comments");
const header = require("gulp-header");
const decompress = require("gulp-decompress");
const rename = require("gulp-rename");

// Imported from Brand.ai
const scssFile = "_tokens.scss";
const scssFolder = "base/";
const scssURL =
  "https://assets.brand.ai/dsgov/tema-principal/_style-params.scss?key=7QApNQG6j";

const logosFolder = "assets/images/";
const logosURL =
  "https://assets.brand.ai/dsgov/tema-principal/logos.zip?key=7QApNQG6j";

gulp.task("get-logos", () => {
  return download(logosURL)
    .pipe(decompress())
    .pipe(gulp.dest(logosFolder));
});

gulp.task("get-tokens", () => {
  return download(scssURL)
    .pipe(rename(scssFile))
    .pipe(gulp.dest(scssFolder));
});

gulp.task("clean-tokens", done => {
  gulp
    .src(scssFolder + scssFile)
    .pipe(stripCssComments())
    .pipe(gulp.dest(scssFolder));
  done();
});

gulp.task("styles", gulp.series("get-tokens", "clean-tokens", "get-logos"));
