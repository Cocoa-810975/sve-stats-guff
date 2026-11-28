(function() {
  var weeklyData = [
  {
    "key": "total",
    "label": "总数据",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 46,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/PCS01-001.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 9,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "グランブルーファンタジー｜生滅の技巧・ネハン型",
        "value": 9,
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 8,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 8,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 8,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 5,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 4,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "グランブルーファンタジー｜土の理・ガレヲン型",
        "value": 3,
        "link": "decktypes/decktype-b1805a8f72cc.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "name": "グランブルーファンタジー｜決意の輝竜・アーサー型",
        "value": 2,
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "グランブルーファンタジー｜单独构筑",
        "value": 2,
        "link": "decktypes/decktype-5c05f6859446.html",
        "image": "../../assets/cards/CP05-U06.jpg"
      },
      {
        "name": "巫师｜セレスティアルスフィア・ミリカ型",
        "value": 2,
        "link": "decktypes/decktype-86df14050dbc.html",
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "梦魇｜ゴブリンクイーン型",
        "value": 2,
        "link": "decktypes/decktype-55f040e1e4f2.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "精灵｜腐食の絶命型",
        "value": 2,
        "link": "decktypes/decktype-43c13988e7dd.html",
        "image": "../../assets/cards/BP20-SL02.jpg"
      },
      {
        "name": "グランブルーファンタジー｜十天衆の頭目・シエテ型",
        "value": 1,
        "link": "decktypes/decktype-35a17534fcdf.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "梦魇｜底無しの契約型",
        "value": 1,
        "link": "decktypes/decktype-5455aa995916.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "精灵｜アクアフェアリー型",
        "value": 1,
        "link": "decktypes/decktype-7fb8d134b089.html",
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "グランブルーファンタジー｜不屈の鋭刃・バザラガ型",
        "value": 1,
        "link": "decktypes/decktype-b1d9f1996219.html",
        "image": "../../assets/cards/CP05-079.jpg"
      },
      {
        "name": "精灵｜ジャンク型",
        "value": 1,
        "link": "decktypes/decktype-41833720c765.html",
        "image": "../../assets/cards/BP21-SL02.jpg"
      },
      {
        "name": "精灵｜風の理・イーウィヤ型",
        "value": 1,
        "link": "decktypes/decktype-286c7213f0c8.html",
        "image": "../../assets/cards/PR-483.jpg"
      },
      {
        "name": "巫师｜御伽の姫・アマリリス型",
        "value": 1,
        "link": "decktypes/decktype-01a9c87b3e48.html",
        "image": "../../assets/cards/BP21-041.jpg"
      },
      {
        "name": "グランブルーファンタジー｜空の命運を握る少女・ルリア型",
        "value": 1,
        "link": "decktypes/decktype-db6d7b804f55.html",
        "image": "../../assets/cards/CP05-107.jpg"
      },
      {
        "name": "グランブルーファンタジー｜ティアマト・マグナ型",
        "value": 1,
        "link": "decktypes/decktype-652eee32957a.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "グランブルーファンタジー｜レリックバスター・グラン＆ジータ型",
        "value": 1,
        "link": "decktypes/decktype-a236293509be.html",
        "image": "../../assets/cards/PR-638.jpg"
      },
      {
        "name": "巫师｜殲滅の歌声型",
        "value": 1,
        "link": "decktypes/decktype-94167b7a93f2.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜いつか、また会う未来で型",
        "value": 1,
        "link": "decktypes/decktype-5aff6f126368.html",
        "image": "../../assets/cards/PCS01-001.jpg"
      },
      {
        "name": "グランブルーファンタジー｜炎の理・ウィルナス型",
        "value": 1,
        "link": "decktypes/decktype-3edd392becf2.html",
        "image": "../../assets/cards/CP05-056.jpg"
      },
      {
        "name": "龙族｜天威のドラグーン型",
        "value": 1,
        "link": "decktypes/decktype-f1af5a020099.html",
        "image": "../../assets/cards/BP16-057.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "侮蔑の炎爪型",
        "count": 9,
        "best": "1/40",
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "生滅の技巧・ネハン型",
        "count": 9,
        "best": "2/22",
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "どこにでもいるフツーの女の子・メグ型",
        "count": 8,
        "best": "1/46",
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "水の理・ワムデュス型",
        "count": 8,
        "best": "2/46",
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "風の理・イーウィヤ型",
        "count": 8,
        "best": "1/13",
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "胜利皇",
        "count": 5,
        "best": "1/18",
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 5,
        "best": "2/23",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "テンタクルバイト型",
        "count": 4,
        "best": "1/22",
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "土の理・ガレヲン型",
        "count": 3,
        "best": "5/18",
        "link": "decktypes/decktype-b1805a8f72cc.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "決意の輝竜・アーサー型",
        "count": 2,
        "best": "1/10",
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "单独构筑",
        "count": 2,
        "best": "4/40",
        "link": "decktypes/decktype-5c05f6859446.html",
        "image": "../../assets/cards/CP05-U06.jpg"
      },
      {
        "class": "巫师",
        "category": "セレスティアルスフィア・ミリカ型",
        "count": 2,
        "best": "7/46",
        "link": "decktypes/decktype-86df14050dbc.html",
        "image": "../../assets/cards/BP13-040.jpg"
      }
    ],
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，グランブルーファンタジー46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以グランブルーファンタジー7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，龙族「侮蔑の炎爪型」9套（10.7%，最好1/40）、グランブルーファンタジー「生滅の技巧・ネハン型」9套（10.7%，最好2/22）、グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」8套（9.5%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  },
  {
    "key": "2026/11/27",
    "label": "2026/11/27-2026/12/03",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 46,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/PCS01-001.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 9,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "グランブルーファンタジー｜生滅の技巧・ネハン型",
        "value": 9,
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 8,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 8,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 8,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 5,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 4,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "グランブルーファンタジー｜土の理・ガレヲン型",
        "value": 3,
        "link": "decktypes/decktype-b1805a8f72cc.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "name": "グランブルーファンタジー｜決意の輝竜・アーサー型",
        "value": 2,
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "グランブルーファンタジー｜单独构筑",
        "value": 2,
        "link": "decktypes/decktype-5c05f6859446.html",
        "image": "../../assets/cards/CP05-U06.jpg"
      },
      {
        "name": "巫师｜セレスティアルスフィア・ミリカ型",
        "value": 2,
        "link": "decktypes/decktype-86df14050dbc.html",
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "梦魇｜ゴブリンクイーン型",
        "value": 2,
        "link": "decktypes/decktype-55f040e1e4f2.html",
        "image": "../../assets/cards/BP15-SL29.jpg"
      },
      {
        "name": "精灵｜腐食の絶命型",
        "value": 2,
        "link": "decktypes/decktype-43c13988e7dd.html",
        "image": "../../assets/cards/BP20-SL02.jpg"
      },
      {
        "name": "グランブルーファンタジー｜十天衆の頭目・シエテ型",
        "value": 1,
        "link": "decktypes/decktype-35a17534fcdf.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "梦魇｜底無しの契約型",
        "value": 1,
        "link": "decktypes/decktype-5455aa995916.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "精灵｜アクアフェアリー型",
        "value": 1,
        "link": "decktypes/decktype-7fb8d134b089.html",
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "グランブルーファンタジー｜不屈の鋭刃・バザラガ型",
        "value": 1,
        "link": "decktypes/decktype-b1d9f1996219.html",
        "image": "../../assets/cards/CP05-079.jpg"
      },
      {
        "name": "精灵｜ジャンク型",
        "value": 1,
        "link": "decktypes/decktype-41833720c765.html",
        "image": "../../assets/cards/BP21-SL02.jpg"
      },
      {
        "name": "精灵｜風の理・イーウィヤ型",
        "value": 1,
        "link": "decktypes/decktype-286c7213f0c8.html",
        "image": "../../assets/cards/PR-483.jpg"
      },
      {
        "name": "巫师｜御伽の姫・アマリリス型",
        "value": 1,
        "link": "decktypes/decktype-01a9c87b3e48.html",
        "image": "../../assets/cards/BP21-041.jpg"
      },
      {
        "name": "グランブルーファンタジー｜空の命運を握る少女・ルリア型",
        "value": 1,
        "link": "decktypes/decktype-db6d7b804f55.html",
        "image": "../../assets/cards/CP05-107.jpg"
      },
      {
        "name": "グランブルーファンタジー｜ティアマト・マグナ型",
        "value": 1,
        "link": "decktypes/decktype-652eee32957a.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "グランブルーファンタジー｜レリックバスター・グラン＆ジータ型",
        "value": 1,
        "link": "decktypes/decktype-a236293509be.html",
        "image": "../../assets/cards/PR-638.jpg"
      },
      {
        "name": "巫师｜殲滅の歌声型",
        "value": 1,
        "link": "decktypes/decktype-94167b7a93f2.html",
        "image": "../../assets/cards/BP15-039.jpg"
      },
      {
        "name": "主教｜控教",
        "value": 1,
        "link": "decktypes/decktype-da0c322184a8.html",
        "image": "../../assets/cards/BP15-SL24.jpg"
      },
      {
        "name": "公主连结Re:Dive｜いつか、また会う未来で型",
        "value": 1,
        "link": "decktypes/decktype-5aff6f126368.html",
        "image": "../../assets/cards/PCS01-001.jpg"
      },
      {
        "name": "グランブルーファンタジー｜炎の理・ウィルナス型",
        "value": 1,
        "link": "decktypes/decktype-3edd392becf2.html",
        "image": "../../assets/cards/CP05-056.jpg"
      },
      {
        "name": "龙族｜天威のドラグーン型",
        "value": 1,
        "link": "decktypes/decktype-f1af5a020099.html",
        "image": "../../assets/cards/BP16-057.jpg"
      }
    ],
    "top_types": [
      {
        "class": "龙族",
        "category": "侮蔑の炎爪型",
        "count": 9,
        "best": "1/40",
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "生滅の技巧・ネハン型",
        "count": 9,
        "best": "2/22",
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "どこにでもいるフツーの女の子・メグ型",
        "count": 8,
        "best": "1/46",
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "水の理・ワムデュス型",
        "count": 8,
        "best": "2/46",
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "風の理・イーウィヤ型",
        "count": 8,
        "best": "1/13",
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "胜利皇",
        "count": 5,
        "best": "1/18",
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "class": "主教",
        "category": "节奏教",
        "count": 5,
        "best": "2/23",
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "class": "皇家护卫",
        "category": "テンタクルバイト型",
        "count": 4,
        "best": "1/22",
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "土の理・ガレヲン型",
        "count": 3,
        "best": "5/18",
        "link": "decktypes/decktype-b1805a8f72cc.html",
        "image": "../../assets/cards/CP05-091.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "決意の輝竜・アーサー型",
        "count": 2,
        "best": "1/10",
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "class": "グランブルーファンタジー",
        "category": "单独构筑",
        "count": 2,
        "best": "4/40",
        "link": "decktypes/decktype-5c05f6859446.html",
        "image": "../../assets/cards/CP05-U06.jpg"
      },
      {
        "class": "巫师",
        "category": "セレスティアルスフィア・ミリカ型",
        "count": 2,
        "best": "7/46",
        "link": "decktypes/decktype-86df14050dbc.html",
        "image": "../../assets/cards/BP13-040.jpg"
      }
    ],
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/11/27-2026/12/03共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，グランブルーファンタジー46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以グランブルーファンタジー7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，龙族「侮蔑の炎爪型」9套（10.7%，最好1/40）、グランブルーファンタジー「生滅の技巧・ネハン型」9套（10.7%，最好2/22）、グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」8套（9.5%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。"
  }
];
  var scopeData = {
  "total": {
    "key": "total",
    "label": "总数据",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "top8_class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 46,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/PCS01-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 7,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
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
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 9,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "グランブルーファンタジー｜生滅の技巧・ネハン型",
        "value": 9,
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 8,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 8,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 8,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 5,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 4,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 2,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 2,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 2,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 2,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "グランブルーファンタジー｜十天衆の頭目・シエテ型",
        "value": 1,
        "link": "decktypes/decktype-35a17534fcdf.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 1,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "梦魇｜底無しの契約型",
        "value": 1,
        "link": "decktypes/decktype-5455aa995916.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 1,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "グランブルーファンタジー｜決意の輝竜・アーサー型",
        "value": 1,
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      }
    ],
    "type_other_count": 28,
    "type_other_types": 21,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "截至本次周一早上9点的最后一次数据统计，总数据共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，グランブルーファンタジー46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以グランブルーファンタジー7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，龙族「侮蔑の炎爪型」9套（10.7%，最好1/40）、グランブルーファンタジー「生滅の技巧・ネハン型」9套（10.7%，最好2/22）、グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」8套（9.5%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7c5c37ec9710.html\">侮蔑の炎爪型</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-e4518755c716.html\">生滅の技巧・ネハン型</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-1d73a16fabc1.html\">どこにでもいるフツーの女の子・メグ型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-bd8fc996e1d2.html\">水の理・ワムデュス型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd1153203ebb.html\">風の理・イーウィヤ型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html\">胜利皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html\">节奏教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-3cffb7876274.html\">テンタクルバイト型</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-b1805a8f72cc.html\">土の理・ガレヲン型</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-af252e35bc8e.html\">決意の輝竜・アーサー型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-5c05f6859446.html\">单独构筑</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/40 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-86df14050dbc.html\">セレスティアルスフィア・ミリカ型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/46 (0.1522)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-55f040e1e4f2.html\">ゴブリンクイーン型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-43c13988e7dd.html\">腐食の絶命型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-35a17534fcdf.html\">十天衆の頭目・シエテ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-5455aa995916.html\">底無しの契約型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-7fb8d134b089.html\">アクアフェアリー型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-b1d9f1996219.html\">不屈の鋭刃・バザラガ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/23 (0.1739)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-41833720c765.html\">ジャンク型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-286c7213f0c8.html\">風の理・イーウィヤ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-01a9c87b3e48.html\">御伽の姫・アマリリス型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-db6d7b804f55.html\">空の命運を握る少女・ルリア型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-652eee32957a.html\">ティアマト・マグナ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-a236293509be.html\">レリックバスター・グラン＆ジータ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-94167b7a93f2.html\">殲滅の歌声型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-5aff6f126368.html\">いつか、また会う未来で型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-3edd392becf2.html\">炎の理・ウィルナス型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f1af5a020099.html\">天威のドラグーン型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"\">\n      <div class=\"class-header\" style=\"border-left:5px solid #888\">\n        <h2><span class=\"class-icon\">🎮</span> グランブルーファンタジー</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">54.8%</span>\n          <span class=\"stat-pill archetypes\">13 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-e4518755c716.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-105.jpg\" alt=\"生滅の技巧・ネハン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>生滅の技巧・ネハン型</b><em>9套 (19.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1d73a16fabc1.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-SL19.jpg\" alt=\"どこにでもいるフツーの女の子・メグ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>どこにでもいるフツーの女の子・メグ型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bd8fc996e1d2.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-039.jpg\" alt=\"水の理・ワムデュス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水の理・ワムデュス型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd1153203ebb.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-SL03.jpg\" alt=\"風の理・イーウィヤ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>風の理・イーウィヤ型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b1805a8f72cc.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-091.jpg\" alt=\"土の理・ガレヲン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土の理・ガレヲン型</b><em>3套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5c05f6859446.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-U06.jpg\" alt=\"单独构筑核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>单独构筑</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-af252e35bc8e.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"決意の輝竜・アーサー型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>決意の輝竜・アーサー型</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-35a17534fcdf.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"十天衆の頭目・シエテ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>十天衆の頭目・シエテ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b1d9f1996219.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-079.jpg\" alt=\"不屈の鋭刃・バザラガ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>不屈の鋭刃・バザラガ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db6d7b804f55.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-107.jpg\" alt=\"空の命運を握る少女・ルリア型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>空の命運を握る少女・ルリア型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-652eee32957a.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"ティアマト・マグナ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ティアマト・マグナ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a236293509be.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/PR-638.jpg\" alt=\"レリックバスター・グラン＆ジータ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>レリックバスター・グラン＆ジータ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-3edd392becf2.html\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-056.jpg\" alt=\"炎の理・ウィルナス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>炎の理・ウィルナス型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7c5c37ec9710.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/SP01-SP18.jpg\" alt=\"侮蔑の炎爪型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>侮蔑の炎爪型</b><em>9套 (90.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f1af5a020099.html\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-057.jpg\" alt=\"天威のドラグーン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天威のドラグーン型</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL06.jpg\" alt=\"胜利皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>5套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-3cffb7876274.html\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP16-026.jpg\" alt=\"テンタクルバイト型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>テンタクルバイト型</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (83.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-43c13988e7dd.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL02.jpg\" alt=\"腐食の絶命型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>腐食の絶命型</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7fb8d134b089.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/SCS01-001.jpg\" alt=\"アクアフェアリー型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>アクアフェアリー型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-41833720c765.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL02.jpg\" alt=\"ジャンク型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ジャンク型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-286c7213f0c8.html\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/PR-483.jpg\" alt=\"風の理・イーウィヤ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>風の理・イーウィヤ型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-86df14050dbc.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP13-040.jpg\" alt=\"セレスティアルスフィア・ミリカ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>セレスティアルスフィア・ミリカ型</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01a9c87b3e48.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP21-041.jpg\" alt=\"御伽の姫・アマリリス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>御伽の姫・アマリリス型</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-94167b7a93f2.html\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-039.jpg\" alt=\"殲滅の歌声型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>殲滅の歌声型</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-55f040e1e4f2.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP15-SL29.jpg\" alt=\"ゴブリンクイーン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ゴブリンクイーン型</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5455aa995916.html\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-072.jpg\" alt=\"底無しの契約型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>底無しの契約型</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5aff6f126368.html\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/PCS01-001.jpg\" alt=\"いつか、また会う未来で型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>いつか、また会う未来で型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#\"> グランブルーファンタジー</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#主教\">⛪ 主教</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
  },
  "2026/11/27": {
    "key": "2026/11/27",
    "label": "2026/11/27-2026/12/03",
    "event_count": 12,
    "deck_count": 84,
    "top8_count": 84,
    "top1_count": 14,
    "top8_class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 46,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 10,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 9,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "🍃 精灵",
        "value": 5,
        "itemStyle": {
          "color": "#27ae60"
        },
        "image": "../../assets/cards/SCS01-001.jpg"
      },
      {
        "name": "🔮 巫师",
        "value": 4,
        "itemStyle": {
          "color": "#9b59b6"
        },
        "image": "../../assets/cards/BP13-040.jpg"
      },
      {
        "name": "💀 梦魇",
        "value": 3,
        "itemStyle": {
          "color": "#2c3e50"
        },
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "💎 公主连结Re:Dive",
        "value": 1,
        "itemStyle": {
          "color": "#e91e63"
        },
        "image": "../../assets/cards/PCS01-001.jpg"
      }
    ],
    "top1_class_distribution": [
      {
        "name": "🎮 グランブルーファンタジー",
        "value": 7,
        "itemStyle": {
          "color": "#888"
        },
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "⚔️ 皇家护卫",
        "value": 3,
        "itemStyle": {
          "color": "#3498db"
        },
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "🐉 龙族",
        "value": 2,
        "itemStyle": {
          "color": "#e67e22"
        },
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "⛪ 主教",
        "value": 1,
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
        "image": "../../assets/cards/BP14-072.jpg"
      }
    ],
    "type_distribution": [
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 9,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "グランブルーファンタジー｜生滅の技巧・ネハン型",
        "value": 9,
        "link": "decktypes/decktype-e4518755c716.html",
        "image": "../../assets/cards/CP05-105.jpg"
      },
      {
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 8,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 8,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 8,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 5,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 5,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 4,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
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
        "name": "グランブルーファンタジー｜どこにでもいるフツーの女の子・メグ型",
        "value": 2,
        "link": "decktypes/decktype-1d73a16fabc1.html",
        "image": "../../assets/cards/CP05-SL19.jpg"
      },
      {
        "name": "龙族｜侮蔑の炎爪型",
        "value": 2,
        "link": "decktypes/decktype-7c5c37ec9710.html",
        "image": "../../assets/cards/SP01-SP18.jpg"
      },
      {
        "name": "皇家护卫｜胜利皇",
        "value": 2,
        "link": "decktypes/decktype-8ff5ae7f9a02.html",
        "image": "../../assets/cards/BP09-SL06.jpg"
      },
      {
        "name": "グランブルーファンタジー｜風の理・イーウィヤ型",
        "value": 2,
        "link": "decktypes/decktype-cd1153203ebb.html",
        "image": "../../assets/cards/CP05-SL03.jpg"
      },
      {
        "name": "グランブルーファンタジー｜十天衆の頭目・シエテ型",
        "value": 1,
        "link": "decktypes/decktype-35a17534fcdf.html",
        "image": "../../assets/cards/CP05-061.jpg"
      },
      {
        "name": "皇家护卫｜テンタクルバイト型",
        "value": 1,
        "link": "decktypes/decktype-3cffb7876274.html",
        "image": "../../assets/cards/BP16-026.jpg"
      },
      {
        "name": "梦魇｜底無しの契約型",
        "value": 1,
        "link": "decktypes/decktype-5455aa995916.html",
        "image": "../../assets/cards/BP14-072.jpg"
      },
      {
        "name": "グランブルーファンタジー｜水の理・ワムデュス型",
        "value": 1,
        "link": "decktypes/decktype-bd8fc996e1d2.html",
        "image": "../../assets/cards/CP05-039.jpg"
      },
      {
        "name": "主教｜节奏教",
        "value": 1,
        "link": "decktypes/decktype-b9c3d7da07ee.html",
        "image": "../../assets/cards/PR-415.jpg"
      },
      {
        "name": "グランブルーファンタジー｜決意の輝竜・アーサー型",
        "value": 1,
        "link": "decktypes/decktype-af252e35bc8e.html",
        "image": "../../assets/cards/CP05-061.jpg"
      }
    ],
    "type_other_count": 28,
    "type_other_types": 21,
    "top1_type_other_count": 0,
    "top1_type_other_types": 0,
    "top1_type_others_html": "<span class=\"others-empty\">无</span>",
    "scope_summary": "本周在周一早上9点完成最后一次数据统计后，2026/11/27-2026/12/03共收录12场有效赛事、84套有排名记录的卡组，其中上位卡组84套、冠军卡组14套。从上位职业分布看，グランブルーファンタジー46套（54.8%）、龙族10套（11.9%）构成本范围的主要出场面，冠军侧则以グランブルーファンタジー7套（50.0%）、皇家护卫3套（21.4%）表现最突出。卡组类型方面，龙族「侮蔑の炎爪型」9套（10.7%，最好1/40）、グランブルーファンタジー「生滅の技巧・ネハン型」9套（10.7%，最好2/22）、グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」8套（9.5%，最好1/46）位居前列，说明环境核心集中在少数成熟体系。单套成绩最佳的是グランブルーファンタジー「どこにでもいるフツーの女の子・メグ型」，由タイ使用，成绩为1/46，成绩系数0.0217。整体来看，前10%成绩卡组共有35套，占全部记录41.7%；后续应继续跟踪头部卡组占比变化，以及中小众类型是否能稳定进入高顺位。",
    "popular_rows": "<tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-7c5c37ec9710.html?scope=2026%2F11%2F27\">侮蔑の炎爪型</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-7 (53.3%)</td><td style=\"text-align:center\">1/40 (0.0250)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-e4518755c716.html?scope=2026%2F11%2F27\">生滅の技巧・ネハン型</a></td><td style=\"text-align:center\">9</td><td style=\"text-align:center\">8-9 (47.1%)</td><td style=\"text-align:center\">2/22 (0.0909)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-1d73a16fabc1.html?scope=2026%2F11%2F27\">どこにでもいるフツーの女の子・メグ型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/46 (0.0217)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-bd8fc996e1d2.html?scope=2026%2F11%2F27\">水の理・ワムデュス型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">6-7 (46.2%)</td><td style=\"text-align:center\">2/46 (0.0435)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-cd1153203ebb.html?scope=2026%2F11%2F27\">風の理・イーウィヤ型</a></td><td style=\"text-align:center\">8</td><td style=\"text-align:center\">8-6 (57.1%)</td><td style=\"text-align:center\">1/13 (0.0769)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026%2F11%2F27\">胜利皇</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">7-3 (70.0%)</td><td style=\"text-align:center\">1/18 (0.0556)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F11%2F27\">节奏教</a></td><td style=\"text-align:center\">5</td><td style=\"text-align:center\">4-4 (50.0%)</td><td style=\"text-align:center\">2/23 (0.0870)</td></tr><tr><td>皇家护卫</td><td><a class=\"type-link\" href=\"decktypes/decktype-3cffb7876274.html?scope=2026%2F11%2F27\">テンタクルバイト型</a></td><td style=\"text-align:center\">4</td><td style=\"text-align:center\">6-3 (66.7%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-b1805a8f72cc.html?scope=2026%2F11%2F27\">土の理・ガレヲン型</a></td><td style=\"text-align:center\">3</td><td style=\"text-align:center\">0-3 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-af252e35bc8e.html?scope=2026%2F11%2F27\">決意の輝竜・アーサー型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">1/10 (0.1000)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-5c05f6859446.html?scope=2026%2F11%2F27\">单独构筑</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">1-2 (33.3%)</td><td style=\"text-align:center\">4/40 (0.1000)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-86df14050dbc.html?scope=2026%2F11%2F27\">セレスティアルスフィア・ミリカ型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">7/46 (0.1522)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-55f040e1e4f2.html?scope=2026%2F11%2F27\">ゴブリンクイーン型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">3/11 (0.2727)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-43c13988e7dd.html?scope=2026%2F11%2F27\">腐食の絶命型</a></td><td style=\"text-align:center\">2</td><td style=\"text-align:center\">0-2 (0.0%)</td><td style=\"text-align:center\">5/18 (0.2778)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-35a17534fcdf.html?scope=2026%2F11%2F27\">十天衆の頭目・シエテ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/23 (0.0435)</td></tr><tr><td>梦魇</td><td><a class=\"type-link\" href=\"decktypes/decktype-5455aa995916.html?scope=2026%2F11%2F27\">底無しの契約型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">3-0 (100.0%)</td><td style=\"text-align:center\">1/22 (0.0455)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-7fb8d134b089.html?scope=2026%2F11%2F27\">アクアフェアリー型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">2-1 (66.7%)</td><td style=\"text-align:center\">2/40 (0.0500)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-b1d9f1996219.html?scope=2026%2F11%2F27\">不屈の鋭刃・バザラガ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/23 (0.1739)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-41833720c765.html?scope=2026%2F11%2F27\">ジャンク型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/40 (0.1750)</td></tr><tr><td>精灵</td><td><a class=\"type-link\" href=\"decktypes/decktype-286c7213f0c8.html?scope=2026%2F11%2F27\">風の理・イーウィヤ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-01a9c87b3e48.html?scope=2026%2F11%2F27\">御伽の姫・アマリリス型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">2/11 (0.1818)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-db6d7b804f55.html?scope=2026%2F11%2F27\">空の命運を握る少女・ルリア型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1-1 (50.0%)</td><td style=\"text-align:center\">4/22 (0.1818)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-652eee32957a.html?scope=2026%2F11%2F27\">ティアマト・マグナ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">5/22 (0.2273)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-a236293509be.html?scope=2026%2F11%2F27\">レリックバスター・グラン＆ジータ型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">3/13 (0.2308)</td></tr><tr><td>巫师</td><td><a class=\"type-link\" href=\"decktypes/decktype-94167b7a93f2.html?scope=2026%2F11%2F27\">殲滅の歌声型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>主教</td><td><a class=\"type-link\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F11%2F27\">控教</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">6/22 (0.2727)</td></tr><tr><td>公主连结Re:Dive</td><td><a class=\"type-link\" href=\"decktypes/decktype-5aff6f126368.html?scope=2026%2F11%2F27\">いつか、また会う未来で型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">4/14 (0.2857)</td></tr><tr><td>グランブルーファンタジー</td><td><a class=\"type-link\" href=\"decktypes/decktype-3edd392becf2.html?scope=2026%2F11%2F27\">炎の理・ウィルナス型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">7/22 (0.3182)</td></tr><tr><td>龙族</td><td><a class=\"type-link\" href=\"decktypes/decktype-f1af5a020099.html?scope=2026%2F11%2F27\">天威のドラグーン型</a></td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0-1 (0.0%)</td><td style=\"text-align:center\">8/22 (0.3636)</td></tr>",
    "class_sections": "\n    <div class=\"class-section\" id=\"\">\n      <div class=\"class-header\" style=\"border-left:5px solid #888\">\n        <h2><span class=\"class-icon\">🎮</span> グランブルーファンタジー</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">46 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 20</span>\n          <span class=\"stat-pill percent\">54.8%</span>\n          <span class=\"stat-pill archetypes\">13 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"true\">收起</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-e4518755c716.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-105.jpg\" alt=\"生滅の技巧・ネハン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>生滅の技巧・ネハン型</b><em>9套 (19.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-1d73a16fabc1.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-SL19.jpg\" alt=\"どこにでもいるフツーの女の子・メグ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>どこにでもいるフツーの女の子・メグ型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-bd8fc996e1d2.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-039.jpg\" alt=\"水の理・ワムデュス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>水の理・ワムデュス型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-cd1153203ebb.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-SL03.jpg\" alt=\"風の理・イーウィヤ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>風の理・イーウィヤ型</b><em>8套 (17.4%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b1805a8f72cc.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-091.jpg\" alt=\"土の理・ガレヲン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>土の理・ガレヲン型</b><em>3套 (6.5%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5c05f6859446.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-U06.jpg\" alt=\"单独构筑核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>单独构筑</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-af252e35bc8e.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"決意の輝竜・アーサー型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>決意の輝竜・アーサー型</b><em>2套 (4.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-35a17534fcdf.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"十天衆の頭目・シエテ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>十天衆の頭目・シエテ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-b1d9f1996219.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-079.jpg\" alt=\"不屈の鋭刃・バザラガ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>不屈の鋭刃・バザラガ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-db6d7b804f55.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-107.jpg\" alt=\"空の命運を握る少女・ルリア型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>空の命運を握る少女・ルリア型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-652eee32957a.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-061.jpg\" alt=\"ティアマト・マグナ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ティアマト・マグナ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-a236293509be.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/PR-638.jpg\" alt=\"レリックバスター・グラン＆ジータ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>レリックバスター・グラン＆ジータ型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-3edd392becf2.html?scope=2026%2F11%2F27\" style=\"border-color:#888\"><img src=\"../../assets/cards/thumbs/CP05-056.jpg\" alt=\"炎の理・ウィルナス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>炎の理・ウィルナス型</b><em>1套 (2.2%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"龙族\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e67e22\">\n        <h2><span class=\"class-icon\">🐉</span> 龙族</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">10 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 3</span>\n          <span class=\"stat-pill percent\">11.9%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-7c5c37ec9710.html?scope=2026%2F11%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/SP01-SP18.jpg\" alt=\"侮蔑の炎爪型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>侮蔑の炎爪型</b><em>9套 (90.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-f1af5a020099.html?scope=2026%2F11%2F27\" style=\"border-color:#e67e22\"><img src=\"../../assets/cards/thumbs/BP16-057.jpg\" alt=\"天威のドラグーン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>天威のドラグーン型</b><em>1套 (10.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"皇家护卫\">\n      <div class=\"class-header\" style=\"border-left:5px solid #3498db\">\n        <h2><span class=\"class-icon\">⚔️</span> 皇家护卫</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">9 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 6</span>\n          <span class=\"stat-pill percent\">10.7%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-8ff5ae7f9a02.html?scope=2026%2F11%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP09-SL06.jpg\" alt=\"胜利皇核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>胜利皇</b><em>5套 (55.6%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-3cffb7876274.html?scope=2026%2F11%2F27\" style=\"border-color:#3498db\"><img src=\"../../assets/cards/thumbs/BP16-026.jpg\" alt=\"テンタクルバイト型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>テンタクルバイト型</b><em>4套 (44.4%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"主教\">\n      <div class=\"class-header\" style=\"border-left:5px solid #f1c40f\">\n        <h2><span class=\"class-icon\">⛪</span> 主教</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">6 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">7.1%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-b9c3d7da07ee.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/PR-415.jpg\" alt=\"节奏教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>节奏教</b><em>5套 (83.3%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-da0c322184a8.html?scope=2026%2F11%2F27\" style=\"border-color:#f1c40f\"><img src=\"../../assets/cards/thumbs/BP15-SL24.jpg\" alt=\"控教核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>控教</b><em>1套 (16.7%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"精灵\">\n      <div class=\"class-header\" style=\"border-left:5px solid #27ae60\">\n        <h2><span class=\"class-icon\">🍃</span> 精灵</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">5 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 2</span>\n          <span class=\"stat-pill percent\">6.0%</span>\n          <span class=\"stat-pill archetypes\">4 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-43c13988e7dd.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP20-SL02.jpg\" alt=\"腐食の絶命型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>腐食の絶命型</b><em>2套 (40.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-7fb8d134b089.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/SCS01-001.jpg\" alt=\"アクアフェアリー型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>アクアフェアリー型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-41833720c765.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/BP21-SL02.jpg\" alt=\"ジャンク型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ジャンク型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-286c7213f0c8.html?scope=2026%2F11%2F27\" style=\"border-color:#27ae60\"><img src=\"../../assets/cards/thumbs/PR-483.jpg\" alt=\"風の理・イーウィヤ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>風の理・イーウィヤ型</b><em>1套 (20.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"巫师\">\n      <div class=\"class-header\" style=\"border-left:5px solid #9b59b6\">\n        <h2><span class=\"class-icon\">🔮</span> 巫师</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">4 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">4.8%</span>\n          <span class=\"stat-pill archetypes\">3 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-86df14050dbc.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP13-040.jpg\" alt=\"セレスティアルスフィア・ミリカ型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>セレスティアルスフィア・ミリカ型</b><em>2套 (50.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-01a9c87b3e48.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP21-041.jpg\" alt=\"御伽の姫・アマリリス型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>御伽の姫・アマリリス型</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-94167b7a93f2.html?scope=2026%2F11%2F27\" style=\"border-color:#9b59b6\"><img src=\"../../assets/cards/thumbs/BP15-039.jpg\" alt=\"殲滅の歌声型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>殲滅の歌声型</b><em>1套 (25.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"梦魇\">\n      <div class=\"class-header\" style=\"border-left:5px solid #2c3e50\">\n        <h2><span class=\"class-icon\">💀</span> 梦魇</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">3 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 1</span>\n          <span class=\"stat-pill percent\">3.6%</span>\n          <span class=\"stat-pill archetypes\">2 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-55f040e1e4f2.html?scope=2026%2F11%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP15-SL29.jpg\" alt=\"ゴブリンクイーン型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>ゴブリンクイーン型</b><em>2套 (66.7%)</em><span>点击查看卡组详情</span></span></a><a class=\"archetype-tag\" href=\"decktypes/decktype-5455aa995916.html?scope=2026%2F11%2F27\" style=\"border-color:#2c3e50\"><img src=\"../../assets/cards/thumbs/BP14-072.jpg\" alt=\"底無しの契約型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>底無しの契約型</b><em>1套 (33.3%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>\n    <div class=\"class-section is-collapsed\" id=\"公主连结ReDive\">\n      <div class=\"class-header\" style=\"border-left:5px solid #e91e63\">\n        <h2><span class=\"class-icon\">💎</span> 公主连结Re:Dive</h2>\n        <div class=\"class-stats\">\n          <span class=\"stat-pill\">1 套卡组</span>\n          <span class=\"stat-pill top10\">前10%: 0</span>\n          <span class=\"stat-pill percent\">1.2%</span>\n          <span class=\"stat-pill archetypes\">1 种卡组</span>\n          <button class=\"toggle-btn\" type=\"button\" aria-expanded=\"false\">展开</button>\n        </div>\n      </div>\n      <div class=\"class-content\">\n        <div class=\"archetype-summary\"><a class=\"archetype-tag\" href=\"decktypes/decktype-5aff6f126368.html?scope=2026%2F11%2F27\" style=\"border-color:#e91e63\"><img src=\"../../assets/cards/thumbs/PCS01-001.jpg\" alt=\"いつか、また会う未来で型核心卡\" loading=\"lazy\" decoding=\"async\"><span class=\"archetype-tag-body\"><b>いつか、また会う未来で型</b><em>1套 (100.0%)</em><span>点击查看卡组详情</span></span></a></div>\n      </div>\n    </div>",
    "nav_links": "<a href=\"#\"> グランブルーファンタジー</a><a href=\"#龙族\">🐉 龙族</a><a href=\"#皇家护卫\">⚔️ 皇家护卫</a><a href=\"#主教\">⛪ 主教</a><a href=\"#精灵\">🍃 精灵</a><a href=\"#巫师\">🔮 巫师</a><a href=\"#梦魇\">💀 梦魇</a><a href=\"#公主连结ReDive\">💎 公主连结Re:Dive</a>"
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