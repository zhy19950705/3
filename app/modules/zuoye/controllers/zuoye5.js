angular.module('myApp').controller('zuoye5',['$scope',function ($scope) {
    //各地区投保率趋势分布图
    option = {
        title: [{
            text: '2004-2006浙江省部分市房地产投资',
            subtext: '内部数据',
            left: 'left',
            textStyle: {
                color: 'black'
            },
        }],
        textStyle: {
            color: 'black'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        legend: {
            data: ['杭州','绍兴','嘉兴'],
            textStyle: {
                color: 'black'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: '单位',
            min: 0,
            position: 'left',
            axisLabel: {
                formatter: '{value}万元'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015','2016'],
        },
        series: [ {
            name: '嘉兴',
            type: 'bar',
            stack: '投资数',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1175337,1234034,1181004, 1477428,1811202, 1871781,2703889
                ,3833650,4158763,5108262,5257184,4584133
            ]
        }, {
            name: '绍兴',
            type: 'bar',
            stack: '投资数',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [
                ,1033309
                ,1285667
                ,1785888
                ,2020573
                ,2104629
                ,2978018
               , 4032384
               , 4677089
               , 5369907
                ,6135118
                ,6226472
               , 6411932
            ]
        }, {
            name: '杭州',
            type: 'bar',
            stack: '投资数',

            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [3285409
                ,4105706
               , 4426534
                ,5187904
               , 6154060
               , 7046752
                ,9561970
               , 13027234
               , 15973611
                ,18532841
                ,23010823
                ,24720743
                ,26064060
            ]
        }]
    };

    var myChart= echarts.init(document.getElementById('zchart4'));
    myChart.setOption(option)
}])