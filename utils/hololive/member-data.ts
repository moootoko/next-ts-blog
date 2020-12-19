type Designer = {
  name: string,
  twitter: string,
  homepage?: string
}

export type MemberContent = {
  name: string,
  kana: string,
  oshiEmoji: string,
  birthday: string,
  debut: string,
  youtubeChannel: {
    id: string,
    name: string,
  },
  twitter: {
    id: string,
    name: string,
    tags: {
      [type: string]: string | string[]
    }
  },
  song: string,
  clips: string[],
  designer: {
    _2d: {
      default: Designer | Designer[],
      live2d?: Designer | Designer[],
    }
    _3d?: {
      default: Designer,
      ver2?: Designer,
    },
  }
}

type HoloMember = {
  [key: string]: MemberContent
};

const holoMember: HoloMember = {
  'HoshimachiSuisei': {
    name: '星街すいせい',
    kana: 'ほしまちすいせい',
    oshiEmoji: '☄️',
    birthday: '03/22',
    debut: '2018/03/22',
    youtubeChannel: {
      id: 'UC5CwaMl1eIgY8h02uZw7u8A',
      name: 'Suisei Channel',
    },
    twitter: {
      id: 'suisei_hosimati',
      name: '星街すいせい☄️',
      tags: {
        '一般': '星街すいせい',
        'ファンアート': 'ほしまちぎゃらりー',
        '生放送': 'ほしまちすたじお',
        'ファンネーム': '星詠み',
        '歌ってみた': 'ほしまちうたった',
        'ボイス感想': 'ほしまちりっすん',
      },
    },
    song: '_8eUrkYNnLY',
    clips: ['_8eUrkYNnLY', 'WQeu3TRtm9o', 'gFRZQ1HwqBs', 'NraFKiafr8I'],
    designer: {
      _2d: {
        default: [
          {
            name: '星街すいせい',
            twitter: 'suisei_hosimati',
          },
          {
            name: '手島nari',
            twitter: '_17meisai23',
          }
        ],
        live2d: {
          name: 'rariemonn',
          twitter: 'rariemonn765',
          homepage: 'https://rariemonn.wixsite.com/website'
        },
      },
      _3d: {
        default: {
          name: '八剣',
          twitter: 'yatsurugi_mmd',
          homepage: 'https://nanodes.jp/',
        },
      },
    },
  },
  'Robocosan': {
    name: 'ロボ子さん',
    kana: 'ろぼこさん',
    oshiEmoji: '🤖',
    birthday: '05/23',
    debut: '2018/03/04',
    youtubeChannel: {
      id: 'UCDqI2jOz0weumE8s7paEk6g',
      name: 'Roboco Ch. - ロボ子',
    },
    twitter: {
      id: 'robocosan',
      name: 'ロボ子さん🤖',
      tags: {
        '一般': 'ロボ子さん',
        '公式': 'robo_co',
        'ファンアート': 'ロボ子Art',
        '生放送': 'ロボ子生放送',
        'ファンネーム': 'ろぼさー',
        '予定': 'ロボジュール',
        'ボイス感想': '聴いたよロボ子さん',
      },
    },
    song: 'fY1CQ5kSRxY',
    clips: ['fY1CQ5kSRxY', 'bFSzljEMydg', 'Hhc1DahaRSg', 'TTBz820stS0'],
    designer: {
      _2d: {
        default: {
          name: 'kuromaru9',
          twitter: 'suisei_hosimati',
        },
      },
      _3d: {
        default: {
          name: 'kuromaru9',
          twitter: 'kuromaru9',
          homepage: 'https://www.pixiv.net/users/6472'
        },
      },
    },
  },
  'TokinoSora': {
    name: 'ときのそら',
    kana: 'ときのそら',
    oshiEmoji: '🐻',
    birthday: '05/15',
    debut: '2017/09/07',
    youtubeChannel: {
      id: 'UCp6993wxpyDPHUpavwDFqgg',
      name: 'SoraCh. ときのそらチャンネル',
    },
    twitter: {
      id: 'tokino_sora',
      name: 'ときのそら🐻',
      tags: {
        '一般': 'ときのそら',
        'ファンアート': 'soraArt',
        '生放送': 'ときのそら生放送',
        '楽曲感想': 'ときのそら聴いたよ',
        '書籍感想': 'ときのそら読んだよ',
        'ボイス感想': 'ときのそら聞いたよ',
        'ホロリー': 'ときのそら撮ったよ',
        '実況動画': 'ときのそら実況するってよ',
      },
    },
    song: 'NT6Pf28eCgQ',
    clips: ['NT6Pf28eCgQ', 'dH0eSrwHF9o', '3ekVHzjfSCQ', 'oDzugRtW2gw'],
    designer: {
      _2d: {
        default: [
          {
            name: 'いかき',
            twitter: 'I_ecakhi',
            homepage: 'https://www.pixiv.net/users/9412994',
          },
          {
            name: 'おるだん',
            twitter: 'ordan',
            homepage: 'https://www.pixiv.net/users/9427',
          },
        ]
      },
      _3d: {
        default: {
          name: 'schwarz',
          twitter: 'schwarz_blk',
        },
      },
    },
  },
  'SakuraMiko': {
    name: 'さくらみこ',
    kana: 'さくらみこ',
    oshiEmoji: '🌸',
    birthday: '03/05',
    debut: '2018/08/01',
    youtubeChannel: {
      id: 'UC-hM6YJuNYVAmUWxeIr9FeA',
      name: 'Miko Ch. さくらみこ',
    },
    twitter: {
      id: 'sakuramiko35',
      name: 'さくらみこ🌸',
      tags: {
        '一般': 'さくらみこ',
        'ファンアート': 'miko_Art',
        '生放送': 'みこなま',
        'スケジュール': ['みこちゅーる', 'みこじゅーる'],
        'ファンネーム': ['みこぴー', '35P'],
        '切り抜き': 'ミコミコ動画',
        'ボイス感想': 'みこきいたぞ',
      },
    },
    song: 'X9zw0QF12Kc',
    clips: ['X9zw0QF12Kc', 'WqWqN10biP8', 'f2LPs6JBbjw', 'GSvtZqD-ZeM'],
    designer: {
      _2d: {
        default: [
          {
            name: '太古の月',
            twitter: 'taikonotuki13',
          },
          {
            name: 'おるだん',
            twitter: 'ordan',
            homepage: 'https://www.pixiv.net/users/9427',
          },
        ],
      },
      _3d: {
        default: {
          name: 'schwarz',
          twitter: 'schwarz_blk',
        },
      },
    },
  },
  'AkaiHaato': {
    name: '赤井はあと',
    kana: 'あかいはあと',
    oshiEmoji: '❤️',
    birthday: '08/10',
    debut: '2018/06/02',
    youtubeChannel: {
      id: 'UC1CfXB_kRs3C-zaeTG3oGyg',
      name: 'Haachama Ch. 赤井はあと',
    },
    twitter: {
      id: 'akaihaato',
      name: '赤井はあと❤️',
      tags: {
        '一般': ['赤井はあと', 'はあちゃま', 'HAACHAMA'],
        'ファンアート': 'はあとart',
        '生放送': 'はあちゃまなう',
        'ファンネーム': 'はあとん',
        '切り抜き': 'ここ好きはあと様',
        'ボイス感想': 'はあと様ボイス',
        'MMD': 'はあちゃまMMD'
      },
    },
    song: 'NvOHijJqups',
    clips: ['NvOHijJqups', 'c001nMFyex8', 'rC99t6VjrgY', ''],
    designer: {
      _2d: {
        default: {
          name: 'はる雪',
          twitter: 'taikonotuki13',
        },
        live2d: [
          {
            name: 'おるだん',
            twitter: 'ordan',
            homepage: 'https://www.pixiv.net/users/9427',
          },
          {
            name: '入江燈',
            twitter: 'tou_ilie',
            homepage: 'https://touilie.tumblr.com/'
          },
        ],
      },
      _3d: {
        default: {
          name: 'ぽんぷ長',
          twitter: 'paint002',
        },
      },
    },
  },
};

export default holoMember;