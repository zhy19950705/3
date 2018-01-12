angular.module('myApp').controller('hchartsController', ["$scope", "$http", function ($scope, $http) {

    var dynamicInit=function () {
        var chart={
            type:'spline',
            backgroundColor:'#f1f4f7',
            animation:Highcharts.svg,
            // marginRight:10,
            events:{
                load:function () {
                    var series=this.series[0];
                    setInterval(function () {
                        var x=(new Date()).getTime(),
                            y=Math.random();
                        series.addPoint([x,y],true,true)
                    },1000)
                }
            }
        };
        var title={
            text:'动态数据图'
        };
        var xAxis={
            type:'datetime',
            tickPixelInterval:70,
        };
        var yAxis={
            title:{
                text:'值'
            },
            plotLines:[{
                value:0,
                width:1,
                color:'#1a802c'
            }]
        };
        var tooltip={
            formatter:function () {
                return '<b>'+this.series.name+'</b><br>'+
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S',this.x)+'<br>'+
                    Highcharts.numberFormat(this.y,2);
            }
        };
        var plotOptions={
           spline:{
               pointStart:1940,
                marker:{
                    enabled:false,
                    symbol:'circle',
                    radius:2,
                    states:{
                        hover:{
                            enable:true
                        }
                    }
                }
            }
        };
        var legend={
            enable:false
        };
        var exporting={
            enable:false
        };
        var series=[{
            name:'随机数',
            data:(function () {
                var data=[],time=(new Date()).getTime(),i;
                for(i=-17;i<=0;i++){
                    data.push({
                        x:time+i*1000,
                        y:Math.random()
                    })
                };
                return data;
            }())
        }];
        var credits = {
            enabled: false
        };
        var json={};
        json.chart=chart;
        json.title=title;
        json.tooltip=tooltip;
        json.xAxis=xAxis;
        json.yAxis=yAxis;
        json.legend=legend;
        json.exporting=exporting;
        json.series=series;
        json.credits=credits;
        json.plotOptions=plotOptions;
        angular.element('#container1').highcharts(json);
    };

    Highcharts.setOptions({
        global:{
            useUTC:false
        }
    });

    dynamicInit();

    var init = function (id, chartType, data, title, categoriesLabel) {
        var series;
        var chart;
        var title = {
            text: title
        };
        var credits = {
            enabled: false
        };
        var json = {};
        chart = {
            type: 'line',
            backgroundColor:'#f1f4f7',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        };
        series = [
            {
                name: data[0].name,
                data: data[0].data
            },
            {
                name: data[1].name,
                data: data[1].data
            },
            {
                name: data[2].name,
                data: data[2].data
            },
            {
                name: data[3].name,
                data: data[3].data
            },
            {
                name: data[4].name,
                data: data[4].data
            }
        ];
        yAxis = {
            title: {
                text: null
            }
        };
        xAxis = {
            categories: categoriesLabel,
            crosshair: true,
            tickWidth: 0,
            useHTML: true,
            style: {
                width: '20px'
            }
        };

        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.chart = chart;
        json.title = title;
        json.credits = credits;
        json.series = series;
        angular.element(id).highcharts(json);
    };

    var initChartOptionHelp = function (id, chartType, data, title, categoriesLabel, seriesName) {
        var typesSeries;
        var plotOptions;
        var series;
        var tooltip;
        var chart;
        var title = {
            text: title
        };
        var credits = {
            enabled: false
        };
        var json = {};
        if (chartType === 'pie') {
            chart = {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            };
            series = [{
                type: chartType,
                name: '锅炉个数',
                data: data
            }];
            plotOptions = {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            };
            tooltip = {
                headerFormat: ' {point.key}: {point.percentage:.1f}%<br>',
                pointFormat: '{series.name}:  <b>{point.options.y}</b>'
            }
        } else if (chartType === 'column') {
            chart = {
                type: 'column',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            };
            series = [{
                name: seriesName,
                data: data
            }];
            plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            tooltip = {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td >{series.name}: </td>' +
                '<td><b>{point.y} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            };
            var xAxis = {
                categories: categoriesLabel,
                crosshair: true,
                tickWidth: 0,
                useHTML: true,
                style: {
                    width: '20px'
                }
            };
            var yAxis = {
                title: {
                    text: null
                },
                opposite: false,
                showEmpty: false
            };
            var colors = ['#fe3456'];
            json.colors = colors;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
        }
        json.chart = chart;
        json.title = title;
        json.credits = credits;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        angular.element(id).highcharts(json);
    };

    $scope.distributionBoilerData = [
        ['电', 45.0],
        ['燃气', 26.8],
        {
            name: '煤气',
            y: 12.8,
            sliced: true,
            selected: true
        },
        ['水', 8.5],
        ['火', 6.2],
        ['油', 0.7]
    ];

    $scope.equipmentBoilerData = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
    $scope.equipmentBoilerLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.myChartData = [{
        name: '安装，实施人员',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: '工人',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: '销售',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: '项目开发',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: '其他',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }];
    $scope.Label = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    // console.log($scope.myChartData[0])

    var initDistributionBoilerPie = function () {
        var id = "#distribution-boiler-pie";
        var chartType = "pie";
        var seriesData = $scope.distributionBoilerData;
        var titleName = "锅炉分布饼图";
        initChartOptionHelp(id, chartType, seriesData, titleName)
    };

    var initEquipmentBoilerColumn = function () {
        var id = "#equipment-boiler-column";
        var chartType = "column";
        var seriesData = $scope.equipmentBoilerData;
        var titleName = "郑佳诚是傻子";
        var ColumnsLabel = $scope.equipmentBoilerLabel;
        var ColumnsName = "";
        initChartOptionHelp(id, chartType, seriesData, titleName, ColumnsLabel, ColumnsName)
    };

    var initMyChart = function () {
        var id = "#my-chart";
        var chartType = "line";
        // var lineName = $scope.myChartData[0].name
        // var seriesData = $scope.myChartData[0].data;
        var data = $scope.myChartData
        var titleName = "myChart";
        var label = $scope.Label;
        init(id, chartType, data, titleName, label)
    };

    initDistributionBoilerPie();
    initEquipmentBoilerColumn();
    initMyChart()
}]);