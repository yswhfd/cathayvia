export const exchangeRate = 0.14

export const formatPrice = (value, locale) => {
  if (locale === 'en') {
    return `$${Math.round(value * exchangeRate).toLocaleString('en-US')}`
  }

  return `¥${value.toLocaleString('zh-CN')}`
}

const beijingCultureGallery = {
  zh: [
    { src: '/routes/beijing-forbidden-city.jpg', alt: '故宫经典景观' },
    { src: '/routes/beijing-jingshan.jpg', alt: '景山公园城市视角' },
    { src: '/hero/forbidden-city.jpg', alt: '北京中轴景观' }
  ],
  en: [
    { src: '/routes/beijing-forbidden-city.jpg', alt: 'Forbidden City view' },
    { src: '/routes/beijing-jingshan.jpg', alt: 'Jingshan Park skyline view' },
    { src: '/hero/forbidden-city.jpg', alt: 'Beijing central axis atmosphere' }
  ]
}

const beijingWallGallery = {
  zh: [
    { src: '/hero/great-wall-mutianyu.jpg', alt: '慕田峪长城全景' },
    { src: '/routes/beijing-great-wall-1.jpg', alt: '长城经典山脊景观' },
    { src: '/hero/great-wall-mutianyu.jpg', alt: '长城旅行氛围图' }
  ],
  en: [
    { src: '/hero/great-wall-mutianyu.jpg', alt: 'Mutianyu Great Wall panorama' },
    { src: '/routes/beijing-great-wall-1.jpg', alt: 'Great Wall ridge view' },
    { src: '/hero/great-wall-mutianyu.jpg', alt: 'Great Wall journey mood' }
  ]
}

const qingdaoCoastGallery = {
  zh: [
    { src: '/hero/qingdao-zhanqiao.jpg', alt: '栈桥海岸景观' },
    { src: '/routes/qingdao-zhanqiao.jpg', alt: '青岛栈桥经典视角' },
    { src: '/routes/qingdao-badaguan.jpg', alt: '八大关街区景观' }
  ],
  en: [
    { src: '/hero/qingdao-zhanqiao.jpg', alt: 'Zhanqiao coast view' },
    { src: '/routes/qingdao-zhanqiao.jpg', alt: 'Qingdao pier classic view' },
    { src: '/routes/qingdao-badaguan.jpg', alt: 'Badaguan district scene' }
  ]
}

const qingdaoFamilyGallery = {
  zh: [
    { src: '/hero/qingdao-zhanqiao.jpg', alt: '青岛海边假期景观' },
    { src: '/routes/qingdao-badaguan.jpg', alt: '青岛街区与海风景观' },
    { src: '/routes/qingdao-zhanqiao.jpg', alt: '青岛城市海岸经典视角' }
  ],
  en: [
    { src: '/hero/qingdao-zhanqiao.jpg', alt: 'Qingdao seaside holiday view' },
    { src: '/routes/qingdao-badaguan.jpg', alt: 'Qingdao district and coast view' },
    { src: '/routes/qingdao-zhanqiao.jpg', alt: 'Qingdao coastal city classic view' }
  ]
}

