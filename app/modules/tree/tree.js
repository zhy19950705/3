//获取节点id
$scope.selectNode=function (node,selected,event) {
    if(selected.node.type===3){
        initData(selected.node.id);
    }
}

//获取该id的数据
var initData=function (id) {
    service.getDetailById(id).then(function (data) {
        $scope.bulidingData=data;
    })
}