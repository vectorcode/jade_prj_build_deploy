var gulp = require("gulp"),
		connect = require("gulp-connect"),
		opn = require("opn"),
		jade = require('gulp-jade');

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

// Jade 
gulp.task('templates', function() {
  gulp.src('./app/templates/pages/*.jade')
    .pipe(jade({
			pretty: true
		 }))
    .on('error', log)
    .pipe(gulp.dest('./app/'))
    .pipe(connect.reload());
});

function log(error) {
    console.log([
        '',
        "----------ERROR MESSAGE START----------",
        ("[" + error.name + " in " + error.plugin + "]"),
        error.message,
        "----------ERROR MESSAGE END----------",
        ''
    ].join('\n'));
    this.end();
}



// Работа с html
// gulp.task('html', function () {
// 	gulp.src('./app/*.html')
// 	.pipe(connect.reload());
// });

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
	gulp.watch(['./app/templates/**/*.jade'], ['templates']);
	gulp.watch(['./app/css/*.css'], ['css']);
	gulp.watch(['./app/js/*.js'], ['js']);
});

// Задача по-умолчанию 
gulp.task('default', ['serv_livereload', 'watch']);

// Для ie
gulp.task('serv', ['serv_no_livereload', 'watch']);
