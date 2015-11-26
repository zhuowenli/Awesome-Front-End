/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp');
var uglify = require('gulp-uglify');

//定义一个叫uglify的任务（自定义任务名称）
gulp.task('jsmin', function() {
	return gulp.src('src/*.js')    //该任务针对的文件
		.pipe(uglify())            //该任务调用的模块
		.pipe(gulp.dest('build')); //将会在build/下生成对应的js文件
});

//定义默认任务
gulp.task('default',['jsmin']);