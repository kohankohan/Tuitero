/**
 * Tuitero v19 — Localización Integral de Cartas, Títulos y Tweets
 * Adaptación auténtica para Español, Inglés y Japonés
 */

const CARD_TITLE_TRANSLATIONS = {
  "en": {
    "Publicar meme viral": "Post a Viral Meme",
    "LA PRIMERA CITA": "The First Date Debate",
    "La primera cita": "The First Date Debate",
    "SOBREMESA Y MATE LEJOS DE LA RED": "Screen-Free Afternoon",
    "Sobremesa y mate lejos de la red": "Screen-Free Afternoon",
    "SETUP NUEVO EN CAMINO": "New Battle Station Incoming",
    "Setup nuevo en camino": "New Battle Station Incoming",
    "ANÁLISIS PROFUNDO DEL JUEGO": "Deep Game Analysis",
    "Análisis profundo del juego": "Deep Game Analysis",
    "EL MISTERIO DE LOS SPONSORS FANTASMA": "The Ghost Sponsor Mystery",
    "El misterio de los sponsors fantasma": "The Ghost Sponsor Mystery",
    "Reseña honesta sin spoilers": "Honest Spoiler-Free Review",
    "La build definitiva": "The Ultimate Meta Build",
    "El meta cambió": "The Meta Has Shifted",
    "Speedrun récord roto": "Speedrun PB Smashed",
    "El bug que los devs no van a parchar": "The Bug Devs Won't Patch",
    "Análisis de diseño profundo": "Level Design Philosophy",
    "Conectando los puntos": "Connecting the Dots",
    "Lo que los medios no muestran": "What Media Won't Show",
    "La investigación que censuran": "The Suppressed Investigation",
    "La reunión que no existió": "The Secret Private Meeting",
    "El documento desclasificado": "The Declassified Document",
    "El patrón que se repite": "The Repeating Historical Pattern",
    "Mi rutina de la semana": "My Weekly Routine",
    "Haul de la temporada": "Seasonal Wardrobe Haul",
    "El teaser misterioso": "The Mystery Teaser",
    "El pronóstico del clásico": "Derby Day Prediction",
    "Guerra de partidarios": "Fan Channel Civil War",
    "Adiós a la leyenda": "Farewell to a Legend",
    "El chiste robado": "The Stolen Meme",
    "La trend del momento": "Viral Trend of the Day",
    "El debut en vivo": "Live Comedy Debut",
    "El sobre anónimo": "The Anonymous Leak",
    "Cobertura de la marcha": "Live Protest Coverage",
    "La nota patrocinada": "The Sponsored Editorial",
    "El tema país": "The National Crisis Take",
    "El hilo cultural": "Cultural Masterpiece Essay",
    "El tropiezo viral": "The Parody AI Stumble",
    "El show del Halving": "The Halving Spectacle",
    "Buscando Advisor": "Seeking Web3 Advisor",
    "El exchange en llamas": "Exchange on Fire",
    "El crossover del año": "Collab of the Year",
    "El troll de las menciones": "The Timeline Troll",
    "El regalo misterioso": "The Mysterious Gift",
    "Lanzando el producto": "Product Hunt Launch",
    "La guerra de lenguajes": "The Programming Holy War",
    "La oferta del fondo": "VC Term Sheet Offer",
    "El clip de oro": "The Viral Soundbite",
    "El sponsor aburrido": "The Boring B2B Sponsor",
    "El invitado problemático": "The Problematic Guest",
    "Desconexión total": "Digital Detox & Rest",
    "Tweet patrocinado": "Sponsored Brand Post"
  },
  "ja": {
    "Publicar meme viral": "バズりミームを投稿",
    "LA PRIMERA CITA": "初デート割り勘論争",
    "La primera cita": "初デート割り勘論争",
    "SOBREMESA Y MATE LEJOS DE LA RED": "画面から離れて一服",
    "Sobremesa y mate lejos de la red": "画面から離れて一服",
    "SETUP NUEVO EN CAMINO": "新配信環境のセットアップ",
    "Setup nuevo en camino": "新配信環境のセットアップ",
    "ANÁLISIS PROFUNDO DEL JUEGO": "ゲームシステムの深掘り分析",
    "Análisis profundo del juego": "ゲームシステムの深掘り分析",
    "EL MISTERIO DE LOS SPONSORS FANTASMA": "怪しいスポンサーの謎",
    "El misterio de los sponsors fantasma": "怪しいスポンサーの謎",
    "Reseña honesta sin spoilers": "ネタバレなし本音レビュー",
    "La build definitiva": "最強メタビルド完成",
    "El meta cambió": "アプデで環境崩壊",
    "Speedrun récord roto": "RTA自己ベスト更新",
    "El bug que los devs no van a parchar": "運営が放置する致命的バグ",
    "Análisis de diseño profundo": "ゲームデザイン哲学の徹底解説",
    "Conectando los puntos": "点と点を繋ぐ考察",
    "Lo que los medios no muestran": "メディアが隠す不都合な真実",
    "La investigación que censuran": "圧力がかかった調査記録",
    "La reunión que no existió": "存在しないはずの密会",
    "El documento desclasificado": "機密解除された公文書",
    "El patrón que se repite": "繰り返される歴史の法則",
    "Mi rutina de la semana": "今週のモーニングルーティン",
    "Haul de la temporada": "今シーズンの購入品紹介",
    "El teaser misterioso": "謎の重大告知匂わせ",
    "El pronóstico del clásico": "伝統の一戦スコア予想",
    "Guerra de partidarios": "サポ同士の代理戦争",
    "Adiós a la leyenda": "宿敵レジェンドへの敬意",
    "El chiste robado": "ネタの丸パクリ被害",
    "La trend del momento": "爆発的バズトレンドへの便乗",
    "El debut en vivo": "リアルお笑いライブ出演",
    "El sobre anónimo": "政財界の匿名内部告発",
    "Cobertura de la marcha": "緊迫するデモ現場の生中継",
    "La nota patrocinada": "企業タイアップの甘い罠",
    "El tema país": "国論を二分する大激論",
    "El hilo cultural": "往年の名作映画批評",
    "El tropiezo viral": "生成AIデマへの引っかかり",
    "El show del Halving": "半減期狂騒曲",
    "Buscando Advisor": "アドバイザー就任オファー",
    "El exchange en llamas": "取引所ハッキング騒動",
    "El crossover del año": "超大物コラボの打診",
    "El troll de las menciones": "執拗な説教アンチ",
    "El regalo misterioso": "謎の高額プレゼント",
    "Lanzando el producto": "新サービスのローンチ",
    "La guerra de lenguajes": "プログラミング言語の宗教戦争",
    "La oferta del fondo": "VCからの大型出資オファー",
    "El clip de oro": "切り抜き動画の爆発的バズ",
    "El sponsor aburrido": "地味なB2Bスポンサー案件",
    "El invitado problemático": "炎上タレントの出演希望",
    "Desconexión total": "デジタルデトックス",
    "Tweet patrocinado": "スポンサー付き広告投稿"
  }
};

