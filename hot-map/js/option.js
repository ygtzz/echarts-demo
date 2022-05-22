var option = {
    "color": [
        "orange"
    ],
    "legend": {
        "show": false,
        "selected": {
            "故障停电时间": false
        }
    },
    "grid": null,
    "tooltip": {
        "borderRadius": 10,
        "padding": 0,
        "backgroundColor": "#0000"
    },
    "geo": [
        {
            "map": "china",
            "roam": false,
            "layoutCenter": [
                "75%",
                "50%"
            ],
            "layoutSize": 1250,
            "label": {
                "normal": {
                    "show": true,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 20
                    },
                    "rich": {
                        "a": {
                            "color": "#101010",
                            "fontSize": 14,
                            "fontWeight": 700,
                            "padding": [
                                5,
                                0,
                                0,
                                0
                            ]
                        },
                        "cylindermid": {
                            "backgroundColor": "#0095FF",
                            "height": 1,
                            "width": 11,
                            "borderColor": "#0095FF",
                            "borderWidth": 1
                        },
                        "cylindertop": {
                            "backgroundColor": "#0095FF",
                            "borderRadius": [
                                5,
                                5,
                                0,
                                0
                            ],
                            "height": 10,
                            "width": 11,
                            "borderColor": "#0095FF",
                            "borderWidth": 1
                        },
                        "cylinderbottom": {
                            "backgroundColor": "#0095FF",
                            "borderRadius": [
                                0,
                                0,
                                5,
                                5
                            ],
                            "height": 10,
                            "width": 11,
                            "borderColor": "#0095FF",
                            "borderWidth": 1
                        },
                        "text": {
                            "padding": [
                                0,
                                0,
                                10,
                                0
                            ]
                        },
                        "circle": {
                            "width": 10,
                            "height": 10,
                            "backgroundColor": "#fff",
                            "borderRadius": 5,
                            "borderWidth": 3,
                            "borderColor": "#0095FF",
                            "lineHeight": 20
                        }
                    }
                },
                "emphasis": {
                    "color": "#fff"
                }
            },
            "regions": [
                {
                    "name": "南海诸岛",
                    "itemStyle": {
                        "normal": {
                            "opacity": 0
                        }
                    },
                    "label": {
                        "show": false
                    }
                }
            ],
            "itemStyle": {
                "normal": {
                    "shadowColor": "rgba(122, 224, 247, 0.72)",
                    "shadowBlur": 12,
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 1,
                    "borderColor": "#05E9F7",
                    "areaColor": "#03679D"
                },
                "emphasis": {
                    "areaColor": "#407CFB",
                    "shadowColor": "rgba(10, 136, 164, 0.5)",
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 12,
                    "borderWidth": 2
                }
            }
        }
    ],
    "radar": null,
    "backgroundColor": "transparent",
    "series": [
        {
            "name": "故障停电时间",
            "type": "map",
            "mapType": "china",
            "geoIndex": 0,
            "label": {
                "normal": {
                    "show": true
                },
                "emphasis": {
                    "show": true
                }
            },
            "select": {
                "itemStyle": {
                    "areaColor": "#eee"
                }
            },
            "data": [
                {
                    "name": "深圳市",
                    "value": "188.00",
                    "showValue": "188.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "深圳市"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "深圳市"
                        ],
                        [
                            "故障停电时间",
                            "188.00"
                        ],
                        [
                            "全所抢修车辆",
                            "919.00"
                        ],
                        [
                            "抢修中车辆",
                            "48"
                        ],
                        [
                            "当前值班人员",
                            "439"
                        ],
                        [
                            "抢修人员",
                            "135"
                        ],
                        [
                            "路途中人员",
                            "254"
                        ],
                        [
                            "现场人员",
                            "2231"
                        ],
                        [
                            "全所台区",
                            "414.00"
                        ],
                        [
                            "影响台区",
                            "418"
                        ],
                        [
                            "全所用户",
                            "812.00"
                        ],
                        [
                            "影响用户",
                            "1097"
                        ],
                        [
                            "全所发电车辆",
                            "586.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "41"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "深圳市",
                            "value": "深圳市",
                            "showValue": "深圳市",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "188",
                            "value": "188.00",
                            "showValue": "188.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "21.71%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "919",
                            "value": "919.00",
                            "showValue": "919.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "48",
                            "value": "48",
                            "showValue": "48",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "439",
                            "value": "439",
                            "showValue": "439",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "135",
                            "value": "135",
                            "showValue": "135",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "254",
                            "value": "254",
                            "showValue": "254",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "2231",
                            "value": "2231",
                            "showValue": "2231",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "414",
                            "value": "414.00",
                            "showValue": "414.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "418",
                            "value": "418",
                            "showValue": "418",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "812",
                            "value": "812.00",
                            "showValue": "812.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "1097",
                            "value": "1097",
                            "showValue": "1097",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "586",
                            "value": "586.00",
                            "showValue": "586.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "41",
                            "value": "41",
                            "showValue": "41",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                },
                {
                    "name": "广东",
                    "value": "165.00",
                    "showValue": "165.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "广东省"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "广东省"
                        ],
                        [
                            "故障停电时间",
                            "165.00"
                        ],
                        [
                            "全所抢修车辆",
                            "3206.00"
                        ],
                        [
                            "抢修中车辆",
                            "150"
                        ],
                        [
                            "当前值班人员",
                            "1629"
                        ],
                        [
                            "抢修人员",
                            "420"
                        ],
                        [
                            "路途中人员",
                            "768"
                        ],
                        [
                            "现场人员",
                            "8104"
                        ],
                        [
                            "全所台区",
                            "1553.00"
                        ],
                        [
                            "影响台区",
                            "1535"
                        ],
                        [
                            "全所用户",
                            "3093.00"
                        ],
                        [
                            "影响用户",
                            "3905"
                        ],
                        [
                            "全所发电车辆",
                            "1956.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "126"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "广东省",
                            "value": "广东省",
                            "showValue": "广东省",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "165",
                            "value": "165.00",
                            "showValue": "165.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "19.05%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "3206",
                            "value": "3206.00",
                            "showValue": "3206.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "150",
                            "value": "150",
                            "showValue": "150",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "1629",
                            "value": "1629",
                            "showValue": "1629",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "420",
                            "value": "420",
                            "showValue": "420",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "768",
                            "value": "768",
                            "showValue": "768",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "8104",
                            "value": "8104",
                            "showValue": "8104",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "1553",
                            "value": "1553.00",
                            "showValue": "1553.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "1535",
                            "value": "1535",
                            "showValue": "1535",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "3093",
                            "value": "3093.00",
                            "showValue": "3093.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "3905",
                            "value": "3905",
                            "showValue": "3905",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "1956",
                            "value": "1956.00",
                            "showValue": "1956.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "126",
                            "value": "126",
                            "showValue": "126",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                },
                {
                    "name": "广西",
                    "value": "145.00",
                    "showValue": "145.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "广西省"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "广西省"
                        ],
                        [
                            "故障停电时间",
                            "145.00"
                        ],
                        [
                            "全所抢修车辆",
                            "3360.00"
                        ],
                        [
                            "抢修中车辆",
                            "134"
                        ],
                        [
                            "当前值班人员",
                            "1613"
                        ],
                        [
                            "抢修人员",
                            "363"
                        ],
                        [
                            "路途中人员",
                            "907"
                        ],
                        [
                            "现场人员",
                            "8434"
                        ],
                        [
                            "全所台区",
                            "1532.00"
                        ],
                        [
                            "影响台区",
                            "1500"
                        ],
                        [
                            "全所用户",
                            "3064.00"
                        ],
                        [
                            "影响用户",
                            "3465"
                        ],
                        [
                            "全所发电车辆",
                            "2654.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "113"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "广西省",
                            "value": "广西省",
                            "showValue": "广西省",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "145",
                            "value": "145.00",
                            "showValue": "145.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "16.74%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "3360",
                            "value": "3360.00",
                            "showValue": "3360.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "134",
                            "value": "134",
                            "showValue": "134",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "1613",
                            "value": "1613",
                            "showValue": "1613",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "363",
                            "value": "363",
                            "showValue": "363",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "907",
                            "value": "907",
                            "showValue": "907",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "8434",
                            "value": "8434",
                            "showValue": "8434",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "1532",
                            "value": "1532.00",
                            "showValue": "1532.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "1500",
                            "value": "1500",
                            "showValue": "1500",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "3064",
                            "value": "3064.00",
                            "showValue": "3064.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "3465",
                            "value": "3465",
                            "showValue": "3465",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "2654",
                            "value": "2654.00",
                            "showValue": "2654.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "113",
                            "value": "113",
                            "showValue": "113",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                },
                {
                    "name": "云南",
                    "value": "144.00",
                    "showValue": "144.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "云南省"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "云南省"
                        ],
                        [
                            "故障停电时间",
                            "144.00"
                        ],
                        [
                            "全所抢修车辆",
                            "3421.00"
                        ],
                        [
                            "抢修中车辆",
                            "205"
                        ],
                        [
                            "当前值班人员",
                            "5950"
                        ],
                        [
                            "抢修人员",
                            "338"
                        ],
                        [
                            "路途中人员",
                            "6605"
                        ],
                        [
                            "现场人员",
                            "318"
                        ],
                        [
                            "全所台区",
                            "848.00"
                        ],
                        [
                            "影响台区",
                            "851"
                        ],
                        [
                            "全所用户",
                            "1686.00"
                        ],
                        [
                            "影响用户",
                            "2140"
                        ],
                        [
                            "全所发电车辆",
                            "1745.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "105"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "云南省",
                            "value": "云南省",
                            "showValue": "云南省",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "144",
                            "value": "144.00",
                            "showValue": "144.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "16.63%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "3421",
                            "value": "3421.00",
                            "showValue": "3421.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "205",
                            "value": "205",
                            "showValue": "205",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "5950",
                            "value": "5950",
                            "showValue": "5950",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "338",
                            "value": "338",
                            "showValue": "338",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "6605",
                            "value": "6605",
                            "showValue": "6605",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "318",
                            "value": "318",
                            "showValue": "318",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "848",
                            "value": "848.00",
                            "showValue": "848.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "851",
                            "value": "851",
                            "showValue": "851",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "1686",
                            "value": "1686.00",
                            "showValue": "1686.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "2140",
                            "value": "2140",
                            "showValue": "2140",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "1745",
                            "value": "1745.00",
                            "showValue": "1745.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "105",
                            "value": "105",
                            "showValue": "105",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                },
                {
                    "name": "贵州",
                    "value": "133.00",
                    "showValue": "133.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "贵州省"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "贵州省"
                        ],
                        [
                            "故障停电时间",
                            "133.00"
                        ],
                        [
                            "全所抢修车辆",
                            "1898.00"
                        ],
                        [
                            "抢修中车辆",
                            "88"
                        ],
                        [
                            "当前值班人员",
                            "953"
                        ],
                        [
                            "抢修人员",
                            "245"
                        ],
                        [
                            "路途中人员",
                            "478"
                        ],
                        [
                            "现场人员",
                            "4677"
                        ],
                        [
                            "全所台区",
                            "921.00"
                        ],
                        [
                            "影响台区",
                            "892"
                        ],
                        [
                            "全所用户",
                            "1843.00"
                        ],
                        [
                            "影响用户",
                            "2268"
                        ],
                        [
                            "全所发电车辆",
                            "1261.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "73"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "贵州省",
                            "value": "贵州省",
                            "showValue": "贵州省",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "133",
                            "value": "133.00",
                            "showValue": "133.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "15.36%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "1898",
                            "value": "1898.00",
                            "showValue": "1898.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "88",
                            "value": "88",
                            "showValue": "88",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "953",
                            "value": "953",
                            "showValue": "953",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "245",
                            "value": "245",
                            "showValue": "245",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "478",
                            "value": "478",
                            "showValue": "478",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "4677",
                            "value": "4677",
                            "showValue": "4677",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "921",
                            "value": "921.00",
                            "showValue": "921.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "892",
                            "value": "892",
                            "showValue": "892",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "1843",
                            "value": "1843.00",
                            "showValue": "1843.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "2268",
                            "value": "2268",
                            "showValue": "2268",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "1261",
                            "value": "1261.00",
                            "showValue": "1261.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "73",
                            "value": "73",
                            "showValue": "73",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                },
                {
                    "name": "海南",
                    "value": "91.00",
                    "showValue": "91.00",
                    "showValueItem": [],
                    "realValueItem": [],
                    "dimValueItem": [
                        "海南省"
                    ],
                    "tooltipItems": [
                        [
                            "区域名称",
                            "海南省"
                        ],
                        [
                            "故障停电时间",
                            "91.00"
                        ],
                        [
                            "全所抢修车辆",
                            "583.00"
                        ],
                        [
                            "抢修中车辆",
                            "29"
                        ],
                        [
                            "当前值班人员",
                            "298"
                        ],
                        [
                            "抢修人员",
                            "79"
                        ],
                        [
                            "路途中人员",
                            "148"
                        ],
                        [
                            "现场人员",
                            "1331"
                        ],
                        [
                            "全所台区",
                            "278.00"
                        ],
                        [
                            "影响台区",
                            "280"
                        ],
                        [
                            "全所用户",
                            "543.00"
                        ],
                        [
                            "影响用户",
                            "676"
                        ],
                        [
                            "全所发电车辆",
                            "362.00"
                        ],
                        [
                            "抢修中发电车辆",
                            "24"
                        ]
                    ],
                    "dataItems": [
                        {
                            "othername": null,
                            "field": "area_name",
                            "name": "区域名称",
                            "label": "区域名称",
                            "originValue": "海南省",
                            "value": "海南省",
                            "showValue": "海南省",
                            "dataType": "STRING",
                            "fieldType": "DIM",
                            "position": "rowDimensions",
                            "hide": false
                        },
                        {
                            "othername": "o_642b7402",
                            "field": "outagetime",
                            "name": "故障停电时间",
                            "label": "故障停电时间",
                            "originValue": "91",
                            "value": "91.00",
                            "showValue": "91.00",
                            "dataType": "NUMBER",
                            "fieldType": "MES",
                            "position": "rowMeasures",
                            "hide": false,
                            "ratioValue": "10.51%"
                        },
                        {
                            "field": "repair_car",
                            "name": "全所抢修车辆",
                            "label": "全所抢修车辆",
                            "originValue": "583",
                            "value": "583.00",
                            "showValue": "583.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repairing_car",
                            "name": "抢修中车辆",
                            "label": "抢修中车辆",
                            "originValue": "29",
                            "value": "29",
                            "showValue": "29",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "duty_person",
                            "name": "当前值班人员",
                            "label": "当前值班人员",
                            "originValue": "298",
                            "value": "298",
                            "showValue": "298",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "repair_person",
                            "name": "抢修人员",
                            "label": "抢修人员",
                            "originValue": "79",
                            "value": "79",
                            "showValue": "79",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "person_ontheway",
                            "name": "路途中人员",
                            "label": "路途中人员",
                            "originValue": "148",
                            "value": "148",
                            "showValue": "148",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "field_person",
                            "name": "现场人员",
                            "label": "现场人员",
                            "originValue": "1331",
                            "value": "1331",
                            "showValue": "1331",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_area",
                            "name": "全所台区",
                            "label": "全所台区",
                            "originValue": "278",
                            "value": "278.00",
                            "showValue": "278.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_station",
                            "name": "影响台区",
                            "label": "影响台区",
                            "originValue": "280",
                            "value": "280",
                            "showValue": "280",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "station_user",
                            "name": "全所用户",
                            "label": "全所用户",
                            "originValue": "543",
                            "value": "543.00",
                            "showValue": "543.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "influence_user",
                            "name": "影响用户",
                            "label": "影响用户",
                            "originValue": "676",
                            "value": "676",
                            "showValue": "676",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_car",
                            "name": "全所发电车辆",
                            "label": "全所发电车辆",
                            "originValue": "362",
                            "value": "362.00",
                            "showValue": "362.00",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        },
                        {
                            "field": "power_repair_car",
                            "name": "抢修中发电车辆",
                            "label": "抢修中发电车辆",
                            "originValue": "24",
                            "value": "24",
                            "showValue": "24",
                            "dataType": "NUMBER",
                            "fieldType": "TIP",
                            "hide": false
                        }
                    ]
                }
            ]
        }
    ],
    "xAxis": null,
    "yAxis": null,
    "visualMap": {
        "show": false
    },
    "animation": true,
    "dataZoom": []
}