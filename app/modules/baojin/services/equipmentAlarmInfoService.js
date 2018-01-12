angular.module('myApp').factory('equipmentAlarmInfoService',["httpRequestService","$q","$http",function (httpRequestService,$q,$http) {
    var equipmentAlarmInfoFactory={};

    equipmentAlarmInfoFactory.getCurrentUserAlarms=function (param) {
        return httpRequestService.httpGet(端口+api+param);
    };

   equipmentAlarmInfoFactory.confirmAlarm=function (param,callback) {
       var deferred=$q.defer();
       $http.get(端口+api+param.id).success(function (response) {
           deferred.resolve(response);
           callback()
       }).error(function (error) {
           deferred.reject(error)
       })
       return deferred.promise
   }

   return equipmentAlarmInfoFactory
}])