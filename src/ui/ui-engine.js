/* Twitero v15 ? src/ui/ui-engine.js */

class UIEngine {
  constructor(eng) {
    this.eng=eng;
    this.sel={genero:"hombre", arch:ARCHETYPES[0].id, pers:PERSONALITIES[0].id};
    this.currentCards=[];
    this.preparedBoosterId=null;
    this.isResolvingAction=false;
    this.cardsAlreadyFlipped=false;
  }

  showScreen(id) {
    document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
    const el=document.getElementById(id); if(el) el.classList.add("active");
  }

  init() {
    this._splash(); this._gender(); this._archetype(); this._personality();
    this._setupLanguageDropdown(); this._setupGlobalTooltips();
    this._setupTutorial();
    this._setupCancellationModal();
    this._setupHateModal();
    this._setupViralModal();
    this._setupStrike2Modal();
    this._setupCancGameOverModal();
    this._setupProfileModal();
    this._setupShortcutsModal();
    this._setupGlobalKeyboardShortcuts();
    if(window.twemoji) window.twemoji.parse(document.body);
  }


  _setupGlobalKeyboardShortcuts() {
    window.addEventListener("keydown", (ev) => {
      // Ignorar si el usuario está escribiendo en un input
      if (ev.target.tagName === "INPUT" || ev.target.tagName === "TEXTAREA") return;

      const isSpace = ev.code === "Space";
      const isEnter = ev.code === "Enter";
      const isConfirm = isSpace || isEnter;

      // ── Cerrar alert-overlay con Espacio o Enter ──────────────────────
      const alertOverlay = document.getElementById("alert-overlay");
      if (alertOverlay && alertOverlay.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          const alertBtn = document.getElementById("alert-ok-btn") ||
                           document.getElementById("btn-alert-dismiss");
          alertBtn?.click();
          return;
        }
      }

      // ── Tutorial: Siguiente con Espacio ───────────────────────────────
      const tutorialModal = document.getElementById("tutorial-modal-overlay") ||
                            document.getElementById("tutorial-modal");
      if (tutorialModal && tutorialModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-tutorial-next")?.click();
          return;
        }
      }

      // ── Cancellation Modal: Siguiente con Espacio ──────────────────────
      const cancModal = document.getElementById("cancellation-modal-overlay");
      if (cancModal && cancModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-canc-next")?.click();
          return;
        }
      }

