angular.module('myApp').controller('photoController',['$scope',function ($scope) {
 $scope.photos=[
     {
         name:"lanterns",
         href:'#info1',
         src:'modules/chiji/tab2/images/lanterns.jpg'
     },
     {
         name:'tree',
         href:'#info2',
         src:'modules/chiji/tab2/images/tree.jpg'
     },
     {
         name:'cablecar',
         href:'#info3',
         src:'modules/chiji/tab2/images/cablecar.jpg'
     },
     {
         name:'londoneye',
         href:'#info4',
         src:'modules/chiji/tab2/images/londoneye.jpg'
     },
     {
         name:'pregnant maiden',
         href:'#info5',
         src:'modules/chiji/tab2/images/maiden.jpg'
     },
     {
         name:'clouds of doom',
         href:'#info6',
         src:'modules/chiji/tab2/images/clouds.jpg'
     },
     {
         name:'silver',
         href:'#info7',
         src:'modules/chiji/tab2/images/statue2.jpg'
     },
     {
         name:'under the bridge',
         href:'#info8',
         src:'modules/chiji/tab2/images/bridge.jpg'
     },
     {
         name:'golden statue',
         href:'#info9',
         src:'modules/chiji/tab2/images/bridge.jpg'
     }
 ]
}])