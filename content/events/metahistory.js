/* ═══════════════════════════════════════════════════════════
   Twitero v18 — content/events/metahistory.js
   Metajuego Narrativo Coral: 12 Arquetipos, 3 Capas, 4 Fases
   Basado en la especificación rectora: METAHISTORY 2 / 4-metahistoria-update-v2.md
   - Fechas discretas en cada tweet (Her Story timestamp).
   - 1 sola reply por tweet.
   - Distribución estricta por fases (F1 a F4).
   - Menciones veladas de Comando Fierro / Corralito Cripto.
   - Contradicción directa objetiva (contradiccion_id: "origen_del_caso").
   - Cierres de Capa 3 en flash-forward 2026:
     * Grupo A: Reconocen el pasado (Gamer, Periodista, Crypto Bro, Humorista).
     * Grupo B: Siguen su vida como si nada (Futbolero, Influencer, Techie, Podcaster, Conspiranoico, OnlyFans).
     * Opinólogo y Militante viven completos en 2026.
   - Cero frases cliché de IA estilo "no es X, es Y".
   ═══════════════════════════════════════════════════════════ */

const METAHISTORY_DATA = {
  // ─── 1. GAMER (FASE 1: Feb 2024 — Cierre 2026 Grupo A) ─────────────────
  gamer: {
    fase: 1,
    activador: {
      id: "gamer_act",
      fecha: "12 Feb 2024",
      titulo: "Grabando el especial",
      texto: "el chabon me hizo repetir la entrada del stream tres veces jaja, grabamos en mi casa, quedó bueno el material",
      replySospechosa: {
        autor: "Seguidor Anónimo",
        handle: "@patentes_arg",
        texto: "Dejá de vender humo. Ese auto importado que asoma en tu garage no lo pagás ni con 50 años de stream. ¿A nombre de qué empresa está?"
      }
    },
    capa2: [
      {
        id: "gamer_01",
        fase: 1,
        fecha: "16 Feb 2024",
        titulo: "La nave en el garage",
        texto: "vieron la nave que me compré? un importado de re alta gama, de esos que hay solo DOS en todo el país. mi viejo me tiró una mano con la financiación jaja",
        replies: [
          { autor: "Curioso de Twitter", handle: "@patentes_arg", texto: "Financiación de qué forma exactamente, a nombre de qué empresa está el auto" }
        ],
        stats: { eng: 68, hate: 14, cred: 10, chance: 65 }
      },
      {
        id: "gamer_02",
        fase: 1,
        fecha: "20 Feb 2024",
        titulo: "Asado con el 9",
        texto: "comiendo un asado con mi hermano de la vida, el 9 de Boca. los de afuera hablan al pedo, nosotros festejamos en silencio 🥩🔥",
        replies: [
          { autor: "Seguidor de Twitch", handle: "@pibe_stream", texto: "Subite una vuelta en la nave con el 9 amigo, rompen internet" }
        ],
        stats: { eng: 72, hate: 12, cred: 15, chance: 62 }
      },
      {
        id: "gamer_03",
        fase: 1,
        fecha: "24 Feb 2024",
        titulo: "Papeles del juzgado",
        texto: "me llegó una notificación de una fiscalía pidiendo declarar por la titularidad del auto, no entiendo nada de términos legales así que le dije a mi viejo que se encargue él",
        replies: [
          { autor: "Seguidor de Twitch", handle: "@pibe_stream", texto: "Cuidado rey, asesorate con un boga propio y no firmes nada a ciegas" }
        ],
        stats: { eng: 82, hate: 22, cred: 14, chance: 60 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo A: Cínico, apoya a su padre)
    capa3: {
      id: "gamer_cierre_2026",
      fase: 4,
      fecha: "14 Mar 2026",
      titulo: "Reglas del juego",
      texto: "dos años después y la gente sigue insistiendo con lo mismo de mi viejo. él se banca todo solo, como siempre. son las reglas del juego, no shockea",
      replies: [
        { autor: "Seguidor de Twitch", handle: "@pibe_stream", texto: "prendé stream rey, la gente habla porque tiene boca nomás" }
      ],
      stats: { eng: 88, hate: 35, cred: 10, chance: 75 }
    }
  },

  // ─── 2. PODCASTER (FASE 1: Feb 2024 — Cierre 2026 Grupo B) ─────────────
  podcaster: {
    fase: 1,
    activador: {
      id: "podcaster_act",
      fecha: "11 Feb 2024",
      titulo: "Trailer en el garage",
      texto: "mañana sale la entrevista completa con @gamer_stream, grabada en su casa. hay una escena en el garage que se las va a volar la cabeza",
      replySospechosa: {
        autor: "Usuario Indignado",
        handle: "@feed_watcher",
        texto: "¿Cuánto te están pagando de pauta para que en tu podcast no menciones al exchange cripto que nos cagó la guita a todos?"
      }
    },
    capa2: [
      {
        id: "podcaster_01",
        fase: 1,
        fecha: "15 Feb 2024",
        titulo: "El chisme del café",
        texto: "en el café con @lifestyle_arg terminamos hablando más del auto de @gamer_stream que del episodio en sí, la gente ama un auto caro más que el contenido",
        replies: [
          { autor: "Influencer Lifestyle", handle: "@lifestyle_arg", texto: "Es que te juro que no puedo dejar de pensar en esa nave, la energía que maneja" }
        ],
        stats: { eng: 65, hate: 10, cred: 20, chance: 64 }
      },
      {
        id: "podcaster_02",
        fase: 1,
        fecha: "24 Feb 2024",
        titulo: "Repercusiones del episodio",
        texto: "el clip del auto ya pasó el millón de vistas en reels. me escriben hasta periodistas preguntando de dónde salió esa toma",
        replies: [
          { autor: "Seguidor del Podcast", handle: "@oyente_fiel", texto: "Ojo a quién le das micrófono que después te pegan las esquirlas" }
        ],
        stats: { eng: 74, hate: 15, cred: 22, chance: 60 }
      },
      {
        id: "podcaster_03",
        fase: 1,
        fecha: "28 Feb 2024",
        titulo: "Dilema de producción",
        texto: "estamos en debate interno con la producción sobre si bajar el clip del garage o clavarle pauta y monetizarlo al mango, la ética versus las métricas",
        replies: [
          { autor: "Productor", handle: "@onda_media", texto: "Si lo bajamos ahora parecemos cómplices, mejor dejarlo y que hable la justicia" }
        ],
        stats: { eng: 78, hate: 18, cred: 28, chance: 62 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Sigue su vida normal)
    capa3: {
      id: "podcaster_cierre_2026",
      fase: 4,
      fecha: "22 Abr 2026",
      titulo: "200 episodios",
      texto: "200 episodios cumplidos esta semana. quién me iba a decir cuando arrancamos grabando en mi living",
      replies: [
        { autor: "Oyente Frecuente", handle: "@radio_fan", texto: "felicitaciones chabón, te sigo desde que grababas con el auricular del celu" }
      ],
      stats: { eng: 80, hate: 5, cred: 35, chance: 78 }
    }
  },

  // ─── 3. INFLUENCER LIFESTYLE (FASE 1: Feb 2024 — Cierre 2026 Grupo B) ──
  influencer: {
    fase: 1,
    activador: {
      id: "influencer_act",
      fecha: "14 Feb 2024",
      titulo: "Manifestando abundancia",
      texto: "manifestando la energía de comprarme un auto como el de @gamer_stream, un importado de re alta gama que ni en la calle se ven, que encima lo tiene a nombre de una empresa, mentalidad de rico 🙏👀",
      replySospechosa: {
        autor: "Stalker VIP",
        handle: "@chisme_digital",
        texto: "Che reina, ¿y de la sociedad fantasma en Delaware donde figura la nave importada no vas a opinar?"
      }
    },
    capa2: [
      {
        id: "influencer_01",
        fase: 1,
        fecha: "18 Feb 2024",
        titulo: "Extrañando en silencio",
        texto: "hay días que extraño a alguien que ya no me habla, aunque la siga viendo pasar en fotos que suben otros. igual, gratitud infinita por el presente 🙏✨",
        replies: [
          { autor: "Seguidora", handle: "@vivi_zen", texto: "Soltá lo que no fue para vos reina, el universo te tiene guardado algo mejor" }
        ],
        stats: { eng: 62, hate: 8, cred: 15, chance: 66 }
      },
      {
        id: "influencer_02",
        fase: 1,
        fecha: "26 Feb 2024",
        titulo: "Filtros y apariencias",
        texto: "a veces posteo la vida perfecta y por dentro estoy pensando en gente que ya no está. el algoritmo no sabe eso",
        replies: [
          { autor: "Amiga de Palermo", handle: "@sofia_fit", texto: "Te quiero amiga, esta semana merendamos y me contás todo" }
        ],
        stats: { eng: 68, hate: 10, cred: 18, chance: 63 }
      },
      {
        id: "influencer_03",
        fase: 1,
        fecha: "01 Mar 2024",
        titulo: "Energías y noticias",
        texto: "viendo las noticias de hoy y sintiendo una vibra pesadísima con cierta gente que aparece en todos los portales, hay presencias que te drenan la luz aunque ya no estén cerca ✨🧘‍♀️",
        replies: [
          { autor: "Seguidora", handle: "@vivi_zen", texto: "Te banco reina, limpiá tu aura con palo santo y no mires más la tele" }
        ],
        stats: { eng: 75, hate: 14, cred: 20, chance: 64 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Sigue su vida normal)
    capa3: {
      id: "influencer_cierre_2026",
      fase: 4,
      fecha: "19 May 2026",
      titulo: "Nueva rutina matutina",
      texto: "nueva rutina matutina que me cambió la vida por completo, se las cuento en el video de hoy 🙏✨",
      replies: [
        { autor: "Seguidora Fiel", handle: "@lucia_style", texto: "amé el matcha que recomendaste, pasá el link de la taza!" }
      ],
      stats: { eng: 82, hate: 6, cred: 25, chance: 80 }
    }
  },

  // ─── 4. TECHIE (FASE 2: Abr-May 2024 — Cierre 2026 Grupo B) ───────────
  techie: {
    fase: 2,
    activador: {
      id: "techie_act",
      fecha: "15 Abr 2024",
      titulo: "Rumores en la City",
      texto: "hay rumores de un colectivo de hackers locales dando vueltas por la city cripto hace semanas, gente seria dice que no es joda",
      replySospechosa: {
        autor: "Dev Cripto",
        handle: "@rust_coder",
        texto: "Dejá de chapear con tus startups y decí la verdad: ¿cuándo carajo liberan los retiros del exchange hackeado?"
      }
    },
    capa2: [
      {
        id: "techie_01",
        fase: 2,
        fecha: "25 Abr 2024",
        titulo: "La bomba por estallar",
        texto: "sé de una bomba grande que está por estallar en las próximas semanas, tiene que ver con plata y con gente conocida. no puedo decir más, NDA de por medio",
        replies: [
          { autor: "Inversor Ángel", handle: "@seed_fund", texto: "Tirame una pista por Signal que tengo liquidez parada en dos exchanges porteños" }
        ],
        stats: { eng: 70, hate: 12, cred: 28, chance: 62 }
      },
      {
        id: "techie_02",
        fase: 2,
        fecha: "10 May 2024",
        titulo: "El Corralito Cripto",
        texto: "confirmado: la bomba era el hackeo al exchange local. quien haya tenido guita ahí adentro, lo siento mucho, yo también perdí",
        replies: [
          { autor: "Comediante", handle: "@humor_arg", texto: "Pará pará pará, ¿me estás diciendo que mis ahorros en $PEPEARG desaparecieron?" }
        ],
        stats: { eng: 84, hate: 20, cred: 35, chance: 58 }
      },
      {
        id: "techie_03",
        fase: 2,
        fecha: "18 May 2024",
        titulo: "El manifiesto decodificado",
        texto: "acabo de terminar de leer el volcado de datos y el manifiesto de Comando Fierro. el exploit al exchange no fue al azar, fueron directo a rastrear las billeteras puente de fondos públicos",
        replies: [
          { autor: "Dev Cripto", handle: "@solidity_dev", texto: "Lo vi en GitHub antes de que tiren el repo. Había contratos inteligentes vinculados al fideicomiso." }
        ],
        stats: { eng: 88, hate: 15, cred: 42, chance: 60 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Sigue su vida normal)
    capa3: {
      id: "techie_cierre_2026",
      fase: 4,
      fecha: "08 Jun 2026",
      titulo: "Serie A cerrada",
      texto: "cerramos la serie A más grande del año para el sector, día histórico para todo el equipo 🚀",
      replies: [
        { autor: "Venture Capital", handle: "@latam_vc", texto: "Orgullo ver crecer este proyecto desde el día cero. A romperla!" }
      ],
      stats: { eng: 86, hate: 8, cred: 45, chance: 76 }
    }
  },

  // ─── 5. HUMORISTA (FASE 2: Abr-May 2024 — Cierre 2026 Grupo A) ────────
  humor: {
    fase: 2,
    activador: {
      id: "humor_act",
      fecha: "18 Abr 2024",
      titulo: "El chiste del auto",
      texto: "la vi bajarse de un auto importado carísimo, de esos que hay solo dos en el país, enfrente del edificio del gobierno, algo me dice que el 'amigo' que la lleva no es programador junior precisamente 💀",
      replySospechosa: {
        autor: "Víctima del Corralito",
        handle: "@sin_ahorros",
        texto: "Reíte todo lo que quieras con tus chistecitos, pero de los fondos que desaparecieron con el corralito cripto no te vi hacer ningún meme."
      }
    },
    capa2: [
      {
        id: "humor_01",
        fase: 2,
        fecha: "26 Abr 2024",
        titulo: "Chiste sobre hackers",
        texto: "hackers peronistas debería ser una contradicción, ¿acaso hackean desde su iPhone 18 Max?",
        replies: [
          { autor: "Usuario Anónimo", handle: "@fierro_fan", texto: "Reíte tranquilo que cuando veas la base de datos del exchange te vas a atragantar con el tweet" }
        ],
        stats: { eng: 72, hate: 16, cred: 12, chance: 64 }
      },
      {
        id: "humor_02",
        fase: 2,
        fecha: "12 May 2024",
        titulo: "Víctima del Corralito Cripto",
        texto: "epa, ¿yo tenía guita en el exchange que hackeó Comando Fierro? preguntando por un amigo que soy yo mismo y que perdió todos sus ahorros en $PEPEARG 😭💀",
        replies: [
          { autor: "Amigo del Standup", handle: "@guionista_x", texto: "Decime por favor que es un remate para el show del viernes y que no te fundiste posta" }
        ],
        stats: { eng: 88, hate: 14, cred: 22, chance: 56 }
      },
      {
        id: "humor_03",
        fase: 2,
        fecha: "22 May 2024",
        titulo: "Risas con sabor amargo",
        texto: "hago chistes de la polenta y del dólar pero posta me quedé en cero por el corralito este, no es gracioso tener que pedirle guita a mi vieja a los 30 años",
        replies: [
          { autor: "Amigo del Standup", handle: "@guionista_x", texto: "Fuerza loco, el viernes en el bar pasamos la gorra para darte una mano" }
        ],
        stats: { eng: 92, hate: 12, cred: 26, chance: 58 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo A: Vergüenza residual y madurez)
    capa3: {
      id: "humor_cierre_2026",
      fase: 4,
      fecha: "29 May 2026",
      titulo: "El tweet viejo",
      texto: "cada tanto alguien me tagea en el chiste viejo. ya no me da risa como antes, la vida te va cambiando el sentido del humor",
      replies: [
        { autor: "Seguidor de Standup", handle: "@standup_fan", texto: "creciste un montón chabón, se nota en los monólogos nuevos" }
      ],
      stats: { eng: 80, hate: 12, cred: 30, chance: 74 }
    }
  },

  // ─── 6. CONSPIRANOICO (FASE 2: Abr-May 2024 — Cierre 2026 Grupo B) ─────
  conspiranoico: {
    fase: 2,
    activador: {
      id: "conspiranoico_act",
      fecha: "14 Abr 2024",
      titulo: "Rastros en la blockchain",
      texto: "la wallet que mueve $PEPEARG (la memecoin que sigo hace meses) está conectada a otra wallet que recibió transferencias de una LLC. esto no es casualidad (hilo)",
      replySospechosa: {
        autor: "Cyber Rebelde",
        handle: "@fierro_fan",
        texto: "Te hacés el despierto hablando de ovnis, pero de Comando Fierro y la filtración de la base de datos te comiste los mocos."
      }
    },
    capa2: [
      {
        id: "conspiranoico_04", // MECÁNICA HER STORY (CONTRADICCIÓN DIRECTA CON periodista_04)
        fase: 2,
        fecha: "18 Abr 2024",
        contradiccion_id: "origen_del_caso",
        titulo: "El origen ignorado",
        texto: "vengo señalando movimientos raros en esa wallet desde ENERO, mucho antes de que se hiciera viral la foto del auto. a mí nadie me escuchó, como siempre",
        replies: [
          { autor: "Periodista de Investigación", handle: "@periodista_indie", texto: "Gráficos de paint y capturas sin firma criptográfica no son pruebas, aprendan a investigar" }
        ],
        stats: { eng: 70, hate: 22, cred: 15, chance: 58 }
      },
      {
        id: "conspiranoico_02",
        fase: 2,
        fecha: "02 May 2024",
        titulo: "La advertencia de Comando Fierro",
        texto: "hay un colectivo de hackers locales detrás de todo esto, lo vengo diciendo hace meses y se me ríen en la cara, YA VAN A VER",
        replies: [
          { autor: "Troll de Twitter", handle: "@bot_argento", texto: "Tomate la pastilla que los extraterrestres te están hackeando el router" }
        ],
        stats: { eng: 75, hate: 25, cred: 10, chance: 55 }
      },
      {
        id: "conspiranoico_03",
        fase: 2,
        fecha: "15 May 2024",
        titulo: "De Delaware a los terrenos",
        texto: "la ruta de la guita va de la LLC en Delaware directo a los terrenos baldíos del plan de viviendas, pero los radares satelitales de la NASA marcan interferencias electromagnéticas en esa misma coordenada",
        replies: [
          { autor: "Trader Paranoico", handle: "@whale_tracker", texto: "Ibas perfecto con la triangulación financiera hasta que metiste a la NASA en el medio..." }
        ],
        stats: { eng: 80, hate: 26, cred: 12, chance: 54 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Sigue en sus conspiraciones normales)
    capa3: {
      id: "conspiranoico_cierre_2026",
      fase: 4,
      fecha: "11 Jul 2026",
      titulo: "El anuncio en el Congreso",
      texto: "lo que están por anunciar esta semana en el Congreso va a confirmar TODO lo que vengo diciendo hace meses",
      replies: [
        { autor: "Creyente Fiel", handle: "@ojo_abierto", texto: "estamos listos, abran los ojos que se les cae la careta a todos" }
      ],
      stats: { eng: 82, hate: 20, cred: 15, chance: 72 }
    }
  },

  // ─── 7. PERIODISTA (FASE 3: Jul-Ago 2024 — Cierre 2026 Grupo A) ───────
  periodista: {
    fase: 3,
    activador: {
      id: "periodista_act",
      fecha: "15 Jul 2024",
      titulo: "La pista del gobierno",
      texto: "un auto importado de re alta gama, de esos que hay solo dos en el país, a nombre de una empresa fantasma, un streamer que no sabe de dónde salió la plata, y un apellido que empieza a sonar cerca del gobierno. sigan atentos",
      replySospechosa: {
        autor: "Lector Desencantado",
        handle: "@sin_filtro",
        texto: "¿Por qué estás tan callado con la LLC del Secretario de gobierno? Llegó el sobre de pauta y te borraste de la investigación."
      }
    },
    capa2: [
      {
        id: "periodista_02",
        fase: 3,
        fecha: "28 Jul 2024",
        titulo: "Persiguiendo la fuente",
        texto: "estoy persiguiendo a una fuente clave de esta historia con mucha energía aunque la fuente se niega a hablar conmigo. la verdad no se esconde sola",
        replies: [
          { autor: "Creadora OnlyFans", handle: "@vip_content", texto: "Dejá de acosarme por mensaje directo flaco, no tengo nada que ver con tus políticos" }
        ],
        stats: { eng: 78, hate: 18, cred: 35, chance: 65 }
      },
      {
        id: "periodista_04", // MECÁNICA HER STORY (CONTRADICCIÓN DIRECTA CON conspiranoico_04)
        fase: 3,
        fecha: "09 Ago 2024",
        contradiccion_id: "origen_del_caso",
        titulo: "El hilo de la verdad",
        texto: "todo esto arrancó con una foto de un auto en febrero. desde ahí no paramos de tirar del hilo hasta acá",
        replies: [
          { autor: "Editor Político", handle: "@diario_central", texto: "Portada de mañana confirmada. Gran trabajo de documentación rigurosa." }
        ],
        stats: { eng: 88, hate: 22, cred: 48, chance: 60 }
      },
      {
        id: "periodista_03",
        fase: 3,
        fecha: "18 Ago 2024",
        titulo: "El organigrama de la LLC",
        texto: "exclusivo: organigrama completo de la sociedad offshore radicada en Delaware. el testaferro y único firmante de las cuentas bancarias es un trader local de 24 años",
        replies: [
          { autor: "Editor Político", handle: "@diario_central", texto: "Impactante documento. Ya está en la portada de la edición digital." }
        ],
        stats: { eng: 92, hate: 20, cred: 50, chance: 62 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo A: Orgullo profesional, hito de carrera)
    capa3: {
      id: "periodista_cierre_2026",
      fase: 4,
      fecha: "14 Ago 2026",
      titulo: "El caso que cambió mi carrera",
      texto: "se cumplen dos años del caso que me cambió la carrera entera. todavía me paran en la calle por esa nota. valió cada noche sin dormir",
      replies: [
        { autor: "Colega de Redacción", handle: "@cronista_arg", texto: "un antes y un después en el periodismo de investigación local" }
      ],
      stats: { eng: 92, hate: 15, cred: 50, chance: 80 }
    }
  },

  // ─── 8. FUTBOLERO (FASE 3: Jul-Ago 2024 — Cierre 2026 Grupo B) ────────
  futbolero: {
    fase: 3,
    activador: {
      id: "futbolero_act",
      fecha: "16 Jul 2024",
      titulo: "Conexión en la Bombonera",
      texto: "el 9 de Boca es amigo de la infancia de un pibe que labura en streaming, medio que se mueven en otra categoría de guita esos dos",
      replySospechosa: {
        autor: "Hincha Furioso",
        handle: "@anti_casta_boca",
        texto: "Che, ¿vos no te sacaste una foto en la Bombonera con el pibe del auto importado? ¿O del allanamiento al Secretario en los palcos no decís nada?"
      }
    },
    capa2: [
      {
        id: "futbolero_01",
        fase: 3,
        fecha: "24 Jul 2024",
        titulo: "El auto frente al ministerio",
        texto: "ESE auto importado que subieron hace unos meses, de esos que hay solo dos en el país, es EL MISMO que vi estacionado afuera de la casa de un funcionario, no me cabe duda",
        replies: [
          { autor: "Periodista de Investigación", handle: "@periodista_indie", texto: "¿Te acordás la fecha exacta y la calle? Te hablé al privado, es urgente" }
        ],
        stats: { eng: 74, hate: 10, cred: 30, chance: 65 }
      },
      {
        id: "futbolero_02",
        fase: 3,
        fecha: "05 Ago 2024",
        titulo: "La charla con el periodista",
        texto: "un periodista me consultó por el auto importado que vi. le conté todo lo que sé, parece que hay un político metido en el medio. yo solo dije lo que vi",
        replies: [
          { autor: "Amigo de la Cancha", handle: "@bostero_12", texto: "No te metas en quilombos de la política fiera, mirá si te suspenden el carnet de socio" }
        ],
        stats: { eng: 80, hate: 15, cred: 35, chance: 62 }
      },
      {
        id: "futbolero_03",
        fase: 3,
        fecha: "12 Ago 2024",
        titulo: "Rumores en el palco",
        texto: "en el entretiempo subí a buscar un café cerca de los palcos y escuché a dos dirigentes de AFA hablando preocupados del allanamiento al secretario, se miraban con cara de velorio",
        replies: [
          { autor: "Socio de Boca", handle: "@xeneize_puro", texto: "Están todos hasta las manos fiera, se les viene la noche a varios" }
        ],
        stats: { eng: 84, hate: 12, cred: 38, chance: 64 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Sigue con el fútbol como si nada)
    capa3: {
      id: "futbolero_cierre_2026",
      fase: 4,
      fecha: "18 Sep 2026",
      titulo: "20 años de socio",
      texto: "20 años de socio cumplidos este mes, ya estoy organizando el asado para el próximo clásico. no hay nada como esto",
      replies: [
        { autor: "Socio Vitalicio", handle: "@boca_amor", texto: "Salud fiera! Llevo el tinto y la bandera para la previa" }
      ],
      stats: { eng: 84, hate: 5, cred: 30, chance: 82 }
    }
  },

  // ─── 9. ONLYFANS (FASE 3: Jul-Ago 2024 — Cierre 2026 Grupo B) ─────────
  onlyfans: {
    fase: 3,
    activador: {
      id: "onlyfans_act",
      fecha: "18 Jul 2024",
      titulo: "El rumor y las suscripciones",
      texto: "no voy a confirmar ni negar de quién es el auto en el que me vieron subir 👀 (los que saben, saben) [link a mi perfil]",
      replySospechosa: {
        autor: "Hater del TL",
        handle: "@moralista_x",
        texto: "Che, ¿vos no eras la que se bajó del importado con la pareja del Secretario? ¿De esa plata no hablás?"
      }
    },
    capa2: [
      {
        id: "onlyfans_01",
        fase: 3,
        fecha: "29 Jul 2024",
        titulo: "Basta de acoso",
        texto: "a ver, en serio: dejen de mandarme DMs a las 4am preguntando dónde vivo 'para hablar'. no está bueno, basta",
        replies: [
          { autor: "Suscriptora VIP", handle: "@mica_love", texto: "Bloqueá a esos enfermos reina, están todos obsesionados con vos" }
        ],
        stats: { eng: 76, hate: 20, cred: 22, chance: 66 }
      },
      {
        id: "onlyfans_02",
        fase: 3,
        fecha: "12 Ago 2024",
        titulo: "La verdad sobre el streamer",
        texto: "listo, ya perdí la amistad de @gamer_stream por este rumor así que ahora sí lo digo clarito: nunca tuve nada que ver con ningún político. es mi amigo, punto.",
        replies: [
          { autor: "Comediante", handle: "@humor_arg", texto: "La conocí hace poco y es una genia total. El chiste que hice hace unos meses fue cualquiera, posta perdón." }
        ],
        stats: { eng: 86, hate: 16, cred: 35, chance: 60 }
      },
      {
        id: "onlyfans_03",
        fase: 3,
        fecha: "20 Ago 2024",
        titulo: "Capturas y disculpas",
        texto: "estas son solo algunas de las 400 amenazas que recibí esta semana [capturas]. al menos @gamer_stream me mandó un audio pidiendo disculpas por no haber aclarado antes",
        replies: [
          { autor: "Suscriptora VIP", handle: "@mica_love", texto: "Sos enorme reina, que la justicia se encargue de los violentos" }
        ],
        stats: { eng: 90, hate: 18, cred: 40, chance: 62 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo B: Ahora es influencer de cafés de especialidad)
    capa3: {
      id: "onlyfans_cierre_2026",
      fase: 4,
      fecha: "20 Oct 2026",
      titulo: "Café de especialidad",
      texto: "probé el café de especialidad más rico de la ciudad esta semana, review completo ya está arriba ☕",
      replies: [
        { autor: "Coffee Lover", handle: "@flat_white_fan", texto: "pasá la dirección que ese tostado etíope se ve tremendo" }
      ],
      stats: { eng: 82, hate: 6, cred: 30, chance: 80 }
    }
  },

  // ─── 10. CRYPTO BRO (FASE 3: Jul-Ago 2024 — Cierre 2026 Grupo A) ──────
  cryptobro: {
    fase: 3,
    activador: {
      id: "cryptobro_act",
      fecha: "19 Jul 2024",
      titulo: "La empresa en Delaware",
      texto: "hay un tema de una empresa que armé para alguien hace tiempo que me tiene mal hace semanas. no puedo hablar del tema todavía. DYOR, cuídense entre ustedes",
      replySospechosa: {
        autor: "Trader Fundido",
        handle: "@liquidado_eth",
        texto: "¿Cuánto te pagó el político para lavarle la guita antes de que Comando Fierro les reventara la wallet en público?"
      }
    },
    capa2: [
      {
        id: "cryptobro_01",
        fase: 3,
        fecha: "01 Ago 2024",
        titulo: "Riesgos del corazón",
        texto: "quién no arriesga no gana dicen en las finanzas. a veces el riesgo no es de plata, es de confiar en la persona equivocada",
        replies: [
          { autor: "Seguidor Cripto", handle: "@hodl_pibe", texto: "¿Liquidaste la posición en pérdida rey? El mercado siempre da revancha" }
        ],
        stats: { eng: 72, hate: 12, cred: 25, chance: 64 }
      },
      {
        id: "cryptobro_02",
        fase: 3,
        fecha: "15 Ago 2024",
        titulo: "La confesión de la LLC",
        texto: "la LLC la armé yo, para él. no fue por la comisión ni por la plata. lo hice por amor, y si tengo que hacerlo de nuevo lo vuelvo a hacer",
        replies: [
          { autor: "Usuario Anónimo", handle: "@feed_watcher", texto: "esperen... ESTO no era sobre el exchange hackeado, ¿era la pareja del secretario?" }
        ],
        stats: { eng: 94, hate: 28, cred: 30, chance: 58 }
      },
      {
        id: "cryptobro_03",
        fase: 3,
        fecha: "22 Ago 2024",
        titulo: "Firmas en soledad",
        texto: "me enteré por su abogado que en la presentación judicial dicen que la sociedad era un emprendimiento puramente mío. me dejó como único firmante de todo el desastre",
        replies: [
          { autor: "Trader Local", handle: "@cripto_alfa", texto: "Te usaron de fusible hermano. Buscate un penalista urgente antes de que te llamen a indagatoria." }
        ],
        stats: { eng: 96, hate: 24, cred: 32, chance: 56 }
      }
    ],
    // Cierre Capa 3: 2026 (Grupo A: Dolor genuino, sin arrepentimiento)
    capa3: {
      id: "cryptobro_cierre_2026",
      fase: 4,
      fecha: "25 Nov 2026",
      titulo: "Dos años después",
      texto: "dos años y todavía no sé bien qué extraño más, si a él o a la persona que era antes de conocerlo. igual no me arrepiento de nada",
      replies: [
        { autor: "Trader Amigo", handle: "@defi_sur", texto: "fuerza hermano, el tiempo acomoda todo aunque cueste aceptarlo" }
      ],
      stats: { eng: 90, hate: 14, cred: 35, chance: 76 }
    }
  },

  // ─── 11. MILITANTE (FASE 4: 2026 Completa — Flash-forward) ───────────
  militante: {
    fase: 4,
    activador: {
      id: "militante_act",
      fecha: "10 Feb 2026",
      titulo: "El recuerdo amargo",
      texto: "pasaron dos años y todavía me preguntan por qué banqué tanto a nuestro secretario en su momento. era de los nuestros, yo fui el primero en no querer creerlo",
      replySospechosa: {
        autor: "Vecino del Barrio",
        handle: "@barrio_pie",
        texto: "Ah pero del plan de las 200 viviendas populares que nunca se hicieron no decís nada, ¿no? Cómplice del Secretario."
      }
    },
    capa2: [
      {
        id: "militante_01",
        fase: 4,
        fecha: "28 Feb 2026",
        titulo: "La crítica al método",
        texto: "me contaban que algunos simpatizaban con las ideas de nuestro espacio, pero la verdad se equivocaron con el método",
        replies: [
          { autor: "Usuario Anónimo", handle: "@fierro_fan", texto: "Si Comando Fierro no abría esa base de datos, las casas sin terminar no las denunciaba nadie" }
        ],
        stats: { eng: 78, hate: 22, cred: 38, chance: 62 }
      },
      {
        id: "militante_02",
        fase: 4,
        fecha: "18 Mar 2026",
        titulo: "El curro de las viviendas",
        texto: "un plan de viviendas que nunca se construyó es una estafa al pueblo. estafa armada por los nuestros, no por el enemigo de siempre",
        replies: [
          { autor: "Vecino del Barrio", handle: "@barrio_pie", texto: "Los cimientos siguen ahí juntando yuyos. Nos mintieron en la cara compañero." }
        ],
        stats: { eng: 86, hate: 25, cred: 44, chance: 58 }
      },
      {
        id: "militante_03",
        fase: 4,
        fecha: "25 Mar 2026",
        titulo: "El precio del silencio",
        texto: "varios de los compañeros que en su momento pedían sumario interno para el secretario hoy están acomodados en secretarías con sueldo en mano. el silencio cotiza en dólares",
        replies: [
          { autor: "Compañero de Base", handle: "@militante_leal", texto: "Dolió más la traición de los que se vendieron por un cargo que el choreo original." }
        ],
        stats: { eng: 90, hate: 24, cred: 46, chance: 60 }
      },
      {
        id: "militante_04",
        fase: 4,
        fecha: "15 Abr 2026",
        titulo: "Los terrenos vacíos",
        texto: "pasé caminando por el predio donde iban a construir las 200 viviendas populares. solo hay pasto crecido, perros callejeros y un cartel oxidado que da vergüenza ajena",
        replies: [
          { autor: "Vecino del Barrio", handle: "@barrio_pie", texto: "Mis hijos ya tienen 5 años y seguimos alquilando una pieza. No nos olvidamos más." }
        ],
        stats: { eng: 94, hate: 22, cred: 50, chance: 58 }
      }
    ],
    // Cierre Capa 3: 2026
    capa3: {
      id: "militante_cierre_2026",
      fase: 4,
      fecha: "05 May 2026",
      titulo: "El desencanto final",
      texto: "todavía me cuesta asumir que mientras nosotros tocábamos timbre por un plan de viviendas que nunca se hizo, él ya sabía que no se iba a hacer. era de los nuestros. me equivoqué, y lo digo acá para que quede escrito",
      replies: [
        { autor: "Compañera de Unidad Básica", handle: "@militancia_viva", texto: "valiente autocrítica compañero, militar de verdad es decirse la verdad de frente" }
      ],
      stats: { eng: 92, hate: 20, cred: 48, chance: 75 }
    }
  },

  // ─── 12. OPINÓLOGO (FASE 4: 2026 Completa — Narrador en Retrospectiva) ──
  opinologo: {
    fase: 4,
    activador: {
      id: "opinologo_act",
      fecha: "04 Ene 2026",
      titulo: "Reescribiendo la historia",
      texto: "a dos años de todo lo del auto, la LLC y el secretario, sigo pensando que nadie entendió bien lo que realmente pasó. yo sí. abro hilo",
      replySospechosa: {
        autor: "Seguidor Antiguo",
        handle: "@memoria_red",
        texto: "Mucho análisis geopolítico de cartón, pero de la causa de corrupción que encubrieron hace dos años no te escuché decir una sola palabra."
      }
    },
    capa2: [
      {
        id: "opinologo_01",
        fase: 4,
        fecha: "20 Ene 2026",
        titulo: "La parte del amor",
        texto: "todos se quedaron con la parte del auto y la plata. la parte importante fue la del amor, y casi nadie la vio venir en su momento",
        replies: [
          { autor: "Seguidor Antiguo", handle: "@hilo_adicto", texto: "Totalmente. El pibe de cripto sacrificó su libertad por proteger al secretario." }
        ],
        stats: { eng: 80, hate: 15, cred: 35, chance: 64 }
      },
      {
        id: "opinologo_02",
        fase: 4,
        fecha: "15 Feb 2026",
        titulo: "La distancia del tiempo",
        texto: "raro pensar que hace dos años esto era solo un rumor de café y hoy es historia vieja para todos menos para los que la vivieron",
        replies: [
          { autor: "Usuario Ocasional", handle: "@timeline_sur", texto: "Así es Twitter/X, hoy te cancelan y en dos años nadie se acuerda ni de tu nombre" }
        ],
        stats: { eng: 84, hate: 12, cred: 40, chance: 60 }
      },
      {
        id: "opinologo_03",
        fase: 4,
        fecha: "02 Mar 2026",
        titulo: "El sueño de Comodoro Py",
        texto: "a dos años del escándalo, la causa judicial duerme el sueño de los justos en el juzgado federal 4. no hay ni un solo procesado con prisión preventiva, la rosca judicial funciona aceitada",
        replies: [
          { autor: "Lector Escéptico", handle: "@lector_x", texto: "Comodoro Py haciendo lo que mejor sabe hacer: planchar causas hasta que prescriban." }
        ],
        stats: { eng: 88, hate: 18, cred: 44, chance: 62 }
      },
      {
        id: "opinologo_04",
        fase: 4,
        fecha: "20 Mar 2026",
        titulo: "La anatomía del olvido",
        texto: "el ciclo de indignación en redes dura exactamente 72 horas. después la gente necesita indignarse con otra cosa o reírse con un perro que baila. nadie sostiene la memoria",
        replies: [
          { autor: "Seguidor Antiguo", handle: "@hilo_adicto", texto: "Triste pero 100% real. Consumimos causas como si fueran historias de instagram." }
        ],
        stats: { eng: 92, hate: 14, cred: 48, chance: 66 }
      }
    ],
    // Cierre Capa 3: 2026
    capa3: {
      id: "opinologo_cierre_2026",
      fase: 4,
      fecha: "28 Mar 2026",
      titulo: "El veredicto final",
      texto: "la política argentina es el único lugar donde una foto en el garage de un streamer puede terminar destapando un ministerio entero. fin del hilo",
      replies: [
        { autor: "Seguidor de Debates", handle: "@politica_arg", texto: "Excelente hilo doctor, un resumen quirúrgico de lo que fue el 2024" }
      ],
      stats: { eng: 90, hate: 16, cred: 45, chance: 78 }
    }
  }
};
