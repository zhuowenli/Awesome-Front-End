# Level 1

本篇将教会大家：

- 构建Webpack实例
- 执行Webpack命令

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/webpack/level-1/`，切换到`webpack-level-1`的目录。
3. 执行`npm install webpack -g`，安装全局webpack。
4. 执行`npm install`，安装所有依赖。
5. 执行`webpack js/index.js build/bundle.js`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install webpack -g`，安装全局webpack。
3. 执行`npm install webpack --save-dev`，下载webpack依赖。
4. 创建一个静态页面 `index.html`、一个模块 `src/module.js` 和一个 JS 入口文件`src/index.js`。
5. 执行`webpack js/index.js build/bundle.js`，查看效果。

Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 index.js 中的代码，其它模块会在运行 `require` 的时候再执行。