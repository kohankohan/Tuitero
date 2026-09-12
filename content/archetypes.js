/* ═══════════════════════════════════════════════════════════
   Twitero v15 — content/archetypes.js
   Definición declarativa de arquetipos, personalidades, palos y flexión de género.
   ═══════════════════════════════════════════════════════════ */

const ARCHETYPES = [
  {
    id: "opinologo",
    nombre: "Opinólogo/a",
    icono: "🧐",
    defaultHandle: "@opinologo_ok",
    desc: "Opina de todo con absoluta convicción. Juicios tajantes sin matices.",
    dificultad: "alta",
    difLabel: "ALTA",
    difDesc: "Peligro de cancelación constante. Doble castigo en strikes.",
    deb: ["meme", "descanso"],
    bajomon: true,
    odioRed: true,
    afines: ["tema", "quote"],
    debiles: ["meme"]
  },
  {
    id: "futbolero",
    nombre: "Futbolero/a",
    icono: "⚽",
    defaultHandle: "@futbolero_x",
    desc: "La pasión por los colores por encima de la razón. Termo total.",
    dificultad: "media",
    difLabel: "MEDIA",
    difDesc: "Bardo clásico de hinchadas. El odio sube en partidos clave.",
    deb: ["temaDelDia", "politica"],
    bajomon: true,
    odioRed: false,
    afines: ["live", "meme"],
    debiles: ["temaDelDia", "politica"]
  },
  {
    id: "militante",
    nombre: "Militante Político/a",
    icono: "✌️",
    defaultHandle: "@militante_nac",
    desc: "Defiende la camiseta partidaria a capa y espada en cada batalla cultural.",
    dificultad: "alta",
    difLabel: "ALTA",
    difDesc: "Polarización extrema. Cada tweet político acumula Odio masivo.",
    deb: ["descanso", "quote"],
    bajomon: true,
    odioRed: true,
    afines: ["politica", "hilo"],
    debiles: ["quote"]
  },
  {
    id: "humor",
    nombre: "Cuenta de Humor",
    icono: "🎭",
    defaultHandle: "@humor_argento",
    desc: "Vive del meme y la risa rápida. El comodín más querido del feed.",
    dificultad: "baja",
    difLabel: "BAJA",
    difDesc: "El meme une al timeline. Alta tracción de Amor y bajo riesgo de Odio.",
    deb: ["hilo", "politica"],
    bajomon: false,
    odioRed: false,
    afines: ["meme", "quote"],
    debiles: ["hilo", "politica"]
  },
  {
    id: "periodista",
    nombre: "Periodista Indie",
    icono: "📰",
    defaultHandle: "@periodista_indie",
    desc: "Busca la primicia y el rigor de los datos frente al poder.",
    dificultad: "media",
    difLabel: "MEDIA",
    difDesc: "Riesgo si publicás primicias sin chequear. Credibilidad en juego.",
    deb: ["meme", "quote"],
    bajomon: true,
    odioRed: false,
    afines: ["hilo", "temaDelDia"],
    debiles: ["meme", "quote"]
  },
  {
    id: "cryptobro",
    nombre: "Crypto Bro",
    icono: "🚀",
    defaultHandle: "@pibe_cripto",
    desc: "Tokens, futuros, high risk / high reward. Obsesionado con el gráfico.",
    dificultad: "alta",
    difLabel: "ALTA",
    difDesc: "Alta volatilidad. Las caídas de mercado desatan acusaciones de estafa.",
    deb: ["hilo", "live"],
    bajomon: false,
    odioRed: false,
    afines: ["tema", "temaDelDia"],
    debiles: ["hilo", "live"],
    exentoPat: true
  },
  {
    id: "gamer",
    nombre: "Gamer / Streamer",
    icono: "🎮",
    defaultHandle: "@gamer_stream",
    desc: "Reacciones en vivo, clips y torneos. Audiencia joven y fiel.",
    dificultad: "media",
    difLabel: "MEDIA",
    difDesc: "Drama en transmisiones en vivo y clips fuera de contexto.",
    deb: ["live", "politica"],
    bajomon: false,
    odioRed: false,
    afines: ["meme", "live"],
    debiles: ["politica"]
  },
  {
    id: "conspiranoico",
    nombre: "Conspiranoico/a",
    icono: "🛸",
    defaultHandle: "@verdad_oculta",
    desc: "Ve lo que nadie más ve. Conecta puntos invisibles contra el sistema.",
    dificultad: "alta",
    difLabel: "ALTA",
    difDesc: "Límite de moderación. Reportes masivos y riesgo de baneo constante.",
    deb: ["descanso", "meme"],
    bajomon: true,
    odioRed: true,
    afines: ["hilo", "temaDelDia"],
    debiles: ["meme"]
  },
  {
    id: "influencer",
    nombre: "Influencer Lifestyle",
    icono: "✨",
    defaultHandle: "@lifestyle_glow",
    desc: "Estética impecable, marcas exclusivas y café con arte latte.",
    dificultad: "baja",
    difLabel: "BAJA",
    difDesc: "Estética aspiracional y marcas. La comunidad rara vez cancela por fotos.",
    deb: ["hilo", "temaDelDia"],
    bajomon: false,
    odioRed: false,
    afines: ["patrocinio", "live"],
    debiles: ["hilo"],
    exentoPat: true
  },
  {
    id: "onlyfans",
    nombre: "Creador/a OnlyFans",
    icono: "🔞",
    defaultHandle: "@content_vip",
    desc: "Contenido adulto, suscripciones y altísima monetización directa.",
    dificultad: "media",
    difLabel: "MEDIA",
    difDesc: "Monetización récord pero riesgo de purgas algorítmicas de la plataforma.",
    deb: ["politica", "hilo"],
    bajomon: false,
    odioRed: false,
    afines: ["patrocinio", "tema"],
    debiles: ["politica", "hilo"],
    exentoPat: true
  },
  {
    id: "techie",
    nombre: "Techie / Startup Bro",
    icono: "💻",
    defaultHandle: "@startup_bro",
    desc: "Build in public, SaaS, inteligencia artificial y lanzamientos virales.",
    dificultad: "media",
    difLabel: "MEDIA",
    difDesc: "Exposición al escrutinio del nicho techie y reclamos de humo.",
    deb: ["live", "temaDelDia"],
    bajomon: false,
    odioRed: false,
    afines: ["hilo", "tema"],
    debiles: ["temaDelDia"]
  },
  {
    id: "podcaster",
    nombre: "Podcaster",
    icono: "🎙️",
    defaultHandle: "@podcast_live",
    desc: "Entrevistas bomba y clips virales de largo alcance para debate.",
    dificultad: "baja",
    difLabel: "BAJA",
    difDesc: "Audiencia fiel y formato largo. El debate suele ser constructivo.",
    deb: ["meme", "quote"],
    bajomon: false,
    odioRed: false,
    afines: ["hilo", "live"],
    debiles: ["meme", "quote"]
  }
];

