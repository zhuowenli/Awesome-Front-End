/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('jsmin', function() {
    // 匹配符“!”，“*”，“**”，“{}”
    // gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
	return gulp.src('src/*.js')
		.pipe(uglify({
            mangle: true,  //类型：Boolean 默认：true 是否修改变量名
            compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
		.pipe(gulp.dest('build'));
});

gulp.task('jshint', function() {
    gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//定义默认任务
gulp.task('default',['jshint', 'jsmin']);