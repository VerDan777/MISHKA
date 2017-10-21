const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task("images", function() {
    return gulp.src("./src/dist/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
  });