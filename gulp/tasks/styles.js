const gulp = require('gulp');
const sass = require('gulp-sass');
const SassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const minify = require('gulp-csso');

gulp.task('styles', function() {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({importer:SassImporter()}))
    .on('error', notify.onError(function(error) {
        return {
            title: 'Styles',
            message: error.message
        }
    }))
    .pipe(minify())
    .pipe(gulp.dest('./src/dist'));
})