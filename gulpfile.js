var gulp = require("gulp"),
		connect = require("gulp-connect"),
		opn = require("opn");

// Запуск сервера c лайврелоадом
gulp.task('serv_livereload', function() {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
	opn('http://localhost:8888');
});

// Запуск сервера без лайврелоада
gulp.task('serv_no_livereload', function() {
	connect.server({
		root: 'app',
		port: 8888
	});
	opn('http://localhost:8888');
});

// Работа с html
gulp.task('html', function () {
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

// Работа с css
gulp.task('css', function () {
	gulp.src('./app/css/*.css')
	.pipe(connect.reload());
});

// Работа с js
gulp.task('js', function () {
	gulp.src('./app/js/*.js')
	.pipe(connect.reload());
});

// Слежка
gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

// Задача по-умолчанию 
gulp.task('default', ['serv_livereload', 'watch']);

// Для ie
gulp.task('serv', ['serv_no_livereload', 'watch']);
