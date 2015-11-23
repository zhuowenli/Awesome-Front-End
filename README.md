# 前端架构 - Front End Architecture

打造最完善的前端架构指南，造♂福人类！

## 必备知识

- [包管理](#包管理)
    - [npm](#npm)
    - [bower](#bower)
- [构建工具](#构建工具)
    - [grunt](#grunt)
    - [gulp](#gulp)
    - [webpack](#webpack)

### 包管理

#### npm
#### bower


### 构建工具
为何要用构建工具？
一句话：自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你在配置文件配置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。

#### [grunt](http://www.gruntjs.net/)
Grunt生态系统非常庞大，并且一直在增长。由于拥有数量庞大的插件可供选择，因此，你可以利用Grunt自动完成任何事，并且花费最少的代价。如果找不到你所需要的插件，那就自己动手创造一个Grunt插件，然后将其发布到npm上吧。

[快速入门教程](https://github.com/zhuowenli/Front-End-Architecture/tree/master/demo/grunt)

#### [gulp](http://www.gulpjs.com.cn/)

- 易于使用 - 通过代码优于配置的策略，Gulp 让简单的任务简单，复杂的任务可管理。
- 构建快速 - 利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。
- 插件高质 - Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。
- 易于学习 - 通过最少的 API，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

[快速入门教程](https://github.com/zhuowenli/Front-End-Architecture/tree/master/demo/gulp)

#### [webpack](https://github.com/webpack/webpack)

Webpack是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过`loader`的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。

[快速入门教程](https://github.com/zhuowenli/Front-End-Architecture/tree/master/demo/webpack)