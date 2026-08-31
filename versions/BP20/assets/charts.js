(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 351,
    "deck_count": 2921,
    "top8_count": 2452,
    "top1_count": 365,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 843,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 652,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 652,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 321,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 189,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 154,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 81,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 25,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 800,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 577,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 537,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 186,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 111,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 48,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 45,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 36,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 36,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 36,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 33,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 33,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 31,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 26,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 26,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 25,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 21,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 19,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 18,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 17,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 17,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 16,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 14,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 13,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 12,
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
        "name": "梦魇｜2c梦",
        "value": 10,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 10,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 9,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 9,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 9,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 8,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 7,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 7,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 7,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 7,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 6,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 6,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 6,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 5,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 5,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 5,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-SL23.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 5,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 4,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 4,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 4,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 4,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 3,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
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
        "name": "主教｜耶拉教",
        "value": 3,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "偶像大师｜三色偶像",
        "value": 3,
        "link": "decktypes/decktype-5d4feb130208.html",
        "image": "../../assets/cards/CP02-SP13.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 3,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-SL22.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 3,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      },
      {
        "name": "公主连结Re:Dive｜シノブ型",
        "value": 2,
        "link": "decktypes/decktype-c812f73fee4d.html",
        "image": "../../assets/cards/CP04-077.jpg"
      },
      {
        "name": "精灵｜EX妖",
        "value": 2,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-532.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-028.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 800,
        "best": "2/554",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 577,
        "best": "1/553",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 537,
        "best": "1/554",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 186,
        "best": "6/554",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 111,
        "best": "1/50",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 48,
        "best": "1/32",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 45,
        "best": "1/58",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 36,
        "best": "1/56",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 36,
        "best": "1/38",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 36,
        "best": "1/32",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 33,
        "best": "1/64",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 33,
        "best": "2/46",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录351场有效赛事、2921套有排名记录的卡组，其中上位卡组2452套、冠军卡组365套。从上位职业分布看，龙族706套（28.8%）、皇家护卫571套（23.3%）构成本范围的主要出场面，冠军侧则以龙族102套（27.9%）、巫师98套（26.8%）表现最突出。卡组类型方面，龙族「五妹龙」675套（27.5%，最好2/554）、皇家护卫「财宝皇」516套（21.0%，最好1/553）、巫师「二妹法」464套（18.9%，最好1/554）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有1060套，占全部记录36.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W31",
    "label": "2026 第31周（2026/07/27-2026/08/02）",
    "event_count": 2,
    "deck_count": 16,
    "top8_count": 8,
    "top1_count": 2,
    "class_distribution": [
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
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 2,
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
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 7,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 7,
        "best": "1/11",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 4,
        "best": "4/8",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "八狱妖",
        "count": 1,
        "best": "2/8",
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 1,
        "best": "4/11",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 1,
        "best": "5/11",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 1,
        "best": "8/11",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 1,
        "best": "7/8",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第31周（2026/07/27-2026/08/02）共收录2场有效赛事、16套有排名记录的卡组，其中上位卡组8套、冠军卡组2套。从上位职业分布看，龙族5套（62.5%）、皇家护卫1套（12.5%）构成本范围的主要出场面，冠军侧则以龙族2套（100.0%）表现最突出。卡组类型方面，龙族「五妹龙」5套（62.5%，最好1/11）、精灵「八狱妖」1套（12.5%，最好2/8）、巫师「二妹法」1套（12.5%，最好4/11）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由Y使用，成绩为1/11，成绩系数0.0909。整体来看，前10%成绩卡组共有3套，占全部记录18.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W30",
    "label": "2026 第30周（2026/07/20-2026/07/26）",
    "event_count": 39,
    "deck_count": 311,
    "top8_count": 210,
    "top1_count": 41,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 96,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 80,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 54,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 29,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 27,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 17,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 89,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 75,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 48,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 15,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 9,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 9,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 4,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 3,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 2,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 2,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
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
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
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
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "偶像大师｜三色偶像",
        "value": 1,
        "link": "decktypes/decktype-5d4feb130208.html",
        "image": "../../assets/cards/CP02-SP13.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 89,
        "best": "1/16",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 75,
        "best": "1/29",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 48,
        "best": "1/26",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 15,
        "best": "1/18",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 9,
        "best": "1/26",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 9,
        "best": "2/12",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 8,
        "best": "2/10",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 6,
        "best": "2/12",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 4,
        "best": "2/26",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "6/26",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 4,
        "best": "4/16",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "主教",
        "category": "宇宙教",
        "count": 3,
        "best": "1/13",
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第30周（2026/07/20-2026/07/26）共收录39场有效赛事、311套有排名记录的卡组，其中上位卡组210套、冠军卡组41套。从上位职业分布看，龙族65套（31.0%）、皇家护卫57套（27.1%）构成本范围的主要出场面，冠军侧则以龙族14套（34.1%）、巫师10套（24.4%）表现最突出。卡组类型方面，龙族「五妹龙」59套（28.1%，最好1/16）、皇家护卫「财宝皇」55套（26.2%，最好1/29）、巫师「二妹法」35套（16.7%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由めめめ使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有78套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W29",
    "label": "2026 第29周（2026/07/13-2026/07/19）",
    "event_count": 39,
    "deck_count": 309,
    "top8_count": 228,
    "top1_count": 39,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 90,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 75,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 25,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 7,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 6,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 83,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 65,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 60,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 10,
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
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 6,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 6,
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
        "name": "梦魇｜真红梦",
        "value": 5,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 4,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 3,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 3,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
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
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 2,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "偶像大师｜三色偶像",
        "value": 1,
        "link": "decktypes/decktype-5d4feb130208.html",
        "image": "../../assets/cards/CP02-SP13.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 83,
        "best": "1/36",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 65,
        "best": "1/22",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 60,
        "best": "1/27",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 10,
        "best": "3/24",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 7,
        "best": "1/26",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 7,
        "best": "2/9",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 6,
        "best": "1/12",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 6,
        "best": "1/8",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 5,
        "best": "1/20",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 5,
        "best": "1/15",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "梦魇",
        "category": "八狱梦",
        "count": 4,
        "best": "2/17",
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 3,
        "best": "1/20",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第29周（2026/07/13-2026/07/19）共收录39场有效赛事、309套有排名记录的卡组，其中上位卡组228套、冠军卡组39套。从上位职业分布看，龙族64套（28.1%）、巫师58套（25.4%）构成本范围的主要出场面，冠军侧则以龙族14套（35.9%）、巫师9套（23.1%）表现最突出。卡组类型方面，龙族「五妹龙」61套（26.8%，最好1/36）、巫师「二妹法」51套（22.4%，最好1/22）、皇家护卫「财宝皇」50套（21.9%，最好1/27）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由りあ使用，成绩为1/36，成绩系数0.0278。整体来看，前10%成绩卡组共有82套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W28",
    "label": "2026 第28周（2026/07/06-2026/07/12）",
    "event_count": 21,
    "deck_count": 194,
    "top8_count": 175,
    "top1_count": 25,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 52,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 48,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 47,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "💀 梦魇",
        "value": 12,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
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
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 49,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 43,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 43,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 11,
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
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
        "image": "../../assets/cards/BP12-SL18.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
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
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 49,
        "best": "1/27",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 43,
        "best": "1/29",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 43,
        "best": "1/25",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 11,
        "best": "1/40",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 4,
        "best": "1/20",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "2/25",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 3,
        "best": "3/40",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
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
        "category": "宇宙妖",
        "count": 3,
        "best": "5/18",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "主教",
        "category": "纹章教",
        "count": 2,
        "best": "1/18",
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 2,
        "best": "2/24",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 2,
        "best": "5/40",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第28周（2026/07/06-2026/07/12）共收录21场有效赛事、194套有排名记录的卡组，其中上位卡组175套、冠军卡组25套。从上位职业分布看，龙族47套（26.9%）、皇家护卫44套（25.1%）构成本范围的主要出场面，冠军侧则以巫师9套（36.0%）、龙族6套（24.0%）表现最突出。卡组类型方面，龙族「五妹龙」45套（25.7%，最好1/27）、皇家护卫「财宝皇」41套（23.4%，最好1/29）、巫师「二妹法」40套（22.9%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「猎人妖」，由タック使用，成绩为1/40，成绩系数0.0250。整体来看，前10%成绩卡组共有57套，占全部记录29.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W27",
    "label": "2026 第27周（2026/06/29-2026/07/05）",
    "event_count": 40,
    "deck_count": 315,
    "top8_count": 244,
    "top1_count": 40,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 85,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 84,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 72,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 18,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 12,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 82,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 66,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 65,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 13,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 7,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 3,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 3,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 3,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
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
        "name": "梦魇｜妖怪梦",
        "value": 3,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-SL23.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 2,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-532.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 82,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 66,
        "best": "1/30",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 65,
        "best": "1/33",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 13,
        "best": "1/30",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 10,
        "best": "2/32",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 9,
        "best": "3/31",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 7,
        "best": "1/17",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 5,
        "best": "1/32",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 4,
        "best": "1/17",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 3,
        "best": "2/33",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "涅妃PCR",
        "count": 3,
        "best": "2/19",
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 3,
        "best": "1/9",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第27周（2026/06/29-2026/07/05）共收录40场有效赛事、315套有排名记录的卡组，其中上位卡组244套、冠军卡组40套。从上位职业分布看，巫师70套（28.7%）、龙族64套（26.2%）构成本范围的主要出场面，冠军侧则以巫师12套（30.0%）、龙族11套（27.5%）表现最突出。卡组类型方面，龙族「五妹龙」63套（25.8%，最好1/37）、皇家护卫「财宝皇」57套（23.4%，最好1/30）、巫师「二妹法」53套（21.7%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ルル使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有92套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W26",
    "label": "2026 第26周（2026/06/22-2026/06/28）",
    "event_count": 40,
    "deck_count": 319,
    "top8_count": 287,
    "top1_count": 40,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 84,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 76,
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
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 36,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 23,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "name": "⛪ 主教",
        "value": 17,
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
        "value": 80,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 69,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 52,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 21,
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
        "name": "梦魇｜蝙蝠梦",
        "value": 7,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 6,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
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
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 3,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 3,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
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
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 2,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
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
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "best": "1/44",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 69,
        "best": "1/45",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 52,
        "best": "1/30",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 21,
        "best": "1/32",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 15,
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
        "count": 7,
        "best": "4/38",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 6,
        "best": "1/27",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 5,
        "best": "1/36",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 5,
        "best": "2/58",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "1/58",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第26周（2026/06/22-2026/06/28）共收录40场有效赛事、319套有排名记录的卡组，其中上位卡组287套、冠军卡组40套。从上位职业分布看，龙族75套（26.1%）、皇家护卫70套（24.4%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（37.5%）、巫师10套（25.0%）表现最突出。卡组类型方面，龙族「五妹龙」71套（24.7%，最好1/44）、皇家护卫「财宝皇」63套（22.0%，最好1/45）、巫师「二妹法」47套（16.4%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由ちゃん使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有122套，占全部记录38.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W25",
    "label": "2026 第25周（2026/06/15-2026/06/21）",
    "event_count": 26,
    "deck_count": 208,
    "top8_count": 200,
    "top1_count": 26,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 56,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🔮 巫师",
        "value": 45,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 23,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 13,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 11,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
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
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-028.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 51,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 41,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 13,
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
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "公主连结Re:Dive｜シノブ型",
        "value": 1,
        "link": "decktypes/decktype-c812f73fee4d.html",
        "image": "../../assets/cards/CP04-077.jpg"
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
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-028.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 52,
        "best": "1/53",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 51,
        "best": "1/47",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 41,
        "best": "1/59",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 13,
        "best": "2/53",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 6,
        "best": "3/43",
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
        "image": "../../assets/cards/CP04-062.jpg"
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
        "class": "梦魇",
        "category": "永火梦",
        "count": 3,
        "best": "2/12",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 3,
        "best": "7/24",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 2,
        "best": "2/24",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 2,
        "best": "5/50",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第25周（2026/06/15-2026/06/21）共收录26场有效赛事、208套有排名记录的卡组，其中上位卡组200套、冠军卡组26套。从上位职业分布看，皇家护卫55套（27.5%）、龙族50套（25.0%）构成本范围的主要出场面，冠军侧则以龙族10套（38.5%）、皇家护卫7套（26.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」51套（25.5%，最好1/53）、龙族「五妹龙」49套（24.5%，最好1/47）、巫师「二妹法」40套（20.0%，最好1/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由からし使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有83套，占全部记录39.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W24",
    "label": "2026 第24周（2026/06/08-2026/06/14）",
    "event_count": 51,
    "deck_count": 415,
    "top8_count": 384,
    "top1_count": 53,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 143,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 99,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 75,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 37,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 26,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 23,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 136,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 85,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 67,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 28,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 22,
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
        "name": "精灵｜人偶妖",
        "value": 5,
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
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "偶像大师｜cool",
        "value": 4,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 3,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "公主连结Re:Dive｜シノブ型",
        "value": 1,
        "link": "decktypes/decktype-c812f73fee4d.html",
        "image": "../../assets/cards/CP04-077.jpg"
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
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 136,
        "best": "1/58",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 85,
        "best": "1/64",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 67,
        "best": "1/52",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 28,
        "best": "1/51",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 22,
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
        "class": "精灵",
        "category": "人偶妖",
        "count": 5,
        "best": "1/27",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 5,
        "best": "4/64",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 5,
        "best": "2/31",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "class": "偶像大师",
        "category": "cool",
        "count": 4,
        "best": "1/31",
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第24周（2026/06/08-2026/06/14）共收录51场有效赛事、415套有排名记录的卡组，其中上位卡组384套、冠军卡组53套。从上位职业分布看，龙族128套（33.3%）、皇家护卫97套（25.3%）构成本范围的主要出场面，冠军侧则以龙族16套（30.2%）、皇家护卫14套（26.4%）表现最突出。卡组类型方面，龙族「五妹龙」122套（31.8%，最好1/58）、皇家护卫「财宝皇」84套（21.9%，最好1/64）、巫师「二妹法」59套（15.4%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由カルム使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有186套，占全部记录44.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W23",
    "label": "2026 第23周（2026/06/01-2026/06/07）",
    "event_count": 21,
    "deck_count": 216,
    "top8_count": 212,
    "top1_count": 21,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 70,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 52,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 21,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 12,
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
        "name": "⛪ 主教",
        "value": 7,
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
        "value": 69,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 46,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 37,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 16,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
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
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
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
        "name": "巫师｜九爷法",
        "value": 2,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
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
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 1,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "count": 69,
        "best": "2/554",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 46,
        "best": "1/554",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 37,
        "best": "1/553",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 16,
        "best": "6/554",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 8,
        "best": "1/46",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 3,
        "best": "8/47",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
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
        "class": "梦魇",
        "category": "2c梦",
        "count": 2,
        "best": "2/47",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 2,
        "best": "25/554",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 2,
        "best": "27/554",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第23周（2026/06/01-2026/06/07）共收录21场有效赛事、216套有排名记录的卡组，其中上位卡组212套、冠军卡组21套。从上位职业分布看，龙族69套（32.5%）、巫师51套（24.1%）构成本范围的主要出场面，冠军侧则以巫师6套（28.6%）、皇家护卫5套（23.8%）表现最突出。卡组类型方面，龙族「五妹龙」68套（32.1%，最好2/554）、巫师「二妹法」45套（21.2%，最好1/554）、皇家护卫「财宝皇」37套（17.5%，最好1/553）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有129套，占全部记录59.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W22",
    "label": "2026 第22周（2026/05/25-2026/05/31）",
    "event_count": 35,
    "deck_count": 276,
    "top8_count": 240,
    "top1_count": 35,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 77,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 71,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 44,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 24,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
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
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 74,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 54,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 37,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 24,
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
        "name": "巫师｜九爷法",
        "value": 9,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 9,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 9,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 8,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 6,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 2,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP12-SL18.jpg"
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
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-068.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-001.jpg"
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
        "count": 74,
        "best": "1/46",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 54,
        "best": "1/46",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 37,
        "best": "1/64",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 24,
        "best": "1/21",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 16,
        "best": "6/64",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 9,
        "best": "1/32",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 9,
        "best": "2/46",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 9,
        "best": "2/44",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 8,
        "best": "1/35",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 6,
        "best": "1/23",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 3,
        "best": "4/32",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 2,
        "best": "1/32",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第22周（2026/05/25-2026/05/31）共收录35场有效赛事、276套有排名记录的卡组，其中上位卡组240套、冠军卡组35套。从上位职业分布看，龙族68套（28.3%）、巫师61套（25.4%）构成本范围的主要出场面，冠军侧则以巫师14套（40.0%）、皇家护卫7套（20.0%）表现最突出。卡组类型方面，龙族「五妹龙」65套（27.1%，最好1/46）、巫师「二妹法」47套（19.6%，最好1/46）、皇家护卫「财宝皇」36套（15.0%，最好1/64）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由yu-ji使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有110套，占全部记录39.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W21",
    "label": "2026 第21周（2026/05/18-2026/05/24）",
    "event_count": 37,
    "deck_count": 342,
    "top8_count": 264,
    "top1_count": 43,
    "class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 86,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 85,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 53,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 25,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 22,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
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
        "value": 55,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 49,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 34,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 20,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 16,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 9,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 8,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 7,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 5,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 5,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 4,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
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
        "name": "主教｜纹章教",
        "value": 3,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 3,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-SL22.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 2,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
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
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-SL08.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-037.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 80,
        "best": "1/33",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 55,
        "best": "1/51",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 49,
        "best": "1/58",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 34,
        "best": "1/57",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 20,
        "best": "1/41",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "九爷法",
        "count": 16,
        "best": "1/30",
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 9,
        "best": "2/38",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 8,
        "best": "2/14",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 7,
        "best": "1/6",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 5,
        "best": "1/38",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 5,
        "best": "4/41",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "篡夺皇",
        "count": 4,
        "best": "1/13",
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第21周（2026/05/18-2026/05/24）共收录37场有效赛事、342套有排名记录的卡组，其中上位卡组264套、冠军卡组43套。从上位职业分布看，龙族71套（26.9%）、巫师67套（25.4%）构成本范围的主要出场面，冠军侧则以龙族12套（27.9%）、皇家护卫10套（23.3%）表现最突出。卡组类型方面，龙族「五妹龙」67套（25.4%，最好1/33）、巫师「二妹法」46套（17.4%，最好1/51）、皇家护卫「财宝皇」41套（15.5%，最好1/58）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由セブン使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有118套，占全部记录34.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 351,
    "deck_count": 2921,
    "top8_count": 2452,
    "top1_count": 365,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 706,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 571,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 553,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 271,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 154,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 122,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 61,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 14,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 102,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 98,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 31,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 22,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
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
        "value": 675,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 516,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 464,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 160,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 637,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 100,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 87,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 83,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 20,
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
        "value": 60,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 637,
    "type_other_types": 57,
    "top1_type_other_count": 60,
    "top1_type_other_types": 26,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>7套，最好成绩 1/38</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>6套，最好成绩 1/64</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>6套，最好成绩 1/58</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html\"><b>精灵｜人偶妖</b><span>6套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html\"><b>巫师｜九爷法</b><span>4套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>3套，最好成绩 1/56</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>3套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>3套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-71c5492994cc.html\"><b>梦魇｜永火梦</b><span>3套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html\"><b>主教｜宇宙教</b><span>2套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>2套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>1套，最好成绩 1/41</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html\"><b>主教｜机械教</b><span>1套，最好成绩 1/22</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c068a8ef6610.html\"><b>主教｜纹章教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-dd2be811fe92.html\"><b>梦魇｜怨灵梦</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-2271753f82b0.html\"><b>皇家护卫｜宇宙皇</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录351场有效赛事、2921套有排名记录的卡组，其中上位卡组2452套、冠军卡组365套。从上位职业分布看，龙族706套（28.8%）、皇家护卫571套（23.3%）构成本范围的主要出场面，冠军侧则以龙族102套（27.9%）、巫师98套（26.8%）表现最突出。卡组类型方面，龙族「五妹龙」675套（27.5%，最好2/554）、皇家护卫「财宝皇」516套（21.0%，最好1/553）、巫师「二妹法」464套（18.9%，最好1/554）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有1060套，占全部记录36.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">675</td><td style=\"text-align:center\">541-564 (49.0%)</td><td style=\"text-align:center\">2/554 (0.0036)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">516</td><td style=\"text-align:center\">487-428 (53.2%)</td><td style=\"text-align:center\">1/553 (0.0018)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">464</td><td style=\"text-align:center\">446-361 (55.3%)</td><td style=\"text-align:center\">1/554 (0.0018)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">160</td><td style=\"text-align:center\">127-136 (48.3%)</td><td style=\"text-align:center\">6/554 (0.0108)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">90</td><td style=\"text-align:center\">76-74 (50.7%)</td><td style=\"text-align:center\">1/50 (0.0200)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">36-33 (52.2%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">26-28 (48.1%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">25-24 (51.0%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">20-27 (42.6%)</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">18-28 (39.1%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">14-24 (36.8%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">31-19 (62.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html\">九爷法</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">21-22 (48.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">14-16 (46.7%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">7-15 (31.8%)</td><td style=\"text-align:center\">16/553 (0.0289)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">12-17 (41.4%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">5-15 (25.0%)</td><td style=\"text-align:center\">20/553 (0.0362)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">9-16 (36.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">15-13 (53.6%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">4-12 (25.0%)</td><td style=\"text-align:center\">15/553 (0.0271)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">4-11 (26.7%)</td><td style=\"text-align:center\">29/554 (0.0523)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-11 (42.1%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">7-10 (41.2%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">3-10 (23.1%)</td><td style=\"text-align:center\">4/44 (0.0909)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">12/553 (0.0217)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">5-9 (35.7%)</td><td style=\"text-align:center\">2/47 (0.0426)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-7 (41.7%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-6 (50.0%)</td><td style=\"text-align:center\">25/554 (0.0451)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html\">涅妃PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html\">林德龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html\">passion</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/41 (0.1220)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-c812f73fee4d.html\">シノブ型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html\">妖怪梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-5d4feb130208.html\">三色偶像</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\">EX妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/3 (0.6667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/5 (0.8000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">843 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 301</span>\n          <span class=\"stat-pill percent\">28.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>800套 (94.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>13套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>9套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>7套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>6套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>4套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>3套 (0.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">652 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 258</span>\n          <span class=\"stat-pill percent\">22.3%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>577套 (88.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>21套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>18套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>10套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>9套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>7套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>5套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>5套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">652 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 263</span>\n          <span class=\"stat-pill percent\">22.3%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>537套 (82.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>45套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>36套 (5.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>17套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>11套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-037.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-532.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">321 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 107</span>\n          <span class=\"stat-pill percent\">11.0%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>186套 (57.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>48套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>36套 (11.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>26套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>12套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>7套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>3套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.jpg\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">189 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 50</span>\n          <span class=\"stat-pill percent\">6.5%</span>\n          <span class=\"stat-pill archetypes\">12 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>33套 (17.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>33套 (17.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>31套 (16.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>25套 (13.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>19套 (10.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>14套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>10套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>6套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>6套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>5套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>4套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-SL22.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>3套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">154 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 53</span>\n          <span class=\"stat-pill percent\">5.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>111套 (72.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>36套 (23.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>5套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c812f73fee4d.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-077.jpg\" alt=\"シノブ型核心卡\"><span class=\"archetype-tag-body\"><b>シノブ型</b><em>2套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">81 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>26套 (32.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>16套 (19.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>9套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>8套 (9.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>7套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (4.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>4套 (4.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>3套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>3套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">25 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">0.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>17套 (68.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>4套 (16.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CP02-SP13.jpg\" alt=\"三色偶像核心卡\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>3套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-028.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W31": {
    "key": "2026-W31",
    "label": "2026 第31周（2026/07/27-2026/08/02）",
    "event_count": 2,
    "deck_count": 16,
    "top8_count": 8,
    "top1_count": 2,
    "top8_class_distribution": [
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
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 1,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      }
    ],
    "type_other_count": 0,
    "type_other_types": 0,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第31周（2026/07/27-2026/08/02）共收录2场有效赛事、16套有排名记录的卡组，其中上位卡组8套、冠军卡组2套。从上位职业分布看，龙族5套（62.5%）、皇家护卫1套（12.5%）构成本范围的主要出场面，冠军侧则以龙族2套（100.0%）表现最突出。卡组类型方面，龙族「五妹龙」5套（62.5%，最好1/11）、精灵「八狱妖」1套（12.5%，最好2/8）、巫师「二妹法」1套（12.5%，最好4/11）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由Y使用，成绩为1/11，成绩系数0.0909。整体来看，前10%成绩卡组共有3套，占全部记录18.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W31\">五妹龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W31\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W31\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W31\">财宝皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">43.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>7套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026-W30": {
    "key": "2026-W30",
    "label": "2026 第30周（2026/07/20-2026/07/26）",
    "event_count": 39,
    "deck_count": 311,
    "top8_count": 210,
    "top1_count": 41,
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
        "value": 57,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 20,
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
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 8,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "value": 14,
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
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 4,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 59,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 55,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 35,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 10,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 9,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "Others",
        "value": 42,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 14,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 10,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 9,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 4,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 3,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 1,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 42,
    "type_other_types": 24,
    "top1_type_other_count": 1,
    "top1_type_other_types": 1,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W30\"><b>主教｜宇宙教</b><span>1套，最好成绩 1/13</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第30周（2026/07/20-2026/07/26）共收录39场有效赛事、311套有排名记录的卡组，其中上位卡组210套、冠军卡组41套。从上位职业分布看，龙族65套（31.0%）、皇家护卫57套（27.1%）构成本范围的主要出场面，冠军侧则以龙族14套（34.1%）、巫师10套（24.4%）表现最突出。卡组类型方面，龙族「五妹龙」59套（28.1%，最好1/16）、皇家护卫「财宝皇」55套（26.2%，最好1/29）、巫师「二妹法」35套（16.7%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由めめめ使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有78套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W30\">五妹龙</a></td><td style=\"text-align:center\">59</td><td style=\"text-align:center\">54-45 (54.5%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W30\">财宝皇</a></td><td style=\"text-align:center\">55</td><td style=\"text-align:center\">43-46 (48.3%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W30\">二妹法</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">35-25 (58.3%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W30\">猎人妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">9-7 (56.3%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W30\">蝙蝠梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">12-5 (70.6%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W30\">法术PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W30\">人偶妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W30\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W30\">武斗龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W30\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W30\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W30\">机械梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W30\">真红梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W30\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W30\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W30\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W30\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W30\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W30\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W30\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/26 (0.2308)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W30\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/25 (0.2400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W30\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/25 (0.2400)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W30\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W30\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W30\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W30\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W30\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W30\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/9 (0.4444)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2026-W30\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/3 (0.6667)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">96 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">30.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W30\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>89套 (92.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W30\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>3套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W30\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W30\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W30\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">80 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">25.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W30\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>75套 (93.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W30\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W30\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W30\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W30\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>48套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W30\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W30\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W30\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">9.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>15套 (51.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>6套 (20.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>4套 (13.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2026-W30\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.jpg\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">8.7%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>9套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (14.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W30\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W30\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>9套 (52.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W30\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>8套 (47.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W30\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W30\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026-W30\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CP02-SP13.jpg\" alt=\"三色偶像核心卡\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W30\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026-W30\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W30\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W29": {
    "key": "2026-W29",
    "label": "2026 第29周（2026/07/13-2026/07/19）",
    "event_count": 39,
    "deck_count": 309,
    "top8_count": 228,
    "top1_count": 39,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 64,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 58,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 54,
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
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 17,
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
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "💀 梦魇",
        "value": 6,
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
      },
      {
        "name": "⛪ 主教",
        "value": 1,
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
        "name": "龙族｜五妹龙",
        "value": 61,
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
        "value": 50,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 14,
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
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 66,
    "type_other_types": 33,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W29\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W29\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W29\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W29\"><b>主教｜控教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W29\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/8</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第29周（2026/07/13-2026/07/19）共收录39场有效赛事、309套有排名记录的卡组，其中上位卡组228套、冠军卡组39套。从上位职业分布看，龙族64套（28.1%）、巫师58套（25.4%）构成本范围的主要出场面，冠军侧则以龙族14套（35.9%）、巫师9套（23.1%）表现最突出。卡组类型方面，龙族「五妹龙」61套（26.8%，最好1/36）、巫师「二妹法」51套（22.4%，最好1/22）、皇家护卫「财宝皇」50套（21.9%，最好1/27）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由りあ使用，成绩为1/36，成绩系数0.0278。整体来看，前10%成绩卡组共有82套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W29\">五妹龙</a></td><td style=\"text-align:center\">61</td><td style=\"text-align:center\">58-47 (55.2%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W29\">二妹法</a></td><td style=\"text-align:center\">51</td><td style=\"text-align:center\">42-43 (49.4%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W29\">财宝皇</a></td><td style=\"text-align:center\">50</td><td style=\"text-align:center\">46-43 (51.7%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W29\">猎人妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W29\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W29\">真红梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W29\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W29\">连击妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W29\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W29\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W29\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W29\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W29\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W29\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W29\">八狱妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W29\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W29\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W29\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W29\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W29\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W29\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W29\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W29\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W29\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W29\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W29\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W29\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/19 (0.2632)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W29\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W29\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W29\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W29\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W29\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W29\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026-W29\">三色偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W29\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2026-W29\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">90 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">29.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>83套 (92.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>2套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W29\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">21.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>60套 (89.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W29\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">75 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">24.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>65套 (86.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>6套 (8.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W29\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-037.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>10套 (32.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>7套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>7套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (9.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2026-W29\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.jpg\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">25 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">8.1%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>6套 (24.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>4套 (16.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>3套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (8.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W29\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (4.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W29\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>5套 (71.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W29\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026-W29\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W29\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W29\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>3套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W29\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026-W29\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CP02-SP13.jpg\" alt=\"三色偶像核心卡\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W28": {
    "key": "2026-W28",
    "label": "2026 第28周（2026/07/06-2026/07/12）",
    "event_count": 21,
    "deck_count": 194,
    "top8_count": 175,
    "top1_count": 25,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 47,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
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
        "value": 43,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 19,
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
        "value": 4,
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
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 45,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 41,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 40,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 10,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 39,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 9,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 6,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
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
    "type_other_count": 39,
    "type_other_types": 24,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第28周（2026/07/06-2026/07/12）共收录21场有效赛事、194套有排名记录的卡组，其中上位卡组175套、冠军卡组25套。从上位职业分布看，龙族47套（26.9%）、皇家护卫44套（25.1%）构成本范围的主要出场面，冠军侧则以巫师9套（36.0%）、龙族6套（24.0%）表现最突出。卡组类型方面，龙族「五妹龙」45套（25.7%，最好1/27）、皇家护卫「财宝皇」41套（23.4%，最好1/29）、巫师「二妹法」40套（22.9%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「猎人妖」，由タック使用，成绩为1/40，成绩系数0.0250。整体来看，前10%成绩卡组共有57套，占全部记录29.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W28\">五妹龙</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">35-39 (47.3%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W28\">财宝皇</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">40-36 (52.6%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W28\">二妹法</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">43-31 (58.1%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W28\">猎人妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">9-8 (52.9%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W28\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W28\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W28\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/40 (0.0750)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W28\">八狱法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/28 (0.1071)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W28\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W28\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W28\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W28\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W28\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">5/29 (0.1724)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W28\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W28\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/40 (0.1500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W28\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W28\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W28\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/27 (0.1852)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W28\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W28\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W28\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W28\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/25 (0.2800)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W28\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W28\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026-W28\">三色偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W28\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W28\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W28\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">26.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>49套 (94.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">24.2%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>43套 (91.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">24.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>43套 (89.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">10.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>11套 (52.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>4套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.2%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W28\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W28\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W28\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5d4feb130208.html?scope=2026-W28\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CP02-SP13.jpg\" alt=\"三色偶像核心卡\"><span class=\"archetype-tag-body\"><b>三色偶像</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W27": {
    "key": "2026-W27",
    "label": "2026 第27周（2026/06/29-2026/07/05）",
    "event_count": 40,
    "deck_count": 315,
    "top8_count": 244,
    "top1_count": 40,
    "top8_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 70,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 64,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 60,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 22,
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
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 9,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 12,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 11,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 8,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 2,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 63,
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
        "value": 53,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "Others",
        "value": 71,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 11,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 10,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 8,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 71,
    "type_other_types": 29,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W27\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W27\"><b>主教｜机械教</b><span>1套，最好成绩 1/22</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W27\"><b>主教｜宇宙教</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W27\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W27\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W27\"><b>巫师｜九爷法</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W27\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第27周（2026/06/29-2026/07/05）共收录40场有效赛事、315套有排名记录的卡组，其中上位卡组244套、冠军卡组40套。从上位职业分布看，巫师70套（28.7%）、龙族64套（26.2%）构成本范围的主要出场面，冠军侧则以巫师12套（30.0%）、龙族11套（27.5%）表现最突出。卡组类型方面，龙族「五妹龙」63套（25.8%，最好1/37）、皇家护卫「财宝皇」57套（23.4%，最好1/30）、巫师「二妹法」53套（21.7%，最好1/33）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ルル使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有92套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W27\">五妹龙</a></td><td style=\"text-align:center\">63</td><td style=\"text-align:center\">54-52 (50.9%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W27\">财宝皇</a></td><td style=\"text-align:center\">57</td><td style=\"text-align:center\">46-49 (48.4%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W27\">二妹法</a></td><td style=\"text-align:center\">53</td><td style=\"text-align:center\">52-43 (54.7%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W27\">猎人妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-8 (42.9%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W27\">八狱法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-8 (50.0%)</td><td style=\"text-align:center\">2/32 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W27\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W27\">法术PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W27\">节奏教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">7-1 (87.5%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W27\">连击妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026-W27\">涅妃PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W27\">九爷法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W27\">宇宙教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W27\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/33 (0.0606)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W27\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W27\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/33 (0.1515)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W27\">真红梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W27\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W27\">机械梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W27\">魔法使法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W27\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W27\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/28 (0.1071)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W27\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W27\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W27\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W27\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W27\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W27\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W27\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2026-W27\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W27\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W27\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W27\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/9 (0.4444)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">27.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>82套 (96.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">72 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">22.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>66套 (91.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>3套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">84 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">26.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>65套 (77.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>10套 (11.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>3套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>3套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2026-W27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-532.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">9.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>13套 (43.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>9套 (30.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">5.7%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>3套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>7套 (63.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026-W27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (41.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W27\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W27\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W26": {
    "key": "2026-W26",
    "label": "2026 第26周（2026/06/22-2026/06/28）",
    "event_count": 40,
    "deck_count": 319,
    "top8_count": 287,
    "top1_count": 40,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 75,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 70,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 53,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 33,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 22,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "value": 14,
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
        "value": 15,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "🍃 精灵",
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 71,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 63,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 47,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 19,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 14,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 73,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 14,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 9,
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
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 3,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 73,
    "type_other_types": 31,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W26\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/58</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W26\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/36</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W26\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W26\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W26\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/16</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第26周（2026/06/22-2026/06/28）共收录40场有效赛事、319套有排名记录的卡组，其中上位卡组287套、冠军卡组40套。从上位职业分布看，龙族75套（26.1%）、皇家护卫70套（24.4%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（37.5%）、巫师10套（25.0%）表现最突出。卡组类型方面，龙族「五妹龙」71套（24.7%，最好1/44）、皇家护卫「财宝皇」63套（22.0%，最好1/45）、巫师「二妹法」47套（16.4%，最好1/30）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「八狱法」，由ちゃん使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有122套，占全部记录38.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W26\">五妹龙</a></td><td style=\"text-align:center\">71</td><td style=\"text-align:center\">43-66 (39.4%)</td><td style=\"text-align:center\">1/44 (0.0227)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W26\">财宝皇</a></td><td style=\"text-align:center\">63</td><td style=\"text-align:center\">67-49 (57.8%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W26\">二妹法</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">50-38 (56.8%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W26\">猎人妖</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">20-16 (55.6%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W26\">法术PCR</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">20-10 (66.7%)</td><td style=\"text-align:center\">1/44 (0.0227)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W26\">蝙蝠梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W26\">节奏教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/38 (0.1053)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W26\">机械梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W26\">宇宙妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W26\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W26\">跳费PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/36 (0.0278)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W26\">nc梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W26\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W26\">魔法使法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/35 (0.1143)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W26\">耶拉教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W26\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W26\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/44 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W26\">八狱妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W26\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W26\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W26\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/35 (0.2286)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W26\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/18 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W26\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W26\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W26\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W26\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/38 (0.1316)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W26\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/35 (0.1714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W26\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/44 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W26\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/32 (0.1875)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W26\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W26\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W26\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W26\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W26\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/23 (0.3478)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W26\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W26\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">84 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 26</span>\n          <span class=\"stat-pill percent\">26.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>80套 (95.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">76 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 35</span>\n          <span class=\"stat-pill percent\">23.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>69套 (90.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">61 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">19.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>52套 (85.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (6.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>3套 (4.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>21套 (58.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>6套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (13.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">7.2%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>7套 (30.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>5套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W26\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>15套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W26\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>5套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">5.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>7套 (41.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>3套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>3套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W26\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W25": {
    "key": "2026-W25",
    "label": "2026 第25周（2026/06/15-2026/06/21）",
    "event_count": 26,
    "deck_count": 208,
    "top8_count": 200,
    "top1_count": 26,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 55,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 50,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 44,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 23,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 12,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 10,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
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
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 7,
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
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 51,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 49,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 40,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 13,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 47,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 10,
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
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 2,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 47,
    "type_other_types": 27,
    "top1_type_other_count": 2,
    "top1_type_other_types": 2,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W25\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W25\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/17</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第25周（2026/06/15-2026/06/21）共收录26场有效赛事、208套有排名记录的卡组，其中上位卡组200套、冠军卡组26套。从上位职业分布看，皇家护卫55套（27.5%）、龙族50套（25.0%）构成本范围的主要出场面，冠军侧则以龙族10套（38.5%）、皇家护卫7套（26.9%）表现最突出。卡组类型方面，皇家护卫「财宝皇」51套（25.5%，最好1/53）、龙族「五妹龙」49套（24.5%，最好1/47）、巫师「二妹法」40套（20.0%，最好1/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由からし使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有83套，占全部记录39.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W25\">财宝皇</a></td><td style=\"text-align:center\">51</td><td style=\"text-align:center\">50-44 (53.2%)</td><td style=\"text-align:center\">1/53 (0.0189)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W25\">五妹龙</a></td><td style=\"text-align:center\">49</td><td style=\"text-align:center\">43-39 (52.4%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W25\">二妹法</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">40-33 (54.8%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W25\">猎人妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">8-13 (38.1%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W25\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W25\">法术PCR</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">3/43 (0.0698)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W25\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W25\">蝙蝠梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W25\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W25\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/50 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W25\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W25\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W25\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/25 (0.2800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W25\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W25\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W25\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W25\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W25\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W25\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/47 (0.0851)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W25\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W25\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W25\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W25\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W25\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-c812f73fee4d.html?scope=2026-W25\">シノブ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W25\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026-W25\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/34 (0.2059)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W25\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W25\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W25\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W25\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">25.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>51套 (96.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">56 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">26.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>52套 (92.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">21.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>41套 (91.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">11.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>13套 (56.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>3套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-SL23.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">5.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>6套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c812f73fee4d.html?scope=2026-W25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-077.jpg\" alt=\"シノブ型核心卡\"><span class=\"archetype-tag-body\"><b>シノブ型</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026-W25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL04.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W25\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W25\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-028.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W24": {
    "key": "2026-W24",
    "label": "2026 第24周（2026/06/08-2026/06/14）",
    "event_count": 51,
    "deck_count": 415,
    "top8_count": 384,
    "top1_count": 53,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 128,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 97,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 67,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 36,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 25,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 22,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "value": 16,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 14,
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
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
        "name": "龙族｜五妹龙",
        "value": 122,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 84,
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
        "name": "精灵｜猎人妖",
        "value": 27,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 21,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 71,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 15,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 13,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 10,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 4,
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
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 71,
    "type_other_types": 31,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W24\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/64</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W24\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/33</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W24\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/31</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W24\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W24\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W24\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W24\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W24\"><b>主教｜节奏教</b><span>1套，最好成绩 1/13</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第24周（2026/06/08-2026/06/14）共收录51场有效赛事、415套有排名记录的卡组，其中上位卡组384套、冠军卡组53套。从上位职业分布看，龙族128套（33.3%）、皇家护卫97套（25.3%）构成本范围的主要出场面，冠军侧则以龙族16套（30.2%）、皇家护卫14套（26.4%）表现最突出。卡组类型方面，龙族「五妹龙」122套（31.8%，最好1/58）、皇家护卫「财宝皇」84套（21.9%，最好1/64）、巫师「二妹法」59套（15.4%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由カルム使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有186套，占全部记录44.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W24\">五妹龙</a></td><td style=\"text-align:center\">122</td><td style=\"text-align:center\">98-107 (47.8%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W24\">财宝皇</a></td><td style=\"text-align:center\">84</td><td style=\"text-align:center\">86-71 (54.8%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W24\">二妹法</a></td><td style=\"text-align:center\">59</td><td style=\"text-align:center\">59-49 (54.6%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W24\">猎人妖</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">20-23 (46.5%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W24\">法术PCR</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">17-18 (48.6%)</td><td style=\"text-align:center\">1/50 (0.0200)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W24\">蝙蝠梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W24\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W24\">nc梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/31 (0.0645)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W24\">盗贼皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W24\">魔法使法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W24\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">4/64 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W24\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W24\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W24\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W24\">削手梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/33 (0.1515)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W24\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/25 (0.2000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W24\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W24\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/31 (0.0323)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W24\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/64 (0.1094)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W24\">机械梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/23 (0.1304)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W24\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/50 (0.1400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W24\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-c812f73fee4d.html?scope=2026-W24\">シノブ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/58 (0.0345)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W24\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/53 (0.0377)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W24\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W24\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/36 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W24\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/64 (0.0781)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W24\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W24\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W24\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W24\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/31 (0.2581)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W24\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W24\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/27 (0.2963)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W24\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W24\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/5 (0.8000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html?scope=2026-W24\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/5 (0.8000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">143 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 57</span>\n          <span class=\"stat-pill percent\">34.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>136套 (95.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W24\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">99 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 50</span>\n          <span class=\"stat-pill percent\">23.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>85套 (85.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>5套 (5.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W24\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">75 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 37</span>\n          <span class=\"stat-pill percent\">18.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>67套 (89.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>5套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026-W24\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">8.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>28套 (75.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (13.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W24\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">5.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>6套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>5套 (21.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>3套 (13.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (8.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W24\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>22套 (84.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c812f73fee4d.html?scope=2026-W24\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-077.jpg\" alt=\"シノブ型核心卡\"><span class=\"archetype-tag-body\"><b>シノブ型</b><em>1套 (3.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W24\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W24\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W23": {
    "key": "2026-W23",
    "label": "2026 第23周（2026/06/01-2026/06/07）",
    "event_count": 21,
    "deck_count": 216,
    "top8_count": 212,
    "top1_count": 21,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 69,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 51,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 21,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 12,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 7,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
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
    "top1_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 6,
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
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 68,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 45,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 37,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 16,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 46,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 6,
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
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
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "type_other_count": 46,
    "type_other_types": 26,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第23周（2026/06/01-2026/06/07）共收录21场有效赛事、216套有排名记录的卡组，其中上位卡组212套、冠军卡组21套。从上位职业分布看，龙族69套（32.5%）、巫师51套（24.1%）构成本范围的主要出场面，冠军侧则以巫师6套（28.6%）、皇家护卫5套（23.8%）表现最突出。卡组类型方面，龙族「五妹龙」68套（32.1%，最好2/554）、巫师「二妹法」45套（21.2%，最好1/554）、皇家护卫「财宝皇」37套（17.5%，最好1/553）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「二妹法」，由にん使用，成绩为1/554，成绩系数0.0018。整体来看，前10%成绩卡组共有129套，占全部记录59.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W23\">五妹龙</a></td><td style=\"text-align:center\">68</td><td style=\"text-align:center\">45-52 (46.4%)</td><td style=\"text-align:center\">2/554 (0.0036)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W23\">二妹法</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">28-23 (54.9%)</td><td style=\"text-align:center\">1/554 (0.0018)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W23\">财宝皇</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">35-27 (56.5%)</td><td style=\"text-align:center\">1/553 (0.0018)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W23\">猎人妖</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">10-11 (47.6%)</td><td style=\"text-align:center\">6/554 (0.0108)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W23\">法术PCR</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-3 (75.0%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W23\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">8/47 (0.1702)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W23\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W23\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">16/553 (0.0289)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W23\">魔法使法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">20/553 (0.0362)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W23\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/47 (0.0426)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W23\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">25/554 (0.0451)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W23\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">29/554 (0.0523)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W23\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">31/553 (0.0561)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W23\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/29 (0.0690)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W23\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/31 (0.0968)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W23\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/55 (0.1273)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W23\">九爷法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W23\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/28 (0.2143)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W23\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">12/553 (0.0217)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W23\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">15/553 (0.0271)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W23\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">17/554 (0.0307)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W23\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">24/554 (0.0433)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W23\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">27/554 (0.0487)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W23\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W23\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/56 (0.0893)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W23\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W23\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/26 (0.2308)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W23\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/16 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W23\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W23\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">70 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 43</span>\n          <span class=\"stat-pill percent\">32.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>69套 (98.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>37套 (82.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">24.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>46套 (88.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">9.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>16套 (76.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">5.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W23\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>8套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W23\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W22": {
    "key": "2026-W22",
    "label": "2026 第22周（2026/05/25-2026/05/31）",
    "event_count": 35,
    "deck_count": 276,
    "top8_count": 240,
    "top1_count": 35,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 68,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 39,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 32,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 20,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 13,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "value": 14,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 3,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
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
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP12-SL18.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 65,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 47,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 36,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 21,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 14,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 57,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 11,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
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
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 57,
    "type_other_types": 21,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W22\"><b>巫师｜机械法</b><span>1套，最好成绩 1/41</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W22\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W22\"><b>巫师｜九爷法</b><span>1套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W22\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W22\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W22\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W22\"><b>梦魇｜怨灵梦</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W22\"><b>皇家护卫｜宇宙皇</b><span>1套，最好成绩 1/12</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第22周（2026/05/25-2026/05/31）共收录35场有效赛事、276套有排名记录的卡组，其中上位卡组240套、冠军卡组35套。从上位职业分布看，龙族68套（28.3%）、巫师61套（25.4%）构成本范围的主要出场面，冠军侧则以巫师14套（40.0%）、皇家护卫7套（20.0%）表现最突出。卡组类型方面，龙族「五妹龙」65套（27.1%，最好1/46）、巫师「二妹法」47套（19.6%，最好1/46）、皇家护卫「财宝皇」36套（15.0%，最好1/64）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由yu-ji使用，成绩为1/64，成绩系数0.0156。整体来看，前10%成绩卡组共有110套，占全部记录39.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W22\">五妹龙</a></td><td style=\"text-align:center\">65</td><td style=\"text-align:center\">57-58 (49.6%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W22\">二妹法</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">60-36 (62.5%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W22\">财宝皇</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">29-30 (49.2%)</td><td style=\"text-align:center\">1/64 (0.0156)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W22\">猎人妖</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">10-20 (33.3%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W22\">法术PCR</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">4-14 (22.2%)</td><td style=\"text-align:center\">6/64 (0.0938)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W22\">连击妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W22\">九爷法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W22\">nc梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W22\">跳费PCR</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">8-3 (72.7%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W22\">八狱法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W22\">怨灵梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W22\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/38 (0.1053)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W22\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W22\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/44 (0.1591)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W22\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W22\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W22\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W22\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/44 (0.0682)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W22\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W22\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/44 (0.1136)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W22\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/41 (0.1220)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W22\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W22\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W22\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/26 (0.2308)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W22\">武斗龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W22\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">77 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 32</span>\n          <span class=\"stat-pill percent\">27.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>74套 (96.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W22\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">15.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>37套 (84.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W22\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">71 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 36</span>\n          <span class=\"stat-pill percent\">25.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>54套 (76.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>9套 (12.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>6套 (8.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W22\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-037.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">38 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">13.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>24套 (63.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>9套 (23.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026-W22\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-001.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">5.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>9套 (64.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP12-SL18.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W22\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">8.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W22\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>16套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W22\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>8套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W22\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-068.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W22\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-SL01.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W22\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W21": {
    "key": "2026-W21",
    "label": "2026 第21周（2026/05/18-2026/05/24）",
    "event_count": 37,
    "deck_count": 342,
    "top8_count": 264,
    "top1_count": 43,
    "top8_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 71,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 67,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 49,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "value": 15,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 12,
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
        "name": "⚔️ 皇家护卫",
        "value": 10,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 67,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 46,
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
        "value": 27,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 13,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 70,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 11,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 9,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 5,
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
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 2,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 70,
    "type_other_types": 28,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W21\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W21\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W21\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W21\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W21\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第21周（2026/05/18-2026/05/24）共收录37场有效赛事、342套有排名记录的卡组，其中上位卡组264套、冠军卡组43套。从上位职业分布看，龙族71套（26.9%）、巫师67套（25.4%）构成本范围的主要出场面，冠军侧则以龙族12套（27.9%）、皇家护卫10套（23.3%）表现最突出。卡组类型方面，龙族「五妹龙」67套（25.4%，最好1/33）、巫师「二妹法」46套（17.4%，最好1/51）、皇家护卫「财宝皇」41套（15.5%，最好1/58）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由セブン使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有118套，占全部记录34.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W21\">五妹龙</a></td><td style=\"text-align:center\">67</td><td style=\"text-align:center\">48-56 (46.2%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W21\">二妹法</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">37-39 (48.7%)</td><td style=\"text-align:center\">1/51 (0.0196)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W21\">财宝皇</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">45-32 (58.4%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W21\">猎人妖</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">31-22 (58.5%)</td><td style=\"text-align:center\">1/57 (0.0175)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W21\">法术PCR</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">10-11 (47.6%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W21\">九爷法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">11-8 (57.9%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W21\">连击妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-7 (41.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W21\">真红梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W21\">八狱法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W21\">跳费PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W21\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/41 (0.0976)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W21\">人偶妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W21\">篡夺皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W21\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/33 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W21\">林德龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/44 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W21\">透京妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W21\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W21\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W21\">机械梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/27 (0.1481)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W21\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/38 (0.0526)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W21\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/21 (0.0952)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W21\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W21\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/38 (0.1316)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W21\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/38 (0.1579)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W21\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W21\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W21\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/30 (0.2333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W21\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W21\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W21\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026-W21\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W21\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W21\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/6 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">86 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 29</span>\n          <span class=\"stat-pill percent\">25.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>80套 (93.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (3.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>2套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">62 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">18.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>49套 (79.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">24.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>55套 (64.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>16套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>7套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>5套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-SL08.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-037.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">15.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>34套 (64.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>9套 (17.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>4套 (7.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>3套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (5.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">22 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">6.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>8套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (13.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (13.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-SL22.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>3套 (13.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">25 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">7.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W21\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>20套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W21\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>5套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#主教\">⛪ 主教</a>"
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