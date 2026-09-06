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

module.exports = { superHabilidadesContent };
