angular.module('myApp').controller('withajax',['$scope','DTOptionsBuilder','DTColumnBuilder','$http','$q',function ($scope,DTOptionsBuilder,DTColumnBuilder,$http,$q) {
    $scope.dtOptions=DTOptionsBuilder.fromSource('modules/table/tab2/data.json')
        // .withPaginationType('full_numbers');
        // .withDOM('&lt;"custom-element"&gt;pitrfl');

    // $scope.dtOptions=DTOptionsBuilder.fromFnPromise(function () {
    //     var defer=$q.defer();
    //     $http.get("modules/table/tab2/data.json").then(function (result) {
    //         defer.resolve(result.data);
    //     })
    //     return defer.promise;
    // }).withDOM('&lt;"custom-element"&gt;pitrfl')


    $scope.dtColumns=[
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('first name').notSortable(),
        DTColumnBuilder.newColumn('lastName').withTitle('last name').notVisible()
    ]
}])