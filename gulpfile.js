
var gulp = require('gulp');

var browserSync = require('browser-sync');

var sass = require('gulp-ruby-sass');

gulp.task('start', function() {
	console.log('Gulp Start... OK');
});

// gulp.task('sass', function() {
// 	return gulp.src(['scss/.*scss'])
// 				.pipe(sass({
// 					compass: true, 
// 					style: 'compressed'
// 				}))
// 				.on('error' function(err) {
// 					console.log(err.message);
// 				})
// 				.pipe(gulp.dest('css'));
// });

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['start', 'browser-sync'], function() {
	gulp.watch(['index.html'], browserSync.reload);
	gulp.watch(['templates/*.html'], browserSync.reload);
	gulp.watch(['css/*.css'], browserSync.reload);
	gulp.watch(['js/*.js'], browserSync.reload);
});

