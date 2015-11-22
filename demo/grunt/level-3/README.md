# Level 2

本篇将教会大家：

- Grunt watch (真正实现自动化)

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
	$ npm install grunt-contrib-watch --save-dev
	```

4. 创建并编辑`Gruntfile.js`文件。
5. 创建并编辑`.jshintrc`文件。
6. 执行`grunt`或者`grunt default`，查看效果。

## watch插件

在前面的插件中，每次执行插件功能，都得执行一遍`grunt`命令，这样的操作非常繁琐，说好的**自动化**呢？别着急，接下来就解决这个问题——通过watch插件解决这个问题。

配置watch将会监控哪些文件发生变化，以及这些文件一旦变化，要立即执行哪些插件功能。如下，watch将监控src文件夹下所有js文件的变化，一旦变化，则立即执行jshint和uglify两个插件的功能。
	
	// 配置信息
	watch: {
    	build: {
    		files: ['src/*.js'],
    		tasks: ['uglify', 'jshint'],
    		options: {
    			spawn: false
    		}
    	}
    }
	
	// 加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 任务
    grunt.registerTask('default', ['watch']);

运行grunt命令，控制台提示watch已经开始监听。当我们在src文件里面进行保存时，watch插件将会检测到代码发生变化，然后自动执行`uglify`、`jshint`这两个命令。

此时要想停止，在终端按ctrl + c即可。