const PERSONALITIES = [
  {
    id: "troll",
    nombre: "Troll",
    icono: "😈",
    riesgo: "Alto",
    retorno: "Alto",
    desc: "Provocador nato. Máximo riesgo de cancelación pero enorme impacto viral.",
    afines: ["pelea", "quote", "bait"],
    reducida: "hilo",
    bonus: "+15% impacto en Peleas y Baits",
    malus: "+Odio en fracasos"
  },
  {
    id: "wholesome",
    nombre: "Wholesome",
    icono: "😇",
    riesgo: "Bajo",
    retorno: "Medio",
    desc: "Buen trato y buena onda. Protege la salud mental. Nobleza premiada.",
    afines: ["descanso", "tema"],
    reducida: "pelea",
    bonus: "+10% éxito en Tema Propio",
    malus: "-15% en Peleas"
  },
  {
    id: "gracioso",
    nombre: "Gracioso",
    icono: "😂",
    riesgo: "Medio",
    retorno: "Medio",
    desc: "El todoterreno del humor. Transforma cualquier tema en risa.",
    afines: ["meme", "quote"],
    reducida: "hilo",
    bonus: "+12% en Memes y Quotes",
    malus: "-10% en Hilos"
  },
  {
    id: "informativo",
    nombre: "Informativo",
    icono: "🧠",
    riesgo: "Medio",
    retorno: "Alto (lento)",
    desc: "Construye credibilidad a largo plazo. El camino riguroso pero seguro.",
    afines: ["hilo", "temaDelDia"],
    reducida: "meme",
    bonus: "+15% en Hilos",
    malus: "-12% en Memes"
  }
];

const COMBOS_ESPERABLES = [
  ["militante", "troll"],
  ["periodista", "informativo"],
  ["humor", "gracioso"],
  ["influencer", "wholesome"]
];

