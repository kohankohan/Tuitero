/* ???????????????????????????????????????????????????????
   Twitero v15 ? content/cards/conflict.js (Peleas con rivales y Baits)
   ??????????????????????????????????????????????????????? */
// data/pelea-content.js
// Contenido de la carta "Pelea" (rival específico por arquetipo).
// rivalTypes: dificultad/recompensa de cada tipo de rival (Engagement y Hate suben juntos).
// peleaContent: frase + rivalNombre por cada combinación arquetipo × tipo de rival.

export const rivalTypes = {
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

export const peleaContent = {
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

export const generalBaits = [
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

export const baitContent = {
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

