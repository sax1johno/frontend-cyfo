var gulp = require('gulp'),
    sync = require('run-sequence'),
    browser = require('browser-sync'),
    webpack = require('webpack-stream'),
    todo = require('gulp-todoist');

var paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,styl,html'],
  js: 'client/app/**/*!(.spec.js).js',
  styl: 'client/app/**/*.styl',
  toCopy: ['client/index.html'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist'
};

gulp.task('todo', function() {
  return gulp.src(paths.js)
      .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', function() {
  return gulp.src(paths.entry)
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  browser({
    port: process.enc.PORT || 8000,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('copy', function() {
  return gulp.src(paths.toCopy, {base: 'client'})
      .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done);
});