const RIVAL_TRANSLATIONS = {
  "en": {
    "El diputado del joystick": "The Anti-Gaming Politician",
    "El que te dice salí al sol": "The 'Touch Grass' Guy",
    "El avatar anime sin rank": "The Unranked Anime Avatar",
    "El excampeón de la replay": "The Washed-Up Ex-Pro",
    "El streamer tóxico": "The Toxic Streamer",
    "El de las frases de calendario": "The Inspirational Quote Guy",
    "El huevito sin cara": "The Default Avatar Egg",
    "El ministro del speech": "The Soundbite Politician",
    "El doctor de cátedra": "The Tenured Professor",
    "El operador de siempre": "The Political Operative",
    "El troll de guardia sub-20": "The Teenage Reply Guy",
    "El avatar de estatua griega": "The Marble Bust Avatar",
    "El columnista del establishment": "The Legacy Op-Ed Writer",
    "El de confiá en el sistema": "The 'Trust the System' Guy",
    "El debunkeador sin fuentes": "The Wikipedia Debunker",
    "El pro player del meta viejo": "The Old Meta Veteran",
    "El streamer con viewers bots": "The View-Botted Streamer"
  },
  "ja": {
    "El diputado del joystick": "ゲーム規制派の政治家",
    "El que te dice salí al sol": "「たまには外に出ろ」おじさん",
    "El avatar anime sin rank": "ランクなしアニメアイコン",
    "El excampeón de la replay": "過去の栄光にすがる元プロ",
    "El streamer tóxico": "毒舌配信者",
    "El de las frases de calendario": "自己啓発名言ポエマー",
    "El huevito sin cara": "たまごアイコンの捨て垢",
    "El ministro del speech": "テンプレ答弁の政治家",
    "El doctor de cátedra": "大学の御意見番教授",
    "El operador de siempre": "いつもの世論工作員",
    "El troll de guardia sub-20": "若手レスバキッズ",
    "El avatar de estatua griega": "石膏像アイコンの批評家",
    "El columnista del establishment": "大手メディアの御用記者",
    "El de confiá en el sistema": "体制全肯定おじさん",
    "El debunkeador sin fuentes": "Wikiコピペ論破マン",
    "El pro player del meta viejo": "過去環境にすがる元プロ",
    "El streamer con viewers bots": "同接水増し配信者"
  }
};

const STORY_HEADLINES_LOCALIZED = {
  "en": {
    "gamer": "Luxury sports cars and a Delaware LLC",
    "podcaster": "The model and her mysterious billionaire friend",
    "influencer": "A private photoshoot with an imported hypercar",
    "techie": "The crypto exchange was breached",
    "humor": "A nationwide digital bank run",
    "conspiranoico": "Shadow operatives in the deep state",
    "periodista": "Judicial raids and phantom offshore shell companies",
    "futbolero": "Whispers in the football federation executive suites",
    "onlyfans": "The secret midnight ride in the bulletproof luxury sedan",
    "cryptobro": "The corrupt politician's exposed cold wallet",
    "militante": "The government housing units that were never built",
    "opinologo": "The hidden truth surfacing two years later"
  },
  "ja": {
    "gamer": "高級スーパーカーとデラウェア州のペーパーカンパニー",
    "podcaster": "有名モデルと正体不明の実業家の密会",
    "influencer": "輸入高級車と謎の撮影ロケ",
    "techie": "暗号資産取引所の極秘ハッキング被害",
    "humor": "ネット銀行の預金引き出し封鎖騒動",
    "conspiranoico": "闇の巨大組織の暗躍記録",
    "periodista": "家宅捜索とペーパーカンパニーの資金洗浄",
    "futbolero": "サッカー連盟VIP席の密談疑惑",
    "onlyfans": "防弾仕様の超高級セダンでの深夜ドライブ",
    "cryptobro": "汚職政治家のコールドウォレット特定",
    "militante": "着工すらされなかった公営住宅の闇",
    "opinologo": "2年後に暴かれた事件の真相"
  }
};

// Authentic contextual tweet translations by suit and archetype