export const siteContent = {
  locales: ['zh', 'en'],
  brand: {
    name: '行迹中国',
    englishName: 'CathayVia China Travel',
    slogan: {
      zh: '把国内旅行建议做得更懂目的地，也更懂你。',
      en: 'City journeys across China, shaped with local rhythm and travel fit.'
    }
  },
  heroSlides: [
    {
      id: 'forbidden-city',
      title: { zh: '故宫与北京中轴线', en: 'Forbidden City and the Beijing axis' },
      image: '/hero/forbidden-city.jpg'
    },
    {
      id: 'great-wall',
      title: { zh: '慕田峪长城山脊', en: 'Great Wall at Mutianyu' },
      image: '/hero/great-wall-mutianyu.jpg'
    },
    {
      id: 'qingdao-zhanqiao',
      title: { zh: '青岛栈桥与海岸线', en: 'Qingdao pier and coastline' },
      image: '/hero/qingdao-zhanqiao.jpg'
    }
  ],
  navigation: {
    links: {
      zh: [
        { label: '精选线路', href: '#routes' },
        { label: '出行场景', href: '#scenes' },
        { label: '服务亮点', href: '#services' },
        { label: '联系我们', href: '#contact' }
      ],
      en: [
        { label: 'Routes', href: '#routes' },
        { label: 'Scenes', href: '#scenes' },
        { label: 'Why us', href: '#services' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    action: {
      zh: { label: '预约顾问', href: '#contact' },
      en: { label: 'Plan my trip', href: '#contact' }
    }
  },
  hero: {
    eyebrow: { zh: '中国城市灵感之旅', en: 'CHINA CITY ESCAPES' },
    title: {
      zh: '在北京的厚重与青岛的海风之间，找到刚好适合你的旅程。',
      en: 'Find the trip that fits you between Beijing depth and Qingdao sea breeze.'
    },
    description: {
      zh: '我们把北京故宫与长城的经典动线、青岛海岸与街区的轻松节奏整理成更好下决定的城市旅行方案，不论你偏好社交游、亲子游、银发游、自由行还是跟团游，都能更快找到适合的出发方式。',
      en: 'We shape Beijing’s Forbidden City and Great Wall routes together with Qingdao’s coast and neighborhoods into city trips that are easier to choose, whether you prefer social trips, family travel, senior-friendly pacing, independent journeys, or guided groups.'
    },
    badges: {
      zh: ['故宫、长城与青岛海边实景路线', '社交游 / 亲子游 / 银发游 / 自由行 / 跟团游', '中英双语顾问式推荐'],
      en: ['Forbidden City, Great Wall, and Qingdao coast routes', 'Social, family, senior, independent, and group trips', 'Bilingual route guidance']
    },
    primaryAction: {
      zh: { label: '查看热门线路', href: '#routes' },
      en: { label: 'Browse routes', href: '#routes' }
    },
    secondaryAction: {
      zh: { label: '看看适合谁去', href: '#services' },
      en: { label: 'See travel styles', href: '#services' }
    },
    stats: {
      zh: [
        { value: '2城', label: '双城旅行气质', detail: '北京的厚度，青岛的松弛' },
        { value: '5类', label: '出行方式', detail: '社交、亲子、银发、自由、跟团' },
        { value: '4条', label: '精选线路', detail: '按节奏和同行方式灵活挑选' }
      ],
      en: [
        { value: '2 cities', label: 'Two travel moods', detail: 'Beijing depth, Qingdao ease' },
        { value: '5 styles', label: 'Trip formats', detail: 'Social, family, senior, independent, group' },
        { value: '4 routes', label: 'Curated itineraries', detail: 'Picked by pace and who you travel with' }
      ]
    },
    videoCard: {
      title: {
        zh: '先看一段城市旅程的氛围',
        en: 'Start with the feel of the journey'
      },
      description: {
        zh: '从城墙晨光到海岸晚风，先用一段影像感受目的地，再决定更适合你的线路。',
        en: 'From dawn walls to seaside evenings, use the video to feel the destination before choosing your route.'
      },
      floatingTitle: {
        zh: '正在播放旅程短片',
        en: 'Journey film playing'
      },
      closeLabel: {
        zh: '关闭浮窗',
        en: 'Close floating player'
      },
      filePath: '/media/site-promo.mp4'
    }
  },
  planner: {
    kicker: { zh: '快速定位路线', en: 'TRIP STARTER' },
    title: { zh: '30 秒找到你的出行方向', en: 'Find your trip direction in 30 seconds' },
    fields: {
      zh: [
        { label: '想要的季节', value: '春秋故宫 / 长城晴日 / 夏日海风' },
        { label: '适合的人群', value: '社交游 / 亲子游 / 银发游 / 自由行 / 跟团游' },
        { label: '偏爱的节奏', value: '轻松结伴 / 舒缓省心 / 灵活自选' },
        { label: '预算参考', value: '¥3,000 - ¥8,000+' }
      ],
      en: [
        { label: 'Preferred season', value: 'Forbidden City spring / Great Wall clear days / summer coast' },
        { label: 'Traveler type', value: 'Social / family / senior / independent / group' },
        { label: 'Pacing', value: 'Shared energy / easier flow / flexible timing' },
        { label: 'Budget guide', value: '$420 - $1,120+' }
      ]
    },
    tip: {
      zh: '先感受城市气质，再用筛选器把路线缩小到更适合你的那几条。',
      en: 'Feel the city mood first, then narrow the routes to the few that match your travel style.'
    },
    cta: {
      zh: { label: '跳到联系顾问', href: '#contact' },
      en: { label: 'Talk to an advisor', href: '#contact' }
    }
  },
  routesSection: {
    eyebrow: { zh: '双城精选线路', en: 'CURATED CITY ROUTES' },
    title: {
      zh: '一边是北京的人文与山色，一边是青岛的海风与假期感。',
      en: 'Beijing heritage and mountain ridges meet Qingdao sea breeze and holiday ease.'
    },
    intro: {
      zh: '你可以先按同行方式来挑选线路：社交游更看重互动氛围，自由行更强调灵活节奏，亲子游、银发游与跟团游则更关注省心度、舒适度和行程衔接。',
      en: 'Start by choosing how you want to travel: social trips favor shared energy, independent travel keeps more flexibility, while family, senior, and group trips put more weight on comfort, ease, and smoother scheduling.'
    },
    searchLabel: { zh: '关键词搜索', en: 'Keyword search' },
    searchPlaceholder: {
      zh: '搜索城市、景点、标签或线路名',
      en: 'Search cities, landmarks, tags, or route names'
    },
    filterAriaLabel: { zh: '旅行方式筛选', en: 'Travel style filters' },
    budgetTitle: { zh: '预算上限', en: 'Budget cap' },
    budgetDescription: {
      zh: '仅展示预算不高于当前阈值的线路，价格会有波动，仅供参考，请以实际报价为准。',
      en: 'Show only routes priced below the current threshold. Prices may change and are for reference only; please confirm the final quote.'
    },
    budgetHint: {
      zh: '预算为单人参考价，可以先按预算筛选，再结合旅行方式缩小选择范围。',
      en: 'Prices are shown as per-person references. Narrow by budget first, then refine by travel style.'
    },
    empty: {
      zh: '当前筛选条件下没有匹配线路，可以放宽预算上限或切换旅行方式试试。',
      en: 'No routes match these filters. Try increasing the budget cap or switching travel styles.'
    },
    sceneLabelTitle: { zh: '适合方式', en: 'Best for' },
    budgetLabel: { zh: '预算', en: 'Price' },
    seasonLabel: { zh: '推荐季节', en: 'Best season' }
  },
  featuredRoutes: [
    {
      id: 'beijing-axis-culture',
      scenes: ['senior', 'group'],
      title: { zh: '北京中轴文化深游', en: 'Beijing central axis culture route' },
      region: {
        zh: '故宫 / 景山 / 钟鼓楼 / 什刹海 / 前门',
        en: 'Forbidden City / Jingshan / Drum Tower / Shichahai / Qianmen'
      },
      duration: { zh: '4天3晚', en: '4D3N' },
      budgetValue: 4380,
      rating: '4.9',
      season: { zh: '3 - 5 月 / 9 - 11 月', en: 'Mar - May / Sep - Nov' },
      summary: {
        zh: '适合第一次到北京、希望用更连贯的步行与文化动线理解城市的人群，也适合长辈同行与省心型出行安排。',
        en: 'Best for first-time Beijing visitors who want a coherent cultural walk through the city core, with a pace that also works well for senior travelers and guided planning.'
      },
      highlights: {
        zh: ['中轴文化密度高', '行程节奏相对平稳', '适合长辈或省心型安排行程'],
        en: ['High heritage density', 'More even daily pacing', 'Works for seniors or lower-effort planning']
      },
      tags: {
        zh: ['北京', '故宫', '银发游', '跟团游'],
        en: ['Beijing', 'Forbidden City', 'senior', 'group']
      },
      gallery: beijingCultureGallery,
      accent: { from: '#5d2e1f', to: '#b5653c', glow: '#e6b17e' }
    },
    {
      id: 'beijing-greatwall-photo',
      scenes: ['social', 'independent'],
      title: { zh: '北京长城秋色摄影线', en: 'Beijing Great Wall photo route' },
      region: {
        zh: '慕田峪 / 古北口 / 山间观景点 / 日落机位',
        en: 'Mutianyu / Gubeikou / ridge viewpoints / sunset spots'
      },
      duration: { zh: '3天2晚', en: '3D2N' },
      budgetValue: 5120,
      rating: '4.8',
      season: { zh: '9 - 11 月', en: 'Sep - Nov' },
      summary: {
        zh: '把长城山脊、红叶时段和摄影机位整合成更明确的短线方案，适合朋友结伴出发，也适合喜欢自己掌握节奏的人。',
        en: 'A focused short route built around ridge views, autumn color, and clean shooting windows for friends traveling together or travelers who want to set their own pace.'
      },
      highlights: {
        zh: ['山脊层次突出', '适合结伴周末短线', '日出日落氛围强'],
        en: ['Layered ridge views', 'Great for social weekend trips', 'Strong sunrise and sunset mood']
      },
      tags: {
        zh: ['北京', '长城', '社交游', '自由行'],
        en: ['Beijing', 'Great Wall', 'social', 'independent']
      },
      gallery: beijingWallGallery,
      accent: { from: '#4f2d1f', to: '#9d5c3d', glow: '#f2c078' }
    },
    {
      id: 'qingdao-coast-romance',
      scenes: ['social', 'independent'],
      title: { zh: '青岛海岸漫游假期', en: 'Qingdao coastal escape' },
      region: {
        zh: '栈桥 / 八大关 / 小鱼山 / 石老人海岸',
        en: 'Zhanqiao / Badaguan / Xiaoyushan / Shilaoren coast'
      },
      duration: { zh: '4天3晚', en: '4D3N' },
      budgetValue: 3860,
      rating: '4.8',
      season: { zh: '4 - 6 月 / 9 - 10 月', en: 'Apr - Jun / Sep - Oct' },
      summary: {
        zh: '适合朋友同行或城市漫游型旅客，把海风、红瓦和慢节奏假期感打包到一起，也保留较高的自由度。',
        en: 'Ideal for social city breaks and travelers who want a freer pace, combining sea breeze, red-roof views, and a slower holiday rhythm.'
      },
      highlights: {
        zh: ['海岸线体验完整', '老城氛围鲜明', '适合轻松拍照与自由停留'],
        en: ['Complete coast feel', 'Distinct old-town mood', 'Easy for photos and flexible stops']
      },
      tags: {
        zh: ['青岛', '海边', '社交游', '自由行'],
        en: ['Qingdao', 'coast', 'social', 'independent']
      },
      gallery: qingdaoCoastGallery,
      accent: { from: '#0d4f6d', to: '#3a86a0', glow: '#ffd166' }
    },
    {
      id: 'qingdao-family-ocean',
      scenes: ['family', 'group'],
      title: { zh: '青岛亲子海洋轻假期', en: 'Qingdao family ocean break' },
      region: {
        zh: '海昌极地 / 奥帆中心 / 第二海水浴场 / 啤酒博物馆周边',
        en: 'Polar Ocean World / Olympic Sailing Center / No.2 Beach / Beer Museum area'
      },
      duration: { zh: '4天3晚', en: '4D3N' },
      budgetValue: 4280,
      rating: '4.7',
      season: { zh: '5 - 10 月', en: 'May - Oct' },
      summary: {
        zh: '更偏向亲子与轻松型家庭，把海洋体验、海边活动和城市便利度结合起来，也适合希望少操心的成团出行。',
        en: 'Built for families seeking marine attractions, breezy seafront time, and city convenience, while also fitting travelers who prefer a more guided group format.'
      },
      highlights: {
        zh: ['车程相对友好', '亲子内容集中', '适合家庭和省心型出行'],
        en: ['Relatively easy transfers', 'Family-focused stops', 'Works for family and lower-effort group travel']
      },
      tags: {
        zh: ['青岛', '亲子游', '海洋', '跟团游'],
        en: ['Qingdao', 'family', 'ocean', 'group']
      },
      gallery: qingdaoFamilyGallery,
      accent: { from: '#16697a', to: '#489fb5', glow: '#f4d35e' }
    }
  ],
  scenesSection: {
    eyebrow: { zh: '出行方式', en: 'TRAVEL STYLES' },
    title: { zh: '按同行方式挑北京 / 青岛线路', en: 'Pick Beijing or Qingdao routes by travel style' },
    intro: {
      zh: '虽然城市收束到两座，但路线节奏会随着同行人群和出发方式明显不同。',
      en: 'The destination set stays focused, but the route rhythm changes noticeably depending on who you travel with and how you want the trip to feel.'
    },
    items: [
      {
        id: 'social',
        label: { zh: '社交游', en: 'Social trips' },
        audience: { zh: '朋友结伴 / 小团队出发', en: 'Friends / small groups' },
        description: {
          zh: '更强调互动感、合照点位和一起出发时的轻松氛围。',
          en: 'Built for shared energy, easy group moments, and stops that work well when traveling together.'
        },
        metric: { zh: '热闹 + 互动', en: 'Shared + lively' },
        accent: '#d17b88'
      },
      {
        id: 'family',
        label: { zh: '亲子游', en: 'Family trips' },
        audience: { zh: '家庭同行 / 假期轻松出发', en: 'Family travel / easier holidays' },
        description: {
          zh: '优先考虑交通便利、活动强度和小朋友的参与感。',
          en: 'Prioritizes transfer ease, manageable activity levels, and child-friendly participation.'
        },
        metric: { zh: '轻松 + 安心', en: 'Easy + family' },
        accent: '#7c9885'
      },
      {
        id: 'senior',
        label: { zh: '银发游', en: 'Senior trips' },
        audience: { zh: '长辈同行 / 节奏舒缓', en: 'Senior travelers / gentler pace' },
        description: {
          zh: '更看重舒适度、经典景点可达性和减少高强度转场。',
          en: 'Focuses on comfort, easy access to classic sights, and fewer high-effort transitions.'
        },
        metric: { zh: '舒缓 + 省力', en: 'Gentle + steady' },
        accent: '#8b7fb1'
      },
      {
        id: 'independent',
        label: { zh: '自由行', en: 'Independent trips' },
        audience: { zh: '喜欢自主安排 / 灵活停留', en: 'Self-planned / flexible pacing' },
        description: {
          zh: '适合想自己掌握节奏、保留停留弹性和路线自由度的人。',
          en: 'Best for travelers who want to control the pace, keep flexible stops, and shape the route themselves.'
        },
        metric: { zh: '灵活 + 自主', en: 'Flexible + free' },
        accent: '#587291'
      },
      {
        id: 'group',
        label: { zh: '跟团游', en: 'Group trips' },
        audience: { zh: '首次出发 / 希望省心', en: 'First-time planning / lower effort' },
        description: {
          zh: '适合希望行程更清晰、衔接更省心、减少自己做攻略负担的人。',
          en: 'Great for travelers who want clearer schedules, smoother coordination, and less planning work on their own.'
        },
        metric: { zh: '省心 + 高效', en: 'Guided + easy' },
        accent: '#b86462'
      }
    ]
  },
  servicesSection: {
    eyebrow: { zh: '旅行方式概览', en: 'HOW THESE TRIPS FEEL' },
    title: {
      zh: '不同的人去同一座城市，也该拥有不同的打开方式。',
      en: 'The same city should open up differently for different travelers.'
    },
    intro: {
      zh: '无论你想在北京读懂历史脉络，还是想在青岛把假期过得更轻松，这些路线都围绕真实的旅行方式来组织，而不是简单堆砌景点。',
      en: 'Whether you want to read history through Beijing or slow down through Qingdao, these routes are organized around how the trip should work for you, not just how many sights can be packed in.'
    },
    items: [
      {
        title: { zh: '按同行方式匹配节奏', en: 'Pace each route by who travels with you' },
        description: {
          zh: '社交游更看重互动和气氛，亲子游与银发游则更看重舒适度、便利度和停留节奏。',
          en: 'Social trips lean into shared energy, while family and senior travel put more emphasis on comfort, ease, and stop pacing.'
        },
        metric: { zh: '按人群定节奏', en: 'Paced by traveler type' }
      },
      {
        title: { zh: '在自由度和省心度之间给出选择', en: 'Offer a clear range from freedom to convenience' },
        description: {
          zh: '自由行保留更多自主安排空间，跟团游则把路线衔接和出发效率放在更前面。',
          en: 'Independent trips leave more room for self-directed planning, while group trips move smoother coordination and convenience higher up the list.'
        },
        metric: { zh: '灵活到省心', en: 'Flexible to guided' }
      },
      {
        title: { zh: '让经典景点和真实体验同时成立', en: 'Balance landmark classics with real trip feel' },
        description: {
          zh: '从故宫、长城到青岛海边，重点不是堆景点数量，而是让线路真的适合你的出发方式。',
          en: 'From the Forbidden City and Great Wall to the Qingdao coast, the goal is not counting sights but making the route genuinely fit the way you travel.'
        },
        metric: { zh: '景点 + 体验', en: 'Landmarks + feel' }
      }
    ],
    aside: {
      title: { zh: '你也可以这样理解', en: 'You can also think about these trips this way' },
      points: {
        zh: ['社交游和自由行，想保留更多互动与节奏自由', '亲子游和银发游，更重视舒适度与出行省力', '跟团游，希望路线衔接清晰、少做攻略也能顺利出发'],
        en: ['social and independent trips, when you want more shared moments or more control', 'family and senior trips, when comfort and easier movement matter more', 'group trips, when you want clearer coordination with less planning effort']
      }
    }
  },
  contact: {
    eyebrow: { zh: '联系我们', en: 'CONTACT US' },
    title: {
      zh: '联系路线顾问，把双城旅行方案变成可出发的行程。',
      en: 'Talk to an advisor and turn these two-city ideas into a real departure plan.'
    },
    intro: {
      zh: '如果你已经对北京的人文或青岛的海风有了偏爱，现在就把偏好交给顾问继续细化。',
      en: 'If you already know whether you lean toward Beijing depth or Qingdao sea breeze, the next step is to let an advisor refine it with you.'
    },
    advisorName: 'CathayVia China Travel',
    role: {
      zh: '中国城市路线顾问',
      en: 'China city route advisor'
    },
    coverImage: '/contact/consultant-visual.svg',
    qrImage: '/contact/wechat-qr.svg',
    note: {
      zh: '支持北京 / 青岛城市首访、社交游、亲子游、银发游、自由行、跟团游与品牌合作咨询。',
      en: 'Available for first-time Beijing and Qingdao trips, social travel, family breaks, senior-friendly routes, independent journeys, group trips, and collaboration requests.'
    },
    tips: {
      zh: {
        primary: '如果你已经确定偏好，我们可以继续按出行方式、季节和预算缩小到更适合的线路。',
        secondary: '也可以直接说明你更偏向社交游、亲子游、银发游、自由行还是跟团游。'
      },
      en: {
        primary: 'If you already know your preference, we can narrow the options further by travel style, season, and budget.',
        secondary: 'You can also tell us directly whether you lean toward social, family, senior, independent, or group travel.'
      }
    },
    tags: {
      zh: ['Telegram 咨询', 'WhatsApp 联系', 'Instagram 浏览', '电话沟通'],
      en: ['Telegram', 'WhatsApp', 'Instagram', 'Phone call']
    },
    fields: {
      zh: [
        { label: 'Telegram', value: '+86 185-1136-7437', type: 'text' },
        { label: 'WhatsApp', value: 'CathayVia China Travel', type: 'text' },
        { label: 'Phone', value: '+86 185 1136 7437', type: 'text' },
        { label: 'Instagram', value: 'cathayviatravel', type: 'text' }
      ],
      en: [
        { label: 'Telegram', value: '+86 185-1136-7437', type: 'text' },
        { label: 'WhatsApp', value: 'CathayVia China Travel', type: 'text' },
        { label: 'Phone', value: '+86 185 1136 7437', type: 'text' },
        { label: 'Instagram', value: 'cathayviatravel', type: 'text' }
      ]
    }
  },
  footer: {
    summary: {
      zh: 'CathayVia China Travel 聚焦北京与青岛的城市旅行推荐，以双语内容、顾问式表达和灵活的线路节奏帮助用户更快找到方向。',
      en: 'CathayVia China Travel focuses on Beijing and Qingdao city journeys, using bilingual content, advisor-style guidance, and flexible pacing to help travelers choose faster.'
    },
    navTitle: { zh: '快速导航', en: 'Quick links' },
    contactTitle: { zh: 'Contact details', en: 'Contact details' },
    copyright: '© 2026 CathayVia China Travel'
  }
}
