/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

module.exports = function(grunt) {

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! index.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/*.js',
                dest: 'build/index.min.js'
            }
        },
        jshint: {
        	options: {
        		jshintrc: '.jshintrc'
        	},
        	build: ['src/*.js']
        }
    });

    // 加载任务插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 默认任务
    grunt.registerTask('default', ['uglify', 'jshint']);
}