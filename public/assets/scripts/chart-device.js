/**
 * Created by Ken.Cui on 2014/7/25.
 */
/**
 * Created by Ken.Cui on 2014/5/30.
 */
var DeviceChart = function () {

    return{
        init: function () {
            var myChart = echarts.init(document.getElementById('echarts'));

            $(".page-content").resize(function(){

                myChart.resize();
            });

            draw();


            function draw() {
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['监控器'],
                        y:'bottom'
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
                            boundaryGap : false,
                            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13...','30']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '台'
                        }
                    ],
                    series: [
                        {
                            name: '监控器',
                            type: 'line',
                            smooth:true,
                            itemStyle: {normal: {areaStyle: {type: 'default'}}},
                            data: [2, 4, 7, 8, 15, 17, 20, 15, 18, 20, 24, 26,30,40]
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }

}();