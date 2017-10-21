const gulp = require('gulp');
const run =  require('run-sequence');

gulp.task("build", function(fn) {
    run(
      "clean",
      "copy",
      "styles",
      "images",
      "symbols",
      fn
    );
  });