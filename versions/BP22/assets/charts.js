(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 34,
    "deck_count": 293,
    "top8_count": 216,
    "top1_count": 38,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 51,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 48,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 46,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 33,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 32,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 23,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "主教｜守护教",
        "value": 47,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 39,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 28,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 23,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 21,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 12,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 11,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 11,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 9,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 8,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 7,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 6,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 4,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 3,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-003.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 2,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-058.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 2,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 2,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-110.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 1,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-057.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-019.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "精灵｜自然妖",
        "value": 1,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-001.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP08-087.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-093.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-056.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-019.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      }
    ],
    "top_types": [
      {
        "class": "主教",
        "category": "守护教",
        "count": 47,
        "best": "1/46",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 39,
        "best": "3/70",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 28,
        "best": "1/70",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 23,
        "best": "1/39",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 21,
        "best": "2/39",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "金币皇",
        "count": 12,
        "best": "2/32",
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 11,
        "best": "2/70",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "妖精妖",
        "count": 11,
        "best": "3/51",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 9,
        "best": "5/39",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 8,
        "best": "1/32",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 8,
        "best": "4/46",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 7,
        "best": "1/19",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录34场有效赛事、293套有排名记录的卡组，其中上位卡组216套、冠军卡组38套。从上位职业分布看，龙族45套（20.8%）、主教38套（17.6%）构成本范围的主要出场面，冠军侧则以主教9套（23.7%）、赛马娘6套（15.8%）表现最突出。卡组类型方面，主教「守护教」37套（17.1%，最好1/46）、龙族「五妹龙」34套（15.7%，最好3/70）、皇家护卫「雷维翁皇」24套（11.1%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有88套，占全部记录30.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/10/02",
    "label": "2026/10/02-2026/10/08",
    "event_count": 34,
    "deck_count": 293,
    "top8_count": 216,
    "top1_count": 38,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 51,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 48,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 46,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 33,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 32,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 23,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "主教｜守护教",
        "value": 47,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 39,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 28,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 23,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 21,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 12,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 11,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 11,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 9,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 8,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 7,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 6,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 4,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 3,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-003.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 2,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-058.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 2,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 2,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-110.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 1,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-057.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-019.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "精灵｜自然妖",
        "value": 1,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-001.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP08-087.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-093.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-056.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-019.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      }
    ],
    "top_types": [
      {
        "class": "主教",
        "category": "守护教",
        "count": 47,
        "best": "1/46",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 39,
        "best": "3/70",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 28,
        "best": "1/70",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 23,
        "best": "1/39",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 21,
        "best": "2/39",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "金币皇",
        "count": 12,
        "best": "2/32",
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 11,
        "best": "2/70",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "妖精妖",
        "count": 11,
        "best": "3/51",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 9,
        "best": "5/39",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 8,
        "best": "1/32",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 8,
        "best": "4/46",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 7,
        "best": "1/19",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/02-2026/10/08共收录34场有效赛事、293套有排名记录的卡组，其中上位卡组216套、冠军卡组38套。从上位职业分布看，龙族45套（20.8%）、主教38套（17.6%）构成本范围的主要出场面，冠军侧则以主教9套（23.7%）、赛马娘6套（15.8%）表现最突出。卡组类型方面，主教「守护教」37套（17.1%，最好1/46）、龙族「五妹龙」34套（15.7%，最好3/70）、皇家护卫「雷维翁皇」24套（11.1%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有88套，占全部记录30.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 34,
    "deck_count": 293,
    "top8_count": 216,
    "top1_count": 38,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 45,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 38,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 34,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 34,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 26,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 20,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 15,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "主教｜守护教",
        "value": 37,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 34,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 24,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 15,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 14,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "Others",
        "value": 92,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "主教｜守护教",
        "value": 9,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 4,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 3,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 3,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 92,
    "type_other_types": 33,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-2b0efb008539.html\"><b>皇家护卫｜天使皇</b><span>1套，最好成绩 1/39</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ca24d30a1a65.html\"><b>龙族｜龙人龙</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录34场有效赛事、293套有排名记录的卡组，其中上位卡组216套、冠军卡组38套。从上位职业分布看，龙族45套（20.8%）、主教38套（17.6%）构成本范围的主要出场面，冠军侧则以主教9套（23.7%）、赛马娘6套（15.8%）表现最突出。卡组类型方面，主教「守护教」37套（17.1%，最好1/46）、龙族「五妹龙」34套（15.7%，最好3/70）、皇家护卫「雷维翁皇」24套（11.1%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有88套，占全部记录30.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">35-28 (55.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">25-30 (45.5%)</td><td style=\"text-align:center\">3/70 (0.0429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">16-20 (44.4%)</td><td style=\"text-align:center\">1/70 (0.0143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">9-15 (37.5%)</td><td style=\"text-align:center\">2/39 (0.0513)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">14-11 (56.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/70 (0.0286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-8 (38.5%)</td><td style=\"text-align:center\">2/32 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">4/46 (0.0870)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">3/51 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">5/39 (0.1282)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">4/28 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html\">loop马</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html\">哥布林梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-1 (88.9%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-0 (100.0%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html\">骰子梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/51 (0.0392)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">18.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>39套 (72.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>9套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-058.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-057.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">17.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>47套 (92.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP08-087.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-093.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">16.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>21套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP22-081.jpg\" alt=\"哥布林梦核心卡\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-071.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>5套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-072.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">15.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP16-026.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>28套 (60.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>12套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>11套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">10.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>23套 (71.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>6套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-056.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">7.8%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>11套 (47.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>4套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-110.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-001.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-003.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/10/02": {
    "key": "2026/10/02",
    "label": "2026/10/02-2026/10/08",
    "event_count": 34,
    "deck_count": 293,
    "top8_count": 216,
    "top1_count": 38,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 45,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 38,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 34,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 34,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 26,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 20,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 15,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-003.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-071.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "主教｜守护教",
        "value": 37,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 34,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 24,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 15,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 14,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "Others",
        "value": 92,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "主教｜守护教",
        "value": 9,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 4,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 3,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 3,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 92,
    "type_other_types": 33,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\"><b>皇家护卫｜天使皇</b><span>1套，最好成绩 1/39</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\"><b>龙族｜龙人龙</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/02-2026/10/08共收录34场有效赛事、293套有排名记录的卡组，其中上位卡组216套、冠军卡组38套。从上位职业分布看，龙族45套（20.8%）、主教38套（17.6%）构成本范围的主要出场面，冠军侧则以主教9套（23.7%）、赛马娘6套（15.8%）表现最突出。卡组类型方面，主教「守护教」37套（17.1%，最好1/46）、龙族「五妹龙」34套（15.7%，最好3/70）、皇家护卫「雷维翁皇」24套（11.1%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有88套，占全部记录30.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F02\">守护教</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">35-28 (55.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F02\">五妹龙</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">25-30 (45.5%)</td><td style=\"text-align:center\">3/70 (0.0429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F02\">雷维翁皇</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">16-20 (44.4%)</td><td style=\"text-align:center\">1/70 (0.0143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F02\">2c梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">9-15 (37.5%)</td><td style=\"text-align:center\">2/39 (0.0513)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F02\">横马</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">14-11 (56.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F02\">二妹法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/70 (0.0286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F02\">金币皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-8 (38.5%)</td><td style=\"text-align:center\">2/32 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F10%2F02\">机械梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">4/46 (0.0870)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\">妖精妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">3/51 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F10%2F02\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">5/39 (0.1282)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F02\">学院法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">4/28 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F02\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F02\">loop马</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F02\">哥布林梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-1 (88.9%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F10%2F02\">土法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F02\">猎人妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F02\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-0 (100.0%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F02\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F02\">骰子梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F02\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F10%2F02\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/51 (0.0392)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F10%2F02\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F10%2F02\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F10%2F02\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F10%2F02\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html?scope=2026%2F10%2F02\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F10%2F02\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F02\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F02\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F10%2F02\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F10%2F02\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2026%2F10%2F02\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F02\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">18.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>39套 (72.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>9套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-058.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-057.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">17.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>47套 (92.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP08-087.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-093.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">16.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>21套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP22-081.jpg\" alt=\"哥布林梦核心卡\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-071.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>5套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-072.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">15.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP16-026.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>28套 (60.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>12套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>11套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">10.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>23套 (71.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>6套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-056.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">7.8%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>11套 (47.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>4套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-110.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-001.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F02\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-003.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  }
};
  var currentScopeKey = 'total';
  function makePie(id, data, title) {
    var el = document.getElementById(id);
    if (!el || !window.echarts) return;
    var chart = echarts.init(el, null, { renderer: 'svg' });
    chart.setOption({
      animation: false,
      tooltip: { trigger: 'item', appendToBody: true, formatter: function(p) { return p.name + '<br/>数量：' + p.value + ' 套<br/>占比：' + p.percent + '%'; } },
      legend: { type: 'scroll', orient: 'horizontal', bottom: 0, textStyle: { color: '#8899aa', fontSize: 11 } },
      series: [{
        name: title,
        type: 'pie',
        radius: ['38%', '68%'],
        center: ['50%', '43%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: 'rgba(255,255,255,0.08)', borderWidth: 2 },
        labelLine: { show: true, length: 14, length2: 18, lineStyle: { color: 'rgba(255,255,255,0.35)' } },
        label: {
          show: true,
          color: '#e0e0e0',
          formatter: '{b}\n{c}套 ({d}%)',
          fontSize: 11
        },
        data: data
      }]
    });
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
    window.addEventListener('resize', function() { chart.resize(); });
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
    if (chart) chart.setOption({ series: [{ data: data || [] }] });
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
    setHtml('nav-links', (scope.nav_links || '') + '<a href="#pie-charts">饼图</a><a href="#popular">上位卡组类型</a>');
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