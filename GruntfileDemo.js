module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //合并两个文件
        concat: {
            dist: {
                src: ['app/1.js', 'app/2.js'],
                dest: 'app/3.js',
            },
        },

        //压缩文件
        uglify: {
            compressjs: {
                files: {
                    'app/1.min.js': ['app/1.js']
                }
            }
        },

        // 语法检查
        jshint: {
            all: ['./global.js']
        },

        // 监听本地文件变动
        watch: {
            scripts: {
                files: ['app/1.js','.app/2.js'],
                tasks: ['concat','jshint','uglify']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'index.html',
                    'style.css',
                    'js/global.min.js'
                ]
            }
        },

        //建立本地服务器
        connect: {
            options: {
                port: 8000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            server: {
                options: {
                    port: 8000,
                    base: './'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('concatjs',['concat']);
    grunt.registerTask('compressjs',['concat','jshint','uglify']);
    grunt.registerTask('watchit',['concat','jshint','uglify','connect','watch']);
    grunt.registerTask('default');
    grunt.registerTask('connect',['connect'])
    grunt.registerTask('uglify',['uglify'])
};