const CONTEXTUAL_TWEETS_BY_ARCH = {
  "en": {
    "gamer": {
      "meme": "Me: 'One more match and then sleep.' Clock: 6:30 AM. Dropped two ranks, left eye twitching, running purely on spite.",
      "tema": "40-hour playthrough complete with zero spoilers: visuals 10/10, story falls off hard in Act 3. Here is my honest breakdown.",
      "pelea": "Some unranked anime avatar is lecturing me on my build when they've never touched the game. Show match history or sit down.",
      "hilo": "Why this title feels fundamentally different from modern releases: a 10-tweet breakdown on level design philosophy 🧵",
      "quote": "Imagine blaming the netcode when you missed your entire combo by three business days.",
      "live": "FINAL BOSS PHASE 3 LIVE ON STREAM RIGHT NOW! NO HEALING ITEMS LEFT, HANDS SHAKING!",
      "temaDelDia": "Everyone arguing over the GOTY nominees while I'm still trying to finish backlog games from 2021.",
      "politica": "When game publishers charge $70 for unfinished betas and wonder why consumer trust collapsed.",
      "bait": "PC vs Console in 2026: if you're still buying consoles just for exclusives, you're paying full price for nostalgia.",
      "descanso": "Logging off for the night. Turning off Discord, muting Twitter, and letting my wrists rest. GG.",
      "patrocinio": "Big thanks to [Brand] for gearing up the studio with these insane monitors! Check the link in bio for 20% off."
    },
    "podcaster": {
      "meme": "Spent 3 hours discussing philosophy with a Nobel laureate and the only clip that went viral is us debating cereal milk.",
      "tema": "The guest everyone asked for is finally in the studio. 120 minutes of raw, unfiltered conversation dropping tonight.",
      "pelea": "A podcast host with fake bought reviews is calling our numbers inflated. Drop your Spotify retention graph right now.",
      "hilo": "What 200 long-form interviews taught me about human psychology, discipline, and modern burnout 🧵",
      "quote": "Cutting a 2-hour nuanced discussion into an 8-second outrage clip is peak modern media illiteracy.",
      "live": "Microphones hot in 5 minutes! Special mystery guest in the green room. Drop your questions below!",
      "temaDelDia": "Diving headfirst into the story dominating the headlines this week. We have the internal perspective tonight.",
      "politica": "Real democracy isn't shouting slogans on social platforms—it's having difficult, uncomfortable conversations.",
      "bait": "Most modern university degrees are just a 4-year subscription to networking events. Change my mind.",
      "descanso": "Studio mics off for the weekend. Going completely offline to recharge the mind.",
      "patrocinio": "Support the sponsors who keep this show 100% free and independent. Exclusive discount code in show notes."
    },
    "cryptobro": {
      "meme": "Me checking charts every 30 seconds during a family dinner like I have nuclear launch codes in my pocket.",
      "tema": "On-chain metrics don't lie: long-term holders are accumulating while retail panics. Here is the data breakdown 🧵",
      "pelea": "A legacy financial analyst who missed the entire 1000% rally is lecturing me on risk management. Classic.",
      "hilo": "Comprehensive deep dive into Layer-2 scaling: rollup architectures, transaction costs, and decentralization tradeoffs 🧵",
      "quote": "Calling math and decentralized protocols 'a bubble' for 15 straight years while your currency loses 7% annually.",
      "live": "LIVE: BREAKING RESISTANCE LEVEL! 100M LIQUIDATIONS IN 15 MINUTES! HOLD YOUR BAGS!",
      "temaDelDia": "Global banking turbulence only validates why peer-to-peer sovereign money was created in the first place.",
      "politica": "Regulators don't fear market fraud; they fear an open financial system they cannot manipulate at will.",
      "bait": "If you're still keeping 100% of your savings in depreciating fiat currency, you are actively losing purchasing power daily.",
      "descanso": "Closing TradingView. Turning off chart alerts for 24 hours. Mental health always comes before market volatility.",
      "patrocinio": "Partnering with [Platform] for zero-fee swaps this week. Use the link in bio to claim your sign-up bonus."
    },
    "influencer": {
      "meme": "Took 400 selfies to find the one where the lighting looks 'effortless and natural'. The influencer struggle is real 😂",
      "tema": "My morning wellness ritual: 20 minutes of mindfulness, hydration, and clean skin before the day begins ✨",
      "pelea": "Some faceless hater saying my life is fake. I work 14 hours a day creating content, but keep watching anyway 💅",
      "hilo": "Curated aesthetic guide: my favorite secret spots, clean beauty favorites, and everyday mindful habits 🧵",
      "quote": "Projection is free, but staying moisturized and minding your own business is priceless ✨",
      "live": "GRWM LIVE: doing hair and makeup before the fashion gala! Answering all your questions right now 💄",
      "temaDelDia": "The trend of the week is everywhere on my feed, so here is my aesthetic interpretation of it 🤍",
      "politica": "Kindness and empathy shouldn't be partisan politics. Protecting our shared environment begins with daily choices.",
      "bait": "Unpopular opinion: iced matcha lattes with oat milk are objectively superior to traditional espresso. Don't fight me.",
      "descanso": "Digital detox weekend starts now. Putting the phone away to be fully present with loved ones 🌿",
      "patrocinio": "Thrilled to partner with [Brand] to show you my absolute holy-grail skincare essentials! Link in bio ✨"
    },
    "opinologo": {
      "meme": "Nobody asked for my take on this international crisis, but here is my 15-tweet doctoral thesis anyway.",
      "tema": "The real structural problem is what legacy media refuses to mention. Here is the macroeconomic reality.",
      "pelea": "You don't understand basic constitutional law and it shows in every single word of your reply. Read a book.",
      "hilo": "Why the current cultural debate is built on a fundamental misunderstanding: full historical context 🧵",
      "quote": "Fascinating how confidently wrong some people can be when repeating slogans they heard five minutes ago.",
      "live": "Live-tweeting the presidential address: minute 4 and the spin has already begun. Buckle up.",
      "temaDelDia": "Everyone reacting emotionally to today's headline. Let's look at the cold hard data instead.",
      "politica": "Both sides of the aisle are complicit in this disaster. Partisan fanbases just refuse to see the mirror.",
      "bait": "90% of current political discourse on this platform is just emotional validation disguised as intellectual debate.",
      "descanso": "Closing this toxic echo chamber for the evening. Reality exists outside of the algorithms.",
      "patrocinio": "Essential read: analyzing societal trends with the latest analytics platform. Link below for subscribers."
    },
    "periodista": {
      "meme": "Editor: 'Is the source 100% verified?' Me: 'They have a badge and an anonymous handle, chief.'",
      "tema": "EXCLUSIVE: Internal documents confirm what officials denied for six months. Full report on our portal.",
      "pelea": "Official spokespeople calling this 'misinformation' without refuting a single fact in our documentation.",
      "hilo": "THE CHRONOLOGY: Step-by-step reconstruction of the closed-door meeting where the deal was approved 🧵",
      "quote": "What a polite and corporate way to admit that our original reporting was completely accurate.",
      "live": "BREAKING NEWS: Police raid underway at ministry headquarters. Sirens sounding, reporters gathering outside.",
      "temaDelDia": "We are tracking the developing story from multiple verified angles. Updates every 10 minutes.",
      "politica": "Power only respects transparency when it has no other choice. That is why independent press matters.",
      "bait": "If government officials had nothing to hide, they wouldn't classify public budget contracts under national security.",
      "descanso": "Filing deadline met. Phone on silent. Even investigative reporters need sleep.",
      "patrocinio": "Supported by the Independent Journalism Fund. Your subscriptions keep our investigations completely free from bias."
    },
    "futbolero": {
      "meme": "Watching our central defender attempt a clearance in the 93rd minute gave me five new gray hairs.",
      "tema": "Tactical breakdown: why shifting our midfield pivot completely changed our defensive transition.",
      "pelea": "You conceded four goals in a derby and you have the audacity to talk about referee bias? Sit down.",
      "hilo": "From academy prospect to league champion: the complete tactical evolution of our captain 🧵",
      "quote": "Imagine crying about offside lines when your striker missed three open goals inside the six-yard box.",
      "live": "GOOOOOAL IN THE 89TH MINUTE! THE ENTIRE STADIUM IS SHAKING! WHAT A FINISH!",
      "temaDelDia": "Transfer deadline day madness: rumors flying, private jets tracked, medicals booked.",
      "politica": "Modern football ownership has sold the soul of historic clubs to foreign corporations without conscience.",
      "bait": "Most modern tactical managers are just overcomplicating a sport that has always been about heart and hunger.",
      "descanso": "Full-time whistle. Three points in the bag. Heart rate returning to normal. Turning off notifications.",
      "patrocinio": "Gearing up for the season with official club kits from [Brand]! Grab yours with discount code GOAL."
    },
    "onlyfans": {
      "meme": "Someone unsubscribed after 6 months because I didn't reply to their 4 AM goodnight text in 2 minutes 😂",
      "tema": "New exclusive set just went live on the feed ✨ Golden hour lighting and completely uncensored gallery.",
      "pelea": "Leaking exclusive creator content is a legal violation, not a flex. My legal team is already filing.",
      "hilo": "The business of independent digital content: taxes, LLC setups, safety, and brand building 🧵",
      "quote": "Judging women for monetizing their beauty while consuming free porn in incognito mode daily. Make it make sense.",
      "live": "VIP Q&A starting in 10 minutes on the private stream! Answering your spiciest DMs live.",
      "temaDelDia": "Jumping on today's viral photoshoot trend! You decide which picture gets pinned to my profile.",
      "politica": "Financial autonomy for women terrifies puritanical institutions. We aren't asking for permission.",
      "bait": "If paying $10 a month for exclusive creator content ruins your budget, focus on your career first.",
      "descanso": "Cameras off, robe on, phone in another room. Self-care evening starts now.",
      "patrocinio": "Partnering with [Brand] for this luxury lingerie drop. Use my VIP link for complimentary access."
    },
    "techie": {
      "meme": "Pushed to production at 4:59 PM on a Friday. What could possibly go wrong?",
      "tema": "Benchmarked Rust vs Go concurrency under 100k req/sec load. The memory overhead numbers are shocking.",
      "pelea": "You're writing raw SQL queries inside client components and lecturing me about scalable architecture?",
      "hilo": "How we scaled our distributed database from 10k to 5M daily active users without downtime 🧵",
      "quote": "Adding 14 layers of AI microservices to solve what could be done with a 5-line bash script.",
      "live": "INCIDENT ALERT: AWS US-EAST-1 DEGRADED! Debugging live, spinning up failover nodes in Europe.",
      "temaDelDia": "Today's open-source controversy proves once again why permissive licensing requires sustainable funding.",
      "politica": "Proprietary algorithmic monopolies shouldn't govern public digital infrastructure. Open source or bust.",
      "bait": "If your startup can be replaced by a single wrapper prompt, you don't have a tech company.",
      "descanso": "Terminals closed. Slack notifications muted until Monday. Touching actual grass now.",
      "patrocinio": "Deploy container clusters in 30 seconds with [Platform]. Get $200 free cloud credits via link in bio."
    },
    "humor": {
      "meme": "My therapist: 'And what do we say when things get tough?' Me: 'It is what it is, we move.'",
      "tema": "A comprehensive scientific classification of the 7 types of people you encounter on this cursed website.",
      "pelea": "Getting death threats over a pun about refrigerated butter. Never change, internet.",
      "hilo": "The most absurd things that have actually happened in public transport: a horrifying comedy thread 🧵",
      "quote": "Taking a joke so personally that you write an 8-paragraph open letter is a diagnosable medical condition.",
      "live": "Live-tweeting my dentist appointment. The drill has started. Tell my followers I loved them.",
      "temaDelDia": "Jumping on today's trending outrage before everyone realizes it was completely fabricated by 2 PM.",
      "politica": "Politics would be much funnier if we weren't forced to live under the direct consequences of the clowns.",
      "bait": "Adults who bring acoustic guitars to outdoor barbecues should be tried in international court.",
      "descanso": "Ran out of dopamine and punchlines. Shutting down the clown factory for 24 hours. Bye.",
      "patrocinio": "This joke was legally sponsored by [Brand]. They paid me enough money to pretend I care about their product."
    },
    "conspiranoico": {
      "meme": "Coincidence? I think NOT. Look at the triangles in the official municipal building blueprints.",
      "tema": "Declassified 1974 documents prove the financial reset was planned 50 years ago. Read before they delete this.",
      "pelea": "Debunk me with official government links? You are literally citing the perpetrators of the agenda.",
      "hilo": "Connecting the fiber-optic submarine cables, solar flare anomalies, and secret offshore shell corporations 🧵",
      "quote": "They call it 'crazy' right up until the official whistleblower leaks the exact documents 10 years later.",
      "live": "ANOMALOUS LIGHTS OVER THE AIRPORT RUNWAY RIGHT NOW! Radar tracking turned off! They are hiding something!",
      "temaDelDia": "Today's viral media distraction was specifically orchestrated to bury the budget vote passed at 3 AM.",
      "politica": "Both political parties take orders from the same non-elected shadow committees. Wake up.",
      "bait": "Most people would rather believe a comfortable televised lie than confront an inconvenient classified truth.",
      "descanso": "Switching off devices and placing the phone in a faraday cage. Clearing bio-frequencies for 12 hours.",
      "patrocinio": "Protect your personal telemetry data. Exclusive encrypted hardware storage available through link below."
    },
    "militante": {
      "meme": "Opposing party when they ruin the economy: 'It was the previous administration's fault.' Classic playbook.",
      "tema": "Defending public infrastructure, workers' rights, and collective solidarity against austerity measures.",
      "pelea": "Trolls in the replies defending corporate tax cuts while struggling to pay their own electric bills.",
      "hilo": "The real impact of the newly proposed labor deregulation: who wins, who loses, and why we resist 🧵",
      "quote": "Notice how they preach free-market competition until their billionaire donors demand a public bailout.",
      "live": "ON THE STREETS: Thousands marching right now in peaceful protest! The people will not be silenced!",
      "temaDelDia": "Today's scandal confirms what grassroots movements have been saying for years. Accountability now.",
      "politica": "Neutrality in times of moral crisis only favors the oppressor. Choose your side with dignity.",
      "bait": "If you think politics doesn't affect you, check your grocery bill and your monthly rent.",
      "descanso": "A long day of organizing and community work. Stepping back tonight to recharge for the struggles ahead.",
      "patrocinio": "Support independent cooperative publishers. Pick up this month's critical edition through the link below."
    }
  },
  "ja": {
    "gamer": {
      "meme": "『あと1戦だけやって寝る』→ 午前6時半。2ランク降格して左目が痙攣してる。復讐か死か。",
      "tema": "ネタバレなしクリア後レビュー（プレイ時間40h）：グラフィックは神、ただし第3章のシナリオ崩壊が痛すぎる。これが本音です。",
      "pelea": "未プレイのアニメアイコンが俺のビルドに偉そうに口出ししてきた。まず戦績見せてから出直してこい。",
      "hilo": "なぜこのゲームは圧倒的なのか？ 開発者のレベルデザイン哲学を解剖する10連投スレッド 🧵",
      "quote": "コンボを3営業日ぶん豪快に外しておいて『ラグのせい』はさすがに草。",
      "live": "【配信中】ラスボス第3形態突入！！ 回復アイテム枯渇、手汗と心拍数が限界突破！",
      "temaDelDia": "GOTYノミネートでTLが大荒れしてるけど、俺はまだ2021年の積みゲーを崩すのに必死。",
      "politica": "フルプライスで未完成のバグゲー売りつけて、ユーザーの信頼が失墜したとか驚いてる業界の闇。",
      "bait": "正直PS5とゲーミングPC論争って、もう勝敗ついてるよね。独占タイトル目当てで買う時代は終わった。",
      "descanso": "今日は完全ログアウト。Discordを落として手首を休めます。対戦ありがとうございました！ GG。",
      "patrocinio": "【PR】最高峰のゲーミングモニターを頂きました！ 視認性がダンチ。固定リンクから20%オフで購入できます！"
    },
    "podcaster": {
      "meme": "ノーベル賞受賞者と3時間ガチ哲学対談したのに、バズったのはシリアルに牛乳を先に入れるか論争の切り抜きだけだった。",
      "tema": "フォロワーから最もリクエストの多かったゲストがついにスタジオに降臨。全編ノーカット2時間のガチ対談、今夜公開。",
      "pelea": "サクラレビューで底上げしてるポッドキャスターがうちの再生数を水増し扱いしてきた。今すぐSpotifyの維持率グラフ公開しろ。",
      "hilo": "過去200人のトップランナーにインタビューして分かった、人間の心理・自己規律・燃え尽き症候群の真実 🧵",
      "quote": "2時間の丁寧な対話をたった8秒の炎上クリップに切り取るの、現代メディアリテラシーの完全な敗北でしょ。",
      "live": "生収録開始まであと5分！ 控え室にとんでもないシークレットゲストが来てます。質問はリプ欄へ！",
      "temaDelDia": "今週のトレンドを独占しているあのニュース、渦中の当事者視点で今夜のポッドキャストにて徹底解剖します。",
      "politica": "本当の対話とは、TLでスローガンを叫ぶことではなく、居心地の悪い議論に耳を傾けることです。",
      "bait": "現代の大学の学位の大半って、ただの人脈作りパーティーの4年定期購読権だよね。反論ある？",
      "descanso": "今週末はスタジオのマイクをオフにして、完全にオフラインでデジタルデトックスします。",
      "patrocinio": "【PR】番組を完全無料で独立配信し続けるためのスポンサー様です！ 概要欄の限定コードをお使いください。"
    },
    "cryptobro": {
      "meme": "家族との食事中に、核ミサイルの発射コード持ってる要人みたいな顔で30秒おきにチャート確認してる。",
      "tema": "オンチェーンデータは嘘をつかない。イナゴが投げ売りする陰で大口クジラが爆買い中。データ分析まとめ 🧵",
      "pelea": "1000%の上昇相場を全部乗り遅れたオールド金融マンが、リスク管理について講釈垂れてきた。笑える。",
      "hilo": "L2スケーリング完全解説：ロールアップアーキテクチャ、ガス代の最適化、分散性のトレードオフ 🧵",
      "quote": "法定通貨が年7%目減りしてる間に、15年間ずっと暗号資産を『バブル』と呼び続けてる人たちへ。",
      "live": "【緊急速報】レジスタンス突破！ 15分で1億ドル規模のショート強制ロスカット発生！ 握力試されるぞ！",
      "temaDelDia": "世界的な金融機関の動揺を見るたび、なぜ自己主権型の分散型通貨が必要だったのか再確認させられる。",
      "politica": "規制当局が本当に恐れているのは詐欺ではなく、自分たちの裁量で操作できない開かれた金融システムだ。",
      "bait": "資産の100%を減価し続ける法定通貨で銀行に預けてる人、実質毎日資産を燃やしてるのと一緒だよ。",
      "descanso": "TradingViewを閉じてアラートを全ミュート。メンタルヘルスはチャートのボラティリティより大事。",
      "patrocinio": "【PR】今週手数料ゼロのスワップを提供する[Platform]と提携！ 固定リンクから登録ボーナスを受け取れます。"
    },
    "influencer": {
      "meme": "『自然体で飾らない私』の1枚を撮るために400枚自撮り連写した。インフルエンサーの現実はこれです😂",
      "tema": "朝のウェルネスルーティン：20分の瞑想、水分補給、そして素肌ケアから始まる最高の1日✨",
      "pelea": "裏アカから『全部フェイク』って嫉妬リプ届いたけど、1日14時間コンテンツ作ってるの。見に来てくれてありがとね💅",
      "hilo": "誰にも教えたくなかった秘密の隠れ家カフェと、肌治安を守る神コスメまとめ 🧵",
      "quote": "他人にケチつけるのはタダだけど、自分をご機嫌にして保湿する時間の方が100万倍尊いよ✨",
      "live": "【生配信】ガラパーティー前のGRWM！ メイクしながらみんなの質問にリアルタイムで答えるよ💄",
      "temaDelDia": "今週のトレンドがTLを埋め尽くしてるから、私なりのこだわりビジュアルで解釈してみたよ🤍",
      "politica": "優しさと共感は政治的な対立じゃないはず。身近な暮らしから地球にやさしい選択をしていきたいな。",
      "bait": "正直オーツミルクのアイス抹茶ラテ、普通のエスプレッソより圧倒的に上だよね。異論は認めません。",
      "descanso": "週末のデジタルデトックス開始。スマホを置いて、大切な人たちとの時間を味わいます🌿",
      "patrocinio": "【PR】愛用しすぎて手放せない[Brand]の神コスメ！ 数量限定クーポンはプロフのリンクから✨"
    },
    "opinologo": {
      "meme": "誰にも頼まれてないけど、話題の国際問題について僕の博士論文級15連投解説を置いておきますね。",
      "tema": "大手メディアが決して触れない構造的欠陥の本質。これが今起きているマクロ経済の冷徹な現実です。",
      "pelea": "憲法と基礎法学の初歩すら理解してないことがリプの1行目から透けて見えてますよ。まず本を読みましょう。",
      "hilo": "なぜ現在の文化的論争は前提から間違っているのか？ 歴史的経緯から紐解く決定版スレッド 🧵",
      "quote": "5分前に聞きかじったスローガンを、ここまで自信満々に間違えて連呼できる人間の心理、実に興味深い。",
      "live": "【緊急実況】記者会見開始からわずか4分、早くも露骨な論点ずらしが始まりました。メモを取りながら検証します。",
      "temaDelDia": "感情論だけで今日のトップニュースを消費してる人たちへ。冷静な統計データを見て現実を直視しましょう。",
      "politica": "与野党双方がこの失政の共犯者です。党派性に盲目な支持者たちだけが鏡を見ようとしない。",
      "bait": "このプラットフォームの政治議論の9割は、知的な議論に擬態したただの承認欲求と感情の垂れ流し。",
      "descanso": "今夜はこの不毛なエコーチェンバーを閉じます。アルゴリズムの外にこそ本物の現実がある。",
      "patrocinio": "【PR】社会トレンドを可視化する最新分析ツール。言論活動に必須のプラットフォームです。詳細は固定リプへ。"
    },
    "periodista": {
      "meme": "デスク『裏取りは100%取れてるんだろうな？』 私『青バッジ持ちの鍵アカからのDMです（白目）』",
      "tema": "【独自スクープ】当局が半年間否定し続けた事実を裏付ける内部文書を入手。全文を速報します。",
      "pelea": "広報室は『誤報』とレッテルを貼るだけで、文書に記載された事実関係には一行たりとも反論できていません。",
      "hilo": "【時系列検証】密室会談で何が決まり、誰が署名したのか。徹底検証ドキュメント 🧵",
      "quote": "我々のスクープが完全に正確だったことを、実に官僚的で丁寧な言葉遣いで追認していただき感謝します。",
      "live": "【速報】省庁本部ビルに捜査員が突入。現場前より緊迫の状況を緊急実況中継します。",
      "temaDelDia": "本日の重大ニュース、複数の取材源から裏付けを取りつつ10分刻みで最新情報を更新中。",
      "politica": "権力が透明性を尊重するのは、追い詰められて他に選択肢がない時だけです。だから報道の自由が必要なのです。",
      "bait": "やましいことが何もないなら、なぜ公共予算の契約書を国家機密指定で非公開にするのでしょうか。",
      "descanso": "原稿入稿完了。通知をサイレントにして仮眠を取ります。どんな記者にも休息は必要。",
      "patrocinio": "【PR】調査報道を支える独立サブスクリプション。真実を追求し続けるためのご支援を。"
    },
    "futbolero": {
      "meme": "後半ロスタイム93分、うちのCBの雑なクリアを見て白髪が5本増えた。",
      "tema": "戦術分析：中盤のアンカー変更がどのようにトランジションの守備崩壊を食い止めたのか徹底解説。",
      "pelea": "ダービーで4失点ボコボコにされておいて審判の買収アピールとか恥ずかしくないの？ 黙って順位表見ろ。",
      "hilo": "下部組織の無名少年からリーグ制覇のキャプテンへ：その軌跡とプレースタイルの進化 🧵",
      "quote": "決定機を3本も宇宙開発シュートしておいて、VARのオフサイド判定に泣きついてるの滑稽すぎる。",
      "live": "ゴォォォォル！！ 後半89分の劇的決勝弾！！ スタジアムが揺れてる！ これだからフットボールはやめられない！",
      "temaDelDia": "移籍市場最終日の狂気：プライベートジェットの航路が特定され、メディカルチェックの噂でTL沸騰中。",
      "politica": "伝統あるクラブの魂を外資系ファンドに売り渡したフロント陣に、サポーターの怒りが爆発するのは当然だ。",
      "bait": "現代の戦術オタク監督たち、フットボールの本質である『気迫と泥臭さ』を難しく語りすぎ。",
      "descanso": "試合終了のホイッスル。勝ち点3ゲット。心拍数を落ち着かせてTLから離脱します。お疲れ！",
      "patrocinio": "【PR】今シーズンの公式ユニフォーム！ [Brand]とのコラボで限定セール実施中。コードは『GOAL』！"
    },
    "onlyfans": {
      "meme": "深夜4時の『おやすみ』DMに2分で返信しなかっただけで6ヶ月のサブスク解約されたのウケる😂",
      "tema": "新作の限定グラビアをフィードに公開しました✨ 夕暮れの光に包まれた完全ノーカット版です。",
      "pelea": "有料コンテンツの無断転載は犯罪ですよ。すでに弁護士から開示請求の手続きに入りました。",
      "hilo": "個人クリエイターの知られざるビジネス裏側：確定申告、法人化、安全対策、ブランディング戦略 🧵",
      "quote": "裏で無料アダルト見まくってるくせに、自分の美しさをマネタイズしてる女性を叩くの、ダブスタすぎて草。",
      "live": "【限定生配信】あと10分でプライベートQ&A開始！ 秘密の質問にリアルタイムで答えます。",
      "temaDelDia": "今日流行りの撮影トレンドに乗ってみたよ！ 固定ポストにする写真をみんなの投票で決めてね。",
      "politica": "女性が経済的自立を果たすことを恐れる旧態依然の社会制度。私たちは誰の許可も必要としません。",
      "bait": "月1500円のサブスク代で家計が崩壊するなら、SNSで文句言う前にまず本業頑張った方がいいよ。",
      "descanso": "カメラの電源を落としてバスタイム。今夜はスマホを別室に置いて自分を労わります。",
      "patrocinio": "【PR】愛用のラグジュアリーランジェリー[Brand]とタイアップ！ 特別割引リンクはプロフから。"
    },
    "techie": {
      "meme": "金曜の16時59分に本番環境へ直デプロイ完了。何も問題が起きるはずないよね？",
      "tema": "秒間10万リクエスト負荷におけるRustとGoの並行処理ベンチマーク。メモリ使用量の差が衝撃的でした。",
      "pelea": "フロントエンドコンポーネントの中で生SQL直書きしてる人が、スケーラブルなアーキテクチャ語らないで。",
      "hilo": "ダウンタイムゼロで分散DBをDAU 1万人から500万人へスケールさせたインフラ設計の全記録 🧵",
      "quote": "たった5行のbashスクリプトで済む処理に、AIマイクロサービスを14層も重ねて複雑化させる現代の病理。",
      "live": "【緊急障害】AWS障害発生！ 本番環境のフェイルオーバーを欧州リージョンへ緊急切り替え中！",
      "temaDelDia": "本日のOSS炎上騒動、オープンソース開発者の持続可能な資金モデルの必要性を改めて浮き彫りにした。",
      "politica": "巨大テック企業の独占アルゴリズムが公共インフラを支配するべきではない。オープンソースこそ正義。",
      "bait": "APIを1枚ラップしただけのプロンプトで代替できるプロダクト、それはテック企業とは呼ばない。",
      "descanso": "全ターミナル終了。Slackの通知を月曜までミュート。本物の自然と触れ合ってきます。",
      "patrocinio": "【PR】30秒でコンテナクラスタをデプロイできる[Platform]。限定200ドルの無料クレジット配布中！"
    },
    "humor": {
      "meme": "カウンセラー『辛い時は何て言うんだっけ？』 私『まあ死ぬわけじゃないし、知らんけどで乗り切る』",
      "tema": "この呪われたSNSに生息する要注意アカウント7選を、民俗学的に徹底分類してみました。",
      "pelea": "冷蔵庫のバターについてのダジャレひとつで殺害予告届いた。ネット社会、今日も通常運転で最高。",
      "hilo": "終電の車内で目撃した、人間の限界を超えたシュールすぎる珍事件まとめ 🧵",
      "quote": "ただのギャグにマジレスして8段落の抗議文送りつけてくる人、病院行った方がいいよ。",
      "live": "【決死の実況】歯医者の治療台に乗りました。キュイーンというドリル音が鳴り響いてます。遺言はリプ欄へ。",
      "temaDelDia": "午後2年にはデマだとバレて鎮火するであろう今日のお祭り炎上に、今のうちに便乗ボケかましときます。",
      "politica": "政治家たちの茶番劇、自分たちがそのピエロの政策に巻き込まれて実生活被害を受けなければ爆笑できるのに。",
      "bait": "BBQにアコースティックギター持ってきて勝手に弾き語り始める大人、国際法廷で裁かれるべき。",
      "descanso": "脳内ドーパミンと持ちネタが底をつきました。道化師工場は24時間休業します。解散！",
      "patrocinio": "【PR】このボケは[Brand]の提供でお送りしました。案件料を頂いたので全力で宣伝させていただきます。"
    },
    "conspiranoico": {
      "meme": "これが単なる偶然だと？ 市役所の設計図に隠された三角形の配列を見れば、誰でも気づくはずだ。",
      "tema": "【極秘指定解除】1974年の公文書が証明する、半世紀前から計画されていた世界金融リセットの全貌。消される前に読め。",
      "pelea": "政府の公式発表を根拠に論破した気になってるのか？ お前が引用してるのは黒幕側のプロパガンダそのものだ。",
      "hilo": "海底光ケーブル網、太陽フレアの異常観測、そしてタックスヘイブンの幽霊会社を繋ぐ見えない糸 🧵",
      "quote": "内部告発者が文書をリークして公認されるまでの10年間、彼らはいつもそれを『陰謀論』と呼ぶ。",
      "live": "【緊急目撃】空港上空に謎の発光体が静止中！ レーダー追跡が意図的に切断された！ 何かを隠蔽している！",
      "temaDelDia": "今日TLで騒がれている芸能スキャンダルは、未明3時に強行採決された裏法案から目を逸らすための目くらましだ。",
      "politica": "選挙で選ばれてすらいない影の委員会から、左右両党が同じ指示を受けている。目を覚ませ。",
      "bait": "大半の人間は、不都合な機密の真実と向き合うより、テレビが流す心地よい嘘を信じたがる。",
      "descanso": "全端末の電源を切り、ファラデーバッグに収納。生体周波数をリセットするため12時間隔離する。",
      "patrocinio": "【PR】個人の生体データと通信を守れ。電磁波遮断・暗号化ハードウェアストレージの詳細はこちら。"
    },
    "militante": {
      "meme": "経済を崩壊させた野党『前政権の遺産ガー』。いつものテンプレ言い訳、聞き飽きました。",
      "tema": "緊縮財政の波から、市民のインフラと労働者の権利、そして連帯の精神を断固として守り抜く。",
      "pelea": "自分の電気代の支払いに四苦八苦してるネトサポが、リプ欄で大企業の減税を必死に擁護してるの滑稽すぎる。",
      "hilo": "強行採決されようとしている規制緩和法案の真実：誰が得をし、誰が切り捨てられるのか 🧵",
      "quote": "庶民には自己責任と競争を説くくせに、自分たちの大口献金者には公金ジャブジャブで救済するダブスタ政権。",
      "live": "【現場実況】数万人の市民が広場を埋め尽くしました！ 不当な政策に抗議する民衆の声を力で封じることはできない！",
      "temaDelDia": "今日の汚職スキャンダルは、市民運動が長年指摘してきた構造的腐敗そのものです。徹底究明を求めます。",
      "politica": "危機の時代における『中立』は、常に強者と抑圧者に味方する。誇りを持って立場を明らかにせよ。",
      "bait": "『政治に関心がない』と言ってる人、毎月の食料品レシートと家賃の明細をよく見てみなよ。",
      "descanso": "街宣と集会の一日が終わりました。明日からの闘争に備えて、今夜は心身を休めます。",
      "patrocinio": "【PR】草の根の声を届ける独立系出版組合の季刊誌。定期購読で市民メディアを応援してください。"
    }
  }
};

