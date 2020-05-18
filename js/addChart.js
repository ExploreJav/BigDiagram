var addChart = {
    //投产主变容量统计配置项
    touchangZhuBianOption: {
        //--------------    标题 title  ----------------
        title: {
            //text: '主变容量',
            x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            textStyle: { //---主标题内容样式
                color: '#fff',
                fontSize: 30,
            },
            // subtext:'副标题',          //---副标题内容样式
            // subtextStyle:{
            //      color:'#bbb'
            // },

            //padding:[0,0,0,0]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位

        },

        //----------------   图例 legend  -----------------
        legend: {
            type: 'plain', //----图例类型，默认为'plain'，当图例很多时可使用'scroll'
            top: '1%', //----图例相对容器位置,top\bottom\left\right
            selected: {
                '销量': true, //----图例选择,图形加载出来会显示选择的图例，默认为true
            },
            textStyle: { //----图例内容样式
                color: '#fff', //---所有图例的字体颜色
                //backgroundColor:'black',  //---所有图例的字体背景色
            },
            tooltip: { //图例提示框，默认不显示
                show: true,
                color: 'red',
            },
            data: [ //----图例内容
                {
                    name: '数量',
                    icon: 'circle', //----图例的外框样式
                    textStyle: {
                        color: '#fff', //----单独设置某一个图例的颜色
                        //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                    }
                }
            ],
        },

        //--------------   提示框 -----------------
        tooltip: {
            show: true, //---是否显示提示框,默认为true
            trigger: 'item', //---数据项图形触发
            axisPointer: { //---指示样式
                type: 'shadow',
                axis: 'auto',

            },
            padding: 5,
            textStyle: { //---提示框内容样式
                color: "#fff",
            },
        },

        //-------------  grid区域  ----------------
        grid: {
            show: false, //---是否显示直角坐标系网格
            top: 80, //---相对位置，top\bottom\left\right
            containLabel: false, //---grid 区域是否包含坐标轴的刻度标签
            tooltip: { //---鼠标焦点放在图形上，产生的提示框
                show: true,
                trigger: 'item', //---触发类型
                textStyle: {
                    color: '#666',
                },
            }
        },

        //-------------   x轴   -------------------
        xAxis: {
            name: '容量(KAV)', // 给X轴加单位
            show: true, //---是否显示
            position: 'bottom', //---x轴位置
            offset: 0, //---x轴相对于默认位置的偏移
            type: 'category', //---轴类型，默认'category'
            //  name:'容量',              //---轴名称
            nameLocation: 'end', //---轴名称相对位置
            nameTextStyle: { //---坐标轴名称样式
                color: "#fff",
                padding: [5, 0, 0, -5], //---坐标轴名称相对位置
                fontSize: 13,

            },
            nameGap: 15, //---坐标轴名称与轴线之间的距离
            //nameRotate:270,           //---坐标轴名字旋转

            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示

                //------------------- 箭头 -------------------------
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置

                //------------------- 线 -------------------------
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
                inside: true, //---是否朝内
                lengt: 3, //---长度
                lineStyle: {
                    //color:'red',          //---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: { //---坐标轴 标签
                show: true, //---是否显示
                inside: false, //---是否朝内
                rotate: 0, //---旋转角度
                margin: 5, //---刻度标签与轴线之间的距离
                //color:'red',              //---默认取轴线的颜色
                textStyle: {
                    fontSize: 15,
                    color: 'white',
                },
            },
            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的X轴为类目轴，splitLine属性是无意义的
                lineStyle: {
                    //color:'red',
                    //width:1,
                    //type:'solid',
                },
            },
            splitArea: { //--网格区域
                show: false, //---是否显示，默认false
            },
            data: [9, 12, 15, 18, 24, 36, 48, 72, 75, 100, 150, 200, 300], //内容

        },

        //----------------------  y轴  ------------------------
        yAxis: {
            name: '数量',
            show: true, //---是否显示
            position: 'left', //---y轴位置
            offset: 0, //---y轴相对于默认位置的偏移
            type: 'value', //---轴类型，默认'category'
            //  name:'数量',              //---轴名称
            nameTextStyle: { //---坐标轴名称样式
                color: "#fff",
                padding: [5, 0, 0, 5], //---坐标轴名称相对位置
                fontSize: 15,
            },
            nameLocation: 'end', //---轴名称相对位置value

            nameGap: 15, //---坐标轴名称与轴线之间的距离
            //nameRotate:270,           //---坐标轴名字旋转

            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示

                //------------------- 箭头 -------------------------
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置

                //------------------- 线 -------------------------
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
                inside: true, //---是否朝内
                length: 3, //---长度
                lineStyle: {
                    //color:'red',          //---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: { //---坐标轴 标签
                show: true, //---是否显示
                inside: false, //---是否朝内
                rotate: 0, //---旋转角度
                margin: 8, //---刻度标签与轴线之间的距离
                //color:'red',              //---默认取轴线的颜色
                textStyle: {
                    fontSize: 15,
                    color: 'white',
                },
            },
            splitLine: { //---grid 区域中的分隔线
                show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                lineStyle: {
                    color: '#666',
                    width: 1,
                    type: 'dashed', //---类型
                },
            },
            splitArea: { //--网格区域
                show: false, //---是否显示，默认false
            }
        },

        //------------ 内容数据  -----------------
        series: [{
            name: '电站数量', //---系列名称
            type: 'bar', //---类型
            legendHoverLink: true, //---是否启用图例 hover 时的联动高亮
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white',
                        fontSize: 15
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#bbf618'
                            },
                            {
                                offset: 0.5,
                                color: '#18f00e'
                            },
                            {
                                offset: 1,
                                color: '#1d56f0'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgb(207,182,84)'
                            },
                            {
                                offset: 0.7,
                                color: '#2378f7'
                            },
                            {
                                offset: 1,
                                color: '#83bff6'
                            }
                        ]
                    )
                }
            },
            barWidth: '20', //---柱形宽度
            barCategoryGap: '20%', //---柱形间距
            data: [1, 12, 3, 15, 2, 37, 20, 1, 7, 5, 1, 4, 1]
        }]
    },
    finishTimeOption: {
        //--------------    标题 title  ----------------
        title: {
            //text: '主变容量',
            x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top',
            textStyle: { //---主标题内容样式
                color: '#fff',
                fontSize: 30,
            },
            // subtext:'副标题',          //---副标题内容样式
            // subtextStyle:{
            //      color:'#bbb'
            // },

            //padding:[0,0,0,0]               //---标题位置,因为图形是是放在一个dom中,因此用padding属性来定位

        },

        //----------------   图例 legend  -----------------
        legend: {
            type: 'plain', //----图例类型，默认为'plain'，当图例很多时可使用'scroll'
            top: '1%', //----图例相对容器位置,top\bottom\left\right
            selected: {
                '销量': true, //----图例选择,图形加载出来会显示选择的图例，默认为true
            },
            textStyle: { //----图例内容样式
                color: '#fff', //---所有图例的字体颜色
                //backgroundColor:'black',  //---所有图例的字体背景色
            },
            tooltip: { //图例提示框，默认不显示
                show: true,
                color: 'red',
            },
            data: [ //----图例内容
                {
                    name: '数量',
                    icon: 'circle', //----图例的外框样式
                    textStyle: {
                        color: '#fff', //----单独设置某一个图例的颜色
                        //backgroundColor:'black',//---单独设置某一个图例的字体背景色
                    }
                }
            ],
        },

        //--------------   提示框 -----------------
        tooltip: {
            show: true, //---是否显示提示框,默认为true
            trigger: 'item', //---数据项图形触发
            axisPointer: { //---指示样式
                type: 'shadow',
                axis: 'auto',

            },
            padding: 5,
            textStyle: { //---提示框内容样式
                color: "#fff",
            },
        },

        //-------------  grid区域  ----------------
        grid: {
            show: false, //---是否显示直角坐标系网格
            top: 80, //---相对位置，top\bottom\left\right
            containLabel: false, //---grid 区域是否包含坐标轴的刻度标签
            tooltip: { //---鼠标焦点放在图形上，产生的提示框
                show: true,
                trigger: 'item', //---触发类型
                textStyle: {
                    color: '#666',
                },
            }
        },

        //-------------   x轴   -------------------
        xAxis: {

            show: true, //---是否显示
            position: 'bottom', //---x轴位置
            offset: 0, //---x轴相对于默认位置的偏移
            type: 'category', //---轴类型，默认'category'
            //  name:'容量',              //---轴名称
            nameLocation: 'end', //---轴名称相对位置
            nameTextStyle: { //---坐标轴名称样式
                color: "#fff",
                padding: [5, 0, 0, -5], //---坐标轴名称相对位置
                fontSize: 13,

            },
            nameGap: 15, //---坐标轴名称与轴线之间的距离
            //nameRotate:270,           //---坐标轴名字旋转

            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示

                //------------------- 箭头 -------------------------
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置

                //------------------- 线 -------------------------
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
                inside: true, //---是否朝内
                lengt: 3, //---长度
                lineStyle: {
                    //color:'red',          //---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: { //---坐标轴 标签
                show: true, //---是否显示
                inside: false, //---是否朝内
                rotate: 0, //---旋转角度
                margin: 5, //---刻度标签与轴线之间的距离
                //color:'red',              //---默认取轴线的颜色
                textStyle: {
                    fontSize: 15,
                    color: 'white',
                },
            },
            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的X轴为类目轴，splitLine属性是无意义的
                lineStyle: {
                    //color:'red',
                    //width:1,
                    //type:'solid',
                },
            },
            splitArea: { //--网格区域
                show: false, //---是否显示，默认false
            },
            data: ["一年内", "两年内", "三年内", "其他"], //内容

        },

        //----------------------  y轴  ------------------------
        yAxis: {

        },

        //------------ 内容数据  -----------------
        series: [{
            name: '电站数量', //---系列名称
            type: 'bar', //---类型
            legendHoverLink: true, //---是否启用图例 hover 时的联动高亮
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#bbf618'
                            },
                            {
                                offset: 0.5,
                                color: '#18f00e'
                            },
                            {
                                offset: 1,
                                color: '#1d56f0'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgb(207,182,84)'
                            },
                            {
                                offset: 0.7,
                                color: '#2378f7'
                            },
                            {
                                offset: 1,
                                color: '#83bff6'
                            }
                        ]
                    )
                },

            },
            barWidth: '20', //---柱形宽度
            barCategoryGap: '20%', //---柱形间距
            data: [32, 42, 17, 10]
        }]
    },
    //折单公里数配置项
    unilatKeralKilometreOption: {
        color: ['#0077FF', '#006699', '#4cabce', '#e5323e'],
        title: {
            show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
            // text: '折单公里数',//主标题文本，'\n'指定换行
            x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
            y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
            //             textAlign: null,//水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
            //             backgroundColor: 'rgba(0,0,0,0)',//标题背景颜色，默认'rgba(0,0,0,0)'透明
            //             borderColor: 'white',//标题边框颜色,默认'#ccc'
            //             borderWidth: '',//标题边框线宽，单位px，默认为0（无边框）
            //             padding: 0,//标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
            //             itemGap: 10,//主副标题纵向间隔，单位px，默认为10
            textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                // fontFamily: 'Arial, Verdana, sans...',
                fontSize: '20',
                fontStyle: 'normal',
                fontWeight: 'normal',
                color: 'white',
            },


        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return "单折线" + ' : ' + tar.value;
            },

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {

            type: 'category',
            data: ['05', '06', '07', '08', '09', '10', 11, 12, 13, 14, 15, 16, 17, 18, 19, 'total'],

            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                interArrival: 0, //设置x坐标内容全部显示
                rotate: -30, //设置坐标倾斜角度
            },
            //设置x轴字体大小及颜色
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    color: 'white',
                },

            }
        },
        yAxis: {
            // name:"km",
            type: 'value',
            //y轴颜色
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            //y轴设置为百分比
            axisLabel: {
                formatter: '{value}',
            },

            //坐标轴内线的样式
            splitLine: {
                show: true, //去除网格线
                lineStyle: {
                    color: '#666',
                    width: 1,
                    type: 'dashed',
                },
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18,
                    color: 'white',
                },
            }

        },
        series: [{
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },

                data: [0, 631, 1165, 2353, 2459, 3026, 3566, 4334, 4556, 5178, 5504, 5916, 6361,
                    7025, 7181, 0
                ]
            },

            {
                name: '单折公里数',
                type: 'bar',
                stack: '总量',
                label: {
                    //position:'top',
                    normal: {
                        show: true,
                        position: 'top',

                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },

                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: 'rgb(94,57,97)'
                                },
                                {
                                    offset: 0.5,
                                    // color: 'rgb(55,40,51)'
                                    color: 'rgb(94,57,97)'
                                },
                                {
                                    offset: 1,
                                    // color: 'rgb(113,53,65)'
                                    color: 'rgb(94,57,97)'
                                }
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [{
                                    offset: 0,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 0.7,
                                    color: '#2378f7'
                                },
                                {
                                    offset: 1,
                                    color: '#83bff6'
                                }
                            ]
                        )
                    }
                },
                data: [631, 534, 1188, 106, 567, 540, 768, 222, 622, 326, 412, 445, 664, 156,
                    143, 7324
                ]
            }
        ]
    },
    //统计05-19年每年对应的200KV以及500KV工程数量配置项
    yearAndTowerOption: {
        legend: {
            orient: 'vertical',
            x: 710,
            y: 0,
            icon: 'pie',
            color: ['#4472C5', '#ED7C30', '#80FF80'],
            data: ['总工程', '220KV工程', '500KV工程'],
            textStyle: { //图例文字的样式
                color: 'white',
                fontSize: 13
            },

            //backgroundColor:'rgba(100,0,100,0.5)',
        },
        grid: {
            left: '3%',
            right: '6%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: {
            name: '年份',
            nameTextStyle: {
                fontSize: 16,
            },
            type: 'category',
            data: ['05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            axisLabel: {
                interArrival: 0, //设置x坐标内容全部显示
                rotate: 0, //设置坐标倾斜角度
                textStyle: {
                    fontSize: 16,
                    color: 'white',
                },
            },
            //设置x轴字体大小及颜色

        },
        yAxis: {
            // name:'工程数量',              //---轴名称
            nameTextStyle: {
                fontSize: 16,
            },
            type: 'value',
            //y轴颜色
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },

            //坐标轴内线的样式

            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                lineStyle: {
                    color: '#666',
                    width: 1,
                    type: 'dashed', //---类型
                },
            },
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 16,
                    color: 'white',
                },

            }

        },
        series: [{
                name: "总工程",
                //每年对应的（200KV+500KV）工程的数量
                data: [10, 14, 13, 8, 9, 9, 17, 8, 14, 13, 11, 12, 16, 10,
                    10
                ], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                type: 'line',
                symbol: 'square',
                symbolSize: 3,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: 'rgb(24,190,188)',
                        width: 3,
                        //type: 'dashed'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: 'white',
                        color: 'rgb(24,190,188)',
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 20,
                            }
                        },
                        lineStyle: {
                            width: 3
                        },
                        // areaStyle:{
                        //      type:'default'
                        // }
                    }
                },
            },
            {
                name: "220KV工程",
                //05-19年每年修建的220KV工程的数量
                data: [9, 14, 9, 5, 7, 8, 14, 6, 14, 10, 9, 9, 10, 10,
                    6
                ], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                type: 'line',
                symbol: 'circle',
                symbolSize: 3,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: 'green',
                        width: 3,
                        type: 'dashed'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: 'white',
                        color: 'green',
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 20,
                            }
                        },
                        lineStyle: {
                            width: 3
                        },
                        // areaStyle:{
                        //      type:'default'
                        // }
                    }
                },
            },
            {
                name: "500KV工程",
                //05-19年每年对应的500KV工程的数量
                data: [1, 0, 4, 3, 2, 1, 3, 2, 0, 3, 2, 3, 6, 0, 4], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                type: 'line',
                symbol: 'square',
                symbolSize: 5,
                smooth: true,
                lineStyle: {
                    normal: {
                        color: 'rgb(52,79,120)',
                        width: 3,
                        type: 'dashed'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: 'white',
                        color: 'rgb(52,79,120)',
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 20,
                            }
                        },
                        lineStyle: {
                            width: 10
                        },
                        // areaStyle:{
                        //      type:'default'
                        // }
                    }
                },
            }
        ],
    },
    //在建和扩建比列
    constructorArr: [150, 40],
    //用来显示区域排行榜里面的8个省份
    showProvice(id, imagePath, province, projNum, towerNum) {
        //设置背景图片
        let element = document.getElementById(id);
        element.style.backgroundImage = 'url(./image/CQdistrict/beibei.png)';
        //设置区域名称
        element.getElementsByClassName('area')[0].innerHTML = province;
        //设置工程数量
        element.getElementsByClassName('projNum')[0].innerHTML = '~ 工程数量：' + projNum;
        //设置变电站数量
        element.getElementsByClassName('towerNum')[0].innerHTML = '~ 变电站：' + towerNum;
    },
    //展示新建和扩建
    //[74,40]
    showConstructor(id, data) {
        let $el = document.getElementById(id);
        let myChart = echarts.init($el);
        let total = 0;
        data.forEach((res) => {
            total += parseFloat(res);
        });
        var jiancheng = parseFloat(data[0] / total * 100).toFixed(2);
        var name = data.type;
        let option = {
            title: {
                zlevel: 0,
                text: [
                    jiancheng + "%" + "\n" + data[0] + "个",
                ],
                rich: {
                    value: {
                        color: '#303133',
                        fontSize: 20,
                        fontWeight: 'bold',
                        lineHeight: 40,
                    },
                    name: {
                        color: '#909399',
                        lineHeight: 20
                    },
                },
                top: 'center',
                left: '100',
                textAlign: 'center',
                textStyle: {
                    color: '#e4393c', //京东红
                    fontStyle: 'normal', //主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
                    fontWeight: "bold", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
                    fontFamily: "san-serif", //主题文字字体，默认微软雅黑
                    fontSize: 20, //主题文字字体大小，默认为18px
                    color: 'white',
                },
            },
            tooltip: { // 悬停指示
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',

                itemGap: 30,
                top: 'middle',
                align: 'left',
                icon: 'circle',
                formatter: function (name) {
                    return name;
                },
                show: false
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['50%', '50%'],
                stillShowZeroSum: false,
                avoidLabelOverlap: false,
                itemStyle: {
                    borderWidth: 5, //设置border的宽度有多大
                    borderColor: '#fff',
                },
                zlevel: 1,
                label: {
                    normal: {
                        padding: [30, 30, 30, 30],
                        backgroundColor: 'green',
                        show: false,
                        position: 'center',
                        formatter: [
                            '{value|￥{c}}',
                            '{name|{b}}'
                        ].join('\n'),
                        rich: {
                            value: {
                                color: '#303133',
                                fontSize: 40,
                                fontWeight: 'bold',
                                lineHeight: 40,
                            },
                            name: {
                                color: '#909399',
                                lineHeight: 20
                            },
                        },
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }],
            color: ['rgb(204,199,180)', 'rgb(38,54,79)']
        };
        myChart.setOption(option);
    },
    setOption(option, id) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
    },
    init() {
        //投产主变容量统计 添加
        this.setOption(this.touchangZhuBianOption, 'tongJi1');
        this.setOption(this.unilatKeralKilometreOption, 'tongjitu');
        this.setOption(this.yearAndTowerOption, 'yearAndTower');
        this.showConstructor('touchan', this.constructorArr, 0);
        this.showConstructor('sheji', this.constructorArr.reverse(), 1);
        //this.showProvice('top2', 'imagePath');
    },
    //元素消失的方法
    hide(elClass) {
        $(elClass).fadeOut({
            duration: 1000,
        })
    },
    show(elClass) {
        $(elClass).fadeIn({
            duration: 1000,
        })
    },
    //变电站总数和折单公里数
    showNum(totalTower, totalKm) {
        //$(el).prepend('');
        $('#middle').fadeOut(2000);
        totalTower = '工程总数:' + totalTower;
        totalKm = '变电站总数:' + totalKm;
        $('#totalTower').text(totalTower);
        $('#totalKm').text(totalKm);
        $('#middle').fadeIn(2000);
    },
    chart1(id, cls, data) {
        var startColor = ['#0e94eb', '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'];
        var borderStartColor = ['#0077c5', '#a819d7', '#c99002', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];
        //data 为模拟数据

        var myChart = echarts.init(document.getElementById(id));
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += '<p>' + '<span>' + data[i].name + '</span>' + '<span class="pie-number" style="color:' + startColor[i] + '">' + data[i].value + '个</span>' + '<span>' + Number(data[i].percent).toFixed(1) + '%</span>' + '</p>';
        }

        $(cls).append(str);


        function deepCopy(obj) {
            if (typeof obj !== 'object') {
                return obj;
            }
            var newobj = {};
            for (var attr in obj) {
                newobj[attr] = obj[attr];
            }
            return newobj;
        }
        var xData = [],
            yData = [];
        data.map((a, b) => {
            xData.push(a.name);
            yData.push(a.value);
        });


        var RealData = [];
        var borderData = [];
        data.map((item, index) => {
            var newobj = deepCopy(item);
            var newobj1 = deepCopy(item);
            RealData.push(newobj);
            borderData.push(newobj1);
        });
        RealData.map((item, index) => {
            item.itemStyle = {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: startColor[index] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: startColor[index] // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        });
        borderData.map((item, index) => {
            item.itemStyle = {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: borderStartColor[index] // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: borderStartColor[index] // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                }
            }
        });
        var option = {
            tooltip: {
                trigger: 'item',
                //            position: ['30%', '50%'],
                confine: true,
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                // 主要展示层的
                {
                    radius: ['50%', '85%'],
                    center: ['50%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    name: "派件入库量占比内容",
                    data: RealData
                },
                // 边框的设置
                {
                    radius: ['45%', '50%'],
                    center: ['50%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    animation: false,
                    tooltip: {
                        show: false
                    },
                    data: borderData
                }
            ]
        };

        myChart.setOption(option);
    },
    //设置完工时间
    finishTime() {
        var myChart = echarts.init(document.getElementById('finishTime'));
        var option = {
            // backgroundColor: '#2c343c',

            title: {
                // text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [{
                        value: 335,
                        name: '一年内31.68%'
                    },
                    {
                        value: 310,
                        name: '二年内41.58%'
                    },
                    {
                        value: 274,
                        name: '三年内16.83%'
                    },
                    {
                        value: 235,
                        name: '其他9.90%'
                    },

                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 20
                        }
                    },
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        };

        myChart.setOption(option);

    },
    towerZengLiang() {
        var myChart = echarts.init(document.getElementById('towerZengLiang'));
        // 指定图表的配置项和数据zengliang
        var option = {
            color: ['#FFA200', '#0ACAE2', '#FF3E43', '#32FF00'], //圆点颜色
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [{
                    name: '手动录入',
                    itemHeight: 9, //改变圆圈大小
                    icon: 'circle' //设置为圆点
                }]
            },
            xAxis: {
                boundaryGap: false,
                data: ["05", "06", "07", "08", "09", "10", 11, 12, 13, 14, 15, 16, 17, 18, 19],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel: {
                    interArrival: 0, //设置x坐标内容全部显示
                    rotate: -30, //设置坐标倾斜角度
                },
                //设置x轴字体大小及颜色
                axisLabel: {
                    textStyle: {
                        fontSize: 15,
                        color: 'white',
                    },

                }
            },
            yAxis: {
                name: '数量',
                show: true, //---是否显示
                position: 'left', //---y轴位置
                offset: 0, //---y轴相对于默认位置的偏移
                type: 'value', //---轴类型，默认'category'
                //  name:'数量',              //---轴名称
                nameTextStyle: { //---坐标轴名称样式
                    color: "#fff",
                    padding: [5, 0, 0, 5], //---坐标轴名称相对位置
                    fontSize: 15,
                },
                nameLocation: 'end', //---轴名称相对位置value

                nameGap: 15, //---坐标轴名称与轴线之间的距离
                //nameRotate:270,           //---坐标轴名字旋转

                axisLine: { //---坐标轴 轴线
                    show: false, //---是否显示

                    //------------------- 箭头 -------------------------
                    symbol: ['none', 'arrow'], //---是否显示轴线箭头
                    symbolSize: [8, 8], //---箭头大小
                    symbolOffset: [0, 7], //---箭头位置

                    //------------------- 线 -------------------------
                    lineStyle: {
                        color: '#fff',
                        width: 1,
                        type: 'solid',
                    },
                },
                axisTick: { //---坐标轴 刻度
                    show: true, //---是否显示
                    inside: true, //---是否朝内
                    length: 3, //---长度
                    lineStyle: {
                        //color:'red',          //---默认取轴线的颜色
                        width: 1,
                        type: 'solid',
                    },
                },
                axisLabel: { //---坐标轴 标签
                    show: true, //---是否显示
                    inside: false, //---是否朝内
                    rotate: 0, //---旋转角度
                    margin: 8, //---刻度标签与轴线之间的距离
                    //color:'red',              //---默认取轴线的颜色
                    textStyle: {
                        fontSize: 15,
                        color: 'white',
                    },
                },
                splitLine: { //---grid 区域中的分隔线
                    show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                    lineStyle: {
                        color: '#666',
                        width: 1,
                        type: 'dashed', //---类型
                    },
                },
                splitArea: { //--网格区域
                    show: false, //---是否显示，默认false
                }
            },
            series: [{
                name: '变电站',
                type: 'line', //线型
                smooth: 0.3, //波浪
                symbol: 'none', //去掉折点形状
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 0 //线条宽度设置为0
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFA54F' //线条填充颜色
                        }])
                    }
                },
                data: [0, 4, 0, -2, -3, 4, 5, -8, -1, 2, -1, 0, 3, -3, 0]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    },
    lineZengLiang() {
        var myChart = echarts.init(document.getElementById('lineZengLiang'));
        // 指定图表的配置项和数据
        var option = {
            color: ['#FFA200', '#0ACAE2', '#FF3E43', '#32FF00'], //圆点颜色
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: [{
                    name: '手动录入',
                    itemHeight: 9, //改变圆圈大小
                    icon: 'circle' //设置为圆点
                }]
            },
            xAxis: {
                boundaryGap: false,
                data: ["05", "06", "07", "08", "09", "10", 11, 12, 13, 14, 15, 16, 17, 18, 19],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel: {
                    interArrival: 0, //设置x坐标内容全部显示
                    rotate: -30, //设置坐标倾斜角度
                },
                //设置x轴字体大小及颜色
                axisLabel: {
                    textStyle: {
                        fontSize: 15,
                        color: 'white',
                    },

                }
            },
            yAxis: {
                name: '数量',
                show: true, //---是否显示
                position: 'left', //---y轴位置
                offset: 0, //---y轴相对于默认位置的偏移
                type: 'value', //---轴类型，默认'category'
                //  name:'数量',              //---轴名称
                nameTextStyle: { //---坐标轴名称样式
                    color: "#fff",
                    padding: [5, 0, 0, 5], //---坐标轴名称相对位置
                    fontSize: 15,
                },
                nameLocation: 'end', //---轴名称相对位置value

                nameGap: 15, //---坐标轴名称与轴线之间的距离
                //nameRotate:270,           //---坐标轴名字旋转

                axisLine: { //---坐标轴 轴线
                    show: false, //---是否显示

                    //------------------- 箭头 -------------------------
                    symbol: ['none', 'arrow'], //---是否显示轴线箭头
                    symbolSize: [8, 8], //---箭头大小
                    symbolOffset: [0, 7], //---箭头位置

                    //------------------- 线 -------------------------
                    lineStyle: {
                        color: '#fff',
                        width: 1,
                        type: 'solid',
                    },
                },
                axisTick: { //---坐标轴 刻度
                    show: true, //---是否显示
                    inside: true, //---是否朝内
                    length: 3, //---长度
                    lineStyle: {
                        //color:'red',          //---默认取轴线的颜色
                        width: 1,
                        type: 'solid',
                    },
                },
                axisLabel: { //---坐标轴 标签
                    show: true, //---是否显示
                    inside: false, //---是否朝内
                    rotate: 0, //---旋转角度
                    margin: 8, //---刻度标签与轴线之间的距离
                    //color:'red',              //---默认取轴线的颜色
                    textStyle: {
                        fontSize: 15,
                        color: 'white',
                    },
                },
                splitLine: { //---grid 区域中的分隔线
                    show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                    lineStyle: {
                        color: '#666',
                        width: 1,
                        type: 'dashed', //---类型
                    },
                },
                splitArea: { //--网格区域
                    show: false, //---是否显示，默认false
                }
            },
            series: [{
                name: '变电站',
                type: 'line', //线型
                smooth: 0.3, //波浪
                symbol: 'none', //去掉折点形状
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 0 //线条宽度设置为0
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFA54F' //线条填充颜色
                        }])
                    }
                },
                data: [0, 0, 7, -15, 12, -4, 15, -14, 3, 1, -4, 0, 10, -12, 0]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },
    cqmap() {
        var myChartMap = echarts.init(document.getElementById('bigmap'));
        var uploadedDataURL = './data/chongqing.json';
        myChartMap.showLoading();
        $.getJSON(uploadedDataURL, function (geoJson) {
            echarts.registerMap('chongqing', geoJson);
            myChartMap.hideLoading();
            // 各区县的经纬度坐标，不要乱动
            var geoCoordMap = {
                '巫溪县': [109.3359, 31.4813],
                '奉节县': [109.3909, 30.9265],
                '开县': [108.4131, 31.2561],
                '酉阳土家族苗族自治县': [108.8196, 28.8666],
                '彭水苗族土家族自治县': [108.2043, 29.3994],
                '云阳县': [108.8306, 31.0089],
                '城口县': [108.7756, 31.9098],
                '江津区': [106.2158, 28.9874],
                '石柱土家族自治县': [108.2813, 30.1025],
                '巫山县': [109.8853, 31.1188],
                '涪陵区': [107.3364, 29.6796],
                '丰都县': [107.8418, 29.9048],
                '武隆县': [107.655, 29.35],
                '南川区': [107.1716, 29.1302],
                '秀山土家族苗族自治县': [109.0173, 28.5205],
                '黔江区': [108.7207, 29.4708],
                '合川区': [106.3257, 30.108],
                '綦江县': [106.6553, 28.8171],
                '忠县': [107.8967, 30.3223],
                '梁平县': [107.7429, 30.6519],
                '巴南区': [106.7322, 29.4214],
                '潼南区': [105.7764, 30.1135],
                '永川区': [105.8643, 29.2566],
                '垫江县': [107.4573, 30.2454],
                '渝北区': [106.7212, 29.8499],
                '长寿区': [107.08, 29.87],
                '大足县': [105.7544, 29.6136],
                '铜梁县': [106.0291, 29.8059],
                '荣昌县': [105.5127, 29.4708],
                '璧山县': [106.2048, 29.5807],
                '北碚区': [106.5674, 29.8883],
                '万盛区': [106.908, 28.9325],
                '九龙坡区': [106.3586, 29.4049],
                '沙坪坝区': [106.3696, 29.6191],
                '南岸区': [106.6663, 29.5367],
                '江北区': [106.8311, 29.6191],
                '大渡口区': [106.4905, 29.4214],
                '渝中区': [106.5344, 29.5477],
                '万州区': [108.3911, 30.6958]
            }
            // 各区县的数据，在这里填
            var data = [{
                    name: '奉节县',
                    value: 5,
                    selected: false
                },
                {
                    name: '巫溪县',
                    value: 4,
                    selected: false
                },
                {
                    name: '开县',
                    value: 1,
                    selected: false
                },
                {
                    name: '酉阳土家族苗族自治县',
                    value: 3,
                    selected: false
                },
                {
                    name: '彭水苗族土家族自治县',
                    value: 6,
                    selected: false
                },
                {
                    name: '云阳县',
                    value: 2,
                    selected: false
                },
                {
                    name: '万州区',
                    value: 7,
                    selected: false
                },
                {
                    name: '城口县',
                    value: 4,
                    selected: false
                },
                {
                    name: '江津区',
                    value: 10,
                    selected: false
                },
                {
                    name: '石柱土家族自治县',
                    value: 4,
                    selected: false
                },
                {
                    name: '巫山县',
                    value: 2,
                    selected: false
                },
                {
                    name: '涪陵区',
                    value: 5,
                    selected: false
                },
                {
                    name: '丰都县',
                    value: 1,
                    selected: false
                },
                {
                    name: '武隆县',
                    value: 2,
                    selected: false
                },
                {
                    name: '南川区',
                    value: 1,
                    selected: false
                },
                {
                    name: '秀山土家族苗族自治县',
                    value: 2,
                    selected: false
                },
                {
                    name: '黔江区',
                    value: 3,
                    selected: false
                },
                {
                    name: '合川区',
                    value: 7,
                    selected: false
                },
                {
                    name: '綦江县',
                    value: 10,
                    selected: false
                },
                {
                    name: '忠县',
                    value: 0,
                    selected: false
                },
                {
                    name: '梁平县',
                    value: 2,
                    selected: false
                },
                {
                    name: '巴南区',
                    value: 8,
                    selected: false
                },
                {
                    name: '潼南区',
                    value: 3,
                    selected: false
                },
                {
                    name: '永川区',
                    value: 4,
                    selected: false
                },
                {
                    name: '垫江县',
                    value: 3,
                    selected: false
                },
                {
                    name: '渝北区',
                    value: 17,
                    selected: false
                },
                {
                    name: '长寿区',
                    value: 8,
                    selected: false
                },
                {
                    name: '大足县',
                    value: 1,
                    selected: false
                },
                {
                    name: '铜梁县',
                    value: 5,
                    selected: false
                },
                {
                    name: '荣昌县',
                    value: 1,
                    selected: false
                },
                {
                    name: '璧山县',
                    value: 3,
                    selected: false
                },
                {
                    name: '北碚区',
                    value: 3,
                    selected: false
                },
                {
                    name: '九龙坡区',
                    value: 5,
                    selected: false
                },
                {
                    name: '沙坪坝区',
                    value: 7,
                    selected: false
                },
                {
                    name: '南岸区',
                    value: 4,
                    selected: false
                },
                {
                    name: '江北区',
                    value: 16,
                    selected: false
                },
                {
                    name: '大渡口区',
                    value: 2,
                    selected: false
                },
                {
                    name: '渝中区',
                    value: 2,
                    selected: false
                },
                {
                    name: '万盛区',
                    value: 0,
                    selected: false
                }
            ];
            var max = 20,
                min = 1; // todo
            var maxSize4Pin = 80,
                minSize4Pin = 20;

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            var option2 = {
                title: {
                    text: '重庆各地区工程数量统计',
                    // subtext: '提示：使用鼠标滚轮放大观看更清晰呦！',
                    x: 300,
                    y: 20,
                    itemGap: 30,
                    textStyle: {
                        fontSize: 22,
                        fontWeight: 'bolder',
                        color: 'white'
                    },
                    subtextStyle: {
                        fontSize: 20,
                        color: 'white' // 副标题文字颜色
                    }
                },
                tooltip: {
                    trigger: 'item',

                    formatter: function (params) {
                        if (typeof (params.value)[2] == "undefined") {
                            return params.name + ' : ' + params.value;
                        } else {
                            return params.name + ' : ' + params.value[2];
                        }
                    }
                },
                // legend: {
                //      orient: 'vertical',
                //      y: 'bottom',
                //      x: 'right',
                //      data: ['重庆各区县信访数量TOP5'],
                //      textStyle: {
                //           color: '#333'
                //      }
                // },

                //http://echarts.baidu.com/option.html#visualMap

                visualMap: {
                    show: false,
                    min: 0,
                    max: 10,
                    // left: 0,
                    top: 'bottom',
                    text: ['高', '低'], // 文本，默认为数值文本
                    calculable: true,
                    seriesIndex: [1],
                    hoverLink: false,
                    inRange: {
                        color: ['#3B5077', '#031525'] // 蓝黑
                        // color: ['#ffc0cb', '#800080'] // 红紫
                        // color: ['#3C3B3F', '#605C3C'] // 黑绿
                        //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                        // color: ['#23074d', '#cc5333'] // 紫红
                        // color: ['#00467F', '#A5CC82'] // 蓝绿
                        //color: ['#1488CC', '#2B32B2'] // 浅蓝
                        //color: ['#00467F', '#A5CC82'] // 蓝绿
                        //color: ['#00467F', '#A5CC82'] // 蓝绿
                        //  color: ['#00467F', '#A5CC82'] // 蓝绿
                        // color: ['#00467F', '#A5CC82'] // 蓝绿

                    }
                },
                geo: {
                    show: true,
                    map: 'chongqing',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: 'blue',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: 'green', //设置鼠标移动到此地的颜色
                        }
                    }
                },
                series: [{
                        name: '重庆',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 1;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true, //开关：是否显示全部地区的名字，建议不显示，只显示活跃度top5地区的名字
                                textStyle: {
                                    fontSize: 10, //设置各个区县文本字体的大小
                                    color: 'white',
                                }

                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#05C3F9', //设置各个区县文本颜色

                            },

                        },

                    },
                    {
                        name: 'chongqing',
                        type: 'map',
                        mapType: 'chongqing',
                        selectedMode: false, //single 表示单选;multiple表示多选 默认flase不选
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false, //默认是否显示省份名称
                                },
                                areaColor: "#003345", //设置默认的背景颜色
                                borderWidth: 1,
                                borderColor: '#e1e1e1', //点击某个省份的区域的颜色
                            },
                            emphasis: {
                                label: {
                                    show: false, //选中状态是否显示省份名称
                                },
                                areaColor: "red",
                            },
                        },
                        //此为加载的数据
                        data: data
                    },
                    {
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: function (val) {
                            var a = (maxSize4Pin - minSize4Pin) / (max - min);
                            var b = minSize4Pin - a * min;
                            b = maxSize4Pin - a * max;
                            //  return a * val[2] + b + 10; //设置气泡的大小
                            return 40;
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff', //设置气泡里面文字的颜色
                                    fontSize: 15, //设置气泡里面文字的大小
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157', //设置气泡的颜色
                            }
                        },
                        zlevel: 1,
                        data: convertData(data),
                    },
                    //    {
                    //         name: 'Top 5',
                    //         type: 'effectScatter',
                    //         coordinateSystem: 'geo',
                    //         data: convertData(data.sort(function (a, b) {
                    //              return b.value - a.value;
                    //         }).slice(0, 5)),
                    //         symbolSize: function (val) {
                    //              return val[2] / 10;
                    //         },
                    //         showEffectOn: 'render',
                    //         rippleEffect: {
                    //              brushType: 'stroke'
                    //         },
                    //         hoverAnimation: true,
                    //         label: {
                    //              normal: {
                    //                   formatter: '{b}',
                    //                   position: 'right',
                    //                   show: false //显示前五的工程区域的名字
                    //              }
                    //         },
                    //         itemStyle: {
                    //              normal: {
                    //                   color: '#05C3F9',
                    //                   shadowBlur: 10,
                    //                   shadowColor: '#05C3F9'
                    //              }
                    //         },
                    //         zlevel: 1
                    //    },

                ]
            };
            myChartMap.setOption(option2);
        });

    },
    setTowerAndYear(yearArr) {
        var myChart = echarts.init(document.getElementById('prjTotalChart'));
        var xData = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
        var effectDataIndex =[];
        for(let i=0;i<yearArr.length;i++){
            for(var j=0;j<xData.length;j++){
                if(yearArr[i]==xData[j]){
                    effectDataIndex.push(j);
                    break;
                }
            }
        }
        var series = [{
                    name: "总工程",
                    //每年对应的（200KV+500KV）工程的数量
                    data: [10, 14, 13, 8, 9, 9, 17, 8, 14, 13, 11, 12, 16, 10,
                        10
                    ], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                    type: 'line',
                    symbol: 'square',
                    symbolSize: 3,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgb(24,190,188)',
                            width: 3,
                            //type: 'dashed'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'white',
                            color: 'rgb(24,190,188)',
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 20,
                                }
                            },
                            lineStyle: {
                                width: 3
                            },
                            // areaStyle:{
                            //      type:'default'
                            // }
                        }
                    },
                },
                {
                    name: "220KV工程",
                    //05-19年每年修建的220KV工程的数量
                    data: [9, 14, 9, 5, 7, 8, 14, 6, 14, 10, 9, 9, 10, 10,
                        6
                    ], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 3,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'green',
                            width: 3,
                            type: 'dashed'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'white',
                            color: 'green',
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 20,
                                }
                            },
                            lineStyle: {
                                width: 3
                            },
                            // areaStyle:{
                            //      type:'default'
                            // }
                        }
                    },
                },
                {
                    name: "500KV工程",
                    //05-19年每年对应的500KV工程的数量
                    data: [1, 0, 4, 3, 2, 1, 3, 2, 0, 3, 2, 3, 6, 0, 4], //[11,26,42,51,65,76,94,103,121,135,145,157,177,188,201]
                    type: 'line',
                    symbol: 'square',
                    symbolSize: 5,
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: 'rgb(52,79,120)',
                            width: 3,
                            type: 'dashed'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: 'white',
                            color: 'rgb(52,79,120)',
                            label: {
                                show: true,
                                textStyle: {
                                    fontSize: 20,
                                }
                            },
                            lineStyle: {
                                width: 10
                            },
                            // areaStyle:{
                            //      type:'default'
                            // }
                        }
                    },
                }
            ];
        var option = {
            legend: {
                orient: 'vertical',
                x: 710,
                y: 0,
                icon: 'pie',
                color: ['#4472C5', '#ED7C30', '#80FF80'],
                data: ['总工程', '220KV工程', '500KV工程'],
                textStyle: { //图例文字的样式
                    color: 'white',
                    fontSize: 13
                },

                //backgroundColor:'rgba(100,0,100,0.5)',
            },
            grid: {
                left: '3%',
                right: '6%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                name: '年份',
                nameTextStyle: {
                    fontSize: 16,
                },
                type: 'category',
                data: xData,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel: {
                    interArrival: 0, //设置x坐标内容全部显示
                    rotate: 0, //设置坐标倾斜角度
                    textStyle: {
                        fontSize: 16,
                        color: 'white',
                    },
                    interval:0,  
                    rotate:15 
                },
                //设置x轴字体大小及颜色

            },
            yAxis: {
                // name:'工程数量',              //---轴名称
                nameTextStyle: {
                    fontSize: 16,
                },
                type: 'value',
                //y轴颜色
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },

                //坐标轴内线的样式

                splitLine: { //---grid 区域中的分隔线
                    show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                    lineStyle: {
                        color: '#666',
                        width: 1,
                        type: 'dashed', //---类型
                    },
                },
                splitArea: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 16,
                        color: 'white',
                    },

                }

            },
            series: series
        }
       
        // [0, 50, 100, 150, 200, {value:150,symbolSize:30,}, 100]
        var effectScatterData =  [10, 14, 13, 8, 9, 9, 17, 8, 14, 13, 11, 12, 16, 10, 10];
        effectDataIndex.forEach((value)=>{
            effectScatterData[value] = {value:effectScatterData[value],symbolSize:18,}
        })
        var effectScatter = {
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: effectScatterData, //2d坐标系
            symbolSize:0,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: 'pink',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        };
        option.series.push(effectScatter);
        myChart.setOption(option);
    },
    //设置工程概况
    setProjProfile(projNum,toweNum,lineLength){
        this.hide('.left_top');
        document.getElementById('proTotalNum').innerHTML = projNum;
        document.getElementById('towerTotalNUm').innerHTML = toweNum;
        document.getElementById('lineLength').innerHTML = lineLength;
        this.show('.left_top');
    }
}
export {
    addChart
}