# Level 3

- Gulp watch (真正实现自动化)

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/gulp/level-3/`，切换到`gulp-level-3`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`gulp`或者`gulp build`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install gulp --save-dev`，下载gulp依赖。
3. 依次执行下列代码，下载相应插件。

    ```
    $ npm install gulp-jshint gulp-concat gulp-uglify gulp-rename gulp-sass gulp-minify-css gulp-notify --save-dev
    ```

4. 创建并编辑`gulpfile.js`文件。
5. 执行`gulp` 或者 `gulp build`，查看效果。(执行`gulp`将会监听代码，执行相应命令)。

## 建立任务队列

首先我们编译sass，保存到我们指定的目录下面，还没结束，我们还要压缩，给文件添加 .min 后缀再输出压缩文件到指定目录，最后提醒任务完成了：

```js
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
```

js代码校验：

```js
gulp.task('jshint', function() {
    gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
```

js代码合并和压缩：

```js
gulp.task('jsmin', function() {
    return gulp.src('src/*.js')
        .pipe(uglify({
            mangle: true,  //类型：Boolean 默认：true 是否修改变量名
            compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(concat('build.js'))     // 将所有的文件合并到一个叫build.js的文件里去
        .pipe(rename('build.min.js')) // 重命名为：build.min.js
        .pipe(gulp.dest('./build'))
});
```

事件监听：

```js
gulp.task('default', function(){
    gulp.watch('src/*.js', ['jshint', 'jsmin']);
    gulp.watch(['sass/*.sass', 'sass/*.scss'], ['cssmin']);
});
```