const CARD_PALOS = {
  meme:       { nombre: "Meme",             icono: "😂", color: "#ec4899" },
  tema:       { nombre: "Tema Propio",      icono: "✍️", color: "#1d9bf0" },
  pelea:      { nombre: "Pelea",            icono: "⚔️", color: "#ef4444" },
  hilo:       { nombre: "Hilo",             icono: "🧵", color: "#8b5cf6" },
  quote:      { nombre: "Quote Polémico",   icono: "💬", color: "#f59e0b" },
  live:       { nombre: "Live-tweet",       icono: "🔴", color: "#f97316" },
  temaDelDia: { nombre: "Tema del Día",     icono: "🔥", color: "#eab308" },
  politica:   { nombre: "Política",         icono: "🏛️", color: "#64748b" },
  bait:       { nombre: "Bait",             icono: "🪤", color: "#06b6d4" },
  patrocinio: { nombre: "Patrocinado",      icono: "💰", color: "#10b981" },
  descanso:   { nombre: "Desconexión",      icono: "🧘", color: "#14b8a6" },
  evento:     { nombre: "Evento Especial",  icono: "⚡", color: "#a855f7" }
};

const CARD_CONCEPT_DESCS = {
  meme:       "Contenido rápido y ligero. Suma Engagement y Amor, reduce Odio orgánicamente.",
  tema:       "Tweet sobre tu área de especialidad. Alta probabilidad de éxito y baja de Odio.",
  pelea:      "Enfrentamiento directo en el TL. Gran Engagement pero alto riesgo de Odio.",
  hilo:       "Análisis en profundidad. Construye Credibilidad y Amor en la comunidad.",
  quote:      "Comentario picante a otra cuenta. Mezcla de debate y humor punzante.",
  live:       "Comentario en tiempo real. Alta tracción de Viralidad si el timing es acertado.",
  temaDelDia: "Subirse a la tendencia #1. Gran alcance masivo con público heterogéneo.",
  politica:   "Postura sobre la coyuntura. Genera fuerte polarización y Odio elevado.",
  bait:       "Tweet polémico diseñado para generar respuestas masivas y alto Engagement artificial.",
  patrocinio: "Tuit pagado por una marca. Ingreso directo de dinero a costo de Credibilidad.",
  descanso:   "Apagar el teléfono y despejar la mente. Reduce masivamente el Odio y recupera Salud Mental.",
  evento:     "Elección estratégica de evento especial coyuntural."
};

const GENERO_LABELS = { hombre: "Él", mujer: "Ella", diverso: "Elle" };

const ARCHETYPE_GENDER_RESTRICTIONS = {
  hombre: ["opinologo", "futbolero", "militante", "humor", "periodista", "cryptobro", "gamer", "conspiranoico", "influencer", "techie", "podcaster"],
  mujer: ["opinologo", "futbolero", "militante", "periodista", "gamer", "conspiranoico", "influencer", "onlyfans", "podcaster"],
  diverso: ["opinologo", "militante", "periodista", "gamer", "influencer", "onlyfans", "techie", "podcaster"]
};

function isArchetypeAvailableForGender(archId, genero) {
  const g = genero || "hombre";
  const allowed = ARCHETYPE_GENDER_RESTRICTIONS[g];
  return allowed ? allowed.includes(archId) : true;
}

function getGenderedArchetype(arch, genero) {
  if (!arch) return "";
  const g = genero || "hombre";
  const map = {
    opinologo:     { hombre: "Opinólogo",               mujer: "Opinóloga",               diverso: "Opinólogue" },
    futbolero:     { hombre: "Futbolero",               mujer: "Futbolera",               diverso: "Futbolere" },
    militante:     { hombre: "Militante Político",      mujer: "Militante Política",      diverso: "Militante Políticx" },
    humor:         { hombre: "Cuenta de Humor",         mujer: "Cuenta de Humor",         diverso: "Cuenta de Humor" },
    periodista:    { hombre: "Periodista Indie",        mujer: "Periodista Indie",        diverso: "Periodista Indie" },
    cryptobro:     { hombre: "Crypto Bro",              mujer: "Crypto Girl",             diverso: "Crypto X" },
    gamer:         { hombre: "Gamer / Streamer",        mujer: "Gamer / Streamer",        diverso: "Gamer / Streamer X" },
    conspiranoico: { hombre: "Conspiranoico",           mujer: "Conspiranoica",           diverso: "Conspiranoique" },
    influencer:    { hombre: "Influencer Lifestyle",    mujer: "Influencer Lifestyle",    diverso: "Influencer Lifestyle" },
    onlyfans:      { hombre: "Creador OnlyFans",        mujer: "Creadora OnlyFans",       diverso: "Creadorx OnlyFans" },
    techie:        { hombre: "Techie / Startup Bro",    mujer: "Techie / Startup Girl",   diverso: "Techie X" },
    podcaster:     { hombre: "Podcaster",               mujer: "Podcastera",              diverso: "Podcasterx" }
  };
  return map[arch.id]?.[g] || arch.nombre;
}

