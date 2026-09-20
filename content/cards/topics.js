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

// ── TEMA DEL DÍA (Alineado estrictamente a la Fase de cada arquetipo segun Spec v2) ──
const temaDelDiaContent = {
  // FASE 4: 2026 (Mirada retrospectiva, nada de coyuntura vieja en presente)
  opinologo:    [
    { titulo: "A dos años del caso", texto: "Pasaron dos años del escándalo de la LLC y hoy la política discute cosas completamente distintas, pero las cicatrices siguen ahí. Hilo.", engagement: 54, hate: 18 },
    { titulo: "La lección no aprendida", texto: "En 2024 todos se rasgaban las vestiduras por el auto del streamer. Hoy nadie se acuerda ni del nombre del ministro. Así funciona la memoria acá.", engagement: 50, hate: 16 },
    { titulo: "El archivo no perdona", texto: "Revisando lo que opinaban varios en pleno estallido de la causa hace dos años... qué fácil es indignarse cuando la cámara está prendida.", engagement: 56, hate: 22 },
  ],
  // FASE 3: Corrupción estalla (Julio-Agosto 2024)
  futbolero:    [
    { titulo: "El auto en todos los canales", texto: "Prendo la tele y está ESE auto que vi en el garage de la casa del funcionario en cadena nacional. Al final la tribuna no mentía.", engagement: 52, hate: 14 },
    { titulo: "Trending político vs domingo de cancha", texto: "Todo el país hablando de licitaciones y causas judiciales y yo lo único que quiero es que llegue el domingo para ver a Boca.", engagement: 46, hate: 12 },
    { titulo: "Entre los palcos y los ministerios", texto: "En los palcos VIP de la cancha se cruzan los mismos apellidos que ahora salen en los zócalos de noticias. Casualidad las pelotas.", engagement: 50, hate: 15 },
  ],
  // FASE 4: 2026 (Mirada retrospectiva, desencanto posterior)
  militante:    [
    { titulo: "La autocrítica pendiente", texto: "A dos años de la causa que nos quebró el espacio, hay compañeros que todavía no quieren mirar el balance de aquel plan de viviendas. No se construye tapando el barro.", engagement: 46, hate: 28 },
    { titulo: "Coyuntura actual y viejas sombras", texto: "Discutimos las elecciones de este año como si no tuviéramos un ex funcionario procesado que militaba al lado nuestro. Memoria y verdad.", engagement: 42, hate: 26 },
    { titulo: "Militancia sin caretas", texto: "Militar en 2026 exige no repetir los errores de 2024. El que se queda callado cuando los suyos afanan no es compañero, es cómplice.", engagement: 48, hate: 30 },
  ],
  // FASE 2: Hackeo Cripto & Comando Fierro (Abril-Mayo 2024)
  humor:        [
    { titulo: "El Corralito Cripto en memes", texto: "Gente llorando porque un exchange local les comió los ahorros y yo acá metiéndole música de Titanic a las placas de Crónica. Perdón, el humor es gratis.", engagement: 62, hate: 10 },
    { titulo: "Comando Fierro trending topic", texto: "Trendea 'Comando Fierro' y pensé que era una banda de cumbia santafesina. Resulta que son hackers que dejaron en bolas a media city porteña.", engagement: 58, hate: 8 },
    { titulo: "La modelo y el garage", texto: "Todo el feed con el video de la OnlyFans bajándose del autazo importado. Muchachos, no es física cuántica: billetera mata galán de Twitch.", engagement: 60, hate: 12 },
  ],
  // FASE 3: Corrupción estalla (Julio-Agosto 2024)
  periodista:   [
    { titulo: "La LLC bajo la lupa", texto: "El expediente de Delaware es público. Cruzamos tres firmas y coinciden con el entorno directo de la secretaría. La documentación es irrefutable.", engagement: 58, hate: 14 },
    { titulo: "Allanamiento en marcha", texto: "Urgente: ordenan allanamientos vinculados a la causa del plan de viviendas y los autos de lujo. Fuentes judiciales confirman medidas inminentes.", engagement: 65, hate: 18 },
    { titulo: "El silencio oficial", texto: "Tres ministros apagaron los celulares desde que publicamos la nota de la LLC. El silencio a veces es la confesión más ruidosa.", engagement: 62, hate: 15 },
  ],
  // FASE 3: Corrupción estalla (Julio-Agosto 2024)
  cryptobro:    [
    { titulo: "Pánico en el feed financiero", texto: "Están linkeando wallets de empresas offshore con causas políticas locales. Gente, no mezclen regulación con pánico. DYOR.", engagement: 44, hate: 22 },
    { titulo: "La resaca del hackeo", texto: "Todavía hay gente llorando por el exchange de hace dos meses mientras los tribunales investigan a dónde fueron a parar los fondos. Todo on-chain queda.", engagement: 48, hate: 20 },
    { titulo: "El mercado no perdona", texto: "Cuando la política mete la mano en estructuras corporativas, el spread te come vivo. Operen en frío, sin emociones.", engagement: 40, hate: 16 },
  ],
  // FASE 1: Auto & Modelo (Febrero 2024)
  gamer:        [
    { titulo: "La nave es tendencia", texto: "Che por qué hay gente discutiendo de patentes abajo del clip de mi garage?? Jajaja dejen de perseguirse fantasmas y miren los 60fps.", engagement: 50, hate: 12 },
    { titulo: "El clip del millón", texto: "Trend topic por prender la nave en directo. Gracias a los que bancan, a los envidiosos que sigan jugando en 720p 🏎️🎮", engagement: 48, hate: 10 },
    { titulo: "Setup nuevo en camino", texto: "Se viene stream histórico desde el living nuevo. Mi viejo me ayudó con unos trámites y quedó de locos.", engagement: 46, hate: 8 },
  ],
  // FASE 2: Hackeo Cripto & Comando Fierro (Abril-Mayo 2024)
  conspiranoico:[ 
    { titulo: "La wallet y la política", texto: "Nadie mira los hashes. Esa transferencia del exchange hackeado fue directa a una sociedad fantasma. Comando Fierro tiró la primera piedra, yo tengo el mapa.", engagement: 48, hate: 26 },
    { titulo: "La cortina de humo", texto: "Nos ponen a hablar del Corralito Cripto para tapar lo que está pasando en los despachos ministeriales. ABRAN LOS OJOS.", engagement: 45, hate: 28 },
    { titulo: "Se caen los servidores", texto: "Conveniente que el exchange se caiga justo cuando los saldos empezaban a no cerrar. No fue hackeo ordinario, fue voladura controlada.", engagement: 52, hate: 30 },
  ],
  // FASE 1: Auto & Modelo (Febrero 2024)
  influencer:   [
    { titulo: "Vibra de alta gama", texto: "Ver ese auto importado en el garage me hizo replantear mi tablero de metas para este año. Hay que rodearse de gente que vibre abundancia real ✨🙏", engagement: 48, hate: 14 },
    { titulo: "El chisme del momento", texto: "Todo el mundo comentando quién iba adentro del auto en la foto de ayer. Chicas, el chisme atrasa, la gratitud eleva 👀☕", engagement: 45, hate: 16 },
    { titulo: "Visualización activa", texto: "Si ellos pudieron financiar semejante nave, cualquiera con disciplina y mentalidad puede. Decretado para mi 2024.", engagement: 50, hate: 18 },
  ],
  // FASE 3: Corrupción estalla (Julio-Agosto 2024)
  onlyfans:     [
    { titulo: "Mi nombre en los noticieros", texto: "Tener que salir a aclarar que no soy testaferro de nadie porque me bajé de un auto con un amigo... el nivel de misoginia de este país es histórico.", engagement: 56, hate: 22 },
    { titulo: "Publicidad involuntaria", texto: "Sigan hablando de mí en los paneles de chimentos que las suscripciones a mi perfil vip no paran de subir. Besitos a los fiscales 💅", engagement: 62, hate: 25 },
    { titulo: "Basta de inventar", texto: "Nunca toqué un peso de la política ni me interesa. Si quieren investigar corrupción vayan a Comodoro Py, no a mi cuenta de fotos.", engagement: 58, hate: 18 },
  ],
  // FASE 2: Hackeo Cripto & Comando Fierro (Abril-Mayo 2024)
  techie:       [
    { titulo: "Postmortem del hackeo", texto: "Analicé el exploit del exchange local: las keys estaban guardadas en texto plano en un bucket mal configurado. Comando Fierro ni tuvo que esforzarse.", engagement: 64, hate: 10 },
    { titulo: "El Corralito Cripto", texto: "El ecosistema local acaba de retroceder 5 años por la desprolijidad de este exchange. La fuga de liquidez hacia exchanges de afuera es masiva.", engagement: 60, hate: 8 },
    { titulo: "Seguridad vs Marketing", texto: "Gastaban 50K verdes por mes en pauta con influencers y cero en auditorías de smart contracts. Ahí tienen los resultados.", engagement: 58, hate: 12 },
  ],
  // FASE 1: Auto & Modelo (Febrero 2024)
  podcaster:    [
    { titulo: "El episodio del que todos hablan", texto: "Grabamos una charla casual en una casa y de repente el auto que sale de fondo es trending nacional. Mañana sacamos el detrás de escena.", engagement: 54, hate: 10 },
    { titulo: "Chismes de café", texto: "En los cafés de Palermo no se habla de otra cosa que de quién puso la plata para el auto del streamer. A veces el backstage rinde más que la entrevista.", engagement: 50, hate: 8 },
    { titulo: "La repercusión mediática", texto: "Me llamaron de tres radios preguntando si el auto era real o alquilado. El morbo argentino por la guita ajena es digno de un paper sociológico.", engagement: 52, hate: 12 },
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

// ── DESCANSO / DESCONEXIÓN (Pool amplio de variantes para evitar repeticiones) ──
const descansoContent = [
  {
    titulo: "Día de Desconexión",
    texto: "Gente, me voy a tomar el día offline. Mucha toxicidad hoy. Nos leemos mañana, pórtense bien.",
    narrativaExito: "Te desconectaste a tiempo. El timeline pasó a otro tema y recuperaste la paz mental.",
    narrativaFallo: "La tentación de mirar las menciones te ganó y volviste a entrar antes de tiempo."
  },
  {
    titulo: "Modo Avión y Pasto",
    texto: "Cierro la app por 24hs. Si no respondo DMs es porque salí a pisar pasto y recordar que existe el mundo real.",
    narrativaExito: "Respiraste aire fresco sin pantallas. Tu mente agradeció el respiro.",
    narrativaFallo: "A los diez minutos abriste el navegador en modo incógnito para ver qué decían de vos."
  },
  {
    titulo: "Silencio de Radio",
    texto: "Desinstalé la app del celu por un rato. Me satura el algoritmo, las peleas inventadas y los hilos eternos. Paz.",
    narrativaExito: "El silencio digital te devolvió la concentración y la salud mental subió notablemente.",
    narrativaFallo: "La abstinencia de notificaciones te puso ansioso y volviste a instalarla."
  },
  {
    titulo: "Detox de Notificaciones",
    texto: "Apagué absolutamente todas las notificaciones. No me busquen, no me etiqueten. Día dedicado a no opinar de nada.",
    narrativaExito: "Ignorar el bardo fue la mejor decisión estratégica del día.",
    narrativaFallo: "Te quedaste pensando en si te habían citado en algún quote fulminante."
  },
  {
    titulo: "Sobremesa y Mate Lejos de la Red",
    texto: "Tarde de mates, música tranquila y cero feeds. Cuidar la cabeza antes de que el timeline te devore.",
    narrativaExito: "Una tarde serena que limpió la mala onda del feed acumulada en la semana.",
    narrativaFallo: "Tus amigos sacaron el tema de Twitter en la charla y no pudiste evitar chequear."
  },
  {
    titulo: "Cierre Preventivo de Pestañas",
    texto: "Demasiado bardo por milímetro cuadrado hoy. Me retiro dignamente antes de engancharme en una discusión estúpida.",
    narrativaExito: "Esquivaste una cancelación cantada retirándote en el minuto justo.",
    narrativaFallo: "Leíste un tweet provocador justo antes de cerrar y te fuiste con bronca."
  },
  {
    titulo: "Domingo de Terapia y Desconexión",
    texto: "Domingo sin pantallas. El mundo sigue girando aunque uno no tuitee cada 15 minutos, increíble descubrimiento.",
    narrativaExito: "Comprobaste que la vida offline existe y es bastante más sana.",
    narrativaFallo: "Te picaron los dedos por tirar un chiste sobre el partido de la fecha."
  },
  {
    titulo: "Pausa por Sobrecarga de Dopamina",
    texto: "Alerta de saturación mental. Silencio menciones, apago datos y me pongo a leer un libro que no sea un hilo de X.",
    narrativaExito: "Bajó el ritmo cardíaco y la ansiedad del scroll infinito.",
    narrativaFallo: "El libro te aburrió a la quinta página y entraste a mirar memes."
  },
  {
    titulo: "Desconexión Zen",
    texto: "Hoy elijo mi paz mental antes que tener razón en una pelea de desconocidos. Besos a todos, vuelvo cuando baje la marea.",
    narrativaExito: "Tu comunidad valoró tu madurez y el hate residual se disipó solo.",
    narrativaFallo: "Tus haters dijeron que te escapaste con la cola entre las patas."
  },
  {
    titulo: "Caminata sin Celular",
    texto: "Dejo el teléfono cargando en otra habitación y salgo a caminar sin rumbo. Ni una sola notificación por hoy.",
    narrativaExito: "Volviste renovado, con ideas frescas y la cabeza despejada.",
    narrativaFallo: "Creíste escuchar el sonido de notificación en tu bolsillo vacío durante media hora."
  },
  {
    titulo: "Basta de Timeline por Hoy",
    texto: "Ya leí suficientes barbaridades por las próximas dos semanas. Corto acá. Nos vemos del otro lado del eclipse.",
    narrativaExito: "Te ahorraste leer la peor polémica de la semana.",
    narrativaFallo: "Te perdiste el chisme del día y tus amigos te cargaron en WhatsApp."
  },
  {
    titulo: "Aislado por Salud Mental",
    texto: "Priorizando la salud mental. Las redes queman si no sabés cuándo frenar. Me guardo hasta nuevo aviso 🧘",
    narrativaExito: "Una recarga de energía necesaria que estabilizó tus números.",
    narrativaFallo: "Te costó desconectar de verdad y te quedaste mirando la pantalla en negro."
  },
  {
    titulo: "Veda Tuitera Autoimpuesta",
    texto: "Declaro veda tuitera en mi cuenta por las próximas 24 horas. Cero polémica, cero replies, 100% descanso.",
    narrativaExito: "La veda enfrió todos los frentes de conflicto abiertos.",
    narrativaFallo: "Rompiste la veda a las 2 horas con un 'bueno una sola cosa más y me voy'."
  },
  {
    titulo: "Apagón Digital",
    texto: "Pantallas en escala de grises y teléfono en un cajón. Hay que desintoxicar el cerebro de vez en cuando.",
    narrativaExito: "Dormiste una siesta gloriosa sin sobresaltos de trending topics.",
    narrativaFallo: "Te despertaste sobresaltado creyendo que te habían hackeado la cuenta."
  },
  {
    titulo: "Cierre de Sesión Terapéutico",
    texto: "Log out general. Cuando el timeline parece un loquero a cielo abierto, el único ganador es el que apaga la pantalla.",
    narrativaExito: "Ganaste vos. Cero estrés, mente limpia y energía renovada.",
    narrativaFallo: "Tus conocidos te escribieron pensando que te había pasado algo grave."
  }
];

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
