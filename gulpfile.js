var gulp = require('gulp');
var sass = require('gulp-sass'),
browserSync = require('browser-sync').create(),
runSequence = require('run-sequence');


gulp.task('sass', function(){
	return gulp.src('app/styles/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/styles'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/styles/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/scripts/**/*.js', browserSync.reload);
});

gulp.task('default', function(callback) {
	runSequence(['sass', 'browserSync', 'watch'],
		callback
		)
});