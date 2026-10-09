(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 303,
    "deck_count": 2967,
    "top8_count": 2122,
    "top1_count": 386,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 1018,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 600,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 504,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 349,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 309,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 117,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 37,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 29,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "🎮 VG",
        "value": 4,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 403,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 400,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 365,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 314,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 249,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 125,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 122,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 110,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 104,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 74,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 69,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 65,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 59,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 46,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 45,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 45,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 37,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 32,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 30,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 28,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 22,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 18,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 16,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 14,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 14,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 13,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 11,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 10,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 10,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 8,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 8,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 8,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 7,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 7,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 6,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 5,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 4,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 4,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 3,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 3,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 3,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.jpg"
      },
      {
        "name": "精灵｜自然妖",
        "value": 3,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 3,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 3,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "主教｜教皇透京教",
        "value": 2,
        "link": "decktypes/decktype-c91bb9637ff9.html",
        "image": "../../assets/cards/BP18-SL22.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "龙族｜自然龙",
        "value": 2,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 2,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 2,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.jpg"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 2,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 2,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.jpg"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 2,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 2,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "主教｜忍者教",
        "value": 1,
        "link": "decktypes/decktype-d5a285cab801.html",
        "image": "../../assets/cards/BP03-112.jpg"
      },
      {
        "name": "偶像大师｜连击偶像",
        "value": 1,
        "link": "decktypes/decktype-31a0444ef547.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
      },
      {
        "name": "赛马娘｜露比马",
        "value": 1,
        "link": "decktypes/decktype-4cc737096206.html",
        "image": "../../assets/cards/ECP01-039.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP16-079.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/CP01-031.jpg"
      },
      {
        "name": "精灵｜卡场妖",
        "value": 1,
        "link": "decktypes/decktype-9db0cc1ac351.html",
        "image": "../../assets/cards/BP12-004.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
      },
      {
        "name": "龙族｜温泉龙",
        "value": 1,
        "link": "decktypes/decktype-632d594fc1e5.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "VG｜阳炎",
        "value": 1,
        "link": "decktypes/decktype-4e1b2ab4cca7.html",
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "精灵｜童话妖",
        "value": 1,
        "link": "decktypes/decktype-e1b3bf89ad40.html",
        "image": "../../assets/cards/PR-483.jpg"
      },
      {
        "name": "VG｜占卜",
        "value": 1,
        "link": "decktypes/decktype-47e47f92771b.html",
        "image": "../../assets/cards/CP03-106.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 403,
        "best": "1/248",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 400,
        "best": "4/248",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 365,
        "best": "1/248",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 314,
        "best": "2/248",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 249,
        "best": "3/248",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 125,
        "best": "1/27",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 122,
        "best": "1/45",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 110,
        "best": "8/248",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 104,
        "best": "6/248",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 74,
        "best": "1/35",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 69,
        "best": "9/248",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 65,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录303场有效赛事、2967套有排名记录的卡组，其中上位卡组2122套、冠军卡组386套。从上位职业分布看，梦魇756套（35.6%）、龙族411套（19.4%）构成本范围的主要出场面，冠军侧则以梦魇138套（35.8%）、精灵95套（24.6%）表现最突出。卡组类型方面，精灵「连击妖」308套（14.5%，最好1/248）、梦魇「nc梦」292套（13.8%，最好4/248）、梦魇「机械梦」289套（13.6%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有785套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/01/23",
    "label": "2026/01/23-2026/01/29",
    "event_count": 21,
    "deck_count": 212,
    "top8_count": 152,
    "top1_count": 29,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 67,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "🐉 龙族",
        "value": 34,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 28,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-039.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 34,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 30,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 27,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 19,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 12,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 11,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 10,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 10,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 6,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
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
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 3,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 2,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "赛马娘｜露比马",
        "value": 1,
        "link": "decktypes/decktype-4cc737096206.html",
        "image": "../../assets/cards/ECP01-039.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 1,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 34,
        "best": "1/30",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 30,
        "best": "1/28",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 27,
        "best": "1/22",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 19,
        "best": "1/22",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 12,
        "best": "1/17",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 11,
        "best": "1/8",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 10,
        "best": "2/22",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 10,
        "best": "3/22",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 6,
        "best": "2/8",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 5,
        "best": "3/25",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "篡夺皇",
        "count": 4,
        "best": "1/10",
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 4,
        "best": "2/12",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/23-2026/01/29共收录21场有效赛事、212套有排名记录的卡组，其中上位卡组152套、冠军卡组29套。从上位职业分布看，梦魇43套（28.3%）、精灵32套（21.1%）构成本范围的主要出场面，冠军侧则以梦魇10套（34.5%）、精灵8套（27.6%）表现最突出。卡组类型方面，精灵「连击妖」26套（17.1%，最好1/30）、梦魇「机械梦」21套（13.8%，最好1/22）、梦魇「nc梦」15套（9.9%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由まつだ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有49套，占全部记录23.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/01/16",
    "label": "2026/01/16-2026/01/22",
    "event_count": 33,
    "deck_count": 313,
    "top8_count": 204,
    "top1_count": 41,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 107,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "🐉 龙族",
        "value": 52,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 39,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 35,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
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
        "image": "../../assets/cards/ECP01-005.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 58,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 56,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 34,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 32,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 17,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 17,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 15,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 11,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 9,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 9,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 7,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 5,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 4,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 3,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
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
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP16-079.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 58,
        "best": "1/26",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 56,
        "best": "1/23",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 34,
        "best": "1/24",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 32,
        "best": "1/16",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 17,
        "best": "1/13",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 17,
        "best": "2/26",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 15,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 11,
        "best": "1/12",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 9,
        "best": "1/13",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 9,
        "best": "2/16",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 7,
        "best": "2/22",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "护符教",
        "count": 5,
        "best": "4/23",
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/16-2026/01/22共收录33场有效赛事、313套有排名记录的卡组，其中上位卡组204套、冠军卡组41套。从上位职业分布看，梦魇69套（33.8%）、精灵47套（23.0%）构成本范围的主要出场面，冠军侧则以梦魇15套（36.6%）、精灵13套（31.7%）表现最突出。卡组类型方面，梦魇「nc梦」40套（19.6%，最好1/26）、精灵「连击妖」39套（19.1%，最好1/23）、龙族「大哥龙」22套（10.8%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有75套，占全部记录24.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/01/09",
    "label": "2026/01/09-2026/01/15",
    "event_count": 46,
    "deck_count": 428,
    "top8_count": 307,
    "top1_count": 58,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 151,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 76,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 76,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 55,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 42,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 17,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.jpg"
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
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 71,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 67,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 49,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 41,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 26,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 25,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 18,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 14,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 11,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 8,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 8,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 7,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 7,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 5,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 5,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 5,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 5,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 4,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 4,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 4,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 3,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 3,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 3,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "龙族｜自然龙",
        "value": 1,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.jpg"
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
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 71,
        "best": "1/22",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 67,
        "best": "1/38",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 49,
        "best": "1/23",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 41,
        "best": "1/23",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 26,
        "best": "1/14",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 25,
        "best": "1/30",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 18,
        "best": "3/19",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 14,
        "best": "1/19",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 14,
        "best": "5/29",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 11,
        "best": "1/10",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 8,
        "best": "1/18",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 8,
        "best": "2/30",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/09-2026/01/15共收录46场有效赛事、428套有排名记录的卡组，其中上位卡组307套、冠军卡组58套。从上位职业分布看，梦魇114套（37.1%）、精灵56套（18.2%）构成本范围的主要出场面，冠军侧则以梦魇18套（31.0%）、精灵13套（22.4%）表现最突出。卡组类型方面，梦魇「nc梦」52套（16.9%，最好1/22）、精灵「连击妖」49套（16.0%，最好1/38）、梦魇「机械梦」39套（12.7%，最好1/23）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由くりくす使用，成绩为1/38，成绩系数0.0263。整体来看，前10%成绩卡组共有108套，占全部记录25.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/01/02",
    "label": "2026/01/02-2026/01/08",
    "event_count": 12,
    "deck_count": 96,
    "top8_count": 80,
    "top1_count": 12,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 36,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 21,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 8,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 7,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
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
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 17,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 14,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 13,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 6,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 5,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 4,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 3,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 2,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 1,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 17,
        "best": "1/23",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 14,
        "best": "1/22",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 13,
        "best": "1/37",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 9,
        "best": "3/22",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 6,
        "best": "3/23",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 5,
        "best": "5/21",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 4,
        "best": "1/21",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 4,
        "best": "1/18",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 4,
        "best": "4/18",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 3,
        "best": "4/23",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 2,
        "best": "2/20",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "class": "龙族",
        "category": "小凤龙",
        "count": 2,
        "best": "6/37",
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/02-2026/01/08共收录12场有效赛事、96套有排名记录的卡组，其中上位卡组80套、冠军卡组12套。从上位职业分布看，梦魇32套（40.0%）、龙族16套（20.0%）构成本范围的主要出场面，冠军侧则以梦魇8套（66.7%）、龙族2套（16.7%）表现最突出。卡组类型方面，梦魇「nc梦」16套（20.0%，最好1/23）、梦魇「机械梦」12套（15.0%，最好1/37）、龙族「大哥龙」12套（15.0%，最好1/22）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由kiyo使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有28套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/12/26",
    "label": "2025/12/26-2026/01/01",
    "event_count": 35,
    "deck_count": 312,
    "top8_count": 231,
    "top1_count": 41,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 100,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 66,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 56,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 36,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 35,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 13,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 46,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 35,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 35,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 31,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 27,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 16,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 15,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 11,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 9,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 8,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 8,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 8,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 5,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 4,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "偶像大师｜cute",
        "value": 3,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 3,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 2,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "龙族｜温泉龙",
        "value": 1,
        "link": "decktypes/decktype-632d594fc1e5.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
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
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.jpg"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 46,
        "best": "1/28",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 35,
        "best": "1/25",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 35,
        "best": "1/13",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 31,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 27,
        "best": "1/20",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 16,
        "best": "2/28",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 15,
        "best": "1/23",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 11,
        "best": "1/17",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 9,
        "best": "1/26",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 9,
        "best": "2/20",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 8,
        "best": "2/18",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 8,
        "best": "2/14",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/26-2026/01/01共收录35场有效赛事、312套有排名记录的卡组，其中上位卡组231套、冠军卡组41套。从上位职业分布看，梦魇78套（33.8%）、精灵44套（19.0%）构成本范围的主要出场面，冠军侧则以精灵10套（24.4%）、龙族10套（24.4%）表现最突出。卡组类型方面，精灵「连击妖」37套（16.0%，最好1/28）、梦魇「nc梦」30套（13.0%，最好1/13）、梦魇「机械梦」26套（11.3%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由瀧さん使用，成绩为1/28，成绩系数0.0357。整体来看，前10%成绩卡组共有76套，占全部记录24.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/12/19",
    "label": "2025/12/19-2025/12/25",
    "event_count": 33,
    "deck_count": 318,
    "top8_count": 190,
    "top1_count": 43,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 100,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 65,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 50,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 43,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 20,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 5,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 39,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 36,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 36,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 34,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 25,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 15,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 13,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 12,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 12,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 11,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 8,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 8,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 8,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 6,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 5,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 4,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
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
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 3,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 2,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜忍者教",
        "value": 1,
        "link": "decktypes/decktype-d5a285cab801.html",
        "image": "../../assets/cards/BP03-112.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
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
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.jpg"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 39,
        "best": "1/7",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 36,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 36,
        "best": "1/15",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 34,
        "best": "1/15",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 25,
        "best": "2/25",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 15,
        "best": "1/16",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 13,
        "best": "2/16",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 12,
        "best": "1/27",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 12,
        "best": "1/10",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 11,
        "best": "2/19",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 8,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 8,
        "best": "1/14",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/19-2025/12/25共收录33场有效赛事、318套有排名记录的卡组，其中上位卡组190套、冠军卡组43套。从上位职业分布看，梦魇66套（34.7%）、龙族39套（20.5%）构成本范围的主要出场面，冠军侧则以精灵13套（30.2%）、梦魇10套（23.3%）表现最突出。卡组类型方面，梦魇「机械梦」24套（12.6%，最好1/15）、梦魇「nc梦」24套（12.6%，最好1/7）、龙族「大哥龙」23套（12.1%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「透京皇」，由終人（おわんちゅ）使用，成绩为1/27，成绩系数0.0370。整体来看，前10%成绩卡组共有66套，占全部记录20.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/12/12",
    "label": "2025/12/12-2025/12/18",
    "event_count": 34,
    "deck_count": 307,
    "top8_count": 208,
    "top1_count": 43,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 117,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 51,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 39,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 45,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 45,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 43,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 35,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 18,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 16,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 12,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 9,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 7,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 6,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 5,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 5,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 5,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 4,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 4,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 1,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.jpg"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 1,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "精灵｜童话妖",
        "value": 1,
        "link": "decktypes/decktype-e1b3bf89ad40.html",
        "image": "../../assets/cards/PR-483.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 45,
        "best": "1/26",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 45,
        "best": "1/24",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 43,
        "best": "1/19",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 35,
        "best": "1/23",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 18,
        "best": "1/10",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 16,
        "best": "1/20",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 14,
        "best": "1/11",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 12,
        "best": "2/26",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 9,
        "best": "1/29",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 9,
        "best": "2/11",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "护符教",
        "count": 7,
        "best": "2/14",
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 6,
        "best": "1/24",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/12-2025/12/18共收录34场有效赛事、307套有排名记录的卡组，其中上位卡组208套、冠军卡组43套。从上位职业分布看，梦魇85套（40.9%）、精灵33套（15.9%）构成本范围的主要出场面，冠军侧则以梦魇14套（32.6%）、主教9套（20.9%）表现最突出。卡组类型方面，梦魇「机械梦」38套（18.3%，最好1/24）、梦魇「nc梦」33套（15.9%，最好1/26）、精灵「连击妖」29套（13.9%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是主教「节奏教」，由魚使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有77套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/12/05",
    "label": "2025/12/05-2025/12/11",
    "event_count": 20,
    "deck_count": 290,
    "top8_count": 220,
    "top1_count": 30,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 95,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 67,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 54,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 29,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 24,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 14,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 37,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 36,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 33,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 32,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 15,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 12,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 9,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 8,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 8,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 6,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
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
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "精灵｜自然妖",
        "value": 1,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "龙族｜自然龙",
        "value": 1,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 1,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.jpg"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/CP01-031.jpg"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 42,
        "best": "1/248",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 37,
        "best": "4/248",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 36,
        "best": "1/248",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 33,
        "best": "2/248",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 32,
        "best": "3/248",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 15,
        "best": "10/248",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 12,
        "best": "1/16",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 9,
        "best": "6/248",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 9,
        "best": "9/248",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 8,
        "best": "1/248",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 8,
        "best": "8/248",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 6,
        "best": "5/248",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/05-2025/12/11共收录20场有效赛事、290套有排名记录的卡组，其中上位卡组220套、冠军卡组30套。从上位职业分布看，梦魇68套（30.9%）、龙族54套（24.5%）构成本范围的主要出场面，冠军侧则以梦魇11套（36.7%）、精灵8套（26.7%）表现最突出。卡组类型方面，精灵「连击妖」33套（15.0%，最好1/248）、梦魇「nc梦」29套（13.2%，最好4/248）、梦魇「机械梦」27套（12.3%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有120套，占全部记录41.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/11/28",
    "label": "2025/11/28-2025/12/04",
    "event_count": 33,
    "deck_count": 327,
    "top8_count": 264,
    "top1_count": 41,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 111,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 81,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 56,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 36,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 28,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎮 VG",
        "value": 2,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜大哥龙",
        "value": 45,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 44,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 43,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 37,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 35,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 19,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 18,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 10,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 8,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 7,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 6,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 6,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 6,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 5,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 5,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 3,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "主教｜教皇透京教",
        "value": 2,
        "link": "decktypes/decktype-c91bb9637ff9.html",
        "image": "../../assets/cards/BP18-SL22.jpg"
      },
      {
        "name": "精灵｜自然妖",
        "value": 2,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 2,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "偶像大师｜连击偶像",
        "value": 1,
        "link": "decktypes/decktype-31a0444ef547.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "VG｜阳炎",
        "value": 1,
        "link": "decktypes/decktype-4e1b2ab4cca7.html",
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "VG｜占卜",
        "value": 1,
        "link": "decktypes/decktype-47e47f92771b.html",
        "image": "../../assets/cards/CP03-106.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 45,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 44,
        "best": "1/33",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 43,
        "best": "1/34",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 37,
        "best": "1/25",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 35,
        "best": "1/22",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 19,
        "best": "1/45",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 18,
        "best": "1/11",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 10,
        "best": "1/20",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 8,
        "best": "1/21",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 7,
        "best": "5/35",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 6,
        "best": "1/35",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 6,
        "best": "2/20",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/11/28-2025/12/04共收录33场有效赛事、327套有排名记录的卡组，其中上位卡组264套、冠军卡组41套。从上位职业分布看，梦魇94套（35.6%）、龙族58套（22.0%）构成本范围的主要出场面，冠军侧则以梦魇15套（36.6%）、精灵12套（29.3%）表现最突出。卡组类型方面，梦魇「机械梦」41套（15.5%，最好1/33）、精灵「连击妖」38套（14.4%，最好1/34）、龙族「大哥龙」36套（13.6%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由OROCHI使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有88套，占全部记录26.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025/11/21",
    "label": "2025/11/21-2025/11/27",
    "event_count": 36,
    "deck_count": 364,
    "top8_count": 266,
    "top1_count": 48,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 134,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 84,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 50,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 37,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 36,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 15,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 50,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 43,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 37,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 32,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 32,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 31,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 19,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 14,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 12,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 10,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "主教｜耶拉教",
        "value": 10,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 9,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 9,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 7,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 6,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 4,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP17-SL21.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 3,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 3,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 3,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.jpg"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.jpg"
      },
      {
        "name": "赛马娘｜loop马",
        "value": 1,
        "link": "decktypes/decktype-7358073c5024.html",
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "龙族｜小凤龙",
        "value": 1,
        "link": "decktypes/decktype-e966f3ffc9bd.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.jpg"
      },
      {
        "name": "精灵｜卡场妖",
        "value": 1,
        "link": "decktypes/decktype-9db0cc1ac351.html",
        "image": "../../assets/cards/BP12-004.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.jpg"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 1,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.jpg"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.jpg"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 50,
        "best": "1/56",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 43,
        "best": "1/20",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 37,
        "best": "1/23",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 32,
        "best": "3/59",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 32,
        "best": "3/56",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 31,
        "best": "1/59",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 19,
        "best": "4/56",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 14,
        "best": "2/15",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 12,
        "best": "1/20",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 10,
        "best": "4/59",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "class": "主教",
        "category": "耶拉教",
        "count": 10,
        "best": "2/20",
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.jpg"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 9,
        "best": "1/25",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/11/21-2025/11/27共收录36场有效赛事、364套有排名记录的卡组，其中上位卡组266套、冠军卡组48套。从上位职业分布看，梦魇107套（40.2%）、龙族59套（22.2%）构成本范围的主要出场面，冠军侧则以梦魇27套（56.3%）、精灵10套（20.8%）表现最突出。卡组类型方面，梦魇「机械梦」40套（15.0%，最好1/56）、龙族「大哥龙」33套（12.4%，最好1/20）、精灵「连击妖」30套（11.3%，最好3/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有98套，占全部记录26.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 303,
    "deck_count": 2967,
    "top8_count": 2122,
    "top1_count": 386,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 756,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 411,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 385,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 250,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 212,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 70,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 22,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 16,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 138,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 95,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 64,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 45,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
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
        "image": "../../assets/cards/CP01-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 308,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 292,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 289,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 234,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 157,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 93,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 86,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 663,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 77,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 63,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 62,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 37,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 23,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 18,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "Others",
        "value": 106,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 663,
    "type_other_types": 52,
    "top1_type_other_count": 106,
    "top1_type_other_types": 25,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html\"><b>精灵｜透京妖</b><span>14套，最好成绩 1/35</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html\"><b>主教｜机械教</b><span>12套，最好成绩 1/248</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html\"><b>皇家护卫｜透京皇</b><span>12套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>11套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>10套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>10套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>5套，最好成绩 1/35</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html\"><b>皇家护卫｜荒野皇</b><span>3套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html\"><b>龙族｜快攻龙</b><span>3套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-90c874a554cb.html\"><b>巫师｜消失法</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html\"><b>皇家护卫｜自然皇</b><span>3套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75305287827c.html\"><b>梦魇｜2c梦</b><span>2套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html\"><b>主教｜护符教</b><span>2套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html\"><b>精灵｜兽妖</b><span>2套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html\"><b>偶像大师｜cool</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html\"><b>皇家护卫｜篡夺皇</b><span>2套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html\"><b>精灵｜妖精妖</b><span>2套，最好成绩 1/4</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c91bb9637ff9.html\"><b>主教｜教皇透京教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e966f3ffc9bd.html\"><b>龙族｜小凤龙</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d5a285cab801.html\"><b>主教｜忍者教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7358073c5024.html\"><b>赛马娘｜loop马</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-754c9f89f7d7.html\"><b>主教｜耶拉教</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-05e1a2604c89.html\"><b>偶像大师｜passion</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录303场有效赛事、2967套有排名记录的卡组，其中上位卡组2122套、冠军卡组386套。从上位职业分布看，梦魇756套（35.6%）、龙族411套（19.4%）构成本范围的主要出场面，冠军侧则以梦魇138套（35.8%）、精灵95套（24.6%）表现最突出。卡组类型方面，精灵「连击妖」308套（14.5%，最好1/248）、梦魇「nc梦」292套（13.8%，最好4/248）、梦魇「机械梦」289套（13.6%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有785套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">308</td><td style=\"text-align:center\">308-218 (58.6%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">292</td><td style=\"text-align:center\">251-222 (53.1%)</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">289</td><td style=\"text-align:center\">262-216 (54.8%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">234</td><td style=\"text-align:center\">177-186 (48.8%)</td><td style=\"text-align:center\">2/248 (0.0081)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">157</td><td style=\"text-align:center\">106-124 (46.1%)</td><td style=\"text-align:center\">3/248 (0.0121)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">93</td><td style=\"text-align:center\">51-82 (38.3%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">86</td><td style=\"text-align:center\">45-69 (39.5%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">80</td><td style=\"text-align:center\">76-60 (55.9%)</td><td style=\"text-align:center\">6/248 (0.0242)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">77</td><td style=\"text-align:center\">62-67 (48.1%)</td><td style=\"text-align:center\">8/248 (0.0323)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">58</td><td style=\"text-align:center\">50-42 (54.3%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">38-36 (51.4%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">18-38 (32.1%)</td><td style=\"text-align:center\">9/248 (0.0363)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html\">机械教</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">40-27 (59.7%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">24-27 (47.1%)</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">13-28 (31.7%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">18-23 (43.9%)</td><td style=\"text-align:center\">13/248 (0.0524)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">12-21 (36.4%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">17-18 (48.6%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">13-18 (41.9%)</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">11-15 (42.3%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">5-13 (27.8%)</td><td style=\"text-align:center\">5/45 (0.1111)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">1-12 (7.7%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">7-10 (41.2%)</td><td style=\"text-align:center\">2/56 (0.0357)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-7 (56.3%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html\">小凤龙</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">3-8 (27.3%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html\">黄金船教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1-7 (12.5%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html\">passion</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-1 (85.7%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html\">loop马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">32/248 (0.1290)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html\">大哥马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">3/35 (0.0857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html\">自然妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c91bb9637ff9.html\">教皇透京教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html\">小卖部法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html\">自然龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html\">cute</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d5a285cab801.html\">忍者教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-31a0444ef547.html\">连击偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-2e7701fa0587.html\">控梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-4cc737096206.html\">露比马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1018 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 278</span>\n          <span class=\"stat-pill percent\">34.3%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>400套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>365套 (35.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>122套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>69套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>45套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>7套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>6套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>2套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP16-079.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">600 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 150</span>\n          <span class=\"stat-pill percent\">20.2%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>314套 (52.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>249套 (41.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>13套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>8套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>4套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.jpg\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>2套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-632d594fc1e5.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"温泉龙核心卡\"><span class=\"archetype-tag-body\"><b>温泉龙</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">504 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 175</span>\n          <span class=\"stat-pill percent\">17.0%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>403套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>74套 (14.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>10套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>8套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>2套 (0.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.jpg\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9db0cc1ac351.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP12-004.jpg\" alt=\"卡场妖核心卡\"><span class=\"archetype-tag-body\"><b>卡场妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e1b3bf89ad40.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-483.jpg\" alt=\"童话妖核心卡\"><span class=\"archetype-tag-body\"><b>童话妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">349 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 91</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>110套 (31.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>104套 (29.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>59套 (16.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>32套 (9.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>30套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>8套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c91bb9637ff9.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL22.jpg\" alt=\"教皇透京教核心卡\"><span class=\"archetype-tag-body\"><b>教皇透京教</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d5a285cab801.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP03-112.jpg\" alt=\"忍者教核心卡\"><span class=\"archetype-tag-body\"><b>忍者教</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">309 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 59</span>\n          <span class=\"stat-pill percent\">10.4%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>125套 (40.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>65套 (21.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>37套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>28套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>18套 (5.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>16套 (5.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>14套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>5套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">3.9%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>46套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>45套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>11套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.jpg\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-035.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>22套 (59.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>7套 (18.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>5套 (13.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4cc737096206.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-039.jpg\" alt=\"露比马核心卡\"><span class=\"archetype-tag-body\"><b>露比马</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-031.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>14套 (48.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>10套 (34.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>4套 (13.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-31a0444ef547.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击偶像核心卡\"><span class=\"archetype-tag-body\"><b>连击偶像</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.jpg\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4e1b2ab4cca7.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.jpg\" alt=\"阳炎核心卡\"><span class=\"archetype-tag-body\"><b>阳炎</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-47e47f92771b.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CP03-106.jpg\" alt=\"占卜核心卡\"><span class=\"archetype-tag-body\"><b>占卜</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2026/01/23": {
    "key": "2026/01/23",
    "label": "2026/01/23-2026/01/29",
    "event_count": 21,
    "deck_count": 212,
    "top8_count": 152,
    "top1_count": 29,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 43,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 32,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 25,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 24,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 18,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 6,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-039.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "🐉 龙族",
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 2,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 26,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 21,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 15,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 15,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 10,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 7,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 7,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
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
        "name": "精灵｜连击妖",
        "value": 8,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 4,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "Others",
        "value": 2,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 42,
    "type_other_types": 25,
    "top1_type_other_count": 2,
    "top1_type_other_types": 2,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F23\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F23\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/10</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/23-2026/01/29共收录21场有效赛事、212套有排名记录的卡组，其中上位卡组152套、冠军卡组29套。从上位职业分布看，梦魇43套（28.3%）、精灵32套（21.1%）构成本范围的主要出场面，冠军侧则以梦魇10套（34.5%）、精灵8套（27.6%）表现最突出。卡组类型方面，精灵「连击妖」26套（17.1%，最好1/30）、梦魇「机械梦」21套（13.8%，最好1/22）、梦魇「nc梦」15套（9.9%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由まつだ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有49套，占全部记录23.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F23\">连击妖</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">31-18 (63.3%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F23\">机械梦</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">19-16 (54.3%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F23\">nc梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">19-10 (65.5%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F23\">大哥龙</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-12 (47.8%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F23\">铺场皇</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">7-9 (43.8%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F23\">节奏教</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">10-5 (66.7%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F23\">武斗龙</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F23\">机械教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F23\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F23\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F23\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F23\">透京皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F23\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F23\">真红梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F23\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/28 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F01%2F23\">黄金船教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F23\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F23\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F23\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F01%2F23\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F23\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F01%2F23\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F23\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-4cc737096206.html?scope=2026%2F01%2F23\">露比马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F01%2F23\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F01%2F23\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F23\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F23\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F01%2F23\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F01%2F23\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F23\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F23\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F23\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">31.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>30套 (44.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>27套 (40.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F01%2F23\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">34 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">16.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>19套 (55.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>11套 (32.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F01%2F23\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">40 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">18.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>34套 (85.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026%2F01%2F23\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (2.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">14.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>10套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>10套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026%2F01%2F23\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.jpg\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">13.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>12套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>6套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F01%2F23\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026%2F01%2F23\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-035.jpg\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F23\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F01%2F23\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4cc737096206.html?scope=2026%2F01%2F23\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-039.jpg\" alt=\"露比马核心卡\"><span class=\"archetype-tag-body\"><b>露比马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F23\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026/01/16": {
    "key": "2026/01/16",
    "label": "2026/01/16-2026/01/22",
    "event_count": 33,
    "deck_count": 313,
    "top8_count": 204,
    "top1_count": 41,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 69,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "🐉 龙族",
        "value": 31,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 26,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 25,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
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
        "value": 15,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 13,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 40,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 39,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 22,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 21,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 12,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 12,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "Others",
        "value": 58,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 13,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 4,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 2,
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
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "Others",
        "value": 3,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 58,
    "type_other_types": 21,
    "top1_type_other_count": 3,
    "top1_type_other_types": 3,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F16\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F16\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F16\"><b>主教｜控教</b><span>1套，最好成绩 1/12</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/16-2026/01/22共收录33场有效赛事、313套有排名记录的卡组，其中上位卡组204套、冠军卡组41套。从上位职业分布看，梦魇69套（33.8%）、精灵47套（23.0%）构成本范围的主要出场面，冠军侧则以梦魇15套（36.6%）、精灵13套（31.7%）表现最突出。卡组类型方面，梦魇「nc梦」40套（19.6%，最好1/26）、精灵「连击妖」39套（19.1%，最好1/23）、龙族「大哥龙」22套（10.8%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有75套，占全部记录24.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F16\">nc梦</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">38-27 (58.5%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F16\">连击妖</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">40-27 (59.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F16\">大哥龙</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">23-18 (56.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F16\">机械梦</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">10-19 (34.5%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F16\">铺场皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">9-9 (50.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F16\">控教</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">10-11 (47.6%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F16\">武斗龙</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F16\">透京皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1-8 (11.1%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F16\">透京妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F16\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F16\">蝙蝠梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F16\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F16\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F16\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F16\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F16\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/23 (0.1739)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F16\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F16\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/21 (0.1905)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F16\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F01%2F16\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F16\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F01%2F16\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F16\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F01%2F16\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F01%2F16\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F16\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F16\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">107 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 25</span>\n          <span class=\"stat-pill percent\">34.2%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>58套 (54.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>32套 (29.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>7套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP16-079.jpg\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F01%2F16\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">52 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">16.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F16\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>34套 (65.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F16\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>17套 (32.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F16\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">21.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F16\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>56套 (83.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F16\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>9套 (13.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026%2F01%2F16\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026%2F01%2F16\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>17套 (43.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>11套 (28.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>5套 (12.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>4套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026%2F01%2F16\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">35 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">11.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>15套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>9套 (25.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>3套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F01%2F16\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F16\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F16\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026%2F01%2F16\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F01%2F16\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F16\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F01%2F16\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F16\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/01/09": {
    "key": "2026/01/09",
    "label": "2026/01/09-2026/01/15",
    "event_count": 46,
    "deck_count": 428,
    "top8_count": 307,
    "top1_count": 58,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 114,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 56,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 55,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 40,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 26,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 18,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 13,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 11,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 7,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
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
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 52,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 49,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 39,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 32,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 18,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 17,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 15,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "Others",
        "value": 85,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 13,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 10,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 7,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 4,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.jpg"
      },
      {
        "name": "Others",
        "value": 16,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 85,
    "type_other_types": 29,
    "top1_type_other_count": 16,
    "top1_type_other_types": 10,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F09\"><b>皇家护卫｜透京皇</b><span>2套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F09\"><b>巫师｜机械法</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F01%2F09\"><b>龙族｜快攻龙</b><span>2套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F09\"><b>龙族｜武斗龙</b><span>2套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F09\"><b>精灵｜透京妖</b><span>2套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F09\"><b>皇家护卫｜自然皇</b><span>2套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F09\"><b>主教｜护符教</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F09\"><b>主教｜机械教</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F09\"><b>主教｜控教</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F01%2F09\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/09-2026/01/15共收录46场有效赛事、428套有排名记录的卡组，其中上位卡组307套、冠军卡组58套。从上位职业分布看，梦魇114套（37.1%）、精灵56套（18.2%）构成本范围的主要出场面，冠军侧则以梦魇18套（31.0%）、精灵13套（22.4%）表现最突出。卡组类型方面，梦魇「nc梦」52套（16.9%，最好1/22）、精灵「连击妖」49套（16.0%，最好1/38）、梦魇「机械梦」39套（12.7%，最好1/23）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由くりくす使用，成绩为1/38，成绩系数0.0263。整体来看，前10%成绩卡组共有108套，占全部记录25.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F09\">nc梦</a></td><td style=\"text-align:center\">52</td><td style=\"text-align:center\">45-39 (53.6%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F09\">连击妖</a></td><td style=\"text-align:center\">49</td><td style=\"text-align:center\">43-39 (52.4%)</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F09\">机械梦</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">32-34 (48.5%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F09\">大哥龙</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">29-25 (53.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F09\">节奏教</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">19-14 (57.6%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F09\">武斗龙</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">15-15 (50.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F09\">控教</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">6-14 (30.0%)</td><td style=\"text-align:center\">3/19 (0.1579)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F09\">蝙蝠梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">3-11 (21.4%)</td><td style=\"text-align:center\">5/29 (0.1724)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F09\">透京皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F09\">铺场皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F09\">机械法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">7-4 (63.6%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F09\">真红梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F09\">透京妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F09\">自然皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-4 (55.6%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F09\">机械教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F01%2F09\">cool</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F09\">横马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F09\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-1 (80.0%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F01%2F09\">快攻龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4-0 (100.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F09\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F09\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F01%2F09\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F01%2F09\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F01%2F09\">小凤龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F01%2F09\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F09\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026%2F01%2F09\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F09\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026%2F01%2F09\">控梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F01%2F09\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F01%2F09\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F09\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F09\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html?scope=2026%2F01%2F09\">自然龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F01%2F09\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F09\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/5 (0.6000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">151 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 37</span>\n          <span class=\"stat-pill percent\">35.3%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>71套 (47.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>49套 (32.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>14套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>8套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>5套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026%2F01%2F09\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">76 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">17.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>41套 (53.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>26套 (34.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>4套 (5.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>3套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html?scope=2026%2F01%2F09\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.jpg\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>1套 (1.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">76 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">17.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>67套 (88.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026%2F01%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>7套 (9.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026%2F01%2F09\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">55 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">12.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>25套 (45.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>18套 (32.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>5套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026%2F01%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>5套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026%2F01%2F09\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">9.8%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>14套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>11套 (26.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>7套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>4套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026%2F01%2F09\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>8套 (47.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>3套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>3套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026%2F01%2F09\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F09\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>5套 (83.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F09\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F01%2F09\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>4套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F09\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026/01/02": {
    "key": "2026/01/02",
    "label": "2026/01/02-2026/01/08",
    "event_count": 12,
    "deck_count": 96,
    "top8_count": 80,
    "top1_count": 12,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 32,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 16,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 13,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 6,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP07-SL04.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.jpg"
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
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 8,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 16,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 12,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 12,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 8,
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
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.jpg"
      },
      {
        "name": "赛马娘｜横马",
        "value": 4,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.jpg"
      },
      {
        "name": "Others",
        "value": 20,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "type_other_count": 20,
    "type_other_types": 12,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/01/02-2026/01/08共收录12场有效赛事、96套有排名记录的卡组，其中上位卡组80套、冠军卡组12套。从上位职业分布看，梦魇32套（40.0%）、龙族16套（20.0%）构成本范围的主要出场面，冠军侧则以梦魇8套（66.7%）、龙族2套（16.7%）表现最突出。卡组类型方面，梦魇「nc梦」16套（20.0%，最好1/23）、梦魇「机械梦」12套（15.0%，最好1/37）、龙族「大哥龙」12套（15.0%，最好1/22）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由kiyo使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有28套，占全部记录29.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F02\">nc梦</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">18-13 (58.1%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F02\">机械梦</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">14-7 (66.7%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F02\">大哥龙</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">9-10 (47.4%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F02\">节奏教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4-8 (33.3%)</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F02\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8-3 (72.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F02\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">3/23 (0.1304)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F02\">横马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">5/21 (0.2381)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F02\">控教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F02\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F01%2F02\">小凤龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/37 (0.1622)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F02\">透京皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/23 (0.1739)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F02\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F02\">武斗龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F02\">passion</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F02\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F01%2F02\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F02\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/21 (0.2857)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F02\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F02\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">37.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026%2F01%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>17套 (47.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026%2F01%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>13套 (36.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026%2F01%2F02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>6套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">21 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">21.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026%2F01%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>14套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026%2F01%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>4套 (19.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2026%2F01%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>2套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026%2F01%2F02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (4.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026%2F01%2F02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">15.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F01%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>9套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F01%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026%2F01%2F02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">8.3%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026%2F01%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026%2F01%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026%2F01%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026%2F01%2F02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (12.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026%2F01%2F02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">7.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026%2F01%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>5套 (71.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026%2F01%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2026%2F01%2F02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026%2F01%2F02\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026%2F01%2F02\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026%2F01%2F02\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025/12/26": {
    "key": "2025/12/26",
    "label": "2025/12/26-2026/01/01",
    "event_count": 35,
    "deck_count": 312,
    "top8_count": 231,
    "top1_count": 41,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 78,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 44,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 42,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 24,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "image": "../../assets/cards/CSD02a-SL01.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 10,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
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
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 37,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 30,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 26,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 22,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 17,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 10,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 10,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "Others",
        "value": 65,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 9,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 6,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 4,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 3,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
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
        "name": "Others",
        "value": 4,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 65,
    "type_other_types": 23,
    "top1_type_other_count": 4,
    "top1_type_other_types": 4,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F26\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F26\"><b>主教｜机械教</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F26\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F26\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/26-2026/01/01共收录35场有效赛事、312套有排名记录的卡组，其中上位卡组231套、冠军卡组41套。从上位职业分布看，梦魇78套（33.8%）、精灵44套（19.0%）构成本范围的主要出场面，冠军侧则以精灵10套（24.4%）、龙族10套（24.4%）表现最突出。卡组类型方面，精灵「连击妖」37套（16.0%，最好1/28）、梦魇「nc梦」30套（13.0%，最好1/13）、梦魇「机械梦」26套（11.3%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由瀧さん使用，成绩为1/28，成绩系数0.0357。整体来看，前10%成绩卡组共有76套，占全部记录24.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F26\">连击妖</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">42-28 (60.0%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F26\">nc梦</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">19-27 (41.3%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F26\">机械梦</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">22-21 (51.2%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F26\">大哥龙</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">20-16 (55.6%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F26\">武斗龙</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">14-13 (51.9%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F26\">透京皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">9-11 (45.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F26\">蝙蝠梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">6-8 (42.9%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F26\">控教</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">11-8 (57.9%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F26\">节奏教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">11-5 (68.8%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F26\">消失法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F26\">铺场皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F26\">真红梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F26\">透京妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F26\">2c梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F26\">荒野皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F12%2F26\">篡夺皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F26\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2025%2F12%2F26\">永火梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F12%2F26\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F26\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F26\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F26\">小凤龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F26\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F26\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html?scope=2025%2F12%2F26\">cute</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025%2F12%2F26\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F26\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F12%2F26\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F26\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F26\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025%2F12%2F26\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">100 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 23</span>\n          <span class=\"stat-pill percent\">32.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>35套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>35套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>11套 (11.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>8套 (8.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>8套 (8.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2025%2F12%2F26\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">66 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">21.2%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>31套 (47.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>27套 (40.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>2套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-632d594fc1e5.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"温泉龙核心卡\"><span class=\"archetype-tag-body\"><b>温泉龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F12%2F26\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">56 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>46套 (82.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>8套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F26\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">35 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">11.2%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>16套 (45.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>9套 (25.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>5套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F26\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">11.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>15套 (41.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>9套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>4套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F26\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (53.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F12%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025%2F12%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2025%2F12%2F26\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.jpg\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F26\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025%2F12%2F26\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2025%2F12%2F26\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.jpg\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025/12/19": {
    "key": "2025/12/19",
    "label": "2025/12/19-2025/12/25",
    "event_count": 33,
    "deck_count": 318,
    "top8_count": 190,
    "top1_count": 43,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 66,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 39,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 32,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 25,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 16,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
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
        "image": "../../assets/cards/ECP01-005.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 13,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
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
        "name": "🐉 龙族",
        "value": 7,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
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
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 24,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 24,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 23,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 23,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 15,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 11,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 8,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "Others",
        "value": 62,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 9,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 4,
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
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "Others",
        "value": 9,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 62,
    "type_other_types": 23,
    "top1_type_other_count": 9,
    "top1_type_other_types": 9,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F19\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F19\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F19\"><b>巫师｜机械法</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F19\"><b>主教｜机械教</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F19\"><b>主教｜节奏教</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F19\"><b>龙族｜小凤龙</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025%2F12%2F19\"><b>主教｜忍者教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F19\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F19\"><b>主教｜耶拉教</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/19-2025/12/25共收录33场有效赛事、318套有排名记录的卡组，其中上位卡组190套、冠军卡组43套。从上位职业分布看，梦魇66套（34.7%）、龙族39套（20.5%）构成本范围的主要出场面，冠军侧则以精灵13套（30.2%）、梦魇10套（23.3%）表现最突出。卡组类型方面，梦魇「机械梦」24套（12.6%，最好1/15）、梦魇「nc梦」24套（12.6%，最好1/7）、龙族「大哥龙」23套（12.1%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「透京皇」，由終人（おわんちゅ）使用，成绩为1/27，成绩系数0.0370。整体来看，前10%成绩卡组共有66套，占全部记录20.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F19\">机械梦</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">21-17 (55.3%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F19\">nc梦</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">8-23 (25.8%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F19\">大哥龙</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">15-19 (44.1%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F19\">连击妖</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">22-14 (61.1%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F19\">武斗龙</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">13-13 (50.0%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F19\">蝙蝠梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">7-9 (43.8%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F19\">透京妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">11-4 (73.3%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F19\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F19\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-7 (41.7%)</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F19\">机械教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F19\">透京皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">8-3 (72.7%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F19\">铺场皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F19\">消失法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-2 (75.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F19\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-4 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F19\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025%2F12%2F19\">cool</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">6-1 (85.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F19\">机械法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F19\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/10 (0.3000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F19\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F19\">小凤龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025%2F12%2F19\">忍者教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F19\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F19\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F19\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F19\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025%2F12%2F19\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F12%2F19\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025%2F12%2F19\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F19\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F19\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">100 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">31.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>39套 (39.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>34套 (34.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>15套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>6套 (6.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2025%2F12%2F19\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">20.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>36套 (55.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>25套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025%2F12%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025%2F12%2F19\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">50 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">15.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>36套 (72.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>12套 (24.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2025%2F12%2F19\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.jpg\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">13.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>13套 (30.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>11套 (25.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>8套 (18.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>4套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025%2F12%2F19\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP03-112.jpg\" alt=\"忍者教核心卡\"><span class=\"archetype-tag-body\"><b>忍者教</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">9.7%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>12套 (38.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>8套 (25.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>5套 (16.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F12%2F19\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">20 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">6.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>8套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (35.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025%2F12%2F19\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.jpg\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (5.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.3%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F19\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2025%2F12%2F19\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.jpg\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F19\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">1.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025%2F12%2F19\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025%2F12%2F19\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025/12/12": {
    "key": "2025/12/12",
    "label": "2025/12/12-2025/12/18",
    "event_count": 34,
    "deck_count": 307,
    "top8_count": 208,
    "top1_count": 43,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 85,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 33,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
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
        "name": "⛪ 主教",
        "value": 31,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 19,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 5,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 2,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
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
        "value": 9,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 8,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 38,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 33,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 29,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 20,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 12,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 11,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "Others",
        "value": 65,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 7,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 6,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 65,
    "type_other_types": 20,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F12\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F12%2F12\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F12\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F12\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F12\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F12\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F12\"><b>赛马娘｜loop马</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/12-2025/12/18共收录34场有效赛事、307套有排名记录的卡组，其中上位卡组208套、冠军卡组43套。从上位职业分布看，梦魇85套（40.9%）、精灵33套（15.9%）构成本范围的主要出场面，冠军侧则以梦魇14套（32.6%）、主教9套（20.9%）表现最突出。卡组类型方面，梦魇「机械梦」38套（18.3%，最好1/24）、梦魇「nc梦」33套（15.9%，最好1/26）、精灵「连击妖」29套（13.9%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是主教「节奏教」，由魚使用，成绩为1/29，成绩系数0.0345。整体来看，前10%成绩卡组共有77套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F12\">机械梦</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">32-31 (50.8%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F12\">nc梦</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">25-27 (48.1%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F12\">连击妖</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">26-23 (53.1%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F12\">武斗龙</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">18-14 (56.3%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F12\">大哥龙</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">6-11 (35.3%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F12\">控教</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">14-7 (66.7%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F12\">节奏教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">12-5 (70.6%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F12\">蝙蝠梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-7 (22.2%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F12\">2c梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F12\">透京皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F12\">护符教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F12\">机械教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F12\">荒野皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F12\">铺场皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F12\">机械法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F12\">透京妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F12\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F12%2F12\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F12\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F12%2F12\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F12\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F12\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F12%2F12\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F12\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F12\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F12\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/6 (0.5000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 29</span>\n          <span class=\"stat-pill percent\">38.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>45套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>45套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>12套 (10.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>9套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025%2F12%2F12\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">17.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>35套 (64.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>18套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F12%2F12\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">16.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>43套 (84.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (9.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e1b3bf89ad40.html?scope=2025%2F12%2F12\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-483.jpg\" alt=\"童话妖核心卡\"><span class=\"archetype-tag-body\"><b>童话妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">12.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>16套 (41.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>9套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>7套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>6套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F12%2F12\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>14套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>5套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>4套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F12%2F12\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>5套 (45.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025%2F12%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.jpg\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2025%2F12%2F12\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F12\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F12\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025%2F12%2F12\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.jpg\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2025/12/05": {
    "key": "2025/12/05",
    "label": "2025/12/05-2025/12/11",
    "event_count": 20,
    "deck_count": 290,
    "top8_count": 220,
    "top1_count": 30,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 68,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 44,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 22,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 19,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-SL03.jpg"
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
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.jpg"
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
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 3,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
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
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 33,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 29,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 27,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 27,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 25,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 12,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "Others",
        "value": 67,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "Others",
        "value": 9,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 67,
    "type_other_types": 28,
    "top1_type_other_count": 9,
    "top1_type_other_types": 9,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F05\"><b>主教｜控教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F05\"><b>龙族｜武斗龙</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F05\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F05\"><b>主教｜节奏教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F05\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F05\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F05\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025%2F12%2F05\"><b>偶像大师｜passion</b><span>1套，最好成绩 1/4</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F05\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/12/05-2025/12/11共收录20场有效赛事、290套有排名记录的卡组，其中上位卡组220套、冠军卡组30套。从上位职业分布看，梦魇68套（30.9%）、龙族54套（24.5%）构成本范围的主要出场面，冠军侧则以梦魇11套（36.7%）、精灵8套（26.7%）表现最突出。卡组类型方面，精灵「连击妖」33套（15.0%，最好1/248）、梦魇「nc梦」29套（13.2%，最好4/248）、梦魇「机械梦」27套（12.3%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有120套，占全部记录41.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F05\">连击妖</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">20-16 (55.6%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F05\">nc梦</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">19-16 (54.3%)</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F05\">机械梦</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">17-13 (56.7%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F05\">大哥龙</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">10-14 (41.7%)</td><td style=\"text-align:center\">2/248 (0.0081)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F05\">武斗龙</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">8-14 (36.4%)</td><td style=\"text-align:center\">3/248 (0.0121)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F05\">透京皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">10/248 (0.0403)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F05\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">6/248 (0.0242)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F05\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">8/248 (0.0323)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F05\">蝙蝠梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F05\">机械教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F05\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-1 (83.3%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F05\">2c梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">9/248 (0.0363)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F05\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F05\">消失法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">13/248 (0.0524)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F05\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">22/248 (0.0887)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F05\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F05\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F05\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F05\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F05\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">18/248 (0.0726)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F05\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">32/248 (0.1290)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025%2F12%2F05\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025%2F12%2F05\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025%2F12%2F05\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F05\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html?scope=2025%2F12%2F05\">自然龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025%2F12%2F05\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F05\">小凤龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2025%2F12%2F05\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F05\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025%2F12%2F05\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F05\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F05\">横马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F12%2F05\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/5 (0.8000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">95 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 41</span>\n          <span class=\"stat-pill percent\">32.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F12%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>37套 (38.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F12%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>36套 (37.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F12%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>12套 (12.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F12%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>9套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F12%2F05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">23.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F12%2F05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>33套 (49.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F12%2F05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>32套 (47.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html?scope=2025%2F12%2F05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.jpg\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F12%2F05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 26</span>\n          <span class=\"stat-pill percent\">18.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>42套 (77.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>6套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2025%2F12%2F05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.jpg\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>9套 (31.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>8套 (27.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>8套 (27.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (6.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F12%2F05\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">8.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>15套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F12%2F05\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F12%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>6套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F12%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F12%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025%2F12%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.jpg\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025%2F12%2F05\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.jpg\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F12%2F05\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F12%2F05\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025%2F12%2F05\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-031.jpg\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025%2F12%2F05\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.jpg\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025%2F12%2F05\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025/11/28": {
    "key": "2025/11/28",
    "label": "2025/11/28-2025/12/04",
    "event_count": 33,
    "deck_count": 327,
    "top8_count": 264,
    "top1_count": 41,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 94,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 58,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 50,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 22,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 15,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 12,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
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
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 41,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 38,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 36,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 30,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 22,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 15,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 14,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
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
        "name": "精灵｜连击妖",
        "value": 10,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
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
    "type_other_types": 21,
    "top1_type_other_count": 4,
    "top1_type_other_types": 4,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F11%2F28\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025%2F11%2F28\"><b>主教｜教皇透京教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F11%2F28\"><b>主教｜护符教</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F11%2F28\"><b>巫师｜消失法</b><span>1套，最好成绩 1/10</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/11/28-2025/12/04共收录33场有效赛事、327套有排名记录的卡组，其中上位卡组264套、冠军卡组41套。从上位职业分布看，梦魇94套（35.6%）、龙族58套（22.0%）构成本范围的主要出场面，冠军侧则以梦魇15套（36.6%）、精灵12套（29.3%）表现最突出。卡组类型方面，梦魇「机械梦」41套（15.5%，最好1/33）、精灵「连击妖」38套（14.4%，最好1/34）、龙族「大哥龙」36套（13.6%，最好1/25）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由OROCHI使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有88套，占全部记录26.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F11%2F28\">机械梦</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">44-33 (57.1%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F11%2F28\">连击妖</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">40-28 (58.8%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F11%2F28\">大哥龙</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">29-34 (46.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F11%2F28\">nc梦</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">27-27 (50.0%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F11%2F28\">武斗龙</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">11-20 (35.5%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F11%2F28\">透京皇</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">6-13 (31.6%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F11%2F28\">蝙蝠梦</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">12-12 (50.0%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F11%2F28\">透京妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">7-7 (50.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F11%2F28\">2c梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F11%2F28\">天使皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">5/45 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F11%2F28\">机械法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F11%2F28\">机械教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F11%2F28\">节奏教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F11%2F28\">消失法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F11%2F28\">自然皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F11%2F28\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">5/35 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F11%2F28\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F11%2F28\">护符教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025%2F11%2F28\">教皇透京教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025%2F11%2F28\">自然妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F11%2F28\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025%2F11%2F28\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/35 (0.0857)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-31a0444ef547.html?scope=2025%2F11%2F28\">连击偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F11%2F28\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F11%2F28\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F11%2F28\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025%2F11%2F28\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F11%2F28\">真红梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">111 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 36</span>\n          <span class=\"stat-pill percent\">33.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>44套 (39.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>37套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>19套 (17.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>8套 (7.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>2套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025%2F11%2F28\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">81 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">24.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F11%2F28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>45套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F11%2F28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>35套 (43.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025%2F11%2F28\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">56 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">17.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F11%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>43套 (76.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F11%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>10套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025%2F11%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.jpg\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F11%2F28\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">8.6%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>7套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>6套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>5套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>3套 (10.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL22.jpg\" alt=\"教皇透京教核心卡\"><span class=\"archetype-tag-body\"><b>教皇透京教</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025%2F11%2F28\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">11.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>18套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>6套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>6套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025%2F11%2F28\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F11%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>6套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F11%2F28\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>5套 (45.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-31a0444ef547.html?scope=2025%2F11%2F28\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击偶像核心卡\"><span class=\"archetype-tag-body\"><b>连击偶像</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025%2F11%2F28\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4e1b2ab4cca7.html?scope=2025%2F11%2F28\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.jpg\" alt=\"阳炎核心卡\"><span class=\"archetype-tag-body\"><b>阳炎</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-47e47f92771b.html?scope=2025%2F11%2F28\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CP03-106.jpg\" alt=\"占卜核心卡\"><span class=\"archetype-tag-body\"><b>占卜</b><em>1套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2025/11/21": {
    "key": "2025/11/21",
    "label": "2025/11/21-2025/11/27",
    "event_count": 36,
    "deck_count": 364,
    "top8_count": 266,
    "top1_count": 48,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 107,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 59,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 43,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 23,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 22,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP14-022.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.jpg"
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
        "image": "../../assets/cards/CP01-SL03.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 27,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 10,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 8,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 40,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 33,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 30,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 28,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 24,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 23,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 13,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 12,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "Others",
        "value": 63,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 15,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 10,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 8,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 6,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜机械教",
        "value": 3,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.jpg"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.jpg"
      }
    ],
    "type_other_count": 63,
    "type_other_types": 20,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025/11/21-2025/11/27共收录36场有效赛事、364套有排名记录的卡组，其中上位卡组266套、冠军卡组48套。从上位职业分布看，梦魇107套（40.2%）、龙族59套（22.2%）构成本范围的主要出场面，冠军侧则以梦魇27套（56.3%）、精灵10套（20.8%）表现最突出。卡组类型方面，梦魇「机械梦」40套（15.0%，最好1/56）、龙族「大哥龙」33套（12.4%，最好1/20）、精灵「连击妖」30套（11.3%，最好3/59）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有98套，占全部记录26.9%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F11%2F21\">机械梦</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">51-25 (67.1%)</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F11%2F21\">大哥龙</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">25-27 (48.1%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F11%2F21\">连击妖</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">36-22 (62.1%)</td><td style=\"text-align:center\">3/59 (0.0508)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F11%2F21\">蝙蝠梦</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">13-26 (33.3%)</td><td style=\"text-align:center\">3/56 (0.0536)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F11%2F21\">武斗龙</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">15-22 (40.5%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F11%2F21\">nc梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">33-13 (71.7%)</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F11%2F21\">透京皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">5-13 (27.8%)</td><td style=\"text-align:center\">4/56 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F11%2F21\">2c梦</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">2-12 (14.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F11%2F21\">透京妖</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F11%2F21\">耶拉教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F11%2F21\">机械教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">9-2 (81.8%)</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F11%2F21\">自然皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2-5 (28.6%)</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F11%2F21\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F11%2F21\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F11%2F21\">护符教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1-4 (20.0%)</td><td style=\"text-align:center\">5/56 (0.0893)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F11%2F21\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F11%2F21\">控教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F11%2F21\">节奏教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">4/20 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F11%2F21\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F11%2F21\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/56 (0.0357)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F11%2F21\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025%2F11%2F21\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/10 (0.3000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F11%2F21\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F11%2F21\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F11%2F21\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/36 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F11%2F21\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F11%2F21\">loop马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F11%2F21\">小凤龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">134 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 44</span>\n          <span class=\"stat-pill percent\">36.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>50套 (37.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>32套 (23.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>31套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>14套 (10.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>6套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2025%2F11%2F21\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.jpg\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">84 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">23.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>43套 (51.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>37套 (44.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.jpg\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e966f3ffc9bd.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"小凤龙核心卡\"><span class=\"archetype-tag-body\"><b>小凤龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.jpg\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025%2F11%2F21\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">50 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">13.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025%2F11%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>32套 (64.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025%2F11%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>12套 (24.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025%2F11%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>3套 (6.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025%2F11%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9db0cc1ac351.html?scope=2025%2F11%2F21\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP12-004.jpg\" alt=\"卡场妖核心卡\"><span class=\"archetype-tag-body\"><b>卡场妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">9.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.jpg\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>10套 (27.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.jpg\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>9套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>7套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (13.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP17-SL21.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>4套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025%2F11%2F21\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.jpg\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">10.2%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>19套 (51.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.jpg\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>10套 (27.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>3套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.jpg\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025%2F11%2F21\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">4.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025%2F11%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>9套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025%2F11%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025%2F11%2F21\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025%2F11%2F21\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.jpg\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7358073c5024.html?scope=2025%2F11%2F21\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-SL03.jpg\" alt=\"loop马核心卡\"><span class=\"archetype-tag-body\"><b>loop马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025%2F11%2F21\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.jpg\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025%2F11%2F21\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.jpg\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025%2F11%2F21\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.jpg\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
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