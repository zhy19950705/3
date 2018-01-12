"use strict";
angular.module('myApp').factory('generalModalService',['$uibModal',function ($uibModal) {
    var factory={};

    factory.openModal=function (scope,tplUrl,controllerName,resolveItems,size,topClass) {
       var  uibModalInstance=$uibModal.open(
           {
               backdrop:'static',
               templateUrl:tplUrl,
               controller:controllerName,
               scope:scope,
               size:size,
               windowTopClass:topClass,
               resolve:{
                   items:function () {
                       var item=resolveItems;
                       return item;
                   }
               }
           }
       );
       return uibModalInstance;
    };
    return factory
}]);