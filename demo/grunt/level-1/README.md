# Level 1

本篇将教会大家：
- 构建Grunt实例
- 下载依赖
- 下载插件
- 调用插件
- 执行Grunt命令

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/grunt/level-1/`，切换到`grunt-level-1`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`grunt`或者`grunt default`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install grunt --save-dev`，下载grunt依赖。
3. 执行`npm install grunt-contrib-uglify --save-dev`，下载grunt-contrib-uglify这个代码压缩插件。
4. 创建并编辑`Gruntfile.js`文件夹、同时在`package.json`里面添加一条`"file": "index"`参数。
5. 执行`grunt`或者`grunt default`，查看效果。
