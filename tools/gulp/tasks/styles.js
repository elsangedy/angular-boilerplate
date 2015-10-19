module.exports = function(gulp, $) {

  gulp.task('less', function() {
    $.log("Building css files...");
    return $.streams.less();
  });

  gulp.task('styles', function() {
    $.log("Building css files...");
    return $.streams.less();
  });

};
