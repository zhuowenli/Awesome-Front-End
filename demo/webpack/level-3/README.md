# Level 3

本篇将教会大家：

- 基于React架构配置
- 插件使用
- webpack watch

## 先看看效果

1. 执行`git clone https://github.com/zhuowenli/Front-End-Architecture.git`，clone项目到本地。
2. 执行`cd Front-End-Architecture/demo/webpack/level-3/`，切换到`webpack-level-3`的目录。
3. 执行`npm install`，安装所有依赖。
4. 执行`webpack -w`，查看效果。

## 新手教程

1. 执行`npm init`，按照提示创建`package.json`文件。
2. 执行`npm install webpack --save-dev`，下载webpack依赖。
3. 依次执行下列代码，下载相应插件。

    ```
    $ npm install jsx-loader babel-loader css-loader sass-loader style-loader url-loader file-loader image-webpack-loader extract-text-webpack-plugin --save-dev
    $ npm install react react-dom --save
    ```

4. 创建并编辑`webpack.config.js`文件。
5. 执行`webpack -w`，查看效果。


### 启动webpack

```bash
// webpack 命令行的几种基本命令

$ webpack // 最基本的启动webpack方法
$ webpack -w // 提供watch方法，实时进行打包更新
$ webpack -p // 对打包后的文件进行压缩，提供production
$ webpack -d // 提供source map，方便调试。
```

## Loader

Webpack将所有静态资源都认为是模块，比如JavaScript，CSS，LESS，TypeScript，JSX，CoffeeScript，图片等等，从而可以对其进行统一管理。为此Webpack引入了加载器的概念，除了纯JavaScript之外，每一种资源都可以通过对应的加载器处理成模块。和大多数包管理器不一样的是，Webpack的加载器之间可以进行串联，一个加载器的输出可以成为另一个加载器的输入。比如SASS文件先通过`sass-loader`处理成css，然后再通过`css-loader`加载成css模块，最后由`style-loader`加载器对其做最后的处理，从而运行时可以通过style标签将其应用到最终的浏览器环境。

对于React的JSX也是如此，它通过`jsx-loader`来载入。`jsx-loader`专门用于载入React的JSX文件，Webpack的加载器支持参数，`jsx-loader`就可以添加`?harmony`参数使其支持ES6语法。为了让Webpack识别什么样的资源应该用什么加载器去载入，需要在配置文件进行配置：通过正则表达式对文件名进行匹配。例如：

```js
module: {
    loaders: [
        { test: /\.(js|jsx)$/,           loader: 'babel!jsx?harmony' },
        { test: /\.(sass|scss)$/,        loader: 'style!css!sass' },
        { test: /\.css$/,                loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
        { test: /\.(woff|ttf|eot|svg)$/, loader: 'url?limit=8192' }, // <=8k 转化为 base64
    ]
},
```

可以看到，该使用什么加载器完全取决于这里的配置，即使对于JSX文件，我们也可以用js作为后缀，从而所有的JavaScript都可以通过`jsx-loader`载入，因为jsx本身就是完全兼容JavaScript的，所以即使没有JSX语法，普通JavaScript模块也可以使用`jsx-loader`来载入。

加载器之间的级联是通过感叹号来连接，例如对于LESS资源，写法为`style-loader!css-loader!less-loader`。对于小型的资源，也可以将其进行统一打包，由`url-loader`实现，代码中``url-loader?limit=8192`含义就是对于所有小于8192字节的字体资源也进行打包。用于减少对于小资源的HTTP请求数量。

### 插件

jsx文件内可直接通过`require`引入css样式：

```js
require('./app.css');
```

但是如果我们希望样式通过 `<link>` 引入，而不是放在 `<style>` 标签内呢，即使这样做会多一个请求。这个时候我们就要配合插件一起使用啦，我们一起来看看。

    $ npm install extract-text-webpack-plugin --save-dev

安装完插件就要配置 `webpack.config.js` 了。我们添加以下代码：

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // ...省略各种代码
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
        ]
    },
    plugins: [
        new ExtractTextPlugin("build/common.css")
    ]
}
```
为了区分开用 `<link>` 链接和用 `<style>` ，我们这里以CSS后缀结尾的模块用插件。


### 图片压缩

```
$ npm install file-loader image-webpack-loader --save-dev
```

```js
{
    test: /.*\.(gif|png|jpe?g)$/i,
    loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?{progressive: true,optimizationLevel: 7,interlaced: false,pngquant: {quality: "65-90", speed: 4}}'
    ]
}

```