const GENERIC_SUIT_TWEETS = {
  "en": {
    "meme": "Can't stop laughing at this meme. The timeline is undefeated today 😂",
    "tema": "Sharing some deep thoughts on my specialty today. Honest perspectives matter.",
    "pelea": "If you're going to come into my mentions, at least bring real arguments and not insults.",
    "hilo": "A detailed breakdown of everything happening behind the scenes: open thread 🧵",
    "quote": "What a hilarious way to confess you have no idea what you're talking about.",
    "live": "LIVE UPDATES: following the key moments in real time as they unfold!",
    "temaDelDia": "Checking out the trending topic of the day. The timeline never sleeps.",
    "politica": "Taking a clear stance on today's events. Silence is never neutral.",
    "bait": "A spicy take that is bound to trigger some very loud replies in the comments.",
    "descanso": "Logging off today. Stepping away from the timeline for mental peace. Take care, everyone!",
    "patrocinio": "Proud to partner with our incredible sponsors on this release! Check link in bio for details."
  },
  "ja": {
    "meme": "このミーム何回見ても腹筋崩壊する。今日のTL最高すぎる😂",
    "tema": "専門テーマについてじっくり書きました。本音の視点こそが価値を生む。",
    "pelea": "リプ欄に突撃してくるなら、悪口じゃなくてちゃんとした根拠を持ってきてね。",
    "hilo": "水面下で起きていることの全貌を徹底解説：ツリーを開いて読んでください 🧵",
    "quote": "何も理解してないことをこんなに面白く告白してくれるの、もはや親切まである。",
    "live": "【リアルタイム実況】今起きている決定的瞬間を速報中！",
    "temaDelDia": "本日のトレンドトピックをチェック。今日もTLは眠らない。",
    "politica": "今日の情勢に対して断固とした態度を表明する。沈黙は中立ではない。",
    "bait": "賛否両論を巻き起こすこと必至の辛口ポスト。反論はリプ欄へどうぞ。",
    "descanso": "今日は完全ログアウト。メンタル回復のために画面から離れて休みます。みんなもお疲れ様！",
    "patrocinio": "【PR】素敵なスポンサー様とのパートナーシップ！ 詳細リンクは固定ポストにて。"
  }
};

