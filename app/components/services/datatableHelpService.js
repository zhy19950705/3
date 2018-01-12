"use strict";
angular.module('myApp').factory("datatableHelpService", ["$compile", "DTOptionsBuilder", "DTColumnBuilder", "httpRequestService", "$q", function ($compile, DTOptionsBuilder, DTColumnBuilder, httpRequestService, $q) {

    var datatableHelpFactory = {};

    // 匹配和处理row元素的各种指令
    datatableHelpFactory.createdRow = function (row, $scope) {
        $compile(angular.element(row).contents())($scope);
    };

    datatableHelpFactory.headerCallback = function (header, $scope) {
        if (!$scope.headerCompiled) {
            $scope.headerCompiled = true;
            $compile(angular.element(header).contents())($scope);
        }
    };

    datatableHelpFactory.actionsHtml = function (full, name) {
        var html = '<div class="btn-group-circle btn-group-solid">';
        html += '<table-botton-edit ng-click="edit' + name + '(\'' + full.id + '\')"></table-botton-edit>';
        html += '<table-botton-delete my-click="delete' + name + '(param)" code="' + full.id + '"></table-botton-delete>';
        html += '</div>';
        return html;
    };

    datatableHelpFactory.otherActionHtml = function (full, buttonType, rowData, name) {
        rowData[full.id] = full;
        var html = '<div class="btn-group-circle btn-group-solid">';
        angular.forEach(buttonType, function (type) {
            switch (type) {
                case "edit":
                    html += '<table-bottom-edit ng-click="edit' + name + '(rowData[\'' + full.id + '\'])"></table-bottom-edit>';
                    break;
                case "keep":
                    html += '<table-bottom-keep ng-click="keep' + name + '(rowData[\'' + full.id + '\'])"></table-bottom-keep>';
                    break;
                case "delete":
                    html += '<table-bottom-delete my-click="delete' + name + '(param)" code="' + full.id + '"></table-bottom-delete>';
                    break;
                case "disable":
                    html += '<table-bottom-disable ng-click="disable' + name + '(rowData[\'' + full.id + '\'])"  ></table-bottom-disable>';
                    break;
                case "open":
                    html += '<table-bottom-open ng-click="open' + name + '(rowData[\'' + full.id + '\'])" ></table-bottom-open>';
                    break;
                case "reset":
                    html += '<table-bottom-reset ng-click="reset' + name + '(rowData[\'' + full.id + '\'])"></table-bottom-reset>';
                    break;
                case "confirm":
                    html += '<table-bottom-confirm my-click="confirm' + name + '(param)" code="' + full.id + '"></table-bottom-confirm>';
                    // html += '<table-botton-confirm ng-click="confirm' + name + '(\''+full.id+'\')"></table-botton-confirm>';
                    break;
                case "notarize":
                    html += '<table-bottom-notarize ng-click="notarize' + name + '(rowData[\'' + full.id + '\'])"></table-bottom-notarize>';
                    break;
            }
        });
        html += '</div>';
        return html;
    };

    datatableHelpFactory.setDtOptions = function (fnDataService, $scope) {
        var dtOptions = DTOptionsBuilder.fromFnPromise(fnDataService).withOption('createdRow', function (row, data, dataIndex) {
            datatableHelpFactory.createdRow(row, $scope)
        });
        return dtOptions;
    };

    datatableHelpFactory.setColumnBuild = DTColumnBuilder;
    datatableHelpFactory.setDtOptionsAjax = function ($scope) {
        var dtOptions = DTOptionsBuilder.newOptions()
            .withDataProp('data')
            .withOption('serverSide', true)
            .withOption('processing', true)
            .withOption('createdRow', function (row, data, dataIndex) {
                datatableHelpFactory.createdRow(row, $scope)
            }).withOption('autoWidth', false);
        return dtOptions;
    };
    return datatableHelpFactory;
}
]);