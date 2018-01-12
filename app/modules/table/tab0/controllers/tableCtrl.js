"use strict";
angular.module('myApp').controller('tableCtrl',['$scope','datatableHelpService','$http','generalModalService','tableService','paginationService',function ($scope,datatableHelpService,$http,generalModalService,tableService,paginationService) {

    $scope.rowData={};
    var buttonType=[];

    $scope.searchParam="";

    $scope.paginationConf={
        currentPage:1,
        itemsPerpage:10
    }

    var initial=function (treeData) {
        angular.forEach(treeData,function (tree) {
            tree.showMe=false
        })
    }

    var listInitial=function () {
       $http.get('modules/table/tab2/data.json').then(function (data) {
           if(!data){
               data=[]
           }
           $scope.items=data.data;
           initial($scope.items);
           fnPaginationData($scope.items,$scope.searchParam);
         })
    }

    listInitial();

    var fnPaginationData=function (data,searchParam) {
        var expander_data=paginationService.expandersConf($scope.paginationConf,data,searchParam);
        $scope.expanders=expander_data.expanders;
        $scope.paginationConf.totalItems=expander_data.totalItems;
    }

    var fnOpenModal=function (resolveItems,url,name) {
        var uibModalInstance=generalModalService.openModal($scope,url,name,resolveItems,"");
        uibModalInstance.result.then(function () {
            tableReLoad();
        })
    };

    $scope.dtOptions=datatableHelpService.setDtOptions(function () {
         return $http.get("http://localhost:5500/cart/").then(function (res) {
            return res.data;
        })
    },$scope);

    $scope.dtColumn=[
        datatableHelpService.setColumnBuild.newColumn("name").withTitle("枪械名称").withOption("type", "chinese-string"),
        datatableHelpService.setColumnBuild.newColumn('firearmtype').withTitle('枪械类型'),
        datatableHelpService.setColumnBuild.newColumn("typeofbullet").withTitle("弹药类型"),
        datatableHelpService.setColumnBuild.newColumn("capacity").withTitle("弹匣容量"),
        datatableHelpService.setColumnBuild.newColumn('attachment').withTitle('可添加附件'),
        datatableHelpService.setColumnBuild.newColumn('state').withTitle('状态').renderWith(function (data,type,full,meta) {
            if(full.state===false){
                return '辣鸡'
            }else{
                return '好东西'
            }
        }),
        datatableHelpService.setColumnBuild.newColumn('null').withTitle("操作").renderWith(function (data,type,full,meta) {
            buttonType=['edit','delete'];
            return datatableHelpService.otherActionHtml(full,buttonType,$scope.rowData,"Input")
        })
    ];

    $scope.dtInstance = {};

    $scope.add=function () {
        var resolveItems={
            roleType:"add"
        };
        fnOpenModal(resolveItems,"modules/table/tab0/views/tableDetail.html","tableDetailController")
    };

    $scope.editInput=function (param) {
        var resolveItems={roleType:'edit',data:param};
        fnOpenModal(resolveItems,"modules/table/tab0/views/tableDetail.html","tableDetailController")
    };

    $scope.deleteInput=function (param) {
        var id = param.id;
        $http({
            method: "DELETE",
            url: "http://localhost:5500/cart/"+id,
            data: param
        }).success(function (res) {
            if(res){
               tableReLoad()
            }else {
                alert(res)
            }
        }).error(function (error) {
            console.log(error);
        });
    };

    var tableReLoad = function () {
        $scope.dtInstance.reloadData("", false);
    };
}]);;