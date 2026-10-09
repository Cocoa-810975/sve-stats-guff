(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 263,
    "deck_count": 2481,
    "top8_count": 1788,
    "top1_count": 327,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 751,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 516,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 386,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 379,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 285,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 97,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 61,
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
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-P01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 477,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 469,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 221,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 195,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 189,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 136,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 123,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 91,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 74,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 58,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 42,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 37,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 22,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 18,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 18,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 17,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 16,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 14,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 14,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 14,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 13,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 12,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 12,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 12,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 11,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 11,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 10,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 10,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 10,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 9,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 8,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 8,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 7,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 6,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 6,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 6,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 5,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 4,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 4,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 4,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 4,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 4,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 3,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 3,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-SL10.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 3,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 2,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 2,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SP18.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 2,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-P01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-004.jpg"
      },
      {
        "name": "巫师｜大美法",
        "value": 1,
        "link": "decktypes/decktype-b02e587006ac.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "主教｜聖なる願い型",
        "value": 1,
        "link": "decktypes/decktype-856773b7c741.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "龙族｜武装龙",
        "value": 1,
        "link": "decktypes/decktype-5a3c74f57a70.html",
        "image": "../../assets/cards/BP10-063.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
      },
      {
        "name": "巫师｜一世の探究型",
        "value": 1,
        "link": "decktypes/decktype-0756d6450098.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "皇家护卫｜〔Escorte étoile〕シリウスシンボリ型",
        "value": 1,
        "link": "decktypes/decktype-01c7e9eecd2a.html",
        "image": "../../assets/cards/CP04-019.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-P05.jpg"
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
        "category": "雷维翁皇",
        "count": 477,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 469,
        "best": "1/298",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 221,
        "best": "1/298",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 195,
        "best": "4/298",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 189,
        "best": "2/298",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 136,
        "best": "1/24",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 123,
        "best": "1/298",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 91,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 74,
        "best": "3/298",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 58,
        "best": "5/298",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 42,
        "best": "5/298",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 37,
        "best": "2/37",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录263场有效赛事、2481套有排名记录的卡组，其中上位卡组1788套、冠军卡组327套。从上位职业分布看，皇家护卫576套（32.2%）、龙族365套（20.4%）构成本范围的主要出场面，冠军侧则以皇家护卫115套（35.2%）、龙族64套（19.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」377套（21.1%，最好2/298）、龙族「五妹龙」342套（19.1%，最好1/298）、皇家护卫「财宝皇」162套（9.1%，最好1/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有722套，占全部记录29.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/25",
    "label": "2026/09/25-2026/10/01",
    "event_count": 25,
    "deck_count": 246,
    "top8_count": 156,
    "top1_count": 33,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 83,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 60,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "🔮 巫师",
        "value": 29,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 21,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 10,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 9,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-P01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 53,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 41,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 40,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 12,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 11,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 8,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 6,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 6,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 6,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 5,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 2,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 2,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 2,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-P01.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 1,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-SL31.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-SL10.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 1,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-003.jpg"
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
        "count": 53,
        "best": "1/18",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 41,
        "best": "1/16",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 40,
        "best": "1/15",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 13,
        "best": "1/19",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 12,
        "best": "1/9",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 11,
        "best": "1/24",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 8,
        "best": "1/24",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 8,
        "best": "1/17",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 6,
        "best": "2/13",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 6,
        "best": "2/10",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 6,
        "best": "2/9",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 5,
        "best": "5/16",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/25-2026/10/01共收录25场有效赛事、246套有排名记录的卡组，其中上位卡组156套、冠军卡组33套。从上位职业分布看，皇家护卫57套（36.5%）、龙族33套（21.2%）构成本范围的主要出场面，冠军侧则以皇家护卫9套（27.3%）、巫师9套（27.3%）表现最突出。卡组类型方面，龙族「五妹龙」31套（19.9%，最好1/18）、皇家护卫「雷维翁皇」30套（19.2%，最好1/16）、皇家护卫「财宝皇」25套（16.0%，最好1/15）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「学院法」，由スパルタクス使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有53套，占全部记录21.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/18",
    "label": "2026/09/18-2026/09/24",
    "event_count": 41,
    "deck_count": 400,
    "top8_count": 276,
    "top1_count": 59,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 117,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 104,
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
        "name": "🍃 精灵",
        "value": 48,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 43,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
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
        "value": 11,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 93,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 71,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 34,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 27,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 24,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 23,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 16,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 14,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 13,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 8,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 6,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 5,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 5,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 3,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 2,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 2,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜涅妃PCR",
        "value": 1,
        "link": "decktypes/decktype-0aa681ac28de.html",
        "image": "../../assets/cards/CP04-004.jpg"
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
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "龙族｜武装龙",
        "value": 1,
        "link": "decktypes/decktype-5a3c74f57a70.html",
        "image": "../../assets/cards/BP10-063.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
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
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜一世の探究型",
        "value": 1,
        "link": "decktypes/decktype-0756d6450098.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "皇家护卫｜〔Escorte étoile〕シリウスシンボリ型",
        "value": 1,
        "link": "decktypes/decktype-01c7e9eecd2a.html",
        "image": "../../assets/cards/CP04-019.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-028.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SP18.jpg"
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
        "count": 93,
        "best": "1/26",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 71,
        "best": "1/23",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 34,
        "best": "1/19",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 27,
        "best": "1/8",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 24,
        "best": "1/9",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 23,
        "best": "1/18",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 16,
        "best": "2/26",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 14,
        "best": "3/16",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 13,
        "best": "1/18",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 8,
        "best": "2/17",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 7,
        "best": "2/13",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 6,
        "best": "2/18",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/18-2026/09/24共收录41场有效赛事、400套有排名记录的卡组，其中上位卡组276套、冠军卡组59套。从上位职业分布看，皇家护卫88套（31.9%）、龙族65套（23.6%）构成本范围的主要出场面，冠军侧则以皇家护卫24套（40.7%）、龙族16套（27.1%）表现最突出。卡组类型方面，龙族「五妹龙」60套（21.7%，最好1/26）、皇家护卫「雷维翁皇」52套（18.8%，最好1/23）、皇家护卫「财宝皇」27套（9.8%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由フナ使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有85套，占全部记录21.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/11",
    "label": "2026/09/11-2026/09/17",
    "event_count": 35,
    "deck_count": 324,
    "top8_count": 183,
    "top1_count": 45,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 105,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 68,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 44,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 43,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 42,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 14,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 69,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 61,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 25,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 24,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 19,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 16,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 11,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 9,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 8,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 8,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 8,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 6,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "主教｜守护教",
        "value": 5,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 3,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 3,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 2,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 2,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
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
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 2,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SP18.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 1,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 1,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
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
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-SL10.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-P05.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 1,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 69,
        "best": "1/14",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 61,
        "best": "1/16",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 25,
        "best": "1/16",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 24,
        "best": "1/12",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 19,
        "best": "1/9",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 16,
        "best": "1/20",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 11,
        "best": "1/8",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 9,
        "best": "1/12",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 8,
        "best": "1/14",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 8,
        "best": "2/15",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "巫师",
        "category": "星星法",
        "count": 8,
        "best": "1/7",
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 6,
        "best": "1/10",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/11-2026/09/17共收录35场有效赛事、324套有排名记录的卡组，其中上位卡组183套、冠军卡组45套。从上位职业分布看，皇家护卫69套（37.7%）、龙族41套（22.4%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（33.3%）、龙族10套（22.2%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」45套（24.6%，最好1/14）、龙族「五妹龙」39套（21.3%，最好1/16）、皇家护卫「财宝皇」15套（8.2%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有64套，占全部记录19.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/04",
    "label": "2026/09/04-2026/09/10",
    "event_count": 26,
    "deck_count": 248,
    "top8_count": 154,
    "top1_count": 34,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 85,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 44,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 38,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 36,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 26,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 13,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 55,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 41,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 21,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 20,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 14,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 10,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 9,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 8,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 6,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 6,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 5,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 4,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 3,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 2,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
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
        "name": "巫师｜土法",
        "value": 2,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-SL10.jpg"
      },
      {
        "name": "巫师｜大美法",
        "value": 1,
        "link": "decktypes/decktype-b02e587006ac.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 1,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 1,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 1,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
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
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 55,
        "best": "1/18",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 41,
        "best": "1/24",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 21,
        "best": "1/18",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 20,
        "best": "1/12",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 14,
        "best": "1/11",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 10,
        "best": "1/11",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 9,
        "best": "1/12",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 8,
        "best": "2/18",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 6,
        "best": "2/17",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 6,
        "best": "1/7",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 5,
        "best": "2/8",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 4,
        "best": "2/10",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/04-2026/09/10共收录26场有效赛事、248套有排名记录的卡组，其中上位卡组154套、冠军卡组34套。从上位职业分布看，皇家护卫56套（36.4%）、龙族29套（18.8%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（41.2%）、巫师7套（20.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」39套（25.3%，最好1/18）、龙族「五妹龙」28套（18.2%，最好1/24）、巫师「学院法」15套（9.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有52套，占全部记录21.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/28",
    "label": "2026/08/28-2026/09/03",
    "event_count": 4,
    "deck_count": 120,
    "top8_count": 116,
    "top1_count": 6,
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
        "value": 31,
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
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
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
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 36,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 31,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 6,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 6,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 3,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 36,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 31,
        "best": "1/298",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 13,
        "best": "4/298",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 7,
        "best": "2/298",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 6,
        "best": "1/298",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 6,
        "best": "14/298",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 4,
        "best": "5/298",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 3,
        "best": "1/298",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 3,
        "best": "3/298",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 2,
        "best": "25/298",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 2,
        "best": "3/9",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "巫师",
        "category": "星星法",
        "count": 1,
        "best": "4/298",
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/28-2026/09/03共收录4场有效赛事、120套有排名记录的卡组，其中上位卡组116套、冠军卡组6套。从上位职业分布看，皇家护卫43套（37.1%）、龙族30套（25.9%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（66.7%）、龙族1套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」36套（31.0%，最好2/298）、龙族「五妹龙」30套（25.9%，最好1/298）、精灵「人偶妖」13套（11.2%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有100套，占全部记录83.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/21",
    "label": "2026/08/21-2026/08/27",
    "event_count": 30,
    "deck_count": 277,
    "top8_count": 223,
    "top1_count": 36,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 99,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 58,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 49,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "💀 梦魇",
        "value": 26,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 78,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 56,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 35,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 20,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 17,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 11,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 10,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 9,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 2,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
      },
      {
        "name": "主教｜宇宙教",
        "value": 2,
        "link": "decktypes/decktype-6bdb34ded311.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 1,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 1,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 1,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "主教｜聖なる願い型",
        "value": 1,
        "link": "decktypes/decktype-856773b7c741.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
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
        "category": "雷维翁皇",
        "count": 78,
        "best": "1/33",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 56,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 35,
        "best": "2/37",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 20,
        "best": "1/14",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 17,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 11,
        "best": "1/17",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 10,
        "best": "2/22",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 9,
        "best": "2/17",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 5,
        "best": "1/23",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "2/11",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 3,
        "best": "1/30",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 3,
        "best": "1/26",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/21-2026/08/27共收录30场有效赛事、277套有排名记录的卡组，其中上位卡组223套、冠军卡组36套。从上位职业分布看，皇家护卫84套（37.7%）、龙族49套（22.0%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（47.2%）、精灵6套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」68套（30.5%，最好1/33）、龙族「五妹龙」47套（21.1%，最好1/37）、精灵「人偶妖」25套（11.2%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有86套，占全部记录31.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/14",
    "label": "2026/08/14-2026/08/20",
    "event_count": 30,
    "deck_count": 256,
    "top8_count": 205,
    "top1_count": 32,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 82,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 55,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 42,
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
        "name": "💀 梦魇",
        "value": 24,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 10,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 7,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 63,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 37,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 34,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 25,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 17,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 14,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 10,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 9,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 7,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 5,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 3,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 3,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 2,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 2,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
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
        "category": "雷维翁皇",
        "count": 63,
        "best": "1/27",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 37,
        "best": "1/47",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 34,
        "best": "2/41",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 25,
        "best": "1/41",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 17,
        "best": "1/17",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 14,
        "best": "1/9",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 10,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 9,
        "best": "2/24",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 7,
        "best": "1/27",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 5,
        "best": "1/14",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 5,
        "best": "2/15",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 4,
        "best": "5/40",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/14-2026/08/20共收录30场有效赛事、256套有排名记录的卡组，其中上位卡组205套、冠军卡组32套。从上位职业分布看，皇家护卫67套（32.7%）、精灵48套（23.4%）构成本范围的主要出场面，冠军侧则以精灵14套（43.8%）、皇家护卫7套（21.9%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」54套（26.3%，最好1/27）、精灵「人偶妖」36套（17.6%，最好1/47）、龙族「五妹龙」28套（13.7%，最好2/41）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「人偶妖」，由az使用，成绩为1/47，成绩系数0.0213。整体来看，前10%成绩卡组共有82套，占全部记录32.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/07",
    "label": "2026/08/07-2026/08/13",
    "event_count": 41,
    "deck_count": 337,
    "top8_count": 263,
    "top1_count": 47,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 89,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 72,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 60,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 54,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 42,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 11,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 9,
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 52,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 45,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 30,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 28,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 26,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 24,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 11,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 8,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 6,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 4,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 4,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 4,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 3,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 1,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 67,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 52,
        "best": "1/58",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 45,
        "best": "1/52",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 30,
        "best": "1/22",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 28,
        "best": "1/22",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 26,
        "best": "1/35",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 24,
        "best": "2/52",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 11,
        "best": "1/14",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 8,
        "best": "1/11",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 6,
        "best": "1/32",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 4,
        "best": "2/37",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "主教",
        "category": "学院教",
        "count": 4,
        "best": "3/37",
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/07-2026/08/13共收录41场有效赛事、337套有排名记录的卡组，其中上位卡组263套、冠军卡组47套。从上位职业分布看，皇家护卫75套（28.5%）、龙族54套（20.5%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（36.2%）、龙族10套（21.3%）表现最突出。卡组类型方面，龙族「五妹龙」50套（19.0%，最好1/37）、皇家护卫「雷维翁皇」44套（16.7%，最好1/58）、巫师「二妹法」31套（11.8%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有109套，占全部记录32.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/31",
    "label": "2026/07/31-2026/08/06",
    "event_count": 31,
    "deck_count": 273,
    "top8_count": 212,
    "top1_count": 35,
    "class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 67,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 49,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 48,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 48,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 37,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 18,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 45,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 33,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 32,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 32,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 23,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 17,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 13,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 12,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 7,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 6,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 6,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 3,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 3,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 2,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 2,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 2,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 2,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
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
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 1,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 1,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      }
    ],
    "top_types": [
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 45,
        "best": "1/45",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 33,
        "best": "1/49",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 32,
        "best": "1/28",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 32,
        "best": "1/24",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 23,
        "best": "1/32",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 17,
        "best": "1/21",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 13,
        "best": "2/40",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 12,
        "best": "1/40",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 7,
        "best": "2/45",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 6,
        "best": "2/30",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "主教",
        "category": "学院教",
        "count": 6,
        "best": "6/30",
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "5/28",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/31-2026/08/06共收录31场有效赛事、273套有排名记录的卡组，其中上位卡组212套、冠军卡组35套。从上位职业分布看，巫师53套（25.0%）、皇家护卫37套（17.5%）构成本范围的主要出场面，冠军侧则以巫师12套（34.3%）、皇家护卫8套（22.9%）表现最突出。卡组类型方面，巫师「二妹法」37套（17.5%，最好1/45）、龙族「五妹龙」29套（13.7%，最好1/49）、皇家护卫「财宝皇」25套（11.8%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有91套，占全部记录33.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 263,
    "deck_count": 2481,
    "top8_count": 1788,
    "top1_count": 327,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 576,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 365,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 274,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 271,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 200,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 57,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 41,
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
        "image": "../../assets/cards/ECP01-P01.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 115,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🔮 巫师",
        "value": 54,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 46,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 31,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-P01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 377,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 342,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 162,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 153,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 141,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 96,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 94,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 423,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 72,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 62,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 39,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 29,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 28,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 20,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 14,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 63,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 423,
    "type_other_types": 56,
    "top1_type_other_count": 63,
    "top1_type_other_types": 26,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html\"><b>梦魇｜骰子梦</b><span>9套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>9套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>5套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html\"><b>精灵｜兽妖</b><span>4套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html\"><b>公主连结Re:Dive｜法术PCR</b><span>4套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>4套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>3套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html\"><b>主教｜守护教</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html\"><b>巫师｜星星法</b><span>2套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>2套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>2套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-90c874a554cb.html\"><b>巫师｜消失法</b><span>2套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-246e45fe1891.html\"><b>龙族｜学院龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-5a0677b37803.html\"><b>赛马娘｜横马</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html\"><b>主教｜护符教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0aa681ac28de.html\"><b>公主连结Re:Dive｜涅妃PCR</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7ea4d7128729.html\"><b>龙族｜荒野龙</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-717ed8345f1c.html\"><b>主教｜学院教</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录263场有效赛事、2481套有排名记录的卡组，其中上位卡组1788套、冠军卡组327套。从上位职业分布看，皇家护卫576套（32.2%）、龙族365套（20.4%）构成本范围的主要出场面，冠军侧则以皇家护卫115套（35.2%）、龙族64套（19.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」377套（21.1%，最好2/298）、龙族「五妹龙」342套（19.1%，最好1/298）、皇家护卫「财宝皇」162套（9.1%，最好1/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有722套，占全部记录29.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">377</td><td style=\"text-align:center\">315-284 (52.6%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">342</td><td style=\"text-align:center\">256-258 (49.8%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">162</td><td style=\"text-align:center\">163-121 (57.4%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">153</td><td style=\"text-align:center\">141-116 (54.9%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">141</td><td style=\"text-align:center\">121-108 (52.8%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html\">骰子梦</a></td><td style=\"text-align:center\">96</td><td style=\"text-align:center\">55-81 (40.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">94</td><td style=\"text-align:center\">72-72 (50.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">60</td><td style=\"text-align:center\">57-45 (55.9%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">57</td><td style=\"text-align:center\">34-52 (39.5%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">30-25 (54.5%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">18-22 (45.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">20-20 (50.0%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">13-12 (52.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">15-9 (62.5%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">8-12 (40.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-7 (58.8%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">5-8 (38.5%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3-8 (27.3%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html\">学院教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-7 (36.4%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">10-3 (76.9%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-5 (50.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html\">学院龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html\">龙人龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html\">荒野龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/5 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html\">学院皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html\">抉择梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/19 (0.3158)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a3c74f57a70.html\">武装龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">751 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 248</span>\n          <span class=\"stat-pill percent\">30.3%</span>\n          <span class=\"stat-pill archetypes\">13 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>477套 (63.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>221套 (29.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>13套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>12套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>9套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>6套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>4套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (0.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01c7e9eecd2a.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/CP04-019.jpg\" alt=\"〔Escorte étoile〕シリウスシンボリ型核心卡\"><span class=\"archetype-tag-body\"><b>〔Escorte étoile〕シリウスシンボリ型</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-P05.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">516 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 144</span>\n          <span class=\"stat-pill percent\">20.8%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>469套 (90.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>12套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>11套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>5套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>4套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>4套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5a3c74f57a70.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP10-063.jpg\" alt=\"武装龙核心卡\"><span class=\"archetype-tag-body\"><b>武装龙</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">386 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 116</span>\n          <span class=\"stat-pill percent\">15.6%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>195套 (50.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>91套 (23.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>58套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>17套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>12套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>6套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>4套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>3套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">379 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 110</span>\n          <span class=\"stat-pill percent\">15.3%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>189套 (49.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>123套 (32.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>18套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>16套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>14套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>11套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>2套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"大美法核心卡\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0756d6450098.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"一世の探究型核心卡\"><span class=\"archetype-tag-body\"><b>一世の探究型</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">285 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 68</span>\n          <span class=\"stat-pill percent\">11.5%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>136套 (47.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>74套 (26.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>22套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>14套 (4.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>9套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>8套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>7套 (2.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-076.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>6套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>4套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>3套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>2套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">97 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">3.9%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>37套 (38.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>14套 (14.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>10套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>10套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>10套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>8套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SP18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-856773b7c741.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"聖なる願い型核心卡\"><span class=\"archetype-tag-body\"><b>聖なる願い型</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">61 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>42套 (68.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>18套 (29.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-004.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-P01.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-028.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/09/25": {
    "key": "2026/09/25",
    "label": "2026/09/25-2026/10/01",
    "event_count": 25,
    "deck_count": 246,
    "top8_count": 156,
    "top1_count": 33,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 57,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 33,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 23,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 19,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "value": 6,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
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
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-P01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-P01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 31,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 30,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 25,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 10,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 8,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 7,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 3,
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
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 38,
    "type_other_types": 23,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F25\"><b>梦魇｜永火梦</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F25\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F09%2F25\"><b>赛马娘｜横马</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F25\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F25\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/25-2026/10/01共收录25场有效赛事、246套有排名记录的卡组，其中上位卡组156套、冠军卡组33套。从上位职业分布看，皇家护卫57套（36.5%）、龙族33套（21.2%）构成本范围的主要出场面，冠军侧则以皇家护卫9套（27.3%）、巫师9套（27.3%）表现最突出。卡组类型方面，龙族「五妹龙」31套（19.9%，最好1/18）、皇家护卫「雷维翁皇」30套（19.2%，最好1/16）、皇家护卫「财宝皇」25套（16.0%，最好1/15）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「学院法」，由スパルタクス使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有53套，占全部记录21.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F25\">五妹龙</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">21-24 (46.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F25\">雷维翁皇</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">24-25 (49.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F25\">财宝皇</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">24-21 (53.3%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F25\">学院法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">13-5 (72.2%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F25\">连击妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-7 (41.7%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F25\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F25\">二妹法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F25\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F25\">跳费PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F25\">骰子梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F25\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-0 (100.0%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F25\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F25\">星星法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F25\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F25\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F09%2F25\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F25\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F25\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F25\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F25\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F25\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F25\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F25\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F25\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F25\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F25\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/9 (0.4444)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F25\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F09%2F25\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F09%2F25\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F09%2F25\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">83 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">33.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>41套 (49.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>40套 (48.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">60 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">24.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>53套 (88.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">12.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (41.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>8套 (25.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>6套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>12套 (41.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>11套 (37.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">8.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>8套 (38.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>6套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>3套 (30.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>6套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F25\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F09%2F25\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL31.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F09%2F25\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-P01.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F09%2F25\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-003.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/09/18": {
    "key": "2026/09/18",
    "label": "2026/09/18-2026/09/24",
    "event_count": 41,
    "deck_count": 400,
    "top8_count": 276,
    "top1_count": 59,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 88,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 65,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 9,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 7,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 24,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 16,
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
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
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 60,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 52,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 27,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 21,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 17,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 14,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 13,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 16,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 16,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 6,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 4,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 3,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 72,
    "type_other_types": 29,
    "top1_type_other_count": 7,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F18\"><b>公主连结Re:Dive｜跳费PCR</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F18\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F18\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F09%2F18\"><b>公主连结Re:Dive｜涅妃PCR</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F09%2F18\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F18\"><b>主教｜守护教</b><span>1套，最好成绩 1/3</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/18-2026/09/24共收录41场有效赛事、400套有排名记录的卡组，其中上位卡组276套、冠军卡组59套。从上位职业分布看，皇家护卫88套（31.9%）、龙族65套（23.6%）构成本范围的主要出场面，冠军侧则以皇家护卫24套（40.7%）、龙族16套（27.1%）表现最突出。卡组类型方面，龙族「五妹龙」60套（21.7%，最好1/26）、皇家护卫「雷维翁皇」52套（18.8%，最好1/23）、皇家护卫「财宝皇」27套（9.8%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由フナ使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有85套，占全部记录21.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F18\">五妹龙</a></td><td style=\"text-align:center\">60</td><td style=\"text-align:center\">51-44 (53.7%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F18\">雷维翁皇</a></td><td style=\"text-align:center\">52</td><td style=\"text-align:center\">54-36 (60.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F18\">财宝皇</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">27-21 (56.3%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F18\">学院法</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">14-17 (45.2%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F18\">人偶妖</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">10-16 (38.5%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F18\">二妹法</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">12-11 (52.2%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F18\">永火梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">15-10 (60.0%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F18\">连击妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">11-6 (64.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F18\">骰子梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">3-10 (23.1%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F18\">法术PCR</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F18\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F18\">守护教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F18\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F18\">土法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F18\">2c梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F18\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F18\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F18\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F18\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F09%2F18\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F09%2F18\">宇宙龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F09%2F18\">涅妃PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F18\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F09%2F18\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/5 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F18\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F09%2F18\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F18\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F09%2F18\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F18\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F09%2F18\">大哥龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a3c74f57a70.html?scope=2026%2F09%2F18\">武装龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F09%2F18\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F09%2F18\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F18\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F18\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F09%2F18\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 34</span>\n          <span class=\"stat-pill percent\">29.3%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>71套 (60.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>34套 (29.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01c7e9eecd2a.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/CP04-019.jpg\" alt=\"〔Escorte étoile〕シリウスシンボリ型核心卡\"><span class=\"archetype-tag-body\"><b>〔Escorte étoile〕シリウスシンボリ型</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">104 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">26.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>93套 (89.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>3套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5a3c74f57a70.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP10-063.jpg\" alt=\"武装龙核心卡\"><span class=\"archetype-tag-body\"><b>武装龙</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">12.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>27套 (56.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>13套 (27.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>5套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">63 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">15.8%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>24套 (38.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>23套 (36.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>5套 (7.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0756d6450098.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"一世の探究型核心卡\"><span class=\"archetype-tag-body\"><b>一世の探究型</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.8%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>16套 (37.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>14套 (32.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>5套 (11.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-076.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>6套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SP18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F18\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>8套 (72.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F18\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0aa681ac28de.html?scope=2026%2F09%2F18\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-004.jpg\" alt=\"涅妃PCR核心卡\"><span class=\"archetype-tag-body\"><b>涅妃PCR</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F09%2F18\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F09%2F18\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-028.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/09/11": {
    "key": "2026/09/11",
    "label": "2026/09/11-2026/09/17",
    "event_count": 35,
    "deck_count": 324,
    "top8_count": 183,
    "top1_count": 45,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 69,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
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
        "name": "🍃 精灵",
        "value": 24,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 23,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 15,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 8,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 6,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 45,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 39,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 15,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 12,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 11,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 53,
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 9,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 4,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 4,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
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
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 53,
    "type_other_types": 25,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F11\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F11\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F11\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F11\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F11\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F09%2F11\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F11\"><b>巫师｜星星法</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/11-2026/09/17共收录35场有效赛事、324套有排名记录的卡组，其中上位卡组183套、冠军卡组45套。从上位职业分布看，皇家护卫69套（37.7%）、龙族41套（22.4%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（33.3%）、龙族10套（22.2%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」45套（24.6%，最好1/14）、龙族「五妹龙」39套（21.3%，最好1/16）、皇家护卫「财宝皇」15套（8.2%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有64套，占全部记录19.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F11\">雷维翁皇</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">34-36 (48.6%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F11\">五妹龙</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">34-29 (54.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F11\">财宝皇</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">14-10 (58.3%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F11\">学院法</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">12-8 (60.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F11\">人偶妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F11\">永火梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F11\">骰子梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F11\">兽妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F11\">nc梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F11\">连击妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F11\">二妹法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F11\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F11\">宇宙皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F11\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F11\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F11\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F11\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F11\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F11\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F09%2F11\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F11\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F11\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F09%2F11\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F09%2F11\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F09%2F11\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F09%2F11\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F11\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F09%2F11\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F09%2F11\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F11\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F09%2F11\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">105 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">32.4%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>69套 (65.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>24套 (22.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>3套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-P05.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">68 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">21.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>61套 (89.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>2套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>2套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">13.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>19套 (45.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>11套 (26.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>8套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">13.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>25套 (58.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>8套 (18.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>6套 (14.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>2套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">13.6%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>16套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>9套 (20.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>8套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (11.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>2套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-076.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">4.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>3套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SP18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F09%2F11\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F11\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>5套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F11\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/09/04": {
    "key": "2026/09/04",
    "label": "2026/09/04-2026/09/10",
    "event_count": 26,
    "deck_count": 248,
    "top8_count": 154,
    "top1_count": 34,
    "top8_class_distribution": [
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
        "value": 29,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 26,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 18,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 17,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 7,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
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
    "top1_class_distribution": [
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
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP19-SL23.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 39,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 28,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 15,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 14,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 7,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 7,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 44,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 7,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 7,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 5,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 44,
    "type_other_types": 25,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F04\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F04\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F04\"><b>主教｜护符教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F04\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F04\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F04\"><b>龙族｜荒野龙</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F04\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F04\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/04-2026/09/10共收录26场有效赛事、248套有排名记录的卡组，其中上位卡组154套、冠军卡组34套。从上位职业分布看，皇家护卫56套（36.4%）、龙族29套（18.8%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（41.2%）、巫师7套（20.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」39套（25.3%，最好1/18）、龙族「五妹龙」28套（18.2%，最好1/24）、巫师「学院法」15套（9.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有52套，占全部记录21.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F04\">雷维翁皇</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">28-32 (46.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F04\">五妹龙</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">20-23 (46.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F04\">学院法</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">13-10 (56.5%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F04\">财宝皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">20-7 (74.1%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F04\">骰子梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F04\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F04\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F04\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F04\">二妹法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F04\">八狱法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F04\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F04\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F04\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F04\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F04\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F04\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F04\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F04\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F04\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026%2F09%2F04\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F09%2F04\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F04\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F04\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F09%2F04\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F09%2F04\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/6 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F04\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F04\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F04\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F04\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F04\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F04\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">34.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>55套 (64.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>21套 (24.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>4套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>41套 (93.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026%2F09%2F04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F09%2F04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F09%2F04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">38 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">15.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>14套 (36.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>8套 (21.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>6套 (15.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>5套 (13.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (7.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">14.5%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>20套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>6套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"大美法核心卡\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">10.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>10套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>9套 (34.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-076.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (3.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">5.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (30.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F04\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F04\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/28": {
    "key": "2026/08/28",
    "label": "2026/08/28-2026/09/03",
    "event_count": 4,
    "deck_count": 120,
    "top8_count": 116,
    "top1_count": 6,
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
        "value": 30,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 20,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 9,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
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
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 1,
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
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 36,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 30,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 7,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 6,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 6,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 18,
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 2,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "type_other_count": 18,
    "type_other_types": 11,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/28-2026/09/03共收录4场有效赛事、120套有排名记录的卡组，其中上位卡组116套、冠军卡组6套。从上位职业分布看，皇家护卫43套（37.1%）、龙族30套（25.9%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（66.7%）、龙族1套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」36套（31.0%，最好2/298）、龙族「五妹龙」30套（25.9%，最好1/298）、精灵「人偶妖」13套（11.2%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有100套，占全部记录83.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F28\">雷维翁皇</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">13-13 (50.0%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F28\">五妹龙</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">9-7 (56.3%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F28\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F28\">二妹法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F28\">财宝皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F28\">骰子梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">14/298 (0.0470)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F28\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F28\">学院法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F28\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F28\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F28\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F28\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F28\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">25/298 (0.0839)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F28\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">28/298 (0.0940)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F28\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">32/298 (0.1074)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F28\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F28\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 36</span>\n          <span class=\"stat-pill percent\">35.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>36套 (83.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>6套 (14.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">25.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>31套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (61.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">9.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>7套 (63.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">8.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>6套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (30.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F08%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F28\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/21": {
    "key": "2026/08/21",
    "label": "2026/08/21-2026/08/27",
    "event_count": 30,
    "deck_count": 277,
    "top8_count": 223,
    "top1_count": 36,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 84,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 49,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 35,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 30,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 20,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "value": 2,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 17,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🍃 精灵",
        "value": 6,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 68,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 47,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 25,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 17,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 12,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 9,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 9,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 13,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 6,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 36,
    "type_other_types": 21,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F08%2F21\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F21\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F21\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F21\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F21\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F08%2F21\"><b>巫师｜机械法</b><span>1套，最好成绩 1/8</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/21-2026/08/27共收录30场有效赛事、277套有排名记录的卡组，其中上位卡组223套、冠军卡组36套。从上位职业分布看，皇家护卫84套（37.7%）、龙族49套（22.0%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（47.2%）、精灵6套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」68套（30.5%，最好1/33）、龙族「五妹龙」47套（21.1%，最好1/37）、精灵「人偶妖」25套（11.2%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有86套，占全部记录31.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F21\">雷维翁皇</a></td><td style=\"text-align:center\">68</td><td style=\"text-align:center\">69-55 (55.6%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F21\">五妹龙</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">34-41 (45.3%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F21\">人偶妖</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">24-20 (54.5%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F21\">二妹法</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">9-16 (36.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F21\">财宝皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">16-8 (66.7%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F21\">骰子梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-8 (42.9%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F21\">学院法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-9 (40.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F21\">兽妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3-8 (27.3%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F21\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F08%2F21\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F08%2F21\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F21\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F21\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F21\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F08%2F21\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F21\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F21\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F21\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/33 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F21\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/33 (0.2121)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F08%2F21\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F08%2F21\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F21\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F08%2F21\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F08%2F21\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F21\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F21\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/23 (0.3478)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F21\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F21\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">99 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 40</span>\n          <span class=\"stat-pill percent\">35.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>78套 (78.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>17套 (17.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">58 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">20.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>56套 (96.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>35套 (71.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>9套 (18.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">34 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">12.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>20套 (58.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>10套 (29.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">9.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>11套 (42.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>5套 (19.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP20-076.jpg\" alt=\"抉择梦核心卡\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-856773b7c741.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"聖なる願い型核心卡\"><span class=\"archetype-tag-body\"><b>聖なる願い型</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F21\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/14": {
    "key": "2026/08/14",
    "label": "2026/08/14-2026/08/20",
    "event_count": 30,
    "deck_count": 256,
    "top8_count": 205,
    "top1_count": 32,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 67,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 48,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 34,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 29,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 14,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 7,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "value": 2,
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
        "image": "../../assets/cards/BP21-SL19.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 54,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 36,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 28,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 21,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 12,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 9,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "name": "精灵｜人偶妖",
        "value": 12,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 2,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 45,
    "type_other_types": 17,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F14\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F14\"><b>巫师｜星星法</b><span>1套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F08%2F14\"><b>主教｜节奏教</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F14\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F14\"><b>主教｜守护教</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F14\"><b>龙族｜学院龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F14\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/9</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/14-2026/08/20共收录30场有效赛事、256套有排名记录的卡组，其中上位卡组205套、冠军卡组32套。从上位职业分布看，皇家护卫67套（32.7%）、精灵48套（23.4%）构成本范围的主要出场面，冠军侧则以精灵14套（43.8%）、皇家护卫7套（21.9%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」54套（26.3%，最好1/27）、精灵「人偶妖」36套（17.6%，最好1/47）、龙族「五妹龙」28套（13.7%，最好2/41）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「人偶妖」，由az使用，成绩为1/47，成绩系数0.0213。整体来看，前10%成绩卡组共有82套，占全部记录32.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F14\">雷维翁皇</a></td><td style=\"text-align:center\">54</td><td style=\"text-align:center\">40-49 (44.9%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F14\">人偶妖</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">52-24 (68.4%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F14\">五妹龙</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">20-26 (43.5%)</td><td style=\"text-align:center\">2/41 (0.0488)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F14\">二妹法</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">11-19 (36.7%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F14\">财宝皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F14\">骰子梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">2-8 (20.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F14\">学院法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F14\">兽妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F14\">法术PCR</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F14\">守护教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F14\">永火梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F14\">2c梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F14\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F14\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/45 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F14\">学院龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F14\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F14\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F08%2F14\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F08%2F14\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F14\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F08%2F14\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F14\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F08%2F14\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">82 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">32.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F14\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>63套 (76.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F14\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>17套 (20.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F14\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">16.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>34套 (81.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>3套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">55 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">21.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>37套 (67.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>10套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>3套 (5.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">14.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>25套 (69.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>9套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-SL07.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">9.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>14套 (58.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>5套 (20.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F14\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>7套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/07": {
    "key": "2026/08/07",
    "label": "2026/08/07-2026/08/13",
    "event_count": 41,
    "deck_count": 337,
    "top8_count": 263,
    "top1_count": 47,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 75,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 42,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "💀 梦魇",
        "value": 34,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 7,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 17,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "image": "../../assets/cards/BP21-U06.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 50,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 44,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 31,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 26,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 24,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 23,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 15,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 50,
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
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 10,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 6,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 4,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 2,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 50,
    "type_other_types": 21,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F07\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F08%2F07\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F07\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F07\"><b>巫师｜学院法</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F07\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F07\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F08%2F07\"><b>主教｜学院教</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/07-2026/08/13共收录41场有效赛事、337套有排名记录的卡组，其中上位卡组263套、冠军卡组47套。从上位职业分布看，皇家护卫75套（28.5%）、龙族54套（20.5%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（36.2%）、龙族10套（21.3%）表现最突出。卡组类型方面，龙族「五妹龙」50套（19.0%，最好1/37）、皇家护卫「雷维翁皇」44套（16.7%，最好1/58）、巫师「二妹法」31套（11.8%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有109套，占全部记录32.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F07\">五妹龙</a></td><td style=\"text-align:center\">50</td><td style=\"text-align:center\">47-40 (54.0%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F07\">雷维翁皇</a></td><td style=\"text-align:center\">44</td><td style=\"text-align:center\">44-32 (57.9%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F07\">二妹法</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">30-25 (54.5%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F07\">财宝皇</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">22-22 (50.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F07\">人偶妖</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">18-20 (47.4%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F07\">骰子梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">17-21 (44.7%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F07\">兽妖</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-14 (44.0%)</td><td style=\"text-align:center\">2/52 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F07\">永火梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">7-8 (46.7%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F07\">学院法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F07\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F07\">守护教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F08%2F07\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F07\">消失法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F08%2F07\">学院教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F07\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F07\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F07\">学院龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F07\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F08%2F07\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F07\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F07\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/52 (0.1346)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F07\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F07\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F07\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F07\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F08%2F07\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/19 (0.3158)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F07\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F08%2F07\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">89 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">26.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>52套 (58.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>30套 (33.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">72 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">21.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>67套 (93.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>3套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">16.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>26套 (48.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>24套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">60 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>45套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>8套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>28套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>11套 (26.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">3.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>4套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>4套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">2.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F07\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>6套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F08%2F07\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/07/31": {
    "key": "2026/07/31",
    "label": "2026/07/31-2026/08/06",
    "event_count": 31,
    "deck_count": 273,
    "top8_count": 212,
    "top1_count": 35,
    "top8_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 53,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 37,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 37,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 35,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 30,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 5,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 8,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 4,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "巫师｜二妹法",
        "value": 37,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 29,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 25,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 23,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 15,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 10,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 9,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "巫师｜二妹法",
        "value": 12,
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
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 3,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 3,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 3,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 51,
    "type_other_types": 26,
    "top1_type_other_count": 3,
    "top1_type_other_types": 3,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F31\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F31\"><b>主教｜守护教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F31\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/31-2026/08/06共收录31场有效赛事、273套有排名记录的卡组，其中上位卡组212套、冠军卡组35套。从上位职业分布看，巫师53套（25.0%）、皇家护卫37套（17.5%）构成本范围的主要出场面，冠军侧则以巫师12套（34.3%）、皇家护卫8套（22.9%）表现最突出。卡组类型方面，巫师「二妹法」37套（17.5%，最好1/45）、龙族「五妹龙」29套（13.7%，最好1/49）、皇家护卫「财宝皇」25套（11.8%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有91套，占全部记录33.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F31\">二妹法</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">44-25 (63.8%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F31\">五妹龙</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">20-24 (45.5%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F31\">财宝皇</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">26-20 (56.5%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F07%2F31\">骰子梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">20-20 (50.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F07%2F31\">兽妖</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-13 (45.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F31\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">10-11 (47.6%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F07%2F31\">学院法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">5-10 (33.3%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F07%2F31\">雷维翁皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F31\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">2/45 (0.0444)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F31\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F07%2F31\">学院教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F31\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F31\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F31\">控教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F31\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F31\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F31\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F07%2F31\">土法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F31\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/42 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F31\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F31\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/40 (0.0750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F31\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F31\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F31\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F07%2F31\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F07%2F31\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F31\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F31\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F31\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F31\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F31\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F31\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F31\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F31\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">17.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>32套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>12套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">13.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>33套 (89.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F07%2F31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL16.jpg\" alt=\"龙人龙核心卡\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F07%2F31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F07%2F31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">17.6%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>23套 (47.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>17套 (35.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">24.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>45套 (67.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>13套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-SL09.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">17.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>32套 (65.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>7套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">6.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>6套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>6套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>3套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
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