/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	return gulp.src('src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});