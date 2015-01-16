// Include gulp
var gulp = require('gulp');
 
// Include Our Plugins
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
  return gulp.src(['public/js/*.js', 'routes/**/*.js'])
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


gulp.task('test', function () {
  gulp.src('spec/**/*.js')
  .pipe(mocha({
    reporter: 'nyan'
  }));
});
 
// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(['api/**/*.js', 'app.js', 'test/**/*.js'], ['lint', 'test']);
  gulp.watch('sass/*.sass', ['sass']);
});
 
// Default Task
gulp.task('default', ['lint', 'test', 'develop', 'watch']);