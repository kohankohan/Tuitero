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
