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

module.exports = { gastosEspecialesContent, peleaPostHiloContent, viralizacionExtremaContent };
