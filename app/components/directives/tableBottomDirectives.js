"use strict";
angular.module('myApp')
.directive("tableBottomEdit",function () {
    return {
        restrict:'E',
        replace:true,
        scope:{
            ngclick:"@clickName"
        },
        template:'<button type="button" class="btn btn-circle btn-default btn-xs" name="edit"><li class="fa fa-pencil"></li>修 改</button> '
    }
})
.directive('tableBottomDelete',function () {
    return {
        restrict:'AE',
        replace:true,
        scope:{
            code:'@code',
            myClick:"&"
        },
        template:'<button type="button" class="btn btn-circle btn-default btn-xs" data-toggle="confirmation" data-singleton="true" data-placement="top" name="delete"><li class="fa fa-trash"></li>删 除</button> ',
        link:function (scope,element,attrs,controller) {
            element.confirmation({
                title:'确定删除?',
                href:function () {

                },
                btnOkLabel:'是',
                btnCancelLabel:'否',
                onConfirm:function () {
                    var id=element.attr("code");
                    var model={id:id};
                    scope.myClick({param:model})
                }
            })
        }
    }
})
.directive('detailBottomClose',function () {
    return{
        restrict:'E',
        replace:true,
        scope:{
            ngclick:"@clickName"
        },
        template:'<button type="button" data-dismiss="modal" class="btn default btn-sm"><i class="fa fa-close"></i>关闭</button> '
    }
})
.directive('detailBottomSave',function () {
    return{
        restrict:'E',
        replace:'true',
        scope:{
            ngclick:'@clickName',
            ngdisabled:'@disabledName'
        },
        template:'<button type="button" class="btn green-sharp btn-sm"><i class="fa fa-save"></i>保存</button> '
    }
})