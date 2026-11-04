(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 235,
    "deck_count": 1942,
    "top8_count": 1942,
    "top1_count": 237,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 543,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 472,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 433,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 221,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 117,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 95,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 49,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 12,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 524,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 431,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 366,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 130,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 71,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 33,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 27,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 25,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 25,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 25,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 20,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 19,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 19,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 17,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 17,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 14,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 13,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 12,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 10,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 10,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 9,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 8,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 8,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 8,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 5,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 5,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 4,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 4,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 3,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 3,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 3,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 3,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 3,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
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
        "name": "主教｜哈基米鼠鼠教",
        "value": 3,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 2,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-076.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 2,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 2,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 2,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 2,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-SL23.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 2,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP20-SL20.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "偶像大师｜三色偶像",
        "value": 1,
        "link": "decktypes/decktype-5d4feb130208.html",
        "image": "../../assets/cards/CP02-SP13.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-SL22.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 524,
        "best": "2/554",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 431,
        "best": "1/553",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 366,
        "best": "1/554",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 130,
        "best": "6/554",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 71,
        "best": "1/50",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 33,
        "best": "1/32",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 27,
        "best": "1/64",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 25,
        "best": "1/58",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 25,
        "best": "1/56",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 25,
        "best": "2/46",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 20,
        "best": "1/30",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 19,
        "best": "1/38",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录235场有效赛事、1942套有排名记录的卡组，其中上位卡组1942套、冠军卡组237套。从上位职业分布看，龙族543套（28.0%）、皇家护卫472套（24.3%）构成本范围的主要出场面，冠军侧则以巫师65套（27.4%）、皇家护卫64套（27.0%）表现最突出。卡组类型方面，龙族「五妹龙」524套（27.0%，最好2/554）、皇家护卫「财宝皇」431套（22.2%，最好1/553）、巫师「二妹法」366套（18.8%，最好1/554）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有843套，占全部记录43.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/24",
    "label": "2026/07/24-2026/07/30",
    "event_count": 8,
    "deck_count": 64,
    "top8_count": 64,
    "top1_count": 8,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 21,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 13,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 8,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 13,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 9,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 4,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 19,
        "best": "1/29",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 13,
        "best": "2/19",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 9,
        "best": "1/25",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 4,
        "best": "1/26",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 2,
        "best": "1/18",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 2,
        "best": "2/26",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 2,
        "best": "6/29",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "妖精妖",
        "count": 1,
        "best": "2/25",
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 1,
        "best": "3/19",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 1,
        "best": "4/24",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "荒野皇",
        "count": 1,
        "best": "6/25",
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "class": "偶像大师",
        "category": "passion",
        "count": 1,
        "best": "6/24",
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/24-2026/07/30共收录8场有效赛事、64套有排名记录的卡组，其中上位卡组64套、冠军卡组8套。从上位职业分布看，皇家护卫21套（32.8%）、龙族13套（20.3%）构成本范围的主要出场面，冠军侧则以巫师3套（37.5%）、皇家护卫2套（25.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」19套（29.7%，最好1/29）、龙族「五妹龙」13套（20.3%，最好2/19）、巫师「二妹法」9套（14.1%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由めめめ使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有20套，占全部记录31.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/17",
    "label": "2026/07/17-2026/07/23",
    "event_count": 20,
    "deck_count": 160,
    "top8_count": 160,
    "top1_count": 20,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 44,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 39,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 18,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
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
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 42,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 37,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 7,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 4,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "count": 42,
        "best": "1/27",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 37,
        "best": "1/36",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 36,
        "best": "1/26",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 7,
        "best": "3/24",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 4,
        "best": "1/26",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "4/24",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 4,
        "best": "5/20",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 2,
        "best": "1/20",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 2,
        "best": "5/35",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 2,
        "best": "4/27",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 2,
        "best": "4/20",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 2,
        "best": "4/17",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/17-2026/07/23共收录20场有效赛事、160套有排名记录的卡组，其中上位卡组160套、冠军卡组20套。从上位职业分布看，皇家护卫44套（27.5%）、巫师42套（26.3%）构成本范围的主要出场面，冠军侧则以龙族7套（35.0%）、皇家护卫6套（30.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」42套（26.3%，最好1/27）、龙族「五妹龙」37套（23.1%，最好1/36）、巫师「二妹法」36套（22.5%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由りあ使用，成绩为1/36，成绩系数0.0278。整体来看，前10%成绩卡组共有53套，占全部记录33.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/10",
    "label": "2026/07/10-2026/07/16",
    "event_count": 18,
    "deck_count": 159,
    "top8_count": 159,
    "top1_count": 20,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 43,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 41,
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
        "name": "🍃 精灵",
        "value": 16,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 41,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 39,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 35,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 8,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 4,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 2,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP20-SL20.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "偶像大师｜三色偶像",
        "value": 1,
        "link": "decktypes/decktype-5d4feb130208.html",
        "image": "../../assets/cards/CP02-SP13.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 41,
        "best": "1/29",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 39,
        "best": "1/27",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 35,
        "best": "1/25",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 8,
        "best": "1/40",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "1/20",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 4,
        "best": "3/40",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 4,
        "best": "5/26",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 3,
        "best": "3/28",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 2,
        "best": "1/20",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 2,
        "best": "5/29",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 2,
        "best": "6/20",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 1,
        "best": "1/20",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/10-2026/07/16共收录18场有效赛事、159套有排名记录的卡组，其中上位卡组159套、冠军卡组20套。从上位职业分布看，皇家护卫43套（27.0%）、龙族41套（25.8%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（25.0%）、龙族5套（25.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」41套（25.8%，最好1/29）、龙族「五妹龙」39套（24.5%，最好1/27）、巫师「二妹法」35套（22.0%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「猎人妖」，由タック使用，成绩为1/40，成绩系数0.0250。整体来看，前10%成绩卡组共有51套，占全部记录32.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/03",
    "label": "2026/07/03-2026/07/09",
    "event_count": 21,
    "deck_count": 168,
    "top8_count": 168,
    "top1_count": 21,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 45,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 42,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 20,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 7,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 43,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 42,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 7,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 7,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "精灵｜连击妖",
        "value": 3,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 2,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 43,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 42,
        "best": "1/30",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 36,
        "best": "1/33",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 7,
        "best": "1/30",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 7,
        "best": "3/31",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "1/17",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "2/32",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 3,
        "best": "1/17",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 2,
        "best": "1/32",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "主教",
        "category": "宇宙教",
        "count": 2,
        "best": "1/20",
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 2,
        "best": "2/33",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "涅妃PCR",
        "count": 2,
        "best": "2/19",
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/03-2026/07/09共收录21场有效赛事、168套有排名记录的卡组，其中上位卡组168套、冠军卡组21套。从上位职业分布看，皇家护卫45套（26.8%）、龙族43套（25.6%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（23.8%）、巫师5套（23.8%）表现最突出。卡组类型方面，龙族「五妹龙」43套（25.6%，最好1/37）、皇家护卫「财宝皇」42套（25.0%，最好1/30）、巫师「二妹法」36套（21.4%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ルル使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有59套，占全部记录35.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/06/26",
    "label": "2026/06/26-2026/07/02",
    "event_count": 32,
    "deck_count": 255,
    "top8_count": 255,
    "top1_count": 32,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 65,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 62,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 49,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 30,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 19,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "value": 13,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 61,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 57,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 42,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 16,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 11,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 7,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 6,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 5,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 4,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 2,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-SL23.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 61,
        "best": "1/44",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 57,
        "best": "1/45",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 42,
        "best": "1/30",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 16,
        "best": "1/32",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 11,
        "best": "1/44",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 7,
        "best": "3/31",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 6,
        "best": "4/38",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 5,
        "best": "1/27",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 5,
        "best": "5/35",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 4,
        "best": "1/36",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 4,
        "best": "2/29",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "魔法使法",
        "count": 4,
        "best": "4/35",
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/26-2026/07/02共收录32场有效赛事、255套有排名记录的卡组，其中上位卡组255套、冠军卡组32套。从上位职业分布看，龙族65套（25.5%）、皇家护卫62套（24.3%）构成本范围的主要出场面，冠军侧则以皇家护卫11套（34.4%）、巫师9套（28.1%）表现最突出。卡组类型方面，龙族「五妹龙」61套（23.9%，最好1/44）、皇家护卫「财宝皇」57套（22.4%，最好1/45）、巫师「二妹法」42套（16.5%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由ちゃん使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有106套，占全部记录41.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/06/19",
    "label": "2026/06/19-2026/06/25",
    "event_count": 23,
    "deck_count": 184,
    "top8_count": 184,
    "top1_count": 23,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 52,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🍃 精灵",
        "value": 24,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 11,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
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
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 48,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 42,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 35,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 14,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 6,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-076.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-SL23.jpg"
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
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 48,
        "best": "1/53",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 42,
        "best": "1/47",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 35,
        "best": "1/59",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 14,
        "best": "2/53",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 6,
        "best": "2/19",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 5,
        "best": "1/17",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 3,
        "best": "1/24",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 3,
        "best": "2/20",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 2,
        "best": "5/50",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 2,
        "best": "5/25",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 2,
        "best": "7/25",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 2,
        "best": "7/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/19-2026/06/25共收录23场有效赛事、184套有排名记录的卡组，其中上位卡组184套、冠军卡组23套。从上位职业分布看，皇家护卫52套（28.3%）、龙族43套（23.4%）构成本范围的主要出场面，冠军侧则以皇家护卫7套（30.4%）、龙族7套（30.4%）表现最突出。卡组类型方面，皇家护卫「财宝皇」48套（26.1%，最好1/53）、龙族「五妹龙」42套（22.8%，最好1/47）、巫师「二妹法」35套（19.0%，最好1/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由からし使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有74套，占全部记录40.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/06/12",
    "label": "2026/06/12-2026/06/18",
    "event_count": 43,
    "deck_count": 344,
    "top8_count": 344,
    "top1_count": 43,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 119,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 87,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 61,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "💀 梦魇",
        "value": 19,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 113,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 79,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 54,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 23,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 16,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 6,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 5,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 5,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 4,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜恶魔莱拉PCR",
        "value": 1,
        "link": "decktypes/decktype-db63b51c106d.html",
        "image": "../../assets/cards/CP04-076.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
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
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 113,
        "best": "1/58",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 79,
        "best": "1/64",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 54,
        "best": "1/52",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 23,
        "best": "1/51",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 16,
        "best": "1/50",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 6,
        "best": "1/64",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "盗贼皇",
        "count": 5,
        "best": "3/33",
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "魔法使法",
        "count": 5,
        "best": "2/18",
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 4,
        "best": "1/27",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 4,
        "best": "2/31",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 3,
        "best": "1/30",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 3,
        "best": "2/24",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/12-2026/06/18共收录43场有效赛事、344套有排名记录的卡组，其中上位卡组344套、冠军卡组43套。从上位职业分布看，龙族119套（34.6%）、皇家护卫87套（25.3%）构成本范围的主要出场面，冠军侧则以龙族14套（32.6%）、皇家护卫13套（30.2%）表现最突出。卡组类型方面，龙族「五妹龙」113套（32.8%，最好1/58）、皇家护卫「财宝皇」79套（23.0%，最好1/64）、巫师「二妹法」54套（15.7%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由カルム使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有169套，占全部记录49.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/06/05",
    "label": "2026/06/05-2026/06/11",
    "event_count": 12,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 12,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 45,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 36,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 18,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 45,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 32,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 28,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 12,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 45,
        "best": "2/554",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 32,
        "best": "1/554",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 28,
        "best": "1/553",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 12,
        "best": "6/554",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 3,
        "best": "31/554",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 3,
        "best": "31/553",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 2,
        "best": "1/56",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 2,
        "best": "16/553",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "魔法使法",
        "count": 2,
        "best": "20/553",
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "class": "偶像大师",
        "category": "cool",
        "count": 1,
        "best": "12/553",
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "盗贼皇",
        "count": 1,
        "best": "15/553",
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 1,
        "best": "17/554",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/05-2026/06/11共收录12场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组12套。从上位职业分布看，龙族45套（31.3%）、巫师36套（25.0%）构成本范围的主要出场面，冠军侧则以巫师4套（33.3%）、皇家护卫3套（25.0%）表现最突出。卡组类型方面，龙族「五妹龙」45套（31.3%，最好2/554）、巫师「二妹法」32套（22.2%，最好1/554）、皇家护卫「财宝皇」28套（19.4%，最好1/553）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有98套，占全部记录68.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/29",
    "label": "2026/05/29-2026/06/04",
    "event_count": 32,
    "deck_count": 256,
    "top8_count": 256,
    "top1_count": 32,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 82,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 63,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 48,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 26,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "💀 梦魇",
        "value": 13,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
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
        "name": "巫师｜二妹法",
        "value": 51,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 41,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 18,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 15,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 7,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
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
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP20-SL20.jpg"
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
        "class": "龙族",
        "category": "五妹龙",
        "count": 80,
        "best": "1/55",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 51,
        "best": "1/47",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 41,
        "best": "1/64",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 18,
        "best": "1/21",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 15,
        "best": "1/46",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 7,
        "best": "1/32",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 7,
        "best": "2/44",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 6,
        "best": "2/46",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 3,
        "best": "1/23",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 3,
        "best": "3/44",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 3,
        "best": "3/31",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "主教",
        "category": "纹章教",
        "count": 2,
        "best": "7/55",
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/29-2026/06/04共收录32场有效赛事、256套有排名记录的卡组，其中上位卡组256套、冠军卡组32套。从上位职业分布看，龙族82套（32.0%）、巫师63套（24.6%）构成本范围的主要出场面，冠军侧则以巫师11套（34.4%）、龙族9套（28.1%）表现最突出。卡组类型方面，龙族「五妹龙」80套（31.3%，最好1/55）、巫师「二妹法」51套（19.9%，最好1/47）、皇家护卫「财宝皇」41套（16.0%，最好1/64）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由yu-ji使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有119套，占全部记录46.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/05/22",
    "label": "2026/05/22-2026/05/28",
    "event_count": 26,
    "deck_count": 208,
    "top8_count": 208,
    "top1_count": 26,
    "class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 54,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 53,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 40,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 14,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 51,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 34,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 23,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 9,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 5,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 5,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 4,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-SL22.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 51,
        "best": "1/33",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 36,
        "best": "1/51",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 34,
        "best": "1/58",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 23,
        "best": "1/57",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 9,
        "best": "1/30",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 8,
        "best": "1/41",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 5,
        "best": "1/20",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 5,
        "best": "3/18",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 4,
        "best": "1/38",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 4,
        "best": "2/38",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 4,
        "best": "4/41",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "8/38",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/22-2026/05/28共收录26场有效赛事、208套有排名记录的卡组，其中上位卡组208套、冠军卡组26套。从上位职业分布看，巫师54套（26.0%）、龙族53套（25.5%）构成本范围的主要出场面，冠军侧则以巫师8套（30.8%）、皇家护卫5套（19.2%）表现最突出。卡组类型方面，龙族「五妹龙」51套（24.5%，最好1/33）、巫师「二妹法」36套（17.3%，最好1/51）、皇家护卫「财宝皇」34套（16.3%，最好1/58）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由セブン使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有94套，占全部记录45.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 235,
    "deck_count": 1942,
    "top8_count": 1942,
    "top1_count": 237,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 543,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 472,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 433,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 221,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 117,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 95,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 49,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 12,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 65,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 64,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 59,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 21,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 16,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 6,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
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
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 524,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 431,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 366,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 130,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 491,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 63,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 59,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 58,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 12,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 11,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 34,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 491,
    "type_other_types": 53,
    "top1_type_other_count": 34,
    "top1_type_other_types": 17,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>5套，最好成绩 1/38</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html\"><b>精灵｜人偶妖</b><span>5套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>4套，最好成绩 1/64</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>3套，最好成绩 1/58</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>3套，最好成绩 1/56</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>2套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html\"><b>巫师｜九爷法</b><span>2套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>1套，最好成绩 1/41</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html\"><b>主教｜机械教</b><span>1套，最好成绩 1/22</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html\"><b>主教｜宇宙教</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c068a8ef6610.html\"><b>主教｜纹章教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/18</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录235场有效赛事、1942套有排名记录的卡组，其中上位卡组1942套、冠军卡组237套。从上位职业分布看，龙族543套（28.0%）、皇家护卫472套（24.3%）构成本范围的主要出场面，冠军侧则以巫师65套（27.4%）、皇家护卫64套（27.0%）表现最突出。卡组类型方面，龙族「五妹龙」524套（27.0%，最好2/554）、皇家护卫「财宝皇」431套（22.2%，最好1/553）、巫师「二妹法」366套（18.8%，最好1/554）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有843套，占全部记录43.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">524</td><td style=\"text-align:center\">424-455 (48.2%)</td><td style=\"text-align:center\">2/554 (0.0036)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">431</td><td style=\"text-align:center\">425-363 (53.9%)</td><td style=\"text-align:center\">1/553 (0.0018)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">366</td><td style=\"text-align:center\">366-291 (55.7%)</td><td style=\"text-align:center\">1/554 (0.0018)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">130</td><td style=\"text-align:center\">103-114 (47.5%)</td><td style=\"text-align:center\">6/554 (0.0108)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">71</td><td style=\"text-align:center\">60-59 (50.4%)</td><td style=\"text-align:center\">1/50 (0.0200)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">30-27 (52.6%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">20-22 (47.6%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">18-21 (46.2%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">18-21 (46.2%)</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">16-25 (39.0%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">8-19 (29.6%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">26-14 (65.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html\">九爷法</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">15-17 (46.9%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">10-14 (41.7%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">12-16 (42.9%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">4-13 (23.5%)</td><td style=\"text-align:center\">20/553 (0.0362)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-13 (40.9%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">3-11 (21.4%)</td><td style=\"text-align:center\">15/553 (0.0271)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">0-9 (0.0%)</td><td style=\"text-align:center\">16/553 (0.0289)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">6-10 (37.5%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-8 (52.9%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">12/553 (0.0217)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-8 (38.5%)</td><td style=\"text-align:center\">2/47 (0.0426)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">29/554 (0.0523)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/44 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">25/554 (0.0451)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html\">涅妃PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html\">passion</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/41 (0.1220)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/35 (0.1714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html\">林德龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html\">妖怪梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/36 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-5d4feb130208.html\">三色偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">543 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 233</span>\n          <span class=\"stat-pill percent\">28.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>524套 (96.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>6套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-057.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/ECP01-035.jpg\" alt=\"快攻龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>2套 (0.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP09-055.jpg\" alt=\"林德龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>2套 (0.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">472 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 219</span>\n          <span class=\"stat-pill percent\">24.3%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>431套 (91.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>13套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>12套 (2.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>5套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>4套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">433 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 208</span>\n          <span class=\"stat-pill percent\">22.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>366套 (84.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>25套 (5.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>19套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>14套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-035.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">221 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 87</span>\n          <span class=\"stat-pill percent\">11.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>130套 (58.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>33套 (14.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>25套 (11.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>17套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>10套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL01.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>3套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">12 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>27套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>25套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>20套 (17.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>10套 (8.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>9套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>8套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>8套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-SL20.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-SL22.jpg\" alt=\"抉择梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">95 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 41</span>\n          <span class=\"stat-pill percent\">4.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>71套 (74.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>19套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>3套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-076.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>17套 (34.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>9套 (18.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (10.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-U06.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (10.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>4套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-343.jpg\" alt=\"机械教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械教</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-SL25.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>8套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/ECP02-SL31.jpg\" alt=\"passion核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>passion</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CP02-SP13.jpg\" alt=\"三色偶像核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/07/24": {
    "key": "2026/07/24",
    "label": "2026/07/24-2026/07/30",
    "event_count": 8,
    "deck_count": 64,
    "top8_count": 64,
    "top1_count": 8,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 21,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 13,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 8,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 13,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 9,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 4,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "Others",
        "value": 19,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 3,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "type_other_count": 19,
    "type_other_types": 16,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/24-2026/07/30共收录8场有效赛事、64套有排名记录的卡组，其中上位卡组64套、冠军卡组8套。从上位职业分布看，皇家护卫21套（32.8%）、龙族13套（20.3%）构成本范围的主要出场面，冠军侧则以巫师3套（37.5%）、皇家护卫2套（25.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」19套（29.7%，最好1/29）、龙族「五妹龙」13套（20.3%，最好2/19）、巫师「二妹法」9套（14.1%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由めめめ使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有20套，占全部记录31.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F24\">财宝皇</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">17-17 (50.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F24\">五妹龙</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">9-13 (40.9%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F24\">二妹法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">13-6 (68.4%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F24\">蝙蝠梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-2 (77.8%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F24\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F24\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F24\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/29 (0.2069)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F24\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F24\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F24\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F07%2F24\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/25 (0.2400)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F07%2F24\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F24\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F24\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F24\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F24\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F07%2F24\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F24\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F24\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/24 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F24\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">20.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>13套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">32.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>19套 (90.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F07%2F24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">15.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>9套 (90.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">10.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL01.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>4套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">4.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F07%2F24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F07%2F24\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/ECP02-SL31.jpg\" alt=\"passion核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/07/17": {
    "key": "2026/07/17",
    "label": "2026/07/17-2026/07/23",
    "event_count": 20,
    "deck_count": 160,
    "top8_count": 160,
    "top1_count": 20,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 44,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 39,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 18,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
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
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 6,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 42,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 37,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 7,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 7,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 6,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 5,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "type_other_count": 38,
    "type_other_types": 23,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/17-2026/07/23共收录20场有效赛事、160套有排名记录的卡组，其中上位卡组160套、冠军卡组20套。从上位职业分布看，皇家护卫44套（27.5%）、巫师42套（26.3%）构成本范围的主要出场面，冠军侧则以龙族7套（35.0%）、皇家护卫6套（30.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」42套（26.3%，最好1/27）、龙族「五妹龙」37套（23.1%，最好1/36）、巫师「二妹法」36套（22.5%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由りあ使用，成绩为1/36，成绩系数0.0278。整体来看，前10%成绩卡组共有53套，占全部记录33.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F17\">财宝皇</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">39-36 (52.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F17\">五妹龙</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">45-30 (60.0%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F17\">二妹法</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">34-31 (52.3%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F17\">猎人妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F17\">人偶妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F17\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F17\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F17\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F17\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F17\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F17\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F17\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F07%2F17\">真红梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F17\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F17\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F07%2F17\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F17\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F07%2F17\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F17\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/25 (0.2400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F17\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/19 (0.2632)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F07%2F17\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F17\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F07%2F17\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F17\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F17\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F17\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F07%2F17\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">24.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>37套 (94.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F07%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F07%2F17\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">27.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>42套 (95.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F17\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (4.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">26.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>36套 (85.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F07%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F17\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>7套 (38.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>4套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F07%2F17\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F17\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F17\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F17\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F07%2F17\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/ECP02-SL31.jpg\" alt=\"passion核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/07/10": {
    "key": "2026/07/10",
    "label": "2026/07/10-2026/07/16",
    "event_count": 18,
    "deck_count": 159,
    "top8_count": 159,
    "top1_count": 20,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 43,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 41,
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
        "name": "🍃 精灵",
        "value": 16,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 2,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 41,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 39,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 35,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 8,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 5,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "type_other_count": 36,
    "type_other_types": 22,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/10-2026/07/16共收录18场有效赛事、159套有排名记录的卡组，其中上位卡组159套、冠军卡组20套。从上位职业分布看，皇家护卫43套（27.0%）、龙族41套（25.8%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（25.0%）、龙族5套（25.0%）表现最突出。卡组类型方面，皇家护卫「财宝皇」41套（25.8%，最好1/29）、龙族「五妹龙」39套（24.5%，最好1/27）、巫师「二妹法」35套（22.0%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「猎人妖」，由タック使用，成绩为1/40，成绩系数0.0250。整体来看，前10%成绩卡组共有51套，占全部记录32.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F10\">财宝皇</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">43-36 (54.4%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F10\">五妹龙</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">32-34 (48.5%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F10\">二妹法</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">34-30 (53.1%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F10\">猎人妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F10\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F07%2F10\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">3/40 (0.0750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F10\">宇宙妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">5/26 (0.1923)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F10\">八狱法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/28 (0.1071)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F10\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F10\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">5/29 (0.1724)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F10\">八狱妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F10\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F10\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F07%2F10\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F10\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F10\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/40 (0.1500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F07%2F10\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F07%2F10\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F07%2F10\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/27 (0.1852)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F10\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F07%2F10\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F07%2F10\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/25 (0.2800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F10\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026%2F07%2F10\">三色偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F10\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F07%2F10\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">41 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">25.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>39套 (95.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F07%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F07%2F10\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-057.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">27.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>41套 (95.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F07%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F07%2F10\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">38 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">23.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>35套 (92.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F10\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>3套 (7.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">10.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>8套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F10\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-SL20.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F10\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F10\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-U06.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F07%2F10\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F07%2F10\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026%2F07%2F10\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CP02-SP13.jpg\" alt=\"三色偶像核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/07/03": {
    "key": "2026/07/03",
    "label": "2026/07/03-2026/07/09",
    "event_count": 21,
    "deck_count": 168,
    "top8_count": 168,
    "top1_count": 21,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 45,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 42,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 20,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 7,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "top1_class_distribution": [
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 4,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 2,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 43,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 42,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 7,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 7,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 33,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 5,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
      }
    ],
    "type_other_count": 33,
    "type_other_types": 19,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/03-2026/07/09共收录21场有效赛事、168套有排名记录的卡组，其中上位卡组168套、冠军卡组21套。从上位职业分布看，皇家护卫45套（26.8%）、龙族43套（25.6%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（23.8%）、巫师5套（23.8%）表现最突出。卡组类型方面，龙族「五妹龙」43套（25.6%，最好1/37）、皇家护卫「财宝皇」42套（25.0%，最好1/30）、巫师「二妹法」36套（21.4%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ルル使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有59套，占全部记录35.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F03\">五妹龙</a></td><td style=\"text-align:center\">43</td><td style=\"text-align:center\">37-39 (48.7%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F03\">财宝皇</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">35-37 (48.6%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F03\">二妹法</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">36-31 (53.7%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F03\">猎人妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-6 (50.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F03\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F03\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F03\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">2/32 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F03\">连击妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F03\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">6-0 (100.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F07%2F03\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F03\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/33 (0.0606)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F07%2F03\">涅妃PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F03\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/33 (0.1515)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F07%2F03\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F07%2F03\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F03\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/28 (0.1071)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F07%2F03\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F03\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F03\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F03\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F03\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/25 (0.2800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F07%2F03\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F07%2F03\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F03\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">25.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>43套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">26.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>42套 (93.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F07%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F07%2F03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>36套 (85.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F07%2F03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>7套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>7套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>3套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">3.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F07%2F03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F07%2F03\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F07%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F07%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-343.jpg\" alt=\"机械教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F07%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/06/26": {
    "key": "2026/06/26",
    "label": "2026/06/26-2026/07/02",
    "event_count": 32,
    "deck_count": 255,
    "top8_count": 255,
    "top1_count": 32,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 65,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 62,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 49,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 30,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 19,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "value": 13,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
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
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 4,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 61,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 57,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 42,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 16,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 11,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 68,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 10,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 8,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 4,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 68,
    "type_other_types": 29,
    "top1_type_other_count": 4,
    "top1_type_other_types": 4,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F26\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/58</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F26\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F06%2F26\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F26\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/18</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/26-2026/07/02共收录32场有效赛事、255套有排名记录的卡组，其中上位卡组255套、冠军卡组32套。从上位职业分布看，龙族65套（25.5%）、皇家护卫62套（24.3%）构成本范围的主要出场面，冠军侧则以皇家护卫11套（34.4%）、巫师9套（28.1%）表现最突出。卡组类型方面，龙族「五妹龙」61套（23.9%，最好1/44）、皇家护卫「财宝皇」57套（22.4%，最好1/45）、巫师「二妹法」42套（16.5%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由ちゃん使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有106套，占全部记录41.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F26\">五妹龙</a></td><td style=\"text-align:center\">61</td><td style=\"text-align:center\">40-56 (41.7%)</td><td style=\"text-align:center\">1/44 (0.0227)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F26\">财宝皇</a></td><td style=\"text-align:center\">57</td><td style=\"text-align:center\">60-47 (56.1%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F26\">二妹法</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">47-34 (58.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F26\">猎人妖</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">17-14 (54.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F26\">法术PCR</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">17-8 (68.0%)</td><td style=\"text-align:center\">1/44 (0.0227)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F26\">蝙蝠梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F26\">节奏教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/38 (0.1053)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F06%2F26\">宇宙妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F26\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F26\">跳费PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F26\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F26\">魔法使法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/35 (0.1143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F26\">八狱法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F26\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F06%2F26\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/44 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F26\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F26\">八狱妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F26\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F06%2F26\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/36 (0.2222)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F26\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/35 (0.2286)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F26\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/18 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F26\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F06%2F26\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F06%2F26\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F26\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/38 (0.1316)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F26\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F06%2F26\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/35 (0.1714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F26\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/44 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F06%2F26\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/32 (0.1875)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F06%2F26\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F26\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F06%2F26\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F06%2F26\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F06%2F26\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/23 (0.3478)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">25.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>61套 (93.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F06%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F06%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F06%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-057.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">62 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">24.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>57套 (91.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">19.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>42套 (85.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>4套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>16套 (53.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>5套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">19 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">7.5%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>7套 (36.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (21.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (15.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F06%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">5.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F26\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>11套 (73.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F26\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">5.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>6套 (46.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP18-SL25.jpg\" alt=\"耶拉教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-U06.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-343.jpg\" alt=\"机械教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F06%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F26\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/06/19": {
    "key": "2026/06/19",
    "label": "2026/06/19-2026/06/25",
    "event_count": 23,
    "deck_count": 184,
    "top8_count": 184,
    "top1_count": 23,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 52,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🍃 精灵",
        "value": 24,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 11,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
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
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 7,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
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
        "image": "../../assets/cards/CP04-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 48,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 42,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 35,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 14,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 45,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 7,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      }
    ],
    "type_other_count": 45,
    "type_other_types": 27,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/19-2026/06/25共收录23场有效赛事、184套有排名记录的卡组，其中上位卡组184套、冠军卡组23套。从上位职业分布看，皇家护卫52套（28.3%）、龙族43套（23.4%）构成本范围的主要出场面，冠军侧则以皇家护卫7套（30.4%）、龙族7套（30.4%）表现最突出。卡组类型方面，皇家护卫「财宝皇」48套（26.1%，最好1/53）、龙族「五妹龙」42套（22.8%，最好1/47）、巫师「二妹法」35套（19.0%，最好1/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由からし使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有74套，占全部记录40.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F19\">财宝皇</a></td><td style=\"text-align:center\">48</td><td style=\"text-align:center\">49-41 (54.4%)</td><td style=\"text-align:center\">1/53 (0.0189)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F19\">五妹龙</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">37-35 (51.4%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F19\">二妹法</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">35-28 (55.6%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F19\">猎人妖</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">8-14 (36.4%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F19\">法术PCR</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F19\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F19\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F19\">蝙蝠梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F06%2F19\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/50 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F19\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F19\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/25 (0.2800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F19\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F19\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F19\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F06%2F19\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F06%2F19\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F19\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/47 (0.0851)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F06%2F19\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F06%2F19\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F19\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F19\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F19\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F19\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F06%2F19\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F06%2F19\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F06%2F19\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F19\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F19\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F19\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F19\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F19\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">23.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>42套 (97.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F06%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">28.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>48套 (92.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F06%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">38 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">20.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>35套 (92.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F06%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">13.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>14套 (58.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (20.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F06%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F19\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>6套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F19\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F06%2F19\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-076.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F06%2F19\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F06%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F19\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/06/12": {
    "key": "2026/06/12",
    "label": "2026/06/12-2026/06/18",
    "event_count": 43,
    "deck_count": 344,
    "top8_count": 344,
    "top1_count": 43,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 119,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 87,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 61,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "💀 梦魇",
        "value": 19,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 14,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 13,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "💀 梦魇",
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 113,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 79,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 54,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 23,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 16,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "value": 13,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 13,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
    "type_other_count": 59,
    "type_other_types": 28,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F12\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/64</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F12\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/33</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F12\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F12\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F12\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F06%2F12\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/23</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/12-2026/06/18共收录43场有效赛事、344套有排名记录的卡组，其中上位卡组344套、冠军卡组43套。从上位职业分布看，龙族119套（34.6%）、皇家护卫87套（25.3%）构成本范围的主要出场面，冠军侧则以龙族14套（32.6%）、皇家护卫13套（30.2%）表现最突出。卡组类型方面，龙族「五妹龙」113套（32.8%，最好1/58）、皇家护卫「财宝皇」79套（23.0%，最好1/64）、巫师「二妹法」54套（15.7%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由カルム使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有169套，占全部记录49.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F12\">五妹龙</a></td><td style=\"text-align:center\">113</td><td style=\"text-align:center\">89-100 (47.1%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F12\">财宝皇</a></td><td style=\"text-align:center\">79</td><td style=\"text-align:center\">84-66 (56.0%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F12\">二妹法</a></td><td style=\"text-align:center\">54</td><td style=\"text-align:center\">53-47 (53.0%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F12\">猎人妖</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">16-21 (43.2%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F12\">法术PCR</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">13-14 (48.1%)</td><td style=\"text-align:center\">1/50 (0.0200)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F12\">蝙蝠梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F12\">盗贼皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F12\">魔法使法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F12\">人偶妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F12\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F12\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F12\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F12\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F12\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F12\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/64 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F06%2F12\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/64 (0.1094)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F06%2F12\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/50 (0.1400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F12\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/33 (0.1515)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F12\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F12\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F06%2F12\">恶魔莱拉PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F12\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F06%2F12\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F06%2F12\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F12\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/64 (0.0781)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F12\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F06%2F12\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F12\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/23 (0.1304)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F06%2F12\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F06%2F12\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/31 (0.2581)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F06%2F12\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F12\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/27 (0.2963)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F12\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">119 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 54</span>\n          <span class=\"stat-pill percent\">34.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>113套 (95.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/ECP01-035.jpg\" alt=\"快攻龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP09-055.jpg\" alt=\"林德龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F06%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-057.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">87 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 47</span>\n          <span class=\"stat-pill percent\">25.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>79套 (90.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>5套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F06%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F06%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-SL05.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">61 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 32</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>54套 (88.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>5套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">9.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>23套 (74.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>4套 (12.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F06%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL01.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">19 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>6套 (31.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (21.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (15.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (10.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (10.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F06%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (5.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">5.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F12\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>16套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F06%2F12\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db63b51c106d.html?scope=2026%2F06%2F12\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-076.jpg\" alt=\"恶魔莱拉PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>恶魔莱拉PCR</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">1.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F06%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-U06.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F12\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/06/05": {
    "key": "2026/06/05",
    "label": "2026/06/05-2026/06/11",
    "event_count": 12,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 12,
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
        "name": "🔮 巫师",
        "value": 36,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 18,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🐉 龙族",
        "value": 3,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 45,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 32,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 28,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 12,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 27,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 4,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 3,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 3,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "type_other_count": 27,
    "type_other_types": 20,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/06/05-2026/06/11共收录12场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组12套。从上位职业分布看，龙族45套（31.3%）、巫师36套（25.0%）构成本范围的主要出场面，冠军侧则以巫师4套（33.3%）、皇家护卫3套（25.0%）表现最突出。卡组类型方面，龙族「五妹龙」45套（31.3%，最好2/554）、巫师「二妹法」32套（22.2%，最好1/554）、皇家护卫「财宝皇」28套（19.4%，最好1/553）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有98套，占全部记录68.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F05\">五妹龙</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">25-31 (44.6%)</td><td style=\"text-align:center\">2/554 (0.0036)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F05\">二妹法</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">20-12 (62.5%)</td><td style=\"text-align:center\">1/554 (0.0018)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F05\">财宝皇</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">23-20 (53.5%)</td><td style=\"text-align:center\">1/553 (0.0018)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F05\">猎人妖</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">6/554 (0.0108)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F05\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">31/554 (0.0560)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F05\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">31/553 (0.0561)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F05\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F05\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">16/553 (0.0289)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F05\">魔法使法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">20/553 (0.0362)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F05\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">12/553 (0.0217)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F05\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">15/553 (0.0271)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F05\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">17/554 (0.0307)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F05\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">24/554 (0.0433)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F06%2F05\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">25/554 (0.0451)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F05\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">27/554 (0.0487)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F05\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">29/554 (0.0523)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F05\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F05\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/56 (0.0893)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F06%2F05\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F06%2F05\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F05\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F06%2F05\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/26 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F05\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F05\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">31.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F06%2F05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>45套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F06%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>28套 (93.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F06%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F06%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F06%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>32套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F06%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F06%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F06%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F06%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>12套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F06%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F06%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F06%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F06%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F06%2F05\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F06%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F06%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-U06.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F06%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F06%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F06%2F05\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/05/29": {
    "key": "2026/05/29",
    "label": "2026/05/29-2026/06/04",
    "event_count": 32,
    "deck_count": 256,
    "top8_count": 256,
    "top1_count": 32,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 82,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 63,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 48,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 26,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "💀 梦魇",
        "value": 13,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 7,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 2,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "巫师｜二妹法",
        "value": 51,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 41,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 18,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 15,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 51,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 8,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 51,
    "type_other_types": 24,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F29\"><b>巫师｜机械法</b><span>1套，最好成绩 1/41</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F29\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F29\"><b>巫师｜九爷法</b><span>1套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F29\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F05%2F29\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/21</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/29-2026/06/04共收录32场有效赛事、256套有排名记录的卡组，其中上位卡组256套、冠军卡组32套。从上位职业分布看，龙族82套（32.0%）、巫师63套（24.6%）构成本范围的主要出场面，冠军侧则以巫师11套（34.4%）、龙族9套（28.1%）表现最突出。卡组类型方面，龙族「五妹龙」80套（31.3%，最好1/55）、巫师「二妹法」51套（19.9%，最好1/47）、皇家护卫「财宝皇」41套（16.0%，最好1/64）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由yu-ji使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有119套，占全部记录46.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F05%2F29\">五妹龙</a></td><td style=\"text-align:center\">80</td><td style=\"text-align:center\">73-71 (50.7%)</td><td style=\"text-align:center\">1/55 (0.0182)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F05%2F29\">二妹法</a></td><td style=\"text-align:center\">51</td><td style=\"text-align:center\">57-43 (57.0%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F29\">财宝皇</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">39-34 (53.4%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F05%2F29\">猎人妖</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">10-17 (37.0%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F29\">法术PCR</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-12 (47.8%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F29\">九爷法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-6 (50.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F29\">连击妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F29\">nc梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F29\">八狱法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F29\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/44 (0.0682)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F29\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F05%2F29\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/55 (0.1273)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F29\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/44 (0.1591)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F29\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F29\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/28 (0.2143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F29\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F29\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F05%2F29\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/47 (0.0426)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F29\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/34 (0.0882)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F29\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/44 (0.1136)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F29\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F05%2F29\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/41 (0.1220)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F29\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/31 (0.1613)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F29\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F29\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/26 (0.2308)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F29\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F29\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F29\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/18 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F29\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">82 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 40</span>\n          <span class=\"stat-pill percent\">32.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F05%2F29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>80套 (97.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F05%2F29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-SL15.jpg\" alt=\"大哥龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F05%2F29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/ECP01-035.jpg\" alt=\"快攻龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">18.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>41套 (85.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F05%2F29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F05%2F29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">63 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 35</span>\n          <span class=\"stat-pill percent\">24.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F05%2F29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>51套 (81.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>7套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>3套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F05%2F29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-035.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">10.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F05%2F29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>18套 (69.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>7套 (26.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (3.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">5.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>6套 (46.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F05%2F29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-SL20.jpg\" alt=\"怨灵梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">6.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F29\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>15套 (88.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F29\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (11.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F05%2F29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F05%2F29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F05%2F29\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/ECP02-SL31.jpg\" alt=\"passion核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F05%2F29\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-SL01.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/05/22": {
    "key": "2026/05/22",
    "label": "2026/05/22-2026/05/28",
    "event_count": 26,
    "deck_count": 208,
    "top8_count": 208,
    "top1_count": 26,
    "top8_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 54,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 53,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 40,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 14,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 51,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 34,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 23,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 9,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "Others",
        "value": 55,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 3,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 3,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 55,
    "type_other_types": 25,
    "top1_type_other_count": 3,
    "top1_type_other_types": 3,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F22\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/41</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F22\"><b>巫师｜九爷法</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F22\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/20</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/05/22-2026/05/28共收录26场有效赛事、208套有排名记录的卡组，其中上位卡组208套、冠军卡组26套。从上位职业分布看，巫师54套（26.0%）、龙族53套（25.5%）构成本范围的主要出场面，冠军侧则以巫师8套（30.8%）、皇家护卫5套（19.2%）表现最突出。卡组类型方面，龙族「五妹龙」51套（24.5%，最好1/33）、巫师「二妹法」36套（17.3%，最好1/51）、皇家护卫「财宝皇」34套（16.3%，最好1/58）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由セブン使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有94套，占全部记录45.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F05%2F22\">五妹龙</a></td><td style=\"text-align:center\">51</td><td style=\"text-align:center\">37-46 (44.6%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F05%2F22\">二妹法</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">37-29 (56.1%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F22\">财宝皇</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">36-29 (55.4%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F05%2F22\">猎人妖</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">25-20 (55.6%)</td><td style=\"text-align:center\">1/57 (0.0175)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F22\">九爷法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F22\">法术PCR</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F22\">连击妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F22\">真红梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F22\">跳费PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">9-1 (90.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F22\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F22\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/41 (0.0976)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F22\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">8/38 (0.2105)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F22\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/58 (0.0862)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F05%2F22\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/38 (0.1053)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F22\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F05%2F22\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F22\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F22\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F22\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F22\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/38 (0.1316)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F22\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F22\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/32 (0.1563)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F05%2F22\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/38 (0.1579)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F22\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F22\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F22\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F22\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F22\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F05%2F22\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F22\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">25.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F05%2F22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>51套 (96.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F05%2F22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP09-055.jpg\" alt=\"林德龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F05%2F22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP18-SL13.jpg\" alt=\"武斗龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">40 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">19.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F05%2F22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>34套 (85.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F05%2F22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F05%2F22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL04.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F05%2F22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F05%2F22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">26.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F05%2F22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>36套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F05%2F22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>9套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F05%2F22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F05%2F22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F05%2F22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-SL08.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">14.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F05%2F22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>23套 (74.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F05%2F22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>5套 (16.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F05%2F22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F05%2F22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F05%2F22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-SL01.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">6.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP11-SL15.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F05%2F22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-SL22.jpg\" alt=\"抉择梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">5.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F05%2F22\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>8套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F05%2F22\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F05%2F22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F05%2F22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP19-SL23.jpg\" alt=\"护符教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F05%2F22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a>"
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