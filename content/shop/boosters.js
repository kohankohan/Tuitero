/* ═══════════════════════════════════════════════════════════
   Twitero v15 — content/shop/boosters.js
   ═══════════════════════════════════════════════════════════ */
const BOOSTERS = [
  { id:"verif",     icono:"💎", nombre:"Pagar Verificado",     costo:600,  cooldown:1, desc:"+12% segs · +30 eng · Insignia azul · Multiplicador 1.25x",  fx:{ segsPct:0.12, eng:30, mult:1.25, chanceBonus:5 } },
  { id:"ads",       icono:"📢", nombre:"Pagar Ads",            costo:750,  cooldown:1, desc:"+15% segs · +35 eng · Multiplicador 1.35x",  fx:{ segsPct:0.15, eng:35, mult:1.35, chanceBonus:6 } },
  { id:"ghost",     icono:"✍️", nombre:"Contratar CM",         costo:1500, cooldown:2, desc:"+60 eng · +14% éxito · Multiplicador 1.35x", fx:{ eng:60, mult:1.35, chanceBonus:14 } },
  { id:"shoutout",  icono:"🤝", nombre:"Arrobar a un famoso",   costo:1800, cooldown:2, desc:"+25% segs · +60 eng · Multiplicador 1.5x",   fx:{ segsPct:0.25, eng:60, mult:1.50, chanceBonus:8 } },
  { id:"bots",      icono:"🤖", nombre:"Usar Bots",            costo:3000, cooldown:3, desc:"+40% segs · +10 odio · Multiplicador 1.8x",  fx:{ segsPct:0.40, odio:10, mult:1.80, chanceBonus:6 } },
  { id:"trollfarm", icono:"🧌", nombre:"Granja de Trolls",     costo:4500, cooldown:4, desc:"+120 eng · +15 odio · Multiplicador 2.0x",   fx:{ eng:120, odio:15, mult:2.00, chanceBonus:10 } }
];
