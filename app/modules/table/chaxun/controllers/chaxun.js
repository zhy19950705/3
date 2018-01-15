angular.module('myApp').controller('chaxun', ['$rootScope', '$scope', 'datatableHelpService', '$filter', '$http', '$interval',function ($rootScope, $scope, datatableHelpService, $filter, $http,$interval) {

    var Year = new Date().getFullYear();
    $scope.startTime = Year + "-01-01 00:00:00";
    $scope.endTime = $filter("date")(new Date(), "yyyy-MM-dd HH:mm:ss");

    $scope.timeCondition = {
        "BeginTime": $scope.startTime,
        "EndTime": $scope.endTime
    }

    $scope.dtOptions = datatableHelpService.setDtOptions(function () {
        return $http.get("http://localhost:5500/xww/").then(function (res) {
            return res.data;
        })
    }, $scope)
        .withOption('order',[0,'desc'])//降序
        .withPaginationType('full_numbers')//出现首页尾页
        .withDOM('T<"clear">lfrtip')
        .withTableTools('bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf')
        .withTableToolsButtons([
            {
                'sExtends': 'xls',
                'sButtonText': '导出excel'
            }
        ]);

    //$scope.dtOptions=datatableHelpService.setOptions(service($scope.timeCondition),$scope)
    // .withOption('order',[0,'desc']).withPaginationType('full_numbers').withDisplayLength(10')
    //.withDom('T<"clear">lfrtip')  自定义布局
    // .withTableTools('bower_components/datatables-tabletools/swf/copy_csv_xls_pdf.swf')  配合buttons
    //     .withTableToolsButtons([            导出等功能
    //         {
    //             'sExtends': 'xls',
    //             'sButtonText': '导出excel'
    //         }
    //     ]);


    $scope.rowData = {};

    $scope.dtColumns = [
        datatableHelpService.setColumnBuild.newColumn('time').withTitle('时间').renderWith(confirmDateHtml),
        datatableHelpService.setColumnBuild.newColumn('name').withTitle('0。0').renderWith(eventHtml),
        datatableHelpService.setColumnBuild.newColumn('number').withTitle('QAQ'),
        datatableHelpService.setColumnBuild.newColumn('id').withTitle('ID').renderWith(numHtml),
        datatableHelpService.setColumnBuild.newColumn('confirm').withTitle('操作').notSortable().renderWith(actionsHtml)
    ]

    function eventHtml(data,type,full,meta) {
        if(full.name===undefined)
            return "<i class='fa fa-bell'></i>"+"undefined";
        else
            return "<i class='fa fa-bell'></i>"+"defined"
    }

    function confirmDateHtml(data,type,full,meta) {
        if(full.time==="0001-01-01 00:00:00")
            return "";
        else
            return full.time;

    }

    function numHtml(data,type,full,meta) {
        var numHtml='<a href="javascript:;" class="" ng-click="Numclick(\''+full.id+'\',\''+full.number+'\')">'+full.bm+'</a>';
        return numHtml;
    }

    function actionsHtml(data,type,full,meta) {
        if(full.confirm==="1")
            var strHtml='<button type="button" class="btn green-sharp btn-xs" data-ng-init="initConfirm()" data-toggle="confirmInfor" data-singleton="true" data-placement="top" data-AlarmInfor="'+full.id+'"><li class="fa fa-hand-pointer-o"></li>确认</button> '
        else
            var strHtml='<button type="button" class="btn green-sharp btn-xs" data-ng-init="initConfirm()" data-toggle="confirmInfor" data-singleton="true" data-placement="top" data-AlarmInfor="'+full.id+'"disabled="disabled"><li class="fa fa-hand-pointer-o"></li>确认</button> '
        return strHtml
    }

    $scope.dtInstance = {};

    var changeData=function () {
        $scope.dtInstance.changeData(service($scope.timeCondition))
    }

    $scope.queryData = function () {
        // $scope.dtInstance.changeData(function () {
        //     $scope.timeCondition = {
        //         "BeginTime": $scope.startTime,
        //         "EndTime": $scope.endTime
        //     };
        //     return service($scope.timeCondition)
        // })
        console.log('changed')
    }

    $scope.Numclick=function (id,number) {
        alert(id);
        console.log(number)
    }

    $scope.initConfirm=function () {
        $interval(function () {
            $('[data-toggle="confirmInfor"]').confirmation({
                title: "确定？",
                href: function () { },
                btnOkLabel: "是",
                btnCancelLabel: "否",
                onConfirm: function (event, elment) {

                    var alarmInforId = $(elment).attr("data-AlarmInfor");
                    var userName =" valveDoorDebugService.userName";
                    var alarmInfor = {
                        "id": alarmInforId,
                        "ConfirmName": userName,
                        "State": "1"
                    };
                    // alarmInformationService.AlarmOperation(alarmInfor, changData);
                }
            })
        })
    }

}])