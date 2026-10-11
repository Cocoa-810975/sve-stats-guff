(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 71,
    "deck_count": 596,
    "top8_count": 472,
    "top1_count": 77,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 111,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 106,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 99,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 85,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 79,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 53,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 51,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 12,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 90,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 79,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 70,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 40,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 40,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 30,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 27,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 24,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 24,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 21,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 15,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 10,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 9,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 9,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 9,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 8,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 7,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 6,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 5,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-U02.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 4,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-093.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 4,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 3,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 2,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
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
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜デッドリーエルフ型",
        "value": 1,
        "link": "decktypes/decktype-a9a0b5e703de.html",
        "image": "../../assets/cards/PR-601.jpg"
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
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-001.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-100.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP08-087.jpg"
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
        "class": "龙族",
        "category": "五妹龙",
        "count": 90,
        "best": "1/25",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 79,
        "best": "1/70",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 70,
        "best": "1/46",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 40,
        "best": "1/39",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 40,
        "best": "1/32",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 30,
        "best": "1/26",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 27,
        "best": "1/38",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "金币皇",
        "count": 24,
        "best": "1/34",
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "class": "精灵",
        "category": "妖精妖",
        "count": 24,
        "best": "3/51",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 21,
        "best": "1/28",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 15,
        "best": "4/34",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 10,
        "best": "1/25",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录71场有效赛事、596套有排名记录的卡组，其中上位卡组472套、冠军卡组77套。从上位职业分布看，龙族92套（19.5%）、皇家护卫91套（19.3%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（18.2%）、主教14套（18.2%）表现最突出。卡组类型方面，龙族「五妹龙」80套（16.9%，最好1/25）、皇家护卫「雷维翁皇」70套（14.8%，最好1/70）、主教「守护教」56套（11.9%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有189套，占全部记录31.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/10/09",
    "label": "2026/10/09-2026/10/15",
    "event_count": 36,
    "deck_count": 295,
    "top8_count": 248,
    "top1_count": 38,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 63,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 51,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 48,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 45,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 34,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 27,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 21,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 50,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 47,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 32,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 23,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 17,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 16,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 14,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 12,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 12,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 9,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 8,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 7,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 5,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 3,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-093.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 3,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-U02.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜デッドリーエルフ型",
        "value": 1,
        "link": "decktypes/decktype-a9a0b5e703de.html",
        "image": "../../assets/cards/PR-601.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-001.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-100.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 50,
        "best": "1/45",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 47,
        "best": "1/21",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "哥布林梦",
        "count": 32,
        "best": "1/18",
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 23,
        "best": "1/34",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 17,
        "best": "1/35",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 16,
        "best": "1/38",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 14,
        "best": "1/28",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "金币皇",
        "count": 12,
        "best": "1/34",
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "class": "精灵",
        "category": "妖精妖",
        "count": 12,
        "best": "2/24",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 9,
        "best": "1/26",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 8,
        "best": "1/25",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 7,
        "best": "4/34",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/09-2026/10/15共收录36场有效赛事、295套有排名记录的卡组，其中上位卡组248套、冠军卡组38套。从上位职业分布看，皇家护卫55套（22.2%）、龙族43套（17.3%）构成本范围的主要出场面，冠军侧则以皇家护卫9套（23.7%）、龙族6套（15.8%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」45套（18.1%，最好1/45）、龙族「五妹龙」42套（16.9%，最好1/21）、梦魇「哥布林梦」28套（11.3%，最好1/18）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由みっく使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有98套，占全部记录33.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/10/02",
    "label": "2026/10/02-2026/10/08",
    "event_count": 35,
    "deck_count": 301,
    "top8_count": 224,
    "top1_count": 39,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 58,
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
        "name": "⚔️ 皇家护卫",
        "value": 48,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 48,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 34,
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
        "value": 24,
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
        "image": "../../assets/cards/CP04-U02.jpg"
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
        "value": 43,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 29,
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
        "name": "精灵｜妖精妖",
        "value": 12,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
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
        "name": "巫师｜学院法",
        "value": 8,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-U02.jpg"
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
        "image": "../../assets/cards/BP17-SL15.jpg"
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
        "count": 43,
        "best": "1/25",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 29,
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
        "class": "精灵",
        "category": "妖精妖",
        "count": 12,
        "best": "3/51",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
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
        "category": "学院法",
        "count": 8,
        "best": "3/25",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/02-2026/10/08共收录35场有效赛事、301套有排名记录的卡组，其中上位卡组224套、冠军卡组39套。从上位职业分布看，龙族49套（21.9%）、主教38套（17.0%）构成本范围的主要出场面，冠军侧则以主教9套（23.1%）、龙族6套（15.4%）表现最突出。卡组类型方面，龙族「五妹龙」38套（17.0%，最好1/25）、主教「守护教」37套（16.5%，最好1/46）、皇家护卫「雷维翁皇」25套（11.2%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有91套，占全部记录30.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 71,
    "deck_count": 596,
    "top8_count": 472,
    "top1_count": 77,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 92,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 91,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 77,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 65,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 63,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 38,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 37,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 9,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 14,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 14,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 12,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 9,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 80,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 70,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 56,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 32,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 28,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 22,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 20,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "Others",
        "value": 164,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 12,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 12,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 11,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 7,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 6,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 4,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 4,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "Others",
        "value": 21,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 164,
    "type_other_types": 37,
    "top1_type_other_count": 21,
    "top1_type_other_types": 15,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html\"><b>精灵｜人偶妖</b><span>3套，最好成绩 1/51</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7358073c5024.html\"><b>赛马娘｜loop马</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html\"><b>公主连结Re:Dive｜法术PCR</b><span>2套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75305287827c.html\"><b>梦魇｜2c梦</b><span>2套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-2b0efb008539.html\"><b>皇家护卫｜天使皇</b><span>1套，最好成绩 1/39</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c068a8ef6610.html\"><b>主教｜纹章教</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ca24d30a1a65.html\"><b>龙族｜龙人龙</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录71场有效赛事、596套有排名记录的卡组，其中上位卡组472套、冠军卡组77套。从上位职业分布看，龙族92套（19.5%）、皇家护卫91套（19.3%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（18.2%）、主教14套（18.2%）表现最突出。卡组类型方面，龙族「五妹龙」80套（16.9%，最好1/25）、皇家护卫「雷维翁皇」70套（14.8%，最好1/70）、主教「守护教」56套（11.9%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有189套，占全部记录31.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">80</td><td style=\"text-align:center\">63-69 (47.7%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">70</td><td style=\"text-align:center\">63-58 (52.1%)</td><td style=\"text-align:center\">1/70 (0.0143)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">56</td><td style=\"text-align:center\">50-44 (53.2%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html\">哥布林梦</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">34-25 (57.6%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">23-22 (51.1%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">19-20 (48.7%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">16-16 (50.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">12-16 (42.9%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">16-13 (55.2%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">5-16 (23.8%)</td><td style=\"text-align:center\">3/51 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">8-14 (36.4%)</td><td style=\"text-align:center\">4/34 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html\">loop马</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">4/46 (0.0870)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">5/39 (0.1282)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">8-4 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/34 (0.0882)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-2 (80.0%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html\">骰子梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/51 (0.0392)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-a9a0b5e703de.html\">デッドリーエルフ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">111 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 37</span>\n          <span class=\"stat-pill percent\">18.6%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP16-026.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>79套 (71.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>24套 (21.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">106 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">17.8%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>90套 (84.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>9套 (8.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-058.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-057.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">99 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">16.6%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP22-081.jpg\" alt=\"哥布林梦核心卡\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>40套 (40.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>30套 (30.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>9套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>7套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-072.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>6套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>4套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">14.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>70套 (82.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-093.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>4套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-100.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP08-087.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">79 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">13.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>27套 (34.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>21套 (26.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>15套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>10套 (12.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (2.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">8.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>40套 (75.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>9套 (17.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>3套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-056.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">8.6%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>24套 (47.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>9套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>7套 (13.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>5套 (9.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a9a0b5e703de.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-601.jpg\" alt=\"デッドリーエルフ型核心卡\"><span class=\"archetype-tag-body\"><b>デッドリーエルフ型</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-110.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-001.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-001.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>8套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-U02.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/10/09": {
    "key": "2026/10/09",
    "label": "2026/10/09-2026/10/15",
    "event_count": 36,
    "deck_count": 295,
    "top8_count": 248,
    "top1_count": 38,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 55,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 43,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 43,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 38,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 25,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 22,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 17,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 5,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 6,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 2,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 2,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 45,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 42,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 28,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 19,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 14,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 12,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 12,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 10,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 66,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 8,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 6,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜哥布林梦",
        "value": 4,
        "link": "decktypes/decktype-f0af484e4c57.html",
        "image": "../../assets/cards/BP22-081.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 66,
    "type_other_types": 20,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F09\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F09\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F09\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F09\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F09\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F09\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F10%2F09\"><b>主教｜纹章教</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F10%2F09\"><b>主教｜控教</b><span>1套，最好成绩 1/17</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/09-2026/10/15共收录36场有效赛事、295套有排名记录的卡组，其中上位卡组248套、冠军卡组38套。从上位职业分布看，皇家护卫55套（22.2%）、龙族43套（17.3%）构成本范围的主要出场面，冠军侧则以皇家护卫9套（23.7%）、龙族6套（15.8%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」45套（18.1%，最好1/45）、龙族「五妹龙」42套（16.9%，最好1/21）、梦魇「哥布林梦」28套（11.3%，最好1/18）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由みっく使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有98套，占全部记录33.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F09\">雷维翁皇</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">47-37 (56.0%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F09\">五妹龙</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">33-36 (47.8%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F09\">哥布林梦</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">26-24 (52.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F09\">守护教</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">15-16 (48.4%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F09\">横马</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">9-11 (45.0%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F09\">二妹法</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F09\">消失法</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">10-10 (50.0%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F09\">妖精妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">2-10 (16.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F09\">金币皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F09\">2c梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">10-5 (66.7%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F09\">八狱法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F09\">学院法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">4/34 (0.1176)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F09\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F09\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F10%2F09\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F09\">永火梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">3/34 (0.0882)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F09\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F09\">loop马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/34 (0.1765)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F09\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F10%2F09\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F09\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/45 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-a9a0b5e703de.html?scope=2026%2F10%2F09\">デッドリーエルフ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F10%2F09\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F09\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F10%2F09\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F09\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F09\">骰子梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F10%2F09\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">63 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">21.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP16-026.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>50套 (79.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>12套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F10%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">16.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>47套 (97.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">17.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP22-081.jpg\" alt=\"哥布林梦核心卡\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>32套 (62.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>9套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-072.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>5套 (9.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">34 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">11.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>23套 (67.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (14.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-093.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>3套 (8.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-100.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F10%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">15.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>16套 (35.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>14套 (31.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>8套 (17.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>7套 (15.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F09\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>17套 (81.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F09\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>3套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2026%2F10%2F09\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">9.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>12套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>6套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a9a0b5e703de.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-601.jpg\" alt=\"デッドリーエルフ型核心卡\"><span class=\"archetype-tag-body\"><b>デッドリーエルフ型</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-001.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F10%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F09\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F09\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-U02.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/10/02": {
    "key": "2026/10/02",
    "label": "2026/10/02-2026/10/08",
    "event_count": 35,
    "deck_count": 301,
    "top8_count": 224,
    "top1_count": 39,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 49,
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
        "value": 36,
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
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 27,
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
        "value": 16,
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
        "image": "../../assets/cards/CP04-U02.jpg"
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
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "image": "../../assets/cards/CP04-U02.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 38,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 37,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 25,
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
        "value": 95,
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
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 4,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP16-026.jpg"
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
    "type_other_count": 95,
    "type_other_types": 33,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\"><b>皇家护卫｜天使皇</b><span>1套，最好成绩 1/39</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/25</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\"><b>龙族｜龙人龙</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/10/02-2026/10/08共收录35场有效赛事、301套有排名记录的卡组，其中上位卡组224套、冠军卡组39套。从上位职业分布看，龙族49套（21.9%）、主教38套（17.0%）构成本范围的主要出场面，冠军侧则以主教9套（23.1%）、龙族6套（15.4%）表现最突出。卡组类型方面，龙族「五妹龙」38套（17.0%，最好1/25）、主教「守护教」37套（16.5%，最好1/46）、皇家护卫「雷维翁皇」25套（11.2%，最好1/70）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由Saika使用，成绩为1/70，成绩系数0.0143。整体来看，前10%成绩卡组共有91套，占全部记录30.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F02\">五妹龙</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">30-33 (47.6%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F02\">守护教</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">35-28 (55.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F02\">雷维翁皇</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">16-21 (43.2%)</td><td style=\"text-align:center\">1/70 (0.0143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F02\">2c梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">9-15 (37.5%)</td><td style=\"text-align:center\">2/39 (0.0513)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F02\">横马</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">14-11 (56.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F02\">二妹法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/70 (0.0286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F02\">金币皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-8 (38.5%)</td><td style=\"text-align:center\">2/32 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\">妖精妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">3/51 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F10%2F02\">机械梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">4/46 (0.0870)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F02\">学院法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F10%2F02\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">5/39 (0.1282)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F02\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F02\">loop马</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F02\">哥布林梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-1 (88.9%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F10%2F02\">土法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F02\">猎人妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F02\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-0 (100.0%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/39 (0.0256)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F02\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F02\">骰子梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F02\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F10%2F02\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/51 (0.0392)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F10%2F02\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F10%2F02\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F10%2F02\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F10%2F02\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html?scope=2026%2F10%2F02\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F10%2F02\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F02\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F02\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F10%2F02\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F10%2F02\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2026%2F10%2F02\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F02\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">15.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP16-026.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>29套 (60.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>12套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-019.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F10%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">58 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">19.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>43套 (74.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>9套 (15.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-058.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-057.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F10%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">15.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>21套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f0af484e4c57.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP22-081.jpg\" alt=\"哥布林梦核心卡\"><span class=\"archetype-tag-body\"><b>哥布林梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>5套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-072.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F10%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">16.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>47套 (92.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP08-087.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F10%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-093.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">34 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>11套 (32.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>8套 (23.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (20.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (8.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F10%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">10.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>23套 (71.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>6套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026%2F10%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-056.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">8.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>12套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>4套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-110.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2026%2F10%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-001.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F10%2F02\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F10%2F02\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-U02.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
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