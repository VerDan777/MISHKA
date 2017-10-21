const gulp = require('gulp');
const svgmin = require("gulp-svgmin");
const rename = require('gulp-rename');
const svgstore = require("gulp-svgstore");

gulp.task("symbols", function() {
    return gulp.src("./src/dist/img/icons/*.svg")
    .pipe(gulp.dest("build/img"));
  });