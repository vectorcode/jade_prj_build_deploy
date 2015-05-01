require('require-dir')('./gulp');

var gulp = require("gulp"),
		connect = require("gulp-connect"),
		opn = require("opn"),
		jade = require('gulp-jade');

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

// Задача по-умолчанию 
gulp.task('default', ['serv_livereload', 'watch']);

// Для ie
gulp.task('serv', ['serv_no_livereload', 'watch']);
