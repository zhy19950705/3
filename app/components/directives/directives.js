angular.module('myApp')
.directive('myDirective',function () {
    return{
        restrict:'E',
        replace:'true',
        scope:{
            myUrl:'@someAttr',
            myLinkText:'@'
        },
       template:'<a href="{{myUrl}}">'+'{{myLinkText}}</a>'
    }
})
.directive('showtab',function () {
    return{
        link:function (scope,element) {
            element.click(function (e) {
                e.preventDefault();
                $(element).tab('show')
            })
        }
    }
})
.directive('slideFollow',function ($timeout) {
    return{
        restrict:'E',
        replace:'true',
        scope:{
            id:'@',
            datasetData:'='
        },
        template : "<li ng-repeat = 'data in datasetData'>{{data.option}}</li>",
        link : function(scope,elem,attrs) {
            $timeout(function(){
                var className = $("." + $(elem).parent()[0].className);
                var i = 0,sh;
                var liLength = className.children("li").length;
                var liHeight = className.children("li").height() + parseInt(className.children("li").css('border-bottom-width'));
                className.html(className.html() + className.html());

                // 开启定时器
                sh = setInterval(slide,1000);

                function slide(){
                    if (parseInt(className.css("margin-top")) > (-liLength * liHeight)) {
                        i++;
                        className.animate({
                            marginTop : -liHeight * i + "px"
                        },"slow");
                    } else {
                        i = 0;
                        className.css("margin-top","0px");
                    }
                }

                // 清除定时器
                className.hover(function(){
                    clearInterval(sh);
                },function(){
                    clearInterval(sh);
                    sh = setInterval(slide,1000);
                })


            },0)

        }
    }
})

.directive('datatableWrapper',function ($timeout,$compile) {
    return{
        restrict :'E',
        transclude:true,
        template:'<ng-transclude></ng-transclude>',
        link:link
    };
    function link(scope,element) {
        $timeout(function () {
            $compile(element.find('.custom-element'))(scope);
        },0,false)
    }
})

.directive('customElement',function () {
    return {
        restrict:'C',
        template:'<h1>my custom element</h1>'
    }
})

