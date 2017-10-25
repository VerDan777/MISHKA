const gulp = require('gulp');
const watch = require('gulp-watch');
const BrowserSync = require('browser-sync').create();

gulp.task('watch', function() {
    BrowserSync.init({
        server : {
            baseDir: './src/dist'
        },
        notify: {
            styles: {
                top: "auto",
                bottom: 0
            }
        }
    })
});
// pug
watch('./src/*.pug', function() {
    gulp.start('pugChanged');
});

// styles
watch('./src/sass/**/*.scss', function() {
    gulp.start('cssInject');
});

gulp.task('pugChanged', ['PugRender'], function() {
    BrowserSync.reload();
});
gulp.task('cssInject', ['styles'], function() {
    gulp.src('./src/dist/style.css')
    .pipe(BrowserSync.stream());
});