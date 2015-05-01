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