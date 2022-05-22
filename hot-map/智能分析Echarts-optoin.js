console.log('mengff')
console.log(option)
let seriesFirst = option.series[0];
let southProvinces = ['云南', '贵州', '广东', '广西', '海南'];
if (!window._southMap) {
    window._southMap = echarts.getMap('china').geoJson;
}
let southMap = JSON.parse(JSON.stringify(window._southMap));
southMap.features = southMap.features.filter(t => southProvinces.includes(t.properties.name));
//修改广东和深圳坐标
let guangdong = southMap.features.find(t => t.properties.name == '广东');
//坐标会导致文字的样式设置位移失效
guangdong.properties.cp[0] -= 1.2;
guangdong.properties.cp[1] -= 1;
let shenzhen = JSON.parse(JSON.stringify(guangdong));
shenzhen.properties.name = '深圳';
shenzhen.properties.cp[0] += 2.2;
shenzhen.properties.cp[1] += 1.5;
shenzhen.id = '440300'
southMap.features.unshift(shenzhen);

echarts.registerMap('china', southMap);

let timeData = [];

for(let map of southMap.features){
    let {name} = map.properties;
    let data = seriesFirst.data.find(t => t.name.includes(name));
    let num = Number(Number(data.value).toFixed(0));
    let target = {
        name: name,
        value: [...map.properties.cp, num]
    }
    timeData.push(target);
}

console.log(timeData)


let cylinderColor = 'orange';
// let cylinderColor = 'rgba(0,149,255,.5)'

