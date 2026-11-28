(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 46,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 12,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 10,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 10,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "碧蓝幻想｜光gbf",
        "value": 10,
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 8,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "碧蓝幻想｜土gbf",
        "value": 3,
        "link": "decktypes/decktype-313c6e6a9522.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 2,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP11-107.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/BP09-106.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-U01.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-U01.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-003.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-100.jpg"
      },
      {
        "name": "碧蓝幻想｜火gbf",
        "value": 1,
        "link": "decktypes/decktype-a5b6cb81a5c2.html",
        "image": "../../assets/cards/CP05-002.jpg"
      },
      {
        "name": "主教｜水gbf",
        "value": 1,
        "link": "decktypes/decktype-9f7b929bf9b4.html",
        "image": "../../assets/cards/CP05-089.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-057.jpg"
      }
    ],
    "top_types": [
      {
        "class": "碧蓝幻想",
        "category": "风gbf",
        "count": 12,
        "best": "1/23",
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "暗gbf",
        "count": 10,
        "best": "1/46",
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "水gbf",
        "count": 10,
        "best": "2/46",
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "光gbf",
        "count": 10,
        "best": "2/22",
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 9,
        "best": "1/40",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 8,
        "best": "1/22",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "土gbf",
        "count": 3,
        "best": "5/18",
        "link": "decktypes/decktype-313c6e6a9522.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 2,
        "best": "2/23",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 2,
        "best": "7/46",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 2,
        "best": "3/11",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP11-107.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 2,
        "best": "5/18",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 1,
        "best": "1/22",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，碧蓝幻想46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以碧蓝幻想7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，碧蓝幻想「风gbf」12套（14.3%，最好1/23）、碧蓝幻想「暗gbf」10套（11.9%，最好1/46）、碧蓝幻想「水gbf」10套（11.9%，最好2/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是碧蓝幻想「暗gbf」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/11/27",
    "label": "2026/11/27-2026/12/03",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 46,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 12,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 10,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 10,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "碧蓝幻想｜光gbf",
        "value": 10,
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 8,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "碧蓝幻想｜土gbf",
        "value": 3,
        "link": "decktypes/decktype-313c6e6a9522.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 2,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP11-107.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/BP09-106.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-U01.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-U01.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-003.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-100.jpg"
      },
      {
        "name": "碧蓝幻想｜火gbf",
        "value": 1,
        "link": "decktypes/decktype-a5b6cb81a5c2.html",
        "image": "../../assets/cards/CP05-002.jpg"
      },
      {
        "name": "主教｜水gbf",
        "value": 1,
        "link": "decktypes/decktype-9f7b929bf9b4.html",
        "image": "../../assets/cards/CP05-089.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-057.jpg"
      }
    ],
    "top_types": [
      {
        "class": "碧蓝幻想",
        "category": "风gbf",
        "count": 12,
        "best": "1/23",
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "暗gbf",
        "count": 10,
        "best": "1/46",
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "水gbf",
        "count": 10,
        "best": "2/46",
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "光gbf",
        "count": 10,
        "best": "2/22",
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 9,
        "best": "1/40",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 8,
        "best": "1/22",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "碧蓝幻想",
        "category": "土gbf",
        "count": 3,
        "best": "5/18",
        "link": "decktypes/decktype-313c6e6a9522.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 2,
        "best": "2/23",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 2,
        "best": "7/46",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 2,
        "best": "3/11",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP11-107.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 2,
        "best": "5/18",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 1,
        "best": "1/22",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/11/27-2026/12/03共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，碧蓝幻想46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以碧蓝幻想7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，碧蓝幻想「风gbf」12套（14.3%，最好1/23）、碧蓝幻想「暗gbf」10套（11.9%，最好1/46）、碧蓝幻想「水gbf」10套（11.9%，最好2/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是碧蓝幻想「暗gbf」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "top8_class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 46,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 7,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 12,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 10,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 10,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "碧蓝幻想｜光gbf",
        "value": 10,
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 8,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 25,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 4,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 2,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 2,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/BP09-106.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 1,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "type_other_count": 25,
    "type_other_types": 19,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，碧蓝幻想46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以碧蓝幻想7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，碧蓝幻想「风gbf」12套（14.3%，最好1/23）、碧蓝幻想「暗gbf」10套（11.9%，最好1/46）、碧蓝幻想「水gbf」10套（11.9%，最好2/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是碧蓝幻想「暗gbf」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-94d56da6fdf5.html\">风gbf</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">13-8 (61.9%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-99ca9d5f3c13.html\">暗gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-8 (55.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-acdd830042ac.html\">水gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">7-9 (43.8%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-c8c31a762ed2.html\">光gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-10 (44.4%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">10-6 (62.5%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-313c6e6a9522.html\">土gbf</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/46 (0.1522)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html\">哥布林梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-a5b6cb81a5c2.html\">火gbf</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-9f7b929bf9b4.html\">水gbf</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"碧蓝幻想\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3f8fd1\">\n        <h2><span class=\"class-icon\">🐲</span> 碧蓝幻想</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">54.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-94d56da6fdf5.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-SL03.jpg\" alt=\"风gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>风gbf</b><em>12套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-99ca9d5f3c13.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-SL19.jpg\" alt=\"暗gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>暗gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-acdd830042ac.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-039.jpg\" alt=\"水gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c8c31a762ed2.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-001.jpg\" alt=\"光gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>光gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-313c6e6a9522.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-091.jpg\" alt=\"土gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土gbf</b><em>3套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a5b6cb81a5c2.html\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-002.jpg\" alt=\"火gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>火gbf</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-U04.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>9套 (90.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-057.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>8套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-106.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-096.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-100.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9f7b929bf9b4.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/CP05-089.jpg\" alt=\"水gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水gbf</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/SCS01-001.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-U01.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-U01.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-037.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-039.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-107.jpg\" alt=\"哥布林梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-072.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-003.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#碧蓝幻想\">🐲 碧蓝幻想</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#主教\">⛪ 主教</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/11/27": {
    "key": "2026/11/27",
    "label": "2026/11/27-2026/12/03",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "top8_class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 46,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-096.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐲 碧蓝幻想",
        "value": 7,
        "itemStyle": {
          "color": "#3f8fd1"
        },
        "image": "../../assets/cards/PR-643.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 12,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 10,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 10,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "碧蓝幻想｜光gbf",
        "value": 10,
        "link": "decktypes/decktype-c8c31a762ed2.html",
        "image": "../../assets/cards/CP05-001.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 8,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 25,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "碧蓝幻想｜风gbf",
        "value": 4,
        "link": "decktypes/decktype-94d56da6fdf5.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "碧蓝幻想｜暗gbf",
        "value": 2,
        "link": "decktypes/decktype-99ca9d5f3c13.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 2,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/BP09-106.jpg"
      },
      {
        "name": "碧蓝幻想｜水gbf",
        "value": 1,
        "link": "decktypes/decktype-acdd830042ac.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "type_other_count": 25,
    "type_other_types": 19,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/11/27-2026/12/03共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，碧蓝幻想46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以碧蓝幻想7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，碧蓝幻想「风gbf」12套（14.3%，最好1/23）、碧蓝幻想「暗gbf」10套（11.9%，最好1/46）、碧蓝幻想「水gbf」10套（11.9%，最好2/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是碧蓝幻想「暗gbf」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-94d56da6fdf5.html?scope=2026%2F11%2F27\">风gbf</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">13-8 (61.9%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-99ca9d5f3c13.html?scope=2026%2F11%2F27\">暗gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-8 (55.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-acdd830042ac.html?scope=2026%2F11%2F27\">水gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">7-9 (43.8%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-c8c31a762ed2.html?scope=2026%2F11%2F27\">光gbf</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-10 (44.4%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F11%2F27\">五妹龙</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F11%2F27\">雷维翁皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">10-6 (62.5%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-313c6e6a9522.html?scope=2026%2F11%2F27\">土gbf</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F11%2F27\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F11%2F27\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/46 (0.1522)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F11%2F27\">哥布林梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F11%2F27\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F11%2F27\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F11%2F27\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F11%2F27\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F11%2F27\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F11%2F27\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F11%2F27\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F11%2F27\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F11%2F27\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F11%2F27\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F11%2F27\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F11%2F27\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>碧蓝幻想</td><td><a class=\"type-link\" href=\"decktypes/decktype-a5b6cb81a5c2.html?scope=2026%2F11%2F27\">火gbf</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-9f7b929bf9b4.html?scope=2026%2F11%2F27\">水gbf</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F11%2F27\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"碧蓝幻想\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3f8fd1\">\n        <h2><span class=\"class-icon\">🐲</span> 碧蓝幻想</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">54.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-94d56da6fdf5.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-SL03.jpg\" alt=\"风gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>风gbf</b><em>12套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-99ca9d5f3c13.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-SL19.jpg\" alt=\"暗gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>暗gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-acdd830042ac.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-039.jpg\" alt=\"水gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c8c31a762ed2.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-001.jpg\" alt=\"光gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>光gbf</b><em>10套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-313c6e6a9522.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-091.jpg\" alt=\"土gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土gbf</b><em>3套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a5b6cb81a5c2.html?scope=2026%2F11%2F27\" style=\"border-color:#3f8fd1\"><img src=\"../../assets/cards/thumbs/CP05-002.jpg\" alt=\"火gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>火gbf</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F11%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-U04.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>9套 (90.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F11%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-057.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F11%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>8套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F11%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-106.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-096.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-100.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9f7b929bf9b4.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/CP05-089.jpg\" alt=\"水gbf核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水gbf</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/SCS01-001.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-U01.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-U01.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-037.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-039.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F11%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-107.jpg\" alt=\"哥布林梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F11%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-072.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F11%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-003.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#碧蓝幻想\">🐲 碧蓝幻想</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#主教\">⛪ 主教</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  }
};
  var currentScopeKey = 'total';
  // ===== 饼图：实心饼 + 每个扇区用「该类型的代表卡插画」铺满 =====
  // 几何参数必须与 series.pie 的 radius/center 保持一致。
  var PIE_OUTER = 0.60, PIE_CX = 0.50, PIE_CY = 0.50;

  // 图片路径基准：按 charts.js 自身位置换算到「站点根」，再拼 ../../assets/cards/。
  // 原因：ECharts 渲染 SVG <image> 时不会沿用页面的相对路径规则，
  // 数据里 "../../assets/cards/X.jpg" 会被解析错（实测丢层级）。
  //
  // 目录关系（发布后）：
  //   site/versions/BPxx/assets/charts.js   ← 脚本本身
  //   site/../../assets/cards/arts/               ← 饼图扇区填充用（400x400 插画）
  //   site/../../assets/cards/thumbs/             ← 小圆头像（其他处仍在用）
  // 所以：charts.js → 上三层 = site/ → ../../assets/cards/arts/X.jpg
  var ARTS_BASE = (function() {
    try {
      var scripts = document.getElementsByTagName('script');
      for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].getAttribute('src') || '';
        if (src.indexOf('charts.js') >= 0) {
          return new URL('../../../assets/cards/arts/', new URL(src, location.href)).href;
        }
      }
    } catch (e) {}
    return new URL('../../../assets/cards/arts/', location.href).href;
  })();

  function artUrl(p) {
    var no = p ? String(p).split('/').pop().replace(/.(png|jpeg|jpg)$/i, '') : '';
    if (!no) return '';
    try { return new URL(no + '.jpg', ARTS_BASE).href; }
    catch (e) { return '../../../assets/cards/arts/' + no + '.jpg'; }
  }

  // 「Others（其他）」扇区没有对应卡牌，用一张自定义素材图。
  // 源图 = ../../assets/cards/others_source.jpg，由 make_pie_arts.py 裁成 600x600 的
  // arts/_others.jpg（cover 裁切，不变形）。换图只需替换源图后重跑该脚本。
  var OTHERS_ART_NO = '_others';

  function polarPt(cx, cy, r, deg) {
    var a = deg * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  // 扇形包围盒（含圆心与弧上采样点），用于把插画「铺满」该扇区
  function sliceBBox(cx, cy, R, a0, a1) {
    var xs = [cx], ys = [cy];
    var step = Math.max(1, (a1 - a0) / 24);
    for (var a = a0; a <= a1 + 0.001; a += step) {
      var p = polarPt(cx, cy, R, a);
      xs.push(p[0]); ys.push(p[1]);
    }
    var pe = polarPt(cx, cy, R, a1);
    xs.push(pe[0]); ys.push(pe[1]);
    var minx = Math.min.apply(null, xs), maxx = Math.max.apply(null, xs);
    var miny = Math.min.apply(null, ys), maxy = Math.max.apply(null, ys);
    return { cx: (minx + maxx) / 2, cy: (miny + maxy) / 2, w: maxx - minx, h: maxy - miny };
  }

  // ── 饼图卡图预加载 ────────────────────────────────────────────
  // 踩过的坑（2026-10-26）：graphic 里塞 image 后，ECharts 是异步去加载的，
  // 加载完**不会自动重绘**。网络慢时（国内访问 GitHub Pages 常见 20~30 秒），
  // 扇区早就画完了、图还没到，于是整片饼图是空的，只有 resize 才会补上。
  // 这里的做法：
  //   1) 先把所有要用的图预加载一遍
  //   2) 每加载完一张就合并触发一次重绘（防抖），加载完就不用再重绘了
  //   3) 真加载失败的记进 ART_FAILED，之后该扇区改用纯色扇形兜底，不再是空洞
  var ART_STATE = {};   // url -> 'loading' | 'ok' | 'fail'

  function artState(url) { return ART_STATE[url] || ''; }

  // 单个 URL 的加载：失败/超时都重试，最多 3 次。
  // 为什么要重试：GitHub Pages 的 CDN 在部分网络下会随机把单个请求挂住
  // 20~40 秒甚至直接 ERR_HTTP2_PROTOCOL_ERROR（实测 BP22 的 59 张图里 26 张这样）。
  // 重试时加 cache-busting 参数，避免命中那条坏连接留下的缓存。
  function preloadArt(url, onSettle) {
    if (!url || ART_STATE[url]) { if (onSettle) onSettle(); return; }
    ART_STATE[url] = 'loading';

    var attempt = 0;
    var MAX = 3;

    function tryLoad() {
      attempt++;
      var bust = attempt === 1 ? url : (url + (url.indexOf('?') >= 0 ? '&' : '?') + 'retry=' + attempt);
      var img = new Image();
      var settled = false;

      var timer = setTimeout(function() {
        if (settled) return;
        settled = true;
        retryOrGiveUp();
      }, 12000);

      img.onload = function() {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        ART_STATE[url] = (img.naturalWidth > 0) ? 'ok' : 'fail';
        if (onSettle) onSettle();
      };
      img.onerror = function() {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        retryOrGiveUp();
      };

      function retryOrGiveUp() {
        if (attempt < MAX) {
          setTimeout(tryLoad, 500 * attempt);   // 退避后重试
          return;
        }
        ART_STATE[url] = 'fail';
        if (onSettle) onSettle();
      }

      img.src = bust;
    }

    tryLoad();
  }

  // 兜底色板：图没加载出来时的占位扇形，避免看起来像「缺图」
  var PIE_FALLBACK_COLORS = [
    '#2f4858', '#33658a', '#86bbd8', '#758e4f', '#f6ae2d',
    '#f26419', '#b13c53', '#6a4c93', '#1982c4', '#4a7c59',
    '#8d6a9f', '#c14953', '#357266', '#7b6d8d', '#a3b565'
  ];

  function buildPieCardGraphics(data, W, H) {
    if (!W || !H || !data || !data.length) return [];
    var total = 0;
    for (var i = 0; i < data.length; i++) total += Number(data[i].value) || 0;
    if (!total) return [];

    var cx = W * PIE_CX, cy = H * PIE_CY;
    var R = Math.min(W, H) / 2 * PIE_OUTER;

    var out = [];
    var acc = -90;                          // ECharts 饼图从 12 点方向开始、顺时针
    for (var j = 0; j < data.length; j++) {
      var d = data[j];
      var v = Number(d.value) || 0;
      if (!v) continue;
      var span = v / total * 360;
      var url = d.image ? artUrl(d.image) : artUrl(OTHERS_ART_NO);
      if (!url) { acc += span; continue; }

      // 按该扇区的包围盒铺满（cover），略微放大避免边缘露底
      var bb = sliceBBox(cx, cy, R, acc, acc + span);
      var size = Math.max(bb.w, bb.h) * 1.06;
      if (!(size > 0)) { acc += span; continue; }
      var left = bb.cx - size / 2, top = bb.cy - size / 2;

      var sectorShape = {
        // 扇形裁剪。两个坑（都已踩过）：
        //   1) r0 不能为 0，否则 ECharts 内部构造报错 "e is not a constructor"
        //   2) clipPath 是「图片元素的局部坐标系」，圆心要换算成 (cx-left, cy-top)
        cx: cx - left, cy: cy - top, r0: 0.01, r: R,
        startAngle: acc * Math.PI / 180,
        endAngle: (acc + span) * Math.PI / 180,
        clockwise: true
      };

      // 只要图还没确认加载好，就先用兜底色把扇区填满，
      // 这样无论网络多慢，饼图看起来都是完整的；图到货后重绘会替换成真图。
      if (artState(url) !== 'ok') {
        // 图片确定加载失败：用纯色扇形兜底，至少形状和标签是对的
        out.push({
          type: 'sector',
          shape: {
            cx: cx, cy: cy, r0: 0.01, r: R,
            startAngle: acc * Math.PI / 180,
            endAngle: (acc + span) * Math.PI / 180,
            clockwise: true
          },
          style: { fill: PIE_FALLBACK_COLORS[j % PIE_FALLBACK_COLORS.length] },
          z: 5,
          silent: true
        });
        acc += span;
        continue;
      }

      out.push({
        type: 'image',
        left: left,
        top: top,
        style: { image: url, width: size, height: size },
        clipPath: { type: 'sector', shape: sectorShape },
        z: 5,
        silent: true
      });
      acc += span;
    }
    return out;
  }

  // 把 graphic 列表整理成 eCharts 可接受的结构（去掉内部标记字段）
  function sanitizeGraphics(list) {
    return (list || []).map(function(g) {
      var o = {
        type: g.type,
        left: g.left,
        top: g.top,
        style: g.style,
        clipPath: g.clipPath,
        z: g.z,
        silent: g.silent
      };
      // 纯色兜底扇形用的是 sector 图元，它的几何在 shape 上
      if (g.shape) o.shape = g.shape;
      return o;
    });
  }

  function makePie(id, data, title) {
    var el = document.getElementById(id);
    if (!el || !window.echarts) return;
    var chart = echarts.init(el, null, { renderer: 'svg' });
    var currentData = data || [];

    // 从图表「当前」的 series 数据里取，避免闭包拿到初始化时的空数组
    function readSeriesData() {
      try {
        var opt = chart.getOption();
        if (opt && opt.series && opt.series[0] && opt.series[0].data) {
          return opt.series[0].data;
        }
      } catch (e) {}
      return currentData;
    }

    function refreshGraphics() {
      var d = readSeriesData() || [];
      var g = sanitizeGraphics(buildPieCardGraphics(d, chart.getWidth(), chart.getHeight()));
      // 必须 replaceMerge：默认 merge 模式下，graphic 里图片 URL 没变时
      // ECharts 认为没有变化、不会重新渲染，图片就永远补不上去（踩过）。
      try {
        chart.setOption({ graphic: g }, { replaceMerge: ['graphic'], lazyUpdate: false });
      } catch (e) {
        chart.setOption({ graphic: g });
      }
    }

    // 预加载该饼图用到的所有卡图，任意一张加载完就合并重绘一次；
    // 全部落定后再补一次，确保图片能落到扇区上（否则慢网下会一直是空的）。
    var redrawTimer = null;
    function scheduleRedraw() {
      if (redrawTimer) return;
      redrawTimer = setTimeout(function() {
        redrawTimer = null;
        try { refreshGraphics(); } catch (e) {}
      }, 120);
    }
    function preloadPieArts() {
      var d = readSeriesData() || [];
      var urls = [];
      for (var i = 0; i < d.length; i++) {
        var u = d[i] && d[i].image ? artUrl(d[i].image) : artUrl(OTHERS_ART_NO);
        if (u) urls.push(u);
      }
      var remaining = 0;
      urls.forEach(function(u) {
        if (artState(u)) return;             // 已加载/失败过，不重复
        remaining++;
        preloadArt(u, function() {
          remaining--;
          scheduleRedraw();                  // 每张到货都重绘一次
        });
      });
      // 已经全部就绪：直接重绘一次，把「迟到」的图补上
      if (!remaining) scheduleRedraw();
    }

    chart.setOption({
      animation: false,
      tooltip: { trigger: 'item', appendToBody: true, formatter: function(p) { return p.name + '<br/>数量：' + p.value + ' 套<br/>占比：' + p.percent + '%'; } },
      // 图例关掉：扇区上已有标签，且实心饼用图铺满后图例的色块对不上
      legend: { show: false },
      series: [{
        name: title,
        type: 'pie',
        // 实心饼（原来 38%~68% 的环已改为 0~60%，扇区里铺卡图）
        radius: ['0%', (PIE_OUTER * 100) + '%'],
        center: [(PIE_CX * 100) + '%', (PIE_CY * 100) + '%'],
        avoidLabelOverlap: true,
        // 扇区本身透明，只留描边；卡图由 graphic 铺在下面
        itemStyle: { color: 'rgba(0,0,0,0)', borderColor: 'rgba(255,255,255,0.25)', borderWidth: 2 },
        labelLine: { show: true, length: 16, length2: 20, lineStyle: { color: 'rgba(255,255,255,0.5)' } },
        label: {
          show: true,
          color: '#e8eef8',
          formatter: '{b} {c}',
          fontSize: 12
        },
        data: currentData
      }]
    });
    refreshGraphics();
    // 立刻预热卡图：加载完一张就重绘一次，避免慢网下扇区空白
    preloadPieArts();
    // 供 updateChart 在切换统计范围后重建卡图
    chart.__pieData = currentData;
    chart.__refreshPieCards = function() {
      currentData = chart.__pieData || currentData;
      refreshGraphics();
      preloadPieArts();
    };
    chart.on('click', function(params) {
      if (params.data && params.data.link) {
        try {
          sessionStorage.setItem('sve_report_return', JSON.stringify({
            y: window.scrollY || document.documentElement.scrollTop || 0,
            sectionId: '',
            t: Date.now()
          }));
          sessionStorage.setItem('sve_scope', currentScopeKey);
        } catch (error) {}
        window.location.href = scopedHref(params.data.link, currentScopeKey);
      }
    });
    window.addEventListener('resize', function() {
      chart.resize();
      chart.__refreshPieCards();
    });
    return chart;
  }
  var top1ClassChart = makePie('chart-top1-class', [], '冠军卡组职业分布（Top1）');
  var top8ClassChart = makePie('chart-top8-class', [], '上位卡组职业分布');
  var typeDistributionChart = makePie('chart-type-distribution', [], '上位卡组类型分布');
  var top1TypeDistributionChart = makePie('chart-top1-type-distribution', [], 'Top1卡组类型分布');
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function scopedHref(href, scopeKey) {
    if (!href || scopeKey === 'total' || href.indexOf('?scope=') >= 0) return href;
    return href + (href.indexOf('?') >= 0 ? '&' : '?') + 'scope=' + encodeURIComponent(scopeKey);
  }
  function withScopedLinks(items, scopeKey) {
    return (items || []).map(function(item) {
      var copy = {};
      Object.keys(item || {}).forEach(function(key) { copy[key] = item[key]; });
      if (copy.link) copy.link = scopedHref(copy.link, scopeKey);
      return copy;
    });
  }
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  function setHtml(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }
  function updateChart(chart, data) {
    if (!chart) return;
    var d = data || [];
    // 记录当前数据，供卡图重建使用
    chart.__pieData = d;
    chart.setOption({ series: [{ data: d }] });
    if (chart.__refreshPieCards) chart.__refreshPieCards();
  }
  function updateScope(scope) {
    if (!scope) return;
    currentScopeKey = scope.key || 'total';
    setText('summary-events', scope.event_count || 0);
    setText('summary-top8', scope.top8_count || 0);
    setText('popular-title', currentScopeKey === 'total' ? '上位卡组类型（全部）' : '上位卡组类型（' + scope.label + '）');
    setText('desc-top1-class', '统计范围：' + scope.label + '，名次为1的 ' + (scope.top1_count || 0) + ' 套卡组。');
    setText('desc-top8-class', '统计范围：' + scope.label + '，上位的 ' + (scope.top8_count || 0) + ' 套卡组。');
    setText('desc-type-distribution', '统计范围：' + scope.label + '，上位的 ' + (scope.top8_count || 0) + ' 套卡组；占比小于 4% 的类型合并为 Others。Others 合计 ' + (scope.type_other_count || 0) + ' 套，包含 ' + (scope.type_other_types || 0) + ' 个卡组类型。');
    setText('desc-top1-type-distribution', '统计范围：' + scope.label + '，冠军卡组共 ' + (scope.top1_count || 0) + ' 套；占比小于 4% 的类型合并为 Others。Others 合计 ' + (scope.top1_type_other_count || 0) + ' 套，包含 ' + (scope.top1_type_other_types || 0) + ' 个卡组类型。');
    updateChart(top1ClassChart, scope.top1_class_distribution || []);
    updateChart(top8ClassChart, scope.top8_class_distribution || []);
    updateChart(typeDistributionChart, withScopedLinks(scope.type_distribution || [], currentScopeKey));
    updateChart(top1TypeDistributionChart, withScopedLinks(scope.top1_type_distribution || [], currentScopeKey));
    setHtml('top1-type-others-list', scope.top1_type_others_html || '<span class="others-empty">无</span>');
    setHtml('popular-rows', scope.popular_rows || '<tr><td colspan="5" style="text-align:center;color:#8899aa">该范围暂无上位卡组类型数据</td></tr>');
    setHtml('class-sections', scope.class_sections || '');
    setHtml('nav-links', (scope.nav_links || '') + '<a href="#pie-charts">饼图</a><a href="#popular">上位卡组类型</a><a href="tier.html">卡组梯度表</a>');
    try { sessionStorage.setItem('sve_scope', currentScopeKey); } catch (error) {}
    if (window.sveBindCollapsibles) window.sveBindCollapsibles();
  }
  function setupScopeSelector() {
    var select = document.getElementById('scope-select');
    if (!select || !weeklyData.length) return;
    select.innerHTML = weeklyData.map(function(scope) {
      return '<option value="' + escapeHtml(scope.key) + '">' + escapeHtml(scope.label) + '</option>';
    }).join('');
    var params = new URLSearchParams(window.location.search || '');
    var initial = params.get('scope');
    if (!initial) {
      try { initial = sessionStorage.getItem('sve_scope') || 'total'; } catch (error) { initial = 'total'; }
    }
    if (!scopeData[initial]) initial = 'total';
    select.value = initial;
    select.addEventListener('change', function() {
      updateScope(scopeData[select.value] || scopeData.total);
      if (history && history.replaceState) {
        history.replaceState(null, '', window.location.pathname + '?scope=' + encodeURIComponent(select.value));
      }
    });
    updateScope(scopeData[select.value] || scopeData.total);
  }
  setupScopeSelector();
})();