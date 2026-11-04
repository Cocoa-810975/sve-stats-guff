(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 136,
    "deck_count": 1407,
    "top8_count": 1407,
    "top1_count": 156,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 320,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 313,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 278,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 197,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 142,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 78,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 75,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
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
        "value": 201,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 127,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 116,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 114,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 84,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 83,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 68,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 53,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 50,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 43,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 42,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 36,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 30,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 28,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 27,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 26,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 24,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 24,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 22,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 20,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 18,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 15,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 15,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 15,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 14,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 13,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 9,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 9,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 9,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 7,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 7,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 7,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 6,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 5,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 5,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 4,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 4,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 4,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 3,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 2,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 2,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-079.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 2,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 201,
        "best": "3/910",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 127,
        "best": "8/910",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 116,
        "best": "1/910",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 114,
        "best": "1/210",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 84,
        "best": "1/59",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 83,
        "best": "1/48",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 68,
        "best": "1/225",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 53,
        "best": "5/910",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 50,
        "best": "12/910",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 43,
        "best": "2/59",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 42,
        "best": "1/52",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 36,
        "best": "4/910",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录136场有效赛事、1407套有排名记录的卡组，其中上位卡组1407套、冠军卡组156套。从上位职业分布看，皇家护卫320套（22.7%）、梦魇313套（22.2%）构成本范围的主要出场面，冠军侧则以梦魇32套（20.5%）、皇家护卫30套（19.2%）表现最突出。卡组类型方面，皇家护卫「财宝皇」201套（14.3%，最好3/910）、精灵「连击妖」127套（9.0%，最好8/910）、公主连结Re:Dive「法术PCR」116套（8.2%，最好1/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有590套，占全部记录41.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/15",
    "label": "2026/05/15-2026/05/21",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 30,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 30,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 25,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 22,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 20,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 13,
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
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 6,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 6,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 4,
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
        "name": "梦魇｜宇宙梦",
        "value": 3,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 22,
        "best": "1/31",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 20,
        "best": "1/28",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 13,
        "best": "1/25",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 11,
        "best": "1/25",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 9,
        "best": "2/24",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 7,
        "best": "1/29",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 6,
        "best": "1/48",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 6,
        "best": "1/36",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 6,
        "best": "1/24",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 6,
        "best": "4/36",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 4,
        "best": "2/28",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 3,
        "best": "3/48",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/15-2026/05/21共收录18场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组18套。从上位职业分布看，皇家护卫31套（21.5%）、精灵30套（20.8%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive5套（27.8%）、精灵4套（22.2%）表现最突出。卡组类型方面，公主连结Re:Dive「法术PCR」22套（15.3%，最好1/31）、皇家护卫「财宝皇」20套（13.9%，最好1/28）、精灵「连击妖」13套（9.0%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「机械法」，由はいぶらー使用，成绩为1/48，成绩系数0.0208。整体来看，前10%成绩卡组共有54套，占全部记录37.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/08",
    "label": "2026/05/08-2026/05/14",
    "event_count": 6,
    "deck_count": 104,
    "top8_count": 104,
    "top1_count": 6,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 23,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 17,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 8,
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
        "value": 14,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 12,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 11,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 7,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 6,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 4,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 3,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
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
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 14,
        "best": "3/910",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 12,
        "best": "1/910",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 11,
        "best": "8/910",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 7,
        "best": "7/910",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 7,
        "best": "18/910",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
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
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 6,
        "best": "12/910",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 5,
        "best": "1/62",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
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
        "category": "八狱梦",
        "count": 4,
        "best": "26/910",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "巫师",
        "category": "星星法",
        "count": 3,
        "best": "6/910",
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 3,
        "best": "49/910",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/08-2026/05/14共收录6场有效赛事、104套有排名记录的卡组，其中上位卡组104套、冠军卡组6套。从上位职业分布看，皇家护卫23套（22.1%）、精灵19套（18.3%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive2套（33.3%）、梦魇2套（33.3%）表现最突出。卡组类型方面，皇家护卫「财宝皇」14套（13.5%，最好3/910）、公主连结Re:Dive「法术PCR」12套（11.5%，最好1/910）、精灵「连击妖」11套（10.6%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有82套，占全部记录78.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/01",
    "label": "2026/05/01-2026/05/07",
    "event_count": 25,
    "deck_count": 308,
    "top8_count": 308,
    "top1_count": 25,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 77,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 65,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 53,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 42,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 38,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 17,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
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
        "value": 52,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 34,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 24,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 20,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 19,
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
        "value": 15,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 14,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 13,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 10,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 9,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 7,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 6,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 6,
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
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 4,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 4,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 4,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 3,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 3,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 52,
        "best": "1/59",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 34,
        "best": "3/225",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 24,
        "best": "1/38",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 20,
        "best": "2/64",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 19,
        "best": "1/40",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
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
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 15,
        "best": "3/210",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 14,
        "best": "1/225",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 13,
        "best": "1/210",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 10,
        "best": "7/225",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 9,
        "best": "1/28",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 7,
        "best": "3/64",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/01-2026/05/07共收录25场有效赛事、308套有排名记录的卡组，其中上位卡组308套、冠军卡组25套。从上位职业分布看，皇家护卫77套（25.0%）、梦魇65套（21.1%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive8套（32.0%）、巫师5套（20.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」52套（16.9%，最好1/59）、公主连结Re:Dive「法术PCR」34套（11.0%，最好3/225）、精灵「连击妖」24套（7.8%，最好1/38）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由あめ使用，成绩为1/225，成绩系数0.0044。整体来看，前10%成绩卡组共有134套，占全部记录43.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/24",
    "label": "2026/04/24-2026/04/30",
    "event_count": 20,
    "deck_count": 224,
    "top8_count": 224,
    "top1_count": 28,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 54,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 52,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 47,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 27,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "🐉 龙族",
        "value": 13,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
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
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 32,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 26,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 25,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 20,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 15,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 11,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 9,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 8,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 8,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 8,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 6,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 5,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 4,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 3,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
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
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 2,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SL13.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 1,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 32,
        "best": "1/49",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 26,
        "best": "1/30",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 25,
        "best": "1/42",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 20,
        "best": "1/21",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 15,
        "best": "1/17",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 11,
        "best": "1/25",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 9,
        "best": "1/30",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 8,
        "best": "2/49",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 8,
        "best": "2/30",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 8,
        "best": "3/43",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 6,
        "best": "3/26",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 6,
        "best": "4/30",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/24-2026/04/30共收录20场有效赛事、224套有排名记录的卡组，其中上位卡组224套、冠军卡组28套。从上位职业分布看，皇家护卫54套（24.1%）、梦魇52套（23.2%）构成本范围的主要出场面，冠军侧则以皇家护卫8套（28.6%）、精灵6套（21.4%）表现最突出。卡组类型方面，皇家护卫「财宝皇」32套（14.3%，最好1/49）、梦魇「永火梦」26套（11.6%，最好1/30）、精灵「连击妖」25套（11.2%，最好1/42）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由poyu使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有79套，占全部记录35.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/17",
    "label": "2026/04/17-2026/04/23",
    "event_count": 15,
    "deck_count": 136,
    "top8_count": 136,
    "top1_count": 17,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 30,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 28,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 20,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 16,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 10,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "精灵｜连击妖",
        "value": 18,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 11,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 10,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 10,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 8,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 6,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 5,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 4,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 4,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 3,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 3,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 2,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL01.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 18,
        "best": "1/25",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 11,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 10,
        "best": "1/33",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 10,
        "best": "3/59",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 8,
        "best": "1/49",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 8,
        "best": "1/24",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 6,
        "best": "2/49",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 6,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "星星法",
        "count": 5,
        "best": "2/24",
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 4,
        "best": "1/59",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 4,
        "best": "2/59",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "护符教",
        "count": 4,
        "best": "1/24",
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/17-2026/04/23共收录15场有效赛事、136套有排名记录的卡组，其中上位卡组136套、冠军卡组17套。从上位职业分布看，梦魇30套（22.1%）、精灵28套（20.6%）构成本范围的主要出场面，冠军侧则以梦魇4套（23.5%）、公主连结Re:Dive3套（17.6%）表现最突出。卡组类型方面，精灵「连击妖」18套（13.2%，最好1/25）、皇家护卫「财宝皇」11套（8.1%，最好1/34）、梦魇「永火梦」10套（7.4%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「八狱妖」，由たいせい使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有51套，占全部记录37.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/10",
    "label": "2026/04/10-2026/04/16",
    "event_count": 15,
    "deck_count": 168,
    "top8_count": 168,
    "top1_count": 21,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 42,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 33,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 33,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 24,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 15,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 12,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 19,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 19,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
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
        "name": "巫师｜机械法",
        "value": 10,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 10,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 6,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 6,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 5,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 4,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 4,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 4,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 3,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 3,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 2,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-SL20.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 19,
        "best": "2/52",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 19,
        "best": "2/49",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 12,
        "best": "1/43",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 12,
        "best": "1/24",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 10,
        "best": "1/24",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 10,
        "best": "2/29",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 7,
        "best": "1/29",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 7,
        "best": "1/25",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 6,
        "best": "1/52",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 6,
        "best": "1/45",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 6,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 5,
        "best": "1/49",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/10-2026/04/16共收录15场有效赛事、168套有排名记录的卡组，其中上位卡组168套、冠军卡组21套。从上位职业分布看，梦魇42套（25.0%）、皇家护卫33套（19.6%）构成本范围的主要出场面，冠军侧则以精灵5套（23.8%）、梦魇5套（23.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」19套（11.3%，最好2/52）、梦魇「永火梦」19套（11.3%，最好2/49）、精灵「连击妖」12套（7.1%，最好1/43）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「八狱梦」，由NG201使用，成绩为1/52，成绩系数0.0192。整体来看，前10%成绩卡组共有64套，占全部记录38.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/04/03",
    "label": "2026/04/03-2026/04/09",
    "event_count": 20,
    "deck_count": 192,
    "top8_count": 192,
    "top1_count": 24,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 46,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 45,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 40,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 30,
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
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 8,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "梦魇｜永火梦",
        "value": 27,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 17,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 15,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 14,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 5,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 5,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 5,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 5,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 4,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 4,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 3,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 3,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-079.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 2,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜八狱教",
        "value": 2,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL01.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
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
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 31,
        "best": "1/30",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 27,
        "best": "1/49",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 17,
        "best": "1/32",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 15,
        "best": "1/37",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 14,
        "best": "1/35",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 7,
        "best": "1/30",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 5,
        "best": "1/58",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 5,
        "best": "1/27",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 5,
        "best": "1/20",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "天使皇",
        "count": 5,
        "best": "2/24",
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 5,
        "best": "2/19",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 4,
        "best": "1/32",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/03-2026/04/09共收录20场有效赛事、192套有排名记录的卡组，其中上位卡组192套、冠军卡组24套。从上位职业分布看，皇家护卫46套（24.0%）、梦魇45套（23.4%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（20.8%）、精灵5套（20.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」31套（16.1%，最好1/30）、梦魇「永火梦」27套（14.1%，最好1/49）、精灵「连击妖」17套（8.9%，最好1/32）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由床鰻の無職 ちゃんじゅま使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有75套，占全部记录39.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/03/27",
    "label": "2026/03/27-2026/04/02",
    "event_count": 17,
    "deck_count": 131,
    "top8_count": 131,
    "top1_count": 17,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 36,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 33,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 16,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 22,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 14,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 9,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 4,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 3,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 3,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
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
        "name": "主教｜八狱教",
        "value": 1,
        "link": "decktypes/decktype-a8e415a73656.html",
        "image": "../../assets/cards/BP19-SL22.jpg"
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
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 22,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 14,
        "best": "1/27",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 9,
        "best": "1/26",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 7,
        "best": "1/30",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 7,
        "best": "1/28",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 7,
        "best": "2/20",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 6,
        "best": "1/34",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "魔法使法",
        "count": 4,
        "best": "1/34",
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 4,
        "best": "1/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "主教",
        "category": "护符教",
        "count": 4,
        "best": "1/20",
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "3/27",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 3,
        "best": "1/32",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/03/27-2026/04/02共收录17场有效赛事、131套有排名记录的卡组，其中上位卡组131套、冠军卡组17套。从上位职业分布看，皇家护卫36套（27.5%）、梦魇33套（25.2%）构成本范围的主要出场面，冠军侧则以梦魇6套（35.3%）、精灵4套（23.5%）表现最突出。卡组类型方面，皇家护卫「财宝皇」22套（16.8%，最好1/34）、梦魇「永火梦」14套（10.7%，最好1/27）、精灵「八狱妖」9套（6.9%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由piro使用，成绩为1/34，成绩系数0.0294。整体来看，前10%成绩卡组共有51套，占全部记录38.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 136,
    "deck_count": 1407,
    "top8_count": 1407,
    "top1_count": 156,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 320,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 313,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 278,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 197,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 142,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 78,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 75,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SL13.jpg"
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
        "value": 32,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 30,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 27,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 22,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 10,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 201,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 127,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 116,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 114,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 84,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 83,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 68,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "Others",
        "value": 614,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 23,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 18,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 16,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 13,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 11,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 9,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 7,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "Others",
        "value": 59,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 614,
    "type_other_types": 45,
    "top1_type_other_count": 59,
    "top1_type_other_types": 22,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>6套，最好成绩 1/225</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>6套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>6套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>4套，最好成绩 1/62</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>4套，最好成绩 1/52</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html\"><b>皇家护卫｜篡夺皇</b><span>4套，最好成绩 1/43</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>4套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html\"><b>主教｜护符教</b><span>4套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html\"><b>龙族｜大哥龙</b><span>2套，最好成绩 1/49</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f2cf81b92eda.html\"><b>巫师｜魔法使法</b><span>2套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html\"><b>精灵｜人偶妖</b><span>2套，最好成绩 1/34</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html\"><b>精灵｜透京妖</b><span>2套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html\"><b>龙族｜武斗龙</b><span>2套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>2套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html\"><b>巫师｜星星法</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html\"><b>巫师｜学院法</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>1套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-200bb41cd994.html\"><b>龙族｜海洋龙</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a8e415a73656.html\"><b>主教｜八狱教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录136场有效赛事、1407套有排名记录的卡组，其中上位卡组1407套、冠军卡组156套。从上位职业分布看，皇家护卫320套（22.7%）、梦魇313套（22.2%）构成本范围的主要出场面，冠军侧则以梦魇32套（20.5%）、皇家护卫30套（19.2%）表现最突出。卡组类型方面，皇家护卫「财宝皇」201套（14.3%，最好3/910）、精灵「连击妖」127套（9.0%，最好8/910）、公主连结Re:Dive「法术PCR」116套（8.2%，最好1/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有590套，占全部记录41.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">201</td><td style=\"text-align:center\">145-157 (48.0%)</td><td style=\"text-align:center\">3/910 (0.0033)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">127</td><td style=\"text-align:center\">104-96 (52.0%)</td><td style=\"text-align:center\">8/910 (0.0088)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">116</td><td style=\"text-align:center\">112-81 (58.0%)</td><td style=\"text-align:center\">1/910 (0.0011)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">114</td><td style=\"text-align:center\">93-92 (50.3%)</td><td style=\"text-align:center\">1/210 (0.0048)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">84</td><td style=\"text-align:center\">52-64 (44.8%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">83</td><td style=\"text-align:center\">71-61 (53.8%)</td><td style=\"text-align:center\">1/48 (0.0208)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">68</td><td style=\"text-align:center\">53-52 (50.5%)</td><td style=\"text-align:center\">1/225 (0.0044)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">53</td><td style=\"text-align:center\">41-39 (51.2%)</td><td style=\"text-align:center\">5/910 (0.0055)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">50</td><td style=\"text-align:center\">52-34 (60.5%)</td><td style=\"text-align:center\">12/910 (0.0132)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">43</td><td style=\"text-align:center\">32-33 (49.2%)</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">35-34 (50.7%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">28-27 (50.9%)</td><td style=\"text-align:center\">4/910 (0.0044)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">22-25 (46.8%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">20-26 (43.5%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">13-18 (41.9%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">21-20 (51.2%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">17-19 (47.2%)</td><td style=\"text-align:center\">6/910 (0.0066)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">25-21 (54.3%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">17-15 (53.1%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">18-9 (66.7%)</td><td style=\"text-align:center\">1/62 (0.0161)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">9-16 (36.0%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">10-13 (43.5%)</td><td style=\"text-align:center\">2/225 (0.0089)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">14-9 (60.9%)</td><td style=\"text-align:center\">15/910 (0.0165)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">4-13 (23.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">12-11 (52.2%)</td><td style=\"text-align:center\">48/910 (0.0527)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-11 (45.0%)</td><td style=\"text-align:center\">61/910 (0.0670)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">10-8 (55.6%)</td><td style=\"text-align:center\">2/42 (0.0476)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html\">八狱教</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">5-7 (41.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">6/225 (0.0267)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">4/48 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-6 (50.0%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">24/225 (0.1067)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html\">八狱龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html\">大哥马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">38/910 (0.0418)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html\">涅妃PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/24 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/59 (0.1186)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">51/210 (0.2429)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">320 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 137</span>\n          <span class=\"stat-pill percent\">22.7%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>201套 (62.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>50套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>26套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>13套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>9套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>7套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>6套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP14-022.jpg\" alt=\"金币皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>4套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP18-SL05.jpg\" alt=\"透京皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">313 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 126</span>\n          <span class=\"stat-pill percent\">22.2%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>114套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>53套 (16.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>43套 (13.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>42套 (13.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>36套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>9套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>7套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>5套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-079.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">278 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 109</span>\n          <span class=\"stat-pill percent\">19.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>127套 (45.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>84套 (30.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>28套 (10.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>24套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>15套 (5.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">197 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 90</span>\n          <span class=\"stat-pill percent\">14.0%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>83套 (42.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>68套 (34.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>24套 (12.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>18套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"洋葱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-029.jpg\" alt=\"阴阳超越法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-039.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (0.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">142 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 70</span>\n          <span class=\"stat-pill percent\">10.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>116套 (81.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>20套 (14.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>4套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL01.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>2套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">78 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>30套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>27套 (34.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>14套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL15.jpg\" alt=\"八狱龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>4套 (5.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>2套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/ECP01-035.jpg\" alt=\"快攻龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">75 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">5.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>22套 (29.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>15套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>15套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>9套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>7套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-SL25.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/thumbs/ECP01-SL13.jpg\" alt=\"大哥马核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-001.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/05/15": {
    "key": "2026/05/15",
    "label": "2026/05/15-2026/05/21",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 30,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 30,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 25,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
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
        "value": 5,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
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
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 22,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 20,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 13,
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
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 6,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 6,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "Others",
        "value": 38,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 3,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      }
    ],
    "type_other_count": 38,
    "type_other_types": 19,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/15-2026/05/21共收录18场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组18套。从上位职业分布看，皇家护卫31套（21.5%）、精灵30套（20.8%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive5套（27.8%）、精灵4套（22.2%）表现最突出。卡组类型方面，公主连结Re:Dive「法术PCR」22套（15.3%，最好1/31）、皇家护卫「财宝皇」20套（13.9%，最好1/28）、精灵「连击妖」13套（9.0%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「机械法」，由はいぶらー使用，成绩为1/48，成绩系数0.0208。整体来看，前10%成绩卡组共有54套，占全部记录37.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F15\">法术PCR</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">18-18 (50.0%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F15\">财宝皇</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">21-18 (53.8%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F15\">连击妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">13-10 (56.5%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F15\">八狱法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">13-9 (59.1%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F15\">机械梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-9 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F15\">真红梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F15\">机械法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/48 (0.0208)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F15\">nc梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F15\">宇宙妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F15\">八狱妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F15\">天使皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F15\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/48 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F15\">宇宙梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/48 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F15\">透京妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F15\">武斗龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F15\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/36 (0.1389)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F15\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F15\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F15\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F15\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F15\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F15\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/48 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F15\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F15\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F15\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F05%2F15\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F15\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/31 (0.2258)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F15\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F15\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">21.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>20套 (64.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>4套 (12.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F15\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>9套 (30.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>7套 (23.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F15\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>13套 (43.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F15\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F15\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>11套 (64.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F15\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>6套 (35.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">25 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">17.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>22套 (88.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (8.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F15\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F15\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/ECP01-035.jpg\" alt=\"快攻龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F05%2F15\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F05%2F15\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/thumbs/ECP01-SL13.jpg\" alt=\"大哥马核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/05/08": {
    "key": "2026/05/08",
    "label": "2026/05/08-2026/05/14",
    "event_count": 6,
    "deck_count": 104,
    "top8_count": 104,
    "top1_count": 6,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 23,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 17,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 8,
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
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 2,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 1,
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
        "value": 14,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 12,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 11,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 7,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 6,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 35,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
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
      }
    ],
    "type_other_count": 35,
    "type_other_types": 18,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/08-2026/05/14共收录6场有效赛事、104套有排名记录的卡组，其中上位卡组104套、冠军卡组6套。从上位职业分布看，皇家护卫23套（22.1%）、精灵19套（18.3%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive2套（33.3%）、梦魇2套（33.3%）表现最突出。卡组类型方面，皇家护卫「财宝皇」14套（13.5%，最好3/910）、公主连结Re:Dive「法术PCR」12套（11.5%，最好1/910）、精灵「连击妖」11套（10.6%，最好8/910）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由ナマコ使用，成绩为1/910，成绩系数0.0011。整体来看，前10%成绩卡组共有82套，占全部记录78.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F08\">财宝皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">3/910 (0.0033)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F08\">法术PCR</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">8-5 (61.5%)</td><td style=\"text-align:center\">1/910 (0.0011)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F08\">连击妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">8/910 (0.0088)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F08\">八狱法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">7/910 (0.0077)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F08\">八狱妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">18/910 (0.0198)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F08\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/62 (0.0323)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F08\">天使皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">12/910 (0.0132)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F08\">跳费PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/62 (0.0161)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F08\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">4/910 (0.0044)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F08\">八狱梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">26/910 (0.0286)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F08\">星星法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/910 (0.0066)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F08\">武斗龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">49/910 (0.0538)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F08\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">54/910 (0.0593)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F08\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/910 (0.0055)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F08\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">29/910 (0.0319)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F08\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">41/910 (0.0451)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F08\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">53/910 (0.0582)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F08\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">5/62 (0.0806)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F08\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">15/910 (0.0165)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F08\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">37/910 (0.0407)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F08\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">38/910 (0.0418)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F08\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">48/910 (0.0527)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F08\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/33 (0.0606)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F08\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">61/910 (0.0670)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F08\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/33 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F05%2F08\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">22.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>14套 (60.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>6套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F08\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">15.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F08\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">19 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">18.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>11套 (57.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>7套 (36.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F08\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">16.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F08\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>7套 (41.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F08\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (41.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F08\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>3套 (17.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">16.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F08\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>12套 (70.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F08\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>5套 (29.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">7.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F05%2F08\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL15.jpg\" alt=\"八狱龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F05%2F08\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-SL25.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/05/01": {
    "key": "2026/05/01",
    "label": "2026/05/01-2026/05/07",
    "event_count": 25,
    "deck_count": 308,
    "top8_count": 308,
    "top1_count": 25,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 77,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 65,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 53,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 42,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 38,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 17,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
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
        "name": "💎 公主连结Re:Dive",
        "value": 8,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 4,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 2,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 52,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 34,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 24,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 20,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 19,
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
        "value": 15,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 14,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 13,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 98,
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
        "name": "皇家护卫｜财宝皇",
        "value": 3,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
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
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      }
    ],
    "type_other_count": 98,
    "type_other_types": 27,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/01-2026/05/07共收录25场有效赛事、308套有排名记录的卡组，其中上位卡组308套、冠军卡组25套。从上位职业分布看，皇家护卫77套（25.0%）、梦魇65套（21.1%）构成本范围的主要出场面，冠军侧则以公主连结Re:Dive8套（32.0%）、巫师5套（20.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」52套（16.9%，最好1/59）、公主连结Re:Dive「法术PCR」34套（11.0%，最好3/225）、精灵「连击妖」24套（7.8%，最好1/38）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由あめ使用，成绩为1/225，成绩系数0.0044。整体来看，前10%成绩卡组共有134套，占全部记录43.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F01\">财宝皇</a></td><td style=\"text-align:center\">52</td><td style=\"text-align:center\">27-29 (48.2%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F01\">法术PCR</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">32-20 (61.5%)</td><td style=\"text-align:center\">3/225 (0.0133)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F01\">连击妖</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">10-17 (37.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F01\">nc梦</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">12-11 (52.2%)</td><td style=\"text-align:center\">2/64 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F01\">机械法</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">16-10 (61.5%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F01\">八狱妖</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">2/64 (0.0313)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F01\">天使皇</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">7-9 (43.8%)</td><td style=\"text-align:center\">3/210 (0.0143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F01\">八狱法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">10-6 (62.5%)</td><td style=\"text-align:center\">1/225 (0.0044)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F01\">永火梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/210 (0.0048)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F01\">八狱梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">7/225 (0.0311)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F01\">武斗龙</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F01\">机械梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">3/64 (0.0469)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F01\">真红梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">4/55 (0.0727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F01\">跳费PCR</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">17/210 (0.0810)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F01\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">10/210 (0.0476)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F01\">控教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">14/210 (0.0667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F01\">篡夺皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F01\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">7/210 (0.0333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F01\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/225 (0.0089)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F01\">蝙蝠梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F01\">透京妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F01\">削手梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">24/225 (0.1067)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F01\">星星法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F01\">宇宙皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F01\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/52 (0.1154)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F01\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F05%2F01\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F01\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/225 (0.0267)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F01\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F01\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F01\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F01\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">27/210 (0.1286)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F01\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">54/225 (0.2400)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F05%2F01\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">51/210 (0.2429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F05%2F01\">八狱教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">57/210 (0.2714)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F01\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">77 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 32</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>52套 (67.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>15套 (19.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>6套 (7.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">21.1%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>20套 (30.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>13套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>10套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>7套 (10.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>7套 (10.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>4套 (6.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>3套 (4.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">17.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>24套 (45.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>19套 (35.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>4套 (7.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">38 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">12.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>19套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>14套 (36.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>3套 (7.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F05%2F01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-039.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">13.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>34套 (81.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>7套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F05%2F01\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>9套 (52.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>6套 (35.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F05%2F01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (11.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">4.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>6套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F05%2F01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F01\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-001.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/04/24": {
    "key": "2026/04/24",
    "label": "2026/04/24-2026/04/30",
    "event_count": 20,
    "deck_count": 224,
    "top8_count": 224,
    "top1_count": 28,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 54,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 52,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 47,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 27,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "🐉 龙族",
        "value": 13,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
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
        "image": "../../assets/cards/ECP01-SL13.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 8,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 6,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 2,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 1,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 32,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 26,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 25,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 20,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 15,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 11,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 9,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "Others",
        "value": 86,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 5,
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
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 3,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 86,
    "type_other_types": 27,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/43</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\"><b>巫师｜学院法</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F24\"><b>巫师｜星星法</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\"><b>主教｜八狱教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/17</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/24-2026/04/30共收录20场有效赛事、224套有排名记录的卡组，其中上位卡组224套、冠军卡组28套。从上位职业分布看，皇家护卫54套（24.1%）、梦魇52套（23.2%）构成本范围的主要出场面，冠军侧则以皇家护卫8套（28.6%）、精灵6套（21.4%）表现最突出。卡组类型方面，皇家护卫「财宝皇」32套（14.3%，最好1/49）、梦魇「永火梦」26套（11.6%，最好1/30）、精灵「连击妖」25套（11.2%，最好1/42）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由poyu使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有79套，占全部记录35.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F24\">财宝皇</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">19-30 (38.8%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F24\">永火梦</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">23-23 (50.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F24\">连击妖</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">27-20 (57.4%)</td><td style=\"text-align:center\">1/42 (0.0238)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F24\">法术PCR</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">20-18 (52.6%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\">八狱妖</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">8-14 (36.4%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F24\">机械法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">16-8 (66.7%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F24\">天使皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">15-4 (78.9%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F24\">nc梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F24\">八狱梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F24\">八狱法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">3/43 (0.0698)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F24\">武斗龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F24\">真红梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\">大哥龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F24\">星星法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F24\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F24\">人偶妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F24\">盗贼皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F24\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/42 (0.1190)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F24\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/42 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F24\">宇宙皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F24\">魔法使法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F04%2F24\">大哥马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F24\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F24\">透京妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/21 (0.2381)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F24\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\">八狱教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F24\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F24\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F24\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F24\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F24\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/27 (0.2593)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F24\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">24.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>32套 (59.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>9套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>3套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">23.2%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>26套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>8套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>8套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>6套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (5.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F04%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">21.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>25套 (53.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>15套 (31.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>4套 (8.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">12.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>11套 (40.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>8套 (29.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>5套 (18.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F04%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">9.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>20套 (95.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">5.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>6套 (46.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>5套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.9%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F04%2F24\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/thumbs/ECP01-SL13.jpg\" alt=\"大哥马核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/04/17": {
    "key": "2026/04/17",
    "label": "2026/04/17-2026/04/23",
    "event_count": 15,
    "deck_count": 136,
    "top8_count": 136,
    "top1_count": 17,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 30,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 28,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 20,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 16,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 10,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 4,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
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
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 2,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
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
        "image": "../../assets/cards/BP17-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 18,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 11,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 10,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 10,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 8,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 6,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 59,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 3,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
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
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      }
    ],
    "type_other_count": 59,
    "type_other_types": 24,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/17-2026/04/23共收录15场有效赛事、136套有排名记录的卡组，其中上位卡组136套、冠军卡组17套。从上位职业分布看，梦魇30套（22.1%）、精灵28套（20.6%）构成本范围的主要出场面，冠军侧则以梦魇4套（23.5%）、公主连结Re:Dive3套（17.6%）表现最突出。卡组类型方面，精灵「连击妖」18套（13.2%，最好1/25）、皇家护卫「财宝皇」11套（8.1%，最好1/34）、梦魇「永火梦」10套（7.4%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「八狱妖」，由たいせい使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有51套，占全部记录37.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F17\">连击妖</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">17-16 (51.5%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F17\">财宝皇</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">13-10 (56.5%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F17\">永火梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">11-7 (61.1%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F17\">八狱法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">7-10 (41.2%)</td><td style=\"text-align:center\">3/59 (0.0508)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F17\">法术PCR</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">10-6 (62.5%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F17\">机械法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F17\">八狱梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F17\">nc梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F17\">星星法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F17\">八狱妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F17\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F17\">护符教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">9-1 (90.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F17\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F17\">魔法使法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F17\">宇宙教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F17\">节奏教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F17\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F17\">篡夺皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F17\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F17\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F17\">透京妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F17\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F17\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/33 (0.1515)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F17\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F17\">透京皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/24 (0.3333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F17\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F17\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F17\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F04%2F17\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/59 (0.1186)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F17\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F17\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F17\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">14.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>11套 (55.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>3套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP18-SL05.jpg\" alt=\"透京皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>2套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F04%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">22.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>10套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">20.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>18套 (64.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>4套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (10.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">20.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>10套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>8套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>5套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>4套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F04%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"洋葱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">7.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>8套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL01.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>3套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>3套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/04/10": {
    "key": "2026/04/10",
    "label": "2026/04/10-2026/04/16",
    "event_count": 15,
    "deck_count": 168,
    "top8_count": 168,
    "top1_count": 21,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 42,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 33,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 33,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 24,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 15,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 12,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL22.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 1,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 19,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 19,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
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
        "name": "巫师｜机械法",
        "value": 10,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 10,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "Others",
        "value": 72,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 2,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      }
    ],
    "type_other_count": 72,
    "type_other_types": 26,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/10-2026/04/16共收录15场有效赛事、168套有排名记录的卡组，其中上位卡组168套、冠军卡组21套。从上位职业分布看，梦魇42套（25.0%）、皇家护卫33套（19.6%）构成本范围的主要出场面，冠军侧则以精灵5套（23.8%）、梦魇5套（23.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」19套（11.3%，最好2/52）、梦魇「永火梦」19套（11.3%，最好2/49）、精灵「连击妖」12套（7.1%，最好1/43）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「八狱梦」，由NG201使用，成绩为1/52，成绩系数0.0192。整体来看，前10%成绩卡组共有64套，占全部记录38.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F10\">财宝皇</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">18-17 (51.4%)</td><td style=\"text-align:center\">2/52 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F10\">永火梦</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">13-19 (40.6%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F10\">连击妖</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">14-8 (63.6%)</td><td style=\"text-align:center\">1/43 (0.0233)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F10\">法术PCR</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">17-8 (68.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F10\">机械法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F10\">八狱妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">5-10 (33.3%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F10\">八狱法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F10\">真红梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F10\">八狱梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">10-4 (71.4%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F10\">天使皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F10\">nc梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">9-5 (64.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F10\">大哥龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F10\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F10\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F10\">人偶妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F10\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F10\">魔法使法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">6/45 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F10\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/43 (0.0930)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F10\">星星法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F10\">护符教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F10\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F10\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/43 (0.0698)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F10\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/49 (0.0816)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F10\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/43 (0.1163)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F10\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F10\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F10\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F10\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F10\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F04%2F10\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F10\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F10\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F10\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F10\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">19.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>19套 (57.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>6套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (12.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP14-022.jpg\" alt=\"金币皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>19套 (45.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>7套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>6套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>6套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">19.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>12套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>10套 (30.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (15.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>4套 (12.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">14.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>10套 (41.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>7套 (29.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>4套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">8.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>12套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F04%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL20.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">5.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>5套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F04%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-SL25.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/04/03": {
    "key": "2026/04/03",
    "label": "2026/04/03-2026/04/09",
    "event_count": 20,
    "deck_count": 192,
    "top8_count": 192,
    "top1_count": 24,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 46,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 45,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 40,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 30,
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
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 8,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
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
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "梦魇｜永火梦",
        "value": 27,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 17,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 15,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 14,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "Others",
        "value": 88,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜永火梦",
        "value": 4,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 3,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 3,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      }
    ],
    "type_other_count": 88,
    "type_other_types": 33,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/04/03-2026/04/09共收录20场有效赛事、192套有排名记录的卡组，其中上位卡组192套、冠军卡组24套。从上位职业分布看，皇家护卫46套（24.0%）、梦魇45套（23.4%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（20.8%）、精灵5套（20.8%）表现最突出。卡组类型方面，皇家护卫「财宝皇」31套（16.1%，最好1/30）、梦魇「永火梦」27套（14.1%，最好1/49）、精灵「连击妖」17套（8.9%，最好1/32）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是公主连结Re:Dive「法术PCR」，由床鰻の無職 ちゃんじゅま使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有75套，占全部记录39.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F03\">财宝皇</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">26-27 (49.1%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F03\">永火梦</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">22-23 (48.9%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F03\">连击妖</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">13-16 (44.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F03\">机械法</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">14-12 (53.8%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F03\">八狱妖</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">15-11 (57.7%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F03\">八狱法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F03\">法术PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F03\">八狱梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F03\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F03\">天使皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F03\">大哥龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F03\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F03\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-3 (72.7%)</td><td style=\"text-align:center\">2/49 (0.0408)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F03\">星星法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F03\">海洋龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F03\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">6/58 (0.1034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F03\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F03\">魔法使法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/49 (0.1020)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F03\">八狱龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F03\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F03\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/27 (0.0741)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F04%2F03\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F03\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/37 (0.1622)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F03\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/27 (0.1852)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F03\">宇宙梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/35 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F03\">八狱教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F03\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F03\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F03\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F03\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2026%2F04%2F03\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F03\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/49 (0.1633)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F03\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/37 (0.1892)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F03\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F03\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F03\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F03\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F03\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">24.0%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>31套 (67.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>5套 (10.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP14-022.jpg\" alt=\"金币皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F04%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">23.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>27套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>5套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (8.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-079.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F04%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">40 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>17套 (42.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>14套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (7.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F04%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">15.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>15套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>7套 (23.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2026%2F04%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-029.jpg\" alt=\"阴阳超越法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>5套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F04%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL01.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">7.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>5套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>4套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL15.jpg\" alt=\"八狱龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>3套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F04%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">4.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F04%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/03/27": {
    "key": "2026/03/27",
    "label": "2026/03/27-2026/04/02",
    "event_count": 17,
    "deck_count": 131,
    "top8_count": 131,
    "top1_count": 17,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 36,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 33,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 16,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 6,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 2,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP14-U03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 22,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 14,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 9,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 59,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 2,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      }
    ],
    "type_other_count": 59,
    "type_other_types": 27,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/03/27-2026/04/02共收录17场有效赛事、131套有排名记录的卡组，其中上位卡组131套、冠军卡组17套。从上位职业分布看，皇家护卫36套（27.5%）、梦魇33套（25.2%）构成本范围的主要出场面，冠军侧则以梦魇6套（35.3%）、精灵4套（23.5%）表现最突出。卡组类型方面，皇家护卫「财宝皇」22套（16.8%，最好1/34）、梦魇「永火梦」14套（10.7%，最好1/27）、精灵「八狱妖」9套（6.9%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由piro使用，成绩为1/34，成绩系数0.0294。整体来看，前10%成绩卡组共有51套，占全部记录38.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F03%2F27\">财宝皇</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">18-20 (47.4%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F03%2F27\">永火梦</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">17-12 (58.6%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F03%2F27\">八狱妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F03%2F27\">连击妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F03%2F27\">真红梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">10-5 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F03%2F27\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F03%2F27\">人偶妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F03%2F27\">魔法使法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F03%2F27\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F03%2F27\">护符教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F03%2F27\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">3/27 (0.1111)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F03%2F27\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F03%2F27\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F03%2F27\">天使皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/34 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F03%2F27\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F03%2F27\">透京妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/34 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F03%2F27\">八狱梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F03%2F27\">盗贼皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F03%2F27\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F03%2F27\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F03%2F27\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F03%2F27\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F03%2F27\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F03%2F27\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/34 (0.0882)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F03%2F27\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F03%2F27\">八狱教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F03%2F27\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F03%2F27\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/34 (0.1765)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F03%2F27\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/34 (0.1765)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F03%2F27\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F03%2F27\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F03%2F27\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F03%2F27\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/19 (0.3158)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F03%2F27\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">27.5%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>22套 (61.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP14-022.jpg\" alt=\"金币皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F03%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">25.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>14套 (42.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL13.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (12.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>3套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F03%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">21.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>9套 (32.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>7套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>6套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (10.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F03%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (10.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">12.2%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F03%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F03%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F03%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">6.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a8e415a73656.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL22.jpg\" alt=\"八狱教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F03%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#主教\">⛪ 主教</a>"
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