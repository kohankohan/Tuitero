// cancelaciones-content.js — Twitero v14
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