function getLocalizedCardTitle(card, lang, archId) {
  if (!card || lang === "es") return card.titulo;
  
  // 0. Story card title check
  if (typeof getLocalizedStoryCard === "function") {
    const sc = getLocalizedStoryCard(card, lang) || getLocalizedStoryCard(card.storyId || card.contradiccion_id || card.id, lang);
    if (sc && sc.titulo) return sc.titulo;
  }

  // Direct dictionary hit
  if (CARD_TITLE_TRANSLATIONS[lang]?.[card.titulo]) {
    return CARD_TITLE_TRANSLATIONS[lang][card.titulo];
  }

  // Handle clash titles: "Pelea vs. [Rival]"
  if (card.id === "pelea") {
    let rivalName = card.titulo.replace(/^Pelea vs\. /i, "").trim();
    if (RIVAL_TRANSLATIONS[lang]?.[rivalName]) {
      rivalName = RIVAL_TRANSLATIONS[lang][rivalName];
    }
    return lang === "ja" ? `レスバトル vs. ${rivalName}` : `Clash vs. ${rivalName}`;
  }

  // Handle common generic suits
  const archKey = typeof getArchKey === "function" ? getArchKey(archId) : (archId || "");
  const suitTitles = {
    en: {
      meme: "Post a Viral Meme",
      descanso: "Digital Detox & Rest",
      patrocinio: "Sponsored Brand Post",
      hilo: "In-Depth Analysis Thread",
      quote: "Sharp Quote-Tweet",
      live: "Live-Tweet Commentary",
      temaDelDia: "Trending Topic Take",
      politica: "Political Stance Post",
      tema: "Niche Specialty Post",
      bait: "High-Engagement Bait"
    },
    ja: {
      meme: "バズりミームを投稿",
      descanso: "デジタルデトックス",
      patrocinio: "スポンサー付き広告投稿",
      hilo: "深掘り解説スレッド",
      quote: "辛口引用リポスト",
      live: "リアルタイム実況",
      temaDelDia: "トレンドへの言及",
      politica: "政治的主張",
      tema: "得意分野の専門ツイート",
      bait: "議論を呼ぶ釣り投稿"
    }
  };

  if (suitTitles[lang]?.[card.id]) {
    return suitTitles[lang][card.id];
  }

  return card.titulo;
}

