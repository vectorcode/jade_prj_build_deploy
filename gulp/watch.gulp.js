var gulp = require("gulp");

gulp.task('watch', function () {
	gulp.watch('./app/templates/**/*.jade', ['templates']);
	gulp.watch('./app/css/*.css', ['css']);
	gulp.watch('./app/js/*.js', ['js']);
});
