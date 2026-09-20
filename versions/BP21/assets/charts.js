(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 221,
    "deck_count": 2084,
    "top8_count": 1526,
    "top1_count": 271,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 621,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 411,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 337,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 330,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 251,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 85,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 47,
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
        "image": "../../assets/cards/ECP02-050.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-010.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 409,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 374,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 172,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 170,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 167,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 129,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 102,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 83,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 58,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 44,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 37,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 32,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 23,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "梦魇｜nc梦",
        "value": 21,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 16,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 16,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 15,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 12,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 11,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 11,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 11,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "公主连结Re:Dive｜跳费PCR",
        "value": 10,
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 10,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 10,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 10,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "梦魇｜机械梦",
        "value": 9,
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 9,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 8,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 7,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 6,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 6,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "精灵｜妖精妖",
        "value": 6,
        "link": "decktypes/decktype-217b5e054fbc.html",
        "image": "../../assets/cards/BP16-SL01.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 6,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "梦魇｜削手梦",
        "value": 5,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 5,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/PR-479.jpg"
      },
      {
        "name": "皇家护卫｜宇宙皇",
        "value": 5,
        "link": "decktypes/decktype-2271753f82b0.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜学院皇",
        "value": 4,
        "link": "decktypes/decktype-c20c01569823.html",
        "image": "../../assets/cards/BP21-020.jpg"
      },
      {
        "name": "龙族｜灼熱のアナテマ・バーンドナイト型",
        "value": 4,
        "link": "decktypes/decktype-bbc59d0b17f7.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 3,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜荒野皇",
        "value": 3,
        "link": "decktypes/decktype-592a6c9d3e95.html",
        "image": "../../assets/cards/BP11-019.jpg"
      },
      {
        "name": "龙族｜ブリザードハート・フィルレイン型",
        "value": 3,
        "link": "decktypes/decktype-e9834a57b22d.html",
        "image": "../../assets/cards/BP15-SL16.jpg"
      },
      {
        "name": "梦魇｜八狱梦",
        "value": 3,
        "link": "decktypes/decktype-7a481475a6b5.html",
        "image": "../../assets/cards/BP19-080.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 3,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "龙族｜海洋龙",
        "value": 3,
        "link": "decktypes/decktype-200bb41cd994.html",
        "image": "../../assets/cards/BP17-SL15.jpg"
      },
      {
        "name": "梦魇｜控梦",
        "value": 3,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
      },
      {
        "name": "巫师｜机械法",
        "value": 2,
        "link": "decktypes/decktype-6ea288eb8275.html",
        "image": "../../assets/cards/PR-513.jpg"
      },
      {
        "name": "龙族｜荒野龙",
        "value": 2,
        "link": "decktypes/decktype-7ea4d7128729.html",
        "image": "../../assets/cards/BP11-SL10.jpg"
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
        "name": "龙族｜独眼竜・伊達政宗型",
        "value": 2,
        "link": "decktypes/decktype-18f51a4ef6ed.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
      },
      {
        "name": "精灵｜樹権の剪定者型",
        "value": 2,
        "link": "decktypes/decktype-495307433269.html",
        "image": "../../assets/cards/BP18-005.jpg"
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
        "name": "皇家护卫｜透京皇",
        "value": 1,
        "link": "decktypes/decktype-61f597ab3315.html",
        "image": "../../assets/cards/BP18-SL05.jpg"
      },
      {
        "name": "偶像大师｜〔シンデレラガール〕北条加蓮型",
        "value": 1,
        "link": "decktypes/decktype-ab59754c3160.html",
        "image": "../../assets/cards/ECP02-050.jpg"
      },
      {
        "name": "主教｜聖なる願い型",
        "value": 1,
        "link": "decktypes/decktype-856773b7c741.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "龙族｜万華の鳳凰型",
        "value": 1,
        "link": "decktypes/decktype-e48b4f3197f6.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "龙族｜ナックルドラゴン・ドラグニル型",
        "value": 1,
        "link": "decktypes/decktype-afaa5f7a1cf6.html",
        "image": "../../assets/cards/BP03-056.jpg"
      },
      {
        "name": "巫师｜インフィニットウィッチ・ドロシー型",
        "value": 1,
        "link": "decktypes/decktype-8da7b8f3438c.html",
        "image": "../../assets/cards/BP20-SL10.jpg"
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
        "name": "赛马娘｜その背中を越えて型",
        "value": 1,
        "link": "decktypes/decktype-7fd798fa09f6.html",
        "image": "../../assets/cards/ECP01-010.jpg"
      },
      {
        "name": "巫师｜《愚者》・リンクル型",
        "value": 1,
        "link": "decktypes/decktype-a77bc46bddd8.html",
        "image": "../../assets/cards/BP20-SL10.jpg"
      },
      {
        "name": "精灵｜ホワイトヴァナラ型",
        "value": 1,
        "link": "decktypes/decktype-ae5585fca3f3.html",
        "image": "../../assets/cards/BP21-005.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 409,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 374,
        "best": "1/298",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 172,
        "best": "4/298",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 170,
        "best": "2/298",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 167,
        "best": "1/298",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 129,
        "best": "1/24",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 102,
        "best": "1/298",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 83,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 58,
        "best": "3/298",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 44,
        "best": "5/298",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 37,
        "best": "5/298",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 32,
        "best": "2/37",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录221场有效赛事、2084套有排名记录的卡组，其中上位卡组1526套、冠军卡组271套。从上位职业分布看，皇家护卫482套（31.6%）、龙族306套（20.1%）构成本范围的主要出场面，冠军侧则以皇家护卫99套（36.5%）、龙族50套（18.5%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」325套（21.3%，最好2/298）、龙族「五妹龙」287套（18.8%，最好1/298）、精灵「人偶妖」140套（9.2%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有635套，占全部记录30.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W38",
    "label": "2026 第38周（2026/09/14-2026/09/20）",
    "event_count": 25,
    "deck_count": 257,
    "top8_count": 174,
    "top1_count": 37,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 73,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "🔮 巫师",
        "value": 44,
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
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 31,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
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
      },
      {
        "name": "🎤 偶像大师",
        "value": 1,
        "itemStyle": {
          "color": "#ff8ab3"
        },
        "image": "../../assets/cards/ECP02-050.jpg"
      },
      {
        "name": "🏇 赛马娘",
        "value": 1,
        "itemStyle": {
          "color": "#8bd450"
        },
        "image": "../../assets/cards/ECP01-010.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 52,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 47,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 20,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 17,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 16,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 15,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 14,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 8,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 7,
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
        "name": "梦魇｜nc梦",
        "value": 4,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 4,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 2,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "龙族｜宇宙龙",
        "value": 2,
        "link": "decktypes/decktype-36123430c5af.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜灼熱のアナテマ・バーンドナイト型",
        "value": 2,
        "link": "decktypes/decktype-bbc59d0b17f7.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 2,
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
        "name": "偶像大师｜〔シンデレラガール〕北条加蓮型",
        "value": 1,
        "link": "decktypes/decktype-ab59754c3160.html",
        "image": "../../assets/cards/ECP02-050.jpg"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "龙族｜ナックルドラゴン・ドラグニル型",
        "value": 1,
        "link": "decktypes/decktype-afaa5f7a1cf6.html",
        "image": "../../assets/cards/BP03-056.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
        "name": "龙族｜ブリザードハート・フィルレイン型",
        "value": 1,
        "link": "decktypes/decktype-e9834a57b22d.html",
        "image": "../../assets/cards/BP15-SL16.jpg"
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
        "name": "赛马娘｜その背中を越えて型",
        "value": 1,
        "link": "decktypes/decktype-7fd798fa09f6.html",
        "image": "../../assets/cards/ECP01-010.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 1,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
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
        "class": "龙族",
        "category": "五妹龙",
        "count": 52,
        "best": "1/23",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 47,
        "best": "1/17",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 20,
        "best": "1/26",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 17,
        "best": "1/8",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 16,
        "best": "1/18",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 15,
        "best": "1/16",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "count": 8,
        "best": "1/18",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "梦魇",
        "category": "永火梦",
        "count": 8,
        "best": "3/26",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 7,
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
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第38周（2026/09/14-2026/09/20）共收录25场有效赛事、257套有排名记录的卡组，其中上位卡组174套、冠军卡组37套。从上位职业分布看，皇家护卫53套（30.5%）、龙族40套（23.0%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（45.9%）、龙族9套（24.3%）表现最突出。卡组类型方面，龙族「五妹龙」37套（21.3%，最好1/23）、皇家护卫「雷维翁皇」32套（18.4%，最好1/17）、皇家护卫「财宝皇」17套（9.8%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由you仮使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有53套，占全部记录20.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W37",
    "label": "2026 第37周（2026/09/07-2026/09/13）",
    "event_count": 35,
    "deck_count": 324,
    "top8_count": 183,
    "top1_count": 45,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 106,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP09-018.jpg"
      },
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
        "value": 44,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 43,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 41,
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
        "value": 69,
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
        "name": "巫师｜学院法",
        "value": 25,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 25,
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
        "value": 15,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 10,
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 10,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "name": "巫师｜二妹法",
        "value": 6,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 4,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
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
        "name": "皇家护卫｜胜利皇",
        "value": 3,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
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
        "name": "龙族｜独眼竜・伊達政宗型",
        "value": 2,
        "link": "decktypes/decktype-18f51a4ef6ed.html",
        "image": "../../assets/cards/BP18-SL13.jpg"
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
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "主教｜纹章教",
        "value": 1,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
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
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
      },
      {
        "name": "皇家护卫｜盗贼皇",
        "value": 1,
        "link": "decktypes/decktype-4aeba2c734d7.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "龙族｜ブリザードハート・フィルレイン型",
        "value": 1,
        "link": "decktypes/decktype-e9834a57b22d.html",
        "image": "../../assets/cards/BP15-SL16.jpg"
      },
      {
        "name": "梦魇｜2c梦",
        "value": 1,
        "link": "decktypes/decktype-75305287827c.html",
        "image": "../../assets/cards/BP18-SL19.jpg"
      },
      {
        "name": "巫师｜インフィニットウィッチ・ドロシー型",
        "value": 1,
        "link": "decktypes/decktype-8da7b8f3438c.html",
        "image": "../../assets/cards/BP20-SL10.jpg"
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
        "image": "../../assets/cards/BP11-SL10.jpg"
      },
      {
        "name": "皇家护卫｜金币皇",
        "value": 1,
        "link": "decktypes/decktype-bab8fae9b582.html",
        "image": "../../assets/cards/BP14-P05.jpg"
      },
      {
        "name": "龙族｜灼熱のアナテマ・バーンドナイト型",
        "value": 1,
        "link": "decktypes/decktype-bbc59d0b17f7.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/PR-479.jpg"
      },
      {
        "name": "巫师｜《愚者》・リンクル型",
        "value": 1,
        "link": "decktypes/decktype-a77bc46bddd8.html",
        "image": "../../assets/cards/BP20-SL10.jpg"
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
        "count": 62,
        "best": "1/16",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 25,
        "best": "1/15",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 25,
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
        "count": 15,
        "best": "1/20",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "连击妖",
        "count": 10,
        "best": "1/8",
        "link": "decktypes/decktype-826de03f0f61.html",
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "class": "巫师",
        "category": "八狱法",
        "count": 10,
        "best": "1/7",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "category": "二妹法",
        "count": 6,
        "best": "1/10",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第37周（2026/09/07-2026/09/13）共收录35场有效赛事、324套有排名记录的卡组，其中上位卡组183套、冠军卡组45套。从上位职业分布看，皇家护卫69套（37.7%）、龙族42套（23.0%）构成本范围的主要出场面，冠军侧则以皇家护卫16套（35.6%）、龙族10套（22.2%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」44套（24.0%，最好1/14）、龙族「五妹龙」40套（21.9%，最好1/16）、皇家护卫「财宝皇」16套（8.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有63套，占全部记录19.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W36",
    "label": "2026 第36周（2026/08/31-2026/09/06）",
    "event_count": 26,
    "deck_count": 248,
    "top8_count": 154,
    "top1_count": 34,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 83,
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
        "value": 39,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 34,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 27,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "value": 53,
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
        "value": 19,
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
        "name": "巫师｜八狱法",
        "value": 4,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 4,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 4,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "主教｜守护教",
        "value": 4,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "主教｜节奏教",
        "value": 3,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
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
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "image": "../../assets/cards/BP09-018.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 2,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "精灵｜樹権の剪定者型",
        "value": 2,
        "link": "decktypes/decktype-495307433269.html",
        "image": "../../assets/cards/BP18-005.jpg"
      },
      {
        "name": "精灵｜透京妖",
        "value": 1,
        "link": "decktypes/decktype-b839e822b2c1.html",
        "image": "../../assets/cards/BP18-005.jpg"
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
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/PR-479.jpg"
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
        "name": "龙族｜万華の鳳凰型",
        "value": 1,
        "link": "decktypes/decktype-e48b4f3197f6.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜控梦",
        "value": 1,
        "link": "decktypes/decktype-2e7701fa0587.html",
        "image": "../../assets/cards/BP11-SL13.jpg"
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
        "name": "主教｜学院教",
        "value": 1,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "巫师｜九爷法",
        "value": 1,
        "link": "decktypes/decktype-e7b52e29d4c1.html",
        "image": "../../assets/cards/PR-390.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
        "count": 53,
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
        "count": 19,
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
        "class": "巫师",
        "category": "八狱法",
        "count": 4,
        "best": "2/18",
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第36周（2026/08/31-2026/09/06）共收录26场有效赛事、248套有排名记录的卡组，其中上位卡组154套、冠军卡组34套。从上位职业分布看，皇家护卫56套（36.4%）、龙族28套（18.2%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（41.2%）、巫师7套（20.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」39套（25.3%，最好1/18）、龙族「五妹龙」27套（17.5%，最好1/24）、巫师「学院法」15套（9.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有52套，占全部记录21.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W35",
    "label": "2026 第35周（2026/08/24-2026/08/30）",
    "event_count": 5,
    "deck_count": 128,
    "top8_count": 124,
    "top1_count": 7,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 47,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 32,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 22,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 13,
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
        "name": "💎 公主连结Re:Dive",
        "value": 3,
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
        "value": 40,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 32,
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
        "value": 9,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 7,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "name": "精灵｜兽妖",
        "value": 2,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 1,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
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
        "count": 40,
        "best": "2/298",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 32,
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
        "count": 9,
        "best": "2/298",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 7,
        "best": "14/298",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
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
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 3,
        "best": "5/298",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "class": "精灵",
        "category": "兽妖",
        "count": 2,
        "best": "28/298",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第35周（2026/08/24-2026/08/30）共收录5场有效赛事、128套有排名记录的卡组，其中上位卡组124套、冠军卡组7套。从上位职业分布看，皇家护卫44套（35.5%）、龙族32套（25.8%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（57.1%）、龙族2套（28.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」38套（30.6%，最好2/298）、龙族「五妹龙」32套（25.8%，最好1/298）、精灵「人偶妖」13套（10.5%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有103套，占全部记录80.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W34",
    "label": "2026 第34周（2026/08/17-2026/08/23）",
    "event_count": 30,
    "deck_count": 277,
    "top8_count": 227,
    "top1_count": 36,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 97,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 57,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 51,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP20-SL01.jpg"
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
        "value": 74,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 55,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 39,
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
        "value": 19,
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
        "name": "梦魇｜骰子梦",
        "value": 11,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 7,
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
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
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
        "name": "梦魇｜削手梦",
        "value": 2,
        "link": "decktypes/decktype-dfb30b7dc558.html",
        "image": "../../assets/cards/BP05-SL14.jpg"
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
        "name": "巫师｜八狱法",
        "value": 1,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
      },
      {
        "name": "精灵｜ホワイトヴァナラ型",
        "value": 1,
        "link": "decktypes/decktype-ae5585fca3f3.html",
        "image": "../../assets/cards/BP21-005.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 74,
        "best": "1/33",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 55,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 39,
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
        "count": 19,
        "best": "1/34",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 12,
        "best": "2/22",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "class": "精灵",
        "category": "兽妖",
        "count": 7,
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
        "class": "梦魇",
        "category": "nc梦",
        "count": 3,
        "best": "1/30",
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
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
        "class": "梦魇",
        "category": "机械梦",
        "count": 3,
        "best": "1/26",
        "link": "decktypes/decktype-42a5c2f5e134.html",
        "image": "../../assets/cards/BP07-SL13.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第34周（2026/08/17-2026/08/23）共收录30场有效赛事、277套有排名记录的卡组，其中上位卡组227套、冠军卡组36套。从上位职业分布看，皇家护卫85套（37.4%）、龙族48套（21.1%）构成本范围的主要出场面，冠军侧则以皇家护卫16套（44.4%）、精灵6套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」66套（29.1%，最好1/33）、龙族「五妹龙」46套（20.3%，最好1/37）、精灵「人偶妖」29套（12.8%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有87套，占全部记录31.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W33",
    "label": "2026 第33周（2026/08/10-2026/08/16）",
    "event_count": 42,
    "deck_count": 350,
    "top8_count": 281,
    "top1_count": 47,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 107,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 72,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "value": 47,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 35,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 11,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-SL03.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 77,
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
        "value": 45,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 36,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 24,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 21,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 18,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 11,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 9,
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
        "name": "主教｜守护教",
        "value": 6,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
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
        "name": "主教｜纹章教",
        "value": 3,
        "link": "decktypes/decktype-c068a8ef6610.html",
        "image": "../../assets/cards/BP20-SL25.jpg"
      },
      {
        "name": "精灵｜宇宙妖",
        "value": 3,
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      },
      {
        "name": "皇家护卫｜篡夺皇",
        "value": 3,
        "link": "decktypes/decktype-b5d06bda5b15.html",
        "image": "../../assets/cards/BP05-SL04.jpg"
      },
      {
        "name": "精灵｜猎人妖",
        "value": 2,
        "link": "decktypes/decktype-44ce1ca73386.html",
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 2,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 2,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
      },
      {
        "name": "主教｜护符教",
        "value": 2,
        "link": "decktypes/decktype-79c6992b28db.html",
        "image": "../../assets/cards/BP19-SL23.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 2,
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
        "name": "龙族｜ブリザードハート・フィルレイン型",
        "value": 1,
        "link": "decktypes/decktype-e9834a57b22d.html",
        "image": "../../assets/cards/BP15-SL16.jpg"
      },
      {
        "name": "精灵｜八狱妖",
        "value": 1,
        "link": "decktypes/decktype-25097831eeb5.html",
        "image": "../../assets/cards/BP19-005.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 1,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "梦魇｜蝙蝠梦",
        "value": 1,
        "link": "decktypes/decktype-522ba9eb9548.html",
        "image": "../../assets/cards/PR-479.jpg"
      },
      {
        "name": "龙族｜灼熱のアナテマ・バーンドナイト型",
        "value": 1,
        "link": "decktypes/decktype-bbc59d0b17f7.html",
        "image": "../../assets/cards/BP16-SL15.jpg"
      },
      {
        "name": "梦魇｜真红梦",
        "value": 1,
        "link": "decktypes/decktype-747237d91606.html",
        "image": "../../assets/cards/BP05-U05.jpg"
      },
      {
        "name": "皇家护卫｜铺场皇",
        "value": 1,
        "link": "decktypes/decktype-73a3a8508e82.html",
        "image": "../../assets/cards/BP09-018.jpg"
      }
    ],
    "top_types": [
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 77,
        "best": "1/58",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "龙族",
        "category": "五妹龙",
        "count": 56,
        "best": "1/21",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "精灵",
        "category": "人偶妖",
        "count": 45,
        "best": "1/47",
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 36,
        "best": "1/52",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 24,
        "best": "1/19",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 21,
        "best": "1/9",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 18,
        "best": "1/45",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "法术PCR",
        "count": 11,
        "best": "1/32",
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "class": "梦魇",
        "category": "永火梦",
        "count": 8,
        "best": "2/20",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "主教",
        "category": "守护教",
        "count": 6,
        "best": "1/14",
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
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
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第33周（2026/08/10-2026/08/16）共收录42场有效赛事、350套有排名记录的卡组，其中上位卡组281套、冠军卡组47套。从上位职业分布看，皇家护卫91套（32.4%）、精灵61套（21.7%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（31.9%）、精灵14套（29.8%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」68套（24.2%，最好1/58）、龙族「五妹龙」45套（16.0%，最好1/21）、精灵「人偶妖」43套（15.3%，最好1/47）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有118套，占全部记录33.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W32",
    "label": "2026 第32周（2026/08/03-2026/08/09）",
    "event_count": 28,
    "deck_count": 235,
    "top8_count": 179,
    "top1_count": 31,
    "class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 65,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "🔮 巫师",
        "value": 45,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 33,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 30,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 8,
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
        "image": "../../assets/cards/CP04-062.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜五妹龙",
        "value": 44,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 37,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 32,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 25,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 20,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 16,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 14,
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
        "name": "巫师｜学院法",
        "value": 6,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
        "name": "主教｜守护教",
        "value": 3,
        "link": "decktypes/decktype-75396de72bcf.html",
        "image": "../../assets/cards/BP15-SL26.jpg"
      },
      {
        "name": "主教｜学院教",
        "value": 3,
        "link": "decktypes/decktype-717ed8345f1c.html",
        "image": "../../assets/cards/BP21-U06.jpg"
      },
      {
        "name": "龙族｜学院龙",
        "value": 3,
        "link": "decktypes/decktype-246e45fe1891.html",
        "image": "../../assets/cards/BP21-SL15.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
      },
      {
        "name": "巫师｜八狱法",
        "value": 2,
        "link": "decktypes/decktype-058fd7f22075.html",
        "image": "../../assets/cards/BP19-SL10.jpg"
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
        "image": "../../assets/cards/BP09-018.jpg"
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
        "name": "龙族｜八狱龙",
        "value": 1,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
        "image": "../../assets/cards/BP09-U03.jpg"
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
        "count": 44,
        "best": "1/37",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "雷维翁皇",
        "count": 37,
        "best": "1/28",
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "二妹法",
        "count": 32,
        "best": "1/26",
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 25,
        "best": "1/28",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "class": "梦魇",
        "category": "骰子梦",
        "count": 20,
        "best": "1/22",
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "class": "精灵",
        "category": "兽妖",
        "count": 16,
        "best": "1/18",
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
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
        "category": "永火梦",
        "count": 8,
        "best": "1/14",
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "class": "巫师",
        "category": "学院法",
        "count": 6,
        "best": "1/11",
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "class": "巫师",
        "category": "消失法",
        "count": 4,
        "best": "3/11",
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "class": "公主连结Re:Dive",
        "category": "跳费PCR",
        "count": 3,
        "best": "1/28",
        "link": "decktypes/decktype-bfb6320cd8c6.html",
        "image": "../../assets/cards/CP04-062.jpg"
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
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第32周（2026/08/03-2026/08/09）共收录28场有效赛事、235套有排名记录的卡组，其中上位卡组179套、冠军卡组31套。从上位职业分布看，皇家护卫52套（29.1%）、龙族36套（20.1%）构成本范围的主要出场面，冠军侧则以皇家护卫10套（32.3%）、精灵5套（16.1%）表现最突出。卡组类型方面，龙族「五妹龙」32套（17.9%，最好1/37）、皇家护卫「雷维翁皇」29套（16.2%，最好1/28）、皇家护卫「财宝皇」21套（11.7%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由toru使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有71套，占全部记录30.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026-W31",
    "label": "2026 第31周（2026/07/27-2026/08/02）",
    "event_count": 30,
    "deck_count": 265,
    "top8_count": 204,
    "top1_count": 34,
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
        "name": "🍃 精灵",
        "value": 48,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 43,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 36,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 17,
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
        "image": "../../assets/cards/CP04-062.jpg"
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
        "value": 32,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 32,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 27,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "name": "梦魇｜nc梦",
        "value": 3,
        "link": "decktypes/decktype-bbc8f17f6035.html",
        "image": "../../assets/cards/PR-399.jpg"
      },
      {
        "name": "巫师｜土法",
        "value": 3,
        "link": "decktypes/decktype-f4843d4577ae.html",
        "image": "../../assets/cards/BP09-U03.jpg"
      },
      {
        "name": "巫师｜消失法",
        "value": 3,
        "link": "decktypes/decktype-90c874a554cb.html",
        "image": "../../assets/cards/BP18-SL09.jpg"
      },
      {
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 3,
        "link": "decktypes/decktype-deb2d8e95565.html",
        "image": "../../assets/cards/CP04-SL03.jpg"
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
        "name": "主教｜控教",
        "value": 2,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "龙族｜八狱龙",
        "value": 2,
        "link": "decktypes/decktype-a0e911cab421.html",
        "image": "../../assets/cards/BP19-SL15.jpg"
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
        "image": "../../assets/cards/PR-479.jpg"
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
        "count": 32,
        "best": "1/49",
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "class": "皇家护卫",
        "category": "财宝皇",
        "count": 27,
        "best": "2/42",
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "class": "精灵",
        "category": "宇宙妖",
        "count": 3,
        "best": "2/28",
        "link": "decktypes/decktype-75a3e2d0e2a4.html",
        "image": "../../assets/cards/BP19-SL26.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第31周（2026/07/27-2026/08/02）共收录30场有效赛事、265套有排名记录的卡组，其中上位卡组204套、冠军卡组34套。从上位职业分布看，巫师53套（26.0%）、梦魇37套（18.1%）构成本范围的主要出场面，冠军侧则以巫师12套（35.3%）、皇家护卫7套（20.6%）表现最突出。卡组类型方面，巫师「二妹法」37套（18.1%，最好1/45）、龙族「五妹龙」28套（13.7%，最好1/49）、梦魇「骰子梦」23套（11.3%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有88套，占全部记录33.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 221,
    "deck_count": 2084,
    "top8_count": 1526,
    "top1_count": 271,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 482,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 306,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 242,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 237,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 177,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 51,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 30,
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
        "image": "../../assets/cards/ECP02-050.jpg"
      }
    ],
    "top1_class_distribution": [
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
        "value": 50,
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
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 41,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "value": 6,
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
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 325,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 287,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 140,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 130,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 127,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 92,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 75,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 350,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 61,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 48,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 34,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 26,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 26,
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
        "name": "Others",
        "value": 63,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 350,
    "type_other_types": 48,
    "top1_type_other_count": 63,
    "top1_type_other_types": 23,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-71c5492994cc.html\"><b>梦魇｜永火梦</b><span>10套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html\"><b>梦魇｜骰子梦</b><span>9套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html\"><b>精灵｜连击妖</b><span>7套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html\"><b>精灵｜兽妖</b><span>4套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html\"><b>公主连结Re:Dive｜法术PCR</b><span>4套，最好成绩 1/32</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html\"><b>梦魇｜nc梦</b><span>3套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html\"><b>巫师｜八狱法</b><span>3套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html\"><b>梦魇｜机械梦</b><span>3套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html\"><b>主教｜守护教</b><span>3套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html\"><b>公主连结Re:Dive｜跳费PCR</b><span>2套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html\"><b>皇家护卫｜铺场皇</b><span>2套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html\"><b>精灵｜宇宙妖</b><span>2套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html\"><b>主教｜节奏教</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-246e45fe1891.html\"><b>龙族｜学院龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html\"><b>巫师｜机械法</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-8ff5ae7f9a02.html\"><b>皇家护卫｜胜利皇</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html\"><b>主教｜护符教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7ea4d7128729.html\"><b>龙族｜荒野龙</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-717ed8345f1c.html\"><b>主教｜学院教</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录221场有效赛事、2084套有排名记录的卡组，其中上位卡组1526套、冠军卡组271套。从上位职业分布看，皇家护卫482套（31.6%）、龙族306套（20.1%）构成本范围的主要出场面，冠军侧则以皇家护卫99套（36.5%）、龙族50套（18.5%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」325套（21.3%，最好2/298）、龙族「五妹龙」287套（18.8%，最好1/298）、精灵「人偶妖」140套（9.2%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有635套，占全部记录30.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html\">雷维翁皇</a></td><td style=\"text-align:center\">325</td><td style=\"text-align:center\">268-243 (52.4%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html\">五妹龙</a></td><td style=\"text-align:center\">287</td><td style=\"text-align:center\">216-217 (49.9%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html\">人偶妖</a></td><td style=\"text-align:center\">140</td><td style=\"text-align:center\">127-106 (54.5%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html\">二妹法</a></td><td style=\"text-align:center\">130</td><td style=\"text-align:center\">113-99 (53.3%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html\">财宝皇</a></td><td style=\"text-align:center\">127</td><td style=\"text-align:center\">131-91 (59.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html\">骰子梦</a></td><td style=\"text-align:center\">92</td><td style=\"text-align:center\">54-77 (41.2%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html\">学院法</a></td><td style=\"text-align:center\">75</td><td style=\"text-align:center\">53-60 (46.9%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html\">兽妖</a></td><td style=\"text-align:center\">54</td><td style=\"text-align:center\">33-49 (40.2%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html\">永火梦</a></td><td style=\"text-align:center\">47</td><td style=\"text-align:center\">40-36 (52.6%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html\">连击妖</a></td><td style=\"text-align:center\">24</td><td style=\"text-align:center\">23-15 (60.5%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html\">法术PCR</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">17-18 (48.6%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html\">守护教</a></td><td style=\"text-align:center\">22</td><td style=\"text-align:center\">20-19 (51.3%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html\">nc梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">10-12 (45.5%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html\">消失法</a></td><td style=\"text-align:center\">12</td><td style=\"text-align:center\">4-12 (25.0%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html\">八狱法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">11-7 (61.1%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html\">宇宙妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-7 (58.8%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html\">跳费PCR</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-6 (50.0%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">1-8 (11.1%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html\">胜利皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html\">猎人妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-5 (54.5%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html\">铺场皇</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">7-5 (58.3%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html\">学院教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html\">纹章教</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html\">机械梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">10-3 (76.9%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html\">学院龙</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html\">2c梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html\">土法</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">2-6 (25.0%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html\">篡夺皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html\">八狱龙</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html\">荒野皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html\">八狱妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html\">宇宙皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html\">宇宙龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e9834a57b22d.html\">ブリザードハート・フィルレイン型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html\">八狱梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html\">护符教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html\">妖精妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html\">盗贼皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/5 (0.2000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html\">宇宙梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html\">学院皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html\">海洋龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html\">削手梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html\">蝙蝠梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-ab59754c3160.html\">〔シンデレラガール〕北条加蓮型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-afaa5f7a1cf6.html\">ナックルドラゴン・ドラグニル型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-ae5585fca3f3.html\">ホワイトヴァナラ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/3 (1.0000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">621 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 213</span>\n          <span class=\"stat-pill percent\">29.8%</span>\n          <span class=\"stat-pill archetypes\">12 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>409套 (65.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>167套 (26.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>11套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>11套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>6套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>5套 (0.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>4套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>3套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>2套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01c7e9eecd2a.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/CP04-019.jpg\" alt=\"〔Escorte étoile〕シリウスシンボリ型核心卡\"><span class=\"archetype-tag-body\"><b>〔Escorte étoile〕シリウスシンボリ型</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-P05.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">411 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 128</span>\n          <span class=\"stat-pill percent\">19.7%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>374套 (91.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>10套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>8套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc59d0b17f7.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"灼熱のアナテマ・バーンドナイト型核心卡\"><span class=\"archetype-tag-body\"><b>灼熱のアナテマ・バーンドナイト型</b><em>4套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>3套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e9834a57b22d.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL16.jpg\" alt=\"ブリザードハート・フィルレイン型核心卡\"><span class=\"archetype-tag-body\"><b>ブリザードハート・フィルレイン型</b><em>3套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>3套 (0.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>2套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18f51a4ef6ed.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"独眼竜・伊達政宗型核心卡\"><span class=\"archetype-tag-body\"><b>独眼竜・伊達政宗型</b><em>2套 (0.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e48b4f3197f6.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"万華の鳳凰型核心卡\"><span class=\"archetype-tag-body\"><b>万華の鳳凰型</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-afaa5f7a1cf6.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP03-056.jpg\" alt=\"ナックルドラゴン・ドラグニル型核心卡\"><span class=\"archetype-tag-body\"><b>ナックルドラゴン・ドラグニル型</b><em>1套 (0.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">337 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 108</span>\n          <span class=\"stat-pill percent\">16.2%</span>\n          <span class=\"stat-pill archetypes\">10 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>172套 (51.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>83套 (24.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>44套 (13.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>16套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>9套 (2.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>6套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>3套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-495307433269.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"樹権の剪定者型核心卡\"><span class=\"archetype-tag-body\"><b>樹権の剪定者型</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ae5585fca3f3.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-005.jpg\" alt=\"ホワイトヴァナラ型核心卡\"><span class=\"archetype-tag-body\"><b>ホワイトヴァナラ型</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">330 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 94</span>\n          <span class=\"stat-pill percent\">15.8%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>170套 (51.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>102套 (30.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>23套 (7.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>16套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>11套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>2套 (0.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"大美法核心卡\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8da7b8f3438c.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP20-SL10.jpg\" alt=\"インフィニットウィッチ・ドロシー型核心卡\"><span class=\"archetype-tag-body\"><b>インフィニットウィッチ・ドロシー型</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0756d6450098.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"一世の探究型核心卡\"><span class=\"archetype-tag-body\"><b>一世の探究型</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a77bc46bddd8.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP20-SL10.jpg\" alt=\"《愚者》・リンクル型核心卡\"><span class=\"archetype-tag-body\"><b>《愚者》・リンクル型</b><em>1套 (0.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">251 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 63</span>\n          <span class=\"stat-pill percent\">12.0%</span>\n          <span class=\"stat-pill archetypes\">11 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>129套 (51.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>58套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>21套 (8.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>10套 (4.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>9套 (3.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>6套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>5套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-479.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>5套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>3套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>3套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>2套 (0.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">85 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">4.1%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>32套 (37.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>15套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>12套 (14.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>10套 (11.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>7套 (8.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>6套 (7.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-856773b7c741.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"聖なる願い型核心卡\"><span class=\"archetype-tag-body\"><b>聖なる願い型</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">2.3%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>37套 (78.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>10套 (21.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-ab59754c3160.html\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-050.jpg\" alt=\"〔シンデレラガール〕北条加蓮型核心卡\"><span class=\"archetype-tag-body\"><b>〔シンデレラガール〕北条加蓮型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7fd798fa09f6.html\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-010.jpg\" alt=\"その背中を越えて型核心卡\"><span class=\"archetype-tag-body\"><b>その背中を越えて型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W38": {
    "key": "2026-W38",
    "label": "2026 第38周（2026/09/14-2026/09/20）",
    "event_count": 25,
    "deck_count": 257,
    "top8_count": 174,
    "top1_count": 37,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 53,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 40,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
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
        "value": 21,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 20,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/ECP02-SL04.jpg"
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
        "name": "💎 公主连结Re:Dive",
        "value": 4,
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
        "image": "../../assets/cards/ECP02-050.jpg"
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
        "value": 9,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 6,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "value": 37,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 32,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 17,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 13,
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
        "name": "巫师｜二妹法",
        "value": 10,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "name": "皇家护卫｜雷维翁皇",
        "value": 10,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 9,
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
        "name": "巫师｜二妹法",
        "value": 3,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "精灵｜连击妖",
        "value": 3,
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
        "name": "Others",
        "value": 4,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 45,
    "type_other_types": 21,
    "top1_type_other_count": 4,
    "top1_type_other_types": 4,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W38\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W38\"><b>精灵｜人偶妖</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W38\"><b>皇家护卫｜盗贼皇</b><span>1套，最好成绩 1/5</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W38\"><b>主教｜守护教</b><span>1套，最好成绩 1/3</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第38周（2026/09/14-2026/09/20）共收录25场有效赛事、257套有排名记录的卡组，其中上位卡组174套、冠军卡组37套。从上位职业分布看，皇家护卫53套（30.5%）、龙族40套（23.0%）构成本范围的主要出场面，冠军侧则以皇家护卫17套（45.9%）、龙族9套（24.3%）表现最突出。卡组类型方面，龙族「五妹龙」37套（21.3%，最好1/23）、皇家护卫「雷维翁皇」32套（18.4%，最好1/17）、皇家护卫「财宝皇」17套（9.8%，最好1/26）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由you仮使用，成绩为1/26，成绩系数0.0385。整体来看，前10%成绩卡组共有53套，占全部记录20.6%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W38\">五妹龙</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">32-28 (53.3%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W38\">雷维翁皇</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">32-22 (59.3%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W38\">财宝皇</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">19-12 (61.3%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W38\">学院法</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">10-10 (50.0%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W38\">人偶妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">5-10 (33.3%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W38\">二妹法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">10-7 (58.8%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W38\">骰子梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">3-9 (25.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W38\">连击妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">9-3 (75.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W38\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W38\">消失法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">2/13 (0.1538)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W38\">守护教</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W38\">法术PCR</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">2-4 (33.3%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W38\">土法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W38\">2c梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W38\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W38\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/17 (0.2941)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W38\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W38\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/5 (0.2000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W38\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W38\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W38\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>偶像大师</td><td><a class=\"type-link\" href=\"decktypes/decktype-ab59754c3160.html?scope=2026-W38\">〔シンデレラガール〕北条加蓮型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W38\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W38\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-afaa5f7a1cf6.html?scope=2026-W38\">ナックルドラゴン・ドラグニル型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/8 (0.5000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W38\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W38\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/6 (0.6667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W38\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">73 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">28.4%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>47套 (64.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>20套 (27.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01c7e9eecd2a.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/CP04-019.jpg\" alt=\"〔Escorte étoile〕シリウスシンボリ型核心卡\"><span class=\"archetype-tag-body\"><b>〔Escorte étoile〕シリウスシンボリ型</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W38\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">60 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">23.3%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>52套 (86.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc59d0b17f7.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"灼熱のアナテマ・バーンドナイト型核心卡\"><span class=\"archetype-tag-body\"><b>灼熱のアナテマ・バーンドナイト型</b><em>2套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-afaa5f7a1cf6.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP03-056.jpg\" alt=\"ナックルドラゴン・ドラグニル型核心卡\"><span class=\"archetype-tag-body\"><b>ナックルドラゴン・ドラグニル型</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e9834a57b22d.html?scope=2026-W38\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL16.jpg\" alt=\"ブリザードハート・フィルレイン型核心卡\"><span class=\"archetype-tag-body\"><b>ブリザードハート・フィルレイン型</b><em>1套 (1.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">12.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W38\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>17套 (54.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W38\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>8套 (25.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W38\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>4套 (12.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W38\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W38\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">17.1%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>16套 (36.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>15套 (34.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>7套 (15.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (6.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-0756d6450098.html?scope=2026-W38\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"一世の探究型核心卡\"><span class=\"archetype-tag-body\"><b>一世の探究型</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">31 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">12.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>14套 (45.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>8套 (25.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>4套 (12.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W38\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (3.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.5%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W38\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>6套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W38\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (22.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W38\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (11.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.7%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W38\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>7套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"偶像大师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #ff8ab3\">\n        <h2><span class=\"class-icon\">🎤</span> 偶像大师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-ab59754c3160.html?scope=2026-W38\" style=\"border-color:#ff8ab3\"><img src=\"../../assets/cards/ECP02-050.jpg\" alt=\"〔シンデレラガール〕北条加蓮型核心卡\"><span class=\"archetype-tag-body\"><b>〔シンデレラガール〕北条加蓮型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"赛马娘\">\n      <div class=\"class-header\" style=\"border-left:5px solid #8bd450\">\n        <h2><span class=\"class-icon\">🏇</span> 赛马娘</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.4%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7fd798fa09f6.html?scope=2026-W38\" style=\"border-color:#8bd450\"><img src=\"../../assets/cards/ECP01-010.jpg\" alt=\"その背中を越えて型核心卡\"><span class=\"archetype-tag-body\"><b>その背中を越えて型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a><a href=\"#偶像大师\">🎤 偶像大师</a><a href=\"#赛马娘\">🏇 赛马娘</a>"
  },
  "2026-W37": {
    "key": "2026-W37",
    "label": "2026 第37周（2026/09/07-2026/09/13）",
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
        "value": 42,
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
        "value": 16,
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
        "value": 16,
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
        "value": 5,
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
        "value": 44,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 40,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 16,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 11,
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
        "value": 6,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 4,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 3,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
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
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W37\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/20</span></a><a class=\"others-chip\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W37\"><b>皇家护卫｜铺场皇</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W37\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W37\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W37\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W37\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/8</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W37\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第37周（2026/09/07-2026/09/13）共收录35场有效赛事、324套有排名记录的卡组，其中上位卡组183套、冠军卡组45套。从上位职业分布看，皇家护卫69套（37.7%）、龙族42套（23.0%）构成本范围的主要出场面，冠军侧则以皇家护卫16套（35.6%）、龙族10套（22.2%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」44套（24.0%，最好1/14）、龙族「五妹龙」40套（21.9%，最好1/16）、皇家护卫「财宝皇」16套（8.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是梦魇「骰子梦」，由きたあかり使用，成绩为1/20，成绩系数0.0500。整体来看，前10%成绩卡组共有63套，占全部记录19.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W37\">雷维翁皇</a></td><td style=\"text-align:center\">44</td><td style=\"text-align:center\">33-35 (48.5%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W37\">五妹龙</a></td><td style=\"text-align:center\">40</td><td style=\"text-align:center\">35-30 (53.8%)</td><td style=\"text-align:center\">1/16 (0.0625)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W37\">财宝皇</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">16-10 (61.5%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W37\">学院法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">10-8 (55.6%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W37\">人偶妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W37\">永火梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">9-4 (69.2%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W37\">骰子梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-5 (37.5%)</td><td style=\"text-align:center\">1/20 (0.0500)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W37\">兽妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/15 (0.1333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W37\">nc梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W37\">连击妖</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W37\">二妹法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W37\">真红梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W37\">宇宙皇</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">7/17 (0.4118)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W37\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W37\">守护教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W37\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/8 (0.3750)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W37\">胜利皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/7 (0.4286)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W37\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W37\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W37\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W37\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W37\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W37\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W37\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/12 (0.2500)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W37\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/15 (0.2667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W37\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W37\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/20 (0.3000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W37\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/9 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W37\">盗贼皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W37\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e9834a57b22d.html?scope=2026-W37\">ブリザードハート・フィルレイン型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">106 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">32.7%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>69套 (65.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>25套 (23.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4aeba2c734d7.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"盗贼皇核心卡\"><span class=\"archetype-tag-body\"><b>盗贼皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bab8fae9b582.html?scope=2026-W37\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP14-P05.jpg\" alt=\"金币皇核心卡\"><span class=\"archetype-tag-body\"><b>金币皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">69 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">21.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>62套 (89.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>2套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-18f51a4ef6ed.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP18-SL13.jpg\" alt=\"独眼竜・伊達政宗型核心卡\"><span class=\"archetype-tag-body\"><b>独眼竜・伊達政宗型</b><em>2套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e9834a57b22d.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL16.jpg\" alt=\"ブリザードハート・フィルレイン型核心卡\"><span class=\"archetype-tag-body\"><b>ブリザードハート・フィルレイン型</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc59d0b17f7.html?scope=2026-W37\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"灼熱のアナテマ・バーンドナイト型核心卡\"><span class=\"archetype-tag-body\"><b>灼熱のアナテマ・バーンドナイト型</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">41 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">12.7%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>19套 (46.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>10套 (24.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>8套 (19.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>2套 (4.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W37\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (2.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 7</span>\n          <span class=\"stat-pill percent\">13.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>25套 (56.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>10套 (22.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>6套 (13.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8da7b8f3438c.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP20-SL10.jpg\" alt=\"インフィニットウィッチ・ドロシー型核心卡\"><span class=\"archetype-tag-body\"><b>インフィニットウィッチ・ドロシー型</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a77bc46bddd8.html?scope=2026-W37\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP20-SL10.jpg\" alt=\"《愚者》・リンクル型核心卡\"><span class=\"archetype-tag-body\"><b>《愚者》・リンクル型</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">13.3%</span>\n          <span class=\"stat-pill archetypes\">9 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>15套 (34.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>9套 (20.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>8套 (18.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>5套 (11.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>2套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W37\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-479.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">4.3%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W37\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>5套 (35.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W37\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W37\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W37\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W37\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.2%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W37\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (57.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W37\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (42.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W36": {
    "key": "2026-W36",
    "label": "2026 第36周（2026/08/31-2026/09/06）",
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
        "value": 28,
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
        "value": 8,
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
        "value": 27,
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
        "value": 45,
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
    "type_other_count": 45,
    "type_other_types": 23,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W36\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/12</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W36\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W36\"><b>主教｜护符教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W36\"><b>精灵｜宇宙妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W36\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026-W36\"><b>龙族｜荒野龙</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W36\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/6</span></a><a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W36\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/6</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第36周（2026/08/31-2026/09/06）共收录26场有效赛事、248套有排名记录的卡组，其中上位卡组154套、冠军卡组34套。从上位职业分布看，皇家护卫56套（36.4%）、龙族28套（18.2%）构成本范围的主要出场面，冠军侧则以皇家护卫14套（41.2%）、巫师7套（20.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」39套（25.3%，最好1/18）、龙族「五妹龙」27套（17.5%，最好1/24）、巫师「学院法」15套（9.7%，最好1/12）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由ポナンズ使用，成绩为1/24，成绩系数0.0417。整体来看，前10%成绩卡组共有52套，占全部记录21.0%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W36\">雷维翁皇</a></td><td style=\"text-align:center\">39</td><td style=\"text-align:center\">28-32 (46.7%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W36\">五妹龙</a></td><td style=\"text-align:center\">27</td><td style=\"text-align:center\">20-22 (47.6%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W36\">学院法</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">13-10 (56.5%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W36\">财宝皇</a></td><td style=\"text-align:center\">14</td><td style=\"text-align:center\">20-7 (74.1%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W36\">骰子梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">1/12 (0.0833)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W36\">人偶妖</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W36\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W36\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W36\">八狱法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W36\">二妹法</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">5-3 (62.5%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W36\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W36\">守护教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W36\">nc梦</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W36\">节奏教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/16 (0.1875)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W36\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W36\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/8 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W36\">护符教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W36\">透京妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/18 (0.1667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026-W36\">荒野龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W36\">跳费PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/6 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026-W36\">大美法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/17 (0.1765)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W36\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/10 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W36\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W36\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/12 (0.3333)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W36\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/6 (0.3333)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W36\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/10 (0.4000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W36\">土法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W36\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W36\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">83 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 22</span>\n          <span class=\"stat-pill percent\">33.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>53套 (63.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>21套 (25.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>4套 (4.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (2.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2271753f82b0.html?scope=2026-W36\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙皇核心卡\"><span class=\"archetype-tag-body\"><b>宇宙皇</b><em>1套 (1.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">44 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 9</span>\n          <span class=\"stat-pill percent\">17.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W36\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>41套 (93.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7ea4d7128729.html?scope=2026-W36\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP11-SL10.jpg\" alt=\"荒野龙核心卡\"><span class=\"archetype-tag-body\"><b>荒野龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e48b4f3197f6.html?scope=2026-W36\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"万華の鳳凰型核心卡\"><span class=\"archetype-tag-body\"><b>万華の鳳凰型</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W36\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">39 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">15.7%</span>\n          <span class=\"stat-pill archetypes\">8 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>14套 (35.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>8套 (20.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>6套 (15.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>5套 (12.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (5.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-495307433269.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"樹権の剪定者型核心卡\"><span class=\"archetype-tag-body\"><b>樹権の剪定者型</b><em>2套 (5.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b839e822b2c1.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP18-005.jpg\" alt=\"透京妖核心卡\"><span class=\"archetype-tag-body\"><b>透京妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W36\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">34 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">13.7%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>19套 (55.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>6套 (17.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>4套 (11.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>2套 (5.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b02e587006ac.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP21-PR10.jpg\" alt=\"大美法核心卡\"><span class=\"archetype-tag-body\"><b>大美法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W36\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">27 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">10.9%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>10套 (37.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>9套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (11.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (7.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-479.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-2e7701fa0587.html?scope=2026-W36\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP11-SL13.jpg\" alt=\"控梦核心卡\"><span class=\"archetype-tag-body\"><b>控梦</b><em>1套 (3.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">15 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>4套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>3套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W36\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (6.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.4%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W36\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>4套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W36\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W35": {
    "key": "2026-W35",
    "label": "2026 第35周（2026/08/24-2026/08/30）",
    "event_count": 5,
    "deck_count": 128,
    "top8_count": 124,
    "top1_count": 7,
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
        "name": "🐉 龙族",
        "value": 32,
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
        "value": 13,
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
        "name": "💎 公主连结Re:Dive",
        "value": 3,
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
        "value": 4,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP19-SL05.jpg"
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
      }
    ],
    "type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 38,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 32,
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
        "value": 9,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 7,
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
        "value": 20,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
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
        "value": 1,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 1,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      }
    ],
    "type_other_count": 20,
    "type_other_types": 10,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第35周（2026/08/24-2026/08/30）共收录5场有效赛事、128套有排名记录的卡组，其中上位卡组124套、冠军卡组7套。从上位职业分布看，皇家护卫44套（35.5%）、龙族32套（25.8%）构成本范围的主要出场面，冠军侧则以皇家护卫4套（57.1%）、龙族2套（28.6%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」38套（30.6%，最好2/298）、龙族「五妹龙」32套（25.8%，最好1/298）、精灵「人偶妖」13套（10.5%，最好4/298）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「财宝皇」，由いおりぃ使用，成绩为1/298，成绩系数0.0034。整体来看，前10%成绩卡组共有103套，占全部记录80.5%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W35\">雷维翁皇</a></td><td style=\"text-align:center\">38</td><td style=\"text-align:center\">18-14 (56.3%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W35\">五妹龙</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">11-8 (57.9%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W35\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W35\">二妹法</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">2/298 (0.0067)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W35\">骰子梦</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">14/298 (0.0470)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W35\">财宝皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-2 (60.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W35\">连击妖</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W35\">学院法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/298 (0.0034)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W35\">永火梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/298 (0.0101)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W35\">法术PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W35\">兽妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">28/298 (0.0940)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W35\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/298 (0.0134)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W35\">胜利皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/298 (0.0168)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W35\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">25/298 (0.0839)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W35\">宇宙妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">-</td><td style=\"text-align:center\">32/298 (0.1074)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W35\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 37</span>\n          <span class=\"stat-pill percent\">36.7%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W35\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>40套 (85.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W35\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>6套 (12.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W35\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">32 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 29</span>\n          <span class=\"stat-pill percent\">25.0%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W35\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>32套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">22 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">17.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W35\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>13套 (59.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W35\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>4套 (18.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W35\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W35\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>2套 (9.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W35\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (4.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">13 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">10.2%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W35\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>9套 (69.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W35\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>3套 (23.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W35\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">7.8%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W35\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>7套 (70.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W35\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>3套 (30.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">0.8%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W35\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.3%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W35\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W34": {
    "key": "2026-W34",
    "label": "2026 第34周（2026/08/17-2026/08/23）",
    "event_count": 30,
    "deck_count": 277,
    "top8_count": 227,
    "top1_count": 36,
    "top8_class_distribution": [
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
        "value": 48,
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
        "image": "../../assets/cards/BP20-SL01.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 32,
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
        "value": 16,
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
        "value": 66,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 46,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 29,
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
        "value": 15,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜学院法",
        "value": 11,
        "link": "decktypes/decktype-b9263fb83a8a.html",
        "image": "../../assets/cards/BP06-SL08.jpg"
      },
      {
        "name": "Others",
        "value": 43,
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
        "value": 7,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 43,
    "type_other_types": 23,
    "top1_type_other_count": 7,
    "top1_type_other_types": 7,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W34\"><b>梦魇｜nc梦</b><span>1套，最好成绩 1/30</span></a><a class=\"others-chip\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W34\"><b>公主连结Re:Dive｜法术PCR</b><span>1套，最好成绩 1/27</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W34\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/26</span></a><a class=\"others-chip\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W34\"><b>精灵｜猎人妖</b><span>1套，最好成绩 1/23</span></a><a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W34\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/17</span></a><a class=\"others-chip\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W34\"><b>巫师｜二妹法</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W34\"><b>巫师｜机械法</b><span>1套，最好成绩 1/8</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第34周（2026/08/17-2026/08/23）共收录30场有效赛事、277套有排名记录的卡组，其中上位卡组227套、冠军卡组36套。从上位职业分布看，皇家护卫85套（37.4%）、龙族48套（21.1%）构成本范围的主要出场面，冠军侧则以皇家护卫16套（44.4%）、精灵6套（16.7%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」66套（29.1%，最好1/33）、龙族「五妹龙」46套（20.3%，最好1/37）、精灵「人偶妖」29套（12.8%，最好2/37）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由カイ使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有87套，占全部记录31.4%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W34\">雷维翁皇</a></td><td style=\"text-align:center\">66</td><td style=\"text-align:center\">65-54 (54.6%)</td><td style=\"text-align:center\">1/33 (0.0303)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W34\">五妹龙</a></td><td style=\"text-align:center\">46</td><td style=\"text-align:center\">34-40 (45.9%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W34\">人偶妖</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">29-24 (54.7%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W34\">二妹法</a></td><td style=\"text-align:center\">17</td><td style=\"text-align:center\">9-16 (36.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W34\">财宝皇</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">17-11 (60.7%)</td><td style=\"text-align:center\">1/34 (0.0294)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W34\">学院法</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">6-11 (35.3%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W34\">骰子梦</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">6-8 (42.9%)</td><td style=\"text-align:center\">1/17 (0.0588)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W34\">兽妖</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">3-6 (33.3%)</td><td style=\"text-align:center\">2/17 (0.1176)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W34\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W34\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/30 (0.0333)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W34\">机械法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W34\">法术PCR</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/27 (0.0370)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W34\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W34\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W34\">荒野皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/32 (0.0938)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W34\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W34\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/34 (0.1471)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W34\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/33 (0.1818)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W34\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/33 (0.2121)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W34\">透京皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/32 (0.2500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W34\">学院皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W34\">2c梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W34\">削手梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/23 (0.3043)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W34\">宇宙教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/13 (0.3077)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W34\">消失法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/25 (0.3200)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W34\">学院龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/23 (0.3478)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W34\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/17 (0.3529)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W34\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/21 (0.3810)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-ae5585fca3f3.html?scope=2026-W34\">ホワイトヴァナラ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/3 (1.0000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">97 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 38</span>\n          <span class=\"stat-pill percent\">35.0%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>74套 (76.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>19套 (19.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-592a6c9d3e95.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP11-019.jpg\" alt=\"荒野皇核心卡\"><span class=\"archetype-tag-body\"><b>荒野皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-61f597ab3315.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP18-SL05.jpg\" alt=\"透京皇核心卡\"><span class=\"archetype-tag-body\"><b>透京皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W34\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (1.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">57 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 18</span>\n          <span class=\"stat-pill percent\">20.6%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W34\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>55套 (96.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W34\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W34\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (1.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">51 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 17</span>\n          <span class=\"stat-pill percent\">18.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>39套 (76.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>7套 (13.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (3.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ae5585fca3f3.html?scope=2026-W34\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-005.jpg\" alt=\"ホワイトヴァナラ型核心卡\"><span class=\"archetype-tag-body\"><b>ホワイトヴァナラ型</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">13.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W34\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>20套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W34\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>12套 (33.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-6ea288eb8275.html?scope=2026-W34\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-513.jpg\" alt=\"机械法核心卡\"><span class=\"archetype-tag-body\"><b>机械法</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W34\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W34\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">26 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">9.4%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>11套 (42.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>5套 (19.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (11.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-dfb30b7dc558.html?scope=2026-W34\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-SL14.jpg\" alt=\"削手梦核心卡\"><span class=\"archetype-tag-body\"><b>削手梦</b><em>2套 (7.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">7 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">2.5%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-6bdb34ded311.html?scope=2026-W34\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙教核心卡\"><span class=\"archetype-tag-body\"><b>宇宙教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W34\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>2套 (28.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W34\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W34\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-856773b7c741.html?scope=2026-W34\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL29.jpg\" alt=\"聖なる願い型核心卡\"><span class=\"archetype-tag-body\"><b>聖なる願い型</b><em>1套 (14.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">1.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W34\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W33": {
    "key": "2026-W33",
    "label": "2026 第33周（2026/08/10-2026/08/16）",
    "event_count": 42,
    "deck_count": 350,
    "top8_count": 281,
    "top1_count": 47,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 91,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 61,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 51,
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
        "name": "💀 梦魇",
        "value": 24,
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
        "value": 8,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/PR-415.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 15,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🍃 精灵",
        "value": 14,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/BP16-SL03.jpg"
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
        "name": "🔮 巫师",
        "value": 6,
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
        "value": 68,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "龙族｜五妹龙",
        "value": 45,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 43,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 30,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 19,
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
        "name": "Others",
        "value": 61,
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
        "value": 11,
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
        "name": "巫师｜二妹法",
        "value": 5,
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
        "name": "公主连结Re:Dive｜法术PCR",
        "value": 2,
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
    "type_other_count": 61,
    "type_other_types": 19,
    "top1_type_other_count": 8,
    "top1_type_other_types": 8,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W33\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/45</span></a><a class=\"others-chip\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W33\"><b>巫师｜八狱法</b><span>1套，最好成绩 1/29</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W33\"><b>主教｜节奏教</b><span>1套，最好成绩 1/24</span></a><a class=\"others-chip\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W33\"><b>精灵｜连击妖</b><span>1套，最好成绩 1/15</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W33\"><b>主教｜守护教</b><span>1套，最好成绩 1/14</span></a><a class=\"others-chip\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W33\"><b>龙族｜学院龙</b><span>1套，最好成绩 1/10</span></a><a class=\"others-chip\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W33\"><b>梦魇｜骰子梦</b><span>1套，最好成绩 1/9</span></a><a class=\"others-chip\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W33\"><b>皇家护卫｜胜利皇</b><span>1套，最好成绩 1/8</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第33周（2026/08/10-2026/08/16）共收录42场有效赛事、350套有排名记录的卡组，其中上位卡组281套、冠军卡组47套。从上位职业分布看，皇家护卫91套（32.4%）、精灵61套（21.7%）构成本范围的主要出场面，冠军侧则以皇家护卫15套（31.9%）、精灵14套（29.8%）表现最突出。卡组类型方面，皇家护卫「雷维翁皇」68套（24.2%，最好1/58）、龙族「五妹龙」45套（16.0%，最好1/21）、精灵「人偶妖」43套（15.3%，最好1/47）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是皇家护卫「雷维翁皇」，由一度だけの恋なら使用，成绩为1/58，成绩系数0.0172。整体来看，前10%成绩卡组共有118套，占全部记录33.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W33\">雷维翁皇</a></td><td style=\"text-align:center\">68</td><td style=\"text-align:center\">59-57 (50.9%)</td><td style=\"text-align:center\">1/58 (0.0172)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W33\">五妹龙</a></td><td style=\"text-align:center\">45</td><td style=\"text-align:center\">37-39 (48.7%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W33\">人偶妖</a></td><td style=\"text-align:center\">43</td><td style=\"text-align:center\">52-31 (62.7%)</td><td style=\"text-align:center\">1/47 (0.0213)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W33\">二妹法</a></td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">24-25 (49.0%)</td><td style=\"text-align:center\">1/52 (0.0192)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W33\">财宝皇</a></td><td style=\"text-align:center\">19</td><td style=\"text-align:center\">14-16 (46.7%)</td><td style=\"text-align:center\">1/19 (0.0526)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W33\">骰子梦</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">6-14 (30.0%)</td><td style=\"text-align:center\">1/9 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W33\">兽妖</a></td><td style=\"text-align:center\">11</td><td style=\"text-align:center\">7-10 (41.2%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W33\">法术PCR</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">7-6 (53.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W33\">学院法</a></td><td style=\"text-align:center\">7</td><td style=\"text-align:center\">3-7 (30.0%)</td><td style=\"text-align:center\">2/24 (0.0833)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W33\">永火梦</a></td><td style=\"text-align:center\">6</td><td style=\"text-align:center\">4-6 (40.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W33\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W33\">2c梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">5/40 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W33\">连击妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">1/15 (0.0667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W33\">猎人妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">3/45 (0.0667)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W33\">学院龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W33\">纹章教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W33\">胜利皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/8 (0.1250)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W33\">宇宙妖</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/52 (0.1346)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W33\">篡夺皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W33\">八狱龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/27 (0.2222)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W33\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/29 (0.0345)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W33\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W33\">宇宙龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-e9834a57b22d.html?scope=2026-W33\">ブリザードハート・フィルレイン型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/31 (0.1290)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W33\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/40 (0.2000)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">107 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 36</span>\n          <span class=\"stat-pill percent\">30.6%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W33\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>77套 (72.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W33\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>24套 (22.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W33\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>3套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026-W33\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-SL06.jpg\" alt=\"胜利皇核心卡\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>2套 (1.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W33\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>1套 (0.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">64 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">18.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>56套 (87.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>3套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-36123430c5af.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙龙核心卡\"><span class=\"archetype-tag-body\"><b>宇宙龙</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e9834a57b22d.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL16.jpg\" alt=\"ブリザードハート・フィルレイン型核心卡\"><span class=\"archetype-tag-body\"><b>ブリザードハート・フィルレイン型</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc59d0b17f7.html?scope=2026-W33\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP16-SL15.jpg\" alt=\"灼熱のアナテマ・バーンドナイト型核心卡\"><span class=\"archetype-tag-body\"><b>灼熱のアナテマ・バーンドナイト型</b><em>1套 (1.6%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">72 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 32</span>\n          <span class=\"stat-pill percent\">20.6%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>45套 (62.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>18套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>3套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>2套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W33\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (1.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">47 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">13.4%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W33\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>36套 (76.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W33\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>9套 (19.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W33\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W33\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">35 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 5</span>\n          <span class=\"stat-pill percent\">10.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W33\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>21套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W33\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>8套 (22.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75305287827c.html?scope=2026-W33\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP18-SL19.jpg\" alt=\"2c梦核心卡\"><span class=\"archetype-tag-body\"><b>2c梦</b><em>4套 (11.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W33\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-479.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-747237d91606.html?scope=2026-W33\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP05-U05.jpg\" alt=\"真红梦核心卡\"><span class=\"archetype-tag-body\"><b>真红梦</b><em>1套 (2.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">14 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">4.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W33\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>6套 (42.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W33\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>3套 (21.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-79c6992b28db.html?scope=2026-W33\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP19-SL23.jpg\" alt=\"护符教核心卡\"><span class=\"archetype-tag-body\"><b>护符教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W33\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>2套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W33\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (7.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">11 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.1%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W33\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>11套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W32": {
    "key": "2026-W32",
    "label": "2026 第32周（2026/08/03-2026/08/09）",
    "event_count": 28,
    "deck_count": 235,
    "top8_count": 179,
    "top1_count": 31,
    "top8_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 52,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 36,
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
        "name": "🍃 精灵",
        "value": 25,
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
        "value": 5,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/CP04-062.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "⚔️ 皇家护卫",
        "value": 10,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
        "itemStyle": {
          "color": "#f1c40f"
        },
        "image": "../../assets/cards/BP21-U06.jpg"
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
        "value": 32,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 29,
        "link": "decktypes/decktype-593b0d7a6099.html",
        "image": "../../assets/cards/BP21-SL08.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 21,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
      },
      {
        "name": "巫师｜二妹法",
        "value": 20,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 16,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "精灵｜人偶妖",
        "value": 13,
        "link": "decktypes/decktype-4347111b0e67.html",
        "image": "../../assets/cards/BP16-SL03.jpg"
      },
      {
        "name": "精灵｜兽妖",
        "value": 10,
        "link": "decktypes/decktype-c2ac43fe870c.html",
        "image": "../../assets/cards/BP21-SL01.jpg"
      },
      {
        "name": "梦魇｜永火梦",
        "value": 8,
        "link": "decktypes/decktype-71c5492994cc.html",
        "image": "../../assets/cards/BP14-SL16.jpg"
      },
      {
        "name": "Others",
        "value": 30,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "top1_type_distribution": [
      {
        "name": "皇家护卫｜雷维翁皇",
        "value": 6,
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
        "name": "巫师｜二妹法",
        "value": 3,
        "link": "decktypes/decktype-f04045f27752.html",
        "image": "../../assets/cards/BP15-SL11.jpg"
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
        "value": 5,
        "itemStyle": {
          "color": "#667085"
        }
      }
    ],
    "type_other_count": 30,
    "type_other_types": 16,
    "top1_type_other_count": 5,
    "top1_type_other_types": 5,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W32\"><b>公主连结Re:Dive｜跳费PCR</b><span>1套，最好成绩 1/28</span></a><a class=\"others-chip\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W32\"><b>精灵｜兽妖</b><span>1套，最好成绩 1/18</span></a><a class=\"others-chip\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W32\"><b>巫师｜学院法</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W32\"><b>梦魇｜机械梦</b><span>1套，最好成绩 1/11</span></a><a class=\"others-chip\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W32\"><b>主教｜学院教</b><span>1套，最好成绩 1/4</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第32周（2026/08/03-2026/08/09）共收录28场有效赛事、235套有排名记录的卡组，其中上位卡组179套、冠军卡组31套。从上位职业分布看，皇家护卫52套（29.1%）、龙族36套（20.1%）构成本范围的主要出场面，冠军侧则以皇家护卫10套（32.3%）、精灵5套（16.1%）表现最突出。卡组类型方面，龙族「五妹龙」32套（17.9%，最好1/37）、皇家护卫「雷维翁皇」29套（16.2%，最好1/28）、皇家护卫「财宝皇」21套（11.7%，最好1/28）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由toru使用，成绩为1/37，成绩系数0.0270。整体来看，前10%成绩卡组共有71套，占全部记录30.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W32\">五妹龙</a></td><td style=\"text-align:center\">32</td><td style=\"text-align:center\">28-27 (50.9%)</td><td style=\"text-align:center\">1/37 (0.0270)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W32\">雷维翁皇</a></td><td style=\"text-align:center\">29</td><td style=\"text-align:center\">24-23 (51.1%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W32\">财宝皇</a></td><td style=\"text-align:center\">21</td><td style=\"text-align:center\">22-17 (56.4%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W32\">二妹法</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">16-17 (48.5%)</td><td style=\"text-align:center\">1/26 (0.0385)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W32\">骰子梦</a></td><td style=\"text-align:center\">16</td><td style=\"text-align:center\">13-14 (48.1%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W32\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">13-9 (59.1%)</td><td style=\"text-align:center\">1/35 (0.0286)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W32\">兽妖</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W32\">永火梦</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">5-6 (45.5%)</td><td style=\"text-align:center\">1/14 (0.0714)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W32\">学院法</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">3-4 (42.9%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W32\">跳费PCR</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-2 (66.7%)</td><td style=\"text-align:center\">1/28 (0.0357)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W32\">守护教</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">2-3 (40.0%)</td><td style=\"text-align:center\">2/37 (0.0541)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W32\">消失法</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W32\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W32\">学院教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">3-1 (75.0%)</td><td style=\"text-align:center\">3/37 (0.0811)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W32\">学院龙</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">3/26 (0.1154)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W32\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/28 (0.2143)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W32\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W32\">机械梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/11 (0.0909)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W32\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/30 (0.1000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W32\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/17 (0.2353)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W32\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/29 (0.2759)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W32\">铺场皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/26 (0.3077)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W32\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/18 (0.4444)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W32\">海洋龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/17 (0.4706)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">65 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 21</span>\n          <span class=\"stat-pill percent\">27.7%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W32\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>37套 (56.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W32\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>25套 (38.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W32\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (3.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W32\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">20.9%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W32\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>44套 (89.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W32\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W32\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W32\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">33 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 11</span>\n          <span class=\"stat-pill percent\">14.0%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W32\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>16套 (48.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W32\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>14套 (42.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W32\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W32\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W32\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (3.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">45 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">19.1%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W32\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>32套 (71.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W32\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>6套 (13.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W32\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>4套 (8.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W32\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (4.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W32\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">30 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 8</span>\n          <span class=\"stat-pill percent\">12.8%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W32\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>20套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W32\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>8套 (26.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W32\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W32\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (3.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">8 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">3.4%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W32\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W32\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>3套 (37.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W32\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">2.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W32\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W32\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#主教\">⛪ 主教</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026-W31": {
    "key": "2026-W31",
    "label": "2026 第31周（2026/07/27-2026/08/02）",
    "event_count": 30,
    "deck_count": 265,
    "top8_count": 204,
    "top1_count": 34,
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
        "name": "⚔️ 皇家护卫",
        "value": 32,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP21-SL08.jpg"
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
        "name": "⛪ 主教",
        "value": 14,
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
        "image": "../../assets/cards/CP04-062.jpg"
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
        "value": 7,
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
        "value": 28,
        "link": "decktypes/decktype-7e3b69cd0c30.html",
        "image": "../../assets/cards/BP15-SL15.jpg"
      },
      {
        "name": "梦魇｜骰子梦",
        "value": 23,
        "link": "decktypes/decktype-96191bb3b6d4.html",
        "image": "../../assets/cards/BP21-SL19.jpg"
      },
      {
        "name": "皇家护卫｜财宝皇",
        "value": 20,
        "link": "decktypes/decktype-9e477d88228e.html",
        "image": "../../assets/cards/BP19-SL05.jpg"
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
        "value": 49,
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
        "value": 4,
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
    "type_other_count": 49,
    "type_other_types": 25,
    "top1_type_other_count": 3,
    "top1_type_other_types": 3,
    "top1_type_others_html": "<a class=\"others-chip\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W31\"><b>精灵｜八狱妖</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W31\"><b>主教｜守护教</b><span>1套，最好成绩 1/7</span></a><a class=\"others-chip\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W31\"><b>梦魇｜八狱梦</b><span>1套，最好成绩 1/7</span></a>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026 第31周（2026/07/27-2026/08/02）共收录30场有效赛事、265套有排名记录的卡组，其中上位卡组204套、冠军卡组34套。从上位职业分布看，巫师53套（26.0%）、梦魇37套（18.1%）构成本范围的主要出场面，冠军侧则以巫师12套（35.3%）、皇家护卫7套（20.6%）表现最突出。卡组类型方面，巫师「二妹法」37套（18.1%，最好1/45）、龙族「五妹龙」28套（13.7%，最好1/49）、梦魇「骰子梦」23套（11.3%，最好1/24）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是龙族「五妹龙」，由床鰻の奔走者　エクシヴ使用，成绩为1/49，成绩系数0.0204。整体来看，前10%成绩卡组共有88套，占全部记录33.2%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W31\">二妹法</a></td><td style=\"text-align:center\">37</td><td style=\"text-align:center\">44-25 (63.8%)</td><td style=\"text-align:center\">1/45 (0.0222)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W31\">五妹龙</a></td><td style=\"text-align:center\">28</td><td style=\"text-align:center\">19-23 (45.2%)</td><td style=\"text-align:center\">1/49 (0.0204)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W31\">骰子梦</a></td><td style=\"text-align:center\">23</td><td style=\"text-align:center\">20-20 (50.0%)</td><td style=\"text-align:center\">1/24 (0.0417)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W31\">财宝皇</a></td><td style=\"text-align:center\">20</td><td style=\"text-align:center\">20-16 (55.6%)</td><td style=\"text-align:center\">2/42 (0.0476)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W31\">兽妖</a></td><td style=\"text-align:center\">15</td><td style=\"text-align:center\">11-13 (45.8%)</td><td style=\"text-align:center\">1/32 (0.0313)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W31\">人偶妖</a></td><td style=\"text-align:center\">13</td><td style=\"text-align:center\">10-11 (47.6%)</td><td style=\"text-align:center\">1/21 (0.0476)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W31\">学院法</a></td><td style=\"text-align:center\">10</td><td style=\"text-align:center\">5-10 (33.3%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W31\">雷维翁皇</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">9-6 (60.0%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W31\">永火梦</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-5 (44.4%)</td><td style=\"text-align:center\">2/45 (0.0444)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W31\">守护教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">6-4 (60.0%)</td><td style=\"text-align:center\">2/30 (0.0667)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W31\">学院教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">1-5 (16.7%)</td><td style=\"text-align:center\">6/30 (0.2000)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W31\">宇宙妖</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">4-3 (57.1%)</td><td style=\"text-align:center\">2/28 (0.0714)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W31\">机械梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">3-3 (50.0%)</td><td style=\"text-align:center\">2/20 (0.1000)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W31\">nc梦</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">1-3 (25.0%)</td><td style=\"text-align:center\">2/14 (0.1429)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W31\">铺场皇</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-2 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W31\">控教</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">6/49 (0.1224)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W31\">土法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/45 (0.1556)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W31\">消失法</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">7/42 (0.1667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W31\">跳费PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">8/30 (0.2667)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W31\">法术PCR</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W31\">节奏教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">3/40 (0.0750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W31\">连击妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/18 (0.1111)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W31\">八狱妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W31\">八狱梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-0 (100.0%)</td><td style=\"text-align:center\">1/7 (0.1429)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W31\">八狱龙</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/12 (0.1667)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W31\">篡夺皇</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/30 (0.1667)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W31\">妖精妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/24 (0.1667)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W31\">九爷法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/18 (0.2222)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W31\">猎人妖</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W31\">宇宙梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/24 (0.2500)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W31\">纹章教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W31\">蝙蝠梦</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W31\">八狱法</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/4 (0.7500)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">43 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 16</span>\n          <span class=\"stat-pill percent\">16.2%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-9e477d88228e.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP19-SL05.jpg\" alt=\"财宝皇核心卡\"><span class=\"archetype-tag-body\"><b>财宝皇</b><em>27套 (62.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-593b0d7a6099.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-SL08.jpg\" alt=\"雷维翁皇核心卡\"><span class=\"archetype-tag-body\"><b>雷维翁皇</b><em>12套 (27.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-73a3a8508e82.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP09-018.jpg\" alt=\"铺场皇核心卡\"><span class=\"archetype-tag-body\"><b>铺场皇</b><em>2套 (4.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b5d06bda5b15.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP05-SL04.jpg\" alt=\"篡夺皇核心卡\"><span class=\"archetype-tag-body\"><b>篡夺皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c20c01569823.html?scope=2026-W31\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/BP21-020.jpg\" alt=\"学院皇核心卡\"><span class=\"archetype-tag-body\"><b>学院皇</b><em>1套 (2.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">36 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 10</span>\n          <span class=\"stat-pill percent\">13.6%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7e3b69cd0c30.html?scope=2026-W31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP15-SL15.jpg\" alt=\"五妹龙核心卡\"><span class=\"archetype-tag-body\"><b>五妹龙</b><em>32套 (88.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a0e911cab421.html?scope=2026-W31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP19-SL15.jpg\" alt=\"八狱龙核心卡\"><span class=\"archetype-tag-body\"><b>八狱龙</b><em>2套 (5.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-200bb41cd994.html?scope=2026-W31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP17-SL15.jpg\" alt=\"海洋龙核心卡\"><span class=\"archetype-tag-body\"><b>海洋龙</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-246e45fe1891.html?scope=2026-W31\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/BP21-SL15.jpg\" alt=\"学院龙核心卡\"><span class=\"archetype-tag-body\"><b>学院龙</b><em>1套 (2.8%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">48 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 15</span>\n          <span class=\"stat-pill percent\">18.1%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-c2ac43fe870c.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP21-SL01.jpg\" alt=\"兽妖核心卡\"><span class=\"archetype-tag-body\"><b>兽妖</b><em>23套 (47.9%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-4347111b0e67.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL03.jpg\" alt=\"人偶妖核心卡\"><span class=\"archetype-tag-body\"><b>人偶妖</b><em>17套 (35.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-75a3e2d0e2a4.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙妖核心卡\"><span class=\"archetype-tag-body\"><b>宇宙妖</b><em>3套 (6.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-826de03f0f61.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/ECP02-SL04.jpg\" alt=\"连击妖核心卡\"><span class=\"archetype-tag-body\"><b>连击妖</b><em>2套 (4.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-25097831eeb5.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP19-005.jpg\" alt=\"八狱妖核心卡\"><span class=\"archetype-tag-body\"><b>八狱妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-217b5e054fbc.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP16-SL01.jpg\" alt=\"妖精妖核心卡\"><span class=\"archetype-tag-body\"><b>妖精妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-44ce1ca73386.html?scope=2026-W31\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/BP20-SL01.jpg\" alt=\"猎人妖核心卡\"><span class=\"archetype-tag-body\"><b>猎人妖</b><em>1套 (2.1%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">67 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 24</span>\n          <span class=\"stat-pill percent\">25.3%</span>\n          <span class=\"stat-pill archetypes\">6 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-f04045f27752.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP15-SL11.jpg\" alt=\"二妹法核心卡\"><span class=\"archetype-tag-body\"><b>二妹法</b><em>45套 (67.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9263fb83a8a.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP06-SL08.jpg\" alt=\"学院法核心卡\"><span class=\"archetype-tag-body\"><b>学院法</b><em>13套 (19.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f4843d4577ae.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP09-U03.jpg\" alt=\"土法核心卡\"><span class=\"archetype-tag-body\"><b>土法</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-90c874a554cb.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP18-SL09.jpg\" alt=\"消失法核心卡\"><span class=\"archetype-tag-body\"><b>消失法</b><em>3套 (4.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-058fd7f22075.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/BP19-SL10.jpg\" alt=\"八狱法核心卡\"><span class=\"archetype-tag-body\"><b>八狱法</b><em>2套 (3.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-e7b52e29d4c1.html?scope=2026-W31\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/PR-390.jpg\" alt=\"九爷法核心卡\"><span class=\"archetype-tag-body\"><b>九爷法</b><em>1套 (1.5%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">49 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 19</span>\n          <span class=\"stat-pill percent\">18.5%</span>\n          <span class=\"stat-pill archetypes\">7 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-96191bb3b6d4.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP21-SL19.jpg\" alt=\"骰子梦核心卡\"><span class=\"archetype-tag-body\"><b>骰子梦</b><em>32套 (65.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-71c5492994cc.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP14-SL16.jpg\" alt=\"永火梦核心卡\"><span class=\"archetype-tag-body\"><b>永火梦</b><em>7套 (14.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-42a5c2f5e134.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP07-SL13.jpg\" alt=\"机械梦核心卡\"><span class=\"archetype-tag-body\"><b>机械梦</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bbc8f17f6035.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-399.jpg\" alt=\"nc梦核心卡\"><span class=\"archetype-tag-body\"><b>nc梦</b><em>3套 (6.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-522ba9eb9548.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/PR-479.jpg\" alt=\"蝙蝠梦核心卡\"><span class=\"archetype-tag-body\"><b>蝙蝠梦</b><em>2套 (4.1%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7a481475a6b5.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-080.jpg\" alt=\"八狱梦核心卡\"><span class=\"archetype-tag-body\"><b>八狱梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-ca5fd6cc5e75.html?scope=2026-W31\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/BP19-SL26.jpg\" alt=\"宇宙梦核心卡\"><span class=\"archetype-tag-body\"><b>宇宙梦</b><em>1套 (2.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">17 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 4</span>\n          <span class=\"stat-pill percent\">6.4%</span>\n          <span class=\"stat-pill archetypes\">5 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-75396de72bcf.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL26.jpg\" alt=\"守护教核心卡\"><span class=\"archetype-tag-body\"><b>守护教</b><em>6套 (35.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-717ed8345f1c.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP21-U06.jpg\" alt=\"学院教核心卡\"><span class=\"archetype-tag-body\"><b>学院教</b><em>6套 (35.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP15-SL24.jpg\" alt=\"控教核心卡\"><span class=\"archetype-tag-body\"><b>控教</b><em>2套 (11.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-c068a8ef6610.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/BP20-SL25.jpg\" alt=\"纹章教核心卡\"><span class=\"archetype-tag-body\"><b>纹章教</b><em>2套 (11.8%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026-W31\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/PR-415.jpg\" alt=\"节奏教核心卡\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>1套 (5.9%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-deb2d8e95565.html?scope=2026-W31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-SL03.jpg\" alt=\"法术PCR核心卡\"><span class=\"archetype-tag-body\"><b>法术PCR</b><em>3套 (60.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bfb6320cd8c6.html?scope=2026-W31\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/CP04-062.jpg\" alt=\"跳费PCR核心卡\"><span class=\"archetype-tag-body\"><b>跳费PCR</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
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