function getLocalizedCardTweet(card, lang, archId) {
  if (!card || lang === "es") return card.texto || card.titulo || "";
  const archKey = typeof getArchKey === "function" ? getArchKey(archId) : (archId || "gamer");

  // 0. Story card tweet check
  if (typeof getLocalizedStoryCard === "function") {
    const sc = getLocalizedStoryCard(card, lang) || getLocalizedStoryCard(card.storyId || card.contradiccion_id || card.id, lang);
    if (sc && sc.texto) return sc.texto;
  }

  const suitKey = card.id || card.palo?.id || card.palo || "";

  // Check contextual pool for this archetype
  const pool = CONTEXTUAL_TWEETS_BY_ARCH[lang]?.[archKey] || CONTEXTUAL_TWEETS_BY_ARCH[lang]?.gamer;
  if (pool && pool[suitKey]) {
    return pool[suitKey];
  }

  // Check generic suit fallback
  if (GENERIC_SUIT_TWEETS[lang]?.[suitKey]) {
    return GENERIC_SUIT_TWEETS[lang][suitKey];
  }

  // Specific suit fallbacks
  if (suitKey === "descanso") {
    return lang === "ja" 
      ? "今日は完全ログアウト。メンタル回復のために画面から離れて休みます。みんなもお疲れ様！"
      : "Logging off today. Stepping away from the timeline for mental peace. Take care, everyone!";
  }
  if (suitKey === "patrocinio") {
    return lang === "ja"
      ? "【PR】素敵なスポンサー様とのパートナーシップ！ 詳細リンクは固定ポストにて。"
      : "Proud to partner with our incredible sponsors on this release! Check link in bio for details.";
  }

  return card.texto || card.titulo || "";
}

