var gulp = require('gulp');
var sass = require ('gulp-sass');

// Declare Gulp plugins
gulp.task('sass', function () {
	gulp.src('./public/scss/main.scss')
		.pipe(sass({includePaths: ['./public/scss']}))
		.pipe(gulp.dest('./public/css'));
});

// Run Gulp plugins
gulp.task('default', function () {
	gulp.run('sass');

	// Watch scss files
	gulp.watch(['./public/scss/**.scss'], function () {
		gulp.run('sass');
	});
});