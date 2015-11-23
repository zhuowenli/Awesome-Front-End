/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass   = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify');

gulp.task('jsmin', function() {
    // 匹配符“!”，“*”，“**”，“{}”
    // gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])
	return gulp.src('src/*.js')
		.pipe(uglify({
            mangle: true,  //类型：Boolean 默认：true 是否修改变量名
            compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(concat('build.js'))     // 将所有的文件合并到一个叫build.js的文件里去
        .pipe(rename('build.min.js')) // 重命名为：build.min.js
        .pipe(gulp.dest('./build'))
});

gulp.task('jshint', function() {
    gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('cssmin', function() {
    //编译sass
    return gulp.src(['sass/*.sass', 'sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('sass'))          //保存未压缩文件到我们指定的目录下面
    .pipe(rename({ suffix: '.min' })) //给文件添加.min后缀
    .pipe(minifycss())                //压缩样式文件
    .pipe(gulp.dest('build'))
    .pipe(notify({ message: 'Done. Fucking wonderful!' })); // 任务提醒
});


gulp.task('build', function(){
    gulp.run('jshint', 'jsmin', 'cssmin');
});

gulp.task('default', function(){
    // 监听文件变化
    gulp.watch('src/*.js', ['jshint', 'jsmin']);
    gulp.watch(['sass/*.sass', 'sass/*.scss'], ['cssmin']);
});