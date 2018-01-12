module.exports=function (grunt) {
    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

             jshint:{
                 all:['app/src/*.js','app/test/*.js'],
                 options:{
                     globals:{
                         _:true,
                         $:false,
                         jasmine:false,
                         describe:false,
                         expect:true,
                         it:false,
                         beforeEach:true,
                         afterEach:false,
                         sinon:true
                     },
                     browser:true,
                     devel:true
                 }
             },
             testem:{
                 unit:{
                     options:{
                         framework:'jasmine2',
                         launch_in_dev:['phantomjs-prebuilt'],
                         before_tests:'grunt jshint',
                         serve_files:[
                             'node_modules/bower/lib/node_modules/inquirer/node_modules/lodash/index.js',
                             'node_modules/jquery/dist/jquery.js',
                             'node_modules/sinon/pkg/sinon.js',
                             'app/src/*.js',
                             'app/test/*.js'
                         ],
                         watch_files:[
                             'app/src/*.js',
                             'app/test/*.js'
                         ]
                     }
    }
             }




    })

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-testem');
    // grunt.registerTask('jshint',['jshint'])
}