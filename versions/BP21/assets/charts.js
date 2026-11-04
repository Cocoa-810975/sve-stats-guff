(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 102,
    "deck_count": 951,
    "top8_count": 951,
    "top1_count": 110,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 331,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 178,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 146,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 144,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 101,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 30,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 218,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 169,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 92,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 91,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 86,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 53,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 34,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 33,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 27,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 14,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 13,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 7,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 7,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 6,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 6,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 5,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 5,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 5,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 5,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 5,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 5,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 4,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 4,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "龙族｜龙人龙",
        "value": 4,
        "link": "decktypes/decktype-ca24d30a1a65.html",
        "image": "../../assets/cards/BP21-SL16.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 4,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 3,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 2,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 1,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 1,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "巫师｜大美法",
        "value": 1,
        "link": "decktypes/decktype-b02e587006ac.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜宇宙梦",
        "value": 1,
        "link": "decktypes/decktype-ca5fd6cc5e75.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 1,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 218,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 169,
        "best": "1/298",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 92,
        "best": "1/298",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 91,
        "best": "2/298",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 86,
        "best": "4/298",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 53,
        "best": "1/24",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 34,
        "best": "1/298",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 33,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 27,
        "best": "3/298",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 14,
        "best": "5/298",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 13,
        "best": "2/37",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 12,
        "best": "5/298",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录102场有效赛事、951套有排名记录的卡组，其中上位卡组951套、冠军卡组110套。从上位职业分布看，皇家护卫331套（34.8%）、龙族178套（18.7%）构成本范围的主要出场面，冠军侧则以皇家护卫42套（38.2%）、龙族19套（17.3%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」218套（22.9%，最好2/298）、龙族「五妹龙」169套（17.8%，最好1/298）、皇家护卫「财宝皇」92套（9.7%，最好1/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有404套，占全部记录42.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/25",
    "label": "2026/09/25-2026/10/01",
    "event_count": 6,
    "deck_count": 48,
    "top8_count": 48,
    "top1_count": 6,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 23,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🍃 精灵",
        "value": 7,
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
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 12,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 10,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 3,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
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
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 12,
        "best": "2/24",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 10,
        "best": "2/24",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 9,
        "best": "1/18",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 3,
        "best": "1/24",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
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
        "class": "精灵",
        "category": "人偶妖",
        "count": 2,
        "best": "1/19",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 1,
        "best": "1/24",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 1,
        "best": "5/24",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "巫师",
        "category": "土法",
        "count": 1,
        "best": "4/18",
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 1,
        "best": "4/17",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "篡夺皇",
        "count": 1,
        "best": "6/24",
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 1,
        "best": "5/19",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/25-2026/10/01共收录6场有效赛事、48套有排名记录的卡组，其中上位卡组48套、冠军卡组6套。从上位职业分布看，皇家护卫23套（47.9%）、龙族9套（18.8%）构成本范围的主要出场面，冠军侧则以精灵3套（50.0%）、龙族1套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」12套（25.0%，最好2/24）、皇家护卫「财宝皇」10套（20.8%，最好2/24）、龙族「五妹龙」9套（18.8%，最好1/18）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「学院法」，由スパルタクス使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有14套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/18",
    "label": "2026/09/18-2026/09/24",
    "event_count": 10,
    "deck_count": 96,
    "top8_count": 96,
    "top1_count": 12,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 35,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 21,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 13,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 8,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 21,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 18,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 12,
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
        "name": "梦魇｜永火梦",
        "value": 6,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 3,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 21,
        "best": "1/26",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 18,
        "best": "1/23",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 12,
        "best": "1/19",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 7,
        "best": "1/18",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 6,
        "best": "2/26",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 5,
        "best": "4/26",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 5,
        "best": "3/18",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 3,
        "best": "2/17",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 3,
        "best": "5/23",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 2,
        "best": "2/23",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 2,
        "best": "4/18",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 2,
        "best": "5/17",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/18-2026/09/24共收录10场有效赛事、96套有排名记录的卡组，其中上位卡组96套、冠军卡组12套。从上位职业分布看，皇家护卫35套（36.5%）、龙族21套（21.9%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（41.7%）、龙族4套（33.3%）表现最突出。卡组类型方面，龙族「五妹龙」21套（21.9%，最好1/26）、皇家护卫「雷维翁皇」18套（18.8%，最好1/23）、皇家护卫「财宝皇」12套（12.5%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由フナ使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有27套，占全部记录28.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/11",
    "label": "2026/09/11-2026/09/17",
    "event_count": 2,
    "deck_count": 16,
    "top8_count": 16,
    "top1_count": 2,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
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
        "name": "🐉 龙族",
        "value": 2,
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 5,
        "best": "2/17",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 2,
        "best": "2/20",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 2,
        "best": "5/20",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 1,
        "best": "1/20",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 1,
        "best": "1/17",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 1,
        "best": "4/20",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 1,
        "best": "5/17",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "荒野皇",
        "count": 1,
        "best": "6/20",
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 1,
        "best": "8/20",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "宇宙皇",
        "count": 1,
        "best": "7/17",
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/11-2026/09/17共收录2场有效赛事、16套有排名记录的卡组，其中上位卡组16套、冠军卡组2套。从上位职业分布看，皇家护卫9套（56.3%）、梦魇3套（18.8%）构成本范围的主要出场面，冠军侧则以皇家护卫1套（50.0%）、梦魇1套（50.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」5套（31.3%，最好2/17）、龙族「五妹龙」2套（12.5%，最好2/20）、梦魇「nc梦」2套（12.5%，最好5/20）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有4套，占全部记录25.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/09/04",
    "label": "2026/09/04-2026/09/10",
    "event_count": 5,
    "deck_count": 40,
    "top8_count": 40,
    "top1_count": 5,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 18,
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
        "value": 4,
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
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 11,
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
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 4,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "巫师｜大美法",
        "value": 1,
        "link": "decktypes/decktype-b02e587006ac.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
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
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
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
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 11,
        "best": "1/18",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 6,
        "best": "1/18",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 4,
        "best": "1/24",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 4,
        "best": "3/18",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 2,
        "best": "2/18",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 2,
        "best": "4/17",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 1,
        "best": "2/18",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 1,
        "best": "2/17",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 1,
        "best": "3/18",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "class": "巫师",
        "category": "大美法",
        "count": 1,
        "best": "3/17",
        "link": "decktypes/decktype-b02e587006ac.html",
        "image": "../../assets/cards/BP21-PR10.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 1,
        "best": "4/18",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 1,
        "best": "6/18",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/04-2026/09/10共收录5场有效赛事、40套有排名记录的卡组，其中上位卡组40套、冠军卡组5套。从上位职业分布看，皇家护卫18套（45.0%）、巫师10套（25.0%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（80.0%）、龙族1套（20.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」11套（27.5%，最好1/18）、皇家护卫「财宝皇」6套（15.0%，最好1/18）、龙族「五妹龙」4套（10.0%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有11套，占全部记录27.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/28",
    "label": "2026/08/28-2026/09/03",
    "event_count": 3,
    "deck_count": 112,
    "top8_count": 112,
    "top1_count": 5,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 41,
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
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
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
        "value": 35,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 29,
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
        "name": "梦魇｜骰子梦",
        "value": 6,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
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
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 35,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 29,
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
        "class": "梦魇",
        "category": "骰子梦",
        "count": 6,
        "best": "14/298",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 5,
        "best": "1/298",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "class": "巫师",
        "category": "星星法",
        "count": 1,
        "best": "4/298",
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-SL07.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 1,
        "best": "5/298",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 1,
        "best": "5/298",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/28-2026/09/03共收录3场有效赛事、112套有排名记录的卡组，其中上位卡组112套、冠军卡组5套。从上位职业分布看，皇家护卫41套（36.6%）、龙族29套（25.9%）构成本范围的主要出场面，冠军侧则以皇家护卫3套（60.0%）、龙族1套（20.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」35套（31.3%，最好2/298）、龙族「五妹龙」29套（25.9%，最好1/298）、精灵「人偶妖」13套（11.6%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有99套，占全部记录88.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/21",
    "label": "2026/08/21-2026/08/27",
    "event_count": 18,
    "deck_count": 160,
    "top8_count": 160,
    "top1_count": 20,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 69,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 28,
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
        "value": 22,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 54,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 26,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 16,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 13,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 11,
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
        "name": "巫师｜学院法",
        "value": 6,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 5,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 4,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
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
        "name": "巫师｜机械法",
        "value": 1,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "梦魇｜抉择梦",
        "value": 1,
        "link": "decktypes/decktype-9b9e36f01173.html",
        "image": "../../assets/cards/BP20-076.jpg"
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 1,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 54,
        "best": "1/33",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 26,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 16,
        "best": "2/37",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 13,
        "best": "3/25",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "category": "骰子梦",
        "count": 6,
        "best": "1/17",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 6,
        "best": "2/22",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "class": "精灵",
        "category": "兽妖",
        "count": 4,
        "best": "2/17",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
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
        "count": 1,
        "best": "1/26",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 1,
        "best": "1/23",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/21-2026/08/27共收录18场有效赛事、160套有排名记录的卡组，其中上位卡组160套、冠军卡组20套。从上位职业分布看，皇家护卫69套（43.1%）、龙族28套（17.5%）构成本范围的主要出场面，冠军侧则以皇家护卫12套（60.0%）、梦魇5套（25.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」54套（33.8%，最好1/33）、龙族「五妹龙」26套（16.3%，最好1/37）、精灵「人偶妖」16套（10.0%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有58套，占全部记录36.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/14",
    "label": "2026/08/14-2026/08/20",
    "event_count": 17,
    "deck_count": 152,
    "top8_count": 152,
    "top1_count": 19,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 54,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 29,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 28,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 24,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
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
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 46,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 25,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 22,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 18,
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
        "name": "梦魇｜骰子梦",
        "value": 7,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 3,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 3,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
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
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 46,
        "best": "1/27",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 25,
        "best": "2/41",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 22,
        "best": "1/47",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 18,
        "best": "1/41",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 8,
        "best": "1/17",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 7,
        "best": "5/31",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 5,
        "best": "2/24",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 3,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 3,
        "best": "1/27",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 3,
        "best": "4/41",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 3,
        "best": "5/40",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "猎人妖",
        "count": 2,
        "best": "3/45",
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/14-2026/08/20共收录17场有效赛事、152套有排名记录的卡组，其中上位卡组152套、冠军卡组19套。从上位职业分布看，皇家护卫54套（35.5%）、精灵29套（19.1%）构成本范围的主要出场面，冠军侧则以精灵7套（36.8%）、皇家护卫5套（26.3%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」46套（30.3%，最好1/27）、龙族「五妹龙」25套（16.4%，最好2/41）、精灵「人偶妖」22套（14.5%，最好1/47）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「人偶妖」，由az使用，成绩为1/47，成绩系数0.0213。整体来看，前10%成绩卡组共有59套，占全部记录38.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/08/07",
    "label": "2026/08/07-2026/08/13",
    "event_count": 23,
    "deck_count": 183,
    "top8_count": 183,
    "top1_count": 23,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 55,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "💀 梦魇",
        "value": 20,
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
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 35,
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
        "name": "巫师｜二妹法",
        "value": 21,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 21,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 14,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 14,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 11,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 6,
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
        "name": "巫师｜学院法",
        "value": 4,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 3,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "龙族｜学院龙",
        "value": 2,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 1,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 35,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 30,
        "best": "1/58",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 21,
        "best": "1/52",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 21,
        "best": "1/22",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 14,
        "best": "1/35",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 14,
        "best": "1/22",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 11,
        "best": "2/52",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 6,
        "best": "2/20",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 4,
        "best": "1/32",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 4,
        "best": "4/21",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 3,
        "best": "1/28",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 3,
        "best": "2/37",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/07-2026/08/13共收录23场有效赛事、183套有排名记录的卡组，其中上位卡组183套、冠军卡组23套。从上位职业分布看，皇家护卫55套（30.1%）、龙族39套（21.3%）构成本范围的主要出场面，冠军侧则以皇家护卫7套（30.4%）、龙族6套（26.1%）表现最突出。卡组类型方面，龙族「五妹龙」35套（19.1%，最好1/37）、皇家护卫「雷维翁皇」30套（16.4%，最好1/58）、巫师「二妹法」21套（11.5%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有71套，占全部记录38.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/07/31",
    "label": "2026/07/31-2026/08/06",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 32,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 27,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 27,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
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
        "name": "🐉 龙族",
        "value": 18,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 12,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "巫师｜二妹法",
        "value": 23,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 18,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 18,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 15,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 11,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 11,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 7,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 2,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-SL09.jpg"
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
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
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
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
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
      }
    ],
    "top_types": [
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 23,
        "best": "1/45",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 18,
        "best": "1/49",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 18,
        "best": "1/28",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 15,
        "best": "1/24",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 11,
        "best": "1/32",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 11,
        "best": "1/21",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 7,
        "best": "1/40",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 5,
        "best": "2/40",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 4,
        "best": "2/30",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "class": "主教",
        "category": "学院教",
        "count": 4,
        "best": "6/30",
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "class": "精灵",
        "category": "宇宙妖",
        "count": 3,
        "best": "2/28",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 3,
        "best": "2/20",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/31-2026/08/06共收录18场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组18套。从上位职业分布看，巫师32套（22.2%）、皇家护卫27套（18.8%）构成本范围的主要出场面，冠军侧则以巫师7套（38.9%）、皇家护卫5套（27.8%）表现最突出。卡组类型方面，巫师「二妹法」23套（16.0%，最好1/45）、龙族「五妹龙」18套（12.5%，最好1/49）、皇家护卫「财宝皇」18套（12.5%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有61套，占全部记录42.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 102,
    "deck_count": 951,
    "top8_count": 951,
    "top1_count": 110,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 331,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 178,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 146,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 144,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 101,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 30,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 42,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 19,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "🍃 精灵",
        "value": 17,
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
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 218,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 169,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 92,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 91,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 86,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 53,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 242,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 27,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 19,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 14,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 14,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 11,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 5,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 20,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 242,
    "type_other_types": 45,
    "top1_type_other_count": 20,
    "top1_type_other_types": 12,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html\"><b>精灵｜兽妖</b><span>3套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-71c5492994cc.html\"><b>梦魇｜永火梦</b><span>3套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html\"><b>巫师｜学院法</b><span>2套，最好成绩 1/298</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html\"><b>公主连结Re:Dive｜法术PCR</b><span>2套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>2套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-87a84038db1f.html\"><b>巫师｜星星法</b><span>1套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录102场有效赛事、951套有排名记录的卡组，其中上位卡组951套、冠军卡组110套。从上位职业分布看，皇家护卫331套（34.8%）、龙族178套（18.7%）构成本范围的主要出场面，冠军侧则以皇家护卫42套（38.2%）、龙族19套（17.3%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」218套（22.9%，最好2/298）、龙族「五妹龙」169套（17.8%，最好1/298）、皇家护卫「财宝皇」92套（9.7%，最好1/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有404套，占全部记录42.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">218</td><td style=\"text-align:center\">185-170 (52.1%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">169</td><td style=\"text-align:center\">123-128 (49.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">92</td><td style=\"text-align:center\">92-76 (54.8%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">91</td><td style=\"text-align:center\">83-72 (53.5%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">86</td><td style=\"text-align:center\">80-67 (54.4%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html\">骰子梦</a></td><td style=\"text-align:center\">53</td><td style=\"text-align:center\">35-42 (45.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">20-30 (40.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">24-29 (45.3%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">24-23 (51.1%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">13-12 (52.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">12-13 (48.0%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">9-8 (52.9%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html\">学院教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">0-5 (0.0%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html\">龙人龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">7/42 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5-2 (71.4%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html\">学院龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/19 (0.3158)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">331 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 148</span>\n          <span class=\"stat-pill percent\">34.8%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>218套 (65.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>92套 (27.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>6套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>5套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-019.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP18-SL05.jpg\" alt=\"透京皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-020.jpg\" alt=\"学院皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">178 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 80</span>\n          <span class=\"stat-pill percent\">18.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>169套 (94.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL16.jpg\" alt=\"龙人龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>4套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL15.jpg\" alt=\"学院龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>3套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (0.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">146 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 70</span>\n          <span class=\"stat-pill percent\">15.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>86套 (58.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>33套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>12套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>7套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>5套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-005.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL01.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">144 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 54</span>\n          <span class=\"stat-pill percent\">15.1%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>91套 (63.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>34套 (23.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP09-SL09.jpg\" alt=\"土法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土法</b><em>5套 (3.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>4套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP21-PR10.jpg\" alt=\"大美法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">101 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 33</span>\n          <span class=\"stat-pill percent\">10.6%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>53套 (52.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>27套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/PR-399.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>7套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>5套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>4套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-076.jpg\" alt=\"抉择梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">3.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>13套 (43.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP21-U06.jpg\" alt=\"学院教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院教</b><em>5套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>5套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>3套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>14套 (70.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>6套 (30.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-001.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/09/25": {
    "key": "2026/09/25",
    "label": "2026/09/25-2026/10/01",
    "event_count": 6,
    "deck_count": 48,
    "top8_count": 48,
    "top1_count": 6,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 23,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🍃 精灵",
        "value": 7,
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
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
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
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
      },
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 12,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 10,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 3,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 9,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_other_count": 9,
    "type_other_types": 9,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/25-2026/10/01共收录6场有效赛事、48套有排名记录的卡组，其中上位卡组48套、冠军卡组6套。从上位职业分布看，皇家护卫23套（47.9%）、龙族9套（18.8%）构成本范围的主要出场面，冠军侧则以精灵3套（50.0%）、龙族1套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」12套（25.0%，最好2/24）、皇家护卫「财宝皇」10套（20.8%，最好2/24）、龙族「五妹龙」9套（18.8%，最好1/18）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是巫师「学院法」，由スパルタクス使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有14套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F25\">雷维翁皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">10-12 (45.5%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F25\">财宝皇</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-10 (50.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F25\">五妹龙</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F25\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F25\">连击妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F25\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">6-0 (100.0%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F25\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F25\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/24 (0.2083)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F25\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F25\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F25\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F25\">骰子梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/19 (0.2632)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F25\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F25\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F25\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">47.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>12套 (52.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>10套 (43.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F25\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">18.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F25\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>9套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">14.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F25\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F25\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP09-SL09.jpg\" alt=\"土法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">10.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F09%2F25\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-U05.jpg\" alt=\"真红梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F25\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/09/18": {
    "key": "2026/09/18",
    "label": "2026/09/18-2026/09/24",
    "event_count": 10,
    "deck_count": 96,
    "top8_count": 96,
    "top1_count": 12,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 35,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 21,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 13,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "🍃 精灵",
        "value": 8,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 4,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 21,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 18,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 12,
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
        "name": "梦魇｜永火梦",
        "value": 6,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 5,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 5,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "Others",
        "value": 22,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 4,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 1,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      }
    ],
    "type_other_count": 22,
    "type_other_types": 15,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/18-2026/09/24共收录10场有效赛事、96套有排名记录的卡组，其中上位卡组96套、冠军卡组12套。从上位职业分布看，皇家护卫35套（36.5%）、龙族21套（21.9%）构成本范围的主要出场面，冠军侧则以皇家护卫5套（41.7%）、龙族4套（33.3%）表现最突出。卡组类型方面，龙族「五妹龙」21套（21.9%，最好1/26）、皇家护卫「雷维翁皇」18套（18.8%，最好1/23）、皇家护卫「财宝皇」12套（12.5%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由フナ使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有27套，占全部记录28.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F18\">五妹龙</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">18-17 (51.4%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F18\">雷维翁皇</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">21-14 (60.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F18\">财宝皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">12-11 (52.2%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F18\">二妹法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F18\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F18\">学院法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F18\">人偶妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F18\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F18\">骰子梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F18\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F18\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F18\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F18\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F18\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F18\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F18\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F18\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F18\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F18\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F09%2F18\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F18\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F18\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">35 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">36.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>18套 (51.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>12套 (34.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F18\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">21.9%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F18\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>21套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">8.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>5套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F09%2F18\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">13.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>7套 (53.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>5套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F18\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP09-SL09.jpg\" alt=\"土法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>6套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F18\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/PR-399.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F09%2F18\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F09%2F18\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F09%2F18\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F09%2F18\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/thumbs/CSD02b-001.jpg\" alt=\"cool核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/09/11": {
    "key": "2026/09/11",
    "label": "2026/09/11-2026/09/17",
    "event_count": 2,
    "deck_count": 16,
    "top8_count": 16,
    "top1_count": 2,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
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
        "name": "🐉 龙族",
        "value": 2,
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
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 1,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
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
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 1,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      }
    ],
    "type_other_count": 0,
    "type_other_types": 0,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/11-2026/09/17共收录2场有效赛事、16套有排名记录的卡组，其中上位卡组16套、冠军卡组2套。从上位职业分布看，皇家护卫9套（56.3%）、梦魇3套（18.8%）构成本范围的主要出场面，冠军侧则以皇家护卫1套（50.0%）、梦魇1套（50.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」5套（31.3%，最好2/17）、龙族「五妹龙」2套（12.5%，最好2/20）、梦魇「nc梦」2套（12.5%，最好5/20）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有4套，占全部记录25.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F11\">雷维翁皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F11\">五妹龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F11\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F11\">骰子梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F11\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F11\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F11\">财宝皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F11\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F11\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/20 (0.4000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F11\">宇宙皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">56.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>5套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-019.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026%2F09%2F11\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F11\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F11\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F11\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">18.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/PR-399.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F09%2F11\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a>"
  },
  "2026/09/04": {
    "key": "2026/09/04",
    "label": "2026/09/04-2026/09/10",
    "event_count": 5,
    "deck_count": 40,
    "top8_count": 40,
    "top1_count": 5,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 18,
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
        "value": 4,
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
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 2,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
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
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 11,
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
        "name": "龙族｜五妹龙",
        "value": 4,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 4,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 11,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜财宝皇",
        "value": 3,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      }
    ],
    "type_other_count": 11,
    "type_other_types": 11,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/09/04-2026/09/10共收录5场有效赛事、40套有排名记录的卡组，其中上位卡组40套、冠军卡组5套。从上位职业分布看，皇家护卫18套（45.0%）、巫师10套（25.0%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（80.0%）、龙族1套（20.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」11套（27.5%，最好1/18）、皇家护卫「财宝皇」6套（15.0%，最好1/18）、龙族「五妹龙」4套（10.0%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有11套，占全部记录27.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F04\">雷维翁皇</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-10 (44.4%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F04\">财宝皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">10-3 (76.9%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F04\">五妹龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F04\">学院法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F04\">人偶妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F04\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F04\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F04\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F04\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026%2F09%2F04\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F04\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F04\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/18 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F04\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F04\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F04\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F04\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F04\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">45.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>11套 (61.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>6套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F09%2F04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (5.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F09%2F04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP18-005.jpg\" alt=\"透京妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F09%2F04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>4套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP21-PR10.jpg\" alt=\"大美法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP09-SL09.jpg\" alt=\"土法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F09%2F04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">5.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F09%2F04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">5.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F09%2F04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a>"
  },
  "2026/08/28": {
    "key": "2026/08/28",
    "label": "2026/08/28-2026/09/03",
    "event_count": 3,
    "deck_count": 112,
    "top8_count": 112,
    "top1_count": 5,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 41,
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
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
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
        "value": 3,
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
        "value": 35,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 29,
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
        "name": "梦魇｜骰子梦",
        "value": 6,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 5,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 17,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 2,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
    "type_other_count": 17,
    "type_other_types": 10,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/28-2026/09/03共收录3场有效赛事、112套有排名记录的卡组，其中上位卡组112套、冠军卡组5套。从上位职业分布看，皇家护卫41套（36.6%）、龙族29套（25.9%）构成本范围的主要出场面，冠军侧则以皇家护卫3套（60.0%）、龙族1套（20.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」35套（31.3%，最好2/298）、龙族「五妹龙」29套（25.9%，最好1/298）、精灵「人偶妖」13套（11.6%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有99套，占全部记录88.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F28\">雷维翁皇</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">13-12 (52.0%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F28\">五妹龙</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F28\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F28\">二妹法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F28\">骰子梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">14/298 (0.0470)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F28\">财宝皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F28\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F28\">学院法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F28\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F28\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F28\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F28\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F28\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">25/298 (0.0839)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F28\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">28/298 (0.0940)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F28\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">32/298 (0.1074)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F28\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">41 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 35</span>\n          <span class=\"stat-pill percent\">36.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>35套 (85.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>5套 (12.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F08%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP07-SL04.jpg\" alt=\"自然皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">25.9%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>29套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (65.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">9.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>7套 (63.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">8.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>6套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.9%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.9%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F28\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/21": {
    "key": "2026/08/21",
    "label": "2026/08/21-2026/08/27",
    "event_count": 18,
    "deck_count": 160,
    "top8_count": 160,
    "top1_count": 20,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 69,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 28,
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
        "value": 22,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 16,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP20-SL25.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 12,
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
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "name": "龙族｜五妹龙",
        "value": 26,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 16,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 13,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 11,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 40,
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
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 4,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 2,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 1,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      }
    ],
    "type_other_count": 40,
    "type_other_types": 21,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/21-2026/08/27共收录18场有效赛事、160套有排名记录的卡组，其中上位卡组160套、冠军卡组20套。从上位职业分布看，皇家护卫69套（43.1%）、龙族28套（17.5%）构成本范围的主要出场面，冠军侧则以皇家护卫12套（60.0%）、梦魇5套（25.0%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」54套（33.8%，最好1/33）、龙族「五妹龙」26套（16.3%，最好1/37）、精灵「人偶妖」16套（10.0%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有58套，占全部记录36.3%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F21\">雷维翁皇</a></td><td style=\"text-align:center\">54</td><td style=\"text-align:center\">57-46 (55.3%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F21\">五妹龙</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">18-24 (42.9%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F21\">人偶妖</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">12-16 (42.9%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F21\">二妹法</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">6-13 (31.6%)</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F21\">财宝皇</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">16-7 (69.6%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F21\">骰子梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F21\">学院法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F21\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F21\">兽妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F08%2F21\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F21\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F21\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F08%2F21\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F21\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F08%2F21\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F21\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/33 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F21\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/33 (0.2121)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F08%2F21\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F08%2F21\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F08%2F21\">机械法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F08%2F21\">抉择梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F21\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F21\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/23 (0.3478)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F21\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F21\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F21\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/19 (0.4211)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">69 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 34</span>\n          <span class=\"stat-pill percent\">43.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>54套 (78.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>11套 (15.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP11-019.jpg\" alt=\"荒野皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP18-SL05.jpg\" alt=\"透京皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026%2F08%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-020.jpg\" alt=\"学院皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">17.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>26套 (92.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL15.jpg\" alt=\"学院龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL16.jpg\" alt=\"龙人龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">22 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">13.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>16套 (72.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>4套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">23 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">14.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>13套 (56.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>6套 (26.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP14-U03.jpg\" alt=\"魔法使法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-513.jpg\" alt=\"机械法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械法</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (4.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>6套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>5套 (31.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/PR-399.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (18.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9b9e36f01173.html?scope=2026%2F08%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP20-076.jpg\" alt=\"抉择梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>抉择梦</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F21\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/14": {
    "key": "2026/08/14",
    "label": "2026/08/14-2026/08/20",
    "event_count": 17,
    "deck_count": 152,
    "top8_count": 152,
    "top1_count": 19,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 54,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 29,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 28,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 24,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL19.jpg"
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
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 46,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 25,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 22,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 18,
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
        "name": "梦魇｜骰子梦",
        "value": 7,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 26,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜人偶妖",
        "value": 6,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 4,
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
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
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
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      }
    ],
    "type_other_count": 26,
    "type_other_types": 12,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/14-2026/08/20共收录17场有效赛事、152套有排名记录的卡组，其中上位卡组152套、冠军卡组19套。从上位职业分布看，皇家护卫54套（35.5%）、精灵29套（19.1%）构成本范围的主要出场面，冠军侧则以精灵7套（36.8%）、皇家护卫5套（26.3%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」46套（30.3%，最好1/27）、龙族「五妹龙」25套（16.4%，最好2/41）、精灵「人偶妖」22套（14.5%，最好1/47）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「人偶妖」，由az使用，成绩为1/47，成绩系数0.0213。整体来看，前10%成绩卡组共有59套，占全部记录38.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F14\">雷维翁皇</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">36-42 (46.2%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F14\">五妹龙</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">20-23 (46.5%)</td><td style=\"text-align:center\">2/41 (0.0488)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F14\">人偶妖</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">36-16 (69.2%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F14\">二妹法</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">11-16 (40.7%)</td><td style=\"text-align:center\">1/41 (0.0244)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F14\">财宝皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F14\">骰子梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">0-7 (0.0%)</td><td style=\"text-align:center\">5/31 (0.1613)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F14\">学院法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F14\">兽妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F14\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F14\">守护教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">4/41 (0.0976)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F14\">2c梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F14\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/45 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F14\">龙人龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F14\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F08%2F14\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F08%2F14\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F14\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F08%2F14\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">35.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F14\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>46套 (85.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F14\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>8套 (14.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">18.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>25套 (89.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL16.jpg\" alt=\"龙人龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026%2F08%2F14\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">19.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>22套 (75.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>3套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026%2F08%2F14\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-005.jpg\" alt=\"八狱妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">15.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>18套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>5套 (20.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F08%2F14\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP11-SL07.jpg\" alt=\"星星法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">6.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>7套 (70.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F08%2F14\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP18-SL19.jpg\" alt=\"2c梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>3套 (30.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">2.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F08%2F14\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F14\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/08/07": {
    "key": "2026/08/07",
    "label": "2026/08/07-2026/08/13",
    "event_count": 23,
    "deck_count": 183,
    "top8_count": 183,
    "top1_count": 23,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 55,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "value": 28,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "💀 梦魇",
        "value": 20,
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
        "value": 7,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🔮 巫师",
        "value": 4,
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
        "name": "🍃 精灵",
        "value": 2,
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
        "image": "../../assets/cards/BP21-SL19.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 35,
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
        "name": "巫师｜二妹法",
        "value": 21,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 21,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 14,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 14,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 11,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 37,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 6,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 4,
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
        "name": "梦魇｜骰子梦",
        "value": 2,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
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
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      }
    ],
    "type_other_count": 37,
    "type_other_types": 19,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/08/07-2026/08/13共收录23场有效赛事、183套有排名记录的卡组，其中上位卡组183套、冠军卡组23套。从上位职业分布看，皇家护卫55套（30.1%）、龙族39套（21.3%）构成本范围的主要出场面，冠军侧则以皇家护卫7套（30.4%）、龙族6套（26.1%）表现最突出。卡组类型方面，龙族「五妹龙」35套（19.1%，最好1/37）、皇家护卫「雷维翁皇」30套（16.4%，最好1/58）、巫师「二妹法」21套（11.5%，最好1/52）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有71套，占全部记录38.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F07\">五妹龙</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">35-29 (54.7%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F07\">雷维翁皇</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">27-25 (51.9%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F07\">二妹法</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">23-17 (57.5%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F07\">财宝皇</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">17-19 (47.2%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F07\">人偶妖</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">9-13 (40.9%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F07\">骰子梦</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">13-12 (52.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F07\">兽妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">10-10 (50.0%)</td><td style=\"text-align:center\">2/52 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F07\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F07\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F07\">学院法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/21 (0.1905)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F08%2F07\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F07\">守护教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F07\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F07\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F07\">学院龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F08%2F07\">学院教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F08%2F07\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F07\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/52 (0.1346)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F07\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F07\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F07\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F07\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F08%2F07\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/19 (0.3158)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F07\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F07\">龙人龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F08%2F07\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">55 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">30.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>30套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>21套 (38.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F08%2F07\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/PR-233.jpg\" alt=\"天使皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">21.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>35套 (89.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL15.jpg\" alt=\"学院龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>2套 (5.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca24d30a1a65.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP21-SL16.jpg\" alt=\"龙人龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>龙人龙</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F08%2F07\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP17-SL15.jpg\" alt=\"海洋龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">15.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>14套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>11套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL01.jpg\" alt=\"猎人妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F08%2F07\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">14.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>21套 (77.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>4套 (14.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP19-SL10.jpg\" alt=\"八狱法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F08%2F07\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">10.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>14套 (70.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F08%2F07\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>6套 (30.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP20-SL25.jpg\" alt=\"纹章教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP21-U06.jpg\" alt=\"学院教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F08%2F07\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">3.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F08%2F07\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F08%2F07\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/07/31": {
    "key": "2026/07/31",
    "label": "2026/07/31-2026/08/06",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "top8_class_distribution": [
      {
        "name": "🔮 巫师",
        "value": 32,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 27,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 27,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
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
        "name": "🐉 龙族",
        "value": 18,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 12,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "🔮 巫师",
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 3,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "name": "巫师｜二妹法",
        "value": 23,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 18,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 18,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 15,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 11,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 11,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 7,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 41,
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 3,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "精灵｜人偶妖",
        "value": 2,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 1,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      }
    ],
    "type_other_count": 41,
    "type_other_types": 21,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/07/31-2026/08/06共收录18场有效赛事、144套有排名记录的卡组，其中上位卡组144套、冠军卡组18套。从上位职业分布看，巫师32套（22.2%）、皇家护卫27套（18.8%）构成本范围的主要出场面，冠军侧则以巫师7套（38.9%）、皇家护卫5套（27.8%）表现最突出。卡组类型方面，巫师「二妹法」23套（16.0%，最好1/45）、龙族「五妹龙」18套（12.5%，最好1/49）、皇家护卫「财宝皇」18套（12.5%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有61套，占全部记录42.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F31\">二妹法</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">32-16 (66.7%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F31\">五妹龙</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">12-16 (42.9%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F31\">财宝皇</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">18-16 (52.9%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F07%2F31\">骰子梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">13-14 (48.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F07%2F31\">兽妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-10 (44.4%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F31\">人偶妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">9-9 (50.0%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F07%2F31\">雷维翁皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F07%2F31\">学院法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F31\">守护教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F07%2F31\">学院教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F31\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F31\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F31\">控教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F31\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/45 (0.0444)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F07%2F31\">土法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F31\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F31\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F31\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/40 (0.0750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F31\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F31\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F31\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/32 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F07%2F31\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F31\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/42 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F31\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F31\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/32 (0.2188)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F31\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F31\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F31\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">18.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP19-SL05.jpg\" alt=\"财宝皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>18套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>7套 (25.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-018.jpg\" alt=\"铺场皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F07%2F31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">18 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F07%2F31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP15-SL15.jpg\" alt=\"五妹龙核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>18套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">18.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL01.jpg\" alt=\"兽妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>11套 (40.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL03.jpg\" alt=\"人偶妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>11套 (40.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/ECP02-SL04.jpg\" alt=\"连击妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F07%2F31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP16-SL01.jpg\" alt=\"妖精妖核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">22.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-SL11.jpg\" alt=\"二妹法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>23套 (71.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP06-SL08.jpg\" alt=\"学院法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院法</b><em>5套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP09-SL09.jpg\" alt=\"土法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土法</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP18-SL09.jpg\" alt=\"消失法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026%2F07%2F31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/PR-390.jpg\" alt=\"九爷法核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">16.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP21-SL19.jpg\" alt=\"骰子梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>15套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP07-SL13.jpg\" alt=\"机械梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-SL16.jpg\" alt=\"永火梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-080.jpg\" alt=\"八狱梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/PR-399.jpg\" alt=\"nc梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F07%2F31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP05-SL14.jpg\" alt=\"削手梦核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">8.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL26.jpg\" alt=\"守护教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>守护教</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP21-U06.jpg\" alt=\"学院教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>学院教</b><em>4套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F07%2F31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (8.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026%2F07%2F31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL03.jpg\" alt=\"法术PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026%2F07%2F31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/CP04-SL15.jpg\" alt=\"跳费PCR核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
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