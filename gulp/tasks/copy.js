const gulp = require('gulp');

gulp.task("copy", function() {
    return gulp.src('./src/dist/*.*')
    .pipe(gulp.dest("build"));
  });