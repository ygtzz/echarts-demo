console.log('mengff')
console.log(option)
let southProvinces = ['云南', '贵州', '广东', '广西', '海南'];
if (!window._southMap) {
    window._southMap = echarts.getMap('china').geoJson;
}
let southMap = JSON.parse(JSON.stringify(window._southMap));
southMap.features = southMap.features.filter(t => southProvinces.includes(t.properties.name));
//修改广东和深圳坐标
let guangdong = southMap.features.find(t => t.properties.name == '广东');
guangdong.properties.cp[0] -= 1.2;
guangdong.properties.cp[1] -= 1;
let shenzhen = JSON.parse(JSON.stringify(guangdong));
shenzhen.properties.name = '深圳';
shenzhen.properties.cp[0] += 2.2;
shenzhen.properties.cp[1] += 1.5;
shenzhen.id = '440001'
southMap.features.unshift(shenzhen);

echarts.registerMap('china', southMap);

var myOption = {
    visualMap: {
        show: false
    },
    tooltip: {
        formatter: function (params) {
            let data = [
                {
                    title: '实时车辆调度', content: [
                        { text: '全省抢修车辆 / 抢修中车辆：', num: '100 / 16', nuit: '辆' },
                        { text: '全省抢修车辆 / 抢修中车辆：', num: '100 / 16', nuit: '辆' }
                    ],
                },
                {
                    title: '故障抢修人员', content: [
                        { text: '当前值班人员 / 抢修人员：', num: '43 / 10', nuit: '人' },
                        { text: '路途中人员 / 现场人员：', num: '43 / 10', nuit: '人' }
                    ],
                },
                {
                    title: '故障抢修人员', content: [
                        { text: '全省台区 / 影响台区：', num: '54 / 12', nuit: '个' },
                        { text: '全省用户 / 影响用户：', num: '12124 / 1000', nuit: '户' }
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
                                    <span style="color: #59BAF2; vertical-align: bottom">实时车辆调度</span>
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
            name: '中国',
            type: 'map',
            mapType: 'china',
            geoIndex: 0,
            label: {
                normal: {
                    //显示省份标签
                    show: true,
                },
                emphasis: {
                    show: true,//对应的鼠标悬浮效果
                }
            }
        }
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
                    // width: 150,
                    textStyle: {
                        color: "#fff",
                        fontSize: 20,
                    },
                    formatter: function (params) {
                        // let item = dataMap.find(t => t.name == params.name) || {};
                        // let num = item.num || 100;
                        let num = 141;
                        let str = [
                            `{a|${num}分钟/户}`,
                            `{cylinder| }`,
                            params.name
                        ].join('\n');

                        if (params.name == '深圳') {
                            str = [
                                `{a|${num}分钟/户}`,
                                `{cylinder| }`,
                                params.name,
                                `{circle| }`
                            ].join('\n');
                        }

                        return str;
                    },
                    rich: {
                        a: {
                            color: '#000',
                            fontSize: 14,
                            fontWeight: 700
                        },
                        cylinder: {
                            backgroundColor: 'orange',
                            borderRadius: 7,
                            width: 13,
                            height: 40,
                            lineHeight: 50
                        },
                        circle: {
                            width: 10,
                            height: 10,
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            borderWidth: 3,
                            borderColor: 'orange',
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
                emphasis: {
                    // 高亮时
                    areaColor: "#407CFB",
                    // opacity: .7,
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

Object.assign(option, myOption);