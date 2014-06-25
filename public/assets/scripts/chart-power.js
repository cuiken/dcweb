/**
 * Created by Ken.Cui on 2014/5/26.
 */

var PowerCharts = function () {

    return{

        init: function () {

            var myChart = echarts.init(document.getElementById('echarts'));

//            window.onresize = function() {
//
//                myChart.resize();
//            };

            $(".page-content").resize(function(){

                myChart.resize();
            });

            showLoading();
            drawChart();

            function showLoading() {
                myChart.showLoading({
                    text: '正在努力的读取数据中...',
                    effect: 'whirling'
                });
            }

            function drawChart() {

                $.getJSON('/powerInfo/bydays/2014-05-23', function (dateset) {
                    myChart.hideLoading();

                    var _x = [];
                    var _y = [];
                    var unit = dateset.dataunit;

                    var data = dateset.data;
                    $.each(data, function (key, val) {
                        _x.push(val.time);
                        _y.push(parseFloat(val.value));
                    });
                    draw(_x, _y, unit);
                }).error(function () {
                    $(".alert").css('display', 'block');
                    myChart.clear();
                    myChart.dispose();
                });
            }

            function draw(x, y, unit) {
                var option = {

                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['总发电量','8882000A10902151','8882000A10902152','8882000A10902153','8882000A10902154','8882000A10902155'],
                        x:'left',
                        y:'bottom',
                        padding:[5,80]
                    },
                    grid:{
                        y2:120
                    },
                    toolbox: {
                        show: true,
                        orient:'vertical',
                        x:'right',
                        y:'center',
                        feature: {
                            mark: {show: true},
                            dataZoom: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true},
                            print:{
                                show : true,
                                title : 'print',
                                icon : 'image://../assets/img/avatar.png',
                                onclick : function(){
                                    window.print();
                                }
                            }
                        }
                    },
                    calculable: true,
                    dataZoom: {
                        y:360,
                        show: false
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: x
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} ' + unit
                            },
                            splitArea: {show: false},
                            precision:1
                        }
                    ],
                    series: [
                        {
                            name: '8882000A10902151',
                            type: 'line',
                            data: y,
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            },
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        },
                        {
                            name: '8882000A10902152',
                            type: 'line',
                            data: y
                        },
                        {
                            name: '8882000A10902153',
                            type: 'line',
                            data: y
                        },
                        {
                            name: '8882000A10902154',
                            type: 'line',
                            data: y
                        },
                        {
                            name: '8882000A10902155',
                            type: 'line',
                            data: y
                        },
                        {
                            name: '总发电量',
                            type: 'line',
                            data: y,
                            markLine: {
                                data: [
                                    {type: 'average', name: '总平均值'}
                                ]
                            }
                        }
                    ]
                };
                option.dataZoom.show = true;
                option.dataZoom.start = 20;
                option.dataZoom.end = 80;
                myChart.setOption(option);
            }
        }
    }
}();