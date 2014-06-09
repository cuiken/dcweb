/**
 * Created by Ken.Cui on 2014/5/30.
 */
var CO2Chart = function () {

    return{
        init: function () {
            var myChart = echarts.init(document.getElementById('echarts'));


            draw();


            function draw() {
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['CO2减排量', '收益']
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
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '收益',
                            axisLabel: {
                                formatter: '${value}'
                            },
                            splitArea: {show: false}
                        },
                        {
                            type: 'value',
                            name: 'CO2减排量',
                            axisLabel: {
                                formatter: '{value}Kg'
                            },
                            splitLine: {show: false}
                        }
                    ],
                    series: [
                        {
                            name: '收益',
                            type: 'bar',
                            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name: 'CO2减排量',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }

}();