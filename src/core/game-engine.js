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
      const pool = (typeof descansoContent !== 'undefined' && Array.isArray(descansoContent) && descansoContent.length > 0)
        ? descansoContent
        : [{
            titulo: "Día de Desconexión",
            texto: "Gente, me voy a tomar el día offline. Mucha toxicidad hoy. Nos leemos mañana, pórtense bien.",
            narrativaExito: "Te desconectaste a tiempo. El timeline pasó a otro tema y recuperaste la paz mental.",
            narrativaFallo: "La tentación de mirar las menciones te ganó y volviste a entrar antes de tiempo."
          }];
      const item = pickUnusedItem(pool, set) || pool[0];
      return {
        titulo: item.titulo || "Día de Desconexión",
        texto: item.texto || "Gente, me voy a tomar el día offline. Nos leemos mañana.",
        narrativaExito: item.narrativaExito || "Te desconectaste a tiempo y recuperaste la paz mental.",
        narrativaFallo: item.narrativaFallo || "La tentación de mirar las menciones te ganó y volviste antes de tiempo.",
        eng: 0, hate: 0, amor: 30, odioP: 25, isPropio: true
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
    this.rachaViralDescansoUsed = false;
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
    this.rachaViralDescansoUsed = false;
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
      { id:"descanso",   ok:!(this.rachaViralActive && this.rachaViralDescansoUsed) }
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
      descanso: 62
    };
    let c = bases[card.id] || 50;

    // Modificadores de género (dificultad asimétrica)
    if (this.genero === "mujer") c -= 3;
    else if (this.genero === "diverso") c -= 7;

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

    // Snapshot followers AFTER booster (so net gain in turn log includes cancellation loss)
    const segsBeforeTurn = this.seguidores;

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
        if(this.rachaViralActive) {
          this.rachaViralDescansoUsed = true;
        }
        if(this.lastCard?.id === "descanso") {
          // Spam de descanso consecutivo: penalización por inactividad prolongada
          this.saludMental = Math.max(0, this.saludMental - 10);
        } else {
          this.odio = Math.max(0, this.odio - 10);
          this.saludMental = Math.min(100, this.saludMental + 15);
          this.amor = Math.min(100, this.amor + 5);
        }
      }

    } else {
      hateGain = Math.floor(card.hate * mult);
      segsGain = card.id === "descanso" ? 0 : -Math.floor(this.seguidores * 0.04 * mult);
      if(card.id === "descanso") {
        if(this.rachaViralActive) {
          this.rachaViralDescansoUsed = true;
        }
        if(this.lastCard?.id === "descanso") {
          this.saludMental = Math.max(0, this.saludMental - 10);
        } else {
          this.odio = Math.max(0, this.odio - 4);
          this.saludMental = Math.min(100, this.saludMental + 5);
        }
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
      let riskPct = isTroll ? 32 : 22; // base 22%, troll 32%
      if (this.genero === "mujer") riskPct += 5;
      else if (this.genero === "diverso") riskPct += 12;
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
          tweetReal: card.texto || null,
          cardTituloReal: card.titulo || null,
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
      segsGain: this.seguidores - segsBeforeTurn, engGain, hateGain, dinGain,
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
        text: card.texto || card.titulo || "",
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
      version: "v19",
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