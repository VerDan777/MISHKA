const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('Pages', function() {
    return gulp.src('./src/dist/**/*')
    .pipe(ghPages())
})