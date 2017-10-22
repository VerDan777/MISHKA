const gulp = require('gulp');
const sass = require('gulp-sass');
const SassImporter = require('sass-module-importer');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const minify = require('gulp-csso');
const mqpacker = require('gulp-combine-mq');
const rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({importer:SassImporter()}))
    .pipe(mqpacker({
        beautify: true
    }))
    .on('error', notify.onError(function(error) {
        return {
            title: 'Styles',
            message: error.message
        }
    }))
    .pipe(gulp.dest('./src/dist'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./src/dist'))
})