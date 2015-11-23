# Level 1

本篇将教会大家：

- 构建Gulp实例
- 下载依赖
- 下载插件
- 调用插件
- 执行Gulp命令

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/gulp/level-1/`，切换到`gulp-level-1`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`gulp`或者`gulp default`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install gulp --save-dev`，下载gulp依赖。
3. 执行`npm install gulp-uglify --save-dev`，下载gulp-uglify这个代码压缩插件。
4. 创建并编辑`gulpfile.js`文件。
5. 执行`gulp uglify`或者`gulp`，查看效果。（当执行`gulp`或者`gulp default`的时候，将会调用default任务队列里的所有任务）
