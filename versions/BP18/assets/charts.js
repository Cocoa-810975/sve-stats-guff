(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 303,
    "deck_count": 2967,
    "top8_count": 2895,
    "top1_count": 386,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 1018,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 600,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 504,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 349,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 309,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 117,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 37,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 29,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🎮 VG",
        "value": 4,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 403,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 400,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 365,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 327,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 249,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 146,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 125,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 122,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 99,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 74,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 69,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 65,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "主教｜机械教",
        "value": 59,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 46,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 45,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 45,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 37,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 31,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 28,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 22,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 18,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 16,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 14,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 14,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 11,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 10,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 9,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 8,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 8,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 8,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 7,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 6,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 6,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 5,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.png"
      },
      {
        "name": "偶像大师｜cute",
        "value": 4,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.png"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 4,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 4,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.png"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 3,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.png"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 3,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.png"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 3,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 3,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.png"
      },
      {
        "name": "精灵｜自然妖",
        "value": 3,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.png"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 3,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.png"
      },
      {
        "name": "龙族｜林德龙",
        "value": 3,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.png"
      },
      {
        "name": "主教｜教皇透京教",
        "value": 2,
        "link": "decktypes/decktype-c91bb9637ff9.html",
        "image": "../../assets/cards/BP18-SL22.png"
      },
      {
        "name": "主教｜守护教",
        "value": 2,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.png"
      },
      {
        "name": "龙族｜自然龙",
        "value": 2,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.png"
      },
      {
        "name": "赛马娘｜露比马",
        "value": 2,
        "link": "decktypes/decktype-4cc737096206.html",
        "image": "../../assets/cards/ECP01-039.png"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 2,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.png"
      },
      {
        "name": "精灵｜法术妖",
        "value": 2,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.png"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 2,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 2,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.png"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 2,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.png"
      },
      {
        "name": "巫师｜二妹法",
        "value": 2,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.png"
      },
      {
        "name": "巫师｜土法",
        "value": 2,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.png"
      },
      {
        "name": "主教｜忍者教",
        "value": 1,
        "link": "decktypes/decktype-d5a285cab801.html",
        "image": "../../assets/cards/BP03-112.png"
      },
      {
        "name": "偶像大师｜连击偶像",
        "value": 1,
        "link": "decktypes/decktype-31a0444ef547.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.png"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.png"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.png"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP16-079.png"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.png"
      },
      {
        "name": "偶像大师｜〔凪めく日々のおとぎ話〕久川凪型",
        "value": 1,
        "link": "decktypes/decktype-4beda3a2c3e7.html",
        "image": "../../assets/cards/ECP02-050.png"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.png"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.png"
      },
      {
        "name": "精灵｜卡场妖",
        "value": 1,
        "link": "decktypes/decktype-9db0cc1ac351.html",
        "image": "../../assets/cards/BP12-004.png"
      },
      {
        "name": "龙族｜温泉龙",
        "value": 1,
        "link": "decktypes/decktype-632d594fc1e5.html",
        "image": "../../assets/cards/BP15-SL29.png"
      },
      {
        "name": "VG｜阳炎",
        "value": 1,
        "link": "decktypes/decktype-4e1b2ab4cca7.html",
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "精灵｜童话妖",
        "value": 1,
        "link": "decktypes/decktype-e1b3bf89ad40.html",
        "image": "../../assets/cards/PR-483.png"
      },
      {
        "name": "VG｜占卜",
        "value": 1,
        "link": "decktypes/decktype-47e47f92771b.html",
        "image": "../../assets/cards/CP03-106.png"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 403,
        "best": "1/248",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 400,
        "best": "4/248",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 365,
        "best": "1/248",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 327,
        "best": "2/248",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 249,
        "best": "3/248",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 146,
        "best": "8/248",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 125,
        "best": "1/27",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 122,
        "best": "1/45",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 99,
        "best": "6/248",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 74,
        "best": "1/35",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 69,
        "best": "9/248",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 65,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录303场有效赛事、2967套有排名记录的卡组，其中Top8卡组2895套、冠军卡组386套。从Top8职业分布看，梦魇996套（34.4%）、龙族579套（20.0%）构成本范围的主要出场面，冠军侧则以梦魇138套（35.8%）、精灵95套（24.6%）表现最突出。卡组类型方面，梦魇「nc梦」393套（13.6%，最好4/248）、精灵「连击妖」390套（13.5%，最好1/248）、梦魇「机械梦」354套（12.2%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有785套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W05",
    "label": "2026 第5周（2026/01/26-2026/02/01）",
    "event_count": 1,
    "deck_count": 8,
    "top8_count": 8,
    "top1_count": 1,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 4,
        "best": "1/12",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 2,
        "best": "3/12",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 1,
        "best": "4/12",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 1,
        "best": "8/12",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第5周（2026/01/26-2026/02/01）共收录1场有效赛事、8套有排名记录的卡组，其中Top8卡组8套、冠军卡组1套。从Top8职业分布看，梦魇5套（62.5%）、龙族2套（25.0%）构成本范围的主要出场面，冠军侧则以梦魇1套（100.0%）表现最突出。卡组类型方面，梦魇「机械梦」4套（50.0%，最好1/12）、龙族「大哥龙」2套（25.0%，最好3/12）、精灵「连击妖」1套（12.5%，最好4/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由PG(ピカゴリラ)使用，成绩为1/12，成绩系数0.0833。整体来看，前10%成绩卡组共有2套，占全部记录25.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W04",
    "label": "2026 第4周（2026/01/19-2026/01/25）",
    "event_count": 22,
    "deck_count": 220,
    "top8_count": 220,
    "top1_count": 30,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 70,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 40,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 35,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 31,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "🔮 巫师",
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-039.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 34,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 32,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 26,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 20,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 13,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 12,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜机械教",
        "value": 10,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜控教",
        "value": 7,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 7,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 5,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 5,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 4,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "主教｜哈基米鼠鼠教",
        "value": 1,
        "link": "decktypes/decktype-0041c51ca85d.html",
        "image": "../../assets/cards/BP13-094.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.png"
      },
      {
        "name": "赛马娘｜露比马",
        "value": 1,
        "link": "decktypes/decktype-4cc737096206.html",
        "image": "../../assets/cards/ECP01-039.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "巫师｜星星法",
        "value": 1,
        "link": "decktypes/decktype-87a84038db1f.html",
        "image": "../../assets/cards/BP11-035.png"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 1,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 1,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 34,
        "best": "1/30",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 32,
        "best": "1/28",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 26,
        "best": "1/22",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 20,
        "best": "1/22",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 13,
        "best": "1/17",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 12,
        "best": "1/8",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 10,
        "best": "3/22",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 9,
        "best": "2/22",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 7,
        "best": "1/9",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 7,
        "best": "2/8",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "皇家护卫",
        "category": "篡夺皇",
        "count": 5,
        "best": "1/10",
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 5,
        "best": "3/25",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第4周（2026/01/19-2026/01/25）共收录22场有效赛事、220套有排名记录的卡组，其中Top8卡组220套、冠军卡组30套。从Top8职业分布看，梦魇70套（31.8%）、精灵40套（18.2%）构成本范围的主要出场面，冠军侧则以梦魇10套（33.3%）、精灵9套（30.0%）表现最突出。卡组类型方面，精灵「连击妖」34套（15.5%，最好1/30）、梦魇「nc梦」32套（14.5%，最好1/28）、梦魇「机械梦」26套（11.8%，最好1/22）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由まつだ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有51套，占全部记录23.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W03",
    "label": "2026 第3周（2026/01/12-2026/01/18）",
    "event_count": 44,
    "deck_count": 421,
    "top8_count": 421,
    "top1_count": 56,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 136,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 88,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 74,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 50,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 47,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "🔮 巫师",
        "value": 16,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 6,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 74,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 72,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 47,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 44,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 25,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 25,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 19,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 17,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 10,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 8,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 6,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 5,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 4,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 4,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 4,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 2,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-U04.png"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.png"
      },
      {
        "name": "主教｜机械教",
        "value": 1,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "梦魇｜怨灵梦",
        "value": 1,
        "link": "decktypes/decktype-dd2be811fe92.html",
        "image": "../../assets/cards/BP16-079.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.png"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.png"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.png"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 74,
        "best": "1/23",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 72,
        "best": "1/26",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 47,
        "best": "1/24",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 44,
        "best": "1/16",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 25,
        "best": "1/14",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 25,
        "best": "2/26",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 19,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 17,
        "best": "1/17",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 14,
        "best": "1/12",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 10,
        "best": "1/13",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 8,
        "best": "2/22",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 7,
        "best": "2/14",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第3周（2026/01/12-2026/01/18）共收录44场有效赛事、421套有排名记录的卡组，其中Top8卡组421套、冠军卡组56套。从Top8职业分布看，梦魇136套（32.3%）、精灵88套（20.9%）构成本范围的主要出场面，冠军侧则以梦魇19套（33.9%）、精灵15套（26.8%）表现最突出。卡组类型方面，精灵「连击妖」74套（17.6%，最好1/23）、梦魇「nc梦」72套（17.1%，最好1/26）、龙族「大哥龙」47套（11.2%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有97套，占全部记录23.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W02",
    "label": "2026 第2周（2026/01/05-2026/01/11）",
    "event_count": 37,
    "deck_count": 336,
    "top8_count": 336,
    "top1_count": 45,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 127,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 55,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 54,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 51,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 57,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 48,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 41,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 31,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 21,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜控教",
        "value": 21,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 18,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 12,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 10,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 9,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 7,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "主教｜机械教",
        "value": 6,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 6,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 6,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 5,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 4,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 4,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 4,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 3,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 3,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 2,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.png"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "龙族｜自然龙",
        "value": 1,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.png"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.png"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 57,
        "best": "1/22",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 48,
        "best": "1/38",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 41,
        "best": "1/23",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 31,
        "best": "1/23",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 21,
        "best": "1/30",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 21,
        "best": "1/19",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 18,
        "best": "2/22",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 12,
        "best": "5/29",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 10,
        "best": "2/30",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 9,
        "best": "1/19",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 7,
        "best": "2/20",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 6,
        "best": "1/15",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第2周（2026/01/05-2026/01/11）共收录37场有效赛事、336套有排名记录的卡组，其中Top8卡组336套、冠军卡组45套。从Top8职业分布看，梦魇127套（37.8%）、龙族55套（16.4%）构成本范围的主要出场面，冠军侧则以梦魇15套（33.3%）、精灵10套（22.2%）表现最突出。卡组类型方面，梦魇「nc梦」57套（17.0%，最好1/22）、精灵「连击妖」48套（14.3%，最好1/38）、梦魇「机械梦」41套（12.2%，最好1/23）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由くりくす使用，成绩为1/38，成绩系数0.0263。整体来看，前10%成绩卡组共有89套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W01",
    "label": "2026 第1周（2025/12/29-2026/01/04）",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 56,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 33,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 17,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 11,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 7,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜大哥龙",
        "value": 26,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 25,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 17,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 16,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 6,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 6,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 5,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 3,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "偶像大师｜〔凪めく日々のおとぎ話〕久川凪型",
        "value": 1,
        "link": "decktypes/decktype-4beda3a2c3e7.html",
        "image": "../../assets/cards/ECP02-050.png"
      },
      {
        "name": "偶像大师｜cute",
        "value": 1,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 26,
        "best": "1/14",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 25,
        "best": "1/23",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 17,
        "best": "1/37",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 16,
        "best": "1/28",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 7,
        "best": "1/21",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "梦魇",
        "category": "真红梦",
        "count": 7,
        "best": "3/23",
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 6,
        "best": "1/21",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 6,
        "best": "1/20",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "赛马娘",
        "category": "横马",
        "count": 6,
        "best": "5/28",
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 5,
        "best": "4/23",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 3,
        "best": "2/20",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "class": "皇家护卫",
        "category": "荒野皇",
        "count": 3,
        "best": "2/17",
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第1周（2025/12/29-2026/01/04）共收录18场有效赛事、144套有排名记录的卡组，其中Top8卡组144套、冠军卡组18套。从Top8职业分布看，梦魇56套（38.9%）、龙族33套（22.9%）构成本范围的主要出场面，冠军侧则以梦魇10套（55.6%）、精灵4套（22.2%）表现最突出。卡组类型方面，龙族「大哥龙」26套（18.1%，最好1/14）、梦魇「nc梦」25套（17.4%，最好1/23）、梦魇「机械梦」17套（11.8%，最好1/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由kiyo使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有44套，占全部记录30.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W52",
    "label": "2025 第52周（2025/12/22-2025/12/28）",
    "event_count": 27,
    "deck_count": 248,
    "top8_count": 248,
    "top1_count": 33,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 74,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 45,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 28,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 36,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 28,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 26,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 25,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 24,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜控教",
        "value": 16,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 13,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 10,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 8,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 7,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 7,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 5,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "主教｜机械教",
        "value": 4,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 4,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 4,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "偶像大师｜cute",
        "value": 3,
        "link": "decktypes/decktype-947b288c17ea.html",
        "image": "../../assets/cards/CSD02a-SL01.png"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 2,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 2,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 2,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 1,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "龙族｜温泉龙",
        "value": 1,
        "link": "decktypes/decktype-632d594fc1e5.html",
        "image": "../../assets/cards/BP15-SL29.png"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 1,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.png"
      },
      {
        "name": "巫师｜洋葱法",
        "value": 1,
        "link": "decktypes/decktype-dde496925fac.html",
        "image": "../../assets/cards/BP17-SL26.png"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 36,
        "best": "1/17",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 28,
        "best": "1/13",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 26,
        "best": "1/19",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 25,
        "best": "1/19",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 24,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 16,
        "best": "1/20",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 13,
        "best": "1/23",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 10,
        "best": "1/11",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 8,
        "best": "2/20",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 7,
        "best": "2/11",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 7,
        "best": "5/20",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 5,
        "best": "1/26",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第52周（2025/12/22-2025/12/28）共收录27场有效赛事、248套有排名记录的卡组，其中Top8卡组248套、冠军卡组33套。从Top8职业分布看，梦魇74套（29.8%）、龙族54套（21.8%）构成本范围的主要出场面，冠军侧则以精灵8套（24.2%）、龙族8套（24.2%）表现最突出。卡组类型方面，精灵「连击妖」36套（14.5%，最好1/17）、梦魇「nc梦」28套（11.3%，最好1/13）、龙族「武斗龙」26套（10.5%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是主教「节奏教」，由魚使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有57套，占全部记录23.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W51",
    "label": "2025 第51周（2025/12/15-2025/12/21）",
    "event_count": 35,
    "deck_count": 332,
    "top8_count": 332,
    "top1_count": 45,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 101,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🐉 龙族",
        "value": 68,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 51,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 48,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 33,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 22,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 38,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 37,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 36,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 35,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 29,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 20,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 15,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 14,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 13,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 12,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 10,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 9,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 8,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "主教｜机械教",
        "value": 8,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 5,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 5,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 5,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 4,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 3,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 2,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 2,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "主教｜忍者教",
        "value": 1,
        "link": "decktypes/decktype-d5a285cab801.html",
        "image": "../../assets/cards/BP03-112.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 1,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "精灵｜法术妖",
        "value": 1,
        "link": "decktypes/decktype-092822144f93.html",
        "image": "../../assets/cards/BP09-U01.png"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 1,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-052.png"
      },
      {
        "name": "赛马娘｜露比马",
        "value": 1,
        "link": "decktypes/decktype-4cc737096206.html",
        "image": "../../assets/cards/ECP01-039.png"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 1,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.png"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.png"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.png"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 38,
        "best": "1/15",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 37,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 36,
        "best": "1/7",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 35,
        "best": "1/15",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 29,
        "best": "1/13",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 20,
        "best": "2/15",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 15,
        "best": "1/16",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 14,
        "best": "1/10",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 13,
        "best": "1/24",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 12,
        "best": "1/27",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "皇家护卫",
        "category": "铺场皇",
        "count": 10,
        "best": "1/18",
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 9,
        "best": "1/14",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第51周（2025/12/15-2025/12/21）共收录35场有效赛事、332套有排名记录的卡组，其中Top8卡组332套、冠军卡组45套。从Top8职业分布看，梦魇101套（30.4%）、龙族68套（20.5%）构成本范围的主要出场面，冠军侧则以精灵12套（26.7%）、梦魇11套（24.4%）表现最突出。卡组类型方面，梦魇「机械梦」38套（11.4%，最好1/15）、龙族「大哥龙」37套（11.1%，最好1/25）、梦魇「nc梦」36套（10.8%，最好1/7）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「透京皇」，由終人（おわんちゅ）使用，成绩为1/27，成绩系数0.0370。整体来看，前10%成绩卡组共有69套，占全部记录20.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W50",
    "label": "2025 第50周（2025/12/08-2025/12/14）",
    "event_count": 33,
    "deck_count": 299,
    "top8_count": 299,
    "top1_count": 42,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 117,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 53,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 50,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "⛪ 主教",
        "value": 36,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 47,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 46,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 42,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 31,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 20,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 18,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 13,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 11,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜机械教",
        "value": 7,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 5,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 4,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 3,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 3,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 3,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 2,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.png"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "巫师｜魔法使法",
        "value": 1,
        "link": "decktypes/decktype-f2cf81b92eda.html",
        "image": "../../assets/cards/BP14-U03.png"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 1,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "精灵｜童话妖",
        "value": 1,
        "link": "decktypes/decktype-e1b3bf89ad40.html",
        "image": "../../assets/cards/PR-483.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "巫师｜二妹法",
        "value": 1,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-039.png"
      }
    ],
    "top_types": [
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 47,
        "best": "1/19",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 46,
        "best": "1/30",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 42,
        "best": "1/24",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 31,
        "best": "1/23",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 20,
        "best": "1/20",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 18,
        "best": "1/10",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 14,
        "best": "1/11",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 13,
        "best": "2/26",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 11,
        "best": "2/11",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 7,
        "best": "1/29",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 7,
        "best": "1/24",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "class": "皇家护卫",
        "category": "荒野皇",
        "count": 5,
        "best": "1/14",
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第50周（2025/12/08-2025/12/14）共收录33场有效赛事、299套有排名记录的卡组，其中Top8卡组299套、冠军卡组42套。从Top8职业分布看，梦魇117套（39.1%）、精灵53套（17.7%）构成本范围的主要出场面，冠军侧则以梦魇14套（33.3%）、主教8套（19.0%）表现最突出。卡组类型方面，精灵「连击妖」47套（15.7%，最好1/19）、梦魇「nc梦」46套（15.4%，最好1/30）、梦魇「机械梦」42套（14.0%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由ナツメ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有75套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W49",
    "label": "2025 第49周（2025/12/01-2025/12/07）",
    "event_count": 24,
    "deck_count": 323,
    "top8_count": 251,
    "top1_count": 34,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 107,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 83,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 54,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 31,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 24,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 16,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CP03-106.png"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜大哥龙",
        "value": 45,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 42,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 41,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 39,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 37,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 16,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 11,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜控教",
        "value": 10,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 10,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "主教｜机械教",
        "value": 7,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 7,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 6,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 5,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 3,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 2,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 2,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 1,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "主教｜教皇透京教",
        "value": 1,
        "link": "decktypes/decktype-c91bb9637ff9.html",
        "image": "../../assets/cards/BP18-SL22.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "赛马娘｜法术马",
        "value": 1,
        "link": "decktypes/decktype-1ef829252684.html",
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "巫师｜小卖部法",
        "value": 1,
        "link": "decktypes/decktype-aa7a697c0ec2.html",
        "image": "../../assets/cards/PR-316.png"
      },
      {
        "name": "精灵｜自然妖",
        "value": 1,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 1,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "龙族｜自然龙",
        "value": 1,
        "link": "decktypes/decktype-6357998a073f.html",
        "image": "../../assets/cards/BP07-052.png"
      },
      {
        "name": "精灵｜EX妖",
        "value": 1,
        "link": "decktypes/decktype-b9d7b2c5bb5d.html",
        "image": "../../assets/cards/PR-297.png"
      },
      {
        "name": "主教｜守护教",
        "value": 1,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-U06.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 1,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "赛马娘｜大哥马",
        "value": 1,
        "link": "decktypes/decktype-a168893e77d8.html",
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "巫师｜阴阳超越法",
        "value": 1,
        "link": "decktypes/decktype-de84a3a89ec3.html",
        "image": "../../assets/cards/PR-029.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "VG｜占卜",
        "value": 1,
        "link": "decktypes/decktype-47e47f92771b.html",
        "image": "../../assets/cards/CP03-106.png"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 45,
        "best": "2/248",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 42,
        "best": "1/248",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 41,
        "best": "4/248",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 39,
        "best": "1/248",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 37,
        "best": "3/248",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 16,
        "best": "1/16",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 14,
        "best": "10/248",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 11,
        "best": "6/248",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 10,
        "best": "8/248",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 10,
        "best": "9/248",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 7,
        "best": "1/248",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 7,
        "best": "5/248",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第49周（2025/12/01-2025/12/07）共收录24场有效赛事、323套有排名记录的卡组，其中Top8卡组251套、冠军卡组34套。从Top8职业分布看，梦魇85套（33.9%）、龙族62套（24.7%）构成本范围的主要出场面，冠军侧则以梦魇13套（38.2%）、精灵10套（29.4%）表现最突出。卡组类型方面，龙族「大哥龙」34套（13.5%，最好2/248）、梦魇「nc梦」34套（13.5%，最好4/248）、精灵「连击妖」29套（11.6%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有126套，占全部记录39.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W48",
    "label": "2025 第48周（2025/11/24-2025/11/30）",
    "event_count": 37,
    "deck_count": 382,
    "top8_count": 382,
    "top1_count": 49,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 139,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🐉 龙族",
        "value": 87,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 65,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 42,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 33,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🔮 巫师",
        "value": 12,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 56,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 49,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 48,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 42,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 36,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 24,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 23,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 14,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "主教｜控教",
        "value": 13,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 12,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 6,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "主教｜机械教",
        "value": 6,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 6,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 6,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 6,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 6,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 5,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "精灵｜自然妖",
        "value": 2,
        "link": "decktypes/decktype-941c1ca0a7a2.html",
        "image": "../../assets/cards/BP07-SL01.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 1,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.png"
      },
      {
        "name": "主教｜教皇透京教",
        "value": 1,
        "link": "decktypes/decktype-c91bb9637ff9.html",
        "image": "../../assets/cards/BP18-SL22.png"
      },
      {
        "name": "偶像大师｜连击偶像",
        "value": 1,
        "link": "decktypes/decktype-31a0444ef547.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 1,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "龙族｜林德龙",
        "value": 1,
        "link": "decktypes/decktype-18ec8bbe957f.html",
        "image": "../../assets/cards/BP09-055.png"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 1,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.png"
      },
      {
        "name": "VG｜阳炎",
        "value": 1,
        "link": "decktypes/decktype-4e1b2ab4cca7.html",
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.png"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 56,
        "best": "1/33",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 49,
        "best": "1/25",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 48,
        "best": "1/34",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 42,
        "best": "1/25",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 36,
        "best": "1/22",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 24,
        "best": "1/11",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 23,
        "best": "1/45",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 14,
        "best": "1/20",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 13,
        "best": "1/16",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 12,
        "best": "1/21",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 7,
        "best": "2/20",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "class": "巫师",
        "category": "机械法",
        "count": 6,
        "best": "1/35",
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第48周（2025/11/24-2025/11/30）共收录37场有效赛事、382套有排名记录的卡组，其中Top8卡组382套、冠军卡组49套。从Top8职业分布看，梦魇139套（36.4%）、龙族87套（22.8%）构成本范围的主要出场面，冠军侧则以梦魇22套（44.9%）、精灵13套（26.5%）表现最突出。卡组类型方面，梦魇「机械梦」56套（14.7%，最好1/33）、龙族「大哥龙」49套（12.8%，最好1/25）、精灵「连击妖」48套（12.6%，最好1/34）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由OROCHI使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有102套，占全部记录26.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2025-W47",
    "label": "2025 第47周（2025/11/17-2025/11/23）",
    "event_count": 25,
    "deck_count": 254,
    "top8_count": 254,
    "top1_count": 33,
    "class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 86,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🐉 龙族",
        "value": 59,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 36,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 28,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "⛪ 主教",
        "value": 26,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🔮 巫师",
        "value": 12,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 33,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 29,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 28,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 22,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 21,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 20,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 13,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "皇家护卫｜自然皇",
        "value": 9,
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "name": "主教｜机械教",
        "value": 8,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 8,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "主教｜控教",
        "value": 8,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 8,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 7,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "主教｜耶拉教",
        "value": 7,
        "link": "decktypes/decktype-754c9f89f7d7.html",
        "image": "../../assets/cards/BP18-SL25.png"
      },
      {
        "name": "精灵｜兽妖",
        "value": 3,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 3,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 3,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "巫师｜机械法",
        "value": 3,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 2,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.png"
      },
      {
        "name": "皇家护卫｜天使皇",
        "value": 2,
        "link": "decktypes/decktype-2b0efb008539.html",
        "image": "../../assets/cards/PR-233.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "偶像大师｜cool",
        "value": 2,
        "link": "decktypes/decktype-0fe79a39fa2e.html",
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 2,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "巫师｜学院法",
        "value": 2,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.png"
      },
      {
        "name": "主教｜黄金船教",
        "value": 1,
        "link": "decktypes/decktype-07544eb64d36.html",
        "image": "../../assets/cards/CP01-SL18.png"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 1,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP13-019.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 1,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "赛马娘｜萝卜马",
        "value": 1,
        "link": "decktypes/decktype-9619cf1888e3.html",
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 1,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-057.png"
      },
      {
        "name": "精灵｜卡场妖",
        "value": 1,
        "link": "decktypes/decktype-9db0cc1ac351.html",
        "image": "../../assets/cards/BP12-004.png"
      },
      {
        "name": "梦魇｜妖怪梦",
        "value": 1,
        "link": "decktypes/decktype-09fb70f80a6c.html",
        "image": "../../assets/cards/BP15-079.png"
      },
      {
        "name": "VG｜約束の火 エルモ型",
        "value": 1,
        "link": "decktypes/decktype-892e7f7f3dde.html",
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "偶像大师｜passion",
        "value": 1,
        "link": "decktypes/decktype-05e1a2604c89.html",
        "image": "../../assets/cards/ECP02-063.png"
      }
    ],
    "top_types": [
      {
        "class": "梦魇",
        "category": "机械梦",
        "count": 33,
        "best": "1/56",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "class": "龙族",
        "category": "武斗龙",
        "count": 29,
        "best": "1/23",
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "class": "龙族",
        "category": "大哥龙",
        "count": 28,
        "best": "1/15",
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 22,
        "best": "3/59",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "class": "梦魇",
        "category": "蝙蝠梦",
        "count": 21,
        "best": "3/56",
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "class": "梦魇",
        "category": "nc梦",
        "count": 20,
        "best": "1/59",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "class": "皇家护卫",
        "category": "透京皇",
        "count": 13,
        "best": "4/56",
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "class": "皇家护卫",
        "category": "自然皇",
        "count": 9,
        "best": "4/59",
        "link": "decktypes/decktype-ed7dbad0b4d0.html",
        "image": "../../assets/cards/BP07-SL04.png"
      },
      {
        "class": "主教",
        "category": "机械教",
        "count": 8,
        "best": "1/25",
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "class": "精灵",
        "category": "透京妖",
        "count": 8,
        "best": "1/12",
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "class": "主教",
        "category": "控教",
        "count": 8,
        "best": "5/56",
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "class": "梦魇",
        "category": "2c梦",
        "count": 8,
        "best": "2/15",
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第47周（2025/11/17-2025/11/23）共收录25场有效赛事、254套有排名记录的卡组，其中Top8卡组254套、冠军卡组33套。从Top8职业分布看，梦魇86套（33.9%）、龙族59套（23.2%）构成本范围的主要出场面，冠军侧则以梦魇17套（51.5%）、精灵7套（21.2%）表现最突出。卡组类型方面，梦魇「机械梦」33套（13.0%，最好1/56）、龙族「武斗龙」29套（11.4%，最好1/23）、龙族「大哥龙」28套（11.0%，最好1/15）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有73套，占全部记录28.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 303,
    "deck_count": 2967,
    "top8_count": 2895,
    "top1_count": 386,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 996,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 579,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 489,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 345,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 303,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 114,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 36,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 29,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🎮 VG",
        "value": 4,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 138,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 95,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 64,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 45,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 8,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 393,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 390,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 354,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 316,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 239,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 146,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 121,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 120,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "Others",
        "value": 816,
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
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 63,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 62,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 38,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 23,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 16,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "Others",
        "value": 107,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 816,
    "type_other_types": 62,
    "top1_type_other_count": 107,
    "top1_type_other_types": 23,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html\"><b>精灵｜透京妖</b><span>14套，最好成绩 1/35</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html\"><b>主教｜控教</b><span>14套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html\"><b>主教｜机械教</b><span>12套，最好成绩 1/248</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html\"><b>皇家护卫｜透京皇</b><span>12套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>11套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html\"><b>梦魇｜蝙蝠梦</b><span>10套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>5套，最好成绩 1/35</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html\"><b>皇家护卫｜荒野皇</b><span>3套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html\"><b>龙族｜快攻龙</b><span>3套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-90c874a554cb.html\"><b>巫师｜消失法</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html\"><b>皇家护卫｜自然皇</b><span>3套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75305287827c.html\"><b>梦魇｜2c梦</b><span>2套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html\"><b>精灵｜兽妖</b><span>2套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html\"><b>偶像大师｜cool</b><span>2套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html\"><b>皇家护卫｜篡夺皇</b><span>2套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html\"><b>精灵｜妖精妖</b><span>2套，最好成绩 1/4</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c91bb9637ff9.html\"><b>主教｜教皇透京教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d5a285cab801.html\"><b>主教｜忍者教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-1ef829252684.html\"><b>赛马娘｜法术马</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-754c9f89f7d7.html\"><b>主教｜耶拉教</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-05e1a2604c89.html\"><b>偶像大师｜passion</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录303场有效赛事、2967套有排名记录的卡组，其中Top8卡组2895套、冠军卡组386套。从Top8职业分布看，梦魇996套（34.4%）、龙族579套（20.0%）构成本范围的主要出场面，冠军侧则以梦魇138套（35.8%）、精灵95套（24.6%）表现最突出。卡组类型方面，梦魇「nc梦」393套（13.6%，最好4/248）、精灵「连击妖」390套（13.5%，最好1/248）、梦魇「机械梦」354套（12.2%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有785套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">393</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">390</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">354</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html\">大哥龙</a></td><td style=\"text-align:center\">316</td><td style=\"text-align:center\">2/248 (0.0081)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html\">武斗龙</a></td><td style=\"text-align:center\">239</td><td style=\"text-align:center\">3/248 (0.0121)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">146</td><td style=\"text-align:center\">8/248 (0.0323)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">121</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">120</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">97</td><td style=\"text-align:center\">6/248 (0.0242)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">72</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">67</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">65</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html\">机械教</a></td><td style=\"text-align:center\">57</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">44</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">43</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html\">自然皇</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html\">耶拉教</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html\">横马</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html\">天使皇</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">5/45 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html\">金币皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">2/56 (0.0357)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html\">cool</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html\">passion</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html\">快攻龙</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html\">黄金船教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3/35 (0.0857)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html\">大哥马</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html\">cute</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html\">萝卜马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5/10 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html\">荒野龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html\">小卖部法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html\">自然妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html\">魔法使法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html\">林德龙</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c91bb9637ff9.html\">教皇透京教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html\">法术马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html\">自然龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-4cc737096206.html\">露比马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html\">妖怪梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html\">法术妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/10 (0.5000)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-892e7f7f3dde.html\">約束の火 エルモ型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/11 (0.6364)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html\">洋葱法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html\">阴阳超越法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/9 (0.7778)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">8/10 (0.8000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d5a285cab801.html\">忍者教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-31a0444ef547.html\">连击偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-2e7701fa0587.html\">控梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-4beda3a2c3e7.html\">〔凪めく日々のおとぎ話〕久川凪型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-9db0cc1ac351.html\">卡场妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/15 (0.5333)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-632d594fc1e5.html\">温泉龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-4e1b2ab4cca7.html\">阳炎</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-e1b3bf89ad40.html\">童话妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-47e47f92771b.html\">占卜</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1018 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 278</span>\n          <span class=\"stat-pill percent\">34.3%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>400套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>365套 (35.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>122套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>69套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>45套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>7套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.png\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>6套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.png\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>2套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.png\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP16-079.png\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (0.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">600 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 150</span>\n          <span class=\"stat-pill percent\">20.2%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>327套 (54.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>249套 (41.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>8套 (1.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.png\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>4套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.png\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.png\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.png\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.png\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>2套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-632d594fc1e5.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL29.png\" alt=\"温泉龙核心卡\"><span class=\"archetype-tag-body\"><b>温泉龙</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">504 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 175</span>\n          <span class=\"stat-pill percent\">17.0%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>403套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>74套 (14.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>10套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>8套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.png\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>3套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.png\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>2套 (0.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.png\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.png\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9db0cc1ac351.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP12-004.png\" alt=\"卡场妖核心卡\"><span class=\"archetype-tag-body\"><b>卡场妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e1b3bf89ad40.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-483.png\" alt=\"童话妖核心卡\"><span class=\"archetype-tag-body\"><b>童话妖</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">349 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 91</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>146套 (41.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>99套 (28.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>59套 (16.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>31套 (8.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>8套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c91bb9637ff9.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL22.png\" alt=\"教皇透京教核心卡\"><span class=\"archetype-tag-body\"><b>教皇透京教</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.png\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d5a285cab801.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP03-112.png\" alt=\"忍者教核心卡\"><span class=\"archetype-tag-body\"><b>忍者教</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.png\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">309 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 59</span>\n          <span class=\"stat-pill percent\">10.4%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>125套 (40.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>65套 (21.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>37套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>28套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>18套 (5.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>16套 (5.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>14套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.png\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>5套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.png\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">3.9%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>46套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>45套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>11套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.png\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.png\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.png\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.png\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.png\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.png\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-035.png\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">37 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>22套 (59.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>6套 (16.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-026.png\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>4套 (10.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.png\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>3套 (8.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4cc737096206.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-039.png\" alt=\"露比马核心卡\"><span class=\"archetype-tag-body\"><b>露比马</b><em>2套 (5.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">29 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>14套 (48.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>9套 (31.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.png\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>4套 (13.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-31a0444ef547.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击偶像核心卡\"><span class=\"archetype-tag-body\"><b>连击偶像</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4beda3a2c3e7.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-050.png\" alt=\"〔凪めく日々のおとぎ話〕久川凪型核心卡\"><span class=\"archetype-tag-body\"><b>〔凪めく日々のおとぎ話〕久川凪型</b><em>1套 (3.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.png\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4e1b2ab4cca7.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.png\" alt=\"阳炎核心卡\"><span class=\"archetype-tag-body\"><b>阳炎</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-47e47f92771b.html\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CP03-106.png\" alt=\"占卜核心卡\"><span class=\"archetype-tag-body\"><b>占卜</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2026-W05": {
    "key": "2026-W05",
    "label": "2026 第5周（2026/01/26-2026/02/01）",
    "event_count": 1,
    "deck_count": 8,
    "top8_count": 8,
    "top1_count": 1,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 5,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 1,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 1,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 1,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 1,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 1,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      }
    ],
    "type_other_count": 0,
    "type_other_types": 0,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第5周（2026/01/26-2026/02/01）共收录1场有效赛事、8套有排名记录的卡组，其中Top8卡组8套、冠军卡组1套。从Top8职业分布看，梦魇5套（62.5%）、龙族2套（25.0%）构成本范围的主要出场面，冠军侧则以梦魇1套（100.0%）表现最突出。卡组类型方面，梦魇「机械梦」4套（50.0%，最好1/12）、龙族「大哥龙」2套（25.0%，最好3/12）、精灵「连击妖」1套（12.5%，最好4/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由PG(ピカゴリラ)使用，成绩为1/12，成绩系数0.0833。整体来看，前10%成绩卡组共有2套，占全部记录25.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W05\">机械梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W05\">大哥龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W05\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W05\">nc梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/12 (0.6667)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">62.5%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>4套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W05\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W05\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W05\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a>"
  },
  "2026-W04": {
    "key": "2026-W04",
    "label": "2026 第4周（2026/01/19-2026/01/25）",
    "event_count": 22,
    "deck_count": 220,
    "top8_count": 220,
    "top1_count": 30,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 70,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 40,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 35,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 31,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "🔮 巫师",
        "value": 7,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 6,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-039.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 9,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 5,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 2,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 34,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 32,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 26,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 20,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 13,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 12,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜机械教",
        "value": 10,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 9,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "Others",
        "value": 64,
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
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 6,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 3,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "Others",
        "value": 3,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 64,
    "type_other_types": 27,
    "top1_type_other_count": 3,
    "top1_type_other_types": 3,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W04\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W04\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W04\"><b>主教｜控教</b><span>1套，最好成绩 1/9</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第4周（2026/01/19-2026/01/25）共收录22场有效赛事、220套有排名记录的卡组，其中Top8卡组220套、冠军卡组30套。从Top8职业分布看，梦魇70套（31.8%）、精灵40套（18.2%）构成本范围的主要出场面，冠军侧则以梦魇10套（33.3%）、精灵9套（30.0%）表现最突出。卡组类型方面，精灵「连击妖」34套（15.5%，最好1/30）、梦魇「nc梦」32套（14.5%，最好1/28）、梦魇「机械梦」26套（11.8%，最好1/22）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由まつだ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有51套，占全部记录23.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W04\">连击妖</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W04\">nc梦</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W04\">机械梦</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W04\">大哥龙</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W04\">铺场皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W04\">武斗龙</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W04\">机械教</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W04\">节奏教</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W04\">控教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W04\">透京皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W04\">篡夺皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W04\">透京妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W04\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W04\">2c梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W04\">蝙蝠梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W04\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W04\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W04\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/30 (0.1333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W04\">荒野皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W04\">黄金船教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W04\">横马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W04\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/12 (0.4167)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W04\">哈基米鼠鼠教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W04\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/9 (0.2222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W04\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-4cc737096206.html?scope=2026-W04\">露比马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W04\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026-W04\">星星法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html?scope=2026-W04\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W04\">人偶妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W04\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W04\">五妹龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W04\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">6/12 (0.5000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026-W04\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/9 (0.7778)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W04\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/8 (0.8750)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">70 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">31.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>32套 (45.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>26套 (37.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>4套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W04\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">35 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">15.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>20套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>12套 (34.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2026-W04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.png\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.png\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W04\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">40 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">18.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>34套 (85.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>5套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W04\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.png\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>1套 (2.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">14.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>10套 (32.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>9套 (29.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>7套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0041c51ca85d.html?scope=2026-W04\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP13-094.png\" alt=\"哈基米鼠鼠教核心卡\"><span class=\"archetype-tag-body\"><b>哈基米鼠鼠教</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">14.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>13套 (41.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>7套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>5套 (16.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W04\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-87a84038db1f.html?scope=2026-W04\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP11-035.png\" alt=\"星星法核心卡\"><span class=\"archetype-tag-body\"><b>星星法</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.7%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W04\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4cc737096206.html?scope=2026-W04\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-039.png\" alt=\"露比马核心卡\"><span class=\"archetype-tag-body\"><b>露比马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2026-W04\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.png\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W04\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026-W04\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-026.png\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W03": {
    "key": "2026-W03",
    "label": "2026 第3周（2026/01/12-2026/01/18）",
    "event_count": 44,
    "deck_count": 421,
    "top8_count": 421,
    "top1_count": 56,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 136,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 88,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 74,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 50,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 47,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "🔮 巫师",
        "value": 16,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 6,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 19,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 15,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 7,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 4,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 74,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 72,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 47,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 44,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 25,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 25,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 19,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 17,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
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
        "name": "梦魇｜nc梦",
        "value": 16,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 12,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 7,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 4,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 3,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 98,
    "type_other_types": 30,
    "top1_type_other_count": 8,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W03\"><b>精灵｜透京妖</b><span>2套，最好成绩 1/13</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W03\"><b>皇家护卫｜篡夺皇</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W03\"><b>主教｜控教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W03\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W03\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W03\"><b>巫师｜机械法</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W03\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第3周（2026/01/12-2026/01/18）共收录44场有效赛事、421套有排名记录的卡组，其中Top8卡组421套、冠军卡组56套。从Top8职业分布看，梦魇136套（32.3%）、精灵88套（20.9%）构成本范围的主要出场面，冠军侧则以梦魇19套（33.9%）、精灵15套（26.8%）表现最突出。卡组类型方面，精灵「连击妖」74套（17.6%，最好1/23）、梦魇「nc梦」72套（17.1%，最好1/26）、龙族「大哥龙」47套（11.2%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有97套，占全部记录23.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W03\">连击妖</a></td><td style=\"text-align:center\">74</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W03\">nc梦</a></td><td style=\"text-align:center\">72</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W03\">大哥龙</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W03\">机械梦</a></td><td style=\"text-align:center\">44</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W03\">武斗龙</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W03\">控教</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W03\">铺场皇</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W03\">节奏教</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W03\">透京皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W03\">透京妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W03\">蝙蝠梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W03\">机械法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W03\">耶拉教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4/21 (0.1905)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W03\">自然皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W03\">2c梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3/22 (0.1364)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W03\">消失法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W03\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W03\">横马</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W03\">cool</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6/16 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W03\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W03\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W03\">五妹龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/16 (0.1250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W03\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W03\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W03\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W03\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W03\">passion</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W03\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W03\">机械教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W03\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W03\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W03\">怨灵梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W03\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W03\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">6/13 (0.4615)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W03\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/14 (0.5000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html?scope=2026-W03\">法术妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/10 (0.5000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html?scope=2026-W03\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W03\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/6 (0.8333)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">136 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">32.3%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>72套 (52.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>44套 (32.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>8套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.png\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dd2be811fe92.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP16-079.png\" alt=\"怨灵梦核心卡\"><span class=\"archetype-tag-body\"><b>怨灵梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W03\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">74 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">17.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>47套 (63.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>25套 (33.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W03\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-U04.png\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>2套 (2.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">88 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">20.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>74套 (84.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>10套 (11.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2026-W03\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.png\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">50 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>25套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>17套 (34.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>6套 (12.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2026-W03\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">11.2%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>19套 (40.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>14套 (29.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>5套 (10.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (6.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.png\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W03\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.8%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.png\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.png\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W03\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.png\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W03\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>4套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W03\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W03\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W02": {
    "key": "2026-W02",
    "label": "2026 第2周（2026/01/05-2026/01/11）",
    "event_count": 37,
    "deck_count": 336,
    "top8_count": 336,
    "top1_count": 45,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 127,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 55,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 54,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 51,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 30,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 10,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 15,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 10,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 6,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 57,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 48,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 41,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 31,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 21,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜控教",
        "value": 21,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 18,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "Others",
        "value": 99,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜nc梦",
        "value": 10,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 9,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 6,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 5,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜快攻龙",
        "value": 2,
        "link": "decktypes/decktype-f50f99e7f0df.html",
        "image": "../../assets/cards/ECP01-035.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "Others",
        "value": 6,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 99,
    "type_other_types": 27,
    "top1_type_other_count": 6,
    "top1_type_other_types": 6,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W02\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W02\"><b>巫师｜机械法</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W02\"><b>主教｜机械教</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W02\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W02\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W02\"><b>龙族｜武斗龙</b><span>1套，最好成绩 1/5</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第2周（2026/01/05-2026/01/11）共收录37场有效赛事、336套有排名记录的卡组，其中Top8卡组336套、冠军卡组45套。从Top8职业分布看，梦魇127套（37.8%）、龙族55套（16.4%）构成本范围的主要出场面，冠军侧则以梦魇15套（33.3%）、精灵10套（22.2%）表现最突出。卡组类型方面，梦魇「nc梦」57套（17.0%，最好1/22）、精灵「连击妖」48套（14.3%，最好1/38）、梦魇「机械梦」41套（12.2%，最好1/23）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是精灵「连击妖」，由くりくす使用，成绩为1/38，成绩系数0.0263。整体来看，前10%成绩卡组共有89套，占全部记录26.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W02\">nc梦</a></td><td style=\"text-align:center\">57</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W02\">连击妖</a></td><td style=\"text-align:center\">48</td><td style=\"text-align:center\">1/38 (0.0263)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W02\">机械梦</a></td><td style=\"text-align:center\">41</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W02\">大哥龙</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W02\">节奏教</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W02\">控教</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W02\">武斗龙</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W02\">蝙蝠梦</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">5/29 (0.1724)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W02\">真红梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W02\">透京皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W02\">自然皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W02\">机械教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W02\">透京妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W02\">铺场皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W02\">机械法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W02\">快攻龙</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W02\">2c梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W02\">荒野皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W02\">cool</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W02\">耶拉教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/21 (0.1429)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W02\">横马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5/15 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W02\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W02\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W02\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/15 (0.3333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W02\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W02\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026-W02\">控梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W02\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W02\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html?scope=2026-W02\">自然龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W02\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026-W02\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/9 (0.5556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W02\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/9 (0.7778)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W02\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/9 (0.7778)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">127 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 31</span>\n          <span class=\"stat-pill percent\">37.8%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>57套 (44.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>41套 (32.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>12套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>10套 (7.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.png\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.png\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W02\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">55 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">16.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>31套 (56.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>18套 (32.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>4套 (7.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html?scope=2026-W02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.png\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W02\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.png\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">16.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>48套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W02\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>6套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">15.2%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>21套 (41.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>21套 (41.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>6套 (11.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2026-W02\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>3套 (5.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">8.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>9套 (30.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>7套 (23.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>6套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>4套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W02\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>2套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>5套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W02\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.png\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2026-W02\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-026.png\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2026-W02\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W02\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2026-W01": {
    "key": "2026-W01",
    "label": "2026 第1周（2025/12/29-2026/01/04）",
    "event_count": 18,
    "deck_count": 144,
    "top8_count": 144,
    "top1_count": 18,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 56,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 33,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 17,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 15,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 11,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 7,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 10,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 4,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 2,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜大哥龙",
        "value": 26,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 25,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 17,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 16,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 7,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 6,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 6,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "赛马娘｜横马",
        "value": 6,
        "link": "decktypes/decktype-5a0677b37803.html",
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "Others",
        "value": 28,
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
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 4,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 2,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 1,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 1,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      }
    ],
    "type_other_count": 28,
    "type_other_types": 14,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第1周（2025/12/29-2026/01/04）共收录18场有效赛事、144套有排名记录的卡组，其中Top8卡组144套、冠军卡组18套。从Top8职业分布看，梦魇56套（38.9%）、龙族33套（22.9%）构成本范围的主要出场面，冠军侧则以梦魇10套（55.6%）、精灵4套（22.2%）表现最突出。卡组类型方面，龙族「大哥龙」26套（18.1%，最好1/14）、梦魇「nc梦」25套（17.4%，最好1/23）、梦魇「机械梦」17套（11.8%，最好1/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由kiyo使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有44套，占全部记录30.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W01\">大哥龙</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W01\">nc梦</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W01\">机械梦</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W01\">连击妖</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W01\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W01\">真红梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3/23 (0.1304)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W01\">控教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W01\">武斗龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W01\">横马</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W01\">透京皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4/23 (0.1739)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W01\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W01\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W01\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W01\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W01\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W01\">机械教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/28 (0.1786)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W01\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/19 (0.2105)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W01\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-4beda3a2c3e7.html?scope=2026-W01\">〔凪めく日々のおとぎ話〕久川凪型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/21 (0.3333)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026-W01\">cute</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/15 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W01\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W01\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W01\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/10 (0.8000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">56 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">38.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>25套 (44.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>17套 (30.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>7套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (5.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W01\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">22.9%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2026-W01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>26套 (78.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2026-W01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>6套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2026-W01\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">11.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>16套 (94.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W01\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">10.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>7套 (46.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>6套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2026-W01\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">7.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>5套 (45.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W01\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (27.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W01\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">4.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2026-W01\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>6套 (85.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2026-W01\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2026-W01\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4beda3a2c3e7.html?scope=2026-W01\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-050.png\" alt=\"〔凪めく日々のおとぎ話〕久川凪型核心卡\"><span class=\"archetype-tag-body\"><b>〔凪めく日々のおとぎ話〕久川凪型</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2026-W01\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.png\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025-W52": {
    "key": "2025-W52",
    "label": "2025 第52周（2025/12/22-2025/12/28）",
    "event_count": 27,
    "deck_count": 248,
    "top8_count": 248,
    "top1_count": 33,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 74,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 54,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 45,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 31,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 28,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "🔮 巫师",
        "value": 11,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-SP13.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 8,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "🐉 龙族",
        "value": 8,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "💀 梦魇",
        "value": 6,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 5,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 36,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 28,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 26,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 25,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 24,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜控教",
        "value": 16,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 13,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 10,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
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
        "name": "精灵｜连击妖",
        "value": 7,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 3,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "主教｜控教",
        "value": 3,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 3,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 2,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 70,
    "type_other_types": 26,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W52\"><b>主教｜节奏教</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W52\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W52\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W52\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W52\"><b>主教｜机械教</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W52\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W52\"><b>皇家护卫｜金币皇</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第52周（2025/12/22-2025/12/28）共收录27场有效赛事、248套有排名记录的卡组，其中Top8卡组248套、冠军卡组33套。从Top8职业分布看，梦魇74套（29.8%）、龙族54套（21.8%）构成本范围的主要出场面，冠军侧则以精灵8套（24.2%）、龙族8套（24.2%）表现最突出。卡组类型方面，精灵「连击妖」36套（14.5%，最好1/17）、梦魇「nc梦」28套（11.3%，最好1/13）、龙族「武斗龙」26套（10.5%，最好1/19）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是主教「节奏教」，由魚使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有57套，占全部记录23.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W52\">连击妖</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W52\">nc梦</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W52\">武斗龙</a></td><td style=\"text-align:center\">26</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W52\">机械梦</a></td><td style=\"text-align:center\">25</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W52\">大哥龙</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W52\">控教</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W52\">透京皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W52\">蝙蝠梦</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W52\">铺场皇</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W52\">透京妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W52\">2c梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">5/20 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W52\">节奏教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W52\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W52\">机械教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W52\">真红梦</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W52\">篡夺皇</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5/23 (0.2174)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-947b288c17ea.html?scope=2025-W52\">cute</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025-W52\">荒野龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W52\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W52\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W52\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W52\">耶拉教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/20 (0.3500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W52\">荒野皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/11 (0.3636)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W52\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W52\">cool</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W52\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W52\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W52\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/19 (0.3684)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W52\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-632d594fc1e5.html?scope=2025-W52\">温泉龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025-W52\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/11 (0.6364)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W52\">自然皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">6/7 (0.8571)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W52\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-dde496925fac.html?scope=2025-W52\">洋葱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">74 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">29.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W52\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>28套 (37.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W52\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>25套 (33.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W52\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>10套 (13.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W52\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>7套 (9.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W52\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>4套 (5.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">21.8%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W52\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>26套 (48.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W52\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>24套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025-W52\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.png\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-632d594fc1e5.html?scope=2025-W52\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL29.png\" alt=\"温泉龙核心卡\"><span class=\"archetype-tag-body\"><b>温泉龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025-W52\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.png\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">18.1%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W52\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>36套 (80.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W52\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>7套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W52\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W52\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">11.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W52\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>16套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W52\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (17.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W52\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>4套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W52\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W52\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">12.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>13套 (41.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>8套 (25.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>4套 (12.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W52\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">4.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W52\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>5套 (45.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W52\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W52\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W52\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.png\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dde496925fac.html?scope=2025-W52\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-SL26.png\" alt=\"洋葱法核心卡\"><span class=\"archetype-tag-body\"><b>洋葱法</b><em>1套 (9.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W52\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-947b288c17ea.html?scope=2025-W52\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02a-SL01.png\" alt=\"cute核心卡\"><span class=\"archetype-tag-body\"><b>cute</b><em>3套 (75.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W52\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025-W51": {
    "key": "2025-W51",
    "label": "2025 第51周（2025/12/15-2025/12/21）",
    "event_count": 35,
    "deck_count": 332,
    "top8_count": 332,
    "top1_count": 45,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 101,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🐉 龙族",
        "value": 68,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 51,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 48,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 33,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 22,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 5,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-005.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 4,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🍃 精灵",
        "value": 12,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "💀 梦魇",
        "value": 11,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🐉 龙族",
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 3,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 38,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 37,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 36,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 35,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 29,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 20,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 15,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 14,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "Others",
        "value": 108,
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
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 5,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 4,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 4,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "巫师｜消失法",
        "value": 2,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "Others",
        "value": 8,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 108,
    "type_other_types": 33,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W51\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/19</span></a><a class=\"others-chip\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W51\"><b>偶像大师｜cool</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W51\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W51\"><b>巫师｜机械法</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W51\"><b>主教｜机械教</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025-W51\"><b>主教｜忍者教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W51\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W51\"><b>主教｜耶拉教</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第51周（2025/12/15-2025/12/21）共收录35场有效赛事、332套有排名记录的卡组，其中Top8卡组332套、冠军卡组45套。从Top8职业分布看，梦魇101套（30.4%）、龙族68套（20.5%）构成本范围的主要出场面，冠军侧则以精灵12套（26.7%）、梦魇11套（24.4%）表现最突出。卡组类型方面，梦魇「机械梦」38套（11.4%，最好1/15）、龙族「大哥龙」37套（11.1%，最好1/25）、梦魇「nc梦」36套（10.8%，最好1/7）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「透京皇」，由終人（おわんちゅ）使用，成绩为1/27，成绩系数0.0370。整体来看，前10%成绩卡组共有69套，占全部记录20.8%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W51\">机械梦</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W51\">大哥龙</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W51\">nc梦</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W51\">连击妖</a></td><td style=\"text-align:center\">35</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W51\">武斗龙</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W51\">控教</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W51\">蝙蝠梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W51\">透京妖</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W51\">节奏教</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W51\">透京皇</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W51\">铺场皇</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W51\">消失法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W51\">机械法</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W51\">机械教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W51\">荒野皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W51\">真红梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W51\">2c梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3/10 (0.3000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W51\">耶拉教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W51\">横马</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W51\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W51\">黄金船教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W51\">passion</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/14 (0.3571)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W51\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/7 (0.5714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025-W51\">忍者教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W51\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W51\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W51\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W51\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/18 (0.3889)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W51\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-092822144f93.html?scope=2025-W51\">法术妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/10 (0.5000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025-W51\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/14 (0.5714)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-4cc737096206.html?scope=2025-W51\">露比马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/14 (0.5714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2025-W51\">永火梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W51\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W51\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/11 (0.6364)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W51\">学院法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/11 (0.6364)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W51\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/9 (0.7778)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2025-W51\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/10 (0.8000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W51\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/10 (0.8000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025-W51\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/6 (0.8333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025-W51\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">101 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">30.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>38套 (37.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>36套 (35.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>15套 (14.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>5套 (5.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.png\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2025-W51\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.png\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">68 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">20.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W51\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>37套 (54.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W51\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>29套 (42.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2025-W51\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-052.png\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W51\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.png\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">15.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W51\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>35套 (68.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W51\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>14套 (27.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W51\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-092822144f93.html?scope=2025-W51\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP09-U01.png\" alt=\"法术妖核心卡\"><span class=\"archetype-tag-body\"><b>法术妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">14.5%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>20套 (41.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>13套 (27.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>8套 (16.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>4套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>2套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d5a285cab801.html?scope=2025-W51\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP03-112.png\" alt=\"忍者教核心卡\"><span class=\"archetype-tag-body\"><b>忍者教</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">9.9%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>12套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>10套 (30.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>5套 (15.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>2套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W51\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.png\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">22 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">6.6%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>9套 (40.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>8套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.png\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.png\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.png\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025-W51\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.png\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W51\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4cc737096206.html?scope=2025-W51\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-039.png\" alt=\"露比马核心卡\"><span class=\"archetype-tag-body\"><b>露比马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W51\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W51\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W51\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a>"
  },
  "2025-W50": {
    "key": "2025-W50",
    "label": "2025 第50周（2025/12/08-2025/12/14）",
    "event_count": 33,
    "deck_count": 299,
    "top8_count": 299,
    "top1_count": 42,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 117,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 53,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 50,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "⛪ 主教",
        "value": 36,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 9,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 14,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 6,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/CP01-057.png"
      }
    ],
    "type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 47,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 46,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 42,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 31,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 20,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 18,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 14,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 13,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.png"
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
        "name": "梦魇｜nc梦",
        "value": 7,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 6,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 6,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 4,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.png"
      },
      {
        "name": "主教｜节奏教",
        "value": 2,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.png"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 2,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-SL04.png"
      },
      {
        "name": "Others",
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 68,
    "type_other_types": 24,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W50\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025-W50\"><b>龙族｜快攻龙</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W50\"><b>龙族｜大哥龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W50\"><b>梦魇｜真红梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W50\"><b>皇家护卫｜自然皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W50\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-1ef829252684.html?scope=2025-W50\"><b>赛马娘｜法术马</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第50周（2025/12/08-2025/12/14）共收录33场有效赛事、299套有排名记录的卡组，其中Top8卡组299套、冠军卡组42套。从Top8职业分布看，梦魇117套（39.1%）、精灵53套（17.7%）构成本范围的主要出场面，冠军侧则以梦魇14套（33.3%）、主教8套（19.0%）表现最突出。卡组类型方面，精灵「连击妖」47套（15.7%，最好1/19）、梦魇「nc梦」46套（15.4%，最好1/30）、梦魇「机械梦」42套（14.0%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由ナツメ使用，成绩为1/30，成绩系数0.0333。整体来看，前10%成绩卡组共有75套，占全部记录25.1%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W50\">连击妖</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W50\">nc梦</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W50\">机械梦</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W50\">武斗龙</a></td><td style=\"text-align:center\">31</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W50\">控教</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W50\">大哥龙</a></td><td style=\"text-align:center\">18</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W50\">透京皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W50\">2c梦</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">2/26 (0.0769)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W50\">蝙蝠梦</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W50\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W50\">机械教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W50\">荒野皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W50\">机械法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W50\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W50\">自然皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W50\">铺场皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W50\">透京妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W50\">天使皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W50\">消失法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/14 (0.2143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W50\">金币皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W50\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/7 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W50\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/11 (0.4545)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025-W50\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-1ef829252684.html?scope=2025-W50\">法术马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025-W50\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W50\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W50\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/24 (0.2917)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025-W50\">魔法使法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/13 (0.6154)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025-W50\">約束の火 エルモ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/11 (0.6364)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-e1b3bf89ad40.html?scope=2025-W50\">童话妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W50\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/11 (0.7273)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2025-W50\">二妹法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">117 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 28</span>\n          <span class=\"stat-pill percent\">39.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>46套 (39.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>42套 (35.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>13套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>11套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W50\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.png\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">50 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">16.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W50\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>31套 (62.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W50\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>18套 (36.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025-W50\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">53 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W50\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>47套 (88.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W50\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>3套 (5.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W50\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (3.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e1b3bf89ad40.html?scope=2025-W50\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-483.png\" alt=\"童话妖核心卡\"><span class=\"archetype-tag-body\"><b>童话妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 14</span>\n          <span class=\"stat-pill percent\">12.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W50\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>20套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W50\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>7套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W50\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>7套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025-W50\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.png\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W50\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">10.7%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>14套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>5套 (15.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>3套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>3套 (9.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>2套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.png\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W50\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (3.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W50\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W50\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>3套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f2cf81b92eda.html?scope=2025-W50\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP14-U03.png\" alt=\"魔法使法核心卡\"><span class=\"archetype-tag-body\"><b>魔法使法</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2025-W50\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-039.png\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2025-W50\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.png\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025-W50\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.png\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2025-W49": {
    "key": "2025-W49",
    "label": "2025 第49周（2025/12/01-2025/12/07）",
    "event_count": 24,
    "deck_count": 323,
    "top8_count": 251,
    "top1_count": 34,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 85,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🐉 龙族",
        "value": 62,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 39,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 27,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 18,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 13,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 4,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 2,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CP03-106.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 13,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 10,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⛪ 主教",
        "value": 5,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🐉 龙族",
        "value": 3,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-063.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 1,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "🔮 巫师",
        "value": 1,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜大哥龙",
        "value": 34,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 34,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 29,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 28,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 27,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 15,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "Others",
        "value": 84,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "精灵｜连击妖",
        "value": 6,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 4,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 3,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 2,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 2,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "Others",
        "value": 10,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 84,
    "type_other_types": 30,
    "top1_type_other_count": 10,
    "top1_type_other_types": 10,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025-W49\"><b>主教｜教皇透京教</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W49\"><b>主教｜控教</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W49\"><b>龙族｜武斗龙</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W49\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W49\"><b>主教｜节奏教</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W49\"><b>巫师｜机械法</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W49\"><b>皇家护卫｜透京皇</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W49\"><b>梦魇｜2c梦</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W49\"><b>偶像大师｜passion</b><span>1套，最好成绩 1/4</span></a><a class=\"others-chip\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W49\"><b>精灵｜妖精妖</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第49周（2025/12/01-2025/12/07）共收录24场有效赛事、323套有排名记录的卡组，其中Top8卡组251套、冠军卡组34套。从Top8职业分布看，梦魇85套（33.9%）、龙族62套（24.7%）构成本范围的主要出场面，冠军侧则以梦魇13套（38.2%）、精灵10套（29.4%）表现最突出。卡组类型方面，龙族「大哥龙」34套（13.5%，最好2/248）、梦魇「nc梦」34套（13.5%，最好4/248）、精灵「连击妖」29套（11.6%，最好1/248）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「机械梦」，由ヒスイ使用，成绩为1/248，成绩系数0.0040。整体来看，前10%成绩卡组共有126套，占全部记录39.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W49\">大哥龙</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">2/248 (0.0081)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W49\">nc梦</a></td><td style=\"text-align:center\">34</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W49\">连击妖</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W49\">机械梦</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W49\">武斗龙</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">3/248 (0.0121)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W49\">蝙蝠梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W49\">控教</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8/248 (0.0323)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W49\">节奏教</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6/248 (0.0242)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W49\">透京皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W49\">2c梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W49\">机械法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W49\">机械教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1/248 (0.0040)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W49\">透京妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W49\">消失法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">5/9 (0.5556)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W49\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/248 (0.0202)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W49\">自然皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W49\">passion</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W49\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1/4 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W49\">雷维翁皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/26 (0.2692)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W49\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W49\">横马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">6/10 (0.6000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W49\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/10 (0.7000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W49\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/248 (0.0161)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025-W49\">教皇透京教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W49\">小卖部法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/26 (0.1538)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025-W49\">自然妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W49\">耶拉教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-6357998a073f.html?scope=2025-W49\">自然龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2025-W49\">EX妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025-W49\">守护教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W49\">天使皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025-W49\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/4 (0.5000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W49\">大哥马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/9 (0.5556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025-W49\">阴阳超越法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W49\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-47e47f92771b.html?scope=2025-W49\">占卜</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/9 (0.8889)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">107 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 44</span>\n          <span class=\"stat-pill percent\">33.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W49\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>41套 (38.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W49\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>39套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W49\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>16套 (15.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W49\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>10套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W49\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">83 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 30</span>\n          <span class=\"stat-pill percent\">25.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W49\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>45套 (54.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W49\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>37套 (44.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6357998a073f.html?scope=2025-W49\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP07-052.png\" alt=\"自然龙核心卡\"><span class=\"archetype-tag-body\"><b>自然龙</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">54 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 27</span>\n          <span class=\"stat-pill percent\">16.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>42套 (77.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>6套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.png\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9d7b2c5bb5d.html?scope=2025-W49\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-297.png\" alt=\"EX妖核心卡\"><span class=\"archetype-tag-body\"><b>EX妖</b><em>1套 (1.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 13</span>\n          <span class=\"stat-pill percent\">9.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>11套 (35.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>10套 (32.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>7套 (22.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL22.png\" alt=\"教皇透京教核心卡\"><span class=\"archetype-tag-body\"><b>教皇透京教</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2025-W49\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-U06.png\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">24 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">7.4%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>14套 (58.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>3套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.png\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W49\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (4.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">16 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">5.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W49\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>7套 (43.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W49\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>5套 (31.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W49\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (12.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-aa7a697c0ec2.html?scope=2025-W49\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-316.png\" alt=\"小卖部法核心卡\"><span class=\"archetype-tag-body\"><b>小卖部法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-de84a3a89ec3.html?scope=2025-W49\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-029.png\" alt=\"阴阳超越法核心卡\"><span class=\"archetype-tag-body\"><b>阴阳超越法</b><em>1套 (6.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.5%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W49\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1ef829252684.html?scope=2025-W49\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/CP01-057.png\" alt=\"法术马核心卡\"><span class=\"archetype-tag-body\"><b>法术马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025-W49\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-026.png\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a168893e77d8.html?scope=2025-W49\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-SP13.png\" alt=\"大哥马核心卡\"><span class=\"archetype-tag-body\"><b>大哥马</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">2 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">0.6%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W49\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>2套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-47e47f92771b.html?scope=2025-W49\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CP03-106.png\" alt=\"占卜核心卡\"><span class=\"archetype-tag-body\"><b>占卜</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#赛马娘\">🏇 赛马娘</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2025-W48": {
    "key": "2025-W48",
    "label": "2025 第48周（2025/11/24-2025/11/30）",
    "event_count": 37,
    "deck_count": 382,
    "top8_count": 382,
    "top1_count": 49,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 139,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🐉 龙族",
        "value": 87,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 65,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 42,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 33,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🔮 巫师",
        "value": 12,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 22,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "🍃 精灵",
        "value": 13,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP11-SL05.png"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🔮 巫师",
        "value": 2,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP17-041.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 56,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 49,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 48,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 42,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 36,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 24,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 23,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "Others",
        "value": 104,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 14,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 10,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 5,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 4,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜透京妖",
        "value": 3,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-SL01.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 2,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "主教｜机械教",
        "value": 2,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 2,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
      },
      {
        "name": "Others",
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 104,
    "type_other_types": 24,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W48\"><b>巫师｜机械法</b><span>1套，最好成绩 1/35</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W48\"><b>梦魇｜2c梦</b><span>1套，最好成绩 1/21</span></a><a class=\"others-chip\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W48\"><b>皇家护卫｜荒野皇</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W48\"><b>主教｜控教</b><span>1套，最好成绩 1/16</span></a><a class=\"others-chip\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W48\"><b>巫师｜消失法</b><span>1套，最好成绩 1/10</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第48周（2025/11/24-2025/11/30）共收录37场有效赛事、382套有排名记录的卡组，其中Top8卡组382套、冠军卡组49套。从Top8职业分布看，梦魇139套（36.4%）、龙族87套（22.8%）构成本范围的主要出场面，冠军侧则以梦魇22套（44.9%）、精灵13套（26.5%）表现最突出。卡组类型方面，梦魇「机械梦」56套（14.7%，最好1/33）、龙族「大哥龙」49套（12.8%，最好1/25）、精灵「连击妖」48套（12.6%，最好1/34）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「蝙蝠梦」，由OROCHI使用，成绩为1/45，成绩系数0.0222。整体来看，前10%成绩卡组共有102套，占全部记录26.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W48\">机械梦</a></td><td style=\"text-align:center\">56</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W48\">大哥龙</a></td><td style=\"text-align:center\">49</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W48\">连击妖</a></td><td style=\"text-align:center\">48</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W48\">nc梦</a></td><td style=\"text-align:center\">42</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W48\">武斗龙</a></td><td style=\"text-align:center\">36</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W48\">透京皇</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W48\">蝙蝠梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W48\">透京妖</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W48\">控教</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W48\">2c梦</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W48\">节奏教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W48\">机械法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W48\">机械教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W48\">消失法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W48\">耶拉教</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W48\">自然皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2/19 (0.1053)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W48\">天使皇</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5/45 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W48\">真红梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W48\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025-W48\">自然妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W48\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W48\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/35 (0.0857)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025-W48\">教皇透京教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-31a0444ef547.html?scope=2025-W48\">连击偶像</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/20 (0.1500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W48\">兽妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W48\">金币皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025-W48\">林德龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">6/13 (0.4615)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W48\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/13 (0.5385)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-4e1b2ab4cca7.html?scope=2025-W48\">阳炎</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W48\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">7/10 (0.7000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W48\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/11 (0.7273)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">139 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 46</span>\n          <span class=\"stat-pill percent\">36.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>56套 (40.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>42套 (30.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>23套 (16.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>12套 (8.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2025-W48\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.png\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (0.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">87 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">22.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W48\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>49套 (56.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W48\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>36套 (41.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18ec8bbe957f.html?scope=2025-W48\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP09-055.png\" alt=\"林德龙核心卡\"><span class=\"archetype-tag-body\"><b>林德龙</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W48\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.png\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">17.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W48\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>48套 (73.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W48\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>14套 (21.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-941c1ca0a7a2.html?scope=2025-W48\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP07-SL01.png\" alt=\"自然妖核心卡\"><span class=\"archetype-tag-body\"><b>自然妖</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W48\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">8.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W48\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>13套 (39.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W48\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>7套 (21.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W48\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>6套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W48\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>6套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c91bb9637ff9.html?scope=2025-W48\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL22.png\" alt=\"教皇透京教核心卡\"><span class=\"archetype-tag-body\"><b>教皇透京教</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">42 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">11.0%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>24套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>6套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>6套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-SL05.png\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.png\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2025-W48\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL04.png\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">3.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W48\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>6套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W48\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>6套 (50.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W48\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-31a0444ef547.html?scope=2025-W48\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击偶像核心卡\"><span class=\"archetype-tag-body\"><b>连击偶像</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4e1b2ab4cca7.html?scope=2025-W48\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.png\" alt=\"阳炎核心卡\"><span class=\"archetype-tag-body\"><b>阳炎</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#梦魇\">💀 梦魇</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#主教\">⛪ 主教</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#VG\">🎮 VG</a>"
  },
  "2025-W47": {
    "key": "2025-W47",
    "label": "2025 第47周（2025/11/17-2025/11/23）",
    "event_count": 25,
    "deck_count": 254,
    "top8_count": 254,
    "top1_count": 33,
    "top8_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 86,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🐉 龙族",
        "value": 59,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "🍃 精灵",
        "value": 36,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/PR-238.png"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 28,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP14-022.png"
      },
      {
        "name": "⛪ 主教",
        "value": 26,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "🔮 巫师",
        "value": 12,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP18-SL09.png"
      },
      {
        "name": "🏇 赛马娘",
        "value": 3,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-026.png"
      },
      {
        "name": "🎤 偶像大师",
        "value": 3,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/CSD02b-001.png"
      },
      {
        "name": "🎮 VG",
        "value": 1,
        "itemStyle": {
          "color": "#7f8cff"
        },
        "image": "../../assets/cards/CSD03b-SL01.png"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "💀 梦魇",
        "value": 17,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "🍃 精灵",
        "value": 7,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "🐉 龙族",
        "value": 6,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "⛪ 主教",
        "value": 3,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-343.png"
      }
    ],
    "type_distribution": [
      {
        "name": "梦魇｜机械梦",
        "value": 33,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 29,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 28,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 22,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 21,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/BP18-SL20.png"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 20,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "皇家护卫｜透京皇",
        "value": 13,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.png"
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
        "name": "梦魇｜nc梦",
        "value": 8,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/BP11-SL15.png"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 8,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.png"
      },
      {
        "name": "精灵｜连击妖",
        "value": 6,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.png"
      },
      {
        "name": "龙族｜大哥龙",
        "value": 4,
        "link": "decktypes/decktype-cd6d71f47cfb.html",
        "image": "../../assets/cards/BP16-SL15.png"
      },
      {
        "name": "主教｜机械教",
        "value": 3,
        "link": "decktypes/decktype-d93287d60ff1.html",
        "image": "../../assets/cards/PR-343.png"
      },
      {
        "name": "龙族｜武斗龙",
        "value": 2,
        "link": "decktypes/decktype-c4187e008e9c.html",
        "image": "../../assets/cards/BP18-SL13.png"
      },
      {
        "name": "Others",
        "value": 2,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 88,
    "type_other_types": 26,
    "top1_type_other_count": 2,
    "top1_type_other_types": 2,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W47\"><b>精灵｜透京妖</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W47\"><b>梦魇｜蝙蝠梦</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2025 第47周（2025/11/17-2025/11/23）共收录25场有效赛事、254套有排名记录的卡组，其中Top8卡组254套、冠军卡组33套。从Top8职业分布看，梦魇86套（33.9%）、龙族59套（23.2%）构成本范围的主要出场面，冠军侧则以梦魇17套（51.5%）、精灵7套（21.2%）表现最突出。卡组类型方面，梦魇「机械梦」33套（13.0%，最好1/56）、龙族「武斗龙」29套（11.4%，最好1/23）、龙族「大哥龙」28套（11.0%，最好1/15）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「nc梦」，由NG201使用，成绩为1/59，成绩系数0.0169。整体来看，前10%成绩卡组共有73套，占全部记录28.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W47\">机械梦</a></td><td style=\"text-align:center\">33</td><td style=\"text-align:center\">1/56 (0.0179)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W47\">武斗龙</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W47\">大哥龙</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W47\">连击妖</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">3/59 (0.0508)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W47\">蝙蝠梦</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">3/56 (0.0536)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W47\">nc梦</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">1/59 (0.0169)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W47\">透京皇</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">4/56 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W47\">自然皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">4/59 (0.0678)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W47\">机械教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/25 (0.0400)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W47\">透京妖</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W47\">控教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5/56 (0.0893)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W47\">2c梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W47\">消失法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">2/25 (0.0800)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W47\">耶拉教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4/36 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W47\">兽妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/59 (0.0339)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W47\">金币皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/56 (0.0357)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W47\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W47\">机械法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3/25 (0.1200)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W47\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/24 (0.1250)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W47\">天使皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">6/36 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W47\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/15 (0.2000)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W47\">cool</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3/10 (0.3000)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W47\">横马</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">5/8 (0.6250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W47\">学院法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">7/10 (0.7000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W47\">黄金船教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/25 (0.1600)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W47\">雷维翁皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025-W47\">快攻龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>赛马娘</td><td><a class=\"type-link\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025-W47\">萝卜马</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/28 (0.2857)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W47\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/10 (0.5000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-9db0cc1ac351.html?scope=2025-W47\">卡场妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/15 (0.5333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2025-W47\">妖怪梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>VG</td><td><a class=\"type-link\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025-W47\">約束の火 エルモ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">5/7 (0.7143)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W47\">passion</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">8/10 (0.8000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">86 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 30</span>\n          <span class=\"stat-pill percent\">33.9%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.png\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>33套 (38.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL20.png\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>21套 (24.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL15.png\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>20套 (23.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.png\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>8套 (9.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL13.png\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>3套 (3.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-09fb70f80a6c.html?scope=2025-W47\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP15-079.png\" alt=\"妖怪梦核心卡\"><span class=\"archetype-tag-body\"><b>妖怪梦</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">59 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 12</span>\n          <span class=\"stat-pill percent\">23.2%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c4187e008e9c.html?scope=2025-W47\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.png\" alt=\"武斗龙核心卡\"><span class=\"archetype-tag-body\"><b>武斗龙</b><em>29套 (49.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd6d71f47cfb.html?scope=2025-W47\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.png\" alt=\"大哥龙核心卡\"><span class=\"archetype-tag-body\"><b>大哥龙</b><em>28套 (47.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f50f99e7f0df.html?scope=2025-W47\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/ECP01-035.png\" alt=\"快攻龙核心卡\"><span class=\"archetype-tag-body\"><b>快攻龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2025-W47\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-057.png\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">14.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2025-W47\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.png\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>22套 (61.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2025-W47\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-SL01.png\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>8套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2025-W47\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/PR-238.png\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>3套 (8.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2025-W47\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.png\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9db0cc1ac351.html?scope=2025-W47\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP12-004.png\" alt=\"卡场妖核心卡\"><span class=\"archetype-tag-body\"><b>卡场妖</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">10.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-d93287d60ff1.html?scope=2025-W47\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-343.png\" alt=\"机械教核心卡\"><span class=\"archetype-tag-body\"><b>机械教</b><em>8套 (30.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2025-W47\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.png\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>8套 (30.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-754c9f89f7d7.html?scope=2025-W47\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP18-SL25.png\" alt=\"耶拉教核心卡\"><span class=\"archetype-tag-body\"><b>耶拉教</b><em>7套 (26.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2025-W47\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.png\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-07544eb64d36.html?scope=2025-W47\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/CP01-SL18.png\" alt=\"黄金船教核心卡\"><span class=\"archetype-tag-body\"><b>黄金船教</b><em>1套 (3.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">28 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">11.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2025-W47\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.png\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>13套 (46.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ed7dbad0b4d0.html?scope=2025-W47\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP07-SL04.png\" alt=\"自然皇核心卡\"><span class=\"archetype-tag-body\"><b>自然皇</b><em>9套 (32.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2025-W47\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-022.png\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>3套 (10.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2b0efb008539.html?scope=2025-W47\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/PR-233.png\" alt=\"天使皇核心卡\"><span class=\"archetype-tag-body\"><b>天使皇</b><em>2套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2025-W47\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP13-019.png\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>1套 (3.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">12 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">4.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2025-W47\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.png\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (58.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2025-W47\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP17-041.png\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>3套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2025-W47\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.png\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>2套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5a0677b37803.html?scope=2025-W47\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-005.png\" alt=\"横马核心卡\"><span class=\"archetype-tag-body\"><b>横马</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9619cf1888e3.html?scope=2025-W47\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-026.png\" alt=\"萝卜马核心卡\"><span class=\"archetype-tag-body\"><b>萝卜马</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-0fe79a39fa2e.html?scope=2025-W47\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/CSD02b-001.png\" alt=\"cool核心卡\"><span class=\"archetype-tag-body\"><b>cool</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-05e1a2604c89.html?scope=2025-W47\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-063.png\" alt=\"passion核心卡\"><span class=\"archetype-tag-body\"><b>passion</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"VG\">\n      <div class=\"class-header\" style=\"border-left:5px solid #7f8cff\">\n        <h2><span class=\"class-icon\">🎮</span> VG</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-892e7f7f3dde.html?scope=2025-W47\" style=\"border-color:#7f8cff\"><img src=\"../../assets/cards/CSD03b-SL01.png\" alt=\"約束の火 エルモ型核心卡\"><span class=\"archetype-tag-body\"><b>約束の火 エルモ型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
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
  var top8ClassChart = makePie('chart-top8-class', [], 'Top8卡组职业分布');
  var typeDistributionChart = makePie('chart-type-distribution', [], 'Top8卡组类型分布');
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
    setText('popular-title', currentScopeKey === 'total' ? 'Top8卡组类型（全部）' : 'Top8卡组类型（' + scope.label + '）');
    setText('desc-top1-class', '统计范围：' + scope.label + '，名次为1的 ' + (scope.top1_count || 0) + ' 套卡组。');
    setText('desc-top8-class', '统计范围：' + scope.label + '，名次小于等于8的 ' + (scope.top8_count || 0) + ' 套卡组。');
    setText('desc-type-distribution', '统计范围：' + scope.label + '，名次小于等于8的 ' + (scope.top8_count || 0) + ' 套卡组；占比小于 4% 的类型合并为 Others。Others 合计 ' + (scope.type_other_count || 0) + ' 套，包含 ' + (scope.type_other_types || 0) + ' 个卡组类型。');
    setText('desc-top1-type-distribution', '统计范围：' + scope.label + '，冠军卡组共 ' + (scope.top1_count || 0) + ' 套；占比小于 4% 的类型合并为 Others。Others 合计 ' + (scope.top1_type_other_count || 0) + ' 套，包含 ' + (scope.top1_type_other_types || 0) + ' 个卡组类型。');
    updateChart(top1ClassChart, scope.top1_class_distribution || []);
    updateChart(top8ClassChart, scope.top8_class_distribution || []);
    updateChart(typeDistributionChart, withScopedLinks(scope.type_distribution || [], currentScopeKey));
    updateChart(top1TypeDistributionChart, withScopedLinks(scope.top1_type_distribution || [], currentScopeKey));
    setHtml('top1-type-others-list', scope.top1_type_others_html || '<span class="others-empty">无</span>');
    setHtml('popular-rows', scope.popular_rows || '<tr><td colspan="4" style="text-align:center;color:#8899aa">该范围暂无Top8卡组类型数据</td></tr>');
    setHtml('class-sections', scope.class_sections || '');
    setHtml('nav-links', (scope.nav_links || '') + '<a href="#pie-charts">饼图</a><a href="#popular">Top8卡组类型</a>');
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