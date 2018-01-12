angular.module('myApp').controller('equipmentAlarmInfoController',['$rootscope','$scope','datatableHelpService','equipmentAlarmInfoService',function ($rootscope.$scope,datatableHelpService,equipmentAlarmInfoService) {
    var callback=function () {
        $scope.dtInstance.reloadData("",false);
    }

    $scope.confirmCity=function (param) {
        equipmentAlarmInfoService.confirmAlarm(param,callback)
    };

    $scope.dtOptions=datatableHelpService.setDtOptionAjax($scope).withOption('ajax',function (data,fnCallback) {
        var parm="?draw="+data.draw+"&pageStart="+data.start+"&pageSize="+data.length;
        equipmentAlarmInfoService.getCurrentUserAlarms(param).then(function (result) {
            fnCallback(result)
        })
    })
}])