      // ── Hate Modal: Siguiente con Espacio ──────────────────────────────
      const hateModal = document.getElementById("hate-modal-overlay");
      if (hateModal && hateModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          document.getElementById("btn-hate-next")?.click();
          return;
        }
      }

      // ── Viral Modal: Siguiente con Espacio ─────────────────────────────
      const viralModal = document.getElementById("viral-modal-overlay");
      if (viralModal && viralModal.classList.contains("active")) {
        if (isConfirm) {
          ev.preventDefault();
          const vNext = document.getElementById("btn-viral-next");
          if (vNext && vNext.style.display !== "none") {
            vNext.click();
            return;
          }
        }
      }

      // ── End screens: JUGAR DE NUEVO con Espacio ───────────────────────
      const screenEnd1 = document.getElementById("screen-end1");
      const screenEnd2 = document.getElementById("screen-end2");
      if (isSpace) {
        if (screenEnd1 && screenEnd1.classList.contains("active")) {
          ev.preventDefault();
          document.getElementById("btn-end1-restart")?.click();
          return;
        }
        if (screenEnd2 && screenEnd2.classList.contains("active")) {
          ev.preventDefault();
          document.getElementById("btn-play-again")?.click();
          return;
        }
      }

      // ── Modal de atajos: toggle con '?' o 'K' ─────────────────────────
      if (ev.key === "?" || ev.code === "KeyK") {
        const sOverlay = document.getElementById("shortcuts-modal-overlay");
        if (sOverlay) {
          ev.preventDefault();
          sOverlay.classList.toggle("active");
          snd.click();
          return;
        }
      }

      // ── Modal de perfil: toggle con 'P' ───────────────────────────────
      if (ev.code === "KeyP") {
        const pOverlay = document.getElementById("perfil-modal-overlay");
        if (pOverlay) {
          ev.preventDefault();
          if (pOverlay.classList.contains("active")) {
            pOverlay.classList.remove("active");
          } else {
            snd.click();
            this._updateProfileModalContent();
            pOverlay.classList.add("active");
          }
          return;
        }
      }

      // ── Cerrar modales con Escape ────────────────────────────────────
      if (ev.key === "Escape") {
        const sOverlay = document.getElementById("shortcuts-modal-overlay");
        if (sOverlay && sOverlay.classList.contains("active")) {
          ev.preventDefault();
          sOverlay.classList.remove("active");
          return;
        }
      }

      const screenGame = document.getElementById("screen-game");
      const isGameActive = screenGame && screenGame.classList.contains("active");
      if (!isGameActive || this.isResolvingAction) return;

      // ── Atajos Q, W, E para Boosters ─────────────────────────────────
      if (ev.code === "KeyQ" || ev.code === "KeyW" || ev.code === "KeyE") {
        const bIdx = ev.code === "KeyQ" ? 0 : ev.code === "KeyW" ? 1 : 2;
        const available = this.eng.getAvailableBoosters();
        if (available && available[bIdx]) {
          ev.preventDefault();
          const bId = available[bIdx].id;
          if (this.preparedBoosterId === bId) {
            this.preparedBoosterId = null;
            snd.click();
          } else {
            this.preparedBoosterId = bId;
            snd.boost();
          }
          this._renderCards();
          document.querySelectorAll(".booster-tile").forEach(t => {
            t.classList.toggle("highlighted", t.dataset.id === this.preparedBoosterId);
          });
        }
        return;
      }

      // ── Atajos 1, 2, 3 para jugar cartas ─────────────────────────────
      if (ev.key === "1" || ev.key === "2" || ev.key === "3") {
        const idx = parseInt(ev.key) - 1;
        // Si hay evento interactivo abierto, seleccionar postura según tarjeta física
        const eventSec = document.getElementById("event-section");
        if (eventSec && eventSec.style.display !== "none") {
          const optBtns = eventSec.querySelectorAll(".event-truco-card");
          if (optBtns && optBtns[idx]) {
            ev.preventDefault();
            const optIdx = parseInt(optBtns[idx].dataset.idx);
            this._chooseEventOption(optIdx);
          }
          return;
        }

        // Si son cartas normales
        if (this.currentCards && this.currentCards[idx]) {
          ev.preventDefault();
          this._playCardIdx(idx);
        }
      }
    });
  }

  _setupShortcutsModal() {
    const overlay = document.getElementById("shortcuts-modal-overlay");
    const openBtn = document.getElementById("btn-ver-shortcuts");
    const closeBtn = document.getElementById("btn-close-shortcuts");
    if (!overlay) return;

    if (openBtn) openBtn.onclick = () => {
      snd.click();
      overlay.classList.add("active");
    };
    if (closeBtn) closeBtn.onclick = () => {
      snd.click();
      overlay.classList.remove("active");
    };
    overlay.onclick = (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    };
  }

  _setupProfileModal() {
    const overlay = document.getElementById("perfil-modal-overlay");
    const openBtn = document.getElementById("btn-ver-perfil");
    const closeBtn = document.getElementById("btn-close-perfil");
    if(!overlay) return;

    if(openBtn) openBtn.onclick = () => {
      snd.click();
      this._updateProfileModalContent();
      overlay.classList.add("active");
    };
    if(closeBtn) closeBtn.onclick = () => {
      snd.click();
      overlay.classList.remove("active");
    };
  }

  _updateProfileModalContent() {
    const e = this.eng, arch = e.arquetipo, pers = e.personalidad;
    const pron = GENERO_LABELS[e.genero] || "Elle";
    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(arch, e.genero);

    const avEl = document.getElementById("perfil-avatar"); if(avEl) avEl.textContent = currentAvatar;
    const nameEl = document.getElementById("perfil-name"); if(nameEl) nameEl.textContent = genderedArch.toUpperCase();
    const handleEl = document.getElementById("perfil-handle"); if(handleEl) handleEl.textContent = `${e.handle} · ${pers.icono} ${pers.nombre.toUpperCase()}`;

    const aChips = (arch.afines||[]).map(f=>`<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
    const dChips = (arch.debiles||[]).map(f=>`<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
    const synergyLine = e.comboRisk ? "+6% a todas las tiradas por perfil no convencional" : "Combo canónico — sin bonus adicional";
    const goalPct = Math.min(100, Math.floor((e.seguidores/80000)*100));

    const archDesc = typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(arch, e.genero) : arch.desc;
    const persDesc = typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(pers, e.genero) : pers.desc;

    const contentEl = document.getElementById("perfil-identity-content");
    if(contentEl) {
      contentEl.innerHTML = `
        <div class="char-identity-box" style="border:1px solid var(--border); margin-bottom:8px;">
          <div class="id-row"><span class="id-label">PRONOMBRES</span><span class="id-val">${pron}</span></div>
          <div class="id-row"><span class="id-label">ARQUETIPO</span><span class="id-val">${genderedArch} // ${archDesc}</span></div>
          <div class="id-row"><span class="id-label">PERSONALIDAD</span><span class="id-val">${persDesc}</span></div>
          <div class="id-row"><span class="id-label">CARTAS AFINES</span><span>${aChips}</span></div>
          <div class="id-row"><span class="id-label">CARTAS DÉBILES</span><span>${dChips}</span></div>
          <div class="id-row"><span class="id-label">RASGOS</span><span class="id-val" style="color:var(--blue-bright)">${pers.bonus} · ${pers.malus}</span></div>
          <div class="id-row"><span class="id-label">SINERGIA</span><span class="id-val">${synergyLine}</span></div>
          <div class="id-row"><span class="id-label">CANCELACIONES</span><span class="id-val" style="color:${e.strikesCancelacion>0?'var(--red)':'var(--green)'}; font-weight:700;">STRIKES: ${e.strikesCancelacion} / 3</span></div>
        </div>
        <div class="goal-progress-box" style="border:1px solid var(--border);">
          <div class="goal-label">META DE VICTORIA: 80K SEGUIDORES — ${goalPct}%</div>
          <div class="goal-track"><div class="goal-fill" style="width:${goalPct}%"></div></div>
        </div>
      `;
    }
  }

  _setupTutorial() {
    this.tutSlide = 1;
    this.tutMax = 4;
    const updateTut = () => {
      document.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i+1 === this.tutSlide));
      document.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i+1 === this.tutSlide));
      document.getElementById("btn-tutorial-prev").style.visibility = this.tutSlide > 1 ? "visible" : "hidden";
      document.getElementById("btn-tutorial-next").textContent = this.tutSlide === this.tutMax ? "COMENZAR ▶" : "SIGUIENTE ➡";
    };
    
    const closeTut = () => {
      snd.click();
      document.getElementById("tutorial-modal-overlay").classList.remove("active");
      if (this._onTutorialClose) {
        const cb = this._onTutorialClose;
        this._onTutorialClose = null;
        cb();
      }
    };
    document.getElementById("btn-tutorial-skip-top")?.addEventListener("click", closeTut);
    document.getElementById("btn-tutorial-skip-bottom")?.addEventListener("click", () => { closeTut(); });
    
    document.getElementById("btn-tutorial-next")?.addEventListener("click", () => {
      snd.click();
      if(this.tutSlide < this.tutMax) { this.tutSlide++; updateTut(); } else { closeTut(); }
    });
    document.getElementById("btn-tutorial-prev")?.addEventListener("click", () => {
      snd.click();
      if(this.tutSlide > 1) { this.tutSlide--; updateTut(); }
    });
  }

  _startTutorial() {
    this.tutSlide = 1;
    document.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    document.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    document.getElementById("btn-tutorial-prev").style.visibility = "hidden";
    document.getElementById("btn-tutorial-next").textContent = "SIGUIENTE ➡";
    document.getElementById("tutorial-modal-overlay").classList.add("active");
  }

  _setupCancellationModal() {
    this.cancSlide = 1;
    this.cancMax = 3;
    const overlay = document.getElementById("cancellation-modal-overlay");
    if (!overlay) return;

    const updateCanc = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.cancSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.cancSlide));
      const prevBtn = document.getElementById("btn-canc-prev");
      const nextBtn = document.getElementById("btn-canc-next");
      if (prevBtn) prevBtn.style.visibility = this.cancSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.textContent = this.cancSlide === this.cancMax ? "ENTENDIDO ✕" : "SIGUIENTE ➡";
    };

    const closeCanc = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onCancClose) {
        const cb = this._onCancClose;
        this._onCancClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-canc-modal")?.addEventListener("click", closeCanc);
    document.getElementById("btn-canc-next")?.addEventListener("click", () => {
      snd.click();
      if (this.cancSlide < this.cancMax) {
        this.cancSlide++;
        updateCanc();
      } else {
        closeCanc();
      }
    });
    document.getElementById("btn-canc-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.cancSlide > 1) {
        this.cancSlide--;
        updateCanc();
      }
    });
  }

  _showCancellationModal(onClose) {
    this._onCancClose = onClose || null;
    this.cancSlide = 1;
    const overlay = document.getElementById("cancellation-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-canc-prev");
    const nextBtn = document.getElementById("btn-canc-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.textContent = "SIGUIENTE ➡";
    snd.alert();
    overlay.classList.add("active");
  }

  _setupHateModal() {
    this.hateSlide = 1;
    this.hateMax = 3;
    const overlay = document.getElementById("hate-modal-overlay");
    if (!overlay) return;

    const updateHate = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.hateSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.hateSlide));
      const prevBtn = document.getElementById("btn-hate-prev");
      const nextBtn = document.getElementById("btn-hate-next");
      if (prevBtn) prevBtn.style.visibility = this.hateSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.textContent = this.hateSlide === this.hateMax ? "ENTENDIDO ✕" : "SIGUIENTE ➡";
    };

    const closeHate = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onHateClose) {
        const cb = this._onHateClose;
        this._onHateClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-hate-modal")?.addEventListener("click", closeHate);
    document.getElementById("btn-hate-next")?.addEventListener("click", () => {
      snd.click();
      if (this.hateSlide < this.hateMax) {
        this.hateSlide++;
        updateHate();
      } else {
        closeHate();
      }
    });
    document.getElementById("btn-hate-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.hateSlide > 1) {
        this.hateSlide--;
        updateHate();
      }
    });
  }

  _showHateModal(onClose) {
    this._onHateClose = onClose || null;
    this.hateSlide = 1;
    const overlay = document.getElementById("hate-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-hate-prev");
    const nextBtn = document.getElementById("btn-hate-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.textContent = "SIGUIENTE ➡";
    snd.alert();
    overlay.classList.add("active");
  }

  // ─── STRIKE 2 MODAL (3-step, dynamic) ────────────────────────
  _setupStrike2Modal() {
    this.s2Slide = 1;
    this.s2Max = 3;
    const overlay = document.getElementById("strike2-modal-overlay");
    if (!overlay) return;

    const updateS2 = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.s2Slide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.s2Slide));
      const prevBtn = document.getElementById("btn-s2-prev");
      const nextBtn = document.getElementById("btn-s2-next");
      if (prevBtn) prevBtn.style.visibility = this.s2Slide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.textContent = this.s2Slide === this.s2Max ? "ENTENDIDO ✕" : "SIGUIENTE ➡";
    };

    const closeS2 = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onS2Close) { const cb = this._onS2Close; this._onS2Close = null; cb(); }
    };

    document.getElementById("btn-close-strike2-modal")?.addEventListener("click", closeS2);
    document.getElementById("btn-s2-next")?.addEventListener("click", () => {
      snd.click();
      if (this.s2Slide < this.s2Max) { this.s2Slide++; updateS2(); } else { closeS2(); }
    });
    document.getElementById("btn-s2-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.s2Slide > 1) { this.s2Slide--; updateS2(); }
    });

    // Space/Enter advances slides
    overlay.addEventListener("keydown", (ev) => {
      if (!overlay.classList.contains("active")) return;
      if (ev.code === "Space" || ev.code === "Enter") {
        ev.preventDefault();
        const nextBtn = document.getElementById("btn-s2-next");
        if (nextBtn) nextBtn.click();
      }
    });
  }

  _showStrike2Modal(canc, onClose) {
    this._onS2Close = onClose || null;
    this.s2Slide = 1;
    const overlay = document.getElementById("strike2-modal-overlay");
    if (!overlay) return;

    // Populate slide 1 dynamically with the specific incident
    const slide1 = document.getElementById("s2-slide-1");
    if (slide1) {
      slide1.innerHTML = `
        <h3>EL ESCÁNDALO: ${canc.titulo || "SEGUNDO STRIKE"} 🚨</h3>
        <p>${canc.motivo || "Un nuevo incidente sacudió tu timeline y acumuló reportes masivos contra tu cuenta."}</p>
        ${canc.texto ? `<div style="font-family:var(--font-mono); font-size:0.82rem; color:var(--gray-1); border-left:3px solid var(--red); padding:8px 12px; margin-top:4px;">"${canc.texto}"</div>` : ""}
      `;
    }

    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-s2-prev");
    const nextBtn = document.getElementById("btn-s2-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) nextBtn.textContent = "SIGUIENTE ➡";
    snd.alert();
    overlay.classList.add("active");
    overlay.focus();
  }

  // ─── CANCELLATION GAME-OVER MODAL ────────────────────────────
  _setupCancGameOverModal() {
    const overlay = document.getElementById("canc-gameover-modal-overlay");
    if (!overlay) return;
    document.getElementById("btn-cgo-ok")?.addEventListener("click", () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onCgoClose) { const cb = this._onCgoClose; this._onCgoClose = null; cb(); }
    });
    // Space/Enter confirms
    overlay.addEventListener("keydown", (ev) => {
      if (!overlay.classList.contains("active")) return;
      if (ev.code === "Space" || ev.code === "Enter") {
        ev.preventDefault();
        document.getElementById("btn-cgo-ok")?.click();
      }
    });
  }

  _showCancGameOverModal(canc, onClose) {
    this._onCgoClose = onClose || null;
    const overlay = document.getElementById("canc-gameover-modal-overlay");
    if (!overlay) return;
    const titleEl  = document.getElementById("cgo-title");
    const reasonEl = document.getElementById("cgo-reason");
    const tweetEl  = document.getElementById("cgo-tweet");
    if (titleEl)  titleEl.textContent  = canc?.titulo  || "CUENTA SUSPENDIDA DEFINITIVAMENTE";
    if (reasonEl) reasonEl.textContent = canc?.motivo  || "";
    if (tweetEl)  { tweetEl.textContent = canc?.texto ? `"${canc.texto}"` : ""; tweetEl.style.display = canc?.texto ? "block" : "none"; }
    overlay.classList.add("active");
    overlay.focus();
  }

  _setupViralModal() {

    this.viralSlide = 1;
    this.viralMax = 3;
    const overlay = document.getElementById("viral-modal-overlay");
    if (!overlay) return;

    const updateViral = () => {
      overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i + 1 === this.viralSlide));
      overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i + 1 === this.viralSlide));
      const prevBtn = document.getElementById("btn-viral-prev");
      const nextBtn = document.getElementById("btn-viral-next");
      if (prevBtn) prevBtn.style.visibility = this.viralSlide > 1 ? "visible" : "hidden";
      if (nextBtn) nextBtn.style.display = this.viralSlide === this.viralMax ? "none" : "block";
    };

    const closeViral = () => {
      snd.click();
      overlay.classList.remove("active");
      if (this._onViralClose) {
        const cb = this._onViralClose;
        this._onViralClose = null;
        cb();
      }
    };

    document.getElementById("btn-close-viral-modal")?.addEventListener("click", () => {
      this.eng.rachaViralDone = true;
      closeViral();
    });

    document.getElementById("btn-viral-decline")?.addEventListener("click", () => {
      snd.click();
      this.eng.rachaViralDone = true;
      this.eng.rachaViralActive = false;
      closeViral();
    });

    document.getElementById("btn-viral-accept")?.addEventListener("click", () => {
      snd.legendary();
      this.eng.startRachaViral();
      closeViral();
    });

    document.getElementById("btn-viral-next")?.addEventListener("click", () => {
      snd.click();
      if (this.viralSlide < this.viralMax) {
        this.viralSlide++;
        updateViral();
      }
    });

    document.getElementById("btn-viral-prev")?.addEventListener("click", () => {
      snd.click();
      if (this.viralSlide > 1) {
        this.viralSlide--;
        updateViral();
      }
    });
  }

  _showViralModal(onClose) {
    this._onViralClose = onClose || null;
    this.viralSlide = 1;
    const overlay = document.getElementById("viral-modal-overlay");
    if (!overlay) return;
    overlay.querySelectorAll(".tutorial-slide").forEach((s, i) => s.classList.toggle("active", i === 0));
    overlay.querySelectorAll(".tutorial-dots .dot").forEach((d, i) => d.classList.toggle("active", i === 0));
    const prevBtn = document.getElementById("btn-viral-prev");
    const nextBtn = document.getElementById("btn-viral-next");
    if (prevBtn) prevBtn.style.visibility = "hidden";
    if (nextBtn) {
      nextBtn.style.display = "block";
      nextBtn.textContent = "SIGUIENTE ➡";
    }
    snd.alert();
    overlay.classList.add("active");
  }

  _splash() {
    const btn=document.getElementById("btn-start");
    if(btn) btn.onclick=()=>{ snd.click(); this.showScreen("screen-gender"); };

    const btnRanking = document.getElementById("btn-splash-ranking");
    if(btnRanking) btnRanking.onclick=()=>{ snd.click(); this._openRankingModal(); };

    const btnTutorial = document.getElementById("btn-tutorial-open");
    if(btnTutorial) btnTutorial.onclick=()=>{ snd.click(); this._startTutorial(); };
  }

  _openRankingModal() {
    const overlay = document.getElementById("ranking-modal-overlay");
    if(!overlay) return;
    RankingManager.renderTables("ranking-daily-body", "ranking-alltime-body");
    overlay.classList.add("active");
    const closeBtns = overlay.querySelectorAll(".ranking-modal-close, #btn-close-ranking-modal, #btn-ranking-ok");
    closeBtns.forEach(btn => {
      btn.onclick = () => { snd.click(); overlay.classList.remove("active"); };
    });
    overlay.onclick = (e) => {
      if(e.target === overlay) { snd.click(); overlay.classList.remove("active"); }
    };
  }

  _showRankingPromptThenSave() {
    const e = this.eng;
    const defaultHandle = e.arquetipo.defaultHandle || "@twitero";
    const hasCustomHandle = e.handle && e.handle !== defaultHandle;
    const score = calculateScore(e);
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);

    const doSave = (handle) => {
      const finalHandle = handle && handle.trim().length > 0
        ? (handle.startsWith("@") ? handle.trim() : "@"+handle.trim())
        : e.handle;
      const entry = {
        handle: finalHandle,
        arch: genderedArch,
        archIcon: e.arquetipo.icono,
        final: e.final?.titulo || "—",
        segs: e.seguidores,
        score: score,
        date: new Date().toISOString().split("T")[0]
      };
      RankingManager.addScore(entry);
    };

    if(hasCustomHandle) {
      doSave(e.handle);
      this._openRankingModal();
    } else {
      const overlay = document.getElementById("ranking-prompt-overlay");
      if(!overlay){ doSave(e.handle); this._openRankingModal(); return; }
      overlay.classList.add("active");

      const input = document.getElementById("ranking-prompt-input");
      const btnSubmit = document.getElementById("btn-ranking-prompt-submit");
      const btnSkip = document.getElementById("btn-ranking-prompt-skip");

      if(btnSubmit) btnSubmit.onclick = () => {
        snd.click();
        const val = input ? input.value.trim() : "";
        doSave(val || e.handle);
        overlay.classList.remove("active");
        this._openRankingModal();
      };
      if(btnSkip) btnSkip.onclick = () => {
        snd.click();
        overlay.classList.remove("active");
        this._openRankingModal();
      };
      if(input) input.addEventListener("keydown", (ev) => {
        if(ev.key === "Enter") { btnSubmit?.click(); }
      });
    }
  }

  _setupLanguageDropdown() {
    const btn = document.getElementById("lang-dropdown-btn");
    const menu = document.getElementById("lang-dropdown-menu");
    if (!btn || !menu) return;

    btn.onclick = (e) => {
      e.stopPropagation();
      snd.click();
      menu.classList.toggle("active");
    };

    document.addEventListener("click", () => {
      menu.classList.remove("active");
    });

    menu.querySelectorAll(".lang-opt").forEach(opt => {
      opt.onclick = (e) => {
        e.stopPropagation();
        snd.click();
        const lang = opt.dataset.lang;
        menu.classList.remove("active");
        if (lang === "es") return;
        this._showAlert("IDIOMA EN DESARROLLO", `El soporte para ${lang==="en"?"Inglés (🇬🇧 English)":"Japonés (🇯🇵 日本語)"} estará disponible en una próxima actualización.`, "🌐 LOCALIZACIÓN");
      };
    });
  }

  _setupGlobalTooltips() {
    const tt=document.getElementById("global-tooltip"); if(!tt) return;
    document.addEventListener("mouseover",(e)=>{
      const target=e.target.closest("[data-tooltip]");
      if(target){
        const text=target.getAttribute("data-tooltip");
        if(text){ tt.innerHTML=text; tt.classList.add("active"); const rect=target.getBoundingClientRect();
          const left=Math.min(window.innerWidth-290,Math.max(10,rect.left+(rect.width/2)-130));
          tt.style.top=`${rect.bottom+8}px`; tt.style.left=`${left}px`; }
      }
    });
    document.addEventListener("mouseout",(e)=>{ if(e.target.closest("[data-tooltip]")) tt.classList.remove("active"); });
  }

  _showAlert(title, text, meta, isLegendary=false, onDismiss=null, customIcon=null) {
    const overlay=document.getElementById("alert-overlay");
    if(!overlay) return;
    const titleEl=document.getElementById("alert-title"); if(titleEl) titleEl.innerHTML=title;
    const textEl=document.getElementById("alert-text"); if(textEl) textEl.innerHTML=text;
    const metaEl=document.getElementById("alert-meta");
    if(metaEl) {
      if(meta && meta.trim() !== "") {
        metaEl.innerHTML = meta;
        metaEl.style.display = "inline-flex";
      } else {
        metaEl.innerHTML = "";
        metaEl.style.display = "none";
      }
    }
    const iconEl=document.getElementById("alert-icon");
    if(iconEl) {
      if(customIcon) {
        iconEl.textContent = customIcon;
        iconEl.style.display = "block";
      } else if (customIcon === false) {
        iconEl.style.display = "none";
      } else {
        iconEl.textContent = isLegendary ? "🏆" : "⚡";
        iconEl.style.display = "block";
      }
    }
    const boxEl=document.getElementById("alert-box");

    if (isLegendary && boxEl) {
      boxEl.className = "alert-box legendary";
      snd.legend();
    } else if (boxEl) {
      boxEl.className = "alert-box";
      snd.alert();
    }

    if (onDismiss) {
      this._onAlertDismiss = onDismiss;
    }

    overlay.classList.add("active");
    const okBtn=document.getElementById("alert-ok-btn");
    if(okBtn) {
      okBtn.onclick=()=>{
        overlay.classList.remove("active");
        if(this._onAlertDismiss) {
          const cb = this._onAlertDismiss;
          this._onAlertDismiss = null;
          cb();
        }
      };
    }
  }

  _gender() {
    const grid=document.getElementById("gender-grid"); if(!grid) return;
    const opts=[{id:"hombre",icon:"👨",name:"Hombre",desc:"Pronombres masculinos.",meta:"PRON: ÉL"},{id:"mujer",icon:"👩",name:"Mujer",desc:"Pronombres femeninos.",meta:"PRON: ELLA"},{id:"diverso",icon:"🧑",name:"Diverso",desc:"Lenguaje neutro.",meta:"PRON: ELLE"}];
    grid.innerHTML=opts.map(o=>`<div class="sel-card" data-id="${o.id}"><div class="sc-icon-wrap">${o.icon}</div><div class="sc-name">${o.name}</div><div class="sc-desc">${o.desc}</div><div class="sc-meta">${o.meta}</div></div>`).join("");
    grid.querySelectorAll(".sel-card").forEach(c=>{ c.onclick=()=>{ snd.click(); this.sel.genero=c.dataset.id; this.showScreen("screen-archetype"); this._archetype(); }; });
  }

  _archetype() {
    const grid=document.getElementById("archetype-grid"); if(!grid) return;
    const available = typeof isArchetypeAvailableForGender === "function" 
      ? ARCHETYPES.filter(a => isArchetypeAvailableForGender(a.id, this.sel.genero))
      : ARCHETYPES;
    grid.innerHTML=available.map(a=>{
      const genderedName = getGenderedArchetype(a, this.sel.genero);
      const difClass = a.dificultad === "alta" ? "chip-dif-alta" : a.dificultad === "media" ? "chip-dif-media" : "chip-dif-baja";
      const difBadge = `<span class="chip-dif ${difClass}">DIFICULTAD ${a.difLabel || "MEDIA"}</span>`;
      const afinesHtml=(a.afines||[]).map(f=>`<span class="chip-afin">${CARD_PALOS[f]?.icono||"⭐"} ${f}</span>`).join("");
      const debilesHtml=(a.debiles||[]).map(f=>`<span class="chip-debil">${CARD_PALOS[f]?.icono||"💀"} ${f}</span>`).join("");
      const passiveText = a.difDesc || (a.bajomon?"Bajo Monetize · ":"") + (a.odioRed?"Odio Reducido":"");
      const archDesc = typeof getGenderedArchetypeDesc === "function" ? getGenderedArchetypeDesc(a, this.sel.genero) : a.desc;

      const tip = `<strong>${a.icono} ${genderedName.toUpperCase()}</strong><br><div style='margin:6px 0;'>${difBadge}</div>${archDesc}<br><div style='margin-top:6px;display:flex;flex-wrap:wrap;gap:4px;'>${afinesHtml}${debilesHtml}</div>${passiveText ? `<div style='margin-top:6px;color:var(--blue);font-size:0.75rem;'>${passiveText}</div>` : ''}`.replace(/"/g, '&quot;');

      return `<div class="sel-card sel-card-clean" data-id="${a.id}" data-tooltip="${tip}">
        <div class="sc-icon-wrap">${a.icono}</div>
        <div class="sc-name">${genderedName}</div>
        <div class="sc-desc">${archDesc}</div>
      </div>`;
    }).join("");
    grid.querySelectorAll(".sel-card").forEach(c=>{
      c.onclick=()=>{
        snd.click();
        this.sel.arch=c.dataset.id;
        const archObj = ARCHETYPES.find(a=>a.id===c.dataset.id);
        const handleInput = document.getElementById("user-handle-input");
        if (handleInput && archObj) {
          const customDefHandle = typeof getGenderedDefaultHandle === "function" ? getGenderedDefaultHandle(archObj, this.sel.genero) : archObj.defaultHandle;
          handleInput.value = customDefHandle.replace("@","") || "twitero";
        }
        this.showScreen("screen-personality");
      };
    });
  }

  _personality() {
    const grid=document.getElementById("personality-grid"); if(!grid) return;
    grid.innerHTML=PERSONALITIES.map(p=>{
      const persDesc = typeof getGenderedPersonalityDesc === "function" ? getGenderedPersonalityDesc(p, this.sel.genero) : p.desc;
      const tip = `<strong>${p.icono} ${p.nombre.toUpperCase()}</strong><br>${persDesc}<br><div style='margin-top:6px;color:var(--blue);font-family:var(--font-mono);font-size:0.75rem;'>RIESGO: ${p.riesgo.toUpperCase()} · RETORNO: ${p.retorno.toUpperCase()}</div>${p.bonus ? `<div style='color:var(--green);font-size:0.72rem;margin-top:2px;'>+ ${p.bonus}</div>` : ''}${p.malus ? `<div style='color:var(--red);font-size:0.72rem;'>- ${p.malus}</div>` : ''}`.replace(/"/g, '&quot;');

      return `<div class="sel-card sel-card-clean" data-id="${p.id}" data-tooltip="${tip}">
        <div class="sc-icon-wrap">${p.icono}</div>
        <div class="sc-name">${p.nombre}</div>
        <div class="sc-desc">${persDesc}</div>
      </div>`;
    }).join("");

    grid.querySelectorAll(".sel-card").forEach(c=>{
      c.onclick=()=>{
        snd.click();
        this.sel.pers=c.dataset.id;
        const handleInput = document.getElementById("user-handle-input");
        const customHandle = handleInput ? handleInput.value.trim() : null;
        this.eng.init(this.sel.genero, this.sel.arch, this.sel.pers, customHandle);
        this.showScreen("screen-game");
        this._updateStatsOnly();
        this._onTutorialClose = () => {
          this._renderFullTurn();
        };
        this._startTutorial();
      };
    });
  }

  _updateStatsOnly() {
    const e=this.eng;
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };

    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const iconEl=document.getElementById("char-icon"); if(iconEl) iconEl.textContent=currentAvatar;
    set("char-name", genderedArch.toUpperCase());
    set("char-pers",`${e.handle} · ${e.personalidad.icono} ${e.personalidad.nombre.toUpperCase()}`);

    const identEl=document.getElementById("char-identity");
    if(identEl){
      const pron=GENERO_LABELS[e.genero]||"Elle";
      const arch=e.arquetipo, pers=e.personalidad;
      const aChips=(arch.afines||[]).map(f=>`<span class="chip-afin-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      const dChips=(arch.debiles||[]).map(f=>`<span class="chip-debil-sm">${CARD_PALOS[f]?.icono||""} ${f}</span>`).join("");
      identEl.innerHTML=`
        <div class="id-row"><span class="id-label">CUENTA X</span><span class="id-val" style="color:var(--blue-bright)">${e.handle}</span></div>
        <div class="id-row"><span class="id-label">PRONOMBRES</span><span class="id-val">${pron}</span></div>
        <div class="id-row"><span class="id-label">ARQUETIPO</span><span class="id-val">${genderedArch}</span></div>
        <div class="id-row"><span class="id-label">PERSONALIDAD</span><span class="id-val">${pers.desc}</span></div>
        <div class="id-row"><span class="id-label">AFINES</span><span>${aChips}</span></div>
        <div class="id-row"><span class="id-label">DÉBILES</span><span>${dChips}</span></div>
      `;
    }

    const segEl=document.getElementById("stat-followers");
    if(segEl){
      const delta=e.prevSegs>0?((e.seguidores-e.prevSegs)/e.prevSegs*100):0;
      const sign=delta>=0?"+":"";
      const color=delta>=0?"var(--green)":"var(--red)";
      const arrow=delta>=0?"▲":"▼";
      segEl.innerHTML=`${e.seguidores.toLocaleString("es-AR")}<span class="stat-delta" style="color:${color}">${arrow}${sign}${delta.toFixed(1)}%</span>`;
    }

    const monEl=document.getElementById("stat-money");
    if(monEl){
      const delta=e.prevDin>0?((e.dinero-e.prevDin)/Math.abs(e.prevDin)*100):0;
      const sign=delta>=0?"+":"";
      const color=delta>=0?"var(--green)":"var(--red)";
      const arrow=delta>=0?"▲":"▼";
      monEl.innerHTML=`$${e.dinero.toLocaleString("es-AR")}<span class="stat-delta" style="color:${color}">${arrow}${sign}${delta.toFixed(1)}%</span>`;
    }

    set("stat-engagement","⚡ "+e.engagement);
    set("stat-sm-val",e.saludMental+"%");
    set("stat-cred",e.credibilidad);
    set("stat-viral",e.viralidad);
    set("lbl-amor","💜 "+e.amor);
    set("lbl-odio",e.odio+" ❤️‍🔥");
    set("turn-badge",`TURNO ${String(e.turno).padStart(2,"0")} / 20`);
    set("sb-turn-label",`T-${String(e.turno).padStart(2,"0")}/20`);

    const payEl=document.getElementById("stat-payout-label"); if(payEl) payEl.textContent=`+~$${e.calcPayout().toLocaleString()}/T`;

    const smF=document.getElementById("sm-fill");
    if(smF){ smF.style.width=e.saludMental+"%"; smF.style.background=e.saludMental>60?"var(--green)":e.saludMental>30?"var(--amber)":"var(--red)"; }

    const tot=(e.amor+e.odio)||1;
    const lv=document.getElementById("dual-love"), hv=document.getElementById("dual-hate");
    if(lv) lv.style.width=(e.amor/tot*100)+"%";
    if(hv){
      hv.style.width=(e.odio/tot*100)+"%";
      hv.classList.remove("odio-bar-warning","odio-bar-danger","odio-bar-critical");
      if(e.odio>=80)      { hv.style.background="#b91c1c"; hv.classList.add("odio-bar-critical"); }
      else if(e.odio>=65) { hv.style.background="#ef4444"; hv.classList.add("odio-bar-danger"); }
      else if(e.odio>=50) { hv.style.background="#f97316"; hv.classList.add("odio-bar-warning"); }
      else                { hv.style.background="var(--red)"; }
    }

    const tbSegs=document.getElementById("tb-segs"); if(tbSegs) tbSegs.textContent=`👥 ${e.seguidores.toLocaleString("es-AR")}`;
    const tbDin=document.getElementById("tb-din"); if(tbDin) tbDin.textContent=`💰 $${e.dinero.toLocaleString("es-AR")}`;

    const tbSmFill=document.getElementById("tb-sm-fill");
    const tbSmVal=document.getElementById("tb-sm-val");
    if(tbSmFill){
      tbSmFill.style.width=e.saludMental+"%";
      tbSmFill.style.background=e.saludMental>60?"var(--green)":e.saludMental>30?"var(--amber)":"var(--red)";
    }
    if(tbSmVal) tbSmVal.textContent=e.saludMental+"%";

    const tbOdioFill=document.getElementById("tb-odio-fill");
    const tbOdioVal=document.getElementById("tb-odio-val");
    if(tbOdioFill){
      tbOdioFill.style.width=Math.min(100,e.odio)+"%";
      tbOdioFill.style.background=e.odio>=80?"#b91c1c":e.odio>=65?"#ef4444":e.odio>=50?"#f97316":"var(--red)";
    }
    if(tbOdioVal) tbOdioVal.textContent=e.odio+"%";

    const rvBanner = document.getElementById("racha-viral-banner");
    if (rvBanner) {
      if (e.rachaViralActive) {
        rvBanner.style.display = "flex";
        const wins = e.rachaViralCount || 0;
        rvBanner.innerHTML = `
          <div class="racha-viral-badge">🔥 MOMENTO VIRAL ACTIVO</div>
          <div class="racha-viral-progress">
            <span>OBJETIVO: 3 TWEETS EXITOSOS</span>
            <div class="racha-viral-dots">
              <div class="rv-step ${wins >= 1 ? 'done' : 'current'}">${wins >= 1 ? '✓' : '1'}</div>
              <div class="rv-step ${wins >= 2 ? 'done' : (wins === 1 ? 'current' : '')}">${wins >= 2 ? '✓' : '2'}</div>
              <div class="rv-step ${wins >= 3 ? 'done' : (wins === 2 ? 'current' : '')}">${wins >= 3 ? '✓' : '3'}</div>
            </div>
          </div>
          <div class="racha-viral-warning">⚠️ Un fallo = -$ (35%) y +2 strikes</div>
        `;
      } else {
        rvBanner.style.display = "none";
      }
    }

    this._renderBuildPanel();
    this._renderProgressBar();
    this._renderSparkline();
  }

  _renderBuildPanel() {
    const el=document.getElementById("build-panel"); if(!el) return;
    const e=this.eng, arch=e.arquetipo, pers=e.personalidad;
    const genderedArch = getGenderedArchetype(arch, e.genero);
    const synergyLine=e.comboRisk?"+6% a todas las tiradas por perfil no convencional":"Combo canónico — sin bonus adicional";
    el.innerHTML=`
      <div class="build-row"><span>🎭 ${genderedArch}</span><span class="build-val">Cartas afines: ${(arch.afines||[]).join(", ")}</span></div>
      <div class="build-row"><span>${pers.icono} ${pers.nombre}</span><span class="build-val">${pers.bonus} · ${pers.malus}</span></div>
      <div class="build-row"><span>⚡ Sinergia</span><span class="build-val">${synergyLine}</span></div>
    `;
  }

  _renderProgressBar() {
    const el=document.getElementById("goal-progress"); if(!el) return;
    const pct=Math.min(100,(this.eng.seguidores/80000)*100);
    const fill=el.querySelector(".goal-fill");
    const label=el.querySelector(".goal-label");
    if(fill) fill.style.width=pct+"%";
    if(label) label.textContent=`META DE VICTORIA: 80K SEGUIDORES — ${pct.toFixed(0)}%`;
  }

  _renderSparkline() {
    const svg=document.getElementById("sparkline-svg");
    if(!svg||this.eng.history.length<2) return;
    const hist=this.eng.history, vals=hist.map(h=>h.segs);
    const min=Math.min(...vals), max=Math.max(...vals)||1;
    const W=180, H=28;
    const pts=vals.map((v,i)=>{ const x=(i/(vals.length-1))*W, y=H-((v-min)/(max-min||1))*(H-4)-2; return `${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
    svg.innerHTML=`<polyline points="${pts}" fill="none" stroke="#1d9bf0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  _renderFullTurn() {
    if(this.eng.gameOver){
      const finalId = this.eng.final?.id;
      // Hate / Red Zone deaths → show dramatic gameover modal before end screen
      if (finalId === "cancelacion_zonaroja") {
        snd.fail();
        const isMax = this.eng.odio >= 100;
        this._showCancGameOverModal({
          titulo: isMax ? "HOSTILIDAD EXTREMA — CUENTA CERRADA" : "TOXICIDAD CRÓNICA — EXPULSIÓN FORZADA",
          motivo: isMax
            ? "Tu odio llegó al 100%. La plataforma detectó toxicidad extrema y suspendió tu cuenta automáticamente."
            : "Permaneciste 3 turnos consecutivos en Zona Roja (Odio ≥80%). Los moderadores forzaron el cierre permanente de tu perfil.",
          texto: null
        }, () => this._showEnd1());
      } else {
        this._showEnd1();
      }
      return;
    }


    this.cardsAlreadyFlipped = false; // Permite flip una sola vez al inicio del turno
    this._updateStatsOnly();
    this._checkTurnWarningModals();

    // ── CHECK EVENTOS FORTUITOS (Medios, Famoso, Algoritmo) ──
    const fort = this.eng.checkFortuitousEvents ? this.eng.checkFortuitousEvents() : null;
    if (fort) {
      snd.alert();
      this._showAlert(
        `${fort.icono} ${fort.titulo}`,
        `${fort.desc}<br><br><strong style='color:var(--green); font-family:var(--font-mono);'>${fort.consecuencia}</strong>`,
        ""
      );
      this._updateStatsOnly();
    }

    // ── CHECK NUEVOS BOOSTERS DISPONIBLES ──
    if (!this.unlockedBoostersShown) this.unlockedBoostersShown = new Set();
    const newlyAffordable = BOOSTERS.filter(b => this.eng.dinero >= b.costo && !this.unlockedBoostersShown.has(b.id));
    if (newlyAffordable.length > 0) {
      newlyAffordable.forEach(b => this.unlockedBoostersShown.add(b.id));
      const bShowcases = newlyAffordable.map(b => `
        <div class="booster-unlock-showcase">
          <div class="booster-badge-icon">${b.icono}</div>
          <div class="booster-showcase-title">${b.nombre}</div>
          <div class="booster-price-pill">$${b.costo.toLocaleString()}</div>
        </div>
      `).join("");

      this._showAlert(
        "NUEVO BOOSTER DISPONIBLE",
        `${bShowcases}`,
        "TIENDA DE BOOSTERS",
        true,
        null,
        "🚀"
      );
    }

    // ── CHECK EVENTO VIRAL (Racha Viral) ──
    const rachaViral = this.eng.checkRachaViral ? this.eng.checkRachaViral() : null;
    if (rachaViral) {
      this._showViralModal(() => {
        this._continueRenderTurn();
      });
      return;
    }

    this._continueRenderTurn();
  }

  _continueRenderTurn() {
    this._updateStatsOnly();

    // ── CHECK EVENTOS INTERACTIVOS (Dilemas con Pop-up de anuncio previo) ──
    const ev = this.eng.checkSpecialEvent();
    if(ev){
      document.getElementById("cards-section").style.display = "none";
      document.getElementById("event-section").style.display = "none";
      document.getElementById("interactive-event-box").style.display = "none";

      this._showAlert(
        `⚡ ${ev.titulo.toUpperCase()}`,
        `${ev.desc}`,
        ev.tag,
        false,
        () => {
          this._renderInteractiveEvent(ev);
        }
      );
      return;
    }

    document.getElementById("cards-section").style.display = "block";
    document.getElementById("event-section").style.display = "none";
    document.getElementById("interactive-event-box").style.display = "none";

    this._renderBoosters();
    this._renderCards();
  }

  _checkTurnWarningModals() {
    const e = this.eng;
    if (e.odio >= 80) {
      if (e.turnosEnZonaRoja === 1 && !e.cancelWarningShown['zr1']) {
        e.cancelWarningShown['zr1'] = true;
        this._showHateModal();
      } else if (e.turnosEnZonaRoja === 2 && !e.cancelWarningShown['zr2']) {
        e.cancelWarningShown['zr2'] = true;
        snd.alert();
        this._showAlert(
          "🚨 ZONA ROJA — ¡ÚLTIMO TURNO DE GRACIA! (2/3)",
          `<div class="strike-meter-row">
             <div class="strike-slot active-2">🔥 TURNO 1: ACTIVO</div>
             <div class="strike-slot active-2">🚨 TURNO 2: EN CURSO</div>
             <div class="strike-slot danger-target">☠️ TURNO 3: EXPULSIÓN</div>
           </div>
           <div class="strike-info-card critical">
             <strong>💀 PELIGRO INMINENTE DE SUSPENSIÓN</strong><br>
             Llevás 2 turnos consecutivos con Odio ≥ 80%. <strong>Si este turno termina sin bajar el Odio por debajo de 80%, perderás la partida automáticamente por Hostilidad Extrema.</strong>
           </div>
           <div class="strike-info-card survival">
             <strong>🛡️ ACCIÓN URGENTE REQUERIDA:</strong><br>
             Reducí el Odio AHORA MISMO en este turno o la plataforma cerrará tu perfil.
           </div>`,
          "EXPULSIÓN INMINENTE",
          true
        );
      }
    } else {
      delete e.cancelWarningShown['zr1'];
      delete e.cancelWarningShown['zr2'];
    }

    if (e.odio >= 65 && !e.cancelWarningShown[65]) {
      e.cancelWarningShown[65] = true;
      this._showHateModal();
    }
  }

  _triggerCardsFlip() {
    if (this.cardsAlreadyFlipped) return;
    const cards = this.currentCards || [];
    cards.forEach((_, idx) => {
      setTimeout(() => {
        const wrap = document.getElementById(`card-wrap-${idx}`);
        if (wrap) {
          wrap.classList.add("flipped");
          snd.cardFlip(idx);
        }
      }, 120 + idx * 180);
    });
    this.cardsAlreadyFlipped = true;
  }

  _renderCards() {
    const container=document.getElementById("cards-area"); if(!container) return;
    const cards=this.eng.drawCards();
    this.currentCards=cards;
    const e=this.eng;
    const booster=this.preparedBoosterId?BOOSTERS.find(b=>b.id===this.preparedBoosterId):null;

    container.innerHTML=cards.map((c,idx)=>{
      const palo = c.paloOverride || c.palo || CARD_PALOS[c.id] || { nombre:"TWEET", icono:"💬", color:"#1d9bf0" };
      const chance = this.eng._successChance(c, booster);
      const chanceColor = chance >= 70 ? "var(--green)" : chance >= 50 ? "var(--amber)" : "var(--red)";
      const boosterMultiplier = booster?.fx.mult ? `${booster.fx.mult}x` : "1.0x";
      const conceptDesc = CARD_CONCEPT_DESCS[c.id] || "Publicación estratégica en el feed.";

      // Badge visual de carta nueva
      const isNew = !e.seenCardTypes.has(c.id);
      const badgeHtml = isNew ? `<div class="card-new-badge">✨ NUEVA</div>` : '';

      const wrapClass = this.cardsAlreadyFlipped ? "card-flip-wrap flipped" : "card-flip-wrap";

      return `
      <div class="${wrapClass}" id="card-wrap-${idx}">
        <div class="card-flip-inner">
          <div class="card-face card-back">
            <div class="card-back-minimal">
              <img src="favicon.jpg" class="card-back-logo" alt="Twitero" />
              <div class="card-back-label">TWITERO</div>
            </div>
          </div>
          <div class="card-face card-front">
            <div class="truco-card" style="border-top-color:${palo.color}; cursor:pointer;" data-idx="${idx}">
              ${badgeHtml}
              <div class="card-suit-tag" style="color:${palo.color};">
                <span class="card-suit-dot" style="background:${palo.color};"></span>
                ${palo.nombre.toUpperCase()}
                <span class="card-key-badge">[${idx + 1}]</span>
              </div>
              <div class="card-palo">${palo.icono}</div>
              <div class="card-title">${c.titulo}</div>
              <div class="card-desc">${conceptDesc}</div>
              
              <div class="card-stats">
                <div class="card-chips-row">
                  <span class="cstat neu">PROB. ÉXITO: <strong style="color:${chanceColor};">${chance}%</strong></span>
                  <span class="cstat neu">MULT: <strong>${boosterMultiplier}</strong></span>
                </div>
              </div>

              <button class="card-play-btn" data-idx="${idx}">TUITEAR AHORA ▶</button>
            </div>
          </div>
        </div>
      </div>
      `;
    }).join("");

    // Registrar tipos de carta vistos
    cards.forEach(c => e.seenCardTypes.add(c.id));

    // FLIP CONTROLADO: si hay pop-up activo, postergar flip hasta que se cierre con [Entendido]
    const overlay = document.getElementById("alert-overlay");
    const isAlertActive = overlay && overlay.classList.contains("active");

    if (!this.cardsAlreadyFlipped) {
      if (isAlertActive) {
        const prevDismiss = this._onAlertDismiss;
        this._onAlertDismiss = () => {
          if (prevDismiss) prevDismiss();
          this._triggerCardsFlip();
        };
      } else {
        this._triggerCardsFlip();
      }
    }

    // Permitir cliquear en toda la carta o en el botón para jugarla
    container.querySelectorAll(".truco-card").forEach(cardEl=>{
      cardEl.onclick=(e)=>{
        if(this.isResolvingAction) return;
        const idx=parseInt(cardEl.dataset.idx);
        this._playCardIdx(idx);
      };
    });

    container.querySelectorAll(".card-play-btn").forEach(btn=>{
      btn.onclick=(e)=>{
        e.stopPropagation();
        if(this.isResolvingAction) return;
        const idx=parseInt(btn.dataset.idx);
        this._playCardIdx(idx);
      };
    });
  }

  _renderBoosters() {
    const grid=document.getElementById("boosters-grid"); if(!grid) return;
    const available=this.eng.getAvailableBoosters();
    if(available.length===0){ grid.innerHTML=`<div style="grid-column:span 3;padding:10px;font-family:var(--font-mono);font-size:0.7rem;color:var(--gray-1);text-align:center;">SIN BOOSTERS DISPONIBLES CON EL SALDO ACTUAL</div>`; return; }
    const BOOSTER_KEYS = ['Q', 'W', 'E'];
    grid.innerHTML=available.map((b, i)=>{
      const isHl=this.preparedBoosterId===b.id;
      const keyHint = BOOSTER_KEYS[i] ? `<span class="booster-key-pill">${BOOSTER_KEYS[i]}</span>` : '';
      const tip=`<strong>${b.icono} ${b.nombre}</strong><br>${b.desc}<br><span style='color:#eab308;'>Cooldown: ${b.cooldown} turno${b.cooldown>1?'s':''}</span>`.replace(/"/g, '&quot;');
      return `<div class="booster-tile ${isHl?"highlighted":""}" data-id="${b.id}" data-tooltip="${tip}">
        ${keyHint}
        <div class="b-icon">${b.icono}</div>
        <div class="b-name">${b.nombre}</div>
        <div class="b-cost">$${b.costo.toLocaleString()}</div>
      </div>`;
    }).join("");

    grid.querySelectorAll(".booster-tile").forEach(tile=>{
      tile.onclick=()=>{
        if(this.isResolvingAction) return;
        const bId = tile.dataset.id;
        if (this.preparedBoosterId === bId) {
          this.preparedBoosterId = null;
          snd.click();
        } else {
          this.preparedBoosterId = bId;
          snd.boost();
        }
        this._renderCards();
        document.querySelectorAll(".booster-tile").forEach(t=>{
          t.classList.toggle("highlighted", t.dataset.id === this.preparedBoosterId);
        });
      };
    });
  }

  _highlightCard(selectedEl, idx) {
    const mainEl=document.getElementById("game-main-el"); if(mainEl) mainEl.classList.add("locked");
    document.querySelectorAll(".cards-area .truco-card").forEach((c,i)=>{ c.classList.toggle("selected-card",i===idx); c.classList.toggle("dimmed-card",i!==idx); });
  }

  _playCardIdx(idx) {
    if(this.isResolvingAction) return;
    this.isResolvingAction=true;

    const card=this.currentCards[idx];
    const bId=this.preparedBoosterId;
    this.preparedBoosterId=null;

    const cardEl=document.querySelectorAll(".cards-area .truco-card")[idx];
    this._highlightCard(cardEl, idx);

    snd.roll();

    const res = this.eng.playCard(card, bId);
    this._showNarrativePanel(card, res);
  }

  _renderInteractiveEvent(ev) {
    document.getElementById("cards-section").style.display="none";
    document.getElementById("event-section").style.display="block";
    const box=document.getElementById("interactive-event-box");
    box.style.display="flex";

    const tagEl=document.getElementById("event-tag"); if(tagEl){ tagEl.textContent=ev.tag; tagEl.style.background=ev.color==="purple"?"#6b21a8":"var(--blue)"; }
    const titleEl=document.getElementById("event-title"); if(titleEl) titleEl.textContent=ev.titulo;
    const descEl=document.getElementById("event-desc"); if(descEl) descEl.textContent=ev.desc;

    const container=document.getElementById("event-options-container");
    if(container){
      // Randomize options order on each event appearance while tracking original index
      const indexedOpts = ev.opciones.map((opt, origIdx) => ({ opt, origIdx }));
      for (let i = indexedOpts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedOpts[i], indexedOpts[j]] = [indexedOpts[j], indexedOpts[i]];
      }

      const optIcons = ['1️⃣', '2️⃣', '3️⃣'];
      container.innerHTML = indexedOpts.map((item, displayIdx)=>{
        const optIcon = optIcons[displayIdx] || '⚡';
        return `
        <div class="truco-card event-truco-card" style="border-top-color:var(--purple); flex:1; min-width:220px; cursor:pointer;" data-idx="${item.origIdx}">
          <div class="card-suit-tag" style="color:var(--purple);">
            <span class="card-suit-dot" style="background:var(--purple);"></span>
            OPCIÓN ${displayIdx+1}
          </div>
          <div class="card-palo">${optIcon}</div>
          <div class="card-title">${item.opt.texto}</div>
          <button class="card-play-btn btn-opt-choose" data-idx="${item.origIdx}" style="background:var(--purple); margin-top:auto;">ELEGIR POSTURA ▶</button>
        </div>
        `;
      }).join("");

      container.querySelectorAll(".btn-opt-choose, .event-truco-card").forEach(el=>{
        el.onclick=(e)=>{
          e.stopPropagation();
          const optIdx=parseInt(el.dataset.idx);
          this._chooseEventOption(optIdx);
        };
      });
    }
  }

    _chooseEventOption(idx) {
    if(this.isResolvingAction) return;
    this.isResolvingAction=true;

    const ev=this.eng.activeEvent;
    if(!ev) return;
    const opt=ev.opciones[idx];
    if(opt.fx) opt.fx(this.eng);

    this.eng.activeEvent = null;
    this.eng.cachedCards = null;

    this.eng.turnLog.push({
      t: this.eng.turno,
      type: "event",
      eventTitle: ev.titulo,
      choice: opt.texto,
      effects: opt.efectoDesc
    });

    snd.click();

    const simulatedCard = {
      id: "evento",
      titulo: ev.titulo,
      texto: opt.tweet || opt.texto
    };

    const outcomeRes = {
      ok: true,
      roll: 100,
      chance: 100,
      segsGain: opt.efectoObj?.seguidores || 0,
      engGain: opt.efectoObj?.engagement || 0,
      dinGain: opt.efectoObj?.ingresos || 0,
      hateGain: opt.efectoObj?.odio || 0,
      viral: null,
      boosterUsed: null,
      customNarrative: opt.resultado || "Decisión estratégica ejecutada."
    };

    this._showNarrativePanel(simulatedCard, outcomeRes, "⚡ IMPACTO DE TU ELECCIÓN EN EL TIMELINE", opt.resultado);
  }

  _showNarrativePanel(card, res, customOutcomeTitle=null, consequenceText=null) {
    const panel=document.getElementById("narrative-panel");
    if(!panel) return;

    panel.className = "narrative-panel active is-rolling";
    panel.style.background = ""; panel.style.borderTopColor = "";

    const e=this.eng;
    const isSuccess = res.ok;
    const booster = res.boosterUsed;
    const isCrisis = res.cancellationEvent !== null && res.cancellationEvent !== undefined;
    const isFatalCrisis = res.cancellationEvent?.isFatal;
    const rawTweet = (card.texto || card.titulo || "Contenido en el feed.");
    const tweetContent = typeof adaptTweetGender === "function" ? adaptTweetGender(rawTweet, e.genero) : rawTweet;
    const viralData = res.viral;

    let logLines = [];
    if(card.id === "evento") {
      logLines.push(`⚡ POSTURA ESTRATÉGICA REGISTRADA`);
    } else {
      logLines.push(`🎲 RESULTADO DE LA TIRADA: <strong>D${res.roll}</strong> (Requerido: ≤ ${res.chance}%)`);
      if(booster) logLines.push(`📢 BOOSTER APLICADO: <strong>${booster.nombre}</strong> (${booster.fx.mult || 1.35}x impacto)`);
      if(res.ok) {
        logLines.push(`👥 SEGUIDORES: <strong style="color:var(--green)">+${res.segsGain.toLocaleString()}</strong>`);
        logLines.push(`⚡ ENGAGEMENT: <strong style="color:var(--green)">+${res.engGain}</strong>`);
        if(res.dinGain > 0) logLines.push(`💰 DINERO COBRADO: <strong style="color:var(--amber)">+$${res.dinGain.toLocaleString()}</strong>`);
      } else {
        logLines.push(`👥 PÉRDIDA DE SEGUIDORES: <strong style="color:var(--red)">${res.segsGain.toLocaleString()}</strong>`);
        logLines.push(`❤️‍🔥 ODIO GENERADO: <strong style="color:var(--red)">+${res.hateGain}</strong>`);
      }
    }

    if(isCrisis) {
      const canc = res.cancellationEvent;
      const strikeText = isFatalCrisis ? "☠️ STRIKE 3/3 — CANCELACIÓN DEFINITIVA" : `⚠️ STRIKE ${canc.strike}/3 — ALERTA DE CANCELACIÓN`;
      logLines.push(`<strong style="color:var(--red)">${strikeText}: ${canc.titulo}</strong>`);
      logLines.push(`<span style="color:var(--off-white); font-size:0.75rem;">${canc.texto}</span>`);
    }

    const s = Math.max(100, e.seguidores);
    let likes, rts, replies, views;
    const isVerified = e.history.some(h=>e.dinero >= 0) && (e.seguidores >= 25000);

    if(isSuccess){
      const likeRate = 0.025 + Math.random() * 0.035; // 2.5% - 6% de seguidores
      likes = Math.max(4, Math.floor(s * likeRate));
      const rtRate = 0.12 + Math.random() * 0.10; // 12% - 22% de los likes
      rts = Math.max(0, Math.floor(likes * rtRate));
      const replyRate = 0.04 + Math.random() * 0.05; // 4% - 9% de los likes (ej: 3k -> ~5-15)
      replies = Math.max(1, Math.floor(likes * replyRate));
      views = Math.max(likes * 12, Math.floor(s * (0.9 + Math.random() * 1.6)));
    } else {
      // Fracaso o Ratio: muy pocos likes/RTs, pero comentarios de repudio realistas
      const likeRate = 0.0015 + Math.random() * 0.0025; // 0.15% - 0.4% de seguidores
      likes = Math.max(1, Math.floor(s * likeRate));
      rts = Math.max(0, Math.floor(likes * (0.05 + Math.random() * 0.08)));
      // Ratio: comentarios escalados a seguidores (0.5% a 0.9% de followers, ej: 3k -> 15 a 27)
      const replyRate = 0.005 + Math.random() * 0.004;
      replies = Math.max(2, Math.floor(s * replyRate));
      views = Math.max(replies * 8, Math.floor(s * (0.4 + Math.random() * 0.6)));
    }

    const currentAvatar = e.getAvatar();
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const verifiedBadgeHtml = isVerified ? `<span class="tweet-verified-badge" title="Cuenta Verificada">☑️</span>` : '';
    const outcomeTitle = customOutcomeTitle || (isSuccess ? "🎯 TWEET VIRAL — EXCELENTE ENGAGEMENT EN EL TIMELINE" : "💥 RATIO HISTÓRICO — EL TIMELINE SE TE VINO ENCIMA");

    // Pool of authentic community tweets scrolling in the timeline
    const communityTweets = [
      { av: "🐱", name: "Michi Dev", handle: "@michi_dev", time: "2m", text: "deployé a producción un viernes a las 18hs, deséenme suerte amigos..." },
      { av: "🧉", name: "Mate con Bizcochitos", handle: "@pibe_termolar", time: "5m", text: "el café de especialidad con granos de etiopía es una estafa inventada en Palermo" },
      { av: "🚀", name: "Lucas BTC", handle: "@crypto_lucas", time: "8m", text: "el que no compró en la corrección después no venga a llorar en el bull market" },
      { av: "💅", name: "Sofi ✨", handle: "@sofi_lifestyle", time: "11m", text: "necesito urgente tres meses de vacaciones de mis vacaciones" },
      { av: "⚽", name: "Bosterismo Puro", handle: "@la_mitad_mas_uno", time: "14m", text: "el domingo cueste lo que cueste muchachos, prohibido aflojar" },
      { av: "🍿", name: "Cinéfilo Posta", handle: "@cinefilo_arg", time: "18m", text: "revivió el cine con esta escena, actuación descomunal y fotografía 10/10" },
      { av: "🐸", name: "Shitpost Nacional", handle: "@memes_arg", time: "22m", text: "no puedo más con este país jajaja somos el mejor país del mundo lpm" },
      { av: "🧠", name: "Filósofo de Bar", handle: "@don_nadie_", time: "27m", text: "en twitter la gente inventa un enemigo imaginario y se indigna sola en su pieza" },
      { av: "📊", name: "Tendencias Hoy", handle: "@trends_bot", time: "31m", text: "Tendencia #1 en Argentina ahora mismo: debate furioso en el timeline" },
      { av: "🔥", name: "Baitero Profesional", handle: "@polemica_pura", time: "35m", text: "abro debate y me retiro: las medialunas de manteca son infinitamente superiores" }
    ];

    // Build repeating feed cards for fast upward scroll
    const feedCards = [];
    for(let i = 0; i < 16; i++) {
      feedCards.push(communityTweets[i % communityTweets.length]);
    }
    const feedCardsHtml = feedCards.map(t => `
      <div class="feed-tweet-card">
        <div class="feed-tweet-avatar">${t.av}</div>
        <div class="feed-tweet-content">
          <div class="feed-tweet-header">
            <span class="feed-author">${t.name}</span>
            <span class="feed-handle">${t.handle}</span>
            <span class="feed-dot">·</span>
            <span class="feed-time">${t.time}</span>
          </div>
          <div class="feed-tweet-text">${t.text}</div>
        </div>
      </div>
    `).join("");

    panel.innerHTML = `
      <!-- TIMELINE FEED SCROLLER (Community stream scrolling up) -->
      <div class="timeline-feed-container" id="timeline-feed-container">
        <div class="timeline-feed-viewport" id="timeline-feed-viewport">
          <div class="timeline-feed-reel" id="timeline-feed-reel">
            ${feedCardsHtml}
          </div>
          <div class="feed-skip-hint">ESPACIO O CLIC PARA FRENAZO ▶</div>
        </div>
      </div>

      <!-- PLAYER'S PUBLISHED TWEET (Revealed on stop with pure white, large text) -->
      <div class="simulated-tweet-box" id="simulated-tweet-box" style="display:none;">
        <div class="tweet-left-avatar">${currentAvatar}</div>
        <div class="tweet-right-content">
          <div class="tweet-author-line">
            <span class="tweet-author-name">${genderedArch}</span>
            ${verifiedBadgeHtml}
            <span class="tweet-handle">${e.handle}</span>
            <span class="tweet-dot">·</span>
            <span class="tweet-time">Turno ${String(e.turno).padStart(2,"0")}</span>
          </div>
          <div class="tweet-body-text" id="target-tweet-body">${tweetContent}</div>
          <div class="tweet-metrics-bar ${!isSuccess?'is-ratio':''}" id="tweet-metrics-bar" style="display:none;">
            <div class="t-metric metric-reply metric-hidden" id="metric-reply"><span class="m-icon">💬</span> <span class="m-val">${formatMetric(replies)}</span></div>
            <div class="t-metric metric-rt metric-hidden" id="metric-rt"><span class="m-icon">🔁</span> <span class="m-val">${formatMetric(rts)}</span></div>
            <div class="t-metric metric-like metric-hidden" id="metric-like"><span class="m-icon">❤️</span> <span class="m-val">${formatMetric(likes)}</span></div>
            <div class="t-metric metric-view metric-hidden" id="metric-view"><span class="m-icon">👁️</span> <span class="m-val">${formatMetric(views)}</span></div>
          </div>
        </div>
      </div>

      <div class="narrative-consequence-box ${isSuccess?'pos':'neg'}" id="narrative-consequence" style="display:none;">
        <div class="consequence-head">${outcomeTitle}</div>
        ${consequenceText ? `<div class="consequence-desc">${consequenceText}</div>` : ''}
      </div>

      <div class="narrative-body" id="narrative-body" style="display:none;">
        <div class="narrative-log" id="narrative-log"></div>
      </div>

      <div class="narrative-actions">
        <button class="btn btn-primary" id="btn-narrative-accept" style="display:none;">ACEPTAR Y CONTINUAR <span class="key-hint-pill">␣ ESPACIO</span> ▶</button>
      </div>
    `;

    const feedContainer = document.getElementById("timeline-feed-container");
    const feedViewport = document.getElementById("timeline-feed-viewport");
    const feedReel = document.getElementById("timeline-feed-reel");
    const tweetBox = document.getElementById("simulated-tweet-box");
    const metricsBar = document.getElementById("tweet-metrics-bar");
    const consequenceBox = document.getElementById("narrative-consequence");
    const log = document.getElementById("narrative-log");
    const narrativeBody = document.getElementById("narrative-body");
    const acceptBtn = document.getElementById("btn-narrative-accept");

    const mReply = document.getElementById("metric-reply");
    const mRt    = document.getElementById("metric-rt");
    const mLike  = document.getElementById("metric-like");
    const mView  = document.getElementById("metric-view");

    // ── FEED VERTICAL SCROLL ENGINE ──
    let isScrolling = true;
    let scrollTimer = null;
    let currentY = 0;
    const CARD_STEP = 54; // px per tick

    const scrollTick = () => {
      if (!isScrolling) return;
      currentY -= CARD_STEP;
      if (feedReel) feedReel.style.transform = `translateY(${currentY}px)`;
      snd.tick(); // Soft Air Whoosh!
      scrollTimer = setTimeout(scrollTick, 45); // ~22fps smooth fast feed scroll
    };

    scrollTimer = setTimeout(scrollTick, 60);

    // Auto-stop after 1.5s
    const autoStopTimer = setTimeout(() => { stopFeedAndReveal(); }, 1500);

    const stopFeedAndReveal = () => {
      if (!isScrolling) return;
      isScrolling = false;
      if (scrollTimer) clearTimeout(scrollTimer);
      clearTimeout(autoStopTimer);
      window.removeEventListener("keydown", handleKeyAccel);
      if (feedViewport) feedViewport.onclick = null;

      // Dry clunk sound when feed locks onto player's tweet
      snd.clunk();

      // Smooth switch: hide feed stream, reveal target tweet box
      if (feedContainer) feedContainer.style.display = "none";
      if (tweetBox) {
        tweetBox.style.display = "flex";
        tweetBox.style.animation = "panelSlideUp 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        if (isSuccess) {
          tweetBox.style.borderColor = "rgba(0,200,150,0.5)";
          tweetBox.style.boxShadow = "0 4px 30px rgba(0,200,150,0.18)";
        } else {
          tweetBox.style.borderColor = "rgba(239,68,68,0.5)";
          tweetBox.style.boxShadow = "0 4px 30px rgba(239,68,68,0.18)";
        }
      }

      if (metricsBar) metricsBar.style.display = "flex";
      if (consequenceBox) consequenceBox.style.display = "flex";
      if (narrativeBody) narrativeBody.style.display = "flex";
      if (log) log.innerHTML = logLines.map((l,i) => `<div class="ticker-line" style="animation-delay:${i*60}ms">${l}</div>`).join("");

      panel.classList.remove("is-rolling");
      if (isCrisis || !isSuccess) {
        panel.style.background = "linear-gradient(135deg,#1c0a0a 0%,#0c0606 100%)";
        panel.style.borderTopColor = "var(--red)";
      } else {
        panel.style.background = "linear-gradient(135deg,#0a1c12 0%,#060c08 100%)";
        panel.style.borderTopColor = "var(--green)";
      }

      // ── SEQUENTIAL DING DING DING METRICS (110ms apart) ──
      const metricList = [
        { el: mReply, index: 0 },
        { el: mRt,    index: 1 },
        { el: mLike,  index: 2 },
        { el: mView,  index: 3 }
      ];

      metricList.forEach((item, idx) => {
        setTimeout(() => {
          if (!item.el) return;
          item.el.classList.remove("metric-hidden");
          item.el.classList.add("metric-pop");
          if (isSuccess) {
            item.el.classList.add(viralData ? "metric-viral" : "metric-success");
            snd.ding(item.index);
          } else {
            item.el.classList.add("metric-fail");
            snd.metricFail(item.index);
          }
        }, 150 + idx * 110);
      });

      // Show accept button after all metrics
      setTimeout(() => {
        if (acceptBtn) {
          acceptBtn.style.display = "block";

            const doAccept = () => {
              window.removeEventListener("keydown", handleKeyAccept);
              panel.classList.remove("active");
              panel.style.background = ""; panel.style.borderTopColor = "";
              const mainEl = document.getElementById("game-main-el"); if (mainEl) mainEl.classList.remove("locked");
              this.isResolvingAction = false;
              this.eng.advanceTurn();

              const afterTurnCallback = () => {
                if (viralData) this._alertViral(viralData); else this._renderFullTurn();
              };

          // ── CHECK RACHA VIRAL RESOLUTION ──
          if (res.rachaViralUpdate && res.rachaViralUpdate.complete) {
            const rvu = res.rachaViralUpdate;
            if (rvu.success) {
              snd.legendary();
              this._showAlert(
                "🔥 ¡RACHA VIRAL COMPLETADA!",
                `<div class="strike-info-card survival" style="border-color:var(--green);">
                   <strong>🌟 ¡3 DE 3 TWEETS EXITOSOS!</strong><br>
                   Dominaste el algoritmo con maestría absoluta. La comunidad te convirtió en el fenómeno indiscutido de toda la red.<br><br>
                   • <strong>SEGUIDORES EXTRA GANADOS:</strong> +${rvu.gained.toLocaleString()} (+${rvu.pct}% de tu audiencia)<br>
                   • Tu cuenta alcanza un nuevo techo histórico de visibilidad e influencia.
                 </div>`,
                "MOMENTO VIRAL ÉPICO",
                true,
                afterTurnCallback,
                "👑"
              );
              return;
            } else {
              snd.fail();
              this._showAlert(
                "💔 RACHA VIRAL QUEBRADA",
                `<div class="strike-info-card critical">
                   <strong>💥 FRACASO EN EL MOMENTO VIRAL</strong><br>
                   Tu carta no superó la prueba del algoritmo bajo la mirada de toda la red. La ola de burlas y repudio te golpeó sin piedad.<br><br>
                   • <strong>DINERO PERDIDO:</strong> -$${rvu.moneyLost.toLocaleString()} (marcas caídas y penalidades)<br>
                   • <strong>PENALIZACIÓN:</strong> +2 STRIKES de moderación acumulados.<br>
                   • <strong>ESTADO ACTUAL:</strong> ${rvu.strikes}/3 strikes. ${rvu.gameOver ? '¡Cuenta suspendida!' : '¡Estás a un solo strike de la cancelación total!'}
                 </div>`,
                "DESAFÍO VIRAL FALLIDO",
                true,
                () => {
                  if (rvu.gameOver) {
                    snd.fail();
                    this._showCancGameOverModal({
                      titulo: "RACHA VIRAL FALLIDA — CUENTA SUSPENDIDA",
                      motivo: `Perdiste $${rvu.moneyLost.toLocaleString()} y acumulaste 2 strikes extra. Los moderadores suspendieron tu cuenta de forma definitiva.`,
                      texto: null
                    }, () => this._showEnd1());
                  } else {
                    afterTurnCallback();
                  }
                },
                "💀"
              );
              return;
            }
          }
          // ── CANCELLATION EVENT ROUTING ──────────────────────────────
          // NOTE: Strike 3 sets gameOver=true before returning, so we must
          //       check for it BEFORE the !gameOver guard.
          if (res.cancellationEvent) {
            const canc = res.cancellationEvent;
            const strikeNum = canc.strike;

            if (strikeNum >= 3) {
              // Game Over by 3rd strike — show dramatic popup, then end screen
              snd.fail();
              this._showCancGameOverModal(canc, () => this._showEnd1());
              return;
            }

            if (!this.eng.gameOver) {
              if (strikeNum === 1) {
                this._showCancellationModal(afterTurnCallback);
                return;
              } else if (strikeNum === 2) {
                this._showStrike2Modal(canc, afterTurnCallback);
                return;
              }
            }
          }

          afterTurnCallback();

        };

        acceptBtn.onclick = doAccept;

        const handleKeyAccept = (ev) => {
          if (ev.code === "Space" || ev.code === "Enter") {
            ev.preventDefault();
            doAccept();
          }
        };
        window.addEventListener("keydown", handleKeyAccept);
      }
    }, 650);
  };

    // ── ACCELERATION: Space or Click stops the feed immediately ──────
    const handleKeyAccel = (ev) => {
      if (ev.code === "Space") {
        ev.preventDefault();
        clearTimeout(autoStopTimer);
        if (scrollTimer) clearTimeout(scrollTimer);
        stopFeedAndReveal();
      }
    };
    window.addEventListener("keydown", handleKeyAccel, { once: true });

    if (feedViewport) {
      feedViewport.onclick = () => {
        clearTimeout(autoStopTimer);
        if (scrollTimer) clearTimeout(scrollTimer);
        stopFeedAndReveal();
      };
    }
  }

  _alertViral(viral) {
    const meta = viral.tipo==="nivel1" ? "+25.000 SEGUIDORES · +$3.500 DINERO" : "FENÓMENO MUNDIAL · +50.000 SEGUIDORES · +$6.000";
    this._showAlert(viral.titulo.toUpperCase(), viral.texto, meta, true);
    this._renderFullTurn();
  }

  _showEnd1() {
    this.showScreen("screen-end1");
    const f=this.eng.final, e=this.eng;
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end1-icon",f.icon||"🏆"); set("end1-title",f.titulo); set("end1-sub",f.sub||"");

    // ── HORIZONTAL TELEMETRY STRIP ──
    const statsEl=document.getElementById("end1-stats");
    if(statsEl) statsEl.innerHTML=`
      <div class="end-stat-col"><span class="lbl">SEGUIDORES</span><span class="val c-blue">${e.seguidores.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">DINERO</span><span class="val c-gold">$${e.dinero.toLocaleString()}</span></div>
      <div class="end-stat-col"><span class="lbl">ENGAGEMENT</span><span class="val c-white">⚡${e.engagement}</span></div>
      <div class="end-stat-col"><span class="lbl">SALUD MENTAL</span><span class="val c-green">${e.saludMental}%</span></div>
    `;

    // ── REPLAYABILITY HOOK: UNLOCKED FINALES COLLECTION ──
    try {
      const storageKey = "twitero_unlocked_finales_v17";
      let unlocked = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (f.titulo && !unlocked.includes(f.titulo)) {
        unlocked.push(f.titulo);
        localStorage.setItem(storageKey, JSON.stringify(unlocked));
      }
      const totalFinales = 14;
      const count = Math.min(totalFinales, Math.max(1, unlocked.length));
      const pct = Math.round((count / totalFinales) * 100);
      const countEl = document.getElementById("collection-count-text");
      const barFill = document.getElementById("collection-bar-fill");
      if (countEl) countEl.textContent = `${count} / ${totalFinales} DESCUBIERTOS (${pct}%)`;
      if (barFill) barFill.style.width = `${pct}%`;
    } catch(err) {}

    const btnShare=document.getElementById("btn-end1-share");
    if(btnShare){
      btnShare.onclick=()=>{
        snd.click();
        const tweetText = `Jugué a Twitero como ${genderedArch} ${e.personalidad.nombre} (${e.handle}) y alcancé el final "${f.titulo}" con ${e.seguidores.toLocaleString()} seguidores y $${e.dinero.toLocaleString()} 🏆. ¿Podés superarme? Jugá a Twitero acá: https://bit.ly/playtwitero`;
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;
        if(modal) modal.classList.add("active");
      };
    }

    const btnNext=document.getElementById("btn-next-end");
    if(btnNext) btnNext.onclick=()=>{ snd.click(); this._showEnd2(); };

    const btnRestart=document.getElementById("btn-end1-restart");
    if(btnRestart) btnRestart.onclick=()=>{ snd.click(); location.reload(); };

    // Spacebar to restart game on end screen
    const handleEndKey = (ev) => {
      const end1El = document.getElementById("screen-end1");
      if (end1El && end1El.classList.contains("active") && (ev.code === "Space" || ev.code === "Enter")) {
        ev.preventDefault();
        window.removeEventListener("keydown", handleEndKey);
        btnRestart?.click();
      }
    };
    window.addEventListener("keydown", handleEndKey);

    const copyModalBtn = document.getElementById("btn-modal-copy-tweet");
    if (copyModalBtn) {
      copyModalBtn.onclick = () => {
        snd.click();
        const textarea = document.getElementById("modal-share-textarea");
        navigator.clipboard.writeText(textarea.value).then(() => {
          copyModalBtn.textContent = "✓ ¡Texto copiado!";
          copyModalBtn.classList.add("copied");
          setTimeout(() => {
            copyModalBtn.textContent = "📋 Copiar Tweet";
            copyModalBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }
    const closeShareModal = document.getElementById("btn-close-share-modal");
    if(closeShareModal) closeShareModal.onclick=()=>{ const modal=document.getElementById("share-modal-overlay"); if(modal) modal.classList.remove("active"); };

    const btnEnd1Ranking = document.getElementById("btn-end1-ranking");
    if(btnEnd1Ranking) btnEnd1Ranking.onclick=()=>{ snd.click(); this._showRankingPromptThenSave(); };

    const btnEnd1Tree = document.getElementById("btn-end1-tree");
    if(btnEnd1Tree) btnEnd1Tree.onclick=()=>{ snd.click(); this._showDecisionTree(); };
  }

  _showEnd2() {
    this.showScreen("screen-end2");
    const f=this.eng.final, e=this.eng;
    const genderedArch = getGenderedArchetype(e.arquetipo, e.genero);
    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; };
    set("end2-final-title", `${f.icon||"🏆"} ${f.titulo}`);
    const narr=document.getElementById("end2-narrative"); if(narr) narr.textContent=f.narrativa||"";
    
    const btnBack=document.getElementById("btn-end2-back"); if(btnBack) btnBack.onclick=()=>{ snd.click(); this._showEnd1(); };
    const pa=document.getElementById("btn-play-again"); if(pa) pa.onclick=()=>{ snd.click(); location.reload(); };

    const svg=document.getElementById("end2-svg");
    if(svg && this.eng.history.length>=2){
      const hist=this.eng.history;
      const valsSegs=hist.map(h=>h.segs);
      const valsDin=hist.map(h=>h.din||0);
      const mnSegs=Math.min(...valsSegs), mxSegs=Math.max(...valsSegs)||1;
      const mnDin=Math.min(...valsDin), mxDin=Math.max(...valsDin)||1;
      const W=680, H=140;
      let gridLines="";
      for(let i=0;i<hist.length;i++){ const x=(i/(hist.length-1))*W; gridLines+=`<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${H}" stroke="rgba(29,155,240,0.1)" stroke-width="1"/>`; }
      
      const ptsSegs=valsSegs.map((v,i)=>{ const x=(i/(valsSegs.length-1))*W, y=H-((v-mnSegs)/(mxSegs-mnSegs||1))*(H-30)-15; return `${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
      const ptsDin=valsDin.map((v,i)=>{ const x=(i/(valsDin.length-1))*W, y=H-((v-mnDin)/(mxDin-mnDin||1))*(H-30)-15; return `${i===0?"M":"L"}${x.toFixed(1)},${y.toFixed(1)}`; }).join(" ");
      
      let nodesSegs="", nodesDin="", hoverZones="";
      const colW = W / (hist.length - 1 || 1);
      
      hist.forEach((h,i)=>{
        const x=(i/(hist.length-1))*W;
        const ySegs=H-((h.segs-mnSegs)/(mxSegs-mnSegs||1))*(H-30)-15;
        const yDin=H-((h.din-mnDin)/(mxDin-mnDin||1))*(H-30)-15;
        const tip=`<strong>Turno ${h.t===0?"Inicio":h.t}</strong><br>👥 ${h.segs.toLocaleString()} segs<br>💰 $${(h.din||0).toLocaleString()}`;
        
        nodesSegs+=`<circle cx="${x.toFixed(1)}" cy="${ySegs.toFixed(1)}" r="4" fill="#1d9bf0" stroke="#000" stroke-width="1.5" style="pointer-events:none;"/>`;
        nodesDin+=`<circle cx="${x.toFixed(1)}" cy="${yDin.toFixed(1)}" r="3" fill="#eab308" stroke="#000" stroke-width="1" style="pointer-events:none;"/>`;
        
        const rx = Math.max(0, x - colW/2);
        hoverZones+=`<rect x="${rx.toFixed(1)}" y="0" width="${colW.toFixed(1)}" height="${H}" fill="transparent" data-tooltip="${tip}" style="cursor:crosshair;pointer-events:all;" />`;
      });

      svg.innerHTML=`<defs><linearGradient id="eg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1d9bf0" stop-opacity="0.4"/><stop offset="100%" stop-color="#1d9bf0" stop-opacity="0"/></linearGradient></defs>
        <rect width="${W}" height="${H}" fill="rgba(0,0,0,0.6)"/>
        ${gridLines}
        <path d="${ptsSegs} L${W},${H} L0,${H}Z" fill="url(#eg)"/>
        <path d="${ptsDin}" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4 2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="${ptsSegs}" stroke="#1d9bf0" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        ${nodesDin}
        ${nodesSegs}
        ${hoverZones}`;
    }

    const reportBtn = document.getElementById("btn-copy-report");
    if (reportBtn) {
      reportBtn.onclick = () => {
        snd.click();
        const report = e.generateMatchReport();
        navigator.clipboard.writeText(report).then(() => {
          reportBtn.textContent = "✓ ¡Reporte copiado al portapapeles!";
          reportBtn.classList.add("copied");
          setTimeout(() => {
            reportBtn.textContent = "📋 COPIAR REPORTE (JSON)";
            reportBtn.classList.remove("copied");
          }, 3000);
        }).catch(()=>{});
      };
    }

    const btnEnd2Share = document.getElementById("btn-end2-share");
    if (btnEnd2Share) {
      btnEnd2Share.onclick = () => {
        snd.click();
        const tweetText = `Jugué a Twitero como ${genderedArch} ${e.personalidad.nombre} (${e.handle}) y alcancé el final "${f.titulo}" con ${e.seguidores.toLocaleString()} seguidores y $${e.dinero.toLocaleString()} 🏆. ¿Podés superarme? Jugá a Twitero acá: https://bit.ly/playtwitero`;
        const modal = document.getElementById("share-modal-overlay");
        const textarea = document.getElementById("modal-share-textarea");
        if(textarea) textarea.value = tweetText;
        if(modal) modal.classList.add("active");
      };
    }

    const btnEnd2Ranking = document.getElementById("btn-end2-ranking");
    if(btnEnd2Ranking) btnEnd2Ranking.onclick=()=>{ snd.click(); this._showRankingPromptThenSave(); };

    // ── Decision Tree button ──
    const btnTree = document.getElementById("btn-end2-tree");
    if (btnTree) btnTree.onclick = () => { snd.click(); this._showDecisionTree(); };
  }

  // ══════════════════════════════════════════════════════
  //  DECISION TREE  –  true branching dendrogram & clean badges
  // ══════════════════════════════════════════════════════
  _showDecisionTree() {
    const e = this.eng;
    const log = e.gameLog;
    if (!log || log.length === 0) return;

    // ── MINIMALIST INFOGRAPHIC DENDROGRAM (v17) ────────────────────────
    // Inspirado en árbol de decisiones limpio con niveles horizontales sutiles,
    // curvas Bézier fluidas y paleta unificada al 100% con la UI de Twitero.
    
    const TIER_H  = 84;       // altura por nivel/turno
    const PAD_TOP = 92;       // espacio para header sobrio
    const PAD_BOT = 48;       // altura de la barra de stats inferior
    const svgW    = 920;      // ancho estándar de infografía
    const cX      = svgW / 2; // columna central del jugador
    const cols    = log.length;
    const svgH    = PAD_TOP + cols * TIER_H + PAD_BOT + 24;

    // ── PALETA UNIFICADA (Estricto estilo Dark Twitter / Neo-Industrial) ──
    const C = {
      bg:           "#080c14",
      lineGuide:    "rgba(255, 255, 255, 0.05)",
      trunk:        "#1d9bf0", // Twitter Blue
      branchAlt:    "#232e42", // Conectores descartados
      chosenNodeBg: "#0c1524",
      chosenNodeBdr:"#1d9bf0",
      altNodeBg:    "#090d18",
      altNodeBdr:   "#1c2638",
      pipOk:        "#00c896", // Verde sobrio
      pipFail:      "#ef4444", // Rojo coral
      pipViral:     "#f4c020", // Oro sutil
      textWhite:    "#ffffff",
      textMuted:    "#8b98a9",
      textDim:      "#475569"
    };

    let lines = "";
    let nodes = "";
    let tooltipData = [];

    // ROOT / INICIO (Tier 0 superior)
    const rootY = PAD_TOP - 28;
    nodes += `
      <g>
        <circle cx="${cX}" cy="${rootY}" r="15" fill="${C.chosenNodeBg}" stroke="${C.trunk}" stroke-width="2"/>
        <text x="${cX}" y="${rootY + 4}" text-anchor="middle" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="${C.textWhite}">00</text>
      </g>`;

    // Precalcular posiciones de los turnos según el slot de carta elegido (0: Izq, 1: Centro, 2: Der)
    const laneOffsets = [-175, 0, 175];
    const positions = log.map((turn, i) => {
      const chosenSlot = turn.chosen && turn.chosen.slot != null ? turn.chosen.slot : (i % 3);
      return {
        x: cX + laneOffsets[chosenSlot],
        y: PAD_TOP + i * TIER_H + 42,
        tierY: PAD_TOP + i * TIER_H,
        slot: chosenSlot,
        turn,
        i
      };
    });

    let prevX = cX;
    let prevY = rootY;

    positions.forEach((pos, i) => {
      const turn = pos.turn;
      const chosen = turn.chosen;
      const isViral = !!chosen.viral;
      const hasFailed = !chosen.ok;

      // ── Línea guía horizontal sutil que delimita cada turno ──
      lines += `<line x1="32" y1="${pos.tierY}" x2="${svgW - 32}" y2="${pos.tierY}"
        stroke="${C.lineGuide}" stroke-width="1"/>`;

      // Etiqueta del turno a la izquierda (Space Mono, sobria, sin invadir el centro)
      nodes += `<text x="36" y="${pos.tierY + 22}" font-family="'Space Mono', monospace"
        font-size="10" font-weight="700" fill="${C.textDim}" letter-spacing="1">TURNO ${String(turn.t).padStart(2,"0")}</text>`;

      // ── Conector Tronco Principal (Curva S vertical desde nodo elegido anterior) ──
      const midY = (prevY + pos.y) / 2;
      lines += `<path d="M${prevX},${prevY} C${prevX},${midY} ${pos.x},${midY} ${pos.x},${pos.y}"
        stroke="${C.trunk}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;

      // ── Ramas descartadas (Bifurcaciones hacia los otros 2 slots) ──
      const altSlots = [0, 1, 2].filter(s => s !== pos.slot);
      const alts = (turn.alternatives || []).slice(0, 2);
      alts.forEach((alt, ai) => {
        const altSlot = altSlots[ai] != null ? altSlots[ai] : (ai === 0 ? 0 : 2);
        const altX = cX + laneOffsets[altSlot];
        const altY = pos.y;
        const altMidY = (prevY + altY) / 2;

        lines += `<path d="M${prevX},${prevY} C${prevX},${altMidY} ${altX},${altMidY} ${altX},${altY}"
          stroke="${C.branchAlt}" stroke-width="1.5" stroke-dasharray="3 3" fill="none"/>`;

        // Nodo descartado circular
        nodes += `<g class="tree-node alt" data-idx="${i}" data-alt="${ai}" style="cursor:help;">
          <circle cx="${altX}" cy="${altY}" r="14" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
          <text x="${altX}" y="${altY + 4}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textDim}">✕</text>
          <text x="${altX}" y="${altY + 26}" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" fill="${C.textDim}">${(alt.title || alt.titulo || 'Descartada').slice(0, 15)}</text>
        </g>`;
      });

      // ── Nodo Elegido (Círculo limpio con borde según resultado) ──
      const nodeBdr = isViral ? C.pipViral : hasFailed ? C.pipFail : C.chosenNodeBdr;
      const pipFill = isViral ? C.pipViral : hasFailed ? C.pipFail : C.pipOk;
      const titleColor = isViral ? C.pipViral : hasFailed ? C.pipFail : C.textWhite;

      nodes += `<g class="tree-node chosen" data-idx="${i}" style="cursor:pointer;">
        <!-- Círculo principal del turno -->
        <circle cx="${pos.x}" cy="${pos.y}" r="18" fill="${C.chosenNodeBg}" stroke="${nodeBdr}" stroke-width="2"/>
        <text x="${pos.x}" y="${pos.y + 4}" text-anchor="middle" font-family="'Space Mono', monospace" font-size="10" font-weight="700" fill="${C.textWhite}">T${turn.t}</text>
        <!-- Pip sutil de resultado -->
        <circle cx="${pos.x + 13}" cy="${pos.y - 13}" r="4.5" fill="${pipFill}"/>
        <!-- Título de la carta elegida a la derecha -->
        <text x="${pos.x + 24}" y="${pos.y + 4}" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${titleColor}">${chosen.title.slice(0, 22)}</text>
      </g>`;

      tooltipData.push({ i, chosen, delta: turn.delta, snap: turn.snapshot, alts: turn.alternatives });

      // Actualizar nodo anterior para la próxima iteración
      prevX = pos.x;
      prevY = pos.y;
    });

    // Remate final en el último nodo
    if (positions.length > 0) {
      const lastPos = positions[positions.length - 1];
      const endY = lastPos.y + 40;
      lines += `<line x1="${lastPos.x}" y1="${lastPos.y}" x2="${lastPos.x}" y2="${endY}" stroke="${C.trunk}" stroke-width="2" stroke-dasharray="2 2"/>`;
      nodes += `<g>
        <circle cx="${lastPos.x}" cy="${endY}" r="6" fill="${C.trunk}"/>
      </g>`;
    }

    // ── HEADER UNIFICADO ──────────────────────────────────────────────
    const f = e.final;
    const genderedArch = typeof getGenderedArchetype === "function"
      ? getGenderedArchetype(e.arquetipo, e.genero) : e.arquetipo.nombre;
    const handleText = e.handle || "@twitero";
    const archBadge = genderedArch.toUpperCase();
    const archW = Math.max(80, archBadge.length * 7 + 20);

    const header = `
      <rect x="0" y="0" width="${svgW}" height="84" fill="${C.bg}"/>
      <line x1="0" y1="84" x2="${svgW}" y2="84" stroke="${C.lineGuide}" stroke-width="1"/>
      <!-- Título de sección en Plus Jakarta Sans -->
      <text x="36" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800"
        fill="${C.trunk}" letter-spacing="1.5">ÁRBOL DE DECISIONES · ${cols} TURNOS</text>
      <!-- Handle del jugador -->
      <text x="36" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800"
        fill="${C.textWhite}">${handleText}</text>
      <!-- Pastilla discreta de arquetipo -->
      <rect x="${36 + handleText.length * 12 + 14}" y="42" width="${archW}" height="20" rx="10"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
      <text x="${36 + handleText.length * 12 + 14 + archW / 2}" y="55" text-anchor="middle"
        font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="${C.textMuted}">${archBadge}</text>
      <!-- Leyenda horizontal compacta y sobria a la derecha -->
      <g transform="translate(${svgW - 320}, 44)">
        <circle cx="8" cy="8" r="5" fill="${C.chosenNodeBg}" stroke="${C.trunk}" stroke-width="1.5"/>
        <text x="18" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Elegido</text>
        <circle cx="80" cy="8" r="5" fill="${C.altNodeBg}" stroke="${C.altNodeBdr}" stroke-width="1.5"/>
        <text x="90" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Descartado</text>
        <circle cx="170" cy="8" r="4.5" fill="${C.pipOk}"/>
        <text x="180" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Éxito</text>
        <circle cx="230" cy="8" r="4.5" fill="${C.pipFail}"/>
        <text x="240" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="${C.textMuted}">Ratio</text>
      </g>`;

    // ── FOOTER STATS SOBRIO (Cero carnaval) ───────────────────────────
    const statsY = svgH - PAD_BOT;
    const statsBar = `
      <rect x="0" y="${statsY}" width="${svgW}" height="${PAD_BOT}" fill="${C.bg}"/>
      <line x1="0" y1="${statsY}" x2="${svgW}" y2="${statsY}" stroke="${C.lineGuide}" stroke-width="1"/>
      <text x="36" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">SEGUIDORES: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.seguidores.toLocaleString()}</tspan>
      </text>
      <text x="260" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">DINERO: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">$${e.dinero.toLocaleString()}</tspan>
      </text>
      <text x="440" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">SALUD: </tspan>
        <tspan font-family="'Space Mono', monospace" font-size="11" font-weight="700" fill="${C.textWhite}">${e.saludMental}%</tspan>
      </text>
      <text x="590" y="${statsY + 28}">
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}">FINAL: </tspan>
        <tspan font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="${C.trunk}">${f.titulo}</tspan>
      </text>`;

    const svgContent = `
      <rect width="${svgW}" height="${svgH}" fill="${C.bg}"/>
      ${header}
      ${lines}
      ${nodes}
      ${statsBar}`;

    // ── OVERLAY MODAL ─────────────────────────────────────────────────
    let overlay = document.getElementById("tree-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "tree-overlay";
      overlay.style.cssText = `position:fixed;inset:0;z-index:9000;background:rgba(2,4,10,0.95);
        display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;
        backdrop-filter:blur(10px);`;
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div style="width:100%;max-width:960px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="color:${C.trunk};font-size:12px;font-weight:800;letter-spacing:1.5px;font-family:'Plus Jakarta Sans', sans-serif;">
            ÁRBOL DE DECISIONES — RECORRIDO DE PARTIDA
          </span>
          <div style="display:flex;gap:10px;">
            <button id="btn-tree-copy" style="background:#0a1828;border:1px solid ${C.trunk};color:#fff;
              padding:7px 16px;border-radius:6px;font-size:11px;cursor:pointer;font-weight:700;font-family:'Plus Jakarta Sans', sans-serif;">
              📋 Copiar imagen
            </button>
            <button id="btn-tree-close" style="background:#0c101c;border:1px solid #243048;color:#94A3B8;
              padding:7px 14px;border-radius:6px;font-size:11px;cursor:pointer;font-family:'Plus Jakarta Sans', sans-serif;">
              ✕ Cerrar [Esc]
            </button>
          </div>
        </div>
        <div id="tree-scroll" style="overflow-x:auto;overflow-y:auto;max-height:82vh;
          border:1px solid rgba(29,155,240,0.2);border-radius:10px;background:${C.bg};
          box-shadow:0 0 50px rgba(0,0,0,0.9);">
          <svg id="tree-svg" xmlns="http://www.w3.org/2000/svg"
            width="${svgW}" height="${svgH}" style="display:block;">
            ${svgContent}
          </svg>
        </div>
        <div id="tree-tooltip" style="display:none;position:fixed;z-index:9200;
          background:#0b1120;border:1px solid rgba(29,155,240,0.4);border-radius:8px;
          padding:12px 14px;font-size:12px;color:#fff;min-width:240px;max-width:300px;
          box-shadow:0 12px 40px rgba(0,0,0,0.85);pointer-events:none;line-height:1.5;
          backdrop-filter:blur(8px);font-family:'Plus Jakarta Sans', sans-serif;"></div>
      </div>`;

    overlay.style.display = "flex";

    // ── TOOLTIPS INTERACTIVOS ──
    const tooltip = document.getElementById("tree-tooltip");
    const svg = document.getElementById("tree-svg");

    svg.querySelectorAll(".tree-node.chosen").forEach(node => {
      const idx = parseInt(node.dataset.idx);
      const td = tooltipData[idx];
      if (!td) return;
      node.addEventListener("mouseenter", ev => {
        const snap = td.snap || {};
        const isViral = td.chosen.viral;
        tooltip.innerHTML = `
          <div style="color:${C.trunk};font-weight:800;font-size:12px;margin-bottom:4px;">
            ${td.chosen.icon || "💬"} ${td.chosen.title || "Carta"} &nbsp;
            <span style="color:#64748B;font-size:10px;">(Turno ${log[idx].t})</span>
          </div>
          <div style="color:${td.chosen.ok ? (isViral ? C.pipViral : C.pipOk) : C.pipFail};font-weight:700;">
            ${td.chosen.ok ? (isViral ? "✨ IMPACTO VIRAL" : "✅ TWEET EXITOSO") : "❌ RATIO EN EL TIMELINE"}
            &nbsp;<span style="color:#8b98a9;font-size:10px;font-family:'Space Mono', monospace;">[D${td.chosen.roll}/≤${td.chosen.chance}%]</span>
          </div>
          <hr style="border-color:rgba(255,255,255,0.08);margin:6px 0;">
          <div style="font-weight:600;">👥 ${td.delta.segs >= 0 ? "+" : ""}${(td.delta.segs||0).toLocaleString()} seguidores</div>
          <div>⚡ ${td.delta.eng >= 0 ? "+" : ""}${td.delta.eng||0} engagement</div>
          ${td.delta.hate ? `<div style="color:${C.pipFail};">💀 +${td.delta.hate} odio generado</div>` : ""}
          ${td.chosen.booster ? `<div style="color:${C.trunk};">🚀 Booster: ${td.chosen.booster}</div>` : ""}
          <hr style="border-color:rgba(255,255,255,0.08);margin:6px 0;">
          <div style="color:#64748B;font-size:10px;text-transform:uppercase;">Balance al cierre de turno:</div>
          <div style="font-family:'Space Mono', monospace;font-size:11px;">👥 ${(snap.segs||0).toLocaleString()} &nbsp;·&nbsp; 💰 $${(snap.dinero||0).toLocaleString()} &nbsp;·&nbsp; ❤️ ${snap.salud||0}%</div>`;
        tooltip.style.display = "block";
      });
      node.addEventListener("mousemove", ev => {
        const r = overlay.getBoundingClientRect();
        tooltip.style.left = Math.min(ev.clientX + 16, r.right - 310) + "px";
        tooltip.style.top  = Math.min(ev.clientY + 8,  r.bottom - 210) + "px";
      });
      node.addEventListener("mouseleave", () => { tooltip.style.display = "none"; });
    });

    svg.querySelectorAll(".tree-node.alt").forEach(node => {
      const idx = parseInt(node.dataset.idx);
      const ai  = parseInt(node.dataset.alt);
      const td  = tooltipData[idx];
      if (!td) return;
      const alt = (td.alts || [])[ai];
      if (!alt) return;
      node.addEventListener("mouseenter", ev => {
        tooltip.innerHTML = `
          <div style="color:#94A3B8;font-weight:700;margin-bottom:4px;">
            ${alt.icon || "🃏"} ${alt.title || "Carta descartada"}
          </div>
          <div style="color:${C.pipFail};font-size:10px;font-weight:700;">OPCIÓN DESCARTADA · TURNO ${log[idx].t}</div>
          <div style="color:#64748B;margin-top:4px;font-size:11px;">Esta carta formaba parte de tu mano y decidiste no jugarla.</div>`;
        tooltip.style.display = "block";
      });
      node.addEventListener("mousemove", ev => {
        tooltip.style.left = (ev.clientX + 16) + "px";
        tooltip.style.top  = (ev.clientY + 8)  + "px";
      });
      node.addEventListener("mouseleave", () => { tooltip.style.display = "none"; });
    });

    // ── CIERRE ──
    const closeTree = () => {
      overlay.style.display = "none";
      tooltip.style.display = "none";
      window.removeEventListener("keydown", handleEsc);
    };
    document.getElementById("btn-tree-close").onclick = closeTree;
    const handleEsc = (ev) => { if (ev.key === "Escape") closeTree(); };
    window.addEventListener("keydown", handleEsc);

    // ── COPIA / DESCARGA DE IMAGEN HD ──
    document.getElementById("btn-tree-copy").onclick = () => {
      snd.click();
      const btn = document.getElementById("btn-tree-copy");
      btn.textContent = "⏳ Generando…";
      btn.disabled = true;

      const scale = 2;
      const oc = document.createElement("canvas");
      oc.width  = svgW * scale;
      oc.height = svgH * scale;
      const ctx = oc.getContext("2d");
      ctx.scale(scale, scale);

      const svgEl = document.getElementById("tree-svg");
      const serialized = new XMLSerializer().serializeToString(svgEl);
      const blob = new Blob([serialized], { type: "image/svg+xml" });
      const url  = URL.createObjectURL(blob);
      const img  = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, svgW, svgH);
        URL.revokeObjectURL(url);
        oc.toBlob(pngBlob => {
          if (!pngBlob) { btn.textContent = "❌ Error"; btn.disabled = false; return; }
          const textSummary =
            `Twitero — ${handleText} (${genderedArch})\n` +
            `Final: ${f.titulo}\n` +
            `👥 ${e.seguidores.toLocaleString()} · 💰 $${e.dinero.toLocaleString()} · ❤️ ${e.saludMental}%\n` +
            `${cols} turnos jugados en el timeline`;

          const doCopy = async () => {
            try {
              await navigator.clipboard.write([new ClipboardItem({ "image/png": pngBlob })]);
              return true;
            } catch {
              try { await navigator.clipboard.writeText(textSummary); } catch {}
              const a = document.createElement("a");
              a.href = URL.createObjectURL(pngBlob);
              a.download = `twitero-${e.handle}-arbol.png`;
              a.click();
              return false;
            }
          };

          doCopy().then(ok => {
            btn.textContent = ok ? "✓ ¡Copiado!" : "💾 Descargado";
            btn.style.borderColor = ok ? "#00FF88" : "#FFD700";
            setTimeout(() => {
              btn.textContent = "📋 Copiar imagen";
              btn.style.borderColor = C.trunk;
              btn.disabled = false;
            }, 3000);
          });
        }, "image/png");
      };
      img.onerror = () => { btn.textContent = "❌ Error SVG"; btn.disabled = false; };
      img.src = url;
    };
  }

  // Helper: rounded rect on canvas
  _canvasRoundRect(ctx, x, y, w, h, r, fill, stroke, strokeW) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    if (fill)   { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = strokeW || 1; ctx.stroke(); }
  }
}