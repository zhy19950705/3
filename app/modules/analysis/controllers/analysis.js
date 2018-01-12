angular.module('myApp').controller('analysis', ['$scope', '$filter', function ($scope, $filter) {

    $scope.endTime = $filter("date")(new Date(), "yyyy-MM-dd");
    var tempTime = new Date().setDate(new Date().getDate() - 1);
    $scope.beginTime = $filter("date")(tempTime, "yyyy-MM-dd");

    $scope.dataFilter = {
        'beginTime': $scope.beginTime,
        'endTime': $scope.endTime
    }

    var seriesData = [
        {}
    ];

    $scope.monthDateTime="";
    $scope.monthData=[
        '2018-1',
        '2018-2'
    ];

    var initChart = function () {
        $scope.dataFilter.beginTime = $scope.beginTime;
        $scope.dataFilter.beginTime = $scope.endTime;
    }

    // var fnChartOptionHelp = function (seriesData, chartType) {
    //     var chartOption = {
    //         chart: {
    //             type: chartType,
    //             animation: HighCharts.svg,
    //             marginRight: 10,
    //             borderColor: '#e7ecf1',
    //             borderWidth: 0
    //         },
    //         title: null,
    //         xAxis: {
    //             type: "datetime"
    //         }
    //         yAxis: {
    //             title: {text: "gg"}
    //         },
    //         tooltip: {
    //             xDateFormat: '%Y-%m-%d %H:%M:%S'
    //         },
    //         lengend: {
    //             enabled: true
    //         },
    //         credits: {
    //             enabled: false
    //         },
    //         exporting: {
    //             enabled: false
    //         },
    //         colors: ['#36D7B7'],
    //         series: seriesData
    //     }
    //
    //     $scope.search = function () {
    //         initChart();
    //     }
    // }

    /*highChart帮助*/
    var initChartOptionHelp = function (id, categoriesLabel, seriesData, yAxisData) {
        var typeSeries;
        var plotOptions;
        var series;
        var tooltip;
        var chart;
        var title = {
            text: null
        };
        var credits = {
            enabled: false
        };
        var json = {};
        chart = {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            zoomType: 'xy'
        };
        series = seriesData;
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
        var legend = {
            align: 'center',
            verticalAlign: 'bottom',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor)
        };
        var xAxis = {
            categories: categoriesLabel,
            crosshair: true
        };
        var yAxis = yAxisData;
        var colors = ["#ffc000", "#560540", "#ff5072"];
        json.colors = colors;
        json.xAxis = xAxis;
        json.yAxis = yAxis;

        json.legend = legend;
        json.chart = chart;
        json.title = title;
        json.credits = credits;
        json.tooltip = tooltip;
        json.series = series;
        json.plotOptions = plotOptions;
        angular.element(id).highcharts(json);
    };


    var initEquipmentBoilerColumn = function (BoilerColumnData) {
        var categoriesLabel = [];
        var id = "#chart1";
        var seriesData = [{
            name: '上采暖季耗气量',
            type: 'column',
            yAxis: 0,
            data: [],
            tooltip: {
                valueSuffix: ' 万Nm³'
            }
        }, {
            name: '当日实际耗气量',
            type: 'column',
            yAxis: 0,
            data: [],
            tooltip: {
                valueSuffix: '万Nm³'
            }

        }, {
            name: '上采暖季当日室外温度',
            type: 'spline',
            yAxis: 2,
            data: [],
            marker: {
                enabled: false
            },
            tooltip: {
                valueSuffix: ' \xB0C'
            }
        }, {
            name: '当日室外平均温度',
            type: 'spline',
            yAxis: 2,
            data: [],
            tooltip: {
                valueSuffix: '\xB0C'
            }
        }
        ];
        angular.forEach(BoilerColumnData, function (Column) {
            seriesData[0].data.push(Column.lastPeriodGas);
            seriesData[1].data.push(Column.thisPeriodGas);
            seriesData[2].data.push(Column.lastPeriodTemper);
            seriesData[3].data.push(Column.thisPeriodTemper);
            categoriesLabel.push(new Date(Column.date).getMonth() + 1 + "-" + new Date(Column.date).getDate());
        });
        var titleName = "";
        var yAxisData = [];
        var headings = ["耗气量", "温度"];
        var unit = ["万Nm³", "\xB0C"];
        var temperatureMin;
        var temperatureMax;
        var consumptionMin;
        var consumptionMax;
        angular.forEach(seriesData, function (series, index) {
            var labels = {
                gridLineWidth: 0,
                title: {
                    text: null
                },
                labels: {
                    enabled: false
                },
                opposite: false
            };
            if (index === 0) {
                consumptionMin = series.data[0];
                consumptionMax = series.data[0];
            }
            if (index === 1) {
                temperatureMin = series.data[0];
                temperatureMax = series.data[0];
            }

            var numText = 0;
            angular.forEach(series.data, function (data) {
                if (index === 0 || index === 2) {
                    if (consumptionMax >= data) {
                        consumptionMin = data;
                    }
                } else {
                    if (temperatureMin >= data) {
                        temperatureMin = data;
                    }
                }
                if (index === 0 || index === 2) {
                    if (consumptionMax <= data) {
                        consumptionMax = data;
                    }
                } else {
                    if (temperatureMax <= data) {
                        temperatureMax = data;
                    }
                }
            });
            if (index === 0 || index === 2) {
                if (index === 2) {
                    numText = 1;
                } else {
                    numText = 0;
                }
                labels = {
                    labels: {
                        format: '{value}' + unit[numText],
                        style: {
                            color: Highcharts.getOptions().colors[index]
                        }
                    },
                    title: {
                        text: headings[numText],
                        style: {
                            color: Highcharts.getOptions().colors[index]
                        }
                    }
                };

            }
            if (index === 0 || index === 1) {
                if (consumptionMin === undefined) {
                    consumptionMin = 0;
                }
                if (consumptionMax === undefined) {
                    consumptionMax = 0;
                }
                if (index === 1) {
                    if (yAxisData[0].min > consumptionMin) {
                        yAxisData[0].min = consumptionMin;
                    }
                    if (yAxisData[0].max < consumptionMax) {
                        yAxisData[0].max = consumptionMax + 5;
                    }
                } else {
                    labels.min = consumptionMin;
                    labels.max = consumptionMax + 5;
                }
                labels.opposite = false;
            } else {
                if (temperatureMin === undefined) {
                    temperatureMin = 0;
                }
                if (temperatureMax === undefined) {
                    temperatureMax = 0;
                }
                if (index === 3) {
                    if (yAxisData[2].min > temperatureMin) {
                        yAxisData[2].min = temperatureMin;
                    }
                    if (yAxisData[2].max < temperatureMax) {
                        yAxisData[2].max = temperatureMax + 5;
                    }
                } else {
                    labels.min = temperatureMin;
                    labels.max = temperatureMax + 5;
                }
                labels.opposite = true;

            }
            yAxisData.push(labels);
        });
        initChartOptionHelp(id, categoriesLabel, seriesData, yAxisData);
    };

    var BoilerColumnData = [
        {
            date: "2018-01-01",
            lastPeriodGas: 1,
            lastPeriodTemper: 1,
            thisPeriodGas: 1,
            thisPeriodTemper: 1.3
        },
        {
            date: "2018-01-02",
            lastPeriodGas: 2,
            lastPeriodTemper: 2,
            thisPeriodGas: 2,
            thisPeriodTemper: 1.3
        }
    ]
    var getGetBoilers = function () {

        initEquipmentBoilerColumn(BoilerColumnData);
    };
    getGetBoilers();

    // var initService = function (initChart) {
    //
    //     // consumptionAnalysisService.GetCurrentHeatingSeason().then(function (Season) {
    //         var resultDate =  [new Date(Season.result.beginTime),new Date(Season.result.endTime)];
    //         var  year = [resultDate[0].getFullYear(),resultDate[1].getFullYear()];
    //         var month =[resultDate[0].getMonth(),resultDate[1].getMonth()];
    //         heatingAreaService.getUserDefaultAreaObject().then(function (Area) {
    //             if(Season.result){
    //                 var ddd = [];
    //                 consumptionAnalysisService.GetBoilerTotalGas(Season.result).then(function (Gas) {
    //                     if(Gas.result){
    //                         $scope.consumptionData[0].value =Gas.result.lastPeriodSumGas;
    //                         $scope.consumptionData[1].value =Gas.result.thisPeriodDailyMaxGas;
    //                         $scope.consumptionData[2].value =Gas.result.thisPeriodSumGas;
    //                     }
    //                 });
    //                 consumptionAnalysisService.GetCityTemperAnalysis(Area.cityCode,Season.result).then(function (alysis) {
    //                     if(alysis.result){
    //                         $scope.consumptionData[3].value =alysis.result.lastPeriodAverage;
    //                         $scope.consumptionData[4].value =alysis.result.thisPeriodAverage;
    //                         $scope.consumptionData[5].value =alysis.result.lastPeriodLowest;
    //                         $scope.consumptionData[6].value =alysis.result.thisPeriodLowest;
    //
    //                     }
    //                 });
    //
    //                 var DailyGas = {
    //                     "cityCode": Area.cityCode,
    //                     "year": 0,
    //                     "month": 0
    //                 };
    //                 if(initChart){
    //                     var newDateTime = false;
    //                     for(var i=0;i<12;i++){
    //                         if(month[1]>month[0]){
    //                             if(i >  month[0] &&i<month[1]){
    //                                 $scope.monthData.push(year[0]+"-"+(i+1));
    //                             }
    //                         }else {
    //                             if(i >  month[0]){
    //                                 $scope.monthData.push(year[0]+"-"+(i+1));
    //                             }
    //                             if(i<month[1]){
    //                                 $scope.monthData.push(year[1]+"-"+(i+1));
    //                             }
    //                         }
    //                     }
    //                     var thisDate = new Date().getFullYear() +"-" + (new Date().getMonth()+1) ;
    //                     angular.forEach($scope.monthData,function (monthItem) {
    //                         if(monthItem === thisDate){
    //                             newDateTime = true;
    //                         }else {
    //                             newDateTime = false;
    //                         }
    //                     });
    //                     if(newDateTime){
    //                         $scope.monthDateTime = thisDate;
    //                         DailyGas.year =  new Date().getFullYear();
    //                         DailyGas.month =  new Date().getMonth()+1;
    //                     }else {
    //                         $scope.monthDateTime = $scope.monthData[0];
    //                         DailyGas.year =  new Date($scope.monthData[0]).getFullYear();
    //                         DailyGas.month =  new Date($scope.monthData[0]).getMonth()+1;
    //                     }
    //                 }else {
    //                     var DateTimeYear =   $scope.monthDateTime.substr(0,4);
    //                     var DateTimeMonth =  $scope.monthDateTime.substr(5,2);
    //                     DailyGas = {
    //                         "cityCode": Area.cityCode,
    //                         "year": DateTimeYear,
    //                         "month": DateTimeMonth
    //                     };
    //                 }
    //                 // consumptionAnalysisService.GetBoilerTotalDailyGas(DailyGas).then(function (data) {
    //                     initEquipmentBoilerColumn(data.result);
    //
    //                 // });
    //
    //             }
    //         });

    // });
    // };
    // var initChartStart = true;
    // initService(initChartStart);
}])