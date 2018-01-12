angular.module('myApp').controller('zuoye3',["$scope",function ($scope) {
    option = {
        title: {
            text: '浙江省2016各市季度累计GDP'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#f1f4f7'
                }
            }
        },
        legend: {
            data:['杭州','宁波','温州','嘉兴','绍兴']
        },
        toolbox: {

        },
        grid: {
            left: '15%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1-1季度','1-2季度','1-3季度','1-4季度']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'杭州',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[2214.7, 5021.2,7780.7,11050.5]
            },
            {
                name:'宁波',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[1643.8, 3915.1,6011.2,8541.1]
            },
            {
                name:'温州',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[936.8,2142.4,3401.9,5045.4]
            },
            {
                name:'嘉兴',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[752.8,1683.8,2637.9,3760.1]
            },
            {
                name:'金华',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[745.8,1673.7,3265.6,4710.2]
            },
            {
                name:'绍兴',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[909.8,2151.5,3265.6,4710.2]
            }
        ]
    };
    var myChart= echarts.init(document.getElementById('zchart2'));
    myChart.setOption(option)

}])