/**
 * Created by Ken.Cui on 2014/7/3.
 */
/**
 * Created by Ken.Cui on 2014/6/23.
 */

var AcChart = function () {

    return{
        init: function () {
            var myChart = echarts.init(document.getElementById('echarts'));

//            $(window).resize(function () {
//                    myChart.resize();
//            }),
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

            function draw(x,y,unit) {
                var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        orient:'horizontal',
                        data: ['B983000A137Q0037_1', 'B983000A137Q0037_2','B983000A137Q0037_3','B983000A137Q0037_4','B983000A137Q0037_5',
                            'B983000A137Q0037_6','B983000A137Q0037_7','B983000A137Q0037_8','B983000A137Q0037_9','B983000A137Q0038_0','B983000A137Q0038_1',
                            'B983000A137Q0038_2','B983000A137Q0038_3','B983000A137Q0038_4','B983000A137Q0038_5'],
                        y:'bottom',
                        x:'left',
                        padding:[0,40],
                        borderWidth: 30,
                        borderColor:'#fff',
//                        textStyle:{
//                            color:'auto'
//                        }
                        itemGap:10
                    },
                    grid:{
                        y2:150
                    },
                    toolbox: {
                        show: true,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        feature: {
                            mark: {show: true},
                            dataZoom: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true},
                            csv : {
                                show : true,
                                title : 'csv',
                                icon : 'image://../assets/img/avatar.png',
                                onclick : function(){
                                    alert('myToolHandler')
                                }
                            },
                            txt:{
                                show : true,
                                title : 'txt',
                                icon : 'image://../assets/img/avatar.png',
                                onclick : function(){
                                    alert('myToolHandler')
                                }
                            },
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
                            name: 'fac',
                            axisLabel: {
                                formatter: '{value} A'
                            },
                            splitArea: {show: false},
                            precision:1
                        }
                    ],
                    series: [
                        {
                            name: 'B983000A137Q0037_1',
                            type: 'line',
                            data: y
                        },
                        {
                            name: 'B983000A137Q0037_2',
                            type: 'line',
                            data: y
                        },
                        {
                            name: 'B983000A137Q0037_3',
                            type: 'line',
                            data: y
                        },
                        {
                            name: 'B983000A137Q0037_4',
                            type: 'line',
                            data: y
                        },
                        {
                            name: 'B983000A137Q0037_5',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0037_6',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0037_7',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0037_8',
                            type: 'line',
                            data:y
                        }
                        , {
                            name: 'B983000A137Q0037_9',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0038_0',
                            type: 'line',
                            data:y
                        }
                        , {
                            name: 'B983000A137Q0038_1',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0038_2',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0038_3',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0038_4',
                            type: 'line',
                            data: y
                        }
                        , {
                            name: 'B983000A137Q0038_5',
                            type: 'line',
                            data: y
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }

}();
