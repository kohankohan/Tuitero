// data/archetype-events.js
export const archetypeEvents = [
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
