"use strict";
angular.module('myApp').factory('tableService',['httpRequestService','$http',function (httpRequestService,$http) {
    var tableFactory={};
    tableFactory.cartsAdd=function (data) {
        return $http({
            method:"POST",
            url:"http://localhost:5500/cart/",
            data:data
        })
    };
    tableFactory.cartsUpdate=function (data) {
        var id=data.id;
        return $http({
            method:'PUT',
            url:'http://localhost:5500/cart/'+id,
            data:data
        })
    }
    return tableFactory
}])