function getLocalizedStoryHeadline(archId, lang) {
  const archKey = typeof getArchKey === "function" ? getArchKey(archId) : (archId || "");
  if (lang === "es" || !STORY_HEADLINES_LOCALIZED[lang]) {
    const DEFAULT_ES = {
      gamer: "Autos caros y una LLC de Delaware",
      podcaster: "La modelo y su amigo misterioso",
      influencer: "Sesión de fotos con una nave importada",
      techie: "Hackearon el exchange",
      humor: "Corralito digital cripto",
      conspiranoico: "Comando Fierro en las sombras",
      periodista: "Allanamiento judicial y sociedad fantasma",
      futbolero: "Murmullos en los palcos de la AFA",
      onlyfans: "El paseo secreto en el auto de lujo",
      cryptobro: "La wallet expuesta del político",
      militante: "Las casas que nunca se hicieron",
      opinologo: "La verdad oculta dos años después"
    };
    return DEFAULT_ES[archKey] || "Revelación clave de la trama en el timeline.";
  }
  return STORY_HEADLINES_LOCALIZED[lang]?.[archKey] || (lang === "ja" ? "タイムラインに浮かぶ事件の真相。" : "Crucial plot revelation on the timeline.");
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CARD_TITLE_TRANSLATIONS,
    RIVAL_TRANSLATIONS,
    STORY_HEADLINES_LOCALIZED,
    getLocalizedCardTitle,
    getLocalizedCardTweet,
    getLocalizedStoryHeadline
  };
}
