"use strict";
angular.module('myApp').controller('tableDetailController', ['$scope', '$uibModalInstance', 'items', '$http', 'tableService', function ($scope, $uibModalInstance, items, $http, tableService) {
    $scope.pageType = items.roleType;

    $scope.attachmentNums = [];
    var i = 0;
    $scope.fireArmTypes = [
        {
            type: "手枪",
            value: '手枪'
        },
        {
            type: '霰弹枪',
            value: '霰弹枪'
        },
        {
            type:'突击步枪',
            value:'突击步枪'
        }
    ]

    if (items.roleType === "edit") {
        var res = items;
        $scope.cartsDetail = res.data;

        // if(res.data.state!==null){
        //     var attachmentNum=res.data.attachment.length;
        //     console.log(attachmentNum)
        // }
    }

    // $scope.addState=function () {
    //     i++;
    //     $scope.attachmentNums.push(i);
    //     console.log($scope.attachmentNums)
    // }
    $scope.close = function () {
        $uibModalInstance.dismiss("cancel")
    };

    $scope.save = function (cartsDetail) {
        if (items.roleType === "add") {
            tableService.cartsAdd(cartsDetail).then(function () {
                $uibModalInstance.close(cartsDetail)
            })
        } else {
            if(cartsDetail.state === '1')
                cartsDetail.state=true;
            else
                cartsDetail.state=false;
            tableService.cartsUpdate(cartsDetail).then(function () {
                $uibModalInstance.close(cartsDetail)
            })
        }
    }

}])