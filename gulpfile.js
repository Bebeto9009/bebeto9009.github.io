var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      'css/*.css',
      'js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});

// Default task to be run with `gulp`
gulp.task('default', ["browser-sync"]);