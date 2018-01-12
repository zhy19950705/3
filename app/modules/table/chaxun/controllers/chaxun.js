angular.module('myApp').controller('chaxun',['$rootScope','$scope','datatableHelpService','$filter','$http',function ($rootScope,$scope,datatableHelpService,$filter,$http) {

    var Year = new Date().getFullYear();
    $scope.startTime = Year + "-01-01 00:00:00";
    $scope.endTime = $filter("date")(new Date(), "yyyy-MM-dd HH:mm:ss");

    $scope.timeCondition={
        "BeginTime":$scope.startTime,
        "EndTime":$scope.endTime
    }

    $scope.dtOptions=datatableHelpService.setDtOptions(function () {
        return $http.get("http://localhost:5500/xww/").then(function (res) {
            return res.data;
        })
    },$scope);

    $scope.rowData={};

    $scope.dtColumns=[
        datatableHelpService.setColumnBuild.newColumn('time').withTitle('时间'),
        datatableHelpService.setColumnBuild.newColumn('name').withTitle('0。0'),
        datatableHelpService.setColumnBuild.newColumn('number').withTitle('QAQ')
    ]

    $scope.dtInstance={}

    var queryData=function () {
        $scope.dtInstance.changeData(function () {
            $scope.timeCondition={
                "BeginTime":$scope.startTime,
                "EndTime":$scope.endTime
            };
            return
        })
    }
}])