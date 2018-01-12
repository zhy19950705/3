angular.module('myApp').controller('twotable',['$scope','$compile','DTOptionsBuilder','DTColumnBuilder',function ($scope,$compile,DTOptionsBuilder,DTColumnBuilder) {

    $scope.selected={};
    $scope.selectAll=false;
    $scope.toggleAll=toggleAll;
    $scope.toggleOne=toggleOne;

    var titleHtml='<input type="checkbox" ng-model="selectAll" ng-click="toggleAll(selectAll,selected)">';
    
    $scope.dtInstances=[];

    $scope.dtOptions1=DTOptionsBuilder.fromSource('modules/table/tab2/data.json')
        .withDisplayLength(2)
        .withPaginationType('full_numbers');

    $scope.dtColumns1=[
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];

    $scope.dtInstance1={};

    $scope.dtOptions2=DTOptionsBuilder.fromSource('modules/table/data2.json')
        .withOption('createdRow',function (row,data,dataIndex) {
            $compile(angular.element(row).contents())($scope)
            //recompiled so we can bind angular directive to the DT
        })
        .withOption('headerCallback',function (header) {
            if(!$scope.headerCompiled){
                //use this headerCompiled field to only compile header once
                $scope.headerCompiled=true;
                $compile(angular.element(header).contents())($scope)
            }
        });

    $scope.dtColumns2=[
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable().
            renderWith(function (data,type,full,meta) {
            $scope.selected[full.id]=false;
            return '<input type="checkbox" ng-model="selected['+data.id+']" ng-click="toggleOne(selected)">';
        }),
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];

    $scope.dtInstance2={};
    $scope.dtInstanceCallback=dtInstanceCallback;

    function dtInstanceCallback(dtInstance) {
        $scope.dtInstance2=dtInstance
    }

    function toggleAll(selectAll,selectedItems) {
        for(var id in selectedItems){
           if(selectedItems.hasOwnProperty(id)){
               selectedItems[id]=selectAll;
           }
        }
    }

    function toggleOne(selectedItems) {
        for(var id in selectedItems){
            if(selectedItems.hasOwnProperty(id)){
                if(!selectedItems[id]){
                    $scope.selectAll=false;
                    return;
                }
            }
        }
        $scope.selectAll=true
    }
}])