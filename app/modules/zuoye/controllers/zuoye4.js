angular.module('myApp').controller('zuoye4',['$scope',function ($scope) {
    option = {
        backgroundColor: '#394056',
        title: {
            text: '1990-2016年浙江省部分市固定资产投资',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '30%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['嘉兴', '绍兴', '金华','宁波','杭州'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            data: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },

            position: 'bottom',
            offset: 20,
            data: ['', '', '', '', '', '']
        }],
        yAxis: [{
            type: 'value',
            name: '单位（万元）',

            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '嘉兴',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199,97,20, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(199,97,20, 0)'
                    }], false),
                    shadowColor: 'rgba(199,97,20, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(199,97,20)',
                    borderColor: 'rgba(199,97,20,0.27)',
                    borderWidth: 12

                }
            },
            data: [242481,307801,408206,604943,861309, 1117804,1271807,1442096,1726893,1970910,2637423,3054142,3787967,5255740,6350016,7034577,8003277,9000421,10067972,12334071,14882637,14882661,16423109,19101518,22212077,25138180
]
        }, {
            name: '绍兴',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 136, 212, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [172053,244522,446114,1113334,1365648,1623146,1775979,1645175,1701775,1910004,2471758,2865486,3674797,5350324,6291005,6761274,7657451,8433749,9157476,10550321,12455609,14262594,17225646,20019855,23046833,25828403,28824824
            ]
        }, {
            name: '金华',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(219, 50, 51, 0.1)',
                    shadowBlur: 10
                }
            },
            grid: {
                left: '15%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            itemStyle: {
                normal: {
                    color: 'rgb(255,0,255)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [102659,143692,222206,373425,557801,864562,1108654,1120158,1216505,1336715,1650500,2316865,2950993,4121860,4937830,4854143,5069496,5409475,5868718,6351588,7728039,8628258,11268026,13643582,15947862,18364601,20840146
            ]
        },  {
            name: '宁波',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,199,140, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0,199,140, 0)'
                    }], false),
                    shadowColor: 'rgba(0,199,140, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,199,140)',
                    borderColor: 'rgba(0,199,140,0.2)',
                    borderWidth: 12

                }
            },
            data: [392800,514200,762500,1292700,1846000,2641900,3099700,3005700,3098100,3189300,3607500,4702800,6012700,7409200,10266400,12685500,14130000,14865400,16108600,18604500,20349900,23855000,29014200,34229500,39894600
                ,45065800]
        }, {
            name: '杭州',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(160, 32, 240, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(160, 32, 240, 0)'
                    }], false),
                    shadowColor: 'rgba(160, 32, 240, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(160, 32, 240)',
                    borderColor: 'rgba(160, 32, 240,0.2)',
                    borderWidth: 12

                }
            },
            data: [229214,255696,384136,825382,1059437,1566280,1819333,2139012,2681740, 3233609, 3766473, 4634929,5623366, 8952090, 11081993, 12777972, 13734482, 15837775, 18822936, 21951706, 26518839, 31000218, 37227544, 42638732, 49527010,55563183, 58424194
            ]
        } ]
    };

    var myChart= echarts.init(document.getElementById('zchart3'));
    myChart.setOption(option)
}])