angular.module('myApp').controller('angularway',['$scope','$compile','DTOptionsBuilder','DTColumnBuilder',function ($scope,$compile,DTOptionsBuilder,DTColumnBuilder) {

    $scope.message="";
    $scope.message2="";

    $scope.edit=edit;
    $scope.delete=deleteRow;

    $scope.dtInstance={};
    $scope.persons={};

    $scope.dtOptions = DTOptionsBuilder.fromSource('modules/table/tab2/data.json')
        .withPaginationType('full_numbers')
        //滚动功能
        // .withDOM('lfrti')
        // .withScroller()
        // .withOption('deferRender',true)
        // .withOption('scrollY',200)
        .withOption('createdRow', createdRow)
        .withOption('rowCallback',rowCallback)
        //add bootstrap compatibility
        .withBootstrap()
        .withBootstrapOptions({
            TableTools:{
                classes:{
                    container:'btn-group',
                    buttons:{
                        normal:'btn btn-danger'
                    }
                }
            },
            ColVis:{
                classes:{
                    masterButton:'btn btn-primary'
                }
            },
            pagination:{
                classes:{
                    ul:'pagination pagination-sm'
                }
            }
        })
        .withColVis()
        .withTableTools('bower_components/angular-datatables-0.6.2/vendor/datatables-tabletools/swf/copy_csv_xls_pdf.swf')
        .withTableToolsButtons([
            'copy',
            'print',{
            'sExtends':'collection',
                'sButtonText':'Save',
                'aButtons':['csv','xls','pdf']
            }
        ])
    ;

    $scope.dtColumns=[
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml)
    ];

    function edit(person) {
        $scope.message='you are trying to edit the row'+JSON.stringify(person);
        // Edit some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        $scope.dtInstance.reloadData();
    }

    function deleteRow(person) {
        $scope.message='you are trying to remove the row'+JSON.stringify(person);
// Delete some data and call server to make changes...
        // Then reload the data so that DT is refreshed
        $scope.dtInstance.reloadData()
    }

    function createdRow(row,data,dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }

    function actionsHtml(data, type, full, meta) {
        $scope.persons[data.id] = data;
        return '<button class="btn btn-warning" ng-click="edit(persons[' + data.id + '])">' +
            '   <i class="fa fa-edit"></i>' +
            '</button>&nbsp;' +
            '<button class="btn btn-danger" ng-click="delete(persons[' + data.id + '])" )"="">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>';
    }

    function someClickHandler(info) {
        $scope.message2=info.id+'-'+info.firstName;
    }

    function rowCallback(nRow,aData,iDisplayIndex,iDisplayIndexFull) {
        $('td',nRow).unbind('click');
        $('td',nRow).bind('click',function () {
            $scope.$apply(function () {
                someClickHandler(aData)
            })
        });
        return nRow
    }

    // $scope.dtOptions=DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);

    // $scope.dtColumnDefs=[
    //     DTColumnDefBuilder.newColumnDef(0),
    //     DTColumnDefBuilder.newColumnDef(1),
    //     DTColumnDefBuilder.newColumnDef(2).notSortable()
    // ]

    // $resource('modules/table/tab2/data.json').query().$promise.then(function (res) {
    //     $scope.persons=res
    // })

}])