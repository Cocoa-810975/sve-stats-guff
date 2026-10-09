(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 240,
    "deck_count": 2811,
    "top8_count": 2184,
    "top1_count": 360,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 650,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 565,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 564,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 385,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 271,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 197,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 158,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 12,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 9,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 343,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 275,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 273,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 223,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 187,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 154,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 149,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 101,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 95,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 86,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 85,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 68,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 62,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 61,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 58,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 46,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 39,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 37,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 37,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 37,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 36,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 34,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 33,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 33,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 26,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 23,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 19,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 19,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 14,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 12,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 12,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 12,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 10,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 10,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 10,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 8,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 7,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 7,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 7,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 6,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 6,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 5,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 4,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 4,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 4,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 4,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 3,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-079.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 3,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-042.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 3,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 2,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 2,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 2,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 2,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 2,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 2,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/CP01-031.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-039.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-001.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "巫师｜宇宙法",
        "value": 1,
        "link": "decktypes/decktype-94f7ad69f646.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "巫师｜棋超",
        "value": 1,
        "link": "decktypes/decktype-062263bcb7eb.html",
        "image": "../../assets/cards/BP10-042.jpg"
      },
      {
        "name": "精灵｜无限妖",
        "value": 1,
        "link": "decktypes/decktype-1bade5a106ed.html",
        "image": "../../assets/cards/BP04-005.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 343,
        "best": "3/910",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 275,
        "best": "8/910",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 273,
        "best": "1/210",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 223,
        "best": "1/910",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 187,
        "best": "1/225",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 154,
        "best": "1/48",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 149,
        "best": "1/59",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 101,
        "best": "2/59",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 95,
        "best": "5/910",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 86,
        "best": "12/910",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 85,
        "best": "1/52",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 68,
        "best": "1/34",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录240场有效赛事、2811套有排名记录的卡组，其中上位卡组2184套、冠军卡组360套。从上位职业分布看，梦魇502套（23.0%）、皇家护卫458套（21.0%）构成本范围的主要出场面，冠军侧则以梦魇81套（22.5%）、精灵74套（20.6%）表现最突出。卡组类型方面，皇家护卫「财宝皇」283套（13.0%，最好3/910）、梦魇「永火梦」209套（9.6%，最好1/210）、精灵「连击妖」206套（9.4%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有893套，占全部记录31.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/15",
    "label": "2026/05/15-2026/05/21",
    "event_count": 25,
    "deck_count": 215,
    "top8_count": 180,
    "top1_count": 27,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 47,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 46,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 40,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 33,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 27,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 14,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 7,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 31,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 29,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 19,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 17,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 13,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 11,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 10,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 9,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 8,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 8,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 6,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 4,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 4,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 3,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 3,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜棋超",
        "value": 1,
        "link": "decktypes/decktype-062263bcb7eb.html",
        "image": "../../assets/cards/BP10-042.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 31,
        "best": "1/28",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 29,
        "best": "1/31",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 19,
        "best": "1/25",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 17,
        "best": "1/25",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 13,
        "best": "2/24",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 11,
        "best": "1/29",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 10,
        "best": "1/36",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 9,
        "best": "1/48",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 8,
        "best": "1/24",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 8,
        "best": "1/15",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 6,
        "best": "1/13",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 6,
        "best": "4/36",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/15-2026/05/21共收录25场有效赛事、215套有排名记录的卡组，其中上位卡组180套、冠军卡组27套。从上位职业分布看，梦魇38套（21.1%）、皇家护卫37套（20.6%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive7套（25.9%）、皇家护卫5套（18.5%）表现最突出。卡组类型方面，公主连结Re:Dive「法术PCR」28套（15.6%，最好1/31）、皇家护卫「财宝皇」24套（13.3%，最好1/28）、精灵「连击妖」17套（9.4%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「机械法」，由はいぶらー使用，成绩为1/48，成绩系数0.0208。整体来看，前10%成绩卡组共有67套，占全部记录31.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/08",
    "label": "2026/05/08-2026/05/14",
    "event_count": 9,
    "deck_count": 124,
    "top8_count": 116,
    "top1_count": 9,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 28,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 24,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 21,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 20,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 18,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 17,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 16,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 15,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 11,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 7,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 6,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 6,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 4,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 4,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 17,
        "best": "3/910",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 16,
        "best": "8/910",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 15,
        "best": "1/910",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 11,
        "best": "6/910",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 7,
        "best": "12/910",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 7,
        "best": "2/62",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 6,
        "best": "1/62",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 6,
        "best": "18/910",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 4,
        "best": "4/910",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 4,
        "best": "5/910",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 4,
        "best": "26/910",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 4,
        "best": "29/910",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/08-2026/05/14共收录9场有效赛事、124套有排名记录的卡组，其中上位卡组116套、冠军卡组9套。从上位职业分布看，皇家护卫28套（24.1%）、公主连结Re:Dive20套（17.2%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive3套（33.3%）、梦魇3套（33.3%）表现最突出。卡组类型方面，皇家护卫「财宝皇」17套（14.7%，最好3/910）、公主连结Re:Dive「法术PCR」15套（12.9%，最好1/910）、精灵「连击妖」12套（10.3%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有86套，占全部记录69.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/01",
    "label": "2026/05/01-2026/05/07",
    "event_count": 33,
    "deck_count": 379,
    "top8_count": 346,
    "top1_count": 35,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 89,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 83,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 67,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 48,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 48,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 23,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 20,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 56,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 39,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 35,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 23,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 23,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 23,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 19,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 19,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 18,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 16,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 12,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 10,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 9,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 8,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 7,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 7,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 5,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 5,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 3,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 3,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-039.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 1,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 56,
        "best": "1/59",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 39,
        "best": "3/225",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 35,
        "best": "1/38",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 23,
        "best": "1/225",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 23,
        "best": "1/40",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 23,
        "best": "2/64",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 19,
        "best": "3/210",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 19,
        "best": "2/64",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 18,
        "best": "1/210",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 16,
        "best": "7/225",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 12,
        "best": "1/28",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "篡夺皇",
        "count": 10,
        "best": "1/13",
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/01-2026/05/07共收录33场有效赛事、379套有排名记录的卡组，其中上位卡组346套、冠军卡组35套。从上位职业分布看，皇家护卫84套（24.3%）、梦魇76套（22.0%）构成本范围的主要出场面，冠军侧则以梦魇9套（25.7%）、公主连结Re:Dive8套（22.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」54套（15.6%，最好1/59）、公主连结Re:Dive「法术PCR」36套（10.4%，最好3/225）、精灵「连击妖」29套（8.4%，最好1/38）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由あめ使用，成绩为1/225，成绩系数0.0044。整体来看，前10%成绩卡组共有149套，占全部记录39.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/24",
    "label": "2026/04/24-2026/04/30",
    "event_count": 35,
    "deck_count": 404,
    "top8_count": 322,
    "top1_count": 53,
    "class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 90,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 86,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 77,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 52,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 39,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 36,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 21,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 53,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 46,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 40,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 33,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 28,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 22,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 18,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 16,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 12,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 11,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 11,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 10,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 8,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 8,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 5,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 5,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 4,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 4,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 4,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 4,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 3,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 3,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 3,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 2,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 2,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 2,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-042.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-079.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "巫师｜宇宙法",
        "value": 1,
        "link": "decktypes/decktype-94f7ad69f646.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 53,
        "best": "1/42",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 46,
        "best": "1/49",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 40,
        "best": "1/30",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 33,
        "best": "1/21",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 28,
        "best": "1/17",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 22,
        "best": "1/17",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 18,
        "best": "1/25",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 16,
        "best": "2/30",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 12,
        "best": "2/49",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 11,
        "best": "1/23",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 11,
        "best": "3/26",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 10,
        "best": "1/30",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/24-2026/04/30共收录35场有效赛事、404套有排名记录的卡组，其中上位卡组322套、冠军卡组53套。从上位职业分布看，精灵70套（21.7%）、梦魇70套（21.7%）构成本范围的主要出场面，冠军侧则以精灵14套（26.4%）、皇家护卫11套（20.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」39套（12.1%，最好1/49）、精灵「连击妖」38套（11.8%，最好1/42）、梦魇「永火梦」34套（10.6%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由poyu使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有114套，占全部记录28.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/17",
    "label": "2026/04/17-2026/04/23",
    "event_count": 32,
    "deck_count": 390,
    "top8_count": 283,
    "top1_count": 57,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 92,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 85,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 65,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 64,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 32,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 27,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 21,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 42,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 39,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 36,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 33,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 27,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 20,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 19,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 17,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 15,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 11,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 10,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 10,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 10,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 8,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 8,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 6,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 4,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 4,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 4,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 4,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 3,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 2,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 2,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-042.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/CP01-031.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 42,
        "best": "1/25",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 39,
        "best": "1/33",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 36,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 33,
        "best": "3/59",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 27,
        "best": "1/49",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 20,
        "best": "1/24",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 19,
        "best": "1/59",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 17,
        "best": "2/59",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 15,
        "best": "2/49",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 13,
        "best": "1/11",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 11,
        "best": "1/22",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 10,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/17-2026/04/23共收录32场有效赛事、390套有排名记录的卡组，其中上位卡组283套、冠军卡组57套。从上位职业分布看，梦魇71套（25.1%）、精灵56套（19.8%）构成本范围的主要出场面，冠军侧则以梦魇14套（24.6%）、精灵12套（21.1%）表现最突出。卡组类型方面，梦魇「永火梦」31套（11.0%，最好1/33）、精灵「连击妖」30套（10.6%，最好1/25）、皇家护卫「财宝皇」27套（9.5%，最好1/34）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「八狱妖」，由たいせい使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有110套，占全部记录28.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/10",
    "label": "2026/04/10-2026/04/16",
    "event_count": 37,
    "deck_count": 532,
    "top8_count": 373,
    "top1_count": 73,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 127,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 106,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 97,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 74,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 49,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 37,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 37,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 69,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 62,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 50,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 41,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 36,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 31,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 30,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 16,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 16,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 16,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 16,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 13,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 12,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 11,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 11,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 8,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 8,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 8,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 7,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 7,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 6,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 6,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 5,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 4,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 4,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 3,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 69,
        "best": "2/49",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 62,
        "best": "2/52",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 50,
        "best": "1/43",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 41,
        "best": "1/24",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 36,
        "best": "1/29",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 31,
        "best": "2/29",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 30,
        "best": "1/24",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 16,
        "best": "1/52",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 16,
        "best": "1/45",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 16,
        "best": "1/25",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 16,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 13,
        "best": "1/49",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/10-2026/04/16共收录37场有效赛事、532套有排名记录的卡组，其中上位卡组373套、冠军卡组73套。从上位职业分布看，梦魇87套（23.3%）、精灵79套（21.2%）构成本范围的主要出场面，冠军侧则以精灵17套（23.3%）、梦魇16套（21.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」47套（12.6%，最好2/52）、梦魇「永火梦」46套（12.3%，最好2/49）、精灵「连击妖」36套（9.7%，最好1/43）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「八狱梦」，由NG201使用，成绩为1/52，成绩系数0.0192。整体来看，前10%成绩卡组共有138套，占全部记录25.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/03",
    "label": "2026/04/03-2026/04/09",
    "event_count": 34,
    "deck_count": 440,
    "top8_count": 325,
    "top1_count": 61,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 108,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 95,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 88,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 55,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 32,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 31,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 27,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 61,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 51,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 41,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 32,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 25,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 24,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 22,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 15,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 10,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 10,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 10,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 9,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 9,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 8,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 8,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 7,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 7,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 7,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 5,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 5,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 5,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 5,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 4,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 3,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-079.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/CP01-031.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 61,
        "best": "1/49",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 51,
        "best": "1/30",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 41,
        "best": "1/32",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 32,
        "best": "1/35",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 25,
        "best": "1/58",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 24,
        "best": "1/37",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 22,
        "best": "1/30",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 15,
        "best": "6/58",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 13,
        "best": "1/15",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "盗贼皇",
        "count": 10,
        "best": "2/27",
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 10,
        "best": "2/24",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 10,
        "best": "1/11",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/03-2026/04/09共收录34场有效赛事、440套有排名记录的卡组，其中上位卡组325套、冠军卡组61套。从上位职业分布看，梦魇77套（23.7%）、皇家护卫69套（21.2%）构成本范围的主要出场面，冠军侧则以精灵13套（21.3%）、皇家护卫12套（19.7%）表现最突出。卡组类型方面，梦魇「永火梦」46套（14.2%，最好1/49）、皇家护卫「财宝皇」42套（12.9%，最好1/30）、精灵「连击妖」31套（9.5%，最好1/32）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由床鰻の無職 ちゃんじゅま使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有137套，占全部记录31.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/03/27",
    "label": "2026/03/27-2026/04/02",
    "event_count": 35,
    "deck_count": 327,
    "top8_count": 239,
    "top1_count": 45,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 87,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 74,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 58,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 47,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 25,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 18,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02a-001.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 44,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 38,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 24,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 23,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 19,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 17,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 14,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 14,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 11,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 11,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 7,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 7,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 6,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 6,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 6,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 6,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 5,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 5,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 5,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 4,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 4,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 4,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 3,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-001.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "精灵｜无限妖",
        "value": 1,
        "link": "decktypes/decktype-1bade5a106ed.html",
        "image": "../../assets/cards/BP04-005.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 44,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 38,
        "best": "1/27",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 24,
        "best": "1/28",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 23,
        "best": "2/20",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 19,
        "best": "1/30",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 17,
        "best": "1/16",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 14,
        "best": "1/32",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 14,
        "best": "1/26",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 13,
        "best": "1/34",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 11,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "盗贼皇",
        "count": 11,
        "best": "3/30",
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "魔法使法",
        "count": 7,
        "best": "1/34",
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/03/27-2026/04/02共收录35场有效赛事、327套有排名记录的卡组，其中上位卡组239套、冠军卡组45套。从上位职业分布看，梦魇65套（27.2%）、皇家护卫56套（23.4%）构成本范围的主要出场面，冠军侧则以梦魇16套（35.6%）、皇家护卫9套（20.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」33套（13.8%，最好1/34）、梦魇「永火梦」29套（12.1%，最好1/27）、梦魇「真红梦」18套（7.5%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由piro使用，成绩为1/34，成绩系数0.0294。整体来看，前10%成绩卡组共有92套，占全部记录28.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 240,
    "deck_count": 2811,
    "top8_count": 2184,
    "top1_count": 360,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 502,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 458,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 432,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 309,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 221,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 138,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 112,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 7,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 5,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 81,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 74,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 68,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 50,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 50,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 19,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 17,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 283,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 209,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 206,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 185,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 147,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 127,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 119,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "Others",
        "value": 908,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 46,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 45,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 40,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 36,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 22,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 21,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 16,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 15,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "Others",
        "value": 119,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 908,
    "type_other_types": 50,
    "top1_type_other_count": 119,
    "top1_type_other_types": 27,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>13套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>11套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>10套，最好成绩 1/52</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>9套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html\"><b>龙族｜大哥龙</b><span>8套，最好成绩 1/49</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html\"><b>精灵｜人偶妖</b><span>7套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html\"><b>皇家护卫｜篡夺皇</b><span>6套，最好成绩 1/43</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f2cf81b92eda.html\"><b>巫师｜魔法使法</b><span>6套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>6套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html\"><b>主教｜护符教</b><span>6套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>4套，最好成绩 1/62</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html\"><b>龙族｜武斗龙</b><span>4套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-200bb41cd994.html\"><b>龙族｜海洋龙</b><span>4套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html\"><b>精灵｜透京妖</b><span>3套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>3套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>3套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a0e911cab421.html\"><b>龙族｜八狱龙</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>2套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>2套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html\"><b>皇家护卫｜透京皇</b><span>2套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html\"><b>巫师｜学院法</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a8e415a73656.html\"><b>主教｜八狱教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-db63b51c106d.html\"><b>公主连结Re:Dive｜恶魔莱拉PCR</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html\"><b>主教｜宇宙教</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-5a0677b37803.html\"><b>赛马娘｜横马</b><span>1套，最好成绩 1/3</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录240场有效赛事、2811套有排名记录的卡组，其中上位卡组2184套、冠军卡组360套。从上位职业分布看，梦魇502套（23.0%）、皇家护卫458套（21.0%）构成本范围的主要出场面，冠军侧则以梦魇81套（22.5%）、精灵74套（20.6%）表现最突出。卡组类型方面，皇家护卫「财宝皇」283套（13.0%，最好3/910）、梦魇「永火梦」209套（9.6%，最好1/210）、精灵「连击妖」206套（9.4%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有893套，占全部记录31.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">283</td><td style=\"text-align:center\">207-215 (49.1%)</td><td style=\"text-align:center\">3/910 (0.0033)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">209</td><td style=\"text-align:center\">163-164 (49.8%)</td><td style=\"text-align:center\">1/210 (0.0048)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">206</td><td style=\"text-align:center\">181-147 (55.2%)</td><td style=\"text-align:center\">8/910 (0.0088)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">185</td><td style=\"text-align:center\">172-128 (57.3%)</td><td style=\"text-align:center\">1/910 (0.0011)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">147</td><td style=\"text-align:center\">108-113 (48.9%)</td><td style=\"text-align:center\">1/225 (0.0044)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">127</td><td style=\"text-align:center\">108-94 (53.5%)</td><td style=\"text-align:center\">1/48 (0.0208)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">119</td><td style=\"text-align:center\">75-90 (45.5%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">77</td><td style=\"text-align:center\">61-58 (51.3%)</td><td style=\"text-align:center\">5/910 (0.0055)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">70</td><td style=\"text-align:center\">54-53 (50.5%)</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">67</td><td style=\"text-align:center\">68-45 (60.2%)</td><td style=\"text-align:center\">12/910 (0.0132)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">66</td><td style=\"text-align:center\">55-52 (51.4%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">51</td><td style=\"text-align:center\">45-35 (56.3%)</td><td style=\"text-align:center\">4/910 (0.0044)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">48</td><td style=\"text-align:center\">35-41 (46.1%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">24-36 (40.0%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">38-35 (52.1%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">32-32 (50.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">19-25 (43.2%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">25-22 (53.2%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">17-23 (42.5%)</td><td style=\"text-align:center\">2/225 (0.0089)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">20-16 (55.6%)</td><td style=\"text-align:center\">1/62 (0.0161)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">22-18 (55.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">16-24 (40.0%)</td><td style=\"text-align:center\">61/910 (0.0670)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">22-18 (55.0%)</td><td style=\"text-align:center\">15/910 (0.0165)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">19-18 (51.4%)</td><td style=\"text-align:center\">48/910 (0.0527)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">7-17 (29.2%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">15-11 (57.7%)</td><td style=\"text-align:center\">2/42 (0.0476)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html\">八狱龙</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">7-12 (36.8%)</td><td style=\"text-align:center\">6/225 (0.0267)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html\">八狱教</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">6-9 (40.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3-8 (27.3%)</td><td style=\"text-align:center\">4/48 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">2-8 (20.0%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">24/225 (0.1067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html\">涅妃PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html\">大哥马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html\">passion</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/3 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">38/910 (0.0418)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html\">法术妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/59 (0.1186)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">51/210 (0.2429)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html\">cute</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-1bade5a106ed.html\">无限妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/3 (1.0000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">650 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 204</span>\n          <span class=\"stat-pill percent\">23.1%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>273套 (42.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>101套 (15.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>95套 (14.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>85套 (13.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>62套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>12套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>10套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>7套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-079.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>2套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">565 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 173</span>\n          <span class=\"stat-pill percent\">20.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>275套 (48.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>149套 (26.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>68套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>46套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>23套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1bade5a106ed.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP04-005.jpg\" alt=\"无限妖核心卡\"><span class=\"archetype-tag-body\"><b>无限妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">564 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 189</span>\n          <span class=\"stat-pill percent\">20.1%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>343套 (60.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>86套 (15.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>39套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>33套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>19套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>12套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>10套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>8套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>7套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>7套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">385 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 135</span>\n          <span class=\"stat-pill percent\">13.7%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>187套 (48.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>154套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>36套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-042.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>3套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.jpg\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-039.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-94f7ad69f646.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙法核心卡\"><span class=\"archetype-tag-body\"><b>宇宙法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-062263bcb7eb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP10-042.jpg\" alt=\"棋超核心卡\"><span class=\"archetype-tag-body\"><b>棋超</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">271 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 100</span>\n          <span class=\"stat-pill percent\">9.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>223套 (82.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>37套 (13.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>6套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>5套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">197 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 49</span>\n          <span class=\"stat-pill percent\">7.0%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>61套 (31.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>58套 (29.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>33套 (16.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>26套 (13.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>12套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>2套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>2套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>2套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (0.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">158 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 41</span>\n          <span class=\"stat-pill percent\">5.6%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>37套 (23.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>37套 (23.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>34套 (21.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>19套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>14套 (8.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>10套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>4套 (2.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>2套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (0.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>6套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SL13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-031.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-001.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/05/15": {
    "key": "2026/05/15",
    "label": "2026/05/15-2026/05/21",
    "event_count": 25,
    "deck_count": 215,
    "top8_count": 180,
    "top1_count": 27,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 38,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 37,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 36,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 31,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 21,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💎 公主连结Re:Dive",
        "value": 7,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 1,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 28,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 24,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 17,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 14,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 10,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 10,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 8,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 8,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "Others",
        "value": 61,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 6,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 61,
    "type_other_types": 24,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F15\"><b>巫师｜机械法</b><span>1套，最好成绩 1/48</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F15\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F15\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F15\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F15\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F15\"><b>龙族｜武斗龙</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F15\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/10</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/15-2026/05/21共收录25场有效赛事、215套有排名记录的卡组，其中上位卡组180套、冠军卡组27套。从上位职业分布看，梦魇38套（21.1%）、皇家护卫37套（20.6%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive7套（25.9%）、皇家护卫5套（18.5%）表现最突出。卡组类型方面，公主连结Re:Dive「法术PCR」28套（15.6%，最好1/31）、皇家护卫「财宝皇」24套（13.3%，最好1/28）、精灵「连击妖」17套（9.4%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「机械法」，由はいぶらー使用，成绩为1/48，成绩系数0.0208。整体来看，前10%成绩卡组共有67套，占全部记录31.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F15\">法术PCR</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">24-22 (52.2%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F15\">财宝皇</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">22-22 (50.0%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F15\">连击妖</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">16-13 (55.2%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F15\">八狱法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">15-11 (57.7%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F15\">真红梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-7 (58.8%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F15\">机械梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F15\">nc梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F15\">宇宙妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F15\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">1/48 (0.0208)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F15\">天使皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">8-4 (66.7%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F15\">武斗龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F15\">透京妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F15\">八狱妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F15\">永火梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">5/36 (0.1389)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F15\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/48 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F15\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F15\">宇宙梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/48 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F15\">蝙蝠梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F15\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F15\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F15\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F15\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/48 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F15\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F15\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F15\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F15\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F05%2F15\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F15\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/31 (0.2258)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F15\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F15\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F15\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F15\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">21.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>13套 (27.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>11套 (23.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>10套 (21.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>4套 (8.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>3套 (6.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>3套 (6.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>3套 (6.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">40 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">18.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>19套 (47.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>8套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>6套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>4套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (7.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">21.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>31套 (67.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">12.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F15\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>17套 (63.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F15\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>9套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-062263bcb7eb.html?scope=2026%2F05%2F15\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP10-042.jpg\" alt=\"棋超核心卡\"><span class=\"archetype-tag-body\"><b>棋超</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">15.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>29套 (87.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">6.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>6套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>5套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F05%2F15\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SL13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/05/08": {
    "key": "2026/05/08",
    "label": "2026/05/08-2026/05/14",
    "event_count": 9,
    "deck_count": 124,
    "top8_count": 116,
    "top1_count": 9,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 28,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 20,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 19,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 18,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 18,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 2,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 17,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 15,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 11,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 7,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 6,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "Others",
        "value": 36,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "type_other_count": 36,
    "type_other_types": 17,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/08-2026/05/14共收录9场有效赛事、124套有排名记录的卡组，其中上位卡组116套、冠军卡组9套。从上位职业分布看，皇家护卫28套（24.1%）、公主连结Re:Dive20套（17.2%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive3套（33.3%）、梦魇3套（33.3%）表现最突出。卡组类型方面，皇家护卫「财宝皇」17套（14.7%，最好3/910）、公主连结Re:Dive「法术PCR」15套（12.9%，最好1/910）、精灵「连击妖」12套（10.3%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有86套，占全部记录69.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F08\">财宝皇</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">6-8 (42.9%)</td><td style=\"text-align:center\">3/910 (0.0033)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F08\">法术PCR</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-7 (61.1%)</td><td style=\"text-align:center\">1/910 (0.0011)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F08\">连击妖</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">8/910 (0.0088)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F08\">八狱法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">1-6 (14.3%)</td><td style=\"text-align:center\">6/910 (0.0066)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F08\">天使皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">12/910 (0.0132)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F08\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/62 (0.0323)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F08\">八狱妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">18/910 (0.0198)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F08\">跳费PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/62 (0.0161)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F08\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">4/910 (0.0044)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F08\">八狱梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">26/910 (0.0286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F08\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/910 (0.0055)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F08\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">29/910 (0.0319)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F08\">武斗龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">49/910 (0.0538)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F08\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">54/910 (0.0593)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F08\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">41/910 (0.0451)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F08\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">48/910 (0.0527)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F08\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">53/910 (0.0582)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F08\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">61/910 (0.0670)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F08\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">5/62 (0.0806)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F08\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">15/910 (0.0165)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F08\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">37/910 (0.0407)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F08\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">38/910 (0.0418)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F08\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/33 (0.0606)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F08\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/33 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F08\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">16.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">19.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>16套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>6套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">22.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>17套 (60.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>7套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">14.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F08\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>11套 (61.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F08\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (38.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">16.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F08\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>15套 (71.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F08\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>6套 (28.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">7.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/05/01": {
    "key": "2026/05/01",
    "label": "2026/05/01-2026/05/07",
    "event_count": 33,
    "deck_count": 379,
    "top8_count": 346,
    "top1_count": 35,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 84,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 76,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 60,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 44,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 44,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 21,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 16,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 9,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 8,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 6,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 6,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 54,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 36,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 29,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 23,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 22,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 20,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 19,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 17,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 16,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 110,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 3,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 110,
    "type_other_types": 27,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F01\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F01\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F01\"><b>巫师｜魔法使法</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F01\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F01\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F01\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/01-2026/05/07共收录33场有效赛事、379套有排名记录的卡组，其中上位卡组346套、冠军卡组35套。从上位职业分布看，皇家护卫84套（24.3%）、梦魇76套（22.0%）构成本范围的主要出场面，冠军侧则以梦魇9套（25.7%）、公主连结Re:Dive8套（22.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」54套（15.6%，最好1/59）、公主连结Re:Dive「法术PCR」36套（10.4%，最好3/225）、精灵「连击妖」29套（8.4%，最好1/38）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由あめ使用，成绩为1/225，成绩系数0.0044。整体来看，前10%成绩卡组共有149套，占全部记录39.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F01\">财宝皇</a></td><td style=\"text-align:center\">54</td><td style=\"text-align:center\">27-31 (46.6%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F01\">法术PCR</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">33-22 (60.0%)</td><td style=\"text-align:center\">3/225 (0.0133)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F01\">连击妖</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">14-21 (40.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F01\">nc梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">17-12 (58.6%)</td><td style=\"text-align:center\">2/64 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F01\">八狱法</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">13-11 (54.2%)</td><td style=\"text-align:center\">1/225 (0.0044)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F01\">机械法</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">17-11 (60.7%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F01\">八狱妖</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">2/64 (0.0313)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F01\">天使皇</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">3/210 (0.0143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F01\">永火梦</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">11-6 (64.7%)</td><td style=\"text-align:center\">1/210 (0.0048)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F01\">八狱梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">6-10 (37.5%)</td><td style=\"text-align:center\">7/225 (0.0311)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F01\">武斗龙</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">8-5 (61.5%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F01\">篡夺皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F01\">机械梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">3/64 (0.0469)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F01\">真红梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">4/55 (0.0727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F01\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">14/210 (0.0667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F01\">跳费PCR</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">17/210 (0.0810)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F01\">人偶妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">7/210 (0.0333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F01\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">10/210 (0.0476)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F01\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F01\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/225 (0.0089)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F01\">蝙蝠梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F01\">削手梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">24/225 (0.1067)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F01\">宇宙皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F01\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/52 (0.1154)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F01\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F05%2F01\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F01\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/225 (0.0267)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F01\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F01\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F01\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F01\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">27/210 (0.1286)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F01\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">54/225 (0.2400)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F05%2F01\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">51/210 (0.2429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F01\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F05%2F01\">八狱教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">57/210 (0.2714)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F01\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">83 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 34</span>\n          <span class=\"stat-pill percent\">21.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>23套 (27.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>18套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>16套 (19.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>9套 (10.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>8套 (9.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>5套 (6.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>3套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>35套 (52.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>19套 (28.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>6套 (9.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (7.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">89 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 34</span>\n          <span class=\"stat-pill percent\">23.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>56套 (62.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>19套 (21.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>10套 (11.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">12.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>23套 (47.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>23套 (47.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-039.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">12.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>39套 (81.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>7套 (14.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">6.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>12套 (52.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>7套 (30.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">5.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>8套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F01\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/04/24": {
    "key": "2026/04/24",
    "label": "2026/04/24-2026/04/30",
    "event_count": 35,
    "deck_count": 404,
    "top8_count": 322,
    "top1_count": 53,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 70,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 70,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 67,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 42,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 34,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 22,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 14,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 14,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 11,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 7,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 39,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 38,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 34,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 30,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 22,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 20,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 17,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 13,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "Others",
        "value": 109,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 12,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 5,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 5,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 3,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 16,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 109,
    "type_other_types": 33,
    "top1_type_other_count": 16,
    "top1_type_other_types": 15,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F24\"><b>主教｜控教</b><span>2套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/43</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\"><b>巫师｜学院法</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\"><b>主教｜八狱教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F24\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F24\"><b>龙族｜八狱龙</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F24\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F24\"><b>主教｜护符教</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F24\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F24\"><b>公主连结Re:Dive｜恶魔莱拉PCR</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F24\"><b>主教｜宇宙教</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F24\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F24\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/24-2026/04/30共收录35场有效赛事、404套有排名记录的卡组，其中上位卡组322套、冠军卡组53套。从上位职业分布看，精灵70套（21.7%）、梦魇70套（21.7%）构成本范围的主要出场面，冠军侧则以精灵14套（26.4%）、皇家护卫11套（20.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」39套（12.1%，最好1/49）、精灵「连击妖」38套（11.8%，最好1/42）、梦魇「永火梦」34套（10.6%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由poyu使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有114套，占全部记录28.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F24\">财宝皇</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">23-36 (39.0%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F24\">连击妖</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">44-26 (62.9%)</td><td style=\"text-align:center\">1/42 (0.0238)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F24\">永火梦</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">28-29 (49.1%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F24\">法术PCR</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">27-25 (51.9%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F24\">八狱法</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">16-19 (45.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\">八狱妖</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">10-19 (34.5%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F24\">机械法</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">21-13 (61.8%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F24\">八狱梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">12-12 (50.0%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F24\">nc梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">10-10 (50.0%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F24\">天使皇</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">16-5 (76.2%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F24\">武斗龙</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\">大哥龙</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F24\">真红梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F24\">盗贼皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F24\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F24\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F24\">透京妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F24\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">5/42 (0.1190)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F24\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F24\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/42 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F24\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F04%2F24\">大哥马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F24\">宇宙龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">7/27 (0.2593)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F24\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F24\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F24\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F24\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F24\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F24\">宇宙皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F24\">魔法使法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F24\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\">八狱教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F24\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F24\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F24\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F24\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F04%2F24\">法术妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F24\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F04%2F24\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">86 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">21.3%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>40套 (46.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>16套 (18.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>12套 (14.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>8套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>7套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-079.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">90 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">22.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>53套 (58.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>22套 (24.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>8套 (8.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>4套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">77 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">19.1%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>46套 (59.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>10套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>5套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (5.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>4套 (5.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>3套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>2套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">12.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>28套 (53.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>18套 (34.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-042.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-94f7ad69f646.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙法核心卡\"><span class=\"archetype-tag-body\"><b>宇宙法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">9.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>33套 (84.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>2套 (5.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">8.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>11套 (30.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>11套 (30.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>5套 (13.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>4套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">5.2%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (23.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (23.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>4套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>3套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F04%2F24\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SL13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/04/17": {
    "key": "2026/04/17",
    "label": "2026/04/17-2026/04/23",
    "event_count": 32,
    "deck_count": 390,
    "top8_count": 283,
    "top1_count": 57,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 71,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 56,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 51,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 45,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 23,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 22,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 13,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 14,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 12,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 11,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 5,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 4,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 31,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 30,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 27,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 27,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 19,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 15,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 13,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 12,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "Others",
        "value": 109,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 4,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 3,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 14,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 109,
    "type_other_types": 29,
    "top1_type_other_count": 14,
    "top1_type_other_types": 10,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F17\"><b>巫师｜机械法</b><span>2套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F17\"><b>梦魇｜nc梦</b><span>2套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F17\"><b>梦魇｜八狱梦</b><span>2套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F17\"><b>梦魇｜机械梦</b><span>2套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F17\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F17\"><b>龙族｜海洋龙</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F17\"><b>巫师｜魔法使法</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F17\"><b>主教｜控教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F17\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F17\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/17-2026/04/23共收录32场有效赛事、390套有排名记录的卡组，其中上位卡组283套、冠军卡组57套。从上位职业分布看，梦魇71套（25.1%）、精灵56套（19.8%）构成本范围的主要出场面，冠军侧则以梦魇14套（24.6%）、精灵12套（21.1%）表现最突出。卡组类型方面，梦魇「永火梦」31套（11.0%，最好1/33）、精灵「连击妖」30套（10.6%，最好1/25）、皇家护卫「财宝皇」27套（9.5%，最好1/34）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「八狱妖」，由たいせい使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有110套，占全部记录28.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F17\">永火梦</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">28-23 (54.9%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F17\">连击妖</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">30-23 (56.6%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F17\">财宝皇</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">26-20 (56.5%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F17\">八狱法</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">19-23 (45.2%)</td><td style=\"text-align:center\">3/59 (0.0508)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F17\">法术PCR</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">16-15 (51.6%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F17\">机械法</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-13 (45.8%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F17\">八狱梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-11 (45.0%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F17\">八狱妖</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">12-8 (60.0%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F17\">nc梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F17\">机械梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F17\">真红梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F17\">魔法使法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F17\">人偶妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F17\">护符教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">10-2 (83.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F17\">天使皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">8-2 (80.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F17\">武斗龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F17\">宇宙教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F17\">透京妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F17\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F17\">大哥龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-1 (85.7%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F17\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F17\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F17\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F17\">海洋龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F17\">八狱教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F17\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F17\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F17\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F17\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F17\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F17\">透京皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/24 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F04%2F17\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/59 (0.1186)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F17\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F17\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F17\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F17\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F17\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">92 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">23.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>39套 (42.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>17套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>15套 (16.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>10套 (10.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>10套 (10.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">21.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>42套 (49.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>19套 (22.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (15.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>8套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (3.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">16.7%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>36套 (55.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>11套 (16.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>4套 (6.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (6.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>3套 (4.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">64 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">16.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>33套 (51.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>20套 (31.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>10套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-042.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">8.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>27套 (84.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">5.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>8套 (38.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>5套 (23.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>4套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">6.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>6套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>4套 (14.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>4套 (14.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F17\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026%2F04%2F17\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-031.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F17\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/04/10": {
    "key": "2026/04/10",
    "label": "2026/04/10-2026/04/16",
    "event_count": 37,
    "deck_count": 532,
    "top8_count": 373,
    "top1_count": 73,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 87,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 79,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 72,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 52,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 37,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 23,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 20,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 17,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 12,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 12,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 4,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 47,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 46,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 36,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 30,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 23,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 23,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 22,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 146,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 13,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 12,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 8,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 5,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "Others",
        "value": 16,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 146,
    "type_other_types": 34,
    "top1_type_other_count": 16,
    "top1_type_other_types": 13,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F10\"><b>龙族｜大哥龙</b><span>2套，最好成绩 1/49</span></a><a class=\"others-chip\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F10\"><b>皇家护卫｜天使皇</b><span>2套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F10\"><b>精灵｜八狱妖</b><span>2套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F10\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F10\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F10\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F10\"><b>龙族｜海洋龙</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F10\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F10\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F10\"><b>主教｜节奏教</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F10\"><b>龙族｜八狱龙</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F10\"><b>赛马娘｜横马</b><span>1套，最好成绩 1/3</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F10\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/3</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/10-2026/04/16共收录37场有效赛事、532套有排名记录的卡组，其中上位卡组373套、冠军卡组73套。从上位职业分布看，梦魇87套（23.3%）、精灵79套（21.2%）构成本范围的主要出场面，冠军侧则以精灵17套（23.3%）、梦魇16套（21.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」47套（12.6%，最好2/52）、梦魇「永火梦」46套（12.3%，最好2/49）、精灵「连击妖」36套（9.7%，最好1/43）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「八狱梦」，由NG201使用，成绩为1/52，成绩系数0.0192。整体来看，前10%成绩卡组共有138套，占全部记录25.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F10\">财宝皇</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">37-39 (48.7%)</td><td style=\"text-align:center\">2/52 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F10\">永火梦</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">31-41 (43.1%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F10\">连击妖</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">37-23 (61.7%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F10\">法术PCR</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">36-18 (66.7%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F10\">机械法</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">20-17 (54.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F10\">八狱妖</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">9-21 (30.0%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F10\">八狱法</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">18-18 (50.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F10\">八狱梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">17-6 (73.9%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F10\">真红梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">12-7 (63.2%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F10\">nc梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">12-10 (54.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F10\">大哥龙</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F10\">天使皇</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-8 (55.6%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F10\">透京妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">4-9 (30.8%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F10\">人偶妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F10\">节奏教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F10\">魔法使法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F10\">机械梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">4/43 (0.0930)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F10\">护符教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F10\">跳费PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F10\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F10\">海洋龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F10\">八狱龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/5 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F10\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F10\">宇宙龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F10\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/43 (0.0698)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F10\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F10\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F10\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F10\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F10\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F10\">横马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/3 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F10\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F10\">荒野皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F10\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F10\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F10\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F10\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/10 (0.3000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F10\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F10\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F10\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F10\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">127 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">23.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>69套 (54.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>16套 (12.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>16套 (12.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>16套 (12.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>7套 (5.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">106 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">19.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>50套 (47.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>31套 (29.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>11套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>11套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">97 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 26</span>\n          <span class=\"stat-pill percent\">18.2%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>62套 (63.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>16套 (16.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>6套 (6.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>4套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">74 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">13.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>36套 (48.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>30套 (40.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>8套 (10.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">9.2%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>41套 (83.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>6套 (12.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">7.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>13套 (35.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>8套 (21.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>7套 (18.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>5套 (13.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>3套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">7.0%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>12套 (32.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>8套 (21.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>7套 (18.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>4套 (10.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>2套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F10\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F04%2F10\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F10\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/04/03": {
    "key": "2026/04/03",
    "label": "2026/04/03-2026/04/09",
    "event_count": 34,
    "deck_count": 440,
    "top8_count": 325,
    "top1_count": 61,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 77,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 69,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 67,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 48,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 23,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 21,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 19,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 13,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 12,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 3,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 46,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 42,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 31,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 23,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 22,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 18,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 16,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 127,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 9,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 6,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 6,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 5,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 5,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 3,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 18,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 127,
    "type_other_types": 35,
    "top1_type_other_count": 18,
    "top1_type_other_types": 13,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F03\"><b>主教｜节奏教</b><span>2套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F03\"><b>龙族｜大哥龙</b><span>2套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F03\"><b>巫师｜魔法使法</b><span>2套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F03\"><b>精灵｜人偶妖</b><span>2套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F03\"><b>梦魇｜机械梦</b><span>2套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F03\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F03\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F03\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F03\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F03\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F03\"><b>龙族｜武斗龙</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F03\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/3</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F03\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/3</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/03-2026/04/09共收录34场有效赛事、440套有排名记录的卡组，其中上位卡组325套、冠军卡组61套。从上位职业分布看，梦魇77套（23.7%）、皇家护卫69套（21.2%）构成本范围的主要出场面，冠军侧则以精灵13套（21.3%）、皇家护卫12套（19.7%）表现最突出。卡组类型方面，梦魇「永火梦」46套（14.2%，最好1/49）、皇家护卫「财宝皇」42套（12.9%，最好1/30）、精灵「连击妖」31套（9.5%，最好1/32）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由床鰻の無職 ちゃんじゅま使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有137套，占全部记录31.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F03\">永火梦</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">31-40 (43.7%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F03\">财宝皇</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">37-33 (52.9%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F03\">连击妖</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">24-26 (48.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F03\">机械法</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">23-17 (57.5%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F03\">八狱妖</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">21-17 (55.3%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F03\">法术PCR</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">16-12 (57.1%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F03\">八狱法</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">17-13 (56.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F03\">大哥龙</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F03\">魔法使法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F03\">人偶妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F03\">天使皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F03\">武斗龙</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F03\">真红梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">6/58 (0.1034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F03\">八狱梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F03\">机械梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">8-4 (66.7%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F03\">盗贼皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/27 (0.0741)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F03\">控教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">9-2 (81.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F03\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F03\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-3 (72.7%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F03\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F03\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F03\">海洋龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F03\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F03\">八狱龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F03\">护符教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F04%2F03\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F03\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F04%2F03\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F03\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/27 (0.1852)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F03\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F03\">宇宙梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/35 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F03\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F03\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F03\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F03\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F03\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2026%2F04%2F03\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F03\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/49 (0.1633)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F03\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/37 (0.1892)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F03\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/3 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F03\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F03\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">108 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 29</span>\n          <span class=\"stat-pill percent\">24.5%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>61套 (56.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>15套 (13.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>9套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>9套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>7套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-079.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">95 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 26</span>\n          <span class=\"stat-pill percent\">21.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>41套 (43.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>32套 (33.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (13.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>7套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">88 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 32</span>\n          <span class=\"stat-pill percent\">20.0%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>51套 (58.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>10套 (11.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>10套 (11.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>5套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">55 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>24套 (43.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>22套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>8套 (14.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.jpg\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">7.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>25套 (80.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>5套 (16.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">7.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>10套 (31.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>8套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>7套 (21.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>5套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">6.1%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>7套 (25.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>4套 (14.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F04%2F03\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026%2F04%2F03\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-031.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F04%2F03\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F04%2F03\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/03/27": {
    "key": "2026/03/27",
    "label": "2026/03/27-2026/04/02",
    "event_count": 35,
    "deck_count": 327,
    "top8_count": 239,
    "top1_count": 45,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 65,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 56,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 45,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 33,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 17,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 11,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 11,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02a-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 8,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 3,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 33,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 29,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 18,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 15,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 13,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 13,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 13,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 105,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 5,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 4,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 2,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 105,
    "type_other_types": 32,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F03%2F27\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F03%2F27\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F03%2F27\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F03%2F27\"><b>龙族｜八狱龙</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F03%2F27\"><b>巫师｜机械法</b><span>1套，最好成绩 1/9</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/03/27-2026/04/02共收录35场有效赛事、327套有排名记录的卡组，其中上位卡组239套、冠军卡组45套。从上位职业分布看，梦魇65套（27.2%）、皇家护卫56套（23.4%）构成本范围的主要出场面，冠军侧则以梦魇16套（35.6%）、皇家护卫9套（20.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」33套（13.8%，最好1/34）、梦魇「永火梦」29套（12.1%，最好1/27）、梦魇「真红梦」18套（7.5%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由piro使用，成绩为1/34，成绩系数0.0294。整体来看，前10%成绩卡组共有92套，占全部记录28.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F03%2F27\">财宝皇</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">29-26 (52.7%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F03%2F27\">永火梦</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">31-21 (59.6%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F03%2F27\">真红梦</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">19-13 (59.4%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F03%2F27\">机械法</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">7-14 (33.3%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F03%2F27\">连击妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-11 (45.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F03%2F27\">八狱妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">13-9 (59.1%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F03%2F27\">八狱法</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-12 (42.9%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F03%2F27\">人偶妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">10-7 (58.8%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F03%2F27\">法术PCR</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-7 (56.3%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F03%2F27\">nc梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F03%2F27\">盗贼皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F03%2F27\">海洋龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F03%2F27\">魔法使法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F03%2F27\">护符教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F03%2F27\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">2/34 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F03%2F27\">八狱梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F03%2F27\">大哥龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F03%2F27\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F03%2F27\">天使皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/34 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F03%2F27\">铺场皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F03%2F27\">武斗龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F03%2F27\">自然皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F03%2F27\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F03%2F27\">八狱龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F03%2F27\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F03%2F27\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F03%2F27\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F03%2F27\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/34 (0.0882)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F03%2F27\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F03%2F27\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F03%2F27\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F03%2F27\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/34 (0.1765)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F03%2F27\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F03%2F27\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F03%2F27\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F03%2F27\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026%2F03%2F27\">cute</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F03%2F27\">法术妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/9 (0.4444)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-1bade5a106ed.html?scope=2026%2F03%2F27\">无限妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/3 (1.0000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">87 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 29</span>\n          <span class=\"stat-pill percent\">26.6%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>38套 (43.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>24套 (27.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>11套 (12.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>6套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>6套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">58 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>19套 (32.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>14套 (24.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (22.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>6套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>4套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1bade5a106ed.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP04-005.jpg\" alt=\"无限妖核心卡\"><span class=\"archetype-tag-body\"><b>无限妖</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">74 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">22.6%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>44套 (59.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>11套 (14.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>5套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>5套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>4套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">14.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>23套 (48.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>17套 (36.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>7套 (14.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>14套 (77.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">25 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">7.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>7套 (28.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>6套 (24.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>6套 (24.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>4套 (16.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">4.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>5套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL22.jpg\" alt=\"八狱教核心卡\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>3套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F03%2F27\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026%2F03%2F27\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-001.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
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