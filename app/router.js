angular.module("myApp")
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // 配置location服务，开启html5的history api
        // $locationProvider.html5Mode(true);

        // $urlRouterProvider.when("", "/main");
        $urlRouterProvider.otherwise(function ($injector, $location) {
            var $state = $injector.get("$state");
            $state.go("zuoye");
        });

        $stateProvider
            .state('main', {
                abstract: true,
                url: '/main',
                templateUrl: 'modules/main/main.html',
                // controller:'mainCtrl'
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                    "modules/main/controllers/sidebarController.js",
                                    "modules/main/sidebar.css",
                                ]
                            });
                        }
                    ]
                }
            })
            .state('hcharts', {
                url: '/hcharts',
                templateUrl: 'modules/hcharts/hcharts.html',
                controller: 'hchartsController',
                parent: 'main',
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                // insertBefore: "#ng_load_plugins_before",
                                files: [
                                    "modules/hcharts/hchartsController.js",
                                ]
                            });
                        }
                    ]
                }
            })
            .state('table',{
            url: '/table',
            parent: 'main',
            views:{
                "":{
                    templateUrl:'modules/table/table.html',

                },
                "tab0@table":{
                    templateUrl:"modules/table/tab0/views/table.html",
                    controller:'tableCtrl'
                },
                "tab1@table":{
                    templateUrl:'modules/table/tab1/noconfiguration.html',
                    controller:'configuration'
                },
                "tab2@table":{
                    templateUrl:'modules/table/tab2/withajax.html',
                    controller:'withajax'
                },
                "tab3@table":{
                    templateUrl:'modules/table/tab3/angularway.html',
                    controller:'angularway'
                },
                "tab4@table":{
                    templateUrl:'modules/table/tab4/twotable.html',
                    controller:'twotable'
                },
            },
            resolve: {
                deps: [
                    "$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "myApp",
                            insertBefore: "#ng_load_plugins_before",
                            files: [
                                "modules/table/tab0/controllers/tableCtrl.js",
                                "modules/table/tab0/controllers/tableDetailController.js",
                                "modules/table/tab0/services/tableServices.js",
                                 "modules/table/tab1/configuration.js",
                                'modules/table/tab2/withajax.js',
                                'modules/table/tab3/angularway.js',
                                'modules/table/tab4/twotable.js'
                            ]
                        });
                    }
                ]
            }

        })
            // .state('table', {
            //     url: '/table',
            //     templateUrl: 'modules/table/views/table.html',
            //     controller: 'tableCtrl',
            //     parent: 'main',
            //     resolve: {
            //         deps: [
            //             "$ocLazyLoad", function ($ocLazyLoad) {
            //                 return $ocLazyLoad.load({
            //                     name: "myApp",
            //                     insertBefore: "#ng_load_plugins_before",
            //                     files: [
            //                         "modules/table/controllers/tableCtrl.js",
            //                         "modules/table/controllers/tableDetailController.js",
            //                         "modules/table/services/tableServices.js"
            //                     ]
            //                 });
            //             }
            //         ]
            //     }
            // })
            .state('table2',{
                url:'/table2',
                templateUrl:'modules/table2/table2.html',
                parent:'main',
                // resolve:{
                //     deps:[
                //         "$ocLazyLoad",function ($ocLazyLoad) {
                //             return $ocLazyLoad.load({
                //                 name:'myApp',
                //                 insertBefore:'#ng_load_plugins_before',
                //                 files:[
                //
                //                 ]
                //             })
                //         }
                //     ]
                // }
            })
            .state('echarts', {
                url: '/echarts',
                templateUrl: 'modules/echarts/echarts.html',
                parent: 'main',
                controller: "echartsController",
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                    "modules/echarts/echartsController.js"
                                ]
                            });
                        }
                    ]
                }
            })
            .state('chiji',{
                url: '/chiji',
                parent: 'main',
                views:{
                    "":{
                        templateUrl:'modules/chiji/chiji.html',

                    },
                    "tab1@chiji":{
                        templateUrl:"modules/chiji/tab1/tab1.html",
                        controller:'gundong'
                    },
                    "tab2@chiji":{
                        templateUrl:'modules/chiji/tab2/photo.html',
                        controller:'photoController'
                    },
                    "tab3@chiji":{
                        templateUrl:'modules/chiji/tab3/123.html'
                    }
                },
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                     "modules/chiji/tab1/gundong.js",
                                    "modules/chiji/tab1/gundong.css",
                                    "modules/chiji/tab2/photo.css",
                                    "modules/chiji/tab2/photo.js",
                                    "modules/chiji/tab3/123.css"
                                ]
                            });
                        }
                    ]
                }

            })
            .state('tuozhuai',{
                url:'/tuozhuai',
                templateUrl:'modules/tuozhuai/tuozhuai.html',
                parent:'main',
            })
            .state('html5',{
                url:'/html5',
                templateUrl:'modules/html5/html5.html',
                parent:'main'
            })
            .state('analysis',{
                url:'/analysis',
                templateUrl:'modules/analysis/views/analysis.html',
                parent:'main',
                controller:'analysis',
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                    "modules/analysis/controllers/analysis.js"
                                ]
                            });
                        }
                    ]
                }
            })
            .state('chaxun',{
                url:'/chaxun',
                templateUrl:'modules/table/chaxun/views/chaxun.html',
                parent:'main',
                controller:'chaxun',
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                    "modules/table/chaxun/controllers/chaxun.js"
                                ]
                            });
                        }
                    ]
                }
            })
            .state('zuoye',{
                url: '/zuoye',
                parent: 'main',
                views:{
                    "":{
                        templateUrl:'modules/zuoye/views/1.html',
                    },
                    "tab1@zuoye":{
                        templateUrl:"modules/zuoye/views/zuoye1.html",
                        controller:'zuoye1'
                    },
                    "tab2@zuoye":{
                        templateUrl:'modules/zuoye/views/zuoye2.html',
                        controller:'zuoye2'
                    },
                    "tab3@zuoye":{
                        templateUrl:'modules/zuoye/views/zuoye3.html',
                        controller:'zuoye3'
                    },
                    "tab4@zuoye":{
                        templateUrl:'modules/zuoye/views/zuoye4.html',
                        controller:'zuoye4'
                    },
                    "tab5@zuoye":{
                        templateUrl:'modules/zuoye/views/zuoye5.html',
                        controller:'zuoye5'
                    },
                },
                resolve: {
                    deps: [
                        "$ocLazyLoad", function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: "myApp",
                                insertBefore: "#ng_load_plugins_before",
                                files: [
                                   "modules/zuoye/controllers/zuoye1.js",
                                    "modules/zuoye/controllers/zuoye2.js",
                                    "modules/zuoye/controllers/zuoye3.js",
                                    "modules/zuoye/controllers/zuoye4.js",
                                    "modules/zuoye/controllers/zuoye5.js"
                                ]
                            });
                        }
                    ]
                }

            })

    })