function getGenderedDefaultHandle(arch, genero) {
  if (!arch) return "@twitero";
  const g = genero || "hombre";
  const handleMap = {
    opinologo:     { hombre: "@opinologo_ok",  mujer: "@opinologa_ok",  diverso: "@opinologue_ok" },
    futbolero:     { hombre: "@futbolero_x",   mujer: "@futbolera_x",   diverso: "@futbolere_x" },
    militante:     { hombre: "@militante_nac", mujer: "@militante_nac", diverso: "@militante_nac" },
    humor:         { hombre: "@humor_argento", mujer: "@humor_argento", diverso: "@humor_argento" },
    periodista:    { hombre: "@periodista_indie", mujer: "@periodista_indie", diverso: "@periodista_indie" },
    cryptobro:     { hombre: "@pibe_cripto",   mujer: "@piba_cripto",   diverso: "@crypto_x" },
    gamer:         { hombre: "@gamer_stream",  mujer: "@gamer_stream",  diverso: "@gamer_stream" },
    conspiranoico: { hombre: "@verdad_oculta", mujer: "@verdad_oculta", diverso: "@verdad_oculta" },
    influencer:    { hombre: "@lifestyle_glow",mujer: "@lifestyle_glow",diverso: "@lifestyle_glow" },
    onlyfans:      { hombre: "@content_vip",   mujer: "@content_vip",   diverso: "@content_vip" },
    techie:        { hombre: "@startup_bro",   mujer: "@startup_girl",  diverso: "@startup_x" },
    podcaster:     { hombre: "@podcast_live",  mujer: "@podcast_live",  diverso: "@podcast_live" }
  };
  return handleMap[arch.id]?.[g] || arch.defaultHandle || "@twitero";
}

function getGenderedArchetypeDesc(arch, genero) {
  if (!arch) return "";
  const g = genero || "hombre";
  const descMap = {
    cryptobro: {
      hombre: "Tokens, futuros, high risk / high reward. Obsesionado con el gráfico.",
      mujer:  "Tokens, futuros, high risk / high reward. Obsesionada con el gráfico.",
      diverso:"Tokens, futuros, high risk / high reward. Obsesionade con el gráfico."
    },
    humor: {
      hombre: "Vive del meme y la risa rápida. El comodín más querido del feed.",
      mujer:  "Vive del meme y la risa rápida. La comodín más querida del feed.",
      diverso:"Vive del meme y la risa rápida. Le comodín más queride del feed."
    },
    conspiranoico: {
      hombre: "Ve lo que nadie más ve. Conecta puntos invisibles contra el sistema.",
      mujer:  "Ve lo que nadie más ve. Conecta puntos invisibles contra el sistema.",
      diverso:"Ve lo que nadie más ve. Conecta puntos invisibles contra el sistema."
    }
  };
  return descMap[arch.id]?.[g] || arch.desc;
}

function getGenderedPersonalityDesc(pers, genero) {
  if (!pers) return "";
  const g = genero || "hombre";
  const descMap = {
    troll: {
      hombre: "Provocador nato. Máximo riesgo de cancelación pero enorme impacto viral.",
      mujer:  "Provocadora nata. Máximo riesgo de cancelación pero enorme impacto viral.",
      diverso:"Provocadore nate. Máximo riesgo de cancelación pero enorme impacto viral."
    },
    wholesome: {
      hombre: "Buen trato y buena onda. Protege la salud mental. Nobleza premiada.",
      mujer:  "Buen trato y buena onda. Protege la salud mental. Nobleza premiada.",
      diverso:"Buen trato y buena onda. Protege la salud mental. Nobleza premiada."
    },
    gracioso: {
      hombre: "El todoterreno del humor. Transforma cualquier tema en risa.",
      mujer:  "La todoterreno del humor. Transforma cualquier tema en risa.",
      diverso:"Le todoterreno del humor. Transforma cualquier tema en risa."
    },
    informativo: {
      hombre: "Construye credibilidad a largo plazo. El camino riguroso pero seguro.",
      mujer:  "Construye credibilidad a largo plazo. El camino riguroso pero seguro.",
      diverso:"Construye credibilidad a largo plazo. El camino riguroso pero seguro."
    }
  };
  return descMap[pers.id]?.[g] || pers.desc;
}
