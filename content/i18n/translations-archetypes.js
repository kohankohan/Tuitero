/**
 * Tuitero v19 — Localización de Arquetipos, Personalidades y Boosters
 * Adaptación cultural para Español (ES), Inglés (EN) y Japonés (JA)
 */

const ARCHETYPE_TRANSLATIONS = {
  es: {
    archetypes: {
      opinologo: {
        nombre: "Opinólogo/a",
        desc: "Tuitea sobre todo sin saber de nada. Especialista en indignación y sentencias definitivas.",
        dif: "Dificultad: Alta"
      },
      futbolero: {
        nombre: "Futbolero/a",
        desc: "La vida es una final de Copa del Mundo. Odia a los rivales y vive del bardo en el entretiempo.",
        dif: "Dificultad: Media"
      },
      militante: {
        nombre: "Militante Político/a",
        desc: "Defiende la causa 24/7. El algoritmo es una trinchera ideológica sin grises.",
        dif: "Dificultad: Alta"
      },
      humor: {
        nombre: "Cuenta de Humor",
        desc: "Memes, shitpost y robos descarados de chistes. Todo sea por la dopamina del retuit.",
        dif: "Dificultad: Baja"
      },
      periodista: {
        nombre: "Periodista Indie",
        desc: "'Urgente', fuentes en off y primicias dudosas. Credibilidad frágil pero adicto a la primicia.",
        dif: "Dificultad: Alta"
      },
      cryptobro: {
        nombre: "Crypto Bro",
        desc: "To the moon, lambos y libertad financiera. Sobrevive a fuerza de café y velas rojas.",
        dif: "Dificultad: Media"
      },
      gamer: {
        nombre: "Gamer / Streamer",
        desc: "Clips virales, quejas del meta y rage quits. La comunidad lo ama hasta que prende la cámara.",
        dif: "Dificultad: Baja"
      },
      conspiranoico: {
        nombre: "Conspiranoico/a",
        desc: "Cree que nada es lo que parece. Conecta puntos invisibles con hilo rojo y paranoia pura.",
        dif: "Dificultad: Media"
      },
      influencer: {
        nombre: "Influencer Lifestyle",
        desc: "Aesthetics, café de especialidad y canjes eternos. Sonríe mientras vende aspiraciones.",
        dif: "Dificultad: Baja"
      },
      onlyfans: {
        nombre: "Creador/a de Contenido Erótico",
        desc: "Bait sutil, interacción constante y monetización al mango. Un ojo en la cámara y otro en el saldo.",
        dif: "Dificultad: Media"
      },
      techie: {
        nombre: "Techie / Startup Bro",
        desc: "IA, rondas de inversión y disrupción constante. Cita a Steve Jobs y duerme 4 horas.",
        dif: "Dificultad: Media"
      },
      podcaster: {
        nombre: "Podcaster",
        desc: "Entrevistas de 3 horas sobre la vida. Micrófono caro y opiniones infinitas sobre el éxito.",
        dif: "Dificultad: Media"
      }
    },
    personalities: {
      picante: { nombre: "Picante", desc: "Provocador y filoso. Genera bardo instantáneo." },
      academico: { nombre: "Académico", desc: "Hilos eternos, gráficos y tono profesoral." },
      conciliador: { nombre: "Conciliador", desc: "Busca consensos y pide calma. Suele ser devorado." },
      troll: { nombre: "Troll", desc: "Provocador nato. Máximo riesgo de cancelación pero enorme impacto viral.", riesgo: "Alto", retorno: "Alto", bonus: "+15% impacto en Peleas y Baits", malus: "+Odio en fracasos" },
      wholesome: { nombre: "Wholesome", desc: "Buen trato y buena onda. Protege la salud mental. Nobleza premiada.", riesgo: "Bajo", retorno: "Medio", bonus: "+10% éxito en Tema Propio", malus: "-15% en Peleas" },
      gracioso: { nombre: "Gracioso", desc: "El todoterreno del humor. Transforma cualquier tema en risa.", riesgo: "Medio", retorno: "Medio", bonus: "+12% en Memes y Quotes", malus: "-10% en Hilos" },
      informativo: { nombre: "Informativo", desc: "Construye credibilidad a largo plazo. El camino riguroso pero seguro.", riesgo: "Medio", retorno: "Alto (lento)", bonus: "+15% credibilidad en Hilos y Datos", malus: "-10% viralidad en Memes" }
    },
    boosters: {
      verif: { nombre: "Pagar Verificado", desc: "Comprás la tilde azul. El algoritmo te muestra a la fuerza pero te miran de reojo." },
      ads: { nombre: "Pauta en el Feed", desc: "Invertís en anuncios para inflar impresiones artificialmente." },
      ghost: { nombre: "Community Manager Pro", desc: "Delegás la redacción en un profesional para blindar tu credibilidad." },
      shoutout: { nombre: "Mención de Famoso", desc: "Un pez gordo del timeline te cita y te llueven notificaciones." },
      bots: { nombre: "Comprar Seguidores Fantasma", desc: "Granjas de cuentas falsas para inflar el número rápido sin engagement real." },
      agencia_pr: { nombre: "Agencia de PR & Influencers", desc: "Campaña de contención y lavado de imagen para frenar el odio masivo." },
      trollfarm: { nombre: "Granja de Trolls Defensiva", desc: "Brigada digital que ataca a tus críticos y desvía la conversación." }
    }
  },

  en: {
    archetypes: {
      opinologo: {
        nombre: "Pundit / Hot-Take Artist",
        desc: "Unsolicited expertise on every breaking crisis. Loud, polarizing, and perpetually trending.",
        dif: "Difficulty: High"
      },
      futbolero: {
        nombre: "Sports Ultra / Fanatic",
        desc: "Every day is a championship derby. Measures human worth by club loyalty and hates rivals on sight.",
        dif: "Difficulty: Medium"
      },
      militante: {
        nombre: "Culture Warrior / Partisan",
        desc: "Defends the narrative 24/7. The algorithm is a culture war trench with zero gray areas.",
        dif: "Difficulty: High"
      },
      humor: {
        nombre: "Meme Page / Shitposter",
        desc: "Low-effort memes and brazenly stolen jokes. Clout is the only currency that matters.",
        dif: "Difficulty: Low"
      },
      periodista: {
        nombre: "Independent Journalist",
        desc: "'BREAKING NEWS', anonymous insiders, and unverified leaks. Addicted to scoops over facts.",
        dif: "Difficulty: High"
      },
      cryptobro: {
        nombre: "Crypto Degenerate / Web3 Bro",
        desc: "To the moon, laser eyes, and financial freedom. Thrives on copium and red candle volatility.",
        dif: "Difficulty: Medium"
      },
      gamer: {
        nombre: "Gamer / Streamer",
        desc: "Viral clips, tier list arguments, and raging hot mics. Loved right up until the livestream goes wrong.",
        dif: "Difficulty: Low"
      },
      conspiranoico: {
        nombre: "Conspiracy Truther",
        desc: "Convinced reality is an orchestrated simulation. Connects imaginary dots with red yarn.",
        dif: "Difficulty: Medium"
      },
      influencer: {
        nombre: "Lifestyle Influencer",
        desc: "Oat lattes, neutral color palettes, and endless brand sponsorships. Toxic positivity in beige.",
        dif: "Difficulty: Low"
      },
      onlyfans: {
        nombre: "Spicy Creator / Thirst Trapper",
        desc: "Seductive bait, flirty interactions, and high subscription monetization. Turning scrolls into revenue.",
        dif: "Difficulty: Medium"
      },
      techie: {
        nombre: "Tech Founder / Hustle Bro",
        desc: "AI evangelist, seed rounds, and continuous disruption. Quotes Steve Jobs and sleeps 4 hours.",
        dif: "Difficulty: Medium"
      },
      podcaster: {
        nombre: "Podcast Host",
        desc: "Three-hour unedited rambles about life and stoicism. High-end mic, questionable insight.",
        dif: "Difficulty: Medium"
      }
    },
    personalities: {
      picante: { nombre: "Spicy", desc: "Provocative, biting, and always fueling ratio wars." },
      academico: { nombre: "Academic", desc: "Exhaustive multi-tweet threads with footnotes and charts." },
      conciliador: { nombre: "Diplomatic", desc: "Appeals for nuance and calm. Often gets ratioed by both sides." },
      troll: { nombre: "Troll", desc: "Born provocateur. Maximum cancellation risk but huge viral impact.", riesgo: "High", retorno: "High", bonus: "+15% impact on Clashes & Baits", malus: "+Hate on failed tweets" },
      wholesome: { nombre: "Wholesome", desc: "Good vibes and clean demeanor. Shields mental health. Rewarded for kindness.", riesgo: "Low", retorno: "Medium", bonus: "+10% success on Niche Topics", malus: "-15% in Clashes" },
      gracioso: { nombre: "Witty", desc: "All-terrain humor. Turns every drama into laughs.", riesgo: "Medium", retorno: "Medium", bonus: "+12% on Memes & Quote-tweets", malus: "-10% on Long Threads" },
      informativo: { nombre: "Data-Driven", desc: "Builds durable credibility over time. The rigorous, steady climb.", riesgo: "Medium", retorno: "High (Slow)", bonus: "+15% credibility on Threads & Data", malus: "-10% virality on Memes" }
    },
    boosters: {
      verif: { nombre: "Blue Checkmark Subscription", desc: "Pay for algorithmic boost. Visibility explodes, but everyone judges you." },
      ads: { nombre: "Sponsored Feed Ads", desc: "Pump ad spend into the timeline to artificially juice your impressions." },
      ghost: { nombre: "Pro Ghostwriter / Social Lead", desc: "Outsource your tweets to a savvy operator to shield your credibility." },
      shoutout: { nombre: "Celebrity Repost", desc: "A timeline titan quotes your post, unleashing an avalanche of notifications." },
      bots: { nombre: "Buy Bot Swarm", desc: "Instant vanity metrics that pump follower counts with zero organic engagement." },
      agencia_pr: { nombre: "PR Agency & Crisis Control", desc: "Professional image laundering that suppresses hate spikes and media fallout." },
      trollfarm: { nombre: "Digital Defense Militia", desc: "A coordinated troll army that harasses detractors and derails bad press." }
    }
  },

  ja: {
    archetypes: {
      opinologo: {
        nombre: "ご意見番 / 物申す系",
        desc: "専門知識ゼロで全トレンドに首を突っ込む。上から目線の正論パンチで連日トレンド入り。",
        dif: "難易度: 上級"
      },
      futbolero: {
        nombre: "熱狂的サポーター / ガチ勢",
        desc: "人生は常に天王山。推しチームの勝利が全てで、ライバル陣営の煽りとレスバが生き甲斐。",
        dif: "難易度: 中級"
      },
      militante: {
        nombre: "政治系インフルエンサー",
        desc: "推し陣営を全肯定し、対立陣営を全否定。白黒つけなきゃ気が済まないネット論客。",
        dif: "難易度: 上級"
      },
      humor: {
        nombre: "ネタ垢 / ミーム職人",
        desc: "パクツイ、クソコラ、時事ネタ擦り倒し。バズるためならプライドすら投げ捨てる。",
        dif: "難易度: 初級"
      },
      periodista: {
        nombre: "インディー記者 / 速報民",
        desc: "「独自取材」「関係者談」を乱発。裏取りよりも最速ツイート、誤報すらエンタメ化。",
        dif: "難易度: 上級"
      },
      cryptobro: {
        nombre: "暗号資産トレーダー / クリプト民",
        desc: "億り人を夢見て草コインに特攻。暴落相場でも虚勢を張り続け、次の爆益を信じる。",
        dif: "難易度: 中級"
      },
      gamer: {
        nombre: "ゲーム配信者 / ストリーマー",
        desc: "大会の切り抜き動画と台パン配信で同接を稼ぐ。失言ひとつで大炎上する綱渡り生活。",
        dif: "難易度: 初級"
      },
      conspiranoico: {
        nombre: "考察系 / 陰謀論ウォッチャー",
        desc: "「メディアが報じない真実」を追い求める考察班。点と点を無理やり繋ぎ信者を獲得。",
        dif: "難易度: 中級"
      },
      influencer: {
        nombre: "キラキラ系インフルエンサー",
        desc: "オーガニックカフェと丁寧な暮らしのPR案件。フィルター越しの虚構で承認欲求を満たす。",
        dif: "難易度: 初級"
      },
      onlyfans: {
        nombre: "裏垢女子 / ファンクラブ運営",
        desc: "匂わせチラ見せと有料限定コンテンツ。孤独なネット民を沼らせて現金を巻き上げる。",
        dif: "難易度: 中級"
      },
      techie: {
        nombre: "ITベンチャー起業家 / Web系信者",
        desc: "AI、シード調達、ゲームチェンジャー。横文字カタカナ語を乱射して業界を牽引気取り。",
        dif: "難易度: 中級"
      },
      podcaster: {
        nombre: "ポッドキャスター / 音声配信者",
        desc: "高級マイクを前に人生論を語り明かす長尺雑談。中身は薄いが熱狂的リスナーが信奉。",
        dif: "難易度: 中級"
      }
    },
    personalities: {
      picante: { nombre: "辛口 / 煽り系", desc: "皮肉たっぷりの毒舌。常に炎上すれすれの刺激を投下。" },
      academico: { nombre: "インテリ / 理論派", desc: "長文ツリーと統計データで圧倒する教授スタイル。" },
      conciliador: { nombre: "平和主義 / バランス派", desc: "「みんな仲良く」を唱えるが、両陣営から叩かれがち。" },
      troll: { nombre: "トロール / 煽り系", desc: "天性の煽り屋。炎上リスクは極大だが、爆発的な拡散力を誇る。", riesgo: "高", retorno: "高", bonus: "レスバトルと釣り投稿の効果 +15%", malus: "失敗時のヘイト上昇量増加" },
      wholesome: { nombre: "聖人 / 癒やし系", desc: "平和的で温かい交流。メンタルヘルスを守り、誠実さで愛される。", riesgo: "低", retorno: "中", bonus: "専門テーマツイートの成功率 +10%", malus: "レスバトルの効果 -15%" },
      gracioso: { nombre: "ユーモア / お笑い枠", desc: "笑いのオールラウンダー。どんな話題もユーモアに変えて笑い飛ばす。", riesgo: "中", retorno: "中", bonus: "ミーム・引用RTの効果 +12%", malus: "長文解説スレッドの効果 -10%" },
      informativo: { nombre: "知識人 / 解説系", desc: "確かなファクトと分析で長期的な信頼を築く、堅実な王道スタイル。", riesgo: "中", retorno: "高（大器晩成）", bonus: "長文スレッド・データ投稿の信用度 +15%", malus: "ミームツイートの拡散力 -10%" }
    },
    boosters: {
      verif: { nombre: "認証バッジ課金", desc: "青バッジを購入して露出度爆上げ。ただし界隈からは冷ややかな目で見られる。" },
      ads: { nombre: "タイムライン広告出稿", desc: "課金しておすすめ欄をジャック。数字を無理やり底上げする。" },
      ghost: { nombre: "専属SNS運用代行の雇用", desc: "プロに運用を丸投げし、炎上回避とブランディングを徹底。" },
      shoutout: { nombre: "大物インフルエンサーの引用RT", desc: "ネットの権力者に拾われ、通知欄が爆発する。" },
      bots: { nombre: "海外ボット部隊の大量購入", desc: "見栄のためだけにフォロワー数を水増し。エンゲージメントは皆無。" },
      agencia_pr: { nombre: "大手PR代理店 ＆ 危機管理", desc: "プロの火消しチームを雇い、炎上を鎮静化させて好感度を回復。" },
      trollfarm: { nombre: "親衛隊トロールファーム", desc: "批判的なリプ欄をアンチ攻撃部隊で埋め尽くし、言論を封殺。" }
    }
  }
};

// Registrar en el motor i18n
if (typeof i18n !== "undefined") {
  i18n.registerDictionary("es", ARCHETYPE_TRANSLATIONS.es);
  i18n.registerDictionary("en", ARCHETYPE_TRANSLATIONS.en);
  i18n.registerDictionary("ja", ARCHETYPE_TRANSLATIONS.ja);
}
