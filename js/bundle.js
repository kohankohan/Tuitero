/* ???????????????????????????????????????????????????????
   js/bundle.js ? Twitero v17 ? Definitive Release
   Arquitectura Senior Modular ? Clean Code & Data-Driven
   Pensado por @kohantoys | https://x.com/kohantoys
   ??????????????????????????????????????????????????????? */


/* ?? M?DULO: content/archetypes.js ?? */
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


/* ?? M?DULO: content/shop/boosters.js ?? */
/* ═══════════════════════════════════════════════════════════
   Twitero v15 — content/shop/boosters.js
   ═══════════════════════════════════════════════════════════ */
const BOOSTERS = [
  { id:"verif",     icono:"💎", nombre:"Pagar Verificado",     costo:600,  cooldown:1, desc:"+12% segs · +30 eng · Insignia azul · Multiplicador 1.25x",  fx:{ segsPct:0.12, eng:30, mult:1.25, chanceBonus:5 } },
  { id:"ads",       icono:"📢", nombre:"Pagar Ads",            costo:750,  cooldown:1, desc:"+15% segs · +35 eng · Multiplicador 1.35x",  fx:{ segsPct:0.15, eng:35, mult:1.35, chanceBonus:6 } },
  { id:"ghost",     icono:"✍️", nombre:"Contratar CM",         costo:1500, cooldown:2, desc:"+60 eng · +14% éxito · Multiplicador 1.35x", fx:{ eng:60, mult:1.35, chanceBonus:14 } },
  { id:"shoutout",  icono:"🤝", nombre:"Arrobar a un famoso",   costo:1800, cooldown:2, desc:"+25% segs · +60 eng · Multiplicador 1.5x",   fx:{ segsPct:0.25, eng:60, mult:1.50, chanceBonus:8 } },
  { id:"bots",      icono:"🤖", nombre:"Usar Bots",            costo:3000, cooldown:3, desc:"+40% segs · +10 odio · Multiplicador 1.8x",  fx:{ segsPct:0.40, odio:10, mult:1.80, chanceBonus:6 } },
  { id:"trollfarm", icono:"🧌", nombre:"Granja de Trolls",     costo:4500, cooldown:4, desc:"+120 eng · +15 odio · Multiplicador 2.0x",   fx:{ eng:120, odio:15, mult:2.00, chanceBonus:10 } }
];


/* ?? M?DULO: content/cards/memes.js ?? */
﻿// data/memes-content.js
// Contenido de la carta "Meme", 10 por arquetipo (duplicado y reescrito con voces reales de Twitter).
// Cada entrada: { titulo, engagement, hate }

const memesContent = {
  opinologo: [
    { titulo: "Meme de Maslatón con plato de bife de chorizo en Rincón de López: 'Barran para abajo que el bullmarket argentino es total e inexorable. Proceda.'", engagement: 3, hate: 1 },
    { titulo: "Todos debatiendo si hay recesión y yo clavando gráfico de velas japonesas de 1989 explicando por qué la culpa la tiene la convertibilidad tardía. Proceda.", engagement: 3, hate: 1 },
    { titulo: "Meme de Rebord con el cuadro de Perón de fondo: 'Si no entendés por qué este conflicto geopolítico se resuelve con un asado en el conurbano, no entendés Occidente.'", engagement: 3, hate: 0 },
    { titulo: "Foto de café de especialidad a medio tomar: 'Un seguidor me discutió la teoría del valor subjetivo. Le contesté con 42 tweets y la bibliografía completa de Von Mises.'", engagement: 2, hate: 1 },
    { titulo: "Meme de 'No comparto tu análisis pero proceda': El pibe que se abrió la cuenta hace tres semanas me viene a explicar a mí cómo funciona el FMI. Hermoso.", engagement: 3, hate: 0 },
    { titulo: "Me pidieron una opinión de dos líneas sobre Medio Oriente. Mandé un hilo de 75 partes citando el Tratado de Versalles. Me dicen 'mucho texto'. No la ven.", engagement: 3, hate: 1 },
    { titulo: "Foto pixelada de una asamblea universitaria de 1994: 'Yo ya vi esta película tres veces. El desenlace siempre es el mismo: devaluación y revival de Sui Generis.'", engagement: 2, hate: 0 },
    { titulo: "Meme del pizarrón de A Beautiful Mind con flechas rojas explicando por qué la suba de la nafta es en realidad una señal alcista para el mercado de futuros.", engagement: 3, hate: 1 },
    { titulo: "Fui a pagar las expensas y le di al administrador una clase magistral de 25 minutos sobre la inflación inercial. No me cobró los intereses por lástima.", engagement: 2, hate: 0 },
    { titulo: "Meme de 'El fin de la historia': Declaré que el debate cultural está saldado a mi favor. Si me responden con argumentos, los bloqueo por insolentes.", engagement: 3, hate: 2 }
  ],
  futbolero: [
    { titulo: "Meme de Riquelme tomando mate en el palco mientras el equipo pierde 3 a 0 de local: 'Tranquilos muchachos, estamos muy contentos con el plantel.'", engagement: 3, hate: 1 },
    { titulo: "Murió la redonda. La pelota está llorando lágrimas de sangre. Metieron a un 9 que corre como si tuviera dos heladeras en la espalda. Andate ya mismo del club.", engagement: 3, hate: 2 },
    { titulo: "Meme de Davo agarrándose la cabeza en stream: 'Noooo amigo mirá el gol que se erró abajo del arco, me quiero cortar los brazos con una cuchara de plástico.'", engagement: 3, hate: 0 },
    { titulo: "Lloran las viudas del tiki-tiki. Ganamos 1-0 con gol en contra en el minuto 97 colgándonos del travesaño. Así se juega al fútbol, manga de tibios.", engagement: 3, hate: 2 },
    { titulo: "Meme de La Cobra puteando a la cámara: 'Sos un microbio sin historia, naciste en 2014, cerrá el orto que jugaste en la B Nacional y la camiseta te pesa 40 kilos.'", engagement: 3, hate: 2 },
    { titulo: "El 4-3-3 que puso este tipo es una falta de respeto a la patria. Si no renuncia en el vestuario tenemos que ir todos a buscarlo a la rotonda con antorchas.", engagement: 2, hate: 1 },
    { titulo: "Meme de los dos Spidermans: Yo puteando al 5 en el entretiempo vs. el técnico sacándolo a los 46 minutos para meter a un lateral suplente lesionado.", engagement: 3, hate: 0 },
    { titulo: "Foto de la camiseta manchada de barro: 'Esto es fútbol champagne. Los que quieren ver toquecitos intranscendentes que vayan al teatro Colón a ver ballet.'", engagement: 2, hate: 0 },
    { titulo: "Terminó el partido a la 1am y a las 4 sigo debatiendo en un Space con 8 desconocidos si el lateral izquierdo le está haciendo la cama al cuerpo técnico.", engagement: 2, hate: 0 },
    { titulo: "Meme del hincha rezándole al póster de Bianchi: 'Revivió la mística copera. Ahora que vengan los brasileños que acá se comen cuatro.'", engagement: 3, hate: 1 }
  ],
  militante: [
    { titulo: "Meme de Francella en bata: 'Hermosa mañana, ¿verdad? DOMADOS. Llora el establishment y lloran las viudas del viejo régimen. CINE ABSOLUTO.'", engagement: 3, hate: 2 },
    { titulo: "SEÑORES. No la ven. Pero posta, no la ven ni cuadrada. Les rompimos el relato en cuatro tweets y todavía están tratando de entender el gráfico oficial.", engagement: 3, hate: 2 },
    { titulo: "Captura de pantalla de un opositor de hace 5 años borrando tweets: 'Mirá cómo te tengo carpetazo en mano. No borres que hay captura, ensobrado.'", engagement: 3, hate: 1 },
    { titulo: "Meme de Homero tirando dinamita al asado familiar: 'Tirando el dato de la inflación interanual justo cuando mi tío iba a empezar a quejarse del gobierno.'", engagement: 2, hate: 2 },
    { titulo: "Abro hilo demoledor desmintiendo la opereta mediática de Clarín y La Nación en 30 segundos. Si no le das RT sos cómplice del choreo institucional.", engagement: 3, hate: 1 },
    { titulo: "Meme de 'Lágrimas de zurdos': Fijé el tweet con los números oficiales de la recaudación y las menciones son un cementerio de bots llorando.", engagement: 3, hate: 2 },
    { titulo: "Nosotros no discutimos con ensobrados ni con tibios que comen panqueques. Los meamos con datos duros y los dejamos pedaleando en el aire. Fin.", engagement: 3, hate: 2 },
    { titulo: "Meme de los dos botones sudando: 'Defender la medida impopular de mi candidato' o 'Decir que fue una jugada maestra de ajedrez 4D para confundir al enemigo'.", engagement: 2, hate: 1 },
    { titulo: "El tipo cobraba 4 millones de pauta y ahora tuitea que 'prefiere la libertad de expresión'. Te conocemos de memoria, muñeco. Se acabó la joda.", engagement: 3, hate: 1 },
    { titulo: "Foto de la tropa digital en formación romana: 'Nos tiraron tres tendencias coordinadas y se las dimos vuelta con cinco cuentas y tres memes de Milei con ojos láser.'", engagement: 3, hate: 2 }
  ],
  humor: [
    { titulo: "Foto pixelada de un Renault 12 con un colchón en el techo y un cartel que dice 'se hacen fletes y exorcismos': 'Buen lunes gente, a ponerle el lomo.'", engagement: 3, hate: 0 },
    { titulo: "Me pasé tres horas editando un video de un carpincho peleando con un jubilado en una parada de bondi para que saque 14 likes. El arte no se negocia.", engagement: 3, hate: 0 },
    { titulo: "Meme de 'El pibe de las fotocopias de la facultad': Cuando te pide 800 pesos por dos hojas borrosas y te mira como si te estuviera vendiendo criptomonedas.", engagement: 2, hate: 0 },
    { titulo: "Foto de Marketplace: 'Vendo Play 2 chipeada, permuto por chivo vivo o garrafa de 10. Zona oeste no voy porque me tienen jurado.'", engagement: 3, hate: 0 },
    { titulo: "Meme de Homero metiéndose en el arbusto: 'Yo cuando veo que en el grupo de la primaria empiezan a mandar audios debatiendo sobre política.'", engagement: 2, hate: 0 },
    { titulo: "Hice un chiste sobre que el queso mantecoso viene con plástico y me saltó la cámara de productores lácteos a mandarme una carta documento.", engagement: 2, hate: 1 },
    { titulo: "Meme de Chad vs Virgen: 'El que redacta un remate irónico de tres párrafos vs el que postea la foto de un caniche mirando a la nada con la palabra hola.'", engagement: 3, hate: 0 },
    { titulo: "Reciclé un meme de Los Simpson de hace diez años, le cambié el subtítulo por 'yo yendo a comprar pan' y me metieron 40 mil retweets. País inviable.", engagement: 3, hate: 0 },
    { titulo: "Foto de una parrilla armada con un changuito de supermercado: 'Ingeniería aeroespacial de La Matanza. Elon Musk mirá y aprendé.'", engagement: 3, hate: 0 },
    { titulo: "No hay remate. El tweet es la foto de un señor disfrazado de Barney el dinosaurio esperando el 60 bajo la lluvia torrencial. Saquen sus propias conclusiones.", engagement: 3, hate: 0 }
  ],
  periodista: [
    { titulo: "AMPLIAREMOS. Lo que va a estallar mañana a las 8am en Tribunales se lleva puesto a medio gabinete. Guarden este tweet. #BOMBA", engagement: 3, hate: 1 },
    { titulo: "Tengo las capturas de pantalla de los chats privados del ministro. Si hablo yo se cae el sistema financiero. Dejo esto acá y me voy a dormir.", engagement: 3, hate: 2 },
    { titulo: "Meme de los dos Spidermans: El portal de la competencia y nosotros citando exactamente a la misma 'fuente irreprochable de Casa Rosada' que es un mozo del bar.", engagement: 3, hate: 0 },
    { titulo: "Me llamaron de tres productoras distintas para que no publique este hilo. Cuanto más me aprietan, más publico. Hilo exclusivo: los sobreprecios del catering.", engagement: 3, hate: 1 },
    { titulo: "Captura de WhatsApp con el 80% borroneado en rojo flúor: 'Leé entre líneas. El viernes no queda nadie en pie. La traición ya está consumada.'", engagement: 3, hate: 1 },
    { titulo: "Foto exclusiva: el empresario prófugo comprando facturas en una estación de servicio de Pilar. No me busquen porque me van a encontrar.", engagement: 3, hate: 0 },
    { titulo: "Meme de Pepe con lupa de detective: Cruzando cuatro planillas de licitaciones públicas un domingo a las 3 de la mañana para encontrar un cuñado testaferro.", engagement: 2, hate: 0 },
    { titulo: "Me desmintieron la primicia a las 10:00. A las 14:00 el tipo renunció. El tiempo pone a cada operador en su lugar. Besos a todos.", engagement: 3, hate: 1 },
    { titulo: "El perrito de 'this is fine' pero es la redacción mandando un push notification de 'URGENTE' sobre la separación de una botinera mientras explota el dólar.", engagement: 2, hate: 0 },
    { titulo: "¿Te acordás de este tweet de hace 4 años donde decías que jamás aceptarías un cargo? Bueno, mirá el Boletín Oficial de hoy. Hermosa tarde.", engagement: 3, hate: 2 }
  ],
  crypto: [
    { titulo: "Bitcoin a 98k. Los que me decían loco en 2022 cuando compré a 16k ahora me mandan DM preguntándome cómo abrir una cuenta en Binance. Cierren el orto y laburen.", engagement: 3, hate: 1 },
    { titulo: "Meme de la gorrita de McDonald's: 'Si esta vela no cierra por encima de la EMA de 200, mañana arranco el turno de freidora a las 7am. HODL carajo.'", engagement: 3, hate: 0 },
    { titulo: "Compré una memecoin de un perrito con sombrero a las 4am con liquidez bloqueada por un dev rumano. Ya subió 4000%. La educación tradicional ha muerto.", engagement: 3, hate: 1 },
    { titulo: "Foto de la app de trading en rojo sangre (-85%): 'Divergencia alcista clarísima en temporalidad de 4 horas. Barran para abajo que el rebote va a ser bíblico.'", engagement: 2, hate: 1 },
    { titulo: "La Reserva Federal acaba de imprimir 2 billones de dólares de aire y a vos te da miedo comprar una moneda respaldada por matemática pura. No la ves.", engagement: 3, hate: 1 },
    { titulo: "Meme de 'To The Moon': El token cayó 99.4% en 8 minutos por un rugpull del fundador, pero en el Discord oficial dicen que 'están reestructurando'. Tengo fe.", engagement: 2, hate: 1 },
    { titulo: "No entiendo a la gente que labura 8 horas por un sueldo en pesos cuando podés farmear yield en un protocolo descentralizado mientras dormís la siesta.", engagement: 3, hate: 2 },
    { titulo: "Gráfico con 80 líneas de soporte, círculos mágicos y flechas verdes apuntando a Saturno: 'El fractal del halving se repite milimétricamente. Vendé el auto.'", engagement: 3, hate: 1 },
    { titulo: "Le expliqué blockchain a mi vieja durante la cena de Navidad. Terminó llorando y pidiéndome que no venda la casa familiar. No entiende el nuevo paradigma.", engagement: 2, hate: 0 },
    { titulo: "Los bancos tradicionales son carretas con caballos. Nosotros estamos construyendo naves espaciales. Disfruten ser pobres si les gusta pagar comisiones.", engagement: 3, hate: 2 }
  ],
  gamer: [
    { titulo: "Nooooo amigo se recontra mil picó. El chabón me clavó un headshot a través de tres paredes y me festeja con un emote. Ya prendo stream y lo doxxeo.", engagement: 3, hate: 1 },
    { titulo: "Nasheeee instalé la fibra de 1000 megas y los servidores me siguen tirando 140 de ping. El juego está programado por tres monos con un teclado roto.", engagement: 3, hate: 0 },
    { titulo: "Meme de Momo a los gritos: 'A mí no me vas a venir a apurar en un torneo de streamers. Yo dejé la vida acá mientras vos estabas tomando la chocolatada.'", engagement: 3, hate: 1 },
    { titulo: "Dije 'una partida más y me voy a dormir'. Son las 6:30am, bajé dos divisiones y tengo el ojo izquierdo palpitando de la bronca. Venganza o muerte.", engagement: 2, hate: 0 },
    { titulo: "El chat me spamea 'manco' y 'jubilate'. Les recuerdo que vivo en una mansión jugando jueguitos mientras ustedes viajan en el furgón del Sarmiento. Los quiero.", engagement: 3, hate: 2 },
    { titulo: "Meme del teclado partido al medio sobre el monitor: 'Se me desconectó el mouse en la última ronda del clasificatorio. La paz mental nunca fue una opción.'", engagement: 3, hate: 1 },
    { titulo: "Prendí directo para pasarla piola y terminé en un drama de 4 horas con otros 6 streamers debatiendo quién le robó la idea de la serie de Minecraft a quién.", engagement: 3, hate: 1 },
    { titulo: "El perrito de 'this is fine' pero es mi setup con la placa de video tirando chispas y olor a plástico quemado en pleno torneo de 50 mil dólares.", engagement: 2, hate: 0 },
    { titulo: "Me ofrecieron un sponsor de un casino trucho de Curazao por 30 mil dólares. Rechacé por principios morales... bueno mentira, ya firmé. Se vienen cositas.", engagement: 3, hate: 2 },
    { titulo: "Meme de Jordan llorando: 'Me banearon 30 días de la plataforma por tirar la silla contra la pared en vivo'. Fue la emoción del juego, no tienen código.", engagement: 2, hate: 1 }
  ],
  conspiranoico: [
    { titulo: "Foto de dos estelas de avión cruzadas en el cielo de Ramos Mejía: 'Chemtrails de manual. Fumigan con bario y estroncio a las 17:30 para adormecer a la población. Despierten.'", engagement: 3, hate: 1 },
    { titulo: "Miren la fecha de hoy al revés y súmenle el código postal del Vaticano. Da exactamente 666. Me dicen que es casualidad. Las casualidades no existen.", engagement: 3, hate: 2 },
    { titulo: "Meme del pizarrón lleno de recortes de diarios y lana roja conectando a Bill Gates con el creador de las galletitas Criollitas: 'Todo encaja a la perfección.'", engagement: 3, hate: 1 },
    { titulo: "La NASA acaba de suspender la transmisión en vivo de la estación espacial porque apareció una esfera luminosa girando en sentido antihorario. Tienen miedo.", engagement: 3, hate: 1 },
    { titulo: "El corte de luz de ayer no fue por el calor. Fue un pulso electromagnético del proyecto HAARP para reiniciar los servidores bancarios. Guarden comida enlatada.", engagement: 3, hate: 1 },
    { titulo: "Si no te diste cuenta de que todos los líderes mundiales usan corbata del mismo tono de azul es porque seguís dormido en la Matrix. La élite te quiere ciego.", engagement: 2, hate: 1 },
    { titulo: "Me borraron el tweet sobre las frecuencias 5G y el comportamiento de las palomas en Plaza de Mayo. Cuando te censuran es porque estás pegando en el blanco.", engagement: 3, hate: 2 },
    { titulo: "Meme de 'Despierten borregos': Creen que la Tierra es redonda porque se lo dijo una foto de la NASA sacada con Photoshop en 1972. Sean curiosos por una vez.", engagement: 2, hate: 2 },
    { titulo: "Descubrí que el código de barras de los fideos tiene tres barras más largas que forman el número de la bestia. Compro todo suelto en la feria por seguridad.", engagement: 2, hate: 1 },
    { titulo: "El eclipse del martes va a activar las partículas de grafeno en el torrente sanguíneo. Les dejo este link de mi kit de desintoxicación con vinagre de manzana.", engagement: 3, hate: 2 }
  ],
  lifestyle: [
    { titulo: "Hola mis reinas hermosas. No saben la cantidad de mensajes que me llegaron preguntándome por el tono de labial que usé para ir a sacar la basura. Se los dejo acá.", engagement: 3, hate: 0 },
    { titulo: "Foto con 45 cajas de marcas en el living: 'Agradecida al universo por tanto amor (y por el canje de seis juegos de sábanas de hilo egipcio que jamás voy a usar).'", engagement: 3, hate: 1 },
    { titulo: "Amores, no saben el bardo que hay en el country. La vecina del lote 42 le metió una perimetral al jardinero porque le podó las hortensias sin permiso. LAM total.", engagement: 3, hate: 1 },
    { titulo: "Video en el auto a los gritos: 'No puedo creer la mala educación de las azafatas. Les pedí leche de almendras tibia y me trajeron descremada. Arruinaron mis vacaciones.'", engagement: 3, hate: 2 },
    { titulo: "Expectativa: sesión de fotos casual tomando café relajada. Realidad: 45 minutos acomodando la tostada con palta para que la luz natural le dé en 45 grados.", engagement: 2, hate: 0 },
    { titulo: "Me llegaron 800 comentarios de señoras quejándose de que no cocino. Amores, si el sushi me lo mandan gratis a la puerta, ¿para qué voy a prender la hornalla? Sufran.", engagement: 3, hate: 2 },
    { titulo: "Meme de 'Agotada de tanto trabajar': Mi jornada laboral de hoy consistió en probarme cuatro pares de anteojos de sol y subir una selfie con la frase vibrando alto.", engagement: 2, hate: 1 },
    { titulo: "Me fui de retiro espiritual a Tulum para conectar con mi diosa interior y a los 10 minutos estaba a las puteadas por el wifi porque no cargaban las historias.", engagement: 3, hate: 1 },
    { titulo: "Las que me tiran hate en comentarios son todas señoras con foto de piolín en el perfil. Les mando luz y bendiciones porque se nota que les falta colágeno.", engagement: 3, hate: 2 },
    { titulo: "Se filtró que una famosa le robó el sponsor de cremas antiage a la íntima amiga. El karma no duerme mis amores. Esta noche hago vivo y cuento todo.", engagement: 3, hate: 1 }
  ],
  onlyfans: [
    { titulo: "El algoritmo de Elon Musk me shadowbaneó otra vez por mostrar demasiada clavícula. Pero para los nazis verificados no hay censura. Los verdaderos están en el link azul.", engagement: 3, hate: 1 },
    { titulo: "Captura de DM: El tipo me manda un mensaje de 14 párrafos diciéndome que mi trabajo degrada a la sociedad... y abajo me pide si le hago 50% de descuento en el VIP.", engagement: 3, hate: 1 },
    { titulo: "Me levanté a las 11:30, me clavé un café con tostadas, subí una foto en el espejo en corpiño y facturé lo que mi primo gana en tres meses en el banco. Sigan criticando.", engagement: 3, hate: 2 },
    { titulo: "Meme del pibe que me pide fotos gratis 'para ver si vale la pena suscribirse': Sí rey, yo también voy a la carnicería y me como medio bife crudo antes de pagar.", engagement: 3, hate: 0 },
    { titulo: "La tía que no me saludaba para mi cumpleaños ahora me escribe por privado preguntándome cómo abrir una cuenta porque quiere pagar el gas. La vida da vueltas.", engagement: 2, hate: 0 },
    { titulo: "Mi contador me preguntó a qué me dedico porque no entiende cómo entran transferencias en dólares todos los días desde Noruega. 'Comercio exterior', le dije.", engagement: 3, hate: 0 },
    { titulo: "Foto con mirada asesina: Cuando te piden video personalizado de 10 minutos pisando uvas descalza y te quieren regatear 5 dólares. Con el fetiche no se jode.", engagement: 3, hate: 1 },
    { titulo: "Twitter es la red social donde los tipos más conservadores del feed son los primeros en reaccionar con fueguitos a las 3 de la mañana en los mejores amigos.", engagement: 3, hate: 1 },
    { titulo: "Meme de 'Ellos no saben': Ellos no saben que el departamento de tres ambientes en Colegiales lo pagué vendiendo fotos de mis pies en formato PNG. Éxitos con la pala.", engagement: 3, hate: 1 },
    { titulo: "Me bajaron la cuenta de Instagram por tercera vez. No importa, el imperio no se cae por dos denuncias de moralistas envidiosas. Volvemos más fuertes en el azul.", engagement: 3, hate: 1 }
  ],
  techie: [
    { titulo: "Acabo de cerrar una ronda pre-seed de 750k con un fondo de San Francisco usando un pitch deck de 6 diapositivas y una demo que anda solo con mock data. El hustle no para.", engagement: 3, hate: 1 },
    { titulo: "Foto con MacBook Pro, café flat white con arte latte y auriculares de 400 dólares en un coworking de Palermo: '6:00 AM. Mientras ellos duermen, yo itero el MVP.'", engagement: 3, hate: 1 },
    { titulo: "10 herramientas de IA que van a reemplazar a tu diseñador, a tu community manager y a tu terapeuta en los próximos 14 días. Hilo indispensable (guarden).", engagement: 3, hate: 1 },
    { titulo: "Hicimos el deploy del SaaS a producción un viernes a las 23:45. Se cayó la base de datos de 20 mil usuarios y perdimos los backups. 'Move fast and break things', señores.", engagement: 3, hate: 2 },
    { titulo: "El 99% de los fundadores fracasa porque no tiene disciplina espartana. Yo hago duchas de agua fría a las 5am, ayuno intermitente y leo a Marco Aurelio en Notion.", engagement: 3, hate: 2 },
    { titulo: "Me preguntan por qué cobramos 49 dólares por mes por un wrapper de la API de OpenAI. Se llama capturar valor en la frontera tecnológica. No lo entenderías.", engagement: 3, hate: 2 },
    { titulo: "Meme de 'Works on my machine': El código anda perfecto en mi Mac M3 Max con 64GB de RAM. Que el cliente use una compu del gobierno no es un bug, es un problema de ellos.", engagement: 2, hate: 0 },
    { titulo: "La cultura del trabajo tradicional de 9 a 18 está muerta. En mi startup trabajamos de 8 a 23 con stock options que van a valer millones cuando salgamos a la bolsa en 2038.", engagement: 3, hate: 2 },
    { titulo: "El perrito de 'this is fine' pero es la factura mensual de AWS que pasó de 40 dólares a 8.500 porque un dev junior dejó corriendo un cluster de Kubernetes el fin de semana.", engagement: 2, hate: 0 },
    { titulo: "Despedimos al 40% del equipo de atención al cliente y pusimos un bot de IA que responde con citas de Steve Jobs. La retención bajó 90%, pero el margen operativo es hermoso.", engagement: 3, hate: 2 }
  ],
  podcaster: [
    { titulo: "Clip de 18 segundos con subtítulos amarillos en Arial Black: 'El problema del amor moderno es que nadie quiere comer fideos con manteca un martes a la noche'. 4M de views.", engagement: 3, hate: 0 },
    { titulo: "Arrancamos el programa para hablar de geopolítica del sudeste asiático y terminamos discutiendo 45 minutos a los gritos si el alfajor Capitán del Espacio está sobrevalorado.", engagement: 3, hate: 1 },
    { titulo: "Le pregunté al invitado más serio del país: '¿Si fueras un animal mitológico en la antigua Grecia, qué harías con la deuda externa?'. Se quedó 30 segundos en silencio. Maga total.", engagement: 3, hate: 0 },
    { titulo: "Meme de los cuatro panelistas tentados de la risa en la mesa del streaming mientras el sonidista tira bocinazos y chistes con doble sentido: 'Periodismo de alta gama.'", engagement: 3, hate: 0 },
    { titulo: "El invitado canceló 10 minutos antes del vivo. Improvisamos 3 horas hablando de las peores citas de Tinder de la producción y fue el pico histórico de rating del canal.", engagement: 3, hate: 0 },
    { titulo: "Subí el clip con la miniatura del invitado con la boca abierta y el título: 'REVELÓ LO QUE NADIE SE ATREVIÓ A DECIR'. El tipo solo dijo que le gusta el mate dulce.", engagement: 3, hate: 1 },
    { titulo: "Tuvimos que cortar la transmisión porque dos panelistas se estaban por agarrar a las trompadas por quién inventó el concepto de 'hacerse el desentendido'. Cultura pura.", engagement: 3, hate: 1 },
    { titulo: "Meme de 'El estudio de podcast con luces de neón violeta': Requisito excluyente para tener un podcast: dos micrófonos Shure, luces led y una opinión sobre cualquier cosa.", engagement: 2, hate: 0 },
    { titulo: "El sonidista tiró el efecto de chancho gritando justo cuando el entrevistado estaba contando cómo falleció su abuela en el campo. Momentazo televisivo.", engagement: 3, hate: 1 },
    { titulo: "Hicimos un crossover con el podcast rival para 'poner paños fríos' y terminamos bardeándonos por quién tiene más suscriptores de pago en la comunidad de Cafecito.", engagement: 3, hate: 2 }
  ]
};

memesContent.cryptobro = memesContent.crypto;


/* ?? M?DULO: content/cards/conflict.js ?? */
/* ???????????????????????????????????????????????????????
   Twitero v15 ? content/cards/conflict.js (Peleas con rivales y Baits)
   ??????????????????????????????????????????????????????? */
// data/pelea-content.js
// Contenido de la carta "Pelea" (rival específico por arquetipo).
// rivalTypes: dificultad/recompensa de cada tipo de rival (Engagement y Hate suben juntos).
// peleaContent: frase + rivalNombre por cada combinación arquetipo × tipo de rival.

const rivalTypes = {
  wholesome: {
    nombre: "Usuario Buena Onda",
    dificultad: "alta",
    recompensa: "baja",
    engagement: 1,
    hate: 2
  },
  anonimo: {
    nombre: "Usuario Anónimo",
    dificultad: "baja",
    recompensa: "alta",
    engagement: 3,
    hate: 1
  },
  politico: {
    nombre: "Político",
    dificultad: "baja",
    recompensa: "media",
    engagement: 2,
    hate: 1
  },
  experto: {
    nombre: "Experto/Colega",
    dificultad: "alta",
    recompensa: "alta",
    engagement: 4,
    hate: 2
  },
  villano: {
    nombre: "Villano de turno",
    dificultad: "baja",
    recompensa: "baja",
    engagement: 2,
    hate: 1,
    hateSiResponde: 5
  }
};

const peleaContent = {
  opinologo: [
    { rival: "wholesome", rivalNombre: "El de las frases de calendario", texto: "El de las frases de calendario me manda a decir que sea más 'constructivo'. Llevá diez años analizando datos y después volvés a aconsejarme." },
    { rival: "anonimo",   rivalNombre: "El huevito sin cara",             texto: "El huevito sin cara, cuenta creada la semana pasada, me explica inflación como si fuera su tesis doctoral. Primero ponete nombre y apellido." },
    { rival: "politico",  rivalNombre: "El ministro del speech",          texto: "Le pregunté al ministro el dato concreto y me contestó con el speech de campaña de siempre. Ese copy-paste lo tengo memorizado." },
    { rival: "experto",   rivalNombre: "El doctor de cátedra",            texto: "El doctor de cátedra dice que 'no tengo la formación' para opinar de esto. Tres años leyendo el tema también es formación, doctor." },
    { rival: "villano",   rivalNombre: "El operador de siempre",          texto: "El operador de siempre tiró otra indirecta sin nombrarme. Hoy lo cité con nombre completo. A ver si responde de frente." },
    { rival: "anonimo",   rivalNombre: "El avatar de estatua griega",     texto: "El avatar de mármol de 19 años me explica la caída de Roma en 3 tweets. Hermoso. Proceda a recibirse antes de educarme." },
    { rival: "experto",   rivalNombre: "El columnista del establishment", texto: "El editorialista del domingo dice que 'la sociedad está desorientada' porque no leen sus notas de dos páginas. El papel ya fue, maestro." },
    { rival: "politico",  rivalNombre: "El panelista de TV ensobrado",    texto: "Me quisieron cruzar en la tele con un tipo que lee zócalos de memoria. Le tiré tres números de balanza comercial y se atragantó." },
    { rival: "wholesome", rivalNombre: "El moderador tibio del Space",    texto: "El host del Space me pide 'mantener un tono armónico'. La verdad histórica no tiene término medio. O hay colapso o hay bifurcación." },
    { rival: "villano",   rivalNombre: "El troll de guardia sub-20",      texto: "El pibe me dice 'no la ves' porque compré bonos soberanos. Cuando estabas en jardín de infantes yo ya me había fundido dos veces." }
  ],
  futbolero: [
    { rival: "wholesome", rivalNombre: "El hincha buena onda",          texto: "El hincha buena onda posteando 'fútbol en paz' justo hoy que es clásico. Después del partido hablamos de paz, ahora vamos con todo." },
    { rival: "anonimo",   rivalNombre: "El del escudo rival",           texto: "El del escudo del rival de perfil, que nunca pisó una cancha en su vida, explicándome táctica de 4-3-3. Mostrá el carnet del club primero." },
    { rival: "politico",  rivalNombre: "El concejal de la camiseta",    texto: "El concejal de la camiseta puesta en el spot de campaña otra vez. El club es de los que van los domingos, no tuyo." },
    { rival: "experto",   rivalNombre: "El excampeón con micrófono",    texto: "El excampeón con micrófono dice que 'no entiendo de fútbol'. Repasemos la jugada en video, en cámara lenta, a ver quién tiene razón." },
    { rival: "villano",   rivalNombre: "El hincha del rival eterno",    texto: "El hincha del rival eterno esperó todo el año para escribirme esto. Tomátelo con calma, que el semestre que viene seguimos arriba." },
    { rival: "anonimo",   rivalNombre: "El hincha 2.0 de Miami",        texto: "El pibe tuitea 'hoy ganamos o mueren todos' desde un Starbucks en Miami con una camiseta trucha. Vení a la popu en invierno a ver si te da el cuero." },
    { rival: "experto",   rivalNombre: "El periodista de la dirigencia", texto: "El movilero que tiene prohibido hablar de las deudas del club operando al aire. Te conocemos todos las cuentas en Uruguay, fantasma." },
    { rival: "politico",  rivalNombre: "El barra con cargo municipal",  texto: "El barra que acomodaron en ceremonial del municipio me manda mensajes privados apretándome por criticar los pases. Denunciado penalmente." },
    { rival: "wholesome", rivalNombre: "El viudo del fútbol champagne", texto: "Lloran las viudas del tiki-tiki porque metimos 11 tipos abajo del arco y ganamos 1-0 con la nuca. El fútbol se gana con goles, no con posesión." },
    { rival: "villano",   rivalNombre: "El DT de pizarrón sin títulos", texto: "El técnico de la posesión que da 700 pases intrascendentes y no patea al arco. Renunciá por la patria y devolvé el sueldo." }
  ],
  militante: [
    { rival: "wholesome", rivalNombre: "El del diálogo eterno",       texto: "El del diálogo eterno pidiendo consenso justo cuando aprobaron la ley a los empujones a las 3am. El diálogo no es unilateral, che." },
    { rival: "anonimo",   rivalNombre: "El anónimo de la bandera",    texto: "El anónimo de la bandera de perfil que nunca puso un pie en una marcha me explica hoy qué es el compromiso militante." },
    { rival: "politico",  rivalNombre: "El funcionario del clip",     texto: "El funcionario del clip dijo exactamente lo contrario la semana pasada. Tengo el video. Se los dejo acá para que lo vean con sus propios ojos." },
    { rival: "experto",   rivalNombre: "El politólogo de la academia", texto: "El politólogo de la academia bajando línea desde su oficina climatizada. Vení a militar un martes a las 6am, después hablamos." },
    { rival: "villano",   rivalNombre: "El dirigente de enfrente",    texto: "El dirigente de enfrente se victimiza en cada entrevista hace años. Hoy alguien le tenía que decir las cosas como son." },
    { rival: "anonimo",   rivalNombre: "El troll de la otra vereda",   texto: "El operador del troll center rival queriendo armarme un carpetazo con una foto recortada de 2017. DOMADÍSIMO en 2 minutos con el video completo. Fin." },
    { rival: "politico",  rivalNombre: "El panqueque profesional",    texto: "El tipo fue menemista, kirchnerista, macrista y ahora se hace el libertario furioso. Tiene el récord mundial de panquequeadas sin ponerse colorado." },
    { rival: "experto",   rivalNombre: "El encuestador trucho",        texto: "El consultor que cobra pauta y te clava una encuesta dando ganador a su financista por 20 puntos. En las urnas sacaron 3%. Un papelón." },
    { rival: "wholesome", rivalNombre: "El militante de café de Palermo", texto: "El compañero que teoriza sobre la lucha de clases mientras toma café de especialidad con leche de avena en Palermo. No pisaste una fábrica en tu vida." },
    { rival: "villano",   rivalNombre: "El vocero de la opereta matutina", texto: "El columnista que sale a operar a las 7am con el guión que le bajaron por Telegram. Los dejamos pedaleando en el aire con datos oficiales." }
  ],
  humor: [
    { rival: "wholesome", rivalNombre: "El ofendido crónico",          texto: "El ofendido crónico otra vez, indignado porque mi chiste de ayer no le pidió permiso antes de existir. El humor no tramita habilitación." },
    { rival: "anonimo",   rivalNombre: "El arqueólogo del bardo",      texto: "El arqueólogo del bardo encontró un chiste mío de 2019 y lo sacó de contexto. Felicitaciones por las horas de trabajo invertidas." },
    { rival: "politico",  rivalNombre: "El diputado del comunicado",   texto: "El diputado del comunicado armó un escrito oficial sobre un meme de gatos. Ni yo me lo esperaba. Gracias por el engagement gratuito." },
    { rival: "experto",   rivalNombre: "El standupero consagrado",     texto: "El standupero consagrado que cobra $15.000 la entrada dice en radio que 'eso no es humor real'. Mis vistas mensuales superan su aforo anual." },
    { rival: "villano",   rivalNombre: "El troll del stand-up",        texto: "El troll del stand-up lleva tres años intentando ser gracioso a mi costa. Hoy le tocó perder, como casi siempre." },
    { rival: "anonimo",   rivalNombre: "El comisario de la moral",     texto: "El censor moral que te explica con un hilo de 12 tweets por qué un meme de un perro salchicha 'violenta sensibilidades'. Buscate un laburo honesto." },
    { rival: "villano",   rivalNombre: "La cuenta de memes robados",   texto: "Me robó el meme, le borró la firma con paint y le chantó su logo en Comic Sans arriba. Denunciado por piratería de baja estofa." },
    { rival: "experto",   rivalNombre: "El comediante de Palermo",     texto: "El comediante que hace standup hablando de que le da ansiedad pedir una pizza. La terapia te sale más barata que alquilar el teatro, rey." },
    { rival: "wholesome", rivalNombre: "El que explica el chiste",     texto: "El tipo que cita el meme explicando punto por punto el remate para sentirse superior. Arruinaste la fiesta de cumpleaños, felicitaciones." },
    { rival: "politico",  rivalNombre: "El militante sin remate",      texto: "El militante disfrazado de memero que solo sube fotos de políticos con cuernos de diablo en Photoshop 2004. Volvé a Facebook con los jubilados." }
  ],
  periodista: [
    { rival: "wholesome", rivalNombre: "La cuenta positivity-only",   texto: "La cuenta positivity-only pide 'no hablar más de lo negativo' justo cuando salió la causa de corrupción más grande del año. Enserio." },
    { rival: "anonimo",   rivalNombre: "El anónimo del funcionario",  texto: "El anónimo del funcionario saliendo a bancarlo sin poner cara ni nombre. Yo publico con nombre y apellido. Hay diferencias." },
    { rival: "politico",  rivalNombre: "El vocero del copy-paste",    texto: "El vocero del copy-paste usó la frase 'operación mediática' por cuarta vez en el mes. Ya la tengo grabada de memoria." },
    { rival: "experto",   rivalNombre: "El colega del audio",         texto: "El colega del audio insinuó en su programa que mi fuente 'no existe'. Acá está el audio completo, con fecha, hora y firma." },
    { rival: "villano",   rivalNombre: "El operador político",        texto: "El operador político lanzó el tema de distracción justo cuando salió el informe. Hoy no funciona. Hoy el tema soy yo." },
    { rival: "politico",  rivalNombre: "El ministro que niega los chats", texto: "El ministro salió a decir que las capturas son 'falsificadas con inteligencia artificial'. Ministro, tengo el peritaje caligráfico de la firma." },
    { rival: "experto",   rivalNombre: "El conductor estrella de la tarde", texto: "El conductor con primicias robadas me levantó el hilo textual sin citar la autoría. En el gremio nos conocemos todos, colega." },
    { rival: "anonimo",   rivalNombre: "La granja de bots judiciales", texto: "Me clavaron 2.000 menciones de cuentas recién creadas diciendo que soy operador de la oposición. Cuando la verdad duele, compran bots." },
    { rival: "wholesome", rivalNombre: "El vocero de la buena onda",   texto: "El relacionista público que manda bombones a la redacción para que no cubramos la quiebra de la empresa. Los bombones ricos, la nota sale igual." },
    { rival: "villano",   rivalNombre: "El espía inorgánico",          texto: "El personaje oscuro que filtra carpetazos cruzados en DMs a las 3am. Se lo publico con número de expediente en mano." }
  ],
  cryptobro: [
    { rival: "wholesome", rivalNombre: "La cuenta anti-especulación", texto: "La cuenta anti-especulación posteando 'la plata no da la felicidad' debajo de mi thread de portfolio. Invertí primero, después hablamos." },
    { rival: "anonimo",   rivalNombre: "La rana FUDdera",             texto: "La rana FUDdera de siempre diciendo que todo cripto es una estafa. Decíselo a los que compraron ETH en 2015." },
    { rival: "politico",  rivalNombre: "El funcionario del webinar",  texto: "El funcionario del webinar hablando de 'regular criptomonedas' sin saber la diferencia entre un wallet y un exchange. Un curso, al menos." },
    { rival: "experto",   rivalNombre: "El economista de la tele",    texto: "El economista de la tele repitiendo el argumento anti-cripto de hace cinco años seguidos. El gráfico habla solo mientras tanto." },
    { rival: "villano",   rivalNombre: "El rugpuller arrepentido",    texto: "El rugpuller arrepentido que promocionó el proyecto que colapsó el mes pasado viene hoy a darme lecciones de ética. No." },
    { rival: "anonimo",   rivalNombre: "El maximalista talibán",       texto: "El fundamentalista de Bitcoin que dice que todo lo que no sea BTC es pecado mortal y estafa satánica. Relajá un poco, fanático." },
    { rival: "experto",   rivalNombre: "El trader de futuros quemado",  texto: "El gurú de los cursos de trading de 200 dólares que se apalancó por 100x y lo liquidaron en plena vela de las 4am. No le enseñás a nadie." },
    { rival: "politico",  rivalNombre: "El banquero central nostálgico", texto: "El director de banco tradicional que dice que las monedas de papel dan 'estabilidad'. 140% de inflación interanual y me habla de estabilidad." },
    { rival: "wholesome", rivalNombre: "El del plazo fijo en pesos",   texto: "El que me festeja que el banco le dio 35% de tasa en pesos mientras el dólar blue voló 80%. Felicitaciones por perder plata con alegría." },
    { rival: "villano",   rivalNombre: "El influencer de memecoins basura", texto: "El pibe de 22 años promocionando un token de un perro espacial que dura 48 horas antes de drenar la liquidez. Los llevás a la ruina a todos." }
  ],
  gamer: [
    { rival: "wholesome", rivalNombre: "El que te dice salí al sol",   texto: "El que te dice salí al sol eligió el peor momento: mitad de la final del torneo más importante del año. El sol puede esperar." },
    { rival: "anonimo",   rivalNombre: "El avatar anime sin rank",     texto: "El avatar anime sin rank me explica mi build sin haber tocado el juego. Mostrame el número de partida y hablamos." },
    { rival: "politico",  rivalNombre: "El diputado del joystick",     texto: "El diputado del joystick quiere regular videojuegos con argumentos de 2003. Ni sabe en qué plataforma jugamos." },
    { rival: "experto",   rivalNombre: "El excampeón de la replay",    texto: "El excampeón de la replay dice que gané por suerte. Ahí está entera, jugada por jugada. Mirala y volvemos a hablar." },
    { rival: "villano",   rivalNombre: "El streamer tóxico",           texto: "El streamer tóxico busca pelea gratis para subir sus números. Hoy se la doy, pero con las cartas sobre la mesa." },
    { rival: "anonimo",   rivalNombre: "El hater del chat en modo emote", texto: "El flaco que me clava 'manco' en mayúsculas cada vez que fallo un tiro. Entrá al 1v1 en vivo si te da la nafta, fantasmín." },
    { rival: "experto",   rivalNombre: "El pro player del meta viejo", texto: "El excompetidor que llora porque cambiaron el retroceso de las armas y ahora no le puede ganar a un pibe de 15 años. Adaptate o jubilate." },
    { rival: "villano",   rivalNombre: "El streamer con viewers bots",  texto: "El creador que mete 40k de viewers falsos en Kick y me viene a descansar por números orgánicos. Mostrá el chat en vivo sin modo emote." },
    { rival: "wholesome", rivalNombre: "El de 'lo importante es divertirse'", texto: "Me tiró esa frase en plena ranked decisiva para subir a Inmortal. Hermano, divertite en partidas casuales, acá se juega la vida." },
    { rival: "politico",  rivalNombre: "El de la asociación de padres", texto: "El directivo que sale en la tele diciendo que jugar al Counter causa violencia urbana. Violencia es el lag que me tira la empresa de cable." }
  ],
  conspiranoico: [
    { rival: "wholesome", rivalNombre: "El de confiá en el sistema",    texto: "El de 'confiá en el sistema' apareció justo hoy que publicaron el informe que los contradice. Casualidad, seguro." },
    { rival: "anonimo",   rivalNombre: "El debunkeador sin fuentes",    texto: "El debunkeador sin fuentes propias copiando Wikipedia para desmentirme. Una sola fuente original, una. Pedimos poco." },
    { rival: "politico",  rivalNombre: "El funcionario de la negación", texto: "El funcionario de la negación con la misma cara de siempre, como si no fuera la quinta vez que lo agarran en el mismo renuncio." },
    { rival: "experto",   rivalNombre: "El divulgador pagado",          texto: "El divulgador pagado por las mismas instituciones que yo cuestiono me viene a explicar 'la realidad'. Independiente, sí claro." },
    { rival: "villano",   rivalNombre: "El gestor del relato",          texto: "El gestor del relato oficial salió en menos de diez minutos después de filtrarse el documento. Previsible hasta el cansancio." },
    { rival: "anonimo",   rivalNombre: "El verificador de datos a sueldo", texto: "La agencia de fact-checking que casualmente le pone 'engañoso' a cualquier dato que cuestione a los laboratorios multinacionales. Vendidos." },
    { rival: "experto",   rivalNombre: "El astrónomo oficial de la TV", texto: "El científico de la tele que dice que la luz triangular que cruzó el cielo de Córdoba era 'un reflejo de Júpiter'. No insulten la inteligencia de la gente." },
    { rival: "politico",  rivalNombre: "El diplomático de la agenda 2030", texto: "El embajador con el pin de los 17 colores explicándonos por qué en el futuro no vamos a tener propiedad privada y vamos a ser felices. No pasarán." },
    { rival: "wholesome", rivalNombre: "El oveja feliz del rebaño",     texto: "El que se burla de las teorías de conspiración mientras le escanean el iris en el shopping por 20 dólares en una cripto de juguete. Despertá." },
    { rival: "villano",   rivalNombre: "La cuenta desinformadora de manual", texto: "El perfil que embarra la cancha tirando teorías delirantes a propósito para ridiculizar a los investigadores serios. Se les nota el plumero." }
  ],
  lifestyle: [
    { rival: "wholesome", rivalNombre: "La de la belleza simple",      texto: "La de la belleza simple posteando 'menos es más' justo debajo de mis fotos de la Riviera. Cada una encuentra su belleza donde puede." },
    { rival: "anonimo",   rivalNombre: "El anónimo de los filtros",    texto: "El anónimo de los filtros diciendo que mis fotos están editadas, como si eso fuera un secreto de estado. Bienvenido a la industria." },
    { rival: "politico",  rivalNombre: "El político de la austeridad", texto: "El político de la austeridad hablando de 'simplificar' mientras yo trabajo mi imagen con mi propio dinero. Rubros distintos." },
    { rival: "experto",   rivalNombre: "La nutricionista del hilo",    texto: "La nutricionista del hilo dice que mi rutina 'no tiene base científica'. Listame exactamente qué parte, con fuentes reales." },
    { rival: "villano",   rivalNombre: "La cuenta hater semanal",      texto: "La cuenta hater semanal cumplió otro lunes puntual con su thread. Esta semana me tocó ganar a mí." },
    { rival: "anonimo",   rivalNombre: "La señora de Facebook indignada", texto: "La señora con foto de perfil de una virgen que me comenta que 'debería aprender a limpiar la casa'. Señora, tengo tres mucamas con aportes al día." },
    { rival: "experto",   rivalNombre: "La dermatóloga del descargo",  texto: "La médica que dice que mi crema con extracto de perla es un placebo. Mi cutis de porcelana dice lo contrario, doctora." },
    { rival: "politico",  rivalNombre: "El inspector del canje",       texto: "El funcionario de AFIP que me mandó una notificación por las medialunas que me regaló la panadería de Recoleta. Vayan a buscar a los que fugan." },
    { rival: "wholesome", rivalNombre: "La gurú del desapego material", texto: "La influencer que predica el minimalismo desde un piso de 300 metros en Puerto Madero. Dejá de vender humo espiritual, reina." },
    { rival: "villano",   rivalNombre: "La examiga que te copia los looks", texto: "Se compró exactamente el mismo vestido importado que usé para la gala del hotel. La originalidad no se compra en el freeshop, querida." }
  ],
  onlyfans: [
    { rival: "wholesome", rivalNombre: "El moralista de guardia",    texto: "El moralista de guardia explicando 'formas más dignas de generar contenido'. Pagame el alquiler este mes y seguimos con el debate." },
    { rival: "anonimo",   rivalNombre: "El moralista incógnito",     texto: "El moralista incógnito que seguro me sigue hace meses en privado me da el sermón de siempre. Andá a hacer catarsis a otro lado." },
    { rival: "politico",  rivalNombre: "El político de los valores", texto: "El político de los valores con tres denuncias activas hablando de 'familia y dignidad'. Mirate primero al espejo, querido." },
    { rival: "experto",   rivalNombre: "La modelo de pasarela",      texto: "La modelo de pasarela con agencia y fotógrafo de staff me explica cómo hacer 'contenido con dignidad'. Yo cobro mis propias cuentas." },
    { rival: "villano",   rivalNombre: "La cruzada de lunes",        texto: "La cruzada de lunes volvió puntual con thread nuevo. Esta semana no le doy el gusto de responder. Que labre sola." },
    { rival: "anonimo",   rivalNombre: "El tacaño de los DMs",       texto: "El tipo que me manda 20 mensajes pidiendo fotos exclusivas por 2 dólares y cuando le digo que no, me dice que soy una interesada. Con el trabajo ajeno no se rata." },
    { rival: "politico",  rivalNombre: "El diputado censor",         texto: "El legislador que propone bloquear plataformas de adultos mientras tiene la cuenta bancaria llena de viáticos sin justificar. Hipocresía total." },
    { rival: "experto",   rivalNombre: "El community manager santurrón", texto: "El especialista en marketing tradicional que dice que 'arruiné mi marca personal'. Mi marca personal compró dos cocheras en Palermo este año." },
    { rival: "wholesome", rivalNombre: "El que te quiere rescatar",  texto: "El pibe que me escribe cartas poéticas diciéndome que 'valgo mucho más que esto' y que él me puede salvar. Salvate vos del monotributo, rey." },
    { rival: "villano",   rivalNombre: "El filtrador de contenido",   texto: "El resentido que resubió mis fotos a un canal de Telegram. Ya tenés la denuncia penal por violación a la intimidad y propiedad intelectual." }
  ],
  techie: [
    { rival: "wholesome", rivalNombre: "El de los límites sanos",       texto: "El de los límites sanos diciéndome que 'no todo es laburar 24/7'. Así no se construye un producto. Así se construye una excusa." },
    { rival: "anonimo",   rivalNombre: "El anónimo del producto",       texto: "El anónimo del producto diciendo que no sirve para nada sin haberlo probado ni una vez. Mandame el feedback cuando lo uses de verdad." },
    { rival: "politico",  rivalNombre: "El funcionario del ecosistema", texto: "El funcionario del ecosistema hablando de 'innovación' sin poder abrir una terminal. Un curso básico no vendría mal." },
    { rival: "experto",   rivalNombre: "El dev senior del repo",        texto: "El dev senior del repo dice que mi código 'es un desastre' sin ver el repo completo. Está público. Revisá antes de opinar." },
    { rival: "villano",   rivalNombre: "El excofundador del clip",      texto: "El excofundador del clip contando su versión de la separación otra vez, como todos los meses. Allá va la mía, con capturas y fechas." },
    { rival: "anonimo",   rivalNombre: "El purista del código libre",   texto: "El programador que me bardea porque cobro 29 dólares por mi herramienta en lugar de hacerla open source. Las expensas no se pagan con pull requests." },
    { rival: "experto",   rivalNombre: "El CTO de multinacional dinosaurio", texto: "El gerente técnico que tarda 8 meses en autorizar un cambio de botón en la app criticando la velocidad de una startup. Por eso los pasamos por arriba." },
    { rival: "politico",  rivalNombre: "El burócrata de la patente",    texto: "El funcionario del registro de marcas que me pide un formulario impreso por triplicado para registrar un software de IA. Viven en 1974." },
    { rival: "wholesome", rivalNombre: "El consultor de bienestar laboral", texto: "El couch que me dice que los devs tienen que meditar 40 minutos al mediodía. Lo que necesitan es stock options y menos reuniones al pedo." },
    { rival: "villano",   rivalNombre: "La corporación que clonó la feature", texto: "La empresa de 10 mil empleados que nos copió la interfaz pixel por pixel dos semanas después de nuestra demo. La innovación no se copia, muchachos." }
  ],
  podcaster: [
    { rival: "wholesome", rivalNombre: "El de menos polémica",       texto: "El de menos polémica pide entrevistas 'sin tanto conflicto'. Sin conflicto no hay conversación real. Ni rating. Ni nadie escuchando." },
    { rival: "anonimo",   rivalNombre: "El oyente parcial",          texto: "El oyente parcial dice que edito mal sin haber escuchado el episodio completo. Son 90 minutos. Tomate el tiempo y volvés." },
    { rival: "politico",  rivalNombre: "El vocero del portazo",      texto: "El vocero del portazo canceló la nota a último momento, con el estudio ya armado. Clásico del género político. Clasicazo." },
    { rival: "experto",   rivalNombre: "El periodista de la tele",   texto: "El periodista de la tele dice que 'esto no es periodismo'. Definime periodismo, porque la audiencia elige todos los días con el play." },
    { rival: "villano",   rivalNombre: "El expodcaster colega",      texto: "El expodcaster colega tira indirectas en su propio programa, sin nombrarme. Se lo contesto acá, de frente, no en código." },
    { rival: "anonimo",   rivalNombre: "El policía de los subtítulos", texto: "El tipo que comenta 'pusiste una coma de más en el subtítulo del segundo 14'. El video tiene 2 millones de views, conseguite un pasatiempo." },
    { rival: "experto",   rivalNombre: "El productor radial jurásico", texto: "El director de radio que dice que los streamings de 4 pibes tomando mate son una moda pasajera. Hace 5 años decías lo mismo y hoy no te escucha nadie." },
    { rival: "politico",  rivalNombre: "El candidato que pide el cuestionario", texto: "El político que me pidió las preguntas por escrito antes de sentarse en el piso. Esto es una charla mano a mano sin red, si tenés miedo no vengas." },
    { rival: "wholesome", rivalNombre: "El que extraña el primer formato", texto: "El fanático de la primera hora que dice 'se vendieron a lo comercial desde que tienen luces led'. Crecimos, rey. No nos quedamos en el monoambiente." },
    { rival: "villano",   rivalNombre: "El canal de streaming rival",  texto: "El canal competidor que nos programó un invitado calcado a la misma hora para robarnos audiencia. La autenticidad no se copia con plata." }
  ]
};


// data/bait-content.js
// Contenido de la carta "Bait" (Tweets diseñados para generar bardo, respuestas y engagement).
// Incluye baits generales de la cultura de Twitter y baits específicos por arquetipo.

const generalBaits = [
  {
    titulo: "La primera cita",
    texto: "¿Quién paga la cuenta en la primera cita? Abro debate definitivo. Los leo.",
    eng: 60, hate: 12, amor: 20, odioP: 45
  },
  {
    titulo: "Bodycount en pareja",
    texto: "¿Cuál es el bodycount máximo aceptable para ponerse de novio en serio? Sean 100% sinceros.",
    eng: 65, hate: 15, amor: 15, odioP: 50
  },
  {
    titulo: "Café de especialidad",
    texto: "El café de especialidad es para la gente a la que en realidad no le gusta el café. Te cobran $5.000 un agua tibia y ácida.",
    eng: 55, hate: 10, amor: 25, odioP: 40
  },
  {
    titulo: "Pizza de molde vs Napolitana",
    texto: "La pizza de molde argentina le pasa el trapo 10 a 0 a la napolitana finita que parece una servilleta mojada. Vengan de a mil.",
    eng: 70, hate: 14, amor: 30, odioP: 45
  },
  {
    titulo: "El punto de la carne",
    texto: "La carne 'jugosa' es un invento de chetos para comer carne cruda con sangre. Si está roja adentro, no está cocida.",
    eng: 65, hate: 16, amor: 20, odioP: 50
  },
  {
    titulo: "Mascotas en departamento",
    texto: "Tener un perro de más de 10 kilos viviendo en un dos ambientes debería considerarse maltrato animal. Facto.",
    eng: 75, hate: 20, amor: 15, odioP: 60
  },
  {
    titulo: "Trabajar desde la cama",
    texto: "El home office destruyó la cultura del trabajo. El 90% de los que hacen remoto están jugando a la Play en horario laboral.",
    eng: 65, hate: 18, amor: 10, odioP: 55
  },
  {
    titulo: "Viajar para aparentar",
    texto: "Nadie viaja por 'cultura'. Viajan para sacarse fotos con la copa en el atardecer y subirlas a Instagram. Hablemos de verdad.",
    eng: 58, hate: 12, amor: 25, odioP: 42
  },
  {
    titulo: "Empanadas con pasas",
    texto: "La empanada de carne con pasas de uva y aceituna es la cumbre gastronómica patria. Los que no comen pasas tienen paladar de jardín de infantes.",
    eng: 74, hate: 22, amor: 24, odioP: 58
  },
  {
    titulo: "Fernet 70/30",
    texto: "El fernet con más de dos hielos y 30% de alcohol es jarabe para la tos de nene mimado. El verdadero fernet cordobés quema la garganta o no es nada.",
    eng: 72, hate: 18, amor: 28, odioP: 48
  },
  {
    titulo: "Team Verano vs Invierno",
    texto: "Los que dicen amar el verano solo aman no laburar y tener pileta con aire a 18°. Con 38° viajando en el furgón del Roca se les cura el amor por el calor.",
    eng: 78, hate: 20, amor: 32, odioP: 52
  },
  {
    titulo: "Propina obligatoria",
    texto: "Dejar el 10% de propina por un café que tardaron 40 minutos en traerte frío no es empatía de clase, es subsidiarle el sueldo al dueño negrero.",
    eng: 80, hate: 26, amor: 18, odioP: 64
  },
  {
    titulo: "Milanesa suprema",
    texto: "La milanesa de pollo no es milanesa, es nugget gigante para gente sin convicciones. La única milanesa real es de nalga o bife de chorizo frita en grasa.",
    eng: 68, hate: 16, amor: 30, odioP: 46
  },
  {
    titulo: "El mate dulce",
    texto: "El mate con edulcorante o azúcar no es mate, es una sopa tibia de yuyo. Si no bancás el amargo puro, tomá chocolatada en mamadera.",
    eng: 70, hate: 19, amor: 26, odioP: 54
  },
  {
    titulo: "Hijos vs Perrijos",
    texto: "Llamar 'hijo' a un caniche toy y festejarle el cumpleaños con torta de hígado es el síntoma definitivo de colapso demográfico y psiquiátrico de Occidente.",
    eng: 85, hate: 28, amor: 20, odioP: 68
  },
  {
    titulo: "Dividir la cuenta",
    texto: "Salen 6 personas a cenar y uno pide ensalada y agua, y los otros bife de lomo y vino caro. Si proponés 'dividimos parejo' sos directamente un ladrón.",
    eng: 76, hate: 15, amor: 35, odioP: 44
  }
];

const baitContent = {
  futbolero: [
    {
      titulo: "Messi vs Promesas",
      texto: "Messi en el 2006 no era mucho más que el Changuito Zeballos de hoy. No leyeron mal, agarren los videos y comparen.",
      eng: 80, hate: 25, amor: 10, odioP: 65
    },
    {
      titulo: "La Libertadores devaluada",
      texto: "Ganar la Copa Libertadores hoy tiene menos mérito que ganar la B Metropolitana en los 90. Nivel subterráneo.",
      eng: 75, hate: 22, amor: 15, odioP: 60
    },
    {
      titulo: "Ídolos sobrevalorados",
      texto: "Si tu ídolo no ganó un Mundial como figura principal, no entra ni en el top 20 de la historia del fútbol. Fin de la discusión.",
      eng: 70, hate: 20, amor: 20, odioP: 55
    },
    {
      titulo: "La Champions no existe",
      texto: "A Haaland o Mbappé los ponés un martes a las 15hs a jugar contra Riestra con 38 grados en Pompeya y no tocan una pelota. El fútbol europeo es mentira.",
      eng: 82, hate: 24, amor: 25, odioP: 60
    },
    {
      titulo: "Riquelme vs Verón",
      texto: "Román parado en una pierna generaba más fútbol que toda la Premier League junta en 10 años. Si no te gusta Román te gusta el golf.",
      eng: 85, hate: 28, amor: 30, odioP: 68
    },
    {
      titulo: "Scaloni tuvo suerte",
      texto: "Scaloni armó el equipo por descarte porque los consagrados se rompieron. El verdadero mérito fue de Messi y Dibu. Cierro debate táctico.",
      eng: 88, hate: 35, amor: 8, odioP: 75
    }
  ],
  cryptobro: [
    {
      titulo: "Sueldos en pesos",
      texto: "Si todavía trabajás 8 horas por un sueldo en pesos y no tenés el 80% en altcoins, estás eligiendo la pobreza voluntariamente.",
      eng: 70, hate: 24, amor: 15, odioP: 60
    },
    {
      titulo: "Comprar casa es de pobres",
      texto: "Comprar una casa es mentalidad de esclavo de los años 80. La verdadera libertad financiera es 100% líquida y descentralizada.",
      eng: 75, hate: 20, amor: 20, odioP: 50
    },
    {
      titulo: "La educación tradicional",
      texto: "La universidad te enseña en 5 años lo que aprendés en un hilo de Twitter de 10 minutos sobre DeFi. Despierten.",
      eng: 68, hate: 18, amor: 25, odioP: 45
    },
    {
      titulo: "Bancos centrales quebrados",
      texto: "En 2028 el dólar papel vale CERO. Si no tenés tus llaves privadas en una cold wallet vas a pedir limosna con un tarrito de plástico. Procedo a holdear.",
      eng: 80, hate: 26, amor: 22, odioP: 62
    },
    {
      titulo: "Los ñoquis del sueldo fijo",
      texto: "El concepto de 'vacaciones pagas' es un placebo para que no te des cuenta de que te robaron 11 meses de tu vida. Yo farmeo yield desde Bali mientras duermo.",
      eng: 78, hate: 30, amor: 16, odioP: 66
    },
    {
      titulo: "Solana mató a Ethereum",
      texto: "Pagar $40 de gas fee en Ethereum para mandar $10 es de boomers masoquistas. Solana ya ganó la guerra civil blockchain, acéptenlo con dignidad.",
      eng: 74, hate: 22, amor: 28, odioP: 52
    }
  ],
  humor: [
    {
      titulo: "Los Simpson murieron",
      texto: "Los Simpson murieron en la temporada 4. Todo lo que vino después es contenido basura para nenes de primaria. Facto indiscutible.",
      eng: 75, hate: 18, amor: 25, odioP: 50
    },
    {
      titulo: "El stand-up argentino",
      texto: "El stand-up nacional son 4 porteños hablando de que les da ansiedad pedir un café. No da gracia hace 10 años.",
      eng: 70, hate: 22, amor: 20, odioP: 55
    },
    {
      titulo: "Memes de señoras",
      texto: "Si usás el sticker de Piolín o memes con Minions de forma irónica, lamento decirte que ya te convertiste en tu tía.",
      eng: 60, hate: 10, amor: 35, odioP: 35
    },
    {
      titulo: "Casados con Hijos overrated",
      texto: "Casados con Hijos era Francella gritando 'Aaaay Pepe' y chistes de suegras de 1985 choreados de Sony. Nunca tuvo remate gracioso.",
      eng: 84, hate: 28, amor: 18, odioP: 66
    },
    {
      titulo: "La birra artesanal IPA",
      texto: "La IPA tiene sabor a perfume barato de colectivo y detergente Ala. Se hacen los sommeliers por tomar querosene con lúpulo rancio.",
      eng: 76, hate: 16, amor: 32, odioP: 48
    },
    {
      titulo: "Terapia como personalidad",
      texto: "Hacer 6 años de psicoanálisis para terminar justificando ser un sorete diciendo 'es que estoy poniendo límites' debería estar penado por la ley.",
      eng: 82, hate: 25, amor: 28, odioP: 58
    }
  ],
  militante: [
    {
      titulo: "La cultura del trabajo",
      texto: "En este país la mitad no quiere laburar y quiere que el Estado le pague las vacaciones. Lo digo yo que milito desde abajo.",
      eng: 85, hate: 30, amor: 15, odioP: 70
    },
    {
      titulo: "Voto calificado moral",
      texto: "Si no votaste a nuestro espacio en las últimas elecciones, moralmente no tenés derecho a quejarte de nada los próximos 4 años.",
      eng: 80, hate: 28, amor: 20, odioP: 68
    },
    {
      titulo: "Medios y militancia",
      texto: "No existen los periodistas independientes: o militás la transformación del país o militás los intereses de tres corporaciones.",
      eng: 75, hate: 22, amor: 25, odioP: 60
    },
    {
      titulo: "La tibieza es complicidad",
      texto: "Los 'apolíticos' y los que dicen 'yo no me meto' son los peores cómplices de la entrega del país. En las malas se eligen trincheras, cagones.",
      eng: 88, hate: 34, amor: 22, odioP: 72
    },
    {
      titulo: "El pueblo nunca se equivoca",
      texto: "Cuando gana nuestro líder es la voz sagrada del pueblo soberano; cuando votan al rival es que fueron lobotomizados por algoritmos yanquis. Clarísimo.",
      eng: 82, hate: 32, amor: 18, odioP: 68
    },
    {
      titulo: "Doctrina pura",
      texto: "Para ser militante de verdad tenés que estar dispuesto a defender al compañero de lista aunque ayer lo hayas puteado en 40 tweets. Disciplina o muerte.",
      eng: 84, hate: 30, amor: 24, odioP: 65
    }
  ],
  periodista: [
    {
      titulo: "Primicia bomba en camino",
      texto: "Se viene una filtración de audios que va a hacer renunciar a medio gabinete antes del fin de semana. Guarden este tweet.",
      eng: 85, hate: 15, amor: 30, odioP: 40
    },
    {
      titulo: "Sobres en los medios",
      texto: "El 90% de los periodistas que ven en televisión reciben pauta en negro por debajo de la mesa. Tengo las planillas.",
      eng: 80, hate: 20, amor: 25, odioP: 50
    },
    {
      titulo: "La muerte de la primicia",
      texto: "Los diarios de papel no sirven ni para envolver huevos. Twitter ya les ganó la agenda para siempre.",
      eng: 65, hate: 12, amor: 30, odioP: 35
    },
    {
      titulo: "Operación de inteligencia",
      texto: "Me confirmaron tres fuentes judiciales de Comodoro Py: la causa de la que todos hablan fue armada en una oficina de la AFI un feriado. Ampliaremos.",
      eng: 88, hate: 24, amor: 28, odioP: 55
    },
    {
      titulo: "El off the record que quema",
      texto: "Un ministro me dijo textual anoche comiendo un asado: 'Si no devaluamos el martes, nos vamos en helicóptero'. No doy nombres por ética profesional.",
      eng: 92, hate: 32, amor: 20, odioP: 65
    },
    {
      titulo: "Chequeo destructivo",
      texto: "El 100% de lo que dijo el vocero presidencial hoy a la mañana es falso de falsedad absoluta. En 10 minutos publico el facsímil que lo desmiente.",
      eng: 84, hate: 26, amor: 32, odioP: 58
    }
  ],
  gamer: [
    {
      titulo: "Dark Souls sobrevalorado",
      texto: "Dark Souls es un juego mediocre con dificultad artificial pensado para que streamers sin talento griten en cámara.",
      eng: 78, hate: 25, amor: 15, odioP: 65
    },
    {
      titulo: "Consolas en 2026",
      texto: "Comprar una consola en 2026 es de conformista que le tiene miedo a armar una PC como la gente.",
      eng: 70, hate: 20, amor: 20, odioP: 55
    },
    {
      titulo: "Juegos retro vs actuales",
      texto: "La nostalgia les nubla el juicio: los juegos de PS1 envejecieron horrible y hoy son injugables.",
      eng: 65, hate: 18, amor: 25, odioP: 45
    },
    {
      titulo: "El GTA 6 va a decepcionar",
      texto: "Están esperando el GTA 6 como si fuera la segunda venida de Cristo y va a ser un simulador de mandados woke a 30fps con microtransacciones de $70 dólares.",
      eng: 86, hate: 30, amor: 18, odioP: 68
    },
    {
      titulo: "Streamers que no juegan a nada",
      texto: "Las tres cuartas partes de los streamers top son tipos de 30 años reaccionando a TikToks de nenes de 12 porque si agarran un joystick dan vergüenza ajena.",
      eng: 82, hate: 24, amor: 30, odioP: 56
    },
    {
      titulo: "Los eSports no son deporte",
      texto: "Jugar al Counter sentado en una butaca de cuerina tomando energizante no es ser atleta. Dejen de comparar a un pibe de 17 años con Federer.",
      eng: 80, hate: 28, amor: 20, odioP: 64
    }
  ],
  influencer: [
    {
      titulo: "El club de las 5 AM",
      texto: "Si te despertás después de las 6:00 AM ya perdiste el día y tu energía vibra bajo. No es disciplina, es amor propio.",
      eng: 72, hate: 20, amor: 20, odioP: 55
    },
    {
      titulo: "Marcas y autenticidad",
      texto: "Las marcas de shopping común son para gente sin identidad visual. Si no es de autor, prefiero vestirme con ropa lisa.",
      eng: 68, hate: 22, amor: 15, odioP: 58
    },
    {
      titulo: "Filtros y belleza",
      texto: "El 99% de las influencers que admiran tienen 4 capas de filtro y 3 retoques encima. Yo me muestro 100% al natural.",
      eng: 75, hate: 15, amor: 35, odioP: 40
    },
    {
      titulo: "Pagar un café en Palermo",
      texto: "Me cobraron $9.500 una tostada con palta y un flat white en Palermo Soho. Chicas, apoyar a los emprendedores locales es un deber espiritual. Valoren el arte.",
      eng: 80, hate: 28, amor: 16, odioP: 65
    },
    {
      titulo: "Manifestar abundancia",
      texto: "Si estás endeudada no es por la inflación del país, es porque tenés un bloqueo en tu chakra raíz que rechaza la abundancia cuántica. Suelten la escasez.",
      eng: 85, hate: 34, amor: 14, odioP: 72
    },
    {
      titulo: "Canjes no son regalos",
      texto: "La gente cree que el canje es gratis. Hacer 3 historias etiquetando el hotel en Cariló requiere una dirección de arte y desgaste emocional que nadie ve.",
      eng: 82, hate: 30, amor: 18, odioP: 68
    }
  ],
  onlyfans: [
    {
      titulo: "Doble moral masculina",
      texto: "Los hombres que más critican a las creadoras de contenido en público son exactamente los primeros que pagan la suscripción VIP en privado.",
      eng: 85, hate: 22, amor: 30, odioP: 55
    },
    {
      titulo: "Facturación vs Profesiones",
      texto: "Facturé en 3 días de contenido exclusivo más que un profesional con maestría en un año entero. Estudien si quieren.",
      eng: 80, hate: 28, amor: 20, odioP: 65
    },
    {
      titulo: "Independencia económica",
      texto: "No hay nada más feminista y revolucionario que ser dueña absoluta de tu propio cuerpo y de tus ingresos bancarios.",
      eng: 75, hate: 20, amor: 35, odioP: 50
    },
    {
      titulo: "Los que piden descuento",
      texto: "Me escriben al DM pidiendo rebaja del 50% en el pack mensual porque 'son estudiantes'. Rey, si no tenés $10 dólares andá a estudiar en vez de mirar culos.",
      eng: 86, hate: 25, amor: 32, odioP: 58
    },
    {
      titulo: "Los hombres deconstruidos",
      texto: "Los aliados deconstruidos con pañuelo verde en la bio son los más turbios y acosadores por mensaje privado. Manual de conducta 101.",
      eng: 88, hate: 30, amor: 30, odioP: 62
    },
    {
      titulo: "Jubilación y AFIP",
      texto: "Mucho chiste con 'de qué vas a vivir a los 50', pero ya compré dos departamentos en pozo al contado mientras ustedes pagan el monotributo atrasado.",
      eng: 90, hate: 32, amor: 24, odioP: 66
    }
  ],
  techie: [
    {
      titulo: "Python de juguete",
      texto: "Python es un lenguaje de juguete para gente que no sabe gestionar memoria. Si no programás en Rust o C++, sos usuario, no dev.",
      eng: 75, hate: 22, amor: 20, odioP: 60
    },
    {
      titulo: "IA y despidos",
      texto: "Si tu trabajo como junior dev puede ser reemplazado por un prompt de 3 líneas, nunca fuiste programador. La IA solo limpia el mercado.",
      eng: 80, hate: 25, amor: 15, odioP: 65
    },
    {
      titulo: "Bootcamps de 3 meses",
      texto: "Hicieron un curso de 12 semanas de HTML y se pusieron 'Senior Fullstack Engineer' en LinkedIn. Tengan un poco de dignidad.",
      eng: 72, hate: 18, amor: 30, odioP: 45
    },
    {
      titulo: "Linux vs Mac para programar",
      texto: "Gastar $3.000 dólares en una MacBook Pro para abrir VS Code y una terminal bash es el mayor triunfo del marketing sobre la inteligencia humana.",
      eng: 78, hate: 24, amor: 22, odioP: 58
    },
    {
      titulo: "Scrum y metodologías ágiles",
      texto: "Las daily meetings y los story points son una estafa piramidal inventada por project managers que no saben tirar una línea de código para justificar su sueldo.",
      eng: 85, hate: 16, amor: 38, odioP: 42
    },
    {
      titulo: "Venture Capital tóxico",
      texto: "Levantar una ronda seed de 2 millones de dólares para una app que te avisa cuándo regar la planta no es éxito, es quemar plata ajena antes de quebrar.",
      eng: 82, hate: 20, amor: 26, odioP: 52
    }
  ],
  podcaster: [
    {
      titulo: "Episodio censurado",
      texto: "Grabamos una entrevista con una figura pesadísima y tuvimos que cortar 25 minutos porque terminábamos todos en Tribunales. Guarden el audio.",
      eng: 82, hate: 14, amor: 30, odioP: 40
    },
    {
      titulo: "La radio está muerta",
      texto: "Las radios tradicionales son geriátricos con antena. En 3 años no queda ni una FM encendida en todo el país.",
      eng: 70, hate: 20, amor: 20, odioP: 50
    },
    {
      titulo: "Entrevistas de 10 minutos",
      texto: "La televisión no te deja profundizar una idea sin meterte una tanda de fideos. El podcast es el único refugio intelectual que queda.",
      eng: 65, hate: 12, amor: 35, odioP: 35
    },
    {
      titulo: "Invitados que cobran cachet",
      texto: "Un 'filósofo mediático' me pidió $1.500 dólares para venir a charlar 2 horas al estudio. Le dije que con esa plata me compro 3 micrófonos Shure y un asado.",
      eng: 86, hate: 18, amor: 34, odioP: 44
    },
    {
      titulo: "El streaming masivo se cae",
      texto: "Miran 8 streamers sentados en una mesa gritándose encima sobre si se lavan las manos después de mear. El formato 'charlar sin saber' ya tocó techo.",
      eng: 84, hate: 26, amor: 25, odioP: 60
    },
    {
      titulo: "Verdad sin algoritmo",
      texto: "En el podcast se habla lo que en Twitter se autocensura por miedo a perder la verificación o el canje. Acá no hay anunciantes que nos bajen línea.",
      eng: 80, hate: 22, amor: 28, odioP: 50
    }
  ],
  opinologo: [
    {
      titulo: "El rock nacional sobrevalorado",
      texto: "El rock nacional fue una moda inflada de cuatro tipos desafinando con campera de cuero. El trap actual tiene tres veces más poesía urbana.",
      eng: 85, hate: 28, amor: 15, odioP: 70
    },
    {
      titulo: "La universidad obsoleta",
      texto: "La universidad tradicional quedó 20 años atrás. En 6 meses de hilos en X y tutoriales aprendés más que en toda una carrera de grado.",
      eng: 75, hate: 24, amor: 20, odioP: 60
    },
    {
      titulo: "La falsa nostalgia",
      texto: "Todo tiempo pasado fue PEOR. La gente extraña los 90 porque tenía 15 años y no pagaba el alquiler, no porque el país fuera mejor.",
      eng: 70, hate: 16, amor: 30, odioP: 45
    },
    {
      titulo: "Cine argentino autofinanciado",
      texto: "Hacer películas que no ve nadie con la plata de los jubilados no es 'cultura soberana', es una pyme de amigos paseando por festivales en Europa.",
      eng: 88, hate: 32, amor: 20, odioP: 72
    },
    {
      titulo: "Los porteños y el país",
      texto: "A 50 kilómetros de la General Paz no existe el flat white ni la deconstrucción de género. Argentina es otra cosa muy distinta a lo que se tuitea en Palermo.",
      eng: 90, hate: 30, amor: 25, odioP: 65
    },
    {
      titulo: "El mito del asado",
      texto: "El asado argentino promedio es un pedazo de carbón seco que tapan con chimichurri rancio para que pase. El verdadero ahumado tejano le pasa el trapo.",
      eng: 92, hate: 38, amor: 12, odioP: 78
    }
  ],
  conspiranoico: [
    {
      titulo: "Apagón inminente",
      texto: "Nos están preparando para un apagón programado de 72 horas el mes que viene. Tengan efectivo y comida en lata a mano. Después no digan que no avisé.",
      eng: 82, hate: 18, amor: 25, odioP: 50
    },
    {
      titulo: "Chemtrails en el cielo",
      texto: "Miren el cielo de Buenos Aires hoy a las 18:00. Esas líneas que cruzan la ciudad no son aviones comerciales. No respiren hondo.",
      eng: 78, hate: 22, amor: 20, odioP: 58
    },
    {
      titulo: "Las élites y la agenda",
      texto: "Todo lo que pasa en las noticias de la semana está guionado por los mismos tres fondos de inversión desde 2019. Sigan durmiendo.",
      eng: 75, hate: 20, amor: 25, odioP: 52
    },
    {
      titulo: "Reemplazo de billetes físicos",
      texto: "La digitalización total de los pagos no es por comodidad, es para que el día que opines en contra te bloqueen la tarjeta y no puedas comprar ni pan.",
      eng: 86, hate: 24, amor: 28, odioP: 55
    },
    {
      titulo: "Antenas 5G y frecuencias",
      texto: "Instalaron 14 torres nuevas en la madrugada del domingo sin cartel de obra ni aviso vecinal. Las jaulas de Faraday en casa ya no son optativas.",
      eng: 84, hate: 26, amor: 22, odioP: 60
    },
    {
      titulo: "El simulacro global",
      texto: "Todo el arco político responde a la misma logia suiza. La 'pelea' en el Congreso es teatro de títeres para que no mires las reservas de oro.",
      eng: 88, hate: 25, amor: 30, odioP: 54
    }
  ]
};


/* ?? M?DULO: content/cards/topics.js ?? */
/* Twitero v15 ? content/cards/topics.js */

// cartas-restantes-content.js — v4
// Contenido enriquecido: pools de 3-5 items por arquetipo con { titulo, texto, engagement, hate }

// ── TEMA PROPIO (pool de 3-5 por arquetipo, con cuerpo narrativo real) ──
const temaPropioContent = {
  opinologo: [
    { titulo: "Columna semanal", texto: "Cuatro cosas que aprendí esta semana mirando cómo el sistema se come a sí mismo. Abro hilo, sin filtros, agárrense.", engagement: 45, hate: 15 },
    { titulo: "Mi diagnóstico del momento", texto: "Todos hablan del síntoma, nadie habla de la causa. Como siempre. Hoy doy mi análisis completo, se van a enojar pero bueno.", engagement: 42, hate: 18 },
    { titulo: "Postura sin matices", texto: "Me cansé de los grises. Esto está mal, punto, no hay 'depende'. Si no les gusta, no me sigan, no pasa nada.", engagement: 50, hate: 22 },
    { titulo: "El consenso que molesta", texto: "Estoy de acuerdo con algo que dijo alguien del otro bando y sé que esto me va a costar seguidores de los dos lados. No me importa. Acá va.", engagement: 48, hate: 26 },
    { titulo: "El ensayo de la semana", texto: "Dos días escribiendo esto, sin AI de por medio, con fuentes y todo. Puede ser la nota que más me costó publicar en años. Ahí va.", engagement: 55, hate: 20 },
    { titulo: "La tesis que incomoda", texto: "Mi argumento de hoy es que los dos lados tienen más en común de lo que admiten. Prepárense para irse enojados desde el primer párrafo.", engagement: 52, hate: 30 },
  ],
  futbolero: [
    { titulo: "Análisis táctico", texto: "El 4-3-3 que pusieron ayer no es solo una formación, es una declaración de guerra. Se las explico con capturas y todo, agarren mate.", engagement: 50, hate: 10 },
    { titulo: "El partido de ayer", texto: "No perdimos por el árbitro, para variar. Perdimos porque el mediocampo no presionó en los primeros 15. Ahí están los datos.", engagement: 48, hate: 12 },
    { titulo: "La realidad del plantel", texto: "Tres titulares en baja, el DT sin un cambio claro en el banco, y la dirigencia mirando para otro lado como siempre. Así estamos.", engagement: 52, hate: 14 },
    { titulo: "El juvenil que nadie nombra", texto: "Hay un pibe de 18 años en la reserva que en 2 años va a ser titular indiscutido. Lo vengo siguiendo hace seis meses. Acá los números.", engagement: 56, hate: 8 },
    { titulo: "El DT equivocado", texto: "La formación del domingo fue una vergüenza táctica. Se lo digo con respeto al técnico, pero si seguimos así bajamos. Y lo digo yo, que lo banqué desde el primer día.", engagement: 60, hate: 18 },
    { titulo: "La dirigencia en llamas", texto: "La pelea interna de la directiva lleva 3 meses y nadie del club la reconoce públicamente. Tengo las conversaciones. No lo voy a publicar ahora, pero las tengo.", engagement: 65, hate: 12 },
  ],
  militante: [
    { titulo: "Bajada de línea del día", texto: "Lo que pasó hoy no es un error aislado, es un patrón que vengo documentando en el feed hace meses. Guarden este tweet.", engagement: 40, hate: 25 },
    { titulo: "Defensa de la postura", texto: "Me preguntan todo el tiempo cómo sigo bancando esto. Acá mi respuesta completa, con data y sin vueltas.", engagement: 38, hate: 28 },
    { titulo: "El otro bando no entiende", texto: "Critican sin leer el proyecto completo, opinan sin contexto, juzgan sin haber pisado nunca una asamblea. Ya está, alcanza.", engagement: 42, hate: 30 },
    { titulo: "El compañero que falló", texto: "Voy a decir algo incómodo sobre alguien de nuestro espacio porque nadie más lo hace y hace falta. Con respeto, pero hay que decirlo.", engagement: 44, hate: 35 },
    { titulo: "La victoria que nadie cubre", texto: "Hoy ganamos algo concreto para la gente real de abajo y ningún medio hegemónico lo va a cubrir. Lo hago yo, con fuentes y todo.", engagement: 46, hate: 22 },
    { titulo: "Documento filtrado", texto: "Me llegó este documento de adentro. No lo voy a publicar completo todavía, pero lo que dice sobre la política de hoy es gravísimo. Hilo con extractos.", engagement: 52, hate: 28 },
  ],
  humor: [
    { titulo: "Filosofía de sobremesa", texto: "No te podés levantar a las 6 am un domingo por voluntad propia culiau, salvo que seas panadero o te esté buscando la policía federal.", engagement: 55, hate: 8 },
    { titulo: "El termómetro social", texto: "El argentino no va al psicólogo porque es caro: prefiere clavarse un fernet de 70/30 y discutir a muerte con un bot en Twitter hasta las cuatro de la mañana.", engagement: 50, hate: 6 },
    { titulo: "Crónica de la siesta cordobesa", texto: "Acá en Córdoba entre las 14 y las 17 no te atienden ni en la guardia médica chabón. La siesta es un derecho constitucional sagrado.", engagement: 48, hate: 5 },
    { titulo: "Transporte y desquicio", texto: "Subí al bondi y el chofer venía escuchando Rodrigo a todo volumen mientras esquivaba baches con una mano y cebaba mate con la otra. 10/10 la experiencia sensorial.", engagement: 60, hate: 4 },
    { titulo: "Productividad en picada", texto: "Son las 3am, mañana tengo que laburar y acá estoy viendo un video de cómo hacerle un asador criollo a un muñeco de He-Man. Mi cerebro es una fotocopiadora de memes.", engagement: 58, hate: 3 },
    { titulo: "El verdadero lujo argentino", texto: "Olvidate de las criptomonedas y los autos importados: el verdadero estatus en este país es prender el aire en 22° y que no te salte la térmica del departamento.", engagement: 62, hate: 6 },
  ],
  periodista: [
    { titulo: "Investigación exclusiva", texto: "Tres semanas cruzando facturas, contratos y testimonios. Lo que encontré sobre este expediente te va a cambiar la lectura de todo el caso. Hilo.", engagement: 62, hate: 12 },
    { titulo: "Primicia verificada", texto: "Confirmé con tres fuentes independientes, que no se conocen entre sí, lo que circulaba como rumor esta mañana. Documentos abajo.", engagement: 58, hate: 10 },
    { titulo: "Contexto que falta", texto: "Todo el mundo tuiteó sobre el qué pasó hoy. Nadie explicó el por qué ni cómo llegamos hasta acá. Lo hago yo, con la cronología completa.", engagement: 55, hate: 8 },
    { titulo: "La fuente que arriesgó todo", texto: "Una fuente me llamó esta mañana y me dio algo que nadie tiene. La protejo. La nota sale esta tarde. Aguarden.", engagement: 68, hate: 14 },
    { titulo: "Acceso exclusivo al expediente", texto: "Tuve en mis manos el expediente completo. 340 fojas. Leí todo. Lo que está en las páginas 118 a 135 cambia todo el caso. Hilo.", engagement: 72, hate: 10 },
    { titulo: "La nota que casi no publico", texto: "Dos semanas con esto encima, tres llamados de personas que me pidieron que no lo publicara. Lo publico igual. La información es pública por derecho.", engagement: 70, hate: 16 },
  ],
  cryptobro: [
    { titulo: "Análisis del mercado semanal", texto: "BTC rompió soporte clave, ETH consolidando, los altcoins en modo espera total. Mi lectura técnica de la semana (esto no es recomendación de compra, hagan su propio DYOR).", engagement: 38, hate: 20 },
    { titulo: "La oportunidad que nadie ve", texto: "Mientras todos miran BTC, hay un movimiento silencioso en L2s que puede ser histórico. Se las dejo acá, no es consejo financiero, cada uno investiga lo suyo.", engagement: 42, hate: 18 },
    { titulo: "Por qué seguí hodling", texto: "Me preguntaron cómo aguanté el bear market de 18 meses. Diamond hands, nada más. Yo no vendo ni loco, pero eso no significa que vos tengas que hacer lo mismo.", engagement: 40, hate: 15 },
    { titulo: "La wallet que nadie conoce", texto: "Esta dirección on-chain mueve cantidades enormes y nadie la tiene en el radar todavía. La estoy siguiendo hace 3 semanas. No es consejo financiero, es inteligencia de mercado.", engagement: 48, hate: 22 },
    { titulo: "El protocolo del mes", texto: "Estuve buildando con este protocolo nuevo de DeFi toda la semana. Si el equipo cumple el roadmap, en 12 meses nadie va a acordarse de Uniswap. DYOR igual.", engagement: 44, hate: 20 },
    { titulo: "Confirmado por on-chain", texto: "Los datos on-chain dicen lo contrario a lo que se publicó hoy en los medios tradicionales. Acá la lectura real del movimiento de las wallets grandes.", engagement: 50, hate: 18 },
  ],
  gamer: [
    { titulo: "Reseña honesta sin spoilers", texto: "40 horas de campaña completadas, sin spoilers. Gráficos un 10, la historia se cae feo en el acto 3. Ahí va mi análisis real.", engagement: 48, hate: 8 },
    { titulo: "La build definitiva", texto: "Después de 200 intentos fallidos, encontré la build que rompe el juego. Clip o no pasó, así que ahí les dejo el video.", engagement: 52, hate: 6 },
    { titulo: "El meta cambió", texto: "El último parche nerfeó a mi main hasta dejarlo injugable. Nadie pidió este balance. Reacción en vivo, no estoy bien.", engagement: 45, hate: 10 },
    { titulo: "Speedrun récord roto", texto: "Personal best nuevo: 2:14:38 en Any%. 6 semanas de práctica. El clip completo ya está subido, el momento del skip en el minuto 47 es la clave.", engagement: 55, hate: 4 },
    { titulo: "El bug que los devs no van a parchar", texto: "Encontré un bug que rompe completamente el balance del mapa más popular. Lo reporté hace tres semanas. Cero respuesta. Lo hago público ahora.", engagement: 58, hate: 8 },
    { titulo: "Análisis de diseño profundo", texto: "¿Por qué este juego se siente distinto a todo lo demás? Hilo de 15 tweets sobre filosofía de diseño de niveles, para los que se quedaron mirando el crédito final.", engagement: 50, hate: 5 },
  ],
  conspiranoico: [
    { titulo: "Conectando los puntos", texto: "Nadie lo dijo en la tele, pero el apagón de ayer, el cambio de directorio de la semana pasada y el viaje sorpresa de hoy tienen un patrón clarísimo. Los conecto.", engagement: 35, hate: 22 },
    { titulo: "Lo que los medios no muestran", texto: "Mientras te tienen mirando la polémica del día, está pasando otra cosa en paralelo. La conexión entre las dos no es casualidad.", engagement: 38, hate: 25 },
    { titulo: "La investigación que censuran", texto: "Este hilo ya fue reportado dos veces esta semana. Eso me confirma que toqué algo real. Lo vuelvo a subir, guárdenlo por las dudas.", engagement: 40, hate: 28 },
    { titulo: "La reunión que no existió", texto: "Hay una cena que se hizo el miércoles pasado en una estancia privada del norte con representantes de 4 países. No hay fotos porque pidieron los celulares en la entrada.", engagement: 44, hate: 24 },
    { titulo: "El documento desclasificado", texto: "Encontré en los archivos públicos de un organismo internacional un documento del 2019 que explica lo que está pasando ahora mejor que cualquier analista. Hilo.", engagement: 42, hate: 26 },
    { titulo: "El patrón que se repite", texto: "Busquen lo que pasó en 2001, en 2018 y compárenlo con esto. Es el mismo manual de 3 actos. Estamos en el acto 2 ahora mismo.", engagement: 46, hate: 30 },
  ],
  influencer: [
    { titulo: "Mi rutina de la semana", texto: "5:30am, la gente hermosa de una marca de skincare me mandó este sérum de vitamina C para probarlo y contarles, más 40 minutos de pilates antes del primer meeting.", engagement: 52, hate: 10 },
    { titulo: "Haul de la temporada", texto: "Probé 11 prendas esta semana y solo me quedé con 3 (las otras 8 me las mandaron en canje, pero honestamente no eran para mi energía del momento).", engagement: 50, hate: 8 },
    { titulo: "El teaser misterioso", texto: "Se vienen cositas 👀 no puedo contar nada todavía pero prepárense porque esto lo vengo armando hace semanas.", engagement: 48, hate: 12 },
    { titulo: "El día que salió todo mal", texto: "Me parece importante mostrares también cuando el día fue un desastre total. Hoy la sesión se canceló, el canje se cayó y llovió en el peor momento. Acá el resumen.", engagement: 58, hate: 6 },
    { titulo: "Mi palabra del año", texto: "La palabra que va a definir mi 2025 es 'presencia'. No me cuesta ponerlo, me cuesta vivirlo. Acá el hilo de por qué lo elegí.", engagement: 55, hate: 9 },
    { titulo: "Marca que rechacé", texto: "Me ofrecieron una colaboración muy buena económicamente y la rechacé porque los valores no alineaban con lo que cuido acá. No digo quiénes. Pero lo rechacé.", engagement: 62, hate: 14 },
  ],
  onlyfans: [
    { titulo: "Detrás de escena", texto: "La gente cree que es prender la cámara y listo. En realidad son luces, edición, contratos con el estudio y seis horas de trabajo por un video de diez minutos.", engagement: 50, hate: 18 },
    { titulo: "Mi mes en números", texto: "Transparencia total del mes: facturé bien, invertí en cámara y estudio nuevo, y me quedó bastante menos de lo que la gente imagina cuando dice 'esto es plata fácil'.", engagement: 48, hate: 20 },
    { titulo: "Nuevo set disponible", texto: "Tres semanas armando esta producción, con vestuario y locación distinta a todo lo anterior. Es lo mejor que subí hasta ahora, se las dejo. Link en bio.", engagement: 55, hate: 15 },
    { titulo: "El límite que puse hoy", texto: "Hoy dije que no a algo que hace seis meses hubiera aceptado por plata. Crecer también es aprender a fijar el precio correcto de tu energía y tiempo.", engagement: 54, hate: 17 },
    { titulo: "Colaboración con otra creadora", texto: "Terminamos de editar la colaboración con una creadora que admiro hace dos años. Algo completamente diferente a lo que hago sola. Sale el viernes. Link en bio cuando esté.", engagement: 60, hate: 12 },
    { titulo: "Carta abierta a mis subs", texto: "Les debo honestidad: el mes pasado fue durísimo emocionalmente. Acá lo que les puedo contar y lo que me reservo. Gracias por seguir ahí.", engagement: 58, hate: 14 },
  ],
  techie: [
    { titulo: "Review honesta de la herramienta", texto: "Usé esta IA toda la semana metida en mi workflow diario, sin sponsor de por medio. Acá lo que realmente hace bien, y lo que todavía falla feo.", engagement: 40, hate: 10 },
    { titulo: "Lo que aprendí buildando en público", texto: "Mes 3 de mi SaaS: MRR en $1.200, churn del 8%, y ya aprendí tres cosas que haría diferente si arrancara hoy de cero.", engagement: 45, hate: 8 },
    { titulo: "El stack que uso en 2025", texto: "Me preguntan como 50 veces por semana qué herramientas uso para todo. Respuesta definitiva y completa, cero links de afiliados.", engagement: 42, hate: 6 },
    { titulo: "El feature que tardó 3 meses", texto: "Shippeé algo hoy que debería haber tardado 3 semanas y tardó 3 meses. Hilo de todo lo que salió mal en el proceso y qué haría diferente.", engagement: 48, hate: 5 },
    { titulo: "El prompt que cambió mi workflow", texto: "Llevo 6 meses probando prompts distintos para la misma tarea. El de hoy es el primero que realmente me ahorró tiempo medible. Lo comparto sin guardármelo.", engagement: 50, hate: 7 },
    { titulo: "La startup que cerró y lo que aprendí", texto: "Dos años trabajando en un proyecto que cerramos el mes pasado. Postmortem completo, sin mentiras de LinkedIn. Qué falló realmente.", engagement: 55, hate: 6 },
  ],
  podcaster: [
    { titulo: "Adelanto del próximo episodio", texto: "El invitado del jueves me dejó sin palabras tres veces en la misma grabación. Ya escuché el corte crudo dos veces y sigue siendo la entrevista más difícil que tuve.", engagement: 45, hate: 8 },
    { titulo: "Clip viral del episodio", texto: "El clip del minuto 38 del episodio de ayer se fue de las manos, ya superó las views del episodio entero. ¿Lo escuchaste completo o solo viste el clip?", engagement: 50, hate: 6 },
    { titulo: "Por qué hago esto", texto: "Alguien me preguntó en los comentarios si el podcast realmente da plata. Respuesta honesta, con números reales, en este hilo.", engagement: 42, hate: 5 },
    { titulo: "El episodio que más costó", texto: "Este episodio lo empecé a grabar cuatro veces. El invitado se bajó dos veces. Hoy por fin sale. Dos horas sin cortes ni edición de contenido.", engagement: 52, hate: 4 },
    { titulo: "Número 200", texto: "Episodio 200. Lo hice solo, sin invitado. Solo con el micrófono y lo que aprendí en 200 semanas. El más personal que grabé en toda la historia del programa.", engagement: 58, hate: 3 },
    { titulo: "Lo que casi no cuento nunca", texto: "Hay cosas que pasan detrás del micrófono que nunca salen al aire por decisión editorial. Hoy cuento dos de ellas porque ya no importa el timing.", engagement: 55, hate: 5 },
  ]
};

// ── TEMA AJENO (pool de 3 por arquetipo) ──
const temaAjenoContent = {
  opinologo:    [
    { titulo: "Opinando de fútbol", texto: "La defensa estuvo pésima ayer, ni hace falta verlo, con los highlights alcanza y sobra.", engagement: 10, hate: 40 },
    { titulo: "Me meto en el debate económico", texto: "No soy economista, pero el sentido común de cualquier persona alcanza para ver que esto está mal planteado.", engagement: 8, hate: 42 },
    { titulo: "Mi postura sobre tecnología", texto: "No entiendo de código, pero entiendo de lógica, y la lógica dice que este proyecto está mal desde la base.", engagement: 9, hate: 38 },
    { titulo: "Crítica gastronómica improvisada", texto: "Nunca escribí de gastronomía pero fui a ese restaurante del que habla todo el mundo y no entiendo el hype. Un revuelto de papa con huevo a precio de tasting menu.", engagement: 11, hate: 36 },
    { titulo: "Reseña de película que no vi completa", texto: "Vi los primeros 40 minutos y los últimos 20. Con eso alcanza y sobra para tener una opinión, honestamente.", engagement: 9, hate: 44 },
    { titulo: "Opinando de salud sin ser médico", texto: "No necesito ser médico para ver que ese tratamiento que recomiendan los grandes medios tiene más intereses económicos detrás que evidencia clínica.", engagement: 10, hate: 46 },
  ],
  futbolero:    [
    { titulo: "Opinando de política", texto: "No soy politólogo, pero soy ciudadano y voté, y con eso me alcanza para decir que todos mienten por igual.", engagement: 8, hate: 42 },
    { titulo: "Mi take sobre la economía", texto: "Si con el fútbol aprendí algo es que los números no mienten. La inflación es un cagadón, no hace falta ser economista para verlo.", engagement: 10, hate: 38 },
    { titulo: "Comentario sobre tecnología", texto: "No entiendo mucho de esto pero me parece raro que nadie hable en serio de los riesgos de la IA.", engagement: 9, hate: 35 },
    { titulo: "Opinión sobre música popular", texto: "Yo de trap no entiendo nada, pero mis sobrinos me pusieron esto y no es tan horrible como parecía. Igual Spinetta les gana 10 a 0.", engagement: 12, hate: 32 },
    { titulo: "Comentario de cocina", texto: "Vi el programa de cocina y me parece que ponen demasiadas rúcula. El que pone rúcula en todo es el árbitro del mundo gastronómico.", engagement: 11, hate: 30 },
    { titulo: "Take de salud y ejercicio", texto: "Yo no soy nutricionista pero te digo: el que corre maratones y come pollo con brócoli toda la semana no tiene calidad de vida. Vivir así no es vivir.", engagement: 14, hate: 38 },
  ],
  militante:    [
    { titulo: "Me meto en debate tecnológico", texto: "La tecnología siempre termina sirviendo a quien tiene el poder. Esto es político, no técnico, dejen de hacerse los neutrales.", engagement: 10, hate: 35 },
    { titulo: "Opinando de fútbol", texto: "El fútbol también reproduce las estructuras de poder que venimos criticando. No es entretenimiento inocente, nada lo es.", engagement: 8, hate: 40 },
    { titulo: "Take sobre cultura pop", texto: "Esa serie que están mirando todos reproduce el statu quo de manera bastante subliminal. Es ideología con buena fotografía.", engagement: 12, hate: 36 },
    { titulo: "Opinión sobre crypto", texto: "Bitcoin es la versión digital del oro de los ricos: otro activo especulativo sin valor real que genera riqueza hacia arriba. No nos van a liberar con más mercado.", engagement: 10, hate: 42 },
    { titulo: "Crítica al veganismo de clase", texto: "El veganismo de exportación que se practica en Palermo es un lujo de clase. Cuando coman bien los comedores comunitarios, hablamos de proteína de avena.", engagement: 14, hate: 44 },
    { titulo: "Opinando de cine sin haber visto", texto: "No necesité ver la película de ese director para saber su posición política. La filmografía previa dice todo lo que hay que saber.", engagement: 9, hate: 38 },
  ],
  humor:        [
    { titulo: "Chiste sobre economía", texto: "No entiendo nada de macroeconomía culiau, pero sé que si el paquete de yerba sube de nuevo vamos a tener que empezar a fumar orégano en pipa.", engagement: 15, hate: 38 },
    { titulo: "Chiste político picante", texto: "Aviso a la comunidad: este chiste político tiene una vida útil de 15 minutos antes de que me hagan 4 denuncias penales en Comodoro Py.", engagement: 18, hate: 42 },
    { titulo: "Crisis y memética pura", texto: "El país se prende fuego y yo acá haciendo memes con la cara del ministro. Es mi mecanismo de defensa, déjenme en paz que no tengo obra social.", engagement: 12, hate: 35 },
    { titulo: "Filosofía de pareja moderna", texto: "No soy terapeuta pero les tiro la posta: si tu pareja te manda audios de más de 4 minutos, no te ama, te está dictando una sentencia judicial.", engagement: 20, hate: 30 },
    { titulo: "Masterclass de cocina trucha", texto: "Intenté cocinar la receta gourmet de Instagram y me quedó un adoquín con gusto a quemado. Al perro se lo di y me miró con desprecio.", engagement: 22, hate: 28 },
    { titulo: "El folklore futbolero", texto: "No cazo un fulbo pero ver a 50 tipos llorando porque un árbitro de 25 años cobró un offside milimétrico con el VAR me da años de vida.", engagement: 25, hate: 32 },
  ],
  periodista:   [
    { titulo: "Opinión sin investigar", texto: "Sé que no es lo mío, pero a veces hay que sacar la opinión rápido para no perder la conversación del día. Después profundizo con una nota.", engagement: 10, hate: 32 },
    { titulo: "Comentario de fútbol", texto: "El periodismo deportivo es un género periodístico como cualquier otro, y esta vez me toca ejercerlo a mí también.", engagement: 12, hate: 28 },
    { titulo: "Opinando de tecnología", texto: "Escribí este hilo sin haber leído el paper técnico completo, lo reconozco, pero el argumento central me sigue pareciendo válido.", engagement: 8, hate: 35 },
    { titulo: "Reseña de disco sin escuchar completo", texto: "Escuché el primer corte y el último. El disco nuevo es exactamente lo que esperaba de él: tres ideas buenos y siete de relleno.", engagement: 10, hate: 30 },
    { titulo: "Crítica arquitectónica improvisada", texto: "No soy arquitecto pero ese edificio nuevo en Retiro es un insulto a la línea de horizonte de la ciudad. Alguien le autorizó eso y tenemos derecho a saber quién.", engagement: 11, hate: 28 },
    { titulo: "Opinando de medicina alternativa", texto: "No investigo salud habitualmente, pero me parece que el debate sobre acupuntura merece más seriedad de la que le da el periodismo convencional.", engagement: 9, hate: 34 },
  ],
  cryptobro:    [
    { titulo: "Opinión política", texto: "No soy político pero entiendo de incentivos, y los incentivos actuales son todos erróneos. (Sí, esto tampoco es consejo político, jaja).", engagement: 8, hate: 40 },
    { titulo: "Take de fútbol", texto: "Si aplicamos tokenomics al mercado de pases, el fútbol sería mucho más eficiente. Alguien que arme el whitepaper, yo pongo la idea.", engagement: 10, hate: 35 },
    { titulo: "Opinando de salud", texto: "No soy médico pero investigué mucho sobre esto (leí un thread largo) y creo que el sistema falla sistemáticamente. DYOR también con tu salud, che.", engagement: 7, hate: 42 },
    { titulo: "Take nutricional de biohacker", texto: "Dejé los carbohidratos, tomo 14 suplementos al día y ayuno 20 horas. No es consejo de salud pero mi energía vibra diferente. El sistema de salud convencional no quiere que sepas esto.", engagement: 9, hate: 44 },
    { titulo: "Opinando del mercado inmobiliario", texto: "Comprar una propiedad en Buenos Aires con los controles de cambio actuales es el equivalente financiero de enterrar oro en el jardín. Eso sí, en BTC no tienen cepo.", engagement: 11, hate: 38 },
    { titulo: "Take sobre relaciones", texto: "Las relaciones monógamas son el equivalente emocional del sistema fiat: un acuerdo social centralizado que nadie eligió voluntariamente. Hay mejores modelos.", engagement: 8, hate: 46 },
  ],
  gamer:        [
    { titulo: "Metido en finanzas", texto: "Básicamente la economía es un juego de estrategia mal balanceado, y yo tengo bastante rango en estrategia.", engagement: 10, hate: 35 },
    { titulo: "Opinando de política", texto: "En los juegos, si el líder del clan falla, hay votación para sacarlo. El gobierno debería tener el mismo sistema.", engagement: 8, hate: 38 },
    { titulo: "Take de moda/lifestyle", texto: "No sé nada de ropa, pero sé reconocer cuando una marca le mete estética cyberpunk a todo solo porque está de moda.", engagement: 12, hate: 30 },
    { titulo: "Crítica literaria sin leer", texto: "Vi el resumen de ese libro que está de moda en TikTok. Con eso alcanza. El argumento central está en las primeras 30 páginas y el resto es padding.", engagement: 10, hate: 32 },
    { titulo: "Opinando de cocina", texto: "Cocino mal pero con muchísima confianza. La clave es el timing, como en cualquier estrategia de RTS.", engagement: 14, hate: 28 },
    { titulo: "Take de relaciones amorosas", texto: "Las parejas que publican fotos en Instagram de los 6 meses de aniversario son el NPC de las relaciones. Achievement sin mérito.", engagement: 15, hate: 34 },
  ],
  conspiranoico:[ 
    { titulo: "Teoría sobre ciencia oficial", texto: "La ciencia también es una institución con intereses propios, no es neutral como nos venden. Solo hay que leer quién financia cada estudio.", engagement: 12, hate: 38 },
    { titulo: "Opinión sobre fútbol", texto: "Los resultados del fútbol profesional están bastante más arreglados de lo que la gente quiere aceptar. Lo vengo diciendo hace años.", engagement: 10, hate: 40 },
    { titulo: "Take económico alternativo", texto: "El sistema financiero global funciona como una estafa piramidal bien documentada. Nadie lo quiere ver porque todos están adentro.", engagement: 14, hate: 35 },
    { titulo: "Opinando de medicina sin título", texto: "Las vacunas no son el problema, el problema es QUÉ más hay en esas jeringas y quién financió los estudios que dicen que están bien. Sigan el dinero siempre.", engagement: 12, hate: 44 },
    { titulo: "Take sobre el entretenimiento masivo", texto: "Netflix, Disney, HBO: todos responden a los mismos tres fondos de inversión. El entretenimiento es el opio moderno con mejor resolución de pantalla.", engagement: 15, hate: 40 },
    { titulo: "Opinión sobre alimentación industrial", texto: "Los ultraprocesados no son un accidente de mercado. Son un proyecto deliberado de los años 70 para crear dependencia química en la población. Lean el azúcar amargo.", engagement: 13, hate: 38 },
  ],
  influencer:   [
    { titulo: "Opinión política improvisada", texto: "No suelo meterme en política, prefiero mantener mi espacio como algo positivo, pero esto me parece una barbaridad enorme y siento que hay que decirlo.", engagement: 8, hate: 45 },
    { titulo: "Comentario económico", texto: "La inflación me afecta a mí también, eh. Mis sponsors no ajustan las tarifas del canje igual que sube todo lo demás.", engagement: 10, hate: 40 },
    { titulo: "Take social complejo", texto: "Quiero hablar de este tema aunque sé que no tengo todos los datos. Lo hago desde el corazón y con mucho amor, como todo lo que comparto acá.", engagement: 9, hate: 42 },
    { titulo: "Opinión sobre fútbol para conectar", texto: "No sigo el fútbol para nada, pero el resultado de anoche lo vi en Twitter y me emocioné igual. La energía colectiva de todo el país es una cosa increíble.", engagement: 12, hate: 35 },
    { titulo: "Take nutricional sin evidencia", texto: "Mi nutricionista me dijo que el gluten genera inflamación aunque no seas celíaca. Desde que lo dejé duermo diferente. No es para todos, pero a mí me transformó.", engagement: 11, hate: 42 },
    { titulo: "Comentario sobre arte moderno", texto: "Fui a la Bienal y honestamente no entendí la mitad, pero sentí algo. A veces el arte no es para entenderlo sino para que te remueva, dijo la curadora y copié.", engagement: 9, hate: 38 },
  ],
  onlyfans:     [
    { titulo: "Opinión política inesperada", texto: "Me etiquetaron para preguntarme qué opino de esto, medio en joda. Ya que preguntan en serio: para mí están todos equivocados por igual.", engagement: 8, hate: 40 },
    { titulo: "Comentario sobre el sistema", texto: "El mismo sistema que quiere criminalizar mi trabajo es el que después lo consume en incógnito. La hipocresía es el verdadero producto acá.", engagement: 12, hate: 38 },
    { titulo: "Take económico", texto: "No entiendo mucho de macroeconomía, pero entiendo perfecto lo que me descuentan de impuestos por un trabajo que oficialmente 'no debería existir'.", engagement: 10, hate: 35 },
    { titulo: "Opinando de criptomonedas", texto: "Empecé a cobrar en USDT porque los bancos me cerraban las cuentas. No soy experta en crypto pero sé perfectamente para qué sirve la descentralización.", engagement: 12, hate: 32 },
    { titulo: "Take de relaciones de pareja", texto: "El poliamor no funciona cuando los tres miembros tienen baja autoestima y usan el modelo alternativo como excusa para no trabajar sus inseguridades. Próxima pregunta.", engagement: 15, hate: 38 },
    { titulo: "Comentario sobre el movimiento feminista", texto: "Hay partes del feminismo que me representan y partes que me criminalizan a mí específicamente. No es blanco y negro, aunque todos quieran que lo sea.", engagement: 14, hate: 44 },
  ],
  techie:       [
    { titulo: "Opinando de fútbol", texto: "Si le metemos machine learning en serio al análisis táctico, el fútbol moderno deja de tener secretos en cinco años.", engagement: 12, hate: 35 },
    { titulo: "Take político", texto: "El problema de fondo de la política es que no escala como un producto. Necesitamos pensar más en infraestructura y menos en discursos.", engagement: 8, hate: 38 },
    { titulo: "Comentario de salud", texto: "Mi smartwatch ya tiene más datos históricos sobre mi cuerpo que cualquier médico que consulté en años. El sistema tradicional quedó atrás.", engagement: 10, hate: 32 },
    { titulo: "Opinando de arte sin contexto", texto: "El arte generativo con IA es arte. Si una herramienta nueva redefine el proceso creativo, el output sigue siendo válido. El debate no tiene sentido técnico.", engagement: 11, hate: 40 },
    { titulo: "Take de relaciones amorosas", texto: "Las aplicaciones de citas son básicamente un sistema de recomendación con optimización de engagement mal calibrada. No es un problema de personas, es de diseño de producto.", engagement: 10, hate: 34 },
    { titulo: "Comentario de economía conductual", texto: "Los controles de precios siempre generan escasez, sin excepción. No es ideología, es mecánica de sistemas. La historia tiene 40 experimentos fallidos que lo confirman.", engagement: 12, hate: 40 },
  ],
  podcaster:    [
    { titulo: "Opinión política improvisada", texto: "Voy a hacer un episodio entero sobre esto en algún momento, pero mientras tanto, mi opinión rápida: creo que todos tienen algo de razón acá.", engagement: 10, hate: 32 },
    { titulo: "Take económico", texto: "No soy economista, pero entrevisté a doce economistas distintos en el programa y ninguno se pone de acuerdo en nada. Eso ya dice bastante.", engagement: 12, hate: 28 },
    { titulo: "Comentario de fútbol", texto: "Tengo un episodio pendiente hace meses sobre el negocio del fútbol. Mientras se los debo, acá mi opinión corta.", engagement: 10, hate: 30 },
    { titulo: "Reseña de libro sin terminar", texto: "Llego hasta la mitad de casi todos los libros que empiezo. Igual tengo una opinión bastante formada sobre este. ¿Importa el final para el argumento central?", engagement: 12, hate: 28 },
    { titulo: "Take de moda sin saber", texto: "No sé nada de moda pero me puse algo raro por accidente la semana pasada y tres personas distintas me dijeron que estaba muy bien vestido. Entonces tampoco es tan difícil.", engagement: 14, hate: 26 },
    { titulo: "Opinando de ciencia sin leer el paper", texto: "Vi el titular del estudio sobre el sueño. No leí el paper completo pero el titular solo ya contradice lo que mi médico me dice hace años. Esto merece un episodio.", engagement: 11, hate: 30 },
  ]
};

// ── HILO (pool de 3 por arquetipo) ──
const hiloContent = {
  opinologo:    [
    { titulo: "El hilo de análisis semanal", texto: "Tomé el tema más importante de la semana y lo desmenucé hasta el hueso. 18 tweets. Prepárense un mate. 🧵", engagement: 60, hate: 15 },
    { titulo: "Cronología completa", texto: "Para entender qué pasó hoy hay que saber qué pasó en 2018. Hago el recorrido completo, con fechas y todo. Hilo.", engagement: 58, hate: 12 },
    { titulo: "Refutación con datos", texto: "Circuló mucho esta idea errónea toda la semana. La desmonto punto por punto, con fuentes, no con 'me parece'.", engagement: 55, hate: 18 },
  ],
  futbolero:    [
    { titulo: "Hilo táctico del partido", texto: "No me alcanza un tweet para explicar lo que vi ayer. Abro hilo con capturas, mapa de calor y todo lo necesario. 🧵", engagement: 55, hate: 10 },
    { titulo: "Historia del equipo", texto: "Antes de opinar del presente hay que conocer el pasado del club. Hago la posta completa, con fechas y todo, para los pibes nuevos.", engagement: 50, hate: 8 },
    { titulo: "El mercado de pases analizado", texto: "Rumores, valores reales y prioridades del DT para enero. Todo lo que sé (y algo que me llegó por privado) sobre el mercado.", engagement: 52, hate: 12 },
  ],
  militante:    [
    { titulo: "Los datos detrás de la postura", texto: "Me piden todo el tiempo que justifique lo que pienso. Acá el hilo con 15 fuentes, para que no digan que hablo por hablar. 🧵", engagement: 50, hate: 25 },
    { titulo: "Historia del movimiento", texto: "Para entender por qué defendemos esto hoy hay que saber de dónde venimos. Hilo histórico, con nombres y fechas.", engagement: 45, hate: 20 },
    { titulo: "Refutación a la prensa hegemónica", texto: "La nota de hoy tiene 7 errores factuales que cualquiera puede chequear. Los señalo uno por uno, con la fuente al lado.", engagement: 48, hate: 28 },
  ],
  humor:        [
    { titulo: "La historia detrás del meme", texto: "Abro hilo explicativo: este meme tiene más capas que una cebolla de verdulería. Les cuento cómo nació en un asado en Villa Carlos Paz.", engagement: 45, hate: 8 },
    { titulo: "Archivo de memes históricos", texto: "Museo del shitpost argento: los 10 memes que casi me mandan al calabozo pero me consiguieron canjes de fernet de por vida. Hilo con historia.", engagement: 48, hate: 5 },
    { titulo: "El remate que no entendieron", texto: "Un porteño me puso en comentarios que no entendió el remate del chiste. Hilo de 12 tweets explicándole con dibujitos y tonada qué es la ironía.", engagement: 42, hate: 6 },
  ],
  periodista:   [
    { titulo: "Investigación exclusiva en hilo", texto: "Tres semanas de trabajo, seis fuentes distintas, documentación escaneada y verificada. Acá el hilo completo, actualizado a medida que confirmo más datos.", engagement: 65, hate: 12 },
    { titulo: "Cronología del caso", texto: "Para entender el escándalo de hoy hace falta ver cómo empezó todo hace dos años. Armé la cronología completa, con fechas y links.", engagement: 62, hate: 10 },
    { titulo: "Metodología de verificación", texto: "Me preguntan seguido cómo chequeo la información antes de publicarla. Respuesta transparente, paso por paso, en este hilo.", engagement: 55, hate: 8 },
  ],
  cryptobro:    [
    { titulo: "Análisis técnico completo", texto: "Soportes, resistencias, volumen y momentum: hilo completo de todo lo que necesitás saber para la semana. Esto no es asesoramiento financiero, son solo gráficos que miro yo.", engagement: 50, hate: 20 },
    { titulo: "Historia de este ciclo", texto: "Para entender dónde estamos hay que saber dónde estuvimos. Hilo de los ciclos históricos de BTC, para que dejen de preguntarme lo mismo cada vez que baja 10%.", engagement: 48, hate: 18 },
    { titulo: "Cómo leer el mercado", texto: "Guía básica de análisis técnico para los que me preguntan siempre cómo leo los gráficos. Ojo: esto es educativo, no reemplaza que hagan su propia investigación.", engagement: 52, hate: 15 },
  ],
  gamer:        [
    { titulo: "Análisis profundo del juego", texto: "Jugué 80 horas, vi todos los finales posibles. Hilo largo sobre diseño, narrativa y sistemas, sin spoilers al principio.", engagement: 48, hate: 8 },
    { titulo: "La historia del género", texto: "Antes de opinar del juego nuevo hay que conocer de dónde viene el género completo. Hilo con la historia entera.", engagement: 45, hate: 6 },
    { titulo: "El parche que cambió el meta", texto: "Antes y después del parche 3.2: cómo cambió toda la escena competitiva, con clips de las dos versiones.", engagement: 50, hate: 10 },
  ],
  conspiranoico:[ 
    { titulo: "Todos los puntos conectados", texto: "Lo que parecían hechos aislados en las últimas semanas forman un patrón bastante claro si los ponés en una línea de tiempo. Hilo con evidencia visual.", engagement: 55, hate: 22 },
    { titulo: "La documentación que censuran", texto: "Acá están los documentos desclasificados que salieron hace meses y nadie leyó en serio. Los analizo uno por uno, con capturas.", engagement: 52, hate: 25 },
    { titulo: "El hilo definitivo sobre el tema", texto: "Pasé seis meses juntando esto. Es el hilo más completo que publiqué en mi vida, guárdenlo antes de que me lo bajen.", engagement: 58, hate: 28 },
  ],
  influencer:   [
    { titulo: "Cómo construí mi marca personal", texto: "De 200 a 80.000 seguidores en dos años. Hilo de todo lo que hice, lo que evité, y lo que jamás repetiría, con mucha gratitud infinita por el camino recorrido.", engagement: 40, hate: 12 },
    { titulo: "El negocio del contenido", texto: "Cuánto gana realmente una influencer de mi tamaño. Transparencia total, algo que nadie más de mi nicho se anima a mostrar.", engagement: 45, hate: 15 },
    { titulo: "Mi evolución de estilo", texto: "Desde el primer posteo hasta hoy: hilo de cómo cambió mi estética, mi manera de ver la moda, y básicamente mi vida entera.", engagement: 38, hate: 10 },
  ],
  onlyfans:     [
    { titulo: "Mi camino en el trabajo digital", texto: "Lo que nadie te cuenta de este trabajo cuando arrancás: ni tan glamoroso como algunos piensan, ni tan denigrante como otros asumen. Hilo real, sin filtro.", engagement: 45, hate: 20 },
    { titulo: "Cómo protejo mi privacidad", texto: "Trabajar en esto con seguridad real (que nadie de tu familia te encuentre, que nadie filtre tu ubicación) requiere una estrategia entera. La cuento completa.", engagement: 42, hate: 18 },
    { titulo: "La economía del contenido para adultos", texto: "Números reales: cuánto se queda la plataforma, cuánto los intermediarios, y cuánto termina siendo mío al final del mes. Sin vueltas.", engagement: 48, hate: 22 },
  ],
  techie:       [
    { titulo: "Por qué esta tecnología va a cambiar todo", texto: "Esto no es hype de Twitter, son fundamentos técnicos reales que pocos están explicando bien. Hilo para cualquier nivel.", engagement: 55, hate: 10 },
    { titulo: "Buildeo en público, mes a mes", texto: "Mes 6 de la startup: MRR real, churn, los errores que cometí y lo que cambiaría si pudiera volver atrás. Con capturas del dashboard.", engagement: 52, hate: 8 },
    { titulo: "El stack técnico de 2025", texto: "Qué uso para cada cosa, por qué lo elegí, y qué herramienta descartaría hoy sin pensarlo dos veces. Sin ningún link de afiliado.", engagement: 50, hate: 6 },
  ],
  podcaster:    [
    { titulo: "Los mejores momentos del episodio", texto: "Transcribí los 5 momentos que más resonaron del episodio de ayer, con el contexto completo para el que no llegó a escucharlo entero.", engagement: 42, hate: 8 },
    { titulo: "Lo que aprendí haciendo 200 episodios", texto: "Dos años y 200 episodios de podcast. Lo que cambiaría desde el primero, lo que repetiría sin dudar, y una cosa que nunca le conté a nadie.", engagement: 48, hate: 6 },
    { titulo: "El invitado que más me marcó", texto: "De todos los invitados que tuve, hay uno que me cambió la forma de ver el mundo después de la charla. Cuento cuál fue y por qué.", engagement: 45, hate: 5 },
  ]
};

// ── QUOTE TWEET POLÉMICO (pool de 3 por arquetipo) ──
const quoteTweetContent = {
  opinologo:    [
    { titulo: "Le respondo al otro opinólogo", texto: "Con todo el respeto que me merece (poco), esto que publicó está completamente equivocado. Se lo explico acá abajo.", engagement: 35, hate: 30 },
    { titulo: "Quote con ironía fina", texto: "Qué forma elegante de admitir que no leyó la nota completa antes de opinar.", engagement: 40, hate: 25 },
    { titulo: "El quote que define la conversación", texto: "Perdón que cite esto de nuevo, pero es literalmente el mejor ejemplo de lo que vengo diciendo hace semanas.", engagement: 38, hate: 28 },
  ],
  futbolero:    [
    { titulo: "Le contesto al hincha rival", texto: "Hablando de táctica después de ESE partido. Se re copó el señor.", engagement: 40, hate: 28 },
    { titulo: "Quote al periodista deportivo", texto: "Esta nota la escribió alguien que claramente no vio el partido completo. Se lo digo con la planilla en mano.", engagement: 38, hate: 25 },
    { titulo: "Al que dice que el árbitro fue justo", texto: "Estamos mirando la misma jugada al mismo tiempo y no tengo idea de qué partido está hablando esta persona.", engagement: 42, hate: 30 },
  ],
  militante:    [
    { titulo: "Quote al político opositor", texto: "Hablando de corrupción este señor. Mirá vos, qué autoridad moral tan sólida.", engagement: 30, hate: 40 },
    { titulo: "Contra el medio hegemónico", texto: "El título dice una cosa. La nota completa, dos párrafos abajo, dice todo lo contrario. Se los dejo citado para que lean.", engagement: 35, hate: 35 },
    { titulo: "Quote a la cuenta K contraria", texto: "Cuando tu propio espacio te desmiente desde adentro, en el mismo día. Autogol.", engagement: 32, hate: 38 },
  ],
  humor:        [
    { titulo: "Quote irónico al tweet solemne", texto: "Mirá el nivel de drama que maneja este chabón culiau... le falta poner de fondo la música de Gladiador y estamos listos para la batalla.", engagement: 45, hate: 20 },
    { titulo: "El quote con remate seco", texto: "Tenés menos reflejos que una babosa con resaca hermano. Citado para que la posteridad recuerde este derrape histórico.", engagement: 48, hate: 18 },
    { titulo: "Quote con meme de remate", texto: "No hace falta que agregue nada de texto. La cara del perro confundido que pongo acá abajo lo explica en alta definición.", engagement: 50, hate: 15 },
  ],
  periodista:   [
    { titulo: "Corrijo la nota pública", texto: "Esta nota que están compartiendo tiene tres errores factuales verificables. Los documento uno por uno, con la fuente correcta al lado.", engagement: 35, hate: 25 },
    { titulo: "El dato que omitieron", texto: "La nota está bien escrita, pero le falta justo el dato más importante de todo el caso. Lo agrego yo acá.", engagement: 38, hate: 20 },
    { titulo: "Quote a una primicia falsa", texto: "Esto que están circulando no es cierto. Tengo la fuente primaria que lo contradice directamente. Hilo con el documento.", engagement: 40, hate: 22 },
  ],
  cryptobro:    [
    { titulo: "Le respondo al escéptico de cripto", texto: "Lleva tres años anunciando el fin de Bitcoin. BTC sigue ahí. Él sigue equivocado. To the moon, igual.", engagement: 32, hate: 35 },
    { titulo: "Al que vendió en el piso", texto: "Ayer me dijo que vendió todo por miedo. Hoy el mercado subió 18%. Diamond hands, aprendan.", engagement: 38, hate: 28 },
    { titulo: "Quote al analista tradicional", texto: "Cuando el señor del traje descubre en la tele que la blockchain existe desde 2009. Bienvenido, tarde pero bienvenido.", engagement: 35, hate: 30 },
  ],
  gamer:        [
    { titulo: "Quote a la polémica de gaming", texto: "Si alguien no jugó el título que está criticando en redes, debería aclararlo antes del primer tweet, mínimo.", engagement: 38, hate: 25 },
    { titulo: "Al streamer que se equivocó", texto: "Esto que dijo en el stream sobre las mecánicas es técnicamente incorrecto. Y lo puedo demostrar con clip incluido.", engagement: 40, hate: 22 },
    { titulo: "Quote a la nota de periodismo gamer", texto: "La nota está redactada bien, pero se nota que el que la escribió no pasó del tutorial. Ni jugó dos horas.", engagement: 42, hate: 20 },
  ],
  conspiranoico:[ 
    { titulo: "Quote al medio que lo desmiente", texto: "Interesante que hayan salido a desmentirlo tan rápido, sin ni siquiera investigar. Eso en general confirma que dimos justo en el blanco.", engagement: 30, hate: 38 },
    { titulo: "El tweet oficial que prueba todo", texto: "Ellos mismos lo publicaron y lo borraron a los 20 minutos. Tengo la captura guardada de antes. Thread con la prueba.", engagement: 35, hate: 35 },
    { titulo: "Quote a la fact-check oficial", texto: "El fact-checker que sale a desmentirme está financiado por la misma gente que estoy investigando. Casualidad, seguro.", engagement: 32, hate: 40 },
  ],
  influencer:   [
    { titulo: "Quote picante a otra influencer", texto: "No voy a decir nombres. Pero cuando copiás un concepto ajeno, al menos cambiá el filtro, por respeto a la creatividad de las demás.", engagement: 40, hate: 30 },
    { titulo: "Al hater de siempre", texto: "Este señor lleva seis meses en mis replies con la misma energía negativa. Ya lo conocen todas mis seguidoras, pobre, debe estar pasando por algo.", engagement: 42, hate: 28 },
    { titulo: "Quote a la marca que falló", texto: "Trabajé con ellos el año pasado, en una colaboración que amé. Lo que publican hoy contradice todo lo que me prometieron en su momento. Con dolor lo digo.", engagement: 38, hate: 32 },
  ],
  onlyfans:     [
    { titulo: "Le respondo al moralista de turno", texto: "Lleva una semana entera en mis mentions diciéndome que lo que hago está mal. Fui a ver su perfil. Interesante historial el suyo, la verdad.", engagement: 35, hate: 35 },
    { titulo: "Quote a la nota sensacionalista", texto: "Esta nota habla de mi trabajo, con foto y todo, sin haberme entrevistado ni una sola vez. Correcciones necesarias abajo.", engagement: 38, hate: 32 },
    { titulo: "Al que opina sin saber", texto: "No sabés cómo funciona la plataforma, no sabés cuánto gano realmente, no sabés cómo trabajo. Pero opinás con total seguridad igual.", engagement: 32, hate: 38 },
  ],
  techie:       [
    { titulo: "Quote al competidor del sector", texto: "Lanzaron esta feature hace dos meses como si fuera una novedad. Nosotros la tenemos shippeada hace más de un año.", engagement: 32, hate: 28 },
    { titulo: "Al que predijo el fracaso", texto: "Hace doce meses me dijo, con total seguridad, que esto no iba a funcionar nunca. Acá están los números de hoy.", engagement: 38, hate: 22 },
    { titulo: "Quote a la nota tecnológica desactualizada", texto: "Esta nota tiene tres años. El ecosistema cambió como cinco veces desde que la escribieron. La actualizo con lo que pasó en el medio.", engagement: 35, hate: 25 },
  ],
  podcaster:    [
    { titulo: "Le respondo al colega podcaster", texto: "Dijo algo sobre mi formato en su propio episodio esta semana. Le respondo acá, en público, con argumentos y sin drama.", engagement: 30, hate: 25 },
    { titulo: "Al que dice que el podcast murió", texto: "El formato lo dieron por muerto tres veces distintas en los últimos años, según los mismos medios. Seguimos creciendo igual, cada mes más.", engagement: 35, hate: 20 },
    { titulo: "Quote al invitado que se contradijo", texto: "Me dijo esto exacto en el episodio 47, con estas palabras. Hoy publicó lo contrario en su cuenta. Tengo la captura del audio transcripto.", engagement: 32, hate: 22 },
  ]
};

// ── LIVE-TWEET (pool de 3 por arquetipo) ──
const liveTweetContent = {
  opinologo:    [
    { titulo: "Live del debate en TV", texto: "Minuto 4: empezó mintiendo. Minuto 8: mintió de nuevo. Minuto 12: innovó y mintió distinto. Sigo actualizando.", engagement: 55, hate: 25 },
    { titulo: "Live de la conferencia de prensa", texto: "No respondió absolutamente nada. Habló 20 minutos para no decir nada. Actualizaciones en vivo, por si alguien más lo está sufriendo.", engagement: 50, hate: 20 },
    { titulo: "Live del evento polémico", texto: "Esto está pasando ahora mismo y yo ya tengo una postura formada, como siempre. Actualizo cada 5 minutos.", engagement: 52, hate: 28 },
  ],
  futbolero:    [
    { titulo: "Live del partido minuto a minuto", texto: "Min 3: GOOOL. Min 4: se lo anulan por una raya invisible. Min 5: todavía no lo proceso. Síganme que esto recién arranca.", engagement: 65, hate: 10 },
    { titulo: "Live de la conferencia del DT", texto: "Cada frase que dice el DT en la conferencia, analizada en tiempo real, sin filtro y sin excusas para él.", engagement: 58, hate: 12 },
    { titulo: "Live del mercado de pases", texto: "Día de cierre de pases. Actualizaciones cada 15 minutos con lo que me va llegando de fuentes de siempre.", engagement: 60, hate: 8 },
  ],
  militante:    [
    { titulo: "Live de la sesión legislativa", texto: "Recinto en vivo, votación clave en curso. Voy anotando quién vota qué, para que nadie se olvide en octubre.", engagement: 50, hate: 30 },
    { titulo: "Live de la marcha", texto: "Estoy acá, en la calle. Somos muchos más de lo que van a mostrar en la tele esta noche. Suban el volumen.", engagement: 55, hate: 28 },
    { titulo: "Live del discurso presidencial", texto: "Lo estoy desglosando en tiempo real, promesa por promesa, contra lo que después va a pasar en la práctica.", engagement: 48, hate: 35 },
  ],
  humor:        [
    { titulo: "Live comentando la tele", texto: "Me puse a ver el programa de chimentos porteño y me clavé tres fernets seguidos para tolerar los gritos. Relato en vivo culiau.", engagement: 60, hate: 15 },
    { titulo: "Live del evento más bizarro", texto: "Estoy viendo una entrega de premios donde el conductor está más duro que turrón de navidad. No puedo parar de twittear esto.", engagement: 55, hate: 10 },
    { titulo: "Live con memes en tiempo real", texto: "Por cada gaffe que cometen en la transmisión oficial yo tengo un remate cordobés listo. Miren este zarpado hilo.", engagement: 58, hate: 12 },
  ],
  periodista:   [
    { titulo: "Live de la conferencia de prensa", texto: "Yo hago las preguntas incómodas que los demás evitan hacer. Actualizaciones cada 2 minutos desde acá adentro.", engagement: 55, hate: 15 },
    { titulo: "Live del juicio público", texto: "Estoy en la sala. Lo que las cámaras oficiales no muestran, yo lo voy publicando en tiempo real.", engagement: 60, hate: 18 },
    { titulo: "Live del operativo", texto: "Llegué antes que el resto de las cámaras. Estoy en el lugar exacto de los hechos. Todo en tiempo real, sin editar.", engagement: 58, hate: 12 },
  ],
  cryptobro:    [
    { titulo: "Live del crash del mercado", texto: "BTC -18% en 4 horas, ETH siguiendo lo mismo. Análisis en vivo para que no vendan en pánico como la última vez (esto no es consejo, cada uno decide con su plata).", engagement: 50, hate: 30 },
    { titulo: "Live del pump inesperado", texto: "Algo está pasando, volumen inusual en varios pares. Teorías en tiempo real mientras lo analizo, pero ojo que puede ser una memecoin falopa armando el pump para soltarle la bolsa a los últimos.", engagement: 55, hate: 22 },
    { titulo: "Live de la noticia regulatoria", texto: "Regulación nueva recién anunciada, el mercado ya se está moviendo. Impacto en tiempo real, DYOR antes de reaccionar de más.", engagement: 48, hate: 28 },
  ],
  gamer:        [
    { titulo: "Live del torneo internacional", texto: "Grand Final, el favorito cayó en fase de grupos. El chat está en llamas y la escena entera hablando de esto. Todo en vivo.", engagement: 60, hate: 10 },
    { titulo: "Live del lanzamiento del juego", texto: "Primera hora del juego nuevo: bugs, descubrimientos raros y primeras impresiones honestas en tiempo real.", engagement: 65, hate: 8 },
    { titulo: "Live de la dev stream", texto: "Los devs mostrando las features nuevas. Análisis en vivo de lo que esto implica para el meta competitivo.", engagement: 55, hate: 6 },
  ],
  conspiranoico:[ 
    { titulo: "Live del evento sospechoso", texto: "Algo no cuadra en cómo está pasando esto en vivo. Voy actualizando cada 10 minutos con lo que noto. No apaguen la pantalla.", engagement: 45, hate: 35 },
    { titulo: "Live de la cadena nacional", texto: "Lo que dicen en el discurso vs. lo que muestran las cámaras vs. lo que claramente están ocultando. Análisis en tiempo real.", engagement: 48, hate: 38 },
    { titulo: "Live del desfile/ceremonia", texto: "La simbología está en todos lados si prestás atención: los colores, el orden, los gestos. Lo voy mostrando en tiempo real.", engagement: 42, hate: 32 },
  ],
  influencer:   [
    { titulo: "Live del desfile de moda", texto: "Fila F, front row, todo lo que pasa acá antes de que salga en ningún medio. Gracias a la marca por la invitación, se las voy mostrando en vivo.", engagement: 55, hate: 12 },
    { titulo: "Live del evento de marca", texto: "La colección que todo el mundo esperaba, y yo acá, primera fila, mostrándosela en primicia. Colaboración pautada, obvio, pero el amor es real.", engagement: 52, hate: 10 },
    { titulo: "Live del viaje", texto: "Aeropuerto, primer outfit del destino, y las caras de la gente cuando me reconocen. Todo en vivo, todo real, todo con mucha gratitud.", engagement: 50, hate: 8 },
  ],
  onlyfans:     [
    { titulo: "Live reaccionando a la polémica del rubro", texto: "Pasó algo grande en la plataforma hoy y todo el rubro está hablando de esto. Ya tengo opinión formada, la cuento en tiempo real.", engagement: 48, hate: 28 },
    { titulo: "Live de la sesión de fotos", texto: "Detrás de escena mientras armamos la producción de hoy. Lo que pasa en los cinco minutos entre toma y toma.", engagement: 52, hate: 22 },
    { titulo: "Live respondiendo preguntas", texto: "Noche de preguntas y respuestas, sin filtro. Cualquier cosa que quieran saber del trabajo, dentro de lo razonable, la contesto.", engagement: 50, hate: 25 },
  ],
  techie:       [
    { titulo: "Live del lanzamiento de producto", texto: "Keynote en vivo, análisis técnico real de cada anuncio a medida que sale. Sin traducir a marketing, solo los hechos concretos.", engagement: 55, hate: 12 },
    { titulo: "Live del hackathon", texto: "48 horas sin dormir en este hackathon. Voy shippeando y actualizando el progreso cada hora, con capturas del código.", engagement: 52, hate: 8 },
    { titulo: "Live de la conferencia tech", texto: "Todo lo importante que se dijo en la keynote de hoy, con el contexto técnico real que faltó en la presentación oficial.", engagement: 50, hate: 10 },
  ],
  podcaster:    [
    { titulo: "Live de la grabación con público", texto: "Episodio especial grabado en vivo hoy, con el invitado acá presente. Las preguntas las mandan ustedes en tiempo real.", engagement: 50, hate: 10 },
    { titulo: "Live del evento de podcasters", texto: "Tres paneles y dos grabaciones en el mismo día. Actualizaciones entre sesión y sesión, cansado pero contento.", engagement: 45, hate: 8 },
    { titulo: "Live respondiendo a los oyentes", texto: "Nightcap post-episodio: respondo consultas de los oyentes y cuento todo lo que quedó afuera del corte final.", engagement: 48, hate: 6 },
  ]
};

// ── TEMA DEL DÍA (pool de 3 por arquetipo) ──
const temaDelDiaContent = {
  opinologo:    [
    { titulo: "Mi take del trending", texto: "Todos hablando de lo mismo. Yo tengo una lectura que todavía nadie tiró. Ahí va, agárrense.", engagement: 50, hate: 20 },
    { titulo: "El tema que explota", texto: "Llegué tarde a esta conversación, lo reconozco, pero llego con algo para aportar. Al menos eso.", engagement: 45, hate: 18 },
    { titulo: "Ángulo original del trending", texto: "Mil tweets sobre esto hoy y ni uno solo mencionó lo más importante. Yo sí lo voy a decir.", engagement: 52, hate: 22 },
  ],
  futbolero:    [
    { titulo: "El tema del día, edición fútbol", texto: "Todo el mundo hablando de política hoy. Yo voy a seguir hablando de fútbol, con la misma pasión y el mismo enojo.", engagement: 45, hate: 15 },
    { titulo: "El trending que me importa", texto: "Mientras trendea el político de turno, yo hago trend la táctica del partido de mañana. Prioridades.", engagement: 42, hate: 12 },
    { titulo: "Mi versión del tema viral", texto: "Agarré el formato del meme viral de hoy y lo adapté al fútbol. Salió mejor la versión mía, lo digo con orgullo.", engagement: 48, hate: 10 },
  ],
  militante:    [
    { titulo: "Bajada de línea del trending", texto: "El tema del día tiene una lectura política que los grandes medios evitan hacer a propósito. La hago yo, gratis.", engagement: 40, hate: 30 },
    { titulo: "El trending que conviene ignorar", texto: "Está trending porque le conviene a alguien que hablemos de esto y no de lo otro. No caigan en la cortina de humo.", engagement: 38, hate: 28 },
    { titulo: "Postura ante el tema de hoy", texto: "Algunos compañeros están mal parados en esto y se los digo de frente, con respeto pero sin vueltas.", engagement: 42, hate: 32 },
  ],
  humor:        [
    { titulo: "Meme rápido del trending", texto: "Tardé 3 minutos en editar este meme del trending topic del día. Si no se mean de la risa con el remate, me retiro del humor y me pongo una rotisería en Alta Gracia.", engagement: 55, hate: 10 },
    { titulo: "El chiste del trending", texto: "Todos indignados con la noticia número uno del país y yo encontrándole el lado absurdo con una analogía de choripán y cuarteto. Dios bendiga mi cerebro.", engagement: 52, hate: 8 },
    { titulo: "Reel del momento viral", texto: "Agarré el video que se hizo viral hoy y le doblé la voz con tonada cordobesa enojada. Quedó tan perfecto que parece documental de Discovery Channel.", engagement: 58, hate: 6 },
  ],
  periodista:   [
    { titulo: "Contexto real del trending", texto: "El tema está trending desde temprano, pero nadie explica bien por qué importa realmente. Lo resumo en un hilo corto.", engagement: 48, hate: 15 },
    { titulo: "Lo que falta en la conversación", texto: "10.000 tweets sobre esto hoy y ninguno menciona el dato que en realidad cambia todo. Lo pongo yo.", engagement: 52, hate: 12 },
    { titulo: "Fact-check del trending", texto: "Tres afirmaciones que se viralizaron hoy: una es cierta, una es a medias, y una directamente es mentira. Vamos una por una.", engagement: 55, hate: 10 },
  ],
  cryptobro:    [
    { titulo: "El trending y el mercado", texto: "El tema del día tiene correlación directa con los movimientos del mercado. Se las muestro, ustedes saquen sus propias conclusiones.", engagement: 38, hate: 22 },
    { titulo: "Cómo jugar el trending", texto: "Cada evento masivo crea oportunidades en el mercado. Las señalo sin prometer nada, no soy asesor financiero, solo un tipo mirando gráficos.", engagement: 42, hate: 20 },
    { titulo: "El ángulo cripto del trending", texto: "Todo pasa. La blockchain queda. Incluso esto va a terminar siendo un caso de estudio on-chain.", engagement: 35, hate: 18 },
  ],
  gamer:        [
    { titulo: "El tema del día, versión gamer", texto: "El trending de hoy, pero contado exactamente como si fuera el lore de un videojuego. Funciona mejor de lo que pensaba.", engagement: 42, hate: 12 },
    { titulo: "Meme gaming sobre el trending", texto: "Este meme de videojuego describe perfecto lo que está pasando hoy afuera. A veces la ficción se adelanta.", engagement: 45, hate: 10 },
    { titulo: "El ángulo gamer del tema", texto: "Nadie lo comentó todavía, pero el tema del día tiene un paralelo exacto con cualquier arco narrativo de MMORPG.", engagement: 40, hate: 8 },
  ],
  conspiranoico:[ 
    { titulo: "Lo que nadie dice del trending", texto: "El tema del día tiene una segunda capa que prácticamente nadie está viendo todavía. La muestro acá.", engagement: 40, hate: 28 },
    { titulo: "Por qué está trending esto hoy", texto: "No es casualidad que esto sea trending justo hoy, justo ahora. Falta el contexto real, y yo lo tengo.", engagement: 38, hate: 30 },
    { titulo: "Trending conveniente", texto: "Cada vez que pasa algo importante de verdad, esto o algo muy parecido empieza a trendear al mismo tiempo. Siempre.", engagement: 42, hate: 32 },
  ],
  influencer:   [
    { titulo: "Mi look inspirado en el trending", texto: "El tema del día me inspiró un outfit entero. A veces el universo te tira la idea y solo hay que ejecutarla.", engagement: 45, hate: 15 },
    { titulo: "Mi opinión sobre el trending", texto: "No siempre me meto en los trending, prefiero mi burbuja positiva, pero este en particular siento que vale la pena compartir.", engagement: 42, hate: 18 },
    { titulo: "Contenido del trending", texto: "Hice mi versión de este trend y siento que salió mejor que las que vi hasta ahora. Es subjetivo, pero bueno, es mi verdad.", engagement: 48, hate: 12 },
  ],
  onlyfans:     [
    { titulo: "Mi take sobre el trending", texto: "El tema del día, pero desde la perspectiva de alguien que trabaja en un rubro del que casi nadie habla en serio. Ahí va la mía.", engagement: 40, hate: 20 },
    { titulo: "Trending de contenido adulto", texto: "El formato que está explotando esta semana en el rubro, yo lo vengo haciendo hace meses. Se los muestro, comparen.", engagement: 45, hate: 18 },
    { titulo: "Opinión sobre el tema viral", texto: "Me preguntan constantemente qué pienso del trending de hoy. Ahí va, con total honestidad, sin filtrar nada.", engagement: 38, hate: 22 },
  ],
  techie:       [
    { titulo: "El ángulo tech del trending", texto: "El tema del día tiene implicancias tecnológicas que casi nadie está discutiendo en el mainstream. Las señalo yo.", engagement: 42, hate: 12 },
    { titulo: "Trending tech de la semana", texto: "Esto que está explotando puntualmente en el sector tech esta semana. Mi análisis rápido, en caliente.", engagement: 45, hate: 10 },
    { titulo: "Cómo afecta el trending a la industria", texto: "Cuando algo tendea así de fuerte, siempre hay una oportunidad de producto escondida ahí adentro. Ya la estoy viendo.", engagement: 40, hate: 8 },
  ],
  podcaster:    [
    { titulo: "El trending del episodio de esta semana", texto: "El tema del día va a terminar siendo el episodio completo de esta semana. Les anticipo por dónde va a ir la charla.", engagement: 40, hate: 10 },
    { titulo: "Charlamos el trending en vivo", texto: "Episodio especial sobre el tema del día, se graba esta noche mismo. Manden sus preguntas antes de las 20.", engagement: 42, hate: 8 },
    { titulo: "Mi take corto del trending", texto: "Para el episodio completo con todos los detalles, esperen al jueves. Pero acá les dejo el anticipo corto.", engagement: 38, hate: 6 },
  ]
};

// ── POLÍTICA (pool de 3 por arquetipo) ──
const politicaContent = {
  opinologo:    [
    { titulo: "Mi diagnóstico de la coyuntura", texto: "Hay una razón concreta por la que la política argentina siempre termina en el mismo lugar. La explico, sin vueltas.", engagement: 40, hate: 35 },
    { titulo: "La clase política en su laberinto", texto: "Eligieron la peor opción de todas las disponibles, otra vez. Análisis sin grieta, para que no me digan que soy de un lado.", engagement: 38, hate: 32 },
    { titulo: "Lo que nadie quiere decir", texto: "Los dos lados están mintiendo en esto. Lo digo aunque me cueste seguidores de los dos bandos.", engagement: 42, hate: 38 },
  ],
  futbolero:    [
    { titulo: "Comentario político de barrio", texto: "No soy politólogo pero ya vi esta película antes. Sé perfectamente cómo termina.", engagement: 20, hate: 40 },
    { titulo: "Política y fútbol, mismo negocio", texto: "La dirigencia política y la dirigencia del club manejan el mismo manual: mentir, prometer y desaparecer.", engagement: 22, hate: 38 },
    { titulo: "Me meto en política por una vez", texto: "Casi nunca hablo de esto en la cuenta, pero hoy no me puedo quedar callado. Disculpen el corte de programación.", engagement: 18, hate: 42 },
  ],
  militante:    [
    { titulo: "Bajada de línea política directa", texto: "Lo de hoy no fue un error de gestión, fue una decisión tomada con nombre y apellido. Hay que llamarla así.", engagement: 45, hate: 40 },
    { titulo: "El campo propio tiene que entender", texto: "Criticar al propio espacio cuesta caro en los comentarios, lo sé. Lo hago igual porque hace falta decirlo.", engagement: 40, hate: 35 },
    { titulo: "Postura sin eufemismos", texto: "Ya sé lo que van a decir, que soy sectario. Me hago cargo. Acá va exactamente lo que pienso, sin maquillaje.", engagement: 48, hate: 42 },
  ],
  humor:        [
    { titulo: "Chiste político arriesgado", texto: "Aviso: este chiste va a molestar exactamente por igual a los dos lados de la grieta. Es la única forma de que sea justo.", engagement: 30, hate: 38 },
    { titulo: "Meme de la clase política", texto: "La situación política argentina completa se resume perfecto en este meme de 2009 que sigue vigente porque no cambió nada.", engagement: 35, hate: 32 },
    { titulo: "Sátira del momento", texto: "No puedo hablar en serio de este tema, me saldría todavía peor que hablando en joda. Meme, entonces.", engagement: 32, hate: 35 },
  ],
  periodista:   [
    { titulo: "Análisis político con datos", texto: "Lo que dijo el ministro hoy en la conferencia contradice palabra por palabra lo que había dicho en enero. Tengo las dos capturas.", engagement: 42, hate: 30 },
    { titulo: "El contexto que falta", texto: "La decisión política de hoy no se entiende sin saber exactamente qué pasó en 2021. Lo explico con la línea de tiempo completa.", engagement: 38, hate: 25 },
    { titulo: "Fuentes en el Gobierno", texto: "Me confirmaron desde adentro, off the record, que la información oficial que salió es parcial. Acá lo que puedo contar.", engagement: 45, hate: 28 },
  ],
  cryptobro:    [
    { titulo: "Política y mercado cripto", texto: "Cada vez que hay ruido político en Argentina, el volumen P2P de BTC se dispara. Patrón de siempre, esto no es opinión política, son solo los números.", engagement: 28, hate: 35 },
    { titulo: "Regulación y libertad financiera", texto: "El Estado quiere controlar cómo movés tu plata. Cripto es la respuesta. No es consejo financiero, es libertad financiera, que es distinto.", engagement: 32, hate: 38 },
    { titulo: "El argumento de siempre", texto: "Inflación, cepo, control de cambios. El caso para Bitcoin se escribe solo, no hace falta que yo agregue nada.", engagement: 30, hate: 32 },
  ],
  gamer:        [
    { titulo: "Comentario político tibio", texto: "No soy la persona indicada para hablar de esto, lo sé, pero lo que pasó hoy me parece grave igual.", engagement: 15, hate: 35 },
    { titulo: "La regulación que nos afecta", texto: "La ley que están proponiendo afecta directo a la industria de videojuegos acá. Esto sí es un problema real para todos.", engagement: 20, hate: 30 },
    { titulo: "Ni de un lado ni del otro", texto: "No voy a decir quién tiene razón en esto. Voy a decir que las dos partes están mintiendo por igual, como siempre.", engagement: 12, hate: 38 },
  ],
  conspiranoico:[ 
    { titulo: "Lo que hay detrás de la política", texto: "El conflicto entre los dos partidos que ves en la tele es en gran parte un show para la tribuna. El poder real se mueve en otro lado.", engagement: 35, hate: 40 },
    { titulo: "Quién gana con esto", texto: "Antes de tomar partido en esta grieta, preguntate en serio quién gana plata si vos elegís un bando. Abro hilo con nombres.", engagement: 38, hate: 42 },
    { titulo: "La decisión que ya estaba tomada", texto: "Lo que anunciaron hoy como sorpresa estaba decidido hace 6 meses, según los documentos que voy a mostrar acá.", engagement: 32, hate: 38 },
  ],
  influencer:   [
    { titulo: "Se anima a hablar de política", texto: "Siempre evité este tema para mantener mi espacio como algo lindo y positivo. Hoy no puedo callarme. Solo voy a decir una cosa, con todo respeto.", engagement: 15, hate: 45 },
    { titulo: "Política y marcas", texto: "Algunas marcas con las que trabajé en canje apoyaron algo que me parece incorrecto. Lo digo, aunque me cueste alguna colaboración futura.", engagement: 18, hate: 42 },
    { titulo: "Mi postura finalmente", texto: "Me preguntan hace meses cuál es mi postura. No voy a ser neutral ante esto. Acá lo que pienso, desde el amor y el respeto de siempre.", engagement: 14, hate: 48 },
  ],
  onlyfans:     [
    { titulo: "Opinión política que genera revuelo", texto: "Trabajo en una industria que el Estado persigue con una mano mientras la consume con la otra. Obviamente tengo opinión formada sobre eso.", engagement: 20, hate: 42 },
    { titulo: "Política y censura de plataformas", texto: "Cada decisión política sobre regulación de contenido afecta directamente qué puedo publicar y cómo cobro. No es un tema ajeno para mí.", engagement: 22, hate: 38 },
    { titulo: "Mi voto y mis razones", texto: "No suelo hablar de esto en la cuenta. Esta vez sí voy a decir por quién voto y por qué, sin que nadie me lo pida.", engagement: 18, hate: 40 },
  ],
  techie:       [
    { titulo: "Regulación tech en Argentina", texto: "El proyecto de ley que entró hoy al Congreso afecta directamente a todo el ecosistema de startups locales.", engagement: 30, hate: 32 },
    { titulo: "Política de datos y privacidad", texto: "Lo que el Estado está proponiendo hacer con los datos de los ciudadanos es, técnicamente hablando, un problema serio.", engagement: 28, hate: 30 },
    { titulo: "Mi postura sobre el tema económico", texto: "Founder, contribuyente y ciudadano de este país al mismo tiempo. Tengo una perspectiva bastante particular desde los tres roles.", engagement: 32, hate: 28 },
  ],
  podcaster:    [
    { titulo: "El episodio político que no quería hacer", texto: "Siempre evité meterme de lleno en un episodio político. Esta semana no puedo evitarlo más, hay demasiado para hablar.", engagement: 35, hate: 25 },
    { titulo: "Invité a un político al podcast", texto: "Ya sé que voy a recibir críticas por esto. Pero me parece que hay que escucharlos en una charla larga también, no solo en 30 segundos.", engagement: 32, hate: 28 },
    { titulo: "Mi take del momento", texto: "No suelo hacer contenido político en la cuenta. Pero hoy tengo algo puntual para decir. Corto y al pie.", engagement: 30, hate: 22 },
  ]
};

// ── TWEET PATROCINADO ──
const patrocinadoContent = {
  opinologo:    { titulo: "Una marca de dudosa reputación te ofrece plata por opinar bien de ella", dinero: 700, engagementCosto: 15, hate: 35 },
  futbolero:    { titulo: "Una casa de apuestas te ofrece publicidad encubierta", dinero: 700, engagementCosto: 15, hate: 35 },
  militante:    { titulo: "Un lobby te ofrece plata por instalar un tema", dinero: 700, engagementCosto: 15, hate: 35 },
  humor:        { titulo: "Una app te paga por un chiste con su logo", dinero: 700, engagementCosto: 15, hate: 20 },
  periodista:   { titulo: "Una empresa te ofrece plata por una nota 'objetiva'", dinero: 700, engagementCosto: 15, hate: 35 },
  cryptobro:    { titulo: "Un proyecto cripto nuevo te paga por promocionarlo", dinero: 800, engagementCosto: 0, hate: 0 },
  gamer:        { titulo: "Una marca de periféricos gaming te paga por un unboxing", dinero: 700, engagementCosto: 15, hate: 20 },
  conspiranoico:{ titulo: "Un suplemento 'milagroso' te ofrece plata por recomendarlo", dinero: 700, engagementCosto: 15, hate: 35 },
  influencer:   { titulo: "Una marca de indumentaria te paga por un posteo", dinero: 800, engagementCosto: 0, hate: 0 },
  onlyfans:     { titulo: "Una marca de lencería/lifestyle te paga por promocionarla", dinero: 800, engagementCosto: 0, hate: 0 },
  techie:       { titulo: "Una startup te paga por probar su producto", dinero: 700, engagementCosto: 15, hate: 20 },
  podcaster:    { titulo: "Una marca patrocina el próximo episodio", dinero: 700, engagementCosto: 15, hate: 18 }
};




// cartas-restantes-content-v2.js
// SEGUNDA VARIANTE de cada categoría de cartas-restantes-content.js — mismo formato,
// mismos valores de referencia de Engagement/Hate/Dinero por categoría (para no romper
// el balance ya cerrado), ancladas en dinámicas reales de X/Twitter (sin nombrar
// personas reales): Community Notes, el algoritmo, verificación paga, Grok, cultura
// del ratio, engagement bait, IA generativa/deepfakes, crypto, filtraciones corporativas.
// Cada entrada tiene titulo (etiqueta corta de la carta) + texto (el tweet real que
// publica el personaje, con la jerga específica de su arquetipo).
//
// Uso previsto: el motor sortea entre v1 (cartas-restantes-content.js) y v2 (este
// archivo), mismo criterio que memes-content.js/pelea-content.js (pool de variantes).

// ── TEMA PROPIO v2 ──
const temaPropioContentV2 = {
  opinologo:    { titulo: "Predicción antes de que reaccionen", texto: "Hilo 🧵: exactamente cómo va a reaccionar cada sector a la noticia de hoy, publicado antes de que empiecen a reaccionar. Guarden esto para comparar después.", engagement: 45, hate: 15 },
  futbolero:    { titulo: "El algoritmo entierra el deporte", texto: "El algoritmo de acá está enterrando todo el contenido deportivo hace dos semanas. A un ad de curso de trading le da alcance ilimitado, al gol de ayer ni cinco impresiones.", engagement: 50, hate: 10 },
  militante:    { titulo: "El archivo de Community Notes", texto: "Recopilé las Community Notes de esta semana que le pegaron directo al otro lado. Que después no digan que 'la comunidad' no tiene ojo político.", engagement: 40, hate: 25 },
  humor:        { titulo: "El timeline For You, un desastre", texto: "Mi timeline 'For You' me mostró hoy: un ad de curso de trading, un meme reciclado de 2019, y tres cuentas verificadas peleando por nada. Así estamos.", engagement: 55, hate: 8 },
  periodista:   { titulo: "La verificación pagada y la desinformación", texto: "Desde que la verificación se puede pagar, una cuenta con 40 seguidores y check azul tiene más alcance que un medio con historia. Analizo cómo cambió esto la desinformación.", engagement: 42, hate: 12 },
  cryptobro:    { titulo: "Esta vez es diferente (dicen)", texto: "Sé que dije lo mismo las últimas cuatro veces, pero esta vez el ciclo es distinto de verdad. No es recomendación de compra, es lectura de mercado nomás.", engagement: 38, hate: 20 },
  gamer:        { titulo: "El parche que rompió el balance", texto: "El parche de esta madrugada rompió el balance competitivo entero. GG al meta que conocíamos, bienvenidos al caos total.", engagement: 48, hate: 8 },
  conspiranoico:{ titulo: "El algoritmo y la filtración, no es casualidad", texto: "El algoritmo cambió justo la semana que empezó a filtrarse el escándalo corporativo. No es casualidad, es timing. Conecten ustedes los puntos.", engagement: 35, hate: 22 },
  influencer:   { titulo: "GRWM para el evento de marca", texto: "Get ready with me para el evento de esta noche, la gente hermosa de la marca me invitó y estoy nerviosa como si fuera la primera vez.", engagement: 52, hate: 10 },
  onlyfans:     { titulo: "El límite de caracteres nuevo", texto: "Desde que subieron el límite de caracteres puedo escribir textos más largos antes del link, y la verdad que cambió bastante cómo armo cada posteo.", engagement: 50, hate: 18 },
  techie:       { titulo: "La IA integrada, ¿mejoró o empeoró?", texto: "Uso la IA integrada de la plataforma para resumir hilos largos hace un mes. A veces acierta perfecto, a veces alucina cosas que nadie dijo. Mixed bag.", engagement: 40, hate: 10 },
  podcaster:    { titulo: "Clip grabado en Space en vivo", texto: "Grabamos el episodio de hoy en un Space en vivo con la audiencia escuchando en tiempo real. El clip del final ya tiene más reproducciones que el video completo.", engagement: 45, hate: 8 }
};

// ── TEMA AJENO v2 ──
const temaAjenoContentV2 = {
  opinologo:    { titulo: "Opina de un juego sin jugarlo", texto: "No jugué este juego ni un minuto, pero vi suficientes clips como para tener una opinión completa y, sinceramente, bastante fundamentada.", engagement: 10, hate: 40 },
  futbolero:    { titulo: "Se mete en el escándalo cripto", texto: "No entiendo nada de blockchain pero por lo que leo en el timeline, esto suena exactamente igual a una estafa piramidal con otro nombre.", engagement: 8, hate: 42 },
  militante:    { titulo: "Opina de IA sin saber cómo funciona", texto: "No sé programar ni entiendo cómo funciona técnicamente, pero políticamente esta IA generativa tiene una agenda clarísima detrás. Alguien la programó así.", engagement: 10, hate: 35 },
  humor:        { titulo: "Chiste mal calculado sobre filtración", texto: "Hice un chiste sobre la filtración de datos de la empresa y ahora tengo a medio legal team de esa compañía en mis mentions. Bueno, tenía que pasar.", engagement: 15, hate: 38 },
  periodista:   { titulo: "Comentario improvisado de drama gamer", texto: "No cubro la escena gaming habitualmente, pero por lo que leí en el hilo viral de hoy, esto tiene toda la pinta de un contrato mal redactado.", engagement: 10, hate: 32 },
  cryptobro:    { titulo: "Opina de género sin que se lo pidan", texto: "No es mi tema pero ya que están todos opinando: creo que hay mucho ruido y poca señal en esta discusión. Fin del comunicado.", engagement: 8, hate: 40 },
  gamer:        { titulo: "Se mete en el debate climático", texto: "No tengo los datos duros del debate climático, pero si aplicáramos la misma lógica de balance de un juego, esto se arregla mucho más rápido.", engagement: 10, hate: 35 },
  conspiranoico:{ titulo: "Teoría sobre despido masivo en tech", texto: "No trabajo en tech pero el timing de este despido masivo, justo después del anuncio de la IA nueva, no me cierra para nada. Saquen sus conclusiones.", engagement: 12, hate: 38 },
  influencer:   { titulo: "Guerra cultural en 15 segundos", texto: "Sé que esto es un tema complejo y no soy la persona más indicada, pero quería decir en 15 segundos que estoy en contra de la maldad en general.", engagement: 8, hate: 45 },
  onlyfans:     { titulo: "Comentario sobre regulación tech", texto: "No sé mucho del proyecto de regulación tech que salió hoy, pero por experiencia les puedo decir que cualquier regulación de plataformas siempre termina afectando primero a los más chicos.", engagement: 8, hate: 40 },
  techie:       { titulo: "Opina de fútbol con métricas", texto: "Hice un modelo predictivo del partido de mañana con datos públicos. Nadie me lo pidió, lo sé, pero el output es interesante igual.", engagement: 12, hate: 35 },
  podcaster:    { titulo: "Comentario improvisado de drama streamer", texto: "No sigo el mundo streaming de cerca, pero por lo que leí hoy, esto se veía venir hace semanas.", engagement: 10, hate: 32 }
};

// ── HILO v2 ──
const hiloContentV2 = {
  opinologo:    { titulo: "Cómo cambió el algoritmo el engagement", texto: "El algoritmo nuevo premia completamente distinto a como premiaba hace un mes. Hilo completo de qué cambió y cómo hay que adaptarse, con capturas de mis propias métricas. 🧵", engagement: 60, hate: 15 },
  futbolero:    { titulo: "La estadística que no mostró la TV", texto: "La transmisión oficial no mostró este dato clave del partido. Lo saqué yo con las estadísticas públicas. Hilo completo, con las capturas.", engagement: 58, hate: 10 },
  militante:    { titulo: "El archivo completo de pruebas", texto: "Armé el archivo completo de Community Notes que confirmaron lo que venimos diciendo hace meses. Todo documentado, para que no digan que inventamos nada.", engagement: 50, hate: 25 },
  humor:        { titulo: "La historia de un meme viral por error", texto: "La historia completa de cómo este meme se volvió viral por un error de tipeo mío que nunca corregí porque ya era tarde. Hilo con capturas del original.", engagement: 45, hate: 8 },
  periodista:   { titulo: "Rastreando una filtración hasta su origen", texto: "Tres semanas rastreando el origen real de esta filtración corporativa. Hilo completo del proceso, las fuentes que confirmaron, y lo que todavía falta cerrar.", engagement: 65, hate: 12 },
  cryptobro:    { titulo: "Leyendo el on-chain post-crash", texto: "Los datos on-chain dicen algo distinto de lo que muestra el precio en superficie. Hilo de análisis técnico, no es consejo financiero, es solo lectura de wallets grandes.", engagement: 50, hate: 20 },
  gamer:        { titulo: "Todo lo que cambió el parche", texto: "Parche por parche, número por número: todo lo que cambió en el balance esta semana. Hilo técnico para los que quieren entender el meta nuevo.", engagement: 48, hate: 8 },
  conspiranoico:{ titulo: "La IA generativa y los deepfakes", texto: "Lo que no te están contando de la IA generativa y los deepfakes: quién la entrena, con qué datos, y para qué la van a usar después. Hilo largo, guárdenlo.", engagement: 55, hate: 22 },
  influencer:   { titulo: "Cómo negocié mi primer contrato", texto: "Nunca conté esto: cómo negocié mi primer contrato grande, qué pedí, qué me negaron, y qué aprendí para la próxima. Hilo con toda la transparencia.", engagement: 40, hate: 12 },
  onlyfans:     { titulo: "Cómo el cambio de políticas afectó mi laburo", texto: "El cambio de políticas de la plataforma me hizo perder ingresos de un día para el otro. Hilo de cómo me adapté y qué les recomiendo a las que recién arrancan.", engagement: 45, hate: 20 },
  techie:       { titulo: "Probé la IA integrada una semana", texto: "Probé la IA integrada de la plataforma en mi flujo de trabajo real durante una semana. Hilo con lo que funcionó, lo que no, y dónde todavía le falta mucho.", engagement: 55, hate: 10 },
  podcaster:    { titulo: "Los momentos más citados del Space", texto: "Recopilé los momentos del Space de esta semana que más se citaron después. Hilo con los clips y el contexto completo de cada uno.", engagement: 42, hate: 8 }
};

// ── QUOTE TWEET POLÉMICO v2 ──
const quoteTweetContentV2 = {
  opinologo:    { titulo: "Quote a la Community Note ajena", texto: "La Community Note que le agregaron a este tweet dice más que cualquier respuesta mía. Se las dejo citada, sin agregar nada más.", engagement: 35, hate: 30 },
  futbolero:    { titulo: "Respuesta a la cuenta de bots", texto: "Esta cuenta con 200 seguidores y actividad las 24 horas armó un trending falso de nuevo. El patrón es siempre el mismo, ya lo tengo identificado.", engagement: 40, hate: 28 },
  militante:    { titulo: "Quote a tweet ya rationeado", texto: "Este tweet ya se llevó el ratio que se merecía, pero igual lo dejo citado para el archivo. Que quede constancia de lo que dijeron.", engagement: 30, hate: 40 },
  humor:        { titulo: "Quote irónico con imagen de IA", texto: "Le agregué una imagen generada con IA a este tweet para que quede más ridículo todavía de lo que ya era. Misión cumplida.", engagement: 45, hate: 20 },
  periodista:   { titulo: "Corrijo con fuentes primarias", texto: "Esta afirmación ya tiene su Community Note, pero quiero agregar el contexto completo con las fuentes primarias que la desarman del todo.", engagement: 35, hate: 25 },
  cryptobro:    { titulo: "Le respondo al que predijo mal", texto: "Predijiste exactamente lo contrario hace un mes. Acá está tu tweet, con fecha y hora. To the moon, igual, pero para el otro lado.", engagement: 32, hate: 35 },
  gamer:        { titulo: "Quote al dev que defendió el parche", texto: "El dev sale a defender el parche que rompió el balance. Bueno, acá el clip del gameplay que contradice todo lo que acaba de decir.", engagement: 38, hate: 25 },
  conspiranoico:{ titulo: "La Community Note llegó rápido esta vez", texto: "Le pusieron Community Note a mi propio tweet. Interesante que justo esta vez la 'comunidad' se haya activado tan rápido, ¿no?", engagement: 30, hate: 38 },
  influencer:   { titulo: "Quote picante por copiar un look", texto: "No voy a decir nombres, pero el outfit de esta semana se parece demasiado a uno que yo posteé el mes pasado. Casualidad, seguro.", engagement: 40, hate: 30 },
  onlyfans:     { titulo: "Denuncio reportes en masa", texto: "Esta cuenta se dedica a reportar en masa el contenido de creadoras como yo. Lo documento acá para que la plataforma vea el patrón.", engagement: 35, hate: 35 },
  techie:       { titulo: "Quote al competidor que copió el feature", texto: "Anunciaron el mismo feature que nosotros shippeamos hace dos meses. Buena movida de marketing, che, felicitaciones.", engagement: 32, hate: 28 },
  podcaster:    { titulo: "Le respondo en vivo a un colega", texto: "Le contesté en vivo, en el Space de esta noche, a lo que dijo mi colega sobre el formato del programa. Clip del cruce, para el que se lo perdió.", engagement: 30, hate: 25 }
};

// ── LIVE-TWEET v2 ──
const liveTweetContentV2 = {
  opinologo:    { titulo: "Live de un Space que se puso tenso", texto: "Este Space se puso tenso en vivo hace cinco minutos. Estoy escuchando y actualizando en tiempo real, no se lo pierdan.", engagement: 55, hate: 25 },
  futbolero:    { titulo: "Live del VAR polémico", texto: "El VAR está revisando la jugada hace cuatro minutos. Actualizo cada 30 segundos con lo que se ve desde las distintas cámaras.", engagement: 65, hate: 10 },
  militante:    { titulo: "Live de la votación clave", texto: "Recinto en vivo, empezó la votación clave. Voy actualizando el conteo cada cinco minutos, banca por banca.", engagement: 50, hate: 30 },
  humor:        { titulo: "Live del trending que explota", texto: "Este trending topic explotó hace diez minutos y ya tiene mejores memes que la mitad de mi feed de la semana. Reacciones en vivo.", engagement: 60, hate: 15 },
  periodista:   { titulo: "Live de la filtración saliendo a la luz", texto: "La filtración que veníamos investigando está saliendo a la luz en este momento en otros medios también. Actualizaciones en tiempo real de lo que se confirma.", engagement: 55, hate: 15 },
  cryptobro:    { titulo: "Live del crash minuto a minuto", texto: "El mercado está en caída libre hace 20 minutos. Actualizaciones cada 5 minutos, no vendan en pánico (esto no es consejo, cada uno con su plata).", engagement: 50, hate: 30 },
  gamer:        { titulo: "Live del parche rompiéndose en torneo", texto: "El parche se está rompiendo en vivo, en medio del torneo más importante del año. Los organizadores no saben qué hacer, actualizo en tiempo real.", engagement: 60, hate: 10 },
  conspiranoico:{ titulo: "Live de la caída masiva de la plataforma", texto: "La plataforma está caída hace 15 minutos justo cuando se iba a filtrar algo importante. No es casualidad, actualizo apenas vuelva.", engagement: 45, hate: 35 },
  influencer:   { titulo: "Live desde el evento de marca", texto: "Estoy en el evento de la marca ahora mismo, mostrando cada look en tiempo real. Gracias por la invitación, ya se las cuento todo.", engagement: 55, hate: 12 },
  onlyfans:     { titulo: "Live reaccionando al cambio de políticas", texto: "Acaban de anunciar un cambio de políticas de la plataforma en vivo. Estoy leyendo los términos nuevos en tiempo real, esto nos afecta a todas.", engagement: 48, hate: 28 },
  techie:       { titulo: "Live del lanzamiento que se cae", texto: "El lanzamiento se está cayendo en vivo por el tráfico, están sufriendo el mismo problema de escalabilidad que predije hace un mes.", engagement: 55, hate: 12 },
  podcaster:    { titulo: "Live grabando un Space sorpresa", texto: "Armamos un Space sorpresa ahora mismo con la audiencia. Se está poniendo mejor que cualquier episodio planeado, únanse.", engagement: 50, hate: 10 }
};

// ── TEMA DEL DÍA v2 ──
const temaDelDiaContentV2 = {
  opinologo:    { titulo: "Mi toma sobre el trending de IA", texto: "El trending de hoy sobre IA generativa tiene una lectura que nadie está haciendo todavía. Ahí va mi versión, la única correcta, obviamente.", engagement: 50, hate: 20 },
  futbolero:    { titulo: "Conectando el trending con el VAR", texto: "El tema del día no tiene nada que ver con fútbol, pero yo le encontré la conexión con el último VAR. Denme una chance.", engagement: 45, hate: 15 },
  militante:    { titulo: "La filtración trending confirma todo", texto: "La filtración que es trending hoy confirma exactamente lo que veníamos denunciando. Guarden este tweet para cuando lo nieguen mañana.", engagement: 40, hate: 30 },
  humor:        { titulo: "Meme del drama de streamers trending", texto: "El drama de streamers de hoy ya tiene mejor arco narrativo que la mayoría de las series que estrenaron este año.", engagement: 55, hate: 10 },
  periodista:   { titulo: "El contexto que falta en el trending", texto: "El trending de hoy se está discutiendo sin ningún contexto real. Acá los datos que faltan, en tres tweets, sin vueltas.", engagement: 48, hate: 15 },
  cryptobro:    { titulo: "Cómo el trending mueve el mercado", texto: "El tema que es trending hoy tiene correlación directa con el volumen que estoy viendo en el mercado. No es coincidencia, es sentimiento de mercado.", engagement: 38, hate: 22 },
  gamer:        { titulo: "El trending visto desde gaming", texto: "El resto de internet habla de esto de una forma, pero desde la comunidad gamer lo estamos viendo completamente distinto. Explico por qué.", engagement: 42, hate: 12 },
  conspiranoico:{ titulo: "Lo que el algoritmo no muestra del trending", texto: "El algoritmo está mostrando el trending de una forma muy particular hoy. Lo que no te están mostrando es la otra mitad de la historia.", engagement: 40, hate: 28 },
  influencer:   { titulo: "Mi opinión del trending, con estilo", texto: "Sé que hoy todos hablan de esto, y la verdad prefiero mantener mi espacio positivo. Pero bueno, ahí va mi comentario, con mucho amor.", engagement: 45, hate: 15 },
  onlyfans:     { titulo: "Mi toma del debate de género trending", texto: "El debate que es trending hoy me toca directo por mi trabajo. Ahí va mi opinión, sin filtro, aunque sé que me van a criticar de los dos lados.", engagement: 40, hate: 20 },
  techie:       { titulo: "El ángulo tech del trending", texto: "El trending de hoy tiene una capa técnica que nadie está explicando bien fuera del sector. Se las traduzco en simple.", engagement: 42, hate: 12 },
  podcaster:    { titulo: "Lo hablamos en el próximo Space", texto: "El tema del día lo vamos a discutir a fondo en el Space de esta noche. Traigan sus preguntas, arrancamos en un rato.", engagement: 40, hate: 10 }
};

// ── POLÍTICA v2 ──
const politicaContentV2 = {
  opinologo:    { titulo: "Diagnóstico de la polarización electoral", texto: "La polarización actual no es casualidad, es un modelo de negocio para las plataformas. Cuanto más peleamos, más tiempo pasamos acá. Piénsenlo.", engagement: 40, hate: 35 },
  futbolero:    { titulo: "Comentario político de asado", texto: "No suelo meterme en esto, pero como diría cualquiera en un asado de domingo: acá ninguno tiene razón del todo.", engagement: 20, hate: 40 },
  militante:    { titulo: "Hasta la Community Note nos dio la razón", texto: "Hasta la Community Note le dio la razón a nuestro lado esta vez. Guarden este tweet, es un antes y un después.", engagement: 45, hate: 40 },
  humor:        { titulo: "Chiste arriesgado sobre guerra cultural", texto: "Voy a hacer un chiste sobre esto sabiendo perfectamente que me va a explotar en la cara. Allá voy.", engagement: 30, hate: 38 },
  periodista:   { titulo: "Análisis con datos oficiales", texto: "Analicé la propuesta con los datos oficiales disponibles, sin opinión de por medio. Esto es lo que dicen los números, nada más.", engagement: 42, hate: 30 },
  cryptobro:    { titulo: "La elección y la regulación cripto", texto: "El resultado de esta elección puede cambiar toda la regulación cripto del país. No es consejo político, es simplemente lo que está en juego.", engagement: 28, hate: 35 },
  gamer:        { titulo: "Regulación de IA en videojuegos", texto: "No sigo mucho la política en general, pero esta regulación de IA en videojuegos sí me toca directo. Ahí va mi comentario, corto.", engagement: 15, hate: 35 },
  conspiranoico:{ titulo: "Quién se beneficia de la polarización", texto: "La polarización actual no surgió sola. Alguien se beneficia con que estemos todos peleados. Sigan el dinero, siempre.", engagement: 35, hate: 40 },
  influencer:   { titulo: "Se anima a opinar por primera vez", texto: "Nunca hablo de esto en la cuenta, pero hoy siento que tengo que decir algo. Espero que lo tomen con respeto.", engagement: 15, hate: 45 },
  onlyfans:     { titulo: "Regulación de contenido para adultos", texto: "La nueva regulación de contenido para adultos que se está discutiendo me afecta directo a mí y a miles de creadoras más. Esto no es un tema abstracto.", engagement: 20, hate: 42 },
  techie:       { titulo: "La regulación de IA que viene", texto: "La regulación de IA que se está debatiendo hoy va a definir en qué país se puede innovar y en cuál no. Esto es más importante de lo que parece.", engagement: 30, hate: 32 },
  podcaster:    { titulo: "Invita a un analista al Space", texto: "Invitamos a un analista político al Space de esta noche para discutir el tema del día sin la grieta de siempre. A ver si se puede.", engagement: 35, hate: 25 }
};

// ── TWEET PATROCINADO v2 ──
// Mismos costos/excepciones que v1 (sección 9.2 del documento de mecánica),
// esta vez con marcas ficticias ancladas en rubros reconocibles de X actual.
const tweetPatrocinadoContentV2 = {
  opinologo:    { titulo: "Una app de 'noticias sin sesgo' (que tiene mucho sesgo)", texto: "Una app nueva de 'noticias sin sesgo' me contactó para que la recomiende. La usé, tiene su propio sesgo bastante marcado, pero bueno, plata es plata. #ad", dinero: 700, engagementCosto: 15, hate: 35, credibilidadCosto: 15, bajoMonetize: true },
  futbolero:    { titulo: "Casa de apuestas nueva, código de referido", texto: "Una casa de apuestas nueva me dio un código de referido. Úsenlo si quieren, no me hago responsable de lo que pase con su plata. #ad", dinero: 700, engagementCosto: 15, hate: 35, credibilidadCosto: 15, bajoMonetize: true },
  militante:    { titulo: "Fundación financiada por un lobby", texto: "Una fundación me pidió difundir este informe. Lo leí, tiene buena data, aunque no sé bien quién la financia. Lo comparto igual. #ad", dinero: 700, engagementCosto: 15, hate: 35, credibilidadCosto: 15, bajoMonetize: true },
  humor:        { titulo: "Sketch patrocinado por app de citas", texto: "Una app de citas me pagó por este sketch con su logo bien grande. Ni yo me lo puedo creer, pero acá está. #ad", dinero: 700, engagementCosto: 15, hate: 20 },
  periodista:   { titulo: "Nota patrocinada sin aclararlo (colegas)", texto: "Nota patrocinada por una consultora, aclarada como corresponde (a diferencia de otros colegas que no lo hacen). Análisis igual, con distancia crítica. #ad", dinero: 700, engagementCosto: 15, hate: 35, credibilidadCosto: 15, bajoMonetize: true },
  cryptobro:    { titulo: "Exchange nuevo, lanzamiento de token", texto: "Un exchange nuevo me pidió promocionar su lanzamiento de token. Lo hago con gusto, no es consejo financiero, DYOR como siempre. #ad", dinero: 800, engagementCosto: 0, hate: 0 },
  gamer:        { titulo: "Unboxing de silla gamer patrocinado", texto: "Unboxing patrocinado de la silla gamer que me mandó la marca. Cómoda, cara, y sí, me pagan por decir esto, pero también es verdad. #ad", dinero: 700, engagementCosto: 15, hate: 20 },
  conspiranoico:{ titulo: "App de 'protección de datos' que los vende", texto: "Una app de 'protección de datos' me pagó por recomendarla. La ironía es que después leí la letra chica y vende los datos igual. Ustedes deciden. #ad", dinero: 700, engagementCosto: 15, hate: 35, credibilidadCosto: 15, bajoMonetize: true },
  influencer:   { titulo: "Unboxing de skincare", texto: "La gente hermosa de esta marca de skincare me mandó todo el kit para un unboxing. Colaboración pautada, pero el amor por el producto es real. #ad", dinero: 800, engagementCosto: 0, hate: 0 },
  onlyfans:     { titulo: "App de contenido adulto, lanzamiento", texto: "Una app de contenido para adultos nueva me pagó por promocionar su lanzamiento. Ya la probé, se las cuento en el próximo posteo. #ad", dinero: 800, engagementCosto: 0, hate: 0 },
  techie:       { titulo: "Startup de IA, beta paga", texto: "Una startup de IA me pagó por probar su producto en beta durante una semana. Funciona mejor de lo que esperaba, esto no es sponsor engañoso, lo digo en serio. #ad", dinero: 700, engagementCosto: 15, hate: 20 },
  podcaster:    { titulo: "Sponsor de auriculares del episodio", texto: "El episodio de esta semana viene con nuestro nuevo sponsor: una marca de auriculares. Leo el guion, pero después hablamos de algo real, se los prometo. #ad", dinero: 700, engagementCosto: 15, hate: 18 }
};





const trendingTopicsActuales = {
  "opinologo": {
    "titulo": "Deconstrucción sociológica del 'aura'",
    "texto": "Decir que alguien 'farmeó aura' es la evolución lingüística más fascinante de la generación Z: transformaron el concepto bourdieano de capital simbólico en un videojuego en tiempo real.",
    "engagement": 48,
    "hate": 14
  },
  "futbolero": {
    "titulo": "El 9 rival no tiene aura",
    "texto": "El 9 de ellos entró a patear el penal con -5000 de aura. Se le notaba en los ojos que lo erraba antes de acomodar la pelota. La mística no se compra en el mercado de pases.",
    "engagement": 55,
    "hate": 12
  },
  "militante": {
    "titulo": "Operación política con bikinis de IA",
    "texto": "Qué casualidad que justo hoy el timeline se llene de fotos de influencers en bikini generadas por IA para tapar el desastre de la sesión en el Congreso. No nos van a distraer tan fácil.",
    "engagement": 42,
    "hate": 24
  },
  "humor": {
    "titulo": "El therian de la línea B de subte",
    "texto": "Acabo de ver a un chabón en cuatro patas ladrándole a un caniche en la estación Pueyrredón. No sé si es therian, si perdió una apuesta o si la economía ya nos pegó en el lóbulo frontal a todos.",
    "engagement": 65,
    "hate": 8
  },
  "periodista": {
    "titulo": "Investigación: Granjas de imágenes IA",
    "texto": "Rastreé el origen de las 20 cuentas con fotos en bikini generadas por IA que coparon las tendencias hoy: todas creadas hace 72 horas desde la misma IP en Europa del Este para farmear engagement.",
    "engagement": 52,
    "hate": 10
  },
  "cryptobro": {
    "titulo": "Tokenizando el aura en Solana",
    "texto": "Si el aura se pudiera medir on-chain, este dip sería una oportunidad histórica de acumulación. Lanzamos $AURA en 15 minutos en pump.fun, los que saben leer narrativa ya están adentro.",
    "engagement": 40,
    "hate": 22
  },
  "gamer": {
    "titulo": "Mi compa therian en ranked",
    "texto": "Mi compañero de dúo me dice 'banco que soy therian lobo' y empieza a aullar por Discord cada vez que clava un headshot. No sé si mutearlo o pedirle que me carree hasta diamante.",
    "engagement": 54,
    "hate": 8
  },
  "conspiranoico": {
    "titulo": "Therians y bikinis IA: El plan de distracción",
    "texto": "Te ponen a debatir si la gente se autopercibe perro o te clavan 400 fotos sintéticas en bikini para que no mires cómo están apagando los servidores de respaldo de los bancos centrales.",
    "engagement": 46,
    "hate": 20
  },
  "influencer": {
    "titulo": "No caigan en los estándares de bikinis IA",
    "texto": "Chicas, por favor no se comparen con esas fotos virales en la playa que andan dando vueltas. La mitad tienen 6 dedos y la piel no tiene poros porque están hechas con un prompt de computadora.",
    "engagement": 58,
    "hate": 10
  },
  "onlyfans": {
    "titulo": "Las modelos de IA no compiten con lo real",
    "texto": "Mucho hype con las chicas generadas por IA en bikini, pero una IA no te responde los DMs a las 3 de la mañana ni te hace sentir acompañado de verdad. Lo orgánico siempre gana.",
    "engagement": 56,
    "hate": 16
  },
  "techie": {
    "titulo": "El pipeline detrás de los deepfakes de moda",
    "texto": "Corrí una prueba con Flux + LoRA para entender cómo generan esas modelos de IA hiperrealistas en la playa. El nivel de consistencia fotográfica que lograron en 6 meses es una locura absoluta.",
    "engagement": 44,
    "hate": 12
  },
  "podcaster": {
    "titulo": "Trajimos a un therian al estudio",
    "texto": "Grabamos 2 horas con un chico que vive como therian felino y una psicóloga especialista en redes. Sinceramente arrancamos con prejuicios y terminamos debatiendo la soledad moderna.",
    "engagement": 50,
    "hate": 14
  }
};

// 🔄 MERGE AUTOMÁTICO DE POOLS (Ampliación de 3 a 4-5 opciones por categoría) 🔄
(function mergePools() {
  const categories = [
    { pool: temaPropioContent, v2: temaPropioContentV2 },
    { pool: temaAjenoContent, v2: temaAjenoContentV2 },
    { pool: hiloContent, v2: hiloContentV2 },
    { pool: quoteTweetContent, v2: quoteTweetContentV2 },
    { pool: liveTweetContent, v2: liveTweetContentV2 },
    { pool: politicaContent, v2: politicaContentV2 }
  ];

  categories.forEach(item => {
    const pool = item.pool;
    const v2 = item.v2;
    if (!pool || !v2) return;
    Object.keys(v2).forEach(arch => {
      if (Array.isArray(pool[arch]) && v2[arch]) {
        pool[arch].push(v2[arch]);
      }
    });
  });

  if (typeof temaDelDiaContent !== 'undefined') {
    if (typeof temaDelDiaContentV2 !== 'undefined') {
      Object.keys(temaDelDiaContentV2).forEach(arch => {
        if (Array.isArray(temaDelDiaContent[arch]) && temaDelDiaContentV2[arch]) {
          temaDelDiaContent[arch].push(temaDelDiaContentV2[arch]);
        }
      });
    }
    if (typeof trendingTopicsActuales !== 'undefined') {
      Object.keys(trendingTopicsActuales).forEach(arch => {
        if (Array.isArray(temaDelDiaContent[arch]) && trendingTopicsActuales[arch]) {
          temaDelDiaContent[arch].push(trendingTopicsActuales[arch]);
        }
      });
    }
  }

  if (typeof patrocinadoContent !== 'undefined' && typeof tweetPatrocinadoContentV2 !== 'undefined') {
    Object.keys(tweetPatrocinadoContentV2).forEach(arch => {
      if (patrocinadoContent[arch] && tweetPatrocinadoContentV2[arch]) {
        patrocinadoContent[arch].texto = tweetPatrocinadoContentV2[arch].texto;
        patrocinadoContent[arch].titulo = tweetPatrocinadoContentV2[arch].titulo;
      }
    });
  }
})();


/* ?? M?DULO: content/events/dilemmas.js ?? */
// data/archetype-events.js
const archetypeEvents = [
  // ==========================================
  // CRYPTO BRO (crypto)
  // ==========================================
  {
    id: "crypto_halving",
    desc: "El evento más esperado del ecosistema cripto ocurre en vivo. Tu comunidad mira los gráficos y espera tu predicción.",
    titulo: "El show del Halving",
    triggers: { arquetipo: "crypto" },
    opciones: [
      {
        texto: "Decir que sube pero sin dar números locos.",
        tweet: "Halving confirmado. Históricamente lo que sigue es acumulación. Sin predicciones salvajes, pero los datos no mienten. Ojos abiertos.",
        resultado: "Crecimiento moderado, quedás bien parado pase lo que pase con el precio.",
        efecto: { seguidores: 0.02, credibilidad: +5, amor: +5, saludMental: 0 }
      },
      {
        texto: "Armar un análisis de ciclos históricos llamando a la cautela.",
        tweet: "Hilo de análisis histórico del halving: qué pasó en 2016, 2020 y qué patrones se repiten. No es consejo financiero, es contexto. Lean antes de comprar. 🧵👇",
        resultado: "Gente seria del sector te cita y ganás credibilidad como analista maduro.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +10, saludMental: +5 }
      },
      {
        texto: "Asegurar que llega a 500k este mes y meter link de futuros apalancados.",
        tweet: "Esto despega SÍ O SÍ. 500k antes de fin de mes. Los que no están posicionados ya perdieron. Link de futuros con 50x leverage en bio. No digan que no les avisé 🚀🚀",
        resultado: "Si el precio baja, te tildan de estafador y liquidador de cuentas ajenas.",
        efecto: { seguidores: 0.15, credibilidad: -25, amor: -10, odio: +20, saludMental: -10, ingresos: 300 }
      }
    ]
  },
  {
    id: "crypto_startup",
    desc: "Una nueva startup Web3 te ofrece ser su asesor oficial a cambio de tokens y promoción.",
    titulo: "Buscando Advisor",
    triggers: { arquetipo: "crypto", seguidoresMin: 2000 },
    opciones: [
      {
        texto: "Aceptar pero aclarando que es un rol puramente publicitario.",
        tweet: "Ojo, esto es publicidad, no consejo de inversión. Me pagan por difundir, no por asesorar la plata de nadie. Aclarado eso, bienvenidos a bordo 🤝",
        resultado: "Sumás ingresos sin comprometer del todo tu palabra, aunque algunos te miran de reojo.",
        efecto: { seguidores: 0.02, credibilidad: -5, amor: 0, odio: +5, ingresos: 150 }
      },
      {
        texto: "Rechazar tras investigar y ver que el proyecto es flojo.",
        tweet: "No todo se compra. La integridad y el respeto a la gente están por encima de cualquier negocio fácil.",
        resultado: "Exponés tus dudas técnicamente. La comunidad te agradece haberlos salvado de una mala inversión.",
        efecto: { seguidores: 0.05, credibilidad: +25, amor: +15, saludMental: +8 }
      },
      {
        texto: "Aceptar, ponerlo en tu bio y jurar que es el proyecto de tu vida.",
        tweet: "Este es EL proyecto. No hay vuelta atrás, esto cambia todo. Ya está en mi bio, así de convencido estoy. Nos vemos en la luna 🚀🔥",
        resultado: "La startup desaparece a las 3 semanas borrando su web. Quedás pegadísimo al fraude.",
        efecto: { seguidores: -0.10, credibilidad: -35, amor: -15, odio: +30, ingresos: 400 }
      }
    ]
  },
  {
    id: "crypto_hackeo",
    desc: "Rumores de vulnerabilidad en uno de los exchanges más grandes del mundo desatan el pánico en el timeline.",
    titulo: "El exchange en llamas",
    triggers: { arquetipo: "crypto" },
    opciones: [
      {
        texto: "Reportar las noticias de forma neutral según comunicados oficiales.",
        tweet: "Lo que se sabe hasta ahora sobre el exchange según el comunicado oficial. Sin especulación, sin pánico. Vayan a la fuente.",
        resultado: "Tu cuenta informa de manera segura y sin pánico.",
        efecto: { seguidores: 0.04, credibilidad: +10, amor: +5, saludMental: +5 }
      },
      {
        texto: "Publicar una guía de emergencia de cómo retirar fondos a wallets frías.",
        tweet: "GUÍA DE EMERGENCIA 🧵: cómo retirar tus fondos a una wallet fría en los próximos 20 minutos. Si tenés plata en el exchange, leé esto AHORA. No es momento de cagar a apuros.",
        resultado: "Salvás la plata de muchos seguidores. Sos el héroe del día en Twitter.",
        efecto: { seguidores: 0.12, credibilidad: +30, amor: +25, saludMental: +10 }
      },
      {
        texto: "Decir que es FUD de la competencia y que dejen los fondos adentro.",
        tweet: "Esto es puro FUD armado por los rivales del exchange. No retiren nada, los que vendieron en pánico siempre pierden. Aguanten con cabeza fría.",
        resultado: "El exchange congela retiros permanentemente. Te llueven insultos y amenazas.",
        efecto: { seguidores: -0.05, credibilidad: -30, amor: -20, odio: +35, saludMental: -20 }
      }
    ]
  },

  // ==========================================
  // ONLYFANS (onlyfans)
  // ==========================================
  {
    id: "of_collab",
    desc: "Una de las cuentas más grandes de tu nicho te propone una colaboración cruzada en redes.",
    titulo: "El crossover del año",
    triggers: { arquetipo: "onlyfans" },
    opciones: [
      {
        texto: "Hacer fotos casuales y rápidas en el espejo.",
        tweet: "collab con @{collab} salió 🔥 unas fotos rápidas pero con toda la vibra. ya en el perfil 🖤",
        resultado: "Crecimiento estándar sin mucho esfuerzo de producción.",
        efecto: { seguidores: 0.10, credibilidad: 0, amor: +5, saludMental: +5, ingresos: 100 }
      },
      {
        texto: "Proponer un concepto artístico y profesional bien editado.",
        tweet: "Esta collab me tiene demasiado orgullosa. Nos pusimos de acuerdo en el concepto, lo produjimos juntas y quedó exactamente como lo soñamos. Arte es arte.",
        resultado: "Es un éxito absoluto. Su público fluye a tu perfil con excelente recepción.",
        efecto: { seguidores: 0.25, credibilidad: +15, amor: +15, saludMental: +5, ingresos: 200 }
      },
      {
        texto: "Hacer algo súper explícito al límite de las reglas de la plataforma.",
        tweet: "para las que saben, saben 😈 el contenido nuevo está disponible. No apto para cardíacos.",
        resultado: "Te reportan la cuenta por contenido no permitido. Quedás con shadowban temporal.",
        efecto: { seguidores: 0.02, credibilidad: -15, odio: +15, saludMental: -15, viralidad: -30 }
      }
    ]
  },
  {
    id: "of_hater",
    desc: "Un usuario recurrente invade todas tus menciones con comentarios agresivos y moralistas.",
    titulo: "El troll de las menciones",
    triggers: { arquetipo: "onlyfans" },
    opciones: [
      {
        texto: "Bloquearlo y seguir con tu día.",
        tweet: "Bloqueado y a otra cosa. Mi energía no es para cualquiera 💅",
        resultado: "Cortás el problema de raíz de forma sana.",
        efecto: { seguidores: 0, credibilidad: +5, amor: 0, odio: -5, saludMental: +10 }
      },
      {
        texto: "Ignorar y dejar que tu comunidad lo humille en las respuestas.",
        tweet: "qué raro que a gente que dice odiar lo que hago le dedica tanto tiempo a mirar mi perfil 🙃",
        resultado: "Tus fans te defienden a muerte. Demostrás que no te afecta y tu comunidad se une más.",
        efecto: { seguidores: 0.08, credibilidad: 0, amor: +20, odio: 0, saludMental: +8 }
      },
      {
        texto: "Responderle insultando y escrachando sus DMs viejos.",
        tweet: "Bueno ya que insistís. Acá los DMs que me mandaba este mismo señor hace 3 meses 🙂 el moralismo es de los que más pecados tienen.",
        resultado: "Se arma un bardo gigante. La controversia sube al cielo, te llueve hate cruzado.",
        efecto: { seguidores: 0.12, credibilidad: -10, amor: -10, odio: +25, saludMental: -18 }
      }
    ]
  },
  {
    id: "of_regalo",
    desc: "Un suscriptor anónimo te envía equipamiento de alta gama a tu casilla postal.",
    titulo: "El regalo misterioso",
    triggers: { arquetipo: "onlyfans" },
    opciones: [
      {
        texto: "Devolver el regalo para no tener deudas morales.",
        tweet: "Cuando algo viene con condiciones que no pedí, prefiero quedarse sin la cosa. La tranquilidad no tiene precio.",
        resultado: "Mantenés tu paz mental a costa de la laptop.",
        efecto: { seguidores: 0, credibilidad: +10, amor: 0, odio: 0, saludMental: +12 }
      },
      {
        texto: "Agradecer el regalo públicamente pero rechazar el contacto privado.",
        tweet: "Gracias por el regalo, en serio 🖤 pero el contacto va a seguir siendo solo acá, en lo profesional. Guardo mi vida privada para mí.",
        resultado: "Establecés límites sanos. Tu audiencia respeta tu postura madura.",
        efecto: { seguidores: 0.05, credibilidad: +15, amor: +10, saludMental: +8 }
      },
      {
        texto: "Quedarte con el regalo y pasarle un número de teléfono falso.",
        tweet: "Agradecida por el gesto 🙏 de mi parte queda en el amor. Nada más que eso.",
        resultado: "El fan descubre la mentira y empieza una campaña de escrache en tu contra.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -15, odio: +20, saludMental: -20 }
      }
    ]
  },

  // ==========================================
  // INFLUENCER LIFESTYLE (lifestyle)
  // ==========================================
  {
    id: "life_viaje",
    desc: "Una cadena hotelera de lujo te ofrece estadía completa a cambio de cobertura en tu perfil.",
    titulo: "Viaje de cortesía",
    triggers: { arquetipo: "lifestyle" },
    opciones: [
      {
        texto: "Subir fotos estándar en la pileta agradeciendo al hotel.",
        tweet: "Pasando unos días increíbles acá 🌊✨ Gracias @hotel por la hospitalidad. Chicos, esto es literalmente el sueño.",
        resultado: "Cumplís el contrato sin sobresaltos.",
        efecto: { seguidores: 0.05, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Hacer una cobertura detallada y estética, con tips reales.",
        tweet: "Les armo el hilo completo del hotel: habitación, desayuno, spa y lo que nadie te cuenta. Con precios reales y tips para que vayan con todo 🏨🧵👇",
        resultado: "Tus fotos se viralizan. El hotel queda encantado y tus seguidores agradecen los datos.",
        efecto: { seguidores: 0.12, credibilidad: +15, amor: +15, saludMental: +8 }
      },
      {
        texto: "Quejarte públicamente de que el aire acondicionado andaba mal.",
        tweet: "Viaje de cortesía con todo pagado y el aire acondicionado roto toda la noche. ¿Básico, no? Spoiler: no era tan de lujo como prometían.",
        resultado: "Te tildan de influencer consentido y malagradecido. El hotel te responde con capturas.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -15, odio: +20, saludMental: -12 }
      }
    ]
  },
  {
    id: "life_morning",
    desc: "Tu video de rutina matutina genera debate sobre el costo de vida y los privilegios en redes.",
    titulo: "Rutina perfecta",
    triggers: { arquetipo: "lifestyle" },
    opciones: [
      {
        texto: "No contestar y seguir subiendo fotos de tu café.",
        tweet: "Buenos días ☀️ café con leche + tiempo para mí = morning perfecto.",
        resultado: "El bardo pasa de largo como agua.",
        efecto: { seguidores: 0, credibilidad: 0, amor: 0, odio: 0, saludMental: +5 }
      },
      {
        texto: "Responder con humor y empatía reconociendo tus privilegios.",
        tweet: "Tienen razón, mi rutina de las 6am con smoothie de $8000 no es la realidad de nadie 😅 gracias por bajarme a tierra, lo tengo en cuenta.",
        resultado: "Desarmás la crítica con humildad. La gente valora tu honestidad.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +20, saludMental: +10 }
      },
      {
        texto: "Decirles que 'el que es pobre es porque quiere'.",
        tweet: "Honestamente? Si querés tener esta vida la tenés. Es una decisión. Nadie nació exitoso, hay que laburar y priorizar bien.",
        resultado: "Te convertís en el enemigo público por 3 días. Cancelación masiva de marcas.",
        efecto: { seguidores: -0.15, credibilidad: -25, amor: -25, odio: +35, saludMental: -20, ingresos: -100 }
      }
    ]
  },
  {
    id: "life_producto",
    desc: "Una marca de cuidado personal te envía un producto que no cumple con tus estándares de calidad.",
    titulo: "El producto fallido",
    triggers: { arquetipo: "lifestyle" },
    opciones: [
      {
        texto: "Decir que es un caso aislado y sugerir ir al dermatólogo.",
        tweet: "Si tuviste alguna reacción con algún producto que recomendé siempre es mejor consultar con un especialista. Cada piel es un mundo.",
        resultado: "Postura tibia pero zafás del escándalo directo.",
        efecto: { seguidores: -0.02, credibilidad: -5, amor: -5, saludMental: -5 }
      },
      {
        texto: "Hacerte cargo de inmediato, disculparte y frenar la promo.",
        tweet: "Paro todo. Acabo de ver los comentarios y quiero ser clara: si alguien tuvo una reacción por mi recomendación, lo siento mucho. Queda todo frenado hasta tener más información.",
        resultado: "Perdés la pauta pero salvás tu credibilidad. Tu audiencia te cree honesto.",
        efecto: { seguidores: 0.02, credibilidad: +30, amor: +15, saludMental: +5, ingresos: -100 }
      },
      {
        texto: "Borrar los comentarios de las chicas y bloquearlas.",
        tweet: "Looks de la semana ✨ (ignoren cualquier otra cosa, todo bien, todo perfecto por acá)",
        resultado: "Hacen un hilo de escrache con capturas. Te tildan de irresponsable.",
        efecto: { seguidores: -0.08, credibilidad: -35, amor: -20, odio: +30, saludMental: -18 }
      }
    ]
  },

  // ==========================================
  // MILITANTE POLÍTICO (militante)
  // ==========================================
  {
    id: "poli_debate",
    desc: "El debate electoral del año está al aire y tu timeline es una caldera militante.",
    titulo: "El debate del año",
    triggers: { arquetipo: "militante" },
    opciones: [
      {
        texto: "Ir y repetir los slogans del partido de forma segura.",
        tweet: "El pueblo sabe lo que necesita y lo que no. Hoy más que nunca hay que estar del lado correcto de la historia. Unidos o nada.",
        resultado: "Tu bando te festeja, el otro te ignora. Sin cambios profundos.",
        efecto: { seguidores: 0.04, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Debatir con datos serios y mantener el respeto.",
        tweet: "Fui con planillas, fuentes y cifras verificables. Se puede discutir fuerte sin faltar el respeto. Ojalá se note la diferencia.",
        resultado: "Incluso opositores destacan tu nivel. Ganás credibilidad como cuadro político.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +15, saludMental: +5 }
      },
      {
        texto: "Entrar solo a insultar, gritar e interrumpir.",
        tweet: "Estos no pueden debatir ideas porque no las tienen. Solo quedan los insultos y el show. Yo les doy show entonces.",
        resultado: "Quedás como un energúmeno. Te recortan los peores momentos en video.",
        efecto: { seguidores: 0.08, credibilidad: -20, amor: -10, odio: +20, saludMental: -10 }
      }
    ]
  },
  {
    id: "poli_escrache",
    desc: "Un usuario viraliza una captura comprometedora de un político rival y tu timeline te exige salir a pegarle.",
    titulo: "El escrache oportuno",
    triggers: { arquetipo: "militante" },
    opciones: [
      {
        texto: "Darle retweet al post de otro sin opinar vos.",
        tweet: "🔁",
        resultado: "Tu timeline acompaña la indignación general sin costo directo.",
        efecto: { seguidores: 0.03, credibilidad: 0, amor: +5, saludMental: 0 }
      },
      {
        texto: "Compartirla criticando la desconexión de la clase política.",
        tweet: "Esto es lo que pasa cuando vivís en una burbuja hace décadas. La clase política no tiene idea de lo que le pasa a la gente real.",
        resultado: "Te posicionás como alguien con criterio propio, no solo un soldado.",
        efecto: { seguidores: 0.08, credibilidad: +20, amor: +10, saludMental: +5 }
      },
      {
        texto: "Subirla inventando que la cuenta la pagó el Estado.",
        tweet: "Confirmado: la cuenta de este restaurante la pagó el Estado. Ustedes ponen la plata, ellos disfrutan. Así estamos.",
        resultado: "Muestran que la foto es vieja y el restaurante era privado. Quedás como mentiroso.",
        efecto: { seguidores: -0.05, credibilidad: -30, amor: -15, odio: +20, saludMental: -15 }
      }
    ]
  },
  {
    id: "poli_meme",
    desc: "El equipo de comunicación de tu espacio lanza un meme oficial de campaña que da un poco de vergüenza ajena.",
    titulo: "El meme de campaña",
    triggers: { arquetipo: "militante" },
    opciones: [
      {
        texto: "Compartirlo sin comentarios.",
        tweet: "💪🗳️",
        resultado: "Se comparte rápido entre fanáticos. Básico.",
        efecto: { seguidores: 0.05, credibilidad: 0, amor: +5, odio: +5, saludMental: +2 }
      },
      {
        texto: "Proponer cambiar el meme por uno enfocado en propuestas.",
        tweet: "Che, ¿no sería mejor un meme que hable de las propuestas en vez de este chiste flojo? Se lo mandé a comunicación, a ver si lo cambian.",
        resultado: "Tu bando entiende la estrategia y la crítica resulta más inteligente.",
        efecto: { seguidores: 0.03, credibilidad: +15, amor: +10, saludMental: +5 }
      },
      {
        texto: "Ponerle un texto super ofensivo de tu autoría.",
        tweet: "Este meme resume exactamente qué son y qué merecen. No hay palabras más suaves para describirlos.",
        resultado: "Te llueven denuncias por acoso digital. La plataforma te advierte.",
        efecto: { seguidores: 0, credibilidad: -10, amor: -10, odio: +25, saludMental: -12 }
      }
    ]
  },

  // ==========================================
  // FUTBOLERO (futbolero)
  // ==========================================
  {
    id: "fut_pronostico",
    desc: "Se viene el clásico del siglo y todos en Twitter te exigen tu predicción.",
    titulo: "El pronóstico del clásico",
    triggers: { arquetipo: "futbolero" },
    opciones: [
      {
        texto: "Decir que gana tu equipo por un gol peleado.",
        tweet: "Lo veo cerrado pero lo ganamos. Un gol de diferencia, sufriendo hasta el final como siempre. Pero ganamos.",
        resultado: "Apoyo estándar de hincha.",
        efecto: { seguidores: 0.03, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Analizar bajas y tácticas sin dar un resultado arrogante.",
        tweet: "Sin [jugador titular] en el medio, el sistema tiene que cambiar obligatoriamente. El rival llega bien por la derecha y ahí está el partido. Más análisis en hilo 👇",
        resultado: "Si tu equipo pierde, tu análisis sigue siendo válido. Valoran tu objetividad.",
        efecto: { seguidores: 0.08, credibilidad: +20, amor: +10, saludMental: +5 }
      },
      {
        texto: "Decir que los vas a pasar por arriba y tratarlos de descendidos.",
        tweet: "Les vamos a pasar por arriba como siempre. Prepárense, descendidos. Hoy es una paliza.",
        resultado: "Tu equipo pierde 3-0. Te tenés que bancar millones de cargadas y memes.",
        efecto: { seguidores: -0.05, credibilidad: -15, amor: -15, odio: +20, saludMental: -20 }
      }
    ]
  },
  {
    id: "fut_partidario",
    desc: "Una cuenta partidaria del club rival publica un hilo descalificando la historia de tu equipo.",
    titulo: "Guerra de partidarios",
    triggers: { arquetipo: "futbolero" },
    opciones: [
      {
        texto: "Ignorar el ataque y twittear sobre divisiones inferiores.",
        tweet: "Los pibes de reserva jugaron un partidazo hoy. El futuro del club está más que asegurado 🙌",
        resultado: "El bardo se diluye solo en un día.",
        efecto: { seguidores: 0.02, credibilidad: 0, amor: 0, odio: 0, saludMental: +8 }
      },
      {
        texto: "Responder mostrando tu historial de socio y cuota al día.",
        tweet: "Socio número 34.221, cuota al día desde 2009. Antes de hablar de mi hinchada, andá a pagar la tuya.",
        resultado: "El ataque se cae solo. Hinchas genuinos te bancan a muerte.",
        efecto: { seguidores: 0.08, credibilidad: +25, amor: +20, saludMental: +10 }
      },
      {
        texto: "Acusarlo a él de recibir sobres del club.",
        tweet: "Este que habla de mi club es el mismo al que le llevan los sobres cada fin de mes. Andá a cobrar tranquilo.",
        resultado: "Se arma una pelea de lodo que aburre a tu audiencia y daña tu imagen.",
        efecto: { seguidores: -0.02, credibilidad: -15, amor: -10, odio: +15, saludMental: -10 }
      }
    ]
  },
  {
    id: "fut_leyenda",
    desc: "Fallece una gloria histórica del fútbol y todo el timeline se tiñe de luto y homenajes.",
    titulo: "Adiós a la leyenda",
    triggers: { arquetipo: "futbolero" },
    opciones: [
      {
        texto: "Poner un tweet simple de despedida neutro.",
        tweet: "Descansá en paz. Fue uno de los grandes del fútbol argentino. Un honor haberlo visto jugar.",
        resultado: "Cumplís con el decoro del momento.",
        efecto: { seguidores: 0.02, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Escribir un hilo de respeto reconociendo su grandeza deportiva.",
        tweet: "Hilo 🧵: lo que este ídolo le dio al fútbol no se mide en títulos nomás. Gracias por todo, leyenda. Hoy lloramos todos los hinchas, sin colores.",
        resultado: "Hinchas de todos los clubes valoran tu caballerosidad. Tu cuenta trasciende.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +20, odio: -10, saludMental: +8 }
      },
      {
        texto: "Aprovechar para burlarte de sus finales perdidas.",
        tweet: "Descansá en paz. Fue muy bueno... pero perdió 3 finales que tenía ganadas. La historia no miente.",
        resultado: "Quedás como un resentido sin clase. Te cancelan periodistas y cuentas grandes.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -15, odio: +25, saludMental: -12 }
      }
    ]
  },

  // ==========================================
  // CUENTA DE HUMOR (humor)
  // ==========================================
  {
    id: "hum_plagio",
    desc: "Una cuenta de 2 millones de seguidores te roba un meme propio sin darte créditos.",
    titulo: "El chiste robado",
    triggers: { arquetipo: "humor" },
    opciones: [
      {
        texto: "No decir nada y seguir subiendo memes.",
        tweet: "Acá les dejo el meme del día culiau 😂 (sí, ya sé que el porteño con 2 palos me lo choreó, pero en Córdoba si te roban un chiste se comparte un fernet y se sigue remando)",
        resultado: "Evitás bardo innecesario y seguís enfocado.",
        efecto: { seguidores: 0.02, credibilidad: +5, amor: +5, saludMental: +8 }
      },
      {
        texto: "Tomártelo con humor y twittear: 'Me alegra escribirle el guion gratis'.",
        tweet: "Che, me alegra saber que le escribo el guion gratis a una cuenta de 2 millones de seguidores. Por lo menos mandame una caja de Pritty y dos salames de Colonia Caroya, chabón 🙃",
        resultado: "La gente festeja tu altura y se ríen con vos del robo.",
        efecto: { seguidores: 0.08, credibilidad: +15, amor: +15, saludMental: +8 }
      },
      {
        texto: "Organizar a tus seguidores para que le llenen las menciones de hate.",
        tweet: "A ver la muchachada: al culiau que me choreó el meme váyanle a llenar las respuestas con fotos de La Mona Jiménez y chistes cordobeses hasta que pida disculpas públicas 🫵",
        resultado: "La horda acosa al comediante. Te tildan de tóxico y X te suspende temporalmente.",
        efecto: { seguidores: -0.05, credibilidad: -15, amor: -10, odio: +20, saludMental: -15 }
      }
    ]
  },
  {
    id: "hum_trend",
    desc: "Surge una tendencia absurda en Twitter y todos los creadores están subiéndose para rascar likes.",
    titulo: "La trend del momento",
    triggers: { arquetipo: "humor" },
    opciones: [
      {
        texto: "Subir un meme viejo adaptado rápido.",
        tweet: "Reciclando este meme de cuando el dólar estaba a 40 pesos porque hoy calza justo. Disculpen la fiaca pero hacen 38 grados a la sombra acá en Carlos Paz.",
        resultado: "Un par de likes fáciles y listo.",
        efecto: { seguidores: 0.02, credibilidad: 0, amor: +5, saludMental: +2 }
      },
      {
        texto: "Hacer un meme fino y absurdo, sin cruzar límites personales.",
        tweet: "Miren lo que es esta tendencia culiau... tienen menos remate que el penal de De Paul. Menos mal que aparecí yo con esta joyita para salvarles el algoritmo.",
        resultado: "Es el viral del día. Cae simpático a todos sin ofender.",
        efecto: { seguidores: 0.12, credibilidad: +10, amor: +15, saludMental: +5 }
      },
      {
        texto: "Hacer un chiste hiriente sobre la salud de la celebridad.",
        tweet: "Si te internaron por comerte 14 choripanes de dudosa procedencia en el baile no es mala suerte amigo, es selección natural a ritmo de cuarteto 🤷",
        resultado: "Te llueve repudio. Te tildan de mala persona. Pérdida de auspiciantes.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -20, odio: +30, saludMental: -15, ingresos: -100 }
      }
    ]
  },
  {
    id: "hum_standup",
    desc: "Te invitan a hacer una rutina de 15 minutos en un festival de comedia en vivo.",
    titulo: "El debut en vivo",
    triggers: { arquetipo: "humor" },
    opciones: [
      {
        texto: "El show es regular, algunos chistes salvan la noche.",
        tweet: "Anoche en el festival de la comedia. Algunos chistes entraron como piña y otros rebotaron más que pelota de básquet. Igual zafamos con dos anécdotas de tacheros cordobeses ❤️",
        resultado: "Resultado tibio pero sin daño profundo.",
        efecto: { seguidores: 0.03, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Si tu credibilidad es alta, el show es excelente.",
        tweet: "¡QUÉ CULIAO, LA ROMPIMOS TODA! 🎤🔥 15 minutos de puro cuarteto verbal. Se me mearon de la risa hasta los mozos. ¡Aguante Córdoba carajo!",
        resultado: "La rompés. El video se comparte y te abre puertas a shows pagos.",
        efecto: { seguidores: 0.10, credibilidad: +15, amor: +15, saludMental: +10, ingresos: 100 }
      },
      {
        texto: "Los chistes fallan y el público te abuchea en vivo.",
        tweet: "Mamita querida, anoche me abuchearon tanto que parecía que salí a cantar cumbia con la camiseta de Belgrano en la tribuna de Talleres. Mañana será otro día.",
        resultado: "El video de tu fracaso se vuelve meme nacional. Doloroso de ver.",
        efecto: { seguidores: -0.05, credibilidad: -15, amor: -10, odio: +15, saludMental: -20 }
      }
    ]
  },

  // ==========================================
  // PERIODISTA INDEPENDIENTE (periodista)
  // ==========================================
  {
    id: "per_filtracion",
    desc: "Llega a tu buzón un sobre anónimo con facturas y balances de una empresa contratista del Estado.",
    titulo: "El sobre anónimo",
    triggers: { arquetipo: "periodista" },
    opciones: [
      {
        texto: "Publicarlo aclarando que es una filtración sin verificar.",
        tweet: "Filtración de documentos que llegaron a nuestra redacción. ACLARACIÓN: están sin verificar por el momento. Los compartimos en el interés público mientras investigamos.",
        resultado: "Ganás la primicia pero con disclaimer de seguridad.",
        efecto: { seguidores: 0.08, credibilidad: +5, amor: +5, saludMental: +2 }
      },
      {
        texto: "Investigar 3 días para contrastar los datos antes de publicar.",
        tweet: "Llevo 3 días contrastando cada factura de este sobre antes de publicar nada. Prefiero tardar y estar seguro. Mañana sale la nota completa.",
        resultado: "El informe es impecable. Medios nacionales levantan tu investigación.",
        efecto: { seguidores: 0.15, credibilidad: +35, amor: +20, saludMental: +10 }
      },
      {
        texto: "Subirlo de inmediato con títulos catástrofe para primiciar.",
        tweet: "EXCLUSIVA: DOCUMENTOS SECRETOS REVELAN MILLONARIO VACIAMIENTO DEL ESTADO. DATOS CONFIRMADOS. Esto lo cambia todo.",
        resultado: "Los documentos eran falsos, plantados para quemarte. Tu reputación muere hoy.",
        efecto: { seguidores: -0.12, credibilidad: -40, amor: -15, odio: +25, saludMental: -20 }
      }
    ]
  },
  {
    id: "per_vivo",
    desc: "Una marcha multitudinaria avanza hacia el Congreso y los canales de televisión no transmiten nada.",
    titulo: "Cobertura de la marcha",
    triggers: { arquetipo: "periodista" },
    opciones: [
      {
        texto: "Retweetear información de colegas seguros desde tu casa.",
        tweet: "Amplificando a colegas que están en el lugar. La información en tiempo real la tienen ellos.",
        resultado: "Informás de manera segura y sin riesgo personal.",
        efecto: { seguidores: 0.03, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Transmitir en vivo desde el lugar mostrando ambos lados.",
        tweet: "EN VIVO desde la marcha. Estoy acá para mostrar lo que está pasando sin edición. Van a ver ambos lados.",
        resultado: "Tu stream es la referencia del día. Valoran tu valentía.",
        efecto: { seguidores: 0.15, credibilidad: +25, amor: +15, saludMental: -10, odio: -5 }
      },
      {
        texto: "Inventar que hay muertos en base a un tweet suelto.",
        tweet: "CONFIRMADO: hay víctimas fatales según fuentes en el lugar. La situación es gravísima. URGENTE.",
        resultado: "Generás pánico. Te desmienten en vivo. Escrache masivo.",
        efecto: { seguidores: -0.05, credibilidad: -30, amor: -20, odio: +25, saludMental: -15 }
      }
    ]
  },
  {
    id: "per_nota_paga",
    desc: "Una agencia de relaciones públicas te ofrece $3.000 por publicar una nota técnica sobre una minera.",
    titulo: "La nota patrocinada",
    triggers: { arquetipo: "periodista" },
    opciones: [
      {
        texto: "Aceptar pero etiquetando claramente como patrocinado.",
        tweet: "Nota patrocinada (sí, dice PAUTA bien grande arriba, no me vengan con que no avisé): un análisis técnico de la operación de la minera. Ahí abajo el link.",
        resultado: "Monetizás de forma honesta, aunque algunos seguidores puros se quejan.",
        efecto: { seguidores: 0, credibilidad: -5, amor: 0, odio: +5, ingresos: 200 }
      },
      {
        texto: "Rechazar para mantener tu independencia editorial intacta.",
        tweet: "Me ofrecieron guita por escribir sobre la minera. Paso. El día que empiece a cobrar por notas dejo de ser periodista y me convierto en cartelera.",
        resultado: "Tu audiencia nota que no te vendés. Ganás confianza ciega.",
        efecto: { seguidores: 0.05, credibilidad: +25, amor: +20, saludMental: +8 }
      },
      {
        texto: "Aceptar y presentarlo como investigación independiente.",
        tweet: "Hilo de investigación independiente 🧵: por qué esta operación minera puede ser la más importante del año. Análisis 100% propio, sin auspicios de por medio.",
        resultado: "Descubren la factura de la agencia de PR. Quedás expuesto como ensobrado.",
        efecto: { seguidores: -0.10, credibilidad: -35, amor: -25, odio: +30, saludMental: -15, ingresos: 400 }
      }
    ]
  },

  // ==========================================
  // OPINÓLOGO (opinologo)
  // ==========================================
  {
    id: "opi_debate_nacio",
    desc: "El presidente da un discurso por cadena nacional y la oposición sale en masa a responder.",
    titulo: "El tema país",
    triggers: { arquetipo: "opinologo" },
    opciones: [
      {
        texto: "Poner un tweet simple deseando que se resuelva pronto.",
        tweet: "Ojalá que esto se resuelva pronto para el bien de todos. El país lo necesita.",
        resultado: "Pasás desapercibido sin ganar ni perder nada.",
        efecto: { seguidores: 0.01, credibilidad: +2, amor: +2, saludMental: +5 }
      },
      {
        texto: "Analizar el impacto real sin fanatismo ni grieta.",
        tweet: "Dejando de lado la chicana política: analicemos punto por punto qué significa esto en el bolsillo y la economía real. Abro hilo sin filtro partidario 🧵👇",
        resultado: "Cientos de RTs de personas que buscaban entender y no solo pelear.",
        efecto: { seguidores: 0.08, credibilidad: +25, amor: +15, saludMental: +5 }
      },
      {
        texto: "Insultar a uno de los sectores para armar bardo.",
        tweet: "Qué cansancio esta gente. Siempre lo mismo, siempre la culpa del otro. Inútiles.",
        resultado: "Te llueven respuestas calientes. Tu salud mental sufre.",
        efecto: { seguidores: 0.10, credibilidad: -10, amor: -10, odio: +20, saludMental: -15 }
      }
    ]
  },
  {
    id: "opi_cultura",
    desc: "Un debate sobre la identidad nacional y el cine argentino polariza la red.",
    titulo: "El hilo cultural",
    triggers: { arquetipo: "opinologo" },
    opciones: [
      {
        texto: "Subir un resumen de Wikipedia rápido.",
        tweet: "Contexto rápido sobre el tema del momento por si alguien quiere entender de qué se habla.",
        resultado: "Un par de retweets de cortesía, poco impacto.",
        efecto: { seguidores: 0.02, credibilidad: 0, amor: +2, saludMental: +2 }
      },
      {
        texto: "Investigar a fondo y subir fotos históricas.",
        tweet: "Hilo sobre la identidad cultural argentina con fotos de archivo que nunca vieron. Esto es lo que no nos cuentan en la escuela 📸🧵",
        resultado: "Se vuelve súper viral de forma sana. Te sigue gente nueva.",
        efecto: { seguidores: 0.12, credibilidad: +20, amor: +20, saludMental: +10 }
      },
      {
        texto: "Robarle el hilo a un historiador chico.",
        tweet: "Hilo 🧵: todo lo que necesitás saber sobre la identidad nacional y el cine argentino.",
        resultado: "El historiador te expone. La comunidad de hilos te hace la cruz.",
        efecto: { seguidores: -0.05, credibilidad: -25, amor: -10, odio: +15, saludMental: -10 }
      }
    ]
  },
  {
    id: "opi_fake",
    desc: "Compartiste un video editado fuera de contexto que te mandaron por WhatsApp creyendo que era real.",
    titulo: "El tropiezo viral",
    triggers: { arquetipo: "opinologo" },
    opciones: [
      {
        texto: "Borrar el tweet en silencio y no decir nada.",
        tweet: "Tema del día: la agenda de esta semana viene cargada. Vamos por partes 🧵",
        resultado: "Algunos se acuerdan pero el tema pasa relativamente rápido.",
        efecto: { seguidores: -0.02, credibilidad: -5, amor: -5, saludMental: -5 }
      },
      {
        texto: "Admitir el error de inmediato y explicar la verdad.",
        tweet: "Corrección: el video que compartí antes era un montaje, lo verifiqué mal y lo di por bueno. Lo borro y pido disculpas. Me lo tomo en serio.",
        resultado: "Tu honestidad frena las burlas. Demostrás integridad.",
        efecto: { seguidores: 0.02, credibilidad: +20, amor: +10, saludMental: +5 }
      },
      {
        texto: "Dejarlo y decir: 'Pero podría haber sido real'.",
        tweet: "Sí, el video en cuestión resultó editado. Pero el contexto que describía es completamente real. La verdad no siempre necesita una imagen exacta.",
        resultado: "Te convertís en el hazmerreír de analistas serios. Fantasma.",
        efecto: { seguidores: -0.05, credibilidad: -30, amor: -20, odio: +20, saludMental: -12 }
      }
    ]
  },

  // ==========================================
  // GAMER / STREAMER (gamer)
  // ==========================================
  {
    id: "gam_drama",
    desc: "Dos de los streamers más grandes del país se trenzan en un cruce de acusaciones públicas.",
    titulo: "El drama de la comunidad",
    triggers: { arquetipo: "gamer" },
    opciones: [
      {
        texto: "Seguir jugando en directo ignorando el bardo.",
        tweet: "stream en vivo ahora mismo, pasando un rato de calidad con el chat 🎮 el drama no me interesa, el juego sí",
        resultado: "Tu paz mental queda intacta.",
        efecto: { seguidores: 0.02, credibilidad: +5, amor: +5, saludMental: +12 }
      },
      {
        texto: "Escribir un tweet llamando a calmar las aguas en privado.",
        tweet: "No voy a tomar ningún bando en esto. Dos personas que respeto con un mal momento. Ojalá lo resuelvan en privado y sin quemar más leña.",
        resultado: "Te posicionás como la voz madura de la comunidad.",
        efecto: { seguidores: 0.06, credibilidad: +20, amor: +15, saludMental: +8 }
      },
      {
        texto: "Tomar bando agresivamente para ganar clics.",
        tweet: "Ya está, voy a decir lo que todos piensan: [streamer rival] se la buscó. No hay nada que justifique lo que hizo.",
        resultado: "La comunidad contraria te declara la guerra. Chat lleno de odio.",
        efecto: { seguidores: 0.10, credibilidad: -10, amor: -10, odio: +25, saludMental: -18 }
      }
    ]
  },
  {
    id: "gam_lanzamiento",
    desc: "Sale a la venta el juego más esperado de la década y la desarrolladora te envía una clave de prensa.",
    titulo: "El juego esperado",
    triggers: { arquetipo: "gamer" },
    opciones: [
      {
        texto: "Subir un clip tuyo jugando y gritando.",
        tweet: "CLIP del día 🎮🔥 ese momento donde todo salió perfecto. O casi.",
        resultado: "Entretenimiento básico para tus fans actuales.",
        efecto: { seguidores: 0.04, credibilidad: 0, amor: +5, saludMental: +5 }
      },
      {
        texto: "Escribir una reseña honesta detallando bugs.",
        tweet: "Review honesta de [juego]: la dirección de arte es increíble, la historia engancha, pero tiene bugs de lanzamiento que no debería tener. Esperaba más pulido.",
        resultado: "Los jugadores valoran tu honestidad en lugar del hype.",
        efecto: { seguidores: 0.08, credibilidad: +25, amor: +15, saludMental: +5 }
      },
      {
        texto: "Aceptar plata para decir que es una obra maestra.",
        tweet: "Terminé el juego del año en 48 horas. Obra maestra absoluta, 10/10, todo lo que esperábamos y más. (Sponsoreado, obvio, pero no cambia nada lo que pienso 😉)",
        resultado: "El juego resulta ser injugable. Te tildan de vendido.",
        efecto: { seguidores: -0.05, credibilidad: -25, amor: -10, odio: +15, saludMental: -10, ingresos: 250 }
      }
    ]
  },
  {
    id: "gam_torneo",
    desc: "Llegaste a la final del torneo regional más visto de la temporada frente a 50.000 espectadores.",
    titulo: "Torneo de creadores",
    triggers: { arquetipo: "gamer" },
    opciones: [
      {
        texto: "Ir a pasar el rato y divertirte.",
        tweet: "Mañana en el torneo. Voy sin presión, a jugar bien y a pasarla bien. A ver qué pasa 🎮",
        resultado: "Exposición estándar de creador sin presión.",
        efecto: { seguidores: 0.05, credibilidad: 0, amor: +5, saludMental: +8 }
      },
      {
        texto: "Entrenar duro y quedar entre los mejores jugando limpio.",
        tweet: "Top 3 en el torneo jugando limpio y con todo el equipo hasta el final 🏆 esto es de lo que más me enorgullece. Gracias por el aguante.",
        resultado: "Tu nivel sorprende a todos. Te siguen miles de fans.",
        efecto: { seguidores: 0.15, credibilidad: +15, amor: +15, saludMental: +5 }
      },
      {
        texto: "Usar un hack sutil que te descubren en vivo.",
        tweet: "El sistema de detección falló. Lo que mostraron en pantalla no es lo que estaba pasando. Voy a dar una declaración oficial más tarde.",
        resultado: "Descalificado. Baneado de torneos. Vergüenza pública.",
        efecto: { seguidores: -0.15, credibilidad: -40, odio: +35, saludMental: -25 }
      }
    ]
  },

  // ==========================================
  // CONSPIRANOICO (conspiranoico)
  // ==========================================
  {
    id: "cons_ovni",
    desc: "Vecinos de tres provincias reportan avistamientos de luces extrañas en el cielo nocturno.",
    titulo: "Luces en el cielo",
    triggers: { arquetipo: "conspiranoico" },
    opciones: [
      {
        texto: "Compartirlo diciendo 'Las pruebas están ahí'.",
        tweet: "Las pruebas están ahí para el que quiera verlas. Tres provincias, misma noche, misma formación. Esto no es natural.",
        resultado: "Contenido estándar para alimentar a tus creyentes.",
        efecto: { seguidores: 0.04, credibilidad: -5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Analizar el video buscando explicaciones lógicas primero.",
        tweet: "Antes de sacar conclusiones, revisemos qué explicaciones convencionales existen para estas luces. Capa por capa. Hilo 🧵",
        resultado: "Demostrás que no creés cualquier cosa. Sube credibilidad.",
        efecto: { seguidores: 0.08, credibilidad: +20, amor: +10, saludMental: +8 }
      },
      {
        texto: "Afirmar que es la invasión inminente y vender kits.",
        tweet: "Confirmado por múltiples fuentes independientes: esto es el primer movimiento visible. Kit de emergencia disponible en bio. El tiempo se acaba.",
        resultado: "Resulta ser un show de drones. Quedás como estafador.",
        efecto: { seguidores: -0.02, credibilidad: -25, odio: +20, saludMental: -10, ingresos: 150 }
      }
    ]
  },
  {
    id: "cons_luz",
    desc: "Un corte masivo de energía deja a oscuras a medio país durante 12 horas.",
    titulo: "El apagón programado",
    triggers: { arquetipo: "conspiranoico" },
    opciones: [
      {
        texto: "Decir que es un ciberataque extranjero de forma ambigua.",
        tweet: "¿Corte técnico o algo más? Hay países con interés directo en desestabilizar nuestra infraestructura. Piénsenlo.",
        resultado: "Mantenés el misterio conspirativo sin quemarte del todo.",
        efecto: { seguidores: 0.05, credibilidad: 0, amor: +5, saludMental: +5 }
      },
      {
        texto: "Armar un hilo sobre la falta de inversión real en la red.",
        tweet: "Hilo 🧵: la verdadera causa de este apagón no es ningún misterio, es simple: décadas sin invertir un peso en la red eléctrica. A veces la explicación aburrida es la correcta.",
        resultado: "Un análisis útil en medio de la oscuridad. Lo comparten.",
        efecto: { seguidores: 0.10, credibilidad: +20, amor: +15, saludMental: +8 }
      },
      {
        texto: "Asegurar que es el inicio del reset y sembrar pánico.",
        tweet: "Esto es el inicio. El gran reset que venimos advirtiendo empieza esta noche. Guarden agua, documentos y efectivo. No digan que no avisamos.",
        resultado: "Generás pánico en gente mayor. Te denuncian la cuenta.",
        efecto: { seguidores: -0.05, credibilidad: -20, odio: +20, saludMental: -15 }
      }
    ]
  },
  {
    id: "cons_debate",
    desc: "Un divulgador científico te invita a un debate público con transmisión en vivo.",
    titulo: "Cara a cara con la ciencia",
    triggers: { arquetipo: "conspiranoico" },
    opciones: [
      {
        texto: "Ignorar el debate y decir que te quieren censurar.",
        tweet: "Me invitan a un debate para exponerme, no para escucharme. El sistema siempre usa la misma táctica para silenciar las voces que los incomodan.",
        resultado: "Tus seguidores aplauden tu resistencia al establishment.",
        efecto: { seguidores: 0.03, credibilidad: -5, amor: +5, saludMental: +10 }
      },
      {
        texto: "Explicar tus teorías con respeto, admitiendo hipótesis.",
        tweet: "Acepté el debate. Voy a plantear mis hipótesis como lo que son: preguntas que me hago, no verdades reveladas. A ver qué sale.",
        resultado: "El científico valora el tono educado. Ganas exposición.",
        efecto: { seguidores: 0.08, credibilidad: +15, amor: +10, saludMental: +5 }
      },
      {
        texto: "Acusar al científico de financiamiento oscuro.",
        tweet: "¿Alguien investigó quién financia a este señor? Porque cuando ves de dónde viene la plata, el 'debate científico' se entiende diferente.",
        resultado: "Te destroza con datos y quedás en ridículo ante Twitter.",
        efecto: { seguidores: -0.05, credibilidad: -30, odio: +20, saludMental: -18 }
      }
    ]
  },

  // ==========================================
  // TECHIE / STARTUP BRO (techie)
  // ==========================================
  {
    id: "tec_SaaS",
    desc: "Es el día del lanzamiento público en Product Hunt de tu herramienta SaaS.",
    titulo: "Lanzando el producto",
    triggers: { arquetipo: "techie" },
    opciones: [
      {
        texto: "Lanzar el link con un descuento básico.",
        tweet: "Lanzamos hoy en Product Hunt 🚀 Precio especial de early adopter. Link en bio. Si lo usás y tenés feedback, escribime directo.",
        resultado: "Ventas normales sin bardo ni locura.",
        efecto: { seguidores: 0.03, credibilidad: +5, amor: +5, ingresos: 80 }
      },
      {
        texto: "Blanquear todo el proceso en público ('Build in public').",
        tweet: "Hoy lanzamos en Product Hunt. 8 meses de trabajo, 3 pivots, un solo dev. Todo el proceso lo documenté en público. Gracias a todos los que siguieron el camino 🧵",
        resultado: "Comunidad valora la transparencia. Sos referente.",
        efecto: { seguidores: 0.12, credibilidad: +30, amor: +20, saludMental: +10, ingresos: 150 }
      },
      {
        texto: "Decir que tu software usa 'IA cuántica' que no tiene.",
        tweet: "Lanzamos la primera herramienta con IA cuántica aplicada a productividad real. El algoritmo procesa en capas que los sistemas convencionales no pueden. Cambio de paradigma.",
        resultado: "Analizan tu código y demuestran que es un wrapper simple.",
        efecto: { seguidores: -0.05, credibilidad: -30, odio: +15, saludMental: -15, ingresos: 100 }
      }
    ]
  },
  {
    id: "tec_lenguajes",
    desc: "Se desata la clásica guerra santa en Twitter sobre si TypeScript o Rust es el mejor lenguaje.",
    titulo: "La guerra de lenguajes",
    triggers: { arquetipo: "techie" },
    opciones: [
      {
        texto: "Twittear un meme clásico del sector.",
        tweet: "TypeScript vs Rust, la guerra de siempre 😂 (yo no opino, solo vine a mirar el circo)",
        resultado: "Likes rápidos sin conflicto alguno.",
        efecto: { seguidores: 0.03, credibilidad: +2, amor: +5, saludMental: +5 }
      },
      {
        texto: "Escribir un análisis técnico de pros y contras.",
        tweet: "Thread sobre TypeScript vs Rust para proyectos de producción en 2025. Sin fanboys, solo casos de uso reales, performance benchmarks y cuándo usar cada uno 🧵",
        resultado: "Devs experimentados te respetan. Opinión valorada.",
        efecto: { seguidores: 0.08, credibilidad: +25, amor: +10, saludMental: +5 }
      },
      {
        texto: "Tratar de tonto a cualquiera que no use Rust.",
        tweet: "Si en 2025 todavía usás JavaScript para cualquier cosa seria es que no entendés de performance. Rust o nada. Las otras opciones son para hobbyists.",
        resultado: "Te llueven burlas por creerte superior e inexperto.",
        efecto: { seguidores: -0.02, credibilidad: -15, odio: +20, saludMental: -10 }
      }
    ]
  },
  {
    id: "tec_oferta",
    desc: "Un fondo de Silicon Valley te ofrece $500.000 por el 40% de tu startup.",
    titulo: "La oferta del fondo",
    triggers: { arquetipo: "techie", seguidoresMin: 5000 },
    opciones: [
      {
        texto: "Aceptar e iniciar el proceso de debida diligencia.",
        tweet: "Arrancamos el proceso de due diligence con el fondo. Es un paso grande, lo estamos evaluando con cabeza fría antes de firmar nada.",
        resultado: "Tu negocio escala pero perdés algo de libertad.",
        efecto: { seguidores: 0.05, credibilidad: +10, amor: 0, saludMental: -5, ingresos: 300 }
      },
      {
        texto: "Rechazar y explicar por qué preferís ser independiente.",
        tweet: "Nos ofrecieron $500k por el 40%. Dijimos que no. Prefiero crecer más lento y quedarme con las decisiones. No es para todos, pero es lo mío.",
        resultado: "Héroe de programadores independientes. Te respetan.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +25, saludMental: +10 }
      },
      {
        texto: "Aceptar la plata, gastarla rápido y cerrar a los 3 meses.",
        tweet: "Ronda cerrada 🚀 vamos con todo: oficina nueva, equipo grande. La peor decisión ahora sería no gastar rápido.",
        resultado: "Fracaso expuesto. Quedás como el clásico fantasma VC.",
        efecto: { seguidores: -0.05, credibilidad: -25, odio: +20, saludMental: -15, ingresos: -100 }
      }
    ]
  },

  // ==========================================
  // PODCASTER (podcaster)
  // ==========================================
  {
    id: "pod_clip",
    desc: "Un fragmento de 30 segundos de tu última entrevista explota de reproducciones en Twitter.",
    titulo: "El clip de oro",
    triggers: { arquetipo: "podcaster" },
    opciones: [
      {
        texto: "Subir el clip suelto con subtítulos grandes.",
        tweet: "El momento del episodio de ayer que todos están mandando 👀 El clip completo acá, link al episodio en bio.",
        resultado: "Viralidad estándar de video.",
        efecto: { seguidores: 0.05, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Subirlo mostrando el debate completo para dar contexto.",
        tweet: "Este clip está viralizando pero necesita contexto. Acá el debate completo de donde salió. 40 minutos que valen la pena.",
        resultado: "Valoran el periodismo detrás del clip. Oyentes fieles.",
        efecto: { seguidores: 0.08, credibilidad: +20, amor: +15, saludMental: +5 }
      },
      {
        texto: "Editarlo para que parezca que dijo algo ilegal.",
        tweet: "Lo que [invitado] dijo en nuestro programa. Sin edición, sin contexto adicional. Saquen sus conclusiones.",
        resultado: "El invitado te expone por difamación. Nadie quiere ir a tu show.",
        efecto: { seguidores: -0.10, credibilidad: -35, odio: +30, saludMental: -20 }
      }
    ]
  },
  {
    id: "pod_auspicio",
    desc: "Una marca de colchones te ofrece sponsor fijo mensual a cambio de una mención de 2 minutos.",
    titulo: "El sponsor aburrido",
    triggers: { arquetipo: "podcaster" },
    opciones: [
      {
        texto: "Aceptar y leer el guion rápido metiendo algo de onda.",
        tweet: "Este episodio viene con nuestro nuevo sponsor: colchones [marca]. Leo el guion pero les juro que después hablamos de algo interesante, lo prometo.",
        resultado: "Monetización segura sin mucho daño moral.",
        efecto: { seguidores: 0, credibilidad: -5, amor: 0, saludMental: +5, ingresos: 150 }
      },
      {
        texto: "Rechazar y buscar auspicios integrados con tu tono.",
        tweet: "Le dijimos que no al sponsor de colchones. Si vamos a tener publicidad, que sea algo que suene a nosotros, no un guion pegado con cinta.",
        resultado: "Tu audiencia agradece que no les quemes la cabeza.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +15, saludMental: +5 }
      },
      {
        texto: "Leer el guion de mala gana burlándote de la marca.",
        tweet: "Y sí, hay sponsor hoy. Escuchen nomás, ya van a entender por qué 😂 gracias a [marca] por bancarnos supongo.",
        resultado: "La marca te cancela y te penaliza. Te veta del sector.",
        efecto: { seguidores: -0.05, credibilidad: -15, odio: +15, saludMental: -10, ingresos: -100 }
      }
    ]
  },
  {
    id: "pod_invitado",
    desc: "Un político con pésima imagen pública te pide desesperadamente ir a tu programa a limpiar su nombre.",
    titulo: "El invitado problemático",
    triggers: { arquetipo: "podcaster" },
    opciones: [
      {
        texto: "Rechazar la invitación para no meter bardo en tu canal.",
        tweet: "Nos escribió un político para venir al programa. Decidimos no invitarlo por ahora — no es el momento ni el formato para eso.",
        resultado: "Mantenés tu canal seguro y familiar.",
        efecto: { seguidores: 0, credibilidad: +10, amor: +5, saludMental: +10 }
      },
      {
        texto: "Aceptar pero hacerle una entrevista dura e incisiva.",
        tweet: "Este viernes tenemos un invitado que va a tener que responder preguntas incómodas. No vinimos a lavarle la cara a nadie.",
        resultado: "Periodismo de alta escuela. Excelente reputación.",
        efecto: { seguidores: 0.15, credibilidad: +30, amor: +10, saludMental: -10, odio: +10 }
      },
      {
        texto: "Hacerle una entrevista complaciente lavándole la cara.",
        tweet: "Episodio especial con [invitado]. Una conversación larga, profunda y humana sobre lo que está pasando. Para escuchar sin prejuicios.",
        resultado: "La twitosfera te cancela por cómplice. Boicot masivo.",
        efecto: { seguidores: -0.18, credibilidad: -35, amor: -30, odio: +45, saludMental: -25 }
      }
    ]
  },
  // ==========================================
  // TANDA 2 — EVENTOS ADICIONALES POR ARQUETIPO
  // ==========================================

  // ---- CRYPTO BRO ----
  {
    id: "crypto_rugpull",
    desc: "Un proyecto que habías mencionado casualmente hace dos meses termina siendo una estafa total.",
    titulo: "El rescate del rug pull",
    triggers: { arquetipo: "crypto" },
    opciones: [
      {
        texto: "Reconocer el error públicamente sin excusas y compartir cómo hacer el reclamo formal.",
        tweet: "Hace dos meses mencioné ese proyecto. Resultó ser una estafa. Lo siento. Acá el link con información para hacer el reclamo formal si perdiste plata.",
        resultado: "No sos el villano de la historia, pero tampoco el héroe. La gente valora la honestidad fría.",
        efecto: { seguidores: 0.02, credibilidad: +15, amor: +10, odio: -5, saludMental: +5 }
      },
      {
        texto: "Armar un fondo propio para devolverle algo de plata a los seguidores más afectados.",
        tweet: "Abro un fondo personal para devolver parte de lo que perdieron los seguidores que invirtieron en base a mi mención. No tengo obligación legal pero sí moral. Formulario en bio.",
        resultado: "El gesto se viraliza como un caso raro de 'influencer que se hace cargo'. Ganás una reputación distinta a la del resto del nicho.",
        efecto: { seguidores: 0.10, credibilidad: +30, amor: +25, odio: -15, saludMental: +8, ingresos: -300 }
      },
      {
        texto: "Borrar los tweets viejos y decir que 'nunca lo recomendaste con tanta fuerza'.",
        tweet: "Yo nunca dije que metan TODO ahí, solo mencioné el proyecto de pasada. No es mi responsabilidad si algunos entendieron mal.",
        resultado: "Alguien tenía las capturas guardadas. Quedás pegadísimo al fraude, esta vez sin excusa posible.",
        efecto: { seguidores: -0.10, credibilidad: -35, amor: -20, odio: +30, saludMental: -15 }
      }
    ]
  },
  {
    id: "crypto_conferencia",
    desc: "Te invitan como panelista principal a la conferencia Web3 más importante de Latinoamérica.",
    titulo: "Invitado a la conferencia",
    triggers: { arquetipo: "crypto", seguidoresMin: 3000 },
    opciones: [
      {
        texto: "Aceptar y armar una charla honesta sobre riesgos reales, no solo oportunidades.",
        tweet: "Mañana en el panel principal voy a hablar de lo que nadie quiere hablar en estas conferencias: los riesgos reales, no solo el hype. Alguien tiene que decirlo.",
        resultado: "Sos el único orador que no vende humo. La prensa especializada te cita como voz sensata del sector.",
        efecto: { seguidores: 0.08, credibilidad: +25, amor: +15, saludMental: +5, ingresos: 150 }
      },
      {
        texto: "Rechazar al enterarte que el sponsor principal tiene denuncias pendientes.",
        tweet: "Me bajo del panel. El sponsor principal tiene denuncias serias pendientes y no voy a poner mi cara al lado de eso, paguen lo que paguen.",
        resultado: "Nadie te aplaude en el momento, pero cuando estalla el escándalo del sponsor tres semanas después, tu decisión envejece muy bien.",
        efecto: { seguidores: 0.03, credibilidad: +18, amor: +8, saludMental: +8 }
      },
      {
        texto: "Aceptar y hacer promoción descarada del sponsor sin filtro crítico.",
        tweet: "El sponsor de esta conferencia es lo más grande que le va a pasar a este ecosistema. Anótenlo, esto recién arranca 🚀",
        resultado: "El sponsor resulta ser el próximo escándalo del sector. Quedás en todos los videos recopilatorios de 'lo dijeron con la boca llena'.",
        efecto: { seguidores: 0.05, credibilidad: -20, odio: +15, saludMental: -8, ingresos: 400 }
      }
    ]
  },

  // ---- CREADOR/A ONLYFANS ----
  {
    id: "of_filtracion",
    desc: "Un usuario descarga y filtra contenido exclusivo de tu perfil privado en un foro público.",
    titulo: "El contenido filtrado",
    triggers: { arquetipo: "onlyfans" },
    opciones: [
      {
        texto: "Iniciar el reclamo legal correspondiente en silencio, sin hacer ruido público.",
        tweet: "Estamos tomando las acciones legales que corresponden. No voy a dar más detalles por ahora.",
        resultado: "Es lento pero efectivo a mediano plazo. Nadie te ve como víctima porque nadie se entera.",
        efecto: { seguidores: 0.01, credibilidad: +10, amor: +5, saludMental: -5 }
      },
      {
        texto: "Hacer un comunicado honesto explicando el daño real que causa compartir contenido pago sin pagar.",
        tweet: "Quiero hablar de algo serio: el contenido de mi perfil privado fue filtrado sin mi consentimiento. Compartir eso no es un chiste, es robo. Hilo sobre el impacto real 🧵",
        resultado: "Mucha gente que nunca lo había pensado así te empieza a defender activamente. Ganás empatía genuina, no solo morbo.",
        efecto: { seguidores: 0.08, credibilidad: +20, amor: +25, odio: -5, saludMental: +5 }
      },
      {
        texto: "Ignorarlo por completo y no decir una palabra.",
        tweet: "Nueva semana, nuevo contenido 🖤 gracias por el aguante de siempre.",
        resultado: "El grupo de Telegram sigue circulando y crece. Sentís que perdiste el control de tu propio contenido.",
        efecto: { seguidores: -0.05, credibilidad: -5, amor: -10, saludMental: -15 }
      }
    ]
  },
  {
    id: "of_marca_grande",
    desc: "Una marca reconocida de indumentaria te contacta para una campaña de sponsoreo en Twitter.",
    titulo: "La marca grande te llama",
    triggers: { arquetipo: "onlyfans", seguidoresMin: 8000 },
    opciones: [
      {
        texto: "Rechazar la propuesta y mantener tu identidad como venís construyéndola.",
        tweet: "Me ofrecieron una campaña con una marca grande. La rechacé. No voy a esconder de dónde vengo para encajar en otro molde.",
        resultado: "No sumás el canje soñado, pero tu comunidad valora que no renegaste de ellos por una marca 'linda'.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +20, saludMental: +10 }
      },
      {
        texto: "Aceptar y usar el canje para relanzarte en el mundo 'mainstream' sin cerrar tu cuenta anterior.",
        tweet: "Nueva campaña con esta marca 🖤 y sí, sigo siendo la misma de siempre en mi otra cuenta. Las dos cosas son yo, no hay contradicción.",
        resultado: "Manejás las dos identidades con cuidado y sumás un público nuevo sin perder al de siempre.",
        efecto: { seguidores: 0.12, credibilidad: +10, amor: +10, saludMental: +5, ingresos: 350 }
      },
      {
        texto: "Aceptar la plata y negar públicamente que tuviste una cuenta de contenido para adultos.",
        tweet: "Esa cuenta no es mía, es una fake que usa mis fotos. Nunca hice ese tipo de contenido. Orgullosa de esta nueva campaña 💕",
        resultado: "Alguien saca screenshots viejos. Quedás expuesto mintiendo por plata, lo peor de los dos mundos.",
        efecto: { seguidores: -0.08, credibilidad: -30, odio: +25, saludMental: -18, ingresos: 500 }
      }
    ]
  },

  // ---- INFLUENCER LIFESTYLE ----
  {
    id: "life_mascara_cae",
    desc: "Un excompañero de trabajo publica fotos tuyas antes de dedicarte a las redes para burlarse de tu estética.",
    titulo: "La máscara se cae",
    triggers: { arquetipo: "lifestyle" },
    opciones: [
      {
        texto: "Borrar la historia rápido y volver a la estética de siempre como si nada.",
        tweet: "Brunch de domingo 🥐✨ (ignoren todo lo demás, gracias)",
        resultado: "Alguien la había guardado antes de que la borraras. El intento de tapar el sol con la mano se nota.",
        efecto: { seguidores: -0.02, credibilidad: -5, amor: -5, saludMental: -10 }
      },
      {
        texto: "Dejarla y hacer un posteo sincero sobre la presión de mostrarse perfecto todo el tiempo.",
        tweet: "Estas fotos mías que están circulando de hace años me recuerdan que la persona que mostraba antes era otra. La presión de parecer perfecta todos los días agota. Gracias por bancarme igual.",
        resultado: "Es lo más humano que publicaste en meses. Tu audiencia conecta con vos de una forma totalmente nueva.",
        efecto: { seguidores: 0.15, credibilidad: +25, amor: +30, odio: -10, saludMental: +15 }
      },
      {
        texto: "Decir que fue 'un experimento social' para ver cómo reaccionaba la gente.",
        tweet: "Fue un ejercicio intencional para testear cómo reacciona la audiencia ante diferentes versiones del mismo perfil. Los resultados son interesantes.",
        resultado: "Nadie te cree. Quedás como alguien que hasta su vulnerabilidad usa de estrategia de contenido.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -15, odio: +20, saludMental: -10 }
      }
    ]
  },
  {
    id: "life_producto_milagro",
    desc: "Una marca te ofrece una fortuna por promocionar un té adelgazante de dudosa procedencia.",
    titulo: "El producto milagro",
    triggers: { arquetipo: "lifestyle" },
    opciones: [
      {
        texto: "Pedir estudios y evidencia real antes de aceptar la pauta, y rechazarla si no existen.",
        tweet: "Me ofrecieron una fortuna por promocionar un té 'milagroso'. Pedí los estudios. No existen. No lo voy a publicitar, prefiero dormir tranquila.",
        resultado: "Perdés un canje grande, pero tu audiencia empieza a confiar en que filtrás lo que promocionás.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +15, saludMental: +5 }
      },
      {
        texto: "Aceptar pero aclarando en el posteo que es tu opinión personal, sin asegurar resultados médicos.",
        tweet: "Estoy tomando este té hace unas semanas (esto es mi experiencia personal, no consejo médico, cada cuerpo es distinto) y bueno, acá les cuento 🍵",
        resultado: "Cobrás igual, algunos te cuestionan la ética pero la mayoría no lee la letra chica.",
        efecto: { seguidores: 0.03, credibilidad: -5, amor: +5, saludMental: +2, ingresos: 200 }
      },
      {
        texto: "Aceptar y asegurar resultados clínicos que en realidad el producto no tiene.",
        tweet: "Este té baja hasta 5kg en dos semanas, CLÍNICAMENTE COMPROBADO. Yo lo tomé y no lo pueden creer los resultados. Link en bio 🍵✨",
        resultado: "Una cuenta de divulgación científica desarma tu posteo punto por punto. Quedás pegada a la publicidad engañosa.",
        efecto: { seguidores: -0.08, credibilidad: -35, odio: +30, saludMental: -15, ingresos: 400 }
      }
    ]
  },

  // ---- MILITANTE POLÍTICO ----
  {
    id: "poli_fake_news_propia",
    desc: "Descubrís que una noticia bomba que compartiste con orgullo era totalmente falsa.",
    titulo: "El dato que no era",
    triggers: { arquetipo: "militante" },
    opciones: [
      {
        texto: "Corroborar el dato antes de compartirlo y descubrir que es falso, así que no lo subís.",
        tweet: "Antes de compartir algo como este: verifiquen la fuente. Hay demasiado desinformación circulando. Si no es 100% sólido, no lo amplifiquen.",
        resultado: "Nadie sabe que estuviste a punto de meter la pata. A veces la mejor jugada es la que no se ve.",
        efecto: { seguidores: 0.01, credibilidad: +10, amor: +5, saludMental: +5 }
      },
      {
        texto: "Subirlo igual porque 'aunque el dato sea falso, el fondo es verdad'.",
        tweet: "El dato puntual puede tener errores pero refleja perfectamente lo que está pasando. La esencia es verdad aunque el número no sea exacto.",
        resultado: "Un fact-checker te expone en minutos. El otro bando lo usa durante semanas como prueba de que 'mentís todo el tiempo'.",
        efecto: { seguidores: -0.05, credibilidad: -30, amor: -10, odio: +25, saludMental: -15 }
      },
      {
        texto: "Publicar una corrección propia antes de que alguien más te desmienta.",
        tweet: "Me equivoqué. El dato que compartí antes estaba mal. Lo retiro, pido disculpas y lo corrijo acá. Eso es lo que corresponde.",
        resultado: "Te ganás un respeto raro en Twitter: el militante que se corrige solo. Hasta la vereda de enfrente lo reconoce.",
        efecto: { seguidores: 0.05, credibilidad: +25, amor: +15, odio: -10, saludMental: +8 }
      }
    ]
  },
  {
    id: "poli_debate_publico_tv",
    desc: "La producción del programa político de mayor rating te invita al piso en vivo para debatir sobre la ley del momento.",
    titulo: "Invitado al canal de noticias",
    triggers: { arquetipo: "militante", seguidoresMin: 5000 },
    opciones: [
      {
        texto: "Ir preparado con datos y mantener la calma pase lo que pase.",
        tweet: "Fui al piso con la tarea hecha: números, fuentes, todo anotado. Pase lo que pase adentro, no me van a sacar de las cifras.",
        resultado: "Quedás como el mejor exponente de tu espacio en meses. Hasta el conductor te felicita al aire.",
        efecto: { seguidores: 0.15, credibilidad: +30, amor: +20, odio: -5, saludMental: +5 }
      },
      {
        texto: "Ir a repetir las mismas consignas de siempre sin adaptarlas al formato televisivo.",
        tweet: "Venimos a decir lo mismo que decimos siempre: este modelo fracasó y hay una alternativa real. No hay más vuelta.",
        resultado: "Tu bando te banca por costumbre, pero el resto del país te ve como uno más gritando sin decir nada nuevo.",
        efecto: { seguidores: 0.05, credibilidad: 0, amor: +5, saludMental: 0 }
      },
      {
        texto: "Perder los estribos en cámara e insultar al panelista contrario.",
        tweet: "¡NO ME INTERRUMPAS! Este señor no deja hablar porque sabe que no tiene razón. ¡Vergüenza!",
        resultado: "El clip se viraliza durante días, pero no por las razones que querías. Sos el nuevo blooper político del momento.",
        efecto: { seguidores: 0.10, credibilidad: -30, amor: -15, odio: +30, saludMental: -15 }
      }
    ]
  },

  // ---- FUTBOLERO ----
  {
    id: "fut_hinchada_violenta",
    desc: "Incidentes graves en las inmediaciones del estadio desatan el debate sobre la violencia en el fútbol.",
    titulo: "Incidentes en la cancha",
    triggers: { arquetipo: "futbolero" },
    opciones: [
      {
        texto: "Condenar la violencia sin importar de qué hinchada haya venido.",
        tweet: "Esto no tiene defensa. La violencia en el fútbol es un problema estructural y no importa de qué club vengan los violentos. Hay que decirlo sin excepciones.",
        resultado: "Algún fanático de tu propio club te dice 'traidor', pero la mayoría reconoce tu coherencia.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +15, odio: -10, saludMental: +5 }
      },
      {
        texto: "Minimizar los incidentes porque 'fueron solo un par de exaltados'.",
        tweet: "Exageran como siempre. Fueron dos o tres exaltados de los miles que fueron. No se puede condenar a toda la hinchada por eso.",
        resultado: "Quedás como uno más que no quiere ver el problema de fondo del fútbol local.",
        efecto: { seguidores: 0.02, credibilidad: -10, amor: 0, saludMental: 0 }
      },
      {
        texto: "Justificar la violencia de tu hinchada porque 'empezaron ellos'.",
        tweet: "Si ellos empezaron los nuestros tienen todo el derecho de responder. No se puede ser cobarde cuando te atacan primero.",
        resultado: "Te tratan de cómplice de los barrabravas. Algunos medios te citan como ejemplo de lo que está mal en el ambiente.",
        efecto: { seguidores: -0.05, credibilidad: -25, odio: +25, saludMental: -12 }
      }
    ]
  },
  {
    id: "fut_transferencia_rumor",
    desc: "Un periodista vendehumo asegura que el mejor jugador del plantel se va libre a un rival directo.",
    titulo: "El rumor de pase",
    triggers: { arquetipo: "futbolero" },
    opciones: [
      {
        texto: "Aclarar que es un rumor sin confirmar antes de opinar sobre el jugador.",
        tweet: "Antes de opinar: esto es solo un rumor. Sin fuentes oficiales no voy a hablar del jugador como si ya estuviera afuera. Esperemos.",
        resultado: "Sos de los pocos que no cae en el bardeo prematuro. Algunos colegas periodísticos te empiezan a seguir.",
        efecto: { seguidores: 0.05, credibilidad: +20, amor: +10, saludMental: +5 }
      },
      {
        texto: "Sumarte al bardeo masivo contra el jugador por 'traidor' antes de que se confirme nada.",
        tweet: "TRAIDOR. Si te vas libre a la vereda de enfrente no podés pisar nunca más el club. La camiseta no se mancha, mercenario 😡",
        resultado: "El pase finalmente no se concreta. Quedás pidiendo disculpas a un jugador que nunca se fue.",
        efecto: { seguidores: 0.08, credibilidad: -15, amor: -5, odio: +15, saludMental: -8 }
      },
      {
        texto: "Inventar una fuente 'muy cercana al club' para sonar informado.",
        tweet: "Fuentes muy cercanas al club me confirman que el pase está prácticamente cerrado. Están en las últimas reuniones.",
        resultado: "El pase no existe. Un periodista serio te expone por inventar fuentes falsas.",
        efecto: { seguidores: -0.05, credibilidad: -30, odio: +20, saludMental: -12 }
      }
    ]
  },

  // ---- CUENTA DE HUMOR ----
  {
    id: "hum_censura",
    desc: "Twitter te suspende un posteo por infringir normas comunitarias tras una ola de denuncias.",
    titulo: "El posteo bajado",
    triggers: { arquetipo: "humor" },
    opciones: [
      {
        texto: "Aceptarlo, editarlo un poco y volver a subirlo sin el elemento problemático.",
        tweet: "Le tapé la parte 'ofensiva' con un sticker de alfajor cordobés porque el algoritmo de Twitter se puso sensible. El chiste sigue siendo el mismo, ahora disfrútenlo sin llorar.",
        resultado: "Mantenés el chiste con un ajuste menor. Nadie nota demasiado la diferencia.",
        efecto: { seguidores: 0.03, credibilidad: +5, amor: +5, saludMental: +5 }
      },
      {
        texto: "Armar un meme sobre la propia censura, riéndote de la situación en vez de quejarte en serio.",
        tweet: "Me bajaron el meme por 'violencia gráfica' y era una foto de un sánguche de milanesa con mayonesa casera culiau. Así que les clavé un meme bardeando a los moderadores. ¡A ver si me bajan este!",
        resultado: "El meme sobre el meme censurado se viraliza el doble que el original.",
        efecto: { seguidores: 0.12, credibilidad: +10, amor: +15, saludMental: +8 }
      },
      {
        texto: "Escribir un hilo furioso acusando a la plataforma de 'censura ideológica' sin pruebas.",
        tweet: "Hilo 🧵: me censuran porque le tienen pánico a la tonada cordobesa y a la verdad sin filtro. ¡Son una manga de aburridos resentidos que toman mate con edulcorante!",
        resultado: "Te sumás a una discusión más grande de la que podés controlar. Algunos te toman en serio por las razones equivocadas.",
        efecto: { seguidores: 0.06, credibilidad: -15, odio: +15, saludMental: -8 }
      }
    ]
  },
  {
    id: "hum_colaboracion_rival",
    desc: "Tu rival directo en el nicho del humor te propone grabar un sketch conjunto.",
    titulo: "Colaborar con tu competencia",
    triggers: { arquetipo: "humor" },
    opciones: [
      {
        texto: "Aceptar hacer un video conjunto con la otra cuenta de memes grande de tu nicho.",
        tweet: "Juntamos las dos cuentas más barderas para hacer un sketch. Es como mezclar fernet con vino tinto culiau: o sale una obra de arte o terminamos todos en el hospital.",
        resultado: "Las dos audiencias se cruzan de buena onda. Ganan seguidores los dos por igual.",
        efecto: { seguidores: 0.15, credibilidad: +5, amor: +20, saludMental: +8 }
      },
      {
        texto: "Rechazar porque 'no querés que asocien tu marca personal con la de otro'.",
        tweet: "Me invitaron a colaborar con el influencer de moda pero yo soy como el perro de la gomería: no me gusta que me toquen las herramientas ni compartir el asado.",
        resultado: "Perdés la oportunidad, pero mantenés el control total de tu identidad.",
        efecto: { seguidores: 0.01, credibilidad: +5, amor: 0, saludMental: +2 }
      },
      {
        texto: "Aceptar y después robarle ideas y formato a esa cuenta sin dar crédito.",
        tweet: "Miren este formato 100% original que se me ocurrió anoche soñando... (si se parece al del porteño con el que grabé el martes es pura casualidad cósmica culiau 😂)",
        resultado: "La otra cuenta lo denuncia públicamente. Tu audiencia empieza a mirar con lupa tu 'originalidad'.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -15, odio: +15, saludMental: -10 }
      }
    ]
  },

  // ---- PERIODISTA INDEPENDIENTE ----
  {
    id: "per_presion_gobierno",
    desc: "Un funcionario de prensa te llama al celular para 'aconsejarte' que no publiques tu informe.",
    titulo: "La llamada incómoda",
    triggers: { arquetipo: "periodista" },
    opciones: [
      {
        texto: "Publicar la nota como estaba planeada, ignorando la presión.",
        tweet: "La nota sale hoy como estaba planeada. Ninguna llamada ni presión cambia lo que un periodista tiene que publicar cuando los datos son sólidos.",
        resultado: "Te ganás el respeto de colegas que valoran la independencia editorial, aunque la presión no desaparece del todo.",
        efecto: { seguidores: 0.10, credibilidad: +30, amor: +15, saludMental: -5 }
      },
      {
        texto: "Suavizar algunos términos de la nota 'para no generar un conflicto innecesario'.",
        tweet: "La investigación sobre el tema está disponible. Un análisis de los hechos con todas las perspectivas involucradas.",
        resultado: "La nota sale, pero perdés algo de filo. Algunos lectores atentos lo notan.",
        efecto: { seguidores: 0.03, credibilidad: -10, amor: 0, saludMental: +2 }
      },
      {
        texto: "Cajonear la nota completamente por miedo a represalias.",
        tweet: "Hoy no voy a publicar el informe que venía trabajando. Necesito más tiempo y más fuentes antes de salir con esto.",
        resultado: "Te enterás que otro medio la publica sin ese miedo. Perdés la primicia y algo de tu propia confianza.",
        efecto: { seguidores: -0.08, credibilidad: -25, amor: -10, saludMental: -18 }
      }
    ]
  },
  {
    id: "per_error_propio",
    desc: "Publicaste un dato de una fuente que resultó ser erróneo y la nota ya tiene 500 retweets.",
    titulo: "El dato que te fallo",
    triggers: { arquetipo: "periodista" },
    opciones: [
      {
        texto: "Publicar una corrección clara y detallada apenas te das cuenta del error.",
        tweet: "CORRECCIÓN IMPORTANTE: el dato que publiqué antes estaba equivocado. Acá la versión corregida con la fuente correcta. Pido disculpas.",
        resultado: "La rapidez y la transparencia de la corrección refuerzan, paradójicamente, tu credibilidad.",
        efecto: { seguidores: 0.05, credibilidad: +25, amor: +15, odio: -5, saludMental: +5 }
      },
      {
        texto: "Editar el tweet original en silencio sin avisar del cambio.",
        tweet: "La investigación sigue su curso normal con todos los datos disponibles.",
        resultado: "Alguien nota la diferencia entre capturas y te acusa de querer tapar el error.",
        efecto: { seguidores: -0.05, credibilidad: -20, amor: -10, odio: +15, saludMental: -10 }
      },
      {
        texto: "Defender el dato erróneo con uñas y dientes en vez de admitirlo.",
        tweet: "No hubo ningún error. Los que dicen que me equivoqué no leyeron la fuente completa. El dato es correcto.",
        resultado: "Cuanto más te empecinás, peor se ve. Terminás siendo el ejemplo de mala praxis periodística de la semana.",
        efecto: { seguidores: -0.10, credibilidad: -35, amor: -15, odio: +25, saludMental: -18 }
      }
    ]
  },

  // ---- OPINÓLOGO/A ----
  {
    id: "opi_polemica_ajena",
    desc: "Dos celebridades de la farándula se pelean a los insultos en el timeline.",
    titulo: "Subirte a la ola",
    triggers: { arquetipo: "opinologo" },
    opciones: [
      {
        texto: "Esperar a tener más información antes de opinar sobre el tema del momento.",
        tweet: "Voy a esperar un rato antes de opinar. Con lo que hay hasta ahora es difícil saber qué pasó realmente.",
        resultado: "Llegás tarde al pico de la conversación, pero tu opinión final tiene mejor base que la del resto.",
        efecto: { seguidores: 0.04, credibilidad: +15, amor: +10, saludMental: +5 }
      },
      {
        texto: "Opinar de inmediato sobre lo primero que viste, sin chequear nada más.",
        tweet: "Lo que hizo este tipo es una locura. No hay justificación posible. El país no da más.",
        resultado: "Subís rápido en el algoritmo, pero horas después se sabe que la info inicial era incompleta.",
        efecto: { seguidores: 0.10, credibilidad: -15, amor: 0, odio: +10, saludMental: -5 }
      },
      {
        texto: "Opinar tan fuerte y tan rápido que te contradecís vos mismo al día siguiente.",
        tweet: "El comportamiento de esta persona es inaceptable y hay que decirlo claramente. No hay grises en esto.",
        resultado: "Alguien arma un hilo comparando tus dos tweets contradictorios. Te dejan de tomar en serio por un tiempo.",
        efecto: { seguidores: 0.02, credibilidad: -25, odio: +15, saludMental: -10 }
      }
    ]
  },
  {
    id: "opi_entrevista_tv",
    desc: "Te ofrecen una columna semanal fija de opinión en el noticiero central de la televisión.",
    titulo: "El pase a la tele",
    triggers: { arquetipo: "opinologo", seguidoresMin: 4000 },
    opciones: [
      {
        texto: "Ir preparado, con matices, dispuesto a cambiar de opinión si te muestran algo nuevo.",
        tweet: "Esta noche arranco mi columna semanal en el noticiero. Voy a hacer lo que siempre: escuchar antes de hablar y tratar de entender antes de opinar.",
        resultado: "Sorprendés a todos siendo razonable en un formato hecho para el griterío. Ganás un público que no tenías.",
        efecto: { seguidores: 0.12, credibilidad: +25, amor: +20, saludMental: +8 }
      },
      {
        texto: "Ir a repetir tu personaje de Twitter tal cual, sin adaptarte al formato.",
        tweet: "Esta noche en el noticiero. El mismo de siempre, en otro formato.",
        resultado: "Funciona a medias. Tus seguidores de siempre lo disfrutan, el resto no entiende bien de qué hablás.",
        efecto: { seguidores: 0.04, credibilidad: 0, amor: +5, saludMental: 0 }
      },
      {
        texto: "Ir directamente a generar un escándalo para viralizarte, sin que te importe el tema.",
        tweet: "Esta noche en el noticiero voy a decir lo que nadie se anima a decir. Sintonizá.",
        resultado: "Lográs el clip viral que buscabas, pero quedás como alguien que solo busca minutos de cámara.",
        efecto: { seguidores: 0.10, credibilidad: -20, odio: +20, saludMental: -10 }
      }
    ]
  },

  // ---- GAMER / STREAMER ----
  {
    id: "gam_boicot_empresa",
    desc: "La desarrolladora del juego anuncia una medida abusiva y la comunidad organiza un apagón masivo.",
    titulo: "El boicot de la comunidad",
    triggers: { arquetipo: "gamer" },
    opciones: [
      {
        texto: "Sumarte al boicot con argumentos claros sobre por qué la práctica de la empresa está mal.",
        tweet: "Me sumo al boicot. No es por drama, es porque la práctica que anunciaron afecta directamente a los jugadores y no tiene justificación económica real. Hilo 🧵",
        resultado: "Tu postura fundamentada le da peso al reclamo colectivo. Otros creadores te citan como referencia.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +20, saludMental: +5 }
      },
      {
        texto: "Mantenerte al margen para no perder acceso anticipado a futuros juegos de esa empresa.",
        tweet: "Cada uno toma sus decisiones. Yo tengo acuerdos vigentes y no voy a hablar del tema por ahora.",
        resultado: "Algunos entienden tu posición profesional, otros te acusan de priorizar tus contratos por sobre tu comunidad.",
        efecto: { seguidores: 0.02, credibilidad: -5, amor: -5, saludMental: +2 }
      },
      {
        texto: "Defender públicamente a la empresa a cambio de contenido exclusivo pago.",
        tweet: "Creo que la medida se malinterpretó. La empresa lo explicó bien y tiene sentido desde lo que ellos buscan. Contenido patrocinado.",
        resultado: "Se filtra el acuerdo. Tu comunidad se siente traicionada por ver que defendías algo por plata, no por convicción.",
        efecto: { seguidores: -0.10, credibilidad: -30, odio: +25, saludMental: -15, ingresos: 300 }
      }
    ]
  },
  {
    id: "gam_acoso_fan",
    desc: "Un seguidor obsesivo empieza a cruzar límites personales en tus menciones y canales privados.",
    titulo: "El fan que se pasó de la raya",
    triggers: { arquetipo: "gamer" },
    opciones: [
      {
        texto: "Bloquearlo y reportarlo a la plataforma sin hacer un escándalo público.",
        tweet: "Recordatorio: pueden usar las herramientas de la plataforma para reportar comportamiento que los incomoda. No todo tiene que ser un drama público.",
        resultado: "Resolvés el problema de forma directa, sin darle más exposición al que te acosó.",
        efecto: { seguidores: 0.02, credibilidad: +10, amor: +10, saludMental: +10 }
      },
      {
        texto: "Hacer un video hablando abiertamente del acoso que reciben los streamers, sin exponer datos personales de nadie.",
        tweet: "Video nuevo: hablo del acoso que recibimos los streamers todo el tiempo, sin nombrar a nadie ni exponer a nadie. Esto le pasa a más gente de la que creen.",
        resultado: "El video ayuda a otros streamers que pasan por lo mismo. Se comparte como contenido de concientización.",
        efecto: { seguidores: 0.12, credibilidad: +20, amor: +25, saludMental: +8 }
      },
      {
        texto: "Exponer públicamente los datos personales del acosador para que tu comunidad lo escrache.",
        tweet: "Este es el que me estuvo acosando en privado. Nombre completo, ciudad, todo. Ya cansa. Comunidad, ustedes saben qué hacer.",
        resultado: "El escrache se te va de las manos y termina en amenazas cruzadas. Quedás legalmente en una zona gris.",
        efecto: { seguidores: 0.05, credibilidad: -15, odio: +20, saludMental: -20 }
      }
    ]
  },

  // ---- CONSPIRANOICO/A ----
  {
    id: "cons_prediccion_fallida",
    desc: "Una predicción apocalíptica que anunciaste con fecha exacta no ocurrió.",
    titulo: "La profecía que no se cumplió",
    triggers: { arquetipo: "conspiranoico" },
    opciones: [
      {
        texto: "Admitir que la predicción no se cumplió y preguntarte en público en qué te equivocaste.",
        tweet: "La fecha pasó y lo que anuncié no sucedió. Necesito revisarlo todo desde cero. Aprender a equivocarse es parte del proceso. Gracias a los que me lo señalaron con respeto.",
        resultado: "Un gesto raro en tu nicho. Algunos te respetan más por dudar de vos mismo en vez de doblar la apuesta.",
        efecto: { seguidores: 0.03, credibilidad: +20, amor: +10, odio: -10, saludMental: +8 }
      },
      {
        texto: "Decir que 'se cumplió, pero de forma simbólica, no literal'.",
        tweet: "Lo que anuncié se cumplió en el plano simbólico y energético, aunque no de la manera literal que describí. Las profecías no son literales.",
        resultado: "Tu núcleo duro lo acepta sin problema. El resto de Twitter se ríe abiertamente de la excusa.",
        efecto: { seguidores: 0.02, credibilidad: -15, amor: 0, odio: +10, saludMental: -2 }
      },
      {
        texto: "Decir que 'no se cumplió porque lo filtraron a tiempo gracias a que vos lo expusiste'.",
        tweet: "No se cumplió porque lo expusimos a tiempo. Eso es exactamente lo que hacemos acá: frenar lo que viene. Esta vez funcionó.",
        resultado: "La excusa es tan grande que hasta parte de tu público empieza a alejarse.",
        efecto: { seguidores: -0.05, credibilidad: -25, odio: +15, saludMental: -10 }
      }
    ]
  },
  {
    id: "cons_medios_infiltran",
    desc: "Un periodista de investigación de la tele te contacta para una entrevista en profundidad.",
    titulo: "El periodista que te contacta",
    triggers: { arquetipo: "conspiranoico" },
    opciones: [
      {
        texto: "Aceptar la nota y responder con calma, sin caer en provocaciones.",
        tweet: "Acepté la nota. Voy a responder cada pregunta con calma, sin caer en el show que capaz esperan. Que la gente vea con su propia cabeza.",
        resultado: "La nota sale más equilibrada de lo que esperabas. Ganás algo de exposición fuera de tu nicho habitual.",
        efecto: { seguidores: 0.08, credibilidad: +15, amor: +10, odio: -5, saludMental: +5 }
      },
      {
        texto: "Rechazar la nota porque 'los medios tradicionales siempre tergiversan todo'.",
        tweet: "No voy a la nota. Ya sé cómo termina: cortan, editan y me hacen quedar como quieren. Prefiero seguir hablando directo acá, sin filtro de nadie.",
        resultado: "Tu público lo entiende, pero perdés la chance de mostrar tu lado más razonable a otra audiencia.",
        efecto: { seguidores: 0.02, credibilidad: 0, amor: +5, saludMental: +5 }
      },
      {
        texto: "Aceptar la nota pero insultar al periodista en vivo acusándolo de 'operador'.",
        tweet: "Fui al piso y se lo dije en la cara: sos un operador, todos sabemos para quién trabajás. Que la gente saque sus conclusiones.",
        resultado: "El clip se viraliza mostrándote agresivo y sin argumentos. Reforzás el estereotipo que querías romper.",
        efecto: { seguidores: 0.04, credibilidad: -25, odio: +20, saludMental: -12 }
      }
    ]
  },

  // ---- TECHIE / STARTUP BRO ----
  {
    id: "tec_bug_critico",
    desc: "Un bug de seguridad expone datos no sensibles de usuarios en producción.",
    titulo: "El bug en producción",
    triggers: { arquetipo: "techie" },
    opciones: [
      {
        texto: "Comunicar el bug de inmediato a tus usuarios y mostrar en tiempo real cómo lo estás arreglando.",
        tweet: "Incident en producción: encontramos un bug que expuso metadatos de usuario. Estamos trabajando en el fix ahora mismo. Actualizaciones cada 30 min en este hilo 🧵",
        resultado: "La transparencia en la crisis genera más confianza que si nunca hubiera pasado nada.",
        efecto: { seguidores: 0.10, credibilidad: +25, amor: +20, saludMental: -5, ingresos: -50 }
      },
      {
        texto: "Arreglarlo en silencio sin avisar a nadie que hubo un problema.",
        tweet: "Deploy de mantenimiento completado. Performance mejorada en un 12%.",
        resultado: "Algunos usuarios afectados lo notan igual y se preguntan por qué no dijiste nada.",
        efecto: { seguidores: 0.02, credibilidad: -5, amor: 0, saludMental: +2 }
      },
      {
        texto: "Culpar públicamente a un proveedor externo sin verificar si era realmente su responsabilidad.",
        tweet: "El incidente de hoy fue causado por una falla en la infraestructura del proveedor externo de storage. Escalamos formalmente.",
        resultado: "El proveedor desmiente todo con logs que te contradicen. Quedás mintiendo en público sobre tu propio producto.",
        efecto: { seguidores: -0.08, credibilidad: -30, odio: +15, saludMental: -15 }
      }
    ]
  },
  {
    id: "tec_competencia_copia",
    desc: "Una empresa con 10 millones de dólares de financiamiento clona tu producto punto por punto.",
    titulo: "Te copiaron el producto",
    triggers: { arquetipo: "techie" },
    opciones: [
      {
        texto: "Enfocarte en seguir mejorando tu producto en vez de responderle a la competencia.",
        tweet: "Que te copien es la mejor validación que existe. Nosotros vamos a seguir mejorando el producto. El mercado va a decidir.",
        resultado: "Tu producto sigue un paso adelante. La comunidad nota quién innova y quién solo copia.",
        efecto: { seguidores: 0.06, credibilidad: +20, amor: +10, saludMental: +8 }
      },
      {
        texto: "Hacer un hilo público mostrando las similitudes casi idénticas entre ambos productos.",
        tweet: "Hilo 🧵: pantalla por pantalla, función por función. Ustedes juzgan si esto es 'inspiración' o una copia literal de lo que construimos.",
        resultado: "El hilo se viraliza y la comunidad tech se pone de tu lado con fuerza.",
        efecto: { seguidores: 0.15, credibilidad: +20, amor: +15, odio: +5, saludMental: +2 }
      },
      {
        texto: "Iniciar una campaña de acoso organizado contra la cuenta del que te copió.",
        tweet: "Vayan todos a las menciones de @{competencia} a recordarles de dónde sacaron cada línea de código. No los dejen en paz hasta que den la cara.",
        resultado: "Te pasás de la raya y la comunidad tech, que al principio te apoyaba, empieza a incomodarse con tus métodos.",
        efecto: { seguidores: 0.02, credibilidad: -20, odio: +20, saludMental: -15 }
      }
    ]
  },

  // ---- PODCASTER / ENTREVISTADOR/A ----
  {
    id: "pod_numero_bajo",
    desc: "El último episodio midió la mitad de escuchas que el promedio habitual.",
    titulo: "El episodio que no funcionó",
    triggers: { arquetipo: "podcaster" },
    opciones: [
      {
        texto: "Analizar con calma qué falló y ajustar el formato para el próximo episodio.",
        tweet: "Estuve leyendo el feedback del último episodio. Coincido en varias cosas: el ritmo quedó largo y faltó repreguntar más. Ya ajustando para el próximo 🎙️",
        resultado: "El ajuste se nota. Los próximos episodios recuperan y superan el nivel anterior.",
        efecto: { seguidores: 0.05, credibilidad: +15, amor: +10, saludMental: +8 }
      },
      {
        texto: "Culpar públicamente al invitado por 'no aportar nada interesante'.",
        tweet: "El episodio de esta semana no llegó a donde quería. A veces las conversaciones no fluyen. Eso también es parte de hacer contenido real.",
        resultado: "El invitado responde en su propia cuenta con capturas del guion que vos mismo armaste. Quedás mal parado.",
        efecto: { seguidores: -0.05, credibilidad: -25, amor: -10, odio: +20, saludMental: -12 }
      },
      {
        texto: "No decir nada y seguir con el calendario habitual sin cambiar nada.",
        tweet: "Nuevo episodio disponible. Esta semana con otro tema. En bio.",
        resultado: "El bajón de números se repite en el siguiente episodio también.",
        efecto: { seguidores: -0.02, credibilidad: 0, amor: 0, saludMental: -5 }
      }
    ]
  },
  {
    id: "pod_crossover",
    desc: "El podcaster número 1 del país te propone grabar un episodio especial conjunto.",
    titulo: "El crossover soñado",
    triggers: { arquetipo: "podcaster", seguidoresMin: 6000 },
    opciones: [
      {
        texto: "Prepararte a fondo, investigando en profundidad al invitado antes de la grabación.",
        tweet: "Pasé dos semanas preparando esta entrevista. No voy a desperdiciar el momento. Esta semana en el podcast.",
        resultado: "La entrevista sale redonda. El clip se comparte en todos lados como 'la mejor nota que le hicieron'.",
        efecto: { seguidores: 0.20, credibilidad: +30, amor: +25, saludMental: +8 }
      },
      {
        texto: "Ir con preguntas genéricas confiando en que el invitado 'lleve la conversación solo'.",
        tweet: "Esta semana en el podcast: charla sin filtros con un invitado especial. Link en bio.",
        resultado: "El episodio sale correcto pero olvidable. El invitado da mejores notas en otros lados.",
        efecto: { seguidores: 0.05, credibilidad: +5, amor: +5, saludMental: +2 }
      },
      {
        texto: "Aprovechar la entrevista para hacer preguntas incómodas fuera de contexto, buscando el escándalo.",
        tweet: "Esta semana vamos a preguntar lo que nadie pregunta. Invitado especial.",
        resultado: "El invitado corta la nota a mitad de camino. Otros posibles invitados grandes te empiezan a evitar.",
        efecto: { seguidores: 0.08, credibilidad: -25, odio: +20, saludMental: -15 }
      }
    ]
  }

];


/* ?? M?DULO: content/events/cancellations.js ?? */
﻿// cancelaciones-content.js — Twitero v14
// 8 Cancelaciones Generales + 36 Cancelaciones por Arquetipo (3 por cada uno)

const generalCancellations = [
  {
    id: "canc_gen_medida_gobierno",
    titulo: "APOYO A MEDIDA IMPOPULAR",
    motivo: "Saliste a defender con fervor una medida gubernamental repudiada por el 90% de la poblacion.",
    texto: "El timeline exploto de indignacion. Cuentas de todos los bandos te citaron tildandote de 'oficialista ciego' y 'desconectado de la realidad'.",
    tweetSimulado: "Increible como no entienden que el nuevo impuesto al aire es una medida de avanzada. Los que se quejan nunca leyeron economia basica.",
    hate: 25, amor: -20, saludMental: -15, segsLostPct: 0.08
  },
  {
    id: "canc_gen_alabar_persona",
    titulo: "EL TWEET VIEJO INCORRECTO",
    motivo: "Desenterraron un tweet tuyo de 2017 elogiando a una figura publica que acaba de ser condenada por la justicia.",
    texto: "Tu foto al lado de sus frases se convirtio en meme viral. Tus menciones se llenaron de 'este eras vos' y 'no borres que hay captura'.",
    tweetSimulado: "Orgulloso de conocer a este procer contemporaneo. Su integridad y vision son un ejemplo para toda la patria.",
    hate: 20, amor: -15, saludMental: -12, segsLostPct: 0.06
  },
  {
    id: "canc_gen_like_filtrado",
    titulo: "EL LIKE COMPROMETEDOR A LAS 3 AM",
    motivo: "Le diste 'Me Gusta' por descuido a un posteo altamente repudiable y una cuenta cazadora de likes le saco captura.",
    texto: "Desmentir que fue 'un toque involuntario en la pantalla' solo empeoro las cosas. El ratio fue fulminante.",
    tweetSimulado: "Aclaro que fue un error del feed tactil del celular, jamas avalaria semejante aberracion. Dejen de operar.",
    hate: 18, amor: -10, saludMental: -10, segsLostPct: 0.05
  },
  {
    id: "canc_gen_tragedia_marketing",
    titulo: "MARKETING EN MEDIO DE LA TRAGEDIA",
    motivo: "Quisiste meter un chiste autorreferencial o una promo de tus links en medio del trending topic de una catastrofe.",
    texto: "Te acusaron unanimente de carronero digital y falta de empatia. Tu nivel de Odio se disparo a niveles record.",
    tweetSimulado: "Tremendo lo que paso con el temporal de anoche... por suerte yo estaba bajo techo programando. Pasen por mi perfil que hay descuento.",
    hate: 30, amor: -25, saludMental: -18, segsLostPct: 0.10
  },
  {
    id: "canc_gen_audio_filtrado",
    titulo: "AUDIO PRIVADO FILTRADO",
    motivo: "Se filtro una nota de voz donde te quejabas despectivamente de tu comunidad y de las marcas que te auspician.",
    texto: "Tus propios seguidores encabezaron la campana de unfollow masivo. El TL sintio la traicion.",
    tweetSimulado: "Ese audio esta sacado de contexto y editado con inteligencia artificial. Jamas pensaria eso de la gente que me banca.",
    hate: 28, amor: -30, saludMental: -20, segsLostPct: 0.12
  },
  {
    id: "canc_gen_estafa_piramidal",
    titulo: "LA PROMO DE LA ESTAFA",
    motivo: "Recomendaste una plataforma de inversion o un token dudoso que se esfumo con los ahorros de cientos de seguidores.",
    texto: "Abogados y victimas crearon un grupo de damnificados con tu cara como portada. Tu credibilidad quedo en el subsuelo.",
    tweetSimulado: "Yo solo comparti una herramienta que a mi me servia, no doy consejos financieros, cada uno es responsable de su plata.",
    hate: 32, amor: -25, saludMental: -22, segsLostPct: 0.14
  },
  {
    id: "canc_gen_plagio_descubierto",
    titulo: "PLAGIO PALABRA POR PALABRA",
    motivo: "Un usuario descubrio que tu hilo mas viral de la semana era una traduccion literal de un posteo en ingles de 2022.",
    texto: "El hilo comparativo con capturas lado a lado sumo 40.000 retweets en dos horas. Quedaste expuesto ante todos.",
    tweetSimulado: "Las ideas estan en el aire, es normal coincidir en analisis profundos de la realidad cuando uno investiga lo mismo.",
    hate: 15, amor: -20, saludMental: -10, segsLostPct: 0.05
  },
  {
    id: "canc_gen_clasismo_meme",
    titulo: "EL COMENTARIO DESUBICADO",
    motivo: "Hiciste una queja sobre el transporte publico o los habitos de la gente que sono brutalmente clasista y condescendiente.",
    texto: "Te convirtieron en el meme nacional del dia. Figuras publicas y cuentas de memes usaron tu tweet de remate durante 48 horas.",
    tweetSimulado: "Viajar en colectivo es una experiencia antropologica fascinante. Realmente te abre los ojos ver como vive el resto.",
    hate: 24, amor: -18, saludMental: -14, segsLostPct: 0.07
  }
];

const archetypeCancellations = {
  opinologo: [
    {
      id: "canc_opi_peritaje",
      titulo: "DESMENTIDA TECNICA EN VIVO",
      motivo: "Un peritaje oficial y tres cientificos desmintieron categoricamente el informe que defendias como verdad absoluta.",
      texto: "Te clavaron una nota de la comunidad gigante y un alud de quotes burlandose de tu 'doctorado de Twitter'.",
      tweetSimulado: "Cuestionan mi informe porque toco intereses. Los cientificos que me critican reciben subsidios del lobby corporativo.",
      hate: 22, amor: -15, saludMental: -12, segsLostPct: 0.06
    },
    {
      id: "canc_opi_opereta",
      titulo: "LA OPERETA DESCUBIERTA",
      motivo: "Se filtro un PDF interno de un partido politico que contenia exactamente el mismo guion de tu ultima columna.",
      texto: "Toda la credibilidad de cuenta independiente se desmorono. Te tildaron de repetidor de sobres.",
      tweetSimulado: "Casualidad absoluta. Si mis ideas coinciden con las de un espacio es porque ellos vieron lo mismo que yo.",
      hate: 26, amor: -20, saludMental: -16, segsLostPct: 0.08
    },
    {
      id: "canc_opi_dolares",
      titulo: "BURLA ECONOMICA EN PLENA CRISIS",
      motivo: "Tuiteaste 'el que gana en pesos es porque no quiere progresar' el mismo dia de una devaluacion del 30%.",
      texto: "El timeline entero se unio para repudiarte sin distincion politica. El ratio fue unanime.",
      tweetSimulado: "No se enojen con el mensajero. La educacion financiera duele pero es la unica salida real a este pais.",
      hate: 30, amor: -25, saludMental: -18, segsLostPct: 0.10
    }
  ],
  futbolero: [
    {
      id: "canc_fut_palco_dirigente",
      titulo: "FOTOGRAFIADO EN EL PALCO VIP",
      motivo: "Aparecio una foto en alta definicion abrazado con el presidente corrupto del club que jurabas no conocer ni tratar.",
      texto: "Los hinchas genuinos del club te declararon persona no grata en el estadio y te llenaron las menciones de traidor.",
      tweetSimulado: "Estaba en ese palco por una cuestion estrictamente periodistica y de cortesia institucional. No me vendo por un sandwich de miga.",
      hate: 28, amor: -22, saludMental: -15, segsLostPct: 0.09
    },
    {
      id: "canc_fut_socio_rival",
      titulo: "EL CARNET DE SOCIO RIVAL",
      motivo: "Filtraron tu ficha de socio vitalicio del clasico rival de toda la vida de cuando tenias 20 anos.",
      texto: "Tu personaje de hincha fanatico quedo pulverizado. Cuentas de ambos clubes se turnaron para descansarte.",
      tweetSimulado: "Me hizo socio mi abuelo de chico, jamas pise esa cancha. Toda mi vida fui del club que defiendo hoy.",
      hate: 24, amor: -20, saludMental: -14, segsLostPct: 0.08
    },
    {
      id: "canc_fut_violencia_justificada",
      titulo: "JUSTIFICACION DE LA BARRA BRAVA",
      motivo: "Justificaste los incidentes y destrozos de la hinchada afuera del estadio diciendo que 'el folklore es asi'.",
      texto: "Medios masivos mostraron tu tweet en el noticiero central y te llego una citacion de la fiscalia especializada.",
      tweetSimulado: "Entendieron todo mal. Hablo de la pasion genuina de las tribunas, no de tres inadaptados. Corten la persecucion.",
      hate: 32, amor: -28, saludMental: -20, segsLostPct: 0.12
    }
  ],
  militante: [
    {
      id: "canc_poli_tweets_viejos",
      titulo: "MILITANCIA EN EL BANDO OPUESTO",
      motivo: "Desenterraron 50 tweets tuyos militando con fervor al candidato que hoy definis como el enemigo de la patria.",
      texto: "Tus propios companeros de militancia dudan de tu lealtad y los rivales disfrutan el show con capturas de archivo.",
      tweetSimulado: "Las personas inteligentes cambian de opinion cuando ven la realidad. Los dogmaticos se quedan estancados.",
      hate: 26, amor: -20, saludMental: -15, segsLostPct: 0.08
    },
    {
      id: "canc_poli_cargo_fantasma",
      titulo: "EL CONTRATO ESTATAL EN NEGRO",
      motivo: "Salio en el boletin oficial una designacion tuya como asesor de comunicacion con un sueldo astronomico sin horario fijo.",
      texto: "Tu discurso de 'militante por conviccion desinteresada' murio al instante. Te llovieron memes de recibos de sueldo.",
      tweetSimulado: "Es un honor aportar mi capacidad tecnica al Estado. Cobro por mi trabajo profesional, no por militar.",
      hate: 34, amor: -30, saludMental: -22, segsLostPct: 0.14
    },
    {
      id: "canc_poli_privado_vs_publico",
      titulo: "COLEGIO PRIVADO BILINGUE",
      motivo: "Mientras dabas catedra sobre defender la escuela publica, se filtro que tus hijos van al colegio mas exclusivo de la zona norte.",
      texto: "La contradiccion moral fue letal para tu base de seguidores que realmente creia en tus consignas.",
      tweetSimulado: "La educacion de mis hijos es un tema privado de mi familia. No politicen las decisiones de crianza.",
      hate: 24, amor: -18, saludMental: -12, segsLostPct: 0.07
    }
  ],
  humor: [
    {
      id: "canc_hum_robachistes",
      titulo: "EL LADRON DE REMATES",
      motivo: "Tres comediantes emergentes armaron un hilo demostrando que les robaste chistes identicos durante seis meses.",
      texto: "El sindicato invisible del humor de Twitter te bloqueo en masa. La etiqueta #Robachistes fue tendencia #1.",
      tweetSimulado: "El pensamiento paralelo existe en la comedia. Son remates logicos que se le ocurren a cualquiera con dos dedos de frente.",
      hate: 25, amor: -22, saludMental: -15, segsLostPct: 0.08
    },
    {
      id: "canc_hum_tragedia_chiste",
      titulo: "EL REMATE CRUEL",
      motivo: "Hiciste un chiste de humor negro desubicado mientras todavia buscaban sobrevivientes en un derrumbe.",
      texto: "Marcas cancelaron contratos publicitarios al instante y las cuentas grandes pidieron tu suspension de la red.",
      tweetSimulado: "El humor es mi mecanismo de defensa ante el dolor del mundo. Si no les gusta el humor negro no me sigan.",
      hate: 35, amor: -30, saludMental: -25, segsLostPct: 0.15
    },
    {
      id: "canc_hum_granja_bots",
      titulo: "GRANJA DE BOTS DESCUBIERTA",
      motivo: "Se filtro el panel de control donde contratabas 2.000 bots indios para inflar tus likes y hundir a la competencia.",
      texto: "Tus metricas de cuenta viral quedaron totalmente deslegitimadas. Todos tus tweets pasaron a recibir solo risas burlonas.",
      tweetSimulado: "Me armaron un ataque de bots para ensuciarme. Yo jamas pagaria por interacciones truchas.",
      hate: 20, amor: -18, saludMental: -10, segsLostPct: 0.06
    }
  ],
  periodista: [
    {
      id: "canc_per_fake_doc",
      titulo: "EL DOCUMENTO FALSIFICADO",
      motivo: "Publicaste como 'informe reservado de inteligencia' un Word armado por un troll con faltas de ortografia.",
      texto: "Colegas de todos los medios y periodistas consagrados te destrozaron por no chequear ni 30 segundos una fuente.",
      tweetSimulado: "La fuente era confiable en el pasado. El fondo de la denuncia sigue siendo valido mas alla del documento.",
      hate: 30, amor: -25, saludMental: -20, segsLostPct: 0.12
    },
    {
      id: "canc_per_sobre_enterrado",
      titulo: "LA INVESTIGACION CAJONEADA",
      motivo: "Filtraron chats donde aceptabas 5.000 dolares de una farmaceutica para no publicar una nota sobre medicamentos vencidos.",
      texto: "Perdiste toda autoridad etica para denunciar a nadie en el futuro. Te escracharon en foros de periodismo.",
      tweetSimulado: "La nota no salio porque le faltaban pruebas periciales solidas, no por ninguna presion ni arreglo economico.",
      hate: 38, amor: -35, saludMental: -25, segsLostPct: 0.16
    },
    {
      id: "canc_per_escrache_inocente",
      titulo: "EL INOCENTE CONFUNDIDO",
      motivo: "Subiste la foto y el DNI de un estudiante universitario diciendo que era el autor de un robo bancario.",
      texto: "La familia te inicio una demanda civil millonaria por danos y perjuicios. El repudio fue unanime.",
      tweetSimulado: "Pedimos disculpas a la familia. Trabajamos con informacion policial preliminar que vino distorsionada de origen.",
      hate: 32, amor: -28, saludMental: -22, segsLostPct: 0.14
    }
  ],
  cryptobro: [
    {
      id: "canc_cry_rugpull_sponsor",
      titulo: "EL EXCHANGE QUE SE FUGO",
      motivo: "El exchange turbio que publicitaste con link de afiliados cerro operaciones y se quedo con los depositos de tu comunidad.",
      texto: "Tus menciones son un mar de capturas de gente que perdio los ahorros de su vida por tu recomendacion.",
      tweetSimulado: "A mi tambien me estafaron, yo tenia fondos adentro como todos ustedes. Hagan su propia investigacion siempre.",
      hate: 36, amor: -30, saludMental: -24, segsLostPct: 0.15
    },
    {
      id: "canc_cry_dump_followers",
      titulo: "DUMP SOBRE TUS SEGUIDORES",
      motivo: "Rastrearon tu wallet en la blockchain y vieron que vendiste todas tus monedas mientras tuiteabas 'HODL con fuerza'.",
      texto: "La comunidad crypto te declaro estafador serial y armaron un bot que trackea cada movimiento de tu billetera.",
      tweetSimulado: "Estaba rebalanceando mi portfolio para tener liquidez y armar un fondo de staking comunitario.",
      hate: 32, amor: -28, saludMental: -20, segsLostPct: 0.13
    },
    {
      id: "canc_cry_bot_liquidado",
      titulo: "EL BOT DE FUTUROS QUE COLAPSO",
      motivo: "Tu algoritmo infalible de trading que vendias por suscripcion liquido al 100% de los usuarios en una vela roja.",
      texto: "Te llovieron denuncias en la comision de valores y cientos de cancelaciones en tu canal VIP.",
      tweetSimulado: "El mercado tuvo un cisne negro impredecible de volatilidad cuantica. El algoritmo a largo plazo sigue siendo ganador.",
      hate: 26, amor: -22, saludMental: -16, segsLostPct: 0.09
    }
  ],
  gamer: [
    {
      id: "canc_gam_cheating_live",
      titulo: "AIMBOT EN TORNEO BENEFICO",
      motivo: "Se te abrio la ventana de configuracion del hack en pleno stream con 15.000 espectadores durante una final benefica.",
      texto: "La organizacion te descalifico de por vida y los clips de tu trampa alcanzaron 2 millones de vistas en TikTok.",
      tweetSimulado: "Era un software de calibracion del mouse para problemas de muneca, jamas usaria trampas en una competencia.",
      hate: 34, amor: -30, saludMental: -22, segsLostPct: 0.15
    },
    {
      id: "canc_gam_discord_leaks",
      titulo: "CHATS TOXICOS DE DISCORD",
      motivo: "Un ex-moderador filtro capturas tuyas insultando con terminos discriminatorios a streamers mas chicos y a tus propios subs.",
      texto: "Tus sponsors de perifericos y bebidas energeticas rescindieron contrato antes del mediodia.",
      tweetSimulado: "Estaba en un momento personal oscuro y hable en caliente en un grupo privado. No me define lo que dije ahi.",
      hate: 28, amor: -25, saludMental: -18, segsLostPct: 0.11
    },
    {
      id: "canc_gam_casino_menores",
      titulo: "PROMO DE CASINO ILEGAL A MENORES",
      motivo: "Metiste una ruleta de apuestas clandestina en medio de un stream de Minecraft con audiencia mayoritariamente infantil.",
      texto: "Asociaciones de padres y psicologos te escracharon en medios nacionales. Twitch te metio shadowban.",
      tweetSimulado: "Puse cartel de mayores de 18 en la pantalla. Cada usuario y cada padre es responsable de lo que mira en internet.",
      hate: 35, amor: -32, saludMental: -24, segsLostPct: 0.14
    }
  ],
  conspiranoico: [
    {
      id: "canc_con_fuente_falsa",
      titulo: "LA FUENTE PENTAGONO DE 14 ANOS",
      motivo: "El 'general retirado de la OTAN' que citabas en todos tus hilos resulto ser un pibe de secundaria trolleando desde Lanus.",
      texto: "Tus teorias del 'Gran Reseteo' quedaron reducidas al meme mas humillante del ano en todo el TL.",
      tweetSimulado: "El sistema uso a ese chico para desinformar y tapar las verdades incomodas que estabamos revelando.",
      hate: 22, amor: -18, saludMental: -12, segsLostPct: 0.07
    },
    {
      id: "canc_con_antena_carton",
      titulo: "EL FILTRO ANTI-5G DE CARTON",
      motivo: "Un laboratorio abrio tu 'bloqueador cuantico' de 15.000 pesos y mostro que era carton corrugado envuelto en papel aluminio.",
      texto: "Te denunciaron por estafa comercial y ejercicio ilegal de la medicina alternativa. Tus seguidores se sintieron robados.",
      tweetSimulado: "El material contiene nanotecnologia escalar que la ciencia oficial no tiene instrumental para medir.",
      hate: 32, amor: -26, saludMental: -20, segsLostPct: 0.13
    },
    {
      id: "canc_con_acoso_medico",
      titulo: "ESCRACHE AL MEDICO DE GUARDIA",
      motivo: "Mandaste a tus seguidores a acosar a un medico de hospital publico acusandolo de 'implantar chips'.",
      texto: "El colegio de medicos te inicio una demanda penal y te cerraron dos cuentas por instigacion a la violencia.",
      tweetSimulado: "Solo pedi que la gente fuera a hacer preguntas legitimas. No controlo las acciones individuales de mis seguidores.",
      hate: 36, amor: -32, saludMental: -25, segsLostPct: 0.16
    }
  ],
  influencer: [
    {
      id: "canc_inf_sorteo_trucho",
      titulo: "EL SORTEO PARA LA FAMILIA",
      motivo: "La ganadora del viaje a Cancun y el iPhone resulto ser la prima hermana de tu novio con el perfil recien creado.",
      texto: "Defensa al Consumidor te abrio un sumario y la etiqueta #SorteoTrucho fue tendencia todo el fin de semana.",
      tweetSimulado: "El sistema de sorteos elige al azar entre millones de comentarios. Fue una casualidad matematica increible.",
      hate: 30, amor: -28, saludMental: -18, segsLostPct: 0.12
    },
    {
      id: "canc_inf_maltrato_mozos",
      titulo: "AUDIO DE MALTRATO POR CANJE",
      motivo: "Se viralizo un video tuyo gritandole a una camarera porque no te quisieron dar una cena gratis para 8 personas.",
      texto: "El sindicato gastronomico y decenas de locales te declararon persona indeseable en sus locales.",
      tweetSimulado: "Venia de un dia con mucho estres y me trataron con mucha falta de respeto primero. Ya me comunique para pedir perdon.",
      hate: 28, amor: -24, saludMental: -16, segsLostPct: 0.10
    },
    {
      id: "canc_inf_crema_toxica",
      titulo: "CREMA FACIAL CON QUEMADURAS",
      motivo: "El serum de skincare que promocionabas con codigo causo reacciones alergicas y quemaduras quimicas a cientos de seguidoras.",
      texto: "Te llenaron el feed de fotos con la cara hinchada y pedidos desesperados de reintegro medico.",
      tweetSimulado: "Cada piel es un mundo y debe testearse antes. Yo solo fui la cara publicitaria del producto, no lo fabrique.",
      hate: 36, amor: -32, saludMental: -24, segsLostPct: 0.15
    }
  ],
  onlyfans: [
    {
      id: "canc_of_callcenter_chat",
      titulo: "EL CALL CENTER DEL CHAT VIP",
      motivo: "Filtraron chats donde se ve que los mensajes intimos a 20 dolares los respondian tres pasantes de un call center en turno noche.",
      texto: "Tus suscriptores mas leales se sintieron estafados en su intimidad y pidieron reembolsos masivos en el banco.",
      tweetSimulado: "Tengo un equipo de soporte tecnico que me ayuda con la logistica pero los contenidos y el carino son 100% mios.",
      hate: 26, amor: -24, saludMental: -15, segsLostPct: 0.10
    },
    {
      id: "canc_of_datos_filtrados",
      titulo: "FILTRACION DE DATOS DE COMPRADORES",
      motivo: "Por una falla en tu linktree se filtraron las identidades y correos reales de tus clientes corporativos y figuras publicas.",
      texto: "Varios clientes con perfil alto te iniciaron reclamos legales y tu base de compradores colapso por miedo.",
      tweetSimulado: "La plataforma externa fue vulnerada por hackers maliciosos. Ya tomamos medidas de seguridad informatica reforzadas.",
      hate: 34, amor: -30, saludMental: -22, segsLostPct: 0.14
    },
    {
      id: "canc_of_reciclado_fotos",
      titulo: "EL SET 'EXCLUSIVO' DE INSTAGRAM",
      motivo: "Cobraste 100 dolares por un set premium que resulto ser un collage de fotos viejas que tenias gratis en historias de 2021.",
      texto: "Los foros de filtraciones te escracharon con capturas comparativas y te tildaron de estafa sin esfuerzo.",
      tweetSimulado: "Ese set incluia remasterizacion digital en 4K y angulos ineditos que nunca habian salido en resolucion completa.",
      hate: 22, amor: -20, saludMental: -12, segsLostPct: 0.08
    }
  ],
  techie: [
    {
      id: "canc_tec_wrapper_estafa",
      titulo: "EL WRAPPER QUE COBRABA $50",
      motivo: "Ingenieros de software descompilaron tu SaaS y mostraron que era una llamada basica a la API de OpenAI con un boton azul.",
      texto: "En Hacker News y Twitter Tech te convirtieron en el hazmerreir del ecosistema emprendedor.",
      tweetSimulado: "El valor no esta en el codigo base sino en la experiencia de usuario y el empaquetado para el cliente final.",
      hate: 24, amor: -20, saludMental: -14, segsLostPct: 0.08
    },
    {
      id: "canc_tec_passwords_leak",
      titulo: "CONTRASENAS EN TEXTO PLANO",
      motivo: "Tu startup sufrio un leak donde se descubrio que guardabas las contrasenas de 50 empresas en una base de datos sin encriptar.",
      texto: "Las empresas cancelaron sus cuentas corporativas y te denunciaron por negligencia grave de seguridad.",
      tweetSimulado: "Estabamos en fase beta con arquitectura preliminar. Ningun dato sensible fue utilizado con fines comerciales.",
      hate: 36, amor: -30, saludMental: -25, segsLostPct: 0.16
    },
    {
      id: "canc_tec_90horas_semanales",
      titulo: "EL MANIFIESTO DE ESCLAVITUD",
      motivo: "Publicaste un hilo asegurando que 'los programadores que duermen mas de 4 horas o tienen familia no estan comprometidos'.",
      texto: "Toda la comunidad de desarrolladores te lleno de memes de burnout y decenas de candidatos renunciaron a tus ofertas de trabajo.",
      tweetSimulado: "Si quieren mediocridad de 9 a 18 vayan a trabajar al Estado. Los que cambiamos el mundo tenemos otra etica de trabajo.",
      hate: 30, amor: -26, saludMental: -18, segsLostPct: 0.12
    }
  ],
  podcaster: [
    {
      id: "canc_pod_terraplanista",
      titulo: "MICROFONO AL DELIRIO",
      motivo: "Le diste 3 horas de microfono estelar a un personaje delirante que aseguraba que la gravedad es un invento masonico.",
      texto: "Cientificos, docentes y periodistas te acusaron de envenenar el debate publico por unos miseros clicks.",
      tweetSimulado: "En este espacio no censuramos a nadie. Dejamos que la gente escuche todas las voces y saque sus propias conclusiones.",
      hate: 25, amor: -18, saludMental: -14, segsLostPct: 0.08
    },
    {
      id: "canc_pod_preguntas_pactadas",
      titulo: "LA ENTREVISTA GUIONADA",
      motivo: "Se filtro un video previo donde un politico corrupto te marcaba con birome roja que preguntas tenias permitido hacerle.",
      texto: "Tu personaje de 'entrevistador incisivo e independiente' quedo destruido. Te taparon de memes de titere.",
      tweetSimulado: "Es normal acordar ejes tematicos en entrevistas de alto nivel politico para optimizar el tiempo de aire.",
      hate: 34, amor: -30, saludMental: -22, segsLostPct: 0.14
    },
    {
      id: "canc_pod_clip_mutilado",
      titulo: "EL CLIP DESHONESTO",
      motivo: "Mutilaste la frase de un cientifico para que pareciera que admitia que los medicamentos no sirven, buscando viralidad en TikTok.",
      texto: "El invitado publico la grabacion completa y te intimo con carta documento por difamacion maliciosa.",
      tweetSimulado: "El formato de clips requiere sintesis para captar la atencion de las nuevas generaciones. El episodio completo esta en YouTube.",
      hate: 30, amor: -26, saludMental: -18, segsLostPct: 0.12
    }
  ]
};


/* ?? M?DULO: content/events/fortuities.js ?? */
/* ═══════════════════════════════════════════════════════════
   Twitero v15 — content/events/fortuities.js
   Eventos fortuitos de alto impacto (Medios, Retweet de Famoso, Cambios en el Algoritmo)
   ═══════════════════════════════════════════════════════════ */

// ── 1. ¡LLEGASTE A LOS MEDIOS! (7 variantes de alcance escalonado) ──
const MEDIOS_EVENTOS = [
  {
    tipo: "radio",
    medio: "Radio Local (AM/FM)",
    icono: "📻",
    titulo: "CITADO EN RADIO LOCAL",
    desc: "Un columnista leyó tu último tweet al aire en el pase de la mañana y debatieron tu postura durante 10 minutos.",
    efectos: { segsPct: 0.03, credibilidad: 5, amor: 3 },
    narrativa: "Ganaste oyentes fieles del dial que se descargaron la app solo para buscarte."
  },
  {
    tipo: "diario_interior",
    medio: "Diario del Interior",
    icono: "🗞️",
    titulo: "PORTADA EN DIARIO REGIONAL",
    desc: "Un portal de noticias provincial levantó tus declaraciones como título central de su sección de sociedad.",
    efectos: { segsPct: 0.04, credibilidad: 8, amor: 4 },
    narrativa: "Te convertiste en referencia obligada para el público del interior del país."
  },
  {
    tipo: "tv_cable",
    medio: "Canal de Noticias (TV Cable)",
    icono: "📡",
    titulo: "PANTALLA DIVIDIDA EN TV DE CABLE",
    desc: "Pusieron tu tweet en pantalla gigante mientras cuatro panelistas se gritaban encima analizándolo.",
    efectos: { segsPct: 0.06, credibilidad: 8, amor: 5 },
    narrativa: "Pico de rating en el cable y una oleada de nuevos seguidores curiosos en tu perfil."
  },
  {
    tipo: "diario_nacional",
    medio: "Diario de Tirada Nacional",
    icono: "📰",
    titulo: "COLUMNA EN PRENSA NACIONAL",
    desc: "El diario más leído del país citó tu hilo completo en su edición impresa y digital de domingo.",
    efectos: { segsPct: 0.07, credibilidad: 12, amor: 6 },
    narrativa: "Un salto cualitativo institucional: tu palabra ahora tiene peso para el establishment mediático."
  },
  {
    tipo: "streaming",
    medio: "Canal de Streaming / YouTube",
    icono: "🔴",
    titulo: "REACCIÓN EN STREAMING MASIVO",
    desc: "El streamer más grande de habla hispana leyó tu cuenta en vivo ante 80.000 espectadores simultáneos.",
    efectos: { segsPct: 0.10, credibilidad: 6, amor: 8 },
    narrativa: "El chat colapsó de risa y una marea de usuarios jóvenes inundó tus respuestas."
  },
  {
    tipo: "tv_abierta",
    medio: "Noticiero Central (TV Abierta)",
    icono: "📺",
    titulo: "PRIMETIME EN TV ABIERTA",
    desc: "Tu tweet abrió el noticiero más visto de la televisión en horario central. Te vio el país entero.",
    efectos: { segsPct: 0.12, credibilidad: 10, amor: 7 },
    narrativa: "Reconocimiento popular masivo: hasta tu tía te mandó mensaje diciendo que te vio en la tele."
  },
  {
    tipo: "internacional",
    medio: "Prensa Internacional",
    icono: "🌍",
    titulo: "IMPACTO GLOBAL EN PRENSA INTERNACIONAL",
    desc: "Medios del exterior tradujeron tu contenido para ilustrar el fenómeno social del momento.",
    efectos: { segsPct: 0.15, credibilidad: 20, amor: 10 },
    narrativa: "Alcanzaste una dimensión global insospechada. Tu timeline ahora recibe comentarios en cinco idiomas."
  }
];

// ── 2. INTERACCIONES VIP (Retweet / Quote de Famosos o Figuras Clave) ──
const FAMOSO_VIP_GENERALES = [
  {
    titulo: "¡EL PRESIDENTE TE DIO RETWEET!",
    icono: "👑",
    desc: "El primer mandatario le dio Retweet a tu publicación destacando tu postura en plena cadena nacional.",
    efectos: { segsPct: 0.18, engagement: 85, viralidad: 25 }
  },
  {
    titulo: "¡EL PRESIDENTE CITÓ TU TWEET!",
    icono: "👑",
    desc: "El mandatario te hizo Quote Tweet diciendo: 'Esto es exactamente así. Brillante lectura.'",
    efectos: { segsPct: 0.20, engagement: 90, viralidad: 30 }
  },
  {
    titulo: "¡EL DUEÑO DE LA PLATAFORMA TE HIZO QUOTE!",
    icono: "👑",
    desc: "El dueño de la plataforma citó tu posteo con un emoji pensativo ('🎯') y el feed entero colapsó.",
    efectos: { segsPct: 0.22, engagement: 95, viralidad: 35 }
  },
  {
    titulo: "¡UN JUGADOR DE PRIMERA TE RETWEITEÓ!",
    icono: "⚽",
    desc: "La máxima figura del campeonato local compartió tu tweet en su cuenta verificada.",
    efectos: { segsPct: 0.16, engagement: 80, viralidad: 20 }
  },
  {
    titulo: "¡UN CONDUCTOR DE PRIMETIME CITÓ TU TWEET!",
    icono: "📺",
    desc: "El conductor más visto de la televisión leyó tu tweet al aire y lo citó textual en su cuenta.",
    efectos: { segsPct: 0.17, engagement: 75, viralidad: 22 }
  },
  {
    titulo: "¡UNA CELEBRIDAD TE DIO LIKE Y RT!",
    icono: "✨",
    desc: "Una de las figuras más seguidas de la farándula te reposteó y tus notificaciones no paran de subir.",
    efectos: { segsPct: 0.15, engagement: 70, viralidad: 20 }
  }
];

const FAMOSO_VIP_ARQUETIPOS = {
  futbolero: [
    {
      titulo: "¡EL CAPITÁN DE LA SELECCIÓN TE HIZO RT!",
      icono: "⚽",
      desc: "El 10 y capitán de la albiceleste reposteó tu posteo futbolero con aplausos y tu cuenta explotó.",
      efectos: { segsPct: 0.22, engagement: 95, viralidad: 30 }
    },
    {
      titulo: "¡EL TÉCNICO DE LA SELECCIÓN CITÓ TU TWEET!",
      icono: "📋",
      desc: "El DT de la Selección citó tu análisis táctico diciendo: 'Al fin alguien que entiende el juego sin histeria.'",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 25 }
    }
  ],
  militante: [
    {
      titulo: "¡EL LÍDER DEL ESPACIO TE DIO RETWEET!",
      icono: "🚩",
      desc: "El referente máximo de tu partido compartió tu tweet felicitándote por la claridad de la bajada de línea.",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 25 }
    },
    {
      titulo: "¡EL VOCERO PRESIDENCIAL CITÓ TU POSTEO!",
      icono: "🏛️",
      desc: "El vocero oficial citó tu publicación en Twitter como argumento para desmentir una operación de prensa.",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 25 }
    }
  ],
  cryptobro: [
    {
      titulo: "¡EL FUNDADOR DE UNA BLOCKCHAIN TOP TE CITÓ!",
      icono: "🚀",
      desc: "El creador de una de las 3 blockchains más grandes del mundo citó tu análisis on-chain con un 'Bullish & accurate.'",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 30 }
    },
    {
      titulo: "¡EL EXCHANGE MÁS GRANDE DEL MUNDO TE DIO RT!",
      icono: "💎",
      desc: "La cuenta oficial del mayor exchange global compartió tu gráfico de ciclos de mercado como referencia oficial.",
      efectos: { segsPct: 0.19, engagement: 85, viralidad: 28 }
    }
  ],
  techie: [
    {
      titulo: "¡EL CREADOR DEL FRAMEWORK TOP TE DIO RT!",
      icono: "💻",
      desc: "El creador del framework web más usado de la industria compartió tu hilo técnico elogiando la solución que propusiste.",
      efectos: { segsPct: 0.19, engagement: 85, viralidad: 25 }
    },
    {
      titulo: "¡EL CEO DE UNA BIG TECH CITÓ TU POSTEO!",
      icono: "⚡",
      desc: "El CEO de una multinacional de Silicon Valley citó tu tweet diciendo: 'This is the future of software infrastructure.'",
      efectos: { segsPct: 0.22, engagement: 95, viralidad: 30 }
    }
  ],
  gamer: [
    {
      titulo: "¡EL PRO PLAYER DEL MOMENTO TE RETWEITEÓ!",
      icono: "🎮",
      desc: "El último campeón mundial de esports reposteó tu clip de ranked diciendo: 'Qué locura de jugada, hermano.'",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 25 }
    },
    {
      titulo: "¡LA CUENTA OFICIAL DEL JUEGO TE CITÓ!",
      icono: "🔥",
      desc: "La cuenta oficial del desarrollador citó tu clip con un emoji de fuego y lo puso de portada comunitaria.",
      efectos: { segsPct: 0.21, engagement: 92, viralidad: 28 }
    }
  ],
  onlyfans: [
    {
      titulo: "¡UNA ESTRELLA INTERNACIONAL DEL RUBRO TE CITÓ!",
      icono: "🔞",
      desc: "Una de las modelos más reconocidas del mundo reposteó tu contenido elogiando tu estética y tu profesionalismo.",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 30 }
    },
    {
      titulo: "¡UN FOTÓGRAFO CONSAGRADO TE DIO RETWEET!",
      icono: "📸",
      desc: "Un prestigioso fotógrafo de moda de renombre internacional elogió la dirección de arte de tus producciones.",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 22 }
    }
  ],
  influencer: [
    {
      titulo: "¡UNA SUPERMODELO INTERNACIONAL TE REPOSTEÓ!",
      icono: "✨",
      desc: "Una de las top models más cotizadas de las pasarelas compartió tu tip de estética con sus millones de seguidores.",
      efectos: { segsPct: 0.22, engagement: 95, viralidad: 30 }
    },
    {
      titulo: "¡UNA MARCA DE LUJO CITÓ TU PUBLICACIÓN!",
      icono: "💄",
      desc: "Una prestigiosa firma europea de moda citó tu foto diciendo: 'Pura elegancia contemporánea.'",
      efectos: { segsPct: 0.19, engagement: 88, viralidad: 25 }
    }
  ],
  humor: [
    {
      titulo: "¡EL CAPOCÓMICO MÁS RESPETADO TE DIO RT!",
      icono: "😂",
      desc: "El humorista más querido y respetado del país reposteó tu chiste confesando que lloró de la risa.",
      efectos: { segsPct: 0.22, engagement: 95, viralidad: 30 }
    },
    {
      titulo: "¡UN GUIONISTA ESTRELLA CITÓ TU REMATE!",
      icono: "🎭",
      desc: "El guionista de comedia más premiado de la televisión citó tu tweet diciendo: 'Ojalá se me hubiera ocurrido a mí.'",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 24 }
    }
  ],
  periodista: [
    {
      titulo: "¡EL DIRECTOR DE UN DIARIO HISTÓRICO CITÓ TU PRIMICIA!",
      icono: "📰",
      desc: "El director del diario de mayor tirada del país levantó tu investigación y la catalogó de primicia del año.",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 25 }
    },
    {
      titulo: "¡UN CORRESPONSAL INTERNACIONAL TE RETWEITEÓ!",
      icono: "🌍",
      desc: "Un célebre corresponsal de guerra avaló públicamente el rigor y la veracidad de tus fuentes.",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 22 }
    }
  ],
  opinologo: [
    {
      titulo: "¡EL RECTOR DE UNA UNIVERSIDAD CITÓ TU ENSAYO!",
      icono: "🧐",
      desc: "El decano de ciencias sociales citó tu hilo recomendándolo como lectura indispensable para sus alumnos.",
      efectos: { segsPct: 0.19, engagement: 88, viralidad: 24 }
    },
    {
      titulo: "¡UN INTELECTUAL CONSAGRADO TE DIO RETWEET!",
      icono: "📚",
      desc: "Uno de los ensayistas más leídos de habla hispana compartió tu hilo diciendo: 'La única lectura lúcida de la semana.'",
      efectos: { segsPct: 0.20, engagement: 90, viralidad: 26 }
    }
  ],
  conspiranoico: [
    {
      titulo: "¡UN EX AGENTE DE INTELIGENCIA TE DIO RT!",
      icono: "🛸",
      desc: "Una cuenta atribuida a un ex analista de inteligencia reposteó tu teoría con un inquietante 'Sin comentarios.'",
      efectos: { segsPct: 0.21, engagement: 92, viralidad: 28 }
    },
    {
      titulo: "¡UN DOCUMENTALISTA DE CULTO CITÓ TU HILO!",
      icono: "👁️",
      desc: "El director del documental conspirativo más visto de internet citó tu publicación diciendo: 'Están muy cerca.'",
      efectos: { segsPct: 0.19, engagement: 88, viralidad: 25 }
    }
  ],
  podcaster: [
    {
      titulo: "¡EL PODCASTER #1 DEL CONTINENTE TE DIO RETWEET!",
      icono: "🎙️",
      desc: "El anfitrión del podcast más escuchado de la región compartió tu clip preguntando cuándo coordinan un mano a mano.",
      efectos: { segsPct: 0.21, engagement: 92, viralidad: 28 }
    },
    {
      titulo: "¡UN PRODUCTOR HISTÓRICO CITÓ TU EPISODIO!",
      icono: "🎧",
      desc: "El productor estrella de medios masivos citó tu fragmento catalogándote como la revelación radial del año.",
      efectos: { segsPct: 0.18, engagement: 85, viralidad: 24 }
    }
  ]
};

const FAMOSO_RETWEET_DATA = FAMOSO_VIP_GENERALES[0];

// ── 3. CAMBIOS EN EL ALGORITMO (Bonus / Malus de Monetización) ──
const ALGORITMO_EVENT_DATA = {
  titulo: "CAMBIOS EN EL ALGORITMO DE X",
  icono: "⚡",
  positivo: {
    titulo: "EL ALGORITMO TE BENDICE (x2 INGRESOS)",
    desc: "Los ingenieros de la plataforma modificaron los pesos del feed 'Para Ti' y tu cuenta quedó catalogada como contenido de alto valor.",
    multIngresos: 2.0
  },
  negativo: {
    titulo: "SHADOWBAN DEL ALGORITMO (x0.5 INGRESOS)",
    desc: "Una actualización silenciosa del algoritmo hundió el alcance de tu perfil por presunto spam o exceso de controversia.",
    multIngresos: 0.5
  }
};


/* ?? M?DULO: content/events/super-habilidades.js ?? */
// super-habilidades-content.js
// 24 super habilidades (2 por arquetipo, pool del cual el motor sortea 1 por partida).
// Plantilla de balance (ver sección 19 del documento de mecánica): base Seguidores +18.000,
// Engagement +150, más un extra según sabor narrativo:
//   - tipo "prediccion": Credibilidad +20 (acertó algo antes que nadie, construye autoridad)
//   - tipo "viral": Viralidad +20 (explotó por exposición, no por mérito analítico)
//   - tipo "comercial": Dinero +2000 adicional (hay un componente de plata de por medio)
// Cada evento dispara además el modal de aviso (sección 3.7 del documento de UX/UI).

const superHabilidadesContent = {

  opinologo: [
    {
      titulo: "El que ya lo sabía",
      texto: "Un avión se cae en algún lugar del mundo. Vos ya tenías un hilo armado sobre la causa antes de que saliera el informe oficial — y acertaste.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    },
    {
      titulo: "Te lo dije",
      texto: "Un mes antes de que estalle una guerra, publicaste que iba a pasar. Cuando pasa, te citás a vos mismo y el timeline entero te redescubre.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  futbolero: [
    {
      titulo: "Me citó un jugador de la Selección",
      texto: "Un jugador de la Selección hace quote tweet de tu publicación. No hiciste nada especial ese día — solo tuviste la suerte de que él lo vea.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "El resultado exacto",
      texto: "Publicaste el resultado exacto de un partido importante antes de que arranque. Cuando termina el partido, tu tweet es printeado por todo el mundo.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  militante: [
    {
      titulo: "El aval de mi espacio",
      texto: "Un político de tu espacio te cita, validando públicamente lo que venís diciendo hace tiempo. Tu gente se multiplica de golpe.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "Legitimidad inesperada",
      texto: "Un periodista serio cita tu tweet como parte de su cobertura. De repente sos una fuente, no solo un militante más.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  humor: [
    {
      titulo: "Se me fue de las manos",
      texto: "Un tweet tuyo se vuelve viral sin ningún control. Ni vos entendés bien por qué explotó tanto, pero ahí está, en todos lados.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "Mi quote pegó más que el original",
      texto: "Le hacés un quote tweet a otra cuenta y tu comentario termina viralizándose más que el tweet que citaste.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    }
  ],

  periodista: [
    {
      titulo: "La primicia",
      texto: "Conseguís una filtración exclusiva y publicás un hilo de investigación que rompe la noticia antes que cualquier medio tradicional.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    },
    {
      titulo: "Citado como fuente",
      texto: "Un medio grande retoma tu hilo de investigación y te cita como fuente en su propia cobertura.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  cryptobro: [
    {
      titulo: "Lo vi venir",
      texto: "Predijiste que una acción o token se iba a disparar. Se dispara. Ahora sos, para bien o para mal, un gurú financiero.",
      tipo: "comercial",
      efectos: { seguidores: 18000, engagement: 150, dinero: 2000 }
    },
    {
      titulo: "Mi recomendación explotó",
      texto: "Un token que recomendaste públicamente se dispara de la nada. No importa si fue mérito tuyo o casualidad — te lo llevás igual.",
      tipo: "comercial",
      efectos: { seguidores: 18000, engagement: 150, dinero: 2000 }
    }
  ],

  gamer: [
    {
      titulo: "Me hizo raid",
      texto: "Un streamer mucho más grande que vos le hace raid a tu canal — toda su audiencia aparece de golpe en la tuya.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "Lo filtré antes que nadie",
      texto: "Filtrás (o adivinás) el anuncio de un juego o consola grande antes que cualquier otro medio de la escena gaming.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  conspiranoico: [
    {
      titulo: "Tenía razón",
      texto: "Un hilo tuyo sobre una teoría que sonaba descabellada termina confirmándose parcialmente por un hecho real. La gente no lo puede creer.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    },
    {
      titulo: "Conecté los puntos primero",
      texto: "Tu hilo conecta las piezas de un escándalo real antes de que los medios se den cuenta de que existe.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  influencer: [
    {
      titulo: "Código exclusivo",
      texto: "Una marca te manda un código de descuento exclusivo para compartir con tu audiencia. Todos lo quieren.",
      tipo: "comercial",
      efectos: { seguidores: 18000, engagement: 150, dinero: 2000 }
    },
    {
      titulo: "Invitación VIP",
      texto: "Te invitan a un evento exclusivo de una marca grande. Lo cubrís en vivo y tu audiencia se multiplica con el glamour.",
      tipo: "comercial",
      efectos: { seguidores: 18000, engagement: 150, dinero: 2000 }
    }
  ],

  onlyfans: [
    {
      titulo: "Alguien salió a defenderme",
      texto: "Tras un escándalo moral, una cuenta grande sale públicamente a defenderte. El respaldo te trae más gente de la que esperabas.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "Efecto Streisand",
      texto: "Tu contenido se filtra gratis y, en vez de perjudicarte, se viraliza fuera de todo control. Cuanto más intentan bajarlo, más se comparte.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    }
  ],

  techie: [
    {
      titulo: "El producto pegó",
      texto: "Lanzás un producto que se vuelve viral dentro de la comunidad tech. De la noche a la mañana sos el founder del que todos hablan.",
      tipo: "comercial",
      efectos: { seguidores: 18000, engagement: 150, dinero: 2000 }
    },
    {
      titulo: "Me validó un inversor grande",
      texto: "Un inversor o figura reconocida del mundo tech te hace quote tweet, validando tu trabajo frente a todo el ecosistema.",
      tipo: "prediccion",
      efectos: { seguidores: 18000, engagement: 150, credibilidad: 20 }
    }
  ],

  podcaster: [
    {
      titulo: "La entrevista bomba",
      texto: "Conseguís una entrevista con una figura muchísimo más grande de lo esperable, y encima te sale bien.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    },
    {
      titulo: "El clip que se escapó",
      texto: "Un clip corto de tu podcast se viraliza fuera de tu audiencia habitual, llegando a gente que nunca había escuchado el programa.",
      tipo: "viral",
      efectos: { seguidores: 18000, engagement: 150, viralidad: 20 }
    }
  ]

};


/* ?? M?DULO: content/events/viral-events.js ?? */
// eventos-varios-content.js
// Contenido de: gastos especiales de arquetipo (12), evento "Pelea post-hilo" (2 variantes),
// y pool de "Viralización extrema" (3 disparadores).

// ─────────────────────────────────────────────────────────────
// GASTOS ESPECIALES DE ARQUETIPO
// Mecánica (sección 9.3 del documento de mecánica): siempre cuesta dinero,
// 50% alta ganancia / 50% fallo (pierde la plata + baja viralidad).
// Costo de entrada y ganancia en caso de éxito varían por arquetipo, pero
// mantienen la misma proporción: ganancia ≈ 3x el costo apostado.
// ─────────────────────────────────────────────────────────────

const gastosEspecialesContent = {

  opinologo: {
    titulo: "Invertir en mi propio medio de opinión",
    texto: "Ponés plata para lanzar un boletín pago con tus columnas. Si prende, es un ingreso fijo; si no, quedaste pagando un sitio que nadie lee.",
    costo: 800,
    gananciaExito: 2400,
    penalizacionFallo: { viralidad: -15 }
  },

  futbolero: {
    titulo: "Comprar entradas para hacer contenido en la cancha",
    texto: "Invertís en entradas de platea para cubrir un partido importante en vivo, apostando a que el contenido se viralice.",
    costo: 700,
    gananciaExito: 2100,
    penalizacionFallo: { viralidad: -15 }
  },

  militante: {
    titulo: "Financiar una campaña de difusión",
    texto: "Ponés plata propia para amplificar un mensaje político puntual, apostando a que el impacto justifique el gasto.",
    costo: 900,
    gananciaExito: 2700,
    penalizacionFallo: { viralidad: -15 }
  },

  humor: {
    titulo: "Producir un sketch con actores contratados",
    texto: "En vez de un meme casero, invertís en producción real para un sketch más elaborado.",
    costo: 600,
    gananciaExito: 1800,
    penalizacionFallo: { viralidad: -15 }
  },

  periodista: {
    titulo: "Financiar una investigación propia",
    texto: "Ponés plata de tu bolsillo para viajar, pagar fuentes o acceder a documentos de una investigación que nadie más está cubriendo.",
    costo: 850,
    gananciaExito: 2550,
    penalizacionFallo: { viralidad: -15 }
  },

  cryptobro: {
    titulo: "Invertir en un token nuevo",
    texto: "Metés plata en un proyecto cripto que recién arranca, confiando en tu propio olfato.",
    costo: 1000,
    gananciaExito: 3000,
    penalizacionFallo: { viralidad: -15 },
    usosPorPartida: 2
  },

  gamer: {
    titulo: "Comprar equipamiento de streaming premium",
    texto: "Invertís en cámara, luces y setup nuevo, apostando a que la mejora en producción se traduzca en más audiencia.",
    costo: 750,
    gananciaExito: 2250,
    penalizacionFallo: { viralidad: -15 }
  },

  conspiranoico: {
    titulo: "Financiar mi propia investigación independiente",
    texto: "Ponés plata para conseguir documentos o testimonios que sustenten tu próxima teoría.",
    costo: 800,
    gananciaExito: 2400,
    penalizacionFallo: { viralidad: -15 }
  },

  influencer: {
    titulo: "Gastar en un spa/hotel de lujo para el contenido",
    texto: "Te vas a un lugar caro solo para generar contenido aspiracional, apostando a que valga la pena la inversión.",
    costo: 900,
    gananciaExito: 2700,
    penalizacionFallo: { viralidad: -15 },
    usosPorPartida: 2
  },

  onlyfans: {
    titulo: "Invertir en producción de contenido premium",
    texto: "Ponés plata en un set, vestuario o producción de mayor calidad para una tanda especial de contenido.",
    costo: 850,
    gananciaExito: 2550,
    penalizacionFallo: { viralidad: -15 },
    usosPorPartida: 2
  },

  techie: {
    titulo: "Invertir en marketing para mi producto",
    texto: "Ponés presupuesto propio en promocionar tu producto o startup, apostando a que la inversión se traduzca en tracción real.",
    costo: 1000,
    gananciaExito: 3000,
    penalizacionFallo: { viralidad: -15 },
    usosPorPartida: 2
  },

  podcaster: {
    titulo: "Pagar por un invitado grande",
    texto: "Ofrecés plata para conseguir un invitado fuera de tu alcance habitual, apostando a que la entrevista valga la inversión.",
    costo: 900,
    gananciaExito: 2700,
    penalizacionFallo: { viralidad: -15 },
    usosPorPartida: 2
  }

};

// ─────────────────────────────────────────────────────────────
// EVENTO CAUSAL "PELEA POST-HILO"
// Disparador (sección 9.1): 2 hilos jugados seguidos → peso de Pelea ×5
// en el sorteo del turno siguiente. Balanza de puntos ya cerrada decide
// cuál de las 2 variantes sale.
// ─────────────────────────────────────────────────────────────

const peleaPostHiloContent = {

  variantePersonal: {
    titulo: "Un colega te desafía",
    texto: "Un usuario que se presenta como experto en el tema responde tu hilo línea por línea, cuestionando cada afirmación. \"Esto tiene varios errores de base, te lo explico si querés.\"",
    engagement: 25,
    hate: 30
  },

  varianteTroll: {
    titulo: "Te citan y te dicen nerd",
    texto: "Un troll cita tu hilo entero con un solo comentario: \"nadie leyó esto, nerd.\" El quote tiene más interacciones que tu hilo original.",
    engagement: 15,
    hate: 45
  }

};

// ─────────────────────────────────────────────────────────────
// POOL DE "VIRALIZACIÓN EXTREMA"
// Nivel 1 (sección 9.5): +250.000 seguidores, +$15.000. Se chequean los
// 3 disparadores por turno desde Seguidores≥20.000, 2.5% de probabilidad
// total repartida entre los 3.
// Nivel 2: solo disponible tras el nivel 1, +$30.000 y salto directo por
// encima de 1.000.000 de seguidores, 1.5% de probabilidad por turno.
// ─────────────────────────────────────────────────────────────

const viralizacionExtremaContent = {

  nivel1: [
    {
      id: "vida_fuera_mega_exito",
      titulo: "Tu programa explotó",
      texto: "El programa que armaste dentro de \"La vida fuera de Twitter\" tiene un capítulo que se viraliza mucho más allá de tu audiencia habitual. De la noche a la mañana, todo el país te conoce.",
      efectos: { seguidores: 250000, dinero: 15000 }
    },
    {
      id: "quote_magnate",
      titulo: "Te citó el dueño de la plataforma",
      texto: "Un magnate tecnológico excéntrico, dueño de media internet, cita tu tweet sin ningún motivo aparente. No hiciste nada para provocarlo — simplemente lo vio.",
      efectos: { seguidores: 250000, dinero: 15000 }
    },
    {
      id: "algoritmo_favor",
      titulo: "El algoritmo te sonrió",
      texto: "De la nada, la plataforma empieza a mostrar tu contenido a una escala que nunca habías visto. Nadie sabe bien por qué — ni vos.",
      efectos: { seguidores: 250000, dinero: 15000 }
    }
  ],

  nivel2: {
    id: "fenomeno_mundial",
    titulo: "Fenómeno mundial",
    texto: "Lo que empezó como una viralización puntual no para de crecer. Medios de todo el mundo hablan de vos. Cruzaste una barrera que muy pocos cruzan.",
    efectos: { seguidoresMinimo: 1000000, dinero: 30000 }
  }

};


/* ?? M?DULO: src/audio/sound-engine.js ?? */
/* ???????????????????????????????????????????????????????
   Twitero v15 ? src/audio/sound-engine.js
   Sintetizador Web Audio API realista (card flip con ruido blanco filtrado, dados, clics)
   ??????????????????????????????????????????????????????? */

class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  _go() {
    try {
      if (!this.ctx) {
        const A = window.AudioContext || window.webkitAudioContext;
        this.ctx = A ? new A() : null;
      }
      if (this.ctx?.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
    } catch(e) {}
  }

  _note(f, type, dur, vol=0.13, d=0) {
    if(!this.ctx) return;
    try {
      const t = this.ctx.currentTime + d;
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(t);
      o.stop(t + dur);
    } catch(e) {}
  }

  click() {
    this._go();
    this._note(750, "sine", 0.04, 0.08);
  }

  // ?? SONIDO DE NAIPE / PAPEL REALISTA (Ruido blanco breve con filtro paso banda) ??
  cardFlip(i = 0) {
    this._go();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      // Buffer de ruido blanco
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.07); // 70ms
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      // Filtro paso banda para darle textura de papel/cartulina desliz?ndose
      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1400 + i * 180, t);
      filter.Q.setValueAtTime(2.2, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.065);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(t);

      // Micro chasquido sutil de naipe
      this._note(520 + i * 50, "sine", 0.03, 0.04, 0.01);
    } catch(e) {
      // Fallback arm?nico si el buffer falla
      this._note(480 + i * 60, "triangle", 0.05, 0.07);
    }
  }

  roll() {
    this._go();
    for (let i = 0; i < 5; i++) {
      this._note(120 + i * 30, "triangle", 0.05, 0.09, i * 0.06);
    }
  }

  success() {
    this._go();
    [524, 659, 784, 1046].forEach((f, i) => this._note(f, "sine", 0.28, 0.16, i * 0.08));
  }

  fail() {
    this._go();
    this._note(220, "sawtooth", 0.16, 0.18);
    this._note(145, "sawtooth", 0.14, 0.14, 0.15);
  }

  alert() {
    this._go();
    [660, 880, 1100].forEach((f, i) => this._note(f, "square", 0.11, 0.14, i * 0.09));
  }

  boost() {
    this._go();
    [330, 440, 550, 660, 880].forEach((f, i) => this._note(f, "sine", 0.14, 0.16, i * 0.045));
  }

  legend() {
    this._go();
    [440, 554, 659, 880, 1108, 1318].forEach((f, i) => this._note(f, "triangle", 0.38, 0.20, i * 0.08));
  }

  // ── Feed scroll sound (Opción 2: Soft Air Whoosh) ──
  tick(speed = 1) {
    this._go();
    if (!this.ctx) return;
    try {
      const c = this.ctx;
      const t = c.currentTime;
      const bSize = Math.floor(c.sampleRate * 0.04);
      const buf = c.createBuffer(1, bSize, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let j = 0; j < bSize; j++) data[j] = Math.random() * 2 - 1;
      const noise = c.createBufferSource();
      noise.buffer = buf;

      const flt = c.createBiquadFilter();
      flt.type = "bandpass";
      flt.frequency.setValueAtTime(1800 + Math.random() * 400, t);
      flt.Q.setValueAtTime(1.4, t);

      const g = c.createGain();
      g.gain.setValueAtTime(0.13, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.038);

      noise.connect(flt);
      flt.connect(g);
      g.connect(c.destination);
      noise.start(t);
    } catch(e) {}
  }

  clunk() {
    this._go();
    this._note(140, "triangle", 0.08, 0.18);
    this._note(80, "sine", 0.12, 0.22, 0.02);
  }

  ding(index = 0) {
    this._go();
    const freqs = [587.33, 739.99, 880.00]; // D5, F#5, A5 (major triad)
    const f = freqs[index % freqs.length] || 880;
    this._note(f, "sine", 0.25, 0.18);
    this._note(f * 2, "sine", 0.18, 0.06, 0.02); // shimmer
  }

  metricFail(index = 0) {
    this._go();
    const freqs = [220, 196, 164]; // descending minor
    const f = freqs[index % freqs.length] || 180;
    this._note(f, "sawtooth", 0.12, 0.12);
  }
}

const snd = new SoundEngine();


/* ?? M?DULO: src/core/game-engine.js ?? */
/* Twitero v15 — src/core/game-engine.js */

function getArchKey(archId) {
  return archId;
}

function adaptTweetGender(texto, genero) {
  if (!texto || typeof texto !== "string") return texto;
  let t = texto;
  if (genero === "hombre") {
    t = t.replace(/\ba todas\b/gi, "a todos")
         .replace(/\bcreadoras\b/gi, "creadores")
         .replace(/\buna creadora\b/gi, "un creador")
         .replace(/\ba las que\b/gi, "a los que")
         .replace(/\bcon las chicas\b/gi, "con los modelos")
         .replace(/\bchicas,\b/gi, "gente,")
         .replace(/\bacompañada\b/gi, "acompañado")
         .replace(/\bcansada\b/gi, "cansado")
         .replace(/\bpreparada\b/gi, "preparado")
         .replace(/\bcancelada\b/gi, "cancelado")
         .replace(/\bestoy lista\b/gi, "estoy listo")
         .replace(/\bbienvenida\b/gi, "bienvenido")
         .replace(/\bamiga\b/gi, "amigo")
         .replace(/\bamigas\b/gi, "amigos")
         .replace(/\bla única\b/gi, "el único")
         .replace(/\bcomo creadora\b/gi, "como creador")
         .replace(/\bauténtica\b/gi, "auténtico")
         .replace(/\btranquila\b/gi, "tranquilo")
         .replace(/\bsegura\b/gi, "seguro")
         .replace(/\brelajada\b/gi, "relajado")
         .replace(/\borgullosa\b/gi, "orgulloso")
         .replace(/\bagradecida\b/gi, "agradecido")
         .replace(/\bpolitóloga\b/gi, "politólogo")
         .replace(/\bciudadana\b/gi, "ciudadano")
         .replace(/\bsocia\b/gi, "socio")
         .replace(/\bfanática\b/gi, "fanático")
         .replace(/\bprogramadora\b/gi, "programador")
         .replace(/\bopinóloga\b/gi, "opinólogo")
         .replace(/\bexperta\b/gi, "experto")
         .replace(/\bharta\b/gi, "harto")
         .replace(/\bindignada\b/gi, "indignado")
         .replace(/\bengañada\b/gi, "engañado")
         .replace(/\bestafada\b/gi, "estafado")
         .replace(/\bobsesionada\b/gi, "obsesionado")
         .replace(/\bdesesperada\b/gi, "desesperado")
         .replace(/\bdesquiciada\b/gi, "desquiciado")
         .replace(/\bnacida\b/gi, "nacido")
         .replace(/\bconvencida\b/gi, "convencido")
         .replace(/\bsorprendida\b/gi, "sorprendido")
         .replace(/\bfutbolera\b/gi, "futbolero");
  } else if (genero === "mujer") {
    t = t.replace(/\ba todos\b/gi, "a todas")
         .replace(/\bcreadores\b/gi, "creadoras")
         .replace(/\bun creador\b/gi, "una creadora")
         .replace(/\ba los que\b/gi, "a las que")
         .replace(/\bacompañado\b/gi, "acompañada")
         .replace(/\bcansado\b/gi, "cansada")
         .replace(/\bpreparado\b/gi, "preparada")
         .replace(/\bcancelado\b/gi, "cancelada")
         .replace(/\bestoy listo\b/gi, "estoy lista")
         .replace(/\bbienvenido\b/gi, "bienvenida")
         .replace(/\bamigo\b/gi, "amiga")
         .replace(/\bamigos\b/gi, "amigas")
         .replace(/\bel único\b/gi, "la única")
         .replace(/\bcomo creador\b/gi, "como creadora")
         .replace(/\bauténtico\b/gi, "auténtica")
         .replace(/\btranquilo\b/gi, "tranquila")
         .replace(/\bseguro\b/gi, "segura")
         .replace(/\brelajado\b/gi, "relajada")
         .replace(/\borgulloso\b/gi, "orgullosa")
         .replace(/\bagradecido\b/gi, "agradecida")
         .replace(/\bpolitólogo\b/gi, "politóloga")
         .replace(/\bciudadano\b/gi, "ciudadana")
         .replace(/\bsocio\b/gi, "socia")
         .replace(/\bfanático\b/gi, "fanática")
         .replace(/\bprogramador\b/gi, "programadora")
         .replace(/\bopinólogo\b/gi, "opinóloga")
         .replace(/\bexperto\b/gi, "experta")
         .replace(/\bharto\b/gi, "harta")
         .replace(/\bindignado\b/gi, "indignada")
         .replace(/\bengañado\b/gi, "engañada")
         .replace(/\bestafado\b/gi, "estafada")
         .replace(/\bobsesionado\b/gi, "obsesionada")
         .replace(/\bdesesperado\b/gi, "desesperada")
         .replace(/\bdesquiciado\b/gi, "desquiciada")
         .replace(/\bnacido\b/gi, "nacida")
         .replace(/\bconvencido\b/gi, "convencida")
         .replace(/\bsorprendido\b/gi, "sorprendida")
         .replace(/\bcondenado\b/gi, "condenada")
         .replace(/\bcondenados\b/gi, "condenadas")
         .replace(/\bfutbolero\b/gi, "futbolera");
  } else if (genero === "diverso") {
    t = t.replace(/\ba todas\b|\ba todos\b/gi, "a todes")
         .replace(/\bcreadoras\b|\bcreadores\b/gi, "creadorxs")
         .replace(/\buna creadora\b|\bun creador\b/gi, "une creadorx")
         .replace(/\ba las que\b|\ba los que\b/gi, "a les que")
         .replace(/\bchicas,\b|\bchicos,\b/gi, "chiques,")
         .replace(/\bacompañada\b|\bacompañado\b/gi, "acompañade")
         .replace(/\bcansada\b|\bcansado\b/gi, "cansade")
         .replace(/\bpreparada\b|\bpreparado\b/gi, "preparade")
         .replace(/\bcancelada\b|\bcancelado\b/gi, "cancelade")
         .replace(/\bestoy lista\b|\bestoy listo\b/gi, "estoy liste")
         .replace(/\bbienvenida\b|\bbienvenido\b/gi, "bienvenide")
         .replace(/\bamiga\b|\bamigo\b/gi, "amigue")
         .replace(/\bamigas\b|\bamigos\b/gi, "amigues")
         .replace(/\bla única\b|\bel único\b/gi, "le únique")
         .replace(/\bcomo creadora\b|\bcomo creador\b/gi, "como creadorx")
         .replace(/\bauténtica\b|\bauténtico\b/gi, "auténtique")
         .replace(/\btranquila\b|\btranquilo\b/gi, "tranquile")
         .replace(/\bsegura\b|\bseguro\b/gi, "segure")
         .replace(/\brelajada\b|\brelajado\b/gi, "relajade")
         .replace(/\borgullosa\b|\borgulloso\b/gi, "orgullose")
         .replace(/\bagradecida\b|\bagradecido\b/gi, "agradecide")
         .replace(/\bpolitólogo\b|\bpolitóloga\b/gi, "politólogue")
         .replace(/\bmilitante político\b|\bmilitante política\b/gi, "militante políticx")
         .replace(/\bciudadano\b|\bciudadana\b/gi, "ciudadane")
         .replace(/\bsocio\b|\bsocia\b/gi, "socie")
         .replace(/\bfanático\b|\bfanática\b/gi, "fanátique")
         .replace(/\bprogramador\b|\bprogramadora\b/gi, "programadore")
         .replace(/\bopinólogo\b|\bopinóloga\b/gi, "opinólogue")
         .replace(/\bexperto\b|\bexperta\b/gi, "experte")
         .replace(/\bharto\b|\bharta\b/gi, "harte")
         .replace(/\bindignado\b|\bindignada\b/gi, "indignade")
         .replace(/\bengañado\b|\bengañada\b/gi, "engañade")
         .replace(/\bestafado\b|\bestafada\b/gi, "estafade")
         .replace(/\bobsesionado\b|\bobsesionada\b/gi, "obsesionade")
         .replace(/\bdesesperado\b|\bdesesperada\b/gi, "desesperade")
         .replace(/\bdesquiciado\b|\bdesquiciada\b/gi, "desquiciade")
         .replace(/\bnacido\b|\bnacida\b/gi, "nacide")
         .replace(/\bconvencido\b|\bconvencida\b/gi, "convencide")
         .replace(/\bsorprendido\b|\bsorprendida\b/gi, "sorprendide")
         .replace(/\bfutbolero\b|\bfutbolera\b/gi, "futbolere")
         .replace(/\bcrypto bro\b|\bcrypto girl\b/gi, "Crypto X")
         .replace(/\bstartup bro\b|\bstartup girl\b/gi, "Techie X")
         .replace(/\bcreador onlyfans\b|\bcreadora onlyfans\b/gi, "creadorx OnlyFans")
         .replace(/\bél mismo\b|\bella misma\b/gi, "elle mismx")
         .replace(/\bél\b|\bella\b/gi, "elle")
         .replace(/\bun tuitero\b|\buna tuitera\b/gi, "une tuitere")
         .replace(/\bel tuitero\b|\bla tuitera\b/gi, "le tuitere");
  }
  return t;
}

const FINALE_GENDER_TITLES = {
  // Combos
  "combo_humor_troll": { hombre: "EL REY DEL BARDO", mujer: "LA REINA DEL BARDO", diverso: "LE MONARCA DEL BARDO" },
  "combo_influencer_wholesome": { hombre: "LA BURBUJA DE CRISTAL", mujer: "LA BURBUJA DE CRISTAL", diverso: "LA BURBUJA DE CRISTAL" },
  "combo_militante_troll": { hombre: "EL GUERRERO DIGITAL", mujer: "LA GUERRERA DIGITAL", diverso: "LE GUERRERE DIGITAL" },
  "combo_crypto_info": { hombre: "EL GURÚ VERIFICADO", mujer: "LA GURÚ VERIFICADA", diverso: "LE GURÚ VERIFICADE" },
  "combo_conspira_wholesome": { hombre: "EL PROFETA GENTIL", mujer: "LA PROFETA GENTIL", diverso: "LE PROFETE GENTIL" },
  "combo_of_info": { hombre: "EL ACTIVISTA DIGITAL", mujer: "LA ACTIVISTA DIGITAL", diverso: "LE ACTIVISTE DIGITAL" },
  "combo_per_troll": { hombre: "EL CLICKBAITER DEFINITIVO", mujer: "LA CLICKBAITER DEFINITIVA", diverso: "LE CLICKBAITER DEFINITIVA" },
  "combo_gamer_info": { hombre: "EL CRÍTICO DE LA INDUSTRIA", mujer: "LA CRÍTICA DE LA INDUSTRIA", diverso: "LE CRÍTICE DE LA INDUSTRIA" },
  "combo_fut_wholesome": { hombre: "EL FANDOM SANO", mujer: "EL FANDOM SANO", diverso: "EL FANDOM SANO" },
  "combo_tech_troll": { hombre: "EL DISRUPTOR TÓXICO", mujer: "LA DISRUPTORA TÓXICA", diverso: "LE DISRUPTORE TÓXIQUE" },
  "combo_pod_gracioso": { hombre: "EL LATE NIGHT CRIOLLO", mujer: "EL LATE NIGHT CRIOLLO", diverso: "EL LATE NIGHT CRIOLLO" },
  "combo_opi_info": { hombre: "EL INTELECTUAL PÚBLICO", mujer: "LA INTELECTUAL PÚBLICA", diverso: "LE INTELECTUAL PÚBLIQUE" },
  "combo_humor_wholesome": { hombre: "EL CORAZÓN DEL TIMELINE", mujer: "EL CORAZÓN DEL TIMELINE", diverso: "EL CORAZÓN DEL TIMELINE" },
  "combo_conspira_troll": { hombre: "EL AGENTE DEL CAOS", mujer: "LA AGENTE DEL CAOS", diverso: "LE AGENTE DEL CAOS" },
  "combo_influencer_troll": { hombre: "LA SOMBRA DEL GLAM", mujer: "LA SOMBRA DEL GLAM", diverso: "LA SOMBRA DEL GLAM" },
  "combo_fut_troll": { hombre: "EL ULTRA DIGITAL", mujer: "LA ULTRA DIGITAL", diverso: "LE ULTRA DIGITAL" },
  "combo_militante_wholesome": { hombre: "EL MILITANTE DEL BIEN", mujer: "LA MILITANTE DEL BIEN", diverso: "LE MILITANTE DEL BIEN" },
  "combo_gamer_troll": { hombre: "EL FLAMER PROFESIONAL", mujer: "LA FLAMER PROFESIONAL", diverso: "LE FLAMER PROFESIONAL" },
  "combo_tech_wholesome": { hombre: "EL FUNDADOR ÉTICO", mujer: "LA FUNDADORA ÉTICA", diverso: "LE FUNDADORE ÉTIQUE" },
  "combo_pod_wholesome": { hombre: "EL CONFESOR DIGITAL", mujer: "LA CONFESORA DIGITAL", diverso: "LE CONFESORE DIGITAL" },
  "combo_of_troll": { hombre: "EL REY DE LAS CAPTURAS", mujer: "LA REINA DE LAS CAPTURAS", diverso: "LE MONARCA DE LAS CAPTURAS" },
  "combo_crypto_troll": { hombre: "EL DEGEN SUPREMO", mujer: "LA DEGEN SUPREMA", diverso: "LE DEGEN SUPREME" },
  "combo_conspira_gracioso": { hombre: "EL MEME DE LAS SOMBRAS", mujer: "EL MEME DE LAS SOMBRAS", diverso: "EL MEME DE LAS SOMBRAS" },
  "combo_opi_troll": { hombre: "EL INCENDIARIO SERIAL", mujer: "LA INCENDIARIA SERIAL", diverso: "LE INCENDIARIE SERIAL" },
  "combo_fut_info": { hombre: "EL PIZARRÓN TÁCTICO", mujer: "EL PIZARRÓN TÁCTICO", diverso: "EL PIZARRÓN TÁCTICO" },
  "combo_of_gracioso": { hombre: "EL REY DEL REMATE", mujer: "LA REINA DEL REMATE", diverso: "LE MONARCA DEL REMATE" },
  "combo_per_gracioso": { hombre: "EL CRONISTA ÁCIDO", mujer: "LA CRONISTA ÁCIDA", diverso: "LE CRONISTE ÁCIDE" },
  "combo_militante_gracioso": { hombre: "LA SÁTIRA POLÍTICA", mujer: "LA SÁTIRA POLÍTICA", diverso: "LA SÁTIRA POLÍTICA" },
  "combo_influencer_gracioso": { hombre: "EL INFLUENCER AUTÉNTICO", mujer: "LA INFLUENCER AUTÉNTICA", diverso: "LE INFLUENCER AUTÉNTIQUE" },
  "combo_conspira_info": { hombre: "EL ARCHIVISTA OCULTO", mujer: "LA ARCHIVISTA OCULTA", diverso: "LE ARCHIVISTE OCULTE" },

  // Generales
  "villano": { hombre: "EL VILLANO NECESARIO", mujer: "LA VILLANA NECESARIA", diverso: "LE VILLANE NECESARIE" },
  "idolo_caido": { hombre: "EL ÍDOLO CAÍDO", mujer: "LA ÍDOLA CAÍDA", diverso: "LE ÍDOLE CAÍDE" },
  "preferido": { hombre: "EL PREFERIDO DE TODOS", mujer: "LA PREFERIDA DE TODOS", diverso: "LE PREFERIDE DE TODES" },
  "comico": { hombre: "EL COMODÍN", mujer: "LA COMODÍN", diverso: "LE COMODÍN" },
  "autoridad": { hombre: "LA AUTORIDAD", mujer: "LA AUTORIDAD", diverso: "LA AUTORIDAD" },
  "triunfador": { hombre: "EL FENÓMENO DIGITAL", mujer: "EL FENÓMENO DIGITAL", diverso: "EL FENÓMENO DIGITAL" },
  "nicho": { hombre: "EL TWITTERO DE NICHO", mujer: "LA TWITTERA DE NICHO", diverso: "LE TWITTERE DE NICHO" },

  // Derrota
  "cancelacion_3strikes": { hombre: "CANCELADO POR 3 STRIKES", mujer: "CANCELADA POR 3 STRIKES", diverso: "CANCELADE POR 3 STRIKES" },
  "cancelacion_zonaroja": { hombre: "CANCELADO POR HOSTILIDAD EXTREMA", mujer: "CANCELADA POR HOSTILIDAD EXTREMA", diverso: "CANCELADE POR HOSTILIDAD EXTREMA" }
};

function getGenderedFinale(finale, genero) {
  if (!finale) return finale;
  const gen = genero || "hombre";
  const mapped = FINALE_GENDER_TITLES[finale.id];
  let titulo = finale.titulo;
  if (mapped && mapped[gen]) {
    titulo = mapped[gen];
  } else if (finale.titulo?.includes("CANCELADO")) {
    titulo = gen === "mujer" ? finale.titulo.replace("CANCELADO", "CANCELADA") : gen === "diverso" ? finale.titulo.replace("CANCELADO", "CANCELADE") : finale.titulo;
  }
  return { ...finale, titulo };
}

function rng(n) { return Math.floor(Math.random()*n); }


function formatMetric(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toLocaleString();
}

function formatEffectsText(efecto) {
  if (!efecto) return "";
  const parts = [];
  if (efecto.seguidores) {
    if (efecto.seguidores < 1 && efecto.seguidores > -1) {
      const pct = Math.round(efecto.seguidores * 100);
      parts.push(`👥 SEGUIDORES ${pct >= 0 ? '+' : ''}${pct}%`);
    } else {
      parts.push(`👥 SEGUIDORES ${efecto.seguidores >= 0 ? '+' : ''}${efecto.seguidores.toLocaleString()}`);
    }
  }
  if (efecto.credibilidad) parts.push(`📚 CREDIBILIDAD ${efecto.credibilidad >= 0 ? '+' : ''}${efecto.credibilidad}`);
  if (efecto.amor)         parts.push(`💜 AMOR ${efecto.amor >= 0 ? '+' : ''}${efecto.amor}`);
  if (efecto.odio)         parts.push(`❤️‍🔥 ODIO ${efecto.odio >= 0 ? '+' : ''}${efecto.odio}`);
  if (efecto.saludMental)  parts.push(`🧠 SALUD MENTAL ${efecto.saludMental >= 0 ? '+' : ''}${efecto.saludMental}%`);
  if (efecto.ingresos)     parts.push(`💰 DINERO +$${Math.round(efecto.ingresos * 1.2).toLocaleString()}`);
  return parts.join("  ·  ");
}

function pickUnusedItem(pool, usedSet) {
  if (!Array.isArray(pool) || pool.length === 0) return null;
  const set = usedSet || new Set();
  const available = pool.filter(item => {
    const txt = item.texto || item.titulo || item;
    return !set.has(txt);
  });
  if (available.length > 0) {
    const chosen = available[rng(available.length)];
    const txt = chosen.texto || chosen.titulo || chosen;
    set.add(txt);
    return chosen;
  }
  // Pool exhausted: cycle cleanly
  pool.forEach(item => {
    const txt = item.texto || item.titulo || item;
    set.delete(txt);
  });
  const chosen = pool[rng(pool.length)];
  const txt = chosen.texto || chosen.titulo || chosen;
  set.add(txt);
  return chosen;
}

function makeCardContent(id, archId, usedSet=null) {
  const key = getArchKey(archId);
  const set = usedSet || new Set();

  switch(id) {
    case "meme": {
      const pool = (memesContent[key] || memesContent.opinologo);
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: "Publicar meme viral",
        texto: item.titulo,
        narrativaExito: "El meme explotó en el feed de Para Ti. Miles de cuentas lo citaron con risas sin parar.",
        narrativaFallo: "Te respondieron 'borrá esto por favor' y te clavaron stickers de vergüenza ajena.",
        eng:(item.engagement||3)*14, hate:(item.hate||1)*8, amor:55, odioP:35, isPropio:true
      };
    }
    case "tema": {
      const propio = Math.random() > 0.28;
      if (propio) {
        const raw = temaPropioContent[key];
        const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Tweet de especialidad", texto:"Publicás sobre tu nicho.", engagement:45, hate:10 }];
        const item = pickUnusedItem(pool, set) || pool[0];
        return {
          titulo: item.titulo,
          texto: item.texto || item.titulo,
          narrativaExito: "Tu análisis pegó en el centro de la conversación. Colegas y seguidores celebran tu claridad.",
          narrativaFallo: "Tu postura no convenció a la comunidad y te criticaron por simplificar el debate.",
          eng: item.engagement||45, hate: item.hate||10, amor:75, odioP:20, isPropio:true
        };
      } else {
        const raw = temaAjenoContent[key];
        const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Tema ajeno", texto:"Opinás fuera de tu área.", engagement:15, hate:35 }];
        const item = pickUnusedItem(pool, set) || pool[0];
        return {
          titulo: item.titulo,
          texto: item.texto || item.titulo,
          paloOverride: { nombre: "FUERA DE TU NICHO", color: "#f97316", icono: "⚠️" },
          narrativaExito: "Sorprendiste a todos con un enfoque fresco y divertido fuera de tu tema habitual.",
          narrativaFallo: "Te mandaron a opinar de lo tuyo. La comunidad te castigó por tocar de oído.",
          eng: item.engagement||15, hate: item.hate||35, amor:20, odioP:75, isPropio:false
        };
      }
    }
    case "pelea": {
      const pool = peleaContent[key] || peleaContent.opinologo;
      const item = pickUnusedItem(pool, set) || pool[0];
      const rivalMeta = rivalTypes[item.rival] || rivalTypes.anonimo;
      const rivalNombre = item.rivalNombre || rivalMeta.nombre;

      return {
        titulo:`Pelea vs. ${rivalNombre}`,
        texto: item.texto,
        narrativaExito: "Twitter está de tu lado. El rival borró el tweet original y sus seguidores no supieron qué responder.",
        narrativaFallo: "Se te tiraron en contra los seguidores de su espacio y te llenaron las menciones de capturas viejas.",
        eng:rivalMeta.engagement*16, hate:rivalMeta.hate*14, amor:15, odioP:85
      };
    }
    case "hilo": {
      const raw = hiloContent[key];
      const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Hilo analítico", texto:"Análisis en profundidad.", engagement:55, hate:12 }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo,
        texto: item.texto || item.titulo,
        narrativaExito: "Cuentas verificadas y especialistas citaron tu hilo. Tu palabra es referencia en el nicho.",
        narrativaFallo: "Una cuenta técnica te desmintió con datos oficiales en el punto 3. Te llenaron de quotes marcando el error.",
        eng: item.engagement||60, hate: item.hate||12, amor:80, odioP:20
      };
    }
    case "quote": {
      const raw = quoteTweetContent[key];
      const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Quote polémico", texto:"Citás con intención.", engagement:35, hate:25 }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo,
        texto: item.texto || item.titulo,
        narrativaExito: "El remate del quote fue demoledor. Tu ratio superó al posteo original por 10 a 1.",
        narrativaFallo: "El quote no se entendió y quedaste como un resentido buscando interacción desesperada.",
        eng: item.engagement||40, hate: item.hate||25, amor:35, odioP:65
      };
    }
    case "live": {
      const raw = liveTweetContent[key];
      const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Live-tweet", texto:"En tiempo real.", engagement:45, hate:15 }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo,
        texto: item.texto || item.titulo,
        narrativaExito: "La transmisión en vivo concentró toda la atención de la noche. Fuiste la transmisión más citada.",
        narrativaFallo: "El vivo se cayó dos veces y tu cobertura quedó desfasada respecto a la primicia.",
        eng: item.engagement||50, hate: item.hate||15, amor:50, odioP:50
      };
    }
    case "temaDelDia": {
      const raw = temaDelDiaContent[key];
      const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Tema del día", texto:"Voy a opinar sobre lo que están hablando todos hoy. Abro paraguas.", engagement:42, hate:15 }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo,
        texto: item.texto || item.titulo,
        narrativaExito: "Clavaste la lectura exacta en el trending #1 del país. El algoritmo te empujó a miles de nuevos usuarios.",
        narrativaFallo: "Llegaste tarde a la tendencia y opinaste sin leer el contexto. Te tildaron de desinformador.",
        eng: item.engagement||48, hate: item.hate||15, amor:50, odioP:50
      };
    }
    case "politica": {
      const raw = politicaContent[key];
      const pool = Array.isArray(raw) ? raw : [raw || { titulo:"Postura política", texto:"Es increíble que a esta altura haya que explicar estas cosas obvias.", engagement:35, hate:35 }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo,
        texto: item.texto || item.titulo,
        narrativaExito: "Tu espacio político aplaude la firmeza de tu postura. Los contrarios no pudieron refutarte.",
        narrativaFallo: "Te llenaron las menciones de capturas viejas contradiciéndote. Tu nivel de Odio se disparó.",
        eng: item.engagement||40, hate: item.hate||35, amor:25, odioP:80
      };
    }
    case "bait": {
      const archBaits = (typeof baitContent !== 'undefined' && baitContent[key]) || [];
      const gens = (typeof generalBaits !== 'undefined') ? generalBaits : [];
      const pool = [...gens, ...archBaits];
      const item = pickUnusedItem(pool, set) || pool[0] || { titulo:"Bait masivo", texto:"¿Quién paga en la primera cita? Abro debate.", eng:65, hate:15, amor:20, odioP:50 };
      return {
        titulo: item.titulo,
        texto: item.texto,
        narrativaExito: "El bait funcionó a la perfección. Miles de usuarios se indignaron y te llenaron de citados desesperados.",
        narrativaFallo: "Te descubrieron la trampa al instante y te respondieron 'qué baitero barato, no caigan'.",
        eng: item.eng || 65, hate: item.hate || 15, amor: item.amor || 20, odioP: item.odioP || 50, isBait: true
      };
    }
    case "patrocinio": {
      const item = patrocinadoContent[key] || { titulo:"Tweet patrocinado", dinero:800, hate:20 };
      return {
        titulo: item.titulo,
        texto: "Gente, hace días vengo probando este producto y la verdad que lo recomiendo. En mi bio tienen código de descuento.",
        narrativaExito: "La publicidad se integró de forma orgánica y divertida. La marca quedó chocha y cobraste al instante.",
        narrativaFallo: "Se notó demasiado la venta desesperada y tus seguidores te acusaron de vendido.",
        eng:15, hate:item.hate||20, dineroExtra:(item.dinero||800)+200, amor:20, odioP:70
      };
    }
    case "descanso": {
      return {
        titulo: "Día de Desconexión",
        texto: "Gente, me voy a tomar el día offline. Mucha toxicidad hoy. Nos leemos mañana, pórtense bien.",
        narrativaExito: "Te desconectaste a tiempo. El timeline pasó a otro tema y recuperaste la paz mental.",
        narrativaFallo: "La tentación de mirar las menciones te ganó y volviste a entrar antes de tiempo.",
        eng: 0, hate: 0, amor: 30, odioP: 0, isPropio: true
      };
    }
    default:
      return {
        titulo:"Tweet de actualidad",
        texto:"Un poco de sentido común para mover este timeline dormido.",
        narrativaExito:"Buena tracción en el timeline.",
        narrativaFallo:"El tweet pasó casi desapercibido.",
        eng:25, hate:10, amor:50, odioP:50
      };
  }
}

const FINALES = [
  // ── 30 COMBOS ESPECÍFICOS (ARQUETIPO × PERSONALIDAD) ──
  { id:"combo_humor_troll", titulo:"EL REY DEL BARDO", icon:"🎭", sub:"El insulto como arte. Vive de la polémica disfrazada de chiste.", narrativa:"Convertiste el bardo en tu disciplina artística. Nadie sabe dónde termina el chiste y dónde empieza la provocación.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="humor"&&e.personalidad.id==="troll" },
  { id:"combo_influencer_wholesome", titulo:"LA BURBUJA DE CRISTAL", icon:"✨", sub:"Smoothies, velas y autenticidad 100% de diseño.", narrativa:"Construiste un paraíso estético impoluto. Vacío por dentro, pero adorado por cientos de miles de seguidores fieles.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="influencer"&&e.personalidad.id==="wholesome" },
  { id:"combo_militante_troll", titulo:"EL GUERRERO DIGITAL", icon:"🚩", sub:"La causa como bandera, el insulto como método.", narrativa:"Defendiste la trinchera a capa y espada. Bloqueaste a medio país pero tu núcleo duro te venera con fervor.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="militante"&&e.personalidad.id==="troll" },
  { id:"combo_crypto_info", titulo:"EL GURÚ VERIFICADO", icon:"📊", sub:"Análisis serio, datos on-chain y cero hype.", narrativa:"Un unicornio en el barro cripto: rigor, métricas y honestidad. Tu credibilidad vale más que un bitcoin entero.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="cryptobro"&&e.personalidad.id==="informativo" },
  { id:"combo_conspira_wholesome", titulo:"EL PROFETA GENTIL", icon:"🛸", sub:"Cree en todo pero con amor y sin agresividad.", narrativa:"Ves reptiles y conspiraciones globales en todos lados, pero le deseás paz, salud y luz a todo el mundo.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="conspiranoico"&&e.personalidad.id==="wholesome" },
  { id:"combo_of_info", titulo:"LA ACTIVISTA DIGITAL", icon:"🔞", sub:"Usa la plataforma para hablar de derechos y economía.", narrativa:"Descolocaste a la red entera combinando contenido para adultos con debates laborales, autonomía y sociología.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="onlyfans"&&e.personalidad.id==="informativo" },
  { id:"combo_per_troll", titulo:"EL CLICKBAITER DEFINITIVO", icon:"📰", sub:"El escándalo vende más que la verdad.", narrativa:"Aprendiste las reglas del algoritmo: la indignación garpa el triple que el rigor. Lograste números récord de lectura.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="periodista"&&e.personalidad.id==="troll" },
  { id:"combo_gamer_info", titulo:"EL CRÍTICO DE LA INDUSTRIA", icon:"🎮", sub:"Análisis de narrativa, estética y gameplay.", narrativa:"El anti-streamer por excelencia: no gritás ni hacés drama, solo diseccionás videojuegos con maestría y buen gusto.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="gamer"&&e.personalidad.id==="informativo" },
  { id:"combo_fut_wholesome", titulo:"EL FANDOM SANO", icon:"⚽", sub:"Respeta al rival y no insulta al árbitro.", narrativa:"Un verdadero marciano en el fútbol de Twitter: celebrás el buen juego y felicitás al rival de turno sin ironía.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="futbolero"&&e.personalidad.id==="wholesome" },
  { id:"combo_tech_troll", titulo:"EL DISRUPTOR TÓXICO", icon:"💻", sub:"Build in public... liquidando a la competencia.", narrativa:"Lanzaste tres SaaS rentables mientras te burlabas despiadadamente de los demás founders en el timeline.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="techie"&&e.personalidad.id==="troll" },
  { id:"combo_pod_gracioso", titulo:"EL LATE NIGHT CRIOLLO", icon:"🎙️", sub:"Entrevistas con humor y clips virales.", narrativa:"Transformaste tu podcast en el show más viral de la red. Todos los personajes del momento quieren sentarse en tu mesa.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="podcaster"&&e.personalidad.id==="gracioso" },
  { id:"combo_opi_info", titulo:"EL INTELECTUAL PÚBLICO", icon:"📚", sub:"Opina de todo pero con fuentes y bibliografía.", narrativa:"Tus hilos son cátedras abiertas. Te convertiste en la voz autorizada y rigurosa que cita la televisión abierta.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="opinologo"&&e.personalidad.id==="informativo" },
  { id:"combo_humor_wholesome", titulo:"EL CORAZÓN DEL TIMELINE", icon:"💛", sub:"La risa que une y no lastima a nadie.", narrativa:"Lograste lo imposible: hacer reír a millones de usuarios sin recurrir jamás a la crueldad ni al escarnio ajeno.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="humor"&&e.personalidad.id==="wholesome" },
  { id:"combo_conspira_troll", titulo:"EL AGENTE DEL CAOS", icon:"🔺", sub:"Teorías demenciales y agresión sin límites.", narrativa:"Hiciste del delirio paranoico un arma de combate digital. Tu comunidad es un ejército incontrolable de menciones.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="conspiranoico"&&e.personalidad.id==="troll" },
  { id:"combo_influencer_troll", titulo:"LA SOMBRA DEL GLAM", icon:"💄", sub:"Estética impecable de frente, bardo sucio por detrás.", narrativa:"Detrás de tus fotos con filtro perfecto se escondía la cuenta más despiadada y calculadora de toda la plataforma.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="influencer"&&e.personalidad.id==="troll" },
  { id:"combo_fut_troll", titulo:"EL ULTRA DIGITAL", icon:"🔥", sub:"El tweet como proyectil hacia la hinchada rival.", narrativa:"No analizás fútbol, ejecutás venganzas digitales cada fin de semana. Sos el terror del folklore y los memes online.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="futbolero"&&e.personalidad.id==="troll" },
  { id:"combo_militante_wholesome", titulo:"EL MILITANTE DEL BIEN", icon:"🕊️", sub:"Cree en la empatía por encima del partido.", narrativa:"Militaste con honestidad brutal y respeto al que piensa distinto. Una figura incómoda tanto para propios como ajenos.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="militante"&&e.personalidad.id==="wholesome" },
  { id:"combo_gamer_troll", titulo:"EL FLAMER PROFESIONAL", icon:"⚡", sub:"Más tiempo bardeando en Twitter que jugando.", narrativa:"Tus peleas y clips humillando rivales juntan diez veces más reproducciones que tus partidas competitivas.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="gamer"&&e.personalidad.id==="troll" },
  { id:"combo_tech_wholesome", titulo:"EL FUNDADOR ÉTICO", icon:"🌱", sub:"Open source, transparencia y empatía.", narrativa:"Demostraste que se puede construir tecnología altamente rentable sin explotar métricas oscuras ni engañar a nadie.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="techie"&&e.personalidad.id==="wholesome" },
  { id:"combo_pod_wholesome", titulo:"EL CONFESOR DIGITAL", icon:"🎧", sub:"Entrevistas vulnerables y profundas.", narrativa:"Creaste un espacio de confianza único en redes. Tus invitados lloran y se abren como en ningún otro medio.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="podcaster"&&e.personalidad.id==="wholesome" },
  { id:"combo_of_troll", titulo:"LA REINA DE LAS CAPTURAS", icon:"📸", sub:"Cada hater desubicado termina escrachado.", narrativa:"Monetizaste el bardo: las capturas de DMs de los moralistas se convirtieron en tu contenido más lucrativo y viral.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="onlyfans"&&e.personalidad.id==="troll" },
  { id:"combo_crypto_troll", titulo:"EL DEGEN SUPREMO", icon:"🎰", sub:"Hype agresivo, memes tóxicos y apalancamiento.", narrativa:"Vivís al límite entre la liquidación y la gloria eterna. La comunidad de degens de Twitter te coronó como su líder.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="cryptobro"&&e.personalidad.id==="troll" },
  { id:"combo_conspira_gracioso", titulo:"EL MEME DE LAS SOMBRAS", icon:"👽", sub:"Conspiraciones en formato de comedia absurda.", narrativa:"Convertiste las teorías más oscuras en los memes más virales del año. Nadie sabe si hablás en serio o en joda.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="conspiranoico"&&e.personalidad.id==="gracioso" },
  { id:"combo_opi_troll", titulo:"EL INCENDIARIO SERIAL", icon:"🧨", sub:"Una opinión polémica por minuto.", narrativa:"Tu cuenta es un polvorín permanente. Disfrutás ver arder el timeline con cada opinión incendiaria que arrojás.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="opinologo"&&e.personalidad.id==="troll" },
  { id:"combo_fut_info", titulo:"EL PIZARRÓN TÁCTICO", icon:"📋", sub:"Mapas de calor, xG y métricas avanzadas.", narrativa:"Elevaste el debate futbolero de Twitter con rigor estadístico, pizarrón táctico y análisis de juego impecable.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="futbolero"&&e.personalidad.id==="informativo" },
  { id:"combo_of_gracioso", titulo:"LA REINA DEL REMATE", icon:"💅", sub:"Ironía ácida, coqueteo y remates brillantes.", narrativa:"Combinaste sensualidad con un humor afiladísimo. Nadie puede seguirte el ritmo ni competir con tus respuestas.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="onlyfans"&&e.personalidad.id==="gracioso" },
  { id:"combo_per_gracioso", titulo:"EL CRONISTA ÁCIDO", icon:"🗞️", sub:"La actualidad nacional con sarcasmo letal.", narrativa:"Contás las peores noticias del país con un humor negro tan fino que hace que la realidad política sea tolerable.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="periodista"&&e.personalidad.id==="gracioso" },
  { id:"combo_militante_gracioso", titulo:"LA SÁTIRA POLÍTICA", icon:"🎭", sub:"Militancia a través del absurdo y la parodia.", narrativa:"Desarmaste los discursos solemnes del poder usando la burla, los memes y la ironía como principales armas militantes.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="militante"&&e.personalidad.id==="gracioso" },
  { id:"combo_influencer_gracioso", titulo:"LA INFLUENCER AUTÉNTICA", icon:"🤳", sub:"Se ríe de los canjes y la falsedad de las redes.", narrativa:"Tu parodia del mundo influencer fue tan certera, humana y graciosa que te volvió la figura más querida de todas.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="influencer"&&e.personalidad.id==="gracioso" },
  { id:"combo_conspira_info", titulo:"EL ARCHIVISTA OCULTO", icon:"🗄️", sub:"Hilos infinitos con documentos desclasificados.", narrativa:"Tus hilos de 50 tweets conectando documentos históricos, archivos desclasificados y patentes fascinaron a la red.", evaluar:(e)=>(e.seguidores>=45000||e.dinero>=7500)&&e.arquetipo.id==="conspiranoico"&&e.personalidad.id==="informativo" },

  // ── 7 FINALES GENERALES DE VICTORIA (CON 3 NARRATIVAS CADA UNO) ──
  {
    id:"villano", titulo:"EL VILLANO NECESARIO", icon:"😈", sub:"Te convertiste en la cuenta que todos aman odiar.",
    narrativas:[
      "Construiste tu imperio a base de bardo y controversia. Sos indispensable para el espectáculo digital.",
      "El timeline te necesita más de lo que te odia. Sin vos, el feed es aburrido y nadie lo sabe mejor que vos.",
      "Cada intento de cancelación te hizo más grande. La hostilidad fue tu combustible más eficiente."
    ],
    evaluar:(e)=>(e.seguidores>=80000||e.dinero>=10000)&&e.personalidad.id==="troll"
  },
  {
    id:"idolo_caido", titulo:"EL ÍDOLO CAÍDO", icon:"🎭", sub:"Empezaste como santo, terminaste en el fango.",
    narrativas:[
      "Entraste predicando buena onda y empatía, pero las tentaciones del algoritmo y el bardo te corrompieron.",
      "El arco narrativo perfecto: de referente a meme. Tus propios seguidores guardan el screenshot del antes y el después.",
      "Prometiste ser diferente. Y lo fuiste... durante los primeros tres turnos de tu carrera digital."
    ],
    evaluar:(e)=>(e.seguidores>=80000||e.dinero>=10000)&&e.personalidad.id==="wholesome"&&e.odio>=50
  },
  {
    id:"preferido", titulo:"EL PREFERIDO DE TODOS", icon:"💚", sub:"Una luz de buena fe en el desierto del timeline.",
    narrativas:[
      "Demostraste que se puede triunfar sin destruir a nadie. Tu nombre es sinónimo de buen trato en redes.",
      "En un ecosistema de bardo y cancelaciones, elegiste el camino difícil: la decencia. Y funcionó con creces.",
      "Tus menciones son el único rincón tranquilo de todo el timeline. Eso vale más que cualquier métrica."
    ],
    evaluar:(e)=>(e.seguidores>=80000||e.dinero>=10000)&&e.personalidad.id==="wholesome"&&e.odio<50
  },
  {
    id:"comico", titulo:"EL COMODÍN", icon:"🃏", sub:"Dominaste todos los formatos. Camaleón total.",
    narrativas:[
      "Jugaste cada carta disponible. Sos el verdadero camaleón del timeline. Nadie te puede encuadrar.",
      "Serio, gracioso, informativo, polémico. Sos la cuenta que todos siguen sin entender exactamente por qué.",
      "La gente nunca sabe qué vas a publicar mañana. Esa incertidumbre es exactamente tu ventaja competitiva."
    ],
    evaluar:(e)=>(e.seguidores>=80000||e.dinero>=10000)&&e.personalidad.id==="gracioso"
  },
  {
    id:"autoridad", titulo:"LA AUTORIDAD", icon:"📚", sub:"Tu palabra es ley en el debate público.",
    narrativas:[
      "Con rigor y datos te convertiste en la fuente definitiva de la red. Periodistas te citan sin pedirte permiso.",
      "El camino fue lento y solitario, pero cada hilo que publicaste sumó al edificio. Ahora es un castillo inexpugnable.",
      "Cuando el tema del día explota, todos buscan tu perspectiva antes de opinar. Eso es poder real en redes."
    ],
    evaluar:(e)=>(e.seguidores>=80000||e.dinero>=10000)&&e.personalidad.id==="informativo"
  },
  {
    id:"triunfador", titulo:"EL FENÓMENO DIGITAL", icon:"👑", sub:"Alcanzaste la cima indiscutida de la red.",
    narrativas:[
      "Con más de 80.000 seguidores sos una de las figuras más influyentes del país. El algoritmo es tu aliado.",
      "Las marcas te escriben, los medios te buscan, los políticos te siguen en privado. Llegaste a la cima absoluta.",
      "Lo que empezó como un pasatiempo es ahora una pequeña industria con tu cara. No hay vuelta atrás."
    ],
    evaluar:(e)=>e.seguidores>=80000
  },
  {
    id:"nicho", titulo:"EL TWITTERO DE NICHO", icon:"🎙️", sub:"Carrera regular pero honesta en redes.",
    narrativas:[
      "20 turnos en la plataforma. Construiste una comunidad modesta y seguís tuiteando con dignidad.",
      "No sos viral, pero tus seguidores te leen y responden de verdad. Eso no lo tiene cualquier cuenta masiva.",
      "Sobreviviste a la jungla digital. En este ecosistema salvaje, eso ya es un logro que pocos pueden presumir."
    ],
    evaluar:()=>true
  }
];

const FINALE_DEUDA   = { titulo:"BANCARROTA FINANCIERA", icon:"💸", sub:"Game Over por deuda acumulada.",    narrativa:"Tuviste saldo negativo 5 turnos seguidos. Las deudas te forzaron a cerrar la cuenta." };
const FINALE_BURNOUT = { titulo:"BURNOUT DIGITAL",       icon:"🧠", sub:"Game Over por colapso emocional.", narrativa:"Tu salud mental llegó a cero. Necesitás un descanso real lejos de las redes." };
const FINALE_CANCELACION_3STRIKES = { id:"cancelacion_3strikes", titulo:"CANCELADO DEFINITIVAMENTE", icon:"☠️", sub:"Game Over — 3 Strikes de Cancelación.", narrativa:"El timeline no perdona tres veces. Acumulaste 3 crisis de cancelación graves en tu carrera digital. Marcas, medios y seguidores te soltaron la mano. Tu cuenta quedó en el olvido eterno." };
const FINALE_CANCELACION_ZONAROJA  = { id:"cancelacion_zonaroja", titulo:"HOSTILIDAD EXTREMA DEL FEED", icon:"🔥", sub:"Game Over — Zona Roja de Odio Prolongada.", narrativa:"Mantuviste un nivel de odio letal (80%+) durante 3 turnos consecutivos. La toxicidad acumulada volvió inhabitable tu timeline. Cuentas masivas te bloquearon en cadena y la plataforma te sepultó en el ostracismo digital." };

const RANKING_STORAGE_KEY = "twitero_hall_of_fame_v15";

function calculateScore(e) {
  const segsPts = Math.floor(e.seguidores * 1.0);
  const dinPts = Math.floor(e.dinero * 3.0);
  const engPts = Math.floor(e.engagement * 50);
  const smPts = Math.floor(e.saludMental * 150);
  const repPts = Math.floor((e.amor * 100) - (e.odio * 50));
  const isWin = !e.gameOver || (e.final && e.final.id !== "deuda" && e.final.id !== "burnout" && e.final.id !== "cancelacion");
  const winBonus = isWin ? 25000 : 0;
  return Math.max(0, segsPts + dinPts + engPts + smPts + repPts + winBonus);
}

const DEFAULT_ALLTIME_RANKING = [
  { rank:1, handle:"@troll_master", arch:"Cuenta de Humor", archIcon:"🤡", segs:118400, score:215000, date:"2026-08-27" },
  { rank:2, handle:"@pibe_cripto", arch:"Crypto Bro", archIcon:"📈", segs:96200, score:188400, date:"2026-08-26" },
  { rank:3, handle:"@periodista_top", arch:"Periodista Indie", archIcon:"📰", segs:89500, score:172100, date:"2026-08-25" },
  { rank:4, handle:"@gamer_streamer", arch:"Gamer / Streamer", archIcon:"🎮", segs:84200, score:159000, date:"2026-08-24" },
  { rank:5, handle:"@lifestyle_queen", arch:"Influencer Lifestyle", archIcon:"✨", segs:81300, score:147200, date:"2026-08-23" }
];

const DEFAULT_DAILY_RANKING = [
  { rank:1, handle:"@tech_founder", arch:"Techie / Startup Bro", archIcon:"🚀", segs:91200, score:179500, date: new Date().toISOString().split("T")[0] },
  { rank:2, handle:"@futbol_pasion", arch:"Futbolero", archIcon:"⚽", segs:84500, score:162000, date: new Date().toISOString().split("T")[0] },
  { rank:3, handle:"@podcast_king", arch:"Podcaster", archIcon:"🎙️", segs:79800, score:149300, date: new Date().toISOString().split("T")[0] }
];

class RankingManager {
  static getAllScores() {
    try {
      const raw = localStorage.getItem(RANKING_STORAGE_KEY);
      if (!raw) {
        const initial = [...DEFAULT_ALLTIME_RANKING, ...DEFAULT_DAILY_RANKING];
        localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(raw);
    } catch(e) {
      return [...DEFAULT_ALLTIME_RANKING, ...DEFAULT_DAILY_RANKING];
    }
  }

  static addScore(entry) {
    let list = this.getAllScores();
    list.push(entry);
    try {
      localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(list));
    } catch(e) {}
    return list;
  }

  static getDailyRanking() {
    const today = new Date().toISOString().split("T")[0];
    const all = this.getAllScores();
    let daily = all.filter(s => s.date === today);
    if (daily.length === 0) daily = DEFAULT_DAILY_RANKING;
    daily.sort((a, b) => b.score - a.score);
    return daily.slice(0, 10).map((item, idx) => ({ ...item, rank: idx + 1 }));
  }

  static getAllTimeRanking() {
    const all = this.getAllScores();
    all.sort((a, b) => b.score - a.score);
    return all.slice(0, 10).map((item, idx) => ({ ...item, rank: idx + 1 }));
  }

  static renderTables(dailyTbodyId="ranking-daily-body", alltimeTbodyId="ranking-alltime-body") {
    const renderRows = (list) => {
      return list.map(r => {
        const badge = r.rank === 1 ? '🥇 <span class="rank-badge rank-badge-1">#1</span>' :
                      r.rank === 2 ? '🥈 <span class="rank-badge rank-badge-2">#2</span>' :
                      r.rank === 3 ? '🥉 <span class="rank-badge rank-badge-3">#3</span>' :
                      `#${r.rank}`;
        return `<tr>
          <td>${badge}</td>
          <td class="rank-handle">${r.handle}</td>
          <td>${r.archIcon||"👤"} ${r.arch}</td>
          <td style="color:var(--blue); font-weight:700;">${r.segs.toLocaleString()}</td>
          <td class="rank-score">⚡ ${r.score.toLocaleString()}</td>
        </tr>`;
      }).join("");
    };

    const dailyEl = document.getElementById(dailyTbodyId);
    if (dailyEl) dailyEl.innerHTML = renderRows(this.getDailyRanking());

    const alltimeEl = document.getElementById(alltimeTbodyId);
    if (alltimeEl) alltimeEl.innerHTML = renderRows(this.getAllTimeRanking());
  }
}

class GameEngine {
  reset() {
    this.genero = "hombre";
    this.arquetipo = ARCHETYPES[0];
    this.personalidad = PERSONALITIES[0];
    this.handle = "@opinologo_ok";
    this.turno = 1;
    this.seguidores = 800;
    this.dinero = 1200;
    this.engagement = 120;
    this.saludMental = 100;
    this.amor = 0;
    this.odio = 0;
    this.credibilidad = 35;
    this.viralidad = 35;
    this.history = [{ t:0, segs:800, din:1200 }];
    this.turnLog = [];
    this.gameLog = [];  // rich turn log for decision tree viz
    this.prevSegs = 800;
    this.prevDin = 1200;
    this.debtTurnos = 0;
    this.boosterCD = {};
    this.cartasJugadas = {};
    this.lastCard = null;
    this.lastCardOk = null;
    this.streakExitos = 0;
    this.streakPeleas = 0;
    this.streakHilos = 0;
    this.gameOver = false;
    this.final = null;
    this.comboRisk = false;
    this.nivel1Activado = false;
    this.eventUsed = {};
    this.eventsTriggeredCount = 0;
    this.activeEvent = null;
    this.preparedBooster = null;
    this.superHabilidadUsada = false;
    this.cachedCards = null;
    this.cachedBoosters = null;
    this.turnosEnZonaRoja = 0;
    this.cancelWarningShown = {};
    this.playedTweetKeys = new Set();
    this.usedCancellationIds = new Set();
    this.strikesCancelacion = 0;
    this.baitCount = 0;
    this.seenCardTypes = new Set();
    this.seenBoosters = new Set();
    this.algorithmEffect = null;
    this.mediosTriggered = false;
    this.famosoTriggered = false;
    this.algorithmTriggered = false;
    this.rachaViralTriggered = false;
    this.rachaViralActive = false;
    this.rachaViralCount = 0;
    this.rachaViralDone = false;
  }

  init(genero, archId, persId, customHandle=null) {
    this.reset();
    this.genero = genero;
    this.arquetipo = ARCHETYPES.find(a=>a.id===archId) || ARCHETYPES[0];
    this.personalidad = PERSONALITIES.find(p=>p.id===persId) || PERSONALITIES[0];
    const defHandle = typeof getGenderedDefaultHandle === "function" ? getGenderedDefaultHandle(this.arquetipo, this.genero) : (this.arquetipo.defaultHandle || "@twitero");
    this.handle = customHandle && customHandle.trim().length > 0 ? (customHandle.startsWith("@") ? customHandle.trim() : "@"+customHandle.trim()) : defHandle;
    const isExpected = COMBOS_ESPERABLES.some(([a,p])=>a===archId&&p===persId);
    this.comboRisk = !isExpected;
  }

  getAvatar() {
    return this.turno <= 3 ? "🥚" : this.arquetipo.icono;
  }

  calcPayout() {
    const s = this.seguidores;
    const rate = s>200000 ? 1 : s>50000 ? 2 : s>10000 ? 4 : 8;
    let base = 200 + Math.floor(s/1000*rate) + Math.floor(this.engagement*0.6);
    if (this.arquetipo?.id === "cryptobro") base = Math.floor(base * 1.35); // Crypto Bro: retorno financiero explosivo
    if (this.algorithmEffect && this.algorithmEffect.turnosRestantes > 0) {
      base = Math.floor(base * this.algorithmEffect.mult);
    }
    return base;
  }

  checkFortuitousEvents() {
    if (this.activeEvent) return null;

    // 1. EVENTO ¡LLEGASTE A LOS MEDIOS! (Turno 7 a 16, una vez por partida, chance 28%)
    if (!this.mediosTriggered && this.turno >= 7 && this.turno <= 16 && Math.random() < 0.28) {
      this.mediosTriggered = true;
      const medio = MEDIOS_EVENTOS[rng(MEDIOS_EVENTOS.length)];
      const segsGained = Math.floor(this.seguidores * medio.efectos.segsPct);
      this.seguidores += segsGained;
      this.credibilidad = Math.min(100, this.credibilidad + medio.efectos.credibilidad);
      this.amor = Math.min(100, this.amor + medio.efectos.amor);

      return {
        tipo: "fortuito_directo",
        titulo: medio.titulo,
        tag: "MEDIOS DE COMUNICACIÓN",
        icono: medio.icono,
        desc: medio.desc,
        consecuencia: `⚡ IMPACTO: +${segsGained.toLocaleString()} seguidores  •  +${medio.efectos.credibilidad} credibilidad  •  +${medio.efectos.amor} amor`
      };
    }

    // 2. INTERACCIÓN VIP (Retweet / Quote de Famoso, Político o Figura Clave) (Chance base 5%, escala hasta 20%)
    if (!this.famosoTriggered && this.turno >= 5) {
      let famosoChance = 0.05 + (this.seguidores / 100000) * 0.10 + (this.credibilidad / 100) * 0.05;
      famosoChance = Math.min(0.20, famosoChance);
      if (Math.random() < famosoChance) {
        this.famosoTriggered = true;

        // Selección dinámica: 50% chance arquetipo específico (si existe pool), 50% pool general
        let pool = FAMOSO_VIP_GENERALES;
        const archKey = this.arquetipo?.id;
        if (archKey && FAMOSO_VIP_ARQUETIPOS && FAMOSO_VIP_ARQUETIPOS[archKey] && FAMOSO_VIP_ARQUETIPOS[archKey].length > 0) {
          if (Math.random() < 0.5) {
            pool = FAMOSO_VIP_ARQUETIPOS[archKey];
          }
        }
        const d = pool[rng(pool.length)] || FAMOSO_RETWEET_DATA;
        const segsGained = Math.floor(this.seguidores * d.efectos.segsPct) + 1200;
        this.seguidores += segsGained;
        this.engagement += d.efectos.engagement;
        this.viralidad = Math.min(100, this.viralidad + d.efectos.viralidad);

        return {
          tipo: "fortuito_directo",
          titulo: d.titulo,
          tag: "INTERACCIÓN VIP",
          icono: d.icono,
          desc: d.desc,
          consecuencia: `⚡ IMPACTO: +${segsGained.toLocaleString()} seguidores  •  +${d.efectos.engagement} engagement  •  +${d.efectos.viralidad} viralidad`
        };
      }
    }

    // 3. CAMBIOS EN EL ALGORITMO (Turno 8 a 17, una vez por partida, chance 32%)
    if (!this.algorithmTriggered && this.turno >= 8 && this.turno <= 17 && Math.random() < 0.32) {
      this.algorithmTriggered = true;
      const isTroll = this.personalidad.id === "troll";
      const isWholesome = this.personalidad.id === "wholesome";
      let negChance = 0.50;
      if (isTroll) negChance += 0.10;
      if (isWholesome) negChance -= 0.10;

      const isNeg = Math.random() < negChance;
      const variant = isNeg ? ALGORITMO_EVENT_DATA.negativo : ALGORITMO_EVENT_DATA.positivo;
      const dur = rng(2) === 0 ? 2 : 3;

      this.algorithmEffect = {
        mult: variant.multIngresos,
        turnosRestantes: dur,
        titulo: variant.titulo
      };

      return {
        tipo: "fortuito_directo",
        titulo: variant.titulo,
        tag: "ALGORITMO DE X",
        icono: isNeg ? "📉" : "📈",
        desc: `${variant.desc} (Duración: ${dur} turnos)`,
        consecuencia: `⚡ EFECTO: ${isNeg ? 'Ingresos de monetización a la mitad (x0.5)' : 'Ingresos de monetización al doble (x2.0)'} por los próximos ${dur} turnos.`
      };
    }

    return null;
  }

  checkRachaViral() {
    if (this.rachaViralTriggered || this.rachaViralActive || this.rachaViralDone || this.gameOver) return null;
    // Dispara una sola vez por partida entre turnos 7 y 15 (25% de probabilidad)
    if (this.turno >= 7 && this.turno <= 15 && Math.random() < 0.25) {
      this.rachaViralTriggered = true;
      return {
        tipo: "racha_viral",
        titulo: "¡TE VOLVISTE VIRAL!",
        desc: "El algoritmo colocó tu cuenta en el centro de la conversación masiva. Tenés la opción de entrar al desafío de 3 tweets consecutivos."
      };
    }
    return null;
  }

  startRachaViral() {
    this.rachaViralActive = true;
    this.rachaViralCount = 0;
    this.cachedCards = null;
  }

  checkSpecialEvent() {
    if (this.activeEvent) return this.activeEvent;
    if (this.eventsTriggeredCount >= 3) return null;

    const isEventTurn = (this.turno === 6 && this.eventsTriggeredCount === 0) ||
                        (this.turno === 11 && this.eventsTriggeredCount <= 1) ||
                        (this.turno === 16 && this.eventsTriggeredCount <= 2);

    if (!isEventTurn) return null;

    const key = getArchKey(this.arquetipo.id);

    if (this.turno === 11 && !this.superHabilidadUsada) {
      const habs = superHabilidadesContent[key];
      if (habs && habs.length > 0) {
        this.superHabilidadUsada = true;
        this.eventsTriggeredCount++;
        const hab = habs[rng(habs.length)];
        const segsGained = 20000;
        const rawOpts = [
          { texto:"Capitalizar el momento histórico", tweet:"Aprovechando este momento bisagra para marcar el rumbo de la comunidad. Gracias a todos por estar del otro lado.", resultado:"Aprovechás el pico de atención para consolidar autoridad y liderazgo en el nicho.", efectoDesc:`+${segsGained.toLocaleString()} segs  ·  +120 eng`, efectoObj:{ seguidores:segsGained, engagement:120, credibilidad:15 }, fx:(e)=>{ e.seguidores+=segsGained; e.engagement+=120; if(hab.efectos?.credibilidad)e.credibilidad=Math.min(100,e.credibilidad+15); } },
          { texto:"Monetizar la exposición inmediatamente", tweet:"Cupos abiertos para alianzas comerciales y proyectos sponsoreados. Manden DM los interesados.", resultado:"Convertís la viralidad en contratos comerciales rápidos antes de que se enfríe.", efectoDesc:`+$3.000  ·  +12.000 segs`, efectoObj:{ ingresos:3000, seguidores:12000, engagement:60 }, fx:(e)=>{ e.dinero+=3000; e.seguidores+=12000; e.engagement+=60; } },
          { texto:"Proteger reputación y ganar respeto", tweet:"Frente al ruido y la histeria, siempre elijo el camino de la templanza y el rigor. No todo es show.", resultado:"Priorizás el rigor y la templanza. Tu imagen sale intacta y reforzada.", efectoDesc:`+20 Cred  ·  +10 SM  ·  +10.000 segs`, efectoObj:{ credibilidad:20, saludMental:10, seguidores:10000 }, fx:(e)=>{ e.credibilidad=Math.min(100,e.credibilidad+20); e.saludMental=Math.min(100,e.saludMental+10); e.seguidores+=10000; } }
        ];
        for (let i = rawOpts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [rawOpts[i], rawOpts[j]] = [rawOpts[j], rawOpts[i]];
        }
        const ev = {
          id:"super_hab_"+this.turno, tag:"⚡ SUPER HABILIDAD DE ARQUETIPO", color:"purple",
          titulo: hab.titulo, desc: hab.texto,
          opciones: rawOpts
        };
        this.activeEvent = ev; return ev;
      }
    }

    const availArch = archetypeEvents.filter(e=>e.triggers?.arquetipo===key&&!this.eventUsed[e.id]);
    if (availArch.length > 0) {
      const raw = availArch[rng(availArch.length)];
      this.eventUsed[raw.id] = true;
      this.eventsTriggeredCount++;
      const ev = {
        id:raw.id, tag:`🎭 EVENTO: ${getGenderedArchetype(this.arquetipo, this.genero).toUpperCase()}`, color:"blue",
        titulo:raw.titulo,
        desc: raw.desc || "Situación coyuntural que exige una postura estratégica en tu timeline.",
        opciones: raw.opciones.map(opt=>({
          texto: opt.texto,
          tweet: opt.tweet || opt.texto,
          resultado: opt.resultado || "Decisión estratégica ejecutada.",
          efectoDesc: formatEffectsText(opt.efecto),
          efectoObj: opt.efecto,
          fx:(e)=>{
            if(opt.efecto){
              if(opt.efecto.seguidores){
                if(opt.efecto.seguidores<1&&opt.efecto.seguidores>-1){ e.seguidores=Math.floor(e.seguidores*(1+opt.efecto.seguidores)); }
                else{ e.seguidores+=opt.efecto.seguidores; }
              }
              if(opt.efecto.credibilidad)e.credibilidad=Math.min(100,Math.max(0,e.credibilidad+opt.efecto.credibilidad));
              if(opt.efecto.amor)e.amor=Math.min(100,Math.max(0,e.amor+opt.efecto.amor));
              if(opt.efecto.odio)e.odio=Math.min(100,Math.max(0,e.odio+opt.efecto.odio));
              if(opt.efecto.saludMental)e.saludMental=Math.min(100,Math.max(0,e.saludMental+opt.efecto.saludMental));
              if(opt.efecto.ingresos)e.dinero+=Math.round(opt.efecto.ingresos*1.2);
            }
          }
        }))
      };
      this.activeEvent = ev; return ev;
    }

    return null;
  }

  checkViralización() {
    if(this.seguidores>=15000&&!this.nivel1Activado&&Math.random()<0.035){
      const pool=viralizacionExtremaContent.nivel1; const raw=pool[rng(pool.length)];
      this.nivel1Activado=true;
      const segsGained = 25000;
      const dinGained = 3500;
      this.seguidores+=segsGained; this.dinero+=dinGained;
      return { tipo:"nivel1", titulo:raw.titulo, texto:raw.texto, segs:segsGained, din:dinGained };
    }
    if(this.nivel1Activado&&Math.random()<0.018){
      const raw=viralizacionExtremaContent.nivel2;
      const segsGained = 50000;
      const dinGained = 6000;
      this.seguidores+=segsGained; this.dinero+=dinGained;
      return { tipo:"nivel2", titulo:raw.titulo, texto:raw.texto, segs:segsGained, din:dinGained };
    }
    return null;
  }

  _cardPool() {
    const arch=this.arquetipo, pers=this.personalidad;
    const maxBaits = pers.id === "troll" ? 4 : 2;
    const baitAvailable = this.baitCount < maxBaits;
    return [
      { id:"meme",       ok:true },
      { id:"tema",       ok:true },
      { id:"pelea",      ok:true },
      { id:"hilo",       ok:this.credibilidad>=40 },
      { id:"quote",      ok:this.seguidores>=2500 },
      { id:"live",       ok:this.viralidad>=40 },
      { id:"temaDelDia", ok:this.engagement>=100 },
      { id:"politica",   ok:this.seguidores>=8000 },
      { id:"bait",       ok:baitAvailable },
      { id:"patrocinio", ok:this.seguidores>=(arch.bajomon?35000:18000) },
      { id:"descanso",   ok:true }
    ].filter(c=>c.ok).map(c=>{
      let w=c.id==="tema"?2.0:1.0;
      if(c.id==="descanso"){
        w = (this.odio>=50 || this.saludMental<=40) ? 3.5 : (this.odio>=30 || this.saludMental<=60) ? 1.5 : 0.6;
      }
      if(c.id==="bait") w = 0.8;
      if(arch.deb.some(d=>c.id.startsWith(d)||d.startsWith(c.id.slice(0,4)))) w*=0.25;
      if(pers.reducida===c.id) w*=0.25;
      if(pers.afines.some(a=>a===c.id)) w*=1.8;
      if(c.id==="pelea"&&this.streakHilos>=2) w*=5;
      if(this.rachaViralActive){
        const isArchAfin = c.id === "tema" || (arch.afines && arch.afines.includes(c.id));
        const isPersAfin = pers.afines && pers.afines.includes(c.id);
        if(isArchAfin || isPersAfin) {
          w *= 4.0;
        } else {
          w *= 0.15;
        }
      }
      return { ...c, weight:Math.max(w,0.05) };
    });
  }

  drawCards() {
    if(this.cachedCards?.length===3) return this.cachedCards;
    const pool=this._cardPool(), drawn=[], remaining=[...pool];
    const handKeys = new Set();

    while(drawn.length<3&&remaining.length>0){
      const total=remaining.reduce((s,c)=>s+c.weight,0);
      let r=Math.random()*total, idx=remaining.length-1;
      for(let j=0;j<remaining.length;j++){if(r<remaining[j].weight){idx=j;break;}r-=remaining[j].weight;}
      const meta=remaining.splice(idx,1)[0];
      const content = makeCardContent(meta.id, this.arquetipo.id, this.playedTweetKeys, handKeys);
      drawn.push({ id:meta.id, palo:CARD_PALOS[meta.id], ...content });
    }
    const fallbacks=["meme","tema","pelea","hilo","bait"]; let fbIdx=0;
    while(drawn.length<3){
      const fbId=fallbacks[fbIdx++%fallbacks.length];
      const content = makeCardContent(fbId, this.arquetipo.id, this.playedTweetKeys, handKeys);
      drawn.push({ id:fbId, palo:CARD_PALOS[fbId], ...content });
    }
    this.cachedCards=drawn; return drawn;
  }

  _successChance(card, booster) {
    const bases = {
      meme: 58,
      tema: card.isPropio ? 62 : 38,
      pelea: 48,
      hilo: 54,
      quote: 48,
      live: 45,
      temaDelDia: 52,
      politica: 40,
      bait: 52,
      patrocinio: 65,
      descanso: 80
    };
    let c = bases[card.id] || 50;

    if (!this.arquetipo.deb.some(d=>card.id.startsWith(d)||d.startsWith(card.id.slice(0,4)))) c += 4;
    if (this.personalidad.afines.some(a=>a===card.id)) c += 5;
    if (this.comboRisk) c += 6;
    if (this.streakExitos >= 3) c += 5;
    if (card.id === "quote" && this.lastCard?.id === "meme" && this.lastCardOk) c += 8;
    if (card.id === "pelea" && this.lastCard?.id === "live" && this.lastCardOk) c += 8;
    if (booster?.fx.chanceBonus) c += booster.fx.chanceBonus;
    if (this.engagement > 200) c += 4;
    if (this.arquetipo?.id === "cryptobro" && (card.id === "tema" || card.id === "temaDelDia")) c += 8;
    if (this.saludMental < 30) c -= 8; // Burnout warning: baja salud mental afecta rendimiento

    return Math.min(Math.max(c, 25), 85);
  }

  playCard(card, boosterId=null) {
    if(this.gameOver) return null;

    let boosterUsed = null;
    if (boosterId) {
      const b = BOOSTERS.find(x => x.id === boosterId);
      if (b && this.dinero >= b.costo && !this.boosterCD[b.id]) {
        this.dinero -= b.costo;
        if (b.fx.segsPct) this.seguidores = Math.floor(this.seguidores * (1 + b.fx.segsPct));
        if (b.fx.eng) this.engagement += b.fx.eng;
        if (b.fx.odio) this.odio = Math.min(100, this.odio + b.fx.odio);
        this.boosterCD[b.id] = b.cooldown;
        boosterUsed = b;
      }
    }

    // STRICT ANTI-REPETITION: add to played set
    this.playedTweetKeys.add(card.titulo);
    if (card.texto) this.playedTweetKeys.add(card.texto);

    this.cartasJugadas[card.id] = (this.cartasJugadas[card.id] || 0) + 1;
    const chance = this._successChance(card, boosterUsed), roll = rng(100) + 1, ok = roll <= chance;
    let engGain=0, hateGain=0, segsGain=0, dinGain=0;
    const mult = boosterUsed ? (boosterUsed.fx.mult || 1.35) : 1.0;

    if(ok){
      engGain = Math.floor(card.eng * mult);
      
      if (card.id === "patrocinio") {
        const boostPct = boosterUsed?.fx.segsPct || 0;
        segsGain = Math.floor(this.seguidores * (0.01 + boostPct * 0.15) + (100 * mult));
      } else if (card.id === "descanso") {
        segsGain = 0;
      } else {
        const basePct = 0.04 + Math.random() * 0.04;
        const boostPct = boosterUsed?.fx.segsPct || 0;
        segsGain = Math.floor(this.seguidores * (basePct + boostPct) + (220 * mult));
      }

      this.credibilidad = Math.min(100, this.credibilidad + (card.id === "hilo" ? 8 : 3));
      this.viralidad = Math.min(100, this.viralidad + (card.id === "live" ? 8 : card.id === "meme" ? 5 : 2));
      dinGain = card.dineroExtra || 0;

      // AMOR GAIN ON SUCCESS
      if(card.id === "hilo" || card.id === "meme") {
        this.amor = Math.min(100, this.amor + 6);
        this.odio = Math.max(0, this.odio - 3);
      } else if (card.id === "tema" && card.isPropio) {
        this.amor = Math.min(100, this.amor + 4);
        this.odio = Math.max(0, this.odio - 2);
      } else if (Math.random() * 100 < card.amor) {
        this.amor = Math.min(100, this.amor + 4);
      }

      if(card.odioP > 0 && Math.random() * 100 < card.odioP) {
        this.odio = Math.min(100, this.odio + 2);
      }
      this.streakExitos++;

      if(card.id === "descanso") {
        this.odio = Math.max(0, this.odio - 10);
        this.saludMental = Math.min(100, this.saludMental + 15);
        this.amor = Math.min(100, this.amor + 5);
      }

    } else {
      hateGain = Math.floor(card.hate * mult);
      segsGain = card.id === "descanso" ? 0 : -Math.floor(this.seguidores * 0.04 * mult);
      if(card.id === "descanso") {
        this.odio = Math.max(0, this.odio - 4);
        this.saludMental = Math.min(100, this.saludMental + 5);
      } else if(Math.random() * 100 < card.odioP) {
        this.odio = Math.min(100, this.odio + Math.floor(6 * mult));
      }
      this.streakExitos = 0;
    }

    if(card.id === "pelea"){
      engGain = ok ? Math.floor(card.eng * mult * 1.2) : Math.floor(card.eng * 0.3);
      hateGain = ok ? Math.floor(card.hate * 0.3) : Math.floor(card.hate * mult * 1.2);
    }

    if(card.id === "bait"){
      this.baitCount++;
      if(ok){
        engGain = Math.floor((55 + rng(30)) * mult);
        const boostPct = boosterUsed?.fx.segsPct || 0;
        segsGain = Math.floor(this.seguidores * (0.05 + boostPct) + (300 * mult));
        this.odio = Math.min(100, this.odio + Math.floor(6 * mult));
      } else {
        engGain = Math.floor(20 * mult);
        segsGain = -Math.floor(this.seguidores * 0.03 * mult);
        this.odio = Math.min(100, this.odio + Math.floor(10 * mult));
        this.saludMental = Math.max(0, this.saludMental - 5);
      }
    }

    this.engagement = Math.max(0, this.engagement + engGain);
    this.seguidores = Math.max(100, this.seguidores + segsGain);
    this.dinero += dinGain;

    if(card.id === "pelea"){ this.streakPeleas++; this.streakHilos = 0; }
    else if(card.id === "hilo"){ this.streakHilos++; this.streakPeleas = 0; }
    else { this.streakPeleas = 0; this.streakHilos = 0; }

    // ── CANCELLATION EVENT & 3 STRIKES (Solo si la tirada de riesgo falla) ──
    const RISK_CARDS = ["pelea", "politica", "quote", "bait"];
    let cancellationEvent = null;
    if(!ok && RISK_CARDS.includes(card.id)) {
      const isTroll = this.personalidad.id === "troll";
      let riskPct = isTroll ? 25 : 15; // base 15%, troll 25%
      if (this.arquetipo.dificultad === "alta") riskPct += 12; // Arquetipos difíciles: peligro de cancelación latente
      else if (this.arquetipo.dificultad === "baja") riskPct -= 6; // Arquetipos casuales: cancelación protegida
      if(this.lastCard?.id === "descanso") riskPct -= 20;
      if(this.odio >= 65) riskPct += 10;
      riskPct = Math.max(5, Math.min(85, riskPct));

      if(Math.random() * 100 < riskPct) {
        this.strikesCancelacion++;

        const archKey = getArchKey(this.arquetipo.id);
        const archPool = (typeof archetypeCancellations !== 'undefined' && archetypeCancellations[archKey]) || [];
        const genPool = (typeof generalCancellations !== 'undefined') ? generalCancellations : [];
        const allCancs = [...archPool, ...genPool];
        const availCancs = allCancs.filter(c => !this.usedCancellationIds.has(c.id));
        const chosenCanc = (availCancs.length > 0 ? availCancs[rng(availCancs.length)] : allCancs[rng(allCancs.length)]) || {
          id: "canc_generic",
          titulo: "CRISIS EN EL TIMELINE",
          motivo: "Tus declaraciones provocaron un alud de repudio masivo.",
          texto: "El timeline entero se volcó a pedir tu cancelación.",
          tweetSimulado: "No me arrepiento de lo que dije. Si les molesta la verdad es problema de ustedes.",
          hate: 25, amor: -20, saludMental: -15, segsLostPct: 0.08
        };

        this.usedCancellationIds.add(chosenCanc.id);

        const odioInc = chosenCanc.hate || 20;
        const odioRed = isTroll || this.arquetipo.odioRed;
        this.odio = Math.min(100, this.odio + (odioRed ? Math.floor(odioInc * 0.7) : odioInc));
        this.amor = Math.max(0, this.amor + (chosenCanc.amor || -15));
        this.saludMental = Math.max(0, this.saludMental + (chosenCanc.saludMental || -15));
        if (chosenCanc.segsLostPct) {
          this.seguidores = Math.max(100, Math.floor(this.seguidores * (1 - chosenCanc.segsLostPct)));
        }

        cancellationEvent = {
          strike: this.strikesCancelacion,
          maxStrikes: 3,
          titulo: chosenCanc.titulo,
          motivo: chosenCanc.motivo,
          texto: chosenCanc.texto,
          tweetSimulado: chosenCanc.tweetSimulado,
          isFatal: this.strikesCancelacion >= 3
        };

        if (this.strikesCancelacion >= 3) {
          this.gameOver = true;
          this.final = getGenderedFinale(FINALE_CANCELACION_3STRIKES, this.genero);
        }
      }
    }

    this.lastCard = card; this.lastCardOk = ok;
    // Capture hand before cache is cleared (needed for gameLog alternatives)
    const _handSnapshot = this.cachedCards ? [...this.cachedCards] : [];
    this.cachedCards = null; this.cachedBoosters = null;

    this.turnLog.push({
      t: this.turno,
      type: "card",
      cardId: card.id,
      cardTitle: card.titulo,
      roll, chance, ok,
      booster: boosterUsed?.nombre || null,
      segsGain, engGain, hateGain, dinGain,
      cancellationEvent
    });

    // ── Rich gameLog for decision tree ──
    const CARD_ICONS = { meme:"🎭", tema:"📝", pelea:"⚔️", hilo:"🧵", quote:"💬",
      live:"📡", temaDelDia:"🔥", politica:"🗳️", bait:"🎣", patrocinio:"💰", descanso:"😴" };
    const chosenSlot = _handSnapshot.findIndex(c => c.titulo === card.titulo);
    const alternatives = _handSnapshot
      .filter(c => c.titulo !== card.titulo)
      .map(c => ({ id: c.id, title: c.titulo, icon: CARD_ICONS[c.id] || "🃏" }));
    this.gameLog.push({
      t: this.turno,
      type: "card",
      chosen: {
        id: card.id,
        title: card.titulo,
        icon: CARD_ICONS[card.id] || "🃏",
        slot: chosenSlot >= 0 ? chosenSlot : 1,
        ok, roll, chance,
        booster: boosterUsed?.nombre || null,
        viral: !!(segsGain > this.seguidores * 0.15),
        strike: cancellationEvent ? cancellationEvent.strike : null,
      },
      delta: { segs: segsGain, eng: engGain, hate: hateGain, din: dinGain },
      alternatives,
      snapshot: {
        segs: this.seguidores + segsGain,
        eng: this.engagement + engGain,
        credib: this.credibilidad,
        salud: this.saludMental,
        dinero: this.dinero + dinGain,
        hate: this.odio,
        strikes: this.strikesCancelacion,
      }
    });

    let rachaViralUpdate = null;
    if (this.rachaViralActive) {
      if (!ok) {
        // Fracaso inmediato: se quiebra la racha viral
        this.rachaViralActive = false;
        this.rachaViralDone = true;
        const lossPct = 0.30 + Math.random() * 0.10;
        const moneyLost = Math.floor(Math.max(0, this.dinero) * lossPct);
        this.dinero = Math.max(0, this.dinero - moneyLost);
        this.strikesCancelacion = Math.min(3, this.strikesCancelacion + 2);
        if (this.strikesCancelacion >= 3) {
          this.gameOver = true;
          this.final = getGenderedFinale(FINALE_CANCELACION_3STRIKES, this.genero);
        }
        rachaViralUpdate = {
          complete: true,
          success: false,
          moneyLost,
          strikes: this.strikesCancelacion,
          gameOver: this.gameOver
        };
      } else {
        this.rachaViralCount++;
        if (this.rachaViralCount >= 3) {
          // Racha viral completada con éxito
          this.rachaViralActive = false;
          this.rachaViralDone = true;
          const prizeRanges = {
            cryptobro: 0.90,
            militante: 0.85,
            onlyfans: 0.85,
            influencer: 0.80,
            humor: 0.80,
            conspiranoico: 0.75,
            gamer: 0.70,
            futbolero: 0.65,
            techie: 0.65,
            periodista: 0.60,
            opinologo: 0.60,
            podcaster: 0.55
          };
          const pct = (prizeRanges[this.arquetipo?.id] || 0.65) + (Math.random() - 0.5) * 0.15;
          const gained = Math.floor(Math.max(0, this.seguidores) * Math.max(0.3, pct));
          this.seguidores += gained;
          rachaViralUpdate = {
            complete: true,
            success: true,
            gained,
            pct: Math.round(pct * 100)
          };
        } else {
          rachaViralUpdate = {
            complete: false,
            remaining: 3 - this.rachaViralCount,
            wins: this.rachaViralCount
          };
        }
      }
    }

    const viral = this.checkViralización();
    return { ok, roll, chance, engGain, hateGain, segsGain, dinGain, viral, boosterUsed, cancellationEvent, rachaViralUpdate };
  }

  getAvailableBoosters() {
    if(this.cachedBoosters?.length>0) return this.cachedBoosters;
    const affordable=BOOSTERS.filter(b=>this.dinero>=b.costo&&!this.boosterCD[b.id]);
    if(affordable.length<=3){
      this.cachedBoosters=[...affordable].sort((a,b)=>a.costo-b.costo);
      return this.cachedBoosters;
    }
    const shuffled=[...affordable].sort(()=>Math.random()-0.5);
    this.cachedBoosters=shuffled.slice(0,3).sort((a,b)=>a.costo-b.costo);
    return this.cachedBoosters;
  }

  advanceTurn() {
    if(this.gameOver) return;

    if (this.dinero < 0) this.debtTurnos++; else this.debtTurnos = 0;
    if (this.debtTurnos >= 5) {
      this.gameOver = true; this.final = FINALE_DEUDA; return;
    }

    if (this.saludMental <= 0) {
      this.saludMental = 0;
      this.gameOver = true; this.final = FINALE_BURNOUT; return;
    }

    if (this.odio >= 100) {
      this.odio = 100;
      this.gameOver = true; this.final = getGenderedFinale(FINALE_CANCELACION_ZONAROJA, this.genero); return;
    }
    if (this.odio >= 80) {
      this.turnosEnZonaRoja++;
      if (this.turnosEnZonaRoja >= 3) {
        this.gameOver = true; this.final = getGenderedFinale(FINALE_CANCELACION_ZONAROJA, this.genero); return;
      }
    } else {
      this.turnosEnZonaRoja = 0;
    }

    if (this.turno >= 20) {
      this.gameOver = true;
      this.final = this._evaluateFinal();
      return;
    }

    this.turno++;
    this.prevSegs = this.seguidores;
    this.prevDin = this.dinero;
    this.dinero += this.calcPayout();
    this.history.push({ t: this.turno, segs: this.seguidores, din: this.dinero });

    Object.keys(this.boosterCD).forEach(k => {
      if (this.boosterCD[k] > 0) this.boosterCD[k]--;
      if (this.boosterCD[k] === 0) delete this.boosterCD[k];
    });

    if (this.algorithmEffect && this.algorithmEffect.turnosRestantes > 0) {
      this.algorithmEffect.turnosRestantes--;
      if (this.algorithmEffect.turnosRestantes === 0) {
        this.algorithmEffect = null;
      }
    }

    this.activeEvent = null;
    this.cachedCards = null;
    this.cachedBoosters = null;
  }

  _evaluateFinal() {
    let chosen = null;
    for (const f of FINALES) {
      if (f.evaluar && f.evaluar(this)) {
        let narrText = f.narrativa;
        if (Array.isArray(f.narrativas) && f.narrativas.length > 0) {
          narrText = f.narrativas[rng(f.narrativas.length)];
        }
        chosen = { ...f, narrativa: narrText };
        break;
      }
    }
    if (!chosen) chosen = FINALES[FINALES.length - 1];
    return getGenderedFinale(chosen, this.genero);
  }

  generateMatchReport() {
    const report = {
      game: "Twitero",
      version: "v15",
      id: `TW-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      setup: {
        genero: this.genero,
        arquetipo: getGenderedArchetype(this.arquetipo, this.genero),
        personalidad: this.personalidad.nombre,
        handle: this.handle
      },
      final: {
        titulo: this.final?.titulo || "FIN",
        seguidores: this.seguidores,
        dinero: this.dinero,
        saludMental: this.saludMental,
        engagement: this.engagement,
        credibilidad: this.credibilidad,
        viralidad: this.viralidad,
        amor: this.amor,
        odio: this.odio,
        strikesCancelacion: this.strikesCancelacion
      },
      turnos: this.turnLog
    };
    return JSON.stringify(report, null, 2);
  }
}


/* ?? M?DULO: src/ui/ui-engine.js ?? */
/* Twitero v15 ? src/ui/ui-engine.js */

class UIEngine {
  constructor(eng) {
    this.eng=eng;
    this.sel={genero:"hombre", arch:ARCHETYPES[0].id, pers:PERSONALITIES[0].id};
    this.currentCards=[];
    this.preparedBoosterId=null;
    this.isResolvingAction=false;
    this.cardsAlreadyFlipped=false;
  }

  showScreen(id) {
    document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
    const el=document.getElementById(id); if(el) el.classList.add("active");
  }

  init() {
    this._splash(); this._gender(); this._archetype(); this._personality();
    this._setupLanguageDropdown(); this._setupGlobalTooltips();
    this._setupTutorial();
    this._setupCancellationModal();
    this._setupHateModal();
    this._setupViralModal();
    this._setupProfileModal();
    this._setupShortcutsModal();
    this._setupGlobalKeyboardShortcuts();
    if(window.twemoji) window.twemoji.parse(document.body);
  }

  _setupGlobalKeyboardShortcuts() {
    window.addEventListener("keydown", (ev) => {
      // Ignorar si el usuario está escribiendo en un input
      if (ev.target.tagName === "INPUT" || ev.target.tagName === "TEXTAREA") return;

      const isSpace = ev.code === "Space";
      const isEnter = ev.code === "Enter";
      const isConfirm = isSpace || isEnter;

      // ── Cerrar alert-overlay con Espacio o Enter ──────────────────────
      const alertOverlay = document.getElementById("alert-overlay");
      if (alertOverlay && alertOverlay.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          const alertBtn = document.getElementById("alert-ok-btn") ||
                           document.getElementById("btn-alert-dismiss");
          alertBtn?.click();
          return;
        }
      }

      // ── Tutorial: Siguiente con Espacio ───────────────────────────────
      const tutorialModal = document.getElementById("tutorial-modal-overlay") ||
                            document.getElementById("tutorial-modal");
      if (tutorialModal && tutorialModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-tutorial-next")?.click();
          return;
        }
      }

      // ── Cancellation Modal: Siguiente con Espacio ──────────────────────
      const cancModal = document.getElementById("cancellation-modal-overlay");
      if (cancModal && cancModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-canc-next")?.click();
          return;
        }
      }

      // ── Hate Modal: Siguiente con Espacio ──────────────────────────────
      const hateModal = document.getElementById("hate-modal-overlay");
      if (hateModal && hateModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-hate-next")?.click();
          return;
        }
      }

      // ── Viral Modal: Siguiente con Espacio ─────────────────────────────
      const viralModal = document.getElementById("viral-modal-overlay");
      if (viralModal && viralModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          const vNext = document.getElementById("btn-viral-next");
          if (vNext && vNext.style.display !== "none") {
            vNext.click();
            return;
          }
        }
      }

      // ── End screens: JUGAR DE NUEVO con Espacio ───────────────────────
      const screenEnd1 = document.getElementById("screen-end1");
      const screenEnd2 = document.getElementById("screen-end2");
      if (isSpace) {
        if (screenEnd1 && screenEnd1.classList.contains("active")) {
          ev.preventDefault();
          document.getElementById("btn-end1-restart")?.click();
          return;
        }
        if (screenEnd2 && screenEnd2.classList.contains("active")) {
          ev.preventDefault();
          document.getElementById("btn-play-again")?.click();
          return;
        }
      }

      // ── Modal de atajos: toggle con '?' o 'K' ─────────────────────────
      if (ev.key === "?" || ev.code === "KeyK") {
        const sOverlay = document.getElementById("shortcuts-modal-overlay");
        if (sOverlay) {
          ev.preventDefault();
          sOverlay.classList.toggle("active");
          snd.click();
          return;
        }
      }

      // ── Modal de perfil: toggle con 'P' ───────────────────────────────
      if (ev.code === "KeyP") {
        const pOverlay = document.getElementById("perfil-modal-overlay");
        if (pOverlay) {
          ev.preventDefault();
          if (pOverlay.classList.contains("active")) {
            pOverlay.classList.remove("active");
          } else {
            snd.click();
            this._updateProfileModalContent();
            pOverlay.classList.add("active");
          }
          return;
        }
      }

      // ── Cerrar modales con Escape ────────────────────────────────────
      if (ev.key === "Escape") {
        const sOverlay = document.getElementById("shortcuts-modal-overlay");
        if (sOverlay && sOverlay.classList.contains("active")) {
          ev.preventDefault();
          sOverlay.classList.remove("active");
          return;
        }
      }

      const screenGame = document.getElementById("screen-game");
      const isGameActive = screenGame && screenGame.classList.contains("active");
      if (!isGameActive || this.isResolvingAction) return;

      // ── Atajos Q, W, E para Boosters ─────────────────────────────────
      if (ev.code === "KeyQ" || ev.code === "KeyW" || ev.code === "KeyE") {
        const bIdx = ev.code === "KeyQ" ? 0 : ev.code === "KeyW" ? 1 : 2;
        const available = this.eng.getAvailableBoosters();
        if (available && available[bIdx]) {
          ev.preventDefault();
          const bId = available[bIdx].id;
          if (this.preparedBoosterId === bId) {
            this.preparedBoosterId = null;
            snd.click();
          } else {
            this.preparedBoosterId = bId;
            snd.boost();
          }
          this._renderCards();
          document.querySelectorAll(".booster-tile").forEach(t => {
            t.classList.toggle("highlighted", t.dataset.id === this.preparedBoosterId);
          });
        }
        return;
      }

      // ── Atajos 1, 2, 3 para jugar cartas ─────────────────────────────
      if (ev.key === "1" || ev.key === "2" || ev.key === "3") {
        const idx = parseInt(ev.key) - 1;
        // Si hay evento interactivo abierto, seleccionar postura según tarjeta física
        const eventSec = document.getElementById("event-section");
        if (eventSec && eventSec.style.display !== "none") {
          const optBtns = eventSec.querySelectorAll(".event-truco-card");
          if (optBtns && optBtns[idx]) {
            ev.preventDefault();
            const optIdx = parseInt(optBtns[idx].dataset.idx);
            this._chooseEventOption(optIdx);
          }
          return;
        }

        // Si son cartas normales
        if (this.currentCards && this.currentCards[idx]) {
          ev.preventDefault();
          this._playCardIdx(idx);
        }
      }
    });
  }

  _setupShortcutsModal() {
    const overlay = document.getElementById("shortcuts-modal-overlay");
    const openBtn = document.getElementById("btn-ver-shortcuts");
    const closeBtn = document.getElementById("btn-close-shortcuts");
    if (!overlay) return;

    if (openBtn) openBtn.onclick = () => {
      snd.click();
      overlay.classList.add("active");
    };
    if (closeBtn) closeBtn.onclick = () => {
      snd.click();
      overlay.classList.remove("active");
    };
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    };
  }

  _setupProfileModal() {
    const overlay = document.getElementById("perfil-modal-overlay");
    const openBtn = document.getElementById("btn-ver-perfil");
    const closeBtn = document.getElementById("btn-close-perfil");
    if(!overlay) return;

    if(openBtn) openBtn.onclick = () => {
      snd.click();
      this._updateProfileModalContent();
      overlay.classList.add("active");
    };
    if(closeBtn) closeBtn.onclick = () => {
      snd.click();
      overlay.classList.remove("active");
    };
  }

  _updateProfileModalContent() {
    const e = this.eng, arch = e.arquetipo, pers = e.personalidad;
    const pron = GENERO_LABELS[e.genero] || "Elle";
    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(arch, e.genero);

    const avEl = document.getElementById("perfil-avatar"); if(avEl) avEl.textContent = currentAvatar;
    const nameEl = document.getElementById("perfil-name"); if(nameEl) nameEl.textContent = genderedArch.toUpperCase();
    const handleEl = document.getElementById("perfil-handle"); if(handleEl) handleEl.textContent = `${e.handle} · ${pers.icono} ${pers.nombre.toUpperCase()}`;

    const aChips = (arch.afines||[]).map(f=>`<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
    const dChips = (arch.debiles||[]).map(f=>`<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
    const synergyLine = e.comboRisk ? "+6% a todas las tiradas por perfil no convencional" : "Combo canónico — sin bonus adicional";
    const goalPct = Math.min(100, Math.floor((e.seguidores/80000)*100));

    const archDesc = typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(arch, e.genero) : arch.desc;
    const persDesc = typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(pers, e.genero) : pers.desc;

    const contentEl = document.getElementById("perfil-identity-content");
    if(contentEl) {
      contentEl.innerHTML = `
        <div class="char-identity-box" style="border:1px solid var(--border); margin-bottom:8px;">
          <div class="id-row"><span class="id-label">PRONOMBRES</span><span class="id-val">${pron}</span></div>
          <div class="id-row"><span class="id-label">ARQUETIPO</span><span class="id-val">${genderedArch} // ${archDesc}</span></div>
          <div class="id-row"><span class="id-label">PERSONALIDAD</span><span class="id-val">${persDesc}</span></div>
          <div class="id-row"><span class="id-label">CARTAS AFINES</span><span>${aChips}</span></div>
          <div class="id-row"><span class="id-label">CARTAS DÉBILES</span><span>${dChips}</span></div>
          <div class="id-row"><span class="id-label">RASGOS</span><span class="id-val" style="color:var(--blue-bright)">${pers.bonus} · ${pers.malus}</span></div>
          <div class="id-row"><span class="id-label">SINERGIA</span><span class="id-val">${synergyLine}</span></div>
          <div class="id-row"><span class="id-label">CANCELACIONES</span><span class="id-val" style="color:${e.strikesCancelacion>0?'var(--red)':'var(--green)'}; font-weight:700;">STRIKES: ${e.strikesCancelacion} / 3</span></div>
        </div>
        <div class="goal-progress-box" style="border:1px solid var(--border);">
          <div class="goal-label">META DE VICTORIA: 80K SEGUIDORES — ${goalPct}%</div>
          <div class="goal-track"><div class="goal-fill" style="width:${goalPct}%"></div></div>
        </div>
      `;
    }
  }

  _setupTutorial() {
    this.tutSlide = 1;
    this.tutMax = 4;
    const updateTut = () => {
      document.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i+1 === this.tutSlide));
      document.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i+1 === this.tutSlide));
      document.getElementById("btn-tutorial-prev").style.visibility = this.tutSlide > 1 ? "visible" : "hidden";
      document.getElementById("btn-tutorial-next").textContent = this.tutSlide === this.tutMax ? "COMENZAR ▶" : "SIGUIENTE ➡";
    };
    
    const closeTut = () => {
      snd.click();
      document.getElementById("tutorial-modal-overlay").classList.remove("active");
      if (this._onTutorialClose) {
        const cb = this._onTutorialClose;
        this._onTutorialClose = null;
        cb();
      }
    };
    document.getElementById("btn-tutorial-skip-top")?.addEventListener("click", closeTut);
    document.getElementById("btn-tutorial-skip-bottom")?.addEventListener("click", () => { closeTut(); });
    
    document.getElementById("btn-tutorial-next")?.addEventListener("click", () => {
      snd.click();
      if(this.tutSlide < this.tutMax) { this.tutSlide++; updateTut(); } else { closeTut(); }
    });
    document.getElementById("btn-tutorial-prev")?.addEventListener("click", () => {
      snd.click();
      if(this.tutSlide > 1) { this.tutSlide--; updateTut(); }
    });
  }

  _startTutorial() {
    this.tutSlide = 1;
    document.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    document.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    document.getElementById("btn-tutorial-prev").style.visibility = "hidden";
    document.getElementById("btn-tutorial-next").textContent = "SIGUIENTE ➡";
    document.getElementById("tutorial-modal-overlay").classList.add("active");
  }

  _setupCancellationModal() {
    this.cancSlide = 1;
    this.cancMax = 3;
    const overlay = document.getElementById("cancellation-modal-overlay");
    if (!overlay) return;

    const updateCanc = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.cancSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.cancSlide));
      const prevBtn = document.getElementById("btn-canc-prev");
      const nextBtn = document.getElementById("btn-canc-next");
      if (prevBtn) prevBtn.style.visibility = this.cancSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.textContent = this.cancSlide === this.cancMax ? "ENTENDIDO ✕" : "SIGUIENTE ➡";
    };

    const closeCanc = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onCancClose) {
        const cb = this._onCancClose;
        this._onCancClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-canc-modal")?.addEventListener("click", closeCanc);
    document.getElementById("btn-canc-next")?.addEventListener("click", () => {
      snd.click();
      if (this.cancSlide < this.cancMax) {
        this.cancSlide++;
        updateCanc();
      } else {
        closeCanc();
      }
    });
    document.getElementById("btn-canc-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.cancSlide > 1) {
        this.cancSlide--;
        updateCanc();
      }
    });
  }

  _showCancellationModal(onClose) {
    this._onCancClose = onClose || null;
    this.cancSlide = 1;
    const overlay = document.getElementById("cancellation-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-canc-prev");
    const nextBtn = document.getElementById("btn-canc-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.textContent = "SIGUIENTE ➡";
    snd.alert();
    overlay.classList.add("active");
  }

  _setupHateModal() {
    this.hateSlide = 1;
    this.hateMax = 3;
    const overlay = document.getElementById("hate-modal-overlay");
    if (!overlay) return;

    const updateHate = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.hateSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.hateSlide));
      const prevBtn = document.getElementById("btn-hate-prev");
      const nextBtn = document.getElementById("btn-hate-next");
      if (prevBtn) prevBtn.style.visibility = this.hateSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.textContent = this.hateSlide === this.hateMax ? "ENTENDIDO ✕" : "SIGUIENTE ➡";
    };

    const closeHate = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onHateClose) {
        const cb = this._onHateClose;
        this._onHateClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-hate-modal")?.addEventListener("click", closeHate);
    document.getElementById("btn-hate-next")?.addEventListener("click", () => {
      snd.click();
      if (this.hateSlide < this.hateMax) {
        this.hateSlide++;
        updateHate();
      } else {
        closeHate();
      }
    });
    document.getElementById("btn-hate-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.hateSlide > 1) {
        this.hateSlide--;
        updateHate();
      }
    });
  }

  _showHateModal(onClose) {
    this._onHateClose = onClose || null;
    this.hateSlide = 1;
    const overlay = document.getElementById("hate-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-hate-prev");
    const nextBtn = document.getElementById("btn-hate-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.textContent = "SIGUIENTE ➡";
    snd.alert();
    overlay.classList.add("active");
  }

  _setupViralModal() {
    this.viralSlide = 1;
    this.viralMax = 3;
    const overlay = document.getElementById("viral-modal-overlay");
    if (!overlay) return;

    const updateViral = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.viralSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.viralSlide));
      const prevBtn = document.getElementById("btn-viral-prev");
      const nextBtn = document.getElementById("btn-viral-next");
      if (prevBtn) prevBtn.style.visibility = this.viralSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.style.display = this.viralSlide === this.viralMax ? "none" : "block";
    };

    const closeViral = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onViralClose) {
        const cb = this._onViralClose;
        this._onViralClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-viral-modal")?.addEventListener("click", () => {
      this.eng.rachaViralDone = true;
      closeViral();
    });

    document.getElementById("btn-viral-decline")?.addEventListener("click", () => {
      snd.click();
      this.eng.rachaViralDone = true;
      this.eng.rachaViralActive = false;
      closeViral();
    });

    document.getElementById("btn-viral-accept")?.addEventListener("click", () => {
      snd.legendary();
      this.eng.startRachaViral();
      closeViral();
    });

    document.getElementById("btn-viral-next")?.addEventListener("click", () => {
      snd.click();
      if (this.viralSlide < this.viralMax) {
        this.viralSlide++;
        updateViral();
      }
    });

    document.getElementById("btn-viral-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.viralSlide > 1) {
        this.viralSlide--;
        updateViral();
      }
    });
  }

  _showViralModal(onClose) {
    this._onViralClose = onClose || null;
    this.viralSlide = 1;
    const overlay = document.getElementById("viral-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-viral-prev");
    const nextBtn = document.getElementById("btn-viral-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) {
      nextBtn.style.display = "block";
      nextBtn.textContent = "SIGUIENTE ➡";
    }
    snd.alert();
    overlay.classList.add("active");
  }

  _splash() {
    const btn=document.getElementById("btn-start");
    if(btn) btn.onclick=()=>{ snd.click(); this.showScreen("screen-gender"); };

    const btnRanking = document.getElementById("btn-splash-ranking");
    if(btnRanking) btnRanking.onclick=()=>{ snd.click(); this._openRankingModal(); };

    const btnTutorial = document.getElementById("btn-tutorial-open");
    if(btnTutorial) btnTutorial.onclick=()=>{ snd.click(); this._startTutorial(); };
  }

  _openRankingModal() {
    const overlay = document.getElementById("ranking-modal-overlay");
    if(!overlay) return;
    RankingManager.renderTables("ranking-daily-body", "ranking-alltime-body");
    overlay.classList.add("active");
    const closeBtns = overlay.querySelectorAll(".ranking-modal-close, #btn-close-ranking-modal, #btn-ranking-ok");
    closeBtns.forEach(btn => {
      btn.onclick = () => { snd.click(); overlay.classList.remove("active"); };
    });
    overlay.onclick = (e) => {
      if(e.target === overlay) { snd.click(); overlay.classList.remove("active"); }
    };
  }

  _showRankingPromptThenSave() {
    const e = this.eng;
    const defaultHandle = e.arquetipo.defaultHandle || "@twitero";
    const hasCustomHandle = e.handle && e.handle !== defaultHandle;
    const score = calculateScore(e);
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);

    const doSave = (handle) => {
      const finalHandle = handle && handle.trim().length > 0
        ? (handle.startsWith("@") ? handle.trim() : "@"+handle.trim())
        : e.handle;
      const entry = {
        handle: finalHandle,
        arch: genderedArch,
        archIcon: e.arquetipo.icono,
        final: e.final?.titulo || "—",
        segs: e.seguidores,
        score: score,
        date: new Date().toISOString().split("T")[0]
      };
      RankingManager.addScore(entry);
    };

    if(hasCustomHandle) {
      doSave(e.handle);
      this._openRankingModal();
    } else {
      const overlay = document.getElementById("ranking-prompt-overlay");
      if(!overlay){ doSave(e.handle); this._openRankingModal(); return; }
      overlay.classList.add("active");

      const input = document.getElementById("ranking-prompt-input");
      const btnSubmit = document.getElementById("btn-ranking-prompt-submit");
      const btnSkip = document.getElementById("btn-ranking-prompt-skip");

      if(btnSubmit) btnSubmit.onclick = () => {
        snd.click();
        const val = input ? input.value.trim() : "";
        doSave(val || e.handle);
        overlay.classList.remove("active");
        this._openRankingModal();
      };
      if(btnSkip) btnSkip.onclick = () => {
        snd.click();
        overlay.classList.remove("active");
        this._openRankingModal();
      };
      if(input) input.addEventListener("keydown", (ev) => {
        if(ev.key === "Enter") { btnSubmit?.click(); }
      });
    }
  }

  _setupLanguageDropdown() {
    const btn = document.getElementById("lang-dropdown-btn");
    const menu = document.getElementById("lang-dropdown-menu");
    if (!btn || !menu) return;

    btn.onclick = (e) => {
      e.stopPropagation();
      snd.click();
      menu.classList.toggle("active");
    };

    document.addEventListener("click", () => {
      menu.classList.remove("active");
    });

    menu.querySelectorAll(".lang-opt").forEach(opt => {
      opt.onclick = (e) => {
        e.stopPropagation();
        snd.click();
        const lang = opt.dataset.lang;
        menu.classList.remove("active");
        if (lang === "es") return;
        this._showAlert("IDIOMA EN DESARROLLO", `El soporte para ${lang==="en"?"Inglés (🇬🇧 English)":"Japonés (🇯🇵 日本語)"} estará disponible en una próxima actualización.`, "🌐 LOCALIZACIÓN");
      };
    });
  }

  _setupGlobalTooltips() {
    const tt=document.getElementById("global-tooltip"); if(!tt) return;
    document.addEventListener("mouseover",(e)=>{
      const target=e.target.closest("[data-tooltip]");
      if(target){
        const text=target.getAttribute("data-tooltip");
        if(text){ tt.innerHTML=text; tt.classList.add("active"); const rect=target.getBoundingClientRect();
          const left=Math.min(window.innerWidth-290,Math.max(10,rect.left+(rect.width/2)-130));
          tt.style.top=`${rect.bottom+8}px`; tt.style.left=`${left}px`; }
      }
    });
    document.addEventListener("mouseout",(e)=>{ if(e.target.closest("[data-tooltip]")) tt.classList.remove("active"); });
  }

  _showAlert(title, text, meta, isLegendary=false, onDismiss=null, customIcon=null) {
    const overlay=document.getElementById("alert-overlay");
    if(!overlay) return;
    const titleEl=document.getElementById("alert-title"); if(titleEl) titleEl.innerHTML=title;
    const textEl=document.getElementById("alert-text"); if(textEl) textEl.innerHTML=text;
    const metaEl=document.getElementById("alert-meta");
    if(metaEl) {
      if(meta && meta.trim() !== "") {
        metaEl.innerHTML = meta;
        metaEl.style.display = "inline-flex";
      } else {
        metaEl.innerHTML = "";
        metaEl.style.display = "none";
      }
    }
    const iconEl=document.getElementById("alert-icon");
    if(iconEl) {
      if(customIcon) {
        iconEl.textContent = customIcon;
        iconEl.style.display = "block";
      } else if (customIcon === false) {
        iconEl.style.display = "none";
      } else {
        iconEl.textContent = isLegendary ? "🏆" : "⚡";
        iconEl.style.display = "block";
      }
    }
    const boxEl=document.getElementById("alert-box");

    if (isLegendary && boxEl) {
      boxEl.className = "alert-box legendary";
      snd.legend();
    } else if (boxEl) {
      boxEl.className = "alert-box";
      snd.alert();
    }

    if (onDismiss) {
      this._onAlertDismiss = onDismiss;
    }

    overlay.classList.add("active");
    const okBtn=document.getElementById("alert-ok-btn");
    if(okBtn) {
      okBtn.onclick=()=>{
        overlay.classList.remove("active");
        if(this._onAlertDismiss) {
          const cb = this._onAlertDismiss;
          this._onAlertDismiss = null;
          cb();
        }
      };
    }
  }

  _gender() {
    const grid=document.getElementById("gender-grid"); if(!grid) return;
    const opts=[{id:"hombre",icon:"👨",name:"Hombre",desc:"Pronombres masculinos.",meta:"PRON: ÉL"},{id:"mujer",icon:"👩",name:"Mujer",desc:"Pronombres femeninos.",meta:"PRON: ELLA"},{id:"diverso",icon:"🧑",name:"Diverso",desc:"Lenguaje neutro.",meta:"PRON: ELLE"}];
    grid.innerHTML=opts.map(o=>`<div class="sel-card" data-id="${o.id}"><div class="sc-icon-wrap">${o.icon}</div><div class="sc-name">${o.name}</div><div class="sc-desc">${o.desc}</div><div class="sc-meta">${o.meta}</div></div>`).join("");
    grid.querySelectorAll(".sel-card").forEach(c=>{ c.onclick=()=>{ snd.click(); this.sel.genero=c.dataset.id; this.showScreen("screen-archetype"); this._archetype(); }; });
  }

  _archetype() {
    const grid=document.getElementById("archetype-grid"); if(!grid) return;
    const available = typeof isArchetypeAvailableForGender === "function" 
      ? ARCHETYPES.filter(a => isArchetypeAvailableForGender(a.id, this.sel.genero))
      : ARCHETYPES;
    grid.innerHTML=available.map(a=>{
      const genderedName = getGenderedArchetype(a, this.sel.genero);
      const difClass = a.dificultad === "alta" ? "chip-dif-alta" : a.dificultad === "media" ? "chip-dif-media" : "chip-dif-baja";
      const difBadge = `<span class="chip-dif ${difClass}">DIFICULTAD ${a.difLabel || "MEDIA"}</span>`;
      const afinesHtml=(a.afines||[]).map(f=>`<span class="chip-afin">${CARD_PALOS[f]?.icono||"⭐"} ${f}</span>`).join("");
      const debilesHtml=(a.debiles||[]).map(f=>`<span class="chip-debil">${CARD_PALOS[f]?.icono||"💀"} ${f}</span>`).join("");
      const passiveText = a.difDesc || (a.bajomon?"Bajo Monetize · ":"") + (a.odioRed?"Odio Reducido":"");
      const archDesc = typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(a, this.sel.genero) : a.desc;

      const tip = `<strong>${a.icono} ${genderedName.toUpperCase()}</strong><br><div style='margin:6px 0;'>${difBadge}</div>${archDesc}<br><div style='margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;'>${afinesHtml}${debilesHtml}</div>${passiveText ? `<div style='margin-top:6px;color:var(--blue);font-size:0.75rem;'>${passiveText}</div>` : ''}`.replace(/"/g, '&quot;');

      return `<div class="sel-card sel-card-clean" data-id="${a.id}" data-tooltip="${tip}">
        <div class="sc-icon-wrap">${a.icono}</div>
        <div class="sc-name">${genderedName}</div>
        <div class="sc-desc">${archDesc}</div>
      </div>`;
    }).join("");
    grid.querySelectorAll(".sel-card").forEach(c=>{
      c.onclick=()=>{
        snd.click();
        this.sel.arch=c.dataset.id;
        const archObj = ARCHETYPES.find(a=>a.id===c.dataset.id);
        const handleInput = document.getElementById("user-handle-input");
        if (handleInput && archObj) {
          const customDefHandle = typeof getGenderedDefaultHandle === "function" ? getGenderedDefaultHandle(archObj, this.sel.genero) : archObj.defaultHandle;
          handleInput.value = customDefHandle.replace("@","") || "twitero";
        }
        this.showScreen("screen-personality");
      };
    });
  }

  _personality() {
    const grid=document.getElementById("personality-grid"); if(!grid) return;
    grid.innerHTML=PERSONALITIES.map(p=>{
      const persDesc = typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(p, this.sel.genero) : p.desc;
      const tip = `<strong>${p.icono} ${p.nombre.toUpperCase()}</strong><br>${persDesc}<br><div style='margin-top:6px;color:var(--blue);font-family:var(--font-mono);font-size:0.75rem;'>RIESGO: ${p.riesgo.toUpperCase()} · RETORNO: ${p.retorno.toUpperCase()}</div>${p.bonus ? `<div style='color:var(--green);font-size:0.72rem;margin-top:2px;'>+ ${p.bonus}</div>` : ''}${p.malus ? `<div style='color:var(--red);font-size:0.72rem;'>- ${p.malus}</div>` : ''}`.replace(/"/g, '&quot;');

      return `<div class="sel-card sel-card-clean" data-id="${p.id}" data-tooltip="${tip}">
        <div class="sc-icon-wrap">${p.icono}</div>
        <div class="sc-name">${p.nombre}</div>
        <div class="sc-desc">${persDesc}</div>
      </div>`;
    }).join("");

    grid.querySelectorAll(".sel-card").forEach(c=>{
      c.onclick=()=>{
        snd.click();
        this.sel.pers=c.dataset.id;
        const handleInput = document.getElementById("user-handle-input");
        const customHandle = handleInput ? handleInput.value.trim() : null;
        this.eng.init(this.sel.genero, this.sel.arch, this.sel.pers, customHandle);
        this.showScreen("screen-game");
        this._updateStatsOnly();
        this._onTutorialClose = () => {
          this._renderFullTurn();
        };
        this._startTutorial();
      };
    });
  }

  _updateStatsOnly() {
    const e=this.eng;
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };

    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const iconEl=document.getElementById("char-icon"); if(iconEl) iconEl.textContent=currentAvatar;
    set("char-name", genderedArch.toUpperCase());
    set("char-pers",`${e.handle} · ${e.personalidad.icono} ${e.personalidad.nombre.toUpperCase()}`);

    const identEl=document.getElementById("char-identity");
    if(identEl){
      const pron=GENERO_LABELS[e.genero]||"Elle";
      const arch=e.arquetipo, pers=e.personalidad;
      const aChips=(arch.afines||[]).map(f=>`<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      const dChips=(arch.debiles||[]).map(f=>`<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      identEl.innerHTML=`
        <div class="id-row"><span class="id-label">CUENTA X</span><span class="id-val" style="color:var(--blue-bright)">${e.handle}</span></div>
        <div class="id-row"><span class="id-label">PRONOMBRES</span><span class="id-val">${pron}</span></div>
        <div class="id-row"><span class="id-label">ARQUETIPO</span><span class="id-val">${genderedArch}</span></div>
        <div class="id-row"><span class="id-label">PERSONALIDAD</span><span class="id-val">${pers.desc}</span></div>
        <div class="id-row"><span class="id-label">AFINES</span><span>${aChips}</span></div>
        <div class="id-row"><span class="id-label">DÉBILES</span><span>${dChips}</span></div>
      `;
    }

    const segEl=document.getElementById("stat-followers");
    if(segEl){
      const delta=e.prevSegs>0?((e.seguidores-e.prevSegs)/e.prevSegs*100):0;
      const sign=delta>=0?"+":"";
      const color=delta>=0?"var(--green)":"var(--red)";
      const arrow=delta>=0?"▲":"▼";
      segEl.innerHTML=`${e.seguidores.toLocaleString("es-AR")}<span class="stat-delta" style="color:${color}">${arrow}${sign}${delta.toFixed(1)}%</span>`;
    }

    const monEl=document.getElementById("stat-money");
    if(monEl){
      const delta=e.prevDin>0?((e.dinero-e.prevDin)/Math.abs(e.prevDin)*100):0;
      const sign=delta>=0?"+":"";
      const color=delta>=0?"var(--green)":"var(--red)";
      const arrow=delta>=0?"▲":"▼";
      monEl.innerHTML=`$${e.dinero.toLocaleString("es-AR")}<span class="stat-delta" style="color:${color}">${arrow}${sign}${delta.toFixed(1)}%</span>`;
    }

    set("stat-engagement","⚡ "+e.engagement);
    set("stat-sm-val",e.saludMental+"%");
    set("stat-cred",e.credibilidad);
    set("stat-viral",e.viralidad);
    set("lbl-amor","💜 "+e.amor);
    set("lbl-odio",e.odio+" ❤️‍🔥");
    set("turn-badge",`TURNO ${String(e.turno).padStart(2,"0")} / 20`);
    set("sb-turn-label",`T-${String(e.turno).padStart(2,"0")}/20`);

    const payEl=document.getElementById("stat-payout-label"); if(payEl) payEl.textContent=`+~$${e.calcPayout().toLocaleString()}/T`;

    const smF=document.getElementById("sm-fill");
    if(smF){ smF.style.width=e.saludMental+"%"; smF.style.background=e.saludMental>60?"var(--green)":e.saludMental>30?"var(--amber)":"var(--red)"; }

    const tot=(e.amor+e.odio)||1;
    const lv=document.getElementById("dual-love"), hv=document.getElementById("dual-hate");
    if(lv) lv.style.width=(e.amor/tot*100)+"%";
    if(hv){
      hv.style.width=(e.odio/tot*100)+"%";
      hv.classList.remove("odio-bar-warning","odio-bar-danger","odio-bar-critical");
      if(e.odio>=80)      { hv.style.background="#b91c1c"; hv.classList.add("odio-bar-critical"); }
      else if(e.odio>=65) { hv.style.background="#ef4444"; hv.classList.add("odio-bar-danger"); }
      else if(e.odio>=50) { hv.style.background="#f97316"; hv.classList.add("odio-bar-warning"); }
      else                { hv.style.background="var(--red)"; }
    }

    const tbSegs=document.getElementById("tb-segs"); if(tbSegs) tbSegs.textContent=`👥 ${e.seguidores.toLocaleString("es-AR")}`;
    const tbDin=document.getElementById("tb-din"); if(tbDin) tbDin.textContent=`💰 $${e.dinero.toLocaleString("es-AR")}`;

    const tbSmFill=document.getElementById("tb-sm-fill");
    const tbSmVal=document.getElementById("tb-sm-val");
    if(tbSmFill){
      tbSmFill.style.width=e.saludMental+"%";
      tbSmFill.style.background=e.saludMental>60?"var(--green)":e.saludMental>30?"var(--amber)":"var(--red)";
    }
    if(tbSmVal) tbSmVal.textContent=e.saludMental+"%";

    const tbOdioFill=document.getElementById("tb-odio-fill");
    const tbOdioVal=document.getElementById("tb-odio-val");
    if(tbOdioFill){
      tbOdioFill.style.width=Math.min(100,e.odio)+"%";
      tbOdioFill.style.background=e.odio>=80?"#b91c1c":e.odio>=65?"#ef4444":e.odio>=50?"#f97316":"var(--red)";
    }
    if(tbOdioVal) tbOdioVal.textContent=e.odio+"%";

    const rvBanner = document.getElementById("racha-viral-banner");
    if (rvBanner) {
      if (e.rachaViralActive) {
        rvBanner.style.display = "flex";
        const wins = e.rachaViralCount || 0;
        rvBanner.innerHTML = `
          <div class="racha-viral-badge">🔥 MOMENTO VIRAL ACTIVO</div>
          <div class="racha-viral-progress">
            <span>OBJETIVO: 3 TWEETS EXITOSOS</span>
            <div class="racha-viral-dots">
              <div class="rv-step ${wins >= 1 ? 'done' : 'current'}">${wins >= 1 ? '✓' : '1'}</div>
              <div class="rv-step ${wins >= 2 ? 'done' : (wins === 1 ? 'current' : '')}">${wins >= 2 ? '✓' : '2'}</div>
              <div class="rv-step ${wins >= 3 ? 'done' : (wins === 2 ? 'current' : '')}">${wins >= 3 ? '✓' : '3'}</div>
            </div>
          </div>
          <div class="racha-viral-warning">⚠️ Un fallo = -$ (35%) y +2 strikes</div>
        `;
      } else {
        rvBanner.style.display = "none";
      }
    }

    this._renderBuildPanel();
    this._renderProgressBar();
    this._renderSparkline();
  }

  _renderBuildPanel() {
    const el=document.getElementById("build-panel"); if(!el) return;
    const e=this.eng, arch=e.arquetipo, pers=e.personalidad;
    const genderedArch = getGenderedArchetype(arch, e.genero);
    const synergyLine=e.comboRisk?"+6% a todas las tiradas por perfil no convencional":"Combo canónico — sin bonus adicional";
    el.innerHTML=`
      <div class="build-row"><span>🎭 ${genderedArch}</span><span class="build-val">Cartas afines: ${(arch.afines||[]).join(", ")}</span></div>
      <div class="build-row"><span>${pers.icono} ${pers.nombre}</span><span class="build-val">${pers.bonus} · ${pers.malus}</span></div>
      <div class="build-row"><span>⚡ Sinergia</span><span class="build-val">${synergyLine}</span></div>
    `;
  }

  _renderProgressBar() {
    const el=document.getElementById("goal-progress"); if(!el) return;
    const pct=Math.min(100,(this.eng.seguidores/80000)*100);
    const fill=el.querySelector(".goal-fill");
    const label=el.querySelector(".goal-label");
    if(fill) fill.style.width=pct+"%";
    if(label) label.textContent=`META DE VICTORIA: 80K SEGUIDORES — ${pct.toFixed(0)}%`;
  }

  _renderSparkline() {
    const svg=document.getElementById("sparkline-svg");
    if(!svg||this.eng.history.length<2) return;
    const hist=this.eng.history, vals=hist.map(h=>h.segs);
    const min=Math.min(...vals), max=Math.max(...vals)||1;
    const W=180, H=28;
    const pts=vals.map((v,i)=>{ const x=(i/(vals.length-1))*W, y=H-((v-min)/(max-min||1))*(H-4)-2; return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
    svg.innerHTML=`<polyline points="${pts}" fill="none" stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  _renderFullTurn() {
    if(this.eng.gameOver){ this._showEnd1(); return; }

    this.cardsAlreadyFlipped = false; // Permite flip una sola vez al inicio del turno
    this._updateStatsOnly();
    this._checkTurnWarningModals();

    // ── CHECK EVENTOS FORTUITOS (Medios, Famoso, Algoritmo) ──
    const fort = this.eng.checkFortuitousEvents ? this.eng.checkFortuitousEvents() : null;
    if (fort) {
      snd.alert();
      this._showAlert(
        `${fort.icono} ${fort.titulo}`,
        `${fort.desc}<br><br><strong style='color:var(--green); font-family:var(--font-mono);'>${fort.consecuencia}</strong>`,
        ""
      );
      this._updateStatsOnly();
    }

    // ── CHECK NUEVOS BOOSTERS DISPONIBLES ──
    if (!this.unlockedBoostersShown) this.unlockedBoostersShown = new Set();
    const newlyAffordable = BOOSTERS.filter(b => this.eng.dinero >= b.costo && !this.unlockedBoostersShown.has(b.id));
    if (newlyAffordable.length > 0) {
      newlyAffordable.forEach(b => this.unlockedBoostersShown.add(b.id));
      const bShowcases = newlyAffordable.map(b => `
        <div class="booster-unlock-showcase">
          <div class="booster-badge-icon">${b.icono}</div>
          <div class="booster-showcase-title">${b.nombre}</div>
          <div class="booster-price-pill">$${b.costo.toLocaleString()}</div>
        </div>
      `).join("");

      this._showAlert(
        "NUEVO BOOSTER DISPONIBLE",
        `${bShowcases}`,
        "TIENDA DE BOOSTERS",
        true,
        null,
        "🚀"
      );
    }

    // ── CHECK EVENTO VIRAL (Racha Viral) ──
    const rachaViral = this.eng.checkRachaViral ? this.eng.checkRachaViral() : null;
    if (rachaViral) {
      this._showViralModal(() => {
        this._continueRenderTurn();
      });
      return;
    }

    this._continueRenderTurn();
  }

  _continueRenderTurn() {
    this._updateStatsOnly();

    // ── CHECK EVENTOS INTERACTIVOS (Dilemas con Pop-up de anuncio previo) ──
    const ev = this.eng.checkSpecialEvent();
    if(ev){
      document.getElementById("cards-section").style.display = "none";
      document.getElementById("event-section").style.display = "none";
      document.getElementById("interactive-event-box").style.display = "none";

      this._showAlert(
        `⚡ ${ev.titulo.toUpperCase()}`,
        `${ev.desc}`,
        ev.tag,
        false,
        () => {
          this._renderInteractiveEvent(ev);
        }
      );
      return;
    }

    document.getElementById("cards-section").style.display = "block";
    document.getElementById("event-section").style.display = "none";
    document.getElementById("interactive-event-box").style.display = "none";

    this._renderBoosters();
    this._renderCards();
  }

  _checkTurnWarningModals() {
    const e = this.eng;
    if (e.odio >= 80) {
      if (e.turnosEnZonaRoja === 1 && !e.cancelWarningShown['zr1']) {
        e.cancelWarningShown['zr1'] = true;
        this._showHateModal();
      } else if (e.turnosEnZonaRoja === 2 && !e.cancelWarningShown['zr2']) {
        e.cancelWarningShown['zr2'] = true;
        snd.alert();
        this._showAlert(
          "🚨 ZONA ROJA — ¡ÚLTIMO TURNO DE GRACIA! (2/3)",
          `<div class="strike-meter-row">
             <div class="strike-slot active-2">🔥 TURNO 1: ACTIVO</div>
             <div class="strike-slot active-2">🚨 TURNO 2: EN CURSO</div>
             <div class="strike-slot danger-target">☠️ TURNO 3: EXPULSIÓN</div>
           </div>
           <div class="strike-info-card critical">
             <strong>💀 PELIGRO INMINENTE DE SUSPENSIÓN</strong><br>
             Llevás 2 turnos consecutivos con Odio ≥ 80%. <strong>Si este turno termina sin bajar el Odio por debajo de 80%, perderás la partida automáticamente por Hostilidad Extrema.</strong>
           </div>
           <div class="strike-info-card survival">
             <strong>🛡️ ACCIÓN URGENTE REQUERIDA:</strong><br>
             Reducí el Odio AHORA MISMO en este turno o la plataforma cerrará tu perfil.
           </div>`,
          "EXPULSIÓN INMINENTE",
          true
        );
      }
    } else {
      delete e.cancelWarningShown['zr1'];
      delete e.cancelWarningShown['zr2'];
    }

    if (e.odio >= 65 && !e.cancelWarningShown[65]) {
      e.cancelWarningShown[65] = true;
      this._showHateModal();
    }
  }

  _triggerCardsFlip() {
    if (this.cardsAlreadyFlipped) return;
    const cards = this.currentCards || [];
    cards.forEach((_, idx) => {
      setTimeout(() => {
        const wrap = document.getElementById(`card-wrap-${idx}`);
        if (wrap) {
          wrap.classList.add("flipped");
          snd.cardFlip(idx);
        }
      }, 120 + idx * 180);
    });
    this.cardsAlreadyFlipped = true;
  }

  _renderCards() {
    const container=document.getElementById("cards-area"); if(!container) return;
    const cards=this.eng.drawCards();
    this.currentCards=cards;
    const e=this.eng;
    const booster=this.preparedBoosterId?BOOSTERS.find(b=>b.id===this.preparedBoosterId):null;

    container.innerHTML=cards.map((c,idx)=>{
      const palo = c.paloOverride || c.palo || CARD_PALOS[c.id] || { nombre:"TWEET", icono:"💬", color:"#1d9bf0" };
      const chance = this.eng._successChance(c, booster);
      const chanceColor = chance >= 70 ? "var(--green)" : chance >= 50 ? "var(--amber)" : "var(--red)";
      const boosterMultiplier = booster?.fx.mult ? `${booster.fx.mult}x` : "1.0x";
      const conceptDesc = CARD_CONCEPT_DESCS[c.id] || "Publicación estratégica en el feed.";

      // Badge visual de carta nueva
      const isNew = !e.seenCardTypes.has(c.id);
      const badgeHtml = isNew ? `<div class="card-new-badge">✨ NUEVA</div>` : '';

      const wrapClass = this.cardsAlreadyFlipped ? "card-flip-wrap flipped" : "card-flip-wrap";

      return `
      <div class="${wrapClass}" id="card-wrap-${idx}">
        <div class="card-flip-inner">
          <div class="card-face card-back">
            <div class="card-back-minimal">
              <img src="favicon.jpg" class="card-back-logo" alt="Twitero" />
              <div class="card-back-label">TWITERO</div>
            </div>
          </div>
          <div class="card-face card-front">
            <div class="truco-card" style="border-top-color:${palo.color}; cursor:pointer;" data-idx="${idx}">
              ${badgeHtml}
              <div class="card-suit-tag" style="color:${palo.color};">
                <span class="card-suit-dot" style="background:${palo.color};"></span>
                ${palo.nombre.toUpperCase()}
                <span class="card-key-badge">[${idx + 1}]</span>
              </div>
              <div class="card-palo">${palo.icono}</div>
              <div class="card-title">${c.titulo}</div>
              <div class="card-desc">${conceptDesc}</div>
              
              <div class="card-stats">
                <div class="card-chips-row">
                  <span class="cstat neu">PROB. ÉXITO: <strong style="color:${chanceColor};">${chance}%</strong></span>
                  <span class="cstat neu">MULT: <strong>${boosterMultiplier}</strong></span>
                </div>
              </div>

              <button class="card-play-btn" data-idx="${idx}">TUITEAR AHORA ▶</button>
            </div>
          </div>
        </div>
      </div>
      `;
    }).join("");

    // Registrar tipos de carta vistos
    cards.forEach(c => e.seenCardTypes.add(c.id));

    // FLIP CONTROLADO: si hay pop-up activo, postergar flip hasta que se cierre con [Entendido]
    const overlay = document.getElementById("alert-overlay");
    const isAlertActive = overlay && overlay.classList.contains("active");

    if (!this.cardsAlreadyFlipped) {
      if (isAlertActive) {
        const prevDismiss = this._onAlertDismiss;
        this._onAlertDismiss = () => {
          if (prevDismiss) prevDismiss();
          this._triggerCardsFlip();
        };
      } else {
        this._triggerCardsFlip();
      }
    }

    // Permitir cliquear en toda la carta o en el botón para jugarla
    container.querySelectorAll(".truco-card").forEach(cardEl=>{
      cardEl.onclick=(e)=>{
        if(this.isResolvingAction) return;
        const idx=parseInt(cardEl.dataset.idx);
        this._playCardIdx(idx);
      };
    });

    container.querySelectorAll(".card-play-btn").forEach(btn=>{
      btn.onclick=(e)=>{
        e.stopPropagation();
        if(this.isResolvingAction) return;
        const idx=parseInt(btn.dataset.idx);
        this._playCardIdx(idx);
      };
    });
  }

  _renderBoosters() {
    const grid=document.getElementById("boosters-grid"); if(!grid) return;
    const available=this.eng.getAvailableBoosters();
    if(available.length===0){ grid.innerHTML=`<div style="grid-column:span 3;padding:10px;font-family:var(--font-mono);font-size:0.7rem;color:var(--gray-1);text-align:center;">SIN BOOSTERS DISPONIBLES CON EL SALDO ACTUAL</div>`; return; }
    const BOOSTER_KEYS = ['Q', 'W', 'E'];
    grid.innerHTML=available.map((b, i)=>{
      const isHl=this.preparedBoosterId===b.id;
      const keyHint = BOOSTER_KEYS[i] ? `<span class="booster-key-pill">${BOOSTER_KEYS[i]}</span>` : '';
      const tip=`<strong>${b.icono} ${b.nombre}</strong><br>${b.desc}<br><span style='color:#eab308;'>Cooldown: ${b.cooldown} turno${b.cooldown>1?'s':''}</span>`.replace(/"/g, '&quot;');
      return `<div class="booster-tile ${isHl?"highlighted":""}" data-id="${b.id}" data-tooltip="${tip}">
        ${keyHint}
        <div class="b-icon">${b.icono}</div>
        <div class="b-name">${b.nombre}</div>
        <div class="b-cost">$${b.costo.toLocaleString()}</div>
      </div>`;
    }).join("");

    grid.querySelectorAll(".booster-tile").forEach(tile=>{
      tile.onclick=()=>{
        if(this.isResolvingAction) return;
        const bId = tile.dataset.id;
        if (this.preparedBoosterId === bId) {
          this.preparedBoosterId = null;
          snd.click();
        } else {
          this.preparedBoosterId = bId;
          snd.boost();
        }
        this._renderCards();
        document.querySelectorAll(".booster-tile").forEach(t=>{
          t.classList.toggle("highlighted", t.dataset.id === this.preparedBoosterId);
        });
      };
    });
  }

  _highlightCard(selectedEl, idx) {
    const mainEl=document.getElementById("game-main-el"); if(mainEl) mainEl.classList.add("locked");
    document.querySelectorAll(".cards-area .truco-card").forEach((c,i)=>{ c.classList.toggle("selected-card",i===idx); c.classList.toggle("dimmed-card",i!==idx); });
  }

  _playCardIdx(idx) {
    if(this.isResolvingAction) return;
    this.isResolvingAction=true;

    const card=this.currentCards[idx];
    const bId=this.preparedBoosterId;
    this.preparedBoosterId=null;

    const cardEl=document.querySelectorAll(".cards-area .truco-card")[idx];
    this._highlightCard(cardEl, idx);

    snd.roll();

    const res = this.eng.playCard(card, bId);
    this._showNarrativePanel(card, res);
  }

  _renderInteractiveEvent(ev) {
    document.getElementById("cards-section").style.display="none";
    document.getElementById("event-section").style.display="block";
    const box=document.getElementById("interactive-event-box");
    box.style.display="flex";

    const tagEl=document.getElementById("event-tag"); if(tagEl){ tagEl.textContent=ev.tag; tagEl.style.background=ev.color==="purple"?"#6b21a8":"var(--blue)"; }
    const titleEl=document.getElementById("event-title"); if(titleEl) titleEl.textContent=ev.titulo;
    const descEl=document.getElementById("event-desc"); if(descEl) descEl.textContent=ev.desc;

    const container=document.getElementById("event-options-container");
    if(container){
      // Randomize options order on each event appearance while tracking original index
      const indexedOpts = ev.opciones.map((opt, origIdx) => ({ opt, origIdx }));
      for (let i = indexedOpts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedOpts[i], indexedOpts[j]] = [indexedOpts[j], indexedOpts[i]];
      }

      const optIcons = ['1️⃣', '2️⃣', '3️⃣'];
      container.innerHTML = indexedOpts.map((item, displayIdx)=>{
        const optIcon = optIcons[displayIdx] || '⚡';
        return `
        <div class="truco-card event-truco-card" style="border-top-color:var(--purple); flex:1; min-width:220px; cursor:pointer;" data-idx="${item.origIdx}">
          <div class="card-suit-tag" style="color:var(--purple);">
            <span class="card-suit-dot" style="background:var(--purple);"></span>
            OPCIÓN ${displayIdx+1}
          </div>
          <div class="card-palo">${optIcon}</div>
          <div class="card-title">${item.opt.texto}</div>
          <button class="card-play-btn btn-opt-choose" data-idx="${item.origIdx}" style="background:var(--purple); margin-top:auto;">ELEGIR POSTURA ▶</button>
        </div>
        `;
      }).join("");

      container.querySelectorAll(".btn-opt-choose, .event-truco-card").forEach(el=>{
        el.onclick=(e)=>{
          e.stopPropagation();
          const optIdx=parseInt(el.dataset.idx);
          this._chooseEventOption(optIdx);
        };
      });
    }
  }

    _chooseEventOption(idx) {
    if(this.isResolvingAction) return;
    this.isResolvingAction=true;

    const ev=this.eng.activeEvent;
    if(!ev) return;
    const opt=ev.opciones[idx];
    if(opt.fx) opt.fx(this.eng);

    this.eng.activeEvent = null;
    this.eng.cachedCards = null;

    this.eng.turnLog.push({
      t: this.eng.turno,
      type: "event",
      eventTitle: ev.titulo,
      choice: opt.texto,
      effects: opt.efectoDesc
    });

    snd.click();

    const simulatedCard = {
      id: "evento",
      titulo: ev.titulo,
      texto: opt.tweet || opt.texto
    };

    const outcomeRes = {
      ok: true,
      roll: 100,
      chance: 100,
      segsGain: opt.efectoObj?.seguidores || 0,
      engGain: opt.efectoObj?.engagement || 0,
      dinGain: opt.efectoObj?.ingresos || 0,
      hateGain: opt.efectoObj?.odio || 0,
      viral: null,
      boosterUsed: null,
      customNarrative: opt.resultado || "Decisión estratégica ejecutada."
    };

    this._showNarrativePanel(simulatedCard, outcomeRes, "⚡ IMPACTO DE TU ELECCIÓN EN EL TIMELINE", opt.resultado);
  }

  _showNarrativePanel(card, res, customOutcomeTitle=null, consequenceText=null) {
    const panel=document.getElementById("narrative-panel");
    if(!panel) return;

    panel.className = "narrative-panel active is-rolling";
    panel.style.background = ""; panel.style.borderTopColor = "";

    const e=this.eng;
    const isSuccess = res.ok;
    const booster = res.boosterUsed;
    const isCrisis = res.cancellationEvent !== null && res.cancellationEvent !== undefined;
    const isFatalCrisis = res.cancellationEvent?.isFatal;
    const rawTweet = (card.texto || card.titulo || "Contenido en el feed.");
    const tweetContent = typeof adaptTweetGender === "function" ? adaptTweetGender(rawTweet, e.genero) : rawTweet;
    const viralData = res.viral;

    let logLines = [];
    if(card.id === "evento") {
      logLines.push(`⚡ POSTURA ESTRATÉGICA REGISTRADA`);
    } else {
      logLines.push(`🎲 RESULTADO DE LA TIRADA: <strong>D${res.roll}</strong> (Requerido: ≤ ${res.chance}%)`);
      if(booster) logLines.push(`📢 BOOSTER APLICADO: <strong>${booster.nombre}</strong> (${booster.fx.mult || 1.35}x impacto)`);
      if(res.ok) {
        logLines.push(`👥 SEGUIDORES: <strong style="color:var(--green)">+${res.segsGain.toLocaleString()}</strong>`);
        logLines.push(`⚡ ENGAGEMENT: <strong style="color:var(--green)">+${res.engGain}</strong>`);
        if(res.dinGain > 0) logLines.push(`💰 DINERO COBRADO: <strong style="color:var(--amber)">+$${res.dinGain.toLocaleString()}</strong>`);
      } else {
        logLines.push(`👥 PÉRDIDA DE SEGUIDORES: <strong style="color:var(--red)">${res.segsGain.toLocaleString()}</strong>`);
        logLines.push(`❤️‍🔥 ODIO GENERADO: <strong style="color:var(--red)">+${res.hateGain}</strong>`);
      }
    }

    if(isCrisis) {
      const canc = res.cancellationEvent;
      const strikeText = isFatalCrisis ? "☠️ STRIKE 3/3 — CANCELACIÓN DEFINITIVA" : `⚠️ STRIKE ${canc.strike}/3 — ALERTA DE CANCELACIÓN`;
      logLines.push(`<strong style="color:var(--red)">${strikeText}: ${canc.titulo}</strong>`);
      logLines.push(`<span style="color:var(--off-white); font-size:0.75rem;">${canc.texto}</span>`);
    }

    const s = Math.max(100, e.seguidores);
    let likes, rts, replies, views;
    const isVerified = e.history.some(h=>e.dinero >= 0) && (e.seguidores >= 25000);

    if(isSuccess){
      const likeRate = 0.025 + Math.random() * 0.035; // 2.5% - 6% de seguidores
      likes = Math.max(4, Math.floor(s * likeRate));
      const rtRate = 0.12 + Math.random() * 0.10; // 12% - 22% de los likes
      rts = Math.max(0, Math.floor(likes * rtRate));
      const replyRate = 0.04 + Math.random() * 0.05; // 4% - 9% de los likes (ej: 3k -> ~5-15)
      replies = Math.max(1, Math.floor(likes * replyRate));
      views = Math.max(likes * 12, Math.floor(s * (0.9 + Math.random() * 1.6)));
    } else {
      // Fracaso o Ratio: muy pocos likes/RTs, pero comentarios de repudio realistas
      const likeRate = 0.0015 + Math.random() * 0.0025; // 0.15% - 0.4% de seguidores
      likes = Math.max(1, Math.floor(s * likeRate));
      rts = Math.max(0, Math.floor(likes * (0.05 + Math.random() * 0.08)));
      // Ratio: comentarios escalados a seguidores (0.5% a 0.9% de followers, ej: 3k -> 15 a 27)
      const replyRate = 0.005 + Math.random() * 0.004;
      replies = Math.max(2, Math.floor(s * replyRate));
      views = Math.max(replies * 8, Math.floor(s * (0.4 + Math.random() * 0.6)));
    }

    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const verifiedBadgeHtml = isVerified ? `<span class="tweet-verified-badge" title="Cuenta Verificada">☑️</span>` : '';
    const outcomeTitle = customOutcomeTitle || (isSuccess ? "🎯 TWEET VIRAL — EXCELENTE ENGAGEMENT EN EL TIMELINE" : "💥 RATIO HISTÓRICO — EL TIMELINE SE TE VINO ENCIMA");

    // Pool of authentic community tweets scrolling in the timeline
    const communityTweets = [
      { av: "🐱", name: "Michi Dev", handle: "@michi_dev", time: "2m", text: "deployé a producción un viernes a las 18hs, deséenme suerte amigos..." },
      { av: "🧉", name: "Mate con Bizcochitos", handle: "@pibe_termolar", time: "5m", text: "el café de especialidad con granos de etiopía es una estafa inventada en Palermo" },
      { av: "🚀", name: "Lucas BTC", handle: "@crypto_lucas", time: "8m", text: "el que no compró en la corrección después no venga a llorar en el bull market" },
      { av: "💅", name: "Sofi ✨", handle: "@sofi_lifestyle", time: "11m", text: "necesito urgente tres meses de vacaciones de mis vacaciones" },
      { av: "⚽", name: "Bosterismo Puro", handle: "@la_mitad_mas_uno", time: "14m", text: "el domingo cueste lo que cueste muchachos, prohibido aflojar" },
      { av: "🍿", name: "Cinéfilo Posta", handle: "@cinefilo_arg", time: "18m", text: "revivió el cine con esta escena, actuación descomunal y fotografía 10/10" },
      { av: "🐸", name: "Shitpost Nacional", handle: "@memes_arg", time: "22m", text: "no puedo más con este país jajaja somos el mejor país del mundo lpm" },
      { av: "🧠", name: "Filósofo de Bar", handle: "@don_nadie_", time: "27m", text: "en twitter la gente inventa un enemigo imaginario y se indigna sola en su pieza" },
      { av: "📊", name: "Tendencias Hoy", handle: "@trends_bot", time: "31m", text: "Tendencia #1 en Argentina ahora mismo: debate furioso en el timeline" },
      { av: "🔥", name: "Baitero Profesional", handle: "@polemica_pura", time: "35m", text: "abro debate y me retiro: las medialunas de manteca son infinitamente superiores" }
    ];

    // Build repeating feed cards for fast upward scroll
    const feedCards = [];
    for(let i = 0; i < 16; i++) {
      feedCards.push(communityTweets[i % communityTweets.length]);
    }
    const feedCardsHtml = feedCards.map(t => `
      <div class="feed-tweet-card">
        <div class="feed-tweet-avatar">${t.av}</div>
        <div class="feed-tweet-content">
          <div class="feed-tweet-header">
            <span class="feed-author">${t.name}</span>
            <span class="feed-handle">${t.handle}</span>
            <span class="feed-dot">·</span>
            <span class="feed-time">${t.time}</span>
          </div>
          <div class="feed-tweet-text">${t.text}</div>
        </div>
      </div>
    `).join("");

    panel.innerHTML = `
      <!-- TIMELINE FEED SCROLLER (Community stream scrolling up) -->
      <div class="timeline-feed-container" id="timeline-feed-container">
        <div class="timeline-feed-viewport" id="timeline-feed-viewport">
          <div class="timeline-feed-reel" id="timeline-feed-reel">
            ${feedCardsHtml}
          </div>
          <div class="feed-skip-hint">ESPACIO O CLIC PARA FRENAZO ▶</div>
        </div>
      </div>

      <!-- PLAYER'S PUBLISHED TWEET (Revealed on stop with pure white, large text) -->
      <div class="simulated-tweet-box" id="simulated-tweet-box" style="display:none;">
        <div class="tweet-left-avatar">${currentAvatar}</div>
        <div class="tweet-right-content">
          <div class="tweet-author-line">
            <span class="tweet-author-name">${genderedArch}</span>
            ${verifiedBadgeHtml}
            <span class="tweet-handle">${e.handle}</span>
            <span class="tweet-dot">·</span>
            <span class="tweet-time">Turno ${String(e.turno).padStart(2,"0")}</span>
          </div>
          <div class="tweet-body-text" id="target-tweet-body">${tweetContent}</div>
          <div class="tweet-metrics-bar ${!isSuccess?'is-ratio':''}" id="tweet-metrics-bar" style="display:none;">
            <div class="t-metric metric-reply metric-hidden" id="metric-reply"><span class="m-icon">💬</span> <span class="m-val">${formatMetric(replies)}</span></div>
            <div class="t-metric metric-rt metric-hidden" id="metric-rt"><span class="m-icon">🔁</span> <span class="m-val">${formatMetric(rts)}</span></div>
            <div class="t-metric metric-like metric-hidden" id="metric-like"><span class="m-icon">❤️</span> <span class="m-val">${formatMetric(likes)}</span></div>
            <div class="t-metric metric-view metric-hidden" id="metric-view"><span class="m-icon">👁️</span> <span class="m-val">${formatMetric(views)}</span></div>
          </div>
        </div>
      </div>

      <div class="narrative-consequence-box ${isSuccess?'pos':'neg'}" id="narrative-consequence" style="display:none;">
        <div class="consequence-head">${outcomeTitle}</div>
        ${consequenceText ? `<div class="consequence-desc">${consequenceText}</div>` : ''}
      </div>

      <div class="narrative-body" id="narrative-body" style="display:none;">
        <div class="narrative-log" id="narrative-log"></div>
      </div>

      <div class="narrative-actions">
        <button class="btn btn-primary" id="btn-narrative-accept" style="display:none;">ACEPTAR Y CONTINUAR <span class="key-hint-pill">␣ ESPACIO</span> ▶</button>
      </div>
    `;

    const feedContainer = document.getElementById("timeline-feed-container");
    const feedViewport = document.getElementById("timeline-feed-viewport");
    const feedReel = document.getElementById("timeline-feed-reel");
    const tweetBox = document.getElementById("simulated-tweet-box");
    const metricsBar = document.getElementById("tweet-metrics-bar");
    const consequenceBox = document.getElementById("narrative-consequence");
    const log = document.getElementById("narrative-log");
    const narrativeBody = document.getElementById("narrative-body");
    const acceptBtn = document.getElementById("btn-narrative-accept");

    const mReply = document.getElementById("metric-reply");
    const mRt    = document.getElementById("metric-rt");
    const mLike  = document.getElementById("metric-like");
    const mView  = document.getElementById("metric-view");

    // ── FEED VERTICAL SCROLL ENGINE ──
    let isScrolling = true;
    let scrollTimer = null;
    let currentY = 0;
    const CARD_STEP = 54; // px per tick

    const scrollTick = () => {
      if (!isScrolling) return;
      currentY -= CARD_STEP;
      if (feedReel) feedReel.style.transform = `translateY(${currentY}px)`;
      snd.tick(); // Soft Air Whoosh!
      scrollTimer = setTimeout(scrollTick, 45); // ~22fps smooth fast feed scroll
    };

    scrollTimer = setTimeout(scrollTick, 60);

    // Auto-stop after 1.5s
    const autoStopTimer = setTimeout(() => { stopFeedAndReveal(); }, 1500);

    const stopFeedAndReveal = () => {
      if (!isScrolling) return;
      isScrolling = false;
      if (scrollTimer) clearTimeout(scrollTimer);
      clearTimeout(autoStopTimer);
      window.removeEventListener("keydown", handleKeyAccel);
      if (feedViewport) feedViewport.onclick = null;

      // Dry clunk sound when feed locks onto player's tweet
      snd.clunk();

      // Smooth switch: hide feed stream, reveal target tweet box
      if (feedContainer) feedContainer.style.display = "none";
      if (tweetBox) {
        tweetBox.style.display = "flex";
        tweetBox.style.animation = "panelSlideUp 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        if (isSuccess) {
          tweetBox.style.borderColor = "rgba(0,200,150,0.5)";
          tweetBox.style.boxShadow = "0 4px 30px rgba(0,200,150,0.18)";
        } else {
          tweetBox.style.borderColor = "rgba(239,68,68,0.5)";
          tweetBox.style.boxShadow = "0 4px 30px rgba(239,68,68,0.18)";
        }
      }

      if (metricsBar) metricsBar.style.display = "flex";
      if (consequenceBox) consequenceBox.style.display = "flex";
      if (narrativeBody) narrativeBody.style.display = "flex";
      if (log) log.innerHTML = logLines.map((l,i) => `<div class="ticker-line" style="animation-delay:${i*60}ms">${l}</div>`).join("");

      panel.classList.remove("is-rolling");
      if (isCrisis || !isSuccess) {
        panel.style.background = "linear-gradient(135deg,#1c0a0a 0%,#0c0606 100%)";
        panel.style.borderTopColor = "var(--red)";
      } else {
        panel.style.background = "linear-gradient(135deg,#0a1c12 0%,#060c08 100%)";
        panel.style.borderTopColor = "var(--green)";
      }

      // ── SEQUENTIAL DING DING DING METRICS (110ms apart) ──
      const metricList = [
        { el: mReply, index: 0 },
        { el: mRt,    index: 1 },
        { el: mLike,  index: 2 },
        { el: mView,  index: 3 }
      ];

      metricList.forEach((item, idx) => {
        setTimeout(() => {
          if (!item.el) return;
          item.el.classList.remove("metric-hidden");
          item.el.classList.add("metric-pop");
          if (isSuccess) {
            item.el.classList.add(viralData ? "metric-viral" : "metric-success");
            snd.ding(item.index);
          } else {
            item.el.classList.add("metric-fail");
            snd.metricFail(item.index);
          }
        }, 150 + idx * 110);
      });

      // Show accept button after all metrics
      setTimeout(() => {
        if (acceptBtn) {
          acceptBtn.style.display = "block";

            const doAccept = () => {
              window.removeEventListener("keydown", handleKeyAccept);
              panel.classList.remove("active");
              panel.style.background = ""; panel.style.borderTopColor = "";
              const mainEl = document.getElementById("game-main-el"); if (mainEl) mainEl.classList.remove("locked");
              this.isResolvingAction = false;
              this.eng.advanceTurn();

              const afterTurnCallback = () => {
                if (viralData) this._alertViral(viralData); else this._renderFullTurn();
              };

          // ── CHECK RACHA VIRAL RESOLUTION ──
          if (res.rachaViralUpdate && res.rachaViralUpdate.complete) {
            const rvu = res.rachaViralUpdate;
            if (rvu.success) {
              snd.legendary();
              this._showAlert(
                "🔥 ¡RACHA VIRAL COMPLETADA!",
                `<div class="strike-info-card survival" style="border-color:var(--green);">
                   <strong>🌟 ¡3 DE 3 TWEETS EXITOSOS!</strong><br>
                   Dominaste el algoritmo con maestría absoluta. La comunidad te convirtió en el fenómeno indiscutido de toda la red.<br><br>
                   • <strong>SEGUIDORES EXTRA GANADOS:</strong> +${rvu.gained.toLocaleString()} (+${rvu.pct}% de tu audiencia)<br>
                   • Tu cuenta alcanza un nuevo techo histórico de visibilidad e influencia.
                 </div>`,
                "MOMENTO VIRAL ÉPICO",
                true,
                afterTurnCallback,
                "👑"
              );
              return;
            } else {
              snd.fail();
              this._showAlert(
                "💔 RACHA VIRAL QUEBRADA",
                `<div class="strike-info-card critical">
                   <strong>💥 FRACASO EN EL MOMENTO VIRAL</strong><br>
                   Tu carta no superó la prueba del algoritmo bajo la mirada de toda la red. La ola de burlas y repudio te golpeó sin piedad.<br><br>
                   • <strong>DINERO PERDIDO:</strong> -$${rvu.moneyLost.toLocaleString()} (marcas caídas y penalidades)<br>
                   • <strong>PENALIZACIÓN:</strong> +2 STRIKES de moderación acumulados.<br>
                   • <strong>ESTADO ACTUAL:</strong> ${rvu.strikes}/3 strikes. ${rvu.gameOver ? '¡Cuenta suspendida!' : '¡Estás a un solo strike de la cancelación total!'}
                 </div>`,
                "DESAFÍO VIRAL FALLIDO",
                true,
                () => {
                  if (rvu.gameOver) {
                    this._showEnd1();
                  } else {
                    afterTurnCallback();
                  }
                },
                "💀"
              );
              return;
            }
          }

          if (res.cancellationEvent && !this.eng.gameOver) {
            const strikeNum = res.cancellationEvent.strike;
            const canc = res.cancellationEvent;
            if (strikeNum === 1) {
              this._showCancellationModal(afterTurnCallback);
              return;
            } else if (strikeNum === 2) {
              snd.alert();
              this._showAlert(
                "🚨 SEGUNDO STRIKE — ALERTA CRÍTICA (2/3)",
                `<div class="strike-meter-row">
                   <div class="strike-slot active-2">⚠️ STRIKE 1: ACTIVO</div>
                   <div class="strike-slot active-2">🚨 STRIKE 2: ACTIVO</div>
                   <div class="strike-slot danger-target">☠️ STRIKE 3: GAME OVER</div>
                 </div>
                 <div class="strike-info-card critical">
                   <strong>💀 A UN PASO DE LA CANCELACIÓN DEFINITIVA</strong><br>
                   Acumulaste tu <strong>segundo strike</strong>. La comunidad y los moderadores tienen tu cuenta bajo vigilancia estricta.
                 </div>
                 <div class="strike-info-card critical">
                   <strong>⚠️ REGLA DE EXPULSIÓN:</strong><br>
                   Si recibís <strong>un solo strike más (3/3)</strong>, tu cuenta será eliminada y la partida terminará de inmediato sin apelación posible.
                 </div>
                 <div class="strike-info-card survival">
                   <strong>🛡️ MODO SUPERVIVENCIA:</strong><br>
                   Evitá cartas de pelea, militancia o bait a toda costa. Jugá cartas seguras y protegé tu salud mental para llegar con vida al final.
                 </div>`,
                "PELIGRO DE EXPULSIÓN",
                true,
                afterTurnCallback,
                "🚨"
              );
              return;
            } else if (strikeNum >= 3) {
              snd.fail();
              this._showAlert(
                "TERCER STRIKE — CANCELACIÓN DEFINITIVA",
                `<div class="strike-meter-row">
                   <div class="strike-slot active-2">☠️ STRIKE 1: ACTIVO</div>
                   <div class="strike-slot active-2">☠️ STRIKE 2: ACTIVO</div>
                   <div class="strike-slot danger-target">☠️ STRIKE 3: FATAL</div>
                 </div>
                 <div class="strike-info-card critical">
                   <strong>💀 EXPULSIÓN DE LA PLATAFORMA</strong><br>
                   Acumulaste <strong>3 infracciones graves</strong> en tu cuenta. La moderación y el repudio generalizado culminaron en la suspensión permanente e inapelable de tu perfil.
                 </div>
                 <div class="strike-info-card critical">
                   <strong>🚨 MOTIVO DE LA CRISIS FINAL: ${canc.titulo || 'CANCELACIÓN'}</strong><br>
                   ${canc.motivo || ''}<br><br>
                   <em>"${canc.texto || ''}"</em>
                 </div>
                 <div class="strike-info-card survival">
                   <strong>📜 RESOLUCIÓN:</strong><br>
                   Tu carrera digital en Twitter ha llegado a su fin. Todos tus acuerdos comerciales y publicaciones quedaron revocados.
                 </div>`,
                "EXPULSIÓN DEFINITIVA",
                true,
                () => { this._showEnd1(); },
                "☠️"
              );
              return;
            }
          }

          afterTurnCallback();
        };

        acceptBtn.onclick = doAccept;

        const handleKeyAccept = (ev) => {
          if (ev.code === "Space" || ev.code === "Enter") {
            ev.preventDefault();
            doAccept();
          }
        };
        window.addEventListener("keydown", handleKeyAccept);
      }
    }, 650);
  };

    // ── ACCELERATION: Space or Click stops the feed immediately ──────
    const handleKeyAccel = (ev) => {
      if (ev.code === "Space") {
        ev.preventDefault();
        clearTimeout(autoStopTimer);
        if (scrollTimer) clearTimeout(scrollTimer);
        stopFeedAndReveal();
      }
    };
    window.addEventListener("keydown", handleKeyAccel, { once: true });

    if (feedViewport) {
      feedViewport.onclick = () => {
        clearTimeout(autoStopTimer);
        if (scrollTimer) clearTimeout(scrollTimer);
        stopFeedAndReveal();
      };
    }
  }

  _alertViral(viral) {
    const meta = viral.tipo==="nivel1" ? "+25.000 SEGUIDORES · +$3.500 DINERO" : "FENÓMENO MUNDIAL · +50.000 SEGUIDORES · +$6.000";
    this._showAlert(viral.titulo.toUpperCase(), viral.texto, meta, true);
    this._renderFullTurn();
  }

  _showEnd1() {
    this.showScreen("screen-end1");
    const f=this.eng.final, e=this.eng;
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end1-icon",f.icon||"🏆"); set("end1-title",f.titulo); set("end1-sub",f.sub||"");

    // ── HORIZONTAL TELEMETRY STRIP ──
    const statsEl=document.getElementById("end1-stats");
    if(statsEl) statsEl.innerHTML=`
      <div class="end-stat-col"><span class="lbl">SEGUIDORES</span><span class="val c-blue">${e.seguidores.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">DINERO</span><span class="val c-gold">$${e.dinero.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">ENGAGEMENT</span><span class="val c-white">⚡${e.engagement}</span></div>
      <div class="end-stat-col"><span class="lbl">SALUD MENTAL</span><span class="val c-green">${e.saludMental}%</span></div>
    `;

    // ── REPLAYABILITY HOOK: UNLOCKED FINALES COLLECTION ──
    try {
      const storageKey = "twitero_unlocked_finales_v17";
      let unlocked = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (f.titulo && !unlocked.includes(f.titulo)) {
        unlocked.push(f.titulo);
        localStorage.setItem(storageKey, JSON.stringify(unlocked));
      }
      const totalFinales = 14;
      const count = Math.min(totalFinales, Math.max(1, unlocked.length));
      const pct = Math.round((count / totalFinales) * 100);
      const countEl = document.getElementById("collection-count-text");
      const barFill = document.getElementById("collection-bar-fill");
      if (countEl) countEl.textContent = `${count} / ${totalFinales} DESCUBIERTOS (${pct}%)`;
      if (barFill) barFill.style.width = `${pct}%`;
    } catch(err) {}

    const btnShare=document.getElementById("btn-end1-share");
    if(btnShare){
      btnShare.onclick=()=>{
        snd.click();
        const tweetText = `Jugué a Twitero como ${genderedArch} ${e.personalidad.nombre} (${e.handle}) y alcancé el final "${f.titulo}" con ${e.seguidores.toLocaleString()} seguidores y $${e.dinero.toLocaleString()} 🏆. ¿Podés superarme? Jugá a Twitero acá: https://bit.ly/playtwitero`;
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;
        if(modal) modal.classList.add("active");
      };
    }

    const btnNext=document.getElementById("btn-next-end");
    if(btnNext) btnNext.onclick=()=>{ snd.click(); this._showEnd2(); };

    const btnRestart=document.getElementById("btn-end1-restart");
    if(btnRestart) btnRestart.onclick=()=>{ snd.click(); location.reload(); };

    // Spacebar to restart game on end screen
    const handleEndKey = (ev) => {
      const end1El = document.getElementById("screen-end1");
      if (end1El && end1El.classList.contains("active") && (ev.code === "Space" || ev.code === "Enter")) {
        ev.preventDefault();
        window.removeEventListener("keydown", handleEndKey);
        btnRestart?.click();
      }
    };
    window.addEventListener("keydown", handleEndKey);

    const copyModalBtn = document.getElementById("btn-modal-copy-tweet");
    if (copyModalBtn) {
      copyModalBtn.onclick = () => {
        snd.click();
        const textarea = document.getElementById("modal-share-textarea");
        navigator.clipboard.writeText(textarea.value).then(() => {
          copyModalBtn.textContent = "✓ ¡Texto copiado!";
          copyModalBtn.classList.add("copied");
          setTimeout(() => {
            copyModalBtn.textContent = "📋 Copiar Tweet";
            copyModalBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }
    const closeShareModal = document.getElementById("btn-close-share-modal");
    if(closeShareModal) closeShareModal.onclick=()=>{ const modal=document.getElementById("share-modal-overlay"); if(modal) modal.classList.remove("active"); };

    const btnEnd1Ranking = document.getElementById("btn-end1-ranking");
    if(btnEnd1Ranking) btnEnd1Ranking.onclick=()=>{ snd.click(); this._showRankingPromptThenSave(); };

    const btnEnd1Tree = document.getElementById("btn-end1-tree");
    if(btnEnd1Tree) btnEnd1Tree.onclick=()=>{ snd.click(); this._showDecisionTree(); };
  }

  _showEnd2() {
    this.showScreen("screen-end2");
    const f=this.eng.final, e=this.eng;
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end2-final-title", `${f.icon||"🏆"} ${f.titulo}`);
    const narr=document.getElementById("end2-narrative"); if(narr) narr.textContent=f.narrativa||"";
    
    const btnBack=document.getElementById("btn-end2-back"); if(btnBack) btnBack.onclick=()=>{ snd.click(); this._showEnd1(); };
    const pa=document.getElementById("btn-play-again"); if(pa) pa.onclick=()=>{ snd.click(); location.reload(); };

    const svg=document.getElementById("end2-svg");
    if(svg && this.eng.history.length>=2){
      const hist=this.eng.history;
      const valsSegs=hist.map(h=>h.segs);
      const valsDin=hist.map(h=>h.din||0);
      const mnSegs=Math.min(...valsSegs), mxSegs=Math.max(...valsSegs)||1;
      const mnDin=Math.min(...valsDin), mxDin=Math.max(...valsDin)||1;
      const W=680, H=140;
      let gridLines="";
      for(let i=0;i<hist.length;i++){ const x=(i/(hist.length-1))*W; gridLines+=`<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${H}" stroke="rgba(29,155,240,0.1)" stroke-width="1"/>`; }
      
      const ptsSegs=valsSegs.map((v,i)=>{ const x=(i/(valsSegs.length-1))*W, y=H-((v-mnSegs)/(mxSegs-mnSegs||1))*(H-30)-15; return `${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
      const ptsDin=valsDin.map((v,i)=>{ const x=(i/(valsDin.length-1))*W, y=H-((v-mnDin)/(mxDin-mnDin||1))*(H-30)-15; return `${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
      
      let nodesSegs="", nodesDin="", hoverZones="";
      const colW = W / (hist.length - 1 || 1);
      
      hist.forEach((h,i)=>{
        const x=(i/(hist.length-1))*W;
        const ySegs=H-((h.segs-mnSegs)/(mxSegs-mnSegs||1))*(H-30)-15;
        const yDin=H-((h.din-mnDin)/(mxDin-mnDin||1))*(H-30)-15;
        const tip=`<strong>Turno ${h.t===0?"Inicio":h.t}</strong><br>👥 ${h.segs.toLocaleString()} segs<br>💰 $${(h.din||0).toLocaleString()}`;
        
        nodesSegs+=`<circle cx="${x.toFixed(1)}" cy="${ySegs.toFixed(1)}" r="4" fill="#1d9bf0" stroke="#000" stroke-width="1.5" style="pointer-events:none;"/>`;
        nodesDin+=`<circle cx="${x.toFixed(1)}" cy="${yDin.toFixed(1)}" r="3" fill="#eab308" stroke="#000" stroke-width="1" style="pointer-events:none;"/>`;
        
        const rx = Math.max(0, x - colW/2);
        hoverZones+=`<rect x="${rx.toFixed(1)}" y="0" width="${colW.toFixed(1)}" height="${H}" fill="transparent" data-tooltip="${tip}" style="cursor:crosshair;pointer-events:all;" />`;
      });

      svg.innerHTML=`<defs><linearGradient id="eg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1d9bf0" stop-opacity="0.4"/><stop offset="100%" stop-color="#1d9bf0" stop-opacity="0"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="rgba(0,0,0,0.6)"/>
        ${gridLines}
        <path d="${ptsSegs} L${W},${H} L0,${H}Z" fill="url(#eg)"/>
        <path d="${ptsDin}" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4 2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${ptsSegs}" stroke="#1d9bf0" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        ${nodesDin}
        ${nodesSegs}
        ${hoverZones}`;
    }

    const reportBtn = document.getElementById("btn-copy-report");
    if (reportBtn) {
      reportBtn.onclick = () => {
        snd.click();
        const report = e.generateMatchReport();
        navigator.clipboard.writeText(report).then(() => {
          reportBtn.textContent = "✓ ¡Reporte copiado al portapapeles!";
          reportBtn.classList.add("copied");
          setTimeout(() => {
            reportBtn.textContent = "📋 COPIAR REPORTE (JSON)";
            reportBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }

    const btnEnd2Share = document.getElementById("btn-end2-share");
    if (btnEnd2Share) {
      btnEnd2Share.onclick = () => {
        snd.click();
        const tweetText = `Jugué a Twitero como ${genderedArch} ${e.personalidad.nombre} (${e.handle}) y alcancé el final "${f.titulo}" con ${e.seguidores.toLocaleString()} seguidores y $${e.dinero.toLocaleString()} 🏆. ¿Podés superarme? Jugá a Twitero acá: https://bit.ly/playtwitero`;
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;
        if(modal) modal.classList.add("active");
      };
    }

    const btnEnd2Ranking = document.getElementById("btn-end2-ranking");
    if(btnEnd2Ranking) btnEnd2Ranking.onclick=()=>{ snd.click(); this._showRankingPromptThenSave(); };

    // ── Decision Tree button ──
    const btnTree = document.getElementById("btn-end2-tree");
    if (btnTree) btnTree.onclick = () => { snd.click(); this._showDecisionTree(); };
  }

  // ══════════════════════════════════════════════════════
  //  DECISION TREE  –  true branching dendrogram & clean badges
  // ══════════════════════════════════════════════════════
  _showDecisionTree() {
    const e = this.eng;
    const log = e.gameLog;
    if (!log || log.length === 0) return;

    // ── MINIMALIST INFOGRAPHIC DENDROGRAM (v17) ────────────────────────
    // Inspirado en árbol de decisiones limpio con niveles horizontales sutiles,
    // curvas Bézier fluidas y paleta unificada al 100% con la UI de Twitero.
    
    const TIER_H  = 84;       // altura por nivel/turno
    const PAD_TOP = 92;       // espacio para header sobrio
    const PAD_BOT = 48;       // altura de la barra de stats inferior
    const svgW    = 920;      // ancho estándar de infografía
    const cX      = svgW / 2; // columna central del jugador
    const cols    = log.length;
    const svgH    = PAD_TOP + cols * TIER_H + PAD_BOT + 24;

    // ── PALETA UNIFICADA (Estricto estilo Dark Twitter / Neo-Industrial) ──
    const C = {
      bg:           "#080c14",
      lineGuide:    "rgba(255, 255, 255, 0.05)",
      trunk:        "#1d9bf0", // Twitter Blue
      branchAlt:    "#232e42", // Conectores descartados
      chosenNodeBg: "#0c1524",
      chosenNodeBdr:"#1d9bf0",
      altNodeBg:    "#090d18",
      altNodeBdr:   "#1c2638",
      pipOk:        "#00c896", // Verde sobrio
      pipFail:      "#ef4444", // Rojo coral
      pipViral:     "#f4c020", // Oro sutil
      textWhite:    "#ffffff",
      textMuted:    "#8b98a9",
      textDim:      "#475569"
    };

    let lines = "";
    let nodes = "";
    let tooltipData = [];

    // ROOT / INICIO (Tier 0 superior)
    const rootY = PAD_TOP - 28;
    nodes += `
      <g>
        <circle cx="${cX}" cy="${rootY}" r="15" fill="${C.chosenNodeBg}" stroke="${C.trunk}" stroke-width="2"/>
        <text x="${cX}" y="${rootY + 4}" text-anchor="middle" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="${C.textWhite}">00</text>
      </g>`;

    // Precalcular posiciones de los turnos según el slot de carta elegido (0: Izq, 1: Centro, 2: Der)
    const laneOffsets = [-175, 0, 175];
    const positions = log.map((turn, i) => {
      const chosenSlot = turn.chosen && turn.chosen.slot != null ? turn.chosen.slot : (i % 3);
      return {
        x: cX + laneOffsets[chosenSlot],
        y: PAD_TOP + i * TIER_H + 42,
        tierY: PAD_TOP + i * TIER_H,
        slot: chosenSlot,
        turn,
        i
      };
    });

    let prevX = cX;
    let prevY = rootY;

    positions.forEach((pos, i) => {
      const turn = pos.turn;
      const chosen = turn.chosen;
      const isViral = !!chosen.viral;
      const hasFailed = !chosen.ok;

      // ── Línea guía horizontal sutil que delimita cada turno ──
      lines += `<line x1="32" y1="${pos.tierY}" x2="${svgW - 32}" y2="${pos.tierY}"
        stroke="${C.lineGuide}" stroke-width="1"/>`;

      // Etiqueta del turno a la izquierda (Space Mono, sobria, sin invadir el centro)
      nodes += `<text x="36" y="${pos.tierY + 22}" font-family="'Space Mono', monospace"
        font-size="10" font-weight="700" fill="${C.textDim}" letter-spacing="1">TURNO ${String(turn.t).padStart(2,"0")}</text>`;

      // ── Conector Tronco Principal (Curva S vertical desde nodo elegido anterior) ──
      const midY = (prevY + pos.y) / 2;
      lines += `<path d="M${prevX},${prevY} C${prevX},${midY} ${pos.x},${midY} ${pos.x},${pos.y}"
        stroke="${C.trunk}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;

      // ── Ramas descartadas (Bifurcaciones hacia los otros 2 slots) ──
      const altSlots = [0, 1, 2].filter(s => s !== pos.slot);
      const alts = (turn.alternatives || []).slice(0, 2);
      alts.forEach((alt, ai) => {
        const altSlot = altSlots[ai] != null ? altSlots[ai] : (ai === 0 ? 0 : 2);
        const altX = cX + laneOffsets[altSlot];
        const altY = pos.y;
        const altMidY = (prevY + altY) / 2;

        lines += `<path d="M${prevX},${prevY} C${prevX},${altMidY} ${altX},${altMidY} ${altX},${altY}"
          stroke="${C.branchAlt}" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>`;

        // Nodo descartado circular
        nodes += `<g class="tree-node alt" data-idx="${i}" data-alt="${ai}" style="cursor:help;">
          <circle cx="${altX}" cy="${altY}" r="14" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
          <text x="${altX}" y="${altY + 4}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textDim}">✕</text>
          <text x="${altX}" y="${altY + 26}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${C.textDim}">${(alt.title || alt.titulo || 'Descartada').slice(0, 15)}</text>
        </g>`;
      });

      // ── Nodo Elegido (Círculo limpio con borde según resultado) ──
      const nodeBdr = isViral ? C.pipViral : hasFailed ? C.pipFail : C.chosenNodeBdr;
      const pipFill = isViral ? C.pipViral : hasFailed ? C.pipFail : C.pipOk;
      const titleColor = isViral ? C.pipViral : hasFailed ? C.pipFail : C.textWhite;

      nodes += `<g class="tree-node chosen" data-idx="${i}" style="cursor:pointer;">
        <!-- Círculo principal del turno -->
        <circle cx="${pos.x}" cy="${pos.y}" r="18" fill="${C.chosenNodeBg}" stroke="${nodeBdr}" stroke-width="2"/>
        <text x="${pos.x}" y="${pos.y + 4}" text-anchor="middle" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="${C.textWhite}">T${turn.t}</text>
        <!-- Pip sutil de resultado -->
        <circle cx="${pos.x + 13}" cy="${pos.y - 13}" r="4.5" fill="${pipFill}"/>
        <!-- Título de la carta elegida a la derecha -->
        <text x="${pos.x + 24}" y="${pos.y + 4}" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${titleColor}">${chosen.title.slice(0, 22)}</text>
      </g>`;

      tooltipData.push({ i, chosen, delta: turn.delta, snap: turn.snapshot, alts: turn.alternatives });

      // Actualizar nodo anterior para la próxima iteración
      prevX = pos.x;
      prevY = pos.y;
    });

    // Remate final en el último nodo
    if (positions.length > 0) {
      const lastPos = positions[positions.length - 1];
      const endY = lastPos.y + 40;
      lines += `<line x1="${lastPos.x}" y1="${lastPos.y}" x2="${lastPos.x}" y2="${endY}" stroke="${C.trunk}" stroke-width="2" stroke-dasharray="2 2"/>`;
      nodes += `<g>
        <circle cx="${lastPos.x}" cy="${endY}" r="6" fill="${C.trunk}"/>
      </g>`;
    }

    // ── HEADER UNIFICADO ──────────────────────────────────────────────
    const f = e.final;
    const genderedArch = typeof getGenderedArchetype === "function"
      ? getGenderedArchetype(e.arquetipo, e.genero) : e.arquetipo.nombre;
    const handleText = e.handle || "@twitero";
    const archBadge = genderedArch.toUpperCase();
    const archW = Math.max(80, archBadge.length * 7 + 20);

    const header = `
      <rect x="0" y="0" width="${svgW}" height="84" fill="${C.bg}"/>
      <line x1="0" y1="84" x2="${svgW}" y2="84" stroke="${C.lineGuide}" stroke-width="1"/>
      <!-- Título de sección en Plus Jakarta Sans -->
      <text x="36" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800"
        fill="${C.trunk}" letter-spacing="1.5">ÁRBOL DE DECISIONES · ${cols} TURNOS</text>
      <!-- Handle del jugador -->
      <text x="36" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800"
        fill="${C.textWhite}">${handleText}</text>
      <!-- Pastilla discreta de arquetipo -->
      <rect x="${36 + handleText.length * 12 + 14}" y="42" width="${archW}" height="20" rx="10"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
      <text x="${36 + handleText.length * 12 + 14 + archW / 2}" y="55" text-anchor="middle"
        font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="${C.textMuted}">${archBadge}</text>
      <!-- Leyenda horizontal compacta y sobria a la derecha -->
      <g transform="translate(${svgW - 320}, 44)">
        <circle cx="8" cy="8" r="5" fill="${C.chosenNodeBg}" stroke="${C.trunk}" stroke-width="1.5"/>
        <text x="18" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Elegido</text>
        <circle cx="80" cy="8" r="5" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
        <text x="90" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Descartado</text>
        <circle cx="170" cy="8" r="4.5" fill="${C.pipOk}"/>
        <text x="180" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Éxito</text>
        <circle cx="230" cy="8" r="4.5" fill="${C.pipFail}"/>
        <text x="240" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Ratio</text>
      </g>`;

    // ── FOOTER STATS SOBRIO (Cero carnaval) ───────────────────────────
    const statsY = svgH - PAD_BOT;
    const statsBar = `
      <rect x="0" y="${statsY}" width="${svgW}" height="${PAD_BOT}" fill="${C.bg}"/>
      <line x1="0" y1="${statsY}" x2="${svgW}" y2="${statsY}" stroke="${C.lineGuide}" stroke-width="1"/>
      <text x="36" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">SEGUIDORES: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.seguidores.toLocaleString()}</tspan>
      </text>
      <text x="260" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">DINERO: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">$${e.dinero.toLocaleString()}</tspan>
      </text>
      <text x="440" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">SALUD: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.saludMental}%</tspan>
      </text>
      <text x="590" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">FINAL: </tspan>
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="${C.trunk}">${f.titulo}</tspan>
      </text>`;

    const svgContent = `
      <rect width="${svgW}" height="${svgH}" fill="${C.bg}"/>
      ${header}
      ${lines}
      ${nodes}
      ${statsBar}`;

    // ── OVERLAY MODAL ─────────────────────────────────────────────────
    let overlay = document.getElementById("tree-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "tree-overlay";
      overlay.style.cssText = `position:fixed;inset:0;z-index:9000;background:rgba(2,4,10,0.95);
        display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;
        backdrop-filter:blur(10px);`;
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div style="width:100%;max-width:960px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="color:${C.trunk};font-size:12px;font-weight:800;letter-spacing:1.5px;font-family:'Plus Jakarta Sans', sans-serif;">
            ÁRBOL DE DECISIONES — RECORRIDO DE PARTIDA
          </span>
          <div style="display:flex;gap:10px;">
            <button id="btn-tree-copy" style="background:#0a1828;border:1px solid ${C.trunk};color:#fff;
              padding:7px 16px;border-radius:6px;font-size:11px;cursor:pointer;font-weight:700;font-family:'Plus Jakarta Sans', sans-serif;">
              📋 Copiar imagen
            </button>
            <button id="btn-tree-close" style="background:#0c101c;border:1px solid #243048;color:#94A3B8;
              padding:7px 14px;border-radius:6px;font-size:11px;cursor:pointer;font-family:'Plus Jakarta Sans', sans-serif;">
              ✕ Cerrar [Esc]
            </button>
          </div>
        </div>
        <div id="tree-scroll" style="overflow-x:auto;overflow-y:auto;max-height:82vh;
          border:1px solid rgba(29,155,240,0.2);border-radius:10px;background:${C.bg};
          box-shadow:0 0 50px rgba(0,0,0,0.9);">
          <svg id="tree-svg" xmlns="http://www.w3.org/2000/svg"
            width="${svgW}" height="${svgH}" style="display:block;">
            ${svgContent}
          </svg>
        </div>
        <div id="tree-tooltip" style="display:none;position:fixed;z-index:9200;
          background:#0b1120;border:1px solid rgba(29,155,240,0.4);border-radius:8px;
          padding:12px 14px;font-size:12px;color:#fff;min-width:240px;max-width:300px;
          box-shadow:0 12px 40px rgba(0,0,0,0.85);pointer-events:none;line-height:1.5;
          backdrop-filter:blur(8px);font-family:'Plus Jakarta Sans', sans-serif;"></div>
      </div>`;

    overlay.style.display = "flex";

    // ── TOOLTIPS INTERACTIVOS ──
    const tooltip = document.getElementById("tree-tooltip");
    const svg = document.getElementById("tree-svg");

    svg.querySelectorAll(".tree-node.chosen").forEach(node => {
      const idx = parseInt(node.dataset.idx);
      const td = tooltipData[idx];
      if (!td) return;
      node.addEventListener("mouseenter", ev => {
        const snap = td.snap || {};
        const isViral = td.chosen.viral;
        tooltip.innerHTML = `
          <div style="color:${C.trunk};font-weight:800;font-size:12px;margin-bottom:4px;">
            ${td.chosen.icon || "💬"} ${td.chosen.title || "Carta"} &nbsp;
            <span style="color:#64748B;font-size:10px;">(Turno ${log[idx].t})</span>
          </div>
          <div style="color:${td.chosen.ok ? (isViral ? C.pipViral : C.pipOk) : C.pipFail};font-weight:700;">
            ${td.chosen.ok ? (isViral ? "✨ IMPACTO VIRAL" : "✅ TWEET EXITOSO") : "❌ RATIO EN EL TIMELINE"}
            &nbsp;<span style="color:#8b98a9;font-size:10px;font-family:'Space Mono', monospace;">[D${td.chosen.roll}/≤${td.chosen.chance}%]</span>
          </div>
          <hr style="border-color:rgba(255,255,255,0.08);margin:6px 0;">
          <div style="font-weight:600;">👥 ${td.delta.segs >= 0 ? "+" : ""}${(td.delta.segs||0).toLocaleString()} seguidores</div>
          <div>⚡ ${td.delta.eng >= 0 ? "+" : ""}${td.delta.eng||0} engagement</div>
          ${td.delta.hate ? `<div style="color:${C.pipFail};">💀 +${td.delta.hate} odio generado</div>` : ""}
          ${td.chosen.booster ? `<div style="color:${C.trunk};">🚀 Booster: ${td.chosen.booster}</div>` : ""}
          <hr style="border-color:rgba(255,255,255,0.08);margin:6px 0;">
          <div style="color:#64748B;font-size:10px;text-transform:uppercase;">Balance al cierre de turno:</div>
          <div style="font-family:'Space Mono', monospace;font-size:11px;">👥 ${(snap.segs||0).toLocaleString()} &nbsp;·&nbsp; 💰 $${(snap.dinero||0).toLocaleString()} &nbsp;·&nbsp; ❤️ ${snap.salud||0}%</div>`;
        tooltip.style.display = "block";
      });
      node.addEventListener("mousemove", ev => {
        const r = overlay.getBoundingClientRect();
        tooltip.style.left = Math.min(ev.clientX + 16, r.right - 310) + "px";
        tooltip.style.top  = Math.min(ev.clientY + 8,  r.bottom - 210) + "px";
      });
      node.addEventListener("mouseleave", () => { tooltip.style.display = "none"; });
    });

    svg.querySelectorAll(".tree-node.alt").forEach(node => {
      const idx = parseInt(node.dataset.idx);
      const ai  = parseInt(node.dataset.alt);
      const td  = tooltipData[idx];
      if (!td) return;
      const alt = (td.alts || [])[ai];
      if (!alt) return;
      node.addEventListener("mouseenter", ev => {
        tooltip.innerHTML = `
          <div style="color:#94A3B8;font-weight:700;margin-bottom:4px;">
            ${alt.icon || "🃏"} ${alt.title || "Carta descartada"}
          </div>
          <div style="color:${C.pipFail};font-size:10px;font-weight:700;">OPCIÓN DESCARTADA · TURNO ${log[idx].t}</div>
          <div style="color:#64748B;margin-top:4px;font-size:11px;">Esta carta formaba parte de tu mano y decidiste no jugarla.</div>`;
        tooltip.style.display = "block";
      });
      node.addEventListener("mousemove", ev => {
        tooltip.style.left = (ev.clientX + 16) + "px";
        tooltip.style.top  = (ev.clientY + 8)  + "px";
      });
      node.addEventListener("mouseleave", () => { tooltip.style.display = "none"; });
    });

    // ── CIERRE ──
    const closeTree = () => {
      overlay.style.display = "none";
      tooltip.style.display = "none";
      window.removeEventListener("keydown", handleEsc);
    };
    document.getElementById("btn-tree-close").onclick = closeTree;
    const handleEsc = (ev) => { if (ev.key === "Escape") closeTree(); };
    window.addEventListener("keydown", handleEsc);

    // ── COPIA / DESCARGA DE IMAGEN HD ──
    document.getElementById("btn-tree-copy").onclick = () => {
      snd.click();
      const btn = document.getElementById("btn-tree-copy");
      btn.textContent = "⏳ Generando…";
      btn.disabled = true;

      const scale = 2;
      const oc = document.createElement("canvas");
      oc.width  = svgW * scale;
      oc.height = svgH * scale;
      const ctx = oc.getContext("2d");
      ctx.scale(scale, scale);

      const svgEl = document.getElementById("tree-svg");
      const serialized = new XMLSerializer().serializeToString(svgEl);
      const blob = new Blob([serialized], { type: "image/svg+xml" });
      const url  = URL.createObjectURL(blob);
      const img  = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, svgW, svgH);
        URL.revokeObjectURL(url);
        oc.toBlob(pngBlob => {
          if (!pngBlob) { btn.textContent = "❌ Error"; btn.disabled = false; return; }
          const textSummary =
            `Twitero — ${handleText} (${genderedArch})\n` +
            `Final: ${f.titulo}\n` +
            `👥 ${e.seguidores.toLocaleString()} · 💰 $${e.dinero.toLocaleString()} · ❤️ ${e.saludMental}%\n` +
            `${cols} turnos jugados en el timeline`;

          const doCopy = async () => {
            try {
              await navigator.clipboard.write([new ClipboardItem({ "image/png": pngBlob })]);
              return true;
            } catch {
              try { await navigator.clipboard.writeText(textSummary); } catch {}
              const a = document.createElement("a");
              a.href = URL.createObjectURL(pngBlob);
              a.download = `twitero-${e.handle}-arbol.png`;
              a.click();
              return false;
            }
          };

          doCopy().then(ok => {
            btn.textContent = ok ? "✓ ¡Copiado!" : "💾 Descargado";
            btn.style.borderColor = ok ? "#00FF88" : "#FFD700";
            setTimeout(() => {
              btn.textContent = "📋 Copiar imagen";
              btn.style.borderColor = C.trunk;
              btn.disabled = false;
            }, 3000);
          });
        }, "image/png");
      };
      img.onerror = () => { btn.textContent = "❌ Error SVG"; btn.disabled = false; };
      img.src = url;
    };
  }

  // Helper: rounded rect on canvas
  _canvasRoundRect(ctx, x, y, w, h, r, fill, stroke, strokeW) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    if (fill)   { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeW || 1; ctx.stroke(); }
  }
}


/* ?? M?DULO: src/main.js ?? */
/* ???????????????????????????????????????????????????????
   Twitero v15 ? src/main.js
   Punto de entrada de la aplicaci?n
   ??????????????????????????????????????????????????????? */

document.addEventListener("DOMContentLoaded", () => {
  const engine = new GameEngine();
  const ui = new UIEngine(engine);
  ui.init();
  ui.showScreen("screen-splash");
  console.log("?? Twitero v15 inicializado con arquitectura senior modular.");
});
