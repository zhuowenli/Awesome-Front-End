# Level 2

本篇将教会大家：

- 构建多任务执行队列
- `*`通配符

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/grunt/level-2/`，切换到`grunt-level-2`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`grunt`或者`grunt default`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install grunt --save-dev`，下载grunt依赖。
3. 执行下列代码，下载相应插件。

	```
	$ npm install grunt-contrib-uglify --save-dev
	$ npm install grunt-contrib-jshint --save-dev
	```

4. 创建并编辑`Gruntfile.js`文件。
5. 创建并编辑`.jshintrc`文件。
6. 执行`grunt`或者`grunt default`，查看效果。
