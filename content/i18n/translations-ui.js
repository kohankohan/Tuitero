/**
 * Tuitero v19 — Diccionario de Interfaz y Mecánicas (UI & Systems)
 * Localizaciones: Español (ES), Inglés (EN), Japonés (JA)
 */

const UI_TRANSLATIONS = {
  es: {
    viral_win: {
      title: "🔥 ¡RACHA VIRAL COMPLETADA!",
      subtitle: "MOMENTO VIRAL ÉPICO",
      head: "🌟 ¡3 DE 3 TWEETS EXITOSOS!",
      body: "Dominaste el algoritmo con maestría absoluta. La comunidad te convirtió en el fenómeno indiscutido de toda la red.",
      gained_label: "SEGUIDORES EXTRA GANADOS:",
      footer: "Tu cuenta alcanza un nuevo techo histórico de visibilidad e influencia."
    },
    viral_loss: {
      title: "💔 RACHA VIRAL QUEBRADA",
      subtitle: "DESAFÍO VIRAL FALLIDO",
      money_lost: "DINERO PERDIDO:",
      penalty: "PENALIZACIÓN: +2 STRIKES",
      status: "ESTADO DE CUENTA:",
      suspended: "(SUSPENDIDA)",
      danger: "(A 1 DEL GAME OVER)"
    },
    story_epilogue: {
      badge: "⚡ CASO RESUELTO // PRÓXIMO EPISODIO",
      title: "ARCO NARRATIVO COMPLETADO",
      ok_btn: "ACEPTAR"
    },
    end_goals: {
      followers_title: "👥 META DE SEGUIDORES (80.000)",
      cash_title: "💰 META DE DINERO ($10.000)",
      story_title: "🗝️ META DE HISTORIA (CAUSA JUDICIAL)",
      status_met: "✅ CUMPLIDA",
      status_insufficient: "❌ INSUFICIENTE",
      status_story_done: "✅ RESUELTA",
      status_story_missing: "⚠️ NO RESUELTA",
      followers_missing: "Te faltaron {missing} seguidores para la meta.",
      cash_missing: "Te faltaron ${missing} para la meta.",
      story_missing: "No lograste desentrañar la causa a tiempo.",
      story_done: "Desentrañaste la trama de corrupción ministerial.",
      followers_met: "Superaste el umbral masivo de influencia.",
      cash_met: "Aseguraste tu independencia financiera.",
      survivor_badge: "⚠️ SUPERVIVIENTE // META INCOMPLETA",
      victory_badge: "🏆 VICTORIA TOTAL // META CUMPLIDA",
      defeat_badge: "💀 DERROTA // GAME OVER",
      created_by: "Creado por",
      btn_copy_report: "📋 Copiar Reporte (JSON)",
      report_copied: "✓ ¡Reporte copiado!"
    },
    story_recs: {
      title: "⚡ CASO RESUELTO // PRÓXIMO EPISODIO",
      gamer: "La foto del auto importado en el garage de tu viejo destapó el escándalo de corrupción ministerial más grande de la década. Si querés ver cómo ese auto terminó en el asado clandestino con el 9 del club, probá con el Futbolero.",
      futbolero: "Viste el auto sospechoso en la cancha y en el asado antes de que saliera en los diarios. Para entender cómo la prensa siguió la patente hasta las sociedades offshore de Delaware, jugá con el Periodista Indie.",
      periodista: "Tu investigación sobre la LLC fantasma y las viviendas sin terminar en Dock Sud fue el gran destape de tu carrera. Para ver la desilusión de los que militaban esas casas bajo la lluvia, probá con el Militante Político.",
      militante: "Te dolió en el alma descubrir que mientras militabas bajo la lluvia, los tuyos ya sabían que las 200 viviendas eran un curro. Para ver quién venía advirtiendo sobre las sociedades fantasma desde las sombras, jugá con el Conspiranoico.",
      conspiranoico: "Denunciaste los terrenos de Delaware y te trataron de loco hasta que la justicia te dio la razón. Para ver cómo se lavaba esa liquidez en la City a través de un exchange local, probá con el Cryptobro.",
      cryptobro: "Pusiste la firma por amor en una LLC que terminó congelando fondos en el Corralito Cripto y te dejó de fusible judicial. Para ver al programador que vio venir el colapso del sistema desde adentro, jugá con el Techie.",
      techie: "Descifraste el manifiesto de Comando Fierro y viste el desvío de fondos públicos antes de levantar tu Serie A millonaria. Para ver al streamer que quedó en medio de la tormenta mediática, jugá con el Streamer Gamer.",
      onlyfans: "Te cansaste de que los mismos funcionarios que te mandaban DMs a las 4am ahora nieguen todo en los canales de noticias. Para ver cómo las influencers careteaban la crisis con matcha y filtros en Nordelta, jugá con la Influencer.",
      influencer: "Tapaste el dolor y las noticias de la causa judicial refugiándote en el positivismo y los canjes de Nordelta. Para ver cómo el timeline se descostilló de la risa con los memes de la crisis, jugá con la Cuenta de Humor.",
      humor: "Tu meme sobre el auto y los hackers fue furor en todo el país, aunque con los años te haya dejado un sabor amargo. Para escuchar el debate largo y los testimonios fuera de micrófono, probá con el Podcaster.",
      podcaster: "Grabaste el audio off-the-record en el garage que conectó los fondos del ministerio con el fideicomiso trucho, coronando tus 200 episodios con la primicia del año. Para ver al que convirtió todo el escándalo en un ensayo moral sobre el país, probá jugar con el Opinólogo.",
      opinologo: "Cerraste el caso con tu frase célebre: todo empezó con la foto en el garage de un streamer. Para volver al punto de partida y vivir cómo se inició el fuego desde adentro, jugá con el Streamer Gamer.",
      btn_play: "PROBAR {arch} ▶",
      next_label: "SIGUIENTE PERSPECTIVA:"
    },
    splash: {
      subtitle: "SIMULADOR DE REDES SOCIALES SATÍRICO",
      tagline: "Ganá seguidores, monetizá tu contenido y sobreviví a las cancelaciones. Un solo tweet puede consagrarte o condenarte.",
      start_btn: "COMENZAR PARTIDA ▶",
      fame_btn: "🏆 SALÓN DE LA FAMA",
      fullscreen: "⛶ PANTALLA COMPLETA",
      credits: "Creado por @kohantoys"
    },
    setup: {
      step: "PASO {current} DE {total}",
      gender_title: "ELEGÍ TU IDENTIDAD DIGITAL",
      gender_subtitle: "Definí el perfil con el que vas a disputar el algoritmo.",
      back_btn: "← VOLVER AL INICIO",
      male: "Hombre",
      male_desc: "Pronombres masculinos.",
      male_meta: "PRON: ÉL / HE",
      female: "Mujer",
      female_desc: "Pronombres femeninos.",
      female_meta: "PRON: ELLA / SHE",
      non_binary: "Diverso",
      nb_desc: "Lenguaje neutro.",
      nb_meta: "PRON: ELLE / THEY",
      archetype_title: "ELEGÍ TU ARQUETIPO",
      archetype_subtitle: "Cada arquetipo tiene su propio público, cartas exclusivas y nivel de riesgo.",
      personality_title: "ELEGÍ TU PERSONALIDAD",
      personality_subtitle: "Modifica el tono de tus respuestas y las reacciones de tu comunidad.",
      handle_title: "TU NOMBRE DE USUARIO",
      handle_subtitle: "Elegí el @ que va a figurar en el timeline de la red social.",
      handle_placeholder: "tu_usuario",
      dice_tooltip: "Generar handle aleatorio",
      start_adventure: "COMENZAR AVENTURA EN EL TIMELINE ▶"
    },
    dashboard: {
      turn: "TURNO",
      turn_max: "/ 20",
      followers: "SEGUIDORES",
      money: "DINERO",
      mental_health: "SALUD MENTAL",
      hate: "ODIO",
      credibility: "CREDIBILIDAD",
      virality: "VIRALIDAD",
      love: "AMOR",
      engagement: "ENGAGEMENT",
      boosters_btn: "⚡ BOOSTERS",
      restart_btn: "↺ REINICIAR",
      audio_btn: "🔊 AUDIO",
      help_btn: "❓ AYUDA",
      timeline_title: "🐦 TIMELINE DEL DÍA",
      love_hate: "AMOR / ODIO",
      view_profile: "📋 VER PERFIL COMPLETO",
      shortcuts: "⌨️ ATAJOS DE TECLADO",
      audio_opts: "🎧 OPCIONES DE AUDIO",
      meta_goal: "META DE VICTORIA: 80K SEGUIDORES — {pct}%",
      tooltips: {
        followers: "SEGUIDORES: tu audiencia acumulada. Meta de victoria: 80.000.",
        cash: "DINERO: tu saldo disponible para comprar Boosters. Si cae a negativo 5 turnos seguidos = Bancarrota.",
        health: "SALUD MENTAL: bienestar digital. Si llega a 0%, colapso emocional y Game Over.",
        hate: "ODIO: polarización acumulada. Si supera 80% por 3 turnos seguidos o sube al 100%, perdés.",
        love: "AMOR: reputación positiva. Mayor amor = mayor alcance orgánico."
      }
    },
    cards: {
      choose_heading: "ELEGÍ TU JUGADA // 3 OPCIONES DISPONIBLES",
      section_title: "TUITS DISPONIBLES",
      section_sub: "SELECCIONÁ UNA CARTA PARA PUBLICAR ESTE TURNO",
      tweet_now: "TUITEAR AHORA ▶",
      blocked: "BLOQUEADA ✕",
      success_prob: "PROB. ÉXITO:",
      multiplier: "MULT:",
      new_badge: "✨ NUEVA",
      clue_badge: "🔍 PISTA",
      danger_high: "PELIGRO ALTO",
      danger_med: "PELIGRO MEDIO",
      danger_low: "SEGURO",
      story_locked: "🔒 BLOQUEADA POR HISTORIA",
      palo_meme: "Meme",
      palo_tema: "Tema Propio",
      palo_pelea: "Pelea",
      palo_hilo: "Hilo",
      palo_quote: "Quote Polémico",
      palo_live: "Live-tweet",
      palo_temaDelDia: "Tema del Día",
      palo_politica: "Política",
      palo_bait: "Bait",
      palo_patrocinio: "Patrocinado",
      palo_descanso: "Desconexión",
      palo_evento: "Evento Especial",
      concept_meme: "Contenido rápido y ligero. Suma Engagement y Amor, reduce Odio orgánicamente.",
      concept_tema: "Tweet sobre tu área de especialidad. Alta probabilidad de éxito y baja de Odio.",
      concept_pelea: "Enfrentamiento directo en el TL. Gran Engagement pero alto riesgo de Odio.",
      concept_hilo: "Análisis en profundidad. Construye Credibilidad y Amor en la comunidad.",
      concept_quote: "Comentario picante a otra cuenta. Mezcla de debate y humor punzante.",
      concept_live: "Comentario en tiempo real. Alta tracción de Viralidad si el timing es acertado.",
      concept_temaDelDia: "Subirse a la tendencia #1. Gran alcance masivo con público heterogéneo.",
      concept_politica: "Postura sobre la coyuntura. Genera fuerte polarización y Odio elevado.",
      concept_bait: "Tweet polémico diseñado para generar respuestas masivas y alto Engagement artificial.",
      concept_patrocinio: "Tuit pagado por una marca. Ingreso directo de dinero a costo de Credibilidad.",
      concept_descanso: "Apagar el teléfono y despejar la mente. Reduce masivamente el Odio y recupera Salud Mental.",
      concept_evento: "Elección estratégica de evento especial coyuntural."
    },
    shop: {
      title: "TIENDA DE BOOSTERS",
      subtitle: "Invertí tu dinero en ventajas algorítmicas y reducción de odio.",
      section_title: "BOOSTERS DISPONIBLES",
      section_sub: "ACTIVA UN BOOSTER PARA MULTIPLICAR EL EFECTO DE TU PRÓXIMO TWEET",
      active_boosters: "BOOSTERS ACTIVOS",
      ready: "LISTO",
      cooldown: "ESPERA ({turns}T)",
      buy: "COMPRAR",
      owned: "ACTIVO",
      need_money: "SIN FONDOS",
      close: "CERRAR",
      no_boosters: "SIN BOOSTERS DISPONIBLES CON EL SALDO ACTUAL",
      no_booster_selected: "Ningún booster seleccionado (modo normal)",
      booster_active: "⚡ {icon} {name} ACTIVO — Próximo tweet multiplicado {mult}x",
      active_single: "ACTIVO",
      cooldown_label: "Cooldown: {turns} turno{s}",
      new_booster: "🚀 NUEVO BOOSTER DISPONIBLE",
      ok: "[ ENTENDIDO ]"
    },
    narrative: {
      feed_title: "TU FEED EN VIVO",
      clunk_hint: "ESPACIO O CLIC PARA FRENAZO ▶",
      story_clue_found: "🔍 PISTA NARRATIVA DESCUBIERTA",
      viral_tweet: "🚀 TWEET VIRAL — ALGORITMO A FAVOR",
      historic_ratio: "💀 RATIO HISTÓRICO — REPUDIO MASIVO",
      normal_tweet: "💬 TWEET PUBLICADO",
      continue_btn: "ACEPTAR Y CONTINUAR ▶",
      metrics: {
        replies: "Comentarios",
        retweets: "Retweets",
        likes: "Me gusta",
        views: "Vistas"
      },
      roll_result: "🎲 RESULTADO DE LA TIRADA: <strong>D{roll}</strong> (Requerido: ≤ {chance}%)",
      booster_applied: "📢 BOOSTER APLICADO: <strong>{name}</strong> ({mult}x impacto)",
      followers_gain: "👥 SEGUIDORES: <strong style=\"color:var(--green)\">+{amount}</strong>",
      followers_lost: "👥 PÉRDIDA DE SEGUIDORES: <strong style=\"color:var(--red)\">{amount}</strong>",
      engagement_gain: "⚡ ENGAGEMENT: <strong style=\"color:var(--green)\">+{amount}</strong>",
      cash_earned: "💰 DINERO COBRADO: <strong style=\"color:var(--amber)\">+${amount}</strong>",
      hate_generated: "❤️‍🔥 ODIO GENERADO: <strong style=\"color:var(--red)\">+{amount}</strong>",
      stance_registered: "⚡ POSTURA ESTRATÉGICA REGISTRADA",
      strike_alert: "⚠️ STRIKE {strike}/3 — ALERTA DE CANCELACIÓN",
      strike_fatal: "☠️ STRIKE 3/3 — CANCELACIÓN DEFINITIVA"
    },
    viral_modal: {
      header: "⚡ EVENTO ESPECIAL: ¡TE VOLVISTE VIRAL!",
      slide1_title: "PASO 1: LA OPORTUNIDAD EN EL FEED 🚀",
      slide1_p1: "¡El algoritmo acaba de poner todos los ojos sobre tu cuenta! Tenés frente a vos un <strong>evento opcional de alta tensión de 3 turnos seguidos</strong>.",
      slide1_p2: "Podés optar por <strong>aceptar el desafío viral</strong> o <strong>pasar de largo</strong> y continuar jugando de forma segura.",
      slide2_title: "PASO 2: EL DESAFÍO Y LA RECOMPENSA 🎯",
      slide2_p1: "Si aceptás, debés <strong>ganar 3 tweets consecutivos</strong> (acertar cartas exitosas durante los próximos 3 turnos).",
      slide2_p2: "Durante la racha se repartirán temas de tu nicho específico. Al completar los 3 aciertos, ganarás un premio masivo de entre <strong>+50% y +100% de tus seguidores actuales</strong> (según tu arquetipo) más impulso de viralidad.",
      slide3_title: "PASO 3: EL ALTO RIESGO ☠️",
      slide3_p1: "⚠️ <strong>Peligro Severo:</strong> Si fallás <strong>un solo tweet</strong> de los 3, la racha se quiebra de forma desastrosa:",
      consequences_title: "💀 CONSECUENCIAS DEL FRACASO:",
      consequences_desc: "• Perdés entre <strong>30% y 40% de todo tu dinero</strong> acumulado.<br>• Recibís <strong>2 STRIKES DIRECTOS</strong> de moderación, quedando a solo 1 strike de la cancelación definitiva.",
      accept_btn: "🔥 ACEPTAR DESAFÍO",
      decline_btn: "🛡️ PASAR (MODO NORMAL)"
    },
    story_modal: {
      header: "⚡ NUEVA TRAMA DESCUBIERTA",
      slide1_title: "¡Encontraste una pista!",
      slide1_p1: "¡Entraste en modo historia! Acabás de descubrir una pista que conecta a varios personajes detrás de escena.",
      slide1_p2: "Prestá atención a lo que sucede en el feed.",
      slide2_title: "Leé entre líneas",
      slide2_p1: "Prestá atención al contexto y a los replies latientes. Cada carta de historia esconde respuestas de otros usuarios que revelan qué está pasando realmente.",
      slide3_title: "La historia es colectiva",
      slide3_p1: "Para entender la historia completa, tenés que jugar con otros personajes. Cada arquetipo vive una parte de la verdad y tiene su propio punto de vista.",
      continue_btn: "SEGUIR JUGANDO",
      next_btn: "SIGUIENTE ➡"
    },
    cancellation: {
      title: "STRIKE DE CANCELACIÓN",
      subtitle: "Has acumulado repudio crítico de la comunidad.",
      active_strike: "STRIKE ACTIVO",
      safe: "LIMPIO",
      expulsion_warning: "Al tercer strike serás expulsado definitivamente de la plataforma.",
      accept: "ENTENDIDO Y CONTINUAR ▶"
    },
    end: {
      game_over: "FIN DE LA PARTIDA",
      final_title: "RESULTADO FINAL",
      replay: "▶ JUGAR DE NUEVO",
      ranking: "🏆 Ranking",
      tree: "🌳 Árbol de Decisiones",
      share: "🐦 Compartir en X",
      evolution: "📊 Evolución en Turnos",
      copy_report: "📋 Copiar Reporte",
      report_copied: "✓ ¡Reporte Copiado!",
      cafecito: "☕ Invitame un Cafecito",
      collection_title: "🏆 COLECCIÓN DE FINALES",
      discovered: "{found} / {total} DESCUBIERTOS",
      status_victory: "🏆 VICTORIA // META CUMPLIDA",
      status_survivor: "⚠️ SUPERVIVENCIA // META NO ALCANZADA",
      status_defeat: "💀 DERROTA // GAME OVER",
      goal_label: "🎯 META DE VICTORIA: 80.000 SEGUIDORES",
      verdict_success: "✨ ¡Alcanzaste el umbral de influencia masiva y conquistaste la red!",
      verdict_missing: "⚠️ Te faltaron {missing} seguidores para consagrarte como Fenómeno Digital.",
      verdict_defeat: "💥 Tu cuenta colapsó antes de alcanzar la meta de la red."
    },
    tutorial: {
      header: "📖 CÓMO JUGAR // GUÍA DE SUPERVIVENCIA",
      skip: "SALTAR TUTORIAL",
      prev: "⬅ ATRÁS",
      next: "SIGUIENTE ➡",
      start: "COMENZAR ▶",
      slide1_title: "PASO 1: TU OBJETIVO 🎯",
      slide1_p1: "Sobreviví <strong>20 turnos</strong> ganando seguidores y monetizando tu fama. Para ganar y entrar al Salón de la Fama, superá los <strong>80.000 seguidores</strong> o acumulá más de <strong>$10.000</strong>.",
      slide1_p2: "Cuidá tu <strong>Salud Mental</strong> (si llega a cero sufrís un burnout) y evitá acumular deudas o caer en la <strong>Cancelación</strong>.",
      slide2_title: "PASO 2: EL TIMELINE 📱",
      slide2_p1: "Cada turno robás 3 cartas. Tienen distintos niveles de riesgo, impacto y % de éxito. Un buen tuit suma <em>engagement</em> y plata. Si falla, perdés seguidores y aumenta tu nivel de Odio bruscamente.",
      slide3_title: "PASO 3: LOS BOOSTERS 🚀",
      slide3_p1: "Usá tu plata en <strong>Boosters</strong> antes de tuitear. Multiplican tus resultados, pero son caros y tienen tiempos de enfriamiento. ⚠️ Cuidado: si el tuit falla, el booster también amplificará las pérdidas.",
      slide4_title: "PASO 4: LA CANCELACIÓN ☠️",
      slide4_p1: "Atento al <strong>Odio</strong>. Entrar en peleas o política lo dispara. Si llega al <strong>100%</strong>, acumulás 3 strikes de cancelación o pasás 3 turnos seguidos en Zona Roja (>85%), te cancelan y perdés. Jugá <em>Día de Desconexión</em> para enfriarlo."
    },
    cancellation_modal: {
      header: "⚖️ SISTEMA DE CANCELACIÓN // 3 PASOS",
      slide1_title: "PASO 1: EL DISPARADOR DEL REPUDIO ⚠️",
      slide1_p1: "Al jugar cartas polémicas de riesgo (<strong>Pelea, Política, Bait o Quote</strong>) y fracasar, o al tuitear con tu nivel de Odio elevado, la plataforma y la comunidad coordinan reportes masivos.",
      slide1_p2: "Esto acumula una infracción grave: un <strong>Strike de Moderación</strong>.",
      slide2_title: "PASO 2: LA REGLA DE LOS 3 STRIKES ☠️",
      slide2_p1: "Tu cuenta cuenta con una tolerancia estricta de 3 faltas:",
      strike1: "STRIKE 1: ADVERTENCIA",
      strike2: "STRIKE 2: CRÍTICO",
      strike3: "STRIKE 3: EXPULSIÓN",
      slide2_p2: "Al llegar al <strong>tercer strike (3/3)</strong>, la plataforma suspende tu perfil de forma definitiva e inapelable (<strong>Game Over por Cancelación</strong>).",
      slide3_title: "PASO 3: CÓMO PROTEGERTE Y SOBREVIVIR 🛡️",
      slide3_p1: "• Priorizá cartas de <strong>Día de Desconexión</strong> para enfriar el timeline (-10% a -15% de Odio y recuperación de Salud Mental).",
      slide3_p2: "• Compartí <strong>Memes</strong> o <strong>Hilos constructivos</strong> para recuperar Amor y bajar la polarización.",
      slide3_p3: "• No juegues Pelea ni Baits cuando estés amonestado con 2 strikes.",
      understood: "ENTENDIDO ▶"
    },
    hate_modal: {
      header: "🔥 ODIO Y ZONA ROJA // 3 PASOS",
      slide1_title: "PASO 1: LA ESCALADA DEL ODIO 📈",
      slide1_p1: "Cada respuesta agresiva, fracaso de carta o choque dialéctico llena tu medidor de <strong>Odio</strong>. Al superar el <strong>65%</strong>, el timeline entra en estado de hostilidad abierta y las respuestas tóxicas se multiplican.",
      slide2_title: "PASO 2: LA CUENTA REGRESIVA DE ZONA ROJA (≥80%) 🚨",
      slide2_p1: "Si tu Odio alcanza o supera el <strong>80%</strong>, entrás en Zona Roja y se inicia una cuenta regresiva letal:",
      turn1: "TURNO 1: ALERTA ROJA",
      turn2: "TURNO 2: ÚLTIMA GRACIA",
      turn3: "TURNO 3: CIERRE FORZADO",
      slide2_p2: "Permanecer <strong>3 turnos consecutivos</strong> con Odio ≥80% resulta en expulsión inmediata por toxicidad extrema.",
      slide3_title: "PASO 3: APAGAR EL INCENDIO 🧘",
      slide3_p1: "• La herramienta más potente es el <strong>Día de Desconexión</strong>: reduce bruscamente el odio acumulado.",
      slide3_p2: "• Publicar <strong>Memes</strong> amigables une al feed y reduce el Odio de forma orgánica.",
      slide3_p3: "• Monitoreá tu <strong>Salud Mental</strong> para no caer en burnout en medio de la crisis.",
      understood: "ENTENDIDO ▶"
    },
    rotate: {
      title: "GIRÁ TU TELÉFONO",
      desc: "Para la mejor experiencia recomendamos jugarlo en una PC o Mac, pero podés jugar en tu celular rotándolo a modo horizontal para ver todas las cartas, boosters y el timeline en su proporción óptima.",
      pill: "🔄 ROTAR A HORIZONTAL"
    },
    profile: {
      title: "PERFIL COMPLETO",
      pronouns: "PRONOMBRES",
      archetype_label: "ARQUETIPO",
      personality_label: "PERSONALIDAD",
      allied: "CARTAS AFINES",
      weak: "CARTAS DÉBILES",
      traits: "RASGOS",
      synergy: "SINERGIA",
      cancels: "CANCELACIONES",
      win_condition: "CONDICIÓN DE VICTORIA"
    },
    pronouns: {
      hombre: "Él",
      mujer: "Ella",
      diverso: "Elle"
    },
    tree: {
      title: "ÁRBOL DE DECISIONES — RECORRIDO DE PARTIDA",
      turns: "TURNOS",
      chosen: "Elegido",
      discarded: "Descartado",
      success: "Éxito",
      ratio: "Ratio",
      copy_image: "📋 Copiar imagen",
      close: "✕ Cerrar [Esc]",
      turn_label: "Turno",
      viral_impact: "✨ IMPACTO VIRAL",
      tweet_success: "✅ TWEET EXITOSO",
      tweet_ratio: "❌ RATIO EN EL TIMELINE",
      followers: "seguidores",
      engagement_label: "engagement",
      hate_gen: "odio generado",
      booster_label: "Booster:",
      end_of_turn: "Balance al cierre de turno:",
      stats_followers: "SEGUIDORES:",
      stats_cash: "DINERO:",
      stats_health: "SALUD:",
      stats_final: "FINAL:",
      discarded_turn: "OPCIÓN DESCARTADA · TURNO",
      discarded_desc: "Esta carta formaba parte de tu mano y decidiste no jugarla."
    },
    mobile_timeline: {
      title: "📱 TIMELINE DE LA PARTIDA",
      sub: "{handle} · {count} TWEETS PUBLICADOS",
      viral: "✨ VIRAL",
      success: "✅ ÉXITO",
      ratio: "❌ RATIO",
      hate: "odio",
      close_btn: "CERRAR TIMELINE ✕"
    },
    end2: {
      chart_title: "EVOLUCIÓN EN EL TIMELINE ({turns} TURNOS)",
      legend_followers: "SEGUIDORES",
      legend_cash: "DINERO",
      created_by: "Creado por",
      tree_btn: "🌳 Ver Árbol",
      share_btn: "🐦 Compartir en X",
      ranking_btn: "🏆 Salón de la Fama",
      copy_btn: "📋 Copy Report",
      cafecito_btn: "☕ Invitar un Cafecito"
    },
    audio: {
      title: "🎧 OPCIONES DE AUDIO",
      music: "🎵 MÚSICA",
      sfx: "🔔 EFECTOS DE SONIDO",
      ok: "LISTO"
    },
    ranking: {
      title: "🏆 SALÓN DE LA FAMA // LEADERBOARD",
      daily: "📅 TOP 10 DE HOY (DIARIO)",
      alltime: "🏆 TOP 10 HISTÓRICO (ALL-TIME)",
      close: "CERRAR ✕"
    },
    ranking_prompt: {
      title: "¡PARTIDA COMPLETADA!",
      subtitle: "Ingresá tu @ para entrar al Salón de la Fama",
      submit: "⚡ ENTRAR AL SALÓN",
      skip: "Saltar"
    },
    mobile_boosters: {
      title: "🚀 TIENDA DE BOOSTERS",
      subtitle: "Tocá un booster para activarlo o desactivarlo para tu próximo tweet:",
      no_booster: "Ningún booster seleccionado",
      ready: "LISTO PARA TUITEAR ▶"
    },
    endings: {
      villano: {
        titulo: "EL VILLANO NECESARIO",
        sub: "Te odiaron. Te bancaron igual.",
        narrativa0: "Tu timeline es un campo de batalla y vos sos el último en pie.",
        narrativa1: "Insultaron tu nombre en miles de quotes. Cada uno sumó un seguidor más.",
        narrativa2: "Al final, todos hablan de vos. Y eso, en esta plataforma, es poder."
      },
      idolo_caido: {
        titulo: "ÍDOLO CAÍDO",
        sub: "La cima tiene poca estabilidad.",
        narrativa0: "Tuviste el timeline en la palma de la mano. Después lo soltaste.",
        narrativa1: "Las capturas de pantalla circulan. El contexto, nadie lo recuerda.",
        narrativa2: "La fama se fue más rápido de lo que llegó. Eso también es parte del juego."
      },
      preferido: {
        titulo: "EL FAVORITO DEL ALGORITMO",
        sub: "El sistema te eligió.",
        narrativa0: "No tuvieras que hacer demasiado. El algoritmo simplemente te empujó.",
        narrativa1: "Tu contenido llegó a feeds que jamás habrías soñado.",
        narrativa2: "La plataforma tiene sus preferidos. Esta vez fuiste vos."
      },
      comico: {
        titulo: "EL CÓMICO DEL TL",
        sub: "Te reíste de todo y el TL te rio con vos.",
        narrativa0: "Cada tuit tuyo fue un meme en potencia.",
        narrativa1: "Hasta los que te odiaban retwitteaban tus chistes.",
        narrativa2: "El humor fue tu armadura. Y nunca se rompió."
      },
      autoridad: {
        titulo: "LA AUTORIDAD DEL TEMA",
        sub: "Cuando hablás, el timeline escucha.",
        narrativa0: "No necesitás gritar. Tu nombre ya pesa.",
        narrativa1: "Periodistas, marcas y cuentas rivales te citaron sin querer darte crédito.",
        narrativa2: "Construiste credibilidad tweet a tweet. Eso no se cancela fácil."
      },
      triunfador: {
        titulo: "FENÓMENO DIGITAL",
        sub: "Rompiste el algoritmo. Y después rompiste internet.",
        narrativa0: "Llegaste a trending sin buscarlo. Después lo buscaste y volviste a lograrlo.",
        narrativa1: "Tu nombre apareció en medios que ni sabías que existían.",
        narrativa2: "Ganaste el juego que casi nadie sabe que está jugando."
      },
      nicho: {
        titulo: "REY/REINA DEL NICHO",
        sub: "Pocos te siguen. Todos te respetan.",
        narrativa0: "No necesitás masas. Tu comunidad es pequeña, leal y feroz.",
        narrativa1: "Cada post tuyo es evento. No hay ruido, solo señal.",
        narrativa2: "En un TL lleno de gritos, vos encontraste tu frecuencia."
      },
      combo_conspira_troll: {
        titulo: "EL AGITADOR OSCURO",
        sub: "Conspiraciones + trolleo = caos puro.",
        narrativa0: "Cada hilo tuyo dejó más preguntas que respuestas. A propósito.",
        narrativa1: "Te bloquearon en masa. Te crearon cuentas clon de homenaje.",
        narrativa2: "Nadie sabe si creés en lo que decís. Eso es exactamente el plan."
      },
      combo_influencer_troll: {
        titulo: "INFLUENCER DE LA POLÉMICA",
        sub: "Likes de día, ratio de noche.",
        narrativa0: "Tu feed es una montaña rusa emocional y a la gente le encanta.",
        narrativa1: "Brands te escriben a los DMs. Activistas te denuncian. Todo en el mismo día.",
        narrativa2: "Descubriste que la controversia monetiza mejor que la virtud."
      },
      combo_fut_troll: {
        titulo: "EL HINCHA TÓXICO",
        sub: "Tu equipo perdió. Ganaste el debate.",
        narrativa0: "Nunca hablás del juego sin mencionar que los árbitros están arreglados.",
        narrativa1: "Las Superficiales son tu arte marcial. Las usás con precisión quirúrgica.",
        narrativa2: "Tu cuenta es un monumento al amor-odio más honesto del internet."
      },
      combo_militante_wholesome: {
        titulo: "EL ACTIVISTA CON CORAZÓN",
        sub: "Cambiar el mundo, pero con buena vibra.",
        narrativa0: "Tus hilos sobre injusticia social terminan siempre en hilo de gatitos.",
        narrativa1: "Sos el referente que la militancia necesitaba: consistente y humano.",
        narrativa2: "Probaste que se puede luchar por algo sin volverse amargo en el proceso."
      },
      combo_gamer_troll: {
        titulo: "EL GAMER INTOCABLE",
        sub: "GGs only. Los demás no cuentan.",
        narrativa0: "Tu opinión sobre mecánicas de juego destruyó estudios enteros. En el TL.",
        narrativa1: "Te cancelaron tres veces. Volviste con un gif de victoria cada vez.",
        narrativa2: "La cultura gamer te hizo inmune. O eso creés vos."
      },
      combo_tech_wholesome: {
        titulo: "EL TECH-OPTIMISTA",
        sub: "La tecnología nos va a salvar. Quizás.",
        narrativa0: "Explicás sistemas complejos con analogías tan buenas que da vergüenza ajena.",
        narrativa1: "Tu comunidad son ingenieros que finalmente se sienten humanos al leerte.",
        narrativa2: "En un sector lleno de ego, elegiste la empatía. Y funciona."
      },
      combo_pod_wholesome: {
        titulo: "EL PODCASTER DEL ALMA",
        sub: "Long-form en un mundo de 280 caracteres.",
        narrativa0: "Tus hilos son capítulos. Tu comunidad, oyentes fieles.",
        narrativa1: "Te ofrecieron auspicios de marcas. Los rechazaste para mantener la voz.",
        narrativa2: "Raro en este timeline: la gente te lee hasta el final."
      },
      combo_of_troll: {
        titulo: "EL TROLL PREMIUM",
        sub: "Cobrás por el caos.",
        narrativa0: "Pasaste de cuenta gratuita a subscripción de pago. La gente paga por el drama.",
        narrativa1: "Tus posts exclusivos son los más screenshotteados del TL. Gratis.",
        narrativa2: "Monetizaste la indignación ajena mejor que cualquier medio tradicional."
      },
      combo_crypto_troll: {
        titulo: "EL SHILLER IRREDENTO",
        sub: "WAGMI. Todos menos vos.",
        narrativa0: "Predicaste una altcoin a $0.001. Llegó a $0.0001. Dijiste que era esperada la corrección.",
        narrativa1: "Tu comunidad perdió plata siguiéndote. Te sigue igual.",
        narrativa2: "En crypto, la confianza vale más que los fundamentals. Lo explotaste al máximo."
      },
      combo_conspira_gracioso: {
        titulo: "EL BUFÓN ILUMINADO",
        sub: "Las conspiraciones más locas, contadas con humor.",
        narrativa0: "No sabés si reírte o preocuparte. Eso es exactamente lo que buscabas.",
        narrativa1: "Tus teorías son absurdas, pero la delivery es impecable.",
        narrativa2: "Alguien tiene que reírse del apocalipsis. Decidiste ser vos."
      },
      combo_opi_troll: {
        titulo: "EL PROVOCADOR DE OPINIÓN",
        sub: "Hot takes calientes. Temperatura ambiente.",
        narrativa0: "Tu columna de opinión diaria es lo más odiado y más leído del TL.",
        narrativa1: "Tenés razón el 40% de las veces. Eso es suficiente para ser influyente.",
        narrativa2: "La gente no te sigue por tus ideas. Te sigue para refutarte. Y eso cuenta."
      },
      combo_fut_info: {
        titulo: "EL INSIDER DEL FÚTBOL",
        sub: "Sabés el mercado de pases antes que los clubes.",
        narrativa0: "Tu credibilidad de mercado es tan alta que los medios te citan sin confirmación.",
        narrativa1: "Un pase que filtraste movió el precio de una acción deportiva.",
        narrativa2: "En el fútbol digital, la información es el gol más valioso."
      },
      combo_of_gracioso: {
        titulo: "EL COMEDIANTE DE SUSCRIPCIÓN",
        sub: "Te pagan por reírse con vos.",
        narrativa0: "Tu contenido pago es más gracioso que el gratuito. La gente lo sabe.",
        narrativa1: "Convertiste el humor en producto. Sin perder la gracia en el proceso.",
        narrativa2: "Ser funny es un talento. Cobrarlo, una habilidad. Tenés ambas."
      },
      combo_per_gracioso: {
        titulo: "EL PERIODISTA IRÓNICO",
        sub: "Noticias reales. Titular absurdo.",
        narrativa0: "Reportás lo mismo que los grandes medios, pero nadie los cita a ellos.",
        narrativa1: "Tu ironía es tan afilada que a veces la gente no sabe si es real.",
        narrativa2: "El periodismo de datos con humor es tuyo. Lo inventaste sin querer."
      },
      combo_militante_gracioso: {
        titulo: "EL MILITANTE CON MEMES",
        sub: "La causa, pero en formato viral.",
        narrativa0: "Bajaste la guardia ideológica de miles con un meme bien ejecutado.",
        narrativa1: "Tu activismo es tan entretenido que hasta el bando contrario lo comparte.",
        narrativa2: "Probaste que la risa puede ser una herramienta política devastadora."
      },
      combo_influencer_gracioso: {
        titulo: "EL INFLUENCER AUTODESPIADADO",
        sub: "El chiste sos vos. Y eso te hace rico.",
        narrativa0: "Te reís de tus propios fails antes de que lo haga nadie.",
        narrativa1: "Marcas te contratan por autenticidad. Les das caos controlado.",
        narrativa2: "En un mundo de influencers perfectos, la imperfección es tu marca."
      },
      combo_conspira_info: {
        titulo: "EL PERIODISTA DE LO OCULTO",
        sub: "Investigás lo que nadie quiere que sepas.",
        narrativa0: "Tus hilos de investigación duran días en trending.",
        narrativa1: "Fuentes anónimas te escriben. Las verificás. Las publicás. El TL explota.",
        narrativa2: "En la era de la desinformación, elegiste la peligrosa senda de los hechos."
      },
      combo_humor_troll: {
        titulo: "EL REY DEL BARDO",
        sub: "El insulto como arte. Vive de la polémica disfrazada de chiste.",
        narrativa0: "Convertiste el bardo en tu disciplina artística. Nadie sabe dónde termina el chiste y dónde empieza la provocación.",
        narrativa1: "Cada tweet tuyo es una granada sin espoleta arrojada al centro del debate.",
        narrativa2: "El timeline arde a tu paso, pero el Engagement nunca para de subir."
      },
      combo_influencer_wholesome: {
        titulo: "LA BURBUJA DE CRISTAL",
        sub: "Smoothies, velas y autenticidad 100% de diseño.",
        narrativa0: "Construiste un paraíso estético impoluto. Vacío por dentro, pero adorado por cientos de miles de seguidores fieles.",
        narrativa1: "La luz perfecta, los colores pastel y la armonía digital total.",
        narrativa2: "En un timeline lleno de hostilidad, tu burbuja es un refugio millonario."
      },
      combo_militante_troll: {
        titulo: "EL GUERRERO DIGITAL",
        sub: "La causa como bandera, el insulto como método.",
        narrativa0: "Defendiste la trinchera a capa y espada. Bloqueaste a medio país pero tu núcleo duro te venera con fervor.",
        narrativa1: "Para tus enemigos sos veneno puro; para tu tropa, un general indiscutible.",
        narrativa2: "La guerra cultural en redes no perdona a los tibios."
      },
      combo_crypto_info: {
        titulo: "EL GURÚ VERIFICADO",
        sub: "Análisis serio, datos on-chain y cero hype.",
        narrativa0: "Un unicornio en el barro cripto: rigor, métricas y honestidad. Tu credibilidad vale más que un bitcoin entero.",
        narrativa1: "Desarmaste estafas y advertiste desplomes antes de que ocurrieran.",
        narrativa2: "Demostraste que la transparencia técnica puede vencer al humo especulativo."
      },
      combo_conspira_wholesome: {
        titulo: "EL PROFETA GENTIL",
        sub: "Cree en todo pero con amor y sin agresividad.",
        narrativa0: "Ves reptiles y conspiraciones globales en todos lados, pero tu tono pacífico y tierno hace que todos te quieran.",
        narrativa1: "Tus teorías del fin del mundo suenan como cuentos de hadas tranquilizadores.",
        narrativa2: "Nadie se enoja con vos, porque advertís del colapso planetario con una sonrisa."
      },
      combo_of_info: {
        titulo: "LA ACTIVISTA DIGITAL",
        sub: "Usa la plataforma para hablar de derechos y economía.",
        narrativa0: "Descolocaste a la red entera combinando monetización sin tapujos y debates profundos sobre economía y libertades.",
        narrativa1: "Rompiste todos los prejuicios morales con argumentos implacables y números claros.",
        narrativa2: "Libertad financiera y batalla cultural en un solo timeline."
      },
      combo_per_troll: {
        titulo: "EL CLICKBAITER DEFINITIVO",
        sub: "El escándalo vende más que la verdad.",
        narrativa0: "Aprendiste las reglas del algoritmo: la indignación es el combustible más rentable de internet.",
        narrativa1: "Títulos engañosos, preguntas retóricas insidiosas y viralidad garantizada.",
        narrativa2: "La verdad aburre; el escándalo paga las cuentas."
      },
      combo_gamer_info: {
        titulo: "EL CRÍTICO DE LA INDUSTRIA",
        sub: "Análisis de narrativa, estética y gameplay.",
        narrativa0: "El anti-streamer por excelencia: no gritás, no hacés payasadas y cada reseña tuya cambia la reputación de un estudio.",
        narrativa1: "Desmenuzaste mecánicas de diseño con la precisión de un cirujano.",
        narrativa2: "En una red dominada por el hype vacío, tu palabra es ley."
      },
      combo_fut_wholesome: {
        titulo: "EL FANDOM SANO",
        sub: "Respeta al rival y no insulta al árbitro.",
        narrativa0: "Un verdadero marciano en el fútbol de Twitter: celebrás el buen juego, elogiás al rival y desarmás la toxicidad del clásico.",
        narrativa1: "Demostraste que se puede amar la camiseta sin desearle la muerte al vecino.",
        narrativa2: "Tu timeline es una pequeña isla de cordura en medio de la cancha salvaje."
      },
      combo_tech_troll: {
        titulo: "EL DISRUPTOR TÓXICO",
        sub: "Build in public... liquidando a la competencia.",
        narrativa0: "Lanzaste tres SaaS rentables mientras te burlabas públicamente del código y los despidos de las grandes tecnológicas.",
        narrativa1: "Tu soberbia solo es comparable con la velocidad con la que lanzás features.",
        narrativa2: "Te odian en Silicon Valley, pero pagan religiosamente tus suscripciones."
      },
      combo_pod_gracioso: {
        titulo: "EL LATE NIGHT CRIOLLO",
        sub: "Entrevistas con humor y clips virales.",
        narrativa0: "Transformaste tu podcast en el show más viral de la red. Cada clip genera millones de reproducciones y memes instantáneos.",
        narrativa1: "Invitados de todos los palos pasaron por tu micrófono para reírse de sí mismos.",
        narrativa2: "Hiciste del diálogo informal un fenómeno masivo de streaming."
      },
      combo_opi_info: {
        titulo: "EL INTELECTUAL PÚBLICO",
        sub: "Opina de todo pero con fuentes y bibliografía.",
        narrativa0: "Tus hilos son cátedras abiertas. Te convertiste en la voz de consulta obligatoria cuando el país necesita entender una crisis.",
        narrativa1: "Datos duros, citas académicas y perspectiva histórica frente al ruido cotidiano.",
        narrativa2: "El algoritmo te premia porque la gente busca certezas en tiempos de confusión."
      },
      combo_humor_wholesome: {
        titulo: "EL CORAZÓN DEL TIMELINE",
        sub: "La risa que une y no lastima a nadie.",
        narrativa0: "Lograste lo imposible: hacer reír a millones de usuarios sin caer en la crueldad, el bardo ni la humillación ajena.",
        narrativa1: "Tus memes son universales, reconfortantes y compartidos por todas las edades.",
        narrativa2: "Demostraste que la comedia limpia puede ser tan viral como la discordia."
      },
      finale_deuda: {
        titulo: "BANCARROTA DIGITAL",
        sub: "Los números no mentían. Vos sí.",
        narrativa0: "Cada booster, cada campaña, cada inversión: todo a pérdida.",
        narrativa1: "El TL notó el desesperado viraje hacia el contenido pagado. Y lo rechazó.",
        narrativa2: "El algoritmo no tiene piedad con las cuentas en rojo. Ni la audiencia tampoco."
      },
      finale_burnout: {
        titulo: "COLAPSO DIGITAL",
        sub: "El timeline ganó. Vos, no.",
        narrativa0: "Llegó un punto en que abrir la app dolía físicamente.",
        narrativa1: "La Salud Mental fue ignorada demasiado tiempo. Se cobró la deuda.",
        narrativa2: "Publicaste tu último tweet con las manos temblando. Después, silencio."
      },
      finale_cancelacion_3strikes: {
        titulo: "CUENTA SUSPENDIDA",
        sub: "Tres strikes. Cero apelaciones.",
        narrativa0: "La plataforma envió el mail. Vos ya sabías lo que decía.",
        narrativa1: "Tres veces cruzaste la línea. Tres veces el TL coordinó el ataque.",
        narrativa2: "El sistema de moderación es un juez sin misericordia. Ahora lo sabés."
      },
      finale_cancelacion_zonaroja: {
        titulo: "EXPULSIÓN POR TOXICIDAD EXTREMA",
        sub: "80% de Odio sostenido. 0% de futuro en la plataforma.",
        narrativa0: "Tu feed se convirtió en un repositorio de odio colectivo.",
        narrativa1: "Cada nuevo tuit era gasolina al incendio que ya no podías apagar.",
        narrativa2: "Cuando el odio supera al contenido, la plataforma toma la decisión por vos."
      }
    }
  },

  en: {
    viral_win: {
      title: "🔥 VIRAL STREAK COMPLETED!",
      subtitle: "EPIC VIRAL MOMENT",
      head: "🌟 3 OUT OF 3 HIT TWEETS!",
      body: "You conquered the algorithm with total mastery. The timeline turned you into the undisputed main character of the internet.",
      gained_label: "EXTRA FOLLOWERS GAINED:",
      footer: "Your account reached an all-time high of clout and reach."
    },
    viral_loss: {
      title: "💔 VIRAL STREAK BROKEN",
      subtitle: "FAILED VIRAL CHALLENGE",
      money_lost: "MONEY LOST:",
      penalty: "PENALTY: +2 STRIKES",
      status: "ACCOUNT STATUS:",
      suspended: "(SUSPENDED)",
      danger: "(1 STRIKE AWAY FROM GAME OVER)"
    },
    story_epilogue: {
      badge: "⚡ CASE CLOSED // NEXT EPISODE",
      title: "NARRATIVE ARC COMPLETED",
      ok_btn: "OK"
    },
    end_goals: {
      followers_title: "👥 FOLLOWERS GOAL (80,000)",
      cash_title: "💰 CASH GOAL ($10,000)",
      story_title: "🗝️ STORY GOAL (CRIMINAL CASE)",
      status_met: "✅ MET",
      status_insufficient: "❌ INSUFFICIENT",
      status_story_done: "✅ SOLVED",
      status_story_missing: "⚠️ UNSOLVED",
      followers_missing: "You were {missing} followers short.",
      cash_missing: "You were ${missing} short of the cash goal.",
      story_missing: "You did not uncover the plot in time.",
      story_done: "You exposed the government corruption scandal.",
      followers_met: "You achieved mainstream viral clout.",
      cash_met: "You secured total financial independence.",
      survivor_badge: "⚠️ SURVIVOR // INCOMPLETE GOALS",
      victory_badge: "🏆 TOTAL VICTORY // GOALS MET",
      defeat_badge: "💀 DEFEAT // GAME OVER",
      created_by: "Created by",
      btn_copy_report: "📋 Copy Report (JSON)",
      report_copied: "✓ Report copied!"
    },
    story_recs: {
      title: "⚡ CASE CLOSED // NEXT EPISODE",
      gamer: "The photo of the luxury car in your dad's garage blew open the decade's biggest government corruption scandal. To see how that same car ended up at a secret barbecue with the star striker, try the Soccer Fan.",
      futbolero: "You spotted the suspicious car at the stadium and at the team barbecue before the press caught on. To understand how journalists traced the license plate to Delaware shell companies, play as the Indie Journalist.",
      periodista: "Your investigation exposing the shell company and the unfinished housing project made your career. To see the heartbreak of grassroots activists who canvassed in the rain for a scam, try the Political Militant.",
      militante: "It broke your heart realizing that while you campaigned in the rain, your leaders already knew the housing fund was a fraud. To see who was tracking those shell companies from the shadows, play as the Conspiracy Theorist.",
      conspiranoico: "You flagged the Delaware land deals and everyone called you crazy until the courts confirmed it. To see how that money was laundered through a crypto exchange, try playing as the Cryptobro.",
      cryptobro: "You signed off on a shell company out of love, only to trigger a crypto bank run and end up as the legal fall guy. To meet the developer who saw the collapse coming from the inside, play as the Techie.",
      techie: "You cracked the encrypted manifest and watched public funds get siphoned before closing your Series A. To see the streamer caught in the crossfire of the scandal, play as the Gamer.",
      onlyfans: "You got sick of corrupt officials sliding into your DMs at 4am while denying everything on the nightly news. To see how lifestyle influencers tried to mask the crisis behind luxury and matcha, try the Influencer.",
      influencer: "You masked your grief and the criminal investigation behind morning routines and affirmations. To see how timeline comedians mocked the crisis, play as the Humor Account.",
      humor: "Your viral joke about the luxury car and the hackers made internet history, even if it left a bitter aftertaste. To hear the uncut deep dive and off-the-record stories, try the Podcaster.",
      podcaster: "You recorded the leaked audio connecting ministry funds to the fake housing trust, defining your first 200 episodes. To see the commentator who turned the entire scandal into a national moral verdict, play as the Pundit.",
      opinologo: "You sealed the case with your famous takeaway: it all started with a photo in a streamer's garage. To return to ground zero and live where the fire started, play as the Gamer.",
      btn_play: "PLAY AS {arch} ▶",
      next_label: "NEXT PERSPECTIVE:"
    },
    splash: {
      subtitle: "SATIRICAL SOCIAL MEDIA SIMULATOR",
      tagline: "Gain followers, monetize your feed, and survive cancel culture. One single tweet can make you an icon or get you exiled.",
      start_btn: "START GAME ▶",
      fame_btn: "🏆 HALL OF FAME",
      fullscreen: "⛶ FULLSCREEN",
      credits: "Created by @kohantoys"
    },
    setup: {
      step: "STEP {current} OF {total}",
      gender_title: "CHOOSE YOUR DIGITAL IDENTITY",
      gender_subtitle: "Pick the persona you'll use to game the algorithm.",
      back_btn: "← BACK TO START",
      male: "Man",
      male_desc: "Masculine pronouns.",
      male_meta: "PRON: HE / HIM",
      female: "Woman",
      female_desc: "Feminine pronouns.",
      female_meta: "PRON: SHE / HER",
      non_binary: "Non-Binary",
      nb_desc: "Neutral language.",
      nb_meta: "PRON: THEY / THEM",
      archetype_title: "CHOOSE YOUR ARCHETYPE",
      archetype_subtitle: "Each archetype features distinct followers, tailored cards, and threat levels.",
      personality_title: "CHOOSE YOUR PERSONALITY",
      personality_subtitle: "Shapes your voice, tone, and the way the timeline claps back.",
      handle_title: "YOUR USERNAME",
      handle_subtitle: "Set the handle that will top the trending topics.",
      handle_placeholder: "your_handle",
      dice_tooltip: "Randomize username",
      start_adventure: "LAUNCH ONTO THE TIMELINE ▶"
    },
    dashboard: {
      turn: "TURN",
      turn_max: "/ 20",
      followers: "FOLLOWERS",
      money: "CASH",
      mental_health: "MENTAL HEALTH",
      hate: "HATE",
      credibility: "CREDIBILITY",
      virality: "VIRALITY",
      love: "CLOUT / LOVE",
      engagement: "ENGAGEMENT",
      boosters_btn: "⚡ BOOSTERS",
      restart_btn: "↺ RESTART",
      audio_btn: "🔊 AUDIO",
      help_btn: "❓ HELP",
      timeline_title: "🐦 DAILY TIMELINE",
      love_hate: "CLOUT / HATE",
      view_profile: "📋 FULL PROFILE",
      shortcuts: "⌨️ KEYBOARD SHORTCUTS",
      audio_opts: "🎧 AUDIO SETTINGS",
      meta_goal: "WIN CONDITION: 80K FOLLOWERS — {pct}%",
      tooltips: {
        followers: "FOLLOWERS: your total audience. Win goal: 80,000.",
        cash: "CASH: your balance for buying Boosters. Go negative for 5 turns in a row = Bankruptcy.",
        health: "MENTAL HEALTH: your digital wellbeing. If it hits 0%, you burn out — Game Over.",
        hate: "HATE: accumulated toxicity. Stay above 80% for 3 turns, or hit 100%, and you're done.",
        love: "LOVE / CLOUT: positive rep. More love = more organic reach."
      }
    },
    cards: {
      choose_heading: "PICK YOUR MOVE // 3 OPTIONS IN HAND",
      section_title: "AVAILABLE TWEETS",
      section_sub: "PICK A CARD TO BROADCAST THIS TURN",
      tweet_now: "POST TWEET ▶",
      blocked: "LOCKED ✕",
      success_prob: "SUCCESS ODDS:",
      multiplier: "MULT:",
      new_badge: "✨ NEW",
      clue_badge: "🔍 CLUE",
      danger_high: "HIGH RISK",
      danger_med: "MEDIUM RISK",
      danger_low: "SAFE",
      story_locked: "🔒 STORY LOCKED",
      palo_meme: "Meme",
      palo_tema: "Niche Topic",
      palo_pelea: "Fight",
      palo_hilo: "Thread",
      palo_quote: "Spicy Quote",
      palo_live: "Live-tweet",
      palo_temaDelDia: "Trending Topic",
      palo_politica: "Politics",
      palo_bait: "Rage Bait",
      palo_patrocinio: "Sponsored",
      palo_descanso: "Disconnect Day",
      palo_evento: "Special Event",
      concept_meme: "Quick, shareable content. Boosts Engagement and Love, naturally reduces Hate.",
      concept_tema: "Post about your niche. High success odds and low Hate risk.",
      concept_pelea: "Direct confrontation on the TL. Huge Engagement spike but extreme Hate risk.",
      concept_hilo: "In-depth analysis. Builds Credibility and Love with your community.",
      concept_quote: "Spicy reaction to another account. Mix of debate and sharp wit.",
      concept_live: "Real-time commentary. Massive virality if your timing is on point.",
      concept_temaDelDia: "Ride the #1 trend. Massive reach with a broad, heterogeneous audience.",
      concept_politica: "Take a political stance. Triggers strong polarization and massive Hate spikes.",
      concept_bait: "Inflammatory post engineered to bait replies and inflate Engagement.",
      concept_patrocinio: "Brand-sponsored tweet. Direct cash income at the cost of Credibility.",
      concept_descanso: "Go off the grid. Massively reduces Hate and restores Mental Health.",
      concept_evento: "Strategic response to a live special event."
    },
    shop: {
      title: "BOOSTERS SHOP",
      subtitle: "Invest cash into algorithmic juice and crisis management.",
      section_title: "AVAILABLE BOOSTERS",
      section_sub: "ACTIVATE A BOOSTER TO MULTIPLY YOUR NEXT TWEET",
      active_boosters: "ACTIVE BOOSTERS",
      ready: "READY",
      cooldown: "COOLDOWN ({turns}T)",
      buy: "BUY",
      owned: "ACTIVE",
      need_money: "NOT ENOUGH CASH",
      close: "CLOSE",
      no_boosters: "NO BOOSTERS AFFORDABLE WITH CURRENT BALANCE",
      no_booster_selected: "No booster selected (standard mode)",
      booster_active: "⚡ {icon} {name} ACTIVE — Next tweet multiplied {mult}x",
      active_single: "ACTIVE",
      cooldown_label: "Cooldown: {turns} turn{s}",
      new_booster: "🚀 NEW BOOSTER UNLOCKED",
      ok: "[ GOT IT ]"
    },
    narrative: {
      feed_title: "LIVE TIMELINE FEED",
      clunk_hint: "HIT SPACE OR CLICK TO BRAKE ▶",
      story_clue_found: "🔍 STORY CLUE DISCOVERED",
      viral_tweet: "🚀 VIRAL TWEET — ALGORITHM BLESSING",
      historic_ratio: "💀 BRUTAL RATIO — MOB BACKLASH",
      normal_tweet: "💬 TWEET PUBLISHED",
      continue_btn: "ACCEPT & PROCEED ▶",
      metrics: {
        replies: "Replies",
        retweets: "Reposts",
        likes: "Likes",
        views: "Impressions"
      },
      roll_result: "🎲 ROLL RESULT: <strong>D{roll}</strong> (Required: ≤ {chance}%)",
      booster_applied: "📢 ACTIVE BOOSTER: <strong>{name}</strong> ({mult}x impact)",
      followers_gain: "👥 FOLLOWERS GAINED: <strong style=\"color:var(--green)\">+{amount}</strong>",
      followers_lost: "👥 FOLLOWERS LOST: <strong style=\"color:var(--red)\">{amount}</strong>",
      engagement_gain: "⚡ ENGAGEMENT: <strong style=\"color:var(--green)\">+{amount}</strong>",
      cash_earned: "💰 CASH EARNED: <strong style=\"color:var(--amber)\">+${amount}</strong>",
      hate_generated: "❤️‍🔥 HATE GENERATED: <strong style=\"color:var(--red)\">+{amount}</strong>",
      stance_registered: "⚡ STRATEGIC STANCE RECORDED",
      strike_alert: "⚠️ STRIKE {strike}/3 — MODERATION WARNING",
      strike_fatal: "☠️ STRIKE 3/3 — FINAL ACCOUNT SUSPENSION"
    },
    viral_modal: {
      header: "⚡ SPECIAL EVENT: YOU WENT VIRAL!",
      slide1_title: "STEP 1: THE FEED OPPORTUNITY 🚀",
      slide1_p1: "The algorithm just put every spotlight on your profile! You have an <strong>optional high-stakes 3-turn event</strong>.",
      slide1_p2: "You can choose to <strong>accept the viral challenge</strong> or <strong>pass</strong> and continue playing it safe.",
      slide2_title: "STEP 2: THE CHALLENGE & REWARDS 🎯",
      slide2_p1: "If you accept, you must <strong>win 3 consecutive tweets</strong> (play successful cards over the next 3 turns).",
      slide2_p2: "During the streak, niche-tailored cards will appear. Clearing all 3 earns a massive <strong>+50% to +100% follower surge</strong> plus virality perks.",
      slide3_title: "STEP 3: THE HIGH RISK ☠️",
      slide3_p1: "⚠️ <strong>Severe Danger:</strong> If you fail even <strong>one single tweet</strong> out of 3, the streak breaks disastrously:",
      consequences_title: "💀 FAILURE CONSEQUENCES:",
      consequences_desc: "• You lose between <strong>30% and 40% of all accumulated cash</strong>.<br>• You receive <strong>2 DIRECT STRIKES</strong>, putting you just 1 strike away from a permanent ban.",
      accept_btn: "🔥 ACCEPT CHALLENGE",
      decline_btn: "🛡️ PASS (SAFE MODE)"
    },
    story_modal: {
      header: "⚡ NEW STORYLINE DISCOVERED",
      slide1_title: "You found a clue!",
      slide1_p1: "You entered story mode! You just uncovered a clue that connects several characters behind the scenes.",
      slide1_p2: "Pay close attention to what unfolds in the feed.",
      slide2_title: "Read between the lines",
      slide2_p1: "Pay attention to the context and the lurking replies. Each story card hides responses from other users that reveal what's really happening.",
      slide3_title: "The story is collective",
      slide3_p1: "To understand the full picture, you need to play as other characters. Each archetype lives a piece of the truth and has their own point of view.",
      continue_btn: "KEEP PLAYING",
      next_btn: "NEXT ➡"
    },
    cancellation: {
      title: "CANCEL CULTURE STRIKE",
      subtitle: "You triggered severe public outrage across the platform.",
      active_strike: "ACTIVE STRIKE",
      safe: "CLEAN",
      expulsion_warning: "Reaching 3 strikes results in permanent account termination.",
      accept: "UNDERSTOOD & PROCEED ▶"
    },
    end: {
      game_over: "GAME OVER",
      final_title: "FINAL OUTCOME",
      replay: "▶ PLAY AGAIN",
      ranking: "🏆 Leaderboard",
      tree: "🌳 Decision Tree",
      share: "🐦 Share on X",
      evolution: "📊 Turn Evolution",
      copy_report: "📋 Copy Report",
      report_copied: "✓ Report Copied!",
      cafecito: "☕ Buy me a Coffee",
      collection_title: "🏆 ENDINGS VAULT",
      discovered: "{found} / {total} UNLOCKED",
      status_victory: "🏆 VICTORY // GOAL REACHED",
      status_survivor: "⚠️ SURVIVOR // GOAL MISSED",
      status_defeat: "💀 DEFEAT // GAME OVER",
      goal_label: "🎯 VICTORY GOAL: 80,000 FOLLOWERS",
      verdict_success: "✨ You reached massive influence status and conquered the timeline!",
      verdict_missing: "⚠️ You needed {missing} more followers to achieve Digital Phenomenon status.",
      verdict_defeat: "💥 Your account collapsed before reaching the timeline goal."
    },
    tutorial: {
      header: "📖 HOW TO PLAY // SURVIVAL GUIDE",
      skip: "SKIP TUTORIAL",
      prev: "⬅ BACK",
      next: "NEXT ➡",
      start: "START ▶",
      slide1_title: "STEP 1: YOUR GOAL 🎯",
      slide1_p1: "Survive <strong>20 turns</strong> building your follower count and monetizing your clout. To win and enter the Hall of Fame, hit <strong>80,000 followers</strong> or stack over <strong>$10,000</strong>.",
      slide1_p2: "Watch your <strong>Mental Health</strong> — hitting zero triggers a full burnout. Avoid debt and stay out of the <strong>Cancel Zone</strong>.",
      slide2_title: "STEP 2: THE TIMELINE 📱",
      slide2_p1: "Each turn you draw 3 cards with different risk levels, impact, and success odds. A good tweet earns <em>engagement</em> and cash. Miss it, and you bleed followers while Hate spikes hard.",
      slide3_title: "STEP 3: BOOSTERS 🚀",
      slide3_p1: "Spend cash on <strong>Boosters</strong> before you post. They amplify your results — but they're pricey and have cooldowns. ⚠️ Heads up: if your tweet flops, the booster amplifies the losses too.",
      slide4_title: "STEP 4: CANCEL CULTURE ☠️",
      slide4_p1: "Keep your <strong>Hate</strong> meter in check. Fights and politics send it through the roof. Hit <strong>100%</strong>, rack up 3 cancel strikes, or stay in the Red Zone (>85%) for 3 turns in a row — and you're done. Play a <em>Disconnect Day</em> to cool things down."
    },
    cancellation_modal: {
      header: "⚖️ CANCEL CULTURE SYSTEM // 3 STEPS",
      slide1_title: "STEP 1: THE TRIGGER ⚠️",
      slide1_p1: "Playing high-risk cards (<strong>Fight, Politics, Bait or Quote-Tweet</strong>) and failing — or posting while your Hate is already high — sets off a wave of mass reporting across the platform.",
      slide1_p2: "The result: a <strong>Moderation Strike</strong> on your account.",
      slide2_title: "STEP 2: THE 3-STRIKE RULE ☠️",
      slide2_p1: "Your account has a strict three-infraction limit:",
      strike1: "STRIKE 1: WARNING",
      strike2: "STRIKE 2: CRITICAL",
      strike3: "STRIKE 3: BANNED",
      slide2_p2: "On the <strong>third strike (3/3)</strong>, the platform permanently suspends your profile — no appeal, no exceptions (<strong>Game Over: Cancelled</strong>).",
      slide3_title: "STEP 3: HOW TO SURVIVE 🛡️",
      slide3_p1: "• Prioritize <strong>Disconnect Day</strong> cards to cool the timeline down (-10% to -15% Hate + Mental Health recovery).",
      slide3_p2: "• Drop <strong>Memes</strong> or <strong>Constructive Threads</strong> to rebuild goodwill and drive down polarization.",
      slide3_p3: "• Never play Fight or Bait cards when you're already sitting on 2 strikes.",
      understood: "GOT IT ▶"
    },
    hate_modal: {
      header: "🔥 HATE & RED ZONE // 3 STEPS",
      slide1_title: "STEP 1: THE HATE SPIRAL 📈",
      slide1_p1: "Every aggressive reply, failed card, or public clash fills your <strong>Hate</strong> meter. Once it crosses <strong>65%</strong>, the timeline enters open hostility mode and toxic replies start snowballing.",
      slide2_title: "STEP 2: THE RED ZONE COUNTDOWN (≥80%) 🚨",
      slide2_p1: "If your Hate reaches or exceeds <strong>80%</strong>, you enter the Red Zone and trigger a lethal countdown:",
      turn1: "TURN 1: RED ALERT",
      turn2: "TURN 2: LAST CHANCE",
      turn3: "TURN 3: FORCED SHUTDOWN",
      slide2_p2: "Staying in the Red Zone for <strong>3 consecutive turns</strong> results in immediate termination for extreme toxicity.",
      slide3_title: "STEP 3: PUT OUT THE FIRE 🧘",
      slide3_p1: "• Your most powerful tool is <strong>Disconnect Day</strong> — it sharply cuts your accumulated Hate.",
      slide3_p2: "• Posting friendly <strong>Memes</strong> brings your feed together and organically reduces Hate.",
      slide3_p3: "• Watch your <strong>Mental Health</strong> — don't spiral into burnout during a crisis.",
      understood: "GOT IT ▶"
    },
    rotate: {
      title: "ROTATE YOUR PHONE",
      desc: "For the premier experience, we recommend playing on Desktop / Mac. On mobile, rotate to landscape mode to view all 3 cards, boosters, and feed at optimal scale.",
      pill: "🔄 ROTATE TO LANDSCAPE"
    },
    profile: {
      title: "FULL PROFILE",
      pronouns: "PRONOUNS",
      archetype_label: "ARCHETYPE",
      personality_label: "PERSONALITY",
      allied: "ALLIED TOPICS",
      weak: "WEAK TOPICS",
      traits: "TRAITS",
      synergy: "SYNERGY",
      cancels: "CANCEL RISK",
      win_condition: "WIN CONDITION"
    },
    pronouns: {
      hombre: "He/Him",
      mujer: "She/Her",
      diverso: "They/Them"
    },
    tree: {
      title: "DECISION TREE — MATCH RECAP",
      turns: "TURNS",
      chosen: "Chosen",
      discarded: "Discarded",
      success: "Success",
      ratio: "Ratio",
      copy_image: "📋 Copy image",
      close: "✕ Close [Esc]",
      turn_label: "Turn",
      viral_impact: "✨ VIRAL IMPACT",
      tweet_success: "✅ TWEET LANDED",
      tweet_ratio: "❌ RATIOED ON THE TL",
      followers: "followers",
      engagement_label: "engagement",
      hate_gen: "hate generated",
      booster_label: "Booster:",
      end_of_turn: "End-of-turn balance:",
      stats_followers: "FOLLOWERS:",
      stats_cash: "CASH:",
      stats_health: "HEALTH:",
      stats_final: "ENDING:",
      discarded_turn: "DISCARDED OPTION · TURN",
      discarded_desc: "This card was in your hand and you chose not to play it."
    },
    mobile_timeline: {
      title: "📱 MATCH TIMELINE",
      sub: "{handle} · {count} TWEETS POSTED",
      viral: "✨ VIRAL",
      success: "✅ SUCCESS",
      ratio: "❌ RATIO",
      hate: "hate",
      close_btn: "CLOSE TIMELINE ✕"
    },
    end2: {
      chart_title: "TIMELINE EVOLUTION ({turns} TURNS)",
      legend_followers: "FOLLOWERS",
      legend_cash: "CASH",
      created_by: "Created by",
      tree_btn: "🌳 Decision Tree",
      share_btn: "🐦 Share on X",
      ranking_btn: "🏆 Leaderboard",
      copy_btn: "📋 Copy Report",
      cafecito_btn: "☕ Buy me a Coffee"
    },
    audio: {
      title: "🎧 AUDIO OPTIONS",
      music: "🎵 MUSIC",
      sfx: "🔔 SOUND EFFECTS",
      ok: "DONE"
    },
    ranking: {
      title: "🏆 HALL OF FAME // LEADERBOARD",
      daily: "📅 TODAY'S TOP 10 (DAILY)",
      alltime: "🏆 ALL-TIME TOP 10",
      close: "CLOSE ✕"
    },
    ranking_prompt: {
      title: "MATCH COMPLETED!",
      subtitle: "Enter your @ to join the Hall of Fame",
      submit: "⚡ JOIN THE HALL",
      skip: "Skip"
    },
    mobile_boosters: {
      title: "🚀 BOOSTER SHOP",
      subtitle: "Tap a booster to activate or deactivate it for your next tweet:",
      no_booster: "No booster selected",
      ready: "READY TO POST ▶"
    },
    endings: {
      villano: {
        titulo: "THE NECESSARY VILLAIN",
        sub: "They despised you. They couldn't stop talking about you.",
        narrativa0: "Your timeline was a war zone, and you were the last one standing.",
        narrativa1: "Thousands quote-tweeted your name as a slur. Every single one added a follower.",
        narrativa2: "Love or hate — on this platform, attention is the only currency that matters."
      },
      idolo_caido: {
        titulo: "FALLEN IDOL",
        sub: "The higher the platform, the harder the ratio.",
        narrativa0: "You had the algorithm eating out of your hand. Then you fumbled it.",
        narrativa1: "The screenshots live forever. The context? Nobody saved that part.",
        narrativa2: "Clout evaporates faster than it builds. You learned that the hard way."
      },
      preferido: {
        titulo: "ALGORITHM'S DARLING",
        sub: "The system picked you. You didn't even ask.",
        narrativa0: "You barely had to try. The For You page just kept pushing you forward.",
        narrativa1: "Your posts landed in feeds you never would have reached organically.",
        narrativa2: "The platform has its favorites. This time, it was you."
      },
      comico: {
        titulo: "THE TL'S COMEDIAN",
        sub: "You made the whole timeline laugh — even the haters.",
        narrativa0: "Every post you dropped had the potential to go viral as a meme.",
        narrativa1: "People who had you muted were screenshotting your jokes to send their friends.",
        narrativa2: "Humor was your armor. It never cracked."
      },
      autoridad: {
        titulo: "THE AUTHORITY",
        sub: "When you post, the timeline listens.",
        narrativa0: "You don't need to be loud. Your name carries weight on its own.",
        narrativa1: "Journalists, brands, and rival accounts cited you — without giving you credit.",
        narrativa2: "You built credibility tweet by tweet. That kind of reputation doesn't cancel easily."
      },
      triunfador: {
        titulo: "DIGITAL PHENOMENON",
        sub: "You broke the algorithm. Then you broke the internet.",
        narrativa0: "You hit trending without trying. Then you did it on purpose. Twice.",
        narrativa1: "Your name showed up in outlets you'd never heard of.",
        narrativa2: "You won a game most people don't even know they're playing."
      },
      nicho: {
        titulo: "THE NICHE TWEETER",
        sub: "Small following. Absolute authority.",
        narrativa0: "You don't need mass appeal. Your community is tight, loyal, and ruthless.",
        narrativa1: "Every post you drop is an event. No noise — pure signal.",
        narrativa2: "In a TL full of screaming, you found your frequency and stayed on it."
      },
      combo_conspira_troll: {
        titulo: "THE DARK AGITATOR",
        sub: "Conspiracy + trolling = pure, uncut chaos.",
        narrativa0: "Every thread you posted left more questions than answers. By design.",
        narrativa1: "They mass-blocked you. Then created tribute clone accounts in your honor.",
        narrativa2: "Nobody knows if you believe what you say. That's exactly the point."
      },
      combo_influencer_troll: {
        titulo: "CONTROVERSY INFLUENCER",
        sub: "Sponsored posts by day. Ratio magnet by night.",
        narrativa0: "Your feed is an emotional roller coaster and the audience is addicted.",
        narrativa1: "Brands DM you with deals. Activists file reports. Sometimes on the same day.",
        narrativa2: "You discovered that controversy monetizes better than virtue ever will."
      },
      combo_fut_troll: {
        titulo: "THE TOXIC FAN",
        sub: "Your team lost. You won the argument.",
        narrativa0: "You never talk about the game without implying the refs were paid off.",
        narrativa1: "Subtweets are your martial art. You throw them with surgical precision.",
        narrativa2: "Your account is a monument to the most honest love-hate relationship on the internet."
      },
      combo_militante_wholesome: {
        titulo: "THE ACTIVIST WITH A HEART",
        sub: "Fighting for change, but make it wholesome.",
        narrativa0: "Your social justice threads always end with a cat photo compilation.",
        narrativa1: "You became the voice the movement actually needed: consistent and genuinely human.",
        narrativa2: "You proved you can fight for something without turning bitter in the process."
      },
      combo_gamer_troll: {
        titulo: "THE UNTOUCHABLE GAMER",
        sub: "GGs only. Everyone else is irrelevant.",
        narrativa0: "Your takes on game mechanics have ended studio careers. On the TL.",
        narrativa1: "You got cancelled three times. You came back each time with a victory gif.",
        narrativa2: "Gamer culture made you immune to shame. Or so you tell yourself."
      },
      combo_tech_wholesome: {
        titulo: "THE TECH OPTIMIST",
        sub: "Technology will save us. Probably.",
        narrativa0: "You explain complex systems with analogies so good they're almost embarrassing.",
        narrativa1: "Your followers are engineers who finally feel human when they read your posts.",
        narrativa2: "In a sector drowning in ego, you chose empathy. And it actually worked."
      },
      combo_pod_wholesome: {
        titulo: "THE SOUL PODCASTER",
        sub: "Long-form thinking in a 280-character world.",
        narrativa0: "Your threads read like chapters. Your community listens like loyal subscribers.",
        narrativa1: "Sponsors reached out. You turned them down to protect the voice.",
        narrativa2: "Rare on this timeline: people actually read you all the way to the end."
      },
      combo_of_troll: {
        titulo: "PREMIUM TROLL",
        sub: "You charge for the chaos.",
        narrativa0: "You went from free account to paid subscription. People pay for the drama.",
        narrativa1: "Your exclusive posts are the most-screenshotted content on the TL. For free.",
        narrativa2: "You monetized other people's outrage better than any legacy media outlet."
      },
      combo_crypto_troll: {
        titulo: "THE UNREPENTANT SHILLER",
        sub: "WAGMI. Everyone except you.",
        narrativa0: "You called an altcoin at $0.001. It hit $0.0001. You called it a healthy correction.",
        narrativa1: "Your community lost money following your calls. They still follow you.",
        narrativa2: "In crypto, trust outlasts fundamentals. You milked that truth to its limit."
      },
      combo_conspira_gracioso: {
        titulo: "THE ENLIGHTENED JESTER",
        sub: "The wildest conspiracies, delivered with perfect comic timing.",
        narrativa0: "You never know whether to laugh or be genuinely worried. That's the whole bit.",
        narrativa1: "Your theories are absurd. Your delivery is immaculate.",
        narrativa2: "Someone has to laugh at the apocalypse. You volunteered."
      },
      combo_opi_troll: {
        titulo: "THE OPINION PROVOCATEUR",
        sub: "Scorching hot takes. Room temperature accuracy.",
        narrativa0: "Your daily op-ed is simultaneously the most hated and most-read post on the TL.",
        narrativa1: "You're right 40% of the time. That's apparently enough to be influential.",
        narrativa2: "People don't follow you for your ideas. They follow you to dunk on them. It counts."
      },
      combo_fut_info: {
        titulo: "THE FOOTBALL INSIDER",
        sub: "You know the transfer window before the clubs do.",
        narrativa0: "Your transfer credibility is so high that journalists cite you without verification.",
        narrativa1: "A leak you dropped moved the price of a sports stock.",
        narrativa2: "In digital football culture, information is the most valuable goal you can score."
      },
      combo_of_gracioso: {
        titulo: "THE SUBSCRIPTION COMEDIAN",
        sub: "People pay to laugh with you.",
        narrativa0: "Your paid content is funnier than your free stuff. Everyone knows it.",
        narrativa1: "You turned humor into a product without losing the craft.",
        narrativa2: "Being funny is a talent. Charging for it is a skill. You've got both."
      },
      combo_per_gracioso: {
        titulo: "THE IRONIC JOURNALIST",
        sub: "Real news. Absurd headline.",
        narrativa0: "You cover the same stories as major outlets. Nobody quotes them.",
        narrativa1: "Your irony is so sharp that people sometimes can't tell if it's real.",
        narrativa2: "Data journalism with comedic timing is yours. You invented it by accident."
      },
      combo_militante_gracioso: {
        titulo: "THE MEME ACTIVIST",
        sub: "The cause, delivered in viral format.",
        narrativa0: "You lowered the ideological defenses of thousands with one perfectly-timed meme.",
        narrativa1: "Your activism is so entertaining that even the opposition shares it.",
        narrativa2: "You proved that laughter can be a devastatingly effective political tool."
      },
      combo_influencer_gracioso: {
        titulo: "THE SELF-ROASTING INFLUENCER",
        sub: "The joke is you. That's the brand.",
        narrativa0: "You laugh at your own failures before anyone else gets the chance.",
        narrativa1: "Brands hire you for authenticity. You deliver controlled chaos.",
        narrativa2: "In a world of polished influencers, your mess is your most valuable asset."
      },
      combo_conspira_info: {
        titulo: "THE UNDERGROUND JOURNALIST",
        sub: "Investigating what nobody wants you to find.",
        narrativa0: "Your investigative threads stay in trending for days.",
        narrativa1: "Anonymous sources reach out. You verify. You publish. The TL detonates.",
        narrativa2: "In the age of misinformation, you chose the dangerous path of actual facts."
      },
      combo_humor_troll: {
        titulo: "KING OF THE CLASH",
        sub: "Insults as art. Living off controversies disguised as jokes.",
        narrativa0: "You turned online flame wars into high art. Nobody can tell where the parody ends and provocation starts.",
        narrativa1: "Every post of yours is an unpinned grenade thrown into trending discourse.",
        narrativa2: "The timeline scorches in your wake, but your Engagement graph never stops soaring."
      },
      combo_influencer_wholesome: {
        titulo: "THE GLASS BUBBLE",
        sub: "Smoothies, candles, and 100% designer authenticity.",
        narrativa0: "You built an immaculate aesthetic haven. Hollow inside, yet adored by hundreds of thousands of devoted fans.",
        narrativa1: "Flawless lighting, pastel palettes, and absolute digital serenity.",
        narrativa2: "In a timeline poisoned with rage, your bubble is a luxury sanctuary."
      },
      combo_militante_troll: {
        titulo: "THE DIGITAL WARRIOR",
        sub: "Partisan zeal as a flag, ruthless mockery as a method.",
        narrativa0: "You defended the ideological barricades tooth and nail. Half the internet is blocked, but your base is fanatic.",
        narrativa1: "Poison to your rivals, an untouchable commander to your followers.",
        narrativa2: "The digital culture war takes no prisoners, and you showed no mercy."
      },
      combo_crypto_info: {
        titulo: "THE VERIFIED GURU",
        sub: "On-chain data, deep metrics, and zero cheap hype.",
        narrativa0: "A true unicorn in crypto sludge: analytical rigor, verified stats, and honesty. Your reputation outvalues a Bitcoin.",
        narrativa1: "You exposed pump-and-dumps and called crashes weeks in advance.",
        narrativa2: "Proving that real technical integrity beats speculative noise every time."
      },
      combo_conspira_wholesome: {
        titulo: "THE GENTLE PROPHET",
        sub: "Believes in every conspiracy, but spreads love instead of anger.",
        narrativa0: "You spot alien cabals everywhere, yet your calm, wholesome demeanor makes even hard skeptics adore you.",
        narrativa1: "Apocalyptic warnings that sound like comforting bedtime stories.",
        narrativa2: "No one can stay mad at you when you warn about global doom with a warm smile."
      },
      combo_of_info: {
        titulo: "THE DIGITAL ACTIVIST",
        sub: "Using subscriber power to champion civic and economic rights.",
        narrativa0: "You disrupted the whole feed by combining unapologetic monetization with incisive debates on civil liberties.",
        narrativa1: "Shattering outdated stigmas with cold logic, balance sheets, and policy analysis.",
        narrativa2: "Financial autonomy meets cultural vanguard on one single timeline."
      },
      combo_per_troll: {
        titulo: "THE ULTIMATE CLICKBAITER",
        sub: "Outrage always outsells the nuanced truth.",
        narrativa0: "You decoded the algorithm's cruelest law: synthetic outrage is the most liquid fuel on the net.",
        narrativa1: "Provocative framing, leading questions, and explosive engagement every single drop.",
        narrativa2: "Nuance puts audiences to sleep; high drama pays the server bills."
      },
      combo_gamer_info: {
        titulo: "THE INDUSTRY CRITIC",
        sub: "Dissecting game design, narrative pacing, and technical fidelity.",
        narrativa0: "The quintessential anti-streamer: no screams, no cheap gimmicks, just essays that move developer roadmaps.",
        narrativa1: "Analyzing gameplay systems and corporate monetization with clinical precision.",
        narrativa2: "In a sea of sponsored hype, your seal of approval is golden."
      },
      combo_fut_wholesome: {
        titulo: "THE NOBLE SUPPORTER",
        sub: "Honoring opponents and respecting the referee.",
        narrativa0: "An extraordinary anomaly on sports Twitter: celebrating beauty on the pitch, praising rival brilliance, and disarming toxicity.",
        narrativa1: "Proving you can bleed club colors without hating your neighbor.",
        narrativa2: "Your timeline stands as a clean oasis in a feral arena."
      },
      combo_tech_troll: {
        titulo: "THE TOXIC DISRUPTOR",
        sub: "Building in public while eviscerating the legacy competition.",
        narrativa0: "You scaled three profitable SaaS tools while publicly roasting big tech architecture and bureaucratic bloat.",
        narrativa1: "Your swagger is matched only by the blistering speed of your deployments.",
        narrativa2: "Silicon Valley elites loathe your arrogance, but their engineers pay your licenses."
      },
      combo_pod_gracioso: {
        titulo: "THE LATE NIGHT MAVERICK",
        sub: "Witty interviews, sharp humor, and endlessly shareable clips.",
        narrativa0: "You transformed your podcast into the internet's most viral variety show. Every soundbite sparks millions of streams.",
        narrativa1: "Celebrities and misfits from all spectrums visit your studio to laugh at their own flaws.",
        narrativa2: "Turning raw, candid banter into a massive cultural phenomenon."
      },
      combo_opi_info: {
        titulo: "THE PUBLIC INTELLECTUAL",
        sub: "Weighing in on every issue with primary sources and data.",
        narrativa0: "Your threads are masterclasses in clarity. You became the trusted voice society checks when crisis strikes.",
        narrativa1: "Hard evidence, historical perspective, and scholarly composure cutting through daily hysteria.",
        narrativa2: "The algorithm rewards you because people crave certainty in turbulent times."
      },
      combo_humor_wholesome: {
        titulo: "HEART OF THE TIMELINE",
        sub: "Laughter that unites without mocking anyone.",
        narrativa0: "You achieved the impossible: delighting millions daily without cynicism, insults, or cheap punches.",
        narrativa1: "Comforting, universally relatable humor shared across all demographics.",
        narrativa2: "Proof that uplifting creativity can go just as viral as bitterness."
      },
      finale_deuda: {
        titulo: "FINANCIAL RUIN",
        sub: "The numbers never lied. You did.",
        narrativa0: "Every booster, every campaign, every investment: all in the red.",
        narrativa1: "The TL noticed the desperate pivot to sponsored content. And rejected it.",
        narrativa2: "The algorithm has no compassion for accounts running on fumes. Neither does the audience."
      },
      finale_burnout: {
        titulo: "DIGITAL BURNOUT",
        sub: "The timeline won. You didn't.",
        narrativa0: "There came a point where opening the app was physically painful.",
        narrativa1: "Mental Health was ignored for too long. It collected what it was owed.",
        narrativa2: "You posted your last tweet with shaking hands. Then: silence."
      },
      finale_cancelacion_3strikes: {
        titulo: "PERMANENTLY BANNED",
        sub: "Three strikes. Zero appeals.",
        narrativa0: "The platform sent the email. You already knew what it said.",
        narrativa1: "Three times you crossed the line. Three times the TL coordinated the pile-on.",
        narrativa2: "The moderation system is a judge with no mercy. Now you know."
      },
      finale_cancelacion_zonaroja: {
        titulo: "EXTREME FEED HOSTILITY",
        sub: "80% sustained Hate. 0% future on this platform.",
        narrativa0: "Your feed became a landfill of collective outrage.",
        narrativa1: "Every new post was fuel thrown onto a fire you'd already lost control of.",
        narrativa2: "When the hate drowns out the content, the platform makes the decision for you."
      }
    }
  },

  ja: {
    viral_win: {
      title: "🔥 バズり連鎖コンプリート！",
      subtitle: "歴史的バズモーメント",
      head: "🌟 3連続ツイート大成功！",
      body: "アルゴリズムを完璧に支配しました。タイムライン全体があなたのアカウントに熱狂しています。",
      gained_label: "獲得した追加フォロワー:",
      footer: "あなたのアカウントは影響力とリーチの最高記録を更新しました。"
    },
    viral_loss: {
      title: "💔 バズり連鎖失敗",
      subtitle: "バズ挑戦の代償",
      money_lost: "失った所持金:",
      penalty: "ペナルティ: 炎上警告 +2",
      status: "アカウント状態:",
      suspended: "(アカウント凍結)",
      danger: "(ゲームオーバーまであと1回)"
    },
    story_epilogue: {
      badge: "⚡ 事件解明 // 次回エピソード",
      title: "物語アーク完了",
      ok_btn: "了解"
    },
    end_goals: {
      followers_title: "👥 フォロワー目標（8万人）",
      cash_title: "💰 所持金目標（$10,000）",
      story_title: "🗝️ ストーリー目標（汚職事件）",
      status_met: "✅ 達成",
      status_insufficient: "❌ 未達成",
      status_story_done: "✅ 解明済",
      status_story_missing: "⚠️ 未解明",
      followers_missing: "目標まであと{missing}人不足でした。",
      cash_missing: "目標まであと${missing}不足でした。",
      story_missing: "事件の全容を解明できませんでした。",
      story_done: "政府の巨額汚職スキャンダルを暴きました。",
      followers_met: "圧倒的なネット上の影響力を獲得しました。",
      cash_met: "完全な経済的自立を達成しました。",
      survivor_badge: "⚠️ 生き残り // 目標未達",
      victory_badge: "🏆 完全勝利 // 目標達成",
      defeat_badge: "💀 敗北 // ゲームオーバー",
      created_by: "制作:",
      btn_copy_report: "📋 レポートをコピー (JSON)",
      report_copied: "✓ コピー完了！"
    },
    story_recs: {
      title: "⚡ 事件解明 // 次回エピソード",
      gamer: "親父のガレージにあった高級車の写真が、政府の巨額汚職事件を暴く引き金となった。あの車がなぜエースFWとの極秘バーベキュー場にあったのかを知りたいなら、次回は「熱狂サポ」でプレイ！",
      futbolero: "報道陣が嗅ぎつける前に、スタジアムや選手会食で見かけた不審な高級車。記者がどうやってナンバープレートからデラウェア州の幽霊会社を突き止めたのか、「インディー記者」で確かめよう。",
      periodista: "未完成の住宅計画と幽霊会社を暴いた調査スレッドは、あなたの記者人生の金字塔となった。雨の中チラシを配っていた信奉者たちがその裏切りをどう受け止めたのか、「政治活動家」の視点で追体験しよう。",
      militante: "雨の中で住宅計画を信じて活動していたのに、幹部たちは最初から詐欺だと知っていた――その絶望。影から幽霊会社の存在を警告し続けていた人物を見るなら、「陰謀論者」でプレイ！",
      conspiranoico: "デラウェアの怪しい土地取引を告発し、裁判所が事実認定するまで狂人扱いされた日々。その資金が市中でどう仮想通貨取引所を通じてロンダリングされたのか、「クリプトブロ」の視点を試そう。",
      cryptobro: "愛のためにサインしたペーパーカンパニーが仮想通貨取り付け騒ぎを招き、法的な捨て駒にされたあの日。システムの崩壊を内部から予見していたエンジニアの視点は、「テック起業家」で！",
      techie: "暗号化マニフェストを解読し、巨額資金調達の裏で起きた公金横領を見届けた。スキャンダルの渦中に放り込まれた配信者の真実を見るなら、「ゲーム実況者」へ。",
      onlyfans: "深夜4時にDMを送ってきた政府高官たちが、ニュースで全否定している姿に吐き気がしたあの日。セレブたちが抹茶と高級フィルターでどう疑惑を誤魔化そうとしたのか、「インフルエンサー」で確かめよう。",
      influencer: "捜査のニュースと失意を、毎朝のルーティンとポジティブな投稿で隠し続けた日々。タイムラインがその事件をどんなミームで嘲笑していたのか、「ミーム・お笑い垢」でプレイ！",
      humor: "高級車とハッカーをネタにした投稿は大バズりしたが、時が経つにつれ苦い味が残った。オフレコ証言とロングインタビューの真相を聞くなら、「ポッドキャスター」へ。",
      podcaster: "公金横領のウラ取り音源をガレージで収録し、200回記念の特ダネとなった。このスキャンダルを社会の縮図として総括した評論家の視点は、「ご意見番（オピニオン垢）」で！",
      opinologo: "「すべては配信者のガレージ写真から始まった」と結論づけたあなた。事件の原点に戻り、内側から最初の火種を体験するなら、「ゲーム実況者」でプレイ！",
      btn_play: "{arch}でプレイ ▶",
      next_label: "次のおすすめ視点："
    },
    splash: {
      subtitle: "SNS風刺系カードシミュレーター",
      tagline: "フォロワーを増やし、収益化し、炎上社会を生き残れ。たった1つのツイートがあなたを時代の寵児にも、追放者にも変える。",
      start_btn: "ゲームを開始する ▶",
      fame_btn: "🏆 殿堂入りランキング",
      fullscreen: "⛶ フルスクリーン",
      credits: "作者: @kohantoys"
    },
    setup: {
      step: "ステップ {current} / {total}",
      gender_title: "ネット上の性別・アイデンティティ",
      gender_subtitle: "アルゴリズムの荒波に挑むキャラクターの性別を選択。",
      back_btn: "← タイトルに戻る",
      male: "男性",
      male_desc: "男性プロファイル・男性代名詞。",
      male_meta: "代名詞: 彼 / HE",
      female: "女性",
      female_desc: "女性プロファイル・女性代名詞。",
      female_meta: "代名詞: 彼女 / SHE",
      non_binary: "ノンバイナリー",
      nb_desc: "中立的な言葉遣い・Xカルチャー。",
      nb_meta: "代名詞: ニュートラル / THEY",
      archetype_title: "アカウントの系統（アーキタイプ）",
      archetype_subtitle: "系統ごとにフォロワー層、専用カード、炎上リスクが変化します。",
      personality_title: "キャラクターの性格",
      personality_subtitle: "ツイートの語り口やフォロワーの反応に影響します。",
      handle_title: "アカウント名（ユーザー名）",
      handle_subtitle: "タイムラインに表示されるあなたのアカウント名を設定。",
      handle_placeholder: "your_handle",
      dice_tooltip: "ランダム生成",
      start_adventure: "タイムラインへ殴り込む ▶"
    },
    dashboard: {
      turn: "ターン",
      turn_max: "/ 20",
      followers: "フォロワー",
      money: "所持金",
      mental_health: "メンタル",
      hate: "ヘイト値",
      credibility: "信頼度",
      virality: "バズり力",
      love: "好感度",
      engagement: "エンゲージメント",
      boosters_btn: "⚡ ブースト購入",
      restart_btn: "↺ やり直し",
      audio_btn: "🔊 音声設定",
      help_btn: "❓ ヘルプ",
      timeline_title: "🐦 本日のタイムライン",
      love_hate: "好感度 / ヘイト値",
      view_profile: "📋 プロフィール詳細",
      shortcuts: "⌨️ キーボード操作一覧",
      audio_opts: "🎧 音声オプション",
      meta_goal: "勝利条件: フォロワー8万人 — {pct}%",
      tooltips: {
        followers: "フォロワー数：勝利条件は8万人突破。",
        cash: "所持金：ブースター購入に使用。5ターン連続でマイナスになると自己破産。",
        health: "メンタル：デジタル上の精神的健康。0%でバーンアウト→ゲームオーバー。",
        hate: "ヘイト値：炎上度合い。80%超えが3ターン連続、または100%到達でゲームオーバー。",
        love: "好感度：ポジティブな評判。高いほどオーガニックリーチが増大する。"
      }
    },
    cards: {
      choose_heading: "今ターンの行動 // 3枚から1枚を選択",
      section_title: "投稿可能なツイート",
      section_sub: "今ターン投稿するカードを1枚選択してください",
      tweet_now: "今すぐツイート ▶",
      blocked: "ロック中 ✕",
      success_prob: "成功確率:",
      multiplier: "倍率:",
      new_badge: "✨ 初登場",
      clue_badge: "🔍 手がかり",
      danger_high: "大炎上リスク",
      danger_med: "中炎上リスク",
      danger_low: "安全",
      story_locked: "🔒 ストーリーロック",
      palo_meme: "ミーム",
      palo_tema: "得意テーマ",
      palo_pelea: "口論",
      palo_hilo: "スレッド",
      palo_quote: "引用リポスト",
      palo_live: "実況ツイート",
      palo_temaDelDia: "トレンド乗り",
      palo_politica: "政治ポスト",
      palo_bait: "釣り投稿",
      palo_patrocinio: "広告投稿",
      palo_descanso: "デジタルデトックス",
      palo_evento: "特殊イベント",
      concept_meme: "軽快なバズコンテンツ。エンゲージメントと好感度を上げ、ヘイト値を自然に下げる。",
      concept_tema: "専門テーマの投稿。成功率が高く、ヘイト値リスクが低い。",
      concept_pelea: "タイムライン上での口論。エンゲージメントは急増するが、炎上リスクも大きい。",
      concept_hilo: "深掘り分析。コミュニティでの信頼度と好感度を積み上げる。",
      concept_quote: "他アカウントへの辛口コメント。議論とユーモアが混在する諸刃の剣。",
      concept_live: "リアルタイム実況。タイミングが合えば爆発的にバズる可能性あり。",
      concept_temaDelDia: "トレンドに乗る投稿。多様な層へのリーチは最大だが読めない反応も。",
      concept_politica: "政治的立場を表明。強烈な分断とヘイト値上昇を引き起こす。",
      concept_bait: "大量リプを誘発する釣り投稿。エンゲージメントは急増するが炎上と隣り合わせ。",
      concept_patrocinio: "スポンサー付き広告投稿。即金収入だが信頼度が下がる。",
      concept_descanso: "スマホを置いてデジタルデトックス。ヘイト値を大幅削減し、メンタルを回復。",
      concept_evento: "タイムラインを揺るがす特殊イベントへの対応。"
    },
    shop: {
      title: "ブースターショップ",
      subtitle: "資金を投じてアルゴリズムを味方につけ、ヘイトを鎮静化させよう。",
      section_title: "利用可能なブースター",
      section_sub: "ブースターを発動して次のツイート効果を増幅",
      active_boosters: "有効なブースター",
      ready: "使用可能",
      cooldown: "待機中 ({turns}T)",
      buy: "購入",
      owned: "発動中",
      need_money: "資金不足",
      close: "閉じる",
      no_boosters: "現在の所持金で購入可能なブースターはありません",
      no_booster_selected: "ブースター未選択（通常モード）",
      booster_active: "⚡ {icon} {name} 発動中 — 次のツイート効果が{mult}倍",
      active_single: "発動中",
      cooldown_label: "待機時間: {turns}ターン",
      new_booster: "🚀 新たなブースターが解放！",
      ok: "[ 了解 ]"
    },
    narrative: {
      feed_title: "リアルタイムTL反応",
      clunk_hint: "SPACEキーまたはタップで停止 ▶",
      story_clue_found: "🔍 ストーリーの手がかりを発見",
      viral_tweet: "🚀 大バズり — アルゴリズムの寵児",
      historic_ratio: "💀 大炎上 — クソリプの嵐",
      normal_tweet: "💬 投稿完了",
      continue_btn: "結果を確認して次へ ▶",
      metrics: {
        replies: "リプ数",
        retweets: "リポスト",
        likes: "いいね",
        views: "表示回数"
      },
      roll_result: "🎲 ダイス判定結果: <strong>D{roll}</strong> (必要成功値: ≤ {chance}%)",
      booster_applied: "📢 適用ブースター: <strong>{name}</strong> (効果倍率 {mult}x)",
      followers_gain: "👥 獲得フォロワー: <strong style=\"color:var(--green)\">+{amount}</strong>",
      followers_lost: "👥 喪失フォロワー: <strong style=\"color:var(--red)\">{amount}</strong>",
      engagement_gain: "⚡ エンゲージメント: <strong style=\"color:var(--green)\">+{amount}</strong>",
      cash_earned: "💰 収益獲得: <strong style=\"color:var(--amber)\">+${amount}</strong>",
      hate_generated: "❤️‍🔥 ヘイト上昇: <strong style=\"color:var(--red)\">+{amount}</strong>",
      stance_registered: "⚡ 行動方針を記録",
      strike_alert: "⚠️ ストライク {strike}/3 — 警告",
      strike_fatal: "☠️ ストライク 3/3 — アカウント永久凍結"
    },
    viral_modal: {
      header: "⚡ 特別イベント：大バズり発生中！",
      slide1_title: "ステップ 1: タイムラインの好機 🚀",
      slide1_p1: "アルゴリズムがあなたのプロフィールに世界中の注目を集めています！<strong>3ターン連続の高難易度チャレンジ</strong>が発生しました。",
      slide1_p2: "<strong>バズり挑戦を受ける</strong>か、<strong>見送って</strong>通常モードで安全にプレイを続けるかを選択できます。",
      slide2_title: "ステップ 2: 挑戦と莫大な報酬 🎯",
      slide2_p1: "挑戦を受ける場合、<strong>3ターン連続でツイートを成功</strong>させる必要があります。",
      slide2_p2: "期間中は得意ジャンルのカードが出現。3連続成功で、<strong>現在のフォロワー数が+50%〜+100%爆増</strong>し、強力な拡散ボーナスを得られます。",
      slide3_title: "ステップ 3: 極大のリスク ☠️",
      slide3_p1: "⚠️ <strong>警告：</strong> 3回中<strong>1回でも炎上・失敗</strong>すると、挑戦は破滅的な結果に終わります：",
      consequences_title: "💀 失敗時のペナルティ:",
      consequences_desc: "• 所持金の<strong>30%〜40%を喪失</strong>します。<br>• 運営から<strong>ストライク2回を即時付与</strong>され、アカウント凍結まで残り1ストライクの絶体絶命になります。",
      accept_btn: "🔥 挑戦を受ける",
      decline_btn: "🛡️ 見送る（安全モード）"
    },
    story_modal: {
      header: "⚡ 新たな物語が解放！",
      slide1_title: "手がかりを発見！",
      slide1_p1: "ストーリーモードに突入！舞台裏で複数のキャラクターをつなぐ手がかりを発見しました。",
      slide1_p2: "フィードで何が起きているか、しっかり観察してください。",
      slide2_title: "行間を読め",
      slide2_p1: "コンテキストと潜在的なリプライに注目。各ストーリーカードには、本当に何が起きているかを明かす他のユーザーの反応が隠れています。",
      slide3_title: "物語はみんなで紡ぐもの",
      slide3_p1: "全貌を理解するには、他のキャラクターでもプレイする必要があります。各アーキタイプは真実の一部を生き、それぞれ独自の視点を持っています。",
      continue_btn: "プレイを続ける",
      next_btn: "次へ ➡"
    },
    cancellation: {
      title: "炎上ストライク発動",
      subtitle: "世論の激しい怒りを買い、警告を受けました。",
      active_strike: "警告中",
      safe: "安全",
      expulsion_warning: "警告が3回累積すると、アカウントは永久凍結（即ゲームオーバー）となります。",
      accept: "了解して次へ進む ▶"
    },
    end: {
      game_over: "ゲーム終了",
      final_title: "最終結果",
      replay: "▶ もう一度遊ぶ",
      ranking: "🏆 ランキング",
      tree: "🌳 決断の軌跡",
      share: "🐦 Xでシェア",
      evolution: "📊 ターン推移グラフ",
      copy_report: "📋 レポートをコピー",
      report_copied: "✓ コピー完了！",
      cafecito: "☕ 開発者にコーヒーを奢る",
      collection_title: "🏆 エンディング図鑑",
      discovered: "{found} / {total} 解禁済み",
      status_victory: "🏆 勝利 // 目標達成",
      status_survivor: "⚠️ 生存 // 目標未達成",
      status_defeat: "💀 敗北 // ゲームオーバー",
      goal_label: "🎯 勝利目標：80,000フォロワー",
      verdict_success: "✨ 圧倒的な影響力を獲得し、タイムラインの覇者となりました！",
      verdict_missing: "⚠️ バズり王（Fenómeno Digital）達成まで、あと{missing}フォロワー足りませんでした。",
      verdict_defeat: "💥 目標に到達する前にアカウントが崩壊しました。"
    },
    tutorial: {
      header: "📖 あそびかた // サバイバルガイド",
      skip: "チュートリアルをスキップ",
      prev: "⬅ 戻る",
      next: "次へ ➡",
      start: "ゲームを始める ▶",
      slide1_title: "STEP 1: 目標 🎯",
      slide1_p1: "<strong>20ターン</strong>生き残り、フォロワーを増やして収益化しよう。殿堂入りするには<strong>フォロワー8万人</strong>突破、または<strong>1万ドル以上</strong>の資産蓄積が条件。",
      slide1_p2: "<strong>メンタル</strong>がゼロになるとバーンアウトで失格。借金と<strong>炎上による凍結</strong>にも要注意。",
      slide2_title: "STEP 2: タイムライン 📱",
      slide2_p1: "毎ターン3枚のカードをドロー。リスク・影響力・成功率はそれぞれ異なる。ツイートが成功すれば<em>エンゲージメント</em>と収益を獲得。失敗するとフォロワーが激減し、ヘイト値が急上昇する。",
      slide3_title: "STEP 3: ブースター 🚀",
      slide3_p1: "ツイート前に資金で<strong>ブースター</strong>を購入できる。結果を大幅に増幅させるが高額でクールダウンあり。⚠️ 注意：ツイートが失敗した場合、ブースターは損失まで増幅させる。",
      slide4_title: "STEP 4: 炎上・垢バン ☠️",
      slide4_p1: "<strong>ヘイト値</strong>の管理が鍵。言い争いや政治ネタは一気に跳ね上がる。<strong>100%</strong>到達・炎上ストライク3回・危険ゾーン(>85%)を3ターン連続で踏むと即ゲームオーバー。<em>デジタルデトックス</em>カードで冷却しよう。"
    },
    cancellation_modal: {
      header: "⚖️ 炎上・垢バンシステム // 3ステップ",
      slide1_title: "STEP 1: 炎上のトリガー ⚠️",
      slide1_p1: "高リスクカード（<strong>言い争い・政治・釣り投稿・引用リポスト</strong>）の失敗や、ヘイト値が高い状態での投稿は、プラットフォームとコミュニティによる大規模通報を招く。",
      slide1_p2: "結果として<strong>モデレーション警告（ストライク）</strong>が累積する。",
      slide2_title: "STEP 2: 3ストライクルール ☠️",
      slide2_p1: "アカウントには厳格な3回の違反上限がある：",
      strike1: "警告1: 注意",
      strike2: "警告2: 危険",
      strike3: "警告3: 永久凍結",
      slide2_p2: "<strong>3回目のストライク（3/3）</strong>で、プラットフォームはアカウントを永久停止——異議申し立て不可（<strong>炎上によるゲームオーバー</strong>）。",
      slide3_title: "STEP 3: 生き延びる方法 🛡️",
      slide3_p1: "• <strong>デジタルデトックス</strong>カードを優先——ヘイト値を一気に冷却（-10%〜-15%＋メンタル回復）。",
      slide3_p2: "• <strong>ミーム</strong>や<strong>建設的なスレッド</strong>で好感度を回復させ、分極化を抑える。",
      slide3_p3: "• ストライク2枚の状態では言い争いや釣り投稿カードを絶対に使わない。",
      understood: "了解して続ける ▶"
    },
    hate_modal: {
      header: "🔥 ヘイト値と危険ゾーン // 3ステップ",
      slide1_title: "STEP 1: ヘイトの連鎖 📈",
      slide1_p1: "攻撃的なリプライ・カード失敗・口論のたびに<strong>ヘイト値</strong>が上昇する。<strong>65%</strong>を超えると、タイムラインは敵対モードに突入し、クソリプが雪だるま式に増えていく。",
      slide2_title: "STEP 2: 危険ゾーンのカウントダウン（≥80%）🚨",
      slide2_p1: "ヘイト値が<strong>80%</strong>以上になると危険ゾーンに突入し、致命的なカウントダウンが始まる：",
      turn1: "ターン1：レッドアラート",
      turn2: "ターン2：最後のチャンス",
      turn3: "ターン3：強制シャットダウン",
      slide2_p2: "ヘイト≥80%で<strong>3ターン連続</strong>滞在すると、過激な毒性を理由に即座に追放される。",
      slide3_title: "STEP 3: 炎上を鎮火する 🧘",
      slide3_p1: "• 最強の手段は<strong>デジタルデトックス</strong>——累積したヘイト値を大幅に削減。",
      slide3_p2: "• 和やかな<strong>ミーム</strong>の投稿がフィードをまとめ、ヘイトを自然に低下させる。",
      slide3_p3: "• 危機のさなかにバーンアウトしないよう、<strong>メンタル</strong>を常に確認。",
      understood: "了解して続ける ▶"
    },
    rotate: {
      title: "端末を横向きに回転してください",
      desc: "本作はPC/Macでのプレイを推奨しています。スマートフォンでプレイする場合は、端末を横向き（ランドスケープ）に回転させるとカードやタイムラインが綺麗に表示されます。",
      pill: "🔄 横向きに回転する"
    },
    profile: {
      title: "プロフィール詳細",
      pronouns: "ネット上の性別",
      archetype_label: "アカウント系統",
      personality_label: "ツイートスタイル",
      allied: "相性の良いジャンル",
      weak: "苦手なジャンル",
      traits: "パッシブ特性",
      synergy: "シナジー",
      cancels: "炎上ストライク",
      win_condition: "勝利条件"
    },
    pronouns: {
      hombre: "彼（男性）",
      mujer: "彼女（女性）",
      diverso: "ニュートラル"
    },
    tree: {
      title: "決断の軌跡 — プレイ記録",
      turns: "ターン",
      chosen: "選択済",
      discarded: "非選択",
      success: "成功",
      ratio: "炎上",
      copy_image: "📋 画像をコピー",
      close: "✕ 閉じる [Esc]",
      turn_label: "ターン",
      viral_impact: "✨ バズり爆発",
      tweet_success: "✅ 投稿成功",
      tweet_ratio: "❌ クソリプの嵐",
      followers: "フォロワー",
      engagement_label: "エンゲージメント",
      hate_gen: "ヘイト上昇",
      booster_label: "ブースター:",
      end_of_turn: "ターン終了時のステータス:",
      stats_followers: "フォロワー:",
      stats_cash: "所持金:",
      stats_health: "メンタル:",
      stats_final: "エンディング:",
      discarded_turn: "見送った選択肢 · ターン",
      discarded_desc: "手札にありましたが、プレイしないことを選択しました。"
    },
    mobile_timeline: {
      title: "📱 プレイのタイムライン",
      sub: "{handle} · {count}件のツイートを投稿",
      viral: "✨ バズ",
      success: "✅ 成功",
      ratio: "❌ 炎上",
      hate: "ヘイト",
      close_btn: "タイムラインを閉じる ✕"
    },
    end2: {
      chart_title: "ターン推移グラフ（{turns}ターン）",
      legend_followers: "フォロワー",
      legend_cash: "所持金",
      created_by: "制作:",
      tree_btn: "🌳 決断の軌跡",
      share_btn: "🐦 Xでシェア",
      ranking_btn: "🏆 殿堂入りランキング",
      copy_btn: "📋 レポートをコピー",
      cafecito_btn: "☕ コーヒーを奢る"
    },
    audio: {
      title: "🎧 音声オプション",
      music: "🎵 BGM",
      sfx: "🔔 効果音",
      ok: "完了"
    },
    ranking: {
      title: "🏆 殿堂入り // ランキング",
      daily: "📅 本日のTOP 10",
      alltime: "🏆 歴代TOP 10",
      close: "閉じる ✕"
    },
    ranking_prompt: {
      title: "ゲームクリア！",
      subtitle: "殿堂入りのため@ハンドルを入力してください",
      submit: "⚡ 殿堂入りする",
      skip: "スキップ"
    },
    mobile_boosters: {
      title: "🚀 ブースターショップ",
      subtitle: "ブースターをタップして次のツイートに適用：",
      no_booster: "ブースター未選択",
      ready: "投稿画面へ ▶"
    },
    endings: {
      villano: {
        titulo: "必要悪",
        sub: "嫌われても、目が離せない存在。",
        narrativa0: "あなたのTLは戦場だった。そして最後まで立っていたのはあなただけ。",
        narrativa1: "何万件もの引用リポストがあなたの名前を罵倒した。そのたびにフォロワーが増えた。",
        narrativa2: "結局、みんながあなたを語り続けた。それがこのプラットフォームでの権力だ。"
      },
      idolo_caido: {
        titulo: "転落したアイコン",
        sub: "頂点には足場がない。",
        narrativa0: "タイムラインを掌握していた。そして、手放した。",
        narrativa1: "スクショは永遠に拡散する。文脈は誰も覚えていない。",
        narrativa2: "バズりは来たときより速く消えた。それもゲームのうち。"
      },
      preferido: {
        titulo: "アルゴリズムの寵児",
        sub: "システムが選んだのは、あなただった。",
        narrativa0: "大して動かなくてもよかった。おすすめ欄が勝手に押し上げてくれた。",
        narrativa1: "あなたの投稿は、夢にも思わなかったフィードにまで届いた。",
        narrativa2: "プラットフォームにはお気に入りがいる。今回はあなたの番だった。"
      },
      comico: {
        titulo: "TLの道化師",
        sub: "笑いはヘイトより強い。",
        narrativa0: "あなたのツイートは全部、ミームになる素材だった。",
        narrativa1: "ミュートしていたはずの人たちが、あなたのギャグをリポストしていた。",
        narrativa2: "ユーモアが鎧だった。一度も砕けなかった。"
      },
      autoridad: {
        titulo: "言論の権威",
        sub: "あなたが投稿すると、TLが静かになる。",
        narrativa0: "声を張る必要はない。名前の重さが代わりに語る。",
        narrativa1: "記者も、ブランドも、ライバル垢も、クレジットなしであなたを引用した。",
        narrativa2: "1ツイートずつ積み上げた信頼度は、そう簡単には炎上で消えない。"
      },
      triunfador: {
        titulo: "バズり王",
        sub: "アルゴリズムを破壊し、インターネットを揺るがした。",
        narrativa0: "狙ってもいないのにトレンド入り。次は狙って、また入った。",
        narrativa1: "存在すら知らなかったメディアにあなたの名前が載った。",
        narrativa2: "誰もがプレイしているのに気づいていないゲームで、あなたが勝った。"
      },
      nicho: {
        titulo: "こだわりのオタク垢",
        sub: "フォロワーは少ない。だが全員が本物だ。",
        narrativa0: "大衆受けは必要ない。あなたのコミュニティは小さく、忠実で、容赦ない。",
        narrativa1: "あなたの投稿はひとつひとつがイベントだ。ノイズはない、シグナルだけがある。",
        narrativa2: "怒号に満ちたTLの中で、あなたは自分の周波数を見つけ、そこに居続けた。"
      },
      combo_conspira_troll: {
        titulo: "闇の扇動者",
        sub: "陰謀論＋クソリプ＝純粋なカオス。",
        narrativa0: "あなたのスレッドは答えより疑問を多く残した。意図的に。",
        narrativa1: "一斉ブロックされた。そして敬意を込めたなりすましアカウントが量産された。",
        narrativa2: "本気で信じているのか誰も分からない。それが作戦のすべてだ。"
      },
      combo_influencer_troll: {
        titulo: "炎上系インフルエンサー",
        sub: "いいね稼ぎの昼、クソリプ製造の夜。",
        narrativa0: "あなたのフィードはジェットコースターで、オーディエンスは中毒になっている。",
        narrativa1: "企業がDMしてくる。アクティビストが垢報告する。同じ日に。",
        narrativa2: "炎上の方が誠実さより収益化しやすいと証明してしまった。"
      },
      combo_fut_troll: {
        titulo: "有毒サポーター",
        sub: "チームは負けた。口論はあなたの勝ちだ。",
        narrativa0: "試合の話をするとき、必ず「審判は買収されている」を混ぜる。",
        narrativa1: "サブツイートが武器。外科的な精度で投げ込む。",
        narrativa2: "あなたの垢はインターネット最大の愛憎劇の記念碑だ。"
      },
      combo_militante_wholesome: {
        titulo: "ハートのある活動家",
        sub: "世界を変えたい、でもウォームな気持ちで。",
        narrativa0: "社会正義のスレッドは必ず猫画像まとめで締める。",
        narrativa1: "運動が必要としていたロールモデルになった。一貫していて、人間らしい。",
        narrativa2: "戦いながら腐らずにいられると証明した。"
      },
      combo_gamer_troll: {
        titulo: "無敵のゲーマー垢",
        sub: "GGsのみ。それ以外は眼中にない。",
        narrativa0: "ゲームのメカニクスに関するあなたの持論がスタジオを潰した。TL上で。",
        narrativa1: "3回垢バンされた。毎回、勝利のGIFとともに復活した。",
        narrativa2: "ゲーマー文化があなたを羞恥心から免疫にした。少なくともそう信じている。"
      },
      combo_tech_wholesome: {
        titulo: "テック・オプティミスト",
        sub: "テクノロジーが私たちを救う。たぶん。",
        narrativa0: "複雑なシステムをあまりにも上手いアナロジーで説明するので、読んでいて恥ずかしくなるほど。",
        narrativa1: "フォロワーはエンジニアで、あなたの投稿を読んでやっと人間に戻れる人たち。",
        narrativa2: "自我に満ちた業界でエンパシーを選んだ。そしてそれが機能した。"
      },
      combo_pod_wholesome: {
        titulo: "魂のポッドキャスター垢",
        sub: "280文字の世界でロングフォーム思考。",
        narrativa0: "スレッドはチャプターで、コミュニティは忠実なリスナーだ。",
        narrativa1: "スポンサーから連絡が来た。声を守るために断った。",
        narrativa2: "このTLでは珍しい：みんなが最後まで読んでくれる。"
      },
      combo_of_troll: {
        titulo: "有料プレミアムトロール",
        sub: "カオスを売る。",
        narrativa0: "無料垢から有料サブスクへ移行した。人々はドラマにお金を払う。",
        narrativa1: "有料限定コンテンツがTLで一番スクショされている。タダで。",
        narrativa2: "他人の怒りを既存メディアより上手く収益化した。"
      },
      combo_crypto_troll: {
        titulo: "懲りないシラー",
        sub: "WAGMI。あなた以外は。",
        narrativa0: "$0.001のアルトコインを推奨した。$0.0001になった。「健全な調整」と言った。",
        narrativa1: "あなたの発言に従ったコミュニティが損した。それでもフォローし続けている。",
        narrativa2: "クリプトではファンダメンタルズより信頼が長持ちする。それを限界まで使い倒した。"
      },
      combo_conspira_gracioso: {
        titulo: "悟ったピエロ",
        sub: "最高にぶっ飛んだ陰謀論を、完璧なコメディで。",
        narrativa0: "笑っていいのか本気で心配すべきか分からない。それがオチだ。",
        narrativa1: "理論はおかしい。デリバリーは完璧だ。",
        narrativa2: "誰かがアポカリプスを笑う必要がある。あなたが手を挙げた。"
      },
      combo_opi_troll: {
        titulo: "論客系プロボケーター",
        sub: "激アツなホットテイク。精度は常温。",
        narrativa0: "あなたの日刊コラムはTLで最も憎まれ、最も読まれている投稿だ。",
        narrativa1: "正解率40%。それで十分に影響力がある。",
        narrativa2: "人々はあなたのアイデアのためにフォローしていない。論破するためにフォローしている。それでもカウントされる。"
      },
      combo_fut_info: {
        titulo: "サッカー移籍情報の内通者",
        sub: "クラブより先に移籍ウィンドウを知っている。",
        narrativa0: "移籍情報の信頼度が高すぎて、確認なしでメディアに引用される。",
        narrativa1: "あなたのリーク1件がスポーツ株の価格を動かした。",
        narrativa2: "デジタルサッカー文化では、情報が最も価値あるゴールだ。"
      },
      combo_of_gracioso: {
        titulo: "サブスク系コメディアン",
        sub: "笑うためにお金を払う人たち。",
        narrativa0: "有料コンテンツの方が無料より面白い。みんな分かっている。",
        narrativa1: "ユーモアを商品にした。でも笑いのセンスは失わなかった。",
        narrativa2: "面白いのは才能だ。それで稼ぐのはスキルだ。あなたは両方持っている。"
      },
      combo_per_gracioso: {
        titulo: "皮肉系ジャーナリスト",
        sub: "本物のニュース。バカげた見出し。",
        narrativa0: "大手メディアと同じ記事を書く。引用されるのはあなただ。",
        narrativa1: "皮肉が鋭すぎて、ネタか本気か分からない人が続出する。",
        narrativa2: "データジャーナリズムとコメディの融合はあなたが作った。偶然に。"
      },
      combo_militante_gracioso: {
        titulo: "ミーム活動家",
        sub: "主義主張、バイラルフォーマットで。",
        narrativa0: "完璧なミーム1枚で何千人ものイデオロギー的な防衛線を崩した。",
        narrativa1: "あなたのアクティビズムはエンタメすぎて、反対派まで拡散する。",
        narrativa2: "笑いが政治的に恐ろしい武器になれると証明した。"
      },
      combo_influencer_gracioso: {
        titulo: "自虐系インフルエンサー",
        sub: "ネタはあなた自身。それがブランドだ。",
        narrativa0: "誰かに笑われる前に、自分で笑う。",
        narrativa1: "ブランドはオーセンティシティのために雇う。あなたは制御されたカオスを届ける。",
        narrativa2: "完璧なインフルエンサーだらけの世界で、あなたの「ダメさ」が最大の武器になった。"
      },
      combo_conspira_info: {
        titulo: "アンダーグラウンド調査記者",
        sub: "誰にも知られたくない真実を掘り起こす。",
        narrativa0: "あなたの調査スレッドは何日もトレンドに居座る。",
        narrativa1: "匿名のタレコミが届く。裏を取る。投稿する。TLが爆発する。",
        narrativa2: "フェイクニュースの時代に、あなたはファクトという危険な道を選んだ。"
      },
      combo_humor_troll: {
        titulo: "レスバの王",
        sub: "煽りを芸術に昇華。ジョークを装った炎上で生きる。",
        narrativa0: "炎上劇を芸術の域にまで高めた。誰もどこまでがネタでどこからが本気か見分けがつかない。",
        narrativa1: "あなたの投稿は、トレンド論争の中心に投げ込まれる安全ピンの抜けた手榴弾だ。",
        narrativa2: "あなたの通った後のTLは常に焦土と化すが、エンゲージメントは天井知らずに跳ね上がる。"
      },
      combo_influencer_wholesome: {
        titulo: "ガラスの楽園",
        sub: "スムージー、キャンドル、完璧に演出された清潔感。",
        narrativa0: "穢れなき美意識の城を築き上げた。中身は空虚だが、何十万もの熱狂的な信者から崇拝されている。",
        narrativa1: "計算し尽くされたライティング、パステルの色彩、完璧なデジタル静寂。",
        narrativa2: "殺伐としたTLにおいて、あなたの演出された楽園は莫大な富を生む聖域となった。"
      },
      combo_militante_troll: {
        titulo: "電脳の闘士",
        sub: "イデオロギーを掲げ、煽りと罵倒を武器にする。",
        narrativa0: "タイムラインの最前線を死守した。国民の半分をブロックしたが、熱狂的なコア層からは崇拝されている。",
        narrativa1: "敵対勢力には猛毒そのものだが、味方の信奉者にとっては不敗のカリスマ指揮官。",
        narrativa2: "ネットのイデオロギー戦争に中立など存在しない。あなたは一切の容赦なく敵を粉砕した。"
      },
      combo_crypto_info: {
        titulo: "孤高の分析官",
        sub: "オンチェーン分析とデータ重視。煽りは一切なし。",
        narrativa0: "泥沼の仮想通貨界隈における奇跡：厳密なデータと誠実さ。あなたの信用は1ビットコイン以上の価値を誇る。",
        narrativa1: "数々の詐欺や価格暴落を事前に見抜き、コミュニティを救ってきた。",
        narrativa2: "誠実な技術解説こそが、怪しい投機筋の虚飾を打ち負かすことを証明した。"
      },
      combo_conspira_wholesome: {
        titulo: "穏やかな預言者",
        sub: "すべての陰謀論を信じるが、誰に対しても愛を持って接する。",
        narrativa0: "どこにでも秘密結社の影を見出すが、その温厚で無害な人柄ゆえに誰もがあなたを愛してしまう。",
        narrativa1: "終末の預言ですら、あなたにかかれば心温まるおとぎ話のように響く。",
        narrativa2: "世界の崩壊を人懐っこい笑顔で語るあなたを、誰も本気で怒ることはできない。"
      },
      combo_of_info: {
        titulo: "電脳のアクティビスト",
        sub: "収益化プラットフォームを武器に、権利と経済を語る。",
        narrativa0: "大胆なコンテンツ収益化と鋭い社会・経済批評を融合させ、ネット全体を驚かせた。",
        narrativa1: "偏見やモラルハラスメントを、冷徹な論理と明確な数字で打ち破った。",
        narrativa2: "経済的自立と文化的な発信力を、たった一つのアカウントで体現してみせた。"
      },
      combo_per_troll: {
        titulo: "究極の釣り師",
        sub: "真実よりも炎上とスキャンダルが金を呼ぶ。",
        narrativa0: "アルゴリズムの絶対法則を悟った。ネットで最も換金性の高い燃料は『大衆の怒り』である。",
        narrativa1: "刺激的なタイトル、悪意ある問いかけ、そして毎回確約される爆発的拡散。",
        narrativa2: "冷静な考察は退屈を生むが、スキャンダルはサーバー代と生活費を確実に稼ぎ出す。"
      },
      combo_gamer_info: {
        titulo: "真摯なるゲーム評論家",
        sub: "物語・ゲーム性・技術を徹底分析する論壇派。",
        narrativa0: "絶叫系配信者の対極：奇をてらわず冷静に本質を突くレビューで、開発スタジオをも動かす存在。",
        narrativa1: "ゲームデザインの構造と商業的罠を、外科手術のような正確さで解剖する。",
        narrativa2: "安易なタイアップが溢れるSNSで、あなたの推薦はゲーマーにとっての唯一の羅針盤だ。"
      },
      combo_fut_wholesome: {
        titulo: "清廉なるサポーター",
        sub: "対戦相手を敬い、審判を誹謗中傷しない。",
        narrativa0: "サッカー界隈の奇跡：美しいプレーを讃え、敵サポにも敬意を払い、TLの殺伐とした空気を浄化する。",
        narrativa1: "自チームを熱狂的に愛しながらも、他者への憎悪に染まらない鑑のような姿勢。",
        narrativa2: "罵詈雑言が飛び交う競技場のようなネットで、あなたの投稿は一筋の清涼剤となった。"
      },
      combo_tech_troll: {
        titulo: "毒舌ディスラプター",
        sub: "競合を公然と煽り倒しながら爆速開発する創業者。",
        narrativa0: "大手テックの無駄やリストラを辛辣に嘲笑しながら、3つの黒字SaaSを連続でローンチした。",
        narrativa1: "傲岸不遜な物言いに見合う、圧倒的なプロダクト開発とデプロイの速さ。",
        narrativa2: "シリコンバレーのエリートからは嫌悪されているが、彼らは悔しがりながら課金している。"
      },
      combo_pod_gracioso: {
        titulo: "深夜のカリスマ司会者",
        sub: "笑いと毒を織り交ぜたトークでバイラルを連発。",
        narrativa0: "ポッドキャストをネット最強のバラエティ番組へと育て上げ、切り抜き動画が毎回ミリオン再生を叩き出す。",
        narrativa1: "各界の著名人や問題児があなたのブースに集まり、自虐と本音で大笑いする。",
        narrativa2: "気取らない雑談を、時代を牽引する大衆エンターテインメントへと昇華させた。"
      },
      combo_opi_info: {
        titulo: "論客の巨頭",
        sub: "一次資料と膨大な文献に基づき社会を読み解く。",
        narrativa0: "あなたの連投スレッドはもはや大学の公開講義。重大ニュースが起きるたび、誰もがあなたの見解を待ち望む。",
        narrativa1: "確かな一次データ、学術的引用、そして歴史的視座で日常のノイズを一刀両断。",
        narrativa2: "不透明な時代だからこそ、人々は真の知性を求め、アルゴリズムはあなたを頂点へ押し上げた。"
      },
      combo_humor_wholesome: {
        titulo: "TLの良心",
        sub: "誰も傷つけずに笑顔を生み出す優しい笑い。",
        narrativa0: "不可能を成し遂げた：他人を嘲笑したり炎上に加担することなく、何百万人ものフォロワーを温かい笑いで包み込んだ。",
        narrativa1: "世代や属性を超えて愛される、普遍的で平和なミームとユーモア。",
        narrativa2: "悪意や冷笑が蔓延するプラットフォームにおいて、優しい笑いもまた強烈にバズることを証明した。"
      },
      finale_deuda: {
        titulo: "自己破産",
        sub: "数字は嘘をつかなかった。あなたがついた。",
        narrativa0: "ブースター代、キャンペーン費、あらゆる投資——全部赤字。",
        narrativa1: "スポンサー投稿への必死の転換をTLは見抜いた。そして拒絶した。",
        narrativa2: "アルゴリズムは赤字垢に慈悲を持たない。オーディエンスも同じだ。"
      },
      finale_burnout: {
        titulo: "燃え尽き症候群",
        sub: "タイムラインが勝った。あなたではない。",
        narrativa0: "アプリを開くことが物理的に苦痛になる瞬間が来た。",
        narrativa1: "メンタルを無視し続けた。ツケが回ってきた。",
        narrativa2: "震える手で最後のツイートを投稿した。その後、沈黙。"
      },
      finale_cancelacion_3strikes: {
        titulo: "永久凍結",
        sub: "3ストライク。異議申し立て不可。",
        narrativa0: "プラットフォームからメールが届いた。内容はすでに分かっていた。",
        narrativa1: "3回、一線を越えた。3回、TLが組織的な総攻撃を仕掛けた。",
        narrativa2: "モデレーションシステムは慈悲のない審判だ。今ならわかる。"
      },
      finale_cancelacion_zonaroja: {
        titulo: "炎上限界突破",
        sub: "ヘイト値80%継続。プラットフォームに未来なし。",
        narrativa0: "あなたのフィードは集合的なヘイトの廃棄場になった。",
        narrativa1: "新しい投稿のたびに、もう制御できない炎にガソリンを注いだ。",
        narrativa2: "ヘイトがコンテンツを飲み込むとき、プラットフォームがあなたの代わりに決断する。"
      }
    }
  }
};

// Registrar en el motor i18n
if (typeof i18n !== "undefined") {
  i18n.registerDictionary("es", UI_TRANSLATIONS.es);
  i18n.registerDictionary("en", UI_TRANSLATIONS.en);
  i18n.registerDictionary("ja", UI_TRANSLATIONS.ja);
}
