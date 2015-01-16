// Include gulp
var gulp = require('gulp');
 
// Include Our Plugins
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

var path = {
  src: ['api/**/*.js', 'index.js'],
  test: 'spec/**/*.js'
};

gulp.task('lint', function() {
  return gulp.src(['api/**/*.js', 'index.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});


gulp.task('develop', function () {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
  .on('restart', function () {
  console.log('restarted!')
  })
});

gulp.task('mocha', function () {
  gulp.src(path.test)
  .pipe(mocha({
    reporter: 'nyan'
  }));
});
 
// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(path.src, ['lint']);
});

// Default Task
gulp.task('default', ['lint', 'develop', 'watch']);