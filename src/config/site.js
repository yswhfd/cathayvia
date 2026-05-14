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
      zh: '我们把北京的人文经典、长城山色与青岛的海岸散步、红瓦街区串成更容易下决定的城市旅行方案，让首访、亲子、情侣和摄影行程都能迅速找到方向。',
      en: 'We shape Beijing heritage, Great Wall ridges, Qingdao shore walks, and red-roof districts into city routes that are easier to choose for first visits, couples, families, and photo-minded travelers.'
    },
    badges: {
      zh: ['北京文化与长城风景', '青岛海岸与城市假期', '中英双语顾问式推荐'],
      en: ['Beijing culture and Great Wall views', 'Qingdao coast and city escapes', 'Bilingual route guidance']
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
        { value: '2城', label: '两种旅行气质', detail: '北京的厚度，青岛的松弛' },
        { value: '4条', label: '精选路线', detail: '文化、海岸、亲子、摄影' },
        { value: '全年', label: '可排期出发', detail: '按季节与节奏灵活调整' }
      ],
      en: [
        { value: '2 cities', label: 'Two travel moods', detail: 'Beijing depth, Qingdao ease' },
        { value: '4 routes', label: 'Curated itineraries', detail: 'Culture, coast, family, photo' },
        { value: 'Year-round', label: 'Flexible departures', detail: 'Adjusted by season and pace' }
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
        { label: '想要的季节', value: '春秋人文 / 夏日海风 / 周末短逃' },
        { label: '适合的人群', value: '亲子 / 情侣 / 摄影 / 城市漫游' },
        { label: '偏爱的节奏', value: '文化深游 / 海岸慢游 / 轻松短假' },
        { label: '预算参考', value: '¥3,000 - ¥8,000+' }
      ],
      en: [
        { label: 'Preferred season', value: 'Spring culture / summer coast / short breaks' },
        { label: 'Traveler type', value: 'Family / couples / photo / city break' },
        { label: 'Pacing', value: 'Cultural depth / coastal ease / relaxed getaway' },
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
      zh: '这组路线围绕两种鲜明的城市气质展开：如果你想在北京读懂历史与地标，就选文化与长城；如果你想在青岛放慢脚步，就选海岸漫游与亲子海洋假期。',
      en: 'These routes are built around two distinct city moods: choose culture and the Great Wall for Beijing depth, or coastal strolls and family ocean breaks for a softer Qingdao rhythm.'
    },
    searchLabel: { zh: '关键词搜索', en: 'Keyword search' },
    searchPlaceholder: {
      zh: '搜索城市、景点、标签或线路名',
      en: 'Search cities, landmarks, tags, or route names'
    },
    filterAriaLabel: { zh: '场景筛选', en: 'Scene filters' },
    budgetTitle: { zh: '预算上限', en: 'Budget cap' },
    budgetDescription: {
      zh: '仅展示预算不高于当前阈值的线路',
      en: 'Show only routes priced below the current threshold'
    },
    budgetHint: {
      zh: '这轮已经接入开放图片，后续如果你有更想要的故宫、长城或青岛海边图，也可以继续替换。',
      en: 'This version already uses open travel imagery, and you can still replace it later with your preferred Forbidden City, Great Wall, or Qingdao coast photos.'
    },
    empty: {
      zh: '当前筛选条件下没有匹配线路，可以放宽预算上限或切换场景试试。',
      en: 'No routes match these filters. Try increasing the budget cap or switching the scene.'
    },
    sceneLabelTitle: { zh: '适合场景', en: 'Best for' },
    budgetLabel: { zh: '预算', en: 'Price' },
    seasonLabel: { zh: '推荐季节', en: 'Best season' }
  },
  featuredRoutes: [
    {
      id: 'beijing-axis-culture',
      scene: 'culture',
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
        zh: '适合第一次到北京、希望用更连贯的步行与文化动线理解城市的人群。',
        en: 'Best for first-time Beijing visitors who want a coherent cultural walk through the city core.'
      },
      highlights: {
        zh: ['中轴文化密度高', '步行体验完整', '适合城市历史爱好者'],
        en: ['High heritage density', 'Strong walkable flow', 'Great for history-minded travelers']
      },
      tags: {
        zh: ['北京', '人文', '首访'],
        en: ['Beijing', 'culture', 'first visit']
      },
      gallery: beijingCultureGallery,
      accent: { from: '#5d2e1f', to: '#b5653c', glow: '#e6b17e' }
    },
    {
      id: 'beijing-greatwall-photo',
      scene: 'photo',
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
        zh: '把长城山脊、红叶时段和摄影机位整合成更明确的短线方案。',
        en: 'A focused short route built around ridge views, autumn color, and clean shooting windows.'
      },
      highlights: {
        zh: ['山脊层次突出', '适合周末短线', '日出日落氛围强'],
        en: ['Layered ridge views', 'Works for weekends', 'Strong sunrise and sunset mood']
      },
      tags: {
        zh: ['北京', '摄影', '长城'],
        en: ['Beijing', 'photo', 'Great Wall']
      },
      gallery: beijingWallGallery,
      accent: { from: '#4f2d1f', to: '#9d5c3d', glow: '#f2c078' }
    },
    {
      id: 'qingdao-coast-romance',
      scene: 'romance',
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
        zh: '适合情侣或城市漫游型旅客，把海风、红瓦和慢节奏假期感打包到一起。',
        en: 'Ideal for couples and city strollers looking for sea breeze, red-roof views, and a slower holiday tempo.'
      },
      highlights: {
        zh: ['海岸线体验完整', '老城氛围鲜明', '适合轻松拍照'],
        en: ['Complete coast feel', 'Distinct old-town mood', 'Easy photo-friendly pacing']
      },
      tags: {
        zh: ['青岛', '情侣', '海岸'],
        en: ['Qingdao', 'couples', 'coast']
      },
      gallery: qingdaoCoastGallery,
      accent: { from: '#0d4f6d', to: '#3a86a0', glow: '#ffd166' }
    },
    {
      id: 'qingdao-family-ocean',
      scene: 'family',
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
        zh: '更偏向亲子与轻松型家庭，把海洋体验、海边活动和城市便利度结合起来。',
        en: 'Built for families seeking marine attractions, breezy seafront time, and city convenience in one trip.'
      },
      highlights: {
        zh: ['车程相对友好', '亲子内容集中', '海边活动选择多'],
        en: ['Relatively easy transfers', 'Family-focused stops', 'Plenty of seaside activities']
      },
      tags: {
        zh: ['青岛', '亲子', '海洋'],
        en: ['Qingdao', 'family', 'ocean']
      },
      gallery: qingdaoFamilyGallery,
      accent: { from: '#16697a', to: '#489fb5', glow: '#f4d35e' }
    }
  ],
  scenesSection: {
    eyebrow: { zh: '出行场景', en: 'TRAVEL SCENES' },
    title: { zh: '按人群与目的挑北京 / 青岛线路', en: 'Pick Beijing or Qingdao routes by traveler need' },
    intro: {
      zh: '虽然城市收束到两座，但推荐逻辑仍然按人群和目的来切分。',
      en: 'The destination set stays focused, while route logic is still guided by traveler intent.'
    },
    items: [
      {
        id: 'family',
        label: { zh: '亲子家庭', en: 'Family trips' },
        audience: { zh: '低龄亲子 / 暑期出行', en: 'Young kids / summer travel' },
        description: {
          zh: '优先考虑景点密度、交通便利和活动强度。',
          en: 'Prioritizes stop density, transfer ease, and manageable activity levels.'
        },
        metric: { zh: '亲子 + 轻松', en: 'Family + easy' },
        accent: '#7c9885'
      },
      {
        id: 'romance',
        label: { zh: '情侣度假', en: 'Couple escapes' },
        audience: { zh: '双人短假 / 城市慢游', en: 'Two-person short breaks' },
        description: {
          zh: '更在意氛围感、拍照和街区停留时间。',
          en: 'Values atmosphere, photos, and slower neighborhood wandering.'
        },
        metric: { zh: '海岸 + 氛围', en: 'Coast + mood' },
        accent: '#d17b88'
      },
      {
        id: 'photo',
        label: { zh: '摄影采风', en: 'Photography' },
        audience: { zh: '内容创作者 / 周末出片', en: 'Creators / weekend shoots' },
        description: {
          zh: '优先安排清晨、黄昏和高概率机位。',
          en: 'Built around dawn, sunset, and high-probability shooting windows.'
        },
        metric: { zh: '机位 + 光线', en: 'Spots + light' },
        accent: '#587291'
      },
      {
        id: 'culture',
        label: { zh: '城市人文', en: 'Urban culture' },
        audience: { zh: '首访北京 / 城市故事控', en: 'First-time Beijing / heritage lovers' },
        description: {
          zh: '更重视文化线索、地标串联与街区体验。',
          en: 'Focuses on cultural sequencing, landmark flow, and district character.'
        },
        metric: { zh: '文化 + 行走', en: 'Culture + walking' },
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
      zh: '无论你想在北京读懂历史脉络，还是想在青岛把假期过得更轻松，这些路线都围绕真实的旅行感受来组织，而不是简单堆砌景点。',
      en: 'Whether you want to read history through Beijing or slow down through Qingdao, these routes are shaped around how the trip should feel, not just how many sights can be packed in.'
    },
    items: [
      {
        title: { zh: '给第一次去的人清晰方向', en: 'Clear direction for first-time visitors' },
        description: {
          zh: '从北京中轴到青岛海岸，每条路线都先回答“第一次去应该看什么、怎么走更顺”。',
          en: 'From Beijing avenues to Qingdao shores, each route starts by answering what first-time visitors should see and how to move through it smoothly.'
        },
        metric: { zh: '首访友好', en: 'First-trip friendly' }
      },
      {
        title: { zh: '让假期节奏更贴合同行的人', en: 'Travel pacing that fits who you go with' },
        description: {
          zh: '亲子、情侣、摄影和城市漫游会有不同的停留方式，路线因此也该完全不同。',
          en: 'Families, couples, photographers, and city wanderers all stop differently, so the route should change with them.'
        },
        metric: { zh: '按人群定节奏', en: 'Paced by traveler type' }
      },
      {
        title: { zh: '在有限时间里保留城市记忆点', en: 'Keep the city’s signature moments within limited time' },
        description: {
          zh: '无论是周末短假还是 4 天城市线，重点都放在真正容易留下印象的场景与节奏上。',
          en: 'Whether it is a short weekend or a four-day itinerary, the focus stays on scenes and rhythms that travelers actually remember.'
        },
        metric: { zh: '短假也有记忆点', en: 'Memorable even on short breaks' }
      }
    ],
    aside: {
      title: { zh: '更适合这样的人', en: 'Especially good for travelers who' },
      points: {
        zh: ['第一次去北京或青岛，想少走弯路', '带家人、伴侣或朋友出行，希望节奏更合适', '比起打卡数量，更在意旅行感受与记忆点'],
        en: ['are visiting Beijing or Qingdao for the first time', 'travel with family, partners, or friends and want better pacing', 'care more about feel and memory than simply counting landmarks']
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
      zh: '支持北京 / 青岛城市首访、亲子短假、情侣漫游、摄影路线与品牌合作咨询。',
      en: 'Available for first-time Beijing and Qingdao trips, family breaks, couple escapes, photography routes, and collaboration requests.'
    },
    tips: {
      zh: {
        primary: '当前联系区字段已改成更适合国际咨询的方式，后续仍可继续改配置值。',
        secondary: '等你补真实景点图片后，线路图和轮播图也只需要替换对应路径。'
      },
      en: {
        primary: 'The contact block now uses a more international set of channels, while still staying configuration-driven.',
        secondary: 'Once you provide real destination photos, both route galleries and hero slides can be updated by replacing file paths only.'
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
