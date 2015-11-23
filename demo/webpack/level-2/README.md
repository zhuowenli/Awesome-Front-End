# Level 2

本篇将教会大家：

- 配置Webpack
- 下载Loader组件

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/webpack/level-2/`，切换到`webpack-level-2`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`webpack`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install webpack --save-dev`，下载webpack依赖。
3. 依次执行下列代码，下载相应插件。

    ```
    $ npm install css-loader sass-loader style-loader --save-dev
    ```

4. 创建并编辑`webpack.config.js`文件。
5. 执行`webpack`，查看效果。


我们要在页面中引入一个 SASS 文件 style.scss，可以直接将 style.scss 也看成是一个模块。首先用`sass-loader`来编译，然后用 `css-loader` 来读取它，再用 `style-loader` 把它插入到页面中。

```js
// js/index.js
require('../sass/style.scss')
```

Webpack 在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的 `webpack.config.js` 文件，这个文件是一个 node.js 模块，返回一个 json 格式的配置信息对象，或者通过 `--config` 选项来指定配置文件。

```js
// ./webpack.config.js
var webpack = require('webpack');

module.exports = {
    entry: './js/index.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.(sass|scss)$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
        ]
    }
}
``