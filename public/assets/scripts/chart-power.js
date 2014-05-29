/**
 * Created by Ken.Cui on 2014/5/26.
 */

var PowerCharts = function () {

    return{

        init: function () {

            var myChart = echarts.init(document.getElementById('echarts'));

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
                        data: ['发电量', '总发电量']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataZoom: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    dataZoom: {
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
                            splitArea: {show: true}
                        }
                    ],
                    series: [
                        {
                            name: '发电量',
                            type: 'line',
                            data: y,
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
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
                option.dataZoom.start = 0;
                option.dataZoom.end = 50;
                myChart.setOption(option);
            }
        }
    }
}();