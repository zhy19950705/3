angular.module('myApp').controller('zuoye1',['$scope',function ($scope) {
    function dataFormatter(obj) {
        var pList = ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'];
        var temp;
        for (var year = 2005; year <= 2016; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name: pList[i],
                    value: temp[i]
                }
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj
    }

    var dataMap = {};
    dataMap.dataGDP = dataFormatter({
        //max : 60000,
        2005:[2918.61,2447.32,1600.17,1158.38,1440.48,1066.7],
        2006:[3440.99,2874.42,1834.38,1345.18,1677.65,1240.8],
        2007:[4103.89,3418.57,2157,1586,1972.05,1474.35],
        2008:[4781.2,3964.1,2424.3,1815.3,2223,1681.9],
        2009:[5098.66,4334.33,2527.88,1919.78,2375.78,1777.8],
        2010:[5945.8,5215.8,2925.63,2296,2782.7,2049.7],
        2011:[7011.8,6010.5,3350.9,2668.1,3291.2,2447.7],
        2012:[7804,6524.7,3650.1,2884.9,3620.1,2700.1],
        2013:[8343.52,7128.87,4003.86,3447.6,3967.29,2958.78],
        2014:[9201.2,7602.5,4302.8,3352.8,4265.8,3206.6],
        2015:[10053.6,8011.5,4619.8,3517.1,4466.7,3406.5],
        2016:[11050.5,8541.1,5045.4,3760.1,4710.2,3635]
          });


    var option2 = {
        baseOption: {
            backgroundColor: '#f1f4f7',
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1000,
                data: [
                    '2005-01-01', '2006-01-01', '2007-01-01','2008-01-01',
                    '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01',
                    '2014-01-01','2015-01-01',
                    {
                        value: '2016-01-01',
                        symbol: 'roundRect',
                        symbolSize: 16
                    },

                ],
                label:{
                    formatter:function (s) {
                        return (new Date(s)).getFullYear();
                    }
                }
            },
            title:{
                subtext:'数据来自郑佳诚的爬虫'
            },
            tooltip:{},
            legend:{
                x:'right',
                data:['GDP'],
                selected:{
                    'GDP':true,
                }
            },
            grid:{
                top:80,
                bottom:100
            },
            xAxis:[
                {
                    'type':'category',
                    'axisLabel':{'interval':0},
                    'data':[
                        '杭州','宁波','温州','嘉兴','绍兴','金华'
                    ],
                    splitLine:{show:false},
                }
            ],
            yAxis:[
                {
                    type:'value',
                    name:'GDP(亿元)',
                    max:15000
                }
                ],
            series:[
                {name: 'GDP', type: 'bar'}
            ]
        },
        options:[
            {
                title:{
                    text:'2005年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2005']},
                ]
            },
            {
                title:{
                    text:'2006年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2006']},
                ]
            },
            {
                title:{
                    text:'2007年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2007']},
                ]
            },
            {
                title:{
                    text:'2008年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2008']},
                   ]
            },
            {
                title:{
                    text:'2009年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2009']},
                ]
            },
            {
                title:{
                    text:'2010年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2010']},
                ]
            },
            {
                title:{
                    text:'2011年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2011']},
                ]
            },
            {
                title:{
                    text:'2012年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2012']},
                ]
            },
            {
                title:{
                    text:'2013年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2013']},
                ]
            },
            {
                title:{
                    text:'2014年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2014']},
                ]
            },
            {
                title:{
                    text:'2015年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2015']},
                ]
            },
            {
                title:{
                    text:'2016年浙江省各市GDP'
                },
                series:[
                    {data: dataMap.dataGDP['2016']},
                ]
            }

        ]
    };

    var myChart2 = echarts.init(document.getElementById('zchart1'));
    myChart2.setOption(option2);
}])