var myOption = {
    //图例隐藏，默认不选中
    legend: {
        show: false,
        selected: {
            [seriesFirst.name]: false
        }
    },
    //设置图例的颜色
    color: ['orange'],
    visualMap: {
        show: false
    },
    tooltip: {
        formatter: function (params) {
            let item = seriesFirst.data.find(t => t.name.includes(params.name)) || {};
            let {tooltipItems} = item;
            let t = {};
            tooltipItems.forEach(tl => {
                t[tl[0]] = Number(tl[1]).toFixed(0);
            })
            let data = [
                {
                    title: '实时车辆调度', content: [
                        { text: '全省抢修车辆 / 抢修中车辆：', num: `${t['全所抢修车辆']} / ${t['抢修中车辆']}`, nuit: '辆' },
                        { text: '全省发电车辆 / 抢修中发电车辆：', num: `${t['全所发电车辆']} / ${t['抢修中发电车辆']}`, nuit: '辆' }
                    ],
                },
                {
                    title: '故障抢修人员', content: [
                        { text: '当前值班人员 / 抢修人员：', num: `${t['当前值班人员']} / ${t['抢修人员']}`, nuit: '人' },
                        { text: '路途中人员 / 现场人员：', num: `${t['路途中人员']} / ${t['现场人员']}`, nuit: '人' }
                    ],
                },
                {
                    title: '故障抢修人员', content: [
                        { text: '全省台区 / 影响台区：', num: `${t['全所台区']} / ${t['影响台区']}`, nuit: '个' },
                        { text: '全省用户 / 影响用户：', num: `${t['全所用户']} / ${t['影响用户']}`, nuit: '户' }
                    ],
                }
            ];

            let lis = data.map(t => {
                let content = t.content.map(c => {
                    return `<p style="font-size:16px;margin: 16px 0;color: #EAE9E9;font-family:'Arial Normal','Arial';font-weight:400;">
                                <span style="font-size:12px;">${c.text}</span>
                                <span style="color:#02A7F0;font-weight:700;">${c.num}</span>
                                <span style="font-size:12px;"> ${c.nuit}</span>
                            </p>`
                }).join('')
                let item = `<li>
                                <div style="font-weight:700;font-size:14px;line-height:1;">
                                    <span style="background: #54B9F4;width:3px;height:15px;display:inline-block;vertical-align:bottom;margin-right:4px;"></span>
                                    <span style="color: #59BAF2; vertical-align: bottom">${t.title}</span>
                                </div>
                                <div id="u145_text" class="text">
                                    ${content}
                                </div>
                            </li>`;
                return item;
            }).join('');

            let info = `
                <div style="padding:10px;height:333px;width:318px;background: rgba(15,28,54);box-shadow: 0px 1px 7px 2px rgba(3, 47, 71, 0.51);border-radius: 10px;opacity:0.6;">
                    <ul style="list-style:none;padding-left:10px">
                        ${lis}
                    </ul>
                </div>
            `
            return info;
        },
        borderRadius: 10,
        padding: 0,
        backgroundColor: "#0000" //提示标签背景颜色
    },
    series: [
        {
            name: seriesFirst.name,
            type: seriesFirst.type || 'map',
            mapType: seriesFirst.mapType || 'china',
            geoIndex: 0,
            label: {
                normal: {
                    //显示省份标签
                    show: true,
                },
                emphasis: {
                    show: true,//对应的鼠标悬浮效果
                }
            },
            select: {
                itemStyle: {
                    areaColor: '#eee'
                }
            },
            data: seriesFirst.data
        },
        // {
        //     name: '电力故障时间',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     data: timeData,
        //     label: {
        //         show: true,
        //         position: 'inside',
        //         offset: [0, -15],
        //         color: '#fff',
        //         formatter: function(params){
        //             console.log('scatter', params);
        //             return params.name;
        //         }
        //     },
        //     symbol: gImage['provinceImg'],
        //     symbolSize: [103/1.8,130/1.8],
        //     symbolOffset: [0, '-60%']
        // }
    ],
    geo: [
        {
            // 地理坐标系组件
            map: "china",
            roam: false, // 可以缩放和平移
            // aspectScale: 0.8, // 比例
            layoutCenter: ["75%", "50%"], // position位置
            layoutSize: 1250, // 地图大小，保证了不超过 370x370 的区域
            label: {
                // 图形上的文本标签
                normal: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 20,
                    },
                    formatter: function (params) {
                        let item = seriesFirst.data.find(t => t.name.includes(params.name)) || {};
                        let num = item.value || '';
                        if(num){
                            num = Number(num).toFixed(0);
                        }
                        let max = Math.max(...seriesFirst.data.map(t => t.value));
                        let percent = num/max * 30;
                        let percents = [];
                        for(let i=0;i<percent;i++){
                            percents.push(`{cylindermid| }`)
                        }

                        let str = [
                            `{a|${num}分钟/户}`,
                            `{cylindertop| }`,
                            ...percents,
                            `{cylinderbottom| }`,
                            `{text|${params.name}}`,
                        ].join('\n');

                        if (params.name == '深圳') {
                            str = [
                                `{a|${num}分钟/户}`,
                                `{cylindertop| }`,
                                ...percents,
                                `{cylinderbottom| }`,
                                `{text|${params.name}}`,
                                `{circle| }`
                            ].join('\n');
                        }
                        
                        // str = `{yellow|${num}分钟/户}`;

                        return str;
                    },
                    rich: {
                        yellow: {
                            fontWeight: 500,
                            color: '#FFDE51',
                            fontSize: 12
                        },
                        a: {
                            color: '#101010',
                            fontSize: 14,
                            fontWeight: 700,
                            padding: [5,0,0,0]
                        },
                        cylindermid: {
                            backgroundColor: cylinderColor,
                            height: 1,
                            width: 11,
                            borderColor: cylinderColor,
                            borderWidth: 1
                        },
                        cylindertop: {
                            backgroundColor: cylinderColor,
                            borderRadius: [5,5,0,0],
                            height: 10,
                            width: 11,
                            borderColor: cylinderColor,
                            borderWidth: 1
                        },
                        cylinderbottom: {
                            backgroundColor: cylinderColor,
                            borderRadius: [0,0,5,5],
                            height: 10,
                            width: 11,
                            borderColor: cylinderColor,
                            borderWidth: 1
                        },
                        text: {
                            padding: [0,0,10,0]
                        },
                        circle: {
                            width: 10,
                            height: 10,
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            borderWidth: 3,
                            borderColor: cylinderColor,
                            lineHeight: 20
                        }
                    }
                },
                emphasis: { // 高亮时样式
                    color: "#fff"
                }
            },
            regions: [
                {
                    name: "南海诸岛",
                    itemStyle: {
                        // 隐藏地图
                        normal: {
                            opacity: 0, // 为 0 时不绘制该图形
                        }
                    },
                    label: {
                        show: false // 隐藏文字
                    }
                }
            ],
            itemStyle: {
                // 图形上的地图区域
                normal: {
                    shadowColor: 'rgba(122, 224, 247, 0.72)',
                    shadowBlur: 12,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                    borderColor: "#05E9F7",
                    areaColor: "#03679D"
                },
                // 高亮时
                emphasis: {
                    areaColor: "#407CFB",
                    shadowColor: "rgba(10, 136, 164, 0.5)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 12,
                    borderWidth: 2
                }
            }
        }
    ]
};

// option.legend[0].left = 30;
// option.legend[0].bottom = 20;
// option.legend[0].top = 'auto';

// let chartInstance = echarts.getInstanceByDom(document.querySelector('[_echarts_instance_]'));
// chartInstance.on('legendselectchanged', function (params) {
//     chartInstance.setOption({
//         legend:{
//             selected:{
//                 [params.name]: true
//             }
//         }
//     })
//     console.log('点击了', params.name);
// });

Object.assign(